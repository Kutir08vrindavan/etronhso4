// src/components/CardSection.jsx
export default function CardSection() {
  const cards = [
    {
      title: "Balatro+",
      img: "/images/card1.jpg",
      logo: "Arcade",
    },
    {
      title: "Strong and Calm Combos for Busy Days",
      img: "/images/card2.jpg",
      logo: "Fitness+",
    },
    {
      title: "Seth Rogen: The Zane Lowe Interview",
      img: "/images/card3.jpg",
      logo: "Music",
    },
    {
      title: "Seth Rogen: The Zane Lowe Interview",
      img: "/images/card3.jpg",
      logo: "Music",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50 font-['Poppins'] overflow-hidden">
      <div className="marquee-wrapper">
        <div className="marquee flex gap-6">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="min-w-[250px] relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <span className="text-sm opacity-80">{card.logo}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Marquee Animation Styles */}
      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        /* ✅ Hover/Touch -> Pause Animation */
        .marquee-wrapper:hover .marquee,
        .marquee-wrapper:active .marquee {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
