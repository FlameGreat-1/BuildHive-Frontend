import RegSectionComp from "./components/regSectionComp"
import type { component } from "./components/regSectionComp"
import crmImg from '../../../assets/images/crmImg.webp'




const SixthSection = () => {

    const props: component = {
        title: 'Smart CRM',
        p: <p>Keep <span className="text-secondary-blue">every client detail</span> in one place.</p>,
        image: crmImg,
        subtitle: 'Enable JobCast Mode to let nearby clients know you\'re available. Get matched with urgent or same-day job requests in real time and grow your workflow on demand.'
    }

    return (
        <div className="flex-center ">
            <RegSectionComp  {...props} />
        </div>
    )
}

export default SixthSection