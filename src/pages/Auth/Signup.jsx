import { useState, useEffect } from "react";
import ReckonLogo from "@/assets/Group 59.svg";
// import SignUp from "./tab/SignUp.jsx";
// import Login from "./tab/login.jsx";
import { useNavigate } from "react-router";

const Signup = () => {
  const [tab, setTab] = useState("login");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (user && token) {
          navigate("/");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      }
    };

    checkAuth();
  }, [navigate]);

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
          <div className="grid grid-cols-2 items-center justify-around mb-6 border-b">
            <div
              className={`${
                tab === "login" ? "border-b-2 border-black " : ""
              }w-full text-center pb-5`}
              onClick={() => setTab("login")}
            >
              Log In
            </div>
            <div
              className={`${
                tab === "signup" ? "border-b-2 border-black " : ""
              }w-full text-center pb-5`}
              onClick={() => setTab("signup")}
            >
              Create Account
            </div>
          </div>
          {/* {tab === "signup" && <SignUp />} */}
          {/* {tab === "login" && <Login />} */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
