"use client";
import React, { useState } from "react";

const Feature = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Practice Coding",
      desc: "The best way to learn is by doing! Practice hands-on coding with our quantum AI compiler that adapts to your skill level in real-time.",
      icon: "💻",
      gradient: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      title: "Expert Content",
      desc: "Our AI-powered platform continuously crafts tutorials that adapt in real-time. Stay ahead with content that evolves with technology trends.",
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-400",
      bg: "bg-purple-50",
      border: "border-purple-200",
    },
    {
      title: "Beginner Friendly",
      desc: "Learn coding through immersive tutorials. AI adapts complexity based on your progress for optimal learning curve.",
      icon: "🚀",
      gradient: "from-emerald-500 to-teal-400",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
  ];

  return (
    <section className="w-full bg-[#ecf0f3] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Code Skipper</span> ?
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform from beginner to expert through our learning ecosystem.
            Whether launching your career or mastering new skills — Code Skipper evolves with you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`p-8 rounded-3xl transition-all duration-300 
                ${hoveredCard === idx
                  ? "shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff] -translate-y-1"
                  : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                }
                bg-[#ecf0f3] border border-white/50`}
            >
              {/* Icon Circle with Gradient Background */}
              <div className="flex justify-center mb-6">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-5xl
                    shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff] 
                    bg-gradient-to-br ${feature.gradient} transition-transform duration-300
                    ${hoveredCard === idx ? "scale-105" : "scale-100"}`}
                >
                  <span className="drop-shadow-sm">{feature.icon}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-center text-gray-700 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.desc}
              </p>

              {/* Decorative bottom line on hover */}
              <div
                className={`h-1 w-12 mx-auto mt-6 rounded-full transition-all duration-300
                  ${hoveredCard === idx
                    ? `bg-gradient-to-r ${feature.gradient} w-16`
                    : "bg-gray-200 w-12"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;