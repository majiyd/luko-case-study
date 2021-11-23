import { Inventory } from "../../types";
import api from "../index";

const source = [
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    type: "JEWELRY",
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    type: "MUSIC_INSTRUMENT",
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
];

const addedData: Inventory = {
  id: 3,
  name: "Drum",
  purchasePrice: 250,
  type: "ART",
  photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
};

describe("test api suite", () => {
  it("should get data from api", async () => {
    const response = await api.get();

    expect(response.data).toEqual(source);
  });

  it("should update the api", async () => {
    await api.post(addedData);

    const response = await api.get();

    expect(response.data).toContain(addedData);
  });
});
