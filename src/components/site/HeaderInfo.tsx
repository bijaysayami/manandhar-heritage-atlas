import { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";
import { CalendarDays, CloudSun } from "lucide-react";
import { nepalSambat } from "@/lib/nepal-sambat";

const weekdays = ["आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"];
const weatherText: Record<number, string> = { 0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Cloudy", 45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle", 61: "Rain", 63: "Rain", 65: "Heavy rain", 80: "Showers", 81: "Showers", 82: "Showers", 95: "Thunderstorm" };

export function HeaderInfo() {
  const [date, setDate] = useState<{ bs: string; ns: string; tithi: string } | null>(null);
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);
  useEffect(() => {
    const now = new Date();
    const nd = new NepaliDate(now);
    const lunar = nepalSambat(now);
    setDate({ bs: `${weekdays[now.getDay()]}, ${nd.format("DD MMMM YYYY", "np")}`, ns: lunar.line1, tithi: lunar.line2 });
    fetch("https://api.open-meteo.com/v1/forecast?latitude=27.7172&longitude=85.324&current=temperature_2m,weather_code&timezone=Asia%2FKathmandu")
      .then(r => r.json()).then(d => d?.current && setWeather({ temp: Math.round(d.current.temperature_2m), code: d.current.weather_code })).catch(() => {});
  }, []);
  if (!date) return <div className="hidden flex-1 lg:block" />;
  return <div className="hidden flex-1 items-center justify-end gap-6 pr-4 text-sm lg:flex">
    <div className="flex items-center gap-2 border-r border-border pr-6"><CalendarDays className="size-4 text-primary" /><span className="deva leading-tight"><span className="block">{date.bs}</span><span className="block text-xs text-muted-foreground">{date.ns} {date.tithi}</span></span></div>
    {weather && <div className="flex items-center gap-2"><CloudSun className="size-4 text-secondary" /><span className="leading-tight"><span className="block">{weather.temp}°C · {weatherText[weather.code] ?? "—"}</span><span className="block text-xs text-muted-foreground">Kathmandu</span></span></div>}
  </div>;
}
