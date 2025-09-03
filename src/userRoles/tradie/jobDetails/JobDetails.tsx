import { useEffect, type FC } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import profilePic from '@/assets/images/profilePic.png'
import GoBackBtn from "@/generalComponents/goBackBtn";
import { usePageTitle } from "../dashboard/Dashboard";

type JobDetailsProps = {
  job?: {
    title: string;
    assignee: string;
    role: string;
    price: number;
    dueDate: string;
    location: string;
    description: string;
    attachments: string[];
  };
};

const JobDetails: FC<JobDetailsProps> = ({
  job = {
    title: "Fix leaking pipe",
    assignee: "Jake Doe",
    role: "Plumbing",
    price: 500,
    dueDate: "Sep 3",
    location: "123 Main St, Sydney",
    description: `We’ve noticed a water leak under the kitchen sink that appears 
    to be coming from one of the main pipes. The leak is small but continuous, and 
    water is pooling inside the cabinet.

    We need a qualified plumber to:
    • Inspect and locate the exact source of the leak
    • Replace or repair the damaged pipe/fittings
    • Ensure no further leaks and test water flow`,
    attachments: ["image1.jpeg", "image2.jpeg"],
  },
}) => {

  const setTitle = usePageTitle()
  useEffect(()=>{
    setTitle(job.title)
  },[])
  return (

    <div className="p-6 w-full mx-auto">
      <div className="flex justify-between">
        {/* Job Title */}
        <h1 className="text-xl md:text-2xl font-semibold mb-4">{job.title}</h1>
        <GoBackBtn />
      </div>

      {/* Assignee */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <div className="flex items-center gap-3">
          <img
            src={profilePic}
            alt={job.assignee}
            className="w-14 h-14 rounded-[50%] object-center"
          />
          <div>
            <p className="font-medium">{job.assignee}</p>
            <p className="text-sm text-gray-500">{job.role}</p>
          </div>
        </div>
        <button type="button" className="px-4 py-2 rounded-lg border bg-light-white border-gray-300 text-gray-700 text-sm hover:bg-gray-100">
          Message
        </button>
      </div>

      {/* Price & Due Date */}
      <div className="bg-white rounded-2xl border shadow p-4 mb-6 flex flex-col gap-2">
        <p className="text-gray-500 text-sm">Fixed Price</p>
        <p className="text-xl font-semibold">${job.price}</p>
        <p className="text-gray-500 text-sm">Due: {job.dueDate}</p>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Job Description</h2>
        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Attachments */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Attachments</h2>
        <ul className="list-disc pl-5 space-y-1">
          {job.attachments.map((file, idx) => (
            <li key={idx}>
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mark Complete Button */}
      <button type="button" className="w-full py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 flex items-center justify-center gap-2">
        <CheckCircle className="w-5 h-5" />
        Mark Complete
      </button>
    </div>
  );
};

export default JobDetails;