import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import GeneralOTP from "./GeneralOTP";
import "../OTP/InputOTP.scss";
import InputOTP from "./InputOTP";
const OTP = () => {
  const [orgOTPParent, setOTPParent] = useState("");
  const [userOTPParent, setUserOTPParent] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const handleSubmitOTP = () => {
    if (!orgOTPParent) {
      alert("Please generate an OTP...");
      return;
    }
    if (!userOTPParent) {
      alert("Please enter an OTP...");
      return;
    }
    if (+orgOTPParent === +userOTPParent) {
      alert("Correct OTP");
      childRef.current.getAlert();
      console.log("check getAlert: ", childRef);
      return;
    } else {
      alert("Incorrect OTP");
    }
  };
  const childRef = useRef();
  return (
    <div className="otp-container">
      <GeneralOTP
        setOTPParent={setOTPParent}
        handleSubmitOTP={handleSubmitOTP}
        ref={childRef}
      />
      <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmitOTP={handleSubmitOTP}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
        setOTPParent={setOTPParent}
      />
    </div>
  );
};
export default OTP;
