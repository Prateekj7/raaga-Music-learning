import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedArtistCard from '../FeaturedArtistCard';
import styles from "./FeaturedArtist.module.css";
import React, { useMemo } from "react";
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";

function FeaturedArtist() {

    return (
        <Container fluid className={`${styles["featured-artist-container"]}`}>
            <Row>
                <Col>
                    <div className={`${styles["featured-artist-header"]} pb-lg-4 py-3`}>
                        <img src={doubleArrowIcon} className={`${styles["featured-artist-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["featured-artist-heading"]}`}>FEATURED ARTIST</h4>
                        <img src={singleArrowIcon} className={`${styles["featured-artist-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row className="g-custom">
                {[1, 2, 3, 4].map((item, index) =>
                    <Col xs={6} lg={3} key={index}>
                        <FeaturedArtistCard showFooter={true} />
                    </Col>
                )}
            </Row>
            <Row className="g-custom">
                {[1, 2, 3, 4].map((item, index) =>
                    <Col xs={6} lg={3} key={index}>
                        <FeaturedArtistCard showFooter={true} />
                    </Col>
                )}
            </Row>

        </Container>
    );
}

export default FeaturedArtist;