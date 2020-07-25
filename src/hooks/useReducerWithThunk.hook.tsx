import { useReducer } from "react";
import {
  IAppInitialState,
  IAppReducerSyncActions,
  IAppReducerActions,
} from "../App";

function useReducerWithThunk(
  reducer: (
    store: IAppInitialState,
    action: IAppReducerActions
  ) => IAppInitialState,
  initialState: IAppInitialState
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let customDispatch = (action: IAppReducerActions) => {
    if (typeof action === "function") {
      action(customDispatch);
    } else {
      dispatch(action as IAppReducerSyncActions);
    }
  };
  return [state, customDispatch];
}

export default useReducerWithThunk;
