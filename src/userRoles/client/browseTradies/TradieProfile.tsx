import { useEffect, useState } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import { useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { Star } from "lucide-react"
import profilePic from '@/assets/images/profilePic.png'
import { MessageCirclePlus } from "lucide-react"
import PurpleBtn from "@/generalComponents/purpleBtn"
import { Rating } from "@mui/material"
import portfolioPic from '@/assets/images/portfolioImg.png'
import noReviews from '@/assets/icons/noReviews.png'
import experienceIcon from '@/assets/icons/experienceIcon.png'
import { capitalizeWords } from "@/utils/capitalizeWordsFunction"






const portfolio = [
    portfolioPic, portfolioPic, portfolioPic, portfolioPic
]

const TradieProfile = () => {

    const navigate = useNavigate()
    const jobsInterested = ['plumbing', 'carpentry', 'tiling']

    const { tradie } = useParams<{ tradie: string }>()
    const setTitle = usePageTitle()
    useEffect(() => {
        setTitle(capitalizeWords(tradie?.split('-').join(' ')) ?? '')
    }, [])

    const [currentSection, setCurrentSection] = useState('about')
    const [showMore, setShowMore] = useState(false)
    const reviews = false

    return (
        <div className="space-y-4 md:p-4">
            <p
                onClick={() => navigate(-1)}
                className="text-primary-purple pt-2 pl-4 md:pt-4"><FontAwesomeIcon className="text-primary-purple" icon={faArrowLeft} /> Go Back</p>
            <div className="flex flex-col md:flex-row gap-4">
                {/* FIRST SECTION OF PROFILE REVIEW */}
                <div className="w-full md:w-1/2 gap-4">
                    <div className="bg-gradient-to-b from-primary-purple/80 to-[#752EE5] w-full flex flex-col items-center text-light-white p-4 gap-4 pb-12 ">
                        <div className="grid grid-cols-3 w-full items-start">
                            <p></p>
                            <p className="justify-self-center text-nowrap font-semibold">Profile Review</p>
                            <p className="rounded-full p-2 bg-light-white/50 justify-self-end"><Star size='16' color="yellow" fill='yellow' /></p>
                        </div>
                        {/* IMAGE & INFO SECTION */}
                        <div className="w-full flex flex-col items-center gap-4">
                            <img
                                className="object-center aspect-square w-[40%] rounded-[50%] border border-black"
                                src={profilePic}
                                alt={tradie} />
                            <div className="flex flex-col text-center">
                                <p className="font-bold text-md md:text-lg lg:text-xl">{capitalizeWords(tradie)}</p>
                                <p className="text-xs md:text-sm  lg:text-md">Melbourne, VIC</p>
                                <p className="text-xs md:text-sm  lg:text-md">+5 years Experience</p>
                            </div>
                        </div>
                    </div>
                    {/* HOURLY PAY SECTION AND INVITATION BUTTON */}
                    <div className="flex-col  p-2 gap-4 hidden md:flex">
                        <div className="flex justify-between shadow-md p-2 items-center border rouned-md">
                            <p className=" flex items-center gap-1"><span className="rounded-sm border font-bold border-primary-purple p-2">$</span> Hourly Rate</p>
                            <p className="font-semibold">$80.00</p>
                        </div>
                        <div className="self-center shadow-sm rounded-[30px] flex border-slate-500 border py-2 px-4 font-semibold justify-between items-center w-fit gap-4">
                            <div className="flex flex-col">
                                <p className="text-primary-purple">Message {tradie}</p>
                                <p className="text-gray-400">online</p>
                            </div>
                            <MessageCirclePlus className="text-primary-purple" />
                        </div>
                        <PurpleBtn
                            text="Invite to Apply"
                            upperCase='false'
                            classes="self-center"
                        />
                    </div>
                </div>
                {/* SECOND SECTION OF PROFILE REVIEW */}
                <div className="w-full md:w-1/2 shadow-md border bg-light-white/50 rounded-md p-2 h-fit relative rounded-t-[20px] md:rounded-t-md top-[-3rem] space-y-2 md:top-0">
                    <div className="grid grid-cols-3 gap-2 w-full p-2 md:p-0 md:py-2 font-semibold bg-light-white md:bg-none  rounded-xl">
                        <p className={`text-sm lg-text-base ${currentSection === 'about' ? 'bg-light-white' : 'bg-gray-300'} shadow-sm p-2 rounded-[20px] border border-slate-500 text-center`}
                            onClick={() => setCurrentSection('about')}>About</p>
                        <p className={`text-sm lg-text-base ${currentSection === 'experience' ? 'bg-light-white' : 'bg-gray-300'} shadow-sm p-2 rounded-[20px] border border-slate-500 text-center`}
                            onClick={() => setCurrentSection('experience')}>Experience</p>
                        <p className={`text-sm lg-text-base ${currentSection === 'reviews' ? 'bg-light-white' : 'bg-gray-300'} shadow-sm p-2 rounded-[20px] border border-slate-500 text-center`}
                            onClick={() => setCurrentSection('reviews')}>Reviews</p>
                    </div>
                    <div className="">
                        {/* About and bio section */}
                        {
                            currentSection === 'about' && (
                                <div className="flex flex-col gap-4 p-2">
                                    <div className="relative">
                                        <p className={` ${showMore ? 'overflow-y-scroll pb-8 ' : 'line-clamp-[7] lg:line-clamp-[5]'} max-h-[250px]  `}>
                                            Hi, I'm Andrew, a fully licensed electrician with over 7 years of hands-on experience in residential and light commercial projects. I specialize in smart home installs, lighting upgrades, and switchboard rewiring. I take pride in neat finishes, fast turnarounds, Hi, I’m Jake a fully licensed electrician with over 7 years of hands-on experience in residential and light commercial projects. I specialize in smart home installs, lighting upgrades, and switchboard rewiring. I take pride in neat finishes, fast turnarounds
                                        </p>
                                        {!showMore ? <span
                                            onClick={() => setShowMore(true)}
                                            className="text-primary-purple w-full absolute bottom-0 right-0 bg-light-white pl-2">...See more</span> : <span
                                            onClick={() => setShowMore(false)}
                                            className="text-primary-purple w-full absolute bottom-0 right-0 bg-light-white pl-2">...See less</span>}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Rating
                                            size="small"
                                            name="read-only-rating"
                                            value={3.5}
                                            precision={0.5}
                                            readOnly
                                        />
                                        <p>3.5</p>
                                        <p className="ml-2 text-gray-400 text-sm lg:text-base">(9 Reviews)</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            jobsInterested.map((job, index) => (
                                                <p key={index} className="capitalize bg-accent-purple rounded-lg p-1 text-xs border border-primary-purple md:text-sm">{job}</p>
                                            ))
                                        }
                                    </div>
                                    <p className="font-semibold">Portfolio</p>
                                    <div className="w-full flex hide-scroll overflow-x-scroll gap-4 ">
                                        {
                                            portfolio.map((image, i) => (
                                                <img
                                                    className="border w-full shadow-sm max-w-[300px]"
                                                    key={i}
                                                    src={image} alt={`portfolio${i}`} />
                                            ))
                                        }
                                    </div>
                                    {/* HOURLY PAY SECTION AND INVITATION BUTTON MOBILE*/}
                                    <div className="md:hidden  flex-col flex p-2 gap-4">
                                        <div className="flex justify-between shadow-md p-2 items-center border rouned-md">
                                            <p className=" flex items-center gap-1"><span className="rounded-sm border font-bold border-primary-purple p-2">$</span> Hourly Rate</p>
                                            <p className="font-semibold">$80.00</p>
                                        </div>
                                        <div className="self-center shadow-sm rounded-[30px] flex  border-slate-500 border py-2 px-4 font-semibold justify-between items-center w-fit gap-4">
                                            <div className="flex flex-col">
                                                <p className="text-primary-purple">Message {tradie}</p>
                                                <p className="text-gray-400">online</p>
                                            </div>
                                            <MessageCirclePlus className="text-primary-purple" />
                                        </div>
                                        <PurpleBtn
                                            text="Invite to Apply"
                                            upperCase='false'
                                            classes="self-center"
                                        />
                                    </div>
                                </div>
                            )
                        }
                        {/* Experience section */}
                        {
                            currentSection === 'experience' && (
                                <div className="flex flex-col h-full overflow-y-scroll">
                                    <div className="flex flex-col p-2">
                                        <div className="flex gap-2">
                                            <img
                                                className="aspect-square object-contain w-8"
                                                src={experienceIcon} alt="workExperienceIcon" />
                                            <div className="">
                                                <p className="font-semibold">Lead Plumber at Aquaflow Plumbing Solutions</p>
                                                <p className="italic text-sm">Sydney, NSW. Mar 2020 - Present</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc pl-8">
                                            <li className="text-sm lg:text-md">
                                                Completed over 200 residential plumbing jobs, including full bathroom and kitchen fit-outs
                                            </li>
                                            <li className="text-sm lg:text-md">
                                                Specialized in pipe relining, hot water system installations, and blocked drain repairs
                                            </li>
                                            <li className="text-sm lg:text-md">
                                                Provided emergency plumbing services with a 98% customer satisfaction rate
                                            </li>
                                            <li className="text-sm lg:text-md">
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
                                <div className="w-full h-full pb-8">
                                    {
                                        reviews ? (
                                            <div className="w-full p-2 rounded-md shadow-md border">
                                                <div className="px-2 flex flex-col gap-1">
                                                    <p className="font-semibold">Fast and Professional Service</p>
                                                    <p className="line-clamp-2 text-sm ">Jake showed up on time, fixed my leaking sink quickly, and left everything spotless. Definitely Contacting him again!</p>
                                                    <div className="flex justify-between px-2">
                                                        <div className="flex gap-1 ">
                                                            <img
                                                                className="w-8 object-contain aspect-square"
                                                                src={profilePic} alt="Sarah T. Bondai" />
                                                            <div className="font-semibold text-xs md:text-sm">
                                                                <p>Sarah T. Bondai</p>
                                                                {/* <p>Client</p> */}
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
                                                <div className="flex flex-col items-center justify-center p-4">
                                                    <img
                                                        className="w-24"
                                                        src={noReviews} alt="No Reviews Yet" />
                                                    <p className="text-primary-purple text-md font-semibold">No Reviews Yet</p>
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