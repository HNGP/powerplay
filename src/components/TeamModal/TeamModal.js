import { Card, List, Modal, Button, Radio } from "antd";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";
import "./style.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { fetchTeamById } from "../../api/api";

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
  const [team, setTeam] = useState({});
  const [value, setValue] = useState("Aman Kumar");

  useEffect(() => {
    const fetchTeam = async () => {
      const teamDetails = await fetchTeamById(props.text);
      if (teamDetails) {
        var matches = teamDetails.title.match(/\b(\w)/g);
        var acronym = matches.join("");
        setTeam({ ...teamDetails, initial: acronym });
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta title={item.title} description={item.role} />
                <Radio
                  value={item.title}
                  checked={value === item.title}
                  onClick={toggleRadio}
                />
              </List.Item>
            )}
          />
        </Card>
      </Modal>
    </div>
  );
};

export default TeamModal;
