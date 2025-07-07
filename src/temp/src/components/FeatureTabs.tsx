
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tab = "Trade" | "Client" | "Enterprise";

interface Card {
  title: string;
  description: string;
  image: string;
}

const tabData: Record<Tab, Card[]> = {
  Trade: [
    {
      title: "Apply to Jobs with Credits",
      description:
        "Access a steady stream of job opportunities and apply using a simple credit system.",
      image: "/placeholder-trade-1.jpg",
    },
    {
      title: "All-in-One Business Toolkit",
      description:
        "Manage clients, send invoices, and grow your trade business with ease.",
      image: "/placeholder-trade-2.jpg",
    },
  ],
  Client: [
    {
      title: "Find Skilled Tradespeople",
      description:
        "Post your project and connect with qualified professionals in minutes.",
      image: "/placeholder-client-1.jpg",
    },
    {
      title: "Track Project Progress",
      description:
        "Monitor work, get updates, and stay in control of your build.",
      image: "/placeholder-client-2.jpg",
    },
  ],
  Enterprise: [
    {
      title: "Advanced Workforce Insights",
      description:
        "Track teams, performance, and hiring trends in one powerful dashboard.",
      image: "/placeholder-enterprise-1.jpg",
    },
    {
      title: "Bulk Job Distribution",
      description:
        "Post hundreds of job listings and manage your workforce pipeline efficiently.",
      image: "/placeholder-enterprise-2.jpg",
    },
  ],
};

export const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Trade");

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <p className="text-sm font-bold text-gray-800">
          Powerful Tools Built for <br />
          <span className="text-blue-600">Construction Pros</span>
        </p>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Our tools are made for everything—from hiring and invoicing to team
          management and job tracking.
        </p>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        {(["Trade", "Client", "Enterprise"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 font-medium \${activeTab === tab
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {tabData[activeTab].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * idx }}
              className="rounded-xl shadow-md p-4 bg-white border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section >
  );
};
