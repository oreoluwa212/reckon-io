import { useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "@/components/Input/PasswordInput";
import GoogleIcon from "@/assets/Image/google.png";
import AppleIcon from "@/assets/Image/apple.png";
import { validateEmail } from "@/utils/helper";
import { authService } from "@/services/api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Password is required");
      setLoading(false);
      return;
    }
    try {
      const response = await authService.login({ email, password });
      const { user, token, refreshToken } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("refreshToken", refreshToken);
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
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
        <p className="text-center font-medium text-sm text-[#616161]">
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
            className="input-box font-medium text-[#8C8787] w-full mt-1 "
            placeholder="Enter your email"
            value={email}
            onChange={({ target }) => {
              setEmail(target.value);
            }}
          />
        </div>
        {error && (
          <div className="text-red-500 font-medium">
            <p>{error}</p>
          </div>
        )}
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
          <div className="flex flex-row justify-between  text-[#8C8787] text-sm">
            <div className="gap-2">
              <input type="checkbox" className="bg-secondary" />
              <span className="ml-2 font-medium">Remember Me</span>
            </div>
            <button
              className="underline text-[#8C8787] font-medium"
              onClick={() => {
                navigate("/forgetPassword");
              }}
            >
              Forgot Password?
            </button>
          </div>
        </div>

        <p className="text-[#919090] font-medium text-center mt-6">
          By creating an account, you agree with our
          <span className="underline text-[#616161]">Terms of</span>
          <br />
          <span className="underline text-[#616161]">Service</span> and
          <span className="underline text-[#616161]">{} Privacy Policy.</span>
        </p>
        <div>
          <button
            disabled={loading}
            className={`btn-primary font-bold text-lg ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
