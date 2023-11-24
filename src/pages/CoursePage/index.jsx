import Navbar from "../../components/Navbar/index.jsx";
import React, { useContext, useEffect } from "react";
import TestCard from "../../components/TestCard/index.jsx";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { createTests, deleteTests, getTests } from "../../API/testAPI.js";
import { observer } from "mobx-react-lite";

const CoursePage = observer(() => {
  const { courses } = useContext(Context);
  const navigate = useNavigate();

  const getTestsList = async () => {
    const response = await getTests();
    console.log(response);
    courses.setTests(response.data);
  };

  useEffect(() => {
    getTestsList();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="tests-list">
        {courses.testsList.map((course) => (
          <TestCard
            key={course.id}
            courseId={course.id}
            title={course.title}
            img={course.image}
            openTest={() => {
              navigate("/tests/" + course.id);
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default CoursePage;
