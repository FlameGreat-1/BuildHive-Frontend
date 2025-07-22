import { faAt } from '@fortawesome/free-solid-svg-icons'
import image from '../../../assets/images/forgotPass1.png'
import CustomInput from '../../../generalComponents/customInput'
import { useState } from 'react'
import PurpleBtn from '../../../generalComponents/purpleBtn'
import { motion } from 'framer-motion'


interface props {
    nextSteps: () => void;
    setParentEmail: (email: string) => void;
}

const ForgotPass1 = ({ nextSteps, setParentEmail }: props) => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value.trim())
    }
    const isEmailValid = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    const submit = (email: string) => {
        try {
            if (isEmailValid(email)) {
                setParentEmail(email)
                nextSteps()
            } else {
                setError("Invalid email address")
            }

        } catch (error) {
            console.log(error)
            setError("Something went wrong, try again")
        }
    }
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex-col flex-center min-w-[300px] max-w-[500px] p-4 gap-4"
        >
            <p className="text-xl text-md:text-2xl lg:text-3xl font-semibold">Forgot password?</p>
            <img src={image} alt="Forgot Password" className='w-[80%]' />
            <p className="text-slate-600 lg:text-xl text-center">Please enter your email address to receive a confirmation code to set a new password.</p>
            <CustomInput
                name='email'
                type='email'
                icon={faAt}
                value={email}
                placeholder='Email address'
                handleChange={handleChange}
            />
            {error &&
                <p className="text-sm text-red-500">{error}</p>}
            <PurpleBtn text='Confirm' classes='w-full text-center max-w-[300px]' upperCase='false' click={() => submit(email)} />
        </motion.div>
    )
}

export default ForgotPass1