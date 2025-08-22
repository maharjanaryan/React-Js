import React from "react";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyPress,
  error,
  showToggle,
  isVisible,
  onToggle,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="relative flex items-center">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          className={`w-full px-5 py-3 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600 transition ${
            showToggle ? "pr-12" : ""
          }`}
        />
        {showToggle && (
          <button
            type="button"
            className="absolute right-3 inset-y-0 flex items-center"
            onClick={onToggle}
          >
            {isVisible ? (
              // Eye open
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              // Eye closed
              <svg
                className="h-5 w-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
