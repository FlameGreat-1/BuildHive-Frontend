import { useEffect, useState } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Star } from "lucide-react"
import profilePic from '@/assets/images/profilePic.png'
import { MessageCirclePlus } from "lucide-react"
import PurpleBtn from "@/generalComponents/purpleBtn"
import { Rating } from "@mui/material"
import portfolioPic from '@/assets/images/portfolioImg.png'
import noReviews from '@/assets/icons/noReviews.png'




export const capitalizeWords = (str: string | undefined) => {
    return str && str.replace(/\b\w/g, char => char.toUpperCase())
}

const portfolio = [
    portfolioPic, portfolioPic, portfolioPic, portfolioPic
]

const TradieProfile = () => {

    const jobsInterested = ['plumbing', 'carpentry', 'tiling']

    const { tradie } = useParams<{ tradie: string }>()
    const setTitle = usePageTitle()
    useEffect(() => {
        setTitle(capitalizeWords(tradie?.split(':')[1].split('-').join(' ')) ?? '')
    }, [])

    const [currentSection, setCurrentSection] = useState('about')
    const reviews = true

    return (
        <div>
            <p className="text-primary-purple"><FontAwesomeIcon className="text-primary-purple" icon={faArrowLeft} /> Go Back</p>
            <div className="flex flex-col md:flex-row">
                {/* FIRST SECTION OF PROFILE REVIEW */}
                <div className="w-full md:w-1/2">
                    <div className="bg-gradient-to-b from-primary-purple/80 to-primary-purple">
                        <div className="flex">
                            <p className="justify-self-center">Profile Review</p>
                            <p className="rounded-full p-2 "><Star color="yellow" /></p>
                        </div>
                        {/* IMAGE & INFO SECTION */}
                        <div className="w-full">
                            <img src={profilePic} alt={tradie} />
                            <div className="flex flex-col">
                                <p className="">{tradie}</p>
                                <p className="">Melbourne, VIC</p>
                                <p className="">+5 years Experience</p>
                            </div>
                        </div>
                    </div>
                    {/* HOURLY PAY SECTION AND INVITATION BUTTON */}
                    <div className="flex-col flex">
                        <div className="flex justify-between shadow-md ">
                            <p><span className="rounded-sm border border-primary-purple p-2">$</span> Hourly Rate</p>
                            <p>$80.00</p>
                        </div>
                        <div className="shadow-sm rounded-[20px] flex">
                            <div className="flex flex-col">
                                <p>Message {tradie}</p>
                                <p>online</p>
                            </div>
                            <MessageCirclePlus />
                        </div>
                        <PurpleBtn
                            text="Invite to Apply"
                            upperCase='false'

                        />
                    </div>
                </div>
                {/* SECOND SECTION OF PROFILE REVIEW */}
                <div className="w-full md:w-1/2">
                    <div className="grid grid-cols-3 w-full">
                        <p className={`${currentSection === 'about' ? 'bg-light-white' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSection('about')}>About</p>
                        <p className={`${currentSection === 'experience' ? 'bg-light-white' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSection('experience')}>Experience</p>
                        <p className={`${currentSection === 'reviews' ? 'bg-light-white' : 'bg-gray-300'}`}
                            onClick={() => setCurrentSection('reviews')}>Reviews</p>
                    </div>
                    <div className="">
                        {/* About and bio section */}
                        {
                            currentSection === 'about' && (
                                <div className="flex flex-col">
                                    <p className=" ">
                                        Hi, I’m Jake a fully licensed electrician with over 7 years of hands-on experience in residential and light commercial projects. I specialize in smart home installs, lighting upgrades, and switchboard rewiring. I take pride in neat finishes, fast turnarounds, Hi, I’m Jake a fully licensed electrician with over 7 years of hands-on experience in residential and light commercial projects. I specialize in smart home installs, lighting upgrades, and switchboard rewiring. I take pride in neat finishes, fast turnarounds
                                    </p>
                                    <div className="flex">
                                        <Rating
                                            size="small"
                                            name="read-only-rating"
                                            value={3.5}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <p>3.5</p>
                                        <p>(9 Reviews)</p>
                                    </div>
                                    <div className="flex flex-wrap">
                                        {
                                            jobsInterested.map((job, index) => (
                                                <p key={index}>{job}</p>
                                            ))
                                        }
                                    </div>
                                    <div className="w-full flex overflow-x-scroll hide-scroll">
                                        {
                                            portfolio.map((image, i) => (
                                                <img src={image} alt={`portfolio${i}`} />
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        {/* Experience section */}
                        {
                            currentSection === 'experience' && (
                                <div className="flex flex-col">
                                    <div className="flex flex-col">
                                        <div className="">
                                            <p>Lead Plumber at Aquaflow Plumbing Solutions</p>
                                            <p>Sydney, NSW. Mar 2020 - Present</p>
                                        </div>
                                        <ul className="list-disc">
                                            <li>
                                                Completed over 200 residential plumbing jobs, including full bathroom and kitchen fit-outs
                                            </li>
                                            <li>
                                                Specialized in pipe relining, hot water system installations, and blocked drain repairs
                                            </li>
                                            <li>
                                                Provided emergency plumbing services with a 98% customer satisfaction rate
                                            </li>
                                            <li>
                                                Worked closely with builders and electricians on new home builds
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        {/* Review section */}
                        {
                            currentSection === 'reviews' && (
                                <div className="w-full">
                                    {
                                        reviews ? (
                                            <div className="w-full">
                                                <div className="">
                                                    <p>Fast and Professional Service</p>
                                                    <p className="line-clamp-3">Jake showed up on time, fixed my leaking sink quickly, and left everything spotless. Definitely Contacting him again!</p>
                                                    <div className="flex">
                                                        <div className="flex">
                                                            <img src={profilePic} alt="Sarah T. Bondai" />
                                                            <div className="">
                                                                <p>Sarah T. Bondai</p>
                                                                <p>Client</p>
                                                            </div>
                                                        </div>
                                                        <Rating
                                                            size="small"
                                                            name="read-only-rating"
                                                            value={5}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                            :
                                            (
                                                <div className="flex flex-col justify-center">
                                                    <img src={noReviews} alt="No Reviews Yet" />
                                                    <p className="text-primary-purple">No Reviews Yet</p>
                                                    <p>Once this tradie completes a few jobs, you’ll see feedback from clients here.</p>
                                                </div>
                                            )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradieProfile