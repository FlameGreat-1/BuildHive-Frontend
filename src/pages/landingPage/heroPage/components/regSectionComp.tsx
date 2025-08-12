import React from 'react'

export interface component {
    title:string;
    p:React.ReactNode;
    subtitle:string;
    image:string;
    classes?:string;
}

const RegSectionComp = ({title, p,subtitle,image,classes}:component) => {
  return (
    <div className={`${classes && classes} flex md:items-center justify-center flex-col  sm:flex-row w-full max-w-6xl p-4 gap-4`}>
        <div className="flex items-center md:items-start justify-center flex-col w-full sm:w-1/2  text-center md:text-left">
            <p className="text-purple-bg font-bold text-md md:text-lg">
                {title}
            </p>
            <div className='font-bold text-lg md:text-xl '>
                {p}
            </div>
            <p className="text-gray-600  text-sm">
                {subtitle}
            </p>
        </div>
        <div className="object-contain w-full rounded-sm sm:w-1/2">
            <img src={image} alt={title} loading='lazy' />
        </div>
    </div>
  )
}

export default RegSectionComp