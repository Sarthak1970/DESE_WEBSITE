import { motion } from 'framer-motion';
import { useState } from "react";

const EventTimeline = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    { time: "9:00 AM", title: "Line Follower Contest", location: "Classroom: 305" },
    { time: "10:00 AM", title: "Drone and RC plane show", location: "DESE Lawns" },
    { time: "9:00 AM", title: "Laser Maze", location: "Room 129" },
    { time: "10:00 AM", title: "Gun Game", location: "Classroom: 137" },
    { time: "9:00 AM", title: "Maze Runner", location: "Classroom: 134" },
    { time: "10:00 AM", title: "Tesla Coil Showcase", location: "Power Lab: 209" },
    { time: "10:00 AM", title: "Kids Zone", location: " NPTEL Office" },
    { 
      time: "9:00 AM - 5:00 PM", 
      title: "Project Demos", 
      location: "Conference Room (124), Communication Lab (219), Power Electronics Lab (231), Classrooms 134 & 137"
    },
  ];

  return (
    <div id="schedule" className="relative py-16 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] to-[#b584fd] animate-text-glow"
        >
          Event Timeline
        </motion.h2>

        <div className="flex flex-col items-start space-y-12 sm:space-y-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full"
              onMouseEnter={() => setExpandedEvent(index)}
              onMouseLeave={() => setExpandedEvent(null)}
            >
              {index > 0 && (
                <div className="absolute left-1/2 top-0 h-[120%] w-1 bg-[#6354C3]/20 hidden sm:block"></div>
              )}

              <motion.div
                whileHover={{ scale: 1.02, boxShadow: '0 0 15px 5px rgba(155,93,229,0.3)' }}
                transition={{ duration: 0.8 }}
                className="relative bg-[#030519]/50 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-[#2C2382]/20 hover:border-[#9b5de5]/50 transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                    {event.title}
                  </h3>
                  <div className="text-gray-300 text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <i className="ri-time-line text-[#b584fd]"></i>
                      <span>{event.time}</span>
                    </div>
                    {expandedEvent === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {event.speaker && (
                          <div className="flex items-center gap-2 mt-2">
                            <i className="ri-user-line text-[#b584fd]"></i>
                            <span>Speaker: {event.speaker}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <i className="ri-map-pin-line text-[#b584fd]"></i>
                          <span>{event.location}</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>

              <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#b584fd] rounded-full transform -translate-x-1/2 hidden sm:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
