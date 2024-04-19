import type { ActionType } from "typesafe-actions";
import { createAction, createReducer } from "typesafe-actions";

const SET_OCID = "viewId/SET_OCID";

export const setOcid = createAction(SET_OCID, (viewId: string) => viewId)();

const actions = {
  setOcid,
};

export const ocId = createReducer<any, ActionType<typeof actions>>("", {
  [SET_OCID]: (_, action) => {
    return action.payload;
  },
});
