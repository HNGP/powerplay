import { Card, List, Modal, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import "./style.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { fetchTeamById, fetchPlayerById } from "../../api/api";

const TeamModal = (props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [team, setTeam] = useState({});
	const [player, setPlayer] = useState({});
	const [value, setValue] = useState("Aman Kumar");

	useEffect(() => {
		const fetchTeam = async () => {
			const teamDetails = await fetchTeamById(props.text);
			if (teamDetails) {
				var matches = teamDetails.title.match(/\b(\w)/g);
				var acronym = matches.join("");
				setTeam({ ...teamDetails, initial: acronym });
				let arr = [];
				teamDetails.players.forEach(async (element) => {
					const playerDetails = await fetchPlayerById(element);
					if (playerDetails) {
						arr.push(playerDetails);
						setPlayer({ arr });
					}
					// fetchPlayer();
				});
				for (let i = 0; i < 11 - teamDetails.players.length; i++) {
					arr.push({ id: null, name: `Player-${i + 1}` });
				}
			}
		};
		fetchTeam();
	}, [props.text]);

	const toggleRadio = (e) => {
		setValue(e.target.value);
	};

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handlePayment = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<Button className="team-title" type="link" onClick={showModal}>
				{team.initial}
				{/* {console.log(team.capacity)} */}
			</Button>
			<Modal
				closeIcon={<IoMdArrowRoundBack />}
				keyboard={true}
				centered={true}
				title="Configure Team #1"
				visible={isModalVisible}
				onCancel={handleCancel}
				footer={[
					<Button
						key="payment"
						onClick={handlePayment}
						style={{ width: "100%", borderRadius: "10px" }}
					>
						Continue to Payment
					</Button>,
				]}
			>
				<Card style={{ width: "100%" }}>
					<div className="teamDiv">{team.title}</div>
					<List
						itemLayout="horizontal"
						dataSource={player.arr}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta title={item.name} />
								{item.id === null && (
									<Radio
										value={item.name}
										checked={value === item.name}
										onClick={toggleRadio}
									/>
								)}
							</List.Item>
						)}
					/>
				</Card>
			</Modal>
		</div>
	);
};

export default TeamModal;
