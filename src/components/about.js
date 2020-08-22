import React from 'react';
import {Layout} from './Layout'

import styled from 'styled-components';

import trees from '../assets/trees.png'

const Styles = styled.div`
background: url(${trees}) no-repeat;
background-size: contain;
background-color: #4bb9a1;
z-index: 10;

p{
    font-size: 30px;
    margin-top: 250px;

}
#about{
    height: 100%;
    display:flex;
}
`

function About(){
return (
    
    <Styles>
    <div id="about">
        <Layout>
        <p>Hello! I'm Sage and I am passionate about solving problems. A dedication to growth and learning more every single day has gotten me to where I am now. I do not...</p>\
        </Layout>
    </div>
    </Styles>
)
}

export default About