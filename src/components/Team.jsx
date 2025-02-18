import React from "react";

const teamMembers = [
  { name: "Vibhore Jain", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Vibhore.jpg" },
  { name: "Niladri Podder", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Niladri.jpg" },
  { name: "Ankita Nandi", role: "Ph.D.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Ankita.jpg" },
  { name: "Arun K R Kumar", role: "Project Associate", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Arun.jpg" },
  { name: "Subhabrata Basak", role: "Ph.D.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Basak.jpg" },
  { name: "Arnab Mallick", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Arnab.jpg" },
  { name: "Bishwapa Sanyal", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Biswapa.jpg" },
  { name: "Sarvajit Ajit Patil", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Sarvajit.jpg" },
  { name: "Kushal Gowda", role: "M.Tech.", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Kushal.jpg" },
  { name: "Kumar Bhaweshnu", role: "Technical Assistant", image: "https://labs.dese.iisc.ac.in/openday/wp-content/uploads/sites/12/2024/02/Kumar.jpg" },
];

const Team = () => {
  return (
    <div className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030418] to-[#0a0b2e] opacity-90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The brilliant minds behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group [perspective:1000px]"
            >
              <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="relative overflow-hidden rounded-2xl bg-[#0a0b2e]/80 p-6 backdrop-blur-sm
                              border border-white/10 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-400">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#0a0b2e]/80 p-6 backdrop-blur-sm
                              border border-white/10 [transform:rotateY(180deg)] [backface-visibility:hidden]
                              flex flex-col items-center justify-center text-center">
                  <h3 className="text-xl font-bold text-blue-400 mb-4">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-purple-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    "Passionate about innovation and technology"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
