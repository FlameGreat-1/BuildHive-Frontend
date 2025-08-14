// import { useEffect } from "react";

type Prop = {status:string}


const StatusComp = ({status}:Prop)=>{

    const statusLower = status.toLowerCase()
    return (

        <div className={`
            ${statusLower === 'pending' && 'text-red-400'} 
            ${statusLower === 'in progress' && 'text-blue-500'} 
            ${statusLower === ('completed') && 'text-green-500'} 
            ${statusLower === ('available') && 'text-green-600'} 
            ${statusLower === ('open') && 'text-green-600'} 
            ${statusLower === ('busy') && 'text-yellow-600'} 
        text-xs rounded-xl w-fit font-sans p-1`}>
            {status}
        </div>
    )
}

export default StatusComp