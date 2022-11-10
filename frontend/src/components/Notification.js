import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Notification({ show, setShow, message }) {
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer containerPosition="fixed" position="middle-center" className="p-3">
                    <Toast bg="light" onClose={() => setShow({ show: false, message: "" })} show={show} delay={4500} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Raaga</strong>
                        </Toast.Header>
                        <Toast.Body>{message}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default Notification;