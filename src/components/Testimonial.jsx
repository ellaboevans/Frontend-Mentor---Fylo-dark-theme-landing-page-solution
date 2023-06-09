import React from "react";
import profileOne from "../assets/profile-1.jpg";
import profileTwo from "../assets/profile-2.jpg";
import profileThree from "../assets/profile-3.jpg";
import kuoote from "../assets/bg-quotes.png";

const Testimonial = () => {
  const [testimonials, setTestimonials] = React.useState([
    {
      id: 1,
      name: "Satish Patel",
      role: "Founder & CEO, Huddle",
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profileOne,
    },
    {
      id: 2,
      name: "Bruce McKenzie",
      role: "Founder & CEO, Huddle",
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profileTwo,
    },
    {
      id: 3,
      name: "  Iva Boyd",
      role: "Founder & CEO, Huddle",
      message:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      image: profileThree,
    },
  ]);
  return (
    <div className=" pb-96 pt-40 md:pt-44 bg-main-background  -mb-8 px-4 lg:px-28">
      <div className="-mb-8 md:mb-4 px-3 md:px-0">
        <img src={kuoote} alt="quote-icon" className="w-[35px] md:w-[60px]" />
      </div>
      <div className="md:grid grid-cols-3 lg:grid-cols-3 md:space-x-3 lg:space-x-8">
        {testimonials.map((testimonial) => (
          <div
            className="bg-testimonial-bg py-3 mx-2 md:mx-0 px-3 rounded-md my-8 text-neutral-white  md:first:animate-[bounce_4s_ease-in-out_infinite]
            md:last:animate-[bounce_3s_ease-in-out_infinite]"
            key={testimonial.id}
          >
            <p className="mt-2">{testimonial.message}</p>
            <div className="flex items-center space-x-4 mt-4 ">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <h4 className="font-semibold text-lg -mb-1 ">
                  {testimonial.name}
                </h4>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
