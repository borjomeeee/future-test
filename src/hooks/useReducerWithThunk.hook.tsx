import { useReducer } from "react";
import {
  IAppInitialState,
  IAppReducerSyncActions,
  IAppReducerActions,
} from "../App";

export type IUseReduxWithThunkReturn = [
  IAppInitialState,
  (action: IAppReducerActions) => void
];

function useReducerWithThunk(
  reducer: (
    store: IAppInitialState,
    action: IAppReducerActions
  ) => IAppInitialState,
  initialState: IAppInitialState
): IUseReduxWithThunkReturn {
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
