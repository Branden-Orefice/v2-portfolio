import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, X } from "lucide-react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { useEffect, useState } from "react";

const navLinks = [
  {
    id: 1,
    href: "#work",
    label: "Work",
    className: "animate-delay-200 animate-fade-in hover:text-primary",
  },
  {
    id: 2,
    href: "#about",
    label: "About",
    className: "animate-delay-300 animate-fade-in hover:text-primary",
  },
  {
    id: 3,
    href: "#experience",
    label: "Experience",
    className: "animate-delay-400 animate-fade-in hover:text-primary",
  },
  {
    id: 4,
    href: "#contact",
    label: "Contact",
    className: "animate-delay-500 animate-fade-in hover:text-primary",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 border border-transparent ${isScrolled ? "stronger-glass-look py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          className="text-xl tracking-tight font-bold hover:text-primary animate-fade-in animate-delay-100"
          href="#"
        >
          <span className="md:hidden">
            BO<span className="text-primary">.</span>
          </span>
          <span className="hidden md:inline">
            Branden<span className="text-primary">.</span>Dev
          </span>
        </a>

        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link) => (
            <a className={link.className} key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/branden-orefice"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-delay-600 animate-fade-in"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                className="hover:text-primary/80 transition-all duration-300"
              />
            </a>
            <a
              href="https://linkedin.com/in/branden-orefice"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-delay-700 animate-fade-in"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className="hover:text-primary/80 transition-all duration-300"
              />
            </a>
          </div>
          <div className="hidden md:block animate-delay-800 animate-fade-in">
            <a
              className="button button--small"
              href="https://resume-branden.vercel.app/"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={handleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="cursor-pointer" size={24} />
          ) : (
            <Menu className="cursor-pointer" size={24} />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden stronger-glass-look animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                className="hover:text-primary py-2"
                key={link.id}
                onClick={() => setIsMobileMenuOpen(false)}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4">
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
            <a
              className="button button--small text-center"
              href="https://resume-branden.vercel.app/"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
