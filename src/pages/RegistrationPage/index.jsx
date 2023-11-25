import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../../API";
import { Context } from "../..";
import { register } from "../../API/userAPI";
import Navbar from "../../components/Navbar";
import "./style.css";

const RegistrationPage = () => {
  const { users } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [second_name, setSecond_name] = useState("");
  const [avatar, setAvatar] = useState(undefined);

  const selectFile = async (e) => {
    const avatarData = new FormData();
    avatarData.append("file", e.target.files[0]);
    const res = await client.post("/file", avatarData);
    setAvatar(res.data.filename);
  };

  const registerUser = async () => {
    const user = {
      email: email,
      username: username,
      password: password,
      role: "admin",
      first_name: first_name,
      last_name: second_name,
      avatar: avatar,
    };
    try {
      const response = register(user);
      console.log("reg ans", response);
      users.setLoggedIn(true);
      navigate("/courses");
    } catch (error) {
      alert("Ошибка! Проверьте введённые данные");
      console.log(error);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <form className="reg-window">
        <div className="password-block">
          <input
            type="text"
            className="password"
            placeholder="Имя..."
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>

        <div className="password-block">
          <input
            type="text"
            className="password"
            placeholder="Фамилия..."
            onChange={(e) => setSecond_name(e.target.value)}
          />
        </div>

        <div className="password-block">
          <input
            type="text"
            className="password"
            placeholder="Почта..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-block">
          <input
            type="text"
            className="password"
            placeholder="Логин..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password-block">
          <input
            type="text"
            className="password"
            placeholder="Пароль..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {false && (
          <div className="password-block">
            <input
              type="file"
              className="password"
              placeholder="Аватар..."
              onChange={selectFile}
            />
          </div>
        )}

        <div className="reg-btn" onClick={(e) => registerUser()}>
          Зарегестрироваться
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
