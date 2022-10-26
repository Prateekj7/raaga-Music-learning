import ReactPlayer from 'react-player';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./TrendingVideos.module.css";
import React, { useMemo } from "react";
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";
import VideoCarousel from './VideoCarousel';


function TrendingVideos() {
    const videoUrls = useMemo(() => [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ], []);

    return (
        <div className={`${styles["trending-videos-container"]}`}>
            <Row>
                <Col>
                    <div className={`${styles["trending-videos-header"]} pb-lg-3 py-2`}>
                        <img src={doubleArrowIcon} className={`${styles["trending-videos-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["trending-videos-heading"]}`}>TRENDING VIDEOS</h4>
                        <img src={singleArrowIcon} className={`${styles["trending-videos-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={`${styles["player-wrapper"]}`}>
                        <ReactPlayer className={`${styles["react-player"]}`}
                            controls={true}
                            url='https://www.youtube.com/watch?v=IdQvfgM1hvw'
                            width="100%" height="100%"
                        />
                    </div>
                </Col>
            </Row>
            <Container className="g-0 py-lg-4 pt-3">
                <Row>
                    <Col xs={3} md={1}>
                        <p className={`${styles["video-carousel-header"]}`}>Watch Next</p>
                    </Col>
                    <Col xs={9} md={11}>
                        <VideoCarousel />
                    </Col>
                </Row>
            </Container>


        </div >
    );
}

export default TrendingVideos;