import React from "react";

const Pagination = () => {
  return (
    <div className="p-3 w-fit m-auto">
      <nav aria-label="Page navigation ">
        <ul className="list-style-none flex">
          <li>
            <a className="pagination-controls" href="#!" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li aria-current="page" className="">
            <a className="pagination active" href="#!">
              1
            </a>
          </li>
          <li>
            <a className="pagination-controls" href="#!" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
