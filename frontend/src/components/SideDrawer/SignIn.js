import React, { useState, useContext } from 'react';
import styles from "./SideDrawer.module.css";
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Notification from "../Notification";


function SignIn({ handleShowSignUpPage, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const [potentialUser, setPotentialUser] = useState({ category: "", phone: "" });
    const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState({ show: false, message: "" });

    const handleSendOtp = (formData) => {
        if (formData.signInPhone === "9654535144") {
            setPotentialUser({ category: "teacher", phone: formData.signInPhone });
        }
        else if (formData.signInPhone === "9954199108") {
            setPotentialUser({ category: "student", phone: formData.signInPhone });
        }
        else {
            setShowNotification({ show: true, message: "User not found! Please Sign Up." });
        }
    };
    const handleSubmitSignInOTP = () => {
        handleCloseDrawer();
        setPotentialUser({ category: "", phone: "" });
        setTimeout(() => {
            setLoggedInUser({
                isLoggedIn: true,
                category: potentialUser.category,
                id: "10001"
            });
        }, 1000);

        if (potentialUser.category === "teacher") {
            navigate("/music-teacher-profile");
        }
        else if (potentialUser.category === "student") {
            navigate("/aspiring-musician-profile");
        }

    };
    return <div>
        <Notification show={showNotification.show} setShow={setShowNotification} message={showNotification.message} />
        <Form onSubmit={handleSubmit(handleSendOtp)} id="sendOTPForm">
            <Form.Group className="mb-4" controlId="formBasicPhone">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your mobile number</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    {...register("signInPhone")}
                    type="tele"
                    placeholder="ex- 919954199108"
                    pattern="[0-9]{7,15}"
                    maxLength="15"
                    title="Please enter a valid phone number"
                    required
                />
            </Form.Group>
        </Form>

        <Form onSubmit={handleSubmit(handleSubmitSignInOTP)} id="submitSignInOTPForm">
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className={`${styles["form-label"]} mb-2`}>
                    {potentialUser.phone === "" ? "" : `OTP sent to +91-${potentialUser.phone}`}
                </Form.Label>
                <Form.Control
                    type="password"
                    placeholder="OTP"
                    disabled={potentialUser.phone === ""}
                    minLength={6} maxLength={6}
                    required
                />
            </Form.Group>
        </Form>

        {potentialUser.phone === "" ?
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
