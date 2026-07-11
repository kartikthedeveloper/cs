// pages/roadmaps/frontend-developer.js
import { motion } from 'framer-motion';
import {
    FaCode,
    FaLaptopCode,
    FaPalette,
    FaMobileAlt,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaExternalLinkAlt,
    FaGitAlt,
    FaCss3Alt,
    FaHtml5,
    FaJs,
    FaReact,
    FaVuejs,
    FaAngular,
    FaNodeJs,
    FaBootstrap,
    FaFigma,
    FaCloud,
    FaDatabase,
    FaServer,
    FaBrain,
    FaRobot,
    FaMicrochip,
    FaArrowRight,
    FaStar,
    FaCertificate,
    FaGem,
    FaFire,
    FaTrophy,
    FaGlobe,
    FaShieldAlt,
    FaSearch,
    FaUsers,
    FaChartLine,
    FaLightbulb,
    FaCrown,
    FaInfinity,
    FaMagic,
    FaEye
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiVuedotjs,
    SiAngular,
    SiNextdotjs,
    SiTailwindcss,
    SiSass,
    SiWebpack,
    SiJest,
    SiCypress,
    SiStorybook,
    SiVercel,
    SiNetlify,
    SiGatsby,
    SiNuxtdotjs,
    SiSvelte,
    SiSolid,
    SiOpenai,
    SiTensorflow
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function FrontendDeveloperRoadmap() {
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
                <title>Frontend Developer Roadmap 2026 | AI-Powered Web Development Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master frontend development in the AI era with our complete 2026 roadmap. Learn HTML, CSS, JavaScript, React, performance, accessibility & AI tools."
                />
                <meta
                    name="keywords"
                    content="frontend developer roadmap 2026, web development, HTML, CSS, JavaScript, React, Vue, Angular, AI in frontend, performance, accessibility"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/frontend" />
                <meta property="og:title" content="Frontend Developer Roadmap 2026 | AI-Powered Web Development Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a frontend developer in the AI era. Master HTML, CSS, JavaScript, frameworks, performance, and accessibility." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/frontend" />
                <meta property="og:image" content="https://codeskipper.in/og-frontend-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Frontend Developer Roadmap 2026 | AI-Powered Guide" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a frontend developer in the AI era." />
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
                            "name": "Frontend Developer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a frontend developer in the AI era",
                            "totalTime": "P9M",
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
                                    "name": "Modern web browser (Chrome/Firefox)"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "VS Code" },
                                { "@type": "HowToTool", "name": "Git" },
                                { "@type": "HowToTool", "name": "Figma" },
                                { "@type": "HowToTool", "name": "Chrome DevTools" }
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
                                    "name": "Frontend Developer Roadmap",
                                    "item": "https://codeskipper.in/roadmap/frontend"
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
                            "headline": "Frontend Developer Roadmap 2026 - AI-Powered Complete Guide",
                            "description": "Master frontend development in the AI era with our complete 2026 roadmap. Learn HTML, CSS, JavaScript, React, performance, accessibility & AI tools.",
                            "author": {
                                "@type": "Organization",
                                "name": "CodeSkipper"
                            },
                            "datePublished": "2026-01-15",
                            "dateModified": "2026-07-11",
                            "publisher": {
                                "@type": "Organization",
                                "name": "CodeSkipper",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://codeskipper.in/Images/logo.png"
                                }
                            }
                        })
                    }}
                />
            </Head>

            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    Frontend Developer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of building beautiful, interactive web experiences in the <strong className="text-blue-600">AI era</strong>.
                                    From HTML/CSS to advanced frameworks and performance — a systematic 9-month journey to become a frontend expert.
                                </p>

                                {/* Frontend Domains Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {frontendDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl text-blue-500 mb-2">
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
                                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50"
                                        >
                                            <div className="text-3xl text-blue-500 mb-2">{stat.icon}</div>
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
                                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full shadow-md"
                                >
                                    <FaRobot className="text-purple-600 text-xl" />
                                    <span className="text-gray-700 font-medium">
                                        🤖 AI-powered coding • Component generation • Smart testing • Design-to-code
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
                                                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-blue-500" />
                                                {phase.duration}
                                            </span>
                                            {phase.aiFocus && (
                                                <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                                    <FaRobot /> AI Focus
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
                                                <FaBook className="mr-3 text-blue-500" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-blue-500"
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
                                                                            className="bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium"
                                                                        >
                                                                            {sub}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            {topic.aiTool && (
                                                                <div className="mt-2 flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full inline-flex">
                                                                    <FaRobot className="text-purple-500" />
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
                                                <FaProjectDiagram className="mr-3 text-cyan-600" />
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
                                                            <div className="bg-cyan-100 text-cyan-600 p-3 rounded-xl mr-4 text-2xl">
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
                                                                        <FaRobot className="text-purple-500" />
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
                                            className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-blue-500" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center p-2 bg-white/60 rounded-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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

                    {/* ===== AI IN FRONTEND SECTION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                                    <FaRobot className="inline mr-2" />
                                    AI Era
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                    How AI is Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Frontend Development</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The frontend landscape is evolving rapidly. Here's how AI is shaping the future of web development in 2026.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiFrontendTrends.map((trend, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03, y: -4 }}
                                        className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-100"
                                    >
                                        <div className="text-4xl mb-4 text-purple-600">{trend.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">{trend.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{trend.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {trend.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== FRONTEND DOMAINS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Frontend Specializations</h2>
                                <p className="text-xl text-gray-600">Core areas of expertise in frontend development</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {frontendDomainsFull.map((domain, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-blue-100"
                                    >
                                        <div className="text-5xl mb-4 text-blue-500">
                                            {domain.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{domain.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{domain.description}</p>
                                        <div className="space-y-2 text-left">
                                            {domain.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== CAREER PATH ===== */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Frontend Career Paths</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-500"
                                    >
                                        <div className="text-5xl mb-4 text-blue-500">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-blue-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
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

                    {/* ===== TOOLS & CERTIFICATIONS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential Tools & Certifications</h2>
                                <p className="text-xl text-gray-600">Industry-standard tools and credentials for frontend developers</p>
                            </motion.div>

                            {/* Tools */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all"
                                    >
                                        <div className="text-5xl mb-4 text-blue-500">
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-1">{tool.name}</h3>
                                        <p className="text-gray-600 text-sm">{tool.purpose}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                                            <FaCertificate className="text-blue-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                                <p className="text-blue-600 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

            
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
// DATA
// ====================================================================

const frontendDomains = [
    { name: "HTML/CSS", icon: <FaHtml5 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Frameworks", icon: <FaReact /> },
    { name: "Performance", icon: <FaBolt /> }
];

const quickStats = [
    { icon: <FaClock />, value: "9 Months", label: "To Complete" },
    { icon: <FaCode />, value: "50+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "12+", label: "Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: HTML & CSS =====
    {
        title: "HTML & CSS Fundamentals",
        shortTitle: "HTML/CSS",
        description: "Build a solid foundation in semantic HTML and modern CSS styling",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Semantic HTML",
                description: "Write accessible, SEO-friendly HTML5 markup",
                subTopics: ["Document Structure", "Semantic Elements", "Forms & Inputs", "HTML5 APIs"]
            },
            {
                title: "CSS Fundamentals",
                description: "Master styling with CSS selectors, properties, and layouts",
                subTopics: ["Box Model", "Flexbox", "Grid", "Typography", "Colors", "Responsive Design"]
            },
            {
                title: "CSS Preprocessors",
                description: "Use Sass and other preprocessors for maintainable CSS",
                subTopics: ["Variables", "Nesting", "Mixins", "Partials", "SCSS"]
            },
            {
                title: "Design Tools",
                description: "Use design tools to translate mockups to code",
                subTopics: ["Figma", "Adobe XD", "Design Systems", "UI/UX Principles"],
                aiTool: "AI design-to-code tools (e.g., Anima, Builder.io)"
            }
        ],
        projects: [
            {
                icon: "🏠",
                title: "Personal Portfolio",
                description: "Build a responsive portfolio website with HTML and CSS",
                technologies: ["HTML5", "CSS3", "Flexbox/Grid", "Media Queries"],
                aiIntegration: "AI-assisted design suggestions"
            },
            {
                icon: "📄",
                title: "Landing Page",
                description: "Create a high-converting landing page with CSS animations",
                technologies: ["Semantic HTML", "CSS Animations", "Responsive Design"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "HTML5 & CSS3 Guide", type: "E-book" },
            { icon: <FaVideo />, title: "CSS Mastery Course", type: "Video Series" },
            { icon: <FaBook />, title: "Figma to Code", type: "Tutorial" }
        ],
        checklist: [
            "Build 3 responsive layouts with Flexbox/Grid",
            "Use semantic HTML elements appropriately",
            "Style forms with custom CSS",
            "Implement media queries for mobile, tablet, desktop",
            "Create a basic design system (colors, typography, spacing)"
        ]
    },

    // ===== PHASE 2: JAVASCRIPT FUNDAMENTALS =====
    {
        title: "JavaScript Fundamentals",
        shortTitle: "JavaScript",
        description: "Master the core language of the web: ES6+, DOM manipulation, and asynchronous programming",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Core JavaScript",
                description: "Understand variables, functions, objects, arrays, and control flow",
                subTopics: ["ES6+ Syntax", "Arrow Functions", "Destructuring", "Spread/Rest", "Modules"]
            },
            {
                title: "DOM Manipulation",
                description: "Interact with and modify the DOM dynamically",
                subTopics: ["Query Selectors", "Event Handling", "DOM Traversal", "Manipulation Methods"]
            },
            {
                title: "Asynchronous JavaScript",
                description: "Handle async operations with Promises, async/await, and callbacks",
                subTopics: ["Promises", "Async/Await", "Fetch API", "Error Handling"]
            },
            {
                title: "Modern JavaScript Features",
                description: "Use modern features like Map, Set, and Proxy",
                subTopics: ["Map/Set", "WeakMap/WeakSet", "Proxies", "Symbols"],
                aiTool: "AI-powered code suggestions (e.g., GitHub Copilot)"
            }
        ],
        projects: [
            {
                icon: "✅",
                title: "Todo App",
                description: "Build a feature-rich todo app with local storage persistence",
                technologies: ["Vanilla JS", "DOM Manipulation", "Local Storage", "Event Handling"],
                aiIntegration: "AI code completion for speed"
            },
            {
                icon: "🌦️",
                title: "Weather App",
                description: "Create a weather app using the Fetch API and async/await",
                technologies: ["Fetch API", "Async/Await", "JSON Parsing", "Error Handling"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Modern JavaScript Guide", type: "E-book" },
            { icon: <FaVideo />, title: "JavaScript Deep Dive", type: "Course" },
            { icon: <FaBook />, title: "Promises & Async Patterns", type: "Tutorial" }
        ],
        checklist: [
            "Write ES6+ code confidently",
            "Manipulate DOM and handle events",
            "Consume REST APIs with fetch/async",
            "Implement local storage for data persistence",
            "Debug JavaScript using browser DevTools"
        ]
    },

    // ===== PHASE 3: VERSION CONTROL & TOOLS =====
    {
        title: "Version Control & Dev Tools",
        shortTitle: "Git & Tools",
        description: "Master Git, GitHub, and modern frontend development tools",
        duration: "1-2 Months",
        aiFocus: false,
        topics: [
            {
                title: "Git & GitHub",
                description: "Manage code versions and collaborate using Git",
                subTopics: ["Git Commands", "Branching Strategies", "Pull Requests", "GitHub Actions"]
            },
            {
                title: "Package Managers",
                description: "Use npm, yarn, and pnpm for dependency management",
                subTopics: ["npm CLI", "Package.json", "Semantic Versioning", "Lock Files"]
            },
            {
                title: "Build Tools & Bundlers",
                description: "Use Webpack, Vite, or Parcel for module bundling",
                subTopics: ["Webpack Config", "Loaders", "Plugins", "Hot Module Replacement"]
            },
            {
                title: "Developer Environment",
                description: "Set up a productive development environment",
                subTopics: ["VS Code Extensions", "Prettier", "ESLint", "Husky"],
                aiTool: "AI-powered code formatting and linting"
            }
        ],
        projects: [
            {
                icon: "🔧",
                title: "Dev Setup",
                description: "Configure a frontend project with ESLint, Prettier, and Git hooks",
                technologies: ["VS Code", "ESLint", "Prettier", "Husky"]
            },
            {
                icon: "🌐",
                title: "Git Collaboration",
                description: "Collaborate on a open-source project via GitHub",
                technologies: ["Git", "GitHub", "Pull Requests", "Code Review"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Git Handbook", type: "Guide" },
            { icon: <FaVideo />, title: "Git & GitHub Course", type: "Video Series" },
            { icon: <FaBook />, title: "VS Code Productivity", type: "E-book" }
        ],
        checklist: [
            "Use Git add/commit/push/pull regularly",
            "Create and merge branches and resolve conflicts",
            "Set up ESLint and Prettier in a project",
            "Configure Webpack or Vite for bundling",
            "Submit a pull request on a team project"
        ]
    },

    // ===== PHASE 4: FRONTEND FRAMEWORK (REACT/VUE/ANGULAR) =====
    {
        title: "Frontend Frameworks",
        shortTitle: "Frameworks",
        description: "Choose and master a modern frontend framework (React, Vue, or Angular)",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "React (Recommended)",
                description: "Build component-based UIs with React and hooks",
                subTopics: ["Components", "Props & State", "Hooks", "Context API", "React Router"],
                aiTool: "AI component generation with tools like Vercel v0"
            },
            {
                title: "Alternate: Vue.js",
                description: "Reactive UIs with Vue's composition API and Pinia",
                subTopics: ["Components", "Reactivity", "Vue Router", "Pinia"]
            },
            {
                title: "Alternate: Angular",
                description: "Full-featured framework with TypeScript and dependency injection",
                subTopics: ["Components", "Services", "RxJS", "Angular Router", "Forms"]
            },
            {
                title: "State Management",
                description: "Manage application state effectively",
                subTopics: ["Redux (Redux Toolkit)", "Zustand", "Context API", "Recoil"]
            }
        ],
        projects: [
            {
                icon: "🛒",
                title: "E-commerce Frontend",
                description: "Build a full e-commerce UI with product listing, cart, and checkout",
                technologies: ["React", "React Router", "Context API", "CSS Modules"],
                aiIntegration: "AI-driven component generation and styling"
            },
            {
                icon: "📋",
                title: "Task Management Dashboard",
                description: "Create a dashboard with drag-and-drop and charts",
                technologies: ["Vue/Nuxt", "Pinia", "D3", "Tailwind CSS"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "React Official Docs", type: "Documentation" },
            { icon: <FaVideo />, title: "React Hooks Course", type: "Course" },
            { icon: <FaBook />, title: "State Management Guide", type: "E-book" }
        ],
        checklist: [
            "Build 3+ projects with your chosen framework",
            "Implement routing and navigation",
            "Manage state with a state management solution",
            "Consume REST APIs and display data",
            "Use hooks/component lifecycle correctly"
        ]
    },

    // ===== PHASE 5: ADVANCED FRONTEND (SSR, SSG, TypeScript) =====
    {
        title: "Advanced Frontend",
        shortTitle: "Advanced",
        description: "Master TypeScript, server-side rendering, static site generation, and meta-frameworks",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "TypeScript",
                description: "Add type safety to JavaScript for robust applications",
                subTopics: ["Type Annotations", "Interfaces", "Generics", "Utility Types", "Decorators"]
            },
            {
                title: "Meta-Frameworks (Next.js/Nuxt)",
                description: "Use Next.js for SSR, SSG, and API routes",
                subTopics: ["File-based Routing", "getServerSideProps", "getStaticProps", "API Routes", "Middleware"]
            },
            {
                title: "Performance Optimization",
                description: "Optimize for Core Web Vitals and user experience",
                subTopics: ["Lazy Loading", "Code Splitting", "Image Optimization", "Caching Strategies"]
            },
            {
                title: "Web Accessibility (a11y)",
                description: "Ensure applications are usable by everyone",
                subTopics: ["ARIA", "Semantic HTML", "Keyboard Navigation", "Screen Readers"],
                aiTool: "AI-driven accessibility audits"
            }
        ],
        projects: [
            {
                icon: "⚡",
                title: "Next.js Blog",
                description: "Build a blazing-fast blog with Next.js and MDX",
                technologies: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
                aiIntegration: "AI content generation and SEO optimization"
            },
            {
                icon: "📱",
                title: "PWA with Offline Support",
                description: "Create a progressive web app with service workers and offline capabilities",
                technologies: ["Next.js", "Service Workers", "Workbox", "Web Push"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "TypeScript Deep Dive", type: "E-book" },
            { icon: <FaVideo />, title: "Next.js Masterclass", type: "Course" },
            { icon: <FaBook />, title: "Web Performance Guide", type: "E-book" }
        ],
        checklist: [
            "Convert a project to TypeScript",
            "Deploy a Next.js app with SSR and SSG",
            "Optimize Lighthouse scores (90+)",
            "Implement service workers for offline",
            "Make an existing project fully accessible (a11y)"
        ]
    },

    // ===== PHASE 6: TESTING & QUALITY =====
    {
        title: "Testing & Code Quality",
        shortTitle: "Testing",
        description: "Ensure robust code with unit, integration, and end-to-end testing",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Unit Testing",
                description: "Write tests for individual components and functions",
                subTopics: ["Jest", "React Testing Library", "Vitest", "Mocking"]
            },
            {
                title: "Integration Testing",
                description: "Test component interactions and API calls",
                subTopics: ["Integration Test Setup", "Mock API Calls", "Asynchronous Testing"]
            },
            {
                title: "End-to-End Testing",
                description: "Simulate user interactions with tools like Cypress and Playwright",
                subTopics: ["Cypress", "Playwright", "Test Automation", "Visual Regression"]
            },
            {
                title: "Continuous Integration",
                description: "Integrate tests into CI/CD pipelines",
                subTopics: ["GitHub Actions", "Jenkins", "Test Reports", "Coverage"]
            }
        ],
        projects: [
            {
                icon: "🔬",
                title: "Test Suite for React App",
                description: "Write comprehensive tests for a React application",
                technologies: ["Jest", "React Testing Library", "Mock Service Worker"],
                aiIntegration: "AI-powered test generation (e.g., Copilot for tests)"
            },
            {
                icon: "🔄",
                title: "E2E Test Automation",
                description: "Automate end-to-end tests for a web application",
                technologies: ["Cypress", "Playwright", "CI Integration"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Testing JavaScript", type: "E-book" },
            { icon: <FaVideo />, title: "Cypress Course", type: "Video Series" },
            { icon: <FaBook />, title: "CI/CD for Frontend", type: "Guide" }
        ],
        checklist: [
            "Write unit tests for utility functions",
            "Add integration tests for component interactions",
            "Set up E2E tests with Cypress or Playwright",
            "Integrate tests into CI pipeline",
            "Achieve 80%+ code coverage"
        ]
    },

    // ===== PHASE 7: AI-ENHANCED FRONTEND & FUTURE TRENDS =====
    {
        title: "AI-Enhanced Frontend & Future Trends",
        shortTitle: "AI & Future",
        description: "Integrate AI capabilities and stay ahead of emerging trends in frontend",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "AI-Powered Features",
                description: "Build intelligent UIs with AI/ML integration",
                subTopics: ["Chatbots", "Recommendation Systems", "Image Recognition", "Natural Language UI"],
                aiTool: "OpenAI API, Hugging Face, TensorFlow.js"
            },
            {
                title: "Design to Code Automation",
                description: "Use AI tools to convert designs into code",
                subTopics: ["Figma AI", "Builder.io", "AI code generation"]
            },
            {
                title: "WebAssembly & Performance",
                description: "Leverage WebAssembly for high-performance applications",
                subTopics: ["WASM", "Rust/WASM", "Blazor", "Web Workers"]
            },
            {
                title: "Future Trends",
                description: "Stay updated on Web3, Metaverse, and privacy-first development",
                subTopics: ["Web3 Wallets", "Metaverse UI", "Privacy Compliance", "Edge Computing"]
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "AI Chat Interface",
                description: "Build a frontend for an AI chatbot with streaming responses",
                technologies: ["React", "OpenAI API", "SSE", "WebSockets"],
                aiIntegration: "Full AI integration with chat UI"
            },
            {
                icon: "🖼️",
                title: "AI Image Generator UI",
                description: "Create a UI for generating images using AI models",
                technologies: ["React", "Stable Diffusion API", "Canvas", "File Handling"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "AI for Frontend", type: "E-book" },
            { icon: <FaVideo />, title: "WebAssembly Guide", type: "Course" },
            { icon: <FaBook />, title: "Future Web Trends", type: "Report" }
        ],
        checklist: [
            "Integrate an AI API (OpenAI/Hugging Face) into a frontend app",
            "Convert a design to code using AI tool",
            "Build a simple WebAssembly module",
            "Explore Web3 wallet connection in a frontend",
            "Implement privacy-first analytics (Google Analytics 4 with consent)"
        ]
    }
];

const frontendDomainsFull = [
    {
        domain: "UI/UX Design",
        description: "Create intuitive and delightful user experiences",
        icon: <FaPalette />,
        skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"]
    },
    {
        domain: "Web Performance",
        description: "Optimize page load times and user experience",
        icon: <FaBolt />,
        skills: ["Core Web Vitals", "Lazy Loading", "Code Splitting", "Image Optimization", "Caching"]
    },
    {
        domain: "Accessibility (a11y)",
        description: "Ensure web content is accessible to all users",
        icon: <FaEye />,
        skills: ["ARIA", "Semantic HTML", "Keyboard Navigation", "Screen Reader Testing", "Color Contrast"]
    },
    {
        domain: "Responsive Design",
        description: "Build web applications that work on any device",
        icon: <FaMobileAlt />,
        skills: ["Fluid Layouts", "Media Queries", "Responsive Images", "Mobile-first Design"]
    },
    {
        domain: "State Management",
        description: "Manage application state effectively at scale",
        icon: <FaDatabase />,
        skills: ["Redux", "Zustand", "Recoil", "MobX", "Context API"]
    },
    {
        domain: "DevOps & Deployment",
        description: "Deploy and manage frontend applications in production",
        icon: <FaCloud />,
        skills: ["CI/CD", "Vercel/Netlify", "AWS", "Containerization", "Monitoring"]
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "Frontend Developer",
        description: "Build user interfaces and web applications with modern technologies",
        salary: "₹6-15 LPA",
        skills: ["HTML/CSS", "JavaScript/TypeScript", "React/Vue", "Performance", "Git"]
    },
    {
        icon: "📱",
        title: "Mobile Web Developer",
        description: "Specialize in mobile-first and progressive web applications",
        salary: "₹8-18 LPA",
        skills: ["PWA", "Responsive Design", "Web APIs", "Service Workers", "Mobile UX"]
    },
    {
        icon: "🚀",
        title: "Full-Stack Developer (Frontend Focus)",
        description: "Bridge frontend with backend for complete applications",
        salary: "₹10-22 LPA",
        skills: ["Node.js/Deno", "APIs", "Database", "Cloud Deployment", "Frontend"]
    },
    {
        icon: "🤖",
        title: "AI Frontend Engineer",
        description: "Build intelligent UIs and AI-powered applications",
        salary: "₹12-25 LPA",
        skills: ["AI APIs", "Data Visualization", "Machine Learning UI", "WebAssembly", "Python"]
    }
];

const tools = [
    { name: "VS Code", purpose: "Code Editor", icon: <FaCode /> },
    { name: "Git", purpose: "Version Control", icon: <FaGitAlt /> },
    { name: "Figma", purpose: "UI/UX Design", icon: <FaFigma /> },
    { name: "Chrome DevTools", purpose: "Debugging & Profiling", icon: <FaGlobe /> },
    { name: "Webpack", purpose: "Module Bundler", icon: <SiWebpack /> },
    { name: "Jest", purpose: "Testing Framework", icon: <SiJest /> },
    { name: "Cypress", purpose: "E2E Testing", icon: <SiCypress /> },
    { name: "Tailwind CSS", purpose: "CSS Framework", icon: <SiTailwindcss /> }
];

const certifications = [
    { name: "Meta Frontend Developer Certificate", level: "Intermediate", focus: "React, HTML/CSS" },
    { name: "Google UX Design Certificate", level: "Entry", focus: "UX/UI" },
    { name: "IBM Full Stack Software Developer", level: "Advanced", focus: "Full Stack" },
    { name: "Frontend Masters Certification", level: "Advanced", focus: "Advanced JavaScript" },
    { name: "Microsoft Certified: Frontend Developer", level: "Intermediate", focus: "TypeScript, React" },
    { name: "W3Schools Frontend Certification", level: "Entry", focus: "HTML/CSS/JavaScript" }
];

const aiFrontendTrends = [
    {
        icon: "🤖",
        title: "AI Code Generation",
        description: "AI assistants like Copilot and Cursor generate whole components and boilerplate, accelerating development by 40-50%.",
        tags: ["Copilot", "Cursor", "Code Completion", "Productivity"]
    },
    {
        icon: "🎨",
        title: "Design-to-Code AI",
        description: "AI tools convert Figma/Sketch designs into production-ready code, drastically reducing time from design to implementation.",
        tags: ["Figma AI", "Builder.io", "Anima", "Design Systems"]
    },
    {
        icon: "🔍",
        title: "AI Accessibility Testing",
        description: "AI-powered tools automatically detect accessibility issues and suggest fixes, making a11y compliance effortless.",
        tags: ["a11y", "AI Audits", "Compliance", "Inclusive Design"]
    },
    {
        icon: "⚡",
        title: "Performance Optimization AI",
        description: "AI analyzes runtime performance and suggests optimizations for Core Web Vitals, LCP, FID, and CLS.",
        tags: ["Core Web Vitals", "LCP", "CLS", "Performance Audits"]
    },
    {
        icon: "🧪",
        title: "AI Test Generation",
        description: "AI automatically generates unit and E2E tests from code, ensuring high coverage and catching edge cases.",
        tags: ["Test Automation", "Jest", "Cypress", "Coverage"]
    },
    {
        icon: "🌐",
        title: "AI-Powered Personalization",
        description: "AI enables real-time personalization of UI content and layout based on user behavior and preferences.",
        tags: ["Personalization", "Dynamic UI", "A/B Testing", "User Experience"]
    }
];