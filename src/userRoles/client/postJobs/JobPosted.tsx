import { useEffect } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import jobLiveImg from '@/assets/images/jobLive.webp'
import jobLiveIcon from '@/assets/icons/jobTypeIcon.svg'
import PurpleBtn from "@/generalComponents/purpleBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"

const JobPosted = () => {
    const setTitle = usePageTitle()
    const navigate = useNavigate()

    useEffect(() => {
        setTitle('Job Live')
    }, [])

    return (
        <div className="flex flex-col md:flex-row w-full p-4">
            <img src={jobLiveImg} alt="Job is Live image" className="w-full md:w-1/2" />
            <div className="w-full md:w-1/2 flex flex-col gap-1 md:gap-2">
                <h3 className="text-primary-purple text-md md:text-xl lg:text-2xl font-semibold text-center">Your Job Has Been Posted</h3>
                <p className="md:text-lg text-center ">Tradies can now view and apply to your job. You'll be notified as applications come in.</p>
                <div className="bg-white border rounded-md flex flex-col gap-1 p-4 items-center md:items-start" >
                    <p>Kitchen Renovation, Brusbane</p>
                    <div className="flex gap-2 items-center">
                        <img src={jobLiveIcon} alt="Job is Live" />
                        <p>Carpentry & Plumbing</p>
                    </div>
                    <p>Posted on: <b>July 15, 2025</b></p>
                    <p>Job ID: <b>JDG89EUW0</b></p>
                </div>
                <div className="flex flex-col gap-1 mt-4 self-center flex-center">
                    <PurpleBtn
                        upperCase="false"
                        text="View My Jobs"
                        click={()=>navigate('../home/job-management')}
                    />
                    <Link 
                    to={'../home/browse-tradies'}
                    className="text-primary-purple flex-center gap-1">
                        <p>Browse Tradies</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default JobPosted