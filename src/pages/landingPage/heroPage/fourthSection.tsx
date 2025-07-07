import RegSectionComp from "./components/regSectionComp"
import type { component } from "./components/regSectionComp"
import aiQuote from '../../../assets/images/aiQuote.webp'




const FourthSection = () => {

    const props: component = {
        title: 'AI Quoting',
        p: <p>Generate <span className="text-secondary-blue">quotes in seconds,</span> not hours.</p>,
        image: aiQuote,
        subtitle: 'Use build Hive\'s AI-powered quoting system to instantly create professional, accurate quotes based on job type, materials, and labor — no manual calculations needed.'
    }

    return (
        <div className="flex-center ">
            <RegSectionComp  {...props} />
        </div>
    )
}

export default FourthSection