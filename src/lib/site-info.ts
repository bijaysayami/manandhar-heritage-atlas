export const siteContact = {
  name: "Kendriya Manandhar Sang",
  address: "Chettrapati, Kathmandu, Nepal.",
  phones: ["9845123412", "9841823623"],
};
export const facebookUrl = "https://www.facebook.com/profile.php?id=100085430738736";
export const languages = ["en", "ne", "new"] as const;
export type Language = (typeof languages)[number];
export function validLanguage(value: unknown): value is Language {
  return value === "en" || value === "ne" || value === "new";
}