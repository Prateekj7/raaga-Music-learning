import React, { useEffect, useState } from "react";

import Navbar from "../../Navbar";

import { Button, Col, Container, Row } from "react-bootstrap";
import List from "./List";
import Profiles from "./Profiles";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className="py-5">
      <Container className="py-5">
        <Row>
          <Col>
            <ProfileDetails></ProfileDetails>
          </Col>

          <div className="border-bottom border-dark"></div>
          <div className=" m-1">
            {teacher.map((teachers) => (
              <List key={teacher._id} teachers={teachers}></List>
            ))}
          </div>
        </Row>
        <div className="justify-content-center"></div>
      </Container>
    </div>
  );
};

export default Profile;
