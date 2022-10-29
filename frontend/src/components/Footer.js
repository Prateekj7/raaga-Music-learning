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
                                    In a world where music is becoming more and more global, the need for talented musicians to learn from experts and develop their skills has never been greater. But finding a mentor can be a challenge. It's not easy to find a music teacher you can trust. You might be lucky enough to find one in your neighborhood, but that doesn't mean they're qualified! We know how important it is for you to have a dedicated music teacher who can help you reach your goals. That's why we created RaagaMedia.

                                    We believe that everyone should have access to high-quality music education, regardless of where they live. We want to help aspiring musicians learn from the best teachers in their area, at a fraction of the cost.

                                    Our platform is designed to be simple and easy to use. You can either find a tutor from our database or create your own profile, then search for one based on his/her location and experience. Once you find one, you can book lessons through RaagaMedia website or application!

                                    We believe in the power of music, so we want everyone—no matter what their background is or where they live—to have access to quality music education. Our mission is simple: we want to help aspiring musicians reach their full potential by providing them with everything they need to succeed in the music industry.

                                    Our courses are designed to give you all the tools you need to become a professional musician. We offer online as well as offline courses on instruments as well as vocal music, which means that you can learn from anywhere in the world!

                                    By signing up for one of our courses today, you will be able to find a tutor of your choice from anywhere in the world who can help you improve your skills and get closer to achieving your goals.

                                    RaagaMedia is a novel initiative one of its kind, conceived by professionals from music fraternity ably backed by IT and media professionals.
                                </p>
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
                        {[1, 2, 3, 4, 5, 6].map((item, index) =>
                            <Col xs={4} key={index}>
                                <img className="p-1 p-lg-2" src={newsCardImg}></img>
                            </Col>)}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer;