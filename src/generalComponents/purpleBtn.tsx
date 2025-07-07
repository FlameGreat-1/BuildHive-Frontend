type btnProp = {
  text:string;
  classes?:string;
  upperCase?:string;
}

const PurpleBtn = ({text,classes,upperCase}:btnProp) => {
  return (
    <div className={`p-3 rounded-[20px] font-mono glassmorphic w-fit text-light-white bg-gradient-to-l from-secondary-blue/60 to-purple-bg/90 text-nowrap ${classes&&classes}`}>
        {upperCase === 'false?' ? text : text.toUpperCase()}
    </div>
  )
}

export default PurpleBtn