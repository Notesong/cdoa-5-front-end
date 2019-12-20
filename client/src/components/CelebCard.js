
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    background-color: #158FA4;
    border: none;
    color: white;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    width: 10rem;
    margin: 3rem;
`;

function CelebCard(props) {
  return (
    <div className="celebrity-card-wrapper">
        <img />
        <p>(Celebrity Name)</p>
        <Button>Dead</Button>
        <Button>Alive</Button>
    </div>
  );
}

export default CelebCard;