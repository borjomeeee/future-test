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

export const TableContextInitialState: ITableContext = {
  numItems: 40,
  cols: [
    {
      key: "id",
      label: "Id",
    },
    {
      key: "firstName",
      label: "FirstName",
    },
    {
      key: "lastName",
      label: "LastName",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone",
    },
  ],
};

const TableContext = createContext<ITableContext>(TableContextInitialState);

export default TableContext;
