import { useState } from "react";
import profilePic from '@/assets/images/profilePic.png'
import { Clipboard, ClipboardList, Clock, Mail, MessageSquare, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faLocationPin, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import parseDate from "@/utils/parseDate";
import GoBackBtn from "@/generalComponents/goBackBtn";



const JobDetails = () => {

    const [details, setDetails] = useState({
        status: 'active'
    })

    const cancelJob = () => {
        setDetails({ status: 'closed' })
    }
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="flex flex-col w-full p-4 gap-2">
            <GoBackBtn />
            <div className="flex flex-col w-full gap-2 rounded-md shadow-md border p-4">
                <div className="flex justify-between">
                    <h3 className="font-semibold text-md md:text-lg">Install Bathroom Fixtures </h3>
                    <p className={`${details.status === 'active' || details.status === 'in progress' ? 'bg-primary-purple text-white' : 'bg-gray-300'} capitalize border p-1 px-2 rounded-[20px] text-sm md:text-md`}>{details.status ?? 'In Progress'}</p>
                </div>
                <p><b>Plumbing:</b> Bathroom Renovation</p>
                <p><b>Progress:</b> Tiling work is 70% complete.Fixtures to be installed next week.</p>
            </div>
            {/* SECOND SECTION */}
            <div className="flex flex-col w-full gap-2 rounded-md shadow-md border p-4">
                <p className="font-semibold">Complete Bathroom Renovation</p>
                <div className="flex flex-wrap gap-2">
                    <p className="bg-gray-400 rounded-lg p-1 px-2 ">Renovation</p>
                </div>
                <div className="relative">
                    <p className={`${showMore ? 'overflow-y-scroll hide-scroll' : 'line-clamp-2'}`}>
                        Full renovation of a main bathroom including removal of old fixtures, new tiling for floor and walls, installation of a new shower, bathtub,
                    </p>
                    {!showMore ? <span
                        onClick={() => setShowMore(true)}
                        className="text-primary-purple text-sm w-full absolute bottom-0 right-0 bg-light-white pl-2">...See more</span>
                        :
                        <span
                            onClick={() => setShowMore(false)}
                            className="text-primary-purple text-sm w-full absolute bottom-0 right-0 bg-light-white pl-2">...See less</span>
                    }
                </div>
            </div>
            {/* THIRD SECTION */}
            <div className="flex flex-col w-full gap-4 rounded-md shadow-md border p-4">
                <div className="flex gap-4 w-full">
                    <img className="object-center object-contain w-16 rounded-[50%] " src={profilePic} alt="" />
                    <div className="flex flex-col w-full max-w-[90%]">
                        <p className="font-semibold w-full truncate  overflow-hidden max-w-[80%]">Jake Paul - Pro Plumbing & Tiling</p>
                        <p className="flex items-center gap-2"><Phone size={16} fill="black" /> +12 234 5677</p>
                        <div className="flex items-center w-full gap-2 truncate max-w-[80%]"><Mail /> <p className="truncate">jakepaul@fakemail.com</p></div>
                    </div>
                </div>
                <p className="flex gap-2 items-center w-full bg-primary-purple p-1 px-2 rounded-md justify-center text-white"><MessageSquare fill="white" size={16} /> Message Tradie</p>
            </div>
            {/* FOURTH SECTION */}
            <div className="flex flex-col gap-2 rounded-md shadow-md border p-4">
                <p>Site Address</p>
                <p><FontAwesomeIcon icon={faLocationPin} className=" text-black" /> 123 Main St, Sydney</p>
            </div>
            {/* FIFTH SECTION */}
            <div className="flex flex-col gap-2 rounded-md shadow-md border p-4">
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <div className="flex flex-col">
                        <p className="font-semibold">Start Date:</p>
                        <p>{parseDate(new Date())}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <div className="flex flex-col">
                        <p className="font-semibold">Start Date:</p>
                        <p>{parseDate(new Date())}</p>
                    </div>
                </div>
                <div className="flex flex-col ml-4">
                    <p>Budget:</p>
                    <p>$1,200</p>
                </div>
            </div>
            {/* SIXTH SECTION */}
            <div className="flex flex-col gap-2 rounded-md shadow-md border p-4">
                <p>Materials & Hours</p>
                <div className="flex gap-2">
                    <ClipboardList />
                    <div className="flex flex-col">
                        <p className="font-semibold">Materials Used:</p>
                        <div className="text-sm md:text-md">
                            <p>New toilet</p>
                            <p>Vanity unit (Oak finish)</p>
                            <p>Ceramic sink & Faucet</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Clock />
                    <div className="flex flex-col">
                        <p className="font-semibold">Hours worked</p>
                        <p>18 hours <span className="italic text-sm md:text-md">(As of {parseDate(new Date())})</span></p>
                    </div>
                </div>
            </div>
            {/* SEVENTH SECTION */}
            <div className="flex flex-col gap-2 rounded-md shadow-md border p-4 w-full">
                <p className="font-semibold">Notes & Attachments</p>
                <div className="flex items-start gap-2">
                    <Clipboard size={50} />
                    <div className="flex flex-col">
                        <p className="font-semibold">Job Notes</p>
                        <p className="text-sm md:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sit dicta nostrum dolores eius nemo perspiciatis, harum quis saepe nobis.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 rounded-md shadow-md border p-4 w-full max-w-[550px]">
                    <p><FontAwesomeIcon icon={faPaperclip} /> Attachments (4)</p>
                    {/* <div className={`max-w-full bg-white overflow-hidden  p-4 max-h-[60vh] `}>
                            {<img src={licenceDetails.licenceDetails?.license ?? '/'} alt="Uploaded Image" className="w-full object-cover max-h-[60dvh]" />}
                            {uploadedFile && uploadedFile.type ==='application/pdf' && <embed src={preview} type="application/pdf" width='100%' height='300px' className="overflow-hidden" />}
                        </div> */}

                    {/* PREVIEW SECTION */}
                    <div className="flex w-full gap-4  hide-scroll overflow-x-auto">
                        <div className="flex flex-col items-center">
                            <p className="w-48 h-24 bg-slate-500 rounded-lg"></p>
                            <p>document</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="w-48 h-24 bg-slate-500 rounded-lg"></p>
                            <p>document</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="w-48 h-24 bg-slate-500 rounded-lg"></p>
                            <p>document</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p className="w-48 h-24 bg-slate-500 rounded-lg"></p>
                            <p>document</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* BUTTONS SECTION */}
            <div className="flex flex-wrap justify-center gap-2 rounded-md shadow-md border p-4">
                <button type="button" className={`${details.status !== 'active' && 'pointer-events-none opacity-50'} bg-primary-purple text-white w-full max-w-[300px] `}>Edit Job Details</button>
                <button type="button" className="text-black bg-light-white w-full max-w-[300px] border-black border">View Quotes</button>
                <button
                    onClick={cancelJob}
                    type="button"
                    className="text-black bg-red-500 w-full max-w-[300px] border-black border">Cancel Job</button>
                {/* <button type="button">Job</button> */}
            </div>
        </div>
    )
}

export default JobDetails