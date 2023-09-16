import React from "react";
import "../Css/Card.css";

const Card = ({ title, imageUrl, body }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-title">{title}</div>
          <div className="card-body">{body}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
