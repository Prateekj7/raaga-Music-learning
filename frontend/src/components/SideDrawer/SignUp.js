import React, { useContext } from 'react';
import styles from "./SideDrawer.module.css";
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";
import { useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { useMutation } from "@tanstack/react-query";
import axios from 'axios';
import { useForm } from "react-hook-form";
import Notification from "../Notification";




function SignUp({ handleHideSignupPage, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, isLoadingFirebase, error] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const { isLoading: isLoadingPost, mutate: createUserInDB, isSuccess: isSuccessPost } = useMutation({
        mutationFn: newMeeting => {
            return axios.post('/api/insert_data/', newMeeting)
        },
        onSuccess: (result, postOptions) => {
            setTimeout(() => {
                setLoggedInUser({
                    isLoggedIn: true,
                    category: postOptions.table,
                    id: result.data
                });
            }, 1500)
            setTimeout(() => {
                if (postOptions.table === "student") {
                    navigate("/aspiring-musician-profile");
                }
                else if (postOptions.table === "teacher") {
                    navigate("/music-teacher-profile");
                }
                handleCloseDrawer();
            }, 2000)
        }
    })

    let signInError;


    if (isLoadingFirebase || isLoadingPost) {
        return <Loading></Loading>;
    }

    if (error) {
        signInError = (
            <p className='text-danger'>
                {error?.message}
            </p>
        )
    }

    if (isSuccessPost) {
        return <Notification show={true} containerPosition="absolute" message="You have successfully tuned into Raaga !" />
    }

    const handleRegister = async (formData) => {
        const { userType, name, email, password, gender, contactNumber } = formData;
        const createdInFirebase = await createUserWithEmailAndPassword(email, password);
        if (createdInFirebase) {
            let postBody = {
                table: userType,
                data: {
                    name: name,
                    email_id: email,
                    gender: gender,
                    contact_number: contactNumber,
                }
            }
            if (userType === "teacher") {
                postBody.data.schedule = '{ "vocal": {}, "instrumental": {} }';
            }
            createUserInDB(postBody);
        }
    };
    return <div>
        <Form onSubmit={handleSubmit(handleRegister)} id="signUpForm">

            <Form.Group className="mb-4" controlId="formUserTypeDropDown">
                <Form.Label className={`${styles["form-label"]} mb-3`}>Why do you want to join?</Form.Label>
                <select className=
                    {`${styles["dropdown"]} text-center`}
                    {...register("userType")}
                >
                    <option className={`${styles["dropdown-menu"]}`} value="student">To learn music</option>
                    <option className={`${styles["dropdown-menu"]}`} value="teacher">To teach music</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label visuallyHidden>Full Name</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    {...register("name")}
                    type="text"
                    placeholder="Full Name *"
                    required
                    maxLength={50}
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label visuallyHidden>Email</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    {...register("email")}
                    type="email"
                    placeholder="Email ID *"
                    required />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label visuallyHidden>Password</Form.Label>
                <Form.Control className={`${styles["form-number-input"]} shadow-none p-0`}
                    {...register("password")}
                    type="password"
                    placeholder="Password *"
                    required />
            </Form.Group>
            {signInError}

            <Form.Group className="mb-3" controlId="formBasicGenderRadio">
                <div key={`inline-radio`} className="d-flex">
                    <Form.Check
                        className={`${styles["form-label"]} me-5`}
                        inline
                        label="Male"
                        {...register("gender")}
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
                        {...register("gender")}
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
                    {...register("contactNumber")}
                    type="tele"
                    placeholder="Mobile ex- 919954199108 *"
                    pattern="[0-9]{7,15}"
                    maxLength="15"
                    title="Please enter a valid phone number"
                    required />
            </Form.Group>
            <button
                variant="primary"
                type="submit"
                value="SignUp"
                className={`${styles["get-otp-button"]}`}


            >
                SignUp
            </button>
        </Form>
        {/* <Form onSubmit={handleSubmitSignUpOTP} id="submitSignUpOTPForm">
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
        </Form> */}

        {/* {otpSentNotification === "" ?
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
            </button>} */}


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
                SignIn now !
            </button>
        </span>
    </div>
}

export default SignUp;
