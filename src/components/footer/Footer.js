import React from "react";
import "./Footer.css";
import img from "../../assets/tmdb.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer_detail">
        <h1>API Source: The movie Database API </h1>
        <img src={img} alt="" />
      </div>
      <h1>© 2020 Prince Develop </h1>
    </div>
  );
};

export default Footer;
