import React, { useState, useEffect } from "react";
import axios from "axios";
import "./entertainment.css";
const EntertainmentCard = ({ data }) => {
  return (
    <div>
      <div key={data._id} className="news-card">
        <div className="news-card-left">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="news-card-right">
            <img src={data.img} alt="not available" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EntertainmentCard;
