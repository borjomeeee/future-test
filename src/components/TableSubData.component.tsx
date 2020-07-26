import React from "react";
import { ITableItem } from "../models/TableItem.model";

const TableSubDataComponent = ({
  firstName,
  lastName,
  description,
  address,
}: ITableItem) => {
  const { streetAddress, city, state, zip } = address;
  return (
    <div className="table__sub-data">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Выбран пользователь: {`${firstName} ${lastName}`}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Описание: {description || "-"}
          </h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Адрес проживания: <b>{streetAddress || "-"}</b>
            </li>
            <li className="list-group-item">
              Город: <b>{city || "-"}</b>
            </li>
            <li className="list-group-item">
              Провинция/штат: <b>{state || "-"}</b>
            </li>
            <li className="list-group-item">
              Индекс: <b>{zip || "-"}</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableSubDataComponent;
