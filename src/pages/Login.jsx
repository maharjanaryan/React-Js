import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setLoginError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
    setLoginError("");
  };

  const handleBtnClick = () => {
    let error = false;
    if (email === "") {
      setEmailError("Email is required");
      error = true;
    }
    if (password === "") {
      setPasswordError("Password is required");
      error = true;
    }
    if (error) return;

    // For demo purposes - simulate successful login
    if (email && password) {
      navigate("/adminlayout/layout");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-black relative">
      {/* Fallback background pattern */}
      <div className="absolute inset-0 bg-[url('/images/outdoor.png')] opacity-20"></div>
      
      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login 
        </h2>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-5 py-3 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full px-5 py-3 border ${
              passwordError ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>

        {/* Login error */}
        {loginError && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {loginError}
          </div>
        )}

        {/* Login button */}
        <button
          onClick={handleBtnClick}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors mb-4"
        >
          Login
        </button>


        {/* Signup */}
        <p className="text-center text-gray-700">
          Don't have an account?{" "}
          <NavLink
            to="/admin/signup"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>

      <style jsx>{`
        .min-h-screen {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Login;