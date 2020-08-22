import React from 'react';

import styled from 'styled-components';

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
        min-width:25px;
        margin:4px;
    }
}
.left{
    grid-rows: 1 / 2;
    grid-columns: 1 / 2;
    background: url('https://www.lovethispic.com/uploaded_images/34332-Steady-Rain.gif?1') no-repeat;
    background-size: cover;
    background-position: center;
    height: ${window.innerHeight}px;

;
}

.right{  
    background-color: rgba(75, 154, 185, 0.658);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    border-bottom: solid 5px;
}
    z-index: 2
}
`

function Home(){
return (
    <Styles>
    <div id="home">

        <div className="right">
            <div className="home-content">
                <h2>Sage Maxwell</h2>
                <h1>Web Developer</h1>

                <div className="links">

                    <a href="https//github.com/sagemaxn" target="blank"><img className="img" src="https://image.flaticon.com/icons/svg/25/25231.svg"></img></a>

                    <a href="https://www.linkedin.com/in/sage-maxwell-239387147/" target="blank"><img className="img" src="https://image.flaticon.com/icons/png/512/61/61109.png"></img></a>

                </div>    

            </div>
        </div>
        <div className="left"></div>

    </div>
    </Styles>
)
}

export default Home