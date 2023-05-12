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
    <section className=" flex flex-col items-center justify-center -mt-40 bg-email-bg text-neutral-white  rounded shadow-md absolute mx-4 right-0 top-auto">
      <div className="text-center p-2">
        <h3 className="font-semibold text-xl my-4">Get early access today</h3>
        <p className="my-4">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className=" mb-6">
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex items-center flex-col"
        >
          <input
            type="text"
            placeholder="email@example.com"
            className="p-3 px-6 rounded-full mt-4 mb-6 placeholder:text-sm focus:outline-none focus-visible:text-slate-800 font-semibold"
            value={email.trim()}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 px-6 w-full rounded-full font-semibold bg-inside-cta-blue focus:outline-none"
            disabled={!email}
          >
            Get Started For Free
          </button>
        </form>
        {alertMessage && (
          <div>
            <p className="text-error-alert text-center pt-4">
              Please enter a valid email address
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
