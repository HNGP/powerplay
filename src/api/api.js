import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3200/",
});

export const fetchMatches = async () => {
  const response = await api.get("/matches");
  return response.data;
};
