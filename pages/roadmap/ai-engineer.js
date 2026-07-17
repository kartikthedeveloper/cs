// pages/roadmaps/ai-engineer.js
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function AiEngineerRoadmap() {
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
                <title>AI Engineer Roadmap 2026 | Complete Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master AI engineering in 2026 with our complete roadmap. Learn Python, ML, deep learning, LLMs, LangChain, MLOps, and build production-ready AI systems."
                />
                <meta
                    name="keywords"
                    content="AI engineer roadmap 2026, artificial intelligence engineering, machine learning, deep learning, LLMs, LangChain, MLOps, AI agents, prompt engineering"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmaps/ai-engineer" />
                <meta property="og:title" content="AI Engineer Roadmap 2026 | Complete Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming an AI engineer in 2026. Master Python, ML, deep learning, LLMs, MLOps, and build production-ready AI systems." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmaps/ai-engineer" />
                <meta property="og:image" content="https://codeskipper.in/og-ai-engineer-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="AI Engineer Roadmap 2026" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming an AI engineer in 2026." />
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
                            "name": "AI Engineer Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming an AI engineer in 2026",
                            "totalTime": "P12M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "INR",
                                "value": "0"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Laptop with 16GB+ RAM (GPU recommended)"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Stable internet connection"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "Python" },
                                { "@type": "HowToTool", "name": "Jupyter Notebook" },
                                { "@type": "HowToTool", "name": "TensorFlow" },
                                { "@type": "HowToTool", "name": "PyTorch" },
                                { "@type": "HowToTool", "name": "LangChain" }
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
                                    "name": "AI Engineer Roadmap",
                                    "item": "https://codeskipper.in/roadmaps/ai-engineer"
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
                            "headline": "AI Engineer Roadmap 2026 - Complete Guide",
                            "description": "Complete step-by-step guide to becoming an AI engineer in 2026.",
                            "author": {
                                "@type": "Organization",
                                "name": "CodeSkipper"
                            },
                            "datePublished": "2026-01-15",
                            "dateModified": "2026-07-15",
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
                <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
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
                                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <span>🚀</span>
                                        Updated for 2026 • Most In-Demand Role
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    AI Engineer
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of building <strong className="text-purple-600">production-ready AI systems</strong>.
                                    From Python foundations to LLMs and AI agents — a systematic 12-month journey to become an AI engineer.
                                </p>

                                {/* AI Domain Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {aiDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl text-purple-500 mb-2">
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
                                            className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100/50"
                                        >
                                            <div className="text-3xl text-purple-600 mb-2">{stat.icon}</div>
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
                                    <span className="text-purple-700 text-xl">🤖</span>
                                    <span className="text-gray-800 font-medium">
                                        The #1 tech job of 2026 • Build the future with AI
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
                                                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <span className="text-purple-600">⏱️</span>
                                                {phase.duration}
                                            </span>
                                            {phase.aiFocus && (
                                                <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                                                    <span>🤖</span> AI Focus
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
                                                <span className="mr-3 text-purple-600">📚</span>
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-purple-500"
                                                    >
                                                        <span className="text-green-500 mt-1 mr-4 flex-shrink-0 text-lg">✅</span>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-800 mb-1">{topic.title}</h4>
                                                            <p className="text-gray-600 text-sm">{topic.description}</p>
                                                            {topic.subTopics && (
                                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                                    {topic.subTopics.map((sub, subIndex) => (
                                                                        <span
                                                                            key={subIndex}
                                                                            className="bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full text-xs font-medium"
                                                                        >
                                                                            {sub}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            {topic.aiTool && (
                                                                <div className="mt-2 flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full inline-flex">
                                                                    <span>🤖</span>
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
                                                <span className="mr-3 text-indigo-600">📊</span>
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
                                                                        <span>🤖</span>
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
                                            className="mt-12 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <span className="mr-3 text-purple-600">✅</span>
                                                Phase Completion Checklist
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {phase.checklist.map((item, index) => (
                                                    <div key={index} className="flex items-center p-2 bg-white/60 rounded-lg">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
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

                    {/* ===== AI ENGINEERING DOMAINS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">AI Engineering Specializations</h2>
                                <p className="text-xl text-gray-600">Core domains in AI engineering</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {aiSpecializations.map((spec, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-100"
                                    >
                                        <div className="text-5xl mb-4 text-purple-600">
                                            {spec.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{spec.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{spec.description}</p>
                                        <div className="space-y-2 text-left">
                                            {spec.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-700">
                                                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== AI TOOLS & ECOSYSTEM ===== */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">AI Engineer Tech Stack 2026</h2>
                                <p className="text-xl text-gray-600">The essential tools, frameworks, and platforms for AI engineering</p>
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
                                        <div className="text-5xl mb-3 text-purple-600">
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">AI Engineering Career Paths</h2>
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
                                        className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-purple-500"
                                    >
                                        <div className="text-5xl mb-4 text-purple-600">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{path.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-purple-600 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium"
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
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Top AI Certifications 2026</h2>
                                <p className="text-xl text-gray-600">Validate your skills with industry-recognized certifications</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200 shadow-xl"
                            >
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                            <span className="text-purple-500 mt-1 mr-3 flex-shrink-0 text-xl">🏆</span>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                                                <p className="text-purple-600 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== FINAL CTA ===== */}
                    <section className="py-24 px-4 bg-gradient-to-r from-purple-700 to-indigo-800 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>

                        <div className="max-w-4xl mx-auto text-center relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-4xl mx-auto mb-6 text-purple-300">🚀</div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Build the <span className="text-yellow-300">Future</span>?
                                </h2>
                            
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <motion.a
                                        href="/mcq"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
                                    >
                                        MCQ's <span>→</span>
                                    </motion.a>
                                    <motion.a
                                        href="/roadmap"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-700 transition-all flex items-center justify-center gap-2"
                                    >
                                        <span>📄</span> All Career Roadmap
                                    </motion.a>
                                </div>
                                <div className="mt-8 flex flex-wrap justify-center gap-6 text-purple-200 text-sm">
                                    <span>✓ Free resources</span>
                                    <span>✓ Real projects</span>
                                    <span>✓ Model deployment</span>
                                    <span>✓ LLM integration</span>
                                    <span>✓ Career guidance</span>
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
// DATA (All icons replaced with emojis)
// ====================================================================

const aiDomains = [
    { name: "Machine Learning", icon: "🧠" },
    { name: "Deep Learning", icon: "⚡" },
    { name: "LLMs", icon: "🤖" },
    { name: "MLOps", icon: "⚙️" }
];

const quickStats = [
    { icon: "⏱️", value: "12 Months", label: "To Complete" },
    { icon: "💻", value: "55+", label: "Skills to Master" },
    { icon: "📊", value: "12+", label: "Projects" },
    { icon: "🎓", value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: Python & Math Foundations =====
    {
        title: "Python & Math Foundations",
        shortTitle: "Foundations",
        description: "Master Python programming and essential mathematics for AI",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Python Programming",
                description: "Master Python for data science and AI",
                subTopics: ["Data Types", "Loops", "Functions", "Classes", "Decorators", "Generators"],
                aiTool: "GitHub Copilot / Cursor AI"
            },
            {
                title: "Data Science Libraries",
                description: "Learn NumPy, Pandas, and Matplotlib",
                subTopics: ["NumPy Arrays", "Pandas DataFrames", "Data Visualization", "EDA"]
            },
            {
                title: "Linear Algebra",
                description: "Vectors, matrices, and operations for ML",
                subTopics: ["Vectors", "Matrices", "Dot Product", "Eigenvalues", "SVD"]
            },
            {
                title: "Calculus & Statistics",
                description: "Derivatives, gradients, and probability for ML",
                subTopics: ["Derivatives", "Gradients", "Probability", "Distributions", "Bayes Theorem"]
            }
        ],
        projects: [
            {
                icon: "📊",
                title: "Data Analysis Project",
                description: "Analyze a dataset using Pandas and visualize insights",
                technologies: ["Python", "Pandas", "Matplotlib", "Seaborn"]
            },
            {
                icon: "🧮",
                title: "Math from Scratch",
                description: "Implement linear algebra operations from scratch",
                technologies: ["Python", "NumPy", "Linear Algebra"]
            }
        ],
        resources: [
            { icon: "📖", title: "Python for Data Science", type: "E-book" },
            { icon: "🎥", title: "Mathematics for ML", type: "Video Series" },
            { icon: "📖", title: "Pandas & NumPy Guide", type: "Documentation" }
        ],
        checklist: [
            "Write Python functions and classes",
            "Work with NumPy arrays and Pandas DataFrames",
            "Visualize data with Matplotlib",
            "Understand matrices and vectors",
            "Perform basic probability calculations"
        ]
    },

    // ===== PHASE 2: Machine Learning Fundamentals =====
    {
        title: "Machine Learning Fundamentals",
        shortTitle: "ML Basics",
        description: "Learn core ML algorithms, evaluation metrics, and model selection",
        duration: "3-4 Months",
        aiFocus: false,
        topics: [
            {
                title: "Supervised Learning",
                description: "Classification and regression algorithms",
                subTopics: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM"]
            },
            {
                title: "Unsupervised Learning",
                description: "Clustering and dimensionality reduction",
                subTopics: ["K-Means", "Hierarchical Clustering", "PCA", "t-SNE", "DBSCAN"]
            },
            {
                title: "Model Evaluation",
                description: "Metrics and validation techniques",
                subTopics: ["Train/Test Split", "Cross-Validation", "Confusion Matrix", "Precision/Recall", "ROC-AUC"]
            },
            {
                title: "Feature Engineering",
                description: "Preprocess and transform data for ML",
                subTopics: ["Scaling", "Encoding", "Feature Selection", "Imputation", "Outlier Detection"]
            }
        ],
        projects: [
            {
                icon: "📈",
                title: "Predictive Modeling",
                description: "Build and compare multiple ML models on a dataset",
                technologies: ["Scikit-learn", "Pandas", "Matplotlib", "XGBoost"],
                aiIntegration: "AI-assisted hyperparameter tuning"
            },
            {
                icon: "🔍",
                title: "Customer Segmentation",
                description: "Use clustering to segment customers",
                technologies: ["K-Means", "PCA", "Seaborn"]
            }
        ],
        resources: [
            { icon: "📖", title: "Introduction to Statistical Learning", type: "Book" },
            { icon: "🎥", title: "Machine Learning Course", type: "Video Series" },
            { icon: "📖", title: "Scikit-learn Guide", type: "Documentation" }
        ],
        checklist: [
            "Implement linear and logistic regression",
            "Build decision trees and random forests",
            "Perform clustering with K-Means",
            "Evaluate models with cross-validation",
            "Apply feature engineering techniques"
        ]
    },

    // ===== PHASE 3: Deep Learning =====
    {
        title: "Deep Learning",
        shortTitle: "Deep Learning",
        description: "Master neural networks, CNNs, RNNs, and Transformers",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Neural Networks",
                description: "Understand perceptrons, activation functions, and backpropagation",
                subTopics: ["Perceptron", "Activation Functions", "Backpropagation", "Optimizers"],
                aiTool: "PyTorch / TensorFlow"
            },
            {
                title: "Convolutional Neural Networks (CNNs)",
                description: "Build image classification and object detection models",
                subTopics: ["Convolutions", "Pooling", "ResNet", "Transfer Learning", "YOLO"]
            },
            {
                title: "Recurrent Neural Networks (RNNs)",
                description: "Sequence models for time series and NLP",
                subTopics: ["LSTM", "GRU", "Seq2Seq", "Attention"]
            },
            {
                title: "Transformers & Attention",
                description: "The architecture behind modern LLMs",
                subTopics: ["Self-Attention", "Multi-Head Attention", "Positional Encoding", "BERT"]
            }
        ],
        projects: [
            {
                icon: "🖼️",
                title: "Image Classifier",
                description: "Build a CNN for image classification with transfer learning",
                technologies: ["PyTorch", "ResNet", "Transfer Learning", "Data Augmentation"],
                aiIntegration: "AI-driven hyperparameter optimization"
            },
            {
                icon: "📝",
                title: "Text Classification",
                description: "Build a text classifier using Transformers",
                technologies: ["BERT", "Transformers Library", "Fine-tuning"]
            }
        ],
        resources: [
            { icon: "📖", title: "Deep Learning Book", type: "Book" },
            { icon: "🎥", title: "PyTorch Deep Learning", type: "Course" },
            { icon: "📖", title: "Transformers Guide", type: "Documentation" }
        ],
        checklist: [
            "Build neural networks from scratch",
            "Train CNNs on image datasets",
            "Use transfer learning with pre-trained models",
            "Implement sequence models with LSTMs",
            "Fine-tune a Transformer model"
        ]
    },

    // ===== PHASE 4: LLMs & Generative AI =====
    {
        title: "LLMs & Generative AI",
        shortTitle: "LLMs & GenAI",
        description: "Master Large Language Models, prompt engineering, RAG, and fine-tuning",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Large Language Models",
                description: "Understand GPT, Claude, Llama, and other LLMs",
                subTopics: ["Architecture", "Training", "Inference", "OpenAI API", "Claude API"],
                aiTool: "OpenAI, Anthropic, Hugging Face"
            },
            {
                title: "Prompt Engineering",
                description: "Design effective prompts for LLMs",
                subTopics: ["Few-shot", "Chain-of-Thought", "ReAct", "Prompt Templates"]
            },
            {
                title: "Retrieval-Augmented Generation (RAG)",
                description: "Build RAG systems with vector databases",
                subTopics: ["Embeddings", "Vector DBs (Pinecone, Weaviate)", "Chunking", "Semantic Search"]
            },
            {
                title: "Fine-tuning & Alignment",
                description: "Fine-tune LLMs for specific tasks",
                subTopics: ["LoRA", "QLoRA", "RLHF", "DPO"]
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "RAG Chatbot",
                description: "Build a document Q&A chatbot with RAG",
                technologies: ["LangChain", "OpenAI API", "Pinecone", "Streamlit"],
                aiIntegration: "Full RAG pipeline with vector search"
            },
            {
                icon: "✍️",
                title: "Content Generator",
                description: "Build an AI content generator with prompt engineering",
                technologies: ["OpenAI API", "LangChain", "Streamlit"]
            }
        ],
        resources: [
            { icon: "📖", title: "LangChain Documentation", type: "Documentation" },
            { icon: "🎥", title: "LLM Engineering Course", type: "Video" },
            { icon: "📖", title: "Prompt Engineering Guide", type: "E-book" }
        ],
        checklist: [
            "Use OpenAI API for text generation",
            "Build a RAG pipeline with LangChain",
            "Implement semantic search with vector DBs",
            "Design effective prompts for tasks",
            "Fine-tune a model with LoRA"
        ]
    },

    // ===== PHASE 5: MLOps & Model Deployment =====
    {
        title: "MLOps & Model Deployment",
        shortTitle: "MLOps",
        description: "Deploy, monitor, and scale ML models in production",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Model Deployment",
                description: "Deploy ML models as APIs",
                subTopics: ["FastAPI", "Flask", "Docker", "Model Serving"],
                aiTool: "AI-powered deployment automation"
            },
            {
                title: "ML Pipelines",
                description: "Build automated ML workflows",
                subTopics: ["Data Pipelines", "Feature Stores", "Model Registry", "Kubeflow"]
            },
            {
                title: "Monitoring & Observability",
                description: "Monitor model performance in production",
                subTopics: ["Data Drift", "Concept Drift", "Performance Metrics", "Alerting"]
            },
            {
                title: "Cloud Platforms",
                description: "Use AWS, GCP, or Azure for AI workloads",
                subTopics: ["SageMaker", "Vertex AI", "Azure ML", "GPU Instances"]
            }
        ],
        projects: [
            {
                icon: "🚀",
                title: "Model Deployment",
                description: "Deploy an ML model as a REST API with FastAPI and Docker",
                technologies: ["FastAPI", "Docker", "AWS/GCP", "CI/CD"],
                aiIntegration: "AI-powered deployment monitoring"
            },
            {
                icon: "📊",
                title: "ML Monitoring Dashboard",
                description: "Build a dashboard to monitor model drift",
                technologies: ["Evidently", "Prometheus", "Grafana"]
            }
        ],
        resources: [
            { icon: "📖", title: "MLOps Guide", type: "E-book" },
            { icon: "🎥", title: "Deploy ML Models", type: "Course" },
            { icon: "📖", title: "Docker for AI", type: "Guide" }
        ],
        checklist: [
            "Deploy a model with FastAPI",
            "Containerize with Docker",
            "Build an automated ML pipeline",
            "Monitor model drift",
            "Deploy on cloud with auto-scaling"
        ]
    },

    // ===== PHASE 6: AI Agents & Advanced Topics =====
    {
        title: "AI Agents & Advanced AI",
        shortTitle: "AI Agents",
        description: "Build AI agents, master MCP servers, reinforcement learning, and advanced AI systems",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "AI Agents & Multi-Agent Systems",
                description: "Build autonomous AI agents",
                subTopics: ["Agent Architecture", "Tool Use", "Function Calling", "CrewAI", "AutoGen"],
                aiTool: "LangChain, CrewAI, AutoGen"
            },
            {
                title: "MCP Servers (Model Context Protocol)",
                description: "Build MCP servers for AI agent tool use",
                subTopics: ["MCP Protocol", "Tool Servers", "Context Management", "Agent Integration"]
            },
            {
                title: "Reinforcement Learning",
                description: "Train agents with RL algorithms",
                subTopics: ["MDP", "Q-Learning", "DQN", "PPO", "RLHF"]
            },
            {
                title: "Multi-modal AI & Edge AI",
                description: "Vision, audio, and edge deployment",
                subTopics: ["CLIP", "Whisper", "Edge Deployment", "ONNX"]
            }
        ],
        projects: [
            {
                icon: "🧠",
                title: "AI Agent System",
                description: "Build a multi-agent system with tool use and MCP",
                technologies: ["LangChain", "CrewAI", "MCP Server", "Function Calling"],
                aiIntegration: "Complete AI agent with tools"
            },
            {
                icon: "🎮",
                title: "RL Game Agent",
                description: "Train an RL agent to play a game",
                technologies: ["Python", "Gym", "DQN", "PyTorch"]
            }
        ],
        resources: [
            { icon: "📖", title: "MCP Specification", type: "Protocol" },
            { icon: "🎥", title: "AI Agents Course", type: "Video" },
            { icon: "📖", title: "RL Guide", type: "E-book" }
        ],
        checklist: [
            "Build an AI agent with tool use",
            "Implement an MCP server",
            "Train a simple RL agent",
            "Build a multi-agent system",
            "Deploy an edge AI model"
        ]
    }
];

const aiSpecializations = [
    {
        domain: "Machine Learning Engineering",
        description: "Build and deploy ML models at scale",
        icon: "🧠",
        skills: ["ML Algorithms", "Feature Engineering", "Model Evaluation", "Scikit-learn", "XGBoost"]
    },
    {
        domain: "Deep Learning Engineering",
        description: "Build deep neural networks for vision, language, and more",
        icon: "⚡",
        skills: ["CNNs", "RNNs", "Transformers", "PyTorch", "TensorFlow"]
    },
    {
        domain: "LLM Engineering",
        description: "Build applications with Large Language Models",
        icon: "🤖",
        skills: ["Prompt Engineering", "RAG", "Fine-tuning", "LangChain", "LLM APIs"]
    },
    {
        domain: "MLOps Engineering",
        description: "Deploy, monitor, and scale ML systems",
        icon: "⚙️",
        skills: ["Docker", "Kubernetes", "CI/CD", "Model Monitoring", "Feature Stores"]
    },
    {
        domain: "AI Agent Engineering",
        description: "Build autonomous AI agents and multi-agent systems",
        icon: "🔗",
        skills: ["Agent Architecture", "Tool Use", "MCP Servers", "CrewAI", "AutoGen"]
    },
    {
        domain: "Responsible AI",
        description: "Build fair, transparent, and ethical AI systems",
        icon: "🛡️",
        skills: ["Bias Detection", "Fairness", "Explainability", "Privacy", "Compliance"]
    }
];

const careerPaths = [
    {
        icon: "🤖",
        title: "AI Engineer",
        description: "Build and deploy production-ready AI systems",
        salary: "₹12-25 LPA",
        skills: ["Python", "ML/DL", "LLMs", "MLOps", "Cloud"]
    },
    {
        icon: "🧠",
        title: "ML Engineer",
        description: "Design and implement machine learning models at scale",
        salary: "₹15-30 LPA",
        skills: ["PyTorch/TensorFlow", "ML Algorithms", "MLOps", "Python", "SQL"]
    },
    {
        icon: "🚀",
        title: "LLM Engineer",
        description: "Build applications with LLMs and generative AI",
        salary: "₹18-35 LPA",
        skills: ["LangChain", "RAG", "Prompt Engineering", "Vector DBs", "Fine-tuning"]
    },
    {
        icon: "🏢",
        title: "AI Research Scientist",
        description: "Push the boundaries of AI through research",
        salary: "₹20-45 LPA",
        skills: ["Research", "Deep Learning", "Mathematics", "PyTorch", "Publications"]
    }
];

const techStack = [
    { name: "Python", category: "Language", icon: "🐍" },
    { name: "PyTorch", category: "DL Framework", icon: "🔥" },
    { name: "TensorFlow", category: "DL Framework", icon: "🧩" },
    { name: "Scikit-learn", category: "ML Library", icon: "📊" },
    { name: "Pandas", category: "Data Processing", icon: "🐼" },
    { name: "NumPy", category: "Data Processing", icon: "🔢" },
    { name: "LangChain", category: "LLM Framework", icon: "⛓️" },
    { name: "Hugging Face", category: "NLP/LLM", icon: "🤗" },
    { name: "OpenAI", category: "LLM API", icon: "🤖" },
    { name: "FastAPI", category: "API Framework", icon: "⚡" },
    { name: "Docker", category: "Containerization", icon: "🐳" },
    { name: "AWS", category: "Cloud Platform", icon: "☁️" },
    { name: "Jupyter", category: "IDE/Notebook", icon: "📓" },
    { name: "Git", category: "Version Control", icon: "🔀" }
];

const certifications = [
    { name: "Google Professional ML Engineer", level: "Advanced", focus: "ML Engineering" },
    { name: "AWS Certified Machine Learning - Specialty", level: "Advanced", focus: "ML on AWS" },
    { name: "Microsoft Azure AI Engineer", level: "Intermediate", focus: "Azure AI" },
    { name: "IBM Applied AI Professional Certificate", level: "Intermediate", focus: "Applied AI" },
    { name: "DeepLearning.AI TensorFlow Developer", level: "Intermediate", focus: "TensorFlow" },
    { name: "DeepLearning.AI PyTorch Developer", level: "Intermediate", focus: "PyTorch" }
];