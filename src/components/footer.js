import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Styles = styled.div`
.footer{
    height:10%;
}
img{
    height: 30px;
}
.nav{
   justify-content: center;
   width: 100%;
}
`

function Footer(){
    return (
    <Styles>
    <Navbar sticky="bottom" className="footer">
        <Nav className="nav">
        <span>sagemaxn@gmail.com</span> <img src="https://image.flaticon.com/icons/png/512/61/61109.png"></img>
        </Nav>
    </Navbar>
    </Styles>
    )
}

export default Footer