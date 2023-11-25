import { makeAutoObservable } from "mobx";

class CourseStore {
  testsList = [
    {
      id: 1,
      title: "test1",
      courseId: 1,
      image: "/uploads/2.jpg",
    },
  ];
  coursesList = [
    {
      id: 1,
      title: "test1",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, reprehenderit!",
      image: "/uploads/2.jpg",
    },
    {
      id: 2,
      title: "test2",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, reprehenderit!",
      image: "/uploads/2.jpg",
    },
  ];
  achievementsList = [
    {
      id: 1,
      title: "Kill developer",
      text: "You need to kill me",
    },
  ];
  questionsList = [
    {
      id: 1,
      type: "space",
      text: "Выберите правильный -s- использования комментарий в Javascript ?",
      imageUrl: null,
      wordspace: 10,
      testId: 1,
      answers: [
        {
          id: 1,
          answer: "{# ... #}",
          correct: false,
        },
        {
          id: 2,
          answer: "<!--- .... ---!>",
          correct: false,
        },
        {
          id: 3,
          answer: "// ....",
          correct: true,
        },
        {
          id: 4,
          answer: "\\ ...",
          correct: false,
        },
      ],
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addCourse(course) {
    this.coursesList.push(course);
  }

  removeCourse(course_id) {
    this.coursesList = this.coursesList.filter(
      (course) => course.id !== course_id
    );
  }

  setCourses(courses) {
    this.coursesList = courses;
  }

  addTest(course) {
    this.testsList.push(course);
  }

  removeTest(course_id) {
    this.testsList = this.testsList.filter((course) => course.id !== course_id);
  }

  setTests(courses) {
    this.testsList = courses;
  }

  addQuestion(course) {
    this.questionsList.push(course);
  }

  removeQuestion(course_id) {
    this.questionsList = this.questionsList.filter(
      (course) => course.id !== course_id
    );
  }

  setQuestions(courses) {
    this.questionsList = courses;
  }

  addAnswer(block_id, question_id, answer) {
    this.blocksList[block_id].content[question_id].answers.push(answer);
  }

  removeAnswer(block_id, question_id, answer_id) {
    this.blocksList[block_id].content[question_id].answers = this.blocksList[
      block_id
    ].content[question_id].answers.filter((answer) => answer.id !== answer_id);
  }

  setAnswers(block_id, question_id, answers) {
    this.blocksList[block_id].content[question_id].answers = answers;
  }
}

export default CourseStore;
