import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  title: string;
  link?: string;
  click?: () => void;
  classes?: string;
}

const QuickActions = ({ classes, children, title, link, click }: Props) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        click && click();
        link && navigate(link);
      }}
      className={`${classes && classes} text-light-white text-xs sm:text-regular
    max-w-[130px]
      bg-gradient-to-l from-secondary-blue to-primary-purple
      hover:scale-[1.1] focus:scale-[1.1]
      hover:bg-gradient-to-r transition-all focus:bg-gradient-to-r cursor-pointer
     flex flex-col lg:flex-row p-2 items-center text-center justify-center gap-2 rounded-md` }
      title={title}
    >
      {children}
      <p className="  md:block">{title}</p>
    </div>
  )
}

export default QuickActions