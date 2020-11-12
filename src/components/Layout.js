import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
/*
import Layout2 from "./Layout2";

const Styles = styled.div`
background-color: rgba(0, 0, 0, 0.199);
position: absolute

`
*/

const Layout = (props) => <Container fluid>
   <Row >
   <Col lg={1}></Col>
    <Col lg={10}>{props.children}</Col>
    <Col lg={1} ></Col>
  </Row>
  
</Container>

export default Layout