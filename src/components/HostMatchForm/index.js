import React from "react";
import "./style.css";
import { Input, DatePicker, TimePicker, Switch, Button } from "antd";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
import next from "../../Image/next.png";

const format = "HH:mm";
const { TextArea } = Input;

const HostMatchForm = (props) => {
  const ClickHandler = () => {
    props.onNextStep(5);
  };

  return (
    <div>
      <div className="frm">
        <div>
          <h1 className="formHead">Other Details</h1>
          <p className="formHeadText">
            We love community driven sports! Fill these details and instantly
            list your match.
          </p>
        </div>

        <div>
          <p className="text">MATCH FORMAT</p>
          <Input className="inputField" />
        </div>
        <div className="gap">
          <p className="text">VENUE</p>
          <Input className="inputField" />
        </div>

        <div className="gap">
          <p className="text">DATE AND TIME</p>
          <DatePicker style={{ width: "50%" }} className="dateTime" />
          <TimePicker
            defaultValue={moment("9:00", format)}
            format={format}
            className="dateTime"
          />
        </div>

        <div className="gap">
          <div className="side">
            <p className="formHeadText">Enable "Bring your Own Gear"?</p>
          </div>
          <div className="side switch">
            <Switch />
          </div>
        </div>

        <div className="gap">
          <p className="text">
            Miscellaneous Details or descriptions for the applicants
          </p>
          <TextArea rows={4} className="inputField" />
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
            <p className="text nextText">Configure Teams</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default HostMatchForm;
