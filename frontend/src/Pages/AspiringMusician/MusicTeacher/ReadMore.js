import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Col, Container, Row, Dropdown } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import styles from "./ReadMore.module.css";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Notification from "../../../components/Notification";
import { LoginContext } from "../../../LoginContext";
import Spinner from 'react-bootstrap/Spinner';

const ReadMore = ({ teacher }) => {
  const { loggedInUserContext } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = loggedInUserContext;
  const { name, image_url, experience, hourly_rate, video, address } = teacher;
  const [teacherReadMore, setTeacherReadMore] = useState();
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: "",
    time: "",
  });
  const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();
  const [showNotification, setShowNotification] = useState({ show: false, message: "" });
  const [loading, setLoading] = useState(false);

  //create schedule object for date and time
  const schedule = [
    {
      date: "2021-05-01",
      time: [
        {
          time: "10:00",
          booked: true,
        },
        {
          time: "11:00",
          booked: false,
        },
      ]
    },
    {
      date: "2021-05-02",
      time: [
        {
          time: "10:00",
          booked: false,
        },
        {
          time: "11:00",
          booked: false,
        },
      ]
    }
  ]

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let data = {
      id: teacher.id,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: signal
    };

    const getTableData = async () => {
      try {
        const response = await fetch("/api/read_teacher_metadata/", requestOptions);
        const result = await response.json();
        if (response.ok && !signal.aborted) {
          setTeacherReadMore(result);
          console.log(result);
        } else {
          throw Error(result);
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("successfully aborted");
        } else {
          console.log(err);
        }
      }
    };

    getTableData();
    return () => controller.abort();
  }, []);

  const handleBookClass = (formData) => {
    if (!loggedInUser.isLoggedIn) {
      setShowNotification({ show: true, message: "Please login to book a class !" });
      return;
    }
    setLoading(true);
    let data = {
      data: {
        //Prateek, please put your code here
        "student_id": 1,
        "student_name": "Anish Kumar",
        "teacher_id": 1,
        "teacher_name": "Mohan Kumar",
        "category_type": "Vocal",
        "category_value": 'Indian Classical',
        "class_timestamp": "2022-10-30T11:00",
        "payment_id": 1,
        "payment_amount": 1000,
        "payment_timestamp": "2022-10-30T11:00"
      }
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    const getTableData = async () => {
      try {
        const response = await fetch("/api/book_class/", requestOptions);
        const result = await response.json();
        if (response.ok) {
          console.log(result);
          setLoading(false);
          setShowNotification({ show: true, message: "Class booked ! Please check your dashboard." });
        } else {
          throw Error(result);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getTableData();
  };
  return (
    <div>
      <Notification show={showNotification.show} setShow={setShowNotification} message={showNotification.message} />
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
        <Col lg="7">
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
        </Col>

        <Col lg="4">
          <div className="my-3">
            <h5 className={`${styles["teacher-name"]} p-0 m-0 mb-3`}>Book a class with {name}</h5>
            <Form onSubmit={handleSubmit(handleBookClass)} id="booking-class-form">
              <Form.Group controlId="formBookingDate" className="mb-3">
                <Form.Label visuallyHidden>Booking date</Form.Label>
                <Form.Select {...register("bookingDate")} aria-label="Select class booking date">
                  <option>Select class date</option>
                  {schedule.map((item, index) => (
                    <option key={index} value={item.date}>{item.date}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formBookingTime" className="mb-3">
                <Form.Label visuallyHidden>Booking time</Form.Label>
                <Form.Select {...register("bookingTime")} aria-label="Select class booking time">
                  <option>Select class time</option>
                  <option>11:00 am</option>
                </Form.Select>
              </Form.Group>

              <Button className={`${styles["login-button"]}`}
                type="submit"
              >
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className={loading ? "me-2" : "d-none"}
                />
                Book Now
              </Button>
            </Form>
          </div>

          {/* <Card className="">
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
          </Card> */}
        </Col>
      </Row>
    </div >
  );
};

export default ReadMore;
