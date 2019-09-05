import * as taskConst from "../constants/action-types";

export const setTasktitle = tasktitle => ({
  type: taskConst.SET_TASKTITLE,
  payload: tasktitle
});
