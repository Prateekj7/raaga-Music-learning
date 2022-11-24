import React, { useState, useEffect, useContext } from "react";
import { Button, Card, Col, Container, Row, Dropdown } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import styles from "./ReadMore.module.css";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Notification from "../Notification";
import { LoginContext } from "../../LoginContext";
import Spinner from 'react-bootstrap/Spinner';
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from 'axios';

const ReadMore = ({ teacher, filter }) => {
  const { loggedInUserContext } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = loggedInUserContext;
  const { name, image_url, experience, hourly_rate, video, address } = teacher;
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: "",
    time: "",
  });
  const { register, handleSubmit, reset, formState: { isDirty, dirtyFields } } = useForm();
  const [showNotification, setShowNotification] = useState({ show: false, message: "" });
  const [loading, setLoading] = useState(false);
  const { isLoading, mutate: createMeeting } = useMutation({
    mutationFn: newMeeting => {
      return axios.post('/api/book_class/', newMeeting)
    },
    onSuccess: () => {
      setShowNotification({ show: true, message: "Class booked ! Please check your dashboard." });
    }
  })

  const teacherQueryFn = () => {
    return axios.get(`/api/read_teacher_metadata?id=${teacher.id}`);
  };

  const { isLoading: isLoadingReadMore, data: teacherReadMore } = useQuery({
    queryKey: ['teachers', teacher.id],
    queryFn: teacherQueryFn,
    select: (data) => {
      return data.data;
    }
  });

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

  const handleBookClass = (formData) => {
    if (!loggedInUser.isLoggedIn) {
      setShowNotification({ show: true, message: "Please login to book a class !" });
      return;
    }
    if ((loggedInUser.isLoggedIn) && (loggedInUser.category !== "student")) {
      setShowNotification({ show: true, message: "Please login as student to book a class !" });
      return;
    }

    let meeting = {
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
    createMeeting(meeting)
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
          <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center my-3">
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
            <strong className={`${styles["read-more-bold"]} me-2`}>
              Special Qualification in music:
            </strong>
            <p className={`${styles["read-more-med"]}`}>{teacherReadMore?.qualification} </p>
          </div>
          <div className="d-flex">
            <strong className={`${styles["read-more-bold"]} me-2`}>
              No. of Students taught:
            </strong>
            <p className={`${styles["read-more-med"]}`}>{teacherReadMore?.student_count} </p>
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
                  className={isLoading ? "me-2" : "d-none"}
                />
                Book Now
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div >
  );
};

export default ReadMore;
