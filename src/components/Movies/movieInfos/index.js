import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import "./movieInfo.css";
import img from "../../assets/test.jpg";
import img2 from "../../assets/1.png";

const MovieInfo = () => {
  return (
    <>
      <img src={img2} alt="font" className="font" />
      <div className="container">
        <div className="header_info">
          <img src={img} alt="" />
          <Typography variant="h1">Titre</Typography>
        </div>
        <div className="content_info">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            debitis totam error quis magnam illum, iste incidunt minus minima
            autem a natus itaque sed esse unde voluptas hic! Debitis, a.
          </Typography>
          <div className="date_info">
            <Typography variant="h5">Realease Date :</Typography>
            <Typography variant="h6">2020-09-23 </Typography>
          </div>
          <div className="popularity_info">
            <Typography variant="h5">Populariter :</Typography>
            <Typography variant="h6">1969.622</Typography>
          </div>
          <div className="note_info">
            <Typography variant="h5">Note :</Typography>
            <div className="note_infos_container">
              <Typography>9</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
