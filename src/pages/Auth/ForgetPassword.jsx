import React, { useState } from "react";
import ReckonLogo from "@/assets/Group 59.svg";
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForgetPassword = async (e) => {
    e.preventDefault();
  };
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
              {" "}
              Forgot Password?
            </h1>
            <p className="mt-[4px] text-[#6363630 font-medium]">
              Please enter your email address to reset your password.
            </p>
          </div>
          <form onSubmit={handleForgetPassword}>
            <div className="mt-[36px]">
              <input
                type="text"
                className="input-box w-full mt-1 "
                placeholder="Enter your email address"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
              />
            </div>
            <div className="mt-72">
              <button
                className="btn-primary font-bold text-lg"
                onClick={() => {
                  navigate("/verifyPassword");
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
