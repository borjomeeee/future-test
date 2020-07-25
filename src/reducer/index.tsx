import { IAppInitialState } from "../App";

import { IAppReducerSyncActions } from "../actions";

export default (state: IAppInitialState, action: IAppReducerSyncActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
