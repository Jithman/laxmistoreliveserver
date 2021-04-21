import React from "react";

import Navbar from "./Navbar/Navbar.jsx";
import Slider from "../Components/Slider/Slider.jsx";
import Products from "../Components/Products/Products.jsx";
import Locate from "../Components/LocateUs/Locate.jsx";
import Dishes from "../Components/Dishes/Dishes.jsx";
import Blogs from "../Components/Blogs/Blogs.jsx";
import Info from "../Components/Info/Info.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Products />
      <Locate />
      <Dishes />
      <Blogs />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
