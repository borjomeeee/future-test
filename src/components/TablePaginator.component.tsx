import React from "react";
import ReactPaginate from "react-paginate";

const TablePaginatorComponent = () => {
  return (
    <div className="table__paginator">
      <ReactPaginate
        pageCount={10}
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        // pageCount={this.state.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageClassName={"paginator__page-link"}
        // onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default TablePaginatorComponent;
