import {useForm} from 'react-hook-form';
import styles from "./MusicTeacherContactUs.module.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row, Table } from 'react-bootstrap';
import image from './6682-removebg-preview.png';

function MusicTeacherContactUs() {
    const onSubmit = data => console.log(data);
    
    return (
        <div>
            <Row className={`mb-3 p-5 m-5`}>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label className={`${styles["content"]}}`}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="my-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button bsPrefix={`${styles["btn"]}`} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={6} className={`${styles["col-img"]} d-none d-lg-block`}>
                    <Row>
                        <h1>Students are looking for teachers like you</h1>
                    </Row>
                    <Row>
                        <img src={image} alt="image" />
                    </Row>
                </Col>
            </Row>
        </div>
        
    );
}

export default MusicTeacherContactUs;
