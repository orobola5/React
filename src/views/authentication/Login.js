import Input from "../../components/reuseable/Input"
import emailIcon from "../../assets/mail.svg"
import passwordIcon from "../../assets/key.svg"
import "./login.css"

const handleClick = (e)=>{
    console.log(e)
}
const Login = () => {
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
                                <Input text="password" handleClick={handleClick}icon={passwordIcon} label="password" />
                                    <button>Get Into Norbs</button>
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