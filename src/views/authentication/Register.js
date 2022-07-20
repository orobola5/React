
import Input from "../../components/reuseable/Input"
import emailIcon from "../../assets/mail.svg"
import passwordIcon from "../../assets/key.svg"
import "./authentication.css"
import React from "react"
import StepContainer from "../../components/authentication/register/StepContainer"
import { useState } from "react"


const Register = () => {
    const[userInput,setUserinput]=useState({})
    const[fieldError,setFieldError]=useState({
     email:{message:"",error:false},
     password: {message:"",error:false}
 })
 
    const handleChange=(e)=>{
     setUserinput({...userInput,[e.target.name]:e.target.value})
     checkiffieidIsEmpty(e)
 }
 
    //  const handleCLick=(e)=>{
    //      console.log(userInput)
    //  }
 
     const checkiffieidIsEmpty =(e)=>{
         switch(e.target.name){
             case "email":
                 if(e.target.value === ""){
                     setFieldError({...fieldError,
                         [e.target.name]:{message:"please enter a valid email",error: true}})
                 }else{setFieldError({...fieldError,[e.target.name]:{message:"",error:false}})}
                 break;
                 case"password":
                     if(e.target.value===""){
                         setFieldError({
                             ...fieldError,[e.target.name]:{message:"please enter a password",error:true}
                         })
                     }else{setFieldError({...fieldError,[e.target.name]:{message:"",error:false}})}
                     break;
                 
 
             default:
                     break;    
         }
 
     }
   
    
    
    
 return (
     <div className="authenticationContainer">
         <div className="leftside">
         <div className="leftside-container">
                 <p> 
                     Dont Have an account?
                     <a href="{Register}">
                         <span style={{color:'var(--primary_green)',marginLeft:'4px'}}>
                             sign up
                         </span>
                     </a>
                 </p>
                 <div>
                         <div className="welcome-text">
                              <h1>Welcome To Norbs</h1>
                                 <p>We are an event management platform,
                                    aimed at helping you facilitate and run a smooth event</p>
                         </div>
                         <StepContainer step={1} headerTitle=" lets know you">
                                 <Input text="email" handleChange={handleChange}icon={emailIcon} label="email" fieldError={fieldError} />
                                
                                 <Input text="password" handleChange={handleChange}icon={passwordIcon} label="password" fieldError={fieldError} />
                                    

                         </StepContainer>
                         <div className="social-media">
                                 <button>
                                     <div className="social-media-icon"></div>
                                 </button>
                         </div>
                     </div>
                 </div>
             </div>
                  <div className="rightside">
                 
                  </div>
         </div>
     )
 }
 export default Register