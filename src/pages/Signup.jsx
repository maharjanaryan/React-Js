import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css';
import InputField from "../components/AdminPart/InputField";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSignup = async () => {
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
          }),
        });
        const data = await response.json();
        if (response.ok) setShowSuccessPopup(true);
        else setErrors({ submit: data.message || "Registration failed. Please try again." });
      } catch {
        setErrors({ submit: "Network error. Please try again later." });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") handleSignup(); };
  const handleOkayClick = () => { setShowSuccessPopup(false); navigate("/"); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-black relative">
      <div className="absolute inset-0 bg-[url('/images/outdoor.png')] bg-cover bg-center opacity-30 z-0"></div>

      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center animate-fadeIn">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign up successful!</h3>
            <p className="text-gray-600 mb-6">Your account has been created successfully.</p>
            <button onClick={handleOkayClick} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors">Okay</button>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-lg p-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>

        {errors.submit && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">{errors.submit}</div>}

        <div className="flex gap-5 mb-5">
          <InputField id="firstName" label="First Name" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} onKeyPress={handleKeyPress} error={errors.firstName} className="w-1/2"/>
          <InputField id="lastName" label="Last Name" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} onKeyPress={handleKeyPress} error={errors.lastName} className="w-1/2"/>
        </div>

        <InputField id="email" label="Email" placeholder="Enter your email" type="email" value={form.email} onChange={handleChange} onKeyPress={handleKeyPress} error={errors.email}/>
        <InputField id="password" label="Password" placeholder="Create a password" type={showPassword ? "text" : "password"} value={form.password} onChange={handleChange} onKeyPress={handleKeyPress} error={errors.password} showToggle isVisible={showPassword} onToggle={() => setShowPassword(!showPassword)}/>
        <InputField id="confirmPassword" label="Confirm Password" placeholder="Re-enter your password" type={showConfirmPassword ? "text" : "password"} value={form.confirmPassword} onChange={handleChange} onKeyPress={handleKeyPress} error={errors.confirmPassword} showToggle isVisible={showConfirmPassword} onToggle={() => setShowConfirmPassword(!showConfirmPassword)}/>

        <button onClick={handleSignup} disabled={isLoading} className={`w-full ${isLoading ? "bg-yellow-700 cursor-not-allowed" : "bg-yellow-600 hover:bg-yellow-700"} text-white font-semibold py-3 rounded-xl shadow-md transition-colors mb-6 flex items-center justify-center`}>
          {isLoading ? "Creating Account..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-700">
          Already have an account? <NavLink to="/login" className="text-yellow-600 font-semibold hover:underline">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
