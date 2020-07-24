import React from "react";

const TableSubDataComponent = () => {
  return (
    <div className="table__sub-data">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Выбран пользователь: Sue Corson</h5>
          <h6 className="card-subtitle mb-2 text-muted">Описание: </h6>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Адрес проживания: <b>9792 Mattis Ct</b>
            </li>
            <li className="list-group-item">
              Город: <b>Waukesha</b>
            </li>
            <li className="list-group-item">
              Провинция/штат: <b>WI</b>
            </li>
            <li className="list-group-item">
              Индекс: <b>22178</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableSubDataComponent;
