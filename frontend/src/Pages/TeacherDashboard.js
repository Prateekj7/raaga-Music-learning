import React, { useEffect, useState, useContext } from "react";
import MeetingCard from "../components/MeetingCard"
import styles from "./AspiringMusician.module.css";
import Pagination from "../components/Paginaiton";
import { Col, Container, Row } from "react-bootstrap";
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import { LoginContext } from "../LoginContext";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const TeacherDashboard = () => {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const meetingsQueryFn = () => {
        return axios.get(`/api/read_data?table=class&columns=["*"]&id_column_name=teacher_id&id_column_value=${loggedInUser.id}`)
    };
    const { isLoading: isLoading, data: meetings } = useQuery({
        queryKey: ['teacherMeetings', loggedInUser.id],
        queryFn: meetingsQueryFn,
        select: (data) => {
            return data.data;
        }
    });

    return (
        <Container fluid className={`${styles["aspiring-musician-container"]}`}>
            <Row>
                <Col lg={8}>
                    <div className={`${styles["featured-artist-header"]} pb-lg-4 py-3`}>
                        <img src={doubleArrowIcon} className={`${styles["featured-artist-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["featured-artist-heading"]}`}>MY DASHBOARD</h4>
                        <img src={singleArrowIcon} className={`${styles["featured-artist-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>

            </Row>
            <Row>
                <div className="d-flex align-items-center">
                    <Col lg={2}>
                        <div className={`${styles["dropdown-label"]} me-3`}>Lessons</div>
                    </Col>
                </div>
            </Row>
            <Row>
                <div className="border-bottom border-dark my-3"></div>
                <ul className="m-0 p-0">
                    {isLoading ?
                        Array.from(Array(5), (e, i) => <MeetingCard key={i} skeleton />) :
                        meetings.map((meeting) => (
                            <MeetingCard
                                key={meeting.id}
                                category_type={meeting.category_type}
                                category_value={meeting.category_value}
                                class_timestamp={meeting.class_timestamp}
                                meeting_link={meeting.meeting_link}
                                person_name={meeting.student_name}
                            ></MeetingCard>
                        ))}
                </ul>
            </Row>
            <div className="d-flex justify-content-center mt-4">
                <Pagination></Pagination>
            </div>
        </Container>
    );
};

export default TeacherDashboard;
