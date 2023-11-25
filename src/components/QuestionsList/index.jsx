import React from "react";
import "./style.css";

const QuestionsList = (props) => {
  return (
    <div className="questions-list-block">
      <div className="exercises">Задания</div>
      <div className="questions-list">
        {props.questions.map((question) => (
          <div className="exercise">{question.slice1}</div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
