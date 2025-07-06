type btnProp = {
  text:string;
  classes?:string;
}

const LightPurpleBtn = ({text,classes}:btnProp) => {
  return (
    <div className={`p-3 rounded-[20px] font-mono bg-accent-purple/50 glassmorphic w-fit ${classes&&classes}`}>
        {text.toUpperCase()}
    </div>
  )
}

export default LightPurpleBtn