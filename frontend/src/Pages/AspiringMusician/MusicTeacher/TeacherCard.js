import React, { useState } from "react";
import ReactPlayer from "react-player";
import Teachers from "./MusicTeacher.module.css";
import styles from "../../../components/FeaturedArtist/FeaturedArtistCard.module.css";
import { Button, Col, Container, ModalFooter, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Review from "./Review";
import ReadMore from "./ReadMore";
import Collapse from "react-bootstrap/Collapse";


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
    <Container>
      <Row>
        <Col>
          <div className="d-flex mb-2 ">
            {!state.showMore && (
              <div className="d-flex mx-1">
                <div className="p-3">
                  <div className={`${styles["Stroke-28"]}`}>
                    <div className={`${styles["card_img"]}`}>
                      <img src={image_url} alt="user-image" />
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex">
                    <h2>{name}</h2>
                    <h5 className="pb-3">{post}</h5>
                  </div>
                  <h5 className="m-1 pb-2">{experience} experience</h5>
                  <h5 className="m-2 text-danger">hourly fees: ${hourly_rate}</h5>
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
                  <Container style={{ backgroundColor: "white" }}>
                    <Col style={{ backgroundColor: "white" }}>
                      <div>
                        {!open.showMore && (
                          <Button
                            onClick={() =>
                              setOpen((prev) => ({
                                ...prev,
                                showMore: !prev.showMore,
                              }))
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                          >
                            ReadMore
                          </Button>
                        )}
                        {open.showMore && (
                          <Collapse in={open}>
                            <div id="example-collapse-text">
                              <ReadMore
                                teacher={teacher}
                              ></ReadMore>
                            </div>
                          </Collapse>
                        )}
                      </div>
                      <div className="d-flex justify-content-center">
                        {open.showMore && (
                          <Button
                            onClick={() =>
                              setOpen((prev) => ({
                                ...prev,
                                showMore: !prev.showMore,
                              }))
                            }
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                          >
                            Read Less
                          </Button>
                        )}
                      </div>
                    </Col>
                  </Container>
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

export default TeacherCard;
