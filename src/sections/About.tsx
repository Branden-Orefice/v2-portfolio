import { useState } from "react";
import GlowOrb from "@/components/GlowOrb";
import SlotMachine from "@/components/about-section/SlotMachine";
import MarqueeColumn from "@/components/about-section/MarqueeColumn";

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
  const [showMachine, setShowMachine] = useState(false);
  const handleRenderSlot = () => {
    setShowMachine(true);
  };

  return (
    <section id="about" className="py-64 relative overflow-hidden">
      <GlowOrb top="30%" left="22%" size={500} />

      <GlowOrb
        top="52%"
        left="65%"
        size={350}
        color="var(--color-secondary-foreground)"
      />
      <div
        className="absolute top-0 inset-x-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(92,151,171,0.08), transparent 70%)",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div className="space-y-8">
            <div className="animate-fade-in mb-16">
              <span className="text-primary">01.</span>{" "}
              <span className="text-xl font-medium tracking-wider">
                About Me
              </span>
              <span className="block relative top-1 left-4 w-65 h-px gradient-glow-l"></span>
            </div>
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <div className="absolute -left-4 top-1 bottom-0 w-[2px] gradient-glow-b" />
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
                  onClick={handleRenderSlot}
                  className="group/casino inline-flex lg:cursor-[url('/images/huff-n-puff-wolf.png')_,pointer]"
                >
                  <span className="group-hover/casino:text-[#ffdf01] transition duration-75 group-hover/casino:-translate-y-1 delay-[50ms]">
                    sl
                  </span>
                  <span className="group-hover/casino:text-[#eb1509] transition duration-75 group-hover/casino:-translate-y-1 delay-[75ms]">
                    o
                  </span>
                  <span className="group-hover/casino:text-[#116fef] transition duration-75 group-hover/casino:-translate-y-1 delay-[100ms]">
                    ts
                  </span>
                </span>
                , spending time with my wife, or playing games with my friends.
              </p>
            </div>
          </div>
          {/* Marquee */}
          {showMachine ? (
            <SlotMachine onClose={() => setShowMachine(false)} />
          ) : (
            <div className="flex items-center justify-center gap-4 w-full">
              <MarqueeColumn items={leftColumnIcons} index={0} />
              <MarqueeColumn items={middleColumnIcons} reverse index={1} />
              <MarqueeColumn items={rightColumnIcons} index={2} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
