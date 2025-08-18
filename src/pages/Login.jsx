// import { NavLink } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Email:</label>
//           <input
//             type="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="Enter your email"
//           />
//         </div>
        
//         <div className="mb-6">
//           <label className="block text-gray-700 mb-2">Password:</label>
//           <input
//             type="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded"
//             placeholder="Enter your password"
//           />
//         </div>
        
//         <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4">
//           Login
//         </button>
        
//         <NavLink 
//           to="/admin/signup" 
//           className="block text-center text-blue-500 hover:text-blue-700"
//         >
//           Sign Up
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { doLogin } from "../services/auth";
// import { doLogin } from '../../services/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  // Handle email input changes and clear any existing email errors
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  // Handle password input changes and clear any existing password errors
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  // Validate and submit the login form
  const handleBtnClick = () => {
    let error = false;
    
    // Validate email field
    if (email === '') {
      setEmailError("Email is required");
      error = true;
    }
    
    // Validate password field
    if (password === '') {
      setPasswordError("Password is required");
      error = true;
    }

    // Return if any validation errors exist
    if (error) return;

    // Attempt login
    const loginStatus = doLogin(email, password);
    if (loginStatus) {
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    /* Main container with gray background */
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Login card with white background and shadow */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow">
        {/* Login title */}
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        {/* Email input field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            className={`w-full px-3 py-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded`}
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {/* Email error message */}
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
        </div>
        
        {/* Password input field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            className={`w-full px-3 py-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded`}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {/* Password error message */}
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
        </div>
        
        {/* General login error message */}
        {loginError && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {loginError}
          </div>
        )}
        
        {/* Login button */}
        <button 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 transition-colors"
          onClick={handleBtnClick}
        >
          Login
        </button>
        
        {/* Sign up link */}
        <NavLink 
          to="/admin/signup" 
          className="block text-center text-blue-500 hover:text-blue-700 transition-colors"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Login;