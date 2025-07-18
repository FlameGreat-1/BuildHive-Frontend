import React, { useState } from "react";
import buildHiveIcon from "../../assets/icons/buildHive.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>("Invalid email or password");
  const signIn = (e:string /*React.FormEvent*/) => {
    // e.preventDefault();
    console.log(e)
    setError("Please fill in all fields");
    // Handle sign-in logic here
    // For example, you can validate the input and set error messages accordingly
    // const username = (e.target as HTMLFormElement).username.value;
    // const password = (e.target as HTMLFormElement).password.value;
    // if (username === "" || password === "") {
    //   setError("Please fill in all fields");
    // } else {
    //   setError(null);
    //   // Proceed with sign-in logic, e.g., API call
    //   console.log("Signing in with:", { username, password });
    // }
  };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-white">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Image & Overlay */}
        <div className="relative md:w-1/2 w-full h-[350px] md:h-auto flex items-center justify-center bg-gray-200">
          <img
            src="/assets/images/construction-workers.jpg"
            alt="Construction workers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl md:rounded-none flex flex-col items-center justify-center px-6">
            <h2 className="text-white text-2xl font-bold mb-2 text-center">Welcome back !</h2>
            <p className="text-white text-lg mb-2 text-center">You are just one step away from your jobs</p>
            <p className="text-white text-base mb-6 text-center">Don't have an account?</p>
            <button className="w-[80%] py-3 rounded-full bg-gradient-to-r from-primary-purple to-active-light-blue text-white font-semibold text-lg shadow-lg">
              Sign Up
            </button>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-purple-bg">SIGN IN</h2>
            <img src={buildHiveIcon} alt="BuildHive" className="w-10 h-10" />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <form className="flex flex-col gap-4">
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Username or email"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:outline-none"
              />
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-200 focus:outline-none"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <a href="#" className="absolute right-0 bottom-[-22px] text-primary-purple text-sm">
                Forgot password?
              </a>
            </div>
            <button
            onClick={()=>{signIn('event')}}
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-primary-purple to-active-light-blue text-white font-semibold text-lg mt-4"
            >
              Sign In
            </button>
          </form>
          <div className="my-6 text-center text-gray-500">Or Use Social Handles to Sign In</div>
          <div className="flex justify-center gap-8 mb-2">
            <p className="text-3xl text-gray-600 hover:text-primary-purple">
              <FontAwesomeIcon icon={faGoogle} />
            </p>
            <p className="text-3xl text-gray-600 hover:text-primary-purple">
              <FontAwesomeIcon icon={faFacebook} />
            </p>
            <p className="text-3xl text-gray-600 hover:text-primary-purple">
              <FontAwesomeIcon icon={faLinkedin} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
