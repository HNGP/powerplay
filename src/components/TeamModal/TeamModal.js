import { Card, List, Modal, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import "./style.css";
import { IoMdArrowRoundBack } from "react-icons/io";

const data = [
	{
		title: "Aman Kumar",
		role: "Bowler",
	},
	{
		title: "Ayush Neekhar",
		role: "Bowler",
	},
	{
		title: "Sumit Prakash",
		role: "Jokster",
	},
	{
		title: "Kaustubh Debnath",
		role: "Bowler (c)",
	},
	{
		title: "S C Ashwin",
		role: "Carrier",
	},
];

const TeamModal = (props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

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
			Match: {props.match}
			<Button type='text' onClick={showModal}>
				View Team
			</Button>
			<Modal
				closeIcon={<IoMdArrowRoundBack />}
				keyboard={true}
				centered={true}
				title='Configure Team #1'
				visible={isModalVisible}
				onCancel={handleCancel}
				footer={[
					<Button
						key='payment'
						onClick={handlePayment}
						style={{ width: "100%", borderRadius: "10px" }}>
						Continue to Payment
					</Button>,
				]}>
				<Card style={{ width: "100%" }}>
					<div className='teamDiv'>{props.match}</div>
					<List
						itemLayout='horizontal'
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								<List.Item.Meta title={item.title} description={item.role} />
								<Radio />
							</List.Item>
						)}
					/>
				</Card>
			</Modal>
		</div>
	);
};

export default TeamModal;
