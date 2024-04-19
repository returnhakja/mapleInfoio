import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { queryClient } from "./queryClient.ts/queryClient";

export const rootReducer = combineReducers({
  queryClient,
});

export function* rootSaga() {
  yield all([]);
}

export type RootState = ReturnType<typeof rootReducer>;
