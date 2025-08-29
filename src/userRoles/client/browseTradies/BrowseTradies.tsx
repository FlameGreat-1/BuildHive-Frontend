import TradeSearch from "@/generalComponents/SearchInput"
import TradieComponent, { type TradieCompProps } from "./components/TradieComponent"
import profilePic from '@/assets/images/profilePic.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"
import { usePageTitle } from "../dashboard/Dashboard"


const tradiesArray: TradieCompProps[] = [
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
  {
    name: 'andrew tate',
    pic: profilePic,
    address: 'Southern California, Jungle Side',
    rating: 4.5,
    noOfRatings: 62,
    occupation: 'blogger'

  },
]

const BrowseTradies = () => {

  const setTitle = usePageTitle()
  useEffect(()=>{
    setTitle('Browse Tradies')
  },[])

  return (
    <div className="w-full flex sm:px-4 flex-col overflow-auto">
      <TradeSearch />

      {/* Top Rated Tradies Section */}
      <div className="flex flex-col w-full  p-2 gap-2 relative">
        <p className="font-semibold self-center">Top Rated Tradies</p>
        <div className="w-full overflow-x-auto hide-scroll">
          <div className={`grid grid-rows-2 md:max-w-[600px] lg:max-w-[700px] ${/*auto-cols-[minmax(300px,1fr)] sm:auto-cols-[minmax(350px,1fr)]*/ ''} grid-flow-col  gap-2`}>
            {
              tradiesArray.map((tradie, index) => (
                <TradieComponent {...tradie} key={index} />
              ))
            }
          </div>
        </div>
        <FontAwesomeIcon
          className="absolute bg-slate-500/70 p-2 rounded-[50%] top-1/2 right-4"
          icon={faAngleRight} />
      </div>
      {/* All Tradies Section */}
      <div className="flex w-full flex-col p-2 gap-2">
        <p className="font-semibold self-center">All Tradies</p>
        <div className="flex flex-col justify-center sm:justify-between w-full  gap-2 lg:gap-4">
          {
            tradiesArray.map((tradie, index) => (
              <TradieComponent {...tradie} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default BrowseTradies