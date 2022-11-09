import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import styles from "./ReadMore.module.css";
import { Link, useNavigate } from "react-router-dom";
import Review from "./Review";

const ReadMore = ({ teacher }) => {
  const { name, image_url, experience, hourly_rate, video, address } = teacher;
  const [teacherReadMore, setTeacherReadMore] = useState();

  useEffect(() => {
    let data = {
      id: teacher.id,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const getTableData = async () => {
      try {
        const response = await fetch("/api/read_teacher_metadata/", requestOptions);
        const result = await response.json();
        if (response.ok) {
          setTeacherReadMore(result);
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
    <div>
      <Row>
        <Col lg={6}>
          <div>
            <ReactPlayer
              controls={true}
              url={teacherReadMore?.video_url}
              width="100%"
            />
          </div>
        </Col>
      </Row>

      <div className="border-bottom border-dark pb-4"></div>
      <Row>
        <Col lg={7}>
          <div className="d-flex">
            <div>
              <div className="d-flex align-items-center my-3">
                <h4 className={`${styles["teacher-name"]} p-0 m-0 me-2`}>{name}</h4>
                <h5 className={`${styles["teacher-experience"]} p-0 m-0 me-2`}>{experience} Years experience</h5>
                <div >
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="d-flex">
                <strong className={`${styles["read-more-bold"]} me-2`}>Address:</strong>
                <address className={`${styles["read-more-med"]}`}>
                  {`${teacherReadMore?.city}, ${teacherReadMore?.state} - ${teacherReadMore?.pin_code}, ${teacherReadMore?.location}`}
                </address>
              </div>
              <div className="d-flex">
                <strong className={`${styles["read-more-bold"]} me-2`}>About:</strong>
                <p className={`${styles["read-more-med"]}`}>
                  {teacherReadMore?.about}
                </p>
              </div>
              <div className="d-flex">
                <p className={`${styles["read-more-med"]} me-2`}>
                  Special Qualification in music:
                </p>
                <strong className={`${styles["read-more-bold"]}`}>{teacherReadMore?.qualification} </strong>
              </div>
              <div className="d-flex">
                <p className={`${styles["read-more-med"]} me-2`}>
                  No. of Students taught:
                </p>
                <strong className={`${styles["read-more-bold"]}`}>{teacherReadMore?.student_count} </strong>
              </div>
              {/* <div className="d-flex">
                <p className={`${styles["read-more-med"]} me-2`}>
                  Choose type of class:
                </p>
                <strong className={`${styles["read-more-bold"]}`}>{teacherReadMore?.class_mode} </strong>
              </div> */}
            </div>
          </div>
        </Col>

        <Col>
        </Col>
        {/* <Col className="lg-4">
          <Card className="">
            <Card.Header className="p-3" style={{ backgroundColor: "purple" }}>
              <div className="d-flex ">
                <h3 className="px-4 pt-2 text-white">$Fees:</h3>
                <div className="px-2">
                  <div>
                    <h5 className="text-white">Hourly</h5>
                    <h5 className="text-white">1000</h5>
                  </div>
                </div>
                <div className="px-2">
                  <div>
                    <h5 className="text-white">WEEKLY(3 DAYS)</h5>
                    <h5 className="text-white">2,500</h5>
                  </div>
                </div>
                <div className="px-1">
                  <div>
                    <h5 className="text-white">MONTHLY(12 DAYS)</h5>
                    <h5 className="text-white">10,500</h5>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="py-2">
              <div>
                <h3>Booking a time Slot</h3>
                <h4>Morning</h4>
                <div>
                  {" "}
                  <Button className=" mx-3 btn  ">10.00 Am</Button>
                  <Button className=" mx-2  btn ">10.00 Am</Button>
                  <Button className=" mx-2 btn ">10.00 Am</Button>
                  <Button className=" mx-3 btn ">10.00 Am</Button>
                </div>
                <h4>AfterNoon</h4>
                <div>
                  {" "}
                  <Button className=" mx-3 btn ">10.00 Am</Button>
                  <Button className=" mx-2  btn ">10.00 Am</Button>
                  <Button className=" mx-2 btn ">10.00 Am</Button>
                  <Button className=" mx-3 btn ">10.00 Am</Button>
                </div>
                <h4>Evening</h4>
                <div>
                  {" "}
                  <Button className=" mx-3 btn ">10.00 Am</Button>
                  <Button className=" mx-2  btn ">10.00 Am</Button>
                  <Button className=" mx-2 btn ">10.00 Am</Button>
                  <Button className=" mx-3 btn ">10.00 Am</Button>
                </div>
              </div>
              <div className="d-flex justify-content-center py-3 ">
                <Button
                  className="mx-3  btn-lg "
                  style={{ textColor: "purple" }}
                >
                  BOOK NOW
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col> */}
      </Row>
    </div >
  );
};

export default ReadMore;
