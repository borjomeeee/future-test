import React, { useContext, useState, useEffect } from "react";

import TableSearchBarComponent from "./TableSearchBar.component";
import TablePaginatorComponent from "./TablePaginator.component";
import TableSubDataComponent from "./TableSubData.component";
import TableItemComponent from "./TableItem.component";

import AppContext from "../context/App.context";
import TableContext, { ITableCol } from "../context/Table.context";

import { ITableItem } from "../models/TableItem.model";
import { FilterDownIcon, FilterUpIcon } from "../icons";

const TableComponent = () => {
  const { isLoading, tableItems } = useContext(AppContext);
  const { numItems, cols } = useContext(TableContext);

  const [currItems, setCurrItems] = useState<ITableItem[]>([]);
  const [currPage, setCurrPage] = useState(0);

  const [filterCol, setFilterCol] = useState<keyof ITableItem | null>(null);
  const [filterColState, setFilterColState] = useState(false);

  useEffect(() => {
    setCurrItems(tableItems);

    setFilterCol(null);
  }, [tableItems]);

  const renderTableItem = (item: ITableItem, key: number) => {
    return <TableItemComponent key={key} {...item} />;
  };

  const getCurrPageTableItems = () => {
    const tmpItems = new Array<ITableItem>(numItems);
    for (let i = 0; i < numItems; i++) {
      if (currItems.length > currPage * numItems + i) {
        tmpItems[i] = currItems[currPage * numItems + i];
      }
    }

    return tmpItems;
  };

  const onTableColLabelClick = (key: keyof ITableItem) => {
    if (key === filterCol) {
      setFilterColState(!filterColState);
      setCurrItems(currItems.reverse());
    } else {
      setFilterCol(key);
      setFilterColState(false);

      setCurrItems(
        currItems.sort((item1: ITableItem, item2: ITableItem) =>
          item1[key] > item2[key] ? 1 : item1[key] === item2[key] ? 0 : -1
        )
      );
    }
  };

  const onSearchSubstrOnRow = (str: string) => {
    setCurrItems(
      tableItems.filter((item: ITableItem) =>
        cols.some((col: ITableCol) => item[col.key].toString().startsWith(str))
      )
    );
  };

  const renderTableCol = (col: ITableCol) => {
    return (
      <th
        key={col.key}
        className="table__col"
        scope="col"
        onClick={() => onTableColLabelClick(col.key)}
      >
        {col.label}
        {filterCol === col.key &&
          (filterColState ? <FilterDownIcon /> : <FilterUpIcon />)}
      </th>
    );
  };

  const numPages = numItems === 0 ? 0 : Math.ceil(tableItems.length / numItems);

  return (
    <div className="table">
      <TableSearchBarComponent onSearch={onSearchSubstrOnRow} />

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
            isLoading ? "table__container-loading" : ""
          }`}
        >
          <thead>
            <tr className="table__row table__row-first">
              {cols.map(renderTableCol)}
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
