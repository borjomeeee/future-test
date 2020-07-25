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
        className="top-bar__add-button btn btn-primary"
        onClick={onAddItem}
        disabled={isLoading}
      >
        Добавить
      </button>

      <div className="top-bar__search-container search-container">
        <div className="search-container__container">
          <div className="search-container__input-container">
            <input
              type="text"
              className="search-container__input form-control"
              id="table-search"
              placeholder="Введите хоть что-то..."
            />
          </div>
          <div className="search-container__button-container">
            <button
              type="button"
              className="search-container__button btn btn-success"
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
