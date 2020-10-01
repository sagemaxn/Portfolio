import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Styles = styled.div`
a:visited {color: #4bb9a1;}
a{color #4bb9a1}
.footer{
    height:10%;
    background: #2E2E2E;
}
img{
    height: 30px;
}
.nav{
   justify-content: space-evenly;
   width: 100%;
   
}
`;

function Footer() {
  return (
    <Styles>
      <Navbar sticky="bottom" className="footer">
        <Nav className="nav">
          <span>sagemaxn@gmail.com</span>{" "}
          <a href="https://github.com/sagemaxn/Portfolio" target="blank">
            source code
          </a>
        </Nav>
      </Navbar>
    </Styles>
  );
}

export default Footer;
