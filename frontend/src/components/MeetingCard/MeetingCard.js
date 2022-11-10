import React, { useState, useRef } from "react";
import styles from "../../Pages/AspiringMusician/MusicTeacher/TeacherCard.module.css";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import FeaturedArtistCard from "../../components/FeaturedArtist/FeaturedArtistCard";

const TeacherCard = ({ meeting }) => {
    const { category_type, category_value, class_timestamp, meeting_link, teacher_name } = meeting;
    const getDateString = () => {
        const dateObj = new Date(class_timestamp.slice(0, 4), class_timestamp.slice(5, 7), class_timestamp.slice(8, 10));
        console.log(class_timestamp.slice(11, 16))
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
                    <div >
                        <FeaturedArtistCard showFooter={false} imgUrl={meeting.image_url} />
                    </div>
                </Col>
                <Col lg={10}>
                    <div className={`${styles["testimonial-card-text"]} px-lg-4 pt-4 d-flex flex-column `}>
                        <h4 className={`${styles["teacher-name"]}`}>{`${category_type} class with ${teacher_name}`}</h4>
                        <div className={`${styles["teacher-experience"]}`}>
                            {`${category_value}`}
                        </div>
                        <div className={`${styles["teacher-rate"]}`}>
                            {getDateString()}
                        </div>

                        <div className="d-flex align-items-end">
                            <button
                                className={`${styles["login-button"]} me-2 mt-3`}
                                onClick={handleOpenMeeting}

                            >
                                Join
                            </button>
                            <button className={`${styles["login-button"]} me-2 mt-3`}
                            >
                                {"Cancel"}
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className={`${styles["border-dashed"]}`}></div>
            </Row>
        </div>
    );
};

export default TeacherCard;
