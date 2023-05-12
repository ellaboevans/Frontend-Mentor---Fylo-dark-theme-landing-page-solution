import { useState } from "react";
import locationIcon from "../assets/icon-location.svg";
import emailIcon from "../assets/icon-email.svg";
import phoneIcon from "../assets/icon-phone.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  const [details, setDetails] = useState([
    {
      id: 1,
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      img: locationIcon,
    },
    {
      id: 2,
      text: "+1-543-123-4567",
      img: phoneIcon,
    },
    {
      id: 3,
      text: "example@fylo.com",
      img: emailIcon,
    },
  ]);
  return (
    <footer className="h-full bg-footer-bg py-4 px-8 md:pl-10 lg:pl-36">
      <div className="mt-4 pt-52">
        <img src={logo} alt="logo" width={200} />
      </div>
      {/* Footer Details */}
      <div className="py-10  md:grid grid-cols-2 lg:grid-cols-3 items-start">
        <div className="md:-mt-4">
          {details.map((info) => (
            <div
              className="text-neutral-white flex items-start my-8 space-x-2"
              key={info.id}
            >
              <img src={info.img} alt="" />
              <div>
                <p className="-mt-1">{info.text}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Site maps */}
        <div className="mt-20 md:mt-3 md:ml-24 md:flex items-start justify-between">
          <div className="text-neutral-white flex flex-col space-y-2 my-6 md:my-0 ">
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Jobs
            </a>
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Press
            </a>
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Blog
            </a>
          </div>
          <div className="text-neutral-white flex md: flex-col space-y-2">
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:font-semibold duration-100 transition-all"
            >
              Privacy
            </a>
          </div>
        </div>
        {/* Social Icons */}
        <div className="text-white  space-x-3 flex items-center lg:justify-center  mt-14 md:mt-0">
          <a
            href="#"
            className="p-2 outline-1 outline hover:text-inside-cta-cyan outline-white hover:outline-inside-cta-cyan rounded-full flex items-center justify-center duration-100 transition-all"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a
            href="#"
            className="p-2 outline-1 outline hover:text-inside-cta-cyan outline-white hover:outline-inside-cta-cyan   rounded-full flex items-center justify-center duration-100 transition-all"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            href="#"
            className="p-2 outline-1 outline hover:text-inside-cta-cyan outline-white hover:outline-inside-cta-cyan  rounded-full flex items-center justify-center duration-100 transition-all"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
