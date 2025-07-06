import gear from '../../../../assets/images/gear.png';
import screwD from '../../../../assets/images/screwD.png';
import hammer from '../../../../assets/images/hammer.png';
import paintB from '../../../../assets/images/paintB.png';
import phones from '../../../../assets/images/phones.png';
import { motion } from 'framer-motion';



const Banner = () => {
    return (
        <div className="relative w-[90%] ">
            <div className="w-full flex-center">
                <div className="relative z-[2] ">
                    <motion.img src={phones} alt={'phones'}
                        loading='lazy'
                        // animate={{}}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        className="w-[100%] " />
                    <motion.img src={paintB} alt={'paintB'}
                        loading='lazy'
                        animate={{ y: -30 }}
                        transition={{
                            // duration:2,
                            type: "spring",
                            stiffness: 50,
                            damping: 10,
                            repeat: Infinity,
                            repeatType: 'reverse'
                            // ease:'linear'
                        }}
                        className="w-[25%] absolute top-[50%] right-[5%]" />
                    <motion.img src={gear} alt={'gear'}
                        loading='lazy'
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear'
                        }}
                        className="w-[25%] absolute  top-[5%] right-[30%]" />
                    <motion.img src={hammer} alt={'hammer'}
                        loading='lazy'
                        animate={{ rotate: [12, -12, 12] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="w-[25%] absolute origin-bottom left-[0%] top-[40%]" />
                    <motion.img src={screwD} alt={'Screw driver'}
                        loading='lazy'
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                        className="w-[25%] absolute bottom-0 left-[25%]" />
                </div>
                <motion.div
                    className="w-[80%] aspect-square absolute rounded-[50%] bg-primary-purple z-[1]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                ></motion.div>
            </div>
        </div>
    )
}

export default Banner