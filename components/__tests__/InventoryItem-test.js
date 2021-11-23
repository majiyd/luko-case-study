import * as React from "react";
import renderer from "react-test-renderer";
import InventoryItem from "../InventoryItem";

const details = {
  id: 1,
  name: "Cartier ring",
  purchasePrice: 5780,
  type: "JEWELRY",
  description: "Gift from my grandfather",
  photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
}

it(" InventoryItem renders correctly", () => {
  const tree = renderer.create(<InventoryItem details={details} />).toJSON();
  expect(tree).toMatchSnapshot();
});
