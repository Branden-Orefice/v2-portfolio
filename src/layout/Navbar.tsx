import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  {
    href: "#about",
    number: "01",
    label: "About",
    className: "animate-delay-200 animate-fade-in hover:text-primary",
  },
  {
    href: "#experience",
    number: "02",
    label: "Experience",
    className: "animate-delay-300 animate-fade-in hover:text-primary",
  },
  {
    href: "#work",
    number: "03",
    label: "Work",
    className: "animate-delay-400 animate-fade-in hover:text-primary",
  },
  {
    href: "#contact",
    number: "04",
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
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "stronger-glass-look py-3" : "bg-transparent py-5"} z-50`}
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
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link, index) => (
            <a className={link.className} key={index} href={link.href}>
              <span className="mr-1 text-sm">
                {link.number}
                <span className="text-primary text-lg">.</span>
              </span>
              {link.label}
            </a>
          ))}
          <div className="hidden md:block animate-delay-600 animate-fade-in">
            <a
              className="button button--small"
              href="https://resume-branden.vercel.app/"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden stronger-glass-look animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                className="hover:text-primary py-2"
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                href={link.href}
              >
                <span className="mr-1 text-sm">
                  {link.number}
                  <span className="text-primary text-lg">.</span>
                </span>
                {link.label}
              </a>
            ))}
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
