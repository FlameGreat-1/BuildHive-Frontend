import { useState } from "react"
import welcome from '../../assets/images/welcometBh.png'
import onboarding2 from '../../assets/images/forClientTT.png'
import onboarding3 from '../../assets/images/smartFeatures.png'
import onboarding4 from '../../assets/images/stayInC.png'
import InfoSection from "./components/infoSection"
import ProgressBar from "./components/progressBar"
import ButtonRound from "./components/buttonRound"
import PurpleBtnSquare from "../../generalComponents/purpleBtnSquare"
import { AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

const OnboardingPage = () => {

    const [currentCount, setCurrentCount] = useState(1)
    const handleNext = (skip?: boolean) => {
        if (currentCount < 4) setCurrentCount(currentCount + 1)
        if (skip) setCurrentCount(4)
    }
    const navigate = useNavigate()

    return (
        <AnimatePresence mode="wait">
            <div className="w-screen h-screen  flex-center flex-col bg-light-white">
                {
                    currentCount === 1 && (
                        <InfoSection
                            step={1}
                            heading="Welcome to BuildHive"
                            image={welcome}
                            title="Manage Jobs the Smart Way"
                            subtitle="Track projects, workers and clients, all from your phone."
                        />
                    )
                }
                {
                    currentCount === 2 && (
                        <InfoSection
                            step={2}
                            heading="For Clients, Tradies & Teams"
                            image={onboarding2}
                            title="Built for Every Role"
                            subtitle="Whether you hire, build or manage, Hive works for you."
                        />
                    )
                }
                {
                    currentCount === 3 && (
                        <InfoSection
                            step={3}
                            heading="Smart Features You'll Love"
                            image={onboarding3}
                            title="AI Quoting, JobCast CRM."
                            subtitle="Automate your business, broadcast availability, and never lose track of a client."
                        />
                    )
                }
                {
                    currentCount === 4 && (
                        <InfoSection
                            step={4}
                            heading="Stay in Control"
                            image={onboarding4}
                            title="From Start to Payment"
                            subtitle="Post jobs, assign tasks, send invoices all in one app."
                        />
                    )
                }



                {/* PROGRESS BAR AND BUTTON SECTION */}
                <div className="flex-col flex-center gap-4 w-full">
                    <ProgressBar
                        totalNumber={4}
                        currentNumber={currentCount} />
                    <div className={` w-full max-w-[200px] mt-4  ${currentCount === 4 ? 'hidden' : 'flex-btw'} `}>
                        <p
                            onClick={() => { handleNext(true) }}
                            className="text-dark-black font-semibold"
                        >Skip</p>
                        <ButtonRound click={() => { handleNext() }} />
                    </div>
                    <PurpleBtnSquare
                        click={() => { navigate('/sign-in') }}
                        classes={`${currentCount !== 4 && 'hidden'} `}
                        upperCase={'false'}
                        text="Get Started"
                    />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default OnboardingPage