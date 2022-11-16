import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Notification({ show, setShow, message, position = "middle-center", containerPosition = "fixed" }) {
    return (
        <Row>
            <Col xs={6}>
                <ToastContainer containerPosition={containerPosition} position={position} className="p-3">
                    <Toast onClose={() => setShow({ show: false, message: "" })} show={show} delay={4500} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Raaga</strong>
                        </Toast.Header>
                        <Toast.Body >{message}</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Col>
        </Row>
    );
}

export default Notification;