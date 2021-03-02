import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, DELETE_ITEMS, ADD_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Water" },
    { id: uuidv4(), name: "Milk"}
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return { ...state };
  }
}