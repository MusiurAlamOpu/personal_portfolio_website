import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Modal } from "react-bootstrap";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./Contact.css";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_el4pj6e",
        "template_1n6254c",
        e.target,
        "user_DJTJToqSTdjxwHXLg4nIW"
      )
      .then(
        (result) => {
          setShow(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  const labelStyle = {
    color: "#2ecfa8",
  };
  return (
    <div
      style={{
        backgroundColor: "#0E1212",
        fontFamily: "consolas, courier, monospace",
        minHeight: "100vh",
        padding: "100px 1%",
      }}
    >
      <div id="contactTitle">.contact(email)</div>
      <Zoom>
        <Fade>
          <form className="contact-form" onSubmit={sendEmail}>
            <div id="mainDivOfForm">
              <Input
                className="inputBarStyles"
                type="hidden"
                name="contact_number"
              />
              <label style={labelStyle}>Name</label>
              <Input className="inputBarStyles" type="text" name="user_name" />
              <label style={labelStyle}>Email</label>
              <Input
                className="inputBarStyles"
                type="email"
                name="user_email"
              />
              <label style={labelStyle}>Message</label>
              <Input className="inputBarStyles" type="text" name="message" />
              <input
                style={{
                  backgroundColor: "#2ecfa8",
                  borderRadius: "30px",
                  fontWeight: "500",
                  width: "100px",
                  height: "50px",
                  border: "none",
                  margin: "4%",
                  fontSize: "20px",
                  color: "black",
                }}
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </Fade>
      </Zoom>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hey,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span
            style={{ fontSize: "25px", fontWeight: "500", color: "#2ecfa8" }}
          >
            Your mail successfully sent!
          </span>{" "}
          <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Contact;
