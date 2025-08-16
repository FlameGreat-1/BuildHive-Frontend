import parseDate from "@/utils/parseDate";
import { useState } from "react";


interface JobDetailsProps {
    showJobDetails: boolean;
    setShowJobDetailsFalse: () => void;
    showDetails: (e: React.MouseEvent) => void
}

const job = {
    title: 'Fix Leaky Pipe',
    description: 'Need a Plumber to fix a leaky pipe in the kitchen',
    budget: 200,
    deadline: new Date(),
    location: 'New Jersey',
    attachments: ['pipe.jpg', 'pipe2.jpg'],
    bids: [
        {
            name: 'John Smith',
            bid: 300,
            proposedTimeline: '2 days'
        },
        {
            name: 'John Smith',
            bid: 300,
            proposedTimeline: '2 days'
        },
        {
            name: 'John Smith',
            bid: 300,
            proposedTimeline: '2 days'
        },
        {
            name: 'John Smith',
            bid: 300,
            proposedTimeline: '2 days'
        },
    ]

}

const PostedJobDetail = ({ showJobDetails, setShowJobDetailsFalse, showDetails }: JobDetailsProps) => {

    const [assigned,setAssigned]=useState(false)

    return (
        <div
            onClick={showDetails}
            id="detailsCover"
            className={`${showJobDetails ? 'flex' : 'hidden'} absolute w-full h-full flex-center bg-slate-500/50 top-0 bottom-0 left-0 right-0 p-4`}>
            <div
                onClick={showDetails}
                id="messagePopup"
                className="bg-light-white min-w-[clamp(200px,100%,400px)] h-full border max-h-[600px] overflow-scroll border-black rounded-md space-y-2 p-4 flex flex-col hide-scroll">
                <button
                    onClick={() =>{ setShowJobDetailsFalse()}}
                    type="button"
                    className="bg-accent-purple p-1 text-white  shadow-sm focus:shadow-md self-end w-fit">Close</button>
                <p className="font-semibold sm:text-lg md:text-xl">{job.title}</p>
                <p>{job.description}</p>
                <div className="flex flex-col p-4">
                    <p className=""><b>Budget:</b> ${job.budget}</p>
                    <p className=""><b>Deadline:</b> {parseDate(job.deadline)}</p>
                    <p className=""><b>Location:</b> {job.location}</p>
                    <div className="">
                        <p>Attachments:</p>
                        <ul className="flex list-disc flex-col ml-4 text-sm">
                            {job.attachments.map((a, index) => (
                                <li key={index}>{a}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p><b>Bids:</b> {job.bids.length}</p>
                    <div className="flex flex-col gap-2">
                        {
                            !assigned ? job.bids.map((bid, i) => (
                                <div
                                    key={i}
                                    className="bg-slate-500/40 w-full flex-col gap-2 p-2 rounded-md shadow-md text-sm">
                                    <p>{bid.name}</p>
                                    <p>Bid: {bid.bid}</p>
                                    <p>Proposed timeline: {bid.proposedTimeline}</p>
                                    <button
                                    onClick={()=>setAssigned(true)}
                                        type="button"
                                        className="bg-accent-purple p-1 text-white  shadow-sm focus:shadow-md w-fit">Accept Bid</button>
                                </div>
                            ))
                                :
                                <div>
                                    <p>Job assigned to John Doe</p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostedJobDetail