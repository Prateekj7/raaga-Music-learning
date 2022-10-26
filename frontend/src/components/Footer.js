import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./Footer.module.css";
import React, { useMemo } from "react";
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import newsCardImg from "../images/newsCardImage.png";

function Footer() {

    return (
        <Container fluid className={`${styles["footer-container"]}`}>
            <Row>
                <Col md={8}>
                    <Row>
                        <Row>
                            <Col>
                                <div className={`${styles["footer-header"]} pb-4 pb-lg-3 `}>
                                    <img src={doubleArrowIcon} className={`${styles["footer-header-double-arrow-icon"]} p-1`} />
                                    <h4 className={`${styles["footer-heading"]}`}>ABOUT RAAGA MEDIA</h4>
                                    <img src={singleArrowIcon} className={`${styles["footer-header-single-arrow-icon"]} p-1`} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className={`${styles["footer-about-text"]}`}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.</p>
                            </Col>
                        </Row>
                    </Row>
                    <Row >
                        <Row>
                            <Col>
                                <div className={`${styles["footer-header"]} py-4`}>
                                    <img src={doubleArrowIcon} className={`${styles["footer-header-double-arrow-icon"]} p-1`} />
                                    <h4 className={`${styles["footer-heading"]}`}>COMPANY</h4>
                                    <img src={singleArrowIcon} className={`${styles["footer-header-single-arrow-icon"]} p-1`} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5} lg={3}><a className={`${styles["footer-company-links"]}`}>{">"} About Us</a></Col>
                            <Col xs={7} lg={3}><a className={`${styles["footer-company-links"]}`}>{">"} Contact Us</a></Col>
                            <Col xs={5} lg={6}><a className={`${styles["footer-company-links"]}`}>{">"} Privacy Policy</a></Col>
                            <Col xs={7} lg={3}><a className={`${styles["footer-company-links"]}`}>{">"} Complaint Redressal</a></Col>
                            <Col xs={6} lg={3}><a className={`${styles["footer-company-links"]}`}>{">"} Disclaimer</a></Col>
                        </Row>

                    </Row>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col>
                            <div className={`${styles["footer-header"]} py-4 pb-lg-3 pt-lg-0`}>
                                <img src={doubleArrowIcon} className={`${styles["footer-header-double-arrow-icon"]} p-1`} />
                                <h4 className={`${styles["footer-heading"]}`}>INSTAGRAM</h4>
                                <img src={singleArrowIcon} className={`${styles["footer-header-single-arrow-icon"]} p-1`} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="g-3">
                        {[1, 2, 3, 4, 5, 6].map(() =>
                            <Col xs={4}>
                                <img className="p-1 p-lg-2" src={newsCardImg}></img>
                            </Col>)}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;