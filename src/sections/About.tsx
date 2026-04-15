import { useState } from "react";
import GlowOrb from "@/components/GlowOrb";
import SlotMachine from "@/components/about-section/SlotMachine";
import MarqueeColumn from "@/components/about-section/MarqueeColumn";
import { shuffleIcons, techIcons } from "@/utils/shuffleIcons";

const leftColumnIcons = shuffleIcons(techIcons);
const middleColumnIcons = shuffleIcons(techIcons);
const rightColumnIcons = shuffleIcons(techIcons);

const About = () => {
  const [showMachine, setShowMachine] = useState(false);
  const handleRenderSlot = () => {
    setShowMachine(true);
  };

  return (
    <section id="about" className="py-64 relative overflow-hidden">
      <GlowOrb className="md:top-[22%] md:left-[14%] lg:top-[29%] lg:left-[13%] sm:top-[22%] sm:left-[10%]  xl:left-[21%] xl:top-[33%] size-[500px]" />
      <div className="absolute top-0 inset-x-0 h-72 pointer-events-none gradient-radial-top" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
          {showMachine ? (
            <SlotMachine
              onClose={() => setShowMachine(false)}
              leftColumnIcons={leftColumnIcons}
              middleColumnIcons={middleColumnIcons}
              rightColumnIcons={rightColumnIcons}
            />
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
