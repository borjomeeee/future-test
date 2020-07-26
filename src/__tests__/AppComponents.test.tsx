import React from "react";

import { render } from "@testing-library/react";

import AppContext from "../context/App.context";

import TableComponent from "../components/Table.component";
import { ITableItem } from "../models/TableItem.model";

const tableItem: ITableItem = {
  id: 1,
  firstName: "Имя",
  lastName: "Фамилия",
  email: "Почта",
  phone: "Телефон",

  address: {
    streetAddress: "Улица",
    city: "Город",
    state: "Штат",
    zip: "Индекс",
  },
  description: "Описание",
};

it("table render correctly", () => {
  render(
    <AppContext.Provider
      value={{
        isLoading: false,
        error: "",

        tableItems: [tableItem, tableItem, tableItem, tableItem, tableItem],

        dispatch: () => undefined,
      }}
    >
      <TableComponent />
    </AppContext.Provider>
  );
  expect(document.getElementsByClassName("table")[0]).toMatchSnapshot();
});

it("table form render correctly", () => {
  render(
    <AppContext.Provider
      value={{
        isLoading: false,
        error: "",

        tableItems: [],
        dispatch: () => undefined,
      }}
    >
      <TableComponent />
    </AppContext.Provider>
  );
  expect(document.getElementsByClassName("table__form")[0]).toMatchSnapshot();
});
