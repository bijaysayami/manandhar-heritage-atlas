// IMPORTANT: Do not invent history, names or statistics. Entries marked
// `pending: true` are structural placeholders awaiting verified records from the Sangh.

export type Milestone = { year: string; yearNe: string; title: string; body: string; pending?: boolean };
export const milestones: Milestone[] = [
  { year: "NS 1074", yearNe: "ने.सं. १०७४", title: "Founding of the Sangh", body: "The year inscribed on the official seal of Central Manandhar Sangh." },
  { year: "—", yearNe: "—", title: "Milestone awaiting archive", body: "Verified events from the Sangh's records will be added here.", pending: true },
  { year: "—", yearNe: "—", title: "Milestone awaiting archive", body: "Verified events from the Sangh's records will be added here.", pending: true },
  { year: "—", yearNe: "—", title: "Milestone awaiting archive", body: "Verified events from the Sangh's records will be added here.", pending: true },
];

export type Term = { term: string; president: string; committee: string[]; pending?: boolean };
export const terms: Term[] = Array.from({ length: 4 }).map((_, i) => ({
  term: `Term ${i + 1}`,
  president: "Name to be confirmed",
  committee: ["Committee list awaiting records"],
  pending: true,
}));

export type Twa = { id: string; name: string; nameNe: string; city: string; households?: number; note: string; sample: true };
// Sample rows to demonstrate the directory. Replace with the Sangh's verified register.
export const twas: Twa[] = [
  { id: "t1", name: "Sample Twa A", nameNe: "नमूना त्वाः क", city: "Kathmandu", note: "Example entry — not a verified record.", sample: true },
  { id: "t2", name: "Sample Twa B", nameNe: "नमूना त्वाः ख", city: "Kathmandu", note: "Example entry — not a verified record.", sample: true },
  { id: "t3", name: "Sample Twa C", nameNe: "नमूना त्वाः ग", city: "Lalitpur", note: "Example entry — not a verified record.", sample: true },
  { id: "t4", name: "Sample Twa D", nameNe: "नमूना त्वाः घ", city: "Bhaktapur", note: "Example entry — not a verified record.", sample: true },
  { id: "t5", name: "Sample Twa E", nameNe: "नमूना त्वाः ङ", city: "Kirtipur", note: "Example entry — not a verified record.", sample: true },
  { id: "t6", name: "Sample Twa F", nameNe: "नमूना त्वाः च", city: "Lalitpur", note: "Example entry — not a verified record.", sample: true },
];

export type Publication = { id: string; title: string; kind: "Journal" | "Book" | "Souvenir" | "Report"; year: string; lang: "Nepal Bhasa" | "Nepali" | "English"; pending: true };
export const publications: Publication[] = [
  { id: "p1", title: "Publication title pending", kind: "Souvenir", year: "—", lang: "Nepal Bhasa", pending: true },
  { id: "p2", title: "Publication title pending", kind: "Journal", year: "—", lang: "Nepali", pending: true },
  { id: "p3", title: "Publication title pending", kind: "Book", year: "—", lang: "Nepal Bhasa", pending: true },
  { id: "p4", title: "Publication title pending", kind: "Report", year: "—", lang: "English", pending: true },
  { id: "p5", title: "Publication title pending", kind: "Journal", year: "—", lang: "Nepal Bhasa", pending: true },
  { id: "p6", title: "Publication title pending", kind: "Book", year: "—", lang: "Nepali", pending: true },
];
