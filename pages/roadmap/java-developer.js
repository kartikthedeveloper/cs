// pages/roadmaps/java-developer.js
import { motion } from 'framer-motion';
import Link from "next/link";

import {
    FaCode,
    FaCoffee,
    FaServer,
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
    FaDocker,
    FaShieldAlt,
    FaCogs,
    FaNetworkWired,
    FaArrowRight,
    FaCertificate,
    FaGlobe,
    FaBrain,
    FaMicrochip,
    FaJava,
    FaAws
} from 'react-icons/fa';
import {
    SiSpring,
    SiApachekafka,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiApache,
    SiGradle,
    SiJunit5,
    SiJenkins,
    SiGithubactions
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function JavaDeveloperRoadmap() {
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
                <title>Java Developer Roadmap 2026 | Complete Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master Java development in 2026 with our complete roadmap. Learn core Java, Spring Boot, microservices, databases, and cloud deployment."
                />
                <meta
                    name="keywords"
                    content="Java developer roadmap 2026, Spring Boot, microservices, Java 21, Hibernate, Maven, Gradle, JUnit, AWS Java"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/java-developer" />
                <meta property="og:title" content="Java Developer Roadmap 2026 | Complete Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a Java developer in 2026. Master core Java, Spring Boot, microservices, and cloud deployment." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/java-developer" />
                <meta property="og:image" content="https://codeskipper.in/og-java-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Java Developer Roadmap 2026" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a Java developer in 2026." />
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
                            "name": "Java Developer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a Java developer in 2026",
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
                                    "name": "Stable internet connection"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "IntelliJ IDEA" },
                                { "@type": "HowToTool", "name": "Eclipse" },
                                { "@type": "HowToTool", "name": "Maven" },
                                { "@type": "HowToTool", "name": "Git" }
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
                                    "name": "Java Developer Roadmap",
                                    "item": "https://codeskipper.in/roadmap/java-developer"
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
                            "headline": "Java Developer Roadmap 2026 - Complete Guide",
                            "description": "Master Java development in 2026 with our complete roadmap. Learn core Java, Spring Boot, microservices, databases, and cloud deployment.",
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
                <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-300/20 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • Enterprise Ready
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    Java Developer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the world's most popular enterprise language — <strong className="text-orange-600">Java</strong>.
                                    From core fundamentals to microservices and cloud — a systematic 10‑month journey to become a Java expert.
                                </p>

                                {/* Java Domain Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {javaDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl text-orange-500 mb-2">
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
                                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100/50"
                                        >
                                            <div className="text-3xl text-orange-600 mb-2">{stat.icon}</div>
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
                                        🧠 AI‑assisted Java development • Smart code completion • Automated testing • Cloud-native
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
                                        className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold transition-all text-sm flex items-center gap-2 ${activePhase === index
                                                ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activePhase === index ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-600'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-orange-600" />
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
                                                <FaBook className="mr-3 text-orange-600" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-orange-500"
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
                                                                            className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-medium"
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
                                                <FaProjectDiagram className="mr-3 text-red-600" />
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
                                                            <div className="bg-red-100 text-red-600 p-3 rounded-xl mr-4 text-2xl">
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
                                            className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-orange-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center p-2 bg-white/60 rounded-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
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

                    {/* ===== JAVA ECOSYSTEM SPECIALIZATIONS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Java Specializations</h2>
                                <p className="text-xl text-gray-600">Core domains in the Java ecosystem</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {javaSpecializations.map((spec, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-orange-100"
                                    >
                                        <div className="text-5xl mb-4 text-orange-600">
                                            {spec.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{spec.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                                        <div className="space-y-2 text-left">
                                            {spec.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Java Developer Tech Stack 2026</h2>
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
                                        <div className="text-5xl mb-3 text-orange-600">
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Java Career Paths</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-orange-500"
                                    >
                                        <div className="text-5xl mb-4 text-orange-600">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-orange-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top Java Certifications 2026</h2>
                                <p className="text-xl text-gray-600">Validate your skills with industry-recognized certifications</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 shadow-xl"
                            >
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                            <FaCertificate className="text-orange-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                                <p className="text-orange-600 text-sm">{cert.level} • {cert.focus}</p>
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
// DATA (All icons are verified to exist in react-icons 5.7.0)
// ====================================================================

const javaDomains = [
    { name: "Core Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Databases", icon: <FaDatabase /> },
    { name: "Cloud", icon: <FaCloud /> }
];

const quickStats = [
    { icon: <FaClock />, value: "10 Months", label: "To Complete" },
    { icon: <FaCode />, value: "50+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "10+", label: "Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: Core Java Fundamentals =====
    {
        title: "Core Java Fundamentals",
        shortTitle: "Core Java",
        description: "Master the Java language, OOP, and essential APIs",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Java Basics",
                description: "Syntax, data types, operators, and control flow",
                subTopics: ["Variables", "Loops", "Conditionals", "Arrays", "Strings"],
                aiTool: "IntelliJ AI code completion"
            },
            {
                title: "Object-Oriented Programming",
                description: "Classes, inheritance, polymorphism, abstraction, encapsulation",
                subTopics: ["Classes", "Inheritance", "Interfaces", "Abstract Classes", "Packages"]
            },
            {
                title: "Collections Framework",
                description: "List, Set, Map, and their implementations",
                subTopics: ["ArrayList", "HashSet", "HashMap", "Iterators", "Comparable/Comparator"]
            },
            {
                title: "Exception Handling & I/O",
                description: "Manage errors and perform file I/O",
                subTopics: ["Try-Catch", "Custom Exceptions", "FileReader", "BufferedReader", "Serialization"]
            }
        ],
        projects: [
            {
                icon: "📊",
                title: "Student Management System",
                description: "Console-based app with CRUD operations using Collections",
                technologies: ["Java", "Collections", "File I/O"]
            },
            {
                icon: "🛒",
                title: "Shopping Cart CLI",
                description: "Command-line shopping cart with product and order management",
                technologies: ["Java OOP", "ArrayList", "HashMap"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Oracle Java Tutorials", type: "Documentation" },
            { icon: <FaVideo />, title: "Java Programming Course", type: "Video Series" },
            { icon: <FaBook />, title: "Effective Java (3rd Ed.)", type: "Book" }
        ],
        checklist: [
            "Write Java programs with OOP principles",
            "Use Collections framework effectively",
            "Handle exceptions and file I/O",
            "Create custom classes and interfaces",
            "Implement basic algorithms in Java"
        ]
    },

    // ===== PHASE 2: Advanced Java & JVM =====
    {
        title: "Advanced Java & JVM",
        shortTitle: "Advanced Java",
        description: "Multithreading, concurrency, memory management, and Java 21 features",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Multithreading & Concurrency",
                description: "Threads, synchronization, and concurrent utilities",
                subTopics: ["Thread", "Runnable", "Synchronized", "ExecutorService", "Concurrent Collections"]
            },
            {
                title: "JVM Internals",
                description: "Memory model, garbage collection, class loading",
                subTopics: ["Heap/Stack", "GC Algorithms", "Classloader", "JIT Compiler"]
            },
            {
                title: "Java 21 Features",
                description: "Pattern matching, records, sealed classes, virtual threads",
                subTopics: ["Records", "Sealed Classes", "Pattern Matching", "Virtual Threads", "Foreign API"]
            },
            {
                title: "Functional Programming",
                description: "Lambda expressions, streams, and functional interfaces",
                subTopics: ["Lambdas", "Streams API", "Optional", "Method References"]
            }
        ],
        projects: [
            {
                icon: "⚡",
                title: "Concurrent Task Scheduler",
                description: "Build a multithreaded scheduler using ExecutorService",
                technologies: ["Java Concurrency", "ExecutorService", "Future"]
            },
            {
                icon: "🧮",
                title: "Stream Processing Pipeline",
                description: "Process large datasets using Java Streams",
                technologies: ["Streams API", "Lambdas", "Collectors"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Java Concurrency in Practice", type: "Book" },
            { icon: <FaVideo />, title: "JVM Internals Course", type: "Video" },
            { icon: <FaBook />, title: "Java 21 New Features", type: "Guide" }
        ],
        checklist: [
            "Write multithreaded applications safely",
            "Use ExecutorService and concurrent collections",
            "Understand JVM memory model",
            "Apply Java 21 features like records and virtual threads",
            "Use functional programming with Streams"
        ]
    },

    // ===== PHASE 3: Build Tools & Testing =====
    {
        title: "Build Tools & Testing",
        shortTitle: "Build & Test",
        description: "Master Maven, Gradle, and unit/integration testing",
        duration: "1-2 Months",
        aiFocus: false,
        topics: [
            {
                title: "Maven & Gradle",
                description: "Dependency management, build lifecycle, plugins",
                subTopics: ["POM.xml", "Dependencies", "Plugins", "Multi-module", "Gradle Scripts"]
            },
            {
                title: "Unit Testing with JUnit",
                description: "Write unit tests using JUnit 5",
                subTopics: ["Annotations", "Assertions", "Test Suites", "Parameterized Tests"]
            },
            {
                title: "Mocking with Mockito",
                description: "Create mocks and stubs for dependencies",
                subTopics: ["Mockito", "Stubbing", "Verification", "Argument Matchers"]
            },
            {
                title: "Integration Testing",
                description: "Test API endpoints and database interactions",
                subTopics: ["Spring Test", "MockMVC", "Testcontainers"]
            }
        ],
        projects: [
            {
                icon: "🧪",
                title: "Test Suite for REST API",
                description: "Write unit and integration tests for a REST API",
                technologies: ["JUnit 5", "Mockito", "Spring Boot Test", "Testcontainers"]
            },
            {
                icon: "🏗️",
                title: "Multi-module Maven Project",
                description: "Structure a project with modules and dependency management",
                technologies: ["Maven", "Multi-module", "Parent POM"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Maven Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "JUnit 5 Course", type: "Video" },
            { icon: <FaBook />, title: "Mockito Guide", type: "E-book" }
        ],
        checklist: [
            "Build a Maven/Gradle project",
            "Write unit tests with JUnit 5",
            "Use Mockito for mocking dependencies",
            "Write integration tests",
            "Run tests in CI pipeline"
        ]
    },

    // ===== PHASE 4: Java Web & Spring Framework =====
    {
        title: "Java Web & Spring Framework",
        shortTitle: "Spring Boot",
        description: "Build enterprise web applications with Spring Boot",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Spring Core & IoC",
                description: "Dependency injection, beans, and application context",
                subTopics: ["Inversion of Control", "Dependency Injection", "Bean Scopes", "Configuration"],
                aiTool: "Spring AI / Copilot"
            },
            {
                title: "Spring Boot",
                description: "Create production-ready Spring applications",
                subTopics: ["Auto-configuration", "Spring Boot Starter", "Properties", "Actuator"]
            },
            {
                title: "Spring MVC & REST",
                description: "Build RESTful APIs with Spring MVC",
                subTopics: ["Controllers", "RequestMapping", "Request/Response", "Exception Handling"]
            },
            {
                title: "Spring Data JPA & Hibernate",
                description: "Database integration with JPA and Hibernate",
                subTopics: ["Entities", "Repositories", "JPQL", "Criteria API", "Transactions"]
            }
        ],
        projects: [
            {
                icon: "🏪",
                title: "E-commerce API with Spring Boot",
                description: "Build a full REST API with product, order, and user management",
                technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "Lombok"],
                aiIntegration: "AI-driven validation and error handling"
            },
            {
                icon: "📝",
                title: "Blog Platform",
                description: "Create a blog API with Spring MVC and JPA",
                technologies: ["Spring Boot", "Thymeleaf", "JPA", "Hibernate"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Spring Boot Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "Spring Framework Course", type: "Video" },
            { icon: <FaBook />, title: "Hibernate Guide", type: "E-book" }
        ],
        checklist: [
            "Create Spring Boot application with starter dependencies",
            "Build REST APIs with Spring MVC",
            "Integrate JPA for database access",
            "Implement exception handling and validation",
            "Use Spring Data repositories"
        ]
    },

    // ===== PHASE 5: Microservices & Cloud =====
    {
        title: "Microservices & Cloud",
        shortTitle: "Microservices",
        description: "Design, build, and deploy microservices with Spring Cloud",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Microservices Architecture",
                description: "Principles, patterns, and communication",
                subTopics: ["Service Discovery", "API Gateway", "Circuit Breaker", "Distributed Tracing"],
                aiTool: "AI-powered service mesh analysis"
            },
            {
                title: "Spring Cloud",
                description: "Eureka, Gateway, Config Server, Resilience4j",
                subTopics: ["Eureka", "Spring Cloud Gateway", "Config Server", "Resilience4j"]
            },
            {
                title: "Messaging with Kafka",
                description: "Event-driven communication using Apache Kafka",
                subTopics: ["Producers", "Consumers", "Topics", "Kafka Streams"]
            },
            {
                title: "Containerization & Orchestration",
                description: "Docker and Kubernetes for microservices",
                subTopics: ["Dockerfile", "Docker Compose", "Kubernetes", "Helm"]
            }
        ],
        projects: [
            {
                icon: "☁️",
                title: "Microservices System",
                description: "Build an order processing system with 3 microservices",
                technologies: ["Spring Boot", "Spring Cloud", "Kafka", "Docker"],
                aiIntegration: "AI-driven service scaling"
            },
            {
                icon: "🔗",
                title: "API Gateway with Routing",
                description: "Implement an API Gateway with Spring Cloud Gateway",
                technologies: ["Spring Cloud Gateway", "Eureka", "Resilience4j"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Spring Cloud Documentation", type: "Documentation" },
            { icon: <FaVideo />, title: "Microservices Course", type: "Video" },
            { icon: <FaBook />, title: "Kafka Guide", type: "E-book" }
        ],
        checklist: [
            "Design microservices with clear boundaries",
            "Implement service discovery and API gateway",
            "Use Kafka for event-driven communication",
            "Containerize with Docker",
            "Deploy to Kubernetes"
        ]
    },

    // ===== PHASE 6: Advanced & Production Readiness =====
    {
        title: "Advanced Topics & Production",
        shortTitle: "Advanced",
        description: "Security, performance, monitoring, and continuous deployment",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Security with Spring Security",
                description: "Authentication, authorization, OAuth2, JWT",
                subTopics: ["Spring Security", "JWT", "OAuth2", "Role-based Access"]
            },
            {
                title: "Performance Tuning",
                description: "Optimize Java applications for speed and memory",
                subTopics: ["Profiling", "Heap Analysis", "JVM Tuning", "Caching"]
            },
            {
                title: "Monitoring & Observability",
                description: "Logging, metrics, and distributed tracing",
                subTopics: ["SLF4J", "Micrometer", "Prometheus", "Grafana", "Zipkin"]
            },
            {
                title: "CI/CD & DevOps",
                description: "Automated build, test, and deployment pipelines",
                subTopics: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"]
            }
        ],
        projects: [
            {
                icon: "🔐",
                title: "Secure API with JWT",
                description: "Implement JWT-based authentication for a REST API",
                technologies: ["Spring Security", "JWT", "OAuth2"]
            },
            {
                icon: "📊",
                title: "Monitoring Dashboard",
                description: "Integrate Micrometer and Prometheus for metrics",
                technologies: ["Micrometer", "Prometheus", "Grafana"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Spring Security Guide", type: "Documentation" },
            { icon: <FaVideo />, title: "Java Performance Tuning", type: "Video" },
            { icon: <FaBook />, title: "CI/CD with GitHub Actions", type: "Guide" }
        ],
        checklist: [
            "Secure REST APIs with Spring Security",
            "Implement JWT authentication",
            "Set up monitoring with Prometheus/Grafana",
            "Create CI/CD pipeline",
            "Optimize performance using profiling"
        ]
    }
];

const javaSpecializations = [
    {
        domain: "Core Java Development",
        description: "Build robust, object-oriented applications",
        icon: <FaJava />,
        skills: ["OOP", "Collections", "Multithreading", "Streams", "JVM"]
    },
    {
        domain: "Spring & Microservices",
        description: "Build cloud-native, reactive microservices",
        icon: <SiSpring />,
        skills: ["Spring Boot", "Spring Cloud", "Kafka", "Docker", "Kubernetes"]
    },
    {
        domain: "Database & JPA",
        description: "Design data persistence layers",
        icon: <FaDatabase />,
        skills: ["JPA", "Hibernate", "SQL", "MongoDB", "Redis"]
    },
    {
        domain: "DevOps & Cloud",
        description: "Deploy and manage Java applications at scale",
        icon: <FaCloud />,
        skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "CI/CD", "Monitoring"]
    },
    {
        domain: "Security Engineering",
        description: "Implement enterprise-grade security",
        icon: <FaShieldAlt />,
        skills: ["Spring Security", "OAuth2", "JWT", "Encryption", "PKI"]
    },
    {
        domain: "Performance Engineering",
        description: "Optimize JVM and application performance",
        icon: <FaBolt />,
        skills: ["JVM Tuning", "Profiling", "Caching", "Garbage Collection", "Async"]
    }
];

const careerPaths = [
    {
        icon: "☕",
        title: "Java Developer",
        description: "Build enterprise applications with Java and Spring",
        salary: "₹6-14 LPA",
        skills: ["Core Java", "Spring Boot", "JPA", "SQL", "REST APIs"]
    },
    {
        icon: "🏗️",
        title: "Senior Java Engineer",
        description: "Architect and lead Java projects with microservices",
        salary: "₹12-25 LPA",
        skills: ["Spring Cloud", "Microservices", "Kafka", "AWS", "Design Patterns"]
    },
    {
        icon: "☁️",
        title: "Cloud Java Architect",
        description: "Design cloud-native Java solutions on AWS/Azure",
        salary: "₹18-35 LPA",
        skills: ["AWS", "Kubernetes", "Terraform", "Java", "Microservices"]
    },
    {
        icon: "💻",
        title: "Tech Lead",
        description: "Lead development teams and drive technical strategy",
        salary: "₹20-40 LPA",
        skills: ["Leadership", "Architecture", "DevOps", "Java", "Agile"]
    }
];

// Verified tech stack icons (react-icons 5.7.0)
const techStack = [
    { name: "Java", category: "Language", icon: <FaJava /> },
    { name: "Spring Boot", category: "Framework", icon: <SiSpring /> },
    { name: "Hibernate", category: "ORM", icon: <FaDatabase /> },
    { name: "Maven", category: "Build Tool", icon: <SiApache /> },
    { name: "Gradle", category: "Build Tool", icon: <SiGradle /> },
    { name: "JUnit", category: "Testing", icon: <SiJunit5 /> },
    { name: "Docker", category: "Container", icon: <SiDocker /> },
    { name: "Kubernetes", category: "Orchestration", icon: <SiKubernetes /> },
    { name: "Kafka", category: "Messaging", icon: <SiApachekafka /> },
    { name: "MySQL", category: "SQL DB", icon: <SiMysql /> },
    { name: "MongoDB", category: "NoSQL DB", icon: <SiMongodb /> },
    { name: "Redis", category: "Cache", icon: <SiRedis /> },
    { name: "AWS", category: "Cloud", icon: <FaAws /> },
    { name: "Jenkins", category: "CI/CD", icon: <SiJenkins /> },
    { name: "GitHub Actions", category: "CI/CD", icon: <SiGithubactions /> }
];

const certifications = [
    { name: "Oracle Certified Professional Java SE", level: "Intermediate", focus: "Core Java" },
    { name: "Spring Professional Certification", level: "Intermediate", focus: "Spring Framework" },
    { name: "AWS Certified Developer - Associate", level: "Intermediate", focus: "Cloud Java" },
    { name: "Certified Kubernetes Application Developer", level: "Intermediate", focus: "Kubernetes" },
    { name: "Oracle Certified Master Java", level: "Advanced", focus: "Java EE" },
    { name: "Microsoft Certified Azure Developer", level: "Intermediate", focus: "Azure Java" }
];