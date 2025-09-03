import { type FC, useState } from "react";
import profilePic from '@/assets/images/profilePic.png'

type Job = {
    id: number;
    title: string;
    assignee: string;
    dueInDays: number;
    price: number;
    status: "In Progress" | "Completed" | "Pending";
};

const jobs: Job[] = [
    { id: 1, title: "Fix leaking pipe", assignee: "Jake Doe", dueInDays: 3, price: 500, status: "In Progress" },
    { id: 2, title: "Install new sink", assignee: "Jane Smith", dueInDays: 7, price: 750, status: "Pending" },
    { id: 3, title: "Repair AC unit", assignee: "Mike Ross", dueInDays: 1, price: 1200, status: "In Progress" },
    { id: 4, title: "Paint living room", assignee: "Rachel Zane", dueInDays: 5, price: 900, status: "Completed" },
];

const JobsInProgress: FC = () => {
    const [filter, setFilter] = useState<"All" | Job["status"]>("All");
    const [sort, setSort] = useState<"None" | "Due" | "Price">("None");
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [message, setMessage] = useState("");

    const filteredJobs = jobs.filter((job) => filter === "All" || job.status === filter);

    const sortedJobs = [...filteredJobs].sort((a, b) => {
        if (sort === "Due") return a.dueInDays - b.dueInDays;
        if (sort === "Price") return a.price - b.price;
        return 0;
    });

    const handleSend = () => {
        console.log(`Message to ${selectedJob?.assignee}:`, message);
        setMessage("");
        setSelectedJob(null);
    };

    return (
        <div className="p-6 flex flex-col gap-6">
            {/* Overview */}
            <div className="grid grid-cols-2 justify-center text-center sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-2xl border shadow p-4 flex flex-col items-center">
                    <p className="text-sm text-gray-500">Total Active Jobs</p>
                    <p className="text-2xl font-bold">{jobs.length}</p>
                </div>
                <div className="bg-white rounded-2xl border shadow p-4 flex flex-col items-center">
                    <p className="text-sm text-gray-500">Jobs Due Soon</p>
                    <p className="text-2xl font-bold">{jobs.filter((j) => j.dueInDays <= 3).length}</p>
                </div>
                <div className="bg-white rounded-2xl border shadow p-4 flex flex-col items-center">
                    <p className="text-sm text-gray-500">Overdue Jobs</p>
                    <p className="text-2xl font-bold">{jobs.filter((j) => j.dueInDays < 0).length}</p>
                </div>
                <div className="bg-white rounded-2xl border shadow p-4 flex flex-col items-center hidden">
                    <p className="text-sm text-gray-500">Total Active Jobs</p>
                    <p className="text-2xl font-bold">
                        ${jobs.reduce((sum, job) => sum + job.price, 0).toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Job List */}
            <div>
                <div className="flex flex-wrap justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Job List</h2>
                    <div className="flex gap-2">
                        {/* Filter */}
                        <select
                            title="filter"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value as typeof filter)}
                            className="border rounded-lg px-3 py-1 text-sm"
                        >
                            <option value="All">All</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                        </select>

                        {/* Sort */}
                        <select
                            title="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value as typeof sort)}
                            className="border rounded-lg px-3 py-1 text-sm"
                        >
                            <option value="None">Sort by</option>
                            <option value="Due">Due Date</option>
                            <option value="Price">Price</option>
                        </select>
                    </div>
                </div>

                {/* JOB LIST SECTION */}
                <div className="flex flex-col gap-4">
                    {sortedJobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-2xl border shadow p-4 flex flex-col gap-2">
                            <div className="justify-between flex flex-wrap">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={profilePic}
                                        alt={job.assignee}
                                        className="w-10 h-10 rounded-[50%]"
                                    />
                                    <div>
                                        <p className="font-semibold">{job.title}</p>
                                        <p className="text-sm text-gray-500">{job.assignee}</p>
                                        <p className="text-xs text-gray-400">Due in {job.dueInDays} days</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-start mt-2">
                                    <span className="text-sm text-gray-500">{job.status}</span>
                                    <span className="text-sm font-medium">${job.price} Fixed Price</span>
                                </div>
                            </div>

                            <div className="flex justify-start gap-2 mt-2">
                                <button
                                    type="button"
                                    className="px-3 py-1 rounded-lg border border-gray-300 bg-light-white text-gray-700 text-sm hover:bg-gray-100"
                                    onClick={() => setSelectedJob(job)}
                                >
                                    Message
                                </button>
                                <button
                                    type="button"
                                    className="px-3 py-1 rounded-lg bg-accent-purple text-white text-sm hover:bg-accent-purple">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Modal */}
            {selectedJob && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Send Message to {selectedJob.assignee}
                        </h3>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full border rounded-lg px-3 py-2 mb-3"
                        />
                        <textarea
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 h-32 mb-4"
                        />
                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                className="px-3 py-1 rounded-lg border border-gray-300 bg-light-white text-gray-700 text-sm hover:bg-gray-100"
                                onClick={() => setSelectedJob(null)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="px-3 py-1 rounded-lg bg-accent-purple text-white text-sm hover:bg-accent-purple"
                                onClick={handleSend}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobsInProgress;