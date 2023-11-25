import React from "react";
import "./style.css";

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <img
        src={process.env.REACT_APP_BASE_URL + "/uploads/logo.png"}
        alt="no img"
        className="course-card-img"
      />
      <div className="course-title">{props.title}</div>
      <div className="open-course" onClick={props.openCourse}>
        open
      </div>
    </div>
  );
};

export default CourseCard;
