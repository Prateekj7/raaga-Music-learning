import React, { useEffect, useState } from "react";
import TeacherCard from "./AspiringMusician/MusicTeacher/TeacherCard";
import styles from "./AspiringMusician.module.css";
import Pagination from "./AspiringMusician/MusicTeacher/Paginaiton";
import { Col, Container, Row } from "react-bootstrap";
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import Form from 'react-bootstrap/Form';

const AspiringMusician = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    let data = {
      page_size: 100,
      page_number: 1,
      category_name: "vocal",
      category_value: "ghazal"
    };

    let csrfToken = null;

    //get token function. call this to open admin and raaga website together
    async function getCsrfToken(){
        if(csrfToken==null){
            const res = await fetch('/api/csrf_token/');
        }
        const data = await response.json();
        csrfToken = data.csrfToken;
        return csrfToken;
    }

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        'X-CSRFToken': getCsrfToken()
      },
      body: JSON.stringify(data),
    };
    
    const getTableData = async () => {
      try {
        const response = await fetch("/api/read_teacher_main_data/", requestOptions);
        const result = await response.json();
        if (response.ok) {
          setTeachers(result);
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
    <Container fluid className={`${styles["aspiring-musician-container"]}`}>
      <Row>
        <Col lg={8}>
          <div className={`${styles["featured-artist-header"]} pb-lg-4 py-3`}>
            <img src={doubleArrowIcon} className={`${styles["featured-artist-header-double-arrow-icon"]} p-1`} />
            <h4 className={`${styles["featured-artist-heading"]}`}>MUSIC TEACHER</h4>
            <img src={singleArrowIcon} className={`${styles["featured-artist-header-single-arrow-icon"]} p-1`} />
          </div>
        </Col>
        <Col>
          <div className={`pb-lg-4 py-3 d-flex justify-content-lg-end`}>
            <button className={`${styles["login-button"]} me-4`}>
              Vocal
            </button>
            <button className={`${styles["login-button"]}`}>Instrument</button>
          </div>
        </Col>

      </Row>
      <Row>
        <div className="d-flex align-items-center">
          <Col lg={2}>
            <div className={`${styles["dropdown-label"]} me-3`}>Select Genre</div>
          </Col>
          <Col lg={2}>
            <Form.Select aria-label="Default select example">
              <option>Indian classical</option>
              <option value="1">Ghazal</option>
              <option value="2">Western Classical</option>
              <option value="3">Pop</option>
            </Form.Select>
          </Col>
        </div>
      </Row>
      <Row>
        <div className="border-bottom border-dark my-3"></div>
        <div className="m-0 p-0">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
            ></TeacherCard>
          ))}
        </div>
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination></Pagination>
      </div>
    </Container>
  );
};

export default AspiringMusician;
