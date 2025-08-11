import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ClientHeader from "./components/Header"
import { createContext, useContext, useState } from "react"


const PageTitleContext = createContext<(title: string) => void>(() => { })
export const usePageTitle = () => useContext(PageTitleContext)

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [title, setTitle] = useState('')


  return (
    <div className="flex bg-light-white justify-center font-mono text-black w-screen h-screen relative overflow-hidden">
      <div
        // onClick={()=>setShowSidebar(false)}
        className={`${showSidebar ? 'xs:block' : 'hidden'} 
       md:block w-full md:max-w-[250px] lg:max-w-[300px] z-[100] absolute md:relative md:border-r-2 border-gray-400
      `}>
        <Sidebar
          showSidebar={showSidebar}
          hideSidebar={() => setShowSidebar(false)}
        />
        <div
          onClick={() => setShowSidebar(false)}
          className={`
        bg-gray-400 absolute md:hidden opacity-60 top-0 right-0 z-[50] bottom-0 left-0 w-screen h-screen`}></div>

      </div>
      <div className="flex flex-col w-full md:mx-4 h-screen max-w-[1000px] relative ">
        <ClientHeader
          title={title}
          setShowSidebar={() => setShowSidebar(true)}
        />
        <div className="overflow-y-auto relative z-5 h-full hide-scroll">
          <PageTitleContext.Provider value={setTitle}>
            <Outlet />
          </PageTitleContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Dashboard