import React from 'react';
import PricingSection from './pricingSection';
import Footer from '../../../generalComponents/footer';
import CtaComp from '../heroPage/components/ctaComp';
import FAQSection from '../heroPage/components/FAQSection';

const Pricing: React.FC = () => {
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