import React, { useState, useRef } from "react";
import styles from "./TeacherCard.module.css";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReadMore from "./ReadMore";
import FeaturedArtistCard from "../FeaturedArtistCard";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Placeholder from 'react-bootstrap/Placeholder';
import Button from "../Button";
import CommentDialog from "../CommentDialog/CommentDialog";

const TeacherCard = ({ skeleton = false, teacher, filter }) => {
  const accordionRef = useRef(null);
  const [accordianOpen, setAccordianOpen] = useState(false);

  const [showCommentDialog, setShowCommentDialog] = useState(true);

  const handleClose = () => setShowCommentDialog(false);
  const handleShow = () => setShowCommentDialog(true);

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
      <CommentDialog showCommentDialog={showCommentDialog} handleClose={handleClose} />

      <Row>
        <Col lg={2}>
          <div >
            <FeaturedArtistCard showFooter={false} imgUrl={teacher?.image_url} skeleton={skeleton} />
          </div>
        </Col>
        <Col lg={10}>
          <div className={`${styles["testimonial-card-text"]} px-lg-4 pt-4 d-flex flex-column `}>
            <h4 className={`${styles["teacher-name"]}`}>
              {skeleton ?
                <Placeholder animation="glow">
                  <Placeholder xs={3} />
                </Placeholder> :
                teacher.name
              }
            </h4>
            <div className={`${styles["teacher-experience"]}`}>
              {skeleton ?
                <Placeholder animation="glow">
                  <Placeholder xs={2} />
                </Placeholder> :
                `${teacher.experience} years experience`}
            </div>
            <div className={`${styles["teacher-rate"]}`}>
              {skeleton ?
                <Placeholder animation="glow" className={`${styles["teacher-rate-placeholder"]}`}>
                  <Placeholder xs={2} />
                </Placeholder> :
                <>Hourly fees: &#x20B9; {teacher.hourly_rate}</>
              }
            </div>
            <div>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="d-flex align-items-end">
              <Button
                skeleton={skeleton}
                text="Reviews"
                className={`me-2 mt-3`}
                onClick={handleShow}
              />
              <Button
                skeleton={skeleton}
                text={accordianOpen ? "Read less" : "Read more"}
                className={`me-2 mt-3`}
                onClick={toggleAccordion}
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {skeleton ?
          null :
          <Accordion flush className="p-lg-0 mx-lg-0">
            <Accordion.Item eventKey="0">
              <CustomToggle ref={accordionRef} eventKey="0" className="d-none">Read More</CustomToggle>
              <Accordion.Body className="mx-0 px-0">
                <ReadMore
                  teacher={teacher}
                  filter={filter}
                ></ReadMore>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        }
        <div className={`${styles["border-dashed"]} my-3 `}></div>
      </Row>
    </div>
  );
};

export default TeacherCard;
