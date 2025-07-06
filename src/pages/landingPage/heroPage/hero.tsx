import PurpleBtn from "../../../generalComponents/purpleBtn"
// import purpleSq from '../../../assets/images/purpleSquare.png'
// import WhiteFeatureComp from './whiteFatureomp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Banner from "./components/banner";

const Hero = () => {

  return (
    <div>
      <div id="heroSection" className=" w-full h-screen glassmorphic bg-gradient-to-l from-light-white to-secondary-blue/30 flex-center  ">
        <div className="relative top-[2rem] sm:top-[1rem] h-fit flex-center    flex-col p-4">
          <div className="flex-center flex-col-reverse text-purple-bg sm:flex-row gap-8 w-full h-fit x:w-[80%] font-inter">
            {/* HERO TEXT */}
            <div className="w-[90%] sm:w-1/2 flex justify-center sm:justify-start sm:ml-4 flex-col gap-4 pb-4">
              <h2 className="font-san text-center sm:text-left  font-semibold text-lg sm:leading-normal xl:text-[4rem] sm:text-[2rem]">
                Manage Jobs, Teams and Trades, -All in One Place.
              </h2>
              <p className="font-inter text-sm md:text-xl">
                Streamline construction work with smart tools for clients, tradies and enterprises.
              </p>
              <div className="flex gap-4 flex-col items-center sm:justify-start sm:flex-row">
                <PurpleBtn text={"get started for free"} classes="sm:p-4 min-w-fit" />
                <div className="flex-center gap-2 ">
                  <p className="text-xl text-nowrap">Learn More</p>
                  <FontAwesomeIcon className="inline" icon={faArrowRight} />
                </div>
              </div>
              <div className="flex-center justify-center sm:justify-start">
                <div className="border-r-2 px-2 flex-center flex-col border-purple-bg">
                  <p className="font-bold">15.5K</p>
                  <p className="text-xs">Jobs completed</p>
                </div>
                <div className="border-r-2 px-2 flex-center flex-col border-purple-bg">
                  <p className="font-bold">15.5K</p>
                  <p className="text-xs">Active clients</p>
                </div>
                <div className="flex-center px-2 flex-col">
                  <p className="font-bold">15.5K</p>
                  <p className="text-xs">Enterprise team</p>
                </div>
              </div>
            </div>
            {/* BANNER */}
            <div className="sm:w-1/2 h-full flex-center">
              <Banner />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero