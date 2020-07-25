import React, { useContext } from "react";
import ReactPaginate from "react-paginate";

import LoadingContext from "../context";

const TablePaginatorComponent = () => {
  const { isLoading } = useContext(LoadingContext);
  return (
    <div className="table__paginator">
      <ReactPaginate
        pageCount={10}
        previousLabel={"Назад"}
        previousClassName={`pagination__button`}
        nextLabel={"Вперед"}
        nextClassName={"pagination__button"}
        breakLabel={"..."}
        breakClassName={"pagination__break"}
        marginPagesDisplayed={0}
        pageRangeDisplayed={10}
        pageClassName={"pagination__page-link"}
        // onPageChange={this.handlePageClick}
        containerClassName={`pagination ${isLoading && "pagination-disabled"}`}
        activeClassName={"pagination__page-link_active"}
        disableInitialCallback={isLoading}
        disabledClassName={"pagination__button-disabled"}
      />
    </div>
  );
};

export default TablePaginatorComponent;
