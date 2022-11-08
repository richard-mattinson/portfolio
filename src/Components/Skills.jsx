import skills from "../Data/skills";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-10">
            <div className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl md:text-5xl text-3xl font-medium title-font text-yellow-600 mb-4">
              My Skills & Tools
            </h1>
            <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              I am proficient in the foundational tools and skills needed to build a modern website, brick by brick. I also have experience in industry tools such as Github, Insomnia and Firebase
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skills) => (
              <div key={skills.name} className="p-2 sm:w-1/3 md:w-1/4 xl:w-1/5 w-1/2">
                <div className="bg-gray-800 rounded-full flex p-4 h-full items-center">
                  <div className="text-green-400 w-6 h-8 flex-shrink-0 ml-2 mr-0">
                    <i class="bi bi-check2-circle"></i>
                  </div>
                  <span className="title-font font-medium text-white">
                    {skills.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
