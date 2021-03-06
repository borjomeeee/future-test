import React, { useContext, useState, useEffect } from "react";

import TableTopBarComponent from "./TableTopBar.component";
import TablePaginatorComponent from "./TablePaginator.component";
import TableSubDataComponent from "./TableSubData.component";
import TableLoadingComponent from "./TableLoading.component";
import TableHeadComponent from "./TableHead.component";
import ModalComponent from "./Modal.component";
import TableAddFormComponent from "./TableAddForm.component";
import TableItemsContainerComponent from "./TableItemsContainer.component";

import AppContext from "../context/App.context";
import TableContext, { ITableCol } from "../context/Table.context";

import * as ACTIONS from "../actions";

import { ITableItem } from "../models/TableItem.model";

const TableComponent = () => {
  const { isLoading, tableItems, dispatch } = useContext(AppContext);
  const { numItems, cols } = useContext(TableContext);

  const [addTableItemFormVisible, setAddTableItemFormVisible] = useState(false);
  const [currItems, setCurrItems] = useState<ITableItem[]>([]);
  const [currPage, setCurrPage] = useState(0);
  const [currItem, setCurrItem] = useState<ITableItem | null>(null);

  const [filterCol, setFilterCol] = useState<keyof ITableItem | null>(null);
  const [filterColState, setFilterColState] = useState(false);

  useEffect(() => {
    setCurrItems(tableItems);

    setFilterCol(null);
    setCurrItem(null);
    setCurrPage(0);
  }, [tableItems]);

  const onClickTableItem = (item: ITableItem) => {
    setCurrItem(item);
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

    setCurrPage(0);
    setFilterCol(null);
  };

  const onToggleVisibleAddForm = () => {
    setAddTableItemFormVisible(!addTableItemFormVisible);
  };

  const onAddTableItem = (item: ITableItem) => {
    dispatch(ACTIONS.addTableItemAction(item));
    onToggleVisibleAddForm();
  };

  const numPages = numItems === 0 ? 0 : Math.ceil(currItems.length / numItems);

  return (
    <div className="table">
      <TableTopBarComponent
        onSearch={onSearchSubstrOnRow}
        onAddItem={onToggleVisibleAddForm}
      />

      <div className="table__container">
        {isLoading && <TableLoadingComponent />}

        <table
          className={`table__content ${
            isLoading ? "table__content_loading" : ""
          }`}
        >
          <TableHeadComponent
            onClick={onTableColLabelClick}
            filteredCol={filterCol}
            filterState={filterColState}
          />

          <TableItemsContainerComponent
            items={currItems}
            currPageNum={currPage}
            currItem={currItem}
            onClickItem={onClickTableItem}
          />
        </table>
      </div>

      {currItem !== null && <TableSubDataComponent {...currItem} />}

      <TablePaginatorComponent
        currPage={currPage}
        numPages={numPages}
        setNumPage={setCurrPage}
      />

      {addTableItemFormVisible && (
        <ModalComponent
          title="Добавить TableItem"
          onClose={() => setAddTableItemFormVisible(false)}
        >
          <TableAddFormComponent onSubmit={onAddTableItem} />
        </ModalComponent>
      )}
    </div>
  );
};

export default TableComponent;
