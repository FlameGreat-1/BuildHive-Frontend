type btnProp = {
  text:string;
  classes?:string;
  upperCase?:string;
  click?:()=>void | Promise<void>;
}

const PurpleBtn = ({text,classes,upperCase,click}:btnProp) => {
  return (
    <div className={`p-3 rounded-[20px] font-mono glassmorphic w-fit text-light-white bg-gradient-to-l from-secondary-blue/60 to-purple-bg/90 cursor-pointer text-nowrap ${classes&&classes}`}
    onClick={()=>{click?.()}}
    >
        {upperCase === 'false' ? text : text.toUpperCase()}
    </div>
  )
}

export default PurpleBtn