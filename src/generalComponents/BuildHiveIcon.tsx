import buildhiveIcon from '@/assets/icons/buildHive.svg'

interface Props {
    classes?:string;
}


const BuildHiveIcon = ({classes}:Props) => {
    return (
        <div className={`${classes && classes} flex-center gap-1`}>
            <img
                className='w-8 md:w-12'
                src={buildhiveIcon}
                alt='BuildHive Icon' />
            <p className="text-primary-purple text-lg md:text-2xl font-bold">Build Hive</p>
        </div>
    )
}

export default BuildHiveIcon