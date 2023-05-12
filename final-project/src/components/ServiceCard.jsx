import React from 'react'
import accessImage from "../assets/icon-access-anywhere.svg";
import securityImage from "../assets/icon-security.svg";
import collaborationImage from "../assets/icon-collaboration.svg";
import storeImage from "../assets/icon-any-file.svg";

const ServiceCard = () => {
    const [cards, setCards] = React.useState([
      {
        id: 1,
        title: "Access your files, anywhere",
        desc: "The ability to use a smartphone, tablet, or computer to access you account means your files follow you everywhere.",
        img: accessImage,
      },
      {
        id: 2,
        title: "Security you can trust",
        desc: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        img: securityImage,
      },
      {
        id: 3,
        title: "Real-time collaboration",
        desc: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        img: collaborationImage,
      },
      {
        id: 4,
        title: "Store any type of file",
        desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        img: storeImage,
      },
    ]);

  return (
    <div className="flex flex-col items-center justify-center">
      {cards.map((card) => (
        <div
          className=" flex flex-col items-center justify-center my-12 text-neutral-white"
          key={card.id}
        >
          <div className="my-5">
            <img src={card.img} alt={card.title} />
          </div>
          <h3 className="text-xl font-semibold my-3">{card.title}</h3>
          <p className="text-center">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default ServiceCard