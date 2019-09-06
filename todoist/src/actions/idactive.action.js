import * as idConst from "../constants/action-types";

export const setIdActive = idActive => ({
  type: idConst.SET_ID_ACTIVE,
  payload: idActive
});
