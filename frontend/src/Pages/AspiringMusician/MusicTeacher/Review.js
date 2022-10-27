import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../../../components/FeaturedArtist/FeaturedArtistCard.module.css";
function Review() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Review</Button>

      <Container className="d-flex align-items-end">
        <Modal
          className=""
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <h2>Comments(8)</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="d-flex px-1 mx-1">
              <Form.Control type="email" placeholder="text" autoFocus />
              <Button className="btn btn-secondary">Submit</Button>
            </Form>
            <div className={`${styles["card_img"]}`}>
              <img src="" alt="user-image" />
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Review;
