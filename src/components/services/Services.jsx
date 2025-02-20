import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import theme from "../../assets/theme_pattern.svg";
import "./Services.css";

const Services = () => {
  return (
    <div className="service">
      <div className="serviceTitle">
        <h2>My Services</h2>
        <img src={theme} alt="" />
      </div>
      <div className="serviceProvide">
        {[
          "Web Design",
          "Graphic Design",
          "Social Media",
          "App Design",
          "Digital MArketing",
          "Content Writing",
        ].map((title, index) => {  return <ServiceCard key={index} title={title} index={index}/>
        })}
      </div>
    </div>
  );
};

export default Services;
