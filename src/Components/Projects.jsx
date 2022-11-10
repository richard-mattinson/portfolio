import projects from "../Data/projects";

const Projects = () => {
  return (
    <>
      <section id="projects" className="body-font z-10">
        <div className="container px-5 py-20 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <div className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl md:text-5xl text-3xl font-medium title-font text-yellow-600 mb-4">
              Things I've Built
            </h1>
            <p className="text-lg lg:w-2/3 mx-auto leading-relaxed">
              As a programmer, you never stop building, never stop learning. Here are my latest projects, showcasing what I've learned recently.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.id}
                className="sm:w-1/2 w-100 p-4"
              >
                <div className="flex relative">
                  <img
                    alt="Portfolio gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative w-full border-4 border-gray-800 rounded-xl bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.stack}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="text-white leading-relaxed">
                      {project.description}
                      </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
