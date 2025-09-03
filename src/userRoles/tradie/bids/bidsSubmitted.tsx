import { useEffect } from "react";
import { usePageTitle } from "../dashboard/Dashboard";
import  { BidCard } from "./components/BidCard";
// import { useNavigate } from "react-router-dom";

type BidStatus = "Accepted" | "Pending" | "Rejected";

export interface BidCardProps {
    title: string;
    category: string;
    price: string;
    user: string;
    location: string;
    status: BidStatus;
    time: string;
    selected?: boolean;
}




const BidsSubmitted = () => {

    const setPageTitle = usePageTitle()
    useEffect(()=>{
        setPageTitle('Bids Submitted')
    },[])



    return (
        <div className="p-6 flex-1 overflow-auto">
            <h2 className="text-xl font-semibold mb-2">Bids Submitted</h2>
            <p className="text-sm text-slate-600 mb-6">
                Track the status of your submitted bids and proposals
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <BidCard
                    title="Fix leaking pipe"
                    category="Plumbing"
                    price="100"
                    user="John Doe"
                    location="123 Main St, Sydney"
                    status="Accepted"
                    time="1 week ago"
                />
                <BidCard
                    title="Fix leaking pipe"
                    category="Plumbing"
                    price="100"
                    user="John Doe"
                    location="123 Main St, Sydney"
                    status="Pending"
                    time="7 hours ago"
                />
                <BidCard
                    title="Fix leaking pipe"
                    category="Plumbing"
                    price="100"
                    user="John Doe"
                    location="123 Main St, Sydney"
                    status="Rejected"
                    time="1 hour ago"
                />
                <BidCard
                    title="Fix leaking pipe"
                    category="Plumbing"
                    price="100"
                    user="John Doe"
                    location="123 Main St, Sydney"
                    status="Accepted"
                    time="3 days ago"
                    
                />
            </div>
        </div>
    );
};

export default BidsSubmitted;