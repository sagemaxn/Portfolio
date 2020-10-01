import React, { useReducer } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

import restaurantImg from "../assets/restaurant.png";
import weatherImg from "../assets/weather-sample.png";
import messageImg from "../assets/message-sample.png";

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
  margin-bottom: 75px;
  font-weight: bold;
  font-size: 60px;
}

.project-square{
    display: flex;
    justify-content: center;
}
.img{

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
`;

//.project-grid{
//    height: 100vh;
//    width: 100%;
//    display: grid;
//    grid: 1fr 1fr / 1fr 1fr;
//}

function Details(props) {
  return (
    <Modal
      m-1
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#4bb9a1" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#2E2E2E" }}
        >
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: "#2E2E2E" }}>{props.description}</p>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        <Button
          href={props.source}
          target="blank"
          style={{
            backgroundColor: "#4bb9a1",
            color: "#2E2E2E",
            padding: "2px",
            marginRight: "3px",
          }}
        >
          Source Code
        </Button>
        <Button
          href={props.live}
          target="blank"
          style={{
            backgroundColor: "#4bb9a1",
            color: "#2E2E2E",
            padding: "2px",
          }}
        >
          Live Version
        </Button>

        {/* <Button onClick={props.onHide} style={{backgroundColor: "black", padding: "2px"}}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

function Projects() {
  let [hidden, setHidden] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { restaurant: false, messageBoard: false, weather: false }
  );
  function clickHandler(event) {
    const name = event.target.name;
    const newTruth = !hidden[name];
    setHidden({ [name]: newTruth });
    console.log(hidden);
  }
  return (
    <Styles>
      <div id="projects">
        <div className="filler"></div>
        <div className="projects-title">Projects</div>
        <div className="project-grid">
          <div className="project-square">
            <img
              className="img"
              src={restaurantImg}
              onClick={clickHandler}
              name="restaurant"
              alt="screencap of my cafe website"
            ></img>
            <Details
              show={hidden.restaurant}
              heading="Restaurant"
              description="I created a website that switches between components displayed using the React Router library. I used some React-Bootstrap but I wanted to experiment with making a more custom made image carousal, which I accomplished with styled-components and manipulating state with the React useEffect hook."
              live="https://mojo-cafe.web.app/"
              source="https://github.com/sagemaxn/Cafe"
              onHide={() => setHidden({ restaurant: false })}
            />
          </div>
          <div className="project-square">
            <img
              className="img"
              src={messageImg}
              onClick={clickHandler}
              name="messageBoard"
              alt="screencap of my message board website"
            ></img>
            <Details
              show={hidden.messageBoard}
              heading="Message Board"
              description="This is a site that requires email validation via Google Firebase to access a message board. The messages are stored using Cloud Firestore and then rendered for the user."
              source={"https://github.com/sagemaxn/Simple-Message-Board"}
              live="https://email-authentication-8b307.web.app/"
              onHide={() => setHidden({ messageBoard: false })}
            />
          </div>

          <div className="project-square">
            <img
              className="img"
              src={weatherImg}
              onClick={clickHandler}
              name="weather"
              alt="screencap of my weather website"
            ></img>
            <Details
              show={hidden.weather}
              heading="Weather App"
              description="The user can enter a US zip-code and then the site will fetch weather information from the OpenWeatherMap api. Some of the information that I selected is then rendered for the user."
              source="https://github.com/sagemaxn/Weather"
              live="https://weather-finder.web.app/"
              onHide={() => setHidden({ weather: false })}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
}

export default Projects;
