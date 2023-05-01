import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Trending from "../components/NewsTrendingSection/Trending";
import News from "../components/NewsTrendingSection/News";
import BreadCrumb from "../components/BreadCrumb";
import Paginaiton from "../components/Paginaiton";

function NewsPage() {
  return (
    <Container fluid className="news-trending-container">
      <BreadCrumb Item={ ["Home", "News"]} />
      <div className="border-bottom my-3"></div>
      <Row>
        <Col md={8}>
          <News isHomePage={false} />
        </Col>
        <Col md={4}>
          <Trending />
        </Col>
      </Row>
      <Row>
        <Col >
        <Paginaiton />
        </Col>
        <Col md={2}>
        </Col>
      </Row>
    </Container>
  );
}

export default NewsPage;
