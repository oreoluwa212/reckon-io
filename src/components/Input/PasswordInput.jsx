import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center w-full border border-gray-300 rounded-lg px-2 py-1 focus-within:border-secondary mt-1 mb-2">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Enter your password"}
        className="w-full text-sm font-medium px-3 py-2 outline-none focus:outline-none"
        aria-label={isShowPassword ? "Hide password" : "Show password"}
      />

      {isShowPassword ? (
        <FaRegEye
          size={18}
          className="text-secondary cursor-pointer ml-2"
          onClick={toggleShowPassword}
        />
      ) : (
        <FaRegEyeSlash
          size={18}
          className="text-slate-400 cursor-pointer ml-2"
          onClick={toggleShowPassword}
        />
      )}
    </div>
  );
};

export default PasswordInput;
