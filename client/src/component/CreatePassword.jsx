import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import "./CreatePassword.css";
import { Link } from "react-router-dom";
function CreatePassword() {
   
    
  
  return (
    <div>

      <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link className="Link" to="/otpVerification"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="firstpart">
                    <h1>Create new password</h1>
                    <p style={{width:"500px"}}>Your new password must be unique from those previously used.</p>
                     
             
                        <div style={{marginTop:"30px"}} className="InputDiv" >
                        <input className="inputRegister" type="text" placeholder="Enter new password" />
                        <input className="inputRegister" type="text" placeholder="Confirm password" />
                    </div>
                    <div className="button_div">
                    <button>
                        <b style={{ color: "#1facf3" }}>Reset Password</b>
                    </button></div>
                    </div>
                    <p style={{ textAlign: "center", color: "white" }}>
                    Didn’t received code? <span style={{ color: "white",textDecoration:"underline",cursor:"pointer" }}>
                         Resend
                        </span></p>
            </div>
        </div>

    </div>
  )
}

export default CreatePassword;