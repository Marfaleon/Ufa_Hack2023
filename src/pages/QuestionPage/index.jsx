import { observer } from "mobx-react-lite";
import Navbar from "../../components/Navbar/index.jsx";
import React, { useState, createRef, useEffect, useContext } from "react";
import "./style.css";
import {
  createQuestions,
  deleteQuestions,
  getQuestions,
} from "../../API/questionAPI.js";
import { Context } from "../../index.js";
import AnswerCard from "../../components/AnswerCard/index.jsx";
import QuestionBlock from "../../components/QuestionBlock/index.jsx";

const QuestionPage = observer(() => {
  const { courses } = useContext(Context);

  const [currentQuestion, setCurrentQuestion] = useState();

  const getQuestionsList = async () => {
    const response = await getQuestions();
    console.log(response);
    courses.setQuestions(response.data);
  };

  function NavigateQuestions(e) {}

  useEffect(() => {
    getQuestionsList();
  }, []);

  return (
    <div>
      <Navbar />
      <QuestionBlock
        question={courses.questionsList[0]}
        questions_count={courses.questionsList.length}
      />
      <div className="nav-part">
        <div className="past">past</div>
        <div className="finish">finish</div>
        <div className="next" onClick={(e) => NavigateQuestions(e)}>
          next
        </div>
      </div>
      <div className="progress-bar-part">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
});

export default QuestionPage;
