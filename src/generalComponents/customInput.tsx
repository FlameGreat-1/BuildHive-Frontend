import { faEyeSlash, faEye, type IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react";

interface props {
    name: string;
    type: string;
    value:string | number | readonly string[];
    icon: IconDefinition;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    classes?:string;
}

const CustomInput = ({ name, type, icon, handleChange, placeholder,value,classes }: props) => {

    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? "text" : "password") : type

    return (
        <div className={`${classes&&classes}  relative w-full`}>
            <FontAwesomeIcon icon={icon} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-purple" />
            <input
                onChange={handleChange}
                value={value}
                name={name}
                id={name}
                title={name}
                required
                type={inputType}
                placeholder=" "
                className={` w-full transition-all pl-10 pr-10 py-3 peer bg-light-white  border-gray-800 border-[1px] rounded-full text-black focus:border-primary-purple focus:outline-none duration-[1s] bg-transparent relative`}
            />
            {
                type === 'password' && (
                    <span
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                )
            }
            <label
                htmlFor={name}
                className=" absolute bg-light-white text-primary-purple  peer-placeholder-shown:top-3 peer-focus-within:top-[-12px] top-[-12px] peer-focus:text-primary-purple transition-all peer-focus:text-xs peer-placeholder-shown:text-slate-400 left-8 peer-focus:bg-light-white px-1 z-1 pointer-events-none">{placeholder}</label>
        </div>
    )
}

export default CustomInput