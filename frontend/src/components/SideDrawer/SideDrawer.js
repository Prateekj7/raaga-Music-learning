import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./SideDrawer.module.css";
import logo from "../../images/logo.png";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";

function SideDrawer({ show, handleClose }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;

    const [otpSentNotification, setOtpSentNotification] = useState("");
    const handleSendOtp = (e) => {
        e.preventDefault();
        setOtpSentNotification("OTP has been sent to +91-9954199108");
    };
    const handleSubmitOTP = () => {
        handleClose();
        setLoggedInUser({
            isLoggedIn: true,
            category: "student",
            id: "10001"
        });
        console.log("logged in !");
    };
    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement={'end'} className={`${styles["side-drawer"]} p-3`}>
                <Offcanvas.Header closeButton className={`${styles["side-drawer-header"]} pb-4`} closeVariant='white'>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className={`${styles["side-drawer-body"]} py-4`}>
                    <div className={`${styles["raaga-logo-container"]} pt-2 pb-5 d-flex justify-content-center`}>
                        <Image
                            className={`${styles["nav-logo"]}`}
                            src={logo}
                            alt="raaga-logo"
                        />
                    </div>

                    {loggedInUser.isLoggedIn ?
                        <div>
                            <Button
                                variant="primary"
                                className={`${styles["get-otp-button"]} mb-3`}

                            >
                                My Profile
                            </Button>
                            <Button
                                variant="primary"
                                className={`${styles["get-otp-button"]}`}

                            >
                                Sign Out
                            </Button>
                        </div>
                        :
                        <div>
                            <Form>
                                <Form.Group className="mb-5" controlId="formBasicEmail">
                                    <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your mobile number</Form.Label>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                                        type="tele"
                                        placeholder="ex- 919954199108"
                                        pattern="[0-9]{12}"
                                        maxLength="12"
                                        title="Please enter a valid phone number" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label className={`${styles["form-label"]} mb-4`}>{otpSentNotification}</Form.Label>
                                    <Form.Control type="password" placeholder="OTP" disabled={otpSentNotification === ""} maxLength={6} />
                                </Form.Group>

                                {otpSentNotification === "" ? <Button
                                    variant="primary"
                                    type="submit"
                                    className={`${styles["get-otp-button"]}`}
                                    onClick={(e) => handleSendOtp(e)}
                                >
                                    Get OTP
                                </Button>
                                    :
                                    <Button
                                        variant="primary"
                                        className={`${styles["get-otp-button"]}`}
                                        onClick={(e) => handleSubmitOTP(e)}

                                    >
                                        Submit OTP
                                    </Button>}

                            </Form>
                            <span className={`${styles["footer-text"]} d-flex align-items-center flex-column mt-5`}>
                                <p>
                                    By proceeding you agree to the
                                </p>
                                <p className={`${styles["footer-terms"]} m-0`}>
                                    Term of Use
                                </p>
                                <p className={`${styles["footer-new-to-raaga"]} mt-5`}>
                                    New to Raaga ?
                                </p>
                                <Button className={`${styles["signup-button"]} m-0`}>
                                    Signup now !
                                </Button>
                            </span>
                        </div>
                    }


                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default SideDrawer;