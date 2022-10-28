import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./SideDrawer.module.css";
import logo from "../../images/logo.png";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';

function SideDrawer({ show, handleClose }) {

    console.log(show);
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
                    <Form>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your mobile number</Form.Label>
                            <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                                type="tele"
                                placeholder="Enter mobile number"
                                pattern="[0-9]{12}"
                                maxlength="12"
                                title="Please enter a valid phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            {/* <Form.Label className={`${styles["form-label"]} mb-4`}>Enter your mobile number</Form.Label> */}
                            <Form.Control type="password" placeholder="OTP" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className={`${styles["get-otp-button"]}`}>
                            Get OTP
                        </Button>
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
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideDrawer;