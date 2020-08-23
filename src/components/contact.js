import React, {useReducer} from 'react';
import Footer from './footer';

import firebase from '../Firebase'

import styled from 'styled-components';

const Styles = styled.div`
text-align: center;
color: #4bb9a1;
.title{
    font-size: 30px;
}
#contact{
    height: 100%;
    background-color: #2E2E2E;
    margin: auto;
    margin-bottom: 50px;
    max-width: 500px;
}
input, textarea{
    background: #2E2E2E;
    color: white;
    :-internal-autofill{
        background-color: #2E2E2E
    }
}

#submit{
    background-color: #4bb9a1;
    color: #2E2E2E;
}
.container{
    background-color: #2E2E2E;
}
.form-control:focus{
    background-color: #2E2E2E;
    border-color: #4bb9a1;
    color: white;
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
  
        <div className="title text-center">Email Me</div>
        <form id="contact">
            <input type="text" name="fullName" id="userFullName" placeholder="Full Name" value={userInput.fullName}className="form-control" onChange={handleChange} required></input>
        
      
           
            <input type="Email" name="email" id="userEmail" className="form-control" value={userInput.email} onChange={handleChange} required></input>
       
       
         
            <textarea name="message" id="userMessage" className="form-control" value={userInput.message} onChange={handleChange} required></textarea>
       
        <button id="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
    
    </form>
   
    
    <Footer/>
    </Styles>
)
}

export default Contact