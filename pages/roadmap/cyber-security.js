// pages/roadmaps/cyber-security-expert.js
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaLock,
    FaUserSecret,
    FaCode,
    FaNetworkWired,
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
    FaLinux,
    FaWindows,
    FaCloud,
    FaDatabase,
    FaMobile,
    FaBrain,
    FaRobot,
    FaMicrochip,
    FaChartLine,
    FaArrowRight,
    FaLaptop,
    FaServer,
    FaBug,
    FaSkull,
    FaEye,
    FaUserShield,
    FaCrown,
    FaInfinity,
    FaLightbulb,
    FaStar,
    FaCertificate,
    FaGem,
    FaMagic,
    FaFire,
    FaTrophy,
    FaGlobe
} from 'react-icons/fa';
import {
    SiPython,
    SiWindows,
    SiLinux,
    SiDocker,
    SiAmazonaws,
    SiGooglecloud,
    SiSplunk,
    SiOpenai,
} from 'react-icons/si';
import Head from 'next/head';
import { useState } from 'react';
import RoadmapLayout from "@/components/layouts/RoadmapLayout";

export default function CyberSecurityExpertRoadmap() {
    const [activePhase, setActivePhase] = useState(0);

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

    return (
        <>
            <Head>
                <title>Cyber Security Expert Roadmap 2026 | AI-Powered Security Guide | CodeSkipper</title>
                <meta
                    name="description"
                    content="Master cyber security in the AI era with our complete 2026 roadmap. Learn ethical hacking, AI-driven threat detection, penetration testing, digital forensics & cloud security."
                />
                <meta
                    name="keywords"
                    content="cyber security roadmap 2026, AI security, ethical hacking, penetration testing, network security, digital forensics, cloud security, security certifications, CISSP, OSCP"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.in/roadmap/cyber-security" />
                <meta property="og:title" content="Cyber Security Expert Roadmap 2026 | AI-Powered Security Guide" />
                <meta property="og:description" content="Complete step-by-step guide to becoming a cyber security expert in the AI era. Learn ethical hacking, AI threat detection, forensics, and cloud security." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://codeskipper.in/roadmap/cyber-security" />
                <meta property="og:image" content="https://codeskipper.in/og-cyber-security-roadmap.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cyber Security Expert Roadmap 2026 | AI-Powered Guide" />
                <meta name="twitter:description" content="Complete step-by-step guide to becoming a cyber security expert in the AI era." />
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
                            "name": "Cyber Security Expert Roadmap 2026",
                            "description": "Complete step-by-step guide to becoming a cyber security expert in the AI era",
                            "totalTime": "P12M",
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
                                    "name": "Virtualization software (VMware/VirtualBox)"
                                }
                            ],
                            "tool": [
                                { "@type": "HowToTool", "name": "Kali Linux" },
                                { "@type": "HowToTool", "name": "Wireshark" },
                                { "@type": "HowToTool", "name": "Metasploit" },
                                { "@type": "HowToTool", "name": "Burp Suite" }
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
                                    "name": "Cyber Security Roadmap",
                                    "item": "https://codeskipper.in/roadmap/cyber-security"
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
                            "headline": "Cyber Security Expert Roadmap 2026 - AI-Powered Complete Guide",
                            "description": "Master cyber security in the AI era with our complete 2026 roadmap. Learn ethical hacking, AI-driven threat detection, penetration testing, digital forensics & cloud security.",
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
                <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
                    {/* ===== HERO SECTION ===== */}
                    <section className="relative pt-28 pb-20 px-4 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-y-3 scale-110"></div>
                        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>

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
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaRocket className="text-sm" />
                                        Updated for 2026 • AI Era
                                    </span>
                                </motion.div>

                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                    Cyber Security
                                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                        Expert Roadmap 2026
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    Master the art of protecting digital assets in the <strong className="text-blue-400">AI era</strong>.
                                    From fundamentals to advanced threat hunting — a systematic 12-month journey to become a security guardian.
                                </p>

                                {/* Security Domains Icons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-center items-center gap-8 mt-12 flex-wrap"
                                >
                                    {securityDomains.map((domain, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className="text-center"
                                        >
                                            <div className="text-4xl text-blue-400 mb-2">
                                                {domain.icon}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-300">{domain.name}</div>
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
                                            className="text-center p-4 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700"
                                        >
                                            <div className="text-3xl text-blue-400 mb-2">{stat.icon}</div>
                                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-gray-400 text-sm">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* AI Era Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/50 to-pink-900/50 px-6 py-3 rounded-full shadow-md border border-purple-500/30"
                                >
                                    <FaRobot className="text-purple-400 text-xl" />
                                    <span className="text-gray-200 font-medium">
                                        🤖 AI-powered threat detection • Adversarial AI • Automated SOAR • ML Security
                                    </span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== ROADMAP NAVIGATION ===== */}
                    <section className="py-6 px-4 bg-gray-800/90 backdrop-blur-sm sticky top-0 z-40 shadow-lg border-b border-gray-700">
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
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                            activePhase === index ? 'bg-white/20 text-white' : 'bg-gray-600 text-gray-400'
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
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-3xl font-bold mb-4 shadow-xl">
                                            {phaseIndex + 1}
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{phase.title}</h2>
                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{phase.description}</p>
                                        <div className="flex items-center justify-center gap-6 mt-4 text-gray-400">
                                            <span className="flex items-center gap-2">
                                                <FaClock className="text-blue-400" />
                                                {phase.duration}
                                            </span>
                                            {phase.aiFocus && (
                                                <span className="flex items-center gap-2 bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
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
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaBook className="mr-3 text-blue-400" />
                                                Core Concepts & Skills
                                            </h3>
                                            <div className="space-y-4">
                                                {phase.topics.map((topic, topicIndex) => (
                                                    <motion.div
                                                        key={topicIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 8 }}
                                                        className="flex items-start p-5 bg-gray-800/80 rounded-xl shadow-lg hover:shadow-xl transition-all border-l-4 border-blue-500 border border-gray-700"
                                                    >
                                                        <FaCheckCircle className="text-green-500 mt-1 mr-4 flex-shrink-0 text-lg" />
                                                        <div>
                                                            <h4 className="font-semibold text-white mb-1">{topic.title}</h4>
                                                            <p className="text-gray-400 text-sm">{topic.description}</p>
                                                            {topic.subTopics && (
                                                                <div className="mt-2 flex flex-wrap gap-1.5">
                                                                    {topic.subTopics.map((sub, subIndex) => (
                                                                        <span
                                                                            key={subIndex}
                                                                            className="bg-blue-900/50 text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-700/30"
                                                                        >
                                                                            {sub}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            )}
                                                            {topic.aiTool && (
                                                                <div className="mt-2 flex items-center gap-1 text-xs text-purple-300 bg-purple-900/40 px-2 py-1 rounded-full inline-flex border border-purple-500/30">
                                                                    <FaRobot className="text-purple-400" />
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
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaProjectDiagram className="mr-3 text-purple-400" />
                                                Hands-on Labs & Projects
                                            </h3>
                                            <div className="space-y-4 mb-8">
                                                {phase.projects.map((project, projectIndex) => (
                                                    <motion.div
                                                        key={projectIndex}
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02 }}
                                                        className="bg-gray-800/80 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-700"
                                                    >
                                                        <div className="flex items-start">
                                                            <div className="bg-purple-900/50 text-purple-400 p-3 rounded-xl mr-4 text-2xl border border-purple-500/30">
                                                                {project.icon}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-white mb-1">{project.title}</h4>
                                                                <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {project.technologies.map((tech, techIndex) => (
                                                                        <span
                                                                            key={techIndex}
                                                                            className="bg-gray-700 text-gray-300 px-2.5 py-1 rounded-full text-xs font-medium"
                                                                        >
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                                {project.aiIntegration && (
                                                                    <div className="mt-2 text-xs text-purple-300 bg-purple-900/40 px-3 py-1 rounded-full inline-flex items-center gap-1 border border-purple-500/30">
                                                                        <FaRobot className="text-purple-400" />
                                                                        {project.aiIntegration}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Learning Resources */}
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <FaVideo className="mr-3 text-blue-400" />
                                                Learning Resources
                                            </h3>
                                            <div className="space-y-3">
                                                {phase.resources.map((resource, resourceIndex) => (
                                                    <motion.a
                                                        key={resourceIndex}
                                                        href={resource.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        variants={itemVariants}
                                                        whileHover={{ scale: 1.02, x: 5 }}
                                                        className="flex items-center p-4 bg-gray-800/80 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 border border-gray-700"
                                                    >
                                                        <div className="text-blue-400 mr-3 text-xl">{resource.icon}</div>
                                                        <div className="flex-1">
                                                            <div className="font-semibold text-white">{resource.title}</div>
                                                            <div className="text-gray-400 text-sm">{resource.type}</div>
                                                        </div>
                                                        <FaExternalLinkAlt className="text-gray-500" />
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>

        
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ===== AI IN CYBER SECURITY SECTION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-purple-900/30">
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
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    How AI is Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cyber Security</span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                    The security landscape is evolving rapidly. Here's how AI is shaping the future of cyber defense in 2026.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {aiSecurityTrends.map((trend, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03, y: -4 }}
                                        className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-purple-700/30 backdrop-blur-sm"
                                    >
                                        <div className="text-4xl mb-4 text-purple-400">{trend.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{trend.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{trend.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {trend.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="bg-purple-900/50 text-purple-300 px-2.5 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== SECURITY DOMAINS ===== */}
                    <section className="py-20 px-4 bg-gray-800/50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Cyber Security Domains</h2>
                                <p className="text-xl text-gray-300">Major specializations in the security career</p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {cyberSecurityDomains.map((domain, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gradient-to-br from-gray-800 to-blue-900/20 p-6 rounded-2xl text-center hover:shadow-xl transition-all border border-gray-700"
                                    >
                                        <div className="text-5xl mb-4 text-blue-400">
                                            {domain.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{domain.domain}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{domain.description}</p>
                                        <div className="space-y-2 text-left">
                                            {domain.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center text-sm text-gray-300">
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
                    <section className="py-20 px-4 bg-gray-900/50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Cyber Security Career Paths</h2>
                                <p className="text-xl text-gray-300">High-demand roles and growth opportunities in 2026</p>
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
                                        className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-500 border border-gray-700"
                                    >
                                        <div className="text-5xl mb-4 text-blue-400">{path.icon}</div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{path.title}</h3>
                                        <p className="text-gray-400 leading-relaxed mb-4">{path.description}</p>
                                        <div className="text-xl font-bold text-blue-400 mb-4">{path.salary}</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {path.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-700/30"
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
                    <section className="py-20 px-4 bg-gray-800/50">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">Essential Tools & Certifications</h2>
                                <p className="text-xl text-gray-300">Industry-standard tools and credentials for cyber security professionals</p>
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
                                        className="bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-600 text-center hover:shadow-xl transition-all"
                                    >
                                        <div className="text-5xl mb-4 text-blue-400">
                                            {tool.icon}
                                        </div>
                                        <h3 className="font-bold text-white mb-1">{tool.name}</h3>
                                        <p className="text-gray-400 text-sm">{tool.purpose}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 border border-blue-700 shadow-xl"
                            >
                                <h3 className="text-2xl font-bold text-white mb-6 text-center">Top Industry Certifications</h3>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {certifications.map((cert, index) => (
                                        <div key={index} className="flex items-start bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                            <FaCertificate className="text-blue-400 mt-1 mr-3 flex-shrink-0 text-xl" />
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                                                <p className="text-blue-300 text-sm">{cert.level} • {cert.focus}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== FINAL CTA ===== */}
   
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

const securityDomains = [
    { name: "Network Security", icon: <FaNetworkWired /> },
    { name: "Ethical Hacking", icon: <FaUserSecret /> },
    { name: "Digital Forensics", icon: <FaLock /> },
    { name: "Cloud Security", icon: <FaCloud /> }
];

const quickStats = [
    { icon: <FaClock />, value: "12 Months", label: "To Complete" },
    { icon: <FaCode />, value: "80+", label: "Skills to Master" },
    { icon: <FaProjectDiagram />, value: "25+", label: "Hands-on Labs" },
    { icon: <FaGraduationCap />, value: "100%", label: "Industry Ready" }
];

const roadmapPhases = [
    // ===== PHASE 1: FOUNDATIONS & NETWORKING =====
    {
        title: "Foundations & Networking",
        shortTitle: "Foundations",
        description: "Build a rock-solid foundation in IT, networking, and basic security principles",
        duration: "3-4 Months",
        aiFocus: false,
        topics: [
            {
                title: "Networking Fundamentals",
                description: "Master TCP/IP, network protocols, and architecture",
                subTopics: ["TCP/IP Model", "Subnetting", "DNS", "DHCP", "HTTP/HTTPS"]
            },
            {
                title: "Operating Systems Security",
                description: "Learn Linux and Windows administration with a security mindset",
                subTopics: ["Linux Commands", "Windows Server", "User Management", "File Permissions"]
            },
            {
                title: "Security Concepts",
                description: "Understand core security principles and terminology",
                subTopics: ["CIA Triad", "Risk Management", "Security Policies", "Threat Landscape"]
            },
            {
                title: "Scripting for Security",
                description: "Learn scripting languages for automation and security tasks",
                subTopics: ["Python", "Bash", "PowerShell", "Regular Expressions"],
                aiTool: "GitHub Copilot for scripting"
            }
        ],
        projects: [
            {
                icon: "🖥️",
                title: "Home Lab Setup",
                description: "Build a virtual lab with multiple VMs for practice",
                technologies: ["VirtualBox/VMware", "Linux", "Windows Server", "Networking"],
                aiIntegration: "AI-assisted lab setup guides"
            },
            {
                icon: "🔧",
                title: "Network Scanner",
                description: "Create a Python-based network scanner tool",
                technologies: ["Python", "Socket Programming", "Network Protocols"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Network+ Guide", type: "Study Guide", link: "https://www.comptia.org/certifications/network" },
           ],
        checklist: [
            "Set up virtual lab environment",
            "Master basic Linux and Windows commands",
            "Understand TCP/IP model and protocols",
            "Write basic Python/Bash scripts",
            "Configure network services securely"
        ]
    },

    // ===== PHASE 2: SYSTEM HARDENING & SECURITY CONTROLS =====
    {
        title: "System Hardening & Controls",
        shortTitle: "Hardening",
        description: "Learn to secure operating systems and implement robust security controls",
        duration: "3-4 Months",
        aiFocus: false,
        topics: [
            {
                title: "Linux Security Hardening",
                description: "Secure Linux systems with best practices",
                subTopics: ["SELinux/AppArmor", "Firewalls (iptables)", "Log Analysis", "PAM"]
            },
            {
                title: "Windows Security Hardening",
                description: "Harden Windows systems and enforce security policies",
                subTopics: ["Group Policy", "Windows Defender", "BitLocker", "Event Logs"]
            },
            {
                title: "Vulnerability Management",
                description: "Identify, assess, and remediate system vulnerabilities",
                subTopics: ["Vulnerability Scanning", "Patch Management", "Risk Assessment"],
                aiTool: "AI-driven vulnerability prioritization"
            },
            {
                title: "Identity & Access Management",
                description: "Manage user identities and access controls effectively",
                subTopics: ["Active Directory", "LDAP", "MFA", "RBAC"]
            }
        ],
        projects: [
            {
                icon: "🛡️",
                title: "System Hardening Project",
                description: "Harden Linux and Windows systems following CIS benchmarks",
                technologies: ["CIS Benchmarks", "Security Policies", "Hardening Scripts"]
            },
            {
                icon: "🔍",
                title: "Vulnerability Assessment",
                description: "Perform vulnerability scanning on test systems",
                technologies: ["Nessus", "OpenVAS", "Vulnerability Scanning"]
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Linux Security Guide", type: "Documentation", link: "https://linuxsecurity.com/guides" },
            { icon: <FaBook />, title: "CIS Benchmarks", type: "Standards", link: "https://www.cisecurity.org/cis-benchmarks" }
        ],
        checklist: [
            "Harden Linux and Windows systems",
            "Configure firewalls and security policies",
            "Perform vulnerability assessments",
            "Implement access controls and MFA",
            "Analyze system logs for security events"
        ]
    },

    // ===== PHASE 3: NETWORK SECURITY & DEFENSE =====
    {
        title: "Network Security & Defense",
        shortTitle: "Network Defense",
        description: "Master network security devices, intrusion detection, and monitoring",
        duration: "3-4 Months",
        aiFocus: false,
        topics: [
            {
                title: "Firewalls & Network Segmentation",
                description: "Configure and manage network security devices",
                subTopics: ["iptables", "Cisco ASA", "Palo Alto", "Network Segmentation"]
            },
            {
                title: "Intrusion Detection/Prevention",
                description: "Implement and manage IDS/IPS systems",
                subTopics: ["Snort", "Suricata", "Signature Writing", "Alert Management"]
            },
            {
                title: "Network Monitoring & Analysis",
                description: "Monitor network traffic and detect anomalies",
                subTopics: ["Wireshark", "tcpdump", "SIEM", "Network Flow Analysis"],
                aiTool: "AI-powered anomaly detection"
            },
            {
                title: "VPN & Cryptography",
                description: "Implement secure communications and encryption",
                subTopics: ["IPSec", "SSL/TLS", "Cryptographic Algorithms", "PKI"]
            }
        ],
        projects: [
            {
                icon: "🚨",
                title: "IDS Implementation",
                description: "Set up Snort IDS with custom rules",
                technologies: ["Snort", "Rule Writing", "Alert Monitoring", "Log Analysis"]
            },
            {
                icon: "📊",
                title: "Network Monitoring Dashboard",
                description: "Build a SIEM-like dashboard with ELK stack",
                technologies: ["ELK Stack", "Wireshark", "Network Analysis"],
                aiIntegration: "AI-driven log analysis"
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Snort Documentation", type: "Official Docs", link: "https://www.snort.org/documents" }
        ],
        checklist: [
            "Configure and manage firewalls",
            "Write custom IDS rules",
            "Analyze network traffic with Wireshark",
            "Implement VPN solutions",
            "Set up network monitoring and alerting"
        ]
    },

    // ===== PHASE 4: ETHICAL HACKING & PENETRATION TESTING =====
    {
        title: "Ethical Hacking & Pen Testing",
        shortTitle: "Pen Testing",
        description: "Learn offensive security techniques, penetration testing methodologies, and tools",
        duration: "4-5 Months",
        aiFocus: true,
        topics: [
            {
                title: "Penetration Testing Methodology",
                description: "Follow structured approaches like PTES and OWASP",
                subTopics: ["OSINT", "Scanning", "Enumeration", "Exploitation", "Post-Exploitation"],
                aiTool: "AI-assisted OSINT and reconnaissance"
            },
            {
                title: "Web Application Security",
                description: "Identify and exploit web application vulnerabilities",
                subTopics: ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "API Security"]
            },
            {
                title: "Network Exploitation",
                description: "Exploit network services and move laterally",
                subTopics: ["Metasploit", "Password Attacks", "Privilege Escalation", "Lateral Movement"]
            },
            {
                title: "Social Engineering & Physical Security",
                description: "Understand human factors and physical security risks",
                subTopics: ["Phishing", "Physical Security", "Security Awareness"]
            }
        ],
        projects: [
            {
                icon: "🎯",
                title: "Full Penetration Test",
                description: "Perform a complete penetration test on a target environment",
                technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Nmap"],
                aiIntegration: "AI-driven vulnerability scanning and exploitation"
            },
            {
                icon: "🕸️",
                title: "Web Application Security Assessment",
                description: "Conduct a thorough web app security assessment",
                technologies: ["OWASP Testing", "Burp Suite", "SQLMap", "Custom Scripts"]
            }
        ],
        resources: [
            { icon: <FaVideo />, title: "Certified Ethical Hacker (CEH)", type: "Certification Prep", link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh" },
            { icon: <FaBook />, title: "Web Application Hacker's Handbook", type: "Book", link: "https://www.wiley.com/en-us/The+Web+Application+Hacker%27s+Handbook%3A+Finding+and+Exploiting+Security+Flaws%2C+2nd+Edition-p-9781118026472" }
        ],
        checklist: [
            "Perform complete penetration tests",
            "Exploit web application vulnerabilities",
            "Use Metasploit framework effectively",
            "Conduct social engineering assessments",
            "Write comprehensive penetration test reports"
        ]
    },

    // ===== PHASE 5: ADVANCED SECURITY & SPECIALIZATIONS =====
    {
        title: "Advanced Security & Specializations",
        shortTitle: "Advanced",
        description: "Master advanced domains: cloud security, digital forensics, incident response, and AI security",
        duration: "3-4 Months",
        aiFocus: true,
        topics: [
            {
                title: "Cloud Security",
                description: "Secure cloud environments and services",
                subTopics: ["AWS Security", "Azure Security", "Container Security", "Serverless Security"],
                aiTool: "AI-driven cloud threat detection"
            },
            {
                title: "Digital Forensics",
                description: "Investigate incidents and collect digital evidence",
                subTopics: ["Disk Forensics", "Memory Analysis", "Network Forensics", "Mobile Forensics"]
            },
            {
                title: "Incident Response & Threat Hunting",
                description: "Respond to incidents and proactively hunt for threats",
                subTopics: ["IR Planning", "Malware Analysis", "Threat Hunting", "Recovery Procedures"],
                aiTool: "AI-assisted threat hunting and SOAR"
            },
            {
                title: "AI & Adversarial Security",
                description: "Understand AI security challenges and defend against adversarial attacks",
                subTopics: ["Adversarial Machine Learning", "Model Poisoning", "Prompt Injection", "AI Security Frameworks"],
                aiTool: "Adversarial AI testing tools"
            }
        ],
        projects: [
            {
                icon: "☁️",
                title: "Cloud Security Assessment",
                description: "Assess and secure a cloud infrastructure",
                technologies: ["AWS/Azure", "CloudTrail", "Security Groups", "IAM Policies"],
                aiIntegration: "AI-powered cloud misconfiguration detection"
            },
            {
                icon: "🔎",
                title: "Digital Forensics Investigation",
                description: "Conduct a forensic investigation on a simulated incident",
                technologies: ["FTK", "Volatility", "Autopsy", "Forensic Tools"]
            },
            {
                icon: "🤖",
                title: "Adversarial AI Defense",
                description: "Build defenses against adversarial ML attacks",
                technologies: ["Python", "TensorFlow", "Adversarial Libraries"],
                aiIntegration: "AI model hardening and monitoring"
            }
        ],
        resources: [
            { icon: <FaBook />, title: "Cloud Security Alliance", type: "Framework", link: "https://cloudsecurityalliance.org" },
            { icon: <FaBook />, title: "NIST Cybersecurity Framework", type: "Standards", link: "https://www.nist.gov/cyberframework" },
        ],
        checklist: [
            "Secure cloud environments",
            "Perform digital forensics investigations",
            "Respond to security incidents",
            "Implement AI security measures",
            "Prepare for advanced certifications (CISSP, OSCP, etc.)"
        ]
    }
];

const cyberSecurityDomains = [
    {
        domain: "Network Security",
        description: "Protect network infrastructure and data in transit",
        icon: <FaNetworkWired />,
        skills: ["Firewall Management", "IDS/IPS", "VPN", "Network Monitoring"]
    },
    {
        domain: "Application Security",
        description: "Secure software applications throughout development lifecycle",
        icon: <FaCode />,
        skills: ["Code Review", "Penetration Testing", "SAST/DAST", "API Security"]
    },
    {
        domain: "Cloud Security",
        description: "Protect cloud infrastructure and services",
        icon: <FaCloud />,
        skills: ["Cloud Compliance", "Identity Management", "Data Protection", "Container Security"]
    },
    {
        domain: "Digital Forensics",
        description: "Investigate cyber crimes and security incidents",
        icon: <FaUserSecret />,
        skills: ["Evidence Collection", "Malware Analysis", "Incident Response", "Legal Procedures"]
    }
];

const careerPaths = [
    {
        icon: "🔐",
        title: "Security Analyst",
        description: "Monitor security systems, analyze threats, and respond to incidents",
        salary: "₹6-14 LPA",
        skills: ["SIEM", "Incident Response", "Threat Monitoring", "Security Tools"]
    },
    {
        icon: "🎯",
        title: "Penetration Tester",
        description: "Ethically hack systems to find vulnerabilities before attackers do",
        salary: "₹8-20 LPA",
        skills: ["Ethical Hacking", "Vulnerability Assessment", "Reporting", "Tools Mastery"]
    },
    {
        icon: "🏢",
        title: "Security Architect",
        description: "Design and build secure IT infrastructure and systems",
        salary: "₹15-35 LPA",
        skills: ["System Design", "Security Frameworks", "Risk Assessment", "Architecture"]
    },
    {
        icon: "🤖",
        title: "AI Security Engineer",
        description: "Secure AI/ML systems and use AI for threat detection",
        salary: "₹12-30 LPA",
        skills: ["Adversarial ML", "AI Security", "ML Ops", "Threat Intelligence"]
    }
];

const tools = [
    { name: "Kali Linux", purpose: "Penetration Testing", icon: <FaBug /> },
    { name: "Wireshark", purpose: "Network Analysis", icon: <FaBug /> },
    { name: "Metasploit", purpose: "Exploitation Framework", icon: <FaBug /> },
    { name: "Nmap", purpose: "Network Scanning", icon: <FaBug />},
    { name: "Burp Suite", purpose: "Web App Testing", icon:<FaBug /> },
    { name: "Splunk", purpose: "SIEM & Log Analysis", icon: <FaBug />},
    { name: "Nessus", purpose: "Vulnerability Scanner", icon: <FaShieldAlt /> },
    { name: "Autopsy", purpose: "Digital Forensics", icon: <FaUserSecret /> }
];

const certifications = [
    { name: "CompTIA Security+", level: "Entry", focus: "Foundational Security" },
    { name: "CEH (Certified Ethical Hacker)", level: "Intermediate", focus: "Ethical Hacking" },
    { name: "CISSP", level: "Advanced", focus: "Security Management" },
    { name: "OSCP (Offensive Security Certified Professional)", level: "Advanced", focus: "Penetration Testing" },
    { name: "CISM", level: "Advanced", focus: "Security Management" },
    { name: "GSEC", level: "Intermediate", focus: "Technical Security" },
    { name: "Azure Security Engineer", level: "Intermediate", focus: "Cloud Security" },
    { name: "AWS Security Specialty", level: "Advanced", focus: "Cloud Security" }
];

const aiSecurityTrends = [
    {
        icon: "🧠",
        title: "AI-Driven Threat Detection",
        description: "ML models analyze network traffic, user behavior, and system logs to detect anomalies and zero-day threats in real-time.",
        tags: ["Anomaly Detection", "User Behavior Analytics", "Zero-day Threats"]
    },
    {
        icon: "🛡️",
        title: "Adversarial AI Defense",
        description: "Security professionals must defend against adversarial attacks on ML models, including model poisoning, evasion, and prompt injection.",
        tags: ["Adversarial ML", "Model Poisoning", "Prompt Injection", "ML Security"]
    },
    {
        icon: "🤖",
        title: "AI-Powered SOAR",
        description: "Security Orchestration, Automation, and Response (SOAR) platforms leverage AI to automate incident response and reduce mean time to respond.",
        tags: ["SOAR", "Automation", "Incident Response", "AI Ops"]
    },
    {
        icon: "🔍",
        title: "AI in Digital Forensics",
        description: "AI assists in analyzing large datasets, recovering hidden files, and identifying patterns in digital evidence, speeding up investigations.",
        tags: ["Forensic AI", "Evidence Analysis", "Pattern Recognition", "Data Recovery"]
    },
    {
        icon: "☁️",
        title: "AI for Cloud Security",
        description: "Cloud providers use AI to detect misconfigurations, identify suspicious activities, and automatically remediate security issues.",
        tags: ["Cloud Security", "Misconfiguration Detection", "Automated Remediation"]
    },
    {
        icon: "🌐",
        title: "AI-Powered Threat Intelligence",
        description: "AI aggregates and correlates threat intelligence from multiple sources to provide actionable insights and predict future attack vectors.",
        tags: ["Threat Intelligence", "Predictive Analytics", "Attack Surface", "CTI"]
    }
];