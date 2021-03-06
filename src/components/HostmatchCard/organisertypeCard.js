import React from "react";
import { Button, Radio } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const OrganisertypeCard = (props) => {
  const [value, setValue] = useState("");
  const ClickHandler = () => {
    props.onNextStep({ organiser: value });
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="host-match-card">
      <h1>Organiser type</h1>
      <h5>Are you an individual or do you reprsent a club or organisation?</h5>
      <Radio.Group
        size="large"
        onChange={onChange}
        value={value}
        style={{
          marginTop: 15,
          paddingRight: 60,
          paddingLeft: 35,
          marginBottom: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Radio value={"Individual"}>Individual</Radio>
        <Radio value={"Organisation"}>Organisation</Radio>
      </Radio.Group>
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

export default OrganisertypeCard;
