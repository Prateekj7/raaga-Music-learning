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
import axios from 'axios';
import { useForm } from "react-hook-form";
import Notification from "../Notification";
import { useMutation } from "@tanstack/react-query";


function SignIn({ handleShowSignUpPage, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const { isLoading: isLoadingPost, mutate: signInUserDB, isSuccess: isSuccessPost } = useMutation({
        mutationFn: userDetails => {
            return axios.post('/api/check_user_existance/', userDetails)
        },
        onSuccess: (result) => {
            setTimeout(() => {
                setLoggedInUser({
                    isLoggedIn: true,
                    category: result.data.type,
                    id: result.data.id
                });
            }, 1500)

            setTimeout(() => {
                if (result.data.type === "student") {
                    navigate("/aspiring-musician-dashboard");
                }
                else if (result.data.type === "teacher") {
                    navigate("/music-teacher-dashboard");
                }
                handleCloseDrawer();
            }, 2000)
        }
    })

    let signInError;

    if (loading || sending || isLoadingPost) {
        return <Loading></Loading>;
    }

    if (isSuccessPost) {
        return <Notification show={true} containerPosition="absolute" message="You have successfully logged in !" />
    }

    if (error) {
        signInError = (
            <p className='text-white'>
                Sorry! User not found, please sign up.
            </p>
        )
    }

    const handleLogin = async (formData) => {
        const { email, password } = formData;
        const loggedIntoFirebase = await signInWithEmailAndPassword(email, password);
        if (loggedIntoFirebase) {
            signInUserDB({
                email_id: email,
            });
        }
    };
    // const resetPassword = async () => {
    //     const email = emailRef.current.value;
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         showAlert("Check your email", "success");
    //     } else {
    //         showAlert("Please Enter your email", "success");
    //     }
    // };
    return <div>
        <Form onSubmit={handleSubmit(handleLogin)} id="sendOTPForm">
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your email</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    type="email"
                    placeholder="Enter email"
                    required
                    {...register("email")}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Enter your password</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    type="password"
                    placeholder="Password"
                    required
                    {...register("password")}
                />
            </Form.Group>
            {/* <button
                className="btn btn-link text-white p-1 m-1  text-decoration-none"
            onClick={resetPassword}
            >
                Forget Password?
            </button> */}
            <button
                variant="primary"
                type="submit"
                className={`${styles["get-otp-button"]} mb-3`}


            >
                SignIn
            </button>
        </Form>
        {signInError}


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
