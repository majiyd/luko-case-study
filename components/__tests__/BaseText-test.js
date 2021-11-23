import * as React from "react";
import renderer from "react-test-renderer";
import BaseText from "../BaseText";

it(" InventoryItem renders correctly", () => {
  const tree = renderer.create(<BaseText>HIIII</BaseText>).toJSON();
  expect(tree).toMatchSnapshot();
});
