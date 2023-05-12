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
    <section className="h-full bg-footer-bg py-4 px-8 ">
      <div className="mt-4 pt-52">
        <img src={logo} alt="" width={200} />
      </div>
      <div className="py-10">
        {details.map((info) => (
          <div
            className="text-neutral-white flex items-start my-8 space-x-2"
            key={info.id}
          >
            <img src={info.img} alt="" />
            <p className="-mt-1">{info.text}</p>
          </div>
        ))}
        <div className="mt-20">
          <div className="text-neutral-white flex flex-col space-y-2 my-6">
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div className="text-neutral-white flex flex-col space-y-2">
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        {/* <div>
          <a href="#">
            <img src="" alt="" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
