import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../FeaturedArtist/FeaturedArtistCard.module.css";
import { Link, useNavigate } from "react-router-dom";

const MusicOption = () => {
  const navigate = useNavigate();
  const navigatemusicItem = () => {
    navigate("/musicitem");
  };
  return (
    <div>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center m-5 p-5">
            <div className=" d-flex  pt-5 mt-5">
              <div onClick={navigatemusicItem} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://www.cinconoticias.com/wp-content/uploads/musica-vocal.jpg"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Vocal</h1>
              </div>

              <div onClick={navigatemusicItem} className="p-5 m-5">
                <div className={`${styles["Stroke-28"]}`}>
                  <div className={`${styles["card_img"]}`}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1619/7281/files/wonderful_instrumental_music_large.png?v=1596036866"
                      alt="user-image"
                    />
                  </div>
                </div>
                <h1>Instrumental</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MusicOption;
