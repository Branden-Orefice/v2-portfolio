import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { Mouse } from "lucide-react";

type Messages = {
  bubble1: string;
  bubble2: string;
  [key: string]: string;
};

const Hero = () => {
  const [phase, setPhase] = useState("bubble1");
  const [typed, setTyped] = useState("");

  const messages: Messages = {
    bubble1: "Hi, how's it going?",
    bubble2: "My name is",
  };

  useEffect(() => {
    const currentText = messages[phase];
    if (!currentText) return;

    setTyped("");
    let index = 0;

    const typeNext = () => {
      if (index < currentText.length) {
        setTyped(currentText.slice(0, index + 1));
        index++;
        setTimeout(typeNext, 50);
      } else {
        setTimeout(() => {
          if (phase === "bubble1") setPhase("bubble2");
          if (phase === "bubble2") setPhase("hero");
        }, 1000);
      }
    };
    setTimeout(typeNext, 50);
  }, [phase]);

  const squares = useMemo(() => {
    return [...Array(30)].map((_, index) => ({
      id: `square-${index}`,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.webp"
          alt="hero background of cyber space grid"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-overlay-hero" />
      </div>

      {/* Glass Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {squares.map((square) => (
          <div
            key={square.id}
            className="absolute w-1.5 h-1.5 opacity-60"
            style={{
              backgroundColor: "#5c97ab",
              left: `${square.left}%`,
              top: `${square.top}%`,
              animation: `square-drift ${square.duration}s ease-in-out infinite`,
              animationDelay: `${square.delay}s`,
            }}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-20 pb-20 relative z-10">
        <div className="space-y-8">
          {/* Bubble 1 unmounts when done, sits above everything */}
          {phase === "bubble1" && (
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-look text-md text-primary">
              <img
                alt="developer of portfolio"
                src="/images/hero-img.webp"
                className="rounded-full w-10 h-10"
              />
              {typed}
            </div>
          )}

          {/* Bubble 2 & Hero are always in the DOM together, never move */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-2 rounded-full glass-look  text-primary text-md transition-opacity duration-300 ${phase === "bubble2" || phase === "hero" ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <img
              alt="developer of portfolio"
              src="/images/hero-img.webp"
              className="rounded-full w-10 h-10"
            />
            {typed}
          </div>

          <div
            className={`space-y-8 transition-opacity duration-500 ${phase === "hero" ? "opacity-100" : "opacity-0"}`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl">
              Branden Orefice, <br />I build digital things for the{" "}
              <strong className="text-primary">web</strong>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a software engineer specializing in React, TypeScript, Next.js
              and Node. I focus on building scalable, accessible, and performant
              applications.
            </p>
            {/* Call To Action */}
            <div className="flex items-center gap-2">
              <a href="#contact" className="button button--large">
                Contact Me
              </a>
              <a
                href="https://github.com/branden-orefice"
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
                href="https://linkedin.com/in/branden-orefice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="xl"
                  className="stronger-glass-look p-2 rounded-full hover:text-primary/80 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Mouse className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
