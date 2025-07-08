import profile from '../../../assets/images/profilePic.png'
import TestimonialCard from '../../../generalComponents/testimonialCard';
// import { useAutoScroll } from '../../../hooks/useAutoScroll';
import { motion } from 'framer-motion';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useRef } from "react";
import { useAutoScroll } from '../../../hooks/useAutoScroll';



export interface testimonial {
    image: string;
    name: string;
    accType: string;
    testimony: string;
}


const dummyTestimonial: testimonial = {
    image: profile,
    name: "The FixRight Team",
    accType: "Enterprise Account",
    testimony: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quos ex explicabo vel libero optio soluta cupiditate quaerat dolorem totam!'
}

const TestimonialSection = () => {

    // const scrollRef = useRef<HTMLDivElement>(null)
    const scrollRef = useAutoScroll<HTMLDivElement>({
        speed: 1,
        direction: 'right',
        pauseOnHover: true
    })

    // const handlePrev = () => {
    //     scrollRef.current?.scrollBy({
    //         left: -300,
    //         behavior: 'smooth'
    //     })
    // };

    // const handleNext = () => {
    //     scrollRef.current?.scrollBy({
    //         left: 300,
    //         behavior: 'smooth'
    //     })
    // };

    return (
        <div className="w-full flex-center">
            <div className="p-2 max-w-6xl w-full relative items-center flex flex-col  ">
                <div className="flex flex-col items-center justify-center p-4 sm:items-start  w-full">
                    <p className="text-md sm:text-lg font-bold">Our Testimonials</p>
                    <div className="flex items-center justify-between gap-8 w-full">
                        <p className="font-bold text-lg sm:text-xl text-center sm:text-left">What <span className="text-secondary-blue">Contractors & Clients</span> Say About Us</p>
                        {/* BUTTON SECTION */}
                        <div className="flex space-between invisible gap-12">
                            <motion.button
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut'

                                }}
                                // onClick={handlePrev}
                                className="absolute  sm:static left-0 top-1/2 transform -translate-y-1/2 shadow p-2 rounded-[50%] z-[10] bg-purple-bg"
                            >
                                <FontAwesomeIcon className=' text-white' icon={faAngleLeft} />
                            </motion.button>
                            <motion.button
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'linear'

                                }}
                                // onClick={handleNext}
                                className="absolute  sm:static right-0 top-1/2 transform -translate-y-1/2 shadow p-2 rounded-[50%] z-[10] bg-purple-bg"
                            >
                                <FontAwesomeIcon className=' text-white' icon={faAngleRight} />
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div
                    ref={scrollRef}
                    className='p-4 grid grid-rows-1 grid-flow-col auto-cols-auto gap-4 justify-start items-center overflow-x-scroll max-w-full hide-scrollbar'>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <TestimonialCard {...dummyTestimonial} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection