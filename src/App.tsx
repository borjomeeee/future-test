import React, { useEffect } from "react";

import AppHeaderComponent from "./components/AppHeader.component";
import UtilsPanelComponent from "./components/UtilsPanel.component";
import TableComponent from "./components/Table.component";

import AppContext from "./context";

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

export type IAppReducerProps = (
  state: IAppInitialState,
  action: ACTIONS.IAppReducerActions
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

  useEffect(() => {
    if (error.length > 0) {
      alert(error);
      clearError();
    }
  }, [error]);

  const loadBigData = () => {
    dispatch(
      ACTIONS.loadData(
        "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      )
    );
  };

  const loadSmallData = () => {
    dispatch(
      ACTIONS.loadData(
        "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      )
    );
  };

  const clearError = () => {
    dispatch(ACTIONS.clearErrorAction());
  };

  return (
    <AppContext.Provider
      value={{ isLoading, tableItems, loadBigData, loadSmallData }}
    >
      <div className="content">
        <AppHeaderComponent />

        <div className="container">
          <UtilsPanelComponent />

          <TableComponent />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
