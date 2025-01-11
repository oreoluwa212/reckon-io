import { useState } from "react";
import { useNavigate } from "react-router";
import PasswordInput from "@/components/Input/PasswordInput";
import GoogleIcon from "@/assets/Image/google.png";
import AppleIcon from "@/assets/Image/apple.png";
import { validateEmail } from "@/utils/helper";
import { authService } from "@/services/api/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    try {
      const response = await authService.signup({ email, password });
      console.log("User registered:", response);
      navigate("/verifyEmail");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <button className="input-box font-semibold flex items-center justify-center">
          <img src={GoogleIcon} className="h-6 w-[23px] mr-2" />
          Continue with Google
        </button>
        <button className="input-box font-semibold flex items-center justify-center">
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
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email" className="font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="input-box font-medium w-full mt-1"
            placeholder="Enter your email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
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
            className="w-full font-medium mt-2"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <p className="text-sm font-medium text-[#636363]">
            Password must be at least 8 characters long
          </p>
        </div>

        <p className="text-[#8C8787] font-medium text-center mt-6">
          By creating an account, you agree with our{" "}
          <span className="underline text-[#616161]">Terms of</span>
          <br />
          <span className="underline text-[#616161]">Service</span> and{" "}
          <span className="underline text-[#616161]">Privacy Policy.</span>
        </p>
        <div>
          <button
            className="btn-primary font-bold text-lg"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account...." : "Create Account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
