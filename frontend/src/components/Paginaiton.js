import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./Pagination.module.css";
import Pagination from "react-bootstrap/Pagination";

const Paginaiton = () => {
  const [active,  setActivePageNumber] = useState(2);
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item onClick={()=>{setActivePageNumber(number)}} key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Pagination className={`${styles["pagination"]}`}>
      <Pagination.Prev className="me-2">
        <SlArrowLeft />
      </Pagination.Prev>
      <div className={`${styles["page-number-container"]} px-2 d-flex`}>
        {items}
      </div>
      <Pagination.Next className="ms-2">
        <SlArrowRight />
      </Pagination.Next>
    </Pagination>
  );
};

export default Paginaiton;
