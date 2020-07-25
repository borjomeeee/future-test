import React, { useContext } from "react";
import ReactPaginate from "react-paginate";

import AppContext from "../context/App.context";

export interface ITablePaginatorComponent {
  currPage: number;
  numPages: number;

  setNumPage: (num: number) => void;
}

const TablePaginatorComponent = ({
  currPage,
  numPages,

  setNumPage,
}: ITablePaginatorComponent) => {
  const { isLoading } = useContext(AppContext);
  return (
    <div className="table__pagination pagination">
      <ReactPaginate
        pageCount={numPages}
        initialPage={currPage}
        onPageChange={({ selected }: { selected: number }) =>
          setNumPage(selected)
        }
        previousLabel={"Назад"}
        previousClassName={`pagination__button`}
        nextLabel={"Вперед"}
        nextClassName={"pagination__button"}
        breakLabel={"..."}
        breakClassName={"pagination__break"}
        marginPagesDisplayed={3}
        pageRangeDisplayed={7}
        pageClassName={"pagination__page-link"}
        containerClassName={`pagination__container ${
          isLoading ? "pagination__container_disabled" : ""
        }`}
        activeClassName={"pagination__page-link_active"}
        disableInitialCallback={isLoading}
        disabledClassName={"pagination__button_disabled"}
      />
    </div>
  );
};

export default TablePaginatorComponent;
