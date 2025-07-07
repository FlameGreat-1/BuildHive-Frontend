import RegSectionComp from "./components/regSectionComp"
import type { component } from "./components/regSectionComp"
import jobcast from '../../../assets/images/stats3People.webp'




const FifthSection = () => {

    const props: component = {
        title: 'Job Cast',
        p: <p>Broadcast your availability, get <span className="text-secondary-blue">matched instantly</span> </p>,
        image: jobcast,
        subtitle: 'Use build Hive\'s AI-powered quoting system to instantly create professional, accurate quotes based on job type, materials, and labor — no manual calculations needed.'
    }

    return (
        <div className="flex-center ">
            <RegSectionComp  {...props} />
        </div>
    )
}

export default FifthSection