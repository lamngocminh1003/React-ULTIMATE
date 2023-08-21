import axios from "axios";
import OtpInput from "react-otp-input";
import React, { useState, useEffect, useRef } from "react";
import CountDown from "./CountDown";
import CountDownAnimation from "./CountDownAnimation";
const InputOTP = (props) => {
  const childRef = useRef();
  const [otp, setOtp] = useState("");
  const handleChange = (otp) => {
    setOtp(otp);
    props.setUserOTPParent(otp);
  };
  const handleSubmitOTP = () => {
    props.handleSubmitOTP();
    setOtp("");
  };
  const handleClearOTP = () => {
    childRef.current.getAlert();
    setOtp("");
  };
  return (
    <>
      <div className="otp-form">
        <div className="title">Enter verification code</div>
        <div className="otp-input">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
            inputStyle={"input-customize"}
          />
        </div>
        {/* <CountDown setIsDisable={props.setIsDisable} /> */}
        <CountDownAnimation setIsDisable={props.setIsDisable} ref={childRef} />
        <div className="otp-btn">
          <span
            onClick={() => {
              handleClearOTP();
            }}
            disabled={!props.isDisable}
          >
            <button className="btn btn-clear">Clear</button>
          </span>
          <span>
            <button
              className="btn btn-get-otp"
              onClick={() => {
                handleSubmitOTP();
              }}
              disabled={props.isDisable}
            >
              Confirm
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
export default InputOTP;
