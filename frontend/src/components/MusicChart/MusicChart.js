import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MusicCard from './MusicCard';
import styles from "./MusicChart.module.css";
import React, { useMemo } from "react";
import musicChartBg from "../../images/musicChartBgImg.png";
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";
import song from "../../images/secret_piece.mp3";

function MusicChart() {
    const songs = useMemo(() => [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    ], []);
    return (
        <Container fluid className={`${styles["music-chart-container"]}`}
            style={{ backgroundImage: `url(${musicChartBg})` }}
        >
            <Row>
                <Col>
                    <div className={`${styles["music-chart-header"]} pb-lg-4 py-2`}>
                        <img src={doubleArrowIcon} className={`${styles["music-chart-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["music-chart-heading"]}`}>MUSIC CHART</h4>
                        <img src={singleArrowIcon} className={`${styles["music-chart-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            {songs.map((item, index) =>
                <Row key={index}>
                    <Col md={6}>
                        <MusicCard song={song} />
                    </Col>
                    <Col md={6}>
                        <MusicCard song={song} />
                    </Col>
                </Row>
            )}

        </Container>
    );
}

export default MusicChart;