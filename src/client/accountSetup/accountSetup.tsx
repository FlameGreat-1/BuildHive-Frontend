
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import LocationPicker from "../../generalComponents/LocationPicker";
// import MultiSelect from "../../generalComponents/MultiSelect";
// import FirstPage from "./components/FirstPage";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CustomSelect from "@/generalComponents/CustomSelect";
import CustomInput from "@/generalComponents/customInput";
import PurpleBtn from "@/generalComponents/purpleBtn";
import { Radio } from "@/generalComponents/CustomCheckbox";
import MapWithSearch from "@/generalComponents/MapWithSearch";

interface Location {
  lat: number;
  lon: number;
  name: string;
}

interface Option {
  label: string;
  value: string;
}

const tagOptions: Option[] = [
  { label: "Remote", value: "remote" },
  { label: "Onsite", value: "onsite" },
  { label: "Full Time", value: "fulltime" },
  { label: "Part Time", value: "parttime" },
];

const radios = [{
  name:'frequency',
  id:'occassionally',
  value:'Occassionally',
  label:'Occassionally',
},{
  name:'frequency',
  id:'oneTime',
  value:'One time',
  label:'One Time',
},
{
  name:'frequency',
  id:'Ongoing',
  value:'Ongoing',
  label:'Ongoing',
},
]

export default function ClientAccountSetup() {
  const [step, setStep] = useState(0);
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);
  const [form, setForm] = useState({ businessName: '',  frequency: '' })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, } = e.target
    // if(name==='frequency'){
    //   setForm({...form,[name]:value})
    // }
    // const{checked}
    setForm({ ...form, [name]: value })
    console.log({ ...form, [name]: value })
  }
  // const handleSelectJob = (options:Option[])=>{
  //   setForm({...form, jobTypes:[...options]})
  // }
  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  // const handleSubmit = async () => {
  //   const payload = {
  //     tags: selectedTags,
  //     locations: locations,
  //   };
  //   console.log("Submitting:", payload);
  //   // await fetch("/api/submit", {
  //   //   method: "POST",
  //   //   headers: { "Content-Type": "application/json" },
  //   //   body: JSON.stringify(payload),
  //   // });
  // };

  return (
    <div className="w-screen bg-light-white min-h-screen relative mx-auto space-y-6 text-black flex justify-center items-start pt-12">'
      <div
        className="flex-btw items-center w-full p-2 text-base md:text-lg max-w-[1200px] absolute top-0 z-10">
        <div
          onClick={() => {prev() }}
          className={step === 0 ? 'invisible pointer-events-none ' : "flex-center text-black p-2 gap-2"}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <p className="font-semibold">Go Back</p>
        </div>
        <Link to='/help' className="text-primary-purple font-semibold">Need help?</Link>
      </div>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4 }}
            className="w-full p-4 flex flex-col gap-4 items-center justify-center "
          >
            <div className="w-full space-y-4  max-w-[500px]">
              <div className="flex-center flex-col gap-2 text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold">Tell Us About Your Business</p>
                <p className="text-base md:text-xl">This helps us match you with the right professional.</p>
              </div>
              <div id="form-section" className="flex-center flex-col gap-4">
                <CustomInput
                  type="text"
                  name="businessName"
                  value={form.businessName}
                  handleChange={handleChange}
                  placeholder="Business Name"
                  classes=""
                />
                <div className=" w-full">
                  <p>Job types you are interested in.</p>
                  <CustomSelect
                    options={tagOptions}
                    value={selectedTags}
                    onChange={setSelectedTags}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 ">
              {
                radios.map((radio,index)=>(
                  <Radio 
                  {...radio}
                  key={index}
                  onChange={handleChange}
                  checked={form.frequency === radio.value?true:false}
                  labelClass={form.frequency === radio.value ? 'text-primary-purple ':''}
                  />
                ))
              }
            </div>
            <PurpleBtn
              text="Next"
              upperCase="false"
              classes="w-full max-w-[300px] text-center"
              click={next}
            />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            <div className="min-w-[250px] max-w-[400px] w-full p-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-center "> Add Your Project Locations</p>
              <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">Select the places where you'll need work done. You can add multiple locations.</p>
              <MapWithSearch
              locations={locations}
              setLocations={setLocations}
              />
            {/* <LocationPicker
              locations={locations}
              setLocations={setLocations}
            /> */}
            <div className="flex-center gap-4 flex-col  justify-between mt-8">
              <PurpleBtn text="Continue" upperCase="false" classes="w-full max-w-[300px] text-center" click={next} />
              <p className="text-gray-400 md:text-xl">Skip for now</p>
              
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
