import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "elt-react-credit-cards";
import "elt-react-credit-cards/es/styles-compiled.css";
import { Button, Modal, Result } from "antd";
import styles from "./style.css";
import emailjs from "@emailjs/browser";

const PaymentCard = (props) => {
  const [number, SetNumber] = useState("");
  const [name, SetName] = useState("");
  const [month, SetMonth] = useState("");
  let [expiry, SetExpiry] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  const handleDate = (e) => {
    SetMonth(e.target.value);
    SetExpiry(e.target.value);
  };

  const [success, setSuccess] = useState(false);
  const handleExpiry = (e) => {
    SetExpiry(month.concat(e.target.value));
  };

  let sendObject = {
    to_name: "Kaustubh",
    to_email: "kaustubh.debnath10@gmail.com",
    team_name: "Malad Kings",
    sport: "Cricket",
    date: "28th Feb",
  };

  const ShowModal = () => {
    props.getSuccess(true);
    emailjs
      .send(
        "service_ccjhlru",
        "template_p6txlfn",
        sendObject,
        "user_W8qVMmzNOx0uiGyH3sqTa"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      {/* <div className="rccs__card backcolor"> */}

      <div clasName="rccs__card rccs__card--unknown">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>

      <br />
      <form>
        <div className="row">
          <div className="col-sm-11">
            <label for="name" style={{ marginBottom: "10px" }}>
              Card Number
            </label>
            <input
              type="tel"
              className="form-control"
              value={number}
              name="number"
              maxlength="16"
              pattern="[0-9]+"
              onChange={(e) => {
                SetNumber(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-11">
            <label for="name" style={{ marginBottom: "10px" }}>
              Card Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              name="name"
              onChange={(e) => {
                SetName(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            className="col=sm-7"
            style={{
              ...{ "padding-right": "12em" },
              ...{ "padding-left": "1em" },
            }}
          >
            <label for="month" style={{ marginBottom: "10px" }}>
              Expiry
            </label>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleDate}
            >
              <option value=" ">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
          </div>
          &nbsp;
          <div className="col-sm-4">
            <select
              className="form-control"
              name="expiry"
              onChange={handleExpiry}
            >
              <option value=" ">Year</option>
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </select>
          </div>
          <div className="col-sm-3">
            <div className="col-sm-4" style={{ marginTop: "-25px" }}>
              <label for="cvv">CVV</label>
            </div>
            <input
              type="tel"
              name="cvc"
              maxlength="3"
              className=" form-control card"
              value={cvc}
              pattern="\d*"
              onChange={(e) => {
                SetCvc(e.target.value);
              }}
              onFocus={(e) => SetFocus(e.target.name)}
            ></input>
          </div>
        </div>
        <br />
        <Button type="primary" block onClick={ShowModal}>
          CONTINUE PAYMENT
        </Button>
      </form>
    </>
  );
};
export default PaymentCard;
