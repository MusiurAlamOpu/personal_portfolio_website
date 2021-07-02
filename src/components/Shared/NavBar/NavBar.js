import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavBar = () => {
  return (
    <div>
      <Navbar
        style={{
          padding: "1% 10%",
          backgroundColor: "#0e1212",
          boxShadow: "0px 0px 20px black",
        }}
        expand="lg"
      >
        <Navbar.Brand
          style={{
            color: "#2ecfa8",
          }}
        >
          .opu()
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            backgroundColor: "#2ecfa8",
            border: "1px solid white",
          }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="linkStyle" to="/home">
              .whoAmI()
            </Link>
            <Link className="linkStyle" to="/works">
              .works()
            </Link>
            <Link className="linkStyle" to="/blog">
              .blog()
            </Link>
            <Link className="linkStyle" to="/about">
              .about()
            </Link>
            <Link className="linkStyle" to="/contact">
              .contact()
            </Link>
            <a
              className="linkStyle"
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/musiuropu/"
            >
              <FontAwesomeIcon
                style={{
                  color: "#2efac8",
                  fontSize: "30px",
                }}
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
            <a
              className="linkStyle"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/MusiurAlamOpu"
            >
              <FontAwesomeIcon
                style={{
                  color: "#2efac8",
                  fontSize: "30px",
                }}
                icon={faGithubSquare}
              ></FontAwesomeIcon>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
