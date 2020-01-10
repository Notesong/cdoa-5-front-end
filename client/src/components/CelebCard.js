import React from "react";

const CelebCard = ({ currentCeleb }) => {
  console.log(currentCeleb)
  return (
    <div className='celeb-card'>
      <img src={currentCeleb.imageUrl} alt={currentCeleb.name} />
      <h3>{currentCeleb.name}</h3>
      <h4>{currentCeleb.info}</h4>
    </div>
  )
}
export default CelebCard; 