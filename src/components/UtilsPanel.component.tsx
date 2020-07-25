import React, { useContext } from "react";

import LoadingContext from "../context";

const UtilsPanelComponent = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="utils-panel">
      <div className="container">
        <div className="utils-panel__buttons">
          <div className="buttons__item-container">
            <button
              type="button"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Загрузить мальнький объем данных
            </button>
          </div>
          <div className="buttons__item-container">
            <button
              type="button"
              className="btn btn-primary"
              disabled={isLoading}
            >
              Загрузить большой объем данных
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilsPanelComponent;
