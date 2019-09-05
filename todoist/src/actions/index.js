import { ADD_ITEM, REMOVE_ITEM } from "../constants/action-types";

export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function deleteItem(index) {
  return { type: REMOVE_ITEM, index };
}
