import React from "react";
import Switch from "./assets/switch.png";
import washingmechiene from "./assets/washingmechiene.png";
import roundedArrow from "./assets/roundedArrow.png";
import "./Splash.css";
import { Link } from "react-router-dom";

function Splash() {
    return (
        <div className="body">
            <div className="in">
                <Link style={{textDecoration:"none",color:"white"}} to="/login"><h2>Skip</h2></Link>
            <div className="image_class">
                <img src={Switch} alt="" />
            </div>
            <div className="splash_content">
                <h1>Get your Laundry and Dry cleaning in 24 hours</h1>
                <br />
                <p>A convenient laundry solution that helps protect the enviornment</p>
            </div>
            <div className="image2">
                <div className="position_wmechiene">
                    <img src={washingmechiene} alt="" />
                    <Link style={{textDecoration:"none",color:"white"}} to="/login"><img className="arrow" src={roundedArrow} alt="" /></Link>
                </div>
            </div></div>
        </div>
    );
}

export default Splash;
