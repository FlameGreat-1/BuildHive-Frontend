import BuildHiveIcon from "@/generalComponents/BuildHiveIcon"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import bellIcon from '@/assets/icons/bellIcon.svg'
import { useState } from "react"

interface HeaderProps {
    setShowSidebar: () => void;
}

const ClientHeader = ({ setShowSidebar }: HeaderProps) => {

    const [searctTradies, setSearchTradies] = useState('')
    const [showNotifs, setShowNotifs] = useState(false)
    const handleSearchTradies = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSearchTradies(value.trim())
    }

    return (
        <div className="flex flex-col md:flex-row-reverse w-full md:w-full p-4 justify-center gap-2  z-10 items-center md:justify-start overflow-hidden">
            <div className="justify-between md:justify-end items-center w-full md:w-fit flex">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={setShowSidebar}
                    className="text-primary-purple fa-xl md:hidden" />
                <BuildHiveIcon classes="md:hidden" />
                <span >
                    <div 
                    className={`${!showNotifs && 'hidden'} absolute z-20 top-12 right-4  rounded-md border space-y-4 p-4 bg-light-white w-[90%] min-w-[250px]  max-w-[400px] h-[300px]`}>
                        <p className="border-b-2 w-full  border-gray-300">Notifications</p>
                        <div className="flex w-full gap-2 flex-col">
                            <p className="w-full h-[50px] bg-gray-300 "></p>
                            <p className="w-full h-[50px] bg-gray-300 "></p>
                            <p className="w-full h-[50px] bg-gray-300 "></p>
                            <p className="w-full h-[50px] bg-gray-300 "></p>
                        </div>
                    </div>
                    <div 
                    onClick={()=>setShowNotifs(!showNotifs)}
                    className="relative">
                        <img
                            src={bellIcon}
                            title="Notifications"
                            alt="Notifications" />
                        <span className="absolute top-0 right-0 bg-red-500 text-light-white rounded-[50%] p-1 w-4 h-4 text-xs flex-center"><p>1</p></span>
                    </div>
                </span>
            </div>
            <input
                name="tradies"
                title="Browse tradies"
                value={searctTradies}
                onChange={handleSearchTradies}
                style={{ 'boxShadow': '0 0 2px 1px black inset' }}
                className=" shad shadow-black  max-w-[300px] bg-light-white rounded-md border-1 border-black p-2"
                type="text"
                placeholder="Browse Tradies"
            />
        </div>
    )
}

export default ClientHeader