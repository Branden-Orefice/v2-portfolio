import GlowOrb from "@/components/GlowOrb";

const experiences = [
  {
    company: "Freelance",
    position: "Software Developer",
    duration: "Jan 2026 - Present",
    current: true,
    description:
      "Designing and building modern web applications while collaborating directly with client teams to improve performance, reliability, and user experience.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "DR Data Security",
    position: "Software Developer",
    duration: "Jan 2025 - Jan 2026",
    current: false,
    description:
      "Built and scaled internal and customer-facing security platforms that streamlined vulnerability management and automated critical workflows across the organization.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Docker",
      "Nginx",
      "PostgreSQL",
      "Redis",
      "Node.js",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      <GlowOrb top="50%" left="50%" size={600} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          {/* Heading */}
          <span className="text-primary">02.</span>{" "}
          <span className="text-xl font-medium tracking-wider">
            Where I've Worked
          </span>
          <span className="block relative top-1 left-4 w-65 h-px gradient-glow-l"></span>
        </div>
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] gradient-glow-b md:-translate-x-1/2" />

          <div className="space-y-8">
            {/* Timeline + Cards */}
            {experiences.map((exp, index) => (
              <div key={index} className="relative grid md:grid-cols-2 gap-8">
                {exp.current ? (
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary -translate-x-1/2 animate-ping-ring" />
                ) : (
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary -translate-x-1/2" />
                )}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary -translate-x-1/2"></div>
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass-look p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500`}
                  >
                    <h3 className="text-xl font-bold mb-2">{exp.position}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {exp.duration}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="mt-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block bg-primary/10 text-muted-foreground text-xs px-2 py-1 rounded mr-2 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
