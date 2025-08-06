import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ClientHeader from "./components/Header"
import { useState } from "react"

const Dashboard = () => {
  const [showSidebar,setShowSidebar] = useState(false)

  return (
    <div className="flex bg-light-white justify-center text-black w-screen h-screen relative">
      <div 
      className={`${showSidebar ? 'xs:block' : 'hidden'} 
       md:block w-full max-w-[300px]  absolute md:relative 
      `}>
        <Sidebar
        showSidebar={showSidebar}
        hideSidebar={()=>setShowSidebar(false)}
        />
        <div
        onClick={()=>setShowSidebar(false)}
        className={`
        bg-gray-400 absolute md:hidden opacity-60 top-0 right-0 bottom-0 left-0 w-screen h-screen`}></div>

      </div>
        <div className="flex flex-col w-full max-w-[900px]">
            <ClientHeader
            setShowSidebar={()=>setShowSidebar(true)} 
            />
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard