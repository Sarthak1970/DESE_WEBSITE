import React from 'react';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] to-[#07101f] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-bold text-[#00b4d8] mb-6 relative inline-block">
                      <span className="relative z-10 ">Demo Projects</span>
                      
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-[#00b4d8]/20 rounded-full mt-3" />
            <div className="absolute -bottom-4 left-1/4 w-1/2 h-2 bg-[#00b4d8] rounded-full animate-pulse" />
          </h1>
          <p className="text-lg text-gray-300">Explore our cutting-edge technology demonstrations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[1, 2].map((_, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00b4d8]/10 to-[#00b4d8]/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
                <div className="relative overflow-hidden rounded-xl mb-8 w-full">
                  <div className="w-full h-64 bg-[#0a192f]/50 flex items-center justify-center">
                    <svg className="w-20 h-20 text-[#00b4d8]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent" />
                </div>
                
                <h2 className="text-2xl font-bold text-[#00b4d8] mb-4 group-hover:text-white transition-colors duration-300">
                  Coming Soon
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6 flex-1 text-center">
                  This demo will be revealed soon. Stay tuned!
                </p>
                
                <button className="w-full px-6 py-3 bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white rounded-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 opacity-50 cursor-not-allowed">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute inset-0 border-2 border-[#00b4d8]/10 rounded-3xl group-hover:border-[#00b4d8]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
