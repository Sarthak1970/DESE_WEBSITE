import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  RiHome4Line,
  RiInformationLine,
  RiSlideshowLine,
  RiCalendarEventLine,
  RiTimeLine,
  RiMedalLine,
  RiMapPinLine,
  RiMenuLine,
  RiCloseLine,
} from "@remixicon/react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: RiHome4Line, isPage: true },
    { name: "About DESE", href: "#about-dese", icon: RiInformationLine, isPage: false },
    { name: "Events", href: "#Events", icon: RiCalendarEventLine, isPage: false },
    { name: "Demos", href: "/demo", icon: RiSlideshowLine, isPage: true },
    { name: "Schedule", href: "#schedule", icon: RiTimeLine, isPage: false },
    { name: "Golden Jubilee", href: "/goldenjubilee", icon: RiMedalLine, isPage: true },
    { name: "Locate us", href: "#location", icon: RiMapPinLine, isPage: false },
  ];

  const handleNavClick = (item) => {
    if (item.isPage) {
      navigate(item.href);
      if (item.href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const section = document.getElementById(item.href.replace("#", ""));
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      } else {
        const section = document.getElementById(item.href.replace("#", ""));
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setActiveLink(item.name);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolledDown(currentScrollPos > prevScrollPos && currentScrollPos > 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolledDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center h-24">
          {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <img
              src=""
              alt=""
              className="h-12 md:h-16 lg:h-[70px] transition-transform duration-300 hover:scale-110"
              style={{
                filter: "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%) brightness(0) invert(1)",
              }}
            />
          </div> */}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-2 backdrop-blur-sm p-2 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeLink === item.name
                    ? "bg-[#2E2388]/10 text-[#848cd9]"
                    : "text-[#f8f7ff] hover:bg-[#2E2388]/5 hover:text-[#848cd9]"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#f8f7ff] hover:text-[#848cd9] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RiCloseLine className="w-6 h-6 md:w-8 md:h-8" />
            ) : (
              <RiMenuLine className="w-6 h-6 md:w-8 md:h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#030418]/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "64px", height: "calc(100vh - 64px)" }}
      >
        <nav className="h-full overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeLink === item.name
                      ? "bg-[#2E2388]/10 text-[#848cd9]"
                      : "text-[#f8f7ff] hover:bg-[#2E2388]/5 hover:text-[#848cd9]"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-base font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
