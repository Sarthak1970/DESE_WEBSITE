import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RiCalendarEventLine, RiMapPinLine, RiTimeLine, RiInformationLine } from "@remixicon/react";
import { Contact } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: "Line Follower Robot Contest",
    date: "01-03-2025",
    location: "DESE IISc",
    description: "DESE invites you to participate in the Line Follower Robot Contest a perfect chance to showcase your robotics and technical skills! ",
    image: "https://res.cloudinary.com/dosnuagvu/image/upload/v1739553514/LFR_poster_DESE_openday25_bjyoer.png",
    type: "exhibition",
    Contact:"Shivam 88391-43990 ,Meenakshi 91108-29943"
  },
  {
    id: 2,
    title: "Robotics Workshop",
    date: "2025-3-1",
    time: "9:00 AM - 1:00 PM",
    location: "Engineering Lab 101",
    description: "Hands-on workshop on robotics and automation systems.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    type: "workshop"
  },
  {
    id: 3,
    title: "AI Seminar",
    date: "01-03-2025",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    description: "Insightful talks on the future of artificial intelligence and machine learning.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    type: "seminar"
  }
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedEvent]);

  const handleLeftArrowClick = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex === 0 ? eventsData.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentEventIndex((prevIndex) => (prevIndex === eventsData.length - 1 ? 0 : prevIndex + 1));
  };

  const event = eventsData[currentEventIndex];

  return (
    <div id="event-highlights" className="relative py-16 md:py-32 px-4">
      <div className="max-w-8xl mx-auto"> {/* Increased container width */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow"
        >
          Event Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => {
                setSelectedEvent(event);
                setCurrentEventIndex(index);
              }}
              className="group relative bg-[#0a192f]/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-40 sm:h-48 mb-4 rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
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
                {/* Display only the poster */}
                <div className="relative w-full h-screen">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
