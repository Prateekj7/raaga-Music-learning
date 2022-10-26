import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TestimonialCarousel from './TestimonialCarousel';
import styles from "./Testimonials.module.css";
import React, { useMemo } from "react";
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";

function FeaturedArtist() {

    return (
        <Container fluid className={`${styles["testimonials-container"]}`}>
            <Row>
                <Col>
                    <div className={`${styles["testimonials-header"]} pb-lg-0 py-3`}>
                        <img src={doubleArrowIcon} className={`${styles["testimonials-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["testimonials-heading"]}`}>TESTIMONIALS</h4>
                        <img src={singleArrowIcon} className={`${styles["testimonials-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row className="py-lg-5">
                <div className={`${styles["testimonials-text-container"]}`}>
                    <h4 className={`${styles["testimonials-text"]}`}>OUR HAPPY CUSTOMERS ALL AROUND</h4>
                    <h4 className={`${styles["testimonials-text"]}`}> THE WORLD</h4>
                </div>
            </Row>
            <Row className="">
                <TestimonialCarousel />
            </Row>

        </Container>
    );
}

export default FeaturedArtist;