import React from "react";
import TableSearchBarComponent from "./TableSearchBar.component";
import TablePaginatorComponent from "./TablePaginator.component";

const TableComponent = () => {
  return (
    <div className="table">
      <div className="container">
        <TableSearchBarComponent />

        <table className="table">
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

        <TablePaginatorComponent />
      </div>
    </div>
  );
};

export default TableComponent;
