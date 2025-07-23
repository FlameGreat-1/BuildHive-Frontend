import { motion } from "framer-motion"
import image from '../../../assets/images/signUpComplete.png'
import PurpleBtn from "../../../generalComponents/purpleBtn"
import { useNavigate } from "react-router-dom"

const SignUpComplete = () => {
    const navigate = useNavigate()
  return (
    <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full flex-col flex-center min-w-[300px] max-w-[500px] p-4 gap-4"
        >
        <p className="text-xl text-md:text-2xl lg:text-3xl font-semibold">You did it, you are in.</p>
        <p className="text-slate-600 lg:text-xl text-center">Welcome John</p>
        <img src={image} alt="You did it!" className='min-w-[clamp(200px,100%,400px]' />
        <PurpleBtn text='Set Up My Account' classes='w-full text-center max-w-[300px]' upperCase='false' click={() => navigate('/client/account-setup')} />
    </motion.div>
  )
}

export default SignUpComplete