import React from "react";

import AppHeaderComponent from "./components/AppHeader.component";
import UtilsPanelComponent from "./components/UtilsPanel.component";
import TableComponent from "./components/Table.component";

import LoadingContext from "./context";

import { ITableItem } from "./models/TableItem.model";

import * as ACTIONS from "./actions";

import useReducerWithThunk from "./hooks/useReducerWithThunk.hook";

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

export type IAppReducerSyncProps = (
  state: IAppInitialState,
  action: IAppReducerActions
) => IAppInitialState;

function App() {
  const [store, dispatch] = useReducerWithThunk(
    AppReducer as IAppReducerSyncProps,
    {
      isLoading: false,
      error: "",

      tableItems: [],
    }
  );

  const { isLoading } = store as IAppInitialState;

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <div className="content">
        <AppHeaderComponent />

        <div className="container">
          <UtilsPanelComponent />

          <TableComponent />
        </div>
      </div>
    </LoadingContext.Provider>
  );
}

export default App;
