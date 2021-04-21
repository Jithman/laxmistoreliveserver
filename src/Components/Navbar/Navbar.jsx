import React, { useState } from "react";
import { AiOutlineAlignLeft } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="logo">
          <h1>Logo</h1>
        </div>
      </div>
      <div className="rightside">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="#OurStory">OurStory</a>
          <a href="#Products">Products</a>
          <a href="#StoreLocator">Store Locator</a>
          <a href="#DisList">Laxmi's kitchen</a>
          <a href="#Media">Media</a>
          <a href="#Blogs">Blogs</a>
          <a href="#Contact us">Contact us</a>
        </div>
        <button onClick={() => setShowLinks(!showLinks)}>
          <AiOutlineAlignLeft />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
