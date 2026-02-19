import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [isLogIn, setIsLogIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className="grid w-full min-h-screen place-items-center py-8 px-4
             bg-gradient-to-r from-blue-900 via-cyan-400 to-teal-100 
             bg-[length:200%_200%] animate-gradient"
    >
      <div className="w-full max-w-[430px] bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
          {/*Tab controls*/}
        <div className="relative flex h-11 sm:h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
          <button
            className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${
              isLogIn ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLogIn(true)}
          >
            Login
          </button>

          <button
            className={`w-1/2 text-base sm:text-lg font-medium transition-all z-10 ${
              !isLogIn ? "text-white" : "text-black"
            }`}
            onClick={() => setIsLogIn(false)}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all ${
              isLogIn ? "left-0" : "left-1/2"
            }`}
          ></div>
        </div>

        {/*Form*/}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault(); // stop page refresh
            const selectedRole = e.target.role.value; // get selected role
            localStorage.setItem("userRole", selectedRole);
            // Navigate to new routes
            if (selectedRole === "patient") {
              navigate("/patient/dashboard");
            } else if (selectedRole === "doctor") {
              navigate("/doctor/dashboard");
            } else if (selectedRole === "admin") {
              navigate("/admin/dashboard");
            } else {
              navigate("/patientHome"); // fallback to old route
            }
          }}
        >
          {/*Choosing patient or doctor*/}
          <div className="flex justify-center gap-4 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="patient" defaultChecked className="accent-cyan-500"/>
              <span className="text-gray-700">Patient</span>
            </label>    
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="doctor" className="accent-cyan-500"/>
              <span className="text-gray-700">Doctor</span>
            </label>
          </div>

          {/*Signup only Field*/}
          {!isLogIn && (
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
          />

          {/*Signup Confirm Password*/}
          {!isLogIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder-gray-400"
            />
          )}

          {/*Forget Password for login*/}
          {isLogIn && (
            <div className="text-right">
              <a href="#" className="text-cyan-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}

          {/*Submit Button*/}
          <button
            type="submit"
            className="w-full p-3 sm:p-3.5 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-base sm:text-lg font-medium hover:opacity-90 transition shadow-lg hover:shadow-xl"
          >
            {isLogIn ? "Login" : "Sign Up"}
          </button>

          {/*Switch Link*/}
          <p className="text-center text-gray-600">
            {isLogIn ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogIn(!isLogIn); // toggle form type
              }}
              className="text-cyan-600 hover:underline"
            >
              {isLogIn ? "Sign Up Now" : "Login"}
            </a>
          </p>

          {/*Google SignIn Button*/}
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="w-full max-w-64 p-2.5 sm:p-3 border-2 border-gray-300 rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition flex items-center justify-center gap-2 sm:gap-3"
            >
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="Google Logo"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <span className="whitespace-nowrap">{isLogIn ? "Login with Google" : "Sign up with Google"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
