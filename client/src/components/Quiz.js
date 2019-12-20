import React from "react";
import CelebCard from './CelebCard';
import styled from 'styled-components';

const QuizWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ScoreTimerSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
`;

function Quiz(props) {

  // axios for CelebCard here?

  return (
    <QuizWrapper className="quiz-wrapper">
      <ScoreTimerSection>
        <div>
          <p>Score: (score variable)</p>
        </div>
        <div>
          <p>(timer)</p>
        </div>
      </ScoreTimerSection>
      <CelebCard />
    </QuizWrapper>
  );
}

export default Quiz;