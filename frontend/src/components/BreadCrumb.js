import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BsChevronRight } from "react-icons/bs";

function BreadCrumb(props) {
  return (
    <Breadcrumb>
    {props.Item.map( (ele, index) =>{
        return( <>{(index !==0? <BsChevronRight/>: <></>)}<Breadcrumb.Item>{ele}</Breadcrumb.Item></>)
    })}
    </Breadcrumb>
  );
}

export default BreadCrumb