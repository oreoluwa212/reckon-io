import React, { useState } from "react";
import ReckonLogo from "@/assets/Group 59.svg";
import { useNavigate } from "react-router";
import PasswordInput from "@/components/Input/PasswordInput";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="container h-screen flex items-center px-20 mx-auto">
        <div className="w-2/4 h-[90vh] flex items-center justify-center bg-login-bg-img bg-cover bg-center rounded-lg overflow-hidden p-10 z-50">
          <div className="justify-center items-center text-center">
            <p className="text-2xl text-white font-bold">Welcome to Reckon. </p>
            <div className="h-full flex flex-col justify-center items-center mt-48">
              <img src={ReckonLogo} className="h-28 w-24" alt="" />
            </div>
            <div className="text-white text-xl text-center mt-48">
              <p className="text-xl font-semibold">
                The Construction cost management app
                <br />
                trusted by builders.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/4 h-[90vh] relative p-16 flex flex-col">
          <div className="text-center justify-center">
            <h1 className="text-3xl font-bold text-secondary">
              Reset your password
            </h1>
            <p className="mt-[5px] text-[#636363] text-sm font-medium">
              Please input your new password
              <br />
              It must be different from the previous
            </p>
          </div>
          <form onSubmit={() => {}}>
            <div className="mt-[25px] space-y-2">
              <label htmlFor="password" className="font-bold text-sm">
                New Password
              </label>
              <PasswordInput
                className="w-full mt-4 font-medium"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
            </div>

            <div className="mt-[25px] space-y-2">
              <label htmlFor="password" className="font-bold text-sm ">
                Confirm Password
              </label>
              <PasswordInput
                className="w-full font-medium"
                placeholder="Confirm your password"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
              />
            </div>

            <div className="mt-[200px]">
              <button
                className="btn-primary font-bold text-lg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
