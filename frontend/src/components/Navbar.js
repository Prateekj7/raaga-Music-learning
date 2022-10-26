import { useState, useEffect, useMemo } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from "../images/logo.png";
import loginIcon from "../images/loginIcon.svg";
import styles from "./Navbar.module.css";

function BasicExample() {

    const [bgColorSolid, setBgColor] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const scrollHeight = useMemo(() => 1, []);

    useEffect(() => {
        if (mobileNavOpen) {
            setBgColor(true);
        }
        else if (!mobileNavOpen && window.scrollY <= scrollHeight) {
            setBgColor(false);
        }
    }, [mobileNavOpen]);

    const toggleMobileNavState = () => {
        setMobileNavOpen(prevState => !prevState);
    };

    const handleNavSelect = () => {
        setMobileNavOpen(false);
    };

    const handleChangeBgColorOnScroll = () => {
        if (window.scrollY >= scrollHeight) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    };

    window.addEventListener('scroll', handleChangeBgColorOnScroll);

    return (
        <Navbar variant="dark" collapseOnSelect={true} expand="lg" fixed="top" onSelect={handleNavSelect}
            className={`${styles["navbar"]}` + (bgColorSolid ? ` ${styles["navbar-solid-bg"]}` : ``)}>
            <Container>
                <Navbar.Brand href="#home" className="p-2">
                    <img
                        className={`${styles["nav-logo"]}`}
                        src={logo}
                        alt="raaga-logo"
                    />
                </Navbar.Brand>
                <Form className="ms-auto order-lg-last p-2" >
                    <button className={`${styles["navbar-login-button"]}`}>
                        <img className={`${styles["navbar-login-button-img"]}`} src={loginIcon} alt="login button" width="25vh"></img>
                    </button>
                </Form>
                <Navbar.Toggle aria-controls="basic-navbar-nav " onClick={toggleMobileNavState} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-lg-auto px-2">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#news">News</Nav.Link>
                        <Nav.Link href="#reviews">Reviews</Nav.Link>
                        <Nav.Link href="#songs">Songs</Nav.Link>
                        <Nav.Link href="#lyrics">Lyrics</Nav.Link>
                        <Nav.Link href="#biographies">Biographies</Nav.Link>
                        <Nav.Link href="#musicTeacher">Music Teacher</Nav.Link>
                        <Nav.Link href="#aspiringMusician">Aspiring Musician</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;