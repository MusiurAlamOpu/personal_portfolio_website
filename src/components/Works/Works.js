import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FullStackProjects from "./FullStackProjectsCard.json";
import FullStackProjectsCard from "./FullStackProjectsCard";
import Fade from "react-reveal/Fade";
const Works = () => {
  return (
    <div
      style={{
        backgroundColor: "#0e1212",
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <section className="container-fluid">
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Fade top>
            <p
              style={{
                color: "#2ecfa8",
                fontSize: "30px",
                fontWeight: "1000",
              }}
            >
              Web Applications
            </p>
          </Fade>
          <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center">
            {FullStackProjects.map((project) => {
              return (
                <FullStackProjectsCard
                  project={project}
                ></FullStackProjectsCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
