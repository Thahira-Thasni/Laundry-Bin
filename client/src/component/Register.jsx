import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
    return (
        <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link className="Link" to="/login"><img className="arrowLeft" src={arrow} alt="" /></Link>
           <div className="centerDiv"> <div className="logo">
                <h1>Hey There ! Welcome</h1>
            </div>
           
       <div className="button_div"> <div className="InputDiv">
                <input className="inputRegister" type="text" placeholder="Enter Name"/>
                <input className="inputRegister" type="text" placeholder="Enter Email ID or Phone Number"/>
                <input className="inputRegister" type="text" placeholder="Enter your password"/>
                <input className="inputRegister" type="text" placeholder="Confirm password"/>
            </div>
                <button><b style={{color:"#1facf3"}}>Register</b></button>
                <p style={{textAlign:"center",color:"white"}}>Already have an account? <Link to="/password" style={{color:"white"}}>Log In</Link></p>
            </div></div>
            
        </div>
    );
}

export default Register;