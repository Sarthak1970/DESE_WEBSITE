import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { RiCalendarEventLine, RiMapPinLine, RiTimeLine } from "@remixicon/react";

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

  return (
    <div id="event-highlights" className="relative py-16 md:py-32 px-4">
      <div className="max-w-8xl mx-auto"> {/* Increased container width */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] to-[#b584fd] animate-text-glow"
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
              transition={{ duration: 0.8 }} // Increased duration for hover effect
              viewport={{ once: true }}
              onClick={() => {
                setSelectedEvent(event);
                setCurrentEventIndex(index);
              }}
              className="group relative bg-[#030519]/50 p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border border-[##2C2382]/20 hover:border-[#6354C3]/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_5px_rgba(155,93,229,0.3)]"
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
      </div>
    </div>
  );
};

export default Event;
