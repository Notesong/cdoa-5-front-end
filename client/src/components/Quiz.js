import React from "react";
import CelebCard from './CelebCard';
import styled from 'styled-components';

const ScoreTimerSection = styled

function Quiz(props) {

  // axios for CelebCard here?

  return (
    <div className="quiz-wrapper">
      <ScoreTimerSection>
        <div>
          <p>Score: (score variable)</p>
        </div>
        <div>
          <p>(timer)</p>
        </div>
      </ScoreTimerSection>
      <CelebCard />
    </div>
  );
}

export default Quiz;