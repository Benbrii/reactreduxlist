import { ADD_ITEM, REMOVE_ITEM } from "../constants/action-types";
import _ from "lodash";

const initialState = {
  items: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return { items: state.items.concat(action.payload) };
  }
  if (action.type === REMOVE_ITEM) {
    console.log(_.pullAt(state.items, action.index));
    return {
      items: state.items.filter((item, index) => action.index !== index)
    };
  }
  return state;
}

export default rootReducer;
