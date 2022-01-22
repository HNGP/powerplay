import React from "react";
import "./style.css";
import { Radio, Input, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const HostMatchFinal = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="finalCard">
        <h1 className="finalHeading">Final Steps..</h1>
        <p className="finalText">
          Just a few final steps before we finish hosting your match
        </p>
        <div className="gap1">
          <p className="text1">
            Do player candidates need to pay an entry fee?
          </p>
          <Radio value={1}>Yes</Radio>
          <Radio value={2} className="radioMargin">
            No
          </Radio>
        </div>
        <div className="gap1">
          <p className="text1">Enter entry fee amount: (in INR)</p>
          <Input className="inputField" />
        </div>
        <div className="gap1">
          <p className="text1">Payment Forwarding:</p>
          <Radio value={1} className="radioVertical">
            Linked Bank Account ***14125
          </Radio>
          <br />
          <Radio value={2} className="radioVertical1">
            Powerplay Wallet
          </Radio>
        </div>
        <div className="next">
          <div className="side">
            <Button
              shape="circle"
              icon={<ArrowRightOutlined />}
              className="nextArrow"
            ></Button>
          </div>
          <div className="side">
            <p className="text nextText">Publish</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default HostMatchFinal;
