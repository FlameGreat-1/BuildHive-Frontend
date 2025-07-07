import PurpleBtn from "../../../../generalComponents/purpleBtn"

const CtaComp = () => {
    return (
        <div className='  w-full flex-center p-4 
        bg-gradient-to-b from-accent-purple/20 to-accent-purple/70
        '>
            <div className="max-w-6xl gap-4 flex md:items-start justify- items-center flex-col lg:py-4  ">
                <div className="flex items-center md:items-start justify-center flex-col w-full xl:gap-4 text-center md:text-left">
                    <p className="text-purple-bg font-bold text-md md:text-lg ">
                        Join
                    </p>
                    <div className='font-bold text-lg md:text-xl xl:text-3xl text-black'>
                        Ready to <span className="text-secondary-blue">build smarter</span> and work faster?
                    </div>
                    <p className="text-gray-600  text-sm md:text-xl">
                        Join thousands of professionals using Build Hive to streamline their jobs, manage clients, and grow their business — whether you're a solo tradie or running a full construction team.
                    </p>
                </div>
                <PurpleBtn text="get started for free" />
            </div>

        </div>
    )
}

export default CtaComp