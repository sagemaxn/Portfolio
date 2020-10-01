import React, { useState, useEffect } from "react";

import styled from "styled-components";

import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/githubicon.png";

function Home() {
  const [height, setHeight] = useState(window.innerHeight);

  function updateDimensions() {
    let update_height = window.innerHeight;
    setHeight(update_height);
  }

  useEffect(() => {
    //updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const Styles = styled.div`
height: 100vh;
text-align: center;

.home-content{
    text-align: center;
    color: white;
    margin:auto;
    
    width: 250px;
    border-radius: 5%;
    z-index: 5;
}
#home{
    height: 100%;
    display: grid;
    grid: 1fr / 1fr;
}
.links{
    width: 100%;

    .img{
        width:10%;
        min-width:40px;
        margin:4px;
        height: auto;
    }
}
.left{
    grid-rows: 1 / 2;
    grid-columns: 1 / 2;
    background: url('https://live.staticflickr.com/713/31948491460_fdf3ef6a9f_b.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    height: ${height}px;
;
}

.right{  
    background-color: rgba(75, 154, 185, 0.658);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${height}px;
    display: flex;
    border-bottom: solid 5px #2E2E2E;
}
    z-index: 2
}
`;
  return (
    <Styles>
      <div id="home">
        <div className="right">
          <div className="home-content">
            <h2>Sage Maxwell</h2>
            <h1>Web Developer</h1>

            <div className="links">
              <a href="https://github.com/sagemaxn" target="blank">
                <img className="img" src={githubLogo} alt="github logo"></img>
              </a>

              <a
                href="https://www.linkedin.com/in/sage-maxwell-239387147/"
                target="blank"
              >
                <img
                  className="img"
                  src={linkedinLogo}
                  alt="linkedin logo"
                ></img>
              </a>
            </div>
          </div>
        </div>
        <div className="left"></div>
      </div>
    </Styles>
  );
}

export default Home;
