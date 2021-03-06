import { v4 as uuidv4 } from "uuid";
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types";

const initialState = {
  items: [
    { id: uuidv4(), name: "Eggs" },
    { id: uuidv4(), name: "Water" },
    { id: uuidv4(), name: "Milk"}
  ],
};

export default function itemActions(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
      case DELETE_ITEM:
        return{
          ...state,
          items: state.items.filter(item => item.id !== action.payload)
        }
        case ADD_ITEM:
          return{
            ...state,
            items: [action.payload, ...state.items]
          }
    default:
      return { ...state };
  }
}
