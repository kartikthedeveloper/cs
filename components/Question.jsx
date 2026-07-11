import Link from "next/link";
import {
  FaRobot,
  FaCss3Alt,
  FaShieldAlt,
  FaChartLine,
  FaLock,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaMicrochip,
  FaStackOverflow,
  FaChartBar,
  FaPython,
  FaReact,
  FaDatabase,
} from "react-icons/fa";

const subjects = [
  {
    name: "Artificial Intelligence",
    link: "/interview/artificial-intelligence",
    icon: FaRobot,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "CSS",
    link: "/interview/css",
    icon: FaCss3Alt,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Cyber Security",
    link: "/interview/cyber-security",
    icon: FaShieldAlt,
    color: "from-red-500 to-red-700",
  },
  {
    name: "Digital Marketing",
    link: "/interview/digital-marketing",
    icon: FaChartLine,
    color: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Ethical Hacking",
    link: "/interview/ethical-hacking",
    icon: FaLock,
    color: "from-rose-500 to-rose-700",
  },
  {
    name: "HTML",
    link: "/interview/html",
    icon: FaHtml5,
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Java",
    link: "/interview/java",
    icon: FaJava,
    color: "from-red-600 to-red-800",
  },
  {
    name: "JavaScript",
    link: "/interview/javascript",
    icon: FaJs,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Kali Linux",
    link: "/interview/kali-linux",
    icon: FaLinux,
    color: "from-slate-600 to-slate-800",
  },
  {
    name: "Machine Learning",
    link: "/interview/machine-learning",
    icon: FaMicrochip,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "MERN Stack",
    link: "/interview/mern-stack",
    icon: FaStackOverflow,
    color: "from-teal-500 to-teal-700",
  },
  {
    name: "Power BI",
    link: "/interview/power-bi",
    icon: FaChartBar,
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Python",
    link: "/interview/python",
    icon: FaPython,
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "React JS",
    link: "/interview/react-js",
    icon: FaReact,
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "SQL",
    link: "/interview/sql",
    icon: FaDatabase,
    color: "from-sky-500 to-sky-700",
  },
];

export default function InterviewSubjects() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Interview Questions by Subject
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Explore 15+ technical interview subjects including AI, Python,
            React, JavaScript, MERN Stack, Cyber Security, SQL and more.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <Link href={subject.link} key={index}>
                <div className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border border-gray-100 hover:-translate-y-1 cursor-pointer">

                  <div
                    className={`bg-gradient-to-r ${subject.color} h-20 flex items-center justify-center`}
                  >
                    <Icon className="text-white text-3xl" />
                  </div>

                  <div className="p-5 text-center">
                    <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition">
                      {subject.name}
                    </h3>

                    <span className="mt-3 inline-block text-sm text-blue-600 font-medium">
                      Explore Questions →
                    </span>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}