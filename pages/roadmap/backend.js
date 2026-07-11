// pages/roadmaps/backend-developer.js
import { motion, useInView } from 'framer-motion';
import {
    FaServer,
    FaDatabase,
    FaNodeJs,
    FaPython,
    FaJava,
    FaAws,
    FaDocker,
    FaGitAlt,
    FaShieldAlt,
    FaRocket,
    FaCheckCircle,
    FaBook,
    FaVideo,
    FaProjectDiagram,
    FaTools,
    FaCloud,
    FaCode,
    FaNetworkWired,
    FaLock,
    FaBolt,
    FaGraduationCap,
    FaClock,
    FaExternalLinkAlt,
    FaLaptop,
    FaBrain,
    FaRobot,
    FaMicrochip,
    FaChartLine,
    FaUsers,
    FaGlobe,
    FaCogs,
    FaInfinity,
    FaArrowRight,
    FaLightbulb,
    FaStar,
    FaCertificate,
    FaGem,
    FaMagic,
    FaCrown,
    FaFire,
    FaTrophy
} from 'react-icons/fa';
import {
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiKubernetes,
    SiNginx,
    SiTensorflow,
    SiOpenai,
    SiPytorch
} from 'react-icons/si';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function BackendDeveloperRoadmap() {
    const [activePhase, setActivePhase] = useState(0);
    const [hoveredPhase, setHoveredPhase] = useState(null);
    const sectionRefs = useRef([]);

    // Animation variants
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

    const fadeInUp = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <>
            <Head>
                <title>Backend Developer Roadmap 2026 | AI-Powered Full Stack Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master backend development in the AI era with our complete 2026 roadmap. Learn Node.js, Python, databases, AI integration, cloud services & system design."
                />
                <meta
                    name="keywords"
                    content="backend developer roadmap 2026, AI backend development, node.js roadmap, python backend, database design, API development, cloud computing, system design, MCP servers, AI agents"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/backend" />
                <meta property="og:title" content="Backend Developer Roadmap 2026 | AI-Powered Full Stack Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a backend developer in the AI era. Master Node.js, Python, databases, cloud, and AI integration." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/backend" />
                <meta property="og:image" content="https://codeskipper.in/og-backend-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Backend Developer Roadmap 2026 | AI-Powered Guide" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a backend developer in the AI era." />
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
                            "name": "Backend Developer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a backend developer in the AI era",
                            "totalTime": "P10M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "INR",
                                "value": "0"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Laptop with 16GB+ RAM"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Stable Internet Connection"
                                }
                            ],
                            "tool": [
                                {
                                    "@type": "HowToTool",
                                    "name": "VS Code"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "Git"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "Docker"
                                },
                                {
                                    "@type": "HowToTool",
                                    "name": "Postman"
                                }
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
                                    "item": "https://codeskipper.in/roadmaps"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Backend Developer Roadmap",
                                    "item": "https://codeskipper.in/roadmap/backend"
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
                            "headline": "Backend Developer Roadmap 2026 - AI-Powered Complete Guide",
                            "description": "Master backend development in the AI era with our complete 2026 roadmap. Learn Node.js, Python, databases, AI integration, cloud services & system design.",
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
                                    "url": "https://codeskipper.in/logo.png"
                                }
                            }
                        })
                    }}
                />
            </Head>

            <RoadmapLayout>
                <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-green-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                  AI Powered Backend Developer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master server-side development in the <strong className="text-green-600">AI era</strong>.
                                    From programming fundamentals to AI-powered backend systems — a systematic 10-month journey.
                                </p>

                                {/* Quick Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
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
                                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full shadow-md"
                                >
                                    <FaRobot className="text-purple-600 text-xl" />
                                    <span className="text-gray-700 font-medium">
                                        🤖 AI-powered development • MCP Servers • AI Agents • LLM Integration
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
                                        onMouseEnter={() => setHoveredPhase(index)}
                                        onMouseLeave={() => setHoveredPhase(null)}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`flex-shrink-0 px-5 py-2.5 rounded-full font-semibold transition-all text-sm flex items-center gap-2 ${activePhase === index
                                                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${activePhase === index ? 'bg-white/20 text-white' : 'bg-gray-300 text-gray-600'}`}>
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
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
                                                <FaBook className="mr-3 text-green-600" />
                                                Core Concepts
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
                                                <FaProjectDiagram className="mr-3 text-blue-600" />
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
                                                            <div className="bg-blue-100 text-blue-600 p-3 rounded-xl mr-4 text-2xl">
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

                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== AI ERA SECTION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
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
                                    How AI is Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Backend Development</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The backend developer's role is evolving. Here's what's changing in 2026 and how to stay ahead.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiTrends.map((trend, index) => (
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

                    {/* ===== TECHNOLOGY STACK ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Backend Technology Stack 2026</h2>
                                <p className="text-xl text-gray-600">Master the modern backend ecosystem — with AI tools</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {techStack.map((stack, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-gray-200"
                                    >
                                        <div className="text-5xl mb-4" style={{ color: stack.color }}>
                                            {stack.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-3">{stack.category}</h3>
                                        <div className="space-y-1.5">
                                            {stack.technologies.map((tech, techIndex) => (
                                                <div key={techIndex} className="text-gray-600 text-sm font-medium">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                        {stack.aiTool && (
                                            <div className="mt-3 bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
                                                <FaRobot /> {stack.aiTool}
                                            </div>
                                        )}
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Backend Career Paths</h2>
                                <p className="text-xl text-gray-600">Where this roadmap can take you in 2026</p>
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
                                        <div className="text-5xl mb-4">{path.icon}</div>
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

                    {/* ===== TOOLS & INFRASTRUCTURE ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Essential Tools & Infrastructure</h2>
                                <p className="text-xl text-gray-600">The tools powering modern backend systems</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        <div className="text-5xl mb-4" style={{ color: tool.color }}>
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-gray-800 mb-1">{tool.name}</h3>
                                        <p className="text-gray-600 text-sm mb-2">{tool.purpose}</p>
                                        <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full inline-block">
                                            {tool.useCase}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
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

const quickStats = [
    { icon: <FaClock />, value: "10 Months", label: "To Complete" },
    { icon: <FaCode />, value: "70+", label: "Skills to Master" },
    { icon: <FaDatabase />, value: "12+", label: "Database Types" },
    { icon: <FaRobot />, value: "AI-Powered", label: "Future-Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: Programming Fundamentals =====
    {
        title: "Programming Fundamentals",
        shortTitle: "Fundamentals",
        description: "Master a backend programming language and core programming concepts with AI-assisted learning",
        duration: "6-8 Weeks",
        aiFocus: false,
        topics: [
            {
                title: "Choose Your Primary Language",
                description: "Start with the most in-demand backend languages for 2026",
                subTopics: ["Node.js (TypeScript)", "Python", "Java", "Go"]
            },
            {
                title: "Programming Essentials",
                description: "Variables, data types, functions, and control structures",
                subTopics: ["Data Structures", "Algorithms", "OOP", "Functional Programming"]
            },
            {
                title: "Development Environment",
                description: "Set up your coding environment with AI-powered tools",
                subTopics: ["VS Code + Copilot", "Git", "Terminal", "Package Managers"],
                aiTool: "GitHub Copilot / Cursor AI"
            },
            {
                title: "Version Control with Git",
                description: "Master Git for collaboration and deployment",
                subTopics: ["Git Commands", "GitHub", "Branching", "Pull Requests"]
            }
        ],
        projects: [
            {
                icon: "🧮",
                title: "AI-Assisted CLI Calculator",
                description: "Build a command-line calculator with AI code completion",
                technologies: ["Node.js/Python", "CLI", "Functions"],
                aiIntegration: "Use Copilot for code generation"
            },
            {
                icon: "📊",
                title: "Data Processor",
                description: "Create a tool to process and analyze CSV/JSON data",
                technologies: ["File I/O", "Data Structures", "Algorithms"]
            }
        ],
        checklist: [
            "Complete basic programming exercises (50+)",
            "Build 3 CLI applications",
            "Understand OOP and functional programming",
            "Master Git basics (commit, push, pull, branch)",
            "Set up development environment with AI tools"
        ]
    },

    // ===== PHASE 2: Core Backend Development =====
    {
        title: "Core Backend Development",
        shortTitle: "Core Backend",
        description: "Build RESTful APIs, understand HTTP, and create server-side applications",
        duration: "8-10 Weeks",
        aiFocus: false,
        topics: [
            {
                title: "HTTP & Web Fundamentals",
                description: "Understand how the web works at a protocol level",
                subTopics: ["HTTP Methods", "Status Codes", "Headers", "CORS", "Cookies"]
            },
            {
                title: "Backend Frameworks",
                description: "Learn popular frameworks for rapid API development",
                subTopics: ["Express.js", "Django", "Spring Boot", "FastAPI"]
            },
            {
                title: "RESTful API Design",
                description: "Design clean, maintainable, and well-documented APIs",
                subTopics: ["Resource Modeling", "Versioning", "Error Handling", "OpenAPI"]
            },
            {
                title: "Authentication & Authorization",
                description: "Implement secure user authentication systems",
                subTopics: ["JWT", "OAuth 2.0", "Session Management", "RBAC"]
            }
        ],
        projects: [
            {
                icon: "🏪",
                title: "E-commerce API",
                description: "Build a complete REST API for an online store with auth",
                technologies: ["Express.js", "PostgreSQL", "JWT", "Stripe"],
                aiIntegration: "Use AI for test generation"
            },
            {
                icon: "📝",
                title: "Blog Platform API",
                description: "Create a blogging platform with users, posts, and comments",
                technologies: ["Django/DRF", "PostgreSQL", "Authentication"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Express.js Guide", type: "Documentation", link: "https://expressjs.com/en/guide.html" },
            { icon: <FaVideo />, title: "REST API Design", type: "Course", link: "https://www.youtube.com/watch?v=SLwpqD8n3d0" },
            { icon: <FaBook />, title: "JWT Handbook", type: "Guide", link: "https://jwt.io/introduction" }
        ],
        checklist: [
            "Build 3 complete REST APIs",
            "Implement JWT authentication",
            "Write API documentation with OpenAPI",
            "Handle file uploads",
            "Implement rate limiting and CORS"
        ]
    },

    // ===== PHASE 3: Databases & Data Management =====
    {
        title: "Databases & Data Management",
        shortTitle: "Databases",
        description: "Master SQL, NoSQL, and data modeling for modern applications",
        duration: "8-10 Weeks",
        aiFocus: false,
        topics: [
            {
                title: "SQL Databases",
                description: "Master relational databases and complex queries",
                subTopics: ["PostgreSQL", "MySQL", "Schema Design", "Normalization", "Indexing"]
            },
            {
                title: "NoSQL Databases",
                description: "Learn document, key-value, and graph databases",
                subTopics: ["MongoDB", "Redis", "Data Modeling", "Aggregation Pipelines"]
            },
            {
                title: "Database Optimization",
                description: "Optimize queries and database performance",
                subTopics: ["Query Optimization", "Connection Pooling", "Caching Strategies"]
            },
            {
                title: "Data Migration & ETL",
                description: "Handle data migration and transformation pipelines",
                subTopics: ["ETL Pipelines", "Data Validation", "Schema Migrations"]
            }
        ],
        projects: [
            {
                icon: "📊",
                title: "Analytics Dashboard",
                description: "Build a dashboard with complex SQL queries and data visualization",
                technologies: ["PostgreSQL", "Node.js", "Chart.js"],
                aiIntegration: "AI-powered query optimization suggestions"
            },
            {
                icon: "🗄️",
                title: "Multi-Database System",
                description: "Build a system using both SQL and NoSQL databases",
                technologies: ["PostgreSQL", "MongoDB", "Redis", "Caching"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "PostgreSQL Tutorial", type: "Documentation", link: "https://www.postgresqltutorial.com" },
            { icon: <FaVideo />, title: "MongoDB University", type: "Free Courses", link: "https://university.mongodb.com" },
            { icon: <FaBook />, title: "SQL Performance Explained", type: "Book", link: "https://use-the-index-luke.com" }
        ],
        checklist: [
            "Design and implement 3+ database schemas",
            "Write complex SQL queries (joins, subqueries, CTEs)",
            "Implement Redis caching",
            "Optimize database queries for performance",
            "Handle database migrations"
        ]
    },

    // ===== PHASE 4: Advanced Backend & Microservices =====
    {
        title: "Advanced Backend & Microservices",
        shortTitle: "Microservices",
        description: "Design scalable systems with microservices, message queues, and event-driven architecture",
        duration: "8-10 Weeks",
        aiFocus: true,
        topics: [
            {
                title: "Microservices Architecture",
                description: "Design and build microservices with proper boundaries",
                subTopics: ["Service Decomposition", "API Gateway", "Service Discovery", "Circuit Breakers"],
                aiTool: "AI service mesh analysis"
            },
            {
                title: "Message Queues",
                description: "Implement asynchronous communication between services",
                subTopics: ["RabbitMQ", "Apache Kafka", "Event Sourcing", "CQRS"],
                aiTool: "AI-driven message routing"
            },
            {
                title: "Containerization with Docker",
                description: "Containerize applications for consistency and scalability",
                subTopics: ["Dockerfile", "Docker Compose", "Image Optimization", "Multi-stage Builds"]
            },
            {
                title: "Security Best Practices",
                description: "Implement advanced security measures for backend systems",
                subTopics: ["Encryption", "Security Headers", "Vulnerability Scanning", "OWASP Top 10"]
            }
        ],
        projects: [
            {
                icon: "⚡",
                title: "Microservices E-commerce",
                description: "Build an e-commerce system with 4+ microservices",
                technologies: ["Node.js", "Kafka", "Docker", "Redis"],
                aiIntegration: "AI-powered service monitoring and auto-scaling"
            },
            {
                icon: "📨",
                title: "Event-Driven System",
                description: "Create a system using message queues and event sourcing",
                technologies: ["Kafka/RabbitMQ", "Microservices", "Event Sourcing"],
                aiIntegration: "AI anomaly detection in event streams"
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Building Microservices", type: "Book", link: "https://www.oreilly.com/library/view/building-microservices/9781491950340/" },
            { icon: <FaVideo />, title: "Kafka Tutorials", type: "Video Series", link: "https://www.youtube.com/playlist?list=PLGRDMO4rOGcNXD2fKdS6Hso1NlC0A4LKS" },
            { icon: <FaBook />, title: "OWASP Security Guide", type: "Security Best Practices", link: "https://owasp.org/www-project-top-ten/" }
        ],
        checklist: [
            "Design and implement 3+ microservices",
            "Implement message queue (Kafka/RabbitMQ)",
            "Containerize all services with Docker",
            "Set up API Gateway",
            "Implement circuit breakers and retries"
        ]
    },

    // ===== PHASE 5: DevOps & Cloud Infrastructure =====
    {
        title: "DevOps & Cloud Infrastructure",
        shortTitle: "DevOps & Cloud",
        description: "Master cloud platforms, CI/CD pipelines, and infrastructure as code",
        duration: "6-8 Weeks",
        aiFocus: true,
        topics: [
            {
                title: "Cloud Platforms",
                description: "Deploy and manage applications on major cloud providers",
                subTopics: ["AWS", "Google Cloud", "Azure", "Serverless"],
                aiTool: "AWS CodeWhisperer / Google Cloud AI"
            },
            {
                title: "CI/CD Pipelines",
                description: "Set up continuous integration and deployment",
                subTopics: ["GitHub Actions", "GitLab CI", "Jenkins", "Automated Testing"],
                aiTool: "AI-powered test optimization"
            },
            {
                title: "Infrastructure as Code",
                description: "Define infrastructure using code",
                subTopics: ["Terraform", "AWS CDK", "CloudFormation", "Pulumi"]
            },
            {
                title: "Monitoring & Observability",
                description: "Implement monitoring, logging, and alerting",
                subTopics: ["Prometheus", "Grafana", "ELK Stack", "APM"],
                aiTool: "AI anomaly detection and predictive alerting"
            }
        ],
        projects: [
            {
                icon: "☁️",
                title: "Cloud-Native Application",
                description: "Deploy a full application to AWS with auto-scaling",
                technologies: ["AWS EC2", "RDS", "Load Balancer", "Auto Scaling"],
                aiIntegration: "AI-driven auto-scaling based on traffic patterns"
            },
            {
                icon: "🔁",
                title: "CI/CD Pipeline",
                description: "Set up a complete CI/CD pipeline with testing and deployment",
                technologies: ["GitHub Actions", "Docker", "AWS ECS", "Terraform"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "AWS Documentation", type: "Documentation", link: "https://aws.amazon.com/documentation/" },
            { icon: <FaVideo />, title: "Terraform Tutorials", type: "Course", link: "https://learn.hashicorp.com/terraform" },
            { icon: <FaBook />, title: "Kubernetes Basics", type: "Tutorial", link: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" }
        ],
        checklist: [
            "Deploy application to cloud (AWS/GCP/Azure)",
            "Set up CI/CD pipeline with GitHub Actions",
            "Implement infrastructure as code with Terraform",
            "Set up monitoring with Prometheus & Grafana",
            "Configure auto-scaling and load balancing"
        ]
    },

    // ===== PHASE 6: AI-Powered Backend Development =====
    {
        title: "AI-Powered Backend",
        shortTitle: "AI Backend",
        description: "Integrate AI, LLMs, and intelligent features into backend systems",
        duration: "6-8 Weeks",
        aiFocus: true,
        topics: [
            {
                title: "LLM Integration",
                description: "Integrate Large Language Models into backend services",
                subTopics: ["OpenAI API", "Anthropic Claude", "Llama", "Prompt Engineering"],
                aiTool: "OpenAI / Claude APIs"
            },
            {
                title: "Vector Databases",
                description: "Store and query embeddings for AI applications",
                subTopics: ["Pinecone", "Weaviate", "Qdrant", "Milvus"],
                aiTool: "AI embeddings and similarity search"
            },
            {
                title: "AI Agents & MCP Servers",
                description: "Build AI agents and Model Context Protocol servers",
                subTopics: ["AI Agents", "MCP Servers", "Function Calling", "Tool Use"],
                aiTool: "LangChain / CrewAI"
            },
            {
                title: "AI-Powered Features",
                description: "Add intelligent features to backend applications",
                subTopics: ["Recommendations", "Search", "Content Generation", "Classification"],
                aiTool: "Hugging Face / Replicate"
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "AI Chatbot API",
                description: "Build a backend API for an AI chatbot with RAG",
                technologies: ["Node.js/Python", "OpenAI API", "Vector DB", "RAG"],
                aiIntegration: "Full LLM integration with context retrieval"
            },
            {
                icon: "🔍",
                title: "AI-Powered Search Engine",
                description: "Build a semantic search engine using embeddings",
                technologies: ["Elasticsearch", "Vector DB", "Embeddings", "LLM"],
                aiIntegration: "AI-powered search with natural language queries"
            },
            {
                icon: "🧠",
                title: "MCP Server",
                description: "Build a Model Context Protocol server for AI agents",
                technologies: ["MCP SDK", "Node.js", "Tool Definitions", "AI Agents"],
                aiIntegration: "AI agent tool server"
            }
        ],
        resources: [
            { icon: <FaBook />, title: "OpenAI API Docs", type: "Documentation", link: "https://platform.openai.com/docs" },
            { icon: <FaVideo />, title: "LangChain Tutorials", type: "Course", link: "https://python.langchain.com/docs/get_started/introduction" },
            { icon: <FaBook />, title: "MCP Specification", type: "Protocol", link: "https://modelcontextprotocol.io" },
            { icon: <FaVideo />, title: "Vector Databases", type: "Course", link: "https://www.pinecone.io/learn/vector-database/" }
        ],
        checklist: [
            "Integrate OpenAI/Claude API into backend",
            "Build a RAG system with vector database",
            "Create an AI agent with function calling",
            "Build an MCP server",
            "Deploy an AI-powered feature to production"
        ]
    },

    // ===== PHASE 7: System Design & Advanced Architecture =====
    {
        title: "System Design & Architecture",
        shortTitle: "System Design",
        description: "Master system design, scalability, and advanced architecture patterns",
        duration: "6-8 Weeks",
        aiFocus: true,
        topics: [
            {
                title: "System Design Fundamentals",
                description: "Design scalable, reliable, and maintainable systems",
                subTopics: ["Load Balancing", "Caching", "CDN", "Database Sharding", "Replication"],
                aiTool: "AI system design analysis"
            },
            {
                title: "High-Level Design",
                description: "Design systems for millions of users",
                subTopics: ["Capacity Planning", "API Design", "Data Flow", "Component Design"]
            },
            {
                title: "Performance Optimization",
                description: "Optimize backend performance at scale",
                subTopics: ["Caching Strategies", "Database Indexing", "Query Optimization", "Profiling"],
                aiTool: "AI-powered performance analysis"
            },
            {
                title: "Interview Preparation",
                description: "Prepare for system design interviews",
                subTopics: ["Design Patterns", "Case Studies", "Trade-offs", "Whiteboarding"]
            }
        ],
        projects: [
            {
                icon: "🏗️",
                title: "High-Traffic System Design",
                description: "Design a system for 10M+ daily active users",
                technologies: ["Load Balancing", "Caching", "Sharding", "CDN", "Microservices"],
                aiIntegration: "AI-driven capacity planning and scaling"
            },
            {
                icon: "📈",
                title: "Real-time Analytics System",
                description: "Build a real-time analytics pipeline for millions of events",
                technologies: ["Kafka", "Stream Processing", "ClickHouse", "Redis"],
                aiIntegration: "AI pattern detection in real-time streams"
            }
        ],
        resources: [
            { icon: <FaBook />, title: "System Design Primer", type: "GitHub", link: "https://github.com/donnemartin/system-design-primer" },
            { icon: <FaVideo />, title: "System Design Interview", type: "Course", link: "https://www.youtube.com/c/SystemDesignInterview" },
            { icon: <FaBook />, title: "Designing Data-Intensive Applications", type: "Book", link: "https://dataintensive.net" }
        ],
        checklist: [
            "Design 5+ high-level systems",
            "Handle system design interview questions",
            "Implement advanced caching strategies",
            "Design for high availability and fault tolerance",
            "Prepare case studies of real systems"
        ]
    }
];

const techStack = [
    {
        category: "Backend Languages",
        icon: <FaCode />,
        color: "#E44D26",
        technologies: ["Node.js (TS)", "Python", "Java", "Go", "C#"],
        aiTool: "AI code completion"
    },
    {
        category: "Databases",
        icon: <FaDatabase />,
        color: "#336791",
        technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
        aiTool: "AI query optimization"
    },
    {
        category: "Frameworks",
        icon: <FaServer />,
        color: "#68A063",
        technologies: ["Express.js", "Django", "Spring Boot", "Nest.js", "FastAPI"],
        aiTool: "AI boilerplate generation"
    },
    {
        category: "Cloud & DevOps",
        icon: <FaCloud />,
        color: "#FF9900",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
        aiTool: "AI infrastructure optimization"
    }
];

const careerPaths = [
    {
        icon: "💻",
        title: "Backend Developer",
        description: "Focus on server-side logic, database management, and API development",
        salary: "₹6-15 LPA",
        skills: ["Node.js/Python", "REST APIs", "Database Design", "Authentication", "AI Integration"]
    },
    {
        icon: "☁️",
        title: "Cloud Engineer",
        description: "Specialize in cloud infrastructure, deployment, and scalability",
        salary: "₹10-25 LPA",
        skills: ["AWS/Azure/GCP", "Docker", "Kubernetes", "Terraform", "AI Ops"]
    },
    {
        icon: "🤖",
        title: "AI Backend Engineer",
        description: "Build AI-powered backend systems with LLMs and agents",
        salary: "₹15-35 LPA",
        skills: ["LLM Integration", "Vector DBs", "AI Agents", "MCP Servers", "RAG"]
    },
    {
        icon: "🏗️",
        title: "System Architect",
        description: "Design complex systems and make high-level technical decisions",
        salary: "₹20-45 LPA",
        skills: ["System Design", "Microservices", "Performance", "Security", "AI Architecture"]
    }
];

const tools = [
    { name: "Docker", purpose: "Containerization", useCase: "Package and deploy apps", icon: <FaDocker />, color: "#2496ED" },
    { name: "PostgreSQL", purpose: "Relational Database", useCase: "Structured data storage", icon: <SiPostgresql />, color: "#336791" },
    { name: "Redis", purpose: "In-memory Data Store", useCase: "Caching & session storage", icon: <SiRedis />, color: "#DC382D" },
    { name: "AWS", purpose: "Cloud Platform", useCase: "Infrastructure & services", icon: <FaAws />, color: "#FF9900" },
    { name: "Kubernetes", purpose: "Container Orchestration", useCase: "Managing containerized apps", icon: <SiKubernetes />, color: "#326CE5" },
    { name: "NGINX", purpose: "Web Server & Proxy", useCase: "Load balancing & reverse proxy", icon: <SiNginx />, color: "#009639" },
    { name: "OpenAI", purpose: "LLM Integration", useCase: "AI features & agents", icon: <SiOpenai />, color: "#10A37F" },
    { name: "Terraform", purpose: "Infrastructure as Code", useCase: "Cloud provisioning", icon: <FaCloud />, color: "#7B42BC" },
    { name: "GitHub Actions", purpose: "CI/CD Pipeline", useCase: "Automated deployment", icon: <FaGitAlt />, color: "#181717" }
];

const aiTrends = [
    {
        icon: "🤖",
        title: "AI-Powered Code Generation",
        description: "Backend developers now use AI assistants (Copilot, Cursor) to generate boilerplate, tests, and even complex logic, accelerating development by 40-60%.",
        tags: ["Copilot", "Cursor", "Code Generation", "Productivity"]
    },
    {
        icon: "🧠",
        title: "MCP Servers & AI Agents",
        description: "Model Context Protocol servers enable AI agents to interact with backend systems, making backend developers build tool servers for AI agents.",
        tags: ["MCP Servers", "AI Agents", "Function Calling", "Tool Use"]
    },
    {
        icon: "🔍",
        title: "Vector Databases & RAG",
        description: "Retrieval-Augmented Generation (RAG) systems require backend developers to master vector databases (Pinecone, Weaviate) and embedding pipelines.",
        tags: ["Vector DBs", "RAG", "Embeddings", "Semantic Search"]
    },
    {
        icon: "⚡",
        title: "AI-Optimized Infrastructure",
        description: "Cloud platforms now offer AI-driven auto-scaling, cost optimization, and anomaly detection, changing how backend developers manage infrastructure.",
        tags: ["AI Ops", "Auto-scaling", "Cost Optimization", "Anomaly Detection"]
    },
    {
        icon: "🔒",
        title: "AI Security Challenges",
        description: "Backend developers must now consider prompt injection, data poisoning, and AI-specific security vulnerabilities in their systems.",
        tags: ["AI Security", "Prompt Injection", "Data Privacy", "OWASP Top 10 for LLM"]
    },
    {
        icon: "📊",
        title: "AI-Powered Observability",
        description: "APM tools now use AI to detect anomalies, predict failures, and suggest optimizations, changing how backend engineers monitor systems.",
        tags: ["AI Observability", "Anomaly Detection", "Predictive Alerting", "APM"]
    }
];