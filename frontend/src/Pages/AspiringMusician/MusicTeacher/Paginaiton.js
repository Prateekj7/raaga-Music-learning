import React from "react";

const Paginaiton = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center ">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true" className="text-dark">
                &laquo;
              </span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link text-dark" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true" className="text-dark">
                &raquo;
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginaiton;
