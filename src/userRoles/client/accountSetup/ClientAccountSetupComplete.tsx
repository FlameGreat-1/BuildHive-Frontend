import PurpleBtn from "@/generalComponents/purpleBtn"
import { motion } from "framer-motion"
import bgImage from '@/assets/images/accountSetupBg.webp'

const ClientAccountSetupComplete = () => {
    return (
        <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative w-screen h-screen max-h-[1000px] flex-center text-black"
        >
            <img
                src={bgImage}
                alt="Account setup image"
                className="absolute h-full w-full object-cover"
            />
            <div className=" w-full p-4 glassmorphic flex-center rounded-[20px] max-w-[90%] sm:max-w-[400px]">
                <div className=" w-full max-w-[400px] flex-center flex-col gap-4 p-4">
                    <div className="flex-center flex-col gap-4 text-center ">
                        <p className=" text-xl sm:text-2xl md:text-3">Welcome to Build Hive!</p>
                        <p className="text-base md:text-lg">You're ready to post jobs and manage your projects with ease.</p>
                    </div>
                    <div className="flex-center flex-col gap-4 ">
                        <PurpleBtn
                            text='Post a Job Now'
                            upperCase='false'
                            classes="min-w-200px w-full max-w-[300px]"
                        />
                        <button className="text-primary-purple rounded-[20px] bg-light-white w-full min-w-[200px] max-w-[300px] "> Go to Dashboard →</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ClientAccountSetupComplete