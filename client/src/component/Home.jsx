import React from "react";
import backGround from "./assets/logopartone.png";
// import logo2 from './assets/Laundrybin.png';
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
    return (
        <Link to="/splash" className="first_body">
            <div className="content">
                <img src={backGround} alt="" />
                <h1>Laundrybin</h1>
            </div>
        </Link>
    );
}

export default Home;
