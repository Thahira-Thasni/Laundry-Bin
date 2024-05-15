import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import success from "./assets/Successmark.png";
import "./Done.css";
import { Link } from "react-router-dom";
function Done() {
   
    
  
  return (
    <div>

      <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link to="/createPassword"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="firstpart">
<img src={success} alt="" />
                    <h1>Password Changed!</h1>
                    <p style={{width:"500px",textAlign:"center"}}>Your password has been changed successfully.</p>
                     
                    <Link to="/password" className="small_button_div">
                    <button>
                        <b style={{ color: "#1facf3" }}>Back to Login</b>
                    </button></Link>
                    </div>
                   
            </div>
        </div>

    </div>
  )
}

export default Done