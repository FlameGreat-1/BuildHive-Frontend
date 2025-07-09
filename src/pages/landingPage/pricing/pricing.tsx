import React from 'react';
import PricingSection from './pricingSection';
import Footer from '../../../generalComponents/footer';
import CtaComp from '../heroPage/components/ctaComp';
import FAQSection from '../heroPage/components/FAQSection';
import useScrollToTop from '../../../hooks/useScrollToT';

const Pricing: React.FC = () => {
  useScrollToTop();
  return (
    <div className="w-full">
      <PricingSection />
      <FAQSection />
      <CtaComp />
      <Footer />
    </div>
  );
};

export default Pricing;