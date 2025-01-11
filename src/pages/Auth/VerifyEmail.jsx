import { useNavigate } from "react-router";
import ReckonLogo from "@/assets/Group 59.svg";
import VerifyLogo from "@/assets/Image/verify email.png";

const VerifyEmail = () => {
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
            <div className="items-center justify-center">
              <img
                src={VerifyLogo}
                alt="verify Email"
                className="mx-auto h-[150px] w-[150px]"
              />
            </div>
            <h1 className="text-3xl font-bold text-secondary">
              Verify your email
            </h1>
            <p className="mt-[15px] text-[#636363] font-medium text-sm">
              Click on the link we sent to <br />
              davidosamudiamhen@gmail.com <br />
              to verify your email.
            </p>
          </div>

          <div className="mt-[180px]">
            <button
              className="btn-primary font-bold text-lg"
              onClick={() => {
                navigate("/login");
              }}
            >
              I have verified my email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
