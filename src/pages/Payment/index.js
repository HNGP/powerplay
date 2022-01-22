import React, { useState, useEffect } from "react";
import "./style.css";
import PaymentCard from "../../components/PaymentCard";
import { Row, Col, Divider, Button, Radio, Modal, Result } from "antd";
import { SiGooglepay, SiPaytm } from "react-icons/si";
import { BsCreditCard2Front } from "react-icons/bs";

const Payment = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleSuccess = (flag) => {
    setVisibleModal(flag);
  };

  return (
    <div className="payment-layout">
      <p>PAYMENT PENDING</p>
      <h1>₹400</h1>
      <p>CHOOSE A PAYMENT METHOD</p>
      {/* <PaymentCard />{" "} */}
      <Row>
        <Col>
          <Radio.Button className="payment-method">
            <BsCreditCard2Front className="payment-icon credit-card" />
          </Radio.Button>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <Radio.Button className="payment-method">
            <SiGooglepay className="payment-icon" />
          </Radio.Button>
        </Col>
        <Col style={{ marginLeft: "10px" }}>
          <Radio.Button className="payment-method">
            <SiPaytm className="payment-icon" />
          </Radio.Button>
        </Col>
      </Row>
      <Row>
        <PaymentCard getSuccess={handleSuccess} />
      </Row>
      <Modal
        visible={visibleModal}
        onOk={() => setVisibleModal(false)}
        onCancel={() => setVisibleModal(false)}
      >
        <Result
          status="success"
          title="Payment Successful!"
          subTitle="Your participation is registered and you will receive updates in your email address"
        />
      </Modal>
    </div>
  );
};

export default Payment;
