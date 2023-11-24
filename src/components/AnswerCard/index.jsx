import React from "react";

const AnswerCard = (props) => {
  return (
    <div onClick={props.onClick}>
      <div className="answer-card">
        <div className="answer-title">{props.answer}</div>
      </div>
    </div>
  );
};

export default AnswerCard;
