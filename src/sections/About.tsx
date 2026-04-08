const shuffleIcons = (icons: string[]) => {
  for (let i = icons.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [icons[i], icons[j]] = [icons[j], icons[i]];
  }
  return icons;
};

const techIcons = [
  "/icons/aws.webp",
  "/icons/css.webp",
  "/icons/digitalocean.webp",
  "/icons/docker.webp",
  "/icons/express.webp",
  "/icons/git.webp",
  "/icons/html.webp",
  "/icons/javascript.webp",
  "/icons/next.webp",
  "/icons/nginx.webp",
  "/icons/node.webp",
  "/icons/nodemon.webp",
  "/icons/postgres-sql.webp",
  "/icons/postman.webp",
  "/icons/react.webp",
  "/icons/redis.webp",
  "/icons/tailwind.webp",
  "/icons/typescript.webp",
];

const leftColumnIcons = shuffleIcons([...techIcons]);
const middleColumnIcons = shuffleIcons([...techIcons]);
const rightColumnIcons = shuffleIcons([...techIcons]);

console.log("Left Column Icons:", leftColumnIcons);
console.log("Middle Column Icons:", middleColumnIcons);
console.log("Right Column Icons:", rightColumnIcons);

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
              <span className="block relative -top-3.75 left-35 w-65 bg-primary h-px"></span>
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
          {/* Marquee */}
          <div className="flex items-center justify-center w-full gap-4">
            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              <div className="track-vertical">
                <div className="marquee-column">
                  {leftColumnIcons.map((src, index) => (
                    <div className="icon-container" key={`left-${index}`}>
                      <img
                        src={src}
                        alt="tech logo"
                        className="icon icon-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              <div className="track-vertical-reverse">
                <div className="marquee-column">
                  {middleColumnIcons.map((src, index) => (
                    <div className="icon-container" key={`middle-${index}`}>
                      <img
                        src={src}
                        alt="tech logo"
                        className="icon icon-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              <div className="track-vertical">
                <div className="marquee-column">
                  {rightColumnIcons.map((src, index) => (
                    <div className="icon-container" key={`right-${index}`}>
                      <img
                        src={src}
                        alt="tech logo"
                        className="icon icon-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
