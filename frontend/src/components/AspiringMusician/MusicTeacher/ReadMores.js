import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import ReactPlayer from "react-player";
import styles from "../../FeaturedArtist/FeaturedArtistCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import Review from "./Review";

const ReadMores = ({ readMores }) => {
  const { name, img, post, experience, fees, video, address } = readMores;
  const navigate = useNavigate();
  const navigateProfile = () => {
    navigate("/profile");
  };
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <div className="d-flex m-1">
            <div className="p-3">
              <div className={`${styles["Stroke-28"]}`}>
                <div className={`${styles["card_img"]}`}>
                  <img src={img} alt="user" />
                </div>
              </div>
            </div>
            <div className="pt-2">
              <div className="d-flex">
                <h2>{name}</h2>
                <h5 className="pb-3">{post}</h5>
              </div>
              <h5 className="m-1 pb-2">{experience} experience</h5>
              <h5 className="m-2 text-danger">hourly fees: ${fees}</h5>
              <div className="d-flex">
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="mb-2"></div>
              </div>
              <div className="pb-2">
                {" "}
                <Review></Review>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div>
            <ReactPlayer className="w-50 h-25" url={video} />
          </div>
        </Col>
        <div className="border-bottom border-dark pb-5"></div>
      </Row>

      <Row>
        <Col className="w-25">
          <div className="d-flex">
            <div>
              <div className="d-flex">
                <h1>{name}</h1>
                <h4 className=" pt-4 mt-4">{post}</h4>
                <h4 className="pt-5 m-1">{experience} experience</h4>
                <div className="pt-5 m-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <h3 className=" pr-2">Address: {address}</h3>
              <h3 className="pb-1">
                About: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nihil alias eveniet doloribus accusantium rerum ex minima ea quo
                adipisci magni molestiae,
              </h3>
              <h4>Special Qualification in music:{post}</h4>
              <h4>No. of Students taught: 2500</h4>
              <h4>Choose type of class: (Physical/online)</h4>
            </div>
            <div></div>
          </div>
        </Col>

        <Col className="py-3 my-2">
          <Card className="shadow-lg ">
            <Card.Header className="p-3" style={{ backgroundColor: "purple" }}>
              <div className="d-flex ">
                <h3 className="px-4 pt-2">$Fees:</h3>
                <div className="px-3">
                  <div>
                    <h4>Hourly</h4>
                    <h4>1000</h4>
                  </div>
                </div>
                <div className="px-2">
                  <div>
                    <h4>WEEKLY(3 DAYS)</h4>
                    <h4>2,500</h4>
                  </div>
                </div>
                <div className="px-2">
                  <div>
                    <h4>MONTHLY(12 DAYS)</h4>
                    <h4>10,500</h4>
                  </div>
                </div>
              </div>
            </Card.Header>
            <Card.Body className="py-2">
              <div>
                <h3>Booking a time Slot</h3>
                <h4>Morning</h4>
                <div>
                  {" "}
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                </div>
                <h4>AfterNoon</h4>
                <div>
                  {" "}
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                </div>
                <h4>Evening</h4>
                <div>
                  {" "}
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                  <Button className="mx-3  btn-lg ">10.00 Am</Button>
                </div>
              </div>
              <div className="d-flex justify-content-center py-3 ">
                <Link to="/profile" onClick={navigateProfile}>
                  <Button
                    className="mx-3  btn-lg "
                    style={{ textColor: "purple" }}
                  >
                    BOOK NOW
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ReadMores;
