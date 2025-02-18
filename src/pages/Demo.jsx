import React from "react";
import Demo1 from "../assets/Demo1.png"

const DemoPage = () => {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Demo Projects
        </h1>
        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience cutting-edge technology through our innovative demonstrations
        </p>

        <div className="group relative bg-[#0a0b2e]/80 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative z-10">
            <img
              src={Demo1}
              alt="Advanced Driver Assistance Systems"
              className="w-full h-64 object-cover rounded-xl mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            />
            <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
              Advanced Driver Assistance Systems (ADAS)
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              ADAS represents the future of automotive safety and comfort. Our demonstration showcases:
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li className="text-gray-200">Real-time collision avoidance systems</li>
                <li className="text-gray-200">Intelligent lane-keeping assistance</li>
                <li className="text-gray-200">Advanced adaptive cruise control</li>
                <li className="text-gray-200">AI-powered sensor fusion technology</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
