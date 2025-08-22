import { useEffect } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import { useNavigate } from "react-router-dom"
import parseDate from "@/utils/parseDate"

const jobsPosted = [
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'active',
        bids: 5
    },
    {
        title: 'Fix leaking pipe',
        description: 'Need someone to fix a leaky pipe',
        budget: 45,
        posted: new Date(),
        status: 'closed',
        bids: 5
    },
]

const MyJobs = () => {
    const setTitle = usePageTitle()
    const navigate = useNavigate()

    useEffect(() => {
        setTitle('My Jobs')
    }, [])

    return (
        <div className="p-4">
            <div className="flex flex-col-reverse gap-2 md:flex-row items-center justify-between">
                <p className="font-semibold md:text-xl">My Posted Jobs</p>
                <div className="flex gap-2 flex-wrap justify-center">
                    <button type="button" onClick={() => navigate('../home/post-jobs')} className="p-1 bg-accent-purple text-white rounded-md" >Post New Job</button>
                    <div className="flex-center border bg-gray-300 p-1 rounded-md">
                        <p>Status:</p>
                        <select title="status" className="border-none bg-gray-300" name="status" id="status">
                            <option value="all">All</option>
                            <option value="open">Open</option>
                            <option value="close">Close</option>
                        </select>
                    </div>
                    <div className="flex-center border bg-gray-300 p-1 rounded-md">
                        <p>Sort:</p>
                        <select title="sort" className="border-none bg-gray-300" name="sort" id="sort">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            {/* <option value="close">Close</option> */}
                        </select>
                    </div>
                </div>
            </div>
            {/* POSTED JOBS SECTION */}
            <div className="flex flex-col gap-4 p-2 w-full justify-between ">
                {
                    jobsPosted.map((job, index) => (
                        <div className="w-full gap-4  flex shadow-md p-2 " key={index}>
                            <div className="w-1/2 flex flex-col justify-between gap-1">
                                <p className="font-semibold text-md md:text-xl">{job.title}</p>
                                <p className="w-full text-sm md:text-md md:truncate line-clamp-2">{job.description}</p>
                                <p
                                    className={`
                                    ${job.status === 'active' && 'bg-green-200'}
                                    ${job.status === 'closed' && 'bg-red-400'}
                                w-fit text-sm md:text-md rounded-md p-1`}>{job.status}</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                            <div className='flex flex-col '>
                            <p className='text-sm md:text-md'>Bids: {job.bids}</p>
                            <p className='text-sm md:text-md '>Posted:<br className='md:hidden'/> {parseDate(job.posted)}</p>
                            <div className="flex gap-2 text-secondary-blue md:gap-4 text-sm">
                                <p>Details</p>
                                <p>Message</p>
                            </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MyJobs