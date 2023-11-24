import { client, loggedInClient } from "./index.js";

export const getQuestions = async () => {
  const res = await client.get("/questions");
  return res;
};

export const createQuestion = async (course) => {
  const res = await loggedInClient.post("/questions", course);
  return res;
};

export const deleteQuestion = async (course_id) => {
  const res = await loggedInClient.delete("/questions/" + course_id);
  return res;
};
