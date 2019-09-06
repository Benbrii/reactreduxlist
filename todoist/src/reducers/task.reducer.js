import * as itemConst from "../constants/action-types";
import * as idConst from "../constants/action-types";
// import _ from "lodash";

const initialState = {
  items: [],
  itemsCompleted: null,
  idActive: null
};

const task = (state = initialState, action) => {
  switch (action.type) {
    case itemConst.ADD_ITEM:
      return { items: [...state.items, action.payload] };
    case idConst.SET_ID_ACTIVE:
      return { ...state, idActive: action.payload };
    case itemConst.COMPLETED_ITEM:
      let newitems = state.items.filter(function(item) {
        console.log(state.items);
        console.log(state.idActive);
        return item !== state.idActive;
      });
      //return {...state, itemsCompleted: action.payload};
      return { ...state, items: newitems, itemsCompleted: action.payload };

    //{ ...state, itemsCompleted: action.payload };
    default:
      return state;
  }
};

export default task;
