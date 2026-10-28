import { describe, expect, it } from "vitest";
import { facebookUrl, languages, siteContact, validLanguage } from "@/lib/site-info";
describe("Confirmed Sangh requirements", () => {
  it("uses the supplied contact address", () => {
    expect(siteContact.name).toBe("Kendriya Manandhar Sang");
    expect(siteContact.address).toBe("Chettrapati, Kathmandu, Nepal.");
  });
  it("uses both supplied phone numbers", () => {
    expect(siteContact.phones).toEqual(["9845123412", "9841823623"]);
  });
  it("uses the supplied Facebook profile", () => {
    expect(facebookUrl).toBe("https://www.facebook.com/profile.php?id=100085430738736");
  });
  it("accepts only English, Nepali and Newari locales", () => {
    expect(languages).toEqual(["en", "ne", "new"]);
    expect(validLanguage("new")).toBe(true);
    expect(validLanguage("fr")).toBe(false);
  });
});