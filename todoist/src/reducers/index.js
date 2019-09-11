import { combineReducers } from "redux";
import task from "./task.reducer";

// Dans les cas où il y aurai plusieurs reducer, on peut les combiner ici
// (j'utilise qu'un seul reducer "task" pour ce cas là)

export default combineReducers({
  task
});
