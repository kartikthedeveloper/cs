import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion } from "framer-motion";
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
    FaSearch,
    FaArrowRight,
    FaBookOpen,
    FaLightbulb,
    FaUsers,
    FaCode,
    FaCheckCircle
} from 'react-icons/fa';

const InterviewHome = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // ===== CORE SUBJECTS (only these 15) =====
    const subjects = [
        { id: 1, name: "Artificial Intelligence", icon: FaRobot, color: "from-indigo-500 to-indigo-700", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200", desc: "Machine learning, neural networks, NLP & computer vision fundamentals.", link: "/interview/artificial-intelligence" },
        { id: 2, name: "CSS", icon: FaCss3Alt, color: "from-blue-400 to-blue-600", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", desc: "Flexbox, Grid, animations, responsive design & preprocessors.", link: "/interview/css" },
        { id: 3, name: "Cyber Security", icon: FaShieldAlt, color: "from-red-500 to-red-700", bg: "bg-red-50", text: "text-red-700", border: "border-red-200", desc: "Network security, cryptography, risk assessment & compliance.", link: "/interview/cyber-security" },
        { id: 4, name: "Digital Marketing", icon: FaChartLine, color: "from-emerald-500 to-emerald-700", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", desc: "SEO, SEM, content marketing, analytics & social media strategy.", link: "/interview/digital-marketing" },
        { id: 5, name: "Ethical Hacking", icon: FaLock, color: "from-rose-500 to-rose-700", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", desc: "Penetration testing, vulnerability assessment & security tools.", link: "/interview/ethical-hacking" },
        { id: 6, name: "HTML", icon: FaHtml5, color: "from-orange-500 to-orange-700", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200", desc: "Semantic markup, accessibility, forms & modern HTML5 APIs.", link: "/interview/html" },
        { id: 7, name: "Java", icon: FaJava, color: "from-red-600 to-red-800", bg: "bg-red-50", text: "text-red-700", border: "border-red-200", desc: "OOP, collections, multithreading, JVM & Spring framework.", link: "/interview/java" },
        { id: 8, name: "JavaScript", icon: FaJs, color: "from-yellow-400 to-yellow-600", bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200", desc: "ES6+, closures, promises, async/await & DOM manipulation.", link: "/interview/javascript" },
        { id: 9, name: "Kali Linux", icon: FaLinux, color: "from-slate-600 to-slate-800", bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200", desc: "Penetration testing tools, reconnaissance & ethical hacking on Kali.", link: "/interview/kali-linux" },
        { id: 10, name: "Machine Learning", icon: FaMicrochip, color: "from-purple-500 to-purple-700", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", desc: "Supervised/unsupervised learning, regression, classification & clustering.", link: "/interview/machine-learning" },
        { id: 11, name: "MERN Stack", icon: FaStackOverflow, color: "from-teal-500 to-teal-700", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200", desc: "MongoDB, Express, React, Node.js — full‑stack JavaScript.", link: "/interview/mern-stack" },
        { id: 12, name: "Power BI", icon: FaChartBar, color: "from-amber-500 to-amber-700", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", desc: "Data visualization, DAX, Power Query & business intelligence.", link: "/interview/power-bi" },
        { id: 13, name: "Python", icon: FaPython, color: "from-blue-500 to-blue-700", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", desc: "Data structures, OOP, libraries (NumPy, Pandas) & automation.", link: "/interview/python" },
        { id: 14, name: "React", icon: FaReact, color: "from-cyan-500 to-cyan-700", bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200", desc: "Components, hooks, state management, routing & performance.", link: "/interview/react-js" },
        { id: 15, name: "SQL", icon: FaDatabase, color: "from-sky-500 to-sky-700", bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", desc: "Queries, joins, subqueries, indexing, normalization & transactions.", link: "/interview/sql" }
    ];

    // Group subjects into logical categories for display
    const categories = [
        {
            title: "💻 Programming Languages",
            subjects: subjects.filter(s => ["Python", "Java", "JavaScript", "SQL", "HTML", "CSS"].includes(s.name))
        },
        {
            title: "⚛️ Frameworks & Stacks",
            subjects: subjects.filter(s => ["React", "MERN Stack"].includes(s.name))
        },
        {
            title: "🤖 AI & Data Science",
            subjects: subjects.filter(s => ["Artificial Intelligence", "Machine Learning", "Power BI"].includes(s.name))
        },
        {
            title: "🔐 Security & Hacking",
            subjects: subjects.filter(s => ["Cyber Security", "Ethical Hacking", "Kali Linux"].includes(s.name))
        },
        {
            title: "📈 Marketing",
            subjects: subjects.filter(s => ["Digital Marketing"].includes(s.name))
        }
    ].filter(cat => cat.subjects.length > 0);

    // ===== STATS =====
    const stats = [
        { value: "750+", label: "Interview Questions" },
        { value: "15", label: "Core Subjects" },
        { value: "100+", label: "Company Patterns" },
        { value: "24/7", label: "Updated Content" }
    ];

    // ===== INTERVIEW TIPS =====
    const tips = [
        { icon: "💡", title: "Master the Basics", desc: "Strong fundamentals are the foundation of every great interview." },
        { icon: "👨‍💻", title: "Practice Coding", desc: "Regularly solve problems on data structures and algorithms." },
        { icon: "🏗️", title: "System Design", desc: "Learn to design scalable, fault‑tolerant systems." },
        { icon: "👥", title: "Behavioral Prep", desc: "Prepare STAR stories for situational questions." },
        { icon: "🎯", title: "Mock Interviews", desc: "Simulate real interview pressure with peers." },
        { icon: "📚", title: "Stay Current", desc: "Keep up with the latest tech trends and tools." }
    ];

    // ===== DIFFICULTY LEVELS =====
    const difficultyLevels = [
        { level: "Beginner", desc: "Core concepts & fundamentals", qs: "500+ Qs", color: "from-green-400 to-green-600", bg: "bg-green-50", text: "text-green-700", link: "/interview/beginner" },
        { level: "Intermediate", desc: "Practical problem‑solving", qs: "800+ Qs", color: "from-blue-400 to-blue-600", bg: "bg-blue-50", text: "text-blue-700", link: "/interview/intermediate" },
        { level: "Advanced", desc: "Complex algorithms & design", qs: "300+ Qs", color: "from-purple-400 to-purple-600", bg: "bg-purple-50", text: "text-purple-700", link: "/interview/advanced" },
        { level: "Expert", desc: "Architecture & leadership", qs: "200+ Qs", color: "from-red-400 to-red-600", bg: "bg-red-50", text: "text-red-700", link: "/interview/expert" }
    ];

    // ===== FAQ =====
    const faqs = [
        { q: "How often are questions updated?", a: "We refresh our question bank weekly with real patterns from recent interviews at top tech companies." },
        { q: "Are solutions provided for coding problems?", a: "Yes, every coding question includes multiple optimized solutions with detailed explanations." },
        { q: "Do you cover company‑specific questions?", a: "We have dedicated sections for FAANG and other leading tech firms with their specific interview patterns." },
        { q: "Is the content mobile‑friendly?", a: "Our site is fully responsive and works perfectly on all devices. Native apps are coming soon!" }
    ];

    return (
        <Layout>
            <Head>
                <title>Computer Science Interview Questions 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your technical interview with questions on 15 core subjects: AI, Python, React, SQL, Cyber Security, MERN Stack, and more. Updated weekly."
                />
                <meta
                    name="keywords"
                    content="technical interview questions, coding interview, programming interview, software engineer interview, FAANG interview, AI interview, Python interview, React interview, SQL interview, cyber security interview"
                />
                <meta property="og:title" content="Technical Interview Questions 2026 | Code Skipper" />
                <meta
                    property="og:description"
                    content="Prepare for your dream tech job with handpicked interview questions across 15 core subjects. Practice, learn, and succeed."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/interview" />
                <link rel="canonical" href="https://codeskipper.in/interview" />
                <meta name="robots" content="index, follow" />
            </Head>

            <section id="interview-wrapper">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* ===== HERO ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12 md:py-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Ace Your <span className="text-blue-600">Technical Interview</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Master interview questions across <strong>15 core subjects</strong> — from AI and Python to React and Cyber Security. Updated weekly with real-world patterns.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="text"
                                    placeholder="Search subjects (e.g. Python, React, SQL)..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-lg shadow-md transition"
                                />
                            </div>
                            {searchTerm && (
                                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-72 overflow-y-auto z-20">
                                    {subjects
                                        .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                        .map(s => (
                                            <Link key={s.id} href={s.link}>
                                                <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition border-b border-gray-50">
                                                    <s.icon className="text-blue-600 text-lg" />
                                                    <span className="font-medium text-gray-800">{s.name}</span>
                                                    <FaArrowRight className="ml-auto text-gray-400 text-sm" />
                                                </div>
                                            </Link>
                                        ))}
                                    {subjects.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                                        <div className="px-4 py-4 text-gray-500 text-center">No subjects found</div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* ===== STATS ===== */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-gray-100">
                                <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* ===== SUBJECTS by CATEGORY ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Explore by <span className="text-blue-600">Subject</span>
                        </h2>

                        {categories.map((category, catIdx) => (
                            <div key={catIdx} className="mb-12">
                                <h3 className="text-xl font-semibold text-gray-800 mb-5 flex items-center gap-2">
                                    <span className="text-2xl">{category.title.split(' ')[0]}</span>
                                    <span>{category.title.replace(/^[^\s]+\s/, '')}</span>
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {category.subjects.map((subject, idx) => {
                                        const Icon = subject.icon;
                                        return (
                                            <Link href={subject.link} key={subject.id}>
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.05 * (catIdx + idx) }}
                                                    whileHover={{ y: -6, scale: 1.02 }}
                                                    className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border border-gray-100 cursor-pointer"
                                                >
                                                    <div className={`bg-gradient-to-r ${subject.color} px-5 py-4 flex items-center justify-between`}>
                                                        <Icon className="text-white text-2xl" />
                                                        <span className="text-white/80 text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                                                            Interview Qs
                                                        </span>
                                                    </div>
                                                    <div className="p-5">
                                                        <h4 className="text-lg font-bold text-gray-900 mb-1">{subject.name}</h4>
                                                        <p className="text-sm text-gray-600 mb-3">{subject.desc}</p>
                                                        <span className={`text-xs font-semibold ${subject.text} flex items-center gap-1 group-hover:underline`}>
                                                            Explore questions <FaArrowRight className="text-xs" />
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </motion.section>
                    {/* ===== INTERVIEW TIPS ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💎 Pro Interview Tips</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {tips.map((tip, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.06 * idx }}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-500 transition"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{tip.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{tip.title}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{tip.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ===== CTA ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center py-12"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 md:p-14 text-white">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                                Ready to Land Your Dream Job?
                            </h2>
                            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                                Join thousands of developers who aced their interviews with our curated question bank and expert insights.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/roadmap">
                                    <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition shadow-lg">
                                      Roadmap
                                    </button>
                                </Link>
                                <Link href="/mcq">
                                    <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transform hover:scale-105 transition">
                                        MCQ's
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.section>

                    {/* ===== FAQ ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">❓ Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-gray-600 text-sm">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

             

                </div>
            </section>

            <style jsx>{`
                #interview-wrapper {
                    background: linear-gradient(135deg, #f0f4ff 0%, #e8ecf8 100%);
                    min-height: 100vh;
                }
            `}</style>
        </Layout>
    );
};

export default InterviewHome;