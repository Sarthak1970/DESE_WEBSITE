import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { 
    RiHome4Line,
    RiInformationLine,
    RiBookLine,
    RiSlideshowLine,
    RiCalendarEventLine,
    RiTimeLine,
    RiMedalLine,
    RiTeamLine,
    RiMapPinLine,
    RiGroupLine
} from "@remixicon/react";

const Navbar = () => {
    const navRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [activeLink, setActiveLink] = useState('Home');
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: 'Home', href: '#hero', icon: RiHome4Line, isPage: true },
        { name: 'About DESE', href: '#about-dese', icon: RiInformationLine },
        { name: 'Research', href: '#research', icon: RiBookLine },
        { name: 'Demos', href: '/demo', icon: RiSlideshowLine, isPage: true },
        { name: 'Events', href: '#Events', icon: RiCalendarEventLine },
        { name: 'Schedule', href: '#schedule', icon: RiTimeLine },
        { name: 'Golden Jubilee', href: '/goldenjubilee', icon: RiMedalLine, isPage: true },
        { name: 'Open day team', href: '#team', icon: RiGroupLine },
        { name: 'Locate us', href: '#location', icon: RiMapPinLine },
        { name: 'Sponsors', href: '#sponsors-section', icon: RiTeamLine }
    ];

    useEffect(() => {
        const updateActiveLink = () => {
            const currentPath = location.pathname + location.hash;
            const matchingNavItem = navItems.find(
                item => item.href === currentPath || item.href.replace('#', '') === location.hash.replace('#', '')
            );
            if (matchingNavItem) {
                setActiveLink(matchingNavItem.name);
            }
        };

        updateActiveLink(); 
        window.addEventListener('hashchange', updateActiveLink);

        return () => {
            window.removeEventListener('hashchange', updateActiveLink);
        };
    }, [location.pathname, location.hash]);

    // GSAP Animation for Sidebar Navigation
    useEffect(() => {
        gsap.set(navRef.current, { x: '-100%' });
    }, []);

    const handleMenuHover = () => {
        setIsNavOpen(true);
        gsap.to(navRef.current, {
            x: '0%',
            duration: 0.5,
            ease: 'power3.out'
        });
    };

    const handleNavLeave = () => {
        setIsNavOpen(false);
        gsap.to(navRef.current, {
            x: '-100%',
            duration: 0.5,
            ease: 'power3.out'
        });
    };

    // Scroll smoothly to in-page sections
    const handleNavClick = (item) => {
        if (item.isPage) {
            navigate(item.href); // Navigate to full-page links
        } else {
            // Smooth scroll to section if already on the same page
            const element = document.getElementById(item.href.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setActiveLink(item.name);
            } else {
                // Navigate to home first, then scroll after page loads
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(item.href.replace('#', ''));
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 300);
            }
        }
    };

    return (
        <>
            {/* Menu Button */}
            <div 
                ref={menuButtonRef}
                className={`fixed top-4 left-4 p-2 cursor-pointer z-50 transition-opacity duration-300 ${
                    isNavOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
                onMouseEnter={handleMenuHover}
            >
                <div className="w-8 h-8 flex flex-col gap-1.5 justify-center items-center">
                    <div className="w-6 h-0.5 bg-[#00b4d8] rounded-full transition-all duration-300"></div>
                    <div className="w-6 h-0.5 bg-[#00b4d8] rounded-full transition-all duration-300"></div>
                    <div className="w-6 h-0.5 bg-[#00b4d8] rounded-full transition-all duration-300"></div>
                </div>
            </div>

            {/* Sidebar Navigation */}
            <nav 
                ref={navRef}
                className="fixed top-0 left-0 w-80 h-full bg-[#0a192f]/95 backdrop-blur-xl shadow-2xl border-r border-[#00b4d8]/10 z-40"
                onMouseLeave={handleNavLeave}
            >
                <div className="flex flex-col h-full p-6">
                    {/* Header */}
                    <div className="flex-shrink-0 mb-8">
                        <div className="text-2xl font-bold text-[#00b4d8]">
                            DESE Open Day
                        </div>
                        <div className="text-sm text-gray-400 mt-1">
                            Department of Electrical Sciences
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    onClick={() => handleNavClick(item)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                                        activeLink.toLowerCase() === item.name.toLowerCase()
                                            ? 'bg-[#00b4d8]/10 text-[#00b4d8] shadow-[0_0_10px_2px_rgba(0,180,216,0.1)] border-l-4 border-[#00b4d8]'
                                            : 'text-gray-300 hover:bg-[#00b4d8]/5 hover:text-white border-l-4 border-transparent'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
