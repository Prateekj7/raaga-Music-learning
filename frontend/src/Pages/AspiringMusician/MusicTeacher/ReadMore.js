import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { FaThemeco } from "react-icons/fa";
import ReadMores from "./ReadMores";

const ReadMore = () => {
  const [open, setOpen] = useState({
    showMore: false,
  });
  const [readMore, setReadMore] = useState([]);

  useEffect(() => {
    fetch("teacher.json")
      .then((res) => res.json())
      .then((data) => setReadMore(data));
  }, []);

  return (
    <Container style={{ backgroundColor: "white" }}>
      <Col style={{ backgroundColor: "white" }}>
        <div>
          {!open.showMore && (
            <Button
              onClick={() =>
                setOpen((prev) => ({
                  ...prev,
                  showMore: !prev.showMore,
                }))
              }
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              ReadMore
            </Button>
          )}
          {open.showMore && (
            <Collapse in={open}>
              <div id="example-collapse-text">
                {readMore.slice(0, 1).map((readMores) => (
                  <ReadMores
                    key={readMore._id}
                    readMores={readMores}
                  ></ReadMores>
                ))}
              </div>
            </Collapse>
          )}
        </div>
        <div className="d-flex justify-content-center">
          {open.showMore && (
            <Button
              onClick={() =>
                setOpen((prev) => ({
                  ...prev,
                  showMore: !prev.showMore,
                }))
              }
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Read Less
            </Button>
          )}
        </div>
      </Col>
    </Container>
  );
};

export default ReadMore;
