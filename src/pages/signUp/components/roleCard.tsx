import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface props {
    image: string;
    role: string;
    description: string;
    chosenRole:string;
    chooseRole:(role:string)=>void;
}


const RoleCard = ({ image, role, description,chooseRole,chosenRole }: props) => {
    return (
        <div className="border-[1px] border-dark-black max-w-[250px] rounded-[20px] flex-center flex-row-reverse sm:flex-col p-2 gap-2 text-left sm:text-center sm:w-[200px] relative" 
        onClick={()=>chooseRole(role)}
        >
            <div className="flex flex-col w-1/2 sm:w-fit">
                <p className="font-bold ">{role}</p>
                <p className="font-semibold sm:hidden">{description}</p>
            </div>
            <img src={image} alt={role} className="w-[40%] relative -top-6 bg-light-white sm:top-0 sm:w-1/2" />
            <p className="font-semibold hidden sm:block">{description}</p>
            <FontAwesomeIcon icon={faCheckCircle} className={`${chosenRole === role? 'text-green-600':'hidden'} absolute top-2 right-4 `}/>
        </div>
    )
}

export default RoleCard