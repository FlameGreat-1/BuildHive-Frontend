import FourthSection from "./fourthSection"
import HeroSection from "./components/heroSection"
import SecondSection from "./secondSection"
import ThirdSection from "./thirdSection"
import FifthSection from "./fifthSection"
import SixthSection from "./sixthSection"
import CtaComp from "./components/ctaComp"
import Footer from "../../../generalComponents/footer"
import TestimonialSection from "./testimonialSection"
import FAQSection from "./components/FAQSection"
import useScrollToTop from "../../../hooks/useScrollToT"




const Hero = () => {
  useScrollToTop()

  return (
    <div className="w-full">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <TestimonialSection />
      <FAQSection />
      <CtaComp />
      <Footer />
    </div>
  )
}

export default Hero

