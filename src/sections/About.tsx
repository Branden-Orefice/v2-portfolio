import { useState } from "react";

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

const About = () => {
  const [showCasinoButton, setShowCasinoButton] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [winner, setWinner] = useState(false);
  const [result, setResult] = useState<string[] | null>(null);

  const handleRenderButton = () => {
    setShowCasinoButton(true);
  };

  const handleAnimation = () => {
    setWinner(false);
    setResult(null);
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);

      const left =
        leftColumnIcons[Math.floor(Math.random() * leftColumnIcons.length)];
      const middle =
        middleColumnIcons[Math.floor(Math.random() * middleColumnIcons.length)];
      const right =
        rightColumnIcons[Math.floor(Math.random() * rightColumnIcons.length)];

      const finalResult = [left, middle, right];
      setResult(finalResult);

      if (left === middle && middle === right) {
        setWinner(true);
      }
    }, 5000);
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="animate-fade-in mb-16">
              <span className="text-primary">01.</span>{" "}
              <span className="text-xl font-medium tracking-wider">
                About Me
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
                occasionally hitting the{" "}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={handleRenderButton}
                  className="group/casino inline-flex lg:cursor-[url('/images/huff-n-puff-wolf.png')_,pointer]"
                >
                  <span className="group-hover/casino:text-[#ffdf01] transition duration-75 group-hover/casino:-translate-x-1 delay-[50ms]">
                    sl
                  </span>
                  <span className="group-hover/casino:text-[#eb1509] transition duration-75 group-hover/casino:-translate-x-1 delay-[75ms]">
                    o
                  </span>
                  <span className="group-hover/casino:text-[#116fef] transition duration-75 group-hover/casino:-translate-x-1 delay-[100ms]">
                    ts
                  </span>
                  , spending time with my wife, or playing games with my
                  friends.
                </span>
              </p>
            </div>
          </div>
          {/* Marquee */}
          <div className="flex items-center justify-center w-full gap-4">
            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              {animate ? (
                <div className="track-vertical-reverse-casino">
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
              ) : result ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="icon-container">
                    <img
                      src={result[0]}
                      alt="final left result"
                      className="icon icon-image"
                    />
                  </div>
                </div>
              ) : (
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
              )}
            </div>

            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              {animate ? (
                <div className="track-vertical-reverse-casino">
                  <div className="marquee-column">
                    {middleColumnIcons.map((src, index) => (
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
              ) : result ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="icon-container">
                    <img
                      src={result[1]}
                      alt="final middle result"
                      className="icon icon-image"
                    />
                  </div>
                </div>
              ) : (
                <div className="track-vertical-reverse">
                  <div className="marquee-column">
                    {middleColumnIcons.map((src, index) => (
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
              )}
            </div>

            <div className="relative flex overflow-hidden w-full h-80 justify-center items-start flex-1">
              <div className="marquee-cover" />

              {animate ? (
                <div className="track-vertical-reverse-casino">
                  <div className="marquee-column">
                    {rightColumnIcons.map((src, index) => (
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
              ) : result ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="icon-container">
                    <img
                      src={result[2]}
                      alt="final right result"
                      className="icon icon-image"
                    />
                  </div>
                </div>
              ) : (
                <div className="track-vertical">
                  <div className="marquee-column">
                    {rightColumnIcons.map((src, index) => (
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
              )}
            </div>
          </div>
          {winner && (
            <div className="absolute bottom-20 right-0 bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold animate-bounce shadow-lg">
              🎉 Congrats Winner!
            </div>
          )}
          {result && !winner && !animate && (
            <div className="absolute bottom-20 right-0 bg-black/60 text-muted-foreground px-4 py-2 rounded-xl shadow-lg">
              Try Again 🎰
            </div>
          )}
          {showCasinoButton && (
            <div className="absolute right-0 bottom-0 translate-x-5.5">
              <button
                onClick={handleAnimation}
                disabled={animate}
                className="uppercase text-black/90 bg-red-800 border border-red-800 rounded-full py-2 max-w-11 cursor-pointer font-semibold disabled:opacity-50"
              >
                spin
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
