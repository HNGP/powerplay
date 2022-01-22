import axios from "axios";

const api = axios.create({
	baseURL: "/api/",
});

export const fetchMatches = async () => {
	const response = await api.get("/match");
	return response.data;
};

export const fetchMatchById = async (id) => {
	const response = await api.get(`/match/${id}`);
	return response.data;
};

export const fetchTeamById = async (id) => {
	const response = await api.get(`/teams/${id}`);
	return response.data;
};
export const fetchPlayerById = async (id) => {
	const response = await api.get(`/players/${id}`);
	return response.data;
};

export const createMatch = async (match) => {
  const response = await api.post(`/match`, match);
  return response.data;
};

export const createTeam = async (team) => {
  const response = await api.post(`/teams`, team);
  return response.data;
};
