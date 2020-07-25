import { createContext } from "react";

import { ITableItem } from "../models/TableItem.model";

export interface ITableCol {
  key: keyof ITableItem;
  label: string;
}

export interface ITableContext {
  numItems: number;
  cols: ITableCol[];
}

const TableContext = createContext<ITableContext>({
  numItems: 10,
  cols: [],
});

export default TableContext;
