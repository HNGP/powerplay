import React, { UseState, UseEffect } from "react";
import { Row, Col } from "antd";
import "./style.css";
import Logo from "../../Image/logo.svg";
import Background from "../../Image/landing_bg.png";

export default function Landing() {
  return (
    <div class="hero-landing">
      <Row>
        <Col span={9}>
          <div className="LogoImg">
            <img src={Logo}></img>
            <Row>
              <p>
                Connect with sport enthusiasts and host independent sporting
                events.
              </p>
            </Row>
            <Row>
              <p>Powerplay is a community driven service. Built in India.</p>
            </Row>
            <Row>
              <p>Explore Matches in your city.</p>
            </Row>
          </div>
        </Col>
        <Col span={15}>
          <div className="HeroImg">
            <img src={Background} width={1000}></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}
