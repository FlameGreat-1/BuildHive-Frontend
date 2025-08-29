import postJobsImg from '@/assets/images/postJobsImage.webp'
import './postJobs.css'
import MapWithSearch from '@/generalComponents/MapWithSearch'
import { useEffect, useState } from 'react'
import type { Location } from '../accountSetup/ClientAccountSetup'
import PurpleBtn from '@/generalComponents/purpleBtn'
import { tradeOptions } from '@/utils/TradeOptions'
import { X } from 'lucide-react'
import { usePageTitle } from '../dashboard/Dashboard'
import { useNavigate } from 'react-router-dom'


interface Form {
    title: string;
    description: string;
    jobTypes: string[];
    budget: number;
    startDate: Date;
    dueDate: Date;
    attachments: File[];
    // locations:Location[];
}

const PostJobs = () => {
    const navigate = useNavigate()
    const [locations, setLocations] = useState<Location[]>([]);

    const [form, setForm] = useState<Form>({
        title: '',
        description: '',
        jobTypes: [],
        budget: 0,
        startDate: new Date(),
        dueDate: new Date(),
        attachments: [],
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files } = e.target as HTMLInputElement
        if (name === 'attachments' && files) {
            const fileArray = Array.from(files);
            setForm({ ...form, attachments: [...form.attachments, ...fileArray] });
            return; // Prevents the second setForm call below
        }
        setForm({ ...form, [name]: value.trim() })

    }
    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const setTitle = usePageTitle()

    const onSubmit = () => {
        navigate('../home/job-live')
    }

    useEffect(() => {
        setTitle('Post New Job')
    }, [])


    return (
        <div className="flex-col flex w-full h-full justify-self-center items-center p-4 lg:max-w-[80%] gap-4">
            <div className="flex justify-between w-full">
                <h3 className="font-bold invisible sm:text-md md:text-xl lg:text-2xl">Post New Job</h3>
                <p className="text-secondary-blue/80">Go back</p>
            </div>
            <div className=" w-full hidden items-center flex-col md:flex-row justify-center">
                <p className="w-full text-center md:w-1/2 max-w-[400px] sm:text-md md:text-xl lg:text-2xl">Describe your job in a few simple steps and get matched with skilled tradies near you. It only takes a minute!</p>
                <img className="w-full md:w-1/2" src={postJobsImg} alt="Post Jobs Image" />
            </div>
            {/* CREATE JOB POSTING FORM */}
            <form className='w-full p-4 pb-8  flex flex-col gap-4 bg-light-white rounded-md border-slate-400 '>
                <h4 className='font-semibold md:text-xl'>Create a New Job Posting</h4>
                <div>
                    <label htmlFor='title'>Job Title</label>
                    <input type="text" name="title" id="title" placeholder='e.g. Kitchen Renovation'
                        value={form.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='description'>Job Description</label>
                    <textarea rows={4} name="description" id="description"
                        value={form.description}
                        placeholder='Describe the job in detail...'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='jobTypes'>Job Type</label>
                    <select name="jobTypes" id="jobTypes" onSelect={handleSelect}>
                        {
                            tradeOptions.map((option, i) => (
                                <optgroup key={i} label={option.label}>
                                    {
                                        option.options.map((trade, i) => (
                                            <option key={i} value={trade.value}>{trade.label}</option>
                                        ))
                                    }
                                </optgroup>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor='budget'>Budget ($)</label>
                    <input type="number" name="budget" id="budget"
                        value={form.budget}
                        onChange={handleChange} placeholder='e.g. 15000'
                    />
                </div>
                <div>
                    <label htmlFor='startDate'>Start Date</label>
                    <input type="date" name="startDate" id="startDate"
                        onChange={handleChange}
                        onClick={(e) => e.currentTarget.showPicker?.()}
                    />
                </div>
                <div>
                    <label htmlFor='dueDate'>Due Date</label>
                    <input type="date" name="dueDate" id="dueDate"
                        onChange={handleChange}
                        onClick={(e) => e.currentTarget.showPicker?.()}
                    />
                </div>
                <div className="gap-2">
                    <label className='border bg-accent w-fit p-2 rounded-md bg-accent-purple text-white cursor-pointer' htmlFor="attachments">
                        Upload Attachments
                    </label>
                    <div className='!flex-row gap-4 flex-wrap bg-light-white '>{Array.isArray(form.attachments) && form.attachments.map((file, i) => (
                        <p className='bg-light-white text-secondary-blue w-fit' key={i}>
                            {file.name}<X size={16} className='inline text-black' onClick={() => {
                                const updatedFiles = form.attachments.filter((_, index) => index !== i)
                                setForm({ ...form, attachments: updatedFiles })
                            }} />
                        </p>
                    ))}</div>
                    <input
                        className=" bg-light-white hidden border rounded-md p-2"
                        title="Upload Attachments" type="file"
                        accept='.jpg,.jpeg,.png,.pdf,.doc,.docx,.xls,.xlsx,.ppt.pptx'
                        multiple
                        name="attachments" id="attachments"
                        // value={form.attachments}
                        onChange={handleChange}
                    />
                    <p className='text-gray-500 text-sm'>Upload plans, images or other relevant files (PDF, JPG, PNG...)</p>
                </div>
                <div id="map">
                    <MapWithSearch
                        locations={locations}
                        setLocations={setLocations}
                    />
                </div>
                <PurpleBtn
                    upperCase='false'
                    text='Post Job'
                    classes='rounded-[20px] self-end'
                    click={onSubmit}
                />
            </form>
        </div>
    )
}

export default PostJobs