
import React, { useState } from "react";
import PurpleBtn from "../../../../generalComponents/purpleBtn";
import hammer from '../../../../assets/icons/hammer.svg'
import smallBag from '../../../../assets/icons/smallBag.svg'
import entP from '../../../../assets/icons/entP.svg'
import RatingsComp, { type Rating } from "./ratingsComp";
import ProfilePic from '../../../../assets/images/profilePic.png'

import { useAutoScroll } from "../../../../hooks/useAutoScroll";



type Tab = string;

type Tabs = {
  title: Tab;
  img: string;
}

const tabs: Tabs[] = [
  {
    title: 'Tradie',
    img: hammer
  },
  {
    title: 'Client',
    img: smallBag
  },
  {
    title: 'Enterprise',
    img: entP
  },
]


const tabSlides: Rating[] = [
  {
    title: "Tradie/Freelancer",
    subtitle: "Kitchen attachments installation",
    image: ProfilePic,
    rating: 5,
    price: 120,
  },
  {
    title: "Tradie/Freelancer",
    subtitle: "Patio Renovation – Tracked milestones and site updates",
    image: ProfilePic,
    rating: 5,
    price: 120,
  },
  {
    title: "Client",
    subtitle: "Looking for kitchen fittings jhijhihfioj iofjaio aifj weafo afffae aefef ioj",
    image: ProfilePic,
    rating: 4.5,
    price: 100,
  },
  {
    title: "Client",
    subtitle: "Small bathroom rework",
    image: ProfilePic,
    rating: 4.8,
    price: 130,
  },
  {
    title: "Enterprise",
    subtitle: "Bulk interior refurbishing",
    image: ProfilePic,
    rating: 5,
    price: 500,
  },
  {
    title: "Enterprise",
    subtitle: "Office floor installation",
    image: ProfilePic,
    rating: 4.9,
    price: 600,
  },
  {
    title: "Tradie/Freelancer",
    subtitle: "Kitchen attachments installation",
    image: ProfilePic,
    rating: 5,
    price: 120,
  },
  {
    title: "Tradie/Freelancer",
    subtitle: "Patio Renovation – Tracked milestones and site updates",
    image: ProfilePic,
    rating: 5,
    price: 120,
  },
  {
    title: "Client",
    subtitle: "Looking for kitchen fittings jhijhihfioj iofjaio aifj weafo afffae aefef ioj",
    image: ProfilePic,
    rating: 4.5,
    price: 100,
  },
  {
    title: "Client",
    subtitle: "Small bathroom rework",
    image: ProfilePic,
    rating: 4.8,
    price: 130,
  },
  {
    title: "Enterprise",
    subtitle: "Bulk interior refurbishing",
    image: ProfilePic,
    rating: 5,
    price: 500,
  },
  {
    title: "Enterprise",
    subtitle: "Office floor installation",
    image: ProfilePic,
    rating: 4.9,
    price: 600,
  },
]

export const CarouselTabs: React.FC = () => {
  
  const [activeTab, setActiveTab] = useState<Tab>("Tradie");

  const scroll = useAutoScroll<HTMLDivElement>({
    speed: 1,
    direction: "right",
    pauseOnHover: true,
  });

  

  return (
    <section className="max-w-6xl w-full px-4 py-12 text-center">
      <h2 className="text-xl sm:text-3xl lg:text-4xl  font-bold text-purple-bg mb-4 md:mb-8">
        See what others are getting done <br />

      </h2>
      {/* TAB SECTION */}
      <div className="flex justify-center gap-6 mb-6">
        {tabs.map((tab, index) => (
          <p
            key={index}
            onClick={() => {
              setActiveTab(tab.title);
              // setSlideIndex(0);
            }}
            className={`text-sm font-medium flex pb-1 border-b-2 ${activeTab === tab.title
              ? "border-purple-600 text-purple-600"
              : "border-transparent text-gray-500 hover:text-purple-500"}`}
          >
            <img src={tab.img} alt={tab.title} className="mr-1" />{tab.title}
          </p>
        ))}
      </div>

      <div className="relative  hide-scrollbar">
       

        <div className="overflow-x-scroll hide-scroll flex " ref={scroll}>
          <div
            // ref={scroll}
            className="inline-grid grid-rows-2 items-start auto-cols-auto grid-flow-col no-sc hide-scrollbar gap-4 ">
            {tabSlides.map((card, index) => (
              card.title.includes(activeTab) && <RatingsComp {...card} key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex md:ml-8 justify-center sm:justify-start">
        <PurpleBtn text={"get started for free"} classes="sm:p-4 min-w-fit" />
      </div>
    </section>
  );
};
