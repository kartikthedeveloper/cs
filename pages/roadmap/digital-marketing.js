// pages/roadmaps/digital-marketing.js
import { motion } from 'framer-motion';
import {
    FaChartLine,
    FaShareAlt,
    FaUsers,
    FaBullhorn,
    FaSearch,
    FaEnvelope,
    FaHashtag,
    FaCogs,
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
    FaTrophy,
    FaLightbulb,
    FaBrain,
    FaRobot,
    FaMicrochip,
    FaArrowRight,
    FaStar,
    FaCertificate,
    FaGem,
    FaFire,
    FaGlobe,
    FaMobile,
    FaLaptop,
    FaCode,
    FaCloud,
    FaDatabase
} from 'react-icons/fa';
import {
    SiGoogleanalytics,
    SiGoogleads,
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiYoutube,
    SiTiktok,
    SiTwitter,
    SiCanva,
    SiWordpress,
    SiMailchimp
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function DigitalMarketingRoadmap() {
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
                <title>Digital Marketing Roadmap 2026 | AI-Powered Marketing Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master digital marketing in the AI era with our complete 2026 roadmap. Learn SEO, social media, content marketing, paid ads, AI tools, and analytics."
                />
                <meta
                    name="keywords"
                    content="digital marketing roadmap 2026, AI marketing, SEO, social media marketing, content marketing, paid advertising, analytics, marketing automation, GEO"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/digital-marketing" />
                <meta property="og:title" content="Digital Marketing Roadmap 2026 | AI-Powered Marketing Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a digital marketing expert in the AI era. Learn SEO, social media, content, ads, analytics, and automation." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/digital-marketing" />
                <meta property="og:image" content="https://codeskipper.in/og-digital-marketing-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Digital Marketing Roadmap 2026 | AI-Powered Guide" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a digital marketing expert in the AI era." />
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
                            "name": "Digital Marketing Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a digital marketing expert in the AI era",
                            "totalTime": "P10M",
                            "estimatedCost": {
                                "@type": "MonetaryAmount",
                                "currency": "INR",
                                "value": "0"
                            },
                            "supply": [
                                {
                                    "@type": "HowToSupply",
                                    "name": "Laptop with internet connection"
                                },
                                {
                                    "@type": "HowToSupply",
                                    "name": "Analytics tools (Google Analytics, etc.)"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "Google Analytics" },
                                { "@type": "HowToTool", "name": "Google Ads" },
                                { "@type": "HowToTool", "name": "Canva" },
                                { "@type": "HowToTool", "name": "SEMrush" }
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
                                    "name": "Digital Marketing Roadmap",
                                    "item": "https://codeskipper.in/roadmap/digital-marketing"
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
                            "headline": "Digital Marketing Roadmap 2026 - AI-Powered Complete Guide",
                            "description": "Master digital marketing in the AI era with our complete 2026 roadmap. Learn SEO, social media, content, paid ads, analytics, and automation.",
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
                <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-pink-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                                    Digital Marketing
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">
                                        Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of digital marketing in the <strong className="text-orange-600">AI era</strong>.
                                    From SEO and content to paid ads and analytics — a systematic 10-month journey to become a marketing expert.
                                </p>

                                {/* Marketing Domains Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {marketingDomains.map((domain, index) => (
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
                                            <div className="text-3xl text-orange-500 mb-2">{stat.icon}</div>
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
                                        🤖 AI-powered marketing • Predictive analytics • Content generation • Marketing automation
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
                                                ? 'bg-gradient-to-r from-orange-600 to-pink-600 text-white shadow-lg'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-pink-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-500">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-orange-500" />
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
                                                <FaBook className="mr-3 text-orange-500" />
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
                                                <FaProjectDiagram className="mr-3 text-pink-600" />
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
                                                            <div className="bg-pink-100 text-pink-600 p-3 rounded-xl mr-4 text-2xl">
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
                                            className="mt-12 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100"
                                        >
                                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                                <FaCheckCircle className="mr-3 text-orange-500" />
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

                    {/* ===== AI IN MARKETING SECTION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
                                    How AI is Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Digital Marketing</span>
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    The marketing landscape is evolving rapidly. Here's how AI is shaping the future of digital marketing in 2026.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiMarketingTrends.map((trend, index) => (
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

                    {/* ===== MARKETING DOMAINS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Digital Marketing Domains</h2>
                                <p className="text-xl text-gray-600">Core specializations in the digital marketing career</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {marketingDomainsFull.map((domain, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-50 to-orange-50 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-orange-100"
                                    >
                                        <div className="text-5xl mb-4 text-orange-500">
                                            {domain.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{domain.domain}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{domain.description}</p>
                                        <div className="space-y-2 text-left">
                                            {domain.skills.map((skill, skillIndex) => (
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

                    {/* ===== CAREER PATH ===== */}
                    <section className="py-20 px-4 bg-gray-50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-gray-800 mb-6">Digital Marketing Career Paths</h2>
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
                                        <div className="text-5xl mb-4 text-orange-500">{path.icon}</div>
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
                                <p className="text-xl text-gray-600">Industry-standard tools and credentials for digital marketing professionals</p>
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
                                        <div className="text-5xl mb-4 text-orange-500">
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
                                className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-200 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-200">
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

const marketingDomains = [
    { name: "SEO", icon: <FaSearch /> },
    { name: "Content Marketing", icon: <FaBullhorn /> },
    { name: "Social Media", icon: <FaShareAlt /> },
    { name: "Paid Ads", icon: <FaChartLine /> }
];

const quickStats = [
    { icon: <FaClock />, value: "10 Months", label: "To Complete" },
    { icon: <FaBook />, value: "60+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "15+", label: "Projects" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: FOUNDATIONS =====
    {
        title: "Marketing Fundamentals",
        shortTitle: "Foundations",
        description: "Build a strong foundation in marketing principles, consumer psychology, and digital strategy",
        duration: "2-3 Months",
        aiFocus: false,
        topics: [
            {
                title: "Digital Marketing Overview",
                description: "Understand the digital landscape and marketing channels",
                subTopics: ["Inbound vs Outbound", "Customer Journey", "Marketing Funnel", "Digital Ecosystem"]
            },
            {
                title: "Consumer Psychology",
                description: "Learn what drives consumer behavior and decision-making",
                subTopics: ["Buyer Personas", "Pain Points", "Motivation", "Trust Signals"]
            },
            {
                title: "Branding & Positioning",
                description: "Develop brand identity and market positioning strategies",
                subTopics: ["Brand Voice", "USP", "Competitive Analysis", "Storytelling"]
            },
            {
                title: "Marketing Strategy",
                description: "Create comprehensive marketing plans and set measurable goals",
                subTopics: ["SMART Goals", "SWOT Analysis", "Budgeting", "Campaign Planning"],
                aiTool: "AI-powered market analysis tools"
            }
        ],
        projects: [
            {
                icon: "📋",
                title: "Marketing Plan",
                description: "Develop a complete marketing plan for a product or service",
                technologies: ["Market Research", "Persona Creation", "Channel Selection", "Budgeting"]
            },
            {
                icon: "🎯",
                title: "Brand Persona",
                description: "Create detailed buyer personas and brand messaging frameworks",
                technologies: ["Survey Tools", "Analytics", "Empathy Mapping"]
            }
        ],


    },

    // ===== PHASE 2: SEARCH ENGINE OPTIMIZATION (SEO) =====
    {
        title: "Search Engine Optimization",
        shortTitle: "SEO",
        description: "Master on-page, off-page, and technical SEO to drive organic traffic",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "SEO Fundamentals",
                description: "Understand how search engines work and ranking factors",
                subTopics: ["Crawling & Indexing", "Ranking Algorithms", "Keyword Research", "SERP Features"]
            },
            {
                title: "On-Page SEO",
                description: "Optimize website content and meta tags for search engines",
                subTopics: ["Title Tags", "Meta Descriptions", "Header Tags", "Content Optimization"]
            },
            {
                title: "Technical SEO",
                description: "Ensure website structure is search-engine friendly",
                subTopics: ["Site Speed", "Mobile Optimization", "XML Sitemaps", "Schema Markup"],
                aiTool: "AI-powered technical SEO audit tools"
            },
            {
                title: "Off-Page SEO & Link Building",
                description: "Build authority through backlinks and external signals",
                subTopics: ["Link Building Strategies", "Guest Posting", "Social Signals", "Brand Mentions"]
            }
        ],
        projects: [
            {
                icon: "🔍",
                title: "SEO Audit & Optimization",
                description: "Perform a complete SEO audit and optimize a website",
                technologies: ["SEO Tools (SEMrush, Ahrefs)", "Google Search Console", "Screaming Frog"],
                aiIntegration: "AI-driven content optimization recommendations"
            },
            {
                icon: "📈",
                title: "Keyword Strategy",
                description: "Develop a keyword strategy and content plan for a niche",
                technologies: ["Keyword Research Tools", "Competitor Analysis", "Content Gap Analysis"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "SEO Best Practices", type: "Guide" },
            { icon: <FaVideo />, title: "Technical SEO Workshop", type: "Training" },
            { icon: <FaBook />, title: "Link Building Playbook", type: "E-book" }
        ],
        checklist: [
            "Conduct keyword research with intent analysis",
            "Optimize 10+ pages for target keywords",
            "Set up Google Search Console and monitor performance",
            "Implement schema markup on key pages",
            "Build 5+ quality backlinks"
        ]
    },

    // ===== PHASE 3: CONTENT MARKETING =====
    {
        title: "Content Marketing & Storytelling",
        shortTitle: "Content",
        description: "Create compelling content that attracts, engages, and converts audiences",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Content Strategy",
                description: "Plan content that aligns with business goals and audience needs",
                subTopics: ["Content Funnel", "Content Types", "Editorial Calendar", "Content Pillars"]
            },
            {
                title: "Copywriting & Storytelling",
                description: "Write persuasive copy that drives action and builds trust",
                subTopics: ["Headlines", "Persuasive Writing", "Emotional Triggers", "Call-to-Action"]
            },
            {
                title: "Visual Content",
                description: "Create engaging images, videos, and infographics",
                subTopics: ["Graphic Design", "Video Production", "Infographics", "Interactive Content"],
                aiTool: "AI design tools (Canva AI, Midjourney)"
            },
            {
                title: "Content Distribution",
                description: "Amplify content reach through multiple channels",
                subTopics: ["Social Media Promotion", "Email Marketing", "Syndication", "Paid Distribution"]
            }
        ],
        projects: [
            {
                icon: "✍️",
                title: "Content Campaign",
                description: "Plan and execute a multi-channel content campaign",
                technologies: ["Blog Posts", "Videos", "Infographics", "Email Series"],
                aiIntegration: "AI content generation and optimization"
            },
            {
                icon: "📝",
                title: "Copywriting Portfolio",
                description: "Create a portfolio of persuasive copy for different platforms",
                technologies: ["Landing Pages", "Email", "Ad Copy", "Social Posts"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Content Strategy Framework", type: "Guide" },
            { icon: <FaVideo />, title: "Copywriting Masterclass", type: "Course" },
            { icon: <FaBook />, title: "Visual Content Guide", type: "E-book" }
        ],
        checklist: [
            "Create a 3-month content calendar",
            "Write 10+ blog posts (optimized for SEO)",
            "Design 5+ visual assets (graphics/videos)",
            "Distribute content on social media and email",
            "Measure content performance (views, engagement, conversions)"
        ]
    },

    // ===== PHASE 4: SOCIAL MEDIA & INFLUENCER MARKETING =====
    {
        title: "Social Media & Influencer Marketing",
        shortTitle: "Social Media",
        description: "Build brand presence, engage communities, and collaborate with influencers",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Social Media Strategy",
                description: "Select platforms and develop a social media strategy",
                subTopics: ["Platform Selection", "Content Mix", "Posting Frequency", "Community Management"]
            },
            {
                title: "Organic Social Media",
                description: "Grow followers and engagement organically",
                subTopics: ["Hashtag Strategy", "User-Generated Content", "Stories & Reels", "Live Streaming"]
            },
            {
                title: "Paid Social Advertising",
                description: "Run effective paid campaigns on social platforms",
                subTopics: ["Ad Formats", "Targeting", "Budgeting", "Retargeting"],
                aiTool: "AI ad optimization tools"
            },
            {
                title: "Influencer Collaboration",
                description: "Identify and partner with influencers for brand amplification",
                subTopics: ["Influencer Identification", "Campaign Design", "ROI Measurement", "Compliance"]
            }
        ],
        projects: [
            {
                icon: "📱",
                title: "Social Media Campaign",
                description: "Create and execute a social media campaign with organic and paid components",
                technologies: ["Instagram/Facebook Ads", "TikTok", "LinkedIn", "Influencer Outreach"],
                aiIntegration: "AI-powered audience targeting and content scheduling"
            },
            {
                icon: "🤝",
                title: "Influencer Marketing Campaign",
                description: "Plan and execute a campaign with 3-5 micro-influencers",
                technologies: ["Influencer Platforms", "Content Tracking", "ROI Analysis"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Social Media Playbook", type: "Guide" },
            { icon: <FaVideo />, title: "Paid Social Advertising", type: "Course" },
            { icon: <FaBook />, title: "Influencer Marketing 101", type: "E-book" }
        ],
        checklist: [
            "Set up social media profiles on 3+ platforms",
            "Create 30 days of content for one platform",
            "Run a paid social ad campaign with $100 budget",
            "Collaborate with at least one influencer",
            "Track engagement and conversion metrics"
        ]
    },

    // ===== PHASE 5: PAID ADVERTISING & PPC =====
    {
        title: "Paid Advertising & PPC",
        shortTitle: "Paid Ads",
        description: "Master pay-per-click advertising on search engines and social platforms",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Google Ads (Search & Display)",
                description: "Run effective campaigns on Google's advertising network",
                subTopics: ["Keyword Planning", "Ad Copy", "Bidding Strategies", "Quality Score", "Display Network"]
            },
            {
                title: "Paid Social Ads",
                description: "Leverage Facebook, Instagram, LinkedIn, and TikTok ads",
                subTopics: ["Audience Targeting", "Ad Formats", "Budget Optimization", "Retargeting Pixels"],
                aiTool: "AI-driven ad creation and A/B testing"
            },
            {
                title: "PPC Analytics & Optimization",
                description: "Analyze campaign performance and optimize for ROI",
                subTopics: ["CTR", "Conversion Rate", "Cost-per-Click", "ROAS", "Landing Page Optimization"]
            },
            {
                title: "Remarketing & Retargeting",
                description: "Re-engage website visitors and past customers",
                subTopics: ["Pixel Implementation", "Audience Segmentation", "Dynamic Ads", "Sequence Campaigns"]
            }
        ],
        projects: [
            {
                icon: "💰",
                title: "Google Ads Campaign",
                description: "Plan and run a Google Ads campaign from scratch",
                technologies: ["Google Ads", "Keyword Planner", "Landing Pages", "Conversion Tracking"],
                aiIntegration: "AI-powered bid optimization and ad copy testing"
            },
            {
                icon: "📊",
                title: "Full Funnel PPC Strategy",
                description: "Design a multi-platform paid advertising funnel",
                technologies: ["Google Ads", "Facebook Ads", "Retargeting", "Analytics"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Google Ads Handbook", type: "Guide" },
            { icon: <FaVideo />, title: "PPC Masterclass", type: "Course" },
            { icon: <FaBook />, title: "Landing Page Optimization", type: "E-book" }
        ],
        checklist: [
            "Set up Google Ads account and run a search campaign",
            "Launch a Facebook/Instagram ad campaign",
            "Optimize ad copy and landing pages for conversion",
            "Implement conversion tracking and pixels",
            "Analyze campaign data and adjust bidding"
        ]
    },

    // ===== PHASE 6: ANALYTICS & DATA-DRIVEN MARKETING =====
    {
        title: "Analytics & Data-Driven Marketing",
        shortTitle: "Analytics",
        description: "Use data to make informed marketing decisions and prove ROI",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Web Analytics",
                description: "Track and analyze website traffic and user behavior",
                subTopics: ["Google Analytics", "Event Tracking", "Goals & Conversions", "Funnel Analysis"]
            },
            {
                title: "Marketing Dashboards",
                description: "Build dashboards to visualize key marketing metrics",
                subTopics: ["KPI Selection", "Data Visualization", "Reporting Tools", "Custom Dashboards"],
                aiTool: "AI-powered predictive analytics"
            },
            {
                title: "A/B Testing & Experimentation",
                description: "Run experiments to optimize marketing performance",
                subTopics: ["Hypothesis Testing", "Split Testing", "Statistical Significance", "Variant Testing"]
            },
            {
                title: "Attribution Modeling",
                description: "Understand the customer journey and allocate credit to channels",
                subTopics: ["Last-Click", "Multi-Touch", "Data-Driven Attribution", "Incrementality"]
            }
        ],
        projects: [
            {
                icon: "📈",
                title: "Analytics Dashboard",
                description: "Build a comprehensive marketing dashboard using Google Data Studio or Tableau",
                technologies: ["Google Analytics", "Data Studio", "Excel/CSV", "SQL"],
                aiIntegration: "AI-powered insights and anomaly detection"
            },
            {
                icon: "🔬",
                title: "A/B Test",
                description: "Design and run an A/B test on a landing page or email",
                technologies: ["Optimizely", "Google Optimize", "Email Marketing Tools"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Google Analytics Guide", type: "Documentation" },
            { icon: <FaVideo />, title: "Data Storytelling", type: "Course" },
            { icon: <FaBook />, title: "Attribution Modeling", type: "E-book" }
        ],
        checklist: [
            "Set up Google Analytics 4 with event tracking",
            "Create a marketing dashboard with 10+ KPIs",
            "Run an A/B test and analyze results",
            "Implement UTM tracking for all campaigns",
            "Build a simple attribution model"
        ]
    },

    // ===== PHASE 7: AI & MARKETING AUTOMATION =====
    {
        title: "AI & Marketing Automation",
        shortTitle: "AI Automation",
        description: "Leverage AI tools and automation to scale marketing efforts",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Marketing Automation Platforms",
                description: "Use platforms like HubSpot, Mailchimp, and Marketo",
                subTopics: ["Email Automation", "Lead Nurturing", "Workflow Building", "CRM Integration"],
                aiTool: "AI-driven personalization and segmentation"
            },
            {
                title: "AI Content Generation",
                description: "Use AI to generate and optimize content at scale",
                subTopics: ["AI Copywriting", "AI Video Creation", "Content Repurposing", "SEO Optimization"],
                aiTool: "ChatGPT, Copy.ai, Jasper"
            },
            {
                title: "Predictive Analytics & Personalization",
                description: "Use AI to predict customer behavior and deliver personalized experiences",
                subTopics: ["Predictive Scoring", "Recommendation Engines", "Dynamic Content", "Customer Segmentation"]
            },
            {
                title: "Chatbots & Conversational Marketing",
                description: "Implement AI chatbots for customer engagement and lead qualification",
                subTopics: ["Chatbot Builders", "NLP", "Lead Qualification", "Automated Support"]
            }
        ],
        projects: [
            {
                icon: "🤖",
                title: "Marketing Automation Workflow",
                description: "Build an automated email nurture sequence with segmentation",
                technologies: ["Mailchimp/HubSpot", "CRM", "Lead Scoring", "A/B Testing"],
                aiIntegration: "AI-powered send-time optimization and personalization"
            },
            {
                icon: "💬",
                title: "AI Chatbot Implementation",
                description: "Create and deploy a chatbot for lead generation",
                technologies: ["Dialogflow", "ManyChat", "Webhook Integration", "Analytics"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Marketing Automation Guide", type: "E-book" },
            { icon: <FaVideo />, title: "AI Marketing Course", type: "Course" },
            { icon: <FaBook />, title: "Chatbot Playbook", type: "Guide" }
        ],
        checklist: [
            "Set up an automation workflow with 5+ steps",
            "Create an AI-generated content piece and optimize",
            "Implement predictive lead scoring",
            "Deploy a chatbot and measure conversion",
            "Integrate automation with CRM"
        ]
    },

    // ===== PHASE 8: ADVANCED STRATEGY & FUTURE TRENDS =====
    {
        title: "Advanced Strategy & Future Trends",
        shortTitle: "Advanced",
        description: "Master advanced strategies, emerging trends, and become a marketing leader",
        duration: "2-3 Months",
        aiFocus: true,
        topics: [
            {
                title: "Omnichannel Marketing",
                description: "Create seamless customer experiences across all touchpoints",
                subTopics: ["Channel Integration", "Customer Journey Mapping", "Consistent Messaging", "Cross-channel Attribution"]
            },
            {
                title: "Growth Hacking",
                description: "Use creative, low-cost experiments to drive rapid growth",
                subTopics: ["Virality", "Funnel Optimization", "Referral Programs", "Community Building"]
            },
            {
                title: "Marketing Leadership & Management",
                description: "Lead marketing teams and manage budgets effectively",
                subTopics: ["Team Management", "Budgeting", "Strategy Development", "Stakeholder Communication"]
            },
            {
                title: "Future Trends (Web3, Metaverse, Privacy)",
                description: "Stay ahead of emerging trends in digital marketing",
                subTopics: ["Web3 Marketing", "Metaverse", "Cookieless Future", "Privacy-first Marketing"],
                aiTool: "AI trend prediction"
            }
        ],
        projects: [
            {
                icon: "🚀",
                title: "Omnichannel Campaign",
                description: "Design and execute a campaign across 5+ channels with unified messaging",
                technologies: ["Email", "Social", "Paid Ads", "Content", "Offline"],
                aiIntegration: "AI-powered cross-channel optimization"
            },
            {
                icon: "📢",
                title: "Growth Campaign",
                description: "Launch a growth experiment with a referral or viral loop",
                technologies: ["Referral Tools", "Analytics", "Landing Pages", "Tracking"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Growth Hacking Framework", type: "Guide" },
            { icon: <FaVideo />, title: "Marketing Leadership", type: "Course" },
            { icon: <FaBook />, title: "Future of Marketing", type: "E-book" }
        ],
        checklist: [
            "Develop a comprehensive omnichannel strategy",
            "Launch a growth experiment with measurable results",
            "Create a marketing budget and ROI projection",
            "Stay updated on privacy regulations (GDPR, CCPA)",
            "Build a personal brand as a marketing expert"
        ]
    }
];

const marketingDomainsFull = [
    {
        domain: "Search Engine Optimization",
        description: "Drive organic traffic through search engines",
        icon: <FaSearch />,
        skills: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"]
    },
    {
        domain: "Content Marketing",
        description: "Create and distribute valuable content to attract and retain customers",
        icon: <FaBullhorn />,
        skills: ["Content Strategy", "Copywriting", "Visual Content", "Storytelling", "Video Marketing"]
    },
    {
        domain: "Social Media Marketing",
        description: "Build brand presence and engage audiences on social platforms",
        icon: <FaShareAlt />,
        skills: ["Platform Strategy", "Content Creation", "Community Management", "Paid Social", "Influencer Marketing"]
    },
    {
        domain: "Paid Advertising",
        description: "Drive targeted traffic and conversions through paid channels",
        icon: <FaChartLine />,
        skills: ["Google Ads", "Facebook Ads", "Display Advertising", "Retargeting", "Programmatic"]
    },
    {
        domain: "Email Marketing",
        description: "Nurture leads and engage customers through email",
        icon: <FaEnvelope />,
        skills: ["Email Campaigns", "Automation", "Segmentation", "Deliverability", "A/B Testing"]
    },
    {
        domain: "Analytics & Data",
        description: "Measure and optimize marketing performance with data",
        icon: <FaDatabase />,
        skills: ["Web Analytics", "Dashboards", "A/B Testing", "Attribution", "Customer Data"]
    }
];

const careerPaths = [
    {
        icon: "📊",
        title: "Digital Marketing Specialist",
        description: "Manage and execute digital marketing campaigns across multiple channels",
        salary: "₹5-12 LPA",
        skills: ["SEO", "Content", "Social Media", "Email", "Analytics"]
    },
    {
        icon: "📈",
        title: "SEO Manager",
        description: "Lead SEO strategy and drive organic growth for websites",
        salary: "₹8-18 LPA",
        skills: ["SEO", "Content Strategy", "Technical SEO", "Link Building", "Analytics"]
    },
    {
        icon: "💰",
        title: "PPC Specialist",
        description: "Manage paid advertising campaigns on Google, Facebook, and other platforms",
        salary: "₹6-15 LPA",
        skills: ["Google Ads", "Facebook Ads", "Bid Management", "Conversion Optimization", "Analytics"]
    },
    {
        icon: "🤖",
        title: "AI Marketing Specialist",
        description: "Leverage AI tools and automation to optimize marketing performance",
        salary: "₹10-22 LPA",
        skills: ["AI Content", "Automation", "Predictive Analytics", "Chatbots", "Data Science"]
    }
];

const tools = [
    { name: "Google Analytics", purpose: "Web Analytics", icon: <SiGoogleanalytics /> },
    { name: "Google Ads", purpose: "PPC Advertising", icon: <SiGoogleads /> },
    { name: "Canva", purpose: "Design & Visual Content", icon: <SiCanva /> },
    { name: "SEMrush", purpose: "SEO & Competitor Research", icon: <FaSearch /> },
    { name: "HubSpot", purpose: "Marketing Automation", icon: <FaCogs /> },
    { name: "Mailchimp", purpose: "Email Marketing", icon: <SiMailchimp /> },
    { name: "WordPress", purpose: "Content Management", icon: <SiWordpress /> },
    { name: "Facebook Ads Manager", purpose: "Paid Social", icon: <SiFacebook /> }
];

const certifications = [
    { name: "Google Analytics Individual Qualification", level: "Intermediate", focus: "Analytics" },
    { name: "Google Ads Certification", level: "Intermediate", focus: "Paid Search" },
    { name: "HubSpot Content Marketing Certification", level: "Entry", focus: "Content" },
    { name: "Facebook Blueprint Certification", level: "Intermediate", focus: "Paid Social" },
    { name: "SEO Specialist Certification", level: "Intermediate", focus: "SEO" },
    { name: "Digital Marketing Institute (DMI) Certification", level: "Advanced", focus: "Digital Strategy" }
];

const aiMarketingTrends = [
    {
        icon: "📝",
        title: "AI Content Generation",
        description: "Generative AI tools create high-quality copy, blog posts, and creative assets at scale, enabling marketers to produce more content faster.",
        tags: ["ChatGPT", "Jasper", "Copy.ai", "Content Automation"]
    },
    {
        icon: "📊",
        title: "Predictive Analytics",
        description: "AI models predict customer behavior, lifetime value, and churn, allowing marketers to proactively adjust strategies for maximum ROI.",
        tags: ["Predictive Modeling", "Customer Scoring", "Churn Prevention", "LTV Prediction"]
    },
    {
        icon: "🤖",
        title: "Hyper-Personalization",
        description: "AI-driven personalization delivers tailored content, product recommendations, and offers in real-time across all channels.",
        tags: ["Personalization", "Recommendation Engines", "Dynamic Content", "Segmentation"]
    },
    {
        icon: "📱",
        title: "AI-Powered Chatbots",
        description: "Advanced NLP chatbots engage customers 24/7, qualify leads, and resolve support queries, increasing conversion and satisfaction.",
        tags: ["Conversational AI", "Lead Qualification", "Customer Support", "NLP"]
    },
    {
        icon: "📈",
        title: "Automated Ad Optimization",
        description: "AI algorithms automatically adjust bidding, targeting, and creative to maximize ad performance and reduce wasted spend.",
        tags: ["Programmatic", "Smart Bidding", "Creative Testing", "ROAS Optimization"]
    },
    {
        icon: "🔮",
        title: "Voice & Visual Search",
        description: "AI-powered voice and image search are changing how users find products, requiring marketers to optimize for new search modalities.",
        tags: ["Voice Search", "Visual Search", "SEO", "User Experience"]
    }
];