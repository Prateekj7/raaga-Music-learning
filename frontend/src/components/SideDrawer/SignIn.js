import React, { useState, useContext, useRef } from 'react';
import styles from "./SideDrawer.module.css";
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import Alert from './Alert';

function SignIn({ handleShowSignUpPage, handleCloseDrawer }) {
    // const { loggedInUserContext } = useContext(LoginContext);
    // const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    // const [otpSentNotification, setOtpSentNotification] = useState("");
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1000)
    }

    // const handleSendOtp = (e) => {
    //     e.preventDefault();
    //     setOtpSentNotification("OTP has been sent to +91-9954199108");
    // };
    // const handleSubmitSignInOTP = (e) => {
    //     e.preventDefault();
    //     handleCloseDrawer();
    //     setOtpSentNotification("");
    //     setTimeout(() => {
    //         setLoggedInUser({
    //             isLoggedIn: true,
    //             category: "student",
    //             id: "10001"
    //         });
    //     }, 1000);
    // };
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (loading || sending) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
        handleCloseDrawer()
    }
    if (error) {

        errorElement = handleShowSignUpPage();

    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            showAlert("Check your email", "success");
        } else {
            showAlert("Please Enter your email", "success");
        }
    };
    return <div>
        <Alert alert={alert}></Alert>
        <Form onSubmit={handleSubmit} id="sendOTPForm">
            {/* <Form.Group className="mb-4" controlId="formBasicPhone">
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
            </Form.Group> */}
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your email</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    ref={emailRef}
                    type="email"
                    placeholder="Enter email"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your password</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                    required
                />
            </Form.Group>
            <button
                className="btn btn-link text-white p-1 m-1  text-decoration-none"
                onClick={resetPassword}
            >
                Forget Password?
            </button>
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]}`}


            >
                SignIn
            </button>
        </Form>
        {errorElement}


        {/* <Form onSubmit={handleSubmitSignInOTP} id="submitSignInOTPForm">
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
        </Form> */}

        {/* {otpSentNotification === "" ?
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
            </button>} */}


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
