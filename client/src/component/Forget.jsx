import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import "./Forget.css";
import { Link } from "react-router-dom";
function Forget() {
   
    
  
  return (
    <div>

      <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link className="Link" to="/password"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="firstpart">
                    <h1>Forgot Password ?</h1>
                    <p style={{width:"500px"}}>Don't worry! It occurs. Please enter the email or phone number linked with your account.</p>
                     
             
                        <div style={{marginTop:"30px"}} className="InputDiv" >
                        <input className="inputRegister" type="text" placeholder="Enter Email ID or Phone number" />
                    </div>
                    <div className="button_div">
                    <button>
                        <b style={{ color: "#1facf3" }}>Send OTP</b>
                    </button></div>
                    </div>
                    <p style={{ textAlign: "center", color: "white" }}>
                    Remember Password? <Link style={{ color: "white" }} to="/password">
                           Log In
                        </Link></p>
            </div>
        </div>

    </div>
  )
}

export default Forget