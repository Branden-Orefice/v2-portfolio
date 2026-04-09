import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projects = [
  {
    title: "brandenorefice.com (v1)",
    description: "First iteration of my portfolio site.",
    image: "/images/first-portfolio.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary">03.</span>{" "}
          <span className="text-xl font-medium tracking-wider">
            Things I've Built
          </span>
          <span className="block relative -top-3.75 left-60 w-65 h-px bg-linear-to-l from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(92,151,171,0.8)">
            {[0.4, 1, 1, 1].map((opacity, index) => (
              <div
                key={index}
                style={{ opacity, right: `${index * 18}px` }}
                className="absolute top-1/2 mr-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-primary flex gap-2"
              />
            ))}
          </span>
        </div>
        {/* Project Cards */}
        <div className="relative">
          {projects.map((project, index) => (
            <div key={index} className="stronger-glass-look w-full h-full">
              <img src={project.image} alt={project.image} />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <a
                href="https://github.com/branden-orefice/personal-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="stronger-glass-look p-2 rounded-full hover:text-primary/80 transition-all duration-300"
                />
              </a>
              <a
                href="https://brandenorefice.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="xl"
                  className="stronger-glass-look p-2 rounded-full hover:text-primary/80 transition-all duration-300"
                />
              </a>
              {project.tags.map((projectTech, projectTechIndex) => (
                <span
                  key={projectTechIndex}
                  className="inline-block bg-primary/10 text-muted-foreground text-xs px-2 py-1 rounded mr-2 mb-2"
                >
                  {projectTech}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
