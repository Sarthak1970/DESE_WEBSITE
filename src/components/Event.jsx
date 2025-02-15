import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RiCalendarEventLine, RiMapPinLine, RiTimeLine, RiInformationLine } from "@remixicon/react";

const eventsData = [
  {
    id: 1,
    title: "Tech Expo",
    date: "2023-12-15",
    time: "10:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Explore cutting-edge technologies and innovations from various departments.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    type: "exhibition"
  },
  {
    id: 2,
    title: "Robotics Workshop",
    date: "2023-12-16",
    time: "9:00 AM - 1:00 PM",
    location: "Engineering Lab 101",
    description: "Hands-on workshop on robotics and automation systems.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    type: "workshop"
  },
  {
    id: 3,
    title: "AI Seminar",
    date: "2023-12-17",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    description: "Insightful talks on the future of artificial intelligence and machine learning.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    type: "seminar"
  }
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedEvent]);

  return (
    <div id="event-highlights" className="relative py-16 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow"
        >
          Event Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {eventsData.map(event => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
              className="group relative bg-[#0a192f]/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-40 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{event.title}</h3>
              <div className="space-y-2 text-sm md:text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <RiCalendarEventLine className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiTimeLine className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiMapPinLine className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[500] p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0a192f] max-w-full sm:max-w-lg md:max-w-2xl w-full rounded-xl md:rounded-2xl overflow-hidden border border-[#00b4d8]/20"
              >
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 p-1 md:p-2 rounded-full bg-[#00b4d8]/10 hover:bg-[#00b4d8]/20 transition-colors"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative h-48 sm:h-56 md:h-64">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{selectedEvent.title}</h3>
                  <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-300">
                    <div className="flex items-center gap-2">
                      <RiCalendarEventLine className="w-5 h-5 md:w-6 md:h-6" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiTimeLine className="w-5 h-5 md:w-6 md:h-6" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiMapPinLine className="w-5 h-5 md:w-6 md:h-6" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <RiInformationLine className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                      <p className="leading-relaxed">{selectedEvent.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Event;
