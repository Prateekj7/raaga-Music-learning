import React, { useState, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import styles from "./ReadMore.module.css";
import Form from 'react-bootstrap/Form';
import Notification from "../Notification";
import { LoginContext } from "../../LoginContext";
import Spinner from 'react-bootstrap/Spinner';
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat';

const ReadMore = ({ teacher, filter }) => {
  dayjs.extend(customParseFormat);
  const { loggedInUserContext } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = loggedInUserContext;
  const { name, experience } = teacher;
  const [showNotification, setShowNotification] = useState({ show: false, message: "" });
  const [selectedDate, setSelectedDate] = useState(dayjs().toDate());
  const { isLoading, mutate: createMeeting } = useMutation({
    mutationFn: newMeeting => {
      return axios.post('/api/book_class/', newMeeting)
    },
    onSuccess: () => {
      setShowNotification({ show: true, message: "Class booked ! Please check your dashboard." });
    }
  })

  const { isLoading: isLoadingReadMore, data: teacherReadMore } = useQuery({
    queryKey: ['teachers', teacher.id],
    queryFn: () => {
      return axios.get(`/api/read_teacher_metadata?id=${teacher.id}`);
    },
    select: (data) => {
      return data.data;
    }
  });

  const { isLoading: isLoadingAvailableSlots, data: availableSlots, isSuccess: isSuccessAvailableSlots } = useQuery({
    queryKey: ['availableSlots', teacher.id, filter.categoryName, filter.categoryValue],
    queryFn: () => {
      return axios.get(`/api/read_teacher_timelines?id=${teacher.id}&category_name=${filter.categoryName}&category_value=${filter.categoryValue}`);
    },
    select: (data) => {
      let availableSlots = {};
      let dateString = {};
      for (const dateTimeString of data.data) {
        dateString = dateTimeString.slice(0, 10);
        availableSlots[dateString] = [];
        availableSlots[dateString].push(dayjs(dateTimeString).toDate());
      }
      return availableSlots;
    },
  });

  const getIncludedDates = () => {
    if (isSuccessAvailableSlots) {
      return Object.keys(availableSlots).map((dateString) => dayjs(dateString, "YYYY-MM-DD").toDate());
    }
    else {
      return [];
    }
  };

  const getIncludedTimes = () => {
    let result;
    if (isSuccessAvailableSlots) {
      result = availableSlots[dayjs(selectedDate)?.format("YYYY-MM-DD")] ?? [];
    }
    else {
      result = [];
    }
    return result;
  };

  const handleBookClass = (e) => {
    e.preventDefault();
    if (!loggedInUser.isLoggedIn) {
      setShowNotification({ show: true, message: "Please login to book a class !" });
      return;
    }
    if ((loggedInUser.isLoggedIn) && (loggedInUser.category !== "student")) {
      setShowNotification({ show: true, message: "Please login as student to book a class !" });
      return;
    }

    let isSelectedSlotAvailable = false;
    for (const dateTimes of Object.values(availableSlots)) {
      for (const dateTime of dateTimes) {
        if (+selectedDate === +dateTime) {
          isSelectedSlotAvailable = true;
          break;
        }
      }
    }
    if (!isSelectedSlotAvailable) {
      setShowNotification({ show: true, message: "Sorry! selected slot is not available" });
      return;
    }

    createMeeting({
      "student_id": loggedInUser.id,
      "teacher_id": teacher.id,
      "category_type": filter.categoryName,
      "category_value": filter.categoryValue,
      "class_timestamp": selectedDate,
      "payment_id": 1,
      "payment_amount": teacher.hourly_rate,
      "payment_timestamp": selectedDate
    })
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
            <Form onSubmit={handleBookClass} id="booking-class-form">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate((date))}
                className="mb-3 w-100"
                showTimeSelect
                placeholderText="Select date and time"
                dateFormat="MMMM d, yyyy h:mm aa"
                includeDates={getIncludedDates()}
                includeTimes={getIncludedTimes()}
              />

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
