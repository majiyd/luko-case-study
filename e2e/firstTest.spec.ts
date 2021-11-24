import { by, element, expect } from "detox";
import { reloadApp } from "detox-expo-helpers";

describe("Authentication tests", () => {
  beforeAll(async () => {
    await reloadApp({ permissions: { camera: "YES" } });
  });

  test("Inventory page should be visible ", () => {
    expect(element(by.text("Inventory"))).toExist();
  });

  test("Inventory page should have children", async () => {
    await expect(element(by.id("Guitar"))).toExist();
  });

  test("Add inventory", async () => {
    await element(by.id("add")).tap();
    await element(by.id("open-camera")).tap();
    await element(by.id("snap")).toBeVisible();
  });
});
