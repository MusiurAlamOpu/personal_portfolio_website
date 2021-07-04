import React from "react";
import "./BlogCard.css";
import Fade from "react-reveal/Fade";
const BlogCard = (props) => {
  const { id, link, thumbnail, title } = props.data;
  console.log(id, link, thumbnail, title);
  return (
    <Fade right>
      <div id="SuperDiv">
        <img
          style={{
            width: "96%",
            height: "60%",
            borderRadius: "8px",
            marginTop: "5px",
          }}
          src={thumbnail}
          alt=""
        ></img>
        <div>
          <div id="titleStyles">{title}</div>
          <a
            style={{ fontSize: "16px", color: "#2EFAC8" }}
            rel="noreferrer"
            target="_blank"
            href={link}
          >
            read the blog...
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default BlogCard;
