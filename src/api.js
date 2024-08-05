import axios from 'axios';

const { NinjaAPI } = require("poe-api-manager");

const ninjaAPI = new NinjaAPI("Standard"); // League name
const requestedProperties = ["id", "name", "divineValue", "explicitModifiers", "icon"];

const fetchItemPrice = async (itemName) => {
  try {
    const theItem = await ninjaAPI.itemView.uniqueAccessory.getData(requestedProperties);
    const itemOut = theItem.find(item => item.name === itemName);

    if (itemOut) {
      return itemOut;
    } else {
      throw new Error(`${itemName} not found.`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchItemPrice };
