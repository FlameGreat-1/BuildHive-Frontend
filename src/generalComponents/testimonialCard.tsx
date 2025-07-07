import quotes from '../assets/icons/quotation.svg'
import type { testimonial } from '../pages/landingPage/heroPage/testimonialSection'


const TestimonialCard = ({ name, image, testimony, accType }: testimonial) => {
    return (
        <div>
            <div className="flex-btw flex-col bg-secondary-blue/20 glassmorphic border-secondary-blue border-2 rounded-xl w-[255px] h-[320px] p-4">
                <div className="flex-btw gap-2 w-full px-2">
                    <img src={image} alt="person" className="rounded-[50%] object-contain bg-light-white w-[2rem]" />
                    <div className="flex-col flex-start items-start rounded-full border-secondary-blue border-[1px] p-3">
                        <p className="font-bold text-sm line-clamp-1">{name}</p>
                        <p className="font-light text-sm text-black">{accType}</p>
                    </div>
                </div>
                <div className="flex-col">
                    <img src={quotes} alt="quotes" className='w-[2rem]'/>
                    <p className="font-bold text-sm">{testimony}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard