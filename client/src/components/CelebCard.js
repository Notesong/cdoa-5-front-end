
import React from "react";
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Button = styled.button`
  // background color in App.css
  border: none;
  color: white;
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 10rem;
  margin: 1.5rem;
`;

const Image = styled.img`
  margin: 2rem;
  width: 300px;
  height: 300px;
`;

function CelebCard(props) {
  return (
    <CardWrapper className="celebrity-card-wrapper">
      <Image src={ require('../assets/logo.png') } />
      <p>(Celebrity Name)</p>
      <div>
        <Button>Dead</Button>
        <Button>Alive</Button>
      </div>
    </CardWrapper>
  );
}

export default CelebCard;