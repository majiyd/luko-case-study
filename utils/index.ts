import api from "../api";

export const canAddInvetory = async (value: number): Promise<boolean> => {
  try {
    if (!value) return false;
    const currentInventories = (await api.get()).data;

    const currentTotal = currentInventories.reduce((accumulator, item) => {
      return accumulator + item.purchasePrice;
    }, 0);

    return currentTotal + value <= 40000;
  } catch (error) {
    return false;
  }
};
