import AppReducer from "../reducer/index";

import * as ACTIONS from "../actions/index";

import { ITableItem } from "../models/TableItem.model";

test("app reducer add item test", () => {
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
  const newState = AppReducer(
    {
      isLoading: false,
      error: "",

      tableItems: [],
    },
    ACTIONS.addTableItemAction(tableItem)
  );

  expect(JSON.stringify(newState.tableItems)).toBe(JSON.stringify([tableItem]));
});
