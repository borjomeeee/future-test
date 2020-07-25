import React, { useContext } from "react";

import TableSearchBarComponent from "./TableSearchBar.component";
import TablePaginatorComponent from "./TablePaginator.component";
import TableSubDataComponent from "./TableSubData.component";

import LoadingContext from "../context";

const TableComponent = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <div className="table">
      <div className="container">
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
            <tbody>
              {/** FOR EXAMPLE (REMOVE AFTER) */}
              <tr>
                <th scope="row">101</th>
                <td>Sue</td>
                <td>Corson</td>
                <td>DWhalley@in.gov</td>
                <td>(612)211-6296</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TableSubDataComponent />

        <TablePaginatorComponent />
      </div>
    </div>
  );
};

export default TableComponent;
