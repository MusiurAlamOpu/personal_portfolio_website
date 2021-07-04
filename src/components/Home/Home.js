import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Button } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const madeWithText = "    //madeWith";
  const ResumeLink =
    "https://drive.google.com/file/d/1lyY3G44WA0g1R09CeeWpMrrjIwK1jeaV/view?usp=sharing";
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#0e1212",
        paddingTop: "5%",
      }}
    >
      {/* <NavBar /> */}
      <div id="firstDiv">
        <div id="whoAmIDiv">
          <Fade top>
            <p id="opuIs">
              <span
                style={{
                  color: "white",
                }}
              >
                opu
              </span>
              .is()
            </p>
          </Fade>
          <Fade left>
            <p className="details">"name" : "Musiur Alam opu",</p>
          </Fade>
          <Fade right>
            <p className="details">"from" : "Dhaka, Bangladesh",</p>
          </Fade>
          <Fade left>
            <p className="details">"what am I":"FullStackWebDeveloper,"</p>
          </Fade>
          <Fade right>
            <p className="details2">
              Creative front-end developer and illustrator
            </p>
          </Fade>
          <p className="details2">BSc in Computer Science and Engineering</p>
          <p className="details2">
            from North South University
            <span
              style={{
                color: "#9457EB",
              }}
            >
              (Expected: 2024)
            </span>
          </p>
        </div>
      </div>
      <div>
        <div id="secondDiv">
          <div id="remumeDiv">
            <Fade bottom>
              <p id="downloadResume">
                .download
                <span
                  style={{
                    color: "#2ecfa8",
                  }}
                >
                  (
                  <span
                    style={{
                      color: "#9457EB",
                    }}
                  >
                    resume
                  </span>
                  )
                </span>
              </p>
            </Fade>
            <Fade bottom>
              <a
                style={{
                  color: "Black",
                  textDecoration: "none",
                }}
                href={ResumeLink}
                target="_blank"
                rel="noreferrer"
              >
                <Button id="button" variant="contained">
                  resume
                </Button>
              </a>
            </Fade>
            <div
              className="container-fluid"
              style={{
                color: "grey",
                padding: "10% 0%",
                fontSize: "20px",
                paddingRight: "4%",
              }}
            >
              <FontAwesomeIcon icon={faMagic}></FontAwesomeIcon>
              <p>{madeWithText}</p>
              <p
                style={{
                  color: "grey",
                }}
              >
                React Js, Bootstrap, Material Ui, Html, Css, Firebase,
                fontawesome, emailJs, react-router-dom etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
