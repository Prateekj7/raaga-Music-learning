import React, { useState } from "react";
import styles from "./BookingSlots.module.css";
import { Card, Col, Row } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from 'react-bootstrap';


export default function BookingSlots() {
    const [selected, selectBookingSlot] = useState(null);

    return (
        <Card className={styles.bookingCardContainer} sx={{ maxWidth: 50, backgroundColor: "#f4f4f4", borderRadius: "5px" }}>
            <Card.Header className={styles.bookingTitle} container spacing={1}>
                <Row>
                    <Col className={styles.gridItemCurrency}  xs={2}>
                        <Card.Text
                            className={styles.bookingTitleCard}
                            gutterBottom
                            variant="h6"
                        >
                            <FaRupeeSign /> Fees:
                        </Card.Text>
                    </Col>
                    <Col className={styles.gridItem}  xs={2}>
                            <Row className={styles.BookingHeaderTitle}>HOURLY</Row>
                            <Row className={styles.BookingHeaderTitlePrice}>1000</Row>
                    </Col>
                    <Col className={styles.gridItem}  xs={4}>
                        
                            <Row className={styles.BookingHeaderTitle}>WEEKLY (3 DAYS)</Row>
                            <Row className={styles.BookingHeaderTitlePrice}>2,500</Row>
                    </Col>
                    <Col className={styles.gridItem}  xs={4}>
                            <Row className={styles.BookingHeaderTitle}>MONTHLY (12 DAYS)</Row>
                            <Row className={styles.BookingHeaderTitlePrice}>10,500</Row>
                    </Col>
                </Row>
            </Card.Header>
            <Row className={styles.bokkingTimeSectionTitle} container>
                <Card.Text className={styles.BookSlotTitle} color="#732a63">
                    Book a time slot
                </Card.Text>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container>
                <Col  item sx={3}>
                    <Card.Text className={styles.timesOfDay} variant="h6">Morning</Card.Text>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={9}></Col>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container spacing={1}>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 0
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(0)}
                        variant="outlined"
                    >
                        10:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 1
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(1)}
                        variant="outlined"
                    >
                        10:30 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 2
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(2)}
                        variant="outlined"
                    >
                        11:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 3
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(3)}
                        variant="outlined"
                    >
                        11:30 AM
                    </Button>
                </Col>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container>
                <Col  item sx={3}>
                    <Card.Text className={styles.timesOfDay} variant="h6">Morning</Card.Text>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={9}></Col>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container spacing={1}>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 4
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(4)}
                        variant="outlined"
                    >
                        10:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 5
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(5)}
                        variant="outlined"
                    >
                        10:30 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 6
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(6)}
                        variant="outlined"
                    >
                        11:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 7
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(7)}
                        variant="outlined"
                    >
                        11:30 AM
                    </Button>
                </Col>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container>
                <Col  item sx={3}>
                    <Card.Text className={styles.timesOfDay} variant="h6">Morning</Card.Text>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={9}></Col>
            </Row>
            <Row className={styles.bokkingTimeSectionTitle} container spacing={1}>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 8
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(8)}
                        variant="outlined"
                    >
                        10:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 9
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(9)}
                        variant="outlined"
                    >
                        10:30 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 10
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(10)}
                        variant="outlined"
                    >
                        11:00 AM
                    </Button>
                </Col>
                <Col className={styles.gridItemCurrency} item sx={3}>
                    <Button
                        className={
                            selected !== null && selected === 11
                                ? styles.bookingButtonSelected
                                : styles.bookingButtonNormal
                        }
                        onClick={() => selectBookingSlot(11)}
                        variant="outlined"
                    >
                        11:30 AM
                    </Button>
                </Col>
            </Row>
            <Card.Footer className={styles.bookingCardContainer}>
                <Row alignItems="center" justify="center" justifyContent="center" container spacing={1}>
                    <Col item sx={4}></Col>
                    <Col item sx={4}>
                        <Button className={styles.bookingButtonSelected} size="large" color="primary">
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
