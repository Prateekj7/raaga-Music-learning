import React, { useMemo } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardImage from '../../images/newsCardImage.png'
import styles from "./HorizontalCard.module.css";

function HorizontalCard() {
    return (
        <Card className={`${styles["horizontal-card"]} mb-3`}>
            <Row className="g-0">
                <Col xs={"auto"} className={`${styles["horizontal-card-col"]}`}>
                    <Card.Img src={cardImage} className={`${styles["horizontal-card-img"]}`} alt="news-image" />
                </Col >
                <Col xs={8} className={`${styles["horizontal-card-col"]} ps-2`}>
                    <Card.Body className="p-0 pt-1">
                        <Card.Text className={`${styles["content"]}`}>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text className={`${styles["footer"]}`}>
                            Published July 15, 2022
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default HorizontalCard;