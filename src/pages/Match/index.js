import React from "react";
import TeamCard from "../../components/TeamModal/TeamModal";
import { useParams } from "react-router-dom";

export default function Match() {
	const params = useParams();
	return <TeamCard match={params.matchId} />;
}
