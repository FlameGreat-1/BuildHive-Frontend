import buildhiveIcon from '@/assets/icons/buildHive.svg'
import { motion } from 'framer-motion';

interface Props {
    classes?:string;
}


const BuildHiveIcon = ({classes}:Props) => {
    return (
        <div className={`${classes && classes} flex-center gap-1`}>
            <img
                className='w-8 md:w-12'
                src={buildhiveIcon}
                alt='BuildHive Icon' />
            <motion.p 
            animate={{scale:[1,1.1,1]}}
            transition={{
                duration:3,
                repeat:Infinity,
                ease:'easeInOut'
            }}
            
            className="text-primary-purple text-lg md:text-2xl font-bold">Build Hive</motion.p>
        </div>
    )
}

export default BuildHiveIcon