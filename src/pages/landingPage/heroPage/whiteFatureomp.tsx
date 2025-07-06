type text={text:string;}
const WhiteFeatureComp = ({text}:text) => {
  return (
    <div className=" bg-light-white rounded-[20px] border border-primary-purple p-2 inline-block text-xs sm:text-sm">
        {text}
    </div>
  )
}

export default WhiteFeatureComp