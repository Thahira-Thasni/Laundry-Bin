
import React from "react";
import frame from "./assets/Frame.png";
import arrow from "./assets/arrow-left.png";
import { MuiOtpInput } from 'mui-one-time-password-input'
import "./OtpVerification.css";
import { Link } from "react-router-dom";
function OtpVerification() {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue) => {
      setOtp(newValue)
    }
  
  return (
    <div>

      <div className="register_body">
            <img className="net" src={frame} alt="" />
            <Link to="/otp"><img className="arrowLeft" src={arrow} alt="" /></Link>
            <div className="centerDiv">
                <div className="firstpart">
                    <h1>OTP Verification</h1>
<p style={{width:"500px"}}>Enter the verification code we just sent on your email address.</p>
<div style={{marginTop:"20px"}} className="otpColumns">
          <MuiOtpInput value={otp} onChange={handleChange} className="otp_column"/>
</div>
<div className="small_button_div">
                <button >
                        <b style={{ color: "#1facf3" }}>Verify</b>
                    </button></div>

                </div>
                <p style={{color:"white"}}>Didn’t received code?   <span style={{textDecoration:"underline",color:"white",cursor:"pointer"}}>Resend</span> </p>
              
            </div>
        </div>

    </div>
  )
}

export default OtpVerification;
