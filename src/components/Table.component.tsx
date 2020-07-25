import React, { useContext, useState } from "react";

import TableSearchBarComponent from "./TableSearchBar.component";
import TablePaginatorComponent from "./TablePaginator.component";
import TableSubDataComponent from "./TableSubData.component";
import TableItemComponent from "./TableItem.component";

import AppContext from "../context/App.context";
import TableContext from "../context/Table.context";

import { ITableItem } from "../models/TableItem.model";

const TableComponent = () => {
  const { isLoading, tableItems } = useContext(AppContext);
  const { numItems } = useContext(TableContext);

  const [currPage, setCurrPage] = useState(0);

  const renderTableItem = (item: ITableItem) => {
    return <TableItemComponent {...item} />;
  };

  const getCurrPageTableItems = () => {
    const currItems = [];
    for (let i = 0; i < numItems; i++) {
      if (tableItems.length > currPage * numItems + i) {
        currItems.push(tableItems[currPage * numItems + i]);
      }
    }

    return currItems;
  };

  const numPages = numItems === 0 ? 0 : Math.ceil(tableItems.length / numItems);

  return (
    <div className="table">
      <TableSearchBarComponent />

      <div className="table">
        {isLoading && (
          <div className="table__loader loader">
            <div className="loader__container">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
        <table
          className={`table__container ${
            isLoading && "table__container-loading"
          }`}
        >
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstName</th>
              <th scope="col">lastName</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>{getCurrPageTableItems().map(renderTableItem)}</tbody>
        </table>
      </div>

      <TableSubDataComponent />

      <TablePaginatorComponent
        currPage={currPage}
        numPages={numPages}
        setNumPage={setCurrPage}
      />
    </div>
  );
};

export default TableComponent;
