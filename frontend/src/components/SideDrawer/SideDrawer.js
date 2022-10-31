import React, { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from "./SideDrawer.module.css";
import logo from "../../images/logo.png";
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import { LoginContext } from "../../LoginContext";
import SignUp from './SignUp';
import SignIn from './SignIn';

function SideDrawer({ show, handleCloseDrawer }) {
    const { loggedInUserContext } = useContext(LoginContext);
    const [loggedInUser, setLoggedInUser] = loggedInUserContext;

    const [showSignUpPage, setShowSignUpPage] = useState(false);
    const handleShowSignUpPage = () => {
        setShowSignUpPage(true);
    };
    const handleHideSignupPage = () => {
        setShowSignUpPage(false);
    };

    const handleSignOut = () => {
        handleCloseDrawer();
        setTimeout(() => {
            handleHideSignupPage();
            setLoggedInUser({
                isLoggedIn: false,
                category: "",
                id: ""
            });
        }, 1000);
    };

    function LogOutPage() {
        return <div>
            <button
                variant="primary"
                className={`${styles["get-otp-button"]} mb-3`}

            >
                My Profile
            </button>
            <button
                variant="primary"
                className={`${styles["get-otp-button"]}`}
                onClick={handleSignOut}

            >
                Sign Out
            </button>
        </div>
    }

    return (
        <>
            <Offcanvas show={show} onHide={handleCloseDrawer} placement={'end'} className={`${styles["side-drawer"]} p-3`}>
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
                        <LogOutPage />
                        :
                        showSignUpPage ?
                            <SignUp
                                handleHideSignupPage={handleHideSignupPage}
                                handleCloseDrawer={handleCloseDrawer}
                            />
                            : <SignIn
                                handleShowSignUpPage={handleShowSignUpPage}
                                handleCloseDrawer={handleCloseDrawer}
                            />
                    }

                </Offcanvas.Body>

            </Offcanvas>
        </>
    );
}

export default SideDrawer;