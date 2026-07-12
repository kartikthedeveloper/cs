import { useState } from "react";
import Layout from "@/components/layouts/RoadmapLayout";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaServer,
    FaChartLine,
    FaCode,
    FaPython,
    FaJava,
    FaDatabase,
    FaStackOverflow,
    FaMicrochip,
    FaShieldAlt,
    FaSearch,
    FaArrowRight,
} from "react-icons/fa";

const RoadmapHome = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // ===== ROADMAP SUBJECTS (only 10 core paths) =====
    const subjects = [
        {
            id: 1,
            name: "Backend Development",
            icon: FaServer,
            color: "from-green-500 to-emerald-600",
            bg: "bg-green-50",
            text: "text-green-700",
            border: "border-green-200",
            desc: "Learn server-side programming, APIs, databases, authentication, and deployment with Node.js, Python, or Java.",
            link: "/roadmap/backend",
        },
        {
            id: 2,
            name: "Cyber Security",
            icon: FaShieldAlt,
            color: "from-red-500 to-red-700",
            bg: "bg-red-50",
            text: "text-red-700",
            border: "border-red-200",
            desc: "Network security, cryptography, risk assessment & compliance.",
            link: "/roadmap/cyber-security",
        },
        {
            id: 3,
            name: "Digital Marketing",
            icon: FaChartLine,
            color: "from-amber-500 to-yellow-600",
            bg: "bg-amber-50",
            text: "text-amber-700",
            border: "border-amber-200",
            desc: "SEO, SEM, content marketing, social media strategy, analytics, and conversion optimization.",
            link: "/roadmap/digital-marketing",
        },
        {
            id: 4,
            name: "Frontend Development",
            icon: FaCode,
            color: "from-pink-500 to-rose-600",
            bg: "bg-pink-50",
            text: "text-pink-700",
            border: "border-pink-200",
            desc: "Master HTML, CSS, JavaScript, React, and modern UI/UX principles for building responsive web interfaces.",
            link: "/roadmap/frontend",
        },
        {
            id: 5,
            name: "MERN Stack",
            icon: FaStackOverflow,
            color: "from-teal-500 to-teal-700",
            bg: "bg-teal-50",
            text: "text-teal-700",
            border: "border-teal-200",
            desc: "MongoDB, Express, React, Node.js — full‑stack JavaScript.",
            link: "/roadmap/fullstack",
        },
        {
            id: 6,
            name: "React",
            icon: FaReact,
            color: "from-cyan-500 to-cyan-700",
            bg: "bg-cyan-50",
            text: "text-cyan-700",
            border: "border-cyan-200",
            desc: "Components, hooks, state management, routing & performance.",
            link: "/roadmap/react",
        },



    ];

    // ===== STATS =====
    const stats = [
        { value: "5+", label: "Learning Paths" },
        { value: "150+", label: "Modules & Lessons" },
        { value: "800+", label: "Practice Problems" },
        { value: "24/7", label: "Updated Content" },
    ];

    // ===== ROADMAP TIPS =====
    const tips = [
        { icon: "🎯", title: "Set Clear Goals", desc: "Define what you want to achieve with each learning path." },
        { icon: "📅", title: "Consistent Schedule", desc: "Dedicate fixed time daily for hands-on practice." },
        { icon: "🛠️", title: "Build Projects", desc: "Apply your skills by building real-world projects." },
        { icon: "👥", title: "Join Communities", desc: "Engage with fellow learners and share knowledge." },
        { icon: "📚", title: "Learn by Doing", desc: "Follow the 80/20 rule: 20% theory, 80% practice." },
        { icon: "🔄", title: "Iterate & Improve", desc: "Review your progress and refine your learning path." },
    ];

    // ===== DIFFICULTY LEVELS =====
    const difficultyLevels = [
        { level: "Beginner", desc: "Start from scratch — no prior experience needed", qs: "40+ Modules", color: "from-green-400 to-green-600", bg: "bg-green-50", text: "text-green-700", link: "/roadmap/beginner" },
        { level: "Intermediate", desc: "Build on your foundation with advanced concepts", qs: "60+ Modules", color: "from-blue-400 to-blue-600", bg: "bg-blue-50", text: "text-blue-700", link: "/roadmap/intermediate" },
        { level: "Advanced", desc: "Master complex systems and architecture", qs: "30+ Modules", color: "from-purple-400 to-purple-600", bg: "bg-purple-50", text: "text-purple-700", link: "/roadmap/advanced" },
        { level: "Expert", desc: "Leadership, design & system thinking", qs: "20+ Modules", color: "from-red-400 to-red-600", bg: "bg-red-50", text: "text-red-700", link: "/roadmap/expert" },
    ];

    // ===== FAQ =====
    const faqs = [
        { q: "How do I choose the right learning path?", a: "Start with your career goal. If you're into web development, begin with HTML → CSS → JavaScript → React. For data science, start with Python → Machine Learning." },
        { q: "Are the learning paths updated regularly?", a: "Yes, we refresh our roadmap content weekly with the latest industry trends and best practices." },
        { q: "Do I need to follow all paths in order?", a: "No, each path is self-contained. You can start with any path that matches your interest and skill level." },
        { q: "Is there any certification after completing a path?", a: "We provide completion certificates and skill badges for each learning path you finish." },
    ];

    // ===== FILTERED SUBJECTS for search =====
    const filteredSubjects = subjects.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <Head>
                <title>Developer Roadmap 2026 | Learn Coding & Tech Skills | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your tech career with 10+ structured learning paths — from Web Development and Data Science to Cyber Security. Updated weekly."
                />
                <meta
                    name="keywords"
                    content="developer roadmap, coding roadmap, learning path, web development roadmap, data science roadmap, cyber security roadmap, python roadmap, react roadmap, java roadmap, sql roadmap, mern stack roadmap, machine learning roadmap, html roadmap, css roadmap, javascript roadmap"
                />
                <meta property="og:title" content="Developer Roadmap 2026 | Code Skipper" />
                <meta
                    property="og:description"
                    content="Choose your learning path and master in-demand tech skills with our structured roadmaps. 10+ paths, 150+ modules, and 800+ practice problems."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/roadmap" />
                <link rel="canonical" href="https://codeskipper.in/roadmap" />
                <meta name="robots" content="index, follow" />

                {/* Geo & Region Meta */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="20.5937;78.9629" />
                <meta name="ICBM" content="20.5937, 78.9629" />

                {/* Google AdSense / Ad Verification */}
                <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" />

                {/* Google Search Console Verification */}
                <meta name="google-site-verification" content="YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />

                {/* Schema.org structured data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": "Developer Roadmap 2026 | Code Skipper",
                            "description": "Structured learning paths for developers — Web Development, Data Science, Cyber Security, and more.",
                            "url": "https://codeskipper.in/roadmap",
                            "mainEntity": {
                                "@type": "ItemList",
                                "itemListElement": subjects.map((s, i) => ({
                                    "@type": "ListItem",
                                    "position": i + 1,
                                    "name": s.name,
                                    "description": s.desc,
                                    "url": `https://codeskipper.in${s.link}`,
                                })),
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "Code Skipper",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://codeskipper.in/Images/logo.png",
                                },
                            },
                        }),
                    }}
                />
            </Head>

            <section id="roadmap-wrapper">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* ===== HERO ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12 md:py-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Your <span className="text-blue-600">Tech Roadmap</span> to Success
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Choose from <strong>10+ structured learning paths</strong> — from Web Development and Data Science
                            to Cyber Security. Updated weekly with industry trends.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                                <input
                                    type="text"
                                    placeholder="Search learning paths (e.g. Python, React, SQL)..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none text-lg shadow-md transition"
                                />
                            </div>
                            {searchTerm && (
                                <div className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 max-h-72 overflow-y-auto z-20">
                                    {filteredSubjects.length > 0 ? (
                                        filteredSubjects.map((s) => (
                                            <Link key={s.id} href={s.link}>
                                                <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition border-b border-gray-50">
                                                    <s.icon className="text-blue-600 text-lg" />
                                                    <span className="font-medium text-gray-800">{s.name}</span>
                                                    <FaArrowRight className="ml-auto text-gray-400 text-sm" />
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="px-4 py-4 text-gray-500 text-center">No learning paths found</div>
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

                    {/* ===== SUBJECTS GRID (no categories) ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Explore Our <span className="text-blue-600">Learning Paths</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {subjects.map((subject, idx) => {
                                const Icon = subject.icon;
                                return (
                                    <Link href={subject.link} key={subject.id}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 * idx }}
                                            whileHover={{ y: -6, scale: 1.02 }}
                                            className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white border border-gray-100 cursor-pointer"
                                        >
                                            <div className={`bg-gradient-to-r ${subject.color} px-5 py-4 flex items-center justify-between`}>
                                                <Icon className="text-white text-2xl" />
                                                <span className="text-white/80 text-xs bg-white/20 px-3 py-1 rounded-full font-medium">
                                                    Learning Path
                                                </span>
                                            </div>
                                            <div className="p-5">
                                                <h4 className="text-lg font-bold text-gray-900 mb-1">{subject.name}</h4>
                                                <p className="text-sm text-gray-600 mb-3">{subject.desc}</p>
                                                <span className={`text-xs font-semibold ${subject.text} flex items-center gap-1 group-hover:underline`}>
                                                    Start learning <FaArrowRight className="text-xs" />
                                                </span>
                                            </div>
                                        </motion.div>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.section>

                    {/* ===== ROADMAP TIPS ===== */}
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.0 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💎 Pro Learning Tips</h2>
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
                                Ready to Start Your Learning Journey?
                            </h2>
                            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                                Join thousands of developers who are mastering in-demand skills with our structured roadmaps.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition shadow-lg">
                                        Practice Interviews
                                    </button>
                                </Link>
                                <Link href="/mcq">
                                    <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transform hover:scale-105 transition">
                                        Take MCQ's
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
                #roadmap-wrapper {
                    background: linear-gradient(135deg, #f0f7ff 0%, #e8ecf8 100%);
                    min-height: 100vh;
                }
            `}</style>
        </Layout>
    );
};

export default RoadmapHome;