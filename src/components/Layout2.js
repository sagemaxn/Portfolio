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


function Layout2(props){
    console.log(props.children)
    return (
<Container fluid>
   <Row >
    <Col>{props.children}</Col>
  </Row>
  <Row>
      <Col></Col>
      <Col></Col>
  </Row>
  
</Container>)}


export default Layout2

*/

function Layout2(props){
    console.log(props.children)
    return (
<Container fluid>

    <Col>{props.children}</Col>

  
</Container>)}


export default Layout2