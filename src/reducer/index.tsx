import { IAppInitialState } from "../App";

import { IAppReducerSyncActions } from "../actions";

export default (
  state: IAppInitialState,
  action: IAppReducerSyncActions
): IAppInitialState => {
  switch (action.type) {
    case "LOAD_DATA":
      return { ...state, isLoading: true };
    case "LOAD_DATA_SUCCESSED":
      return { ...state, isLoading: false, tableItems: action.payload.items };
    case "LOAD_DATA_FAILED":
      return { ...state, isLoading: false, error: action.payload.error };
    case "CLEAR_ERROR":
      return { ...state, error: "" };
    case "ADD_TABLE_ITEM":
      return {
        ...state,
        tableItems: [action.payload.item, ...state.tableItems],
      };
    default:
      return state;
  }
};
