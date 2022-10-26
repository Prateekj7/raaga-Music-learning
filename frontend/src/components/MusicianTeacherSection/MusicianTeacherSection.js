import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserLogin from './UserLogin';
import styles from "./MusicianTeacherSection.module.css";
import React, { useMemo } from "react";
import musicianIcon from "../../images/musicianIcon.png";
import teacherIcon from "../../images/teacherIcon.png";

function ResponsiveAutoExample() {
    const contentList = useMemo(() => [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."], []);

    return (
        <Container fluid className={`${styles["musician-teacher-container"]}`}>
            <Row>
                <Col md={6}>
                    <UserLogin
                        icon={musicianIcon}
                        header="ASPIRING MUSICIAN"
                        contentList={contentList}
                        buttonText="Login for Aspiring Musician" />
                </Col>
                <Col md={6}>
                    <UserLogin
                        icon={teacherIcon}
                        header="MUSIC TEACHER"
                        contentList={contentList}
                        buttonText="Login for Music Teacher" />
                </Col>
            </Row>
        </Container>
    );
}

export default ResponsiveAutoExample;