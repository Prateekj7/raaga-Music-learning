import React, { useState, useRef } from "react";
import styles from "./TeacherCard.module.css";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReadMore from "./ReadMore";
import FeaturedArtistCard from "../FeaturedArtistCard";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const TeacherCard = ({ teacher }) => {
  const accordionRef = useRef(null);
  const { name, image_url, post, experience, hourly_rate } = teacher;
  const [accordianOpen, setAccordianOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordianOpen((oldState) => !oldState);
    accordionRef.current.click();
  };

  const CustomToggle = React.forwardRef((props, ref) => {
    const { eventKey, children, className } = props;
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log(''),
    );
    return (
      <button
        ref={ref}
        type="button"
        className={className}
        onClick={decoratedOnClick}
      >
        {children}
      </button>)
  });

  return (
    <div className={`my-2 px-3`}>
      <Row>
        <Col lg={2}>
          <div >
            <FeaturedArtistCard showFooter={false} imgUrl={teacher.image_url} />
          </div>
        </Col>
        <Col lg={10}>
          <div className={`${styles["testimonial-card-text"]} px-lg-4 pt-4 d-flex flex-column `}>
            <h4 className={`${styles["teacher-name"]}`}>{name}</h4>
            <div className={`${styles["teacher-experience"]}`}>
              {`${experience} years`} experience
            </div>
            <div className={`${styles["teacher-rate"]}`}>
              {`Hourly fees:`} &#x20B9; {`${hourly_rate}`}
            </div>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-end">
              <button className={`${styles["login-button"]} me-2 mt-3`}>Reviews</button>
              <button className={`${styles["login-button"]} me-2 mt-3`}
                onClick={toggleAccordion}
              >
                {accordianOpen ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Accordion flush className="mb-3 p-lg-0 mx-lg-0">
          <Accordion.Item eventKey="0">
            <CustomToggle ref={accordionRef} eventKey="0" className="d-none">Read More</CustomToggle>
            <Accordion.Body className="mx-0 px-0">
              <ReadMore
                teacher={teacher}
              ></ReadMore>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className={`${styles["border-dashed"]}`}></div>
      </Row>
    </div>
  );
};

export default TeacherCard;
