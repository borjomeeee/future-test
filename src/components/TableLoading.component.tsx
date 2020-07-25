import React from "react";

const TableLoadingComponent = () => {
  return (
    <div className="table__loader loader">
      <div className="loader__container">
        <div
          className="loader__spinner spinner-border text-primary"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default TableLoadingComponent;
