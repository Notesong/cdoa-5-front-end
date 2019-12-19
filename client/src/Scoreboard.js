import React from "react";

function Scoreboard(props) {

  return (
    <div className="scoreboard-wrapper">
        {/* shown only if game has been played */}
        <h2>Your Score: (score variable)</h2>
        {/* shown only if not logged in */}
        <p>Want to save your score? Create an account.</p>
        {/* Shown only if logged in */}
        <table>
            <tr>
                <td>table data...</td>
            </tr>
        </table>
    </div>
  );
}

export default Scoreboard;