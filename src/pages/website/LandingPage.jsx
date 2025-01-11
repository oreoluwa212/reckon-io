import CTASection from "@/components/landing/CTASection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import Footer from "../../components/landing/Footer";
import HeroSection from "../../components/landing/HeroSection";
import NavMenu from "../../components/landing/NavMenu";
import Testimonials from "../../components/landing/TestimonialsSection";
import UniqueSection from "../../components/landing/UniqueSection";

const Landing = () => {
  return (
    <div className="bg-white font-sans">
      <NavMenu />
      <HeroSection sectionId={"home"} />
      <FeaturesSection sectionId={"features"} />
      <UniqueSection sectionId="about" />
      <Testimonials />
      <CTASection sectionId={"download"} />
      <Footer />
    </div>
  );
};

export default Landing;
