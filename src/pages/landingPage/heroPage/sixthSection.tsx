import RegSectionComp from "./components/regSectionComp"
import type { component } from "./components/regSectionComp"
import crmImg from '../../../assets/images/crmImg.webp'




const SixthSection = () => {

    const props: component = {
        title: 'Smart CRM',
        p: <p>Keep <span className="text-secondary-blue">every client detail</span> in one place.</p>,
        image: crmImg,
        subtitle: 'Build Hive\'s built-in CRM lets you track communication, job history, reminders, and notes — so you never miss a follow-up or forget a name.'
    }

    return (
        <div className="flex-center ">
            <RegSectionComp  {...props} />
        </div>
    )
}

export default SixthSection