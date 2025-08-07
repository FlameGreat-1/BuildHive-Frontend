interface Props {
    children:React.ReactNode;
    title:string;
}

const QuickActions = ({children,title}:Props) => {
  return (
    <div className="text-light-white text-xs sm:text-regular
    max-w-[150px]
      bg-gradient-to-l from-secondary-blue to-primary-purple
     flex flex-col lg:flex-row p-2 lg:p-4 items-center text-center justify-center gap-2 rounded-md">
        {children}
        <p className="">{title}</p>
    </div>
  )
}

export default QuickActions