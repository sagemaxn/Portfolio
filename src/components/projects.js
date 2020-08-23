import React, {useReducer} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import restaurantImg from '../assets/restaurant.png';
import weatherImg from '../assets/weather-sample.png';
import messageImg from '../assets/message-sample.png';

const Styles = styled.div`
background: linear-gradient(#4bb9a1, white);
color: #2E2E2E;
}    
.filler{
  height:100px;
}
.projects-title{
  text-align: center;
  font-size: 40px;
}

.project-square{
    display: flex;
    justify-content: center;
}
.img{
    width:250px;
    height: 250px;
    border: solid #4bb9a1 ;
    border-radius: 50%;
    position: relative;

    :hover{
      cursor: pointer
    }
.poppup{
  width: 300px;
}
@media (min-width: 600px) {
  .project-grid{
    flex-direction: row;
    justify-content: space-around;
  }
}
`

//.project-grid{
//    height: 100vh;
//    width: 100%;
//    display: grid;
//    grid: 1fr 1fr / 1fr 1fr;
//}

function Details(props) {
    return (
      <Modal m-1
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{backgroundColor: "#4bb9a1"}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{color: "white"}}>
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
            {props.description}
          </p>
        </Modal.Body>
        <Modal.Footer style={{justifyContent: "flex-start"}}>
        
          <Button href={props.source} target="blank" style={{backgroundColor: "#4bb9a1", color: "white", padding: "2px",marginRight: "3px"}}>Source Code</Button>
          <Button href={props.live} target="blank" style={{backgroundColor: "#4bb9a1", padding: "2px"}}>Live Version</Button>
          
       {/* <Button onClick={props.onHide} style={{backgroundColor: "black", padding: "2px"}}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }  


function Projects(){

let [hidden, setHidden] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {restaurant: false,
    messageBoard: false,
    weather: false,}
)
    function clickHandler(event){
    const name = event.target.name;
    const newTruth = !hidden[name]
        setHidden({[name]: newTruth})
        console.log(hidden)
        
        }
return (
    <Styles>
    <div id="projects">
    <div className="filler"></div>
    <div className="projects-title">Projects</div>
        <div className="project-grid">
            <div className="project-square">
                <img className="img" src={restaurantImg} onClick={clickHandler} name="restaurant"></img>
                <Details show={hidden.restaurant} heading="Restaurant" description="the main feature of this project was crafting my own version of an image carousal" onHide={() => setHidden({restaurant: false})}/>
                {/*the main feature of this project was crafting my own version of an image carousal
                skills used: react, etc...,.. 
                should these be buttons? or just change the pointer on hover*/}
        </div>
            <div className="project-square">
                <img className="img" src={messageImg} onClick={clickHandler} name="messageBoard"></img>
                <Details show={hidden.messageBoard} heading="Message Board" description="This is a site that requires email validation via Google to access a message board." source={'https://github.com/sagemaxn/Simple-Message-Board'} onHide={() => setHidden({messageBoard: false})}/>
            </div>
            
            <div className="project-square">
                <img className="img" src={weatherImg} onClick={clickHandler} name="weather"></img>
                <Details show={hidden.weather} heading="Weather App" description="The user can enter a US zip-code and then the site will fetch weather information from the OpenWeatherMap api. Some of the information is then displayed for the user." source="https://github.com/sagemaxn/Weather" live="http://firebase.com" onHide={() => setHidden({weather: false})}/>
            </div>
            
        </div>



    </div>
    </Styles>
)
}

export default Projects