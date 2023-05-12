import heroImage from "../assets/illustration-intro.png";
import productiveImage from "../assets/illustration-stay-productive.png";
import ServiceCard from "./ServiceCard";

const HeroSection = () => {
  return (
    <section className=" bg-main-background utline mt-60 md:mt-[350px] lg:mt-[500px] px-4 md:px-24 ">
      <div className="px-2 ">
        <div className=" -mt-32 flex justify-center item-center">
          <img
            src={heroImage}
            alt="hero-illustration"
            // width={280}
            className="mt-16 w-[280px] md:w-[580px] absolute top-24"
          />
        </div>
        <div className="-mt-8 md:-mt-44 lg:-mt-72 md:mb-28 mb-10 px-3 tablet:px-[8rem] lg:px-80 text-neutral-white flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-semibold md:px-52 mb-6 text-center">
            All your files in one secure location, accessible anywhere.
          </h3>
          <p className="text-center text-[16px] md:px-24 mb-6">
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
        <div className="lg:flex md:mt-28 items-center justify-center ">
          <div className="mt-20 md:mt-0 flex justify-center item-center">
            <img
              src={productiveImage}
              alt="productive-illustration"
              className="w-[300px] md:w-[700px]"
            />
          </div>
          <div className="md:px-14 md:flex flex-col md:items-center lg:items-start justify-center">
            <div className="text-neutral-white mt-10">
              <h3 className="font-semibold md:text-center tablet:pr-[1rem] lg:pr-72  lg:text-left text-xl md:text-3xl my-6">
                Stay productive, wherever you are
              </h3>
              <p className="my-3 md:text-center lg:text-left">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="md:text-center lg:text-left">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center space-x-1 text-inside-cta-cyan hover:text-white border-b-2 border-b-inside-cta-cyan hover:border-b-white w-[147px] mt-8"
            >
              <p className="text-[14px]"> See how Fylo works </p>
              <ion-icon name="arrow-forward-circle"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
