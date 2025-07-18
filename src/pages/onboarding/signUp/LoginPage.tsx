import React, { useState } from "react";
import buildHiveIcon from "../../../assets/icons/buildHive.svg";
import workers from "../../../assets/images/yellowWorkers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gLogo from '../../../assets/icons/g-logo.png'
import PurpleBtnSquare from "../../../generalComponents/purpleBtnSquare";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>("Invalid email or password");
  const signIn = (e: string /*React.FormEvent*/) => {
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
    <div className="min-h-screen w-screen flex items-center justify-center bg-light-white">
      <div className="w-full min-h-full max-w-5xl bg-white flex-center flex-col sm:flex-row  overflow-hidden">
        {/* Left Side - Image & Overlay */}
        [        <div className="relative md:w-1/2 w-full h-[250px] sm:min-h-[700px] flex items-end md:items-center justify-center bg-gray-200 p-4">
          ]          <img
            src={workers}
            alt="Construction workers"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center p-4">
            <div className="flex-col flex-center w-fit mb-4 bg-gray-600/20 glassmorphic rounded-md p-4 gap-2">
              <h2 className="text-white text-2xl md:text-3xl font-bold text-center">Welcome back!</h2>
              <p className="text-white font-light md:font-regular text-lg text-center">You are just one step away from your jobs</p>
              <div className={`sm:flex hidden justify-center mt-4 items-center flex-col gap-2`}>
                <p className="text-white font-light md:font-regular text-base md:text-lg text-center mb-2">Don't have an account?</p>
                <PurpleBtnSquare text="Sign Up" upperCase="false" classes="w-[200px] text-center" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Form */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-10 max-w-[400px]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-purple-bg">SIGN IN</h2>
            <img src={buildHiveIcon} alt="BuildHive" className="w-10 h-10" />
          </div>
          {error && <div className="text-red-500 self-center text-sm mb-4">{error}</div>}
          <form className="flex flex-col  gap-4">
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
            <PurpleBtnSquare text="Sign In" classes="w-[200px] text-center mt-4 self-center" click={() => signIn('e')} />
          </form>
          <div className="my-6 text-center relative flex-center text-gray-500"><p className="bg-light-white font-medium px-4 relative w-fit z-10">Or</p><hr className="w-full absolute top-1/2 z-1" /></div>
          <div className="flex justify-center gap-8 mb-2">
            <p className="text-3xl text-gray-600">
              <img src={gLogo} className="w-8" alt="Google" />
            </p>
            <p className="text-3xl">
              <FontAwesomeIcon className="w-7 text-[#1877F2]" icon={faFacebook} />
            </p>
            <p className="text-3xl">
              <FontAwesomeIcon className="w-7 text-[#0A66C2]" icon={faLinkedin} />
            </p>
          </div>
          <p className="text-gray-600 self-center text-xs sm:text-sm mt-2">Don't have an account? <Link to={'/'} className="underline text-blue-500">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
