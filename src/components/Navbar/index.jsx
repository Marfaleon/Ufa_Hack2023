import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

const Navbar = observer(() => {
  const { users } = useContext(Context);

  const testing = () => {
    console.log("hello");
  };

  return (
    <div className="navbar">
      <div className="nav_buttons">
        <div className="button">Новости</div>
        <Link className="button" to="/courses">
          Курсы
        </Link>
        <Link className="button" to="/tests/1">
          FastQuestion
        </Link>
        <div className="button">Новости</div>
      </div>

      <Link className="logo" to="/main">
        <img
          src={process.env.REACT_APP_BASE_URL + "/uploads/logo.png"}
          alt="logo"
          className="logo-img"
        />
      </Link>

      {users.loggedIn ? (
        <div className="acc">
          <img className="icon" src="" alt="img" />
          <div className="name">Имя Фамилия</div>
          <div className="prof_menu">
            <button
              className="exit_btn"
              onClick={() => users.setLoggedIn(false)}
            >
              Выход
            </button>
          </div>
        </div>
      ) : (
        <div className="auth">
          <Link className="sign" to="/auth">
            Войти
          </Link>
          <Link className="reg" to="/reg">
            Регистрация
          </Link>
        </div>
      )}
    </div>
  );
});

export default Navbar;
