import React, { useContext } from "react";

import AppContext from "../context/App.context";

const TableSearchBarComponent = () => {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="table__search-bar">
      <div className="search-bar__container">
        <div className="search-bar__input">
          <input
            type="text"
            className="form-control"
            id="table-search"
            placeholder="Введите хоть что-то..."
          />
        </div>
        <div className="search-bar__button">
          <button
            type="button"
            className="btn btn-success"
            disabled={isLoading}
          >
            Найти
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableSearchBarComponent;
