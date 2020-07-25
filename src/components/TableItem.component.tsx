import React from "react";
import { ITableItem } from "../models/TableItem.model";

export interface ITableItemComponent {
  onClickItem: () => void;
  isSelected: boolean;
}

const TableItemComponent = ({
  id,
  firstName,
  lastName,
  email,
  phone,

  onClickItem,
  isSelected,
}: ITableItem & ITableItemComponent) => {
  return (
    <tr
      className={`table__col ${isSelected ? "table__col-selected" : ""}`}
      onClick={onClickItem}
    >
      <th scope="row">{id || "-"}</th>
      <td>{firstName || "-"}</td>
      <td>{lastName || "-"}</td>
      <td>{email || "-"}</td>
      <td>{phone || "-"}</td>
    </tr>
  );
};

export default TableItemComponent;
