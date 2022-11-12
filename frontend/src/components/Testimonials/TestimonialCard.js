import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeaturedArtistCard from '../FeaturedArtistCard';
import styles from "./TestimonialCard.module.css";
import React, { useMemo } from "react";

function TestimonialCard({ key }) {

    return (
        <div className={`${styles["testimonial-card-container"]}`} key={key}>
            <Row>
                <Col lg={3}>
                    <div className={`${styles["featured-artist-card-container"]}`} >
                        <FeaturedArtistCard showFooter={false} />
                    </div>
                </Col>
                <Col lg={9}>
                    <div className={`${styles["testimonial-card-text"]} px-lg-3 p-0`}>

                        <p>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                            It has survived not only five centuries.
                        </p>
                        <p>
                            <strong>Dave Ford -</strong> Canada
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default TestimonialCard;