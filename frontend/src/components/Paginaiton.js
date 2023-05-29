import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import styles from "./Pagination.module.css";
import Pagination from 'react-bootstrap/Pagination';

const Paginaiton = () => {
  return (
    <Pagination className={`${styles["pagination"]}`}>
      <Pagination.Prev className="me-2">
        <SlArrowLeft />
      </Pagination.Prev>
      <div className={`${styles["page-number-container"]} px-2 d-flex`}>
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Item>{7}</Pagination.Item>
        <Pagination.Item>{8}</Pagination.Item>
      </div>
      <Pagination.Next className="ms-2">
        <SlArrowRight />
      </Pagination.Next>
    </Pagination>
  );
};

export default Paginaiton;
