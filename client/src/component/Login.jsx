import React from "react";
import frame from "./assets/Frame.png";
import backGround from "./assets/logopartone.png";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
    return (
        <div className="third_body">
            <img className="net" src={frame} alt="" />
            <div className="centerDiv">
                <div className="logo">
                    <img src={backGround} alt="" />
                    <h1>Laundrybin</h1>
                </div>
                <div className="button_div">
                    <Link className="Link" to="/password">
                        <button>
                            <b style={{ color: "#1facf3" }}>Log in</b>
                        </button>
                    </Link>
                    <Link className="Link" to="/register">
                        <button
                            style={{ backgroundColor: "#1facf3", border: "1px solid white", color: "white" }}
                        >
                            <b>Register</b>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
