import * as itemConst from "../constants/action-types";

export const setItem = items => ({
  type: itemConst.ADD_ITEM,
  payload: items
});
