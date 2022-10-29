import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserLogin from './UserLogin';
import styles from "./MusicianTeacherSection.module.css";
import React, { useMemo } from "react";
import musicianIcon from "../../images/musicianIcon.png";
import teacherIcon from "../../images/teacherIcon.png";

function ResponsiveAutoExample() {
    const teacherContentList = useMemo(() => [
        "Are you a music teacher and wish to reach out to more students without any hassle?",
        "Do you want to create your own brand as a music teacher?",
        "Do you want to collaborate with the best musicians in the music fraternity?"], []);
    const studentContentList = useMemo(() => [
        "Do you want to learn music from a teacher of your choice from anywhere in the world?",
        "Do you want to have flexibility in terms of timing of classes?",
        "Do you want to be known as the best in the music fraternity?"], []);

    return (
        <Container fluid className={`${styles["musician-teacher-container"]}`}>
            <Row>
                <Col md={6}>
                    <UserLogin
                        icon={musicianIcon}
                        header="ASPIRING MUSICIAN"
                        contentList={studentContentList}
                        buttonText="Login for Aspiring Musician" />
                </Col>
                <Col md={6}>
                    <UserLogin
                        icon={teacherIcon}
                        header="MUSIC TEACHER"
                        contentList={teacherContentList}
                        buttonText="Login for Music Teacher" />
                </Col>
            </Row>
        </Container>
    );
}

export default ResponsiveAutoExample;