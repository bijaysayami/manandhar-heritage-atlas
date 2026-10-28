import { describe, it, expect } from "vitest";
import { nepalSambat } from "@/lib/nepal-sambat";
describe("nepalSambat", () => {
  it("28 Oct 2026 is NS 1146 Kaulaga, Kartik Krishna Dwitiya", () => {
    const r = nepalSambat(new Date("2026-10-28T06:00:00Z"));
    expect(r.line1).toBe("ने.सं. ११४६, कौलागा");
    expect(r.line2).toBe("कात्तिक कृष्ण द्वितीया");
  });
  it("Mha Puja 2025 (22 Oct) starts NS 1146", () => {
    expect(nepalSambat(new Date("2025-10-22T06:00:00Z")).year).toBe(1146);
  });
});
