import "./reuseable.css"

const Input = ({ text, handleChange, icon, label , fieldError}) => {
    return (
        <div className="input-container">
            <div className="label-container">
                <label>{label}</label>
            </div>
                 <input
                name={label}
                 type={text} 
                 onChange={handleChange}/>
                {/* { {icon} } */}
                <img src="icon" alt="" />

                <div className="input-error-container">
                   <p className={fieldError[label].error ? "fieldError":"noFieldError"}>
                       {fieldError[label].message}
                   </p>
               </div>
        </div>
            
    
    )
}
export default Input