import { useState, useEffect, useMemo, useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import logo from "../images/logo.png";
import loginIcon from "../images/loginIcon.svg";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import { LoginContext } from "../LoginContext";

function BasicExample({ showDrawer, handleShowDrawer, handleCloseDrawer }) {
  const { loggedInUserContext } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = loggedInUserContext;

  const [bgColorSolid, setBgColor] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const scrollHeight = useMemo(() => 1, []);


  let currentRoute = useLocation().pathname;
  useEffect(() => {
    if (mobileNavOpen) {
      setBgColor(true);
    } else if (!mobileNavOpen && window.scrollY <= scrollHeight) {
      setBgColor(false);
    }
  }, [mobileNavOpen]);

  const toggleMobileNavState = () => {
    setMobileNavOpen((prevState) => !prevState);
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

  window.addEventListener("scroll", handleChangeBgColorOnScroll);

  return (
    <>
      <Navbar
        variant="dark"
        collapseOnSelect={true}
        expand="lg"
        fixed="top"
        onSelect={handleNavSelect}
        className={
          `${styles["navbar"]}` +
          (currentRoute !== "/" ? ` ${styles["navbar-solid-bg"]}` :
            (bgColorSolid ? ` ${styles["navbar-solid-bg"]}` : ``)
          )
        }
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="p-2">
            <img
              className={`${styles["nav-logo"]}`}
              src={logo}
              alt="raaga-logo"
            />
          </Navbar.Brand>
          <div className="ms-auto order-lg-last p-2">
            <button className={`${styles["navbar-login-button"]}`} onClick={handleShowDrawer}>
              <img
                className={`${styles["navbar-login-button-img"]}`}
                src={loginIcon}
                alt="login button"
                width="25vh"
              ></img>
            </button>
          </div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav "
            onClick={toggleMobileNavState}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-lg-auto px-2">
              <Nav.Link as={Link} to="/" eventKey="1">Home</Nav.Link>
              <Nav.Link as={Link} to="/News" >News</Nav.Link>
              <Nav.Link as={Link} to="/Reviews" >Reviews</Nav.Link>
              <Nav.Link as={Link} to="/Songs" >Songs</Nav.Link>
              <Nav.Link as={Link} to="/Lyrics" >Lyrics</Nav.Link>
              <Nav.Link as={Link} to="/Biographies" >Biographies</Nav.Link>
              <Nav.Link as={Link} to="/music-teacher" eventKey="2">Music Teacher</Nav.Link>
              <Nav.Link as={Link} to="/aspiring-musician" eventKey="3">Aspiring Musician</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideDrawer showDrawer={showDrawer} handleCloseDrawer={handleCloseDrawer} />
    </>
  );
}

export default BasicExample;
