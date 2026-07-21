// pages/roadmaps/android-developer.js
import { motion } from 'framer-motion';
import {
    FaMobile,
    FaCode,
    FaDatabase,
    FaCloud,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaGitAlt,
    FaShieldAlt,
    FaCogs,
    FaArrowRight,
    FaCertificate,
    FaGlobe,
    FaBrain,
    FaServer,
    FaAndroid,
    FaFire,
    FaNetworkWired
} from 'react-icons/fa';
import {
    SiKotlin,
    SiAndroid,
    SiFirebase,
    SiGradle,
    SiGooglecloud,
    SiDocker,
    SiJunit5,
    SiMongodb,
    SiMysql
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import Link from "next/link";

import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function AndroidDeveloperRoadmap() {
    const [activePhase, setActivePhase] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const slideInLeft = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const slideInRight = {
        hidden: { x: 50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Head>
                <title>Android Developer Roadmap 2026 | Complete Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master Android development in 2026 with our complete roadmap. Learn Kotlin, Jetpack Compose, Room, Retrofit, Firebase, and build production-ready apps."
                />
                <meta
                    name="keywords"
                    content="Android developer roadmap 2026, Kotlin, Jetpack Compose, Android Studio, Room, Retrofit, Firebase, mobile app development"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/android-developer" />
                <meta property="og:title" content="Android Developer Roadmap 2026 | Complete Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming an Android developer in 2026. Master Kotlin, Jetpack Compose, databases, APIs, and cloud." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/android-developer" />
                <meta property="og:image" content="https://codeskipper.in/og-android-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Android Developer Roadmap 2026" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming an Android developer in 2026." />
                <meta name="author" content="CodeSkipper" />
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="20.5937;78.9629" />
                <meta name="ICBM" content="20.5937, 78.9629" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HowTo",
                            "name": "Android Developer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming an Android developer in 2026",
                            "totalTime": "P10M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "INR",
                                "value": "0"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Laptop with 8GB+ RAM"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Android Studio"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "Android Studio" },
                                { "@type": "HowToTool", "name": "Kotlin" },
                                { "@type": "HowToTool", "name": "Git" },
                                { "@type": "HowToTool", "name": "Firebase" }
                            ],
                            "step": roadmapPhases.map((phase, index) => ({
                                "@type": "HowToStep",
                                "position": index + 1,
                                "name": phase.title,
                                "text": phase.description,
                                "estimatedTime": {
                                    "@type": "Duration",
                                    "text": phase.duration
                                }
                            }))
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://codeskipper.in/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Roadmaps",
                                    "item": "https://codeskipper.in/roadmap"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Android Developer Roadmap",
                                    "item": "https://codeskipper.in/roadmap/android-developer"
                                }
                            ]
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "Android Developer Roadmap 2026 - Complete Guide",
                            "description": "Master Android development in 2026 with our complete roadmap. Learn Kotlin, Jetpack Compose, Room, Retrofit, Firebase, and build production-ready apps.",
                            "author": {
                                "@type": "Organization",
                                "name": "CodeSkipper"
                            },
                            "datePublished": "2026-01-15",
                            "dateModified": "2026-07-20",
                            "publisher": {
                                "@type": "Organization",
                                "name": "CodeSkipper",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://codeskipper.in/logo.png"
                                }
                            }
                        })
                    }}
                />
            </Head>

            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-teal-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl"></div>

                        <div className="max-w-7xl mx-auto relative">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-block mb-6"
                                >
                                    <span className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    Android Developer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of building <strong className="text-green-600">modern Android apps</strong> with Kotlin and Jetpack Compose.
                                    From fundamentals to AI-powered apps — a systematic 10‑month journey to become an Android expert.
                                </p>

                                {/* Android Domain Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {androidDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl text-green-500 mb-2">
                                                {domain.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-700">{domain.name}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
                                >
                                    {quickStats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-green-100/50"
                                        >
                                            <div className="text-3xl text-green-600 mb-2">{stat.icon}</div>
                                            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                                            <div className="text-gray-600 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* AI Era Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-3 rounded-full shadow-md"
                                >
                                    <FaBrain className="text-purple-700 text-xl" />
                                    <span className="text-gray-800 font-medium">
                                        🧠 AI‑assisted Android • ML Kit • Smart code completion • On‑device AI
                                    </span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== ROADMAP NAVIGATION ===== */}
                    <section className="py-6 px-4 bg-white/90 backdrop-blur-sm sticky top-0 z-40 shadow-md border-b border-gray-200/50">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex overflow-x-auto space-x-2 py-2 hide-scrollbar">
                                {roadmapPhases.map((phase, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setActivePhase(index)}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold transition-all text-sm flex items-center gap-2 ${
                                            activePhase === index
                                                ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                            activePhase === index ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-600'
                                        }`}>
                                            {index + 1}
                                        </span>
                                        <span className="hidden sm:inline">{phase.title}</span>
                                        <span className="sm:hidden">{phase.shortTitle}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== ROADMAP CONTENT ===== */}
                    <section className="py-16 px-4">
                        <div className="max-w-7xl mx-auto">
                            {roadmapPhases.map((phase, phaseIndex) => (
                                <motion.div
                                    key={phaseIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: phaseIndex === activePhase ? 1 : 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`${phaseIndex === activePhase ? 'block' : 'hidden'}`}
                                >
                                    {/* Phase Header */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-center mb-16"
                                    >
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-green-600" />
                                                {phase.duration}
                                            </span>
                                            {phase.aiFocus && (
                                                <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                                    <FaBrain /> AI Focus
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>

                                    {/* Phase Content */}
                                    <div className="grid lg:grid-cols-2 gap-12">
                                        {/* Learning Topics */}
                                        <motion.div
                                            variants={slideInLeft}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaBook className="mr-3 text-green-600" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-green-500"
                                                    >
                                                        <FaCheckCircle className="text-green-500 mt-1 mr-4 flex-shrink-0 text-lg" />
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800 mb-1">{topic.title}</h4>
                                                            <p className="text-gray-600 text-sm">{topic.description}</p>
                                                            {topic.subTopics && (
                                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                                    {topic.subTopics.map((sub, subIndex) => (
                                                                        <span
                                                                            key={subIndex}
                                                                            className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium"
                                                                        >
                                                                            {sub}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            {topic.aiTool && (
                                                                <div className="mt-2 flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full inline-flex">
                                                                    <FaBrain className="text-purple-500" />
                                                                    <span>AI Tool: {topic.aiTool}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>

                                        {/* Projects & Resources */}
                                        <motion.div
                                            variants={slideInRight}
                                            initial="hidden"
                                            animate="visible"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaProjectDiagram className="mr-3 text-teal-600" />
                                                Hands-on Projects
                                            </h3>
                                            <div className="space-y-4 mb-8">
                                                {phase.projects.map((project, projectIndex) => (
                                                    <motion.div
                                                        key={projectIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02 }}
                                                        className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="bg-teal-100 text-teal-600 p-3 rounded-xl mr-4 text-2xl">
                                                                {project.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-800 mb-1">{project.title}</h4>
                                                                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {project.technologies.map((tech, techIndex) => (
                                                                        <span
                                                                            key={techIndex}
                                                                            className="bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full text-xs font-medium"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                {project.aiIntegration && (
                                                                    <div className="mt-2 text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full inline-flex items-center gap-1">
                                                                        <FaBrain className="text-purple-500" />
                                                                        {project.aiIntegration}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                    
                                        </motion.div>
                                    </div>

                                    {/* Phase Completion Checklist */}
                                    {phase.checklist && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="mt-12 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-green-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center p-2 bg-white/60 rounded-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                                                        />
                                                        <label className="ml-3 text-gray-700 text-sm">{item}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== ANDROID ECOSYSTEM SPECIALIZATIONS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Android Specializations</h2>
                                <p className="text-xl text-gray-600">Core domains in the Android ecosystem</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {androidSpecializations.map((spec, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-green-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-green-100"
                                    >
                                        <div className="text-5xl mb-4 text-green-600">
                                            {spec.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{spec.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                                        <div className="space-y-2 text-left">
                                            {spec.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== TOOLS & ECOSYSTEM ===== */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Android Developer Tech Stack 2026</h2>
                                <p className="text-xl text-gray-600">Essential tools, frameworks, and platforms</p>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all"
                                    >
                                        <div className="text-5xl mb-3 text-green-600">
                                            {tech.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 text-sm">{tech.name}</h3>
                                        <p className="text-gray-500 text-xs">{tech.category}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== CAREER PATH ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Android Career Paths</h2>
                                <p className="text-xl text-gray-600">High-demand roles and growth opportunities in 2026</p>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {careerPaths.map((path, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.04, y: -6 }}
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-500"
                                    >
                                        <div className="text-5xl mb-4 text-green-600">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-green-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== CERTIFICATIONS ===== */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top Android Certifications 2026</h2>
                                <p className="text-xl text-gray-600">Validate your skills with industry-recognized certifications</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200 shadow-xl"
                            >
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                            <FaCertificate className="text-green-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                                <p className="text-green-600 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== FINAL CTA ===== */}
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

                </div>

                <style jsx>{`
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </RoadmapLayout>
        </>
    );
}

// ====================================================================
// DATA (All icons verified to exist in react-icons 5.7.0)
// ====================================================================

const androidDomains = [
    { name: "Kotlin", icon: <SiKotlin /> },
    { name: "Android Studio", icon: <SiAndroid /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Jetpack Compose", icon: <FaMobile /> }
];

const quickStats = [
    { icon: <FaClock />, value: "10 Months", label: "To Complete" },
    { icon: <FaCode />, value: "45+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "10+", label: "Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    {
        title: "Kotlin & Programming Fundamentals",
        shortTitle: "Kotlin Basics",
        description: "Master Kotlin as the primary language for Android development",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Kotlin Basics",
                description: "Variables, data types, control flow, functions",
                subTopics: ["val/var", "Data Types", "If/When", "Loops", "Functions", "Null Safety"],
                aiTool: "IntelliJ AI code completion"
            },
            {
                title: "Object-Oriented Kotlin",
                description: "Classes, inheritance, interfaces, data classes",
                subTopics: ["Classes", "Inheritance", "Interfaces", "Data Classes", "Sealed Classes"]
            },
            {
                title: "Functional Programming",
                description: "Lambdas, higher-order functions, collection operations",
                subTopics: ["Lambdas", "Higher-Order Functions", "map/filter/reduce", "Scope Functions"]
            },
            {
                title: "Coroutines & Flow",
                description: "Asynchronous programming with coroutines",
                subTopics: ["Coroutines", "Suspend Functions", "Flows", "Channels"]
            }
        ],
        projects: [
            {
                icon: "📱",
                title: "Command-Line App",
                description: "Build a CLI app with Kotlin for practice",
                technologies: ["Kotlin", "CLI", "Functions", "Collections"]
            },
            {
                icon: "📋",
                title: "Todo Manager",
                description: "Console-based todo app with file persistence",
                technologies: ["Kotlin", "File I/O", "OOP", "Coroutines"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Kotlin Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "Kotlin Course", type: "Video Series" },
            { icon: <FaBook />, title: "Kotlin Coroutines Guide", type: "E-book" }
        ],
        checklist: [
            "Write Kotlin programs confidently",
            "Use OOP principles in Kotlin",
            "Apply functional programming features",
            "Handle async tasks with coroutines",
            "Work with collections and scope functions"
        ]
    },
    {
        title: "Android UI & Jetpack Compose",
        shortTitle: "Compose UI",
        description: "Build modern UIs with Jetpack Compose and Material Design",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Android Fundamentals",
                description: "Activities, Fragments, Intents, and lifecycle",
                subTopics: ["Activity", "Fragment", "Intents", "Lifecycle", "Manifest"]
            },
            {
                title: "Jetpack Compose",
                description: "Declarative UI with Compose",
                subTopics: ["Composable Functions", "State", "Recomposition", "Modifiers"]
            },
            {
                title: "Layouts & Theming",
                description: "Row, Column, Box, and Material Theming",
                subTopics: ["Layouts", "LazyColumn", "Material Design", "Dark Theme"]
            },
            {
                title: "Navigation & UI State",
                description: "Compose Navigation and state management",
                subTopics: ["Navigation", "ViewModel", "SavedState", "UI State"]
            }
        ],
        projects: [
            {
                icon: "🏠",
                title: "Weather App UI",
                description: "Build a weather app UI with Compose",
                technologies: ["Jetpack Compose", "Material Design", "State"]
            },
            {
                icon: "📰",
                title: "News Reader App",
                description: "Create a news reader with Compose and navigation",
                technologies: ["Compose", "Navigation", "ViewModel", "Retrofit"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Jetpack Compose Docs", type: "Documentation" },
            { icon: <FaVideo />, title: "Compose Course", type: "Video" },
            { icon: <FaBook />, title: "Material Design Guide", type: "E-book" }
        ],
        checklist: [
            "Build Compose UI screens",
            "Manage state with Compose",
            "Implement navigation",
            "Use Material Design components",
            "Handle configuration changes"
        ]
    },
    {
        title: "Android Architecture & Jetpack",
        shortTitle: "Architecture",
        description: "Master MVVM, Room, Hilt, and other Jetpack libraries",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Architecture Patterns",
                description: "MVVM, MVI, Clean Architecture",
                subTopics: ["MVVM", "MVI", "Clean Architecture", "Repository Pattern"]
            },
            {
                title: "Room Database",
                description: "Local persistence with Room",
                subTopics: ["Entities", "DAO", "Room Database", "Type Converters"]
            },
            {
                title: "Dependency Injection (Hilt)",
                description: "Manage dependencies with Dagger Hilt",
                subTopics: ["Hilt", "Modules", "Injections", "Scopes"]
            },
            {
                title: "WorkManager & Services",
                description: "Background tasks and services",
                subTopics: ["WorkManager", "Services", "Foreground Services"]
            }
        ],
        projects: [
            {
                icon: "📝",
                title: "Notes App",
                description: "Full-featured notes app with Room and MVVM",
                technologies: ["Room", "MVVM", "Coroutines", "Compose"]
            },
            {
                icon: "🏋️",
                title: "Fitness Tracker",
                description: "Track workouts with Room and WorkManager",
                technologies: ["Room", "WorkManager", "Compose", "Charts"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Room Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "Dagger Hilt Course", type: "Video" },
            { icon: <FaBook />, title: "Clean Architecture Android", type: "E-book" }
        ],
        checklist: [
            "Implement MVVM architecture",
            "Use Room for local storage",
            "Set up Dagger Hilt",
            "Handle background tasks with WorkManager",
            "Build a clean architecture app"
        ]
    },
    {
        title: "Networking, Databases & Offline",
        shortTitle: "Networking",
        description: "Connect to APIs, cache data, and handle offline scenarios",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Networking with Retrofit",
                description: "Make API calls with Retrofit and OkHttp",
                subTopics: ["Retrofit", "Interceptors", "JSON Serialization", "Error Handling"]
            },
            {
                title: "Data Caching",
                description: "Cache responses and handle offline mode",
                subTopics: ["Response Caching", "Offline Cache", "Paging", "Data Sources"]
            },
            {
                title: "DataStore & Preferences",
                description: "Store key-value data and user preferences",
                subTopics: ["Preferences DataStore", "Proto DataStore", "SharedPreferences"]
            },
            {
                title: "Paging Library",
                description: "Load and display large datasets efficiently",
                subTopics: ["Paging 3", "Remote Mediator", "Paging Source"]
            }
        ],
        projects: [
            {
                icon: "📰",
                title: "News Feed App",
                description: "App with API integration, offline cache, and paging",
                technologies: ["Retrofit", "Room", "Paging 3", "Offline First"]
            },
            {
                icon: "🛒",
                title: "Product Catalog",
                description: "E-commerce catalog with search and filters",
                technologies: ["Retrofit", "Paging 3", "DataStore", "Compose"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Retrofit Guide", type: "Documentation" },
            { icon: <FaVideo />, title: "Networking in Android", type: "Video" },
            { icon: <FaBook />, title: "Paging 3 Guide", type: "E-book" }
        ],
        checklist: [
            "Integrate Retrofit for API calls",
            "Handle network errors gracefully",
            "Implement offline-first caching",
            "Use DataStore for preferences",
            "Implement paging for large lists"
        ]
    },
    {
        title: "Advanced Android: Testing, Performance & Security",
        shortTitle: "Advanced",
        description: "Test your app, optimize performance, and secure your code",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Testing",
                description: "Unit tests, integration tests, and UI tests",
                subTopics: ["JUnit", "Mockito", "Espresso", "Test Rules", "Robolectric"],
                aiTool: "AI-powered test generation"
            },
            {
                title: "Performance Optimization",
                description: "Optimize app performance and memory usage",
                subTopics: ["Memory Leaks", "Profiling", "UI Jank", "APK Size Reduction"]
            },
            {
                title: "Security",
                description: "Implement app security best practices",
                subTopics: ["Data Encryption", "Certificate Pinning", "ProGuard", "Biometric Auth"]
            },
            {
                title: "App Distribution",
                description: "Publish apps to Google Play Store",
                subTopics: ["Play Console", "App Signing", "Beta Testing", "Release Management"]
            }
        ],
        projects: [
            {
                icon: "🔒",
                title: "Secure Notes App",
                description: "Encrypted notes with biometric authentication",
                technologies: ["Encryption", "Biometric", "Room", "Security"]
            },
            {
                icon: "🧪",
                title: "Test Suite for App",
                description: "Write comprehensive tests for a real app",
                technologies: ["JUnit", "Espresso", "Mockito", "Test Automation"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Android Testing Guide", type: "Documentation" },
            { icon: <FaVideo />, title: "Performance Optimization", type: "Video" },
            { icon: <FaBook />, title: "Android Security Guide", type: "E-book" }
        ],
        checklist: [
            "Write unit tests with JUnit",
            "Write UI tests with Espresso",
            "Profile and optimize app performance",
            "Implement security measures",
            "Publish app to Google Play Store"
        ]
    },
    {
        title: "AI Integration & Future Trends",
        shortTitle: "AI & Future",
        description: "Integrate AI/ML, explore cross-platform, and stay ahead",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "AI/ML on Android",
                description: "Integrate ML Kit and TensorFlow Lite",
                subTopics: ["ML Kit", "TensorFlow Lite", "On-device AI", "Custom Models"],
                aiTool: "ML Kit, TensorFlow Lite"
            },
            {
                title: "Firebase & Backend Integration",
                description: "Firebase services: Auth, Firestore, Cloud Messaging",
                subTopics: ["Firebase Auth", "Firestore", "Cloud Messaging", "Analytics"]
            },
            {
                title: "Cross-Platform (KMP)",
                description: "Kotlin Multiplatform for shared code",
                subTopics: ["KMP", "Shared Logic", "Platform-specific Code"]
            },
            {
                title: "Future Trends",
                description: "Compose Multiplatform, Wear OS, Android Auto",
                subTopics: ["Compose Multiplatform", "Wear OS", "Android Auto", "Modern Android"]
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "AI-Powered Photo App",
                description: "App with ML Kit for image recognition",
                technologies: ["ML Kit", "CameraX", "Compose", "Firebase"],
                aiIntegration: "On-device AI with ML Kit"
            },
            {
                icon: "📱",
                title: "Cross-Platform App with KMP",
                description: "Share logic between Android and iOS",
                technologies: ["KMP", "Kotlin", "Shared Code", "Compose"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "ML Kit Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "Kotlin Multiplatform Course", type: "Video" },
            { icon: <FaBook />, title: "Firebase for Android", type: "E-book" }
        ],
        checklist: [
            "Integrate ML Kit for on-device AI",
            "Use Firebase Auth and Firestore",
            "Share code with KMP",
            "Build a Compose Multiplatform app",
            "Explore Wear OS or Android Auto"
        ]
    }
];

const androidSpecializations = [
    {
        domain: "UI/UX Development",
        description: "Build beautiful, responsive UIs with Compose",
        icon: <FaMobile />,
        skills: ["Jetpack Compose", "Material Design", "Animations", "Custom Views", "Accessibility"]
    },
    {
        domain: "Architecture & Patterns",
        description: "Design scalable, maintainable apps",
        icon: <FaCogs />,
        skills: ["MVVM", "MVI", "Clean Architecture", "Repository", "Use Cases"]
    },
    {
        domain: "Data & Persistence",
        description: "Manage data with Room, DataStore, and APIs",
        icon: <FaDatabase />,
        skills: ["Room", "DataStore", "Retrofit", "Paging", "Offline First"]
    },
    {
        domain: "Performance Engineering",
        description: "Optimize apps for speed and efficiency",
        icon: <FaBolt />,
        skills: ["Memory Optimization", "UI Performance", "APK Size", "Profiling", "Benchmarking"]
    },
    {
        domain: "AI & ML Integration",
        description: "Add intelligence to Android apps",
        icon: <FaBrain />,
        skills: ["ML Kit", "TensorFlow Lite", "Custom Models", "On-device AI"]
    },
    {
        domain: "Cross-Platform (KMP)",
        description: "Share code across Android and iOS",
        icon: <FaGlobe />,
        skills: ["Kotlin Multiplatform", "Shared Logic", "Compose Multiplatform", "Platform APIs"]
    }
];

const careerPaths = [
    {
        icon: <FaMobile />,
        title: "Android Developer",
        description: "Build native Android apps with Kotlin and Compose",
        salary: "₹6-14 LPA",
        skills: ["Kotlin", "Jetpack Compose", "Room", "Retrofit", "Firebase"]
    },
    {
        icon: <FaCogs />,
        title: "Senior Android Engineer",
        description: "Architect and lead Android projects",
        salary: "₹12-25 LPA",
        skills: ["Clean Architecture", "Dagger/Hilt", "CI/CD", "Performance", "Team Leadership"]
    },
    {
        icon: <FaBrain />,
        title: "AI Android Developer",
        description: "Build AI-powered Android applications",
        salary: "₹15-30 LPA",
        skills: ["ML Kit", "TensorFlow Lite", "Kotlin", "Python", "On-device AI"]
    },
    {
        icon: <FaServer />,
        title: "Mobile Tech Lead",
        description: "Lead mobile teams and drive technical strategy",
        salary: "₹18-35 LPA",
        skills: ["Leadership", "Architecture", "KMP", "DevOps", "Agile"]
    }
];

const techStack = [
    { name: "Kotlin", category: "Language", icon: <SiKotlin /> },
    { name: "Android Studio", category: "IDE", icon: <SiAndroid /> },
    { name: "Compose", category: "UI Framework", icon: <FaMobile /> },
    { name: "Room", category: "Database", icon: <FaDatabase /> },
    { name: "Retrofit", category: "Networking", icon: <FaNetworkWired /> },
    { name: "Firebase", category: "Backend", icon: <SiFirebase /> },
    { name: "Gradle", category: "Build Tool", icon: <SiGradle /> },
    { name: "Git", category: "Version Control", icon: <FaGitAlt /> },
    { name: "JUnit", category: "Testing", icon: <SiJunit5 /> },
    { name: "ML Kit", category: "AI/ML", icon: <FaBrain /> },
    { name: "GCP/AWS", category: "Cloud", icon: <SiGooglecloud /> },
    { name: "Docker", category: "Container", icon: <SiDocker /> }
];

const certifications = [
    { name: "Google Associate Android Developer", level: "Intermediate", focus: "Android Fundamentals" },
    { name: "Google Professional Android Developer", level: "Advanced", focus: "Advanced Android" },
    { name: "Kotlin Certification (JetBrains)", level: "Intermediate", focus: "Kotlin" },
    { name: "Firebase Developer Certification", level: "Intermediate", focus: "Firebase" },
    { name: "AWS Mobile Developer - Associate", level: "Intermediate", focus: "Cloud Mobile" }
];