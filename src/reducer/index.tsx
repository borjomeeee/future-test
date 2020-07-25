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
    default:
      return state;
  }
};
