import React, { useState } from "react";
import "./style.css";
import { Input, DatePicker, TimePicker, Switch, Button } from "antd";
import moment from "moment";
import { ArrowRightOutlined } from "@ant-design/icons";
import next from "../../Image/next.png";

const format = "HH:mm";
const { TextArea } = Input;

const HostMatchForm = (props) => {
  const [input, setInput] = useState({});
  const changeInput = (e, field) => {
    setInput((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  };
  const changeDate = (date, dateString) => {
    setInput((prevState) => ({
      ...prevState,
      date: dateString,
    }));
  };
  const changeByog = (checked) => {
    setInput((prevState) => ({
      ...prevState,
      byog: checked,
    }));
  };
  const ClickHandler = () => {
    props.onNextStep(input);
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
          <p className="text">Match Format</p>
          <Input
            className="inputField"
            onChange={(e) => changeInput(e, "format")}
          />
        </div>
        <div className="gap">
          <p className="text">Venue</p>
          <Input
            className="inputField"
            onChange={(e) => changeInput(e, "venue")}
          />
        </div>

        <div className="gap">
          <p className="text">Date and Time</p>
          <DatePicker
            style={{ width: "50%" }}
            className="dateTime"
            onChange={changeDate}
          />
          <TimePicker
            defaultValue={moment("9:00", format)}
            format={format}
            className="dateTime"
          />
        </div>

        <div className="gap">
          <div className="side">
            <p className="text">Enable "Bring your Own Gear"?</p>
          </div>
          <div className="side switch">
            <Switch onChange={(checked, event) => changeByog(checked)} />
          </div>
        </div>

        <div className="gap">
          <p className="text">
            Miscellaneous Details or descriptions for the applicants
          </p>
          <TextArea
            rows={4}
            className="inputField"
            onChange={(e) => changeInput(e, "description")}
          />
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
