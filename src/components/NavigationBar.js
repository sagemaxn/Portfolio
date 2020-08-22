import React from 'react';
import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';

const Styled = styled.div`
.nav{
    background-color: #4bb9a1;
    height: 56px;
    }
.navbar-nav{
   margin-left:70%;
}
.nav-link{
    text-align: end;
}
.color{
    
}
`

function NavigationBar(){
    return (
        <Styled>
        <Navbar className="nav" expand="lg" fixed="top">
            <Navbar.Brand className="color">Sage Maxwell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav navlinks">
                <Nav>
                    <NavLink className="color" href="#home">home</NavLink>
                
               
                    <NavLink className="color" href="#about">about</NavLink>
                
                
                    <NavLink className="color" href="#projects">projects</NavLink>


                    <NavLink className="color" href="#contact">contact</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Styled>
    )
}
export default NavigationBar


