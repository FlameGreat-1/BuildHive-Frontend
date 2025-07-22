import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import ForgotPass1 from "./components/forgotPass1"
import ConfirmEmail from "./components/confirmEmail"
import SetNewPasword from "./components/setNewPassword"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [steps, setSteps] = useState(0)
    const nextStep = () => setSteps(steps + 1); console.log(steps)

    const setParentEmail = (email:string)=>setEmail(email)


    return (
        <div className="w-screen bg-light-white h-screen flex flex-col text-black items-center px-4">
            <div
                onClick={() => steps > 0 && setSteps(steps - 1)}
                className="flex-btw w-full p-2 text-base md:text-lg max-w-[1200px]">
                <div className="flex-center p-2 gap-2">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p className="font-semibold">Go Back</p>
                </div>
                <Link to='/help' className="text-primary-purple font-semibold">Need help?</Link>
            </div>
            <AnimatePresence mode='wait'>
                {
                    steps === 0 && <ForgotPass1 nextSteps={nextStep} setParentEmail={setParentEmail} />
                }
                {
                    steps === 1 && <ConfirmEmail email={email} nextSteps={nextStep} />
                }
                {
                    steps === 2 && <SetNewPasword nextSteps={nextStep} />
                }
            </AnimatePresence>

        </div>
    )
}

export default ForgotPassword