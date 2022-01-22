import React, { UseState, UseEffect } from "react";
import { Row, Col } from "antd";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../Image/logo.svg";
import Background from "../../Image/background.webp";

export default function Landing() {
  return (
    <div class="hero-landing">
      <Row>
        <Col span={9}>
          <div className="LogoArea">
            <img src={Logo}></img>
            <Row>
              <p style={{ marginTop: "50px" }}>
                Connect with sport enthusiasts and host independent sporting
                events.
              </p>
            </Row>
            <Row>
              <p>Powerplay is a community driven service. Built in India.</p>
            </Row>
            <Row>
              <Link to={`/matches`} style={{ textDecoration: "none" }}>
                <p className="Explore">
                  Explore Matches in your city.{" "}
                  <AiOutlineArrowRight style={{ paddingBottom: "2px" }} />
                </p>
              </Link>
            </Row>
            <Row>
              <Link to={`/hostMatch`} style={{ textDecoration: "none" }}>
                <p className="Explore">
                  Looking to Host a Match?{" "}
                  <AiOutlineArrowRight style={{ paddingBottom: "2px" }} />
                </p>
              </Link>
            </Row>
          </div>
        </Col>
        <Col span={15}>
          <div className="HeroImg">
            <img src={Background} height={800}></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}
