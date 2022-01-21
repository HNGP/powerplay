import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu, Typography } from "antd";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../Image/logo.png";
import "./style.css";

const { Text } = Typography;

export default function Navigation() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Your Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Past Matches
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Host a Match
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="navBg">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img className="logoImg" src={Logo} alt="logo"></img>
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
              {/* <NavDropdown
                title="Link"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">
                  Your Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Past Matches
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Host a match
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
              </NavDropdown> */}
              <Dropdown overlay={menu} placement="topRight" arrow>
                <div className="location">
                  <Text style={{ color: "white" }}>Mumbai</Text>
                  <DownOutlined style={{ marginLeft: "3px" }} />
                </div>
              </Dropdown>

              <Dropdown overlay={menu} placement="topRight" arrow>
                <Text className="avtar">Profile</Text>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
