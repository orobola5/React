import Input from "../../components/reuseable/Input"
import emailIcon from "../../assets/mail.svg"
import passwordIcon from "../../assets/key.svg"
import "./login.css"
import { useState } from "react"

const handleClick = (e)=>{
    console.log(e)
}
const Login = () => {
   const[userInput,setUserinput]=useState({})
   const[fieldError,setFieldError]=useState(
    email: {message:"",error:false},
    password: {message:"",error:false}
   )

   const handleChange=(e)=>{
    setUserinput({...userInput,[e.target.name]:e.target.value})
}

    const handleCLick=()=>{
        console.log(userInput)
    }

    const checkiffieidIsEmpty =(e)=>{
        switch(e.target.name){
            case "email":
                if(e.target.value === ""){
                    setFieldError({...fieldError,
                        [e.target.name]:{message:"please enter a valid email",error: true}})
                }
                break;
                case"password":
                    if(e.target.value===""){
                        setFieldError({
                            ...fieldError,[e.target.name]:{message:"please enter a password",error:true}
                        })
                    }
                    break;

            default:
                    break;    
        }

        if(e.target.value==='')return true
    }

    const checkIfItIsEmail=()=>{
        if(e.target.value=='')re
    }
return (
    <div className="loginContainer">
        <div className="leftside">
        <div className="leftside-container">
                <a> 
                    Dont Have an account?
                    <span style={{color:'var(--primary_green)',marginLeft:'4px'}}>
                        sign up
                    </span>
                </a>
                <div>
                        <div className="welcome-text">
                             <h1>Welcome To Norbs</h1>
                                <p>We are an event management platform,
                                aimed at helping you facilitate and run a smooth event
                                </p>
                        </div>
                        <div className="input-button-fields">
                                 <Input text="email" handleCLick={handleClick}icon={emailIcon} label="email" />
                                 <p className={fieldError.email.error? "fieldError":"noFieldError"}>
                                    {fieldError.email.message}

                                 </p>
                                <Input text="password" handleClick={handleClick}icon={passwordIcon} label="password" />
                                    <button onClick={handleCLick}>Get Into Norbs</button>
                        </div>
                        <div className="social-media">
                                <a>
                                    <div className="social-media-icon"></div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
                 <div className="rightside">
                
                 </div>
        </div>
    )
}
export default Login