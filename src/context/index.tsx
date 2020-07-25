import { createContext } from "react";
import { ITableItem } from "../models/TableItem.model";

export interface IAppContext {
  isLoading: boolean;
  tableItems: ITableItem[];

  loadSmallData: () => void;
  loadBigData: () => void;
}

const AppContext = createContext<IAppContext>({
  isLoading: false,
  tableItems: [],

  loadSmallData: () => undefined,
  loadBigData: () => undefined,
});

export default AppContext;
