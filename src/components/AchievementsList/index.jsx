import React from "react";
import "./style.css";

const AchievementsList = (props) => {
  return (
    <div className="questions-list-block">
      <div className="exercises">Дополнительно</div>
      <div className="questions-list">
        {props.questions.map((question) => (
          <div className="exercise">{question.slice1}</div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;
