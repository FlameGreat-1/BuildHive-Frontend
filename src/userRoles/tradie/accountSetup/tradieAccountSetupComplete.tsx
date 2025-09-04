import tradieBg from '@/assets/images/tradieAccSetup.svg'
import PurpleBtn from '@/generalComponents/purpleBtn'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'


const TradieAccountSetupComplete = () => {

  const navigate = useNavigate()
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="w-screen h-screen relative flex-center text-black">
      <img
        className='min-h-screen w-screen absolute object-cover'
        loading='lazy'
        src={tradieBg}
        alt="Tradie Acc Bg" />
      <div className=" w-full p-4 glassmorphic flex-center rounded-[20px] max-w-[90%]  sm:max-w-[400px]">
        <div className=" w-full max-w-[400px] flex-center flex-col gap-4 p-4">
          <div className="flex-center flex-col gap-4 text-center ">
            <p className=" text-xl sm:text-2xl md:text-3">You're All Set!</p>
            <p className="text-base md:text-lg">Start browsing jobs, building your reputation, and growing your business.</p>
          </div>
          <div className="flex-center flex-col gap-4 ">
            <PurpleBtn
              click={() => navigate('/app/tradie/job-search')}
              text='Browse Jobs Now'
              upperCase='false'
              classes="min-w-200px w-full max-w-[300px]"
            />
            <button
              onClick={() => navigate('/app/tradie/home')}
              type='button'
              className="text-primary-purple rounded-[20px] bg-light-white w-full min-w-[200px] max-w-[300px] "> Go to Dashboard →</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TradieAccountSetupComplete