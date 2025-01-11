import React, { useRef, useState } from "react";

const OtpInput = ({value}) => {
  const numberOfDigits = 5;
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  const handleChange = (value, index) => {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackSpaceandEnter = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-[35px]">
      {otp.map((digit, index) => (
        <input
          key={index}
          value={digit}
          maxLength={1}
          length={5}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyUp={(e) => handleBackSpaceandEnter(e, index)}
          ref={(reference) => (otpBoxReference.current[index] = reference)}
          className="w-16 h-16 text-center text-2xl font-extrabold text-slate-900 border border-[#D9D9D9] hover:border-slate-200
                    appearance-none rounded-lg p-4 outline-none focus:bg-white focus:border-secondary focus-ring-2"
        />
        
      ))}
      
    </div>
  );
};

export default OtpInput;
