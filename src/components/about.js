import React from "react";
import Layout2 from "./Layout2";

import styled from "styled-components";

import trees from "../assets/trees.png";
import jsLogo from "../assets/JSlogo.png";
import htmlLogo from "../assets/HTMLlogo.png";
import cssLogo from "../assets/CSSlogo.png";
import reactLogo from "../assets/ReactLogo.png";
import brain from "../assets/brain.png";

const Styles = styled.div`
  background: url(${trees}) no-repeat;
  background-size: contain;
  background-color: #4bb9a1;
  z-index: 10;
  color: #2e2e2e;

  h1 {
    margin-top: 250px;
    margin-bottom: 75px;
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    text-decoration: underline;
    width: 100%;
  
  }
  p,
  ul {
    font-size: 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  #about {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  li img {
    width: 50px;
  }
  .paragraph {
    background-color: white;
    border-radius: 10px;
    padding: 5%;
    border: solid
  }
  .skills{
    display: grid;
    grid: 1fr 1fr/ 1fr 1fr 1fr;
    list-style-type: none;
    padding: 5%;
  }
  .skillsTitle{
    grid-rows: 1 / 2;
    grid-columns: 1 / 3;
  }
`;

function About() {
  return (
    <Styles>
      <div id="about">
        
          <h1>About Me</h1>
         
          <div className="descrip">
            <p className="paragraph">
              Hello! I'm Sage and I am passionate about solving problems. A
              dedication to growth and learning more every single day has gotten
              me to where I am now. I do not give up.
            </p>
            <ul className="skills">
              
              <li>
                <img src={htmlLogo} alt="HTML logo"></img><div>HTML</div>
              </li>
              <li>
                <img src={cssLogo} alt="CSS logo"></img><div>CSS</div>
              </li>
              <li>
                <img src={jsLogo} alt="JavaScript logo"></img><div>Javascript
                </div></li>
              <li>
                <img src={reactLogo} alt="React logo"></img><div>React</div>
              </li>
              <li>
                <img
                  src="https://logodownload.org/wp-content/uploads/2019/10/photoshop-logo-3.png"
                  alt="Photoshop logo"
                ></img><div>
                Photoshop</div>
              </li>
              <li>
                <img src={brain} alt="an icon of a brain"></img><div>And More!</div>
              </li>
            </ul>
          </div>
         
      </div>
    </Styles>
  );
}

export default About;
