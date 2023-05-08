import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./CommentDialog.module.css"

function CommentDialog(props) {
    return (
        <div
            className={styles.modal_show}
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal onHide={props.handleClose} show={props.showCommentDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default CommentDialog