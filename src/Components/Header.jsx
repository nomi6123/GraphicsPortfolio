"use client";
import { useState, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // ✅ new

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "contact", "work"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setIsMobileDropdownOpen(false);
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Code & Design" },
    { id: "contact", label: "Contact" },
  ];

  const workDropdown = [
    { label: "Design Work", link: "/work" },
    { label: "Web Work", link: "/website" },
    { label: "Branding", link: "/work" },
    { label: "Social Media", link: "/work" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 h-16" : "bg-black/80 h-20"
      } backdrop-blur-lg border-b border-white/10 flex justify-center shadow-md shadow-gray-600`}
    >
      <div
        className="flex items-center justify-between w-full px-6 h-full"
        style={{ maxWidth: "1300px" }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300"
        >
          <div className="w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#667eea" }} />
                  <stop offset="100%" style={{ stopColor: "#764ba2" }} />
                </linearGradient>
              </defs>
              <rect
                x="10"
                y="25"
                width="15"
                height="50"
                fill="url(#grad1)"
                transform="rotate(-15 17.5 50)"
              />
              <rect x="35" y="15" width="15" height="70" fill="url(#grad1)" />
              <rect
                x="60"
                y="25"
                width="15"
                height="50"
                fill="url(#grad1)"
                transform="rotate(15 67.5 50)"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#grad1)"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="text-white text-2xl font-semibold tracking-tight cursor-pointer">
            Graphics Portfolio
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 relative">
          {menuItems.map((item) =>
            item.id === "work" ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 relative py-2 text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown menu */}
                <div
                  className={`absolute top-full left-0 bg-black/90 backdrop-blur-lg border border-white/10 rounded-lg mt-2 shadow-lg flex flex-col w-44 transition-all duration-200 ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {workDropdown.map((drop) => (
                    <a
                      key={drop.label}
                      href={drop.link}
                      className="px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 text-sm"
                    >
                      {drop.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-base font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-white/80 hover:text-white hover:-translate-y-0.5"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-purple-500 to-purple-700 transition-all duration-300 ${
                    activeSection === item.id ? "w-full" : "w-0"
                  }`}
                />
              </button>
            )
          )}

          {/* Download CV Icon */}
          <a
            href="/resume.pdf"
            download
            className="text-white/80 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            title="Download CV"
          >
            <Download size={22} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* ✅ Mobile Menu with working Work dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-white/10 flex flex-col items-start py-4 space-y-3 px-6">
          {menuItems.map((item) =>
            item.id === "work" ? (
              <div key={item.id} className="w-full">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`flex items-center justify-between w-full text-white/80 hover:text-white text-lg transition-all ${
                    activeSection === item.id ? "text-white font-semibold" : ""
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown inside mobile menu */}
                {isDropdownOpen && (
                  <div className="flex flex-col mt-2 ml- space-y-2">
                    {workDropdown.map((drop) => (
                      <a
                        key={drop.label}
                        href={drop.link}
                        className="text-white/70 hover:text-white text-base transition-colors"
                      >
                        {drop.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white/80 hover:text-white text-lg transition-all ${
                  activeSection === item.id ? "text-white font-semibold" : ""
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
