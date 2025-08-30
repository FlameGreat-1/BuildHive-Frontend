import { Rating } from '@mui/material'
import { Link } from 'react-router-dom';


export interface TradieCompProps {
    pic: string;
    name: string;
    address: string;
    rating: number;
    noOfRatings: number;
    occupation: string;
}

const TradieComponent = ({ pic, name, address, rating, noOfRatings, occupation }: TradieCompProps) => {
    return (
        <Link to={`${name.split(' ').join(('-'))}`}>

            <div className='flex w-full min-w-[300px]  border border-primary-purple rounded-md shadow-md justify-between p-2 '>
                <div className="flex gap-2 w-fit">
                    <img
                        className='w-12 aspect-square object-contain md:w-16'
                        src={pic}
                        alt="Profile Pic" />
                    <div className="flex flex-col overflow-hidden">
                        <p className="text-black font-semibold capitalize">{name}</p>
                        <address
                            title={address}
                            className="text-gray-500 max-w-[120px] sm:max-w-[150px] md:max-w-[160px] text-sm truncate  ">{address}</address>
                        <Rating
                            size='small'
                            name='read-only-rating'
                            value={rating ?? 0}
                            precision={0.5}
                            readOnly />
                        <p className="text-xs md:text-sm">{noOfRatings} Reviews</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-end w-fit">
                    <p className="text-black capitalize">{occupation}</p>
                    <p className='border border-primary-purple rounded-md w-fit p-1 px-2 hover:cursor-pointer hover:font-bold text-center text-sm text-nowrap '>View Profile</p>
                </div>
            </div>
        </Link>
    )
}

export default TradieComponent