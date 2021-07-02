import React from "react";
import blog1 from "../../Images/blog1.png";
import Fade from "react-reveal/Fade";
import "./Blog.css";

const Blog = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10%",
        backgroundColor: "#0E1212",
        color: "#2efac8",
        minHeight: "100vh",
        fontFamily: "consolas, courier, monospace",
      }}
    >
      <Fade top>
        <div
          style={{
            marginBottom: "5%",
          }}
        >
          <a
            id="anchorMyBlog"
            rel="noreferrer"
            target="_blank"
            href="https://musiuralamopu.medium.com/"
          >
            .blog.my()
          </a>
        </div>
      </Fade>

      <div className="container-fluid d-flex flex-wrap">
        <Fade bottom>
          <div
            className="container"
            style={{
              width: "70%",
              borderRadius: "10px",
              border: "1px solid #2ecfa8",
              padding: "2%",
            }}
          >
            <img
              style={{ width: "100%", borderRadius: "8px" }}
              src={blog1}
              alt=""
            ></img>
            <a
              id="readTheBlog"
              rel="noreferrer"
              target="_blank"
              href="https://musiuralamopu.medium.com/how-to-create-a-functional-component-of-react-js-in-vs-code-e7710c415d3"
            >
              read the blog...
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blog;
