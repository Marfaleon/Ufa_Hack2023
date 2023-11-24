import React from "react";

const CourseCard = (props) => {
  return (
    <div>
      <div className="course-card">
        <img src="" alt="no img" />
        <div className="course-title">{props.title}</div>
        <div className="course-text">{props.text}</div>
        <div className="open-course" onClick={props.openCourse}>
          open
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
