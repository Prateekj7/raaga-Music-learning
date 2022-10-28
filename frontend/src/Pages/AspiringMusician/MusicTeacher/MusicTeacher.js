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
    let data = {
      page_size: 100,
      page_number: 1,
      category_name: "vocal",
      category_value: "ghazal"
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const getTableData = async () => {
      try {
        const response = await fetch("/read_teacher_main_data/", requestOptions);
        const result = await response.json();
        if (response.ok) {
          setTeacher(result);
          console.log(result);
        } else {
          throw Error(result);
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    getTableData();
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
                key={teachers.id}
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
