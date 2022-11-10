import React, { useEffect, useState } from "react";
import MeetingCard from "../components/MeetingCard/MeetingCard"
import styles from "./AspiringMusician.module.css";
import Pagination from "./AspiringMusician/MusicTeacher/Paginaiton";
import { Col, Container, Row } from "react-bootstrap";
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import Form from 'react-bootstrap/Form';

const StudentDashboard = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        let data = {
            table: "class",
            page_size: 100,
            page_number: 1,
            column_name: "student_id",
            column_value: "1",
            columns: "*"
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            signal: signal
        };
        const getTableData = async () => {
            try {
                const response = await fetch("/api/read_data/", requestOptions);
                const result = await response.json();
                if (response.ok && !signal.aborted) {
                    setTeachers(result);
                    console.log(result);
                } else {
                    throw Error(result);
                }
            } catch (err) {
                if (err.name === "AbortError") {
                    console.log("successfully aborted");
                } else {
                    console.log(err);
                }
            }
        };

        getTableData();
        return () => controller.abort();
    }, []);

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
                <div className="m-0 p-0">
                    {teachers.map((meeting) => (
                        <MeetingCard
                            key={meeting.id}
                            meeting={meeting}
                        ></MeetingCard>
                    ))}
                </div>
            </Row>
            <div className="d-flex justify-content-center mt-4">
                <Pagination></Pagination>
            </div>
        </Container>
    );
};

export default StudentDashboard;
