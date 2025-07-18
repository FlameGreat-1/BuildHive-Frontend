import { motion } from "framer-motion";
import { gradientToRPurple } from "../../../global-variables";


interface props{
    heading:string;
    image:string;
    title:string;
    subtitle:string;
    step:number;
}

const InfoSection = ({heading,image,title,subtitle,step}:props) => {
  return (
    <motion.div className="flex-col gap-4 flex-center min-w-[300px] w-full max-w-[500px] p-4 text-center"
    key={step}
    initial={{opacity:0, x:100}}
    animate={{opacity:1, x:0}}
    exit={{opacity:0, x:-100}}
    transition={{duration:1}}
    >
        <p className={gradientToRPurple + "font-bold bg-clip-text text-transparent"}>{heading}</p>
        <img src={image} alt={heading} />
        <p className="text-black font-bold text-lg">{title}</p>
        <p className="text-black text-sm">{subtitle}</p>
    </motion.div>
  )
}

export default InfoSection