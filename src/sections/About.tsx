import {
  faDocker,
  faJs,
  faNodeJs,
  faReact,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Git",
  "CI/CD",
  "Testing (Jest, Cypress)",
  "Agile Methodologies",
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary">01.</span>{" "}
              <span className="text-xl font-medium tracking-wider">
                About Me
              </span>
            </div>
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                Hi there! I'm Branden, a passionate software engineer with a
                love for building innovative web applications. My journey in
                tech started with a curiosity for how webapps work, which
                quickly evolved into a deep fascination with coding and
                problem-solving.
              </p>
              <p>
                Over the years, I've honed my skills in JavaScript, TypeScript,
                React, and Node.js, among other technologies. I thrive on
                creating scalable, accessible, and performant applications that
                make a real impact.
              </p>
              <p>
                When I'm not coding, you can find me golfing, watching movies,
                spending time with my wife, or playing games with my friends.
              </p>
            </div>
          </div>
          {/* Technologies List */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl animate-fade-in">
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
                Frontend
              </h3>

              <FontAwesomeIcon
                className="text-primary glass-stronger rounded-full p-3"
                icon={faJs}
              />
              <FontAwesomeIcon
                className="text-primary glass-stronger rounded-full p-3"
                icon={faTypescript}
              />
              <FontAwesomeIcon
                className="text-primary glass-stronger rounded-full p-3"
                icon={faReact}
              />
            </div>
            <div className="glass p-6 rounded-2xl animate-fade-in">
              <h3>Database & Infrastructure</h3>
              <FontAwesomeIcon icon={faDocker} />
            </div>
            <div className="glass p-6 rounded-2xl animate-fade-in">
              <h3>Libraries</h3>
            </div>
            <div className="glass p-6 rounded-2xl animate-fade-in">
              <h3>Runtime</h3>
              <FontAwesomeIcon icon={faNodeJs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
