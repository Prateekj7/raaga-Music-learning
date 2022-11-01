import React, { useState, useContext } from 'react';
import styles from "./SideDrawer.module.css";
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";


function SignUp({ handleHideSignupPage, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const [otpSentNotification, setOtpSentNotification] = useState("");
    const handleSignUp = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());
        setOtpSentNotification("OTP has been sent to +91-9954199108");
    };

    const handleSubmitSignUpOTP = (e) => {
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
        <Form onSubmit={handleSignUp} id="signUpForm">
            <Form.Group className="mb-4" controlId="formUserTypeRadio">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Sign up as a teacher or student</Form.Label>

                <div key={`inline-radio`} className="d-flex">
                    <Form.Check
                        className={`${styles["form-label"]}`}
                        inline
                        label="Music Teacher"
                        name="userType"
                        type={"radio"}
                        id={`teacher`}
                        value="teacher"
                        defaultChecked
                        required
                    />
                    <Form.Check
                        className={`${styles["form-label"]}`}
                        inline
                        label="Aspiring Musician"
                        name="userType"
                        type={"radio"}
                        id={`student`}
                        value="student"
                        required
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label visuallyHidden>Full Name</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    name="name"
                    type="text"
                    placeholder="Full Name *"
                    required
                    maxLength={50}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label visuallyHidden>Email</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    name="email"
                    type="email"
                    placeholder="Email ID *"
                    required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicGenderRadio">
                <div key={`inline-radio`} className="d-flex">
                    <Form.Check
                        className={`${styles["form-label"]} me-5`}
                        inline
                        label="Male"
                        name="gender"
                        type={"radio"}
                        id={`male`}
                        value="male"
                        defaultChecked
                        required
                    />
                    <Form.Check
                        className={`${styles["form-label"]}`}
                        inline
                        label="Female"
                        name="gender"
                        type={"radio"}
                        id={`female`}
                        value="female"
                        required
                    />
                </div>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Label visuallyHidden className={`${styles["form-label"]} mb-3`}>Enter your mobile number</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    name="phone"
                    type="tele"
                    placeholder="Mobile ex- 919954199108 *"
                    pattern="[0-9]{7,15}"
                    maxLength="15"
                    title="Please enter a valid phone number"
                    required />
            </Form.Group>
        </Form>
        <Form onSubmit={handleSubmitSignUpOTP} id="submitSignUpOTPForm">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={`${styles["form-label"]} mb-2`}>{otpSentNotification}</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="OTP"
                    disabled={otpSentNotification === ""}
                    minLength="6" maxLength="6"
                    required
                />
            </Form.Group>
        </Form>

        {otpSentNotification === "" ?
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]}`}
                form="signUpForm"
            >
                Get OTP
            </button>
            :
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]}`}
                form="submitSignUpOTPForm"

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
                Already have an account ?
            </p>
            <button
                className={`${styles["signup-button"]} m-0`}
                onClick={handleHideSignupPage}
            >
                Login now !
            </button>
        </span>
    </div>
}

export default SignUp;