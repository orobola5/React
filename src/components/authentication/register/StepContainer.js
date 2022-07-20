import React from "react";
const StepContainer=({children,step,headerTitle})=>{
    return(
        <div className="registration-step-container">
            <div className="header-container">
                <p>{headerTitle}</p>

            </div>
            <div className="step-icon">
                {`step ${step}`}
                </div>
              {children}
        </div>
      
    )
}
export default StepContainer