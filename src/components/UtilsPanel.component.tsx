import React from "react";

const UtilsPanelComponent = () => {
  return (
    <div className="utils-panel">
      <div className="container">
        <div className="utils-panel__buttons">
          <div className="buttons__item-container">
            <button type="button" className="btn btn-primary">
              Загрузить мальнький объем данных
            </button>
          </div>
          <div className="buttons__item-container">
            <button type="button" className="btn btn-primary">
              Загрузить большой объем данных
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilsPanelComponent;
