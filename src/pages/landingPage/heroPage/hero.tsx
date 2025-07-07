
import FourthSection from "./fourthSection"
import HeroSection from "./components/heroSection"
import SecondSection from "./secondSection"
import ThirdSection from "./thirdSection"
import FifthSection from "./fifthSection"
import SixthSection from "./sixthSection"
import CtaComp from "./components/ctaComp"
import Footer from "../../../generalComponents/footer"
import TestimonialSection from "./testimonialSection"

const Hero = () => {

  return (
    <div className="w-full">
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection/>
      <SixthSection/>
      <TestimonialSection/>

      <CtaComp/>
      <Footer/>
    </div>
  )
}

export default Hero