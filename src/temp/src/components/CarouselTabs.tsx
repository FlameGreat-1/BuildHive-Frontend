
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "Trade" | "Client" | "Enterprise";

interface Slide {
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  price: string;
}

const tabSlides: Record<Tab, Slide[]> = {
  Trade: [
    {
      title: "Tradie/Freelancer",
      subtitle: "Kitchen attachments installation",
      image: "/placeholder-trade-1.jpg",
      rating: 5,
      price: "$120",
    },
    {
      title: "Tradie/Freelancer",
      subtitle: "Patio Renovation – Tracked milestones and site updates",
      image: "/placeholder-trade-2.jpg",
      rating: 5,
      price: "$120",
    },
  ],
  Client: [
    {
      title: "Client Job Post",
      subtitle: "Looking for kitchen fittings",
      image: "/placeholder-client-1.jpg",
      rating: 4.5,
      price: "$100",
    },
    {
      title: "Client Project",
      subtitle: "Small bathroom rework",
      image: "/placeholder-client-2.jpg",
      rating: 4.8,
      price: "$130",
    },
  ],
  Enterprise: [
    {
      title: "Enterprise Listing",
      subtitle: "Bulk interior refurbishing",
      image: "/placeholder-enterprise-1.jpg",
      rating: 5,
      price: "$500+",
    },
    {
      title: "Corporate Job",
      subtitle: "Office floor installation",
      image: "/placeholder-enterprise-2.jpg",
      rating: 4.9,
      price: "$600",
    },
  ],
};

export const CarouselTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Trade");
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = tabSlides[activeTab];
  const visibleSlides = slides.slice(slideIndex, slideIndex + 2);

  const handlePrev = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSlideIndex((prev) => Math.min(prev + 1, slides.length - 2));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        See What <br />
        <span className="text-purple-600">others are getting done</span>
      </h2>

      <div className="flex justify-center gap-6 mb-6">
        {(["Trade", "Client", "Enterprise"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSlideIndex(0);
            }}
            className={`text-sm font-medium pb-1 border-b-2 ${activeTab === tab
              ? "border-purple-600 text-purple-600"
              : "border-transparent text-gray-500 hover:text-purple-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={handlePrev}
          disabled={slideIndex === 0}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={slideIndex >= slides.length - 2}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full"
        >
          →
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + slideIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {visibleSlides.map((slide, idx) => (
              <div
                key={idx}
                className="bg-purple-50 p-4 rounded-xl shadow-md text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{slide.title}</p>
                    <p className="text-xs text-gray-500">{slide.subtitle}</p>
                  </div>
                </div>
                <div className="text-sm text-yellow-500 mb-1">⭐ {slide.rating} Stars</div>
                <div className="text-lg font-bold text-purple-700">{slide.price}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8">
        <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold">
          GET STARTED FOR FREE
        </button>
      </div>
    </section>
  );
};
