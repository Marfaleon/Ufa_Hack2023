import Navbar from "../../components/Navbar/index.jsx";
import React, { useContext, useEffect } from "react";
import CourseCard from "../../components/CourseCard/index.jsx";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { loggedInClient } from "../../API/index.js";
import { createCourse, deleteCourse, getCourses } from "../../API/courseAPI.js";
import { observer } from "mobx-react-lite";

const CoursesPage = observer(() => {
  const { courses } = useContext(Context);
  const navigate = useNavigate();

  const getCoursesList = async () => {
    const response = await getCourses();
    console.log(response);
    courses.setCourses(response.data);
  };

  useEffect(() => {
    getCoursesList();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="tests-list">
        {courses.coursesList.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            img={course.image}
            text={course.text}
            openCourse={() => {
              navigate("/courses/" + course.id);
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default CoursesPage;
