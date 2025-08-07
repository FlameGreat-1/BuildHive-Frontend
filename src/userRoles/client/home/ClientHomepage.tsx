import { BarChart3, Briefcase, Plus, PlusSquare } from "lucide-react"
import QuickActions from "./components/QuickActions"
import tradiePic from '@/assets/images/profilePic.png'
import StatusComp from "./components/StatusComp"
import parseDate from "@/utils/parseDate"


const dashboardInfo = [
    {
        info: 4,
        title: 'Jobs in Progress'
    },
    {
        info: 10,
        title: 'Completed Jobs'
    },
    {
        info: `$${1111}`,
        title: 'Total Spent'
    },
]

const recentJobs = [
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
        icon: <Briefcase />,
        title: 'Workers'
    },
    {
        icon: <Plus />,
        title: 'Post Jobs'
    },
    {
        icon: <PlusSquare />,
        title: 'Create Task'
    },
    {
        icon: <BarChart3 />,
        title: 'Reports'
    },
]

const ClientHome = () => {

    return (
        <div className="flex flex-col gap-4 p-4 ">
            <h2 className='text-lg md:text-2xl font-bold'>Dashboard</h2>
            <div className="grid grid-cols-3 gap-2">
                {
                    dashboardInfo.map((info, index) => (
                        <div
                            key={index}
                            className="min-w-[50px] rounded-md glassmorphic bg-primary-purple/30 text-center max-w-[180px] place-content-center aspect-square">
                            <p className="font-semibold text-md md:text-2xl">{info.info}</p>
                            <p className="text-gray-600">{info.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold md:text-xl">Quick Actions</h3>
                <div className="grid grid-cols-4 gap-2">
                    {
                        quickActions.map((action, index) => (
                            <QuickActions
                                key={index}
                                children={action.icon}
                                title={action.title}
                            />
                        ))
                    }
                </div>
            </div>
            {/* MOBILE RECENT JOBS SECTION */}
            <div className="md:hidden w-full ">
                <h3 className="font-semibold md:text-xl">Recent Jobs</h3>
                <div className="flex flex-col gap-2 ">

                    {
                        recentJobs.map((job, index) => (
                            <div
                                key={index}
                                className="ring-[3px] ring-gray-400/50 rounded-md p-2 flex flex-col w-full gap-1">
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
                                        <p className="text-xs">Assigned to {job.tradie}</p>
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
                <h3 className="font-semibold md:text-xl">Recent Jobs</h3>
                <table className='w-full p-2 border-separate border-spacing-y-3
                '>
                    <thead>
                        <tr>
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
                                    className="ring-2 ring-gray-400 hover:ring-secondary-blue focus:ring-secondary-blue rounded-md  ">
                                    <td className='text-center items-center p-2'>
                                        <div className='flex-center  gap-1 p-2'>
                                            <img
                                                className="w-8 aspect-square object-center overflow-hidden rounded-[50%]"
                                                src={job.pic}
                                                alt={job.tradie} />
                                            <div className="">
                                                <p className="text-xs">{job.tradie}</p>
                                                <p className="text-gray-500">{job.title}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center items-center justify-center'>
                                        <div className="flex items-center flex-col  w-full">
                                            <p className="font-semibold max-w-[200px] truncate">{job.description}</p>
                                            <StatusComp status={job.status} />
                                        </div>
                                    </td>
                                    <td className='text-center items-center'>
                                        {job.location}
                                        {/* <p className="flex-center w-full">
                                        </p> */}
                                        </td>
                                    <td className='text-center items-center'>
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

export default ClientHome