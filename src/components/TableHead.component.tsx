import React, { useContext } from "react";

import TableContext, { ITableCol } from "../context/Table.context";

import { ITableItem } from "../models/TableItem.model";

import { FilterDownIcon, FilterUpIcon } from "../icons";

export interface ITableHeadComponent {
  onClick: (key: keyof ITableItem) => void;

  filteredCol: keyof ITableItem | null;
  filterState: boolean;
}

const TableHeadComponent = ({
  onClick,
  filteredCol,
  filterState,
}: ITableHeadComponent) => {
  const { cols } = useContext(TableContext);

  const renderTableHeadCol = (col: ITableCol) => {
    return (
      <th
        key={col.key}
        className="table__col"
        scope="col"
        onClick={() => onClick(col.key)}
      >
        {col.label}

        {filteredCol === col.key &&
          (filterState ? <FilterDownIcon /> : <FilterUpIcon />)}
      </th>
    );
  };

  return (
    <thead>
      <tr className="table__head">{cols.map(renderTableHeadCol)}</tr>
    </thead>
  );
};

export default TableHeadComponent;
