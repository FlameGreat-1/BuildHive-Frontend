import PurpleBtn from "../../../../generalComponents/purpleBtn"

const ContactUsCard = () => {
    return (
        <div className="w-[300px] bg-secondary-blue/20 border-2 border-secondary-blue rounded-[40px] sm:flex flex-col gap-6 h-[200px] p-4 hidden ">
            <div className="flex-col items-start gap-4">
                <p className="font-bold text-purple-bg">
                    Still have questions?
                </p>
                <p className="font-light text-sm text-gray-900">
                    Can't find the answer to you questions?<br />
                    Send us an email and we will get back to you as soon as possible.
                </p>
            </div>
            <PurpleBtn text="Send email" />
        </div>
    )
}

export default ContactUsCard