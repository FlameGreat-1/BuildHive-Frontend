import { BarChart3, Calendar, ClipboardList, MailCheck, } from "lucide-react"
import QuickActions from "./components/QuickActions"
import tradiePic from '@/assets/images/profilePic.png'
import StatusComp from "./components/StatusComp"
import parseDate from "@/utils/parseDate"
import { usePageTitle } from "../dashboard/Dashboard"
import { useEffect } from "react"
import { Link } from "react-router-dom"


const dashboardInfo = [
    {
        info: 4,
        title: 'Jobs in Progress',
        link: 'jobs-in-progress'
    },
    {
        info: 10,
        title: 'Bids Submitted',
        link: 'bids-submitted'
    },
    {
        info: `$${1111}`,
        title: 'Total Earnings',
        link: ''
    },
]

export const recentJobs = [
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'Pending',
        deadline: new Date(),
    },
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'In Progress',
        deadline: new Date(),
    },
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'Completed',
        deadline: new Date(),
    },
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'Pending',
        deadline: new Date(),
    },
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'In Progress',
        deadline: new Date(),
    },
    {
        tradie: 'John Doe',
        pic: tradiePic,
        description: 'Fix bathroom door',
        title: 'Carpentry',
        location: 'Canberra',
        status: 'Completed',
        deadline: new Date(),
    },
]

const quickActions = [
    {
        icon: <MailCheck />,
        title: 'Bids',
        link: "bids-submitted"
    },
    {
        icon: <ClipboardList />,
        title: 'My Jobs',
        link: "jobs-in-progress"
    },
    {
        icon: <Calendar />,
        title: 'Calender',
    },
    {
        icon: <BarChart3 />,
        title: 'Analytics'
    },
]

const TradieHome = () => {
    const setTitle = usePageTitle()
    useEffect(() => {
        setTitle('Dashboard')
    }, [])

    return (
        <div className="flex flex-col gap-4 md:gap-8 p-4 ">
            {/* <h2 className='text-lg md:text-2xl font-bold'>Dashboard</h2> */}
            <div className="grid w-full shadow-md py-4 sm:p-4 md:p-8 md:place-items-center  grid-cols-3 gap-2">
                {
                    dashboardInfo.map((info, index) => (
                        <div
                            key={index}
                            className="w-[100%] rounded-md shadow-lg glassmorphic bg-light-white/50 hover:border-black border hover:bg-accent-purple/40   p-2 text-center max-w-[150px] place-content-center justify-self-center aspect-square">
                            <Link to={info.link}>
                                <p className=" text-sm md:text-xl">{info.title}</p>
                                <p className="font-bold text-md md:text-2xl">{info.info}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="space-y-4 shadow-md px-4 py-4 md:py-8">
                <h3 className="font-semibold text-lg md:text-2xl font-sans justify-self-center">Quick Actions</h3>
                <div className="grid md:place-items-center grid-cols-4 gap-2">
                    {
                        quickActions.map((action, index) => (
                            <QuickActions
                                key={index}
                                children={action.icon}
                                title={action.title}
                                link={action.link}
                            />
                        ))
                    }
                </div>
            </div>
            {/* MOBILE RECENT JOBS SECTION */}
            <div className="md:hidden w-full ">
                <h3 className="font-semibold text-lg md:text-2xl font-sans mb-2">Recent Jobs</h3>
                <div className="flex flex-col gap-2 ">

                    {
                        recentJobs.map((job, index) => (
                            <div
                                key={index}
                                className="border border-slate-300 shadow-md hover:shadow-lg transition-all rounded-md p-2 flex flex-col w-full gap-1">
                                <div className="flex justify-between items-center w-full">
                                    <p className="font-semibold max-w-[200px] md:max-w-[200px] text-sm truncate">{job.description}</p>
                                    <StatusComp status={job.status} />
                                </div>
                                <p className="text-gray-500 text-sm">{job.title}</p>
                                <div className="flex gap-1 justify-between w-full ">
                                    <div className="flex-center gap-1 ">
                                        <img
                                            className="w-6 aspect-square object-center overflow-hidden rounded-[50%]"
                                            src={job.pic}
                                            alt={job.tradie} />
                                        <p className="text-xs">{job.tradie}</p>
                                    </div>
                                    <p className="text-xs">{parseDate(job.deadline)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* DESKTOP RECENT JOBS SECTION */}
            <div className="hidden md:block w-full">
                <h3 className="font-semibold text-lg md:text-2xl font-sans">Recent Jobs</h3>
                <table className='w-full p-2 border-separate border-spacing-y-3
                '>
                    <thead>
                        <tr className="text-sm lg:text-xl">
                            <th>
                                Title
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Location
                            </th>
                            <th>
                                Deadline
                            </th>
                        </tr>
                    </thead>
                    <tbody className="gap-2">
                        {
                            recentJobs.map((job, index) => (
                                <tr
                                    key={index}
                                    className="shadow-md ring-2 ring-gray-400 hover:shadow-lg focus:shadow-lg rounded-md  ">
                                    <td className='text-center items-center p-2'>
                                        <div className="flex-start flex-col">
                                            <p className="font-semibold max-w-[200px] truncate"
                                                title={job.description}
                                            >{job.description}</p>
                                            <div className='flex-center  gap-2 p-2'>
                                                <img
                                                    className="min-w-8 w-8 aspect-square object-center overflow-hidden rounded-[50%]"
                                                    src={job.pic}
                                                    alt={job.tradie} />
                                                <div className="">
                                                    <p className="text-sm text-nowrap">{job.tradie}</p>
                                                    <p className="text-gray-500 text-xs">{job.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center items-center justify-center '>
                                        <div className="flex items-center flex-col  w-full">
                                            <StatusComp status={job.status} />
                                        </div>
                                    </td>
                                    <td className='text-center items-center'>
                                        {job.location}
                                        {/* <p className="flex-center w-full">
                                        </p> */}
                                    </td>
                                    <td className='text-center items-center text-sm lg:text-base'>
                                        <p>{parseDate(job.deadline)}</p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TradieHome