import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-primary">04.</span>{" "}
          <span className="text-xl font-medium tracking-wider">
            Get In Touch
          </span>
          <span className="block relative top-1 left-4 w-65 h-px gradient-glow-l"></span>
        </div>
        <div className="flex justify-center">
          <div className="border glass-look rounded-2xl max-w-3xl w-full px-10 py-14 text-center animate-border-glow">
            <h2 className="text-3xl font-bold mb-4">
              Let's build something together
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-lg mx-auto">
              I'm currently open to freelance projects and full-time
              opportunities. If you have a project in mind, want to collaborate,
              or just want to say hi, my inbox is always open.
            </p>
            <a
              href="mailto:bran.orefice@gmail.com"
              target="_blank"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm bg-primary text-secondary shadow-[0_4px_20px_rgba(92,151,171,0.27)] hover:shadow-[0_6px_30px_rgba(92,151,171,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Say Hello <Send size={16} />
            </a>
            <div className="flex items-center gap-4 my-10 max-w-xs mx-auto">
              <div className="flex-1 h-px bg-linear-to-r from-transparent to-border" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                or follow me on
              </span>
              <div className="flex-1 h-px bg-linear-to-l from-transparent to-border" />
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.github.com/branden-orefice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all duration-300 text-muted-foreground bg-surface border-border border hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(92,151,171,0.4)]"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/branden-orefice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm transition-all duration-300 text-muted-foreground bg-surface border-border border hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(92,151,171,0.4)]"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
