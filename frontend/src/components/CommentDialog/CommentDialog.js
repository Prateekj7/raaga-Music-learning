import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./CommentDialog.module.css"
import { BsFilterLeft } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import CommentSection  from '../CommentSection/CommentSection';

function CommentDialog(props) {
    return (
        <div
            className={styles.modal_show}
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal onHide={props.handleClose} show={props.showCommentDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Row>
                            <Col xs={10} >Comments ({props.commentsCount}) </Col>
                            <Col xs={2}>
                                <BsFilterLeft />
                            </Col>
                        </Row>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Row>
                                <Col xs={10} >
                                    <Form.Control className={styles.commentFormControl} placeholder="Testing" />
                                </Col>
                                <Col xs={2}>
                                    <Button variant="secondary" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <CommentSection AllComments={[]} />
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    )
}

export default CommentDialog