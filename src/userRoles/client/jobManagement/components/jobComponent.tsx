import parseDate from "@/utils/parseDate";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface props {
    id:number;
    title: string;
    status: string;
    category: string;
    invoiced: boolean;
    materialsOrdered: boolean;
    postedOn: Date;
}


const JobComponent = ({ title, status, category, invoiced, materialsOrdered, postedOn, id }: props) => {
    return (
        <div className="p-4 flex flex-col gap-3 w-full max-w-[300px] md:max-w-[280px] shadow-md rounded-md border " >
            <div className="flex justify-between lg:gap-4">
                <p className="font-bold text-primary-purple text-lg  md:text-xl">{title}</p>
                <p className={`${status === 'active' || status === 'in progress' ? 'bg-accent-purple/80 text-white' : 'bg-gray-300' } capitalize border p-1 px-2 rounded-[20px] glassmorphic text-sm md:text-md`}>{status}</p>
            </div>
            <p>{category}</p>
            <p><FontAwesomeIcon icon={faCalendar} /> {parseDate(postedOn)}</p>
            <div className="flex gap-4">
                <p className={`${invoiced ? 'text-white bg-accent-purple/80' : 'bg-gray-300'} border w-fit p-1 px-2 rounded-[20px] glassmorphic text-sm md:text-md `}>Invoiced</p>
                <p className={`${materialsOrdered ? 'text-white bg-accent-purple/80' : 'bg-gray-300'} border w-fit p-1 px-2 rounded-[20px] glassmorphic text-sm md:text-md `}>Materials Ordered</p>
            </div>
            <Link to={`../home/job-details/${id}`}><p className="text-primary-purple justify-self-center">View details</p></Link>
        </div>
    )
}

export default JobComponent