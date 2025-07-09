import React from 'react';
import AboutSection from './aboutSection';
import CtaComp from '../heroPage/components/ctaComp';
import Footer from '../../../generalComponents/footer';
import useScrollToTop from '../../../hooks/useScrollToT';

const About: React.FC = () => {
  useScrollToTop();
  return (
  <div className="flex flex-col">
     <AboutSection />
     <CtaComp/>
     <Footer/>
  </div>)
};

export default About;