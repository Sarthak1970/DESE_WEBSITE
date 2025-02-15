import { useState } from "react";

const EventTimeline = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    { time: "9:00 - 10:00 AM", title: "TBD", location: "TBA" },
    { time: "10:00 - 11:00 AM", title: "Keynote 1: Talk on Passwords", speaker: "Nitin Singh", location: "Room CSA-254" },
    { time: "10:00 - 11:30 AM", title: "Quizzinfa (Kids)", location: "Room 112 & Room 252" },
    { time: "11:30 - 12:30 PM", title: "Quizzing (Intermediate)", location: "Room 112 & Room 252" },
  ];

  const toggleExpand = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  return (
    <div id="schedule" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.svg')] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] to-[#0096c7] animate-text-glow">
          Event Timeline
        </h2>

        {/* Scrollable Timeline */}
        <div className="relative overflow-x-auto">
          <div className="flex items-center space-x-8 sm:space-x-12">
            {events.map((event, index) => (
              <div key={index} className="relative w-60 sm:w-72 flex-shrink-0">
                {/* Connecting Line */}
                {index > 0 && (
                  <div className="absolute left-[-50%] top-1/2 h-1 w-[120%] bg-[#00b4d8]/20 hidden sm:block"></div>
                )}

                {/* Event Box (Expandable) */}
                <div
                  className="relative bg-[#0a192f]/50 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all duration-300 cursor-pointer overflow-hidden"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="absolute inset-0 bg-[#00b4d8]/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                      {event.title}
                    </h3>
                    <div className="text-gray-300 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <i className="ri-time-line text-[#00b4d8]"></i>
                        <span>{event.time}</span>
                      </div>
                      {expandedEvent === index && (
                        <>
                          {event.speaker && (
                            <div className="flex items-center gap-2 mt-2">
                              <i className="ri-user-line text-[#00b4d8]"></i>
                              <span>Speaker: {event.speaker}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 mt-2">
                            <i className="ri-map-pin-line text-[#00b4d8]"></i>
                            <span>{event.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#00b4d8] rounded-full transform -translate-x-1/2 hidden sm:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
