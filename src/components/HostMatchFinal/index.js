import React, { useState, useEffect } from "react";
import "./style.css";
import { Radio, Input, Button, Result } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";

const HostMatchFinal = (props) => {
  const [value, setValue] = useState(1);
  const [success, setSuccess] = useState(false);

  const ClickHandler = () => {
    setSuccess(true);
    console.log("bruhhh");
    props.createMatch();
  };

  // const ShowResult = () => {
  //   if (success) {
  //     return (
  //       <>
  //         <Result
  //           status="success"
  //           title="Successfully Purchased Cloud Server ECS!"
  //           subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
  //           extra={[
  //             <Button type="primary" key="console">
  //               Go Console
  //             </Button>,
  //             <Button key="buy">Buy Again</Button>,
  //           ]}
  //         />
  //       </>
  //     );
  //   }
  // };

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
          <Radio.Group>
            <Radio value={1}>Yes</Radio>
            <Radio value={2} className="radioMargin">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="gap1">
          <p className="text1">Enter entry fee amount: (in INR)</p>
          <Input className="inputField" />
        </div>
        <div className="gap1">
          <p style={{ marginBottom: "20px" }} className="text1">
            Payment Forwarding:
          </p>
          <Radio.Group>
            <Radio value={1} className="radioVertical">
              Linked Bank Account ***14125
            </Radio>
            <br />
            <Radio value={2} className="radioVertical1">
              Powerplay Wallet
            </Radio>
          </Radio.Group>
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
            <p className="text nextText">Publish</p>
          </div>
        </div>
      </div>
      <br />
      <Modal
        visible={success}
        onOk={() => setSuccess(false)}
        onCancel={() => setSuccess(false)}
      >
        <Result
          status="success"
          title="Application Successful!"
          subTitle="Your match will be listed upon approval and you will receive updates in your email address"
        />
      </Modal>
    </div>
  );
};

export default HostMatchFinal;
