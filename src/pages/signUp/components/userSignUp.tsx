import { motion } from 'framer-motion'
import bg from '../../../assets/images/bgSignUp.png'
import CustomInput from '../../../generalComponents/customInput';
import { faAt, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PurpleBtn from '../../../generalComponents/purpleBtn';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gLogo from '../../../assets/icons/g-logo.png'
// import { useState } from 'react'


interface formProp {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAndPolicy: boolean;
    newsletter: boolean;
    disableBtn: boolean;
    updateForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
    btnSignUp: () => void;
    error: string;
}

const placeholderStyles = ' font-semibold peer-placeholder-shown:bg-transparent  bg-light-white'

const UserSignUp = ({ username, email, password, confirmPassword, termsAndPolicy, newsletter, updateForm, btnSignUp, error,disableBtn }: formProp) => {

    const formsData = [
        {
            name: 'username',
            type: 'text',
            icon: faUser,
            handleChange: updateForm,
            placeholder: 'Username',
            value: username,
        },
        {
            name: 'email',
            type: 'text',
            icon: faAt,
            handleChange: updateForm,
            placeholder: 'Email Address',
            value: email,
        },
        {
            name: 'password',
            type: 'password',
            icon: faLock,
            handleChange: updateForm,
            placeholder: 'Password',
            value: password,
        },
        {
            name: 'confirmPassword',
            type: 'password',
            icon: faLock,
            handleChange: updateForm,
            placeholder: 'Confirm Password',
            value: confirmPassword,
        },
    ]


    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative w-screen h-screen mt-[-3rem] z-1 bg-cover " >
            <img src={bg} alt="background" className='h-screen w-screen absolute object-cover ' />
            <div className="pt-12 md:pt-16 px-4 md:px-6 relative z-2 flex flex-col justify-center items-center md:items-start gap-4 md:flex-row ">
                <div className="flex flex-col text-center md:text-left text-primary-purple max-w-[400px]">
                    <p className="text-2xl md:text-3xl font-bold">
                        Let's get started
                    </p>
                    <p className="text-sm md:text-lg font-semibold">
                        Your details are safe with us. We'll never share your info without your permission.
                    </p>
                </div>
                <div className="glassmorphic rounded-[20px] p-6 bg-light-white/30 md:bg-light-white space-y-6 w-full max-w-[500px]">
                    <form className="flex flex-col">
                        <div id="inputs" className="flex-col flex-center gap-6">
                            {/* FORMS SECTION */}
                            {formsData.map((data, index) => (
                                <CustomInput
                                    {...data}
                                    key={index}
                                    placeholderClasses={placeholderStyles}
                                />
                            ))
                            }
                            {
                                error &&
                                <p className="text-sm text-red-500">{error}</p>
                            }
                            <div className="flex-start  w-full gap-2 items-start">
                                <input
                                    type="checkbox"
                                    name="newsletter"
                                    id="newsletter"
                                    onChange={updateForm}
                                    checked={newsletter}
                                    className="mt-1" />
                                <label
                                    htmlFor="newsletter"
                                    className="text-black text-xs md:text-sm">I want to receive updates and notifications via email.</label>
                            </div>
                            <div className="flex-start  w-full gap-2 items-start">
                                <input
                                    type="checkbox"
                                    name="termsAndPolicy"
                                    id="termsAndPolicy"
                                    onChange={updateForm}
                                    checked={termsAndPolicy}
                                    className="mt-1" />
                                <label
                                    htmlFor="termsAndPolicy"
                                    className="text-black text-xs md:text-sm">By checking this box, I confirm that i have read and agreed to the  <span className='text-primary-purple underline'><Link to='/privacy-policy'>Terms of service</Link></span> and <span className='text-primary-purple underline'><Link to='/privacy-policy'>Privacy policy</Link></span>.</label>
                            </div>
                        </div>
                    </form>
                    {/* SIGN UP BUTTON  */}
                    <PurpleBtn
                        text='Sign Up'
                        upperCase='false'
                        click={btnSignUp}
                        disabled={disableBtn}
                        classes='w-full text-center 
                    justify-self-center max-w-[300px]' />
                    {/* SOCIAL LOGINS  */}

                    <div className="my-6 text-center relative flex-center text-gray-600"><hr className="w-full  top-1/2 z-1" /><p className="  font-medium px-4 relative w-fit z-10 text-nowrap">Or Continue With</p><hr className="w-full  top-1/2 z-1" /></div>
                    <div className="flex justify-center gap-8 mb-2 bg-light-white w-fit justify-self-center p-2 rounded-[20px]">
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
                    {/* <p className="text-gray-600 self-center text-xs sm:text-sm mt-2 justify-self-center">Don't have an account? <Link to={'/auth/sign-up'} className="underline text-blue-500">Sign Up</Link></p> */}
                </div>
            </div>
        </motion.div >
    )
}

export default UserSignUp