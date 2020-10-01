import React from "react";
import { Layout } from "./Layout";

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
  }
  p,
  ul {
    font-size: 30px;
    text-align: left;
  }
  #about {
    height: 100%;
    display: flex;
  }
  li img {
    width: 50px;
  }
`;

function About() {
  return (
    <Styles>
      <div id="about">
        <Layout>
          <h1>About Me</h1>
          <div className="descrip">
            <p className="paragraph">
              Hello! I'm Sage and I am passionate about solving problems. A
              dedication to growth and learning more every single day has gotten
              me to where I am now. I do not give up.
            </p>
            <ul className="skills">
              My skills:
              <li>
                <img src={htmlLogo} alt="HTML logo"></img>HTML
              </li>
              <li>
                <img src={cssLogo} alt="CSS logo"></img>CSS
              </li>
              <li>
                <img src={jsLogo} alt="JavaScript logo"></img>Javascript
              </li>
              <li>
                <img src={reactLogo} alt="React logo"></img>React
              </li>
              <li>
                <img
                  src="https://logodownload.org/wp-content/uploads/2019/10/photoshop-logo-3.png"
                  alt="Photoshop logo"
                ></img>
                Photoshop
              </li>
              <li>
                <img src={brain} alt="an icon of a brain"></img>And More!
              </li>
            </ul>
          </div>
        </Layout>
      </div>
    </Styles>
  );
}

export default About;
