import React from "react";
import { ITableItem } from "../models/TableItem.model";

const TableItemComponent = ({
  id,
  firstName,
  lastName,
  email,
  phone,
}: ITableItem) => {
  return (
    <tr>
      <th scope="row">{id || "-"}</th>
      <td>{firstName || "-"}</td>
      <td>{lastName || "-"}</td>
      <td>{email || "-"}</td>
      <td>{phone || "-"}</td>
    </tr>
  );
};

export default TableItemComponent;
