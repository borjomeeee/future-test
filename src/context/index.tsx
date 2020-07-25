import { createContext } from "react";
import { ITableItem } from "../models/TableItem.model";

export interface ILoadingContext {
  isLoading: boolean;
}

export const LoadingContext = createContext<ILoadingContext>({
  isLoading: false,
});

export interface IAppContext {
  tableItems: ITableItem[];

  loadSmallData: () => void;
  loadBigData: () => void;
}

export const AppContext = createContext<IAppContext>({
  tableItems: [],

  loadSmallData: () => undefined,
  loadBigData: () => undefined,
});
