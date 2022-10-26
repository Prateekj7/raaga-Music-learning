import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import News from './News';
import Trending from './Trending';
import styles from "./NewsTrendingSection.module.css";
import React, { useMemo } from "react";

function ResponsiveAutoExample() {

    return (
        <Container fluid className={`${styles["news-trending-container"]}`}>
            <Row>
                <Col md={8}>
                    <News />
                </Col>
                <Col md={4}>
                    <Trending />
                </Col>
            </Row>
        </Container>
    );
}

export default ResponsiveAutoExample;