import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Styles = styled.div`
.footer{
    background: #4bb9a1;
    height:10%;
}
img{
    height: 30px;
}
`

function Footer(){
    return (
    <Styles>
    <Navbar sticky="bottom" className="footer">
        <Nav>
        dsadsadadasasdd <img src="https://image.flaticon.com/icons/png/512/61/61109.png"></img>
        </Nav>
    </Navbar>
    </Styles>
    )
}

export default Footer