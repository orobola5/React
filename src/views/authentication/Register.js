
import Input from "../../components/reuseable/Input"
import emailIcon from "../../assets/mail.svg"
import passwordIcon from "../../assets/key.svg"
import "./authentication.css"
import React from "react"
import StepContainer from "../../components/authentication/register/StepContainer"
import { useState } from "react"
import {useNavigate} from "react-router-dom";
import axios from "axios"


const Register = () => {

    let navigate = useNavigate();

    const[userInput,setUserinput]=useState({})
    const[step,setStep]=useState(1)
    // const[loading, setLoading]=useState(false)
    const[fieldError,setFieldError]=useState(
        {


        firstName:{message:"",error:false},
        lastName: {message:"",error:false}, 
        email:{message:"",error:false},
        phone: {message:"",error:false},
        password: {message:"",error:false},
        confirmPassword: {message:"",error:false}
 });
 
 
    const handleChange=(e)=>{
     setUserinput({...userInput,[e.target.name]:e.target.value})
     checkiffieidIsEmpty(e)
 }
 
     const handleCLick=()=>{
        // setLoading(true)
        axios.post("http://localhost:5000/accounts",userInput).
            then((data)=>[console.log(data)]).
            catch((error)=>console.log(error))
            // finally(()=>setLoading(false))

     }
 
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
                    <a onClick={()=>navigate("/login")}>
                     Dont Have an account?
                  
                         <span style={{color:'var(--primary_green)',marginLeft:'4px'}}>
                             Login in
                         </span>
                     </a>
                 
                
                         <div className="welcome-text">
                              <h1>Welcome To Norbs</h1>
                                 <p>We are an event management platform,
                                    aimed at helping you facilitate and run a smooth event</p>
                         </div>

            <div>
                         {step === 1 && <StepContainer step={1} headerTitle=" lets know you">
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="firstName" fieldError={fieldError} />
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="lastName" fieldError={fieldError} />
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="email" fieldError={fieldError} />
                        </StepContainer>}

                        {step === 2 && <StepContainer step={2} headerTitle=" lets secure your details">
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="phone" fieldError={fieldError} />
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="password" fieldError={fieldError} />
                                 <Input text="text" handleChange={handleChange}icon={emailIcon} label="confirmPassword" fieldError={fieldError} />
                        </StepContainer>}

                        {step === 1 && <button  onClick={()=>setStep(2)} style={{width:'100%'}} className="authentication-button"> Next Step</button>}
                        { step === 2 && <div style ={{display:"flex",justifyContent:"space-between",width:"70%"}}>
                                <button onClick={()=>setStep(1)} style={{width:'45%'}} className="authentication-button-alternate"> Go Back</button>
                                <button style={{width:'45%'}} className="authentication-button"  onClick={handleCLick}> Register</button>
                         </div>}
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