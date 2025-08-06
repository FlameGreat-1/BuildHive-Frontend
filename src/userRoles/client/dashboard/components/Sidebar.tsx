import { Sidebar as SideBar } from 'lucide-react'
import profilePhoto from '@/assets/images/profilePic.png'
import dashBoardIcon from '@/assets/icons/dashboardIcon.svg'
import { Link } from 'react-router-dom'
import BuildHiveIcon from '@/generalComponents/BuildHiveIcon'
import messagesIcon from '@/assets/icons/messagesIcon.svg'
import jobCastIcon from '@/assets/icons/jobCastIcon.svg'
import bellIcon from '@/assets/icons/bellIcon.svg'
import gearIcon from '@/assets/icons/gearIcon.svg'
import plansIcon from '@/assets/icons/planIcon.svg'
import helpsIcon from '@/assets/icons/helpAndFaq.svg'


interface SideBarProps {
    showSidebar: boolean;
    hideSidebar: () => void;
}

const menuLinks = [
    {
        title: 'Dashboard',
        image: dashBoardIcon,
        link: 'home'
    },
    {
        title: 'Job Cast',
        image: jobCastIcon,
        link: 'job-cast'
    },
    {
        title: 'Messages',
        image: messagesIcon,
        link: 'messages'
    },
    {
        title: 'Notification',
        image: bellIcon,
        link: 'notifications'
    },
]
const settingsLinks = [
    {
        title: 'Account Settings',
        image: gearIcon,
        link: 'account-settings'
    },
    {
        title: 'Your Plan',
        image: plansIcon,
        link: 'your-plan'
    },
    {
        title: 'Helps & FAQs',
        image: helpsIcon,
        link: 'help'
    },
]


const Sidebar = ({ showSidebar, hideSidebar }: SideBarProps) => {

    return (
        <div

            className={`${!showSidebar && ''} w-[90%] md:w-full relative max-w-[300px] p-4 z-10 bg-light-white`}>

            <div className="w-full flex justify-between items-center">
                <BuildHiveIcon />
                <SideBar
                    className='md:hidden'
                    onClick={hideSidebar} />
            </div>
            <div className="rounded-md ring-2 mt-3 ring-gray-400/50 p-2">
                <div className=" flex gap-2">
                    <img
                        src={profilePhoto}
                        alt="User"
                        className='rounded-[50%] object-center w-12'
                    />
                    <div className="flex flex-col">
                        <p className="font-bold">Jake Anderson</p>
                        <p className="text-sm">Pro Member</p>
                    </div>
                </div>
            </div>
            {/* MENU SECTION */}
            <div className='mt-2 flex-col flex gap-2 w-full p-2'>
                <p className="text-gray-400">MENU</p>
                {
                    menuLinks.map((item, index) => (
                        <Link to={item.link}
                            key={index}
                        >
                            <div
                                className='w-full flex justify-start items-center gap-2 rounded-[15px] p-2 focus:bg-gray-300 hover:bg-gray-300  focus:text-black hover:text-black text-gray-500 cursor-pointer'
                            >
                                <img
                                    className='w-8'
                                    src={item.image}
                                    alt={item.title} />
                                <p className=''>{item.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            {/* SETTINGS SECTION */}
            <div className='mt-2 flex-col flex gap-2 w-full p-2'>
                <p className="text-gray-400 border-b border-gray-400">SETTINGS</p>
                {
                    settingsLinks.map((item, index) => (
                        <Link to={item.link}>
                            <div
                                className='w-full flex justify-start items-center gap-2 rounded-[15px] p-2 focus:bg-gray-300 hover:bg-gray-300  focus:text-black hover:text-black text-gray-500 cursor-pointer'
                                key={index}>
                                <img
                                    className='w-8'
                                    src={item.image}
                                    alt={item.title} />
                                <p className=''>{item.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar