import React, { useEffect, useState } from "react";
import TeacherCard from "../components/MusicTeacher/TeacherCard";
import styles from "./AspiringMusician.module.css";
import Pagination from "../components/Paginaiton";
import { Col, Container, Row } from "react-bootstrap";
import doubleArrowIcon from "../images/doubleArrowIcon.png";
import singleArrowIcon from "../images/singleArrowIcon.svg";
import Form from 'react-bootstrap/Form';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import Button from "../components/Button";

const AspiringMusician = () => {
  const [filter, setFilter] = useState({ categoryName: "vocal", categoryValue: "Ghazal" });
  const teacherQueryFn = () => {
    return axios.get(`/api/read_teacher_main_data?page_size=100&page_number=1&category_name=${filter.categoryName}&category_value=${filter.categoryValue}`)
  };
  const VocalOptionsQueryFn = () => {
    return axios.get(`/api/read_data?page_size=100&page_number=1&table=vocal&columns=["*"]`)
  };
  const InstrumentalOptionsQueryFn = () => {
    return axios.get(`/api/read_data?page_size=100&page_number=1&table=instrumental&columns=["*"]`)
  };

  const { isLoading: isLoadingTeachers, data: teachers } = useQuery({
    queryKey: ['teachers', filter.categoryName, filter.categoryValue],
    queryFn: teacherQueryFn,
  });
  const { isLoading: isLoadingVocalOptions, data: vocalOptions } = useQuery({
    queryKey: ['vocalOptions'],
    queryFn: VocalOptionsQueryFn,
  });
  const { isLoading: isLoadingInstrumentalOptions, data: instrumentalOptions } = useQuery({
    queryKey: ['instrumentalOptions'],
    queryFn: InstrumentalOptionsQueryFn,
  });

  function DropDownOptions() {
    const mappingFn = (item) =>
      <option value={item.name} key={item.id}>
        {item.name}
      </option>;

    if (filter.categoryName == "vocal" && (!isLoadingVocalOptions)) {
      return vocalOptions?.data.map(mappingFn);
    }
    else if (filter.categoryName == "instrumental" && (!isLoadingInstrumentalOptions)) {
      return instrumentalOptions?.data.map(mappingFn);
    }
    else {
      return [];
    }

  }

  const handleFilterChange = (e) => {
    if (e.target.name === "categoryValue") {
      setFilter((prevState) => ({ ...prevState, categoryValue: e.target.value }));
    }
    else {
      if (e.target.name === "vocal") {
        setFilter({ categoryName: "vocal", categoryValue: "Ghazal" });
      }
      else if (e.target.name === "instrumental") {
        setFilter({ categoryName: "instrumental", categoryValue: "Sitar" });
      }
    }
  };

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
            <Button
              name="vocal"
              className={`me-4`}
              selected={filter.categoryName === "vocal"}
              onClick={handleFilterChange}
              text="Vocal"
            />
            <Button
              name="instrumental"
              className={`me-4`}
              selected={filter.categoryName === "instrumental"}
              onClick={handleFilterChange}
              text="Instrumental"
            />
          </div>
        </Col>

      </Row>
      <Row>
        <div className="d-flex align-items-center">
          <Col lg={2}>
            <div className={`${styles["dropdown-label"]} me-3`}>Select Genre</div>
          </Col>
          <Col lg={2}>
            <Form.Select
              aria-label="Default select example"
              value={filter.categoryValue}
              onChange={handleFilterChange}
              name="categoryValue"
            >
              <DropDownOptions />
            </Form.Select>
          </Col>
        </div>
      </Row>
      <Row>
        <div className="border-bottom border-dark my-3"></div>
        <ul className="m-0 p-0">
          {isLoadingTeachers ?
            Array.from(Array(5), (e, i) => <TeacherCard key={i} skeleton />) :
            teachers?.data.length === 0 ?
              <h5 className="d-flex justify-content-center">Sorry no teachers found, please try selecting other genre.</h5> :
              teachers?.data.map((teacher) => (
                <TeacherCard
                  key={teacher.id}
                  teacher={teacher}
                ></TeacherCard>
              ))}
        </ul>
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination></Pagination>
      </div>
    </Container>
  );
};

export default AspiringMusician;
