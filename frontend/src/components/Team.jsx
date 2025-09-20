// src/components/Team.jsx
import { motion } from "framer-motion";

export default function Team() {
  const teamMembers = [
    {
      name: "Amit Oberoi",
      role: "Founder & CEO",
      photo: "/team/rohit.png",
    },
    {
      name: "Monika Mahindru Nagpal",
      role: "Head of Operations",
      photo: "/team/priya.png",
    },
    
    
  ];

  // Only take the first two members
  const displayedMembers = teamMembers.slice(0, 2);

  return (
    <>
      {/* Banner Section */}
      <section
        className="relative h-64 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/Team.png')" }}
      >
        <div className="absolute inset-0 bg-[#283b91]/50"></div> {/* Overlay */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-5xl font-bold text-white"
        >
          Meet Our <span className="text-[#d96327]">Team</span>
        </motion.h1>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white font-['Poppins']">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {displayedMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white border-2 border-[#d96327] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#d96327] mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
