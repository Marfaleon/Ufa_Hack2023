import React from "react";
import "./style.css";

const AnswerCard = (props) => {
  return (
    <div className="answer-card" onClick={props.onClick}>
      <div className="answer-title">{props.answer}</div>
    </div>
  );
};

export default AnswerCard;
