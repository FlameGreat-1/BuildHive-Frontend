import { faLock } from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../../../generalComponents/customInput'
import { useState } from 'react'
import PurpleBtn from '../../../generalComponents/purpleBtn'
import { motion } from 'framer-motion'
import { validateConfirmPassword, validatePassword } from '../../../utils/validators'


interface props {
    nextSteps: () => void;
}

const SetNewPasword = ({ nextSteps }: props) => {
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setPassword(value)
        const isPasswordValid = validatePassword(value)
        if(isPasswordValid === true) {setError('') } else{setError(isPasswordValid)}
        console.log(error)
    }
    const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const confirmPassword = e.target.value
        setPassword2(confirmPassword)
        const doPasswordsMatch = validateConfirmPassword(password,confirmPassword)
        console.log(doPasswordsMatch)
        if(doPasswordsMatch!==true){setError(doPasswordsMatch); return}
        if(doPasswordsMatch) {setError('')} 
        // if (!doPasswordsMatch) setError('doPasswordsMatch')
    }
    const submit = (password: string) => {
        if(error)return
        try {
            const isPasswordValid = validatePassword(password)
            if (password === password2 && isPasswordValid) {
                
                nextSteps()
            } else {
                setError("Passwords don't match")
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
            transition={{duration:0.5}}
            className="w-full flex-col flex-center min-w-[300px] max-w-[500px] p-4 gap-6"
        >
            <p className="text-xl text-md:text-2xl lg:text-3xl font-semibold">Set New Password.</p>
            <p className="text-slate-600 lg:text-xl text-center">Your new Password must be different from your previously used password.</p>
            <CustomInput
                name='password'
                type='password'
                icon={faLock}
                value={password}
                placeholder='Password'
                handleChange={handleChange}
            />
            <CustomInput
                name='password2'
                type='password'
                icon={faLock}
                value={password2}
                placeholder='Confirm Password'
                handleChange={handleChange2}
            />
            {error &&
                <p className="text-sm text-red-500">{error}</p>}
            <PurpleBtn text='Confirm' classes='w-full text-center max-w-[300px]' upperCase='false' click={() => submit(password)} />
        </motion.div>
    )
}

export default SetNewPasword