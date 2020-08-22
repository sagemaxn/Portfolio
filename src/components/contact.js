import React, {useReducer} from 'react';
import Footer from './footer';

import firebase from '../Firebase'

import styled from 'styled-components';

const Styles = styled.div`
text-align: center;

#contact{
    height: 100%;
    background-color: white;
    margin-bottom: 50px;
}
#submit{
    background-color: black
}
.container{
    background-color: #4bb9a1;
}
`


const firestore = firebase.firestore();

const db = firestore.collection("contactData")

function Contact(){

    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            fullName: '',
            email: '',
            message: '',
        }
    )
    
    function handleChange(event) {
        const name = event.target.name;
        const newValue = event.target.value;
    
        setUserInput({[name]: newValue})
    }
    
    function submitHandler(){
        if(userInput.fullName === "" || userInput.email === "" || userInput.message === ""){
            alert('Please ensure you have completely filled out the form')
        }
        else{
        db.doc().set({
            name: userInput.fullName,
            email: userInput.email,
            message: userInput.message,
        })
        .then(function(){
            console.log('Data saved');
            alert('Thank you for the message!')
            setUserInput({
                fullName: '',
                email: '',
                message: '',
            })
        })
        .catch(function(error){
            console.log(error);
            alert('Your message was not sent. Please check that you have entered your information properly.')
        });
    }

    };

return (
    <Styles>
    <div id="contact">
    
    <div className="container mt-3 card card-body p-4">
        <h4 className="text-center">Email Me</h4>
        <div className="form-group">
            <label htmlFor="Name">Full Name</label>
            <input type="text" name="fullName" id="userFullName" value={userInput.fullName}className="form-control" onChange={handleChange} required></input>
        </div>
        <div className="form-group">
            <label htmlFor="Email">Your Email Adress</label>
            <input type="Email" name="email" id="userEmail" className="form-control" value={userInput.email} onChange={handleChange} required></input>
        </div>
        <div className="form-group">
            <label htmlFor="Message">Message</label>
            <textarea name="message" id="userMessage" className="form-control" value={userInput.message} onChange={handleChange} required></textarea>
        </div>
        <button id="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        or use sagemaxn@gmail.com
    </div>
    
    </div>
    <Footer/>
    </Styles>
)
}

export default Contact