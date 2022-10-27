import React, { useState } from "react";

import styles from "../../FeaturedArtist/FeaturedArtistCard.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";

// import img from "../../../../public/assets/Shape/shape.png";

const List = ({ teachers }) => {
  const { studentName, teacherName, img, date, time } = teachers;
  const defaultState = {
    showMore: false,
  };
  const [state, setState] = useState(defaultState);

  return (
    <Container>
      <Row className="">
        <Col>
          <div className="d-flex m-1">
            <div className="p-3">
              <div className={`${styles["Stroke-28"]}`}>
                <div className={`${styles["card_img"]}`}>
                  <img src={img} alt="user-image" />
                </div>
              </div>
            </div>
            <div className="pt-2 mx-1">
              <h1>{studentName}</h1>

              <h2 className="m-1 pb-2"> {teacherName} </h2>
              <h3 className="m-2 text-info">Date: {date}</h3>
              <h4 className="m-2 text-info">Date: {time}</h4>
            </div>
          </div>
        </Col>
        <Col>
          <div className="pt-5 mt-5">
            <Button className="btn-lg">Join Now</Button>
          </div>
        </Col>

        <div className="border-bottom bg-light "></div>
      </Row>
    </Container>
  );
};

export default List;
