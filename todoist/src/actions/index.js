import {
  ADD_ITEM,
  COMPLETED_ITEM,
  ADD_DESCRIPTION
} from "../constants/action-types";

export function addItem(payload) {
  return { type: ADD_ITEM, payload };
}

export function completedItem(payload) {
  return { type: COMPLETED_ITEM, payload };
}

export function addDescription(payload) {
  return { type: ADD_DESCRIPTION, payload };
}
