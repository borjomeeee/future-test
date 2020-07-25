import { createContext } from "react";

export interface ITableContext {
  numItems: number;
}

const TableContext = createContext<ITableContext>({
  numItems: 10,
});

export default TableContext;
