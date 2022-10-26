import React, { useMemo } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardImage from '../../images/newsMainImage.png'
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";
import styles from "./News.module.css";
import HorizontalCard from "./HorizontalCard";

function News() {
    const mainImage = useMemo(() => <Card className="bg-dark text-white mb-4">
        <Card.Img src={cardImage} className={`${styles["news-main-img"]}`} alt="Card image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
            <Card.Text className={`${styles["news-main-text"]}`}>
                Sidharth Malhotra's All-Red Look Raises Temperature, His Alleged Girlfriend, Kiara Advani Reacts
            </Card.Text>
        </Card.ImgOverlay>
    </Card>, []);

    return (
        <div>
            <Row>
                <Col>
                    <div className={`${styles["news-header"]} pb-2`}>
                        <img src={doubleArrowIcon} className={`${styles["news-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["news-heading"]}`}>NEWS</h4>
                        <img src={singleArrowIcon} className={`${styles["news-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    {mainImage}
                </Col >
            </Row>
            <Row>
                <Col md={6}>
                    <HorizontalCard />
                </Col >
                <Col md={6}>
                    <HorizontalCard />
                </Col >
            </Row>
            <Row>
                <Col md={6}>
                    <HorizontalCard />
                </Col >
                <Col md={6}>
                    <HorizontalCard />
                </Col >
            </Row>
        </div>
    );
}

export default News;