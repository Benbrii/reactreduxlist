import { ADD_ITEM, COMPLETED_ITEM } from "../constants/action-types";

export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function completedItem(payload) {
  return { type: COMPLETED_ITEM, payload };
}
