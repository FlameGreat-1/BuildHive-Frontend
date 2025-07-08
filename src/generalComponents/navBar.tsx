import { NavLink, Link } from "react-router-dom"
import buildHiveIcon from '../assets/icons/buildHive.svg';
import PurpleBtn from "./purpleBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



const links: { link: string; page: string; }[] = [
    { link: '/', page: 'home' },
    { link: '/about', page: 'about' },
    { link: '/features', page: 'features' },
    { link: '/pricing', page: 'pricing' },
    { link: '/faq', page: 'faq' },
]

const NavBar = () => {


    const [showMenu, setShowMenu] = useState(false)


    return (
        <div className="w-full flex-btw px-8  my-2  sm:bg-light-white mx-8 rounded-[20px] relative z-10 lg:gap-[20%] max-w-[1200px]"
        onClick={()=>showMenu&&setShowMenu(false)}>
            <Link to={'/'}>
                <img src={buildHiveIcon} alt="BuildHive" className="w-[4rem]" />
            </Link>
            {/* SECTION FOR NAVBAR LINKS */}
            <div className="w-full">
                <div className={` ${showMenu ? 'flex ' : 'hidden'} ," flex-even w-full md:flex  flex-col md:flex-row absolute top-[5rem] left-0 right-0  md:static "`}>
                    <div className="bg-light-white md:bg-transparent md:flex-row w-full py-8 sm:py-0 rounded-b-md flex-col flex-center sm:justify-between">
                        <ul className="list-none font-sans  flex md:flex-row flex-col gap-6 w-full flex-even" >
                            {links.map((link, index) =>
                            (<li key={index}><NavLink               className="text-primary-purple" 
                                to={link.link}
                                onClick={()=>setShowMenu(false)}
                                >{link.page.toUpperCase()}</NavLink></li>
                            )
                            )
                            }
                        </ul>
                        <hr className={`w-[80%] my-4 md:hidden`} />
                        <PurpleBtn text={"Get Started"} classes="overflow-visible" />
                    </div>

                </div>
                {/* TOGGLE MENU BUTTONS */}
                <div className="flex md:hidden justify-self-end ">
                    <FontAwesomeIcon size={'2x'}
                        className={` ${showMenu ? 'hidden' : 'block'}`}
                        icon={faBars}
                        onClick={() => { setShowMenu(true) }}
                    />
                    <FontAwesomeIcon size={'2x'}
                        className={` ${showMenu ? 'block' : 'hidden'}`}
                        icon={faTimes}
                        onClick={() => { setShowMenu(false) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar