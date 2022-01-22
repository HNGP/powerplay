import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const fetchMatches = async () => {
  const response = await api.get("/match");
  return response.data;
};
