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
                  {[
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
                  ].map((src, index) => (
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
                  {[
                    "/icons/typescript.webp",
                    "/icons/digitalocean.webp",
                    "/icons/next.webp",
                    "/icons/aws.webp",
                    "/icons/node.webp",
                    "/icons/css.webp",
                    "/icons/redis.webp",
                    "/icons/docker.webp",
                    "/icons/express.webp",
                    "/icons/postgres-sql.webp",
                    "/icons/git.webp",
                    "/icons/nginx.webp",
                    "/icons/html.webp",
                    "/icons/tailwind.webp",
                    "/icons/javascript.webp",
                    "/icons/nodemon.webp",
                    "/icons/postman.webp",
                    "/icons/react.webp",
                  ].map((src, index) => (
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
                  {[
                    "/icons/aws.webp",
                    "/icons/tailwind.webp",
                    "/icons/digitalocean.webp",
                    "/icons/javascript.webp",
                    "/icons/docker.webp",
                    "/icons/git.webp",
                    "/icons/next.webp",
                    "/icons/html.webp",
                    "/icons/css.webp",
                    "/icons/react.webp",
                    "/icons/nginx.webp",
                    "/icons/express.webp",
                    "/icons/node.webp",
                    "/icons/typescript.webp",
                    "/icons/nodemon.webp",
                    "/icons/postgres-sql.webp",
                    "/icons/redis.webp",
                    "/icons/postman.webp",
                  ].map((src, index) => (
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
