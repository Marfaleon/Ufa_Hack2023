import Navbar from "../../components/Navbar/index.jsx";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "../../components/CourseCard/index.jsx";
import { Context } from "../../index.js";
import { useNavigate } from "react-router-dom";
import { loggedInClient } from "../../API/index.js";
import { createCourse, deleteCourse, getCourses } from "../../API/courseAPI.js";
import { observer } from "mobx-react-lite";
import "./style.css";

const CoursesPage = observer(() => {
  const { courses } = useContext(Context);
  const { users } = useContext(Context);
  const navigate = useNavigate();

  const [courseTitle, setCourseTitle] = useState("");
  const [courseText, setCourseText] = useState("/uploads/logo.png");
  const [courseImage, setCourseImage] = useState("");

  const getCoursesList = async () => {
    const response = await getCourses();
    console.log(response);
    courses.setCourses(response.data);
  };

  function removeCard(course_id) {
    courses.removeCourse(course_id);
    const response = deleteCourse(course_id);
  }

  const createNewCourse = async () => {
    const newCourse = {
      title: courseTitle,
      text: courseText,
      image: courseImage,
    };
    const response = await createCourse(newCourse);
    console.log(response.data);
    courses.addCourse(response.data);
  };

  useEffect(() => {
    getCoursesList();
  }, []);

  return (
    <div className="courses-page">
      <Navbar />
      <div className="courses-list">
        {courses.coursesList.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            img={course.image}
            text={course.text}
            onDelete={removeCard}
            openCourse={() => {
              navigate("/courses/" + course.id);
            }}
          />
        ))}
      </div>

      {users.loggedIn && (
        <div className="course-add-card">
          <div className="course-add-title">
            <input
              type="text"
              id="add-title-field"
              onChange={(e) => setCourseTitle(e.target.value)}
              placeholder="Course Title"
            />
          </div>
          <div className="course-add-img">
            <input
              type="text"
              name=""
              id="add-img-field"
              onChange={(e) => setCourseImage(e.target.value)}
              placeholder="Course Image Local URL"
            />
          </div>
          <div className="course-add-text">
            <input
              type="text"
              id="add-text-field"
              onChange={(e) => setCourseText(e.target.value)}
              placeholder="Course Text"
            />
          </div>
          <div
            className="add-course-btn"
            onClick={() => {
              createNewCourse();
            }}
          >
            Add
          </div>
        </div>
      )}
    </div>
  );
});

export default CoursesPage;
