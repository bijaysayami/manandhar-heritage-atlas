import type { LocalCopy } from "./homepage-samples";

export type FaceEntry = {
  id: string;
  sample: true;
  image: "elder" | "meeting" | "books";
  name: LocalCopy;
  role: LocalCopy;
  introduction: LocalCopy;
  contribution: LocalCopy;
};

export const faceEntries: FaceEntry[] = [
  {
    id: "sample-featured-contributor",
    sample: true,
    image: "elder",
    name: ["Sample community contributor", "नमूना सामुदायिक योगदानकर्ता", "नमूना सामुदायिक योगदानकर्ता"],
    role: ["Face of the Month preview", "फेस अफ द मन्थको नमूना", "फेस अफ द मन्थया नमूना"],
    introduction: [
      "This space will introduce a verified Manandhar community member: their story, the work they care about and the experiences that shaped their journey.",
      "यहाँ पुष्टि भएका मानन्धर समुदायका सदस्यको परिचय, उहाँले गर्नुभएको कार्य र यात्राका अनुभव प्रस्तुत गरिनेछ।",
      "थन पुष्टि जूगु मानन्धर समुदायया मनूया परिचय, ज्या व अनुभव प्रस्तुत जुइ।",
    ],
    contribution: [
      "A future feature can document their contribution in detail—from cultural preservation and teaching to volunteering, entrepreneurship or support for a twa. This illustrated entry is fictional and does not describe a real person.",
      "भविष्यमा संस्कृति संरक्षण, शिक्षा, स्वयंसेवा, उद्यम वा त्वाःलाई सहयोगजस्ता योगदानको विस्तृत विवरण राख्न सकिनेछ। यो चित्रात्मक विवरण काल्पनिक हो र कुनै वास्तविक व्यक्तिको होइन।",
      "संस्कृति संरक्षण, शिक्षा, स्वयंसेवा वा त्वाः सहयोगया विस्तृत योगदान थन बियेयाइ। थ्व चित्रात्मक विवरण काल्पनिक खः, वास्तविक मनूया मखु।",
    ],
  },
  {
    id: "sample-culture-archive",
    sample: true,
    image: "meeting",
    name: ["Sample archive · Culture", "नमूना अभिलेख · संस्कृति", "नमूना अभिलेख · संस्कृति"],
    role: ["Cultural volunteer", "सांस्कृतिक स्वयंसेवक", "सांस्कृतिक स्वयंसेवक"],
    introduction: ["An archive placeholder for someone helping cultural knowledge pass between generations.", "पुस्ताहरूबीच सांस्कृतिक ज्ञान हस्तान्तरण गर्ने व्यक्तिका लागि नमूना अभिलेख।", "पुस्तातया नापं सांस्कृतिक ज्ञान बिइपिं मनूया नमूना अभिलेख।"],
    contribution: ["Their approved story could include workshops, mentorship and the people or twa involved.", "स्वीकृत कथामा कार्यशाला, मार्गदर्शन र सम्बन्धित व्यक्ति वा त्वाःको विवरण समेट्न सकिन्छ।", "स्वीकृत बाखंय् कार्यशाला, मार्गदर्शन व सम्बन्धित त्वाःया विवरण दानासकिं।"],
  },
  {
    id: "sample-service-archive",
    sample: true,
    image: "books",
    name: ["Sample archive · Service", "नमूना अभिलेख · सेवा", "नमूना अभिलेख · सेवा"],
    role: ["Community volunteer", "सामुदायिक स्वयंसेवक", "सामुदायिक स्वयंसेवक"],
    introduction: ["An archive placeholder for a member whose quiet service made everyday community life easier.", "सामुदायिक जीवन सहज बनाउने सदस्यको नमूना अभिलेख।", "सामुदायिक जीवन सहज यानादिपिं मनूया नमूना अभिलेख।"],
    contribution: ["Verified examples, photographs and reflections from beneficiaries can be added with permission.", "सहमतिसहित पुष्टि भएका उदाहरण, तस्बिर र अनुभव थप्न सकिनेछ।", "सहमतिं पुष्टि जूगु उदाहरण, किपा व अनुभव थप यायेयाइ।"],
  },
  {
    id: "sample-pravas-archive",
    sample: true,
    image: "elder",
    name: ["Sample archive · Pravas", "नमूना अभिलेख · प्रवास", "नमूना अभिलेख · प्रवास"],
    role: ["Pravas contributor", "प्रवासी योगदानकर्ता", "प्रवासी योगदानकर्ता"],
    introduction: ["An archive placeholder for a Manandhar living abroad and staying connected with home.", "विदेशमा बस्दा पनि घरसँग जोडिएका मानन्धरको नमूना अभिलेख।", "प्रवासय् च्वनाः नं छेँ नाप ज्वानाच्वंपिं मानन्धरया नमूना अभिलेख।"],
    contribution: ["A future story may explore mentoring, cultural participation and support across borders.", "भविष्यको कथामा मार्गदर्शन, सांस्कृतिक सहभागिता र सीमापार सहयोग समेट्न सकिनेछ।", "न्हूगु बाखंय् मार्गदर्शन, सांस्कृतिक सहभागिता व सीमापार सहयोग दानासकिं।"],
  },
];

export type ServiceCategory = "electrical" | "appliances" | "plumbing" | "carpentry" | "technology" | "creative";
export const serviceCategoryLabels: Record<"all" | ServiceCategory, LocalCopy> = {
  all: ["All services", "सबै सेवा", "सकल सेवा"],
  electrical: ["Electrical", "इलेक्ट्रिकल", "इलेक्ट्रिकल"],
  appliances: ["Appliance repair", "उपकरण मर्मत", "उपकरण मर्मत"],
  plumbing: ["Plumbing", "प्लम्बिङ", "प्लम्बिङ"],
  carpentry: ["Carpentry", "सिकर्मी", "सिकर्मी"],
  technology: ["Technology", "प्रविधि", "प्रविधि"],
  creative: ["Creative & cultural", "सिर्जना र संस्कृति", "सिर्जना व संस्कृति"],
};
export type ServiceEntry = {
  id: string;
  sample: true;
  category: ServiceCategory;
  name: LocalCopy;
  summary: LocalCopy;
  area: LocalCopy;
  keywords: string[];
};
export const sampleServices: ServiceEntry[] = [
  { id: "sample-electrician", sample: true, category: "electrical", name: ["Sample home electrician", "नमूना घर इलेक्ट्रिसियन", "नमूना छेँ इलेक्ट्रिसियन"], summary: ["Wiring, lights, switches and household electrical checks.", "वायरिङ, बत्ती, स्विच र घरका विद्युतीय जाँच।", "वायरिङ, बत्ती, स्विच व छेँया विद्युतीय जाँच।"], area: ["Kathmandu Valley", "काठमाडौं उपत्यका", "येँ उपत्यका"], keywords: ["electrician", "wiring", "light", "switch", "बत्ती", "इलेक्ट्रिसियन"] },
  { id: "sample-mixer-repair", sample: true, category: "appliances", name: ["Sample mixer & appliance repair", "नमूना मिक्सर र उपकरण मर्मत", "नमूना मिक्सर व उपकरण मर्मत"], summary: ["Diagnosis and repair for mixers, grinders and small kitchen appliances.", "मिक्सर, ग्राइन्डर र साना भान्साका उपकरणको जाँच तथा मर्मत।", "मिक्सर, ग्राइन्डर व भान्साया उपकरणया जाँच व मर्मत।"], area: ["Kathmandu & Lalitpur", "काठमाडौं र ललितपुर", "येँ व यल"], keywords: ["mixer", "grinder", "technician", "repair", "मिक्सर", "मर्मत"] },
  { id: "sample-plumber", sample: true, category: "plumbing", name: ["Sample plumbing service", "नमूना प्लम्बिङ सेवा", "नमूना प्लम्बिङ सेवा"], summary: ["Leaks, blocked drains and bathroom fittings.", "चुहावट, नली अवरोध र बाथरुमका फिटिङ।", "चुहावट, नली अवरोध व बाथरुमया फिटिङ।"], area: ["Kathmandu Valley", "काठमाडौं उपत्यका", "येँ उपत्यका"], keywords: ["plumber", "leak", "drain", "tap", "नली", "प्लम्बर"] },
  { id: "sample-carpenter", sample: true, category: "carpentry", name: ["Sample furniture & woodwork", "नमूना फर्निचर र काठकाम", "नमूना फर्निचर व काठ ज्या"], summary: ["Furniture repair, fittings and small custom woodwork.", "फर्निचर मर्मत, फिटिङ र साना काठका काम।", "फर्निचर मर्मत, फिटिङ व काठया ज्या।"], area: ["Lalitpur & Bhaktapur", "ललितपुर र भक्तपुर", "यल व ख्वप"], keywords: ["carpenter", "wood", "furniture", "सिकर्मी", "फर्निचर"] },
  { id: "sample-computer", sample: true, category: "technology", name: ["Sample computer support", "नमूना कम्प्युटर सहयोग", "नमूना कम्प्युटर सहयोग"], summary: ["Basic computer setup, troubleshooting and digital assistance.", "कम्प्युटर सेटअप, समस्या समाधान र डिजिटल सहयोग।", "कम्प्युटर सेटअप, समस्या समाधान व डिजिटल सहयोग।"], area: ["In person & remote", "प्रत्यक्ष र अनलाइन", "प्रत्यक्ष व अनलाइन"], keywords: ["computer", "laptop", "technician", "internet", "कम्प्युटर", "प्रविधि"] },
  { id: "sample-music", sample: true, category: "creative", name: ["Sample traditional music tutor", "नमूना परम्परागत बाजा प्रशिक्षक", "नमूना परम्परागत बाजा प्रशिक्षक"], summary: ["Introductory learning and cultural workshop support.", "परम्परागत बाजाको प्रारम्भिक सिकाइ र सांस्कृतिक कार्यशाला सहयोग।", "परम्परागत बाजाया सिकाइ व सांस्कृतिक कार्यशाला सहयोग।"], area: ["Kathmandu Valley", "काठमाडौं उपत्यका", "येँ उपत्यका"], keywords: ["music", "dhaa", "dhime", "teacher", "बाजा", "धा", "धिमे"] },
];

export type JobEntry = {
  id: string;
  sample: true;
  title: LocalCopy;
  organisation: LocalCopy;
  location: LocalCopy;
  type: LocalCopy;
  summary: LocalCopy;
};
export const sampleJobs: JobEntry[] = [
  { id: "sample-admin", sample: true, title: ["Community programme assistant", "सामुदायिक कार्यक्रम सहायक", "सामुदायिक कार्यक्रम सहायक"], organisation: ["Sample community organisation", "नमूना सामुदायिक संस्था", "नमूना सामुदायिक संस्था"], location: ["Kathmandu", "काठमाडौं", "येँ"], type: ["Part time", "आंशिक समय", "आंशिक ई"], summary: ["A sample vacancy for coordinating gatherings, records and community communication.", "भेला, अभिलेख र सामुदायिक सम्पर्क व्यवस्थापनको नमूना रोजगारी।", "मुंकागु, अभिलेख व सामुदायिक सम्पर्कया नमूना ज्या।"] },
  { id: "sample-technician", sample: true, title: ["Appliance repair technician", "उपकरण मर्मत प्राविधिक", "उपकरण मर्मत प्राविधिक"], organisation: ["Sample local service", "नमूना स्थानीय सेवा", "नमूना स्थानीय सेवा"], location: ["Lalitpur", "ललितपुर", "यल"], type: ["Full time", "पूर्ण समय", "पूर्ण ई"], summary: ["A sample listing for diagnosing and repairing household appliances.", "घरायसी उपकरण जाँच र मर्मत गर्ने नमूना रोजगारी।", "घरायसी उपकरण जाँच व मर्मत याइगु नमूना ज्या।"] },
  { id: "sample-language", sample: true, title: ["Nepal Bhasa workshop volunteer", "नेपाल भाषा कार्यशाला स्वयंसेवक", "नेपाल भाषा कार्यशाला स्वयंसेवक"], organisation: ["Sample cultural group", "नमूना सांस्कृतिक समूह", "नमूना सांस्कृतिक समूह"], location: ["Bhaktapur", "भक्तपुर", "ख्वप"], type: ["Volunteer", "स्वयंसेवा", "स्वयंसेवा"], summary: ["A sample opportunity to support learning sessions for children and families.", "बालबालिका र परिवारका सिकाइ सत्रमा सहयोग गर्ने नमूना अवसर।", "कायत व परिवारया सिकाइ सत्रय् सहयोग याइगु नमूना अवसर।"] },
  { id: "sample-remote", sample: true, title: ["Digital archive helper", "डिजिटल अभिलेख सहायक", "डिजिटल अभिलेख सहायक"], organisation: ["Sample heritage project", "नमूना सम्पदा परियोजना", "नमूना सम्पदा परियोजना"], location: ["Remote · Pravas welcome", "अनलाइन · प्रवासीलाई स्वागत", "अनलाइन · प्रवासीत लसकुस"], type: ["Flexible", "लचिलो", "लचिलो"], summary: ["A sample remote role for organising approved photographs, writing and recordings.", "स्वीकृत तस्बिर, लेख र रेकर्डिङ व्यवस्थित गर्ने नमूना अनलाइन भूमिका।", "स्वीकृत किपा, लेख व रेकर्डिङ व्यवस्थित याइगु नमूना अनलाइन ज्या।"] },
];

export type MatrimonialEntry = {
  id: string;
  sample: true;
  seeking: LocalCopy;
  ageBand: string;
  location: LocalCopy;
  education: LocalCopy;
  profession: LocalCopy;
  about: LocalCopy;
  preferences: LocalCopy;
};
export const sampleMatrimonial: MatrimonialEntry[] = [
  { id: "SAMPLE-M01", sample: true, seeking: ["Seeking a bride", "वधु खोज्दै", "वधु मालाच्वंगु"], ageBand: "30–34", location: ["Kathmandu Valley", "काठमाडौं उपत्यका", "येँ उपत्यका"], education: ["Graduate · sample", "स्नातक · नमूना", "स्नातक · नमूना"], profession: ["Technology · sample", "प्रविधि · नमूना", "प्रविधि · नमूना"], about: ["A fictional anonymous profile interested in family, reading and community activities.", "परिवार, अध्ययन र सामुदायिक गतिविधिमा रुचि भएको काल्पनिक गोप्य प्रोफाइल।", "परिवार, अध्ययन व सामुदायिक गतिविधिय् रुचि दूपिं काल्पनिक गोप्य प्रोफाइल।"], preferences: ["Open to matches in Nepal or abroad; values respectful communication.", "नेपाल वा विदेशका सम्बन्धमा खुला; सम्मानजनक संवादमा विश्वास।", "नेपाल वा प्रवासया सम्बन्धय् खुला; सम्मानजनक संवादय् विश्वास।"] },
  { id: "SAMPLE-M02", sample: true, seeking: ["Seeking a groom", "वर खोज्दै", "वर मालाच्वंगु"], ageBand: "27–31", location: ["Lalitpur", "ललितपुर", "यल"], education: ["Postgraduate · sample", "स्नातकोत्तर · नमूना", "स्नातकोत्तर · नमूना"], profession: ["Education · sample", "शिक्षा · नमूना", "शिक्षा · नमूना"], about: ["A fictional anonymous profile interested in teaching, music and volunteering.", "शिक्षा, संगीत र स्वयंसेवामा रुचि भएको काल्पनिक गोप्य प्रोफाइल।", "शिक्षा, संगीत व स्वयंसेवाय् रुचि दूपिं काल्पनिक गोप्य प्रोफाइल।"], preferences: ["Prefers a supportive partner who values family and personal goals.", "परिवार र व्यक्तिगत लक्ष्यलाई महत्व दिने सहयोगी जीवनसाथीको अपेक्षा।", "परिवार व व्यक्तिगत लक्ष्यय् महत्व बिइपिं सहयोगी जीवनसाथी मतिना।"] },
  { id: "SAMPLE-M03", sample: true, seeking: ["Seeking a bride", "वधु खोज्दै", "वधु मालाच्वंगु"], ageBand: "32–36", location: ["Pravas · country withheld", "प्रवास · देश गोप्य", "प्रवास · देय् गोप्य"], education: ["Graduate · sample", "स्नातक · नमूना", "स्नातक · नमूना"], profession: ["Business · sample", "व्यवसाय · नमूना", "व्यवसाय · नमूना"], about: ["A fictional Pravas profile with a broad location shown for additional privacy.", "थप गोपनीयताका लागि सामान्य स्थान मात्र देखाइएको काल्पनिक प्रवासी प्रोफाइल।", "थप गोपनीयताया निंतिं सामान्य थास जक क्यनातःगु काल्पनिक प्रवासी प्रोफाइल।"], preferences: ["Open to relocation discussions and regular visits to Nepal.", "बसाइँसराइबारे छलफल र नेपाल भ्रमणमा खुला।", "बसाइँसराइया छलफल व नेपाल भ्रमणय् खुला।"] },
];

export type PravasEntry = { id: string; sample: true; place: LocalCopy; title: LocalCopy; summary: LocalCopy };
export const samplePravas: PravasEntry[] = [
  { id: "sample-australia", sample: true, place: ["Australia · sample circle", "अस्ट्रेलिया · नमूना समूह", "अस्ट्रेलिया · नमूना समूह"], title: ["Keeping a cultural connection abroad", "विदेशमा सांस्कृतिक सम्बन्ध कायम", "प्रवासय् सांस्कृतिक सम्बन्ध"], summary: ["A placeholder for gatherings, language learning and mutual support among Manandhar families abroad.", "विदेशका मानन्धर परिवारबीच भेटघाट, भाषा सिकाइ र आपसी सहयोगको नमूना स्थान।", "प्रवासया मानन्धर परिवारया भेटघाट, भाषा सिकाइ व आपसी सहयोगया नमूना थास।"] },
  { id: "sample-japan", sample: true, place: ["Japan · sample circle", "जापान · नमूना समूह", "जापान · नमूना समूह"], title: ["Pravas experiences, shared", "प्रवासका अनुभव साझा", "प्रवासया अनुभव साझा"], summary: ["A future space for practical experiences, mentoring and stories from everyday life overseas.", "विदेशको दैनिक जीवन, व्यावहारिक अनुभव, मार्गदर्शन र कथाका लागि सम्भावित स्थान।", "प्रवासया न्हिन्हीया जीवन, अनुभव, मार्गदर्शन व बाखंया निंतिं थास।"] },
  { id: "sample-global", sample: true, place: ["Global · sample network", "विश्वव्यापी · नमूना सञ्जाल", "हलिम · नमूना सञ्जाल"], title: ["Contributing from wherever you are", "जहाँ भए पनि योगदान", "गथे नं च्वनाः नं योगदान"], summary: ["A preview of ways Pravas members might support archives, skills, mentoring and community projects.", "प्रवासी सदस्यले अभिलेख, सीप, मार्गदर्शन र सामुदायिक परियोजनामा योगदान गर्ने नमूना अवसर।", "प्रवासी मनूतं अभिलेख, सीप, मार्गदर्शन व सामुदायिक परियोजनाय् योगदान याइगु नमूना अवसर।"] },
];
