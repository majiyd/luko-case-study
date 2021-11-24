import { canAddInvetory } from "../index";

describe("canAddInvetory", () => {
  it("should return false", async () => {
    const shouldBeFalse = await canAddInvetory(40000);
    expect(shouldBeFalse).toBeFalse;
  });

  it("should return true", async () => {
    const shouldBeFalse = await canAddInvetory(400);
    expect(shouldBeFalse).toBeTrue;
  });
});
