import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import ContactUsCard from "./contactUsCard";

const faqTabs = ["Tradie", "Client", "Enterprise"] as const;
type TabKey = typeof faqTabs[number];

type FAQItem = { question: string; answer: string };

const faqs: Record<TabKey, FAQItem[]> = {
  Tradie: [
    { question: "How do I sign up as a Tradie?", answer: "You can sign up by visiting the Tradie registration page." },
    { question: "What tools do I need?", answer: "All you need is a smartphone and your trade skills." },
    { question: "How do I get paid?", answer: "Payments are processed securely to your linked account." },
    { question: "Can I reject a job?", answer: "Yes, you can choose which jobs to accept or reject." },
    { question: "What areas can I work in?", answer: "You can select your preferred work radius during signup." },
    { question: "Is there a service fee?", answer: "Yes, a small fee is deducted per job completed." }
  ],
  Client: [
    { question: "How do I book a service?", answer: "Choose a service and confirm your booking." },
    { question: "Can I rate a Tradie?", answer: "Yes, ratings help ensure quality service." },
    { question: "How are Tradies verified?", answer: "Each Tradie goes through a strict verification process." },
    { question: "What if I’m not satisfied?", answer: "You can request a review or partial refund." },
    { question: "Is there customer support?", answer: "Yes, 24/7 support is available via chat and phone." },
    { question: "How do I cancel a booking?", answer: "You can cancel from your account dashboard." }
  ],
  Enterprise: [
    { question: "Can we onboard multiple users?", answer: "Yes, enterprise accounts support team onboarding." },
    { question: "Are there API integrations?", answer: "Yes, APIs are available upon request." },
    { question: "Do you offer invoicing?", answer: "Monthly invoicing is available for enterprise clients." },
    { question: "How secure is the platform?", answer: "We follow industry-leading security protocols." },
    { question: "Is there a contract?", answer: "We offer flexible, non-binding contracts." },
    { question: "Can we customize features?", answer: "Yes, we offer customizable enterprise solutions." }
  ]
};

export default function FAQSection() {
  const [currentTab, setCurrentTab] = useState<TabKey>("Tradie");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const currentFAQs = faqs[currentTab];

  const toggleExpand = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const nextTab = () =>
    setCurrentTab(faqTabs[(faqTabs.indexOf(currentTab) + 1) % faqTabs.length]);

  const prevTab = () =>
    setCurrentTab(
      faqTabs[(faqTabs.indexOf(currentTab) - 1 + faqTabs.length) % faqTabs.length]
    );

  return (
    <div className="flex-center w-full" id="faq-section">
      <div className="flex flex-col justify-center items-center md:flex-row gap-6 p-4 w-full max-w-6xl text-black">
        <div className="flex flex-between lg:w-[40%] flex-col gap-8 p-8 w-fit">
          <div className="text-2xl sm:text-4xl font-bold text-center md:text-left ">
            Frequently Asked Questions
          </div>
          <ContactUsCard />
        </div>

        <div className="md:w-[60%] flex-center flex-col w-full">
          <div className="flex items-center w-[80%] justify-between mb-4 max-w-[320px]">
            <span className="text-lg flex-center gap-3  font-semibold ">{currentTab}
              <span className="flex gap-2">
                {
                  faqTabs.map((tab, index) => (
                    <div className={`${currentTab === tab ? 'bg-black' : 'bg-white'} " rounded-full w-2 h-2 border-[2px] border-black rounded-full"`} key={index}></div>
                  ))
                }
              </span>
            </span>
            <div className="flex gap-8">
              <p onClick={prevTab}>
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              </p>
              <p onClick={nextTab}>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center justify-center  gap-4">
            {currentFAQs.map((faq, index) => (
              <div key={index} className="bg-secondary-blue/30 text-black p-4 rounded shadow w-[300px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <h3 className="font-medium">{faq.question}</h3>
                  <div className="w-6 h-6 bg-light-white text-black flex items-center justify-center ml-2">
                    <FontAwesomeIcon
                      icon={expandedIndex === index ? faCaretUp : faCaretDown}
                      className="w-5 h-5"
                    />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.p
                      className="mt-2 text-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}