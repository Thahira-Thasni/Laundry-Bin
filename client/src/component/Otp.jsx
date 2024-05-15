import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import { MuiOtpInput } from 'mui-one-time-password-input'
import "./Otp.css";
import { Link } from "react-router-dom";
function Otp() {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
      setOtp(newValue)
    }
  
  return (
    <div>

      <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link to="/forget"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="heading">
                    <h1>We have sent
you an OTP</h1>
<div className="otpColumns">
          <MuiOtpInput value={otp} onChange={handleChange} className="otp_column"/>
</div>
<p style={{color:"white"}}>Don’t receive OTP? <span style={{textDecoration:"underline",color:"white",cursor:"pointer"}}>RESEND OTP</span> </p>
                </div>
                <div className="small_button_div">
                <button >
                        <b style={{ color: "#1facf3" }}>Next</b>
                    </button></div>
              
            </div>
        </div>

    </div>
  )
}

export default Otp
