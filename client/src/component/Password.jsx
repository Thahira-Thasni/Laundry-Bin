import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import "./Password.css";
import { Link } from "react-router-dom";
function Password() {
    return (
        <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link className="Link" to="/login"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="logo">
                    <h1>Welcome back! Glad to see you, Again!</h1>
                </div>
                <div className="button_div">
                    <div className="InputDiv">
                        <input className="inputRegister" type="text" placeholder="Enter your email or Phone number" />
                        <input className="inputRegister" type="text" placeholder="Enter your password" />
                    </div>
                    <button>
                        <b style={{ color: "#1facf3" }}>Login</b>
                    </button>
                    <div className="forget">
                        <Link to="/forget">Forgot Password?</Link>
                    </div>
                    <p style={{ textAlign: "center", color: "white" }}>
                        Don’t have an account?{" "}
                        <Link to="/register" style={{ color: "white" }}>
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Password;
