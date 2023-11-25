import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage/index.jsx";
import AuthPage from "./pages/AuthPage/index.jsx";
import CoursePage from "./pages/CoursePage/index.jsx";
import CoursesPage from "./pages/CoursesPage/index.jsx";
import RegistrationPage from "./pages/RegistrationPage/index.jsx";
import ProfilePage from "./pages/ProfilePage/index.jsx";
import QuestionPage from "./pages/QuestionPage/index.jsx";
import { useContext } from "react";
import { Context } from ".";

function App() {
  const { courses } = useContext(Context);
  const { users } = useContext(Context);
  const loggedIn = false;
  const loggedInAdmin = false;
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/main" element={<StartPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/reg" element={<RegistrationPage />} />
          <Route path="/tests/:id" element={<QuestionPage />} />
          {users.loggedIn && (
            <Route path="/profile" element={<ProfilePage />} />
          )}
          <Route path="*" element={<StartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
