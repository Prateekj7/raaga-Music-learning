import React from "react";
import { Card, Col, Container } from "react-bootstrap";

const Booking = () => {
  return (
    <div>
      <Container className="mt-3">
        <Col xs={4}>
          <Card className="shadow-lg">
            <Card.Header className="p-3" style={{ backgroundColor: "purple" }}>
              <h4>Fees</h4>
            </Card.Header>
          </Card>
        </Col>
      </Container>
    </div>
  );
};

export default Booking;
