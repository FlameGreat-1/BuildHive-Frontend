import React from 'react'

type ChildComp = {
    children: React.ReactNode
}

const BgLandingComp: React.FC<ChildComp> = ({ children }) => {
    return (
        <div id="heroSection" className=" w-full 2xl:h-screen max-h-[1000px] glassmorphic bg-gradient-to-l from-light-white to-secondary-blue/30 flex justify-center align-start pt-[6rem] pb-4">
            {children}
        </div>
    )
}

export default BgLandingComp