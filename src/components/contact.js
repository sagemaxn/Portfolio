import React, { useReducer } from "react";
import Footer from "./footer";

import firebase from "../Firebase";

import styled from "styled-components";

const Styles = styled.div`
  text-align: center;
  color: #4bb9a1;
  .title {
    margin-top: 100px;
    margin-bottom: 75px;
    color: #2e2e2e;
    font-weight: bold;
    font-size: 60px;
  }
  #contact {
    height: 100%;
    background-color: #2e2e2e;
    margin: auto;
    margin-bottom: 50px;
    max-width: 500px;
    border-radius: 10px;
  }
  input,
  textarea {
    background: #2e2e2e;
    
    border-radius: 0px;
    color: white;
    :-internal-autofill {
      background-color: #2e2e2e;
    }
  }
  #userFullName{
    border-radius: 10px 10px 0 0;
    border: 1px;
    border-color: #2e2e2e;
  }
  #userMessage {
    height: 100px;
  }

  #submit {
    background-color: #4bb9a1;
    color: #2e2e2e;
    justify-self: end;
  }
  .container {
    background-color: #2e2e2e;
  }
  .form-control:focus {
    background-color: #2e2e2e;
    border-color: #4bb9a1;
    color: white;
  }
`;

const firestore = firebase.firestore();

const db = firestore.collection("contactData");

function Contact() {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      fullName: "",
      email: "",
      message: "",
    }
  );

  function handleChange(event) {
    const name = event.target.name;
    const newValue = event.target.value;

    setUserInput({ [name]: newValue });
  }

  function submitHandler() {
    if (
      userInput.fullName === "" ||
      userInput.email === "" ||
      userInput.email.includes("@") === false ||
      userInput.message === ""
    ) {
      console.log(userInput.email.includes("@"));
      alert("Please ensure you have completely filled out the form");
    } else {
      db.doc()
        .set({
          name: userInput.fullName,
          email: userInput.email,
          message: userInput.message,
        })
        .then(function () {
          console.log("Data saved");
          alert("Thank you for the message!");
          setUserInput({
            fullName: "",
            email: "",
            message: "",
          });
        })
        .catch(function (error) {
          console.log(error);
          alert(
            "Your message was not sent. Please check that you have entered your information properly."
          );
        });
    }
  }

  return (
    <Styles>
      <h1 className="title text-center">Email Me</h1>
      <form id="contact">
        <input
          type="text"
          name="fullName"
          id="userFullName"
          placeholder="Full Name"
          value={userInput.fullName}
          className="form-control"
          onChange={handleChange}
          required
        ></input>

        <input
          type="Email"
          name="email"
          id="userEmail"
          className="form-control"
          placeholder="Your Email Address"
          value={userInput.email}
          onChange={handleChange}
          required
        ></input>

        <textarea
          name="message"
          id="userMessage"
          className="form-control"
          placeholder="Your Message"
          value={userInput.message}
          onChange={handleChange}
          required
        ></textarea>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "start",
            width: "100%",
          }}
        >
          <button
            id="submit"
            className="btn btn-primary"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>

      <Footer />
    </Styles>
  );
}

export default Contact;
