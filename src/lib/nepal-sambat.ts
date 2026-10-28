// Approximate lunar (Nepal Sambat) date from sun/moon longitudes at Kathmandu sunrise.
// Accuracy is within a few hours of a tithi change; adhik (leap) months are not handled.
const rad = Math.PI / 180;
const norm = (x: number) => ((x % 360) + 360) % 360;
const jd = (d: Date) => d.getTime() / 86400000 + 2440587.5;

function longitudes(j: number) {
  const T = (j - 2451545) / 36525;
  const M = (357.52911 + 35999.05029 * T) * rad;
  const sun = 280.46646 + 36000.76983 * T + (1.914602 - 0.004817 * T) * Math.sin(M) + 0.019993 * Math.sin(2 * M) + 0.000289 * Math.sin(3 * M);
  const D = (297.8501921 + 445267.1114034 * T) * rad;
  const Mp = (134.9633964 + 477198.8675055 * T) * rad;
  const F = (93.272095 + 483202.0175233 * T) * rad;
  const moon = 218.3164477 + 481267.88123421 * T + 6.288774 * Math.sin(Mp) + 1.274027 * Math.sin(2 * D - Mp) + 0.658314 * Math.sin(2 * D)
    + 0.213618 * Math.sin(2 * Mp) - 0.185116 * Math.sin(M) - 0.114332 * Math.sin(2 * F) + 0.058793 * Math.sin(2 * D - 2 * Mp)
    + 0.057066 * Math.sin(2 * D - M - Mp) + 0.053322 * Math.sin(2 * D + Mp) + 0.045758 * Math.sin(2 * D - M) - 0.040923 * Math.sin(M - Mp)
    - 0.03472 * Math.sin(D) - 0.030383 * Math.sin(M + Mp);
  return { sun: norm(sun), moon: norm(moon) };
}
export const elongation = (j: number) => { const l = longitudes(j); return norm(l.moon - l.sun); };

function previousNewMoon(j: number) {
  let a = j - elongation(j) / 12.19; // rough estimate
  for (let i = 0; i < 4; i++) { const e = elongation(a); a -= (e > 180 ? e - 360 : e) / 12.19; }
  return a;
}

const nsMonths = ["कछला", "थिंला", "पोहेला", "सिल्ला", "चिल्ला", "चौला", "बछला", "तछला", "दिल्ला", "गुंला", "ञला", "कौला"];
const npMonths = ["कात्तिक", "मंसिर", "पुस", "माघ", "फागुन", "चैत", "वैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज"];
const tithis = ["प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी", "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी"];
const digits = (n: number) => String(n).replace(/\d/g, d => "०१२३४५६७८९".charAt(Number(d)));

export function nepalSambat(now: Date) {
  // Sunrise in Kathmandu ≈ 06:15 NPT = 00:30 UTC of the local calendar day.
  const local = new Date(now.getTime() + 345 * 60000);
  const sunrise = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate(), 0, 30);
  const j = jd(new Date(sunrise));
  const t = Math.floor(elongation(j) / 12); // 0..29
  const nm = previousNewMoon(j);
  const ayanamsa = 23.85 + (local.getUTCFullYear() - 2000) * 0.01397;
  const rashi = Math.floor(norm(longitudes(nm).sun - ayanamsa) / 30); // 0 = Mesha
  const month = (rashi - 6 + 12) % 12; // 0 = Kachhala (sun in Tula at new moon)
  const kachhalaStart = new Date((nm - month * 29.53 + 5 - 2440587.5) * 86400000);
  const year = kachhalaStart.getUTCFullYear() - 879;
  const shukla = t < 15;
  const tithi = t === 14 ? "पूर्णिमा" : t === 29 ? "औंसी" : tithis[t % 15];
  return {
    year,
    line1: `ने.सं. ${digits(year)}, ${nsMonths[month]}${shukla ? "थ्व" : "गा"}`,
    line2: `${npMonths[shukla ? month : (month + 1) % 12]} ${shukla ? "शुक्ल" : "कृष्ण"} ${tithi}`,
  };
}
