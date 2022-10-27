import React, { useState } from "react";
import ReactPlayer from "react-player";
import Teachers from "./MusicTeacher.module.css";
import styles from "../../../components/FeaturedArtist/FeaturedArtistCard.module.css";
import { Button, Col, Container, ModalFooter, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Review from "./Review";
import ReadMore from "./ReadMore";
// import img from "../../../../public/assets/Shape/shape.png";

const MusicTeachers = ({ teachers }) => {
  const { name, img, post, experience, fees, video, address } = teachers;
  const defaultState = {
    showMore: false,
  };

  const [state, setState] = useState(defaultState);

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex mb-2 ">
            {!state.showMore && (
              <div className="d-flex mx-1">
                <div className="p-3">
                  <div className={`${styles["Stroke-28"]}`}>
                    <div className={`${styles["card_img"]}`}>
                      <img src={img} alt="user-image" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex">
                    <h2>{name}</h2>
                    <h5 className="pb-3">{post}</h5>
                  </div>
                  <h5 className="m-1 pb-2">{experience} experience</h5>
                  <h5 className="m-2 text-danger">hourly fees: ${fees}</h5>
                  <div className="d-flex m-2">
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className="mb-2"></div>
                  </div>
                  <div>
                    <Review></Review>
                  </div>
                </div>
              </div>
            )}

            <div className="mr-5 px-5  ">
              <div className="pt-5 mt-5 ">
                <div
                  className="d-flex justify-content-end"
                  style={{ backgroundColor: "white" }}
                  onClick={() =>
                    setState((prev) => ({
                      ...prev,
                      showMore: !state.showMore,
                    }))
                  }
                >
                  <ReadMore></ReadMore>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <div className="border-bottom bg-light "></div>
      </Row>
    </Container>
  );
};

export default MusicTeachers;
