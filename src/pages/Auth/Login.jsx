import { useState } from "react";
import ReckonLogo from "@/assets/Group 59.svg";
import PasswordInput from "@/components/Input/PasswordInput";
import GoogleIcon from "@/assets/Image/google.png";
import AppleIcon from "@/assets/Image/apple.png";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
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
        <div className="w-2/4 h-[90vh] relative p-16 flex flex-col ">
          <div>
            <div className="flex flex-row items-center justify-around mb-6 border-b">
              <button
                className={`text-[#B2B2B2] hover:border-black  hover:text-black ${
                  location.pathname === "/login"
                    ? "border-black border-b-2 text-black"
                    : ""
                }`}
                onClick={() => navigate("/login")}
              >
                Log In
              </button>

              <button
                className={`text-[#B2B2B2] hover:border-black hover:text-black ${
                  location.pathname === "/signUp"
                    ? "border-black border-b-2 text-black"
                    : ""
                }`}
                onClick={() => navigate("/signUp")}
              >
                Create Account
              </button>
            </div>

            <div className="flex flex-col">
              <button className="input-box font-semibold flex items-center justify-center  ">
                <img src={GoogleIcon} className="h-6 w-[23px] mr-2" />
                Continue with Google
              </button>
              <button className="input-box font-semibold flex items-center justify-center  ">
                <img src={AppleIcon} className="h-6 w-6 mr-2" />
                Continue with Apple
              </button>
            </div>
            <div className="mt-10 grid grid-cols-3 items-center mb-[16px]">
              <hr className="border-primary"></hr>
              <p className="text-center text-sm font-medium text-[#616161]">
                Or setup with email
              </p>
              <hr className="border-primary"></hr>
            </div>
            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="text" className="font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  className="input-box text-[#8C8787] font-medium w-full mt-1 "
                  placeholder="Enter your email"
                  value={email}
                  onChange={({ target }) => {
                    setEmail(target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <PasswordInput
                  className="w-full mt-2"
                  value={password}
                  onChange={({ target }) => {
                    setPassword(target.value);
                  }}
                />
                <div className="flex flex-row justify-between font-medium text-[#8C8787] text-sm">
                  <div className="gap-2">
                    <input type="checkbox" />
                    <span className="ml-2">Remember Me</span>
                  </div>
                  <button
                    className="underline"
                    onClick={() => {
                      navigate("/forgetPassword");
                    }}
                  >
                    Forgot Password
                  </button>
                </div>
              </div>

              <p className="text-[#8C8787] font-medium text-center mt-6">
                By creating an account, you agree with our
                <span className="underline text-[#616161]">Terms of</span>
                <br />
                <span className="underline text-[#616161]">Service</span> and
                <span className="underline text-[#616161]">
                  {} Privacy Policy.
                </span>
              </p>
              <div>
                <button className="btn-primary font-bold text-lg ">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
