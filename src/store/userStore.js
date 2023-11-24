import { makeAutoObservable } from "mobx";

class UserStore {
  _user = {};
  _loggedIn = false;
  _users_courses = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }

  setLoggedIn(loggedIn) {
    this._loggedIn = loggedIn;
  }

  get loggedIn() {
    return this._loggedIn;
  }

  addCourse(courseId) {
    this._users_courses.push(courseId);
  }

  removeCourse(courseId) {
    this._users_courses = this._users_courses.filter(
      (course) => course.id !== courseId
    );
  }

  get usersCoursesIds() {
    return this._users_courses;
  }
}

export default UserStore;
