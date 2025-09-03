import { useNavigate } from "react-router-dom";
import type { BidCardProps } from "../bidsSubmitted";
import { MapPin, Clock, User } from "lucide-react";


const statusColors = {
    Accepted: "text-green-600 bg-green-100",
    Pending: "text-blue-600 bg-blue-100",
    Rejected: "text-red-600 bg-red-100",
};



export const BidCard = ({
    title,
    category,
    price,
    user,
    location,
    status,
    time,

}: BidCardProps) => {

    const navigate = useNavigate()

    
    return (

        <div
            className={`border rounded-md p-4 flex flex-col justify-between gap-2 w-full max-w-[200px] 2xs:max-w-[300px] hover:border-blue-400 border-slate-200 `}
        >
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <span className="bg-purple-200 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {category}
                    </span>
                </div>
                <p className="font-semibold">${price}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <User size={16} />
                <p>{user}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <p>{location}</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <span
                    className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}
                >
                    {status}
                </span>
                <Clock size={16} className="text-slate-400" />
                <p className="text-xs text-slate-500">{time}</p>
            </div>

            <button 
            onClick={()=>navigate(`../home/bids/${title.split(' ').join('-').toLowerCase()}`)}
            type="button" 
            className="mt-2 w-fit border-black bg-light-white border rounded-md text-sm py-1 hover:bg-slate-100 transition">
                View Details
            </button>
        </div>
    );
};
