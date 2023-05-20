import React, { useState } from "react";
import styles from "./BookingSlots.module.css";
import { Card, Col, Row } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import dayjs from "dayjs";

export default function BookingSlots({ availableSlots,setSelectedDate, handleBookClass }) {
    const [selected, selectBookingSlot] = useState(null);
    console.log(availableSlots);
    return (
        <Card className={styles.bookingCardContainer} sx={{ maxWidth: 50, backgroundColor: "#f4f4f4", borderRadius: "5px" }}>
            <Card.Header className={styles.bookingTitle} container spacing={1}>
                <Row>
                    <Col className={styles.gridItemCurrency} xs={2}>
                        <Card.Text
                            className={styles.bookingTitleCard}
                            gutterBottom
                            variant="h6"
                        >
                            <FaRupeeSign /> Fees:
                        </Card.Text>
                    </Col>
                    <Col className={styles.gridItem} xs={2}>
                        <Row className={styles.BookingHeaderTitle}>HOURLY</Row>
                        <Row className={styles.BookingHeaderTitlePrice}>1000</Row>
                    </Col>
                    <Col className={styles.gridItem} xs={4}>

                        <Row className={styles.BookingHeaderTitle}>WEEKLY (3 DAYS)</Row>
                        <Row className={styles.BookingHeaderTitlePrice}>2,500</Row>
                    </Col>
                    <Col className={styles.gridItem} xs={4}>
                        <Row className={styles.BookingHeaderTitle}>MONTHLY (12 DAYS)</Row>
                        <Row className={styles.BookingHeaderTitlePrice}>10,500</Row>
                    </Col>
                </Row>
            </Card.Header>
            <>
                <Row className={styles.bokkingTimeSectionTitle} container>
                    <Card.Text className={styles.BookSlotTitle} color="#732a63">
                        Book a time slot
                    </Card.Text>
                </Row>
                <Row className={styles.bokkingTimeSectionTitle} container spacing={1}>
                    {availableSlots !== undefined ? Object.values(availableSlots).flat().map((timeSlot, index) => (
                        <Col className={styles.gridItemCurrency} item md={4} key={index}>
                            <Button
                                className={
                                    selected !== null && selected === index
                                        ? styles.bookingButtonSelected
                                        : styles.bookingButtonNormal
                                }
                                onClick={() => {selectBookingSlot(index); setSelectedDate(timeSlot)}}
                                variant="outlined"
                            >
                                {dayjs(timeSlot).format("YYYY-MM-DD H:mm A")}
                            </Button>
                        </Col>
                    )): <></>}
                </Row>
            </>
            <Card.Footer className={styles.bookingCardContainer}>
                <Row alignItems="center" justify="center" justifyContent="center" container spacing={1}>
                    <Col item sx={4}></Col>
                    <Col item sx={4}>
                        <Button
                        onClick={() => {handleBookClass()}}
                         className={styles.bookingButtonSelected} 
                         size="large" 
                         color="primary"
                         >
                            Book Now
                        </Button>
                    </Col>
                    <Col item sx={4}></Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}
BookingSlots.propTypes = {};

BookingSlots.defaultProps = {};
