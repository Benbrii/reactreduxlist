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
      let newitems = state.items.filter((item, i) => i !== state.idActive);
      return { ...state, items: newitems, itemsCompleted: action.payload };
    case itemConst.ADD_DESCRIPTION:
      let newItems = [];
      state.items.map((item, index) => {
        if (index === state.idActive) {
          // Modifier la description
          item.description = action.payload.description;
          newItems.push(item);
        } else {
          // Retourner item dans le tableau
          newItems.push(item);
        }
      });
      return { ...state, items: newItems };
    //{ ...state, itemsCompleted: action.payload };
    default:
      return state;
  }
};

export default task;
