import { useEffect } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import GoBackBtn from "@/generalComponents/goBackBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import JobComponent from "./components/jobComponent"
import { jobs } from "./utils"
import { Link } from "react-router-dom"

const JobManagement = () => {

    const setTitle = usePageTitle()

    useEffect(() => {
        setTitle('Manage Jobs')
    }, [])

    return (
        <div className="p-4 flex flex-col items-center gap-2">
            <div className="flex justify-between w-full">
                <GoBackBtn />
                <Link to='../home/post-jobs'>
                    <p className="font-semibold md:text-lg">Create New Jobs <FontAwesomeIcon icon={faPlusCircle} className="text-primary-purple"
                        size="xl"
                    /></p>
                </Link>
            </div>
            <h3 className="w-full font-bold text-md md:text-xl ml-4">Job Management</h3>
            <div className="flex flex-wrap gap-2 w-full justify-center md:justify-between">
                {
                    jobs.map((job, i) => (
                        <JobComponent key={i} {...job} />
                    ))
                }
            </div>
        </div>
    )
}

export default JobManagement