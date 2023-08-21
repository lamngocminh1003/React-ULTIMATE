import axios from "axios";
import React, {
  forwardRef,
  useState,
  useEffect,
  useImperativeHandle,
} from "react";
const GeneralOTP = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getAlert() {
      setOrgOTP("");
    },
  }));
  const [orgOTP, setOrgOTP] = useState("");
  const handleOnGeneralOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOrgOTP(otp);
    props.setOTPParent(otp);
  };
  return (
    <div className="general-otp-container">
      <button
        className="btn general-otp-btn"
        onClick={() => {
          handleOnGeneralOTP();
        }}
      >
        General OTP
      </button>
      <div className="general-otp-title">Your OTP is: {orgOTP} </div>
    </div>
  );
});
export default GeneralOTP;
