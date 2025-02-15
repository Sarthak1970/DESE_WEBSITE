import React from "react";
import {
  RiCalendarEventLine,
  RiMapPinLine,
  RiTeamLine,
  RiMedalLine,
} from "@remixicon/react";
import OpenDaySvg from "../assets/Open Day LOGO White.svg";
import FloatingShape from "../components/FloatingShape";
import IISCBuilding from "../assets/IISC main building svg.svg";
import CountdownTimer from "../components/Timer";
import Button from "../components/Button";
import Gallery from "../components/Gallary";
import Event from "../components/Event";
import gsap from "gsap";
import Sponsors from "../components/Sponsers";
import Team from "../components/Team";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import DeseLogo from "../assets/DeseLogo.svg";
import EventTimeline from "../components/EventTimeline";

const Home = () => {
  return (
    <>
      <div className="relative z-0 min-h-screen bg-[#0a192f] ">
        <div className="fixed z-[-1] inset-0 bg-[#0a192f]/50">
          <img
            src={IISCBuilding}
            alt="IISC Building"
            className="fixed w-full h-full object-contain object-center opacity-90"
          />
        </div>

        <div id="Hero" className="relative h-screen">
          <FloatingShape />

          {/* DESE Logo (Top Right) */}
          <img
            src={IISCMasterSealBlack}
            alt="DESE Logo"
            className="absolute top-6 right-6 h-[60px] md:h-[80px] transition-transform duration-300 hover:scale-110"
            style={{
              filter:
                "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            {/* Wrapper for logos */}
            <div className="relative flex flex-col items-center">
              {/* DESE Logo (Fixed Size) */}
              <img
                src={DeseLogo}
                alt="DESE Logo"
                className="absolute left-1/2 -top-12 transform -translate-x-1/2 max-w-[300px]"
                style={{
                  left: "calc(1 / 2 * 43%)",
                  top: "calc(var(--spacing) * -34)",
                  filter:
                    "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
                }}
              />

              {/* Open Day Logo (Hover Effect) */}
              <div className="animate-fade-in-up animate-duration-1000 animate-ease-in-out">
                <img
                  src={OpenDaySvg}
                  alt="Open Day Logo"
                  className="h-[250px] mb-8 transform transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up animate-delay-500">
              <Button
                variant="primary"
                className="bg-opacity-20 border border-[#00b4d8] hover:shadow-[#00b4d8]/30"
              >
                Register Now
              </Button>
              <Button
                variant="secondary"
                className="bg-white/10 border border-white/20 hover:shadow-white/20"
              >
                Learn More
              </Button>
            </div>

            <div
              className="absolute bottom-8 animate-bounce animate-infinite animate-duration-2000 animate-ease-in-out cursor-pointer"
              onClick={() => {
                const nextSection = document.getElementById("event-highlights");
                nextSection.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <svg
                className="w-8 h-8 text-white hover:text-[#00b4d8] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        {/* About DESE Section */}
        <div id="about-dese" className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-10"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow">
              About DESE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p
                  className="text-gray-300 text-xl leading-relaxed bg-[#0a192f]/50 p-6 rounded-xl backdrop-blur-sm border border-[#00b4d8]/50 shadow-[0_0_20px_rgba(0,180,216,0.2)] 
          hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] hover:scale-105 transition-all duration-300"
                >
                  The Department of Electronic Systems Engineering (DESE),
                  formerly CEDT, was established in 1974 with a vision to
                  achieve excellence in research and education in electronic
                  systems engineering.
                </p>
                <p
                  className="text-gray-300 text-xl leading-relaxed bg-[#0a192f]/50 p-6 rounded-xl backdrop-blur-sm border border-[#00b4d8]/50 shadow-[0_0_20px_rgba(0,180,216,0.2)] 
          hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Our department focuses on training engineers, fostering
                  collaboration with the electronics industry in India, and
                  making a positive societal impact through innovative research
                  and development.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-1 rounded-2xl overflow-hidden">
                  <Gallery />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Events Timeline */}
        <div
          id="countdown"
          className="relative py-16 md:py-32 overflow-hidden flex justify-center items-center"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-10"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
            <CountdownTimer />
          </div>
        </div>
        <div className="events-section">
          <Event />
        </div>
        <EventTimeline />

        {/* Research Section */}
        <div id="research" className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-10"></div>
            <div className="absolute inset-0 "></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow">
              Research Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Signal Processing",
                  description:
                    "Advanced algorithms for signal analysis and processing",
                  icon: "ri-radar-line",
                },
                {
                  title: "Embedded Systems",
                  description:
                    "Design and development of efficient embedded solutions",
                  icon: "ri-cpu-line",
                },
                {
                  title: "VLSI Design",
                  description:
                    "Cutting-edge research in VLSI architecture and design",
                  icon: "ri-chip-line",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-[#0a192f]/50 p-8 rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#00b4d8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <i
                      className={`${item.icon} text-4xl mb-4 text-[#00b4d8]`}
                    ></i>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
{/* Gallery Section */}
<div className="py-20 px-4 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-12 text-white">
    Gallery
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <img
      src="https://res.cloudinary.com/dosnuagvu/image/upload/v1739553511/Images_in_about_us_p1_b9avno.jpg"
      alt="Gallery 1"
      className="rounded-lg"
    />
    <img
      src="https://res.cloudinary.com/dosnuagvu/image/upload/v1739553515/Images_in_about_us_p2_jsvalz.jpg"
      alt="Gallery 2"
      className="rounded-lg"
    />
    <img
      src="https://res.cloudinary.com/dosnuagvu/image/upload/v1739553519/Images_in_about_us_p4_oh1yqx.jpg"
      alt="Gallery 3"
      className="rounded-lg"
    />
  </div>
</div>

        {/* Sponsors Section */}
        <Team />
        <div className="mt-20  max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-[#00b4d8] to-[#00b4d8]/70 bg-clip-text ">
            Locate Us
          </h2>
          <div className="grid mb-20 grid-cols-1 md:grid-cols-2 gap-12 bg-[#112240] p-8 rounded-xl border border-[#00b4d8]/20 backdrop-blur-sm">
            {/* Map Section */}
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.225201201201!2d77.565123315304!3d13.0212019908201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d9b4f1f7d5%3A0x1b8e8b0b0b0b0b0b!2sDepartment%20of%20Electronic%20Systems%20Engineering%2C%20Indian%20Institute%20of%20Science!5e0!3m2!1sen!2sin!4v1629999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="space-y-8 text-white">
              <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <i className="ri-calendar-event-line text-[#00b4d8]"></i>
                  When
                </h3>
                <p className="text-gray-300">1st March, 2025</p>
              </div>

              <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <i className="ri-map-pin-line text-[#00b4d8]"></i>
                  Where
                </h3>
                <p className="text-gray-300">
                  Department of Electronic Systems,
                  <br />
                  INDIAN INSTITUTE OF SCIENCE,
                  <br />
                  Mathikere, Bengaluru,
                  <br />
                  Karnataka 560012
                </p>
              </div>

              <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <i className="ri-directions-line text-[#00b4d8]"></i>
                  How to get there
                </h3>
                <p className="text-gray-300">
                  IISc is often locally referred to as the Tata Institute. It is
                  better to use the name Tata Institute with the taxi,
                  auto-rickshaw drivers, and bus conductors. Inside the
                  institute, we have enough banners for directions to reach our
                  department DESE.
                </p>
              </div>

              <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <i className="ri-quill-pen-line text-[#00b4d8]"></i>A Note
                  from the Chair
                </h3>
                <p className="text-gray-300 italic">
                  Will update you the content
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sponsors-section">
        <Sponsors />
      </div>
    </>
  );
};

export default Home;
