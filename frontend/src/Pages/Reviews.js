import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Container, Col, Row } from 'react-bootstrap'
import Paginaiton from "../components/Paginaiton";

function Reviews() {
  return (
    <Container fluid className="news-trending-container">
      <BreadCrumb Item={ ["Home", "News"]} />
      <div className="border-bottom my-3"></div>
      <Row>
        <Col md={8}>
          {/* <News /> */}
        </Col>
        <Col md={4}>
          {/* <Trending /> */}
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
  )
}

export default Reviews