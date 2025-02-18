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
    <div className="py-16 z-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-white z-50">Meet Our Team</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 z-50">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center p-6 bg-[#112240] shadow-lg rounded-lg border border-[#00b4d8]/20 hover:border-[#00b4d8]/50 transition-all z-50">
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover object-top mx-auto rounded-full border-4 border-[#00b4d8]/20 z-50"
            />
            <h3 className="text-xl font-semibold mt-4 text-white z-50">{member.name}</h3>
            <p className="text-[#00b4d8] z-50">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
