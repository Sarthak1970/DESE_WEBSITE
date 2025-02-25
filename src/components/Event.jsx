import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  RiCalendarEventLine,
  RiMapPinLine,
  RiTimeLine,
} from "@remixicon/react";
import Event1 from "../assets/Event/1.png";
import Event2 from "../assets/Event/2.png";
import Event3 from "../assets/Event/3.png";
import Event4 from "../assets/Event/4.png";
import Event5 from "../assets/Event/5.png";
import Event6 from "../assets/Event/6.png";
import { title } from "framer-motion/client";

const eventsData = [
  // {
  //   id: 1,
  //   title: "Line Follower Context",
  //   date: "01-Mar-2025",
  //   // time: "2:30 PM - 4:00 PM",
  //   location: "Room 134, DESE",
  //   // description: "Panel discussion with distinguished alumni sharing industry insights and career opportunities in ECE.",
  //   image:
  //     "https://res.cloudinary.com/dosnuagvu/image/upload/v1740487502/WhatsApp_Image_2025-02-25_at_17.34.33_b86e7661_rvu0pk.jpg",
  //   type: "seminar",
  // },
  {
    id: 1,
    title: "Tesla Coil Showcase",
    date: "01-Mar-2025",
    location:"Power Lab :209",
    time: "10:00 AM",
    image:"https://res.cloudinary.com/dosnuagvu/image/upload/v1740508454/WhatsApp_Image_2025-02-25_at_23.49.47_977b7b84_n1xk21.jpg"
  },
  {
    id:8,
    title:"Buzz Wire Game",
    date:"01-Mar-2025",
    time:"10:00 AM",
    location:" Near CSRL Lab, DESE",
    image:"https://res.cloudinary.com/dosnuagvu/image/upload/v1740508453/WhatsApp_Image_2025-02-25_at_23.54.39_2e15d88a_o8snpe.jpg"
  },

  {
    id: 7,
    title: "Laser Labyrinth",
    date: "01-Mar-2025",
    location: "Room 129, DESE",
    // description: "Explore our state-of-the-art Smart Grid laboratory featuring renewable energy integration and power system demonstrations.",
    image: Event1,
    // type: "tour",
    // Contact: "Dr. Ramesh Kumar - 98765 43210"
  },
  {
    id: 2,
    title: "Drone Flying",
    date: "01-Mar-2025",
    time: "10:00 AM - 4:00 PM",
    location: "DESE Front Lawn",
    // description: "Live demonstrations of cutting-edge embedded systems and IoT applications developed by our students.",
    image: Event2,
    // type: "exhibition",
  },
  {
    id: 3,
    title: "Musical Staircase",
    date: "01-Mar-2025",
    time: "11:00 AM - 1:00 PM",
    location: "2nd Floor Staircase",
    // description: "Interactive session on machine learning applications in medical diagnostics and healthcare systems.",
    image: Event3,
    // type: "workshop",
    // Contact: "Prof. Ananya Sharma - 99876 54321"
  },
  {
    id: 4,
    title: "Kids Zone ",
    date: "01-Mar-2025",
    time: "9:30 AM - 5:00 PM",
    location: "NPTEL Office",
    // description: "Experience our autonomous robots and robotic arm demonstrations for industrial automation applications.",
    image: Event4,
    // type: "exhibition",
  },
  {
    id: 5,
    title: "Virtual Shooting",
    date: "01-Mar-2025",
    location: "Room 137, DESE",
    // description: "Display of advanced VLSI chip designs and fabrication techniques developed through student projects.",
    image: Event5,
    // type: "exhibition",
    // Contact: "Dr. Sanjay Patel - 97788 66554"
  },
  {
    id: 6,
    title: "Maze Runner",
    date: "01-Mar-2025",
    time: "2:30 PM - 4:00 PM",
    location: "Room 134, DESE",
    // description: "Panel discussion with distinguished alumni sharing industry insights and career opportunities in ECE.",
    image: Event6,
    // type: "seminar",
  },
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedEvent]);

  return (
    <>
      <div id="event-highlights" className="relative py-20 md:py-40 px-6 ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 md:mb-20"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd] animate-text-shimmer">
              Event Highlights
            </span>
          </motion.h2>
          <div className="text-3xl sm:text-4xl  z-(-100) font-bold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-400 animate-text-shimmer">
            <div className="mt-12 mb-20 z-(-10000000) sm:mt-16 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <img
                src="https://res.cloudinary.com/dosnuagvu/image/upload/v1740487502/WhatsApp_Image_2025-02-25_at_17.34.33_b86e7661_rvu0pk.jpg"
                alt="Failed to"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {eventsData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px 8px rgba(155,93,229,0.35)",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => {
                  setSelectedEvent(event);
                  setCurrentEventIndex(index);
                }}
                className="group relative bg-[#0a0f2d]/80 rounded-2xl overflow-hidden backdrop-blur-lg border border-[#6354C3]/20 hover:border-[#b584fd]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2d]/50 to-[#0a0f2d] opacity-80 z-10"></div>
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative z-20 p-6 -mt-10">
                  {/* <span className="px-4 py-1 text-sm rounded-full bg-[#b584fd]/20 text-[#b584fd] border border-[#b584fd]/30 inline-block mb-4">
                    {event.type}
                  </span> */}
                  <span className="px-4 py-1 text-sm rounded-full"></span>
                  <span></span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-[#b584fd] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="space-y-3 text-base text-gray-300">
                    <div className="flex items-center gap-3 group/item">
                      <RiCalendarEventLine className="w-5 h-5 text-[#b584fd]" />
                      <span className="group-hover/item:text-[#b584fd] transition-colors duration-300">
                        {event.date}
                      </span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-3 group/item">
                        <RiTimeLine className="w-5 h-5 text-[#b584fd]" />
                        <span className="group-hover/item:text-[#b584fd] transition-colors duration-300">
                          {event.time}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 group/item">
                      <RiMapPinLine className="w-5 h-5 text-[#b584fd]" />
                      <span className="group-hover/item:text-[#b584fd] transition-colors duration-300">
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Popup Modal */}
          {selectedEvent && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#0a0f2d] rounded-2xl p-6 md:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto relative border border-[#b584fd]/30"
              >
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 text-[#b584fd] hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-contain rounded-xl mb-6"
                />

                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedEvent.title}
                </h3>

                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-3">
                    <RiCalendarEventLine className="w-5 h-5 text-[#b584fd]" />
                    <span>{selectedEvent.date}</span>
                  </div>

                  {selectedEvent.time && (
                    <div className="flex items-center gap-3">
                      <RiTimeLine className="w-5 h-5 text-[#b584fd]" />
                      <span>{selectedEvent.time}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <RiMapPinLine className="w-5 h-5 text-[#b584fd]" />
                    <span>{selectedEvent.location}</span>
                  </div>

                  {/* <div className="pt-4">
                  <h4 className="text-xl font-semibold text-white mb-2">Description</h4>
                  <p className="text-gray-300">{selectedEvent.description}</p>
                </div> */}

                  {selectedEvent.Contact && (
                    <div className="pt-2">
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Contact
                      </h4>
                      <p className="text-gray-300">{selectedEvent.Contact}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Event;
