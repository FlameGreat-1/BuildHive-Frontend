import BuildHiveLoader from "@/generalComponents/BuildHiveLoader"
import { SlidersHorizontal, X } from "lucide-react"
import React, { useEffect, useState } from "react"
import { usePageTitle } from "../dashboard/Dashboard"
import profilePhoto from '@/assets/images/profilePic.png'
import StatusComp from "../home/components/StatusComp"
import parseDate from "@/utils/parseDate"
import MapButton from "./components/MapButton"
import { dummyMarkers } from "./components/MarkerData"
import PostedJobDetail from "./components/postedJobDetail"
import { Link } from "react-router-dom"

const reviewInfo = {
  rating: 4.5,
  lastActive: new Date(-1000000),
  recentReviews: [
    'Great work!',
    'Great work!',
    'Great work!',
  ]
}

const tradies = [
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'busy'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'available'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'busy'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'available'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'busy'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'available'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'busy'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'available'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'busy'
  },
  {
    name: 'John Doe',
    image: profilePhoto,
    occupation: 'Electrician',
    distance: '5km',
    availability: 'available'
  },
]

const jobsPosted = [
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
  {
    title: 'Fix leaking pipe',
    budget: 45,
    posted: new Date(),
    status: 'Open',
    bids: 5
  },
]

// interface ShowingSection = 
const JobCastPage = () => {

  const setTitle = usePageTitle()
  useEffect(() => {
    setTitle('Job Cast')
  }, [])
  const loading = false

  const [jobCast, setJobCast] = useState(false)

  const [showFilters, setShowFilters] = useState(false)

  const [showSection, setShowSection] = useState<'postedJobs' | 'availableJobs'>('availableJobs')

  const [showTradieProfile, setShowTradieProfile] = useState(false)

  const [showMessagePopup, setShowMessagePopup] = useState(false)

  const [showJobRequestForm, setShowJobRequestForm] = useState(false)

  const [showJobDetails, setShowJobDetails] = useState(false)


  const showProfile = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    // if (target.id === 'jobReqBtn') setShowJobRequestForm(true)
    if (target.id === 'profileCover') setShowTradieProfile(false)
  }

  const showJobReqForm = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'jobReqFormCover') setShowJobRequestForm(false)
  }

  const showMessage = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'messageCover') setShowMessagePopup(false)
  }

  const showDetails = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.id === 'detailsCover') setShowJobDetails(false)
  }

  if (loading) return <BuildHiveLoader />

  return (
    <div className="flex flex-col p-4 gap-4 max-h-full ">
      <div
        onClick={() => setJobCast(!jobCast)}
        className="flex w-fit gap-3 self-end mx-2">
        <p className="">JobCast Off</p>
        <div className={`${jobCast ? 'bg-primary-purple justify-end' : 'bg-slate-200 justify-start'} w-8 h-4 bg-gray-400 rounded-[20px]  overflow-visible flex items-center`}>
          <div className={`${jobCast ? 'right-[-3px]' : 'left-[-3px]'} h-5 aspect-square relative  rounded-[50%] bg-light-white border border-black `}></div>
        </div>
      </div>
      {/* FILTERS, MAP, POST JOBS BUTTON */}
      <div className="flex items-center justify-around shadow-md p-4 ">
        <SlidersHorizontal
          onClick={() => setShowFilters(!showFilters)}
          className="" />
        <MapButton
          markers={dummyMarkers}
        />
        <button type="button" className="bg-accent-purple p-1   shadow-sm focus:shadow-md self-center">
         <Link to='../home/post-jobs' className="text-white">Post Jobs</Link> 
          </button>
      </div>
      {/* FILTERS SECTION */}
      <div className={`${showFilters ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-full flex-center`}>
        {/* FILTERS CARD */}
        <div className='border border-black relative z-10 bg-light-white h-[300px] min-w-[clamp(200px,100%,300px)] sm:max-w-[300px] rounded'>
          <X
            onClick={() => setShowFilters(!showFilters)}
            className="absolute top-[-9px] right-[-9px] rounded-[50%] bg-light-white" />
          {/* FILTERS */}
          <div className="flex flex-col justify-around p-4 gap-4">
            <p className="border-b self-center border-black w-fit font-bold text-lg md:text-2xl">
              Filters
            </p>
            <div className="flex flex-col gap-4">
              <label className='flex justify-between'>Occupation:
                <select name="occupation" className="ml-4 bg-light-white p-1 border rounded-md border-dark-black">
                  <option value="electrician">Electrician</option>
                  <option value="electrician">Electrician</option>
                  <option value="electrician">Electrician</option>
                  <option value="electrician">Electrician</option>
                  <option value="electrician">Electrician</option>
                  <option value="electrician">Electrician</option>
                </select>
              </label>
              <label className='flex justify-between'>Distance:
                <select name="occupation" className="ml-4 bg-light-white p-1 border rounded-md border-dark-black">
                  <option value="electrician">5km</option>
                  <option value="electrician">5km</option>
                  <option value="electrician">5km</option>
                  <option value="electrician">5km</option>
                  <option value="electrician">5km</option>
                </select>
              </label>
              <label className='flex justify-between'>Availability:
                <select name="occupation" className="ml-4 bg-light-white p-1 border rounded-md border-dark-black">
                  <option value="electrician">All</option>
                  <option value="electrician">Available</option>
                  <option value="electrician">Busy</option>
                  <option value="electrician">Unavailable</option>
                </select>
              </label>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              type="button"
              className="bg-accent-purple p-1 text-white  shadow-sm focus:shadow-md self-center"> Apply filters</button>
          </div>
        </div>
        <div
          onClick={() => setShowFilters(!showFilters)}
          className="absolute z-9 w-screen  h-screen top-0 right-0 left-0 bottom-0 bg-slate-500 opacity-50" ></div>
      </div>
      {/*JOB AVAILABILITY TOGGLE SECTION*/}
      <div className="flex-center gap-2 lg:hidden">
        <button
          onClick={() => { setShowSection('availableJobs') }}
          type="button"
          className={`${showSection === 'availableJobs' ? 'bg-accent-purple' : 'bg-light-white '} bg-accent-purple p-1 shadow-md focus:shadow-md self-center`}> Available Tradies</button>
        <button
          onClick={() => { setShowSection('postedJobs') }}
          type="button"
          className={`${showSection === 'postedJobs' ? 'bg-accent-purple' : 'bg-light-white '} bg-accent-purple p-1 shadow-md focus:shadow-md self-center`}> My Posted Jobs</button>
      </div>
      {/* JOB AVAILABILITY SECTION */}
      <div className={`flex w-full gap-4 max-h-full overflow-hidden hide-scroll`}>
        <div className={`${showSection === 'availableJobs' ? 'flex' : 'hidden'}  lg:flex flex-col w-full `}>
          <p className="mb-2 text-center text-dark-black font-bold md:text-lg">Available Tradies</p>
          <div className="flex flex-col w-full gap-4 max-h-full overflow-auto hide-scroll items-center">
            {
              tradies.map((tradie, index) => (
                <div
                  key={index}
                  className="w-full flex justify-center">
                  <div
                    id="tradie"
                    className="flex items-center w-full border min-w-[200px] max-w-[400px] border-slate-400 p-2 rounded-md">
                    <img
                      className="w-8 aspect-square mx-2 md:w-12 h-8 md:h-12"
                      src={tradie.image}
                      alt={tradie.name} />
                    {/* <div className="flex w-full"> */}
                    <div
                      className="flex w-full px-2 items-center border-l">
                      <div
                        onClick={() => setShowTradieProfile(true)}
                        className="flex flex-col  w-full">
                        <p className="font-bold">{tradie.name}</p>
                        <p className="text-sm">{tradie.occupation}</p>
                        <p className="text-sm">{tradie.distance}</p>
                        <StatusComp
                          status={tradie.availability.toUpperCase()}
                        />
                      </div>
                      <div className="w-full flex gap-2 flex-col">
                        <button
                          onClick={() => setShowMessagePopup(true)}
                          type="button"
                          className="bg-light-white p-1 border border-black">Message</button>
                        <button type="button"
                          id="jobReqBtn"
                          onClick={() => setShowJobRequestForm(true)}
                          className="bg-accent-purple p-1 border text-white border-black">Request Job</button>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                  {/* Tradie Profile with reviews*/}
                  <div
                    onClick={showProfile}
                    id="profileCover"
                    className={`${showTradieProfile ? 'flex' : 'hidden'} absolute w-full h-full flex-center bg-slate-500/20 top-0 bottom-0 left-0 right-0 p-4`}>
                    <div
                      onClick={showProfile}
                      id="card"
                      className="bg-light-white min-w-[clamp(200px,100%,400px)] min-h-[300px] border border-black rounded-md space-y-2 p-4">
                      <p className="text-lg ml-4 md:text-2xl font-semibold ">Tradie Profile</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-4 self-center">
                          <img
                            className="w-12 md:w-16 aspect-square object-contain"
                            src={tradie.image}
                            alt={tradie.name} />
                          <div className="flex flex-col ">
                            <p>{tradie.name}</p>
                            <p>Rating: {reviewInfo.rating}/5</p>
                            <p>Last Active: {parseDate(reviewInfo.lastActive)}</p>
                          </div>
                        </div>
                        <div className="mx-4">
                          <p className="md:text-lg font-semibold">Recent Reviews</p>
                          <ul className="list-none">
                            {reviewInfo.recentReviews.map((review, index) => (
                              <li className="mx-auto w-full" key={index}>{review}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2 p-2 self-center">
                          <button type="button"
                            onClick={() => { setShowJobRequestForm(true); setShowTradieProfile(false) }}
                            className="bg-accent-purple p-1 border text-white border-black">Send Job Request</button>
                          <button type="button"
                            onClick={() => { setShowTradieProfile(false) }}
                            className="bg-light-white p-1 border text-black border-black">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* MESSAGES POPUP*/}
                  <div
                    onClick={showMessage}
                    id="messageCover"
                    className={`${showMessagePopup ? 'flex' : 'hidden'} absolute w-full h-full flex-center bg-slate-500/20 top-0 bottom-0 left-0 right-0 p-4`}>
                    <div
                      onClick={showMessage}
                      id="messagePopup"
                      className="bg-light-white min-w-[clamp(200px,100%,400px)] min-h-[300px] border border-black rounded-md space-y-2 p-4">
                      <p className="text-lg ml-4 md:text-2xl font-semibold ">Send Message</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-4 self-center">
                          <img
                            className="w-12 md:w-16 aspect-square object-contain"
                            src={tradie.image}
                            alt={tradie.name} />
                          <div className="flex flex-col ">
                            <p>{tradie.name}</p>
                            <p>Rating: {reviewInfo.rating}/5</p>
                            <p>Last Active: {parseDate(reviewInfo.lastActive)}</p>
                          </div>
                        </div>
                        <div className="mx-4">
                          <textarea
                            className="w-full bg-light-white rounded-md border border-black p-2 shadow-sm shadow-accent-purple"
                            name="sendMessage"
                            placeholder="Type your message here"
                            title="Request Message"
                            id=""
                            rows={4}
                          />
                        </div>
                        <div className="flex gap-2 p-2 self-center">
                          <button type="button"
                            onClick={() => { setShowMessagePopup(false) }}
                            className="bg-accent-purple p-1 border text-white border-black">Send Message</button>
                          <button type="button"
                            onClick={() => { setShowMessagePopup(false) }}
                            className="bg-light-white p-1 border text-black border-black">Close</button>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* JOB REQUEST FORM */}
                  <div
                    onClick={showJobReqForm}
                    id="jobReqFormCover"
                    className={`${showJobRequestForm ? 'flex' : 'hidden'} absolute w-full h-full flex-center bg-slate-500/20 top-0 bottom-0 left-0 right-0 p-4 text-black`}>
                    <div
                      onClick={showProfile}
                      id="card"
                      className="bg-light-white min-w-[clamp(200px,100%,800px)] min-h-[300px] border border-black rounded-md space-y-2 p-4">
                      <p className="text-lg ml-4 md:text-2xl font-semibold ">Job Request Form</p>
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex flex-col gap-2 p-2 self-center w-full">
                          <input
                            className="p-2 bg-light-white w-full border rounded-md"
                            title="Job Title" name="jobTitle" type="text" placeholder="Job Title"

                          />
                          <textarea
                            className="p-2 bg-light-white w-full h-fit border rounded-md"
                            rows={4}
                            title="Job Description" name="jobDescription" placeholder="Description" />
                          <div className="flex flex-col gap-1">
                            <label htmlFor="attachments">
                              Attachments
                            </label>
                            <input
                              className=" bg-light-white border rounded-md p-2"
                              title="Upload Attachments" type="file"
                              accept='.jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.ppt.pptx'
                              multiple
                              name="attachments" id="attachments" />
                          </div>
                          <input
                            className=" bg-light-white border rounded-md p-2"
                            title="budget" type="number" name="budget" id="budget" placeholder="Enter your Budget" />
                            <div className="w-full flex flex-col">
                            <label htmlFor="date">Delivery Date:</label>
                          <input
                            onClick={(e) => e.currentTarget.showPicker?.()}
                            className=" bg-light-white border rounded-md p-2"
                            id="date"
                            title="date"
                            type="date"
                            name="date" />
                            </div>
                          {/* BUTTON SECTION */}
                          <div className="flex gap-2 self-end">
                            <button type="button"
                              onClick={() => { setShowJobRequestForm(false) }}
                              className="bg-accent-purple p-1 border text-white border-black">Submit</button>
                            <button type="button"
                              onClick={() => { setShowJobRequestForm(false) }}
                              className="bg-light-white p-1 border text-black border-black">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
        <div className={`${showSection === 'postedJobs' ? 'flex' : 'hidden'}  lg:flex flex-col w-full `}>
          <p className="mb-2 text-center text-dark-black font-bold md:text-lg">My Posted Jobs</p>
          <div className="flex flex-col w-full gap-4 max-h-full overflow-auto hide-scroll items-center">
            {
              jobsPosted.map((job, index) => (
                <div
                  key={index}
                  className="flex items-center w-full border min-w-[200px] max-w-[400px] border-slate-400 p-2 rounded-md">
                  {/* <div className="flex w-full"> */}
                  <div
                    onClick={() => setShowJobDetails(true)}
                    className="flex w-full px-2 items-center ">
                    <div className="flex flex-col w-full">
                      <p className="font-bold text-lg md:text-xl lg:text-2xl">{job.title}</p>
                      <p className="text-sm md:text-base">Budget: ${job.budget}</p>
                      <p className="text-sm md:text-base">Posted: {parseDate(job.posted)}</p>
                    </div>
                    <div className="w-1/4 flex-center gap-2 flex-col">
                      <StatusComp
                        status={job.status}
                      />
                      <p className="text-sm md:text-base">Bids: {job.bids}</p>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              ))
            }
          </div>
          {/* POSTED JOB DETAILS */}
          <PostedJobDetail
            showJobDetails={showJobDetails}
            setShowJobDetailsFalse={() => setShowJobDetails(false)}
            showDetails={showDetails}
          />
        </div>
      </div>
    </div>
  )
}

export default JobCastPage