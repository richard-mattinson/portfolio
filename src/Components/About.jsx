import { HashLink } from 'react-router-hash-link'

import assets from '../Data/assets'

const About = () => {
    return (
      <section id="top">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-5xl mb-2 font-medium text-yellow-700">
              Hi, I'm Richard.
            </h1>
            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-yellow-700">
              Let's build something together.
            </h2>
            <p className="mb-8 leading-relaxed text-lg font-medium">
              I am junior fullstack developer with a passion for building
              user-centric applications on the three pillars of React.js,
              Prisma and Tailwind.
            </p>
            <div className="flex justify-center">
              <HashLink
                smooth
                to="#contact"
                className="inline-flex min-w-fit text-white bg-orange-600 border-0 py-2 px-6 rounded-full text-lg focus:outline-none hover:bg-orange-500 hover:text-white"
              >
                Hire Me
              </HashLink>
              <HashLink
                smooth
                to="#projects"
                className="ml-4 inline-flex min-w-fit text-gray-200 bg-gray-800 border-0 py-2 px-6 rounded-full text-lg focus:outline-none hover:bg-gray-700 hover:text-white"
              >
                See My Work
              </HashLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full"
              alt="Richard in the foreground with a camera"
              src={assets[0].image}
            />
          </div>
        </div>
        <HashLink 
          smooth to="#projects" 
          className="container mx-auto flex px-10 py-10 md:flex-row items-center justify-center">
          <i class="bi bi-arrow-down-circle-fill text-yellow-700 text-8xl hover:text-yellow-600"></i>
        </HashLink>
      </section>
    );
}
 
export default About;