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
import QuestionsList from "../../components/QuestionsList/index.jsx";

const QuestionPage = observer(() => {
  const { courses } = useContext(Context);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const getQuestionsList = async () => {
    const response = await getQuestions();
    console.log(response);
    courses.setQuestions(response.data);
  };

  useEffect(() => {
    getQuestionsList();
  }, []);

  return (
    <div className="question-page">
      <Navbar />
      <div className="block-placement">
        <QuestionsList questions={courses.questionsList} />

        <div className="block-placement2">
          <div className="progress-bar-part">
            <div className="progress-bar"></div>
          </div>

          <div className="white-block">
            <QuestionBlock
              question={courses.questionsList[currentQuestion]}
              questions_count={courses.questionsList.length}
            />

            <div className="nav-part">
              {currentQuestion != 0 && (
                <div
                  className="past"
                  onClick={() => {
                    setCurrentQuestion(currentQuestion - 1);
                  }}
                >
                  past
                </div>
              )}
              <div className="finish">finish</div>
              {currentQuestion != courses.questionsList.length - 1 && (
                <div
                  className="next"
                  onClick={() => {
                    setCurrentQuestion(currentQuestion + 1);
                  }}
                >
                  next
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuestionPage;
