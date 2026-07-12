"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaBookOpen,
  FaLaptopCode,
  FaSearch,
} from "react-icons/fa";

const quickLinks = [
  { name: "Artificial Intelligence", link: "/mcq/artificial-intelligence" },
  { name: "Ethical Hacking", link: "/mcq/ethical-hacking-mcq" },
  { name: "I/O Device", link: "/mcq/io-device" },
  { name: "Networking", link: "/mcq/networking-mcq" },
];

export default function Hero() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[#ecf0f3] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-indigo-700 bg-[#ecf0f3] shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]">

              🚀 AI Powered Learning Platform

            </div>

            {/* Heading */}

            <h1
              id="hero-heading"
              className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-800"
            >
              Learn{" "}
              <span className="text-indigo-600">
                Programming,
              </span>

              <br />

              AI, Data Science &

              <br />

              Digital Marketing
            </h1>

            {/* Description */}

            <p className="mt-8 text-lg leading-9 text-gray-600 max-w-2xl">

              <strong>CodeSkipper</strong> helps students,
              developers and professionals learn
              <strong> Programming, Web Development,
                Artificial Intelligence, Data Science,
                Power BI, Cyber Security and Digital Marketing </strong>
              through structured roadmaps,
              practical tutorials,
              interview questions,
              MCQs,
              educational tools,
              projects
              and career-focused learning resources.

            </p>

            <p className="mt-5 text-gray-600 leading-8 max-w-2xl">

              Whether you're starting your coding journey
              or preparing for your next tech job,
              CodeSkipper provides step-by-step learning
              with practical examples that help you build
              real-world skills.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link href="/roadmap">

                <button className="flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition">

                  Start Learning

                  <FaArrowRight />

                </button>

              </Link>

              {/* <Link href="/courses">

                <button className="px-7 py-4 rounded-xl font-semibold text-gray-700 bg-[#ecf0f3] shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff] transition">

                  Explore Courses

                </button>

              </Link> */}

            </div>

            {/* Trust */}



          </div>
          <div>
            {/* RIGHT SIDE */}
            <div
              className="mb-8 p-8 rounded-3xl
bg-gradient-to-r
from-indigo-600
to-blue-600
text-white">

              <h2 className="text-2xl font-bold">

                Start Your Tech Career

              </h2>

              <p className="mt-4 opacity-90">

                Learn programming through structured roadmaps,
                practical projects,
                coding exercises,
                MCQs,
                interview questions
                and career-focused learning resources.

              </p>

              <div className="mt-6 flex gap-3 flex-wrap">

                <Link href="/roadmap" className="bg-white/20 px-4 py-2 rounded-full">

                  Roadmaps

                </Link>

                {/* <span className="bg-white/20 px-4 py-2 rounded-full">

                  Projects

                </span> */}

                <Link href="/interview" className="bg-white/20 px-4 py-2 rounded-full">

                  Interview

                </Link>

              </div>
              <div className="mt-10">

                <h3 className="text-2xl font-bold">

                  Popular Technologies

                </h3>
                <div className="flex flex-wrap mt-4 gap-3">
                  {quickLinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white hover:text-indigo-700 hover:scale-105"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

              </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-12">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="text-gray-700">

                  Beginner Friendly

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaBookOpen className="text-indigo-500" />

                <span className="text-gray-700">

                  Practical Learning

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaLaptopCode className="text-pink-500" />

                <span className="text-gray-700">

                  Career Focused

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-green-500" />

                <span className="text-gray-700">

                  Interview Preparation

                </span>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}