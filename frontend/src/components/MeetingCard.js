import React from "react";
import styles from "./MusicTeacher/TeacherCard.module.css";
import { Col, Row } from "react-bootstrap";
import FeaturedArtistCard from "./FeaturedArtistCard";
import Placeholder from 'react-bootstrap/Placeholder';
import Button from "./Button";

const TeacherCard = ({ skeleton = false, category_type, category_value, class_timestamp, meeting_link, person_name }) => {
    const getDateString = () => {
        const dateObj = new Date(class_timestamp.slice(0, 4), class_timestamp.slice(5, 7), class_timestamp.slice(8, 10));
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let day = weekdays[dateObj.getDay()];
        let month = months[dateObj.getMonth()];
        return `${day}, ${class_timestamp.slice(8, 10)}, ${month} ${class_timestamp.slice(0, 4)} at ${class_timestamp.slice(11, 16)} am`
    };
    const handleOpenMeeting = () => {
        window.location.href = meeting_link;
    };

    return (
        <div className={`my-2 px-3`}>
            <Row>
                <Col lg={2}>
                    <FeaturedArtistCard showFooter={false} skeleton={skeleton} />
                </Col>
                <Col lg={10}>
                    <div className={`${styles["testimonial-card-text"]} px-lg-4 pt-4 d-flex flex-column `}>
                        <h4 className={`${styles["teacher-name"]}`}>
                            {skeleton ?
                                <Placeholder animation="glow">
                                    <Placeholder xs={6} />
                                </Placeholder> :
                                `${category_type} class with ${person_name}`
                            }
                        </h4>
                        <div className={`${styles["teacher-experience"]}`}>
                            {skeleton ?
                                <Placeholder animation="glow">
                                    <Placeholder xs={2} />
                                </Placeholder> :
                                `${category_value}`}
                        </div>
                        <div className={`${styles["teacher-rate"]}`}>
                            {skeleton ?
                                <Placeholder animation="glow" className={`${styles["teacher-rate-placeholder"]}`}>
                                    <Placeholder xs={5} />
                                </Placeholder> :
                                getDateString()}
                        </div>

                        <div className="d-flex align-items-end">
                            <Button
                                skeleton={skeleton}
                                text="Join"
                                className="me-2 mt-3"
                                onClick={handleOpenMeeting}
                            />
                            <Button
                                skeleton={skeleton}
                                text="Cancel"
                                className="me-2 mt-3"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className={`${styles["border-dashed"]} my-3`}></div>
            </Row>
        </div>
    );
};

export default TeacherCard;
