const contact = () => {
    return (
      <section id="contact" className="relative">
        <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <img
              width="100%"
              height="100%"
              alt="code"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-600 relative flex flex-wrap py-6 rounded-xl shadow-md">
              <div className="lg:w-1/3 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  Github
                </h2>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  LinkedIn
                </h2>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <div className="text-indigo-400 leading-relaxed">
                  richard.m@ttinson.net
                </div>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">07956 781381</p>
              </div>
            </div>
          </div>
          <form
            netlify
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-yellow-600 sm:text-4xl text-3xl mb-1 font-medium title-font">
              Hire Me
            </h2>
            <p className="leading-relaxed mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              suscipit officia aspernatur veritatis. Asperiores, aliquid?
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-700 focus:border-gray-600 focus:ring-2 focus:ring-gray-900 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                className="w-full bg-white rounded border border-gray-700 focus:border-gray-600 focus:ring-2 focus:ring-gray-900 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-full text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
}
 
export default contact;