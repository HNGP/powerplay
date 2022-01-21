import { useParams } from "react-router-dom";
import React from "react";
import TeamCard from "../../components/TeamModal/TeamModal";

export default function Match() {
	const params = useParams();
	return <TeamCard match={params.matchId} />;
}
