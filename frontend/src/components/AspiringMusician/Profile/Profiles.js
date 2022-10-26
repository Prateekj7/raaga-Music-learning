import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import styles from "../../FeaturedArtist/FeaturedArtistCard.module.css";

const Profiles = ({ profiles }) => {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Header className="h-50">
          <div className="pb-3 mx-5">
            <div className={`${styles["Stroke-28"]} `}>
              <div className={`${styles["card_img"]} `}>
                <img
                  src="https://i2.cinestaan.com/image-bank/1500-1500/172001-173000/172241.jpg"
                  alt="user-image"
                />
              </div>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="pb-2">
          <Card.Title>
            <h3>Sonu Nigam</h3>
          </Card.Title>
          <Card.Text>
            <h4>Address: 82F3+JPW, Sundarmor, Jharkhand 814118, India</h4>
            <h4>Post: Vocal</h4>
            <h4>Experience: 25 Years</h4>
            <h4>Fees:1000</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profiles;
