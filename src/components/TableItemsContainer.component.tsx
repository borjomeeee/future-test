import React, { useContext } from "react";

import TableItemComponent from "./TableItem.component";

import { ITableItem } from "../models/TableItem.model";

import TableContext from "../context/Table.context";

export interface ITableItemsContainerComponent {
  items: ITableItem[];
  currPageNum: number;

  currItem: ITableItem | null;
  onClickItem: (item: ITableItem) => void;
}

const TableItemsContainerComponent = ({
  items,
  currPageNum,

  currItem,
  onClickItem,
}: ITableItemsContainerComponent) => {
  const { numItems } = useContext(TableContext);

  const renderTableItem = (item: ITableItem, key: number) => {
    return (
      <React.Fragment key={key}>
        <TableItemComponent
          {...item}
          isSelected={item === currItem}
          onClickItem={() => onClickItem(item)}
        />
      </React.Fragment>
    );
  };

  const getCurrPageTableItems = () => {
    const tmpItems = new Array<ITableItem>(numItems);
    for (let i = 0; i < numItems; i++) {
      if (items.length > currPageNum * numItems + i) {
        tmpItems[i] = items[currPageNum * numItems + i];
      }
    }

    return tmpItems;
  };

  return (
    <tbody className="table__items">
      {getCurrPageTableItems().map(renderTableItem)}
    </tbody>
  );
};

export default TableItemsContainerComponent;
