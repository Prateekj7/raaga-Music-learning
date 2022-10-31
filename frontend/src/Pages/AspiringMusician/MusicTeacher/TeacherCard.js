import React, { useState } from "react";
import styles from "./TeacherCard.module.css";
import { Button, Col, Container, ModalFooter, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Review from "./Review";
import ReadMore from "./ReadMore";
import Collapse from "react-bootstrap/Collapse";
import FeaturedArtistCard from "../../../components/FeaturedArtist/FeaturedArtistCard";
import Accordion from "react-bootstrap/Accordion";
import ReactPlayer from "react-player";

const TeacherCard = ({ teacher }) => {
  const { name, image_url, post, experience, hourly_rate } = teacher;
  const defaultState = {
    showMore: false,
  };

  const [state, setState] = useState(defaultState);
  const [open, setOpen] = useState({
    showMore: false,
  });

  return (
    <div className={`my-2 px-3`}>
      <Row>
        <Col lg={2}>
          <div>
            <FeaturedArtistCard showFooter={false} imgUrl={teacher.image_url} />
          </div>
        </Col>
        <Col lg={10}>
          <div
            className={`${styles["testimonial-card-text"]} px-lg-4 pt-4 mb-3`}
          >
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
            <button className={`${styles["login-button"]} me-2 mt-3`}>
              Reviews
            </button>
          </div>
        </Col>
        <Accordion flush className="mb-3 p-lg-0 mx-lg-0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className={`${styles["read-more-header"]}`}>
              <div className={`${styles["read-more"]}`}>Read More</div>
            </Accordion.Header>
            <Accordion.Body className="mx-0 px-0">
              <ReadMore teacher={teacher}></ReadMore>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className={`${styles["border-dashed"]}`}></div>
      </Row>
    </div>
  );
};

export default TeacherCard;
