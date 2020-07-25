import React, { useContext } from "react";

import AppContext from "../context/App.context";

const UtilsPanelComponent = () => {
  const { isLoading, loadSmallData, loadBigData } = useContext(AppContext);

  return (
    <div className="utils-panel">
      <div className="utils-panel__buttons">
        <div className="buttons__item-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={loadSmallData}
            disabled={isLoading}
          >
            Загрузить мальнький объем данных
          </button>
        </div>
        <div className="buttons__item-container">
          <button
            type="button"
            className="btn btn-primary"
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
