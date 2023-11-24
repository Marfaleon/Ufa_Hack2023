import { client, loggedInClient } from "./index.js";

export const getTests = async () => {
  const res = await client.get("/tests");
  return res;
};

export const createTests = async (course) => {
  const res = await loggedInClient.post("/tests", course);
  return res;
};

export const deleteTests = async (course_id) => {
  const res = await loggedInClient.delete("/tests/" + course_id);
  return res;
};
