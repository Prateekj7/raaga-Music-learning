import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../FeaturedArtist/FeaturedArtistCard.module.css";
import { Link, useNavigate } from "react-router-dom";

const MusicItems = () => {
  const navigate = useNavigate();
  const navigatemusicstation = () => {
    navigate("/musicstation");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center p-5 m-5 ">
            <div className=" d-flex  pt-5 mt-5">
              <div onClick={navigatemusicstation} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://static.toiimg.com/photo/61257547.cms"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Indian Classic</h1>
              </div>
              <div onClick={navigatemusicstation} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://static.toiimg.com/photo/61257547.cms"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Ghazal</h1>
              </div>
              <div onClick={navigatemusicstation} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://static.toiimg.com/photo/61257547.cms"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Indian Pop</h1>
              </div>

              <div onClick={navigatemusicstation} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://static.toiimg.com/photo/61257547.cms"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Western Classic</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MusicItems;
