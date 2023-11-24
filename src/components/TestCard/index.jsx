import React from "react";

const TestCard = (props) => {
  return (
    <div>
      <div className="test-card">
        <img src="" alt="no img" />
        <div className="title">{props.title}</div>
        <div className="open-test" onClick={props.openTest}>
          open
        </div>
      </div>
    </div>
  );
};

export default TestCard;
