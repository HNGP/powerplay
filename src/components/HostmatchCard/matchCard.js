import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const MatchnameCard = (props) => {
  const [input, setInput] = useState("");

  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const ClickHandler = () => {
    props.onNextStep({ title: input });
  };

  return (
    <div className="host-match-card">
      <h1>Match Name</h1>
      <h5>Give your match a name, or just the team versus</h5>
      <Input className="hostinput" onChange={changeInput}></Input>
      <Button
        type="primary"
        shape="circle"
        icon={<ArrowRightOutlined />}
        danger
        onClick={ClickHandler}
      ></Button>
    </div>
  );
};

export default MatchnameCard;
