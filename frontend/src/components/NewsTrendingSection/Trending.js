import React, { useMemo } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardImage from '../../images/trendingMainImage.png'
import doubleArrowIcon from "../../images/doubleArrowIcon.png";
import singleArrowIcon from "../../images/singleArrowIcon.svg";
import styles from "./Trending.module.css";
import HorizontalCard from "./HorizontalCard";

function Trending() {
    const mainImage = useMemo(() => <Card className="bg-dark text-white mb-3">
        <Card.Img src={cardImage} className={`${styles["trending-main-img"]}`} alt="Card image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end">
            <Card.Text className={`${styles["trending-main-text"]}`}>
                Sidharth Malhotra's All-Red Look Raises Temperature, His Alleged Girlfriend, Kiara Advani Reacts
            </Card.Text>
        </Card.ImgOverlay>
    </Card>, []);

    return (
        <div>
            <Row>
                <Col>
                    <div className={`${styles["trending-header"]} pb-2`}>
                        <img src={doubleArrowIcon} className={`${styles["trending-header-double-arrow-icon"]} p-1`} />
                        <h4 className={`${styles["trending-heading"]}`}>TRENDING</h4>
                        <img src={singleArrowIcon} className={`${styles["trending-header-single-arrow-icon"]} p-1`} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col >
                    {mainImage}
                </Col >
            </Row>

            {[1, 2, 3, 4].map((item, index) => <Row key={index}>
                <Col >
                    <HorizontalCard />
                </Col >
            </Row>)}

        </div>
    );
}

export default Trending;