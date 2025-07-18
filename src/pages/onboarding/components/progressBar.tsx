interface props { totalNumber: number; currentNumber: number; }

const ProgressBar = ({ totalNumber, currentNumber }: props) => {

  return (
    <div className="flex-center gap-2">
      {
        Array.from({length:totalNumber}).map((_,index)=>(
          <p key={index} className={`w-2 h-2 rounded-[50%] border border-primary-purple
            ${index <= currentNumber-1 && "bg-primary-purple"}
            `
          }></p>
        ))
        }
    </div>
  )
}

export default ProgressBar