import image from '../../../assets/images/emailConfirmOtp2.png'
import { useEffect, useState } from 'react'
import PurpleBtn from '../../../generalComponents/purpleBtn'
import { motion } from 'framer-motion'
import OtpInput from '../../../generalComponents/OtpInput'
import {validateOtp} from '../../../utils/validators.ts'

interface props {
    email: string;
    nextSteps: () => void;
}

const ConfirmEmailSignUp = ({ email, nextSteps }: props) => {

    const [timer, setTimer] = useState(30)
    const [otp, setOtp] = useState(Array(5).fill(""))
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const handleSubmit = () => {
        const otpValue = otp.join("")
        const isOtpValid = validateOtp(otpValue)
        // setErrorMsg(false)
        try {
            if(isOtpValid === true) {

                nextSteps()
            }
            else{
                setErrorMsg(isOtpValid)
            throw new Error("");
        }
        } catch {
            setError(true)
        }
    }

    const handleResend = ()=>{
        setTimer(30);
        setError(false);
        setOtp(Array(5).fill(""))
    }

    useEffect(() => {
        if (timer <= 0) return;
        const timerInterval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(timerInterval)
    }, [timer])


    return (

        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex-col flex-center min-w-[300px] max-w-[500px] p-4 gap-4"
        >
            <p className="text-xl text-md:text-2xl lg:text-3xl font-semibold">Email Confirmation</p>
            <img src={image} alt="Forgot Password" className='min-w-[clamp(200px,100%,400px)]' />
            <p className="text-slate-600 lg:text-xl text-center">We’ve sent a 6-digit code to  <span className='text-primary-purple'>{email}</span> enter it below to confirm your account and keep it secure.</p>
            <OtpInput length={5} value={otp} onChange={setOtp} error={error} />
            {error &&
                <p className="text-sm text-red-500">{errorMsg}</p>}
                {timer > 0 ? <p className="text-base md:text-lg text-slate-400">Send code again in 00:{timer}</p> : (
                <div className='flex-center flex-col text-slate-400'>
                    <p className="text-base md:text-lg">Didn't receive the code?</p>
                    <p
                        onClick={handleResend}
                        className='text-primary-purple'>Resend code</p>
                </div>
            )}
            <PurpleBtn
                text='Confirm Code'
                upperCase='false'
                classes='w-full text-center max-w-[300px]'
                click={() => handleSubmit()} />
        </motion.div>
    )
}

export default ConfirmEmailSignUp