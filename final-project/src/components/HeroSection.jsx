import heroImage from "../assets/illustration-intro.png";
import productiveImage from "../assets/illustration-stay-productive.png";
import arrowRight from "../assets/icon-arrow.svg";
import ServiceCard from "./ServiceCard";

const HeroSection = () => {
  return (
    <section className=" bg-main-background utline mt-60 px-4 ">
      <div className="px-2 ">
        <div className=" -mt-32 flex justify-center item-center">
          <img
            src={heroImage}
            alt="hero-illustration"
            width={280}
            className="mt-16 absolute top-24"
          />
        </div>
        <div className="-mt-8 mb-10 px-3 text-neutral-white flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            All your files in one secure location, accessible anywhere.
          </h3>
          <p className="text-center text-[16px] mb-6">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <a
            href="#"
            className="py-3 px-20 bg-inside-cta-blue hover:bg-inside-cta-cyan text-md font-semibold rounded-full "
          >
            Get Started
          </a>
        </div>
        {/* Service Cards */}
        <ServiceCard />
        {/* Productive Action */}
        <div className="">
          <div className="mt-20 flex justify-center item-center">
            <img
              src={productiveImage}
              alt="productive-illustration"
              width={300}
            />
          </div>
          <div className="text-neutral-white mt-10">
            <h3 className="font-semibold text-center text-xl my-6">
              Stay productive, wherever you are
            </h3>
            <p className="my-3">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center space-x-1 text-inside-cta-cyan hover:text-white border-b-2 border-b-inside-cta-cyan hover:border-b-white w-[161px] mt-8"
          >
            <p> See how Fylo works </p>
            <ion-icon name="arrow-forward-circle"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
