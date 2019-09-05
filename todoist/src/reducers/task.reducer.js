import * as itemConst from "../constants/action-types";
import * as taskConst from "../constants/action-types";
// import _ from "lodash";

const initialState = {
  items: [],
  tasktitle: null,
  data: null
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case itemConst.ADD_ITEM:
      return { items: [...state.items, action.payload] };
    case taskConst.SET_TASKTITLE:
      return { ...state, tasktitle: action.payload };
    default:
      return state;
  }
};

export default task;
