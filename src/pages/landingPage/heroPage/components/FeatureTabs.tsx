import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import jobSearch from '../../../../assets/images/joobsearchimg.webp'
import aiHand from '../../../../assets/images/aiHands.webp'
import helmetOnT from '../../../../assets/images/helmetOnt.webp'
import threeMen from '../../../../assets/images/3men.webp'
import threeMenOW from '../../../../assets/images/3men1wm.webp'
import handOnTb from '../../../../assets/images/handOnTb.webp'






type Tab = "Tradie" | "Client" | "Enterprise";

interface Card {
  title: string;
  description: string;
  image: string;
}

const tabData: Record<Tab, Card[]> = {
  Tradie: [
    {
      title: "Apply to Jobs with Credits",
      description:
        "Access a steady stream of job opportunities and apply using a simple credit system.",
      image: jobSearch,
    },
    {
      title: "All-in-One Business Toolkit",
      description:
        "Manage clients, send invoices, and grow your trade business with ease.",
      image: aiHand,
    },
  ],
  Client: [
    {
      title: "Post & Manage Jobs",
      description: "Easily create job listings, track progress, and stay in control from start to finish.",
      image: helmetOnT,
    },
    {
      title: "Hire With Confidence",
      description:
        "Browse verified tradie profiles, compare applications, and chat directly before hiring.",
      image: threeMen,
    },
  ],
  Enterprise: [
    {
      title: "Team & Job Assignment",
      description:
        "Manage multiple workers, assign jobs internally, and monitor performance in real time.",
      image: threeMenOW,
    },
    {
      title: "Advanced Scheduling & Oversight",
      description:
        "Plan ahead with job calendars, team timelines, and centralized business insights.",
      image: handOnTb,
    },
  ],
};

export const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Tradie");

  return (
    <section className="max-w-6xl  px-4 py-12 font-sans">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-3xl font-bold text-purple-bg">
          Powerful Tools Built for <br />
          <span className="">Construction Pros</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Build Hive simplifies everything — from quoting and invoicing to team management and job tracking. Whether you're a tradie, a client, or an enterprise, it's built to streamline your workflow and grow your business.
        </p>
      </div>

      <div className="flex justify-center w-full gap-6 mb-8">
        {(["Tradie", "Client", "Enterprise"] as Tab[]).map((tab) => (
          <p
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-[4px]  ${activeTab === tab
              ? "border-secondary-blue "
              : "border-gray-400  hover:text-blue-500"}`}
          >
            {tab}
          </p>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {tabData[activeTab].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              className="rounded-xl shadow-md p-4 bg-white border border-gray-100"
            >
              <h3 className="text-lg font-bold text-purple-bg mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{card.description}</p>
              <div className="w-full h-[2px] bg-gradient-to-r from-light-white via-purple-bg to-light-white mb-2"></div>
              <img
                src={card.image}
                alt={card.title}
                loading='lazy'
                className="w-full h-48 object-cover rounded-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section >
  );
};
