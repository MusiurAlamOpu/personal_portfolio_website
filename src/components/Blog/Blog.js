import React from "react";
import Fade from "react-reveal/Fade";
import BlogCard from "./BlogCard/BlogCard";
import BlogData from "./BlogData.json";
import "./Blog.css";

const Blog = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "15% 10%",
        // paddintTop: "80px",
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
      <i>note: if there is any issue then, use vpn to read on medium.com</i>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {BlogData.map((data) => {
          return <BlogCard key={data.id} data={data}></BlogCard>;
        })}
      </div>
    </div>
  );
};

export default Blog;
