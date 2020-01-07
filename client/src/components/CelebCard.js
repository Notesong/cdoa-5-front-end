
import React from "react";

const CelebCard = (props) => {
  return (
    <div className='celeb-card'>
      <img src={props.data.image_url} alt={props.data.name} />
      <h3>{props.data.name}</h3>
      <h4>{props.data.info}</h4>
    </div>
  )
}
export default CelebCard; 

// function CelebCard(props) {
//   return (
//     <div className="celebrity-card-wrapper">
//         <img />
//         <p>(Celebrity Name)</p>
//         <button>Dead</button>
//         <button>Alive</button>
//     </div>
//   );
// }

// export default CelebCard;