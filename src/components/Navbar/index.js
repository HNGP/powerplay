import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu, Typography, Avatar } from "antd";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../Image/logo.png";
import Profile from "../../Image/profile.png";
import "./style.css";

const { Text } = Typography;

export default function Navigation() {
  const profileMenu = (
    <Menu>
      <Menu.Item>
        <a href="/profile">Your Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">Past Matches</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/hostMatch">Host a Match</a>
      </Menu.Item>
      <Menu.Item>
        <a href="/">Logout</a>
      </Menu.Item>
    </Menu>
  );
  const cityMenu = (
    <Menu>
      <Menu.Item>Delhi</Menu.Item>
      <Menu.Item>Kolkata</Menu.Item>
      <Menu.Item>Chennai</Menu.Item>
      <Menu.Item>Hyderabad</Menu.Item>
    </Menu>
  );

  return (
    <div className="navBg">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img className="logoImg" src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Input
                placeholder="Search for matches, events, teams, players"
                className="search"
              />
              <Dropdown overlay={cityMenu} placement="topRight" arrow>
                <div className="location">
                  <Text style={{ color: "white" }}>Mumbai</Text>
                  <DownOutlined
                    style={{
                      marginLeft: "4px",
                      paddingTop: "9px",
                      position: "absolute",
                    }}
                  />
                </div>
              </Dropdown>

              <Dropdown overlay={profileMenu} placement="topRight" arrow>
                <div className="profile">
                  <DownOutlined
                    style={{ marginLeft: "3px", marginRight: "6px" }}
                  />
                  <Avatar src={Profile} />
                </div>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
