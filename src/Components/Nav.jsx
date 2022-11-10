import { HashLink } from 'react-router-hash-link'

const Nav = () => {
  return (
    <>
      <header className="bg-yellow-700 md:sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white md:mb-0" href="/">
            <HashLink smooth to="#top" className="ml-3 text-xl font-semibold">
              Richard Mattinson
            </HashLink>
          </a>
          <nav className="md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-gray-100	flex flex-wrap items-center text-white justify-center">
            <HashLink
              smooth
              to="#projects"
              className="pb-4 pt-5 mr-5 border-b-2 border-yellow-700 transition border-color delay-50 duration-300 hover:text-white hover:border-b-2 hover:border-white"
            >
              Projects
            </HashLink>
            <HashLink
              smooth
              to="#skills"
              className="pb-4 pt-5 mr-5 border-b-2 border-yellow-700 transition border-color delay-50 duration-300 hover:text-white hover:border-b-2 hover:border-white"
            >
              Skills
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              className="pb-4 pt-5 mr-5 border-b-2 border-yellow-700 transition border-color delay-50 duration-300 hover:text-white hover:border-b-2 hover:border-white"
            >
              Contact
            </HashLink>
          </nav>
          <HashLink
            smooth
            to="#contact"
            className="inline-flex items-center bg-orange-600 text-white border-0 py-1 px-5 focus:outline-none hover:bg-orange-500 rounded-full hover:text-white mt-4 md:mt-0"
          >
            Hire Me
          </HashLink>
        </div>
      </header>
    </>
  );
};

export default Nav;
