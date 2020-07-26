import React, { useContext } from "react";

import AppContext from "../context/App.context";

import * as ACTIONS from "../actions";

const UtilsPanelComponent = () => {
  const { isLoading, dispatch } = useContext(AppContext);

  const loadBigData = () => {
    dispatch(
      ACTIONS.loadData(
        "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      )
    );
  };

  const loadSmallData = () => {
    dispatch(
      ACTIONS.loadData(
        "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      )
    );
  };

  return (
    <div className="utils-panel">
      <div className="utils-panel__buttons">
        <div className="buttons__item-container">
          <button
            type="button"
            className="buttons__item btn btn-primary"
            onClick={loadSmallData}
            disabled={isLoading}
          >
            Загрузить мальнький объем данных
          </button>
        </div>
        <div className="buttons__item-container">
          <button
            type="button"
            className="buttons__item btn btn-primary"
            onClick={loadBigData}
            disabled={isLoading}
          >
            Загрузить большой объем данных
          </button>
        </div>
      </div>
    </div>
  );
};

export default UtilsPanelComponent;
