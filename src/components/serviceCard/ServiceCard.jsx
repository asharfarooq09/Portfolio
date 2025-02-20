import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./ServiceCard.css"

const ServiceCard = ({index,title}) => {
  return (
    <div className="serviceCard">
      <h2 className="index">0{index + 1}</h2>
      <h3 className="title">{title}</h3>
      <p className="content">Web development is a process of building and programming...</p>
      <div className="readMore">
        <p>Read More </p>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default ServiceCard;