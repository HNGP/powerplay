import React, { useState, useEffect } from "react";
import { IoMdLogIn, IoIosUnlock } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";

import { Row, Col, Input, Divider, Button } from "antd";
import "./style.css";

const Login = () => {
  return (
    <div className="LoginCard">
      <Row>
        <Col>
          <Row>
            <IoIosUnlock className="icon" />
            <h1 style={{ fontFamily: "Bebas Neue", fontSize: "50px" }}>
              Welcome Back.
            </h1>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Button type="primary" className="google-button" block>
              <AiOutlineGoogle
                style={{ fontSize: "24px", marginRight: "20px" }}
              />
              Continue with Google
            </Button>

            <Divider>OR</Divider>
          </Row>
          <Row>
            <p>USERNAME OR EMAIL</p>
            <Input className="username" />
          </Row>
          <Row>
            <p>PASSWORD</p>
            <Input className="password" />
          </Row>
          <Row>
            <Button className="login-button" block>
              Login
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
