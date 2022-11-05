import Hero from '../Assets/profile1.jpg'

const About = () => {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-2 font-medium text-white">
              Hi, I'm Richard.
            </h1>
            <h2 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-white">
              Let's build something together.
            </h2>
            <p className="mb-8 leading-relaxed font-medium">
              I am junior fullstack developer with a passion for building
              user-friendly applications on the three pillars of React.js,
              Prisma and Tailwind.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-orange-600 border-0 py-2 px-6 rounded-full text-lg focus:outline-none hover:bg-orange-500 hover:text-white"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-200 bg-gray-800 border-0 py-2 px-6 rounded-full text-lg focus:outline-none hover:bg-gray-700 hover:text-white"
              >
                See My Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full"
              alt="Richard in the foreground with a camera"
              src={Hero}
            />
          </div>
        </div>
      </section>
    );
}
 
export default About;