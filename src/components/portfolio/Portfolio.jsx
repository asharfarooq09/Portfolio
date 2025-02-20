import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import image1 from "../../assets/project_1.svg";
import image2 from "../../assets/project_2.svg";
import image3 from "../../assets/project_3.svg";
import image4 from "../../assets/project_4.svg";
import image5 from "../../assets/project_5.svg";
import image6 from "../../assets/project_6.svg";
import theme from "../../assets/theme_pattern.svg";
import "./Portfolio.css"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolioTitle">
        <h2>My Latest Work</h2>
        <img src={theme} alt="" />
      </div>
      <div className="portfolioDetail">
        {[image1, image2, image3, image4, image5, image6].map((image,index) => {
          return <PortfolioCard key={index} image={image} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
