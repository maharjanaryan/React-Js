import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // ✅ Separate states for first & last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  // ✅ Validation logic updated
  const validateForm = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSignup = () => {
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // ✅ Normally you'd send API request here
      console.log("Form submitted:", { firstName, lastName, email, password });

      // For demo - navigate to login
      navigate("/admin/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/outdoor.png')] opacity-20"></div>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-lg p-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h2>

{/* First & Last Name Side by Side */}
<div className="mb-5 flex gap-5">
  {/* First Name */}
  <div className="w-1/2">
    <label className="block text-gray-700 font-medium mb-2">First Name</label>
    <input
      type="text"
      placeholder="Enter your first name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      className={`w-full px-5 py-3 border ${
        errors.firstName ? "border-red-500" : "border-gray-300"
      } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
    />
    {errors.firstName && (
      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
    )}
  </div>

  {/* Last Name */}
  <div className="w-1/2">
    <label className="block text-gray-700 font-medium mb-2">Last Name</label>
    <input
      type="text"
      placeholder="Enter your last name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      className={`w-full px-5 py-3 border ${
        errors.lastName ? "border-red-500" : "border-gray-300"
      } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
    />
    {errors.lastName && (
      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
    )}
  </div>
</div>


        {/* Email */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-5 py-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-5 py-3 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full px-5 py-3 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl shadow-md transition-colors mb-6"
        >
          Sign Up
        </button>

        {/* Redirect to Login */}
        <p className="text-center text-gray-700">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-yellow-600 font-semibold hover:underline"
          >
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
