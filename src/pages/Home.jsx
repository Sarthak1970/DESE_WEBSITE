import React from 'react'
import { RiCalendarEventLine, RiMapPinLine, RiTeamLine, RiMedalLine } from "@remixicon/react";
import OpenDaySvg from '../assets/Open Day LOGO White.svg'
import FloatingShape from '../components/FloatingShape'
import IISCBuilding from '../assets/IISC main building svg.svg'
import CountdownTimer from '../components/Timer';
import Button from '../components/Button';
import Gallery from '../components/Gallary';
import Event from '../components/Event';
import gsap from 'gsap'; // Added missing import
import Sponsors from '../components/Sponsers';
import Team from '../components/Team';

const Home = () => {
    return (
        <>
            <div className="relative z-0 min-h-screen bg-[#0a192f] ">
            <div className="fixed z-[-1] inset-0 bg-[#0a192f]/50">
                <img src={IISCBuilding} alt="IISC Building" className="fixed w-full h-full object-contain object-center opacity-90" />
            </div>
                

          
      {/* Hero Section */}
      <div id='Hero' className="relative h-screen">
        <FloatingShape />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="animate-fade-in-up animate-duration-1000 animate-ease-in-out">
            <img src={OpenDaySvg} alt="Open Day Logo" className="h-[250px] mb-8 transform transition-transform hover:scale-105" />
          </div>
          <div className="w-full max-w-4xl px-4 mb-10">
            <CountdownTimer />
          </div>
          {/* <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8 leading-relaxed bg-black/20 p-4 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in-up animate-delay-300">
            Join us for an unforgettable experience at our annual Open Day event!
          </p> */}
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
              const nextSection = document.getElementById('event-highlights');
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }}
            >
            <svg className="w-8 h-8 text-white hover:text-[#00b4d8] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
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
              <p className="text-gray-300 text-xl leading-relaxed bg-[#0a192f]/50 p-6 rounded-xl backdrop-blur-sm border border-[#00b4d8]/20 shadow-[0_0_20px_rgba(0,180,216,0.1)] ">
                The Department of Electronic Systems Engineering (DESE), formerly CEDT, was established in 1974 with a vision to achieve excellence in research and education in electronic systems engineering.
              </p>
              <p className="text-gray-300 text-xl leading-relaxed bg-[#0a192f]/50 p-6 rounded-xl backdrop-blur-sm border border-[#00b4d8]/20 shadow-[0_0_20px_rgba(0,180,216,0.1)] hover:shadow-[0_0_30px_rgba(0,180,216,0.2)] transition-all duration-300">
                Our department focuses on training engineers, fostering collaboration with the electronics industry in India, and making a positive societal impact through innovative research and development.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-1 rounded-2xl  overflow-hidden">
                <Gallery />
                {/* <div className="absolute inset-0 bg-gradient-to-t from  -black/60 via-transparent to-transparent pointer-events-none"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

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
                description: "Advanced algorithms for signal analysis and processing",
                icon: "ri-radar-line"
              },
              {
                title: "Embedded Systems",
                description: "Design and development of efficient embedded solutions",
                icon: "ri-cpu-line"
              },
              {
                title: "VLSI Design",
                description: "Cutting-edge research in VLSI architecture and design",
                icon: "ri-chip-line"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative bg-[#0a192f]/50 p-8 rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#00b4d8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <i className={`${item.icon} text-4xl mb-4 text-[#00b4d8]`}></i>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>


      

                <Event />


        {/* Events Timeline */}
      <div id="schedule" className="relative py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-10"></div>
          <div className="absolute inset-0 "></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow">
            Event Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-[#00b4d8]/20 transform -translate-x-1/2 hidden sm:block"></div>
            <div className="space-y-8 sm:space-y-16">
              {[
                {
                  time: "9:00 AM - 10:00 AM",
                  title: "Registration & Welcome",
                  location: "Main Lobby"
                },
                {
                  time: "10:00 AM - 12:00 PM",
                  title: "Campus Tour",
                  location: "Starting at Main Building"
                },
                {
                  time: "12:00 PM - 1:00 PM",
                  title: "Lunch Break",
                  location: "Cafeteria"
                },
                {
                  time: "1:00 PM - 3:00 PM",
                  title: "Department Presentations",
                  location: "Auditorium"
                },
                {
                  time: "3:00 PM - 4:00 PM",
                  title: "Student Panel Discussion",
                  location: "Room 101"
                },
                {
                  time: "4:00 PM - 5:00 PM",
                  title: "Closing Remarks",
                  location: "Auditorium"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`group relative w-full ${index % 2 === 0 ? 'sm:pr-[50%]' : 'sm:pl-[50%]'}`}
                >
                  <div className="absolute top-0 w-4 h-4 bg-[#00b4d8] rounded-full transform -translate-x-1/2 left-1/2 hidden sm:block"></div>
                  <div className="group relative bg-[#0a192f]/50 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-[#00b4d8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{item.title}</h3>
                      <div className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                          <i className="ri-time-line text-[#00b4d8]"></i>
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-map-pin-line text-[#00b4d8]"></i>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

                
      {/* About Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">About Open Day</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Our Open Day is the perfect opportunity to explore our campus, meet our faculty, and discover the wide range of programs we offer.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience our state-of-the-art facilities, learn about our innovative teaching methods, and get a glimpse of student life at our university.
            </p>
          </div>
          <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
            <img src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg" alt="Campus Life" className="rounded-lg" />
          </div>
        </div>
      </div> */}

      {/* Gallery Section */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src="https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg" alt="Library" className="rounded-lg" />
          <img src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" alt="Lecture" className="rounded-lg" />
          <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg" alt="Students" className="rounded-lg" />
        </div>
      </div>

    {/* Sponsors Section */}
                <Sponsors />
                
                <Team />


                
                    
    <div className="mt-20  max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-[#00b4d8] to-[#00b4d8]/70 bg-clip-text ">Locate Us</h2>
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
              Department of Electronic Systems,<br />
              INDIAN INSTITUTE OF SCIENCE,<br />
              Mathikere, Bengaluru,<br />
              Karnataka 560012
            </p>
          </div>

          <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <i className="ri-directions-line text-[#00b4d8]"></i>
              How to get there
            </h3>
            <p className="text-gray-300">
              IISc is often locally referred to as the Tata Institute. It is better to use the name Tata Institute with the taxi, auto-rickshaw drivers, and bus conductors. Inside the institute, we have enough banners for directions to reach our department DESE.
            </p>
          </div>

          <div className="p-6 bg-[#0a192f] rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <i className="ri-quill-pen-line text-[#00b4d8]"></i>
              A Note from the Chair
            </h3>
            <p className="text-gray-300 italic">Will update you the content</p>
          </div>
        </div>
      </div>
    </div>
                
    </div>
    </>
  )
}

export default Home
