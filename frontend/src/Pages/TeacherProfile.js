import React, { useState, useContext } from "react";
import styles from "./TeacherProfile.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import FeaturedArtistCard from "../components/FeaturedArtistCard";
import { LoginContext } from "../LoginContext";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Schedule from "../components/Schedule/Schedule";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

function TeacherProfile() {
    const queryClient = useQueryClient();
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const [editProfileMode, setEditProfileMode] = useState(false);
    const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();
    const { isLoading: isLoadingProfile, data: savedProfile } = useQuery({
        queryKey: ['teacherProfile', loggedInUser.id],
        queryFn: () => {
            return axios.get(`/api/read_teacher_details/?teacher_id=${loggedInUser.id}`);
        },
        select: (data) => {
            return data.data[0];
        },
        onSuccess: (data) => reset(data),
    });
    const { isLoadingUpdateProfile, mutate: updateProfile } = useMutation({
        mutationFn: postBody => {
            return axios.post('/api/update_data/', postBody)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['teacherProfile', loggedInUser.id] })
        }
    })

    const handleSaveProfile = (formData) => {
        setEditProfileMode(false);
        if (!isDirty) {
            return;
        }
        const dirtyForm = Object.keys(dirtyFields)
            .reduce((finalData, key) => ({ ...finalData, [key]: formData[key] }), {});
        updateProfile({
            "table": "teacher",
            "id": loggedInUser.id,
            "data": dirtyForm
        })
    };
    const handleCancelEditProfile = (e) => {
        e.preventDefault();
        setEditProfileMode(false);
        reset(savedProfile);
    };

    const handleEditProfile = () => {
        setEditProfileMode(true);
    };

    if (!loggedInUser.isLoggedIn && (loggedInUser.category !== "teacher")) {
        return (
            <Container fluid className={`${styles["aspiring-musician-container"]}`}>
                <h4>Please login to view your profile</h4>
            </Container >
        );
    }

    return (
        <Container fluid className={`${styles["aspiring-musician-container"]}`}>
            <Row>
                <Col>
                    <div className={`${styles["featured-artist-header"]} pb-lg-4 py-3`}>
                        <img alt="double-arrow-icon" src={doubleArrowIcon} className={`${styles["featured-artist-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["featured-artist-heading"]}`}>My Profile</h4>
                        <img src={singleArrowIcon} className={`${styles["featured-artist-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <FeaturedArtistCard showFooter={false} imgURL={savedProfile?.image_url} />
                </Col>
                <Col xs={12} md={9}>
                    <div className="d-flex align-items-start mb-2">
                        <h4 className="">Basic Info </h4>
                        <button className="border-0 bg-transparent p-0 m-0" onClick={handleEditProfile}>
                            <h4 className={`${styles["featured-artist-header-single-arrow-icon"]} p-0 m-0 ms-3  d-flex align-items-center`}>
                                <FaEdit className={`${styles["edit-icon"]}`} />
                            </h4>
                        </button>
                    </div>
                    <Form onSubmit={handleSubmit(handleSaveProfile)} onReset={handleCancelEditProfile} id="signUpForm" className="mb-3">
                        <fieldset disabled={!editProfileMode}>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicName">
                                <Form.Label column sm="2">Full Name</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("name")}
                                        type="text"
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            {savedProfile &&
                                <Form.Group as={Row} className="mb-lg-3" controlId="formBasicGenderRadio">
                                    <Form.Label column sm="2">Gender</Form.Label>
                                    <Col className="d-flex align-items-center">
                                        <div className="">
                                            <Form.Check
                                                className={`${styles["form-label"]} me-5`}
                                                inline
                                                label="Male"
                                                {...register("gender")}
                                                type={"radio"}
                                                id={`male`}
                                                value="male"
                                            />
                                            <Form.Check
                                                className={`${styles["form-label"]}`}
                                                inline
                                                label="Female"
                                                {...register("gender")}
                                                type={"radio"}
                                                id={`female`}
                                                value="female"
                                            />
                                        </div>
                                    </Col>
                                </Form.Group>
                            }
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicEmail">
                                <Form.Label column sm="2">Email</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none`}
                                        {...register("email_id")}
                                        type="email"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicPhone">
                                <Form.Label column sm="2" className={`${styles["form-label"]}`}>Contact</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none`}
                                        {...register("contact_number")}
                                        type="tele"
                                        pattern="[0-9]{7,15}"
                                        maxLength="15"
                                        title="Please enter a valid phone number"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicCity">
                                <Form.Label column sm="2">City</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("city")}
                                        type="text"
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicState">
                                <Form.Label column sm="2">State</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("state")}
                                        type="text"
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicPinCode">
                                <Form.Label column sm="2">Pincode</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("pin_code")}
                                        type="text"
                                        maxLength={20}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicAbout">
                                <Form.Label column sm="2">About</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("about")}
                                        as="textarea"
                                        rows={3}
                                        maxLength={500}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicQualification">
                                <Form.Label column sm="2">Qualification</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("qualification")}
                                        type="text"
                                        maxLength={100}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicAchievement">
                                <Form.Label column sm="2">Achievement</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("achievement")}
                                        type="text"
                                        maxLength={200}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicExperience">
                                <Form.Label column sm="2">Experience (in years) </Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        {...register("experience")}
                                        type="number"
                                        onWheel={(e) => e.target.blur()}
                                        min="0"
                                        max="100"
                                    />
                                </Col>
                            </Form.Group>
                            <div className={`pb-lg-4 py-3 d-flex justify-content-lg-end`}>
                                <button className={`${styles["login-button"]} me-4`}
                                    disabled={!editProfileMode}
                                    type="reset"
                                >
                                    Cancel
                                </button>
                                <button className={`${styles["login-button"]}`}
                                    disabled={!editProfileMode}
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </fieldset>
                    </Form>

                    <Schedule />
                </Col>
            </Row>
        </Container >
    );
}

export default TeacherProfile;