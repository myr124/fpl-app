import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-full items-center justify-center mt-8 ">
      <div className="pitch-container">
        <div className="pitch-field">
          <div className="pitch-left">
            <span className="pitch-halfway-line"></span>
            <span className="pitch-centre-circle"></span>
            <span className="pitch-centre-mark"></span>
            <span className="pitch-penalty-area"></span>
            <span className="pitch-penalty-mark"></span>
            <span className="pitch-penalty-arc"></span>
            <span className="pitch-goal-area"></span>
            <span className="pitch-corner-arc"></span>
          </div>
          <div className="pitch-right">
            <span className="pitch-halfway-line"></span>
            <span className="pitch-centre-circle"></span>
            <span className="pitch-centre-mark"></span>
            <span className="pitch-penalty-area"></span>
            <span className="pitch-penalty-mark"></span>
            <span className="pitch-penalty-arc"></span>
            <span className="pitch-goal-area"></span>
            <span className="pitch-corner-arc"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
