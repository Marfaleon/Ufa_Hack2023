import Navbar from "../../components/Navbar/index.jsx";
import React, { useContext, useEffect, useState } from "react";
import TestCard from "../../components/TestCard/index.jsx";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";
import {
  createTest,
  createTests,
  deleteTest,
  deleteTests,
  getTests,
} from "../../API/testAPI.js";
import { observer } from "mobx-react-lite";
import "./style.css";
import AchievementsList from "../../components/AchievementsList/index.jsx";

const CoursePage = observer(() => {
  const { users } = useContext(Context);
  const { courses } = useContext(Context);
  const navigate = useNavigate();

  const [testTitle, setTestTitle] = useState("");
  const [testCourseId, setTestCourseId] = useState(0);

  const getTestsList = async () => {
    const response = await getTests();
    console.log(response);
    courses.setTests(response.data);
  };

  function getPageId() {
    let urlParts = window.location.href.split("/");
    let idIndex = urlParts.findIndex(function (part) {
      return part === "courses";
    });
    let id = urlParts[idIndex + 1];

    return id;
  }

  async function removeCard(test_id) {
    courses.removeTest(test_id);
    const response = await deleteTest(test_id);
  }

  const createNewTest = async () => {
    setTestCourseId(getPageId());
    const newTest = {
      title: testTitle,
      course_id: testCourseId,
    };
    const response = await createTest(newTest);
    console.log(response.data);
    courses.addTest(response.data);
  };

  useEffect(() => {
    getTestsList();
  }, []);

  return (
    <div className="course-page">
      <Navbar />
      <div className="course-block-placement">
        {false && <AchievementsList questions={courses.achievementsList} />}
        <div className="tests-list">
          {courses.testsList
            .filter((element) => {
              if (element.course_id == getPageId()) return true;
              else return false;
            })
            .map((course) => (
              <TestCard
                id={course.id}
                key={course.id}
                courseId={course.id}
                title={course.title}
                img={course.image}
                onDelete={removeCard}
                openTest={() => {
                  navigate("/tests/" + course.id);
                }}
              />
            ))}
        </div>
        {users.loggedIn && (
          <div className="test-add-card">
            <div className="test-add-title">
              <input
                type="text"
                id="add-title-field"
                onChange={(e) => setTestTitle(e.target.value)}
                placeholder="Test Title"
              />
            </div>
            <div
              className="add-test-btn"
              onClick={() => {
                createNewTest();
              }}
            >
              Add
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default CoursePage;
