import React from "react";

import "./Blogs.css";

const BlogsCard = (props) => {
  return (
    <div className="blogscard-container">
      <div className="blogcar-left">
        <img src={props.img} alt="" />
      </div>
      <div className="blogcard-right">
        <div className="blogcard-date">{props.date}</div>
        <div className="blogcard-title">{props.name}</div>
        <div className="blogcard-para">{props.des}</div>
      </div>
    </div>
  );
};

export default BlogsCard;
