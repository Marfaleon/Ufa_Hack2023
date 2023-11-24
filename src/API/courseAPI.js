import { client, loggedInClient } from "./index.js";

export const getCourses = async () => {
  const res = await client.get("/coursesList");
  return res;
};

export const createCourse = async (course) => {
  const res = await loggedInClient.post("/coursesList", course);
  return res;
};

export const deleteCourse = async (course_id) => {
  const res = await loggedInClient.delete("/coursesList/" + course_id);
  return res;
};
