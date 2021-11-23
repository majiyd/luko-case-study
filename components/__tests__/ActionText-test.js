import * as React from "react";
import renderer from "react-test-renderer";
import ActionText from "../ActionText";

const onPress = jest.fn();

describe("ActionText", () => {
  it("ActionText renders correctly", () => {
    const tree = renderer.create(<ActionText>Add</ActionText>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("Disable ActionText is not pressable", () => {

  // })
});
