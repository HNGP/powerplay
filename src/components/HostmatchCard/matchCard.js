import React from "react";
import "./style.css";
import { Button, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const MatchnameCard = () => {
  return (
    <div className="host-match-card">
      <h1>Match Name</h1>
      <h5>Give your match a name, or just the team versus</h5>
      <Input className="hostinput"></Input>
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowRightOutlined />}
        danger
      ></Button>
    </div>
  );
};

export default MatchnameCard;
