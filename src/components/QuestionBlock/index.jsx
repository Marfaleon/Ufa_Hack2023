import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";
import "./style.css";
import AnswerCard from "../../components/AnswerCard/index.jsx";

const QuestionBlock = observer((props) => {
  const [quest_text, setQuestText] = useState(
    props.question.slice1 + "_____" + props.question.slice2
  );
  const [answered, setAnswered] = useState(0);
  const [prbar, setPrbar] = useState();
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  function InsertAnswer(ans, correct) {
    if (answeredQuestions[props.current_question] == undefined) {
      setAnswered(answered + 1);
      setAnsweredQuestions(
        answeredQuestions.slice(0, props.current_question) +
          [1] +
          answeredQuestions.slice(
            props.current_question,
            answeredQuestions.length
          )
      );
    }
    if (correct) {
      props.setRight(
        props.right_answers.slice(0, props.current_question) +
          [1] +
          props.right_answers.slice(
            props.current_question,
            props.right_answers.length - 1
          )
      );
    } else {
      props.setRight(
        props.right_answers.slice(0, props.current_question) +
          [0] +
          props.right_answers.slice(
            props.current_question,
            props.right_answers.length - 1
          )
      );
    }
    console.log(props.right_answers);
    setQuestText(props.question.slice1 + ans + props.question.slice2);
    let progress =
      -100 + Math.round((answered / props.questions_count) * 100) + "%";
    prbar[0].style.left = progress;
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
            onClick={() => InsertAnswer(course.answer, course.correct)}
          />
        ))}
      </div>
    </div>
  );
});

export default QuestionBlock;
