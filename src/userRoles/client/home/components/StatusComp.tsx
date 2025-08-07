// import { useEffect } from "react";

type Prop = {status:string}


const StatusComp = ({status}:Prop)=>{
    // let color : string;
    // useEffect(()=>{
    //     const statusLower = status.toLowerCase()
    //     if(statusLower === 'pending') {
    //         color = 'bg-red-400'
    //     }
    //     if(statusLower === 'in progress') {
    //         color = 'bg-blue-500'
    //     }
    //     if(statusLower === 'completed') {
    //         color = 'bg-green-500'
    //     }
    // },[])

    // switch (status.toLowerCase()) {
    //     case 'pending':
    //         setColor('bg-red-400')
    //         break;
    
    //     case 'in progress':
    //         setColor('bg-blue-500')
    //         break;
    
    //     case 'completed':
    //         setColor('bg-green-500')
    //         break;
    
    //     default:
    //         break;
    // }
    return (
        <div className={`
            ${status.toLowerCase() === 'pending' && 'bg-red-400'} 
            ${status.toLowerCase() === 'in progress' && 'bg-blue-500'} 
            ${status.toLowerCase() === 'completed' && 'bg-green-500'} 
        text-xs lg:text-sm rounded-sm w-fit p-1`}>
            {status}
        </div>
    )
}

export default StatusComp