import CustomInput from "@/generalComponents/customInput"
import CustomSelect, { type Option } from "@/generalComponents/CustomSelect"
import PurpleBtn from "@/generalComponents/purpleBtn"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"

interface companyInfo {
  companyName: string;
  companySize: Option[];
  tradesOffered: Option[];
  address: string;
}

const EnterpriseAccountSetup = () => {

  const options = [
    { label: '', value: '' },
    { label: '', value: '' },
    { label: '', value: '' }
  ]
  const companySize = [
    { label: '1 - 5', value: '5' },
    { label: '5 - 10', value: '10' },
    { label: '10 - 20', value: '20' }
  ]

  const [step, setStep] = useState(1)
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCompanyInfo({ ...companyInfo, [name]: value })
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
            <div className="w-full p-4 flex flex-col gap-4">
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
            </div>
          )}

          {
            step === 1 && (
              <></>
            )
          }
        </div>
      </AnimatePresence>
    </div>
  )
}

export default EnterpriseAccountSetup