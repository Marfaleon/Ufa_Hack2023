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
import { useNavigate } from "react-router-dom";

const QuestionPage = observer(() => {
  const { courses } = useContext(Context);
  const { users } = useContext(Context);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState([]);

  function getPageId() {
    let urlParts = window.location.href.split("/");
    let idIndex = urlParts.findIndex(function (part) {
      return part === "tests";
    });
    let id = urlParts[idIndex + 1];

    return id;
  }

  const getQuestionsList = async () => {
    const response = await getQuestions();
    console.log(response);
    courses.setQuestions(response.data);
  };

  function finishTest() {
    let counter = 0;
    for (let i = 0; i < rightAnswers.length; i++) {
      counter += parseInt(rightAnswers[i]);
    }
    let finalRes = Math.round((counter / rightAnswers.length) * 100);
    console.log(finalRes);
    alert("Вы набрали: " + finalRes + "% баллов");
    users.addTest(getPageId(), finalRes);
  }

  useEffect(() => {
    getQuestionsList();
  }, []);

  return (
    <div className="question-page">
      <Navbar />
      <div className="block-placement">
        <QuestionsList
          questions={courses.questionsList}
          setQuestion={setCurrentQuestion}
        />

        <div className="block-placement2">
          <div className="progress-bar-part">
            <div className="progress-bar"></div>
          </div>

          <div className="white-block">
            <QuestionBlock
              question={courses.questionsList[currentQuestion]}
              questions_count={courses.questionsList.length}
              current_question={currentQuestion}
              right_answers={rightAnswers}
              setRight={setRightAnswers}
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
              <div className="finish" onClick={finishTest}>
                finish
              </div>
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
