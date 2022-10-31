import React, { useState, useContext } from 'react';
import styles from "./SideDrawer.module.css";
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";


function SignIn({ handleShowSignUpPage, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const [otpSentNotification, setOtpSentNotification] = useState("");

    const handleSendOtp = (e) => {
        e.preventDefault();
        setOtpSentNotification("OTP has been sent to +91-9954199108");
    };
    const handleSubmitSignInOTP = (e) => {
        e.preventDefault();
        handleCloseDrawer();
        setOtpSentNotification("");
        setTimeout(() => {
            setLoggedInUser({
                isLoggedIn: true,
                category: "student",
                id: "10001"
            });
        }, 1000);
    };
    return <div>
        <Form onSubmit={handleSendOtp} id="sendOTPForm">
            <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your mobile number</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    name="signInPhone"
                    type="tele"
                    placeholder="ex- 919954199108"
                    pattern="[0-9]{7,15}"
                    maxLength="15"
                    title="Please enter a valid phone number"
                    required
                />
            </Form.Group>
        </Form>

        <Form onSubmit={handleSubmitSignInOTP} id="submitSignInOTPForm">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={`${styles["form-label"]} mb-2`}>{otpSentNotification}</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="OTP"
                    disabled={otpSentNotification === ""}
                    minLength={6} maxLength={6}
                    required
                />
            </Form.Group>
        </Form>

        {otpSentNotification === "" ?
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]}`}
                form="sendOTPForm"
            >
                Get OTP
            </button>
            :
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]}`}
                form="submitSignInOTPForm"

            >
                Submit OTP
            </button>}

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
            <button
                className={`${styles["signup-button"]} m-0`}
                onClick={handleShowSignUpPage}
            >
                Signup now !
            </button>
        </span>
    </div>
}
export default SignIn;
