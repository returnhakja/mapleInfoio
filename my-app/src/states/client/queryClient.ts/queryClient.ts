import type { QueryClient } from "@tanstack/react-query";
import { ActionType, createAction, createReducer } from "typesafe-actions";

const T = "queryClient/SET_QUERY_CLIENT";
export const queryClientActions = {
  setQueryClient: createAction(T, (client: QueryClient) => client)(),
};
export const queryClient = createReducer<
  QueryClient | null,
  ActionType<typeof queryClientActions>
>(null, {
  [T]: (_, { payload }) => payload,
});
