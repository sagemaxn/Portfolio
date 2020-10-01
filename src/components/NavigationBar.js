import React from "react";
import styled from "styled-components";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";

const Styled = styled.div`
  .nav {
    background-color: #2e2e2e;
    height: 56px;
  }

  .nav-link {
    text-align: center;
  }
  .color {
    color: #4bb9a1;
    :hover {
      color: #4bb9a1; /*this is to prevent the Navbar.Brand from changing color on hover */
    }
  }

  .test {
    background: #2e2e2e;
    border-radius: 8px;
    max-width: 250px;
  }
`;

function NavigationBar() {
  return (
    <Styled>
      <Navbar className="nav navbar-dark" expand="sm" fixed="top">
        <Navbar.Brand className="color">Sage Maxwell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navlinks">
          <Nav className="test ml-auto">
            <NavLink href="#home">
              <span className="color">Home</span>
            </NavLink>

            <NavLink className="color" href="#about">
              <span className="color">About</span>
            </NavLink>

            <NavLink className="color" href="#projects">
              <span className="color">Projects</span>
            </NavLink>

            <NavLink className="color" href="#contact">
              <span className="color">Contact</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styled>
  );
}
export default NavigationBar;
