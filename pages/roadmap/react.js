// pages/roadmaps/react-js-developer.js
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
    FaGitAlt,
    FaReact,
    FaNodeJs,
    FaCloud,
    FaDatabase,
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
    FaEye,
    FaServer,
    FaCogs
} from 'react-icons/fa';
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
    SiJest,
    SiCypress,
    SiWebpack,
    SiVercel,
    SiStorybook,
    SiReactrouter,
    SiGraphql,
    SiApollographql,
    SiPrisma,
    SiPostgresql,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiDocker,
    SiOpenai,
    SiFigma
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function ReactJsDeveloperRoadmap() {
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
                <title>React JS Developer Roadmap 2026 | AI-Powered React Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master React JS development in the AI era with our complete 2026 roadmap. Learn React hooks, state management, Next.js, performance, and AI integration."
                />
                <meta
                    name="keywords"
                    content="React JS roadmap 2026, React developer, React hooks, Redux, Next.js, TypeScript, React performance, AI in React"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/react" />
                <meta property="og:title" content="React JS Developer Roadmap 2026 | AI-Powered React Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a React JS developer in the AI era. Master hooks, state management, Next.js, performance, and AI integration." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/react" />
                <meta property="og:image" content="https://codeskipper.in/og-react-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="React JS Developer Roadmap 2026 | AI-Powered Guide" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a React JS developer in the AI era." />
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
                            "name": "React JS Developer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a React JS developer in the AI era",
                            "totalTime": "P8M",
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
                                { "@type": "HowToTool", "name": "React DevTools" },
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
                                    "name": "React JS Developer Roadmap",
                                    "item": "https://codeskipper.in/roadmap/react"
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
                            "headline": "React JS Developer Roadmap 2026 - AI-Powered Complete Guide",
                            "description": "Master React JS development in the AI era with our complete 2026 roadmap. Learn React hooks, state management, Next.js, performance, and AI integration.",
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
                <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-cyan-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    React JS Developer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master building dynamic, high-performance user interfaces with <strong className="text-cyan-600">React</strong> in the AI era.
                                    From hooks to advanced patterns — a systematic 8-month journey to become a React expert.
                                </p>

                                {/* React Ecosystem Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {reactEcosystemIcons.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-5xl" style={{ color: item.color }}>
                                                {item.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-700 mt-1">{item.name}</div>
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
                                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-100/50"
                                        >
                                            <div className="text-3xl text-cyan-600 mb-2">{stat.icon}</div>
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
                                        🤖 AI-powered component generation • Smart state management • Performance optimization • Testing automation
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
                                                ? 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-600 to-indigo-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-cyan-600" />
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
                                                <FaBook className="mr-3 text-cyan-600" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-cyan-500"
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
                                                                            className="bg-cyan-100 text-cyan-700 px-2.5 py-1 rounded-full text-xs font-medium"
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
                                                <FaProjectDiagram className="mr-3 text-indigo-600" />
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
                                                            <div className="bg-indigo-100 text-indigo-600 p-3 rounded-xl mr-4 text-2xl">
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
                                            className="mt-12 bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-2xl p-8 border border-cyan-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-cyan-600" />
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center p-2 bg-white/60 rounded-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500"
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

                    {/* ===== AI IN REACT SECTION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
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
                                    How AI is Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">React Development</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The React ecosystem is evolving rapidly. Here's how AI is shaping the future of React development in 2026.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiReactTrends.map((trend, index) => (
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

                    {/* ===== REACT SPECIALIZATIONS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">React Specializations</h2>
                                <p className="text-xl text-gray-600">Core areas of expertise in React development</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {reactSpecializations.map((spec, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-cyan-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-cyan-100"
                                    >
                                        <div className="text-5xl mb-4 text-cyan-600">
                                            {spec.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{spec.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                                        <div className="space-y-2 text-left">
                                            {spec.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></div>
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">React Career Paths</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-cyan-500"
                                    >
                                        <div className="text-5xl mb-4 text-cyan-600">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-cyan-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-xs font-medium"
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
                                <p className="text-xl text-gray-600">Industry-standard tools and credentials for React developers</p>
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
                                        <div className="text-5xl mb-4 text-cyan-600">
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
                                className="bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-2xl p-8 border border-cyan-200 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
                                            <FaCertificate className="text-cyan-500 mt-1 mr-3 flex-shrink-0 text-xl" />
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                                <p className="text-cyan-600 text-sm">{cert.level} • {cert.focus}</p>
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

const reactEcosystemIcons = [
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" }
];

const quickStats = [
    { icon: <FaClock />, value: "8 Months", label: "To Complete" },
    { icon: <FaCode />, value: "45+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "10+", label: "Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: JavaScript & ES6+ Fundamentals =====
    {
        title: "JavaScript & ES6+ Fundamentals",
        shortTitle: "JS Basics",
        description: "Master modern JavaScript as the foundation for React development",
        duration: "1-2 Months",
        aiFocus: false,
        topics: [
            {
                title: "Core JavaScript",
                description: "Variables, functions, objects, arrays, and control flow",
                subTopics: ["var/let/const", "Arrow Functions", "Objects", "Arrays", "Loops"]
            },
            {
                title: "ES6+ Features",
                description: "Modern JavaScript features used extensively in React",
                subTopics: ["Destructuring", "Spread/Rest", "Template Literals", "Modules"]
            },
            {
                title: "DOM & Events",
                description: "Understanding DOM manipulation and event handling",
                subTopics: ["DOM Traversal", "Event Listeners", "Event Delegation", "Browser APIs"]
            },
            {
                title: "Async JavaScript",
                description: "Promises, async/await, and API calls",
                subTopics: ["Promises", "async/await", "fetch API", "Error Handling"]
            }
        ],
        projects: [
            {
                icon: "✅",
                title: "Interactive Todo App",
                description: "Build a todo app with localStorage and event handling",
                technologies: ["Vanilla JS", "DOM", "Local Storage"]
            },
            {
                icon: "🌦️",
                title: "Weather App",
                description: "Create a weather app using fetch API and async/await",
                technologies: ["fetch API", "async/await", "DOM"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "JavaScript: The Good Parts", type: "E-book" },
            { icon: <FaVideo />, title: "ES6+ Masterclass", type: "Video" },
            { icon: <FaBook />, title: "Async JavaScript Guide", type: "E-book" }
        ],
        checklist: [
            "Write ES6+ code confidently",
            "Manipulate DOM and handle events",
            "Consume APIs with fetch/async",
            "Use localStorage for data persistence",
            "Debug JS using browser DevTools"
        ]
    },

    // ===== PHASE 2: React Fundamentals =====
    {
        title: "React Fundamentals",
        shortTitle: "React Basics",
        description: "Learn core React concepts: components, props, state, and hooks",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "JSX & Components",
                description: "Write React components using JSX syntax",
                subTopics: ["JSX", "Functional Components", "Class Components", "Props"]
            },
            {
                title: "State & Hooks",
                description: "Manage component state with useState and other hooks",
                subTopics: ["useState", "useEffect", "useRef", "Custom Hooks"]
            },
            {
                title: "Component Lifecycle",
                description: "Understand component lifecycle and side effects",
                subTopics: ["Mounting", "Updating", "Unmounting", "Side Effects"]
            },
            {
                title: "Forms & Controlled Components",
                description: "Build forms with controlled components and validation",
                subTopics: ["Form Handling", "Input Validation", "Controlled Components", "Form Libraries"]
            }
        ],
        projects: [
            {
                icon: "📝",
                title: "Blog App",
                description: "Build a blog with post listing, details, and comments",
                technologies: ["React", "useState", "useEffect", "Forms"]
            },
            {
                icon: "🛒",
                title: "Shopping Cart",
                description: "Create a shopping cart with add/remove functionality",
                technologies: ["React", "State Management", "Local Storage"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "React Official Docs", type: "Documentation" },
            { icon: <FaVideo />, title: "React Hooks Course", type: "Video" },
            { icon: <FaBook />, title: "React Patterns", type: "E-book" }
        ],
        checklist: [
            "Build 3+ React components",
            "Use useState and useEffect hooks",
            "Create custom hooks",
            "Build forms with validation",
            "Manage state in components"
        ]
    },

    // ===== PHASE 3: Advanced React Patterns =====
    {
        title: "Advanced React Patterns",
        shortTitle: "Advanced React",
        description: "Master advanced React concepts: context, reducers, performance, and patterns",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Context API",
                description: "Manage global state without prop drilling",
                subTopics: ["Context Creation", "Provider", "Consumer", "useContext"]
            },
            {
                title: "useReducer & Complex State",
                description: "Manage complex state with useReducer",
                subTopics: ["useReducer", "Action Creators", "State Management"]
            },
            {
                title: "Performance Optimization",
                description: "Optimize React components for performance",
                subTopics: ["useMemo", "useCallback", "React.memo", "Lazy Loading"],
                aiTool: "AI performance analysis tools"
            },
            {
                title: "Render Props & Higher-Order Components",
                description: "Advanced component composition patterns",
                subTopics: ["Render Props", "HOCs", "Component Composition"]
            }
        ],
        projects: [
            {
                icon: "📊",
                title: "Dashboard with Context",
                description: "Build a dashboard using Context API for global state",
                technologies: ["React", "Context API", "useReducer", "Charts"],
                aiIntegration: "AI-powered data insights"
            },
            {
                icon: "⚡",
                title: "Performance Optimized App",
                description: "Optimize a React app with memoization and lazy loading",
                technologies: ["React.memo", "useMemo", "useCallback", "Lazy"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Advanced React Patterns", type: "E-book" },
            { icon: <FaVideo />, title: "React Performance Course", type: "Video" },
            { icon: <FaBook />, title: "Context API Guide", type: "Documentation" }
        ],
        checklist: [
            "Implement Context API for global state",
            "Use useReducer for complex state",
            "Apply memoization for performance",
            "Implement lazy loading for routes",
            "Optimize re-renders"
        ]
    },

    // ===== PHASE 4: React Ecosystem (State Management, Routing) =====
    {
        title: "React Ecosystem",
        shortTitle: "Ecosystem",
        description: "Master React Router, state management libraries, and styling",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "React Router",
                description: "Implement client-side routing",
                subTopics: ["BrowserRouter", "Routes", "Links", "Nested Routes", "Route Guards"]
            },
            {
                title: "State Management (Redux)",
                description: "Manage application state with Redux Toolkit",
                subTopics: ["Redux Store", "Actions", "Reducers", "Redux Toolkit", "RTK Query"],
                aiTool: "AI-powered state management suggestions"
            },
            {
                title: "State Management (Zustand/Recoil)",
                description: "Alternate state management libraries",
                subTopics: ["Zustand", "Recoil", "Valtio"]
            },
            {
                title: "Styling in React",
                description: "Use CSS Modules, Styled Components, or Tailwind CSS",
                subTopics: ["CSS Modules", "Styled Components", "Tailwind CSS", "Emotion"]
            }
        ],
        projects: [
            {
                icon: "🛒",
                title: "E-commerce with Redux",
                description: "Build a full e-commerce app with Redux Toolkit",
                technologies: ["React", "Redux Toolkit", "React Router", "Tailwind"],
                aiIntegration: "AI-driven cart recommendations"
            },
            {
                icon: "📱",
                title: "Social Media App",
                description: "Create a social media feed with routing and state",
                technologies: ["React", "Zustand", "React Router", "CSS Modules"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "React Router Guide", type: "Documentation" },
            { icon: <FaVideo />, title: "Redux Toolkit Course", type: "Video" },
            { icon: <FaBook />, title: "Tailwind CSS Guide", type: "E-book" }
        ],
        checklist: [
            "Implement routing with React Router",
            "Manage global state with Redux Toolkit",
            "Style components with Tailwind CSS",
            "Implement RTK Query for API calls",
            "Create protected routes"
        ]
    },

    // ===== PHASE 5: TypeScript & Testing =====
    {
        title: "TypeScript & Testing",
        shortTitle: "TypeScript & Testing",
        description: "Add type safety with TypeScript and test React applications",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "TypeScript in React",
                description: "Write type-safe React components",
                subTopics: ["Type Annotations", "Interfaces", "Props Typing", "Generics"],
                aiTool: "AI TypeScript suggestions"
            },
            {
                title: "Unit Testing",
                description: "Test React components with Jest and React Testing Library",
                subTopics: ["Jest", "React Testing Library", "Mocking", "Async Testing"]
            },
            {
                title: "Integration & E2E Testing",
                description: "Test entire flows with Cypress or Playwright",
                subTopics: ["Cypress", "Playwright", "E2E Test Automation"]
            },
            {
                title: "Test Coverage & Quality",
                description: "Maintain high test coverage and code quality",
                subTopics: ["Coverage Reports", "CI Integration", "Quality Metrics"]
            }
        ],
        projects: [
            {
                icon: "🔬",
                title: "Tested React App",
                description: "Write comprehensive tests for a React application",
                technologies: ["TypeScript", "Jest", "React Testing Library", "Cypress"],
                aiIntegration: "AI test generation"
            },
            {
                icon: "🔄",
                title: "TypeScript Migration",
                description: "Convert a JavaScript React app to TypeScript",
                technologies: ["TypeScript", "React", "Refactoring"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "TypeScript Deep Dive", type: "E-book" },
            { icon: <FaVideo />, title: "Testing React Apps", type: "Video" },
            { icon: <FaBook />, title: "Cypress Guide", type: "Documentation" }
        ],
        checklist: [
            "Convert a project to TypeScript",
            "Write unit tests for components",
            "Write integration tests for features",
            "Set up E2E tests with Cypress",
            "Achieve 80%+ test coverage"
        ]
    },

    // ===== PHASE 6: Next.js & Meta-Frameworks =====
    {
        title: "Next.js & Meta-Frameworks",
        shortTitle: "Next.js",
        description: "Master Next.js for server-side rendering, static generation, and API routes",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Next.js Fundamentals",
                description: "Build React apps with Next.js",
                subTopics: ["File-based Routing", "Pages", "Layouts", "Linking"]
            },
            {
                title: "Data Fetching",
                description: "Use getServerSideProps, getStaticProps, and getStaticPaths",
                subTopics: ["SSR", "SSG", "ISR", "Client-side Data Fetching"]
            },
            {
                title: "API Routes & Backend",
                description: "Build API endpoints within Next.js",
                subTopics: ["API Routes", "Middleware", "Edge Functions", "Server Components"]
            },
            {
                title: "Deployment & Optimization",
                description: "Deploy Next.js apps and optimize performance",
                subTopics: ["Vercel", "Image Optimization", "Caching", "Analytics"],
                aiTool: "AI-powered deployment and monitoring"
            }
        ],
        projects: [
            {
                icon: "🌐",
                title: "Next.js Blog",
                description: "Build a blog with Next.js and MDX",
                technologies: ["Next.js", "MDX", "SSG", "Tailwind"],
                aiIntegration: "AI content generation"
            },
            {
                icon: "🏪",
                title: "E-commerce with Next.js",
                description: "Create a full e-commerce site with Next.js and SSR",
                technologies: ["Next.js", "SSR", "API Routes", "Prisma"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Next.js Official Docs", type: "Documentation" },
            { icon: <FaVideo />, title: "Next.js Masterclass", type: "Video" },
            { icon: <FaBook />, title: "Vercel Deployment Guide", type: "E-book" }
        ],
        checklist: [
            "Build a Next.js app with SSR and SSG",
            "Implement API routes",
            "Optimize images and performance",
            "Deploy to Vercel",
            "Use middleware for authentication"
        ]
    },

    // ===== PHASE 7: Advanced & AI Integration =====
    {
        title: "Advanced React & AI Integration",
        shortTitle: "AI & Advanced",
        description: "Integrate AI capabilities and master advanced React patterns",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "GraphQL with Apollo",
                description: "Build GraphQL clients with Apollo Client",
                subTopics: ["GraphQL", "Apollo Client", "Queries", "Mutations", "Cache"]
            },
            {
                title: "Server Components",
                description: "Use React Server Components in Next.js",
                subTopics: ["Server Components", "Streaming SSR", "Suspense"]
            },
            {
                title: "AI Integration",
                description: "Add AI features to React apps",
                subTopics: ["OpenAI API", "Hugging Face", "TensorFlow.js", "AI Chat"],
                aiTool: "OpenAI API, Hugging Face"
            },
            {
                title: "Future Trends",
                description: "Stay updated on WebAssembly, Edge Computing, and Web3",
                subTopics: ["WASM", "Edge", "Web3 Wallets", "Privacy"]
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "AI Chat Application",
                description: "Build a React chat app with OpenAI integration",
                technologies: ["React", "Next.js", "OpenAI API", "Server Components"],
                aiIntegration: "Full AI integration with streaming"
            },
            {
                icon: "📈",
                title: "AI Analytics Dashboard",
                description: "Create a dashboard with AI-powered insights",
                technologies: ["React", "Apollo GraphQL", "AI APIs", "D3"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "GraphQL with React", type: "E-book" },
            { icon: <FaVideo />, title: "AI APIs Course", type: "Video" },
            { icon: <FaBook />, title: "React Future Trends", type: "E-book" }
        ],
        checklist: [
            "Implement GraphQL with Apollo",
            "Build React Server Components",
            "Integrate an AI API into React app",
            "Deploy AI-powered features",
            "Explore WebAssembly in React"
        ]
    }
];

const reactSpecializations = [
    {
        domain: "UI/UX Design in React",
        description: "Create beautiful, user-friendly interfaces",
        icon: <FaPalette />,
        skills: ["Component Design", "Design Systems", "Animations", "Accessibility", "Storybook"]
    },
    {
        domain: "State Management",
        description: "Manage complex application state effectively",
        icon: <FaDatabase />,
        skills: ["Redux", "Zustand", "Recoil", "Context API", "Jotai"]
    },
    {
        domain: "Performance Optimization",
        description: "Build fast, responsive React applications",
        icon: <FaBolt />,
        skills: ["Memoization", "Code Splitting", "Lazy Loading", "Windowing", "Virtualization"]
    },
    {
        domain: "Testing & Quality",
        description: "Ensure application reliability and quality",
        icon: <FaShieldAlt />,
        skills: ["Jest", "React Testing Library", "Cypress", "Playwright", "Coverage"]
    },
    {
        domain: "Full-Stack React",
        description: "Build end-to-end applications with React",
        icon: <FaServer />,
        skills: ["Next.js", "API Routes", "Server Components", "Database", "Deployment"]
    },
    {
        domain: "AI-Powered React",
        description: "Integrate AI capabilities into React apps",
        icon: <FaRobot />,
        skills: ["OpenAI API", "Hugging Face", "TensorFlow.js", "ML Models", "Chat"]
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "React Developer",
        description: "Build dynamic, responsive user interfaces with React",
        salary: "₹6-14 LPA",
        skills: ["React", "TypeScript", "State Management", "Performance", "Testing"]
    },
    {
        icon: "🚀",
        title: "React/Next.js Developer",
        description: "Build full-stack React apps with Next.js and SSR",
        salary: "₹8-18 LPA",
        skills: ["Next.js", "SSR/SSG", "API Routes", "Vercel", "TypeScript"]
    },
    {
        icon: "🤖",
        title: "AI Frontend Developer",
        description: "Build intelligent UIs with AI integration",
        salary: "₹12-25 LPA",
        skills: ["React", "AI APIs", "Python", "Data Visualization", "ML"]
    },
    {
        icon: "🏢",
        title: "Frontend Technical Lead",
        description: "Lead React teams and architect scalable solutions",
        salary: "₹18-32 LPA",
        skills: ["Architecture", "Leadership", "System Design", "Performance", "TypeScript"]
    }
];

const tools = [
    { name: "VS Code", purpose: "Code Editor", icon: <FaCode /> },
    { name: "Git", purpose: "Version Control", icon: <FaGitAlt /> },
    { name: "React DevTools", purpose: "Debugging React", icon: <SiReact /> },
    { name: "Chrome DevTools", purpose: "Browser Debugging", icon: <FaGlobe /> },
    { name: "Storybook", purpose: "Component Development", icon: <SiStorybook /> },
    { name: "Jest", purpose: "Testing Framework", icon: <SiJest /> },
    { name: "Cypress", purpose: "E2E Testing", icon: <SiCypress /> },
    { name: "Vercel", purpose: "Deployment", icon: <SiVercel /> }
];

const certifications = [
    { name: "Meta React Developer Certificate", level: "Intermediate", focus: "React" },
    { name: "Frontend Masters React Certification", level: "Advanced", focus: "Advanced React" },
    { name: "Next.js Certification", level: "Intermediate", focus: "Next.js" },
    { name: "TypeScript Certification", level: "Intermediate", focus: "TypeScript" },
    { name: "Redux Certification", level: "Intermediate", focus: "State Management" },
    { name: "AWS Frontend Developer", level: "Advanced", focus: "Deployment" }
];

const aiReactTrends = [
    {
        icon: "🤖",
        title: "AI Component Generation",
        description: "AI tools like Vercel v0 generate complete React components from prompts, accelerating development by 40-50%.",
        tags: ["Vercel v0", "Component Generation", "Copilot", "Productivity"]
    },
    {
        icon: "🎨",
        title: "Design-to-Code AI",
        description: "AI converts Figma designs into React code, significantly reducing time from design to implementation.",
        tags: ["Figma AI", "Anima", "Design Systems", "Visual Code"]
    },
    {
        icon: "🧪",
        title: "AI Test Generation",
        description: "AI automatically generates unit and integration tests for React components, ensuring high coverage.",
        tags: ["Test Automation", "Jest", "Coverage", "Quality"]
    },
    {
        icon: "⚡",
        title: "AI Performance Analysis",
        description: "AI tools analyze React performance and suggest optimizations for reducing re-renders and improving Core Web Vitals.",
        tags: ["Performance", "Core Web Vitals", "Optimization", "Profiling"]
    },
    {
        icon: "🔍",
        title: "AI Accessibility Audits",
        description: "AI-powered tools automatically detect and suggest fixes for accessibility issues in React components.",
        tags: ["a11y", "WCAG", "Compliance", "Inclusive Design"]
    },
    {
        icon: "📊",
        title: "Intelligent State Management",
        description: "AI suggests optimal state management patterns and helps debug complex state interactions in React apps.",
        tags: ["Redux", "Zustand", "Debugging", "State Patterns"]
    }
];