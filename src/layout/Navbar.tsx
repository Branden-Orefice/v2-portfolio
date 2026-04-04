import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    href: "#about",
    number: "01",
    label: "About",
  },
  {
    href: "#experience",
    number: "02",
    label: "Experience",
  },
  {
    href: "#work",
    number: "03",
    label: "Work",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <header className="py-5">
      <nav className="container mx-auto px-6 flex item-center justify-between">
        <a
          className="text-xl tracking-tight font-bold hover:text-primary"
          href="#"
        >
          BO<span className="text-primary">.</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 items-center">
          {navLinks.map((link, index) => (
            <a className="hover:text-primary" key={index} href={link.href}>
              <span className="mr-1">
                {link.number}
                <span className="text-primary text-lg">.</span>
              </span>
              {link.label}
            </a>
          ))}
          <div className="hidden md:block">
            <Button size="sm">Resume</Button>
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
        <div className="md:hidden glass-stronger animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                className="hover:text-primary py-2"
                key={index}
                href={link.href}
              >
                <span className="mr-1">
                  {link.number}
                  <span className="text-primary text-lg">.</span>
                </span>
                {link.label}
              </a>
            ))}

            <Button>Resume</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
