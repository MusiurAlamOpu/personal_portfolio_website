import React from "react";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from "react-reveal/Fade";

const About = () => {
  const mainSkillsStyle = {
    color: "grey",
    fontWeight: "500",
  };
  const experienceText =
    "//My passion is to be a full stack web developer. So, I learned the reletable technologies and have 1 year experience of programming. Besides that I did projects in Java and C++ with my classmates to get the practical knowledge I have more than one year experience of Problem Solving Conext in NSU programming Context Bootcamps";
  const bioText =
    "//I am a self-tought and creative full stack developer, designer and illustrator. From Bangladesh.";
  return (
    <div id="aboutMainDiv">
      <div id="aboutSecondDiv">
        <div
          className="container-fluid"
          style={{
            padding: "3%",
            textAlign: "center",
          }}
        >
          <Fade top>
            <p id="header">about()</p>
          </Fade>
          <Fade bottom>
            <p style={{ color: "grey", fontSize: "20px" }}>{bioText}</p>
          </Fade>
          <div style={{ width: "100%", textAlign: "left", padding: "5%" }}>
            <Fade bottom>
              <p
                style={{
                  fontSize: "20px",
                  color: "#2efac8",
                  fontWeight: "600",
                  fontFamily: "consolas,courier, monospace",
                }}
              >
                skills.main()
              </p>
            </Fade>
            <div className="container-fluid d-flex flex-wrap">
              <Fade bottom>
                <div
                  style={{
                    width: "180px",
                    height: "200px",
                  }}
                >
                  <p style={mainSkillsStyle}>MERN stack</p>
                  <p style={mainSkillsStyle}>Illustrator</p>
                  <p style={mainSkillsStyle}>C/C++, Java</p>
                  <p style={mainSkillsStyle}>React JS</p>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  style={{
                    width: "180px",
                    height: "200px",
                  }}
                >
                  <p style={mainSkillsStyle}>JavaScript</p>
                  <p style={mainSkillsStyle}>HTML, CSS</p>
                  <p style={mainSkillsStyle}>Node JS</p>
                  <p style={mainSkillsStyle}>Express JS</p>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  style={{
                    width: "180px",
                    height: "200px",
                  }}
                >
                  <p style={mainSkillsStyle}>Bootstrap</p>
                  <p style={mainSkillsStyle}>Material UI</p>
                  <p style={mainSkillsStyle}>MongoDB</p>
                  <p style={mainSkillsStyle}>React Reveal</p>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  style={{
                    width: "180px",
                    height: "200px",
                  }}
                >
                  <p style={mainSkillsStyle}>Firebase</p>
                  <p style={mainSkillsStyle}>SSLcommerce</p>
                  <p style={mainSkillsStyle}>Git</p>
                  <p style={mainSkillsStyle}>Github</p>
                </div>
              </Fade>
              <Fade bottom>
                <div
                  style={{
                    width: "180px",
                    height: "200px",
                  }}
                >
                  <p style={mainSkillsStyle}>Nodemon</p>
                  <p style={mainSkillsStyle}>Heroku</p>
                  <p style={mainSkillsStyle}>Netlify</p>
                  <p style={mainSkillsStyle}>UI/UX implementation</p>
                </div>
              </Fade>
            </div>
            <Fade bottom>
              <p
                style={{
                  fontSize: "20px",
                  color: "#2efac8",
                  fontWeight: "600",
                  fontFamily: "consolas,courier, monospace",
                }}
              >
                familiarWith()
              </p>
              <p style={mainSkillsStyle}>React Native</p>
              <p style={mainSkillsStyle}>Data Structure</p>
              <p style={mainSkillsStyle}>Algorithms</p>
              <p style={mainSkillsStyle}>Cors, SASS</p>
            </Fade>
            <Fade bottom>
              <p
                style={{
                  fontSize: "20px",
                  color: "#2efac8",
                  fontWeight: "600",
                  fontFamily: "consolas,courier, monospace",
                }}
              >
                experience()
              </p>
              <p
                style={{
                  fontSize: "20px",
                  color: "grey",
                  fontFamily: "consolas,courier, monospace",
                  fontWeight: "600",
                }}
              >
                {experienceText}
              </p>
            </Fade>
            <Fade bottom>
              <p
                style={{
                  fontSize: "20px",
                  color: "#2efac8",
                  fontWeight: "600",
                  fontFamily: "consolas,courier, monospace",
                }}
              >
                languages()
              </p>
              <p style={mainSkillsStyle}>English</p>
              <p style={mainSkillsStyle}>Bangla</p>
              <p style={mainSkillsStyle}>Urdu</p>
              <p style={mainSkillsStyle}>Hindi</p>
            </Fade>
            <Fade bottom>
              <p
                style={{
                  fontSize: "20px",
                  color: "#2efac8",
                  fontWeight: "600",
                  fontFamily: "consolas,courier, monospace",
                }}
              >
                AlsoBusyWith()
              </p>
              <p style={mainSkillsStyle}>Reading Books</p>
              <p style={mainSkillsStyle}>Video games</p>
              <p style={mainSkillsStyle}>House works</p>
              <p style={mainSkillsStyle}>Rubic's cube</p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
