import { describe, it, expect } from "vitest";
import { sampleEvents, sampleBlogs } from "@/data/homepage-samples";

describe("Static homepage sample content", () => {
  it("keeps all fictional entries explicitly marked as samples", () => {
    expect([...sampleEvents, ...sampleBlogs].every(entry => entry.sample === true)).toBe(true);
    expect(sampleEvents).toHaveLength(3);
    expect(sampleBlogs).toHaveLength(3);
  });
  it("includes Indra Jatra, a meeting and a publication without invented event dates", () => {
    expect(sampleEvents.map(entry => entry.id)).toEqual(["indra-jatra", "community-meeting", "book-publication"]);
    expect(sampleEvents.some(entry => "date" in entry)).toBe(false);
  });
});