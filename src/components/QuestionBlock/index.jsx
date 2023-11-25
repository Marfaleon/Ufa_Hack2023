import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import "./style.css";
import AnswerCard from "../../components/AnswerCard/index.jsx";

const QuestionBlock = observer((props) => {
  const [quest_text, setQuestText] = useState(
    props.question.slice1 + "_____" + props.question.slice2
  );
  const [answered, setAnswered] = useState(1);
  const [prbar, setPrbar] = useState();

  function InsertAnswer(ans) {
    setAnswered(answered + 1);
    setQuestText(props.question.slice1 + ans + props.question.slice2);
    let progress =
      -100 + Math.round((answered / props.questions_count) * 100) + "%";
    prbar[0].style.left = progress;
    console.log(answered);
  }

  useEffect(() => {
    setQuestText(props.question.slice1 + "_____" + props.question.slice2);
    setPrbar(document.getElementsByClassName("progress-bar"));
  }, []);

  return (
    <div className="quest-block">
      <div className="img-part">
        <img
          src={process.env.REACT_APP_BASE_URL + "/uploads/logo.png"}
          alt="here is img"
          className="quest-img"
        />
      </div>
      <div className="quest-part">{quest_text}</div>
      <div className="answers-part">
        {props.question.answers.map((course) => (
          <AnswerCard
            key={course.id}
            answer={course.answer}
            onClick={() => InsertAnswer(course.answer)}
          />
        ))}
      </div>
    </div>
  );
});

export default QuestionBlock;
