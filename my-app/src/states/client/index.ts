import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { queryClient } from "./queryClient.ts/queryClient";
import { ocId } from "./userOcid.ts/ocid";

export const rootReducer = combineReducers({
  queryClient,
  ocId,
});

export function* rootSaga() {
  yield all([]);
}

export type RootState = ReturnType<typeof rootReducer>;
