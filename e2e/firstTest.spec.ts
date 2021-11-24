import { by, element, expect } from "detox";
// @ts-ignore
import { reloadApp } from "detox-expo-helpers";

describe("Authentication tests", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("should change the text when buttons are pressed", async () => {
    await expect(element(by.id("MainText"))).toExist();
  });
});
