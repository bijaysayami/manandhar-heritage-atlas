import { describe, expect, it } from "vitest";
import { faceEntries, sampleJobs, sampleMatrimonial, samplePravas, sampleServices, serviceCategoryLabels } from "@/data/community-hub";
import { sampleEvents } from "@/data/homepage-samples";

describe("Static community hub previews", () => {
  it("marks every fictional hub record as a sample", () => {
    expect([...faceEntries, ...sampleJobs, ...sampleMatrimonial, ...samplePravas, ...sampleServices].every(entry => entry.sample === true)).toBe(true);
  });

  it("provides both Sangh and twa event samples", () => {
    expect(sampleEvents.filter(event => event.organizer === "sangh")).toHaveLength(3);
    expect(sampleEvents.filter(event => event.organizer === "twa")).toHaveLength(2);
  });

  it("keeps public matrimonial samples anonymous and free of direct contact fields", () => {
    for (const profile of sampleMatrimonial) {
      expect(profile.id.startsWith("SAMPLE-")).toBe(true);
      expect(profile).not.toHaveProperty("name");
      expect(profile).not.toHaveProperty("photo");
      expect(profile).not.toHaveProperty("phone");
      expect(profile).not.toHaveProperty("email");
      expect(profile).not.toHaveProperty("contact");
    }
  });

  it("covers the requested electrician and mixer-repair searches without contact details", () => {
    expect(sampleServices.some(service => service.category === "electrical" && service.keywords.includes("electrician"))).toBe(true);
    expect(sampleServices.some(service => service.category === "appliances" && service.keywords.includes("mixer"))).toBe(true);
    for (const service of sampleServices) {
      expect(serviceCategoryLabels[service.category]).toBeDefined();
      expect(service).not.toHaveProperty("phone");
      expect(service).not.toHaveProperty("email");
    }
  });
});
