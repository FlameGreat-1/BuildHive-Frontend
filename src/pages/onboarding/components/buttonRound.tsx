import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { gradientToRPurple } from "../../../global-variables"

interface prop { click:()=>void}

const ButtonRound = ({click}:prop) => {
  return (
    <div className={gradientToRPurple +  "flex-center w-8 h-8 rounded-[50%] "}
    onClick={()=>{click()}}
    >
        <FontAwesomeIcon icon={faArrowRight} className=" color-light-white w-6" />
    </div>
  )
}

export default ButtonRound