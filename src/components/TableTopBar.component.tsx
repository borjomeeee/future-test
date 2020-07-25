import React, { useContext } from "react";

import AppContext from "../context/App.context";

export interface ITableTopBarComponent {
  onSearch: (val: string) => void;
  onAddItem: () => void;
}

const TableTopBarComponent = ({
  onSearch,
  onAddItem,
}: ITableTopBarComponent) => {
  const { isLoading } = useContext(AppContext);

  const onClickSearchButton = () => {
    const inputValue = (document.getElementById(
      "table-search"
    ) as HTMLInputElement).value;
    return onSearch(inputValue || "");
  };

  return (
    <div className="table__top-bar">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onAddItem}
        disabled={isLoading}
      >
        Добавить
      </button>

      <div className="top-bar__search-containe search-bar">
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
              onClick={onClickSearchButton}
              disabled={isLoading}
            >
              Найти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTopBarComponent;
