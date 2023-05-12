import React, { useEffect } from "react";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertMessage(false);
    }, 3000);
    timer;
    return () => clearTimeout(timer);
  });

  // Email Validation
  const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setAlertMessage(true);
    } else {
      console.log({ Email: email });
    }

    setEmail("");
  };

  return (
    <section className=" flex flex-col items-center justify-center -mt-40 bg-email-bg text-neutral-white  rounded shadow-md absolute mx-4 md:ml-0 right-0 md:right-10 tablet:right-[4rem lg:right-[13rem] md:w-[700px] lg:w-[900px]  md:px-28 md:py-10 top-auto ">
      <div className="text-center p-2">
        <h3 className="font-semibold text-xl md:text-3xl my-4">
          Get early access today
        </h3>
        <p className="my-4">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className=" mb-6 md:w-[600px] ">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex items-center justify-center md:space-x-8 flex-col md:flex-row"
        >
          <input
            type="text"
            placeholder="email@example.com"
            className="p-3 px-6 rounded-full mt-4 mb-6 md:mt-0 md:mb-0 flex-1 placeholder:text-sm focus:outline-none focus-visible:text-slate-800 font-semibold"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 px-6 w-full md:w-52 rounded-full cursor-pointer font-semibold bg-inside-cta-blue hover:bg-inside-cta-cyan focus:outline-none duration-100 transition"
            disabled={!email}
          >
            Get Started For Free
          </button>
        </form>
        {alertMessage && (
          <div>
            <p className="text-error-alert text-center md:text-left pt-4 md:pl-4">
              Please enter a valid email address
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
