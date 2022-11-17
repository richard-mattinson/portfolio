import { useRef as UseRef } from "react";
import emailjs from "@emailjs/browser";

const contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_epljm48",
        "template_vjtl1xf",
        form.current,
        "PBTvQ-LRrNeR23tv9"
      )
      .then(
        (result) => {
          alert("Message sent");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="">
      <div className="container px-5 py-10 mx-auto">
        <div className="container px-5 pt-20 mx-auto text-center lg:px-40">
          <h1 className="sm:text-4xl md:text-5xl text-3xl font-medium title-font text-yellow-600 mb-4">
            Hire Me
          </h1>
          <p className="leading-relaxed mb-5">
            I look forward to hearing from you.
          </p>
        </div>

        <form
          name="contact"
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 md:m-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full bg-white rounded border border-gray-700 focus:border-gray-600 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full bg-white rounded border border-gray-700 focus:border-gray-600 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-white rounded border border-gray-700 focus:border-gray-600 focus:ring-2 focus:ring-gray-900 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            value="send"
            className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
