import React from "react";
import "./style.css";
import { Input, InputNumber, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const HostMatchTeams = (props) => {
  const ClickHandler = () => {
    props.onNextStep(6);
  };

  function onChange(value) {
    console.log("changed", value);
  }
  return (
    <div>
      <div className="teamsCard">
        <h1 className="formHead">Configure Team #{props.id}</h1>
        <p className="formHeadText">
          Fill team members if you have some already, and list other positions
          vacant for others to participate!
        </p>
        <p className="text1">
          We allow a maximum of two teams on individually organised matches
        </p>
        <div className="gap">
          <p className="text1">Enter Team Name</p>
          <Input className="inputField" />
        </div>
        <div className="gap">
          <div className="side">
            <p className="text1">Number of Players</p>
          </div>
          <div className="side">
            <InputNumber
              min={1}
              max={11}
              onChange={onChange}
              className="inputNumber1"
            />
          </div>
        </div>
        <div className="gap">
          <p className="text1">Type of Players and Numbers</p>
          <div className="side">
            <Input className="inputField1" />
          </div>
          <div className="side">
            <InputNumber
              min={1}
              max={11}
              onChange={onChange}
              className="inputNumber"
            />
          </div>
          <div className="side">
            <Input className="inputField1" />
          </div>
          <div className="side">
            <InputNumber
              min={1}
              max={11}
              onChange={onChange}
              className="inputNumber"
            />
          </div>
          <div className="side">
            <Input className="inputField1" />
          </div>
          <div className="side">
            <InputNumber
              min={1}
              max={11}
              onChange={onChange}
              className="inputNumber"
            />
          </div>
          <div className="side">
            <Input className="inputField1" />
          </div>
          <div className="side">
            <InputNumber
              min={1}
              max={11}
              onChange={onChange}
              className="inputNumber"
            />
          </div>
        </div>
        <div className="next">
          <div className="side">
            <Button
              shape="circle"
              icon={<ArrowRightOutlined />}
              className="nextArrow"
              onClick={ClickHandler}
            ></Button>
          </div>
          <div className="side">
            <p className="text nextText">Finalize</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostMatchTeams;
