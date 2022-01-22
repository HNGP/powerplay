import React, { useState } from "react";
import "./style.css";
import { Button, Input } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const SportsnameCard = (props) => {
  const [input, setInput] = useState("");
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const ClickHandler = () => {
    props.onNextStep({ sport: input });
  };
  return (
    <div className="host-match-card">
      <h1>Sport</h1>
      <h5>Which sport will be played in this match ?</h5>
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

export default SportsnameCard;
