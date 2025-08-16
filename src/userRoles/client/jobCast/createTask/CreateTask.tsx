import { useEffect, useState } from "react"
import { usePageTitle } from "../../dashboard/Dashboard"
import parseDate from "@/utils/parseDate"
import { recentJobs } from "../../home/ClientHomepage"
import StatusComp from "../../home/components/StatusComp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import QuickActions from "../../home/components/QuickActions"
import { ArrowDown, PlusSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"
import noJobImg from '@/assets/icons/createTasksJobIcon.png'
import tickImg from '@/assets/icons/createTasksTickIcon.png'


const CreateTask = () => {
    const setTitle = usePageTitle()
    useEffect(() => {
        setTitle('Create Tasks')
    }, [])

    // const recentJob = null
    const recentJob = recentJobs

    const [createTasks, setCreateTasks] = useState(false)
    const [assignedTasks, setAssignedTasks] = useState(false)

    const navigate = useNavigate()
    return (
        <div className="w-full flex flex-col gap-2 h-full p-4">
            <div className="flex justify-between items-center w-full">
                <div
                    onClick={() => navigate(-1)}
                    className="flex-center gap-2 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Go Back</p>
                </div>
                <QuickActions
                    click={() => setCreateTasks(!createTasks)}
                    classes="md:flex-row"
                    children={<PlusSquare />}
                    title="Create Task"
                />
            </div>
            {recentJob && <h3 className="self-center font-semibold md:text-xl lg:text-2xl lg:mb-2">Recently Assigned Tasks</h3>}
            <div className="flex flex-col gap-2 h-full">
                {
                    recentJob ? recentJob.map((job, index) => (
                        <div
                            key={index}
                            className="border border-slate-300 shadow-md hover:shadow-lg transition-all rounded-md p-2 md:px-4 flex flex-col w-full gap-1">
                            <div className="flex justify-between items-center w-full">
                                <p className="font-semibold max-w-[200px] md:max-w-[300px] lg:max-w-[400px] text-sm md:text-md lg:text-lg truncate">{job.description}</p>
                                <StatusComp 
                                classes="md:text-lg"
                                status={job.status} />
                            </div>
                            <p className="text-gray-500 text-sm">{job.title}</p>
                            <div className="flex gap-1 justify-between w-full ">
                                <div className="flex-center gap-1 ">
                                    <img
                                        className="w-6 md:w-10 aspect-square object-center overflow-hidden rounded-[50%]"
                                        src={job.pic}
                                        alt={job.tradie} />
                                    <p className="text-xs md:text-lg">{job.tradie}</p>
                                </div>
                                <p className="text-xs md:text-md">{parseDate(job.deadline)}</p>
                            </div>
                        </div>
                    ))
                        :
                        <div className="flex-center flex-col w-full h-full ">
                            <img src={noJobImg} alt="Assign Tasks" />
                            <div className="flex flex-col text-center">
                                <p className="font-semibold">You haven't assigned any tasks yet.</p>
                                <p className="">Start by clicking on the create tasks button to assign tasks and connect with tradies.</p>
                            </div>
                        </div>
                }
            </div>
            {/* CREATE TASKS MODAL */}
            {createTasks &&
                <div className="flex-center w-full h-full "
                >
                    <div className="absolute z-[55] top-[10%] bottom-0
                        min-w-[clamp(300px,90%,400px)] rounded-md bg-light-white m-2
                        flex-center flex-col gap-2 pb-4
                        h-full max-h-[500px]
                    ">
                        {!assignedTasks ?
                            (<>
                                <div className="grid grid-cols-3 px-4 py-2 w-full">
                                    <ArrowDown
                                        onClick={() => setCreateTasks(false)}
                                    />
                                    <p className="font-semibold">Task Details</p>
                                </div>
                                {/* INPUT SECTION */}
                                <div className="flex flex-col w-full gap-2 px-4 py-2">
                                    {/* TASK TITLE ICON */}
                                    <div className="flex flex-col gap-1 w-full ">
                                        <label
                                            className='font-semibold'
                                            htmlFor="taskTitle">Task Title:</label>
                                        <input
                                            placeholder="Enter the task title here"
                                            type="text"
                                            className="bg-slate-500/50 w-full p-2 rounded-md placeholder:text-black/60"
                                            name="taskTitle"
                                            id="taskTitle"
                                            title="Task Title" />
                                    </div>
                                    {/* TASK DESCRIPTION INPUT */}
                                    <div className="flex flex-col gap-1 w-full ">
                                        <label
                                            className='font-semibold'
                                            htmlFor="taskDescription">Task Description:</label>
                                        <textarea
                                            placeholder="Enter the task title here"
                                            className="bg-slate-500/50 w-full p-2 rounded-md placeholder:text-black/60"
                                            name="taskDescription"
                                            id="taskDescription"
                                            rows={4}
                                            title="Task Description" />
                                    </div>
                                    {/* TASK DATE INPUT */}
                                    <div className="flex flex-col gap-1 w-full ">
                                        <label
                                            className='font-semibold'
                                            htmlFor="dueDate">Due Date:</label>
                                        <input
                                            placeholder="Enter the task title here"
                                            type="date"
                                            className="bg-slate-500/50 w-full p-2 rounded-md placeholder:text-black/60"
                                            name="dueDate"
                                            id="dueDate"
                                            title="Due Date" />
                                    </div>
                                    {/*  select tradie to assign input section*/}
                                    <div className="flex flex-col gap-1 w-full ">
                                        <label
                                            className='font-semibold'
                                            htmlFor="assignTo">Assign To:</label>
                                        <select
                                            className="bg-slate-500/50 p-2 rounded-md "
                                            name="assignTo"
                                            id="assignTo">
                                            <option value="sam">Sam</option>
                                            <option value="sam">Sam</option>
                                            <option value="sam">Sam</option>
                                            <option value="sam">Sam</option>
                                            <option value="sam">Sam</option>
                                            <option value="sam">Sam</option>
                                        </select>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAssignedTasks(true)}
                                    type="button"
                                    className="bg-gradient-to-l from-primary-purple to-secondary-blue border-none shadow-sm self-center"
                                >Assign Tasks</button>
                            </>)
                            :
                            <div className="w-full h-full flex flex-col justify-end items-center gap-4 max-w-[300px]">
                                <div className="flex-end flex-col w-full h-full ">
                                    <img src={tickImg} alt="Assign Tasks" />
                                    <div className="flex flex-col text-center">
                                        <p className="font-semibold">Tasks Assigned Successfully.</p>
                                        <p className="">The task has been sent to your tradie.<br />
                                            You'll be notified when they start or complete it.
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setCreateTasks(false)}
                                    type="button"
                                    className="bg-gradient-to-l from-primary-purple to-secondary-blue border-none shadow-sm self-center"
                                >Back</button>
                            </div>
                        }
                    </div>
                    <div
                        onClick={() => { setCreateTasks(false) }}
                        className="flex h-full top-0 bottom-0 left-0 right-0 bg-slate-500/50 w-full absolute z-50">
                    </div>
                </div>


            }
        </div>
    )
}

export default CreateTask