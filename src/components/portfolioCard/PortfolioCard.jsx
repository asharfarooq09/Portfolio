import React from 'react'
import "./PortfolioCard.css"

const PortfolioCard = ({image}) => {
  return (
    <div className='portfolioCard'>
      <img src={image} alt="" />
    </div>
  )
}

export default PortfolioCard;