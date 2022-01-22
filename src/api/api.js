import axios from "axios";

const api = axios.create({
  baseURL: "/",
});

export const fetchMatches = async () => {
  const response = await api.get("/matches");
  return response.data;
};
