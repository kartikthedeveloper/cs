"use client";
import Link from "next/link";
import React, { useState } from "react";

const mcqTopics = [
  { title: "HTML", link: "/mcq/html-mcq", icon: "🌐", gradient: "from-orange-400 to-amber-300" },
  { title: "DBMS", link: "/mcq/dbms-mcq", icon: "🗄️", gradient: "from-blue-500 to-indigo-400" },
  { title: "Computer Networking", link: "/mcq/networking-mcq", icon: "🌍", gradient: "from-cyan-400 to-sky-300" },
  { title: "Python", link: "/mcq/python-mcq", icon: "🐍", gradient: "from-green-400 to-emerald-300" },
  { title: "CSS", link: "/mcq/css-mcq", icon: "🎨", gradient: "from-pink-400 to-rose-300" },
  { title: "JavaScript", link: "/mcq/javascript-mcq", icon: "🟨", gradient: "from-yellow-400 to-amber-300" },
  { title: "C Language", link: "/mcq/c-language", icon: "⚙️", gradient: "from-slate-400 to-gray-300" },
  { title: "MongoDB", link: "/mcq/mongodb-mcq", icon: "🍃", gradient: "from-green-500 to-lime-400" },
];

const Mcq = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-[#ecf0f3] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-700">
            Multiple Choice Questions
          </h2>
          <p className="text-gray-500 mt-3 text-lg">
            Test your knowledge with our curated MCQ collection
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mcqTopics.map((topic, index) => (
            <Link key={topic.title} href={topic.link} passHref>
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`cursor-pointer p-6 rounded-3xl text-center transition-all duration-300 bg-[#ecf0f3]
                  ${hovered === index
                    ? "shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff] -translate-y-1"
                    : "shadow-[8px_8px_16px_#c5c9cc,-8px_-8px_16px_#ffffff]"
                  }
                  hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
                  border border-white/50`}
              >
                {/* Icon Circle with Gradient */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl
                      shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                      bg-gradient-to-br ${topic.gradient}
                      transition-transform duration-300
                      ${hovered === index ? "scale-110" : "scale-100"}`}
                  >
                    <span className="drop-shadow-sm">{topic.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  {topic.title}
                </h3>

                {/* Decorative line */}
                <div
                  className={`h-1 w-12 mx-auto rounded-full transition-all duration-300
                    ${hovered === index
                      ? `bg-gradient-to-r ${topic.gradient} w-16`
                      : "bg-gray-200 w-12"}`}
                />

                {/* Explore Button */}
                <button
                  className={`mt-5 px-6 py-2 text-sm font-semibold rounded-xl bg-[#ecf0f3] text-gray-700
                    shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                    transition-all duration-300
                    ${hovered === index
                      ? "shadow-[inset_4px_4px_8px_#c5c9cc,inset_-4px_-4px_8px_#ffffff]"
                      : "hover:shadow-[inset_4px_4px_8px_#c5c9cc,inset_-4px_-4px_8px_#ffffff]"
                    }`}
                >
                  Explore
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mcq;