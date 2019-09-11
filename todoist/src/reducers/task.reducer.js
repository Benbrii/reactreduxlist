import * as itemConst from "../constants/action-types";
import * as idConst from "../constants/action-types";

// initialisation des différents state

const initialState = {
  items: [],
  itemsCompleted: null,
  idActive: null
};

// créer une constante "task" avec le state initial et lui donner les actions
// puis on switch case les différents type d'action
// chaque case return un NOUVEAU state ou un concaténation dans un state vide
// (puis penser à toujours recréer une variable, puis de modifier entièrement le state du reducer avec cette nouvelle variable, CF case ADD_DATE ou ADD_DESCRIPTION)

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
      // eslint-disable-next-line array-callback-return
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
    case itemConst.ADD_DATE:
      let newItemswithDate = [];
      // eslint-disable-next-line array-callback-return
      state.items.map((item, index) => {
        if (index === state.idActive) {
          // Modifier/ajoute la date
          item.startdate = action.payload.startdate;
          newItemswithDate.push(item);
        } else {
          // Retourner le nouveau tableau avec la date
          newItemswithDate.push(item);
        }
      });
      return { ...state, items: newItemswithDate };
    default:
      return state;
  }
};

export default task;
