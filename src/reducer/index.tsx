import { IAppInitialState, IAppReducerSyncActions } from "../App";

export default (state: IAppInitialState, action: IAppReducerSyncActions) => {
  switch (action.type) {
    default:
      return state;
  }
};
