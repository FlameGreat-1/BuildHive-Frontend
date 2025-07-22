import { motion } from "framer-motion"
import image from '../../../assets/images/passwordUpdated.png'
import PurpleBtn from "../../../generalComponents/purpleBtn"
import { useNavigate } from "react-router-dom"

const PasswordUpdated = () => {
    const navigate = useNavigate()
  return (
    <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex-col flex-center min-w-[300px] max-w-[500px] p-4 gap-4"
        >
        <p className="text-xl text-md:text-2xl lg:text-3xl font-semibold">Password updated</p>
        <p className="text-slate-600 lg:text-xl text-center">You're all set to go.</p>
        <img src={image} alt="Forgot Password" className='w-[80%]' />
        <PurpleBtn text='Back to Sign In' classes='w-full text-center max-w-[300px]' upperCase='false' click={() => navigate('/sign-in')} />
    </motion.div>
  )
}

export default PasswordUpdated