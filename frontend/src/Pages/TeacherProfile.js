import React, { useEffect, useState, useContext } from "react";
import styles from "./TeacherProfile.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import FeaturedArtistCard from "../components/FeaturedArtist/FeaturedArtistCard";
import { LoginContext } from "../LoginContext";
import { FaEdit } from "react-icons/fa";

function TeacherProfile() {

    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;
    const [savedProfile, setSavedProfile] = useState();

    useEffect(() => {
        let data = {
            id: loggedInUser.id,
        };

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        const getTableData = async () => {
            try {
                setSavedProfile(
                    {
                        name: "Joe Satriani",
                        gender: "male",
                        city: "Duliajan",
                        state: "Assam",
                        pin_code: "211008",
                        about: "I am a multi talented Grammy award winning multi instrumentalist.",
                        qualification: "Berklee College of Music",
                        contact_number: "91-9954199108",
                        email_id: "jor@gmail.com",
                        achievement: "Grammy, Tony, Emmy, Academy",
                        experience: "25",
                    }
                );
                const response = await fetch("/api/read_teacher_metadata/", requestOptions);
                const result = await response.json();
                if (response.ok) {
                    setSavedProfile(result[0]);
                } else {
                    throw Error(result);
                }
            } catch (err) {
                console.log(err.message);
            }
        };

        getTableData();
    }, [loggedInUser.id]);

    const handleSaveProfile = () => {
        console.log("hello");
    };

    console.log(savedProfile?.gender === "male");

    return (
        <Container fluid className={`${styles["aspiring-musician-container"]}`}>
            <Row>
                <Col>
                    <div className={`${styles["featured-artist-header"]} pb-lg-4 py-3`}>
                        <img alt="double-arrow-icon" src={doubleArrowIcon} className={`${styles["featured-artist-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["featured-artist-heading"]}`}>My Profile</h4>
                        <button className="border-0 bg-transparent">
                            <h4 className={`${styles["featured-artist-header-single-arrow-icon"]} p-0 m-0 ms-3  d-flex align-items-center`}>
                                <FaEdit />
                            </h4>
                        </button>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <FeaturedArtistCard showFooter={false} />
                </Col>
                <Col xs={12} md={9}>
                    <Form onSubmit={handleSaveProfile} id="signUpForm">
                        <fieldset disabled>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicName">
                                <Form.Label column sm="2">Full Name</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.name}
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
                                                name="gender"
                                                type={"radio"}
                                                id={`male`}
                                                value="male"
                                                defaultChecked={(savedProfile?.gender === "male")}

                                            />
                                            <Form.Check
                                                className={`${styles["form-label"]}`}
                                                inline
                                                label="Female"
                                                name="gender"
                                                type={"radio"}
                                                id={`female`}
                                                value="female"
                                                defaultChecked={savedProfile?.gender === "female"}
                                            />
                                        </div>
                                    </Col>
                                </Form.Group>
                            }
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicEmail">
                                <Form.Label column sm="2">Email</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none`}
                                        name="email"
                                        type="email"
                                        placeholder={savedProfile?.email_id}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicPhone">
                                <Form.Label column sm="2" className={`${styles["form-label"]}`}>Contact</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none`}
                                        name="phone"
                                        type="tele"
                                        placeholder={savedProfile?.contact_number}
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
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.city}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicState">
                                <Form.Label column sm="2">State</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.state}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicPinCode">
                                <Form.Label column sm="2">Pincode</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.pin_code}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicAbout">
                                <Form.Label column sm="2">About</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        as="textarea"
                                        rows={3}
                                        placeholder={savedProfile?.about}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicQualification">
                                <Form.Label column sm="2">Qualification</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.qualification}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicAchievement">
                                <Form.Label column sm="2">Achievement</Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.achievement}
                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-lg-3" controlId="formBasicExperience">
                                <Form.Label column sm="2">Experience (in years) </Form.Label>
                                <Col>
                                    <Form.Control className={`${styles["form-number-input"]} shadow-none `}
                                        name="name"
                                        type="text"
                                        placeholder={savedProfile?.experience}

                                        maxLength={50}
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default TeacherProfile;
