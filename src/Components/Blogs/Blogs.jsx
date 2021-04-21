import React from "react";
import Logo from "../../Images/path.svg";
import BlogsCard from "./BlogsCard";
import BlogsData from "./BlogsData";
import Button from "../Buttons/Button";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-heading">
        <h1>BLOGS</h1>
        <img src={Logo} alt="logo" />
      </div>
      <div className="blogs-cards-display">
        {BlogsData.map((data) => {
          return (
            <BlogsCard
              img={data.img}
              name={data.name}
              date={data.date}
              des={data.des}
              key={data.id}
            />
          );
        })}
      </div>
      <Button btnName="View All" />
    </div>
  );
};

export default Blogs;
