import React from "react";
import "./style.css";
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const CourseCard = observer((props) => {
  const { users } = useContext(Context);

  return (
    <div className="course-card">
      <img
        src={process.env.REACT_APP_BASE_URL + "/uploads/2.jpg"}
        alt="no img"
        className="course-card-img"
      />
      <div className="course-title">{props.title}</div>
      <div className="open-course" onClick={props.openCourse}>
        open
      </div>
      {users.loggedIn && (
        <div
          className="course-del-btn"
          onClick={() => props.onDelete(props.id)}
        >
          X
        </div>
      )}
    </div>
  );
});

export default CourseCard;
