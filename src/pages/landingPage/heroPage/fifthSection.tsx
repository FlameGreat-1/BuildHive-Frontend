import RegSectionComp from "./components/regSectionComp"
import type { component } from "./components/regSectionComp"
import jobcast from '../../../assets/images/stats3People.webp'




const FifthSection = () => {

    const props: component = {
        title: 'Job Cast',
        p: <p>Broadcast your availability, get <span className="text-secondary-blue">matched instantly</span> </p>,
        image: jobcast,
        subtitle: 'Enable JobCast Mode to let nearby clients know you’re available. Get matched with urgent or same-day job requests in real time and grow your workflow on demand.'
    }

    return (
        <div className="flex-center ">
            <RegSectionComp  {...props} />
        </div>
    )
}

export default FifthSection