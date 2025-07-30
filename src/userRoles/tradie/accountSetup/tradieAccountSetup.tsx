import CustomSelect from "@/generalComponents/CustomSelect";
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react";
import type { Option } from "@/userRoles/client/accountSetup/ClientAccountSetup";
import { Radio } from "@/generalComponents/CustomCheckbox";
import FileUploader, { type UploadFile } from "@/generalComponents/FileUploaderMain";
import PurpleBtn from "@/generalComponents/purpleBtn";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import MapWithSearch from "@/generalComponents/MapWithSearch";
import type { Location } from "@/userRoles/client/accountSetup/ClientAccountSetup";
import ProfileSetup from "@/generalComponents/ProfileSetup";



const tagOptions: Option[] = [
    { label: "Remote", value: "remote" },
    { label: "Onsite", value: "onsite" },
    { label: "Full Time", value: "fulltime" },
    { label: "Part Time", value: "parttime" },
];

const radios = [
    {
        name: 'experience',
        id: 'Beginner',
        value: 'Beginner',
        label: 'Beginner',
    },
    {
        name: 'experience',
        id: 'Intermediate',
        value: 'Intermediate',
        label: 'Intermediate',
    },
    {
        name: 'experience',
        id: 'Professional',
        value: 'Professional',
        label: 'Professional',
    },
]

interface Form {
    tradieTypes: string;
    experience: string
}


const TradieAccountSetup = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const [locations, setLocations] = useState<Location[]>([]);
    const [about, setAbout] = useState('');
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);
    const [form, setForm] = useState<Form>({
        tradieTypes: '',
        experience: ''
    });
    const [files, setFiles] = useState<UploadFile[]>([]);
    const next = () => setStep((s) => s + 1);
    const prev = () => setStep((s) => s - 1);
    const skipSteps = () => navigate('complete');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = () => {
        if(step===2){
            navigate('complete')
        }
        const payload = {
            filesArray: files,
            locations: locations,
            about:about,
            profileImage:croppedImageUrl
        }
        console.log(payload)
    }


    const [selectedTags, setSelectedTags] = useState<Option[]>([]);
    return (
        <div className="w-screen bg-light-white  relative mx-auto space-y-6 text-black flex justify-center min-h-screen items-start pt-8">
            <div
                className="flex-btw items-center w-full p-2 text-base md:text-lg max-w-[1200px] absolute top-0 z-10">
                <div
                    onClick={() => { prev() }}
                    className={step === 0 ? 'invisible pointer-events-none ' : "flex-center text-black p-2 gap-2"}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p className="font-semibold">Go Back</p>
                </div>
                <Link to='/help' className="text-primary-purple font-semibold">Need help?</Link>
            </div>
            <AnimatePresence mode="wait" >
                <div className="w-screen max-w-[500px] p-4 flex flex-col items-center  max-h-[900px] ">

                    {
                        step === 0 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                className='flex justify-center w-full flex-col gap-4 '>
                                <div className="flex-center flex-col gap-1">
                                    <p className="text-black text-2xl md:text-3xl">What Kind of work do you do?</p>
                                    <p className="text-black text-lg md:text-xl">This helps us match you with the right jobs.</p>
                                </div>
                                <div className="w-full space-y-2">
                                    <p className="text-black ml-4">Job types you are interested in</p>
                                    <CustomSelect
                                        options={tagOptions}
                                        value={selectedTags}
                                        onChange={setSelectedTags}
                                    />
                                </div>
                                <div>
                                    <p className="mb-1 ml-4">Experience Level</p>
                                    <div className="flex flex-wrap gap-2 self-center ">
                                        {
                                            radios.map((radio, index) => (
                                                <Radio
                                                    {...radio}
                                                    key={index}
                                                    onChange={handleChange}
                                                    checked={form?.experience === radio.value ? true : false}
                                                    labelClass={form?.experience === radio.value ? 'text-primary-purple ' : ''}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="w-full space-y-1 p-4">
                                    <p className="text-xl md:text-2xl">Upload Files</p>
                                    <p className="text-base md:text-xl">Upload certifications you would like to share.</p>
                                    <FileUploader
                                        files={files}
                                        setFiles={setFiles}
                                        showProgress={false}
                                    />
                                </div>
                                <div className="flex-center flex-col gap-2">
                                    <PurpleBtn
                                        classes="w-[200px] "
                                        click={next}
                                        text='Continue'
                                        upperCase="false"
                                    />
                                    
                                </div>
                            </motion.div>)
                    }
                    {
                        step === 1 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="min-w-[250px] max-w-[400px] w-full p-4">
                                    <p className="text-xl sm:text-2xl md:text-3xl text-center ">Area of Work</p>
                                    <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">Select the areas where you're available for jobs. You can add multiple locations.</p>
                                    <MapWithSearch
                                        locations={locations}
                                        setLocations={setLocations}
                                    />
                                    <div className="flex-center gap-4 flex-col  justify-between mt-8">
                                        <PurpleBtn text="Continue" upperCase="false" classes="w-full max-w-[300px] text-center" click={next} />
                                        <p
                                            onClick={skipSteps}
                                            className="text-gray-400 md:text-xl cursor-pointer">Skip for now</p>

                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                    {
                        step === 2 && (
                            <>
                                <ProfileSetup 
                                about={about}
                                setAbout={(e:React.ChangeEvent<HTMLTextAreaElement>) => setAbout(e.target.value.trim())}
                                croppedImageUrl={croppedImageUrl}
                                setCroppedImageUrl={setCroppedImageUrl}
                                next={handleSubmit}
                                skipSteps={skipSteps}
                                />
                            </>
                        )
                    }
                </div>
            </AnimatePresence>
        </div>

    )

}

export default TradieAccountSetup