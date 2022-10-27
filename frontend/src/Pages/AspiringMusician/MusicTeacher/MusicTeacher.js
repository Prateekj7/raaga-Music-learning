import React, { useEffect, useState } from "react";

import MusicTeachers from "./MusicTeachers";
import Review from "./Review";

import Teachers from "./MusicTeacher.module.css";

import Pagination from "./Paginaiton";
import { Button, Col, Container, Row } from "react-bootstrap";
import MenuItem from "./MenuItem";

const MusicTeacher = () => {
  const [teacher, setTeacher] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data));
  }, []);

  return (
    <div className="py-5">
      <Container className="py-5">
        <Row>
          <Col>
            <h1>Music Teacher</h1>
          </Col>
          <Col xs={6}></Col>
          <Col>
            <Button variant="warning" className="m-1">
              Vocal
            </Button>
            <Button className="m-1">Instrument</Button>
          </Col>
          <MenuItem></MenuItem>
          <div className="border-bottom border-dark"></div>
          <div className="mx-2 ">
            {teacher.map((teachers) => (
              <MusicTeachers
                key={teacher._id}
                teachers={teachers}
              ></MusicTeachers>
            ))}
          </div>
        </Row>
        <div className="d-flex justify-content-center">
          <Pagination></Pagination>
        </div>
      </Container>
    </div>
  );
};

export default MusicTeacher;
