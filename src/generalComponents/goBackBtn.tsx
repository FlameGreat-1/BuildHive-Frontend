import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

const GoBackBtn = () => {

    const navigate = useNavigate()

    return (
        <div className="text-primary-purple"
            onClick={() => navigate(-1)}
        >
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
        </div>
    )
}

export default GoBackBtn