import React, { useContext } from "react";
import "./style.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const TestCard = observer((props) => {
  const { users } = useContext(Context);
  return (
    <div>
      <div className="test-card">
        <div className="test-card-title">{props.title}</div>
        <div className="open-test" onClick={props.openTest}>
          open
        </div>
        {users.loggedIn && (
          <div
            className="test-del-btn"
            onClick={() => props.onDelete(props.id)}
          >
            X
          </div>
        )}
      </div>
    </div>
  );
});

export default TestCard;
