import { Card, List, Modal, Button } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const TeamModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showModal}>
        {props.text}
      </Button>
      <Modal
        title="Current Team"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Card style={{ width: "100%" }}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={<a href="https://ant.design"> {item.title} </a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Card>
      </Modal>
    </>
  );
};

export default TeamModal;
