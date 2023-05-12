import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="bg-email-bg bg-mobileCurvy bg-no-repeat mt-52 bg-contain py-4">
      <HeroSection />
      {/* Testimonials */}
      <Testimonial />
      {/* Contacts */}
      <Contact />
      
    </div>
  );
};

export default Home;
