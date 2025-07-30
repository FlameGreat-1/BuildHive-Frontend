import { Radio } from "@/generalComponents/CustomCheckbox"
import CustomInput from "@/generalComponents/customInput"
import CustomSelect, { type Option } from "@/generalComponents/CustomSelect"
import MapWithSearch from "@/generalComponents/MapWithSearch"
import PurpleBtn from "@/generalComponents/purpleBtn"
import type { Location } from "@/userRoles/client/accountSetup/ClientAccountSetup"
import { validateEmail } from "@/utils/validators"
import { faArrowLeft, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface companyInfo {
  companyName: string;
  companySize: Option[];
  tradesOffered: Option[];
  address: string;
}

interface jobFlow {
  categories: Option[];
  publicPosting: boolean;
  internalJobs: boolean;
}

const EnterpriseAccountSetup = () => {

  const navigate = useNavigate()

  const options = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' }
  ]
  const jobCategories = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' }
  ]
  const companySize = [
    { label: '1 - 5', value: '5' },
    { label: '5 - 10', value: '10' },
    { label: '10 - 20', value: '20' }
  ]

  const [step, setStep] = useState(0)

  const next = () => {
    setStep((step) => step + 1)
  }
  const prev = () => {
    setStep((step) => step - 1)
  }

  const [companyInfo, setCompanyInfo] = useState<companyInfo>({
    companyName: '',
    companySize: [],
    tradesOffered: [],
    address: '',
  })

  const [teamEmails, setTeamEmails] = useState<string[]>([])

  const [currentEmail, setCurrentEmail] = useState('')

  const [emailError, setEmailError] = useState('')

  const [locations, setLocations] = useState<Location[]>([])

  const [jobflowForm, setJobflowForm] = useState<jobFlow>({
    categories: [],
    publicPosting: false,
    internalJobs: false
  })

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setCurrentEmail(value.trim())
  }

  const addEmail = (email: string) => {
    const isEmailValid = validateEmail(email)
    // setError('')

    if (isEmailValid !== true) {
      setEmailError(isEmailValid); return
    }
    setTeamEmails((prevEmails) => {
      if (prevEmails.includes(email)) {
        setEmailError('Email already exists!')
        setCurrentEmail('')
        return prevEmails
      }
      else {
        setCurrentEmail('')
        setEmailError('')
        return [...prevEmails, email]
      }
    }
    )
  }

  const removeEmail = (emailToRemove: string) => {
    setTeamEmails(teamEmails.filter(email => email !== emailToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addEmail(currentEmail);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCompanyInfo({ ...companyInfo, [name]: value.trim() })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setJobflowForm(
      (prev) => ({
        ...prev, [name]: value === 'yes'
      })
    )
    console.log(name, value)
  }




  return (
    <div className="w-screen bg-light-white min-h-screen relative text-black pt-12 flex justify-center">
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

      <AnimatePresence mode='wait'>
        <div className="w-screen max-w-[500px] p-4 flex flex-col items-center max-h-[900px] ">

          {step === 0 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.4 }}
              className="w-full p-4 flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl md:text-3xl text-center ">Tell Us About Your Company</p>
                <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">This helps us tailor Build Hive to your operations.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <CustomInput
                  name="companyName"
                  type="text"
                  value={companyInfo.companyName}
                  handleChange={handleChange}
                  placeholder="Company Name"
                />
                <div className="flex-col flex gap-2 w-full">
                  <p className="ml-4">Company Size</p>
                  <CustomSelect
                    single={true}
                    options={companySize}
                    value={companyInfo.companySize}
                    onChange={(val) => setCompanyInfo({ ...companyInfo, companySize: val })}
                  />
                </div>
                <div className="flex-col flex gap-2 w-full">
                  <p className="ml-4">Industries / Trades Offered</p>
                  <CustomSelect
                    options={options}
                    value={companyInfo.tradesOffered}
                    onChange={(val) => setCompanyInfo({ ...companyInfo, tradesOffered: val })}
                  />
                </div>
                <CustomInput
                  name="address"
                  type="text"
                  value={companyInfo.address}
                  handleChange={handleChange}
                  placeholder="Office / Base Address"
                />
              </div>
              <PurpleBtn
                click={next}
                text="Continue"
                classes="w-full max-w-[300px] self-center"
                upperCase="false" />
            </motion.div>
          )}

          {
            step === 1 && (
              <div className="w-full flex flex-col gap-4">
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl text-center ">Add Your Team</p>
                  <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">Invite tradies to join your internal team. You can skip this step.</p>
                </div>
                <div className="flex gap-2">
                  <CustomInput
                    onKeyDown={handleKeyDown}
                    name="teamEmails"
                    type="email"
                    value={currentEmail}
                    handleChange={emailChange}
                    placeholder="Enter email address"
                  />
                  <FontAwesomeIcon
                    onClick={() => addEmail(currentEmail)}
                    className="bg-primary-purple text-white rounded-lg p-4"
                    icon={faPlus} />
                </div>
                {emailError && <p className="text-red-500 self-center mt-1">{emailError}</p>}
                <ul className="space-y-2">
                  {teamEmails && (teamEmails.map((email) => (
                    <li
                      key={email}
                      className="flex items-center justify-between bg-gray-300 px-4 py-2 rounded"
                    >
                      <span>{email}</span>
                      <FontAwesomeIcon
                        className="rounded-full bg-accent-purple/50 p-2"
                        onClick={() => removeEmail(email)}
                        icon={faTimes} />
                    </li>
                  )))}
                </ul>
                <div className="flex flex-col self-center w-full items-center gap-3 justify-self-end mt-16">
                  <PurpleBtn
                    text="Invite & Continue"
                    click={next}
                    classes="w-full max-w-[300px] "
                  />
                  <p
                    onClick={() => { navigate('complete') }}
                    className="text-gray-400 md:text-xl cursor-pointer">Skip for now</p>
                </div>
              </div>
            )
          }

          {
            step === 2 && (
              <div className="w-full p-4 flex flex-col gap-4">
                <div className="space-y-2">
                  <p className="text-xl sm:text-2xl md:text-3xl text-center ">Customize Your Job Flow</p>
                  <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">We'll set up your dashboard based on this.</p>
                </div>
                <div className="flex-col flex gap-2 w-full">
                  <p className="ml-4">Job Categories</p>
                  <CustomSelect
                    // single={true}
                    options={jobCategories}
                    value={jobflowForm.categories}
                    onChange={(val) => setJobflowForm({ ...jobflowForm, categories: val })}
                  />
                </div>
                <div className="w-full">
                  <p>Do you post jobs publicly?</p>
                  <div className='w-full flex justify-between'>
                    <Radio
                      name='publicPosting'
                      label="Yes"
                      value="yes"
                      id="publicPostingYes"
                      checked={jobflowForm.publicPosting === true}
                      onChange={handleRadioChange}
                    />
                    <Radio
                      name='publicPosting'
                      label="No"
                      value="no"
                      id="publicPostingNo"
                      checked={jobflowForm.publicPosting === false}
                      onChange={handleRadioChange}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p>Do you assign jobs internally?</p>
                  <div className='w-full flex justify-between'>
                    <Radio
                      name='internalJobs'
                      label="Yes"
                      value="yes"
                      id="internalJobsYes"
                      checked={jobflowForm.internalJobs === true}
                      onChange={handleRadioChange}
                    />
                    <Radio
                      name='internalJobs'
                      label="No"
                      value="no"
                      id="internalJobsNo"
                      checked={jobflowForm.internalJobs === false}
                      onChange={handleRadioChange}
                    />
                  </div>
                </div>
                <PurpleBtn text="Continue" upperCase="false" classes="w-full max-w-[300px] self-center text-center" click={next} />
              </div>
            )
          }
          {
            step === 3 && (
              <div className="min-w-[250px] max-w-[400px] w-full p-2">
                <p className="text-xl sm:text-2xl md:text-3xl text-center ">Set Your Operating Locations</p>
                <p className="text-sm mt-2 md:mt-4 sm:text-base md:text-xl text-center">Select one or more areas where your company accepts or assigns jobs.</p>
                <MapWithSearch
                  locations={locations}
                  setLocations={setLocations}
                />
                <div className="flex-center gap-4 flex-col  justify-between mt-8">
                  <PurpleBtn
                    text="Continue"
                    upperCase="false"
                    classes="w-full max-w-[300px] text-center"
                    click={() => { navigate('complete') }} />
                  <p
                    onClick={() => { navigate('complete') }}
                    className="text-gray-400 md:text-xl cursor-pointer">Skip for now</p>
                </div>
              </div>
            )
          }
        </div>
      </AnimatePresence>
    </div>
  )
}

export default EnterpriseAccountSetup