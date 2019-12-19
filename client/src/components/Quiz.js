import React from "react";
import CelebCard from './CelebCard';

function Quiz(props) {

  // axios for CelebCard here?

  return (
    <div className="quiz-wrapper">
      <section>
        <div>
          <p>Score: (score variable)</p>
        </div>
        <div>
          <p>(timer)</p>
        </div>
      </section>
      <CelebCard />
    </div>
  );
}

export default Quiz;