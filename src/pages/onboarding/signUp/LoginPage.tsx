import React, { useState } from "react";
import buildHiveIcon from "../../../assets/icons/buildHive.svg";
import workers from "../../../assets/images/yellowWorkers.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import gLogo from '../../../assets/icons/g-logo.png'
import PurpleBtn from "../../../generalComponents/purpleBtn";
import { Link } from "react-router-dom";
import { useAntiCopy } from "../../../hooks/useAntiCopy";

const SignIn: React.FC = () => {

  useAntiCopy();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>();
  const [signInForm, setSignInForm] = useState({ username: '', password: '', rememerMe: false })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      const { name, value, checked } = e.target
      if(name === 'rememerMe'){
        setSignInForm({...signInForm, rememerMe:checked})
        return
      }
      setSignInForm({ ...signInForm, [name]: value })
    }
  }
  const signIn = () => {
    const { username, password } = signInForm
    if (username === "" || password === "") {
      setError("Please fill in all fields");
    } else {
      setError(null);
      console.log(signInForm)
    }
  };

  return (
    <div className="min-h-screen w-screen flex justify-center bg-light-white">
      <div className="w-full min-h-full max-w-[1200px] bg-white flex-center flex-col sm:flex-row  overflow-hidden">
        {/* Left Side - Image & Overlay */}
        <div className="relative md:w-1/2 w-full h-[200px] sm:min-h-[700px] flex items-end md:items-center justify-center bg-gray-200 p-4 select-none">
          <img
            src={workers}
            alt="Construction workers"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-end sm:justify-center p-4">
            <div className="flex-col flex-center sm:w-[300px] md:w-fit mb-4 bg-gray-600/20 glassmorphic rounded-md p-4 gap-2">
              <p className="text-white text-3xl md:text-3xl font-bold sm:hidden text-left">Hey, Welcome Back!</p>
              <div className=" flex-col gap-2 hidden sm:flex">
                <p className="text-white text-2xl md:text-3xl font-bold text-center">Hey, There!</p>
                <p className="text-white font-light md:font-semibold text-xl md:text-2xl text-center">Welcome Back</p>
                <p className="text-white font-light md:font-regular text-lg text-center">You are just one step away from your jobs</p>
                <div className={`sm:flex hidden justify-center w-[300px] mt-4 items-center flex-col gap-2`}>
                  <p className="text-gray-800 font-regular md:font-regular text-base md:text-lg text-center mb-2">Don't have an account?</p>
                  <PurpleBtn text="Sign Up" upperCase="false" classes="min-w-[250px] text-center" />
                </div>
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
          <form className="flex flex-col  gap-6">
            <div className="relative">
              <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-purple" />
              <input
                onChange={handleChange}
                value={signInForm.username}
                name="username"
                id="username"
                type="text"
                placeholder=" "
                className="w-full transition-all pl-10 pr-10 py-3 peer bg-light-white  border-gray-800 border-[1px] rounded-full text-black focus:border-primary-purple focus:outline-none duration-[1s] bg-transparent relative "
              />
              <label
                htmlFor="username"
                className=" absolute peer-placeholder-shown:bg-transparent peer-placeholder-shown:top-3 peer-focus:top-[-12px]  top-[-12px] peer-focus:text-primary-purple text-primary-purple transition-all peer-focus:text-xs peer-placeholder-shown:text-slate-400 left-8 peer-focus:bg-light-white bg-light-white px-1 z-1 pointer-events-none">Username or email</label>
            </div>
            <div className="relative">
              <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-purple" />
              <input
                onChange={handleChange}
                value={signInForm.password}
                name="password"
                id="password"
                title="password"
                type={showPassword ? "text" : "password"}
                placeholder=" "
                className="w-full transition-all pl-10 pr-10 py-3 peer bg-light-white  border-gray-800 border-[1px] rounded-full text-black focus:border-primary-purple focus:outline-none duration-[1s] bg-transparent relative"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
              <label
                htmlFor="password"
                className=" absolute bg-light-white text-primary-purple  peer-placeholder-shown:top-3 peer-focus-within:top-[-12px] top-[-12px] peer-focus:text-primary-purple transition-all peer-focus:text-xs peer-placeholder-shown:text-slate-400 left-8 peer-focus:bg-light-white px-1 z-1 pointer-events-none">Password</label>

            </div>
            <div className="flex justify-between">
              <span className="flex-center gap-1">
                <input
                  type="checkbox"
                  name="rememerMe"
                  id="rememerMe"
                  onChange={handleChange}
                  checked={signInForm.rememerMe}
                  className="" />
                <label
                  htmlFor="rememerMe"
                  className="text-black text-sm sm:text-base">Remember me</label>
              </span>
              <a href="#" className=" bottom-[-22px] text-right text-primary-purple text-sm">
                Forgot password?
              </a>
            </div>
            <PurpleBtn text="Sign In" classes={`  w-full text-center mt-4 self-center`} click={() => signIn()} />
          </form>

          {/* SOCIAL LOGINS  */}

          <div className="my-6 text-center relative flex-center text-gray-500"><p className="bg-light-white font-medium px-4 relative w-fit z-10">Or Continue With</p><hr className="w-full absolute top-1/2 z-1" /></div>
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
