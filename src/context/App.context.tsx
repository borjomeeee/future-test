import { createContext } from "react";

import { IAppInitialState } from "../App";

import * as ACTIONS from "../actions";

const AppContext = createContext<
  IAppInitialState & { dispatch: (action: ACTIONS.IAppReducerActions) => void }
>({
  isLoading: false,
  error: "",

  tableItems: [],
  dispatch: () => undefined,
});

export default AppContext;
