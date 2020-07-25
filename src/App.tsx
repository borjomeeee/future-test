import React from "react";

import AppHeaderComponent from "./components/AppHeader.component";
import UtilsPanelComponent from "./components/UtilsPanel.component";
import TableComponent from "./components/Table.component";

import { LoadingContext, AppContext } from "./context";

import { ITableItem } from "./models/TableItem.model";

import * as ACTIONS from "./actions";

import useReducerWithThunk, {
  IUseReduxWithThunkReturn,
} from "./hooks/useReducerWithThunk.hook";

import AppReducer from "./reducer";

export interface IAppInitialState {
  isLoading: boolean;
  error: string;

  tableItems: ITableItem[];
}

export type IAppReducerSyncActions =
  | ReturnType<typeof ACTIONS.loadDataAction>
  | ReturnType<typeof ACTIONS.loadDataSuccessAction>
  | ReturnType<typeof ACTIONS.loadDataFailedAction>
  | ReturnType<typeof ACTIONS.clearErrorAction>;

export type IAppReducerActions =
  | ReturnType<typeof ACTIONS.loadSmallData>
  | ReturnType<typeof ACTIONS.loadBigData>
  | IAppReducerSyncActions;

export type IAppReducerProps = (
  state: IAppInitialState,
  action: IAppReducerActions
) => IAppInitialState;

function App() {
  const [store, dispatch]: IUseReduxWithThunkReturn = useReducerWithThunk(
    AppReducer as IAppReducerProps,
    {
      isLoading: false,
      error: "",

      tableItems: [],
    }
  );

  const { isLoading, tableItems, error } = store;

  const loadBigData = () => {
    dispatch(ACTIONS.loadBigData());
  };

  const loadSmallData = () => {
    dispatch(ACTIONS.loadSmallData());
  };

  const clearError = () => {
    dispatch(ACTIONS.clearErrorAction());
  };

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <AppContext.Provider value={{ tableItems, loadBigData, loadSmallData }}>
        <div className="content">
          <AppHeaderComponent />

          <div className="container">
            <UtilsPanelComponent />

            <TableComponent />
          </div>
        </div>
      </AppContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
