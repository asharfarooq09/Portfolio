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
          "Web Development",
          "E-commerce Development",
          "API Development & Integration",
          "SEO & Performance Optimization",
          "UI/UX Design Implementation",
          "Website Maintenance",
          "App Design",
        ].map((title, index) => {
          return <ServiceCard key={index} title={title} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Services;
