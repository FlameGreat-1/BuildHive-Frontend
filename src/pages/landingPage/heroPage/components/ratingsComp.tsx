import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface Rating {
    image:string;
    title:string;
    subtitle:string;
    rating:number;
    price:number;
}


const RatingsComp = ({image,title,subtitle,rating,price}:Rating) => {
  return (
    <div className="flex-btw flex-col  p-2 w-[250px] h-[110px] bg-accent-purple/50 glassmorphic rounded-md  sm:w-[350px]">
        <div className="flex gap-8 w-[80%] ">
            <img src={image} alt={title}  className="w-8 object-contain "/>
            <div className="flex items-start flex-col ">
                <p className="text-purple-bg">{title}</p>
                <p className="font-bold text-xs text-left line-clamp-3 max-h-[60px]">{subtitle}</p>
            </div>
        </div>
        <div className="flex-btw w-[90%] ">
            <div className="bg-light-white text-[.7rem] rounded-xl p-1">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1"/>
                <span>{rating} Stars</span>
            </div>
            <p className="font-bold mr-4">${price}</p>
        </div>
    </div>
  )
}

export default RatingsComp