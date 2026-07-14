// pages/about.js
import { motion } from 'framer-motion';
import {
    FaRocket, FaUsers, FaCode, FaTrophy, FaHeart,
    FaLaptopCode, FaBook, FaRoad, FaLightbulb, FaBriefcase,
    FaMoneyBillWave, FaFileAlt, FaTools, FaUserFriends, FaDownload,
    FaSearchDollar, FaComments, FaShieldAlt, FaGlobe, FaMobileAlt,
    FaGamepad, FaChartLine, FaCertificate, FaPalette, FaDatabase, FaClock,
    FaGraduationCap, FaChalkboardTeacher, FaAward, FaBuilding,
    FaWhatsapp, FaTelegram, FaDiscord, FaLinkedin, FaYoutube,
    FaQuestionCircle, FaChevronRight, FaStar, FaQuoteLeft,
    FaShield, FaRegClock, FaRegFileAlt, FaRegLightbulb
} from 'react-icons/fa';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import SimpleLayout from '@/components/SimpleLayout';
import Link from 'next/link';

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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

    // FAQ data for schema and display
    const faqData = [
        {
            question: "What is CodeSkipper.in and how does it help Indian students?",
            answer: "CodeSkipper.in is India's most trusted coding education platform designed specifically for Indian students. We offer comprehensive learning resources including interactive MCQs, real-world projects, detailed notes, interview preparation materials, and career roadmaps — all tailored to the Indian education system and placement landscape. Our content is curated to help students from IITs, NITs, and other Indian colleges ace campus placements and build successful tech careers."
        },
        {
            question: "Is CodeSkipper.in free for students?",
            answer: "Yes! CodeSkipper.in offers a vast library of free learning resources including PDF notes, cheat sheets, MCQ practice, project ideas, and career guidance. We believe quality coding education should be accessible to every student in India, regardless of their financial background. Some advanced features and certification exams are available at nominal fees to support our platform."
        },
        {
            question: "How can CodeSkipper help me prepare for campus placements?",
            answer: "CodeSkipper.in provides end-to-end placement preparation including aptitude training, technical interview practice with company-specific question banks, HR round preparation, resume building with ATS-friendly templates, and mock tests. We cover all major companies visiting Indian campuses — from FAANG to top Indian product and service-based companies."
        },
        {
            question: "What programming languages and technologies are covered on CodeSkipper?",
            answer: "CodeSkipper.in covers 50+ programming languages and technologies including C, C++, Java, Python, JavaScript, HTML/CSS, React, Node.js, SQL, MongoDB, and more. We provide structured learning paths for web development, data science, mobile app development, and cloud computing — all aligned with current industry demands in India."
        },
        {
            question: "Does CodeSkipper provide certificates that are recognized by companies?",
            answer: "Yes! CodeSkipper.in offers verifiable skill certificates upon completion of our exams and assessments. These certificates are recognized by many Indian tech companies and can be added to your LinkedIn profile and resume to boost your credibility during campus placements and job interviews."
        },
        {
            question: "How can I join the CodeSkipper community?",
            answer: "You can join our vibrant community of 50,000+ Indian students through WhatsApp, Telegram, and Discord groups. We also have campus ambassador programs and mentorship initiatives where you can connect with industry experts, participate in events, and grow your network."
        }
    ];

    // Testimonials from Indian students
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Software Engineer",
            college: "Sobhasaria College",
            quote: "I really liked using CodeSkipper. The study material is simple, well-organized, and helped me improve my coding knowledge. I would definitely recommend it to other students.It's a great platform for students preparing for placements.",
            avatar: "R",
            rating: 5
        },
        {
            name: "Priya Patel",
            role: "Full Stack Developer",
            college: "Mody College",
            quote: "As a student from a tier-2 college, I was worried about my placement chances. CodeSkipper's structured roadmaps and project ideas gave me the confidence to build a strong portfolio. I landed my dream job at a product-based company!",
            avatar: "P",
            rating: 5
        },
        {
            name: "Amit Kumar",
            role: "Student",
            college: "MNIT",
            quote: "The MCQ practice and detailed notes on CodeSkipper are incredible. I cleared multiple technical interviews using their resources. The mentorship program connected me with senior developers who guided me throughout my journey.",
            avatar: "A",
            rating: 5
        }
    ];

    // Current year for last updated
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Head>
                {/* ===== BASIC SEO ===== */}
                <title>About CodeSkipper.in - India's Leading Coding Education Platform for Students</title>
                <meta
                    name="description"
                    content="Learn about CodeSkipper.in — India's most trusted coding education platform. We help students master programming, crack campus placements, and build successful tech careers with free resources, MCQs, projects, and interview preparation."
                />
                <meta
                    name="keywords"
                    content="CodeSkipper, coding education India, programming tutorials Indian students, campus placement preparation, technical interview questions India, learn coding online free, coding projects for students, career roadmaps, web development India, data science India, Code Skipper, coding platform India"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://codeskipper.in/main/about" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="distribution" content="global" />
                <meta name="rating" content="General" />

                {/* ===== GEO TARGETING — INDIA ===== */}
                <meta name="geo.region" content="IN" />
                <meta name="geo.placename" content="India" />
                <meta name="geo.position" content="20.5937;78.9629" />
                <meta name="ICBM" content="20.5937, 78.9629" />
                <meta property="og:locale" content="en_IN" />

                {/* ===== OPEN GRAPH / SOCIAL MEDIA ===== */}
                <meta property="og:title" content="About CodeSkipper.in - India's #1 Coding Education Platform for Students" />
                <meta property="og:description" content="Explore CodeSkipper.in — the ultimate platform for coding education, campus placement preparation, and career growth. Trusted by 50,000+ Indian students." />
                <meta property="og:image" content="https://codeskipper.in/Images/og-about.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:url" content="https://codeskipper.in/main/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="CodeSkipper.in" />

                {/* ===== TWITTER CARD ===== */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About CodeSkipper.in - India's Leading Coding Platform" />
                <meta name="twitter:description" content="Learn about CodeSkipper.in — free coding education, placement prep, and career guidance for Indian students." />
                <meta name="twitter:image" content="https://codeskipper.in/Images/og-about.jpg" />

                {/* ===== FAVICON ===== */}
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/apple-touch-icon.png" />

                {/* ===== STRUCTURED DATA — ORGANIZATION ===== */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            "name": "CodeSkipper",
                            "url": "https://codeskipper.in",
                            "logo": "https://codeskipper.in/Images/logo.png",
                            "description": "India's leading coding education platform offering free learning resources, MCQs, projects, and interview preparation for students.",
                            "address": {
                                "@type": "PostalAddress",
                                "addressCountry": "IN"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/company/codeskipper",
                                "https://www.youtube.com/c/codeskipper",
                                "https://t.me/codeskipper"
                            ],
                            "foundingDate": "2023",
                            "founder": {
                                "@type": "Person",
                                "name": "Kartik Sharma"
                            }
                        })
                    }}
                />

                {/* ===== STRUCTURED DATA — BREADCRUMB ===== */}
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
                                    "item": "https://codeskipper.in"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "About",
                                    "item": "https://codeskipper.in/main/about"
                                }
                            ]
                        })
                    }}
                />

                {/* ===== STRUCTURED DATA — FAQ ===== */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqData.map(item => ({
                                "@type": "Question",
                                "name": item.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": item.answer
                                }
                            }))
                        })
                    }}
                />

                {/* ===== STRUCTURED DATA — ABOUT PAGE ===== */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About CodeSkipper.in",
                            "url": "https://codeskipper.in/main/about",
                            "description": "CodeSkipper.in is India's most comprehensive platform for coding education, projects, interview preparation, and career guidance for students.",
                            "publisher": {
                                "@type": "EducationalOrganization",
                                "name": "CodeSkipper",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://codeskipper.in/Images/logo.png"
                                }
                            },
                            "mainEntity": {
                                "@type": "WebPage",
                                "lastReviewed": `${currentYear}-01-01`,
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://codeskipper.in" },
                                        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://codeskipper.in/main/about" }
                                    ]
                                }
                            }
                        })
                    }}
                />

                {/* ===== ADDITIONAL META FOR ADSENSE ===== */}
                <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXX" />
                <meta name="theme-color" content="#2563EB" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

                    {/* ===== NAVIGATION INDICATOR ===== */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-50"
                    />

                    {/* ===== HERO SECTION ===== */}
                    <section className="pt-28 pb-20 px-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform skew-y-3 scale-125"></div>
                        <div className="max-w-7xl mx-auto relative">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="inline-block mb-6"
                                >
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                        <FaAward className="text-yellow-300" />
                                        India's Most Trusted Coding Platform
                                    </span>
                                </motion.div>

                                <h1 className="text-4xl md:text-6xl sm:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                                    Welcome to{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                        CodeSkipper
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                    India's most comprehensive coding education platform — designed to help students
                                    master programming, crack campus placements, and build thriving tech careers.
                                    <span className="block mt-2 text-blue-600 font-semibold">
                                        From IITs to tier-3 colleges, we empower every student.
                                    </span>
                                </p>
                            </motion.div>

                            {/* ===== STATS ===== */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16"
                            >
                                {[
                                    { icon: <FaUsers />, value: "1,000+", label: "MCQ's" },
                                    { icon: <FaBook />, value: "1000+", label: "Interview Que Ans" },
                                    { icon: <FaCode />, value: "5+", label: "Tech Roadmap" },
                                    { icon: <FaTrophy />, value: "10+", label: "Free Tools" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                                    >
                                        <div className="text-4xl mb-3 text-blue-600">{stat.icon}</div>
                                        <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                                        <div className="text-gray-500 font-medium text-sm">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== WHY CHOOSE CODESKIPPER ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Why CodeSkipper</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
                                    Why Indian Students Choose Us
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    We understand the unique challenges of Indian students and tailor everything to help you succeed.
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: <FaGraduationCap />,
                                        title: "Campus Placement Focus",
                                        desc: "Our content is aligned with the placement patterns of top Indian colleges and competition exams. We cover company-specific question banks, aptitude, and HR rounds."
                                    },
                                    {
                                        icon: <FaLightbulb />,
                                        title: "Free & Accessible",
                                        desc: "Most of our resources are completely free. We believe every Indian student deserves quality education regardless of their financial background."
                                    },
                                    {
                                        icon: <FaUsers />,
                                        title: "Community First",
                                        desc: "Join students on our social media. Get instant help, study groups, and mentorship from industry experts."
                                    }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 text-center transition-shadow hover:shadow-xl"
                                    >
                                        <div className="text-5xl text-blue-600 mb-4 flex justify-center">{item.icon}</div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== MISSION & VISION ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12">
                                <motion.div
                                    variants={slideInLeft}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20"
                                >
                                    <FaRocket className="text-5xl mb-6 text-blue-200" />
                                    <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                                    <p className="text-lg leading-relaxed text-blue-100 mb-6">
                                        To democratize coding education across India by providing comprehensive, affordable,
                                        and industry-relevant learning resources to every student — from metropolitan cities
                                        to rural villages.
                                    </p>
                                    <ul className="space-y-3 text-blue-100">
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-blue-300 mt-1 flex-shrink-0" />
                                            Make coding education accessible to students from all economic backgrounds
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-blue-300 mt-1 flex-shrink-0" />
                                            Bridge the gap between academic curriculum and industry expectations
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-blue-300 mt-1 flex-shrink-0" />
                                            Empower students with practical skills, confidence, and a growth mindset
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    variants={slideInRight}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/20"
                                >
                                    <FaChalkboardTeacher className="text-5xl mb-6 text-purple-200" />
                                    <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                                    <p className="text-lg leading-relaxed text-purple-100 mb-6">
                                        To become India's most trusted education brand, creating a community of 1 million
                                        successful developers who not only excel in their careers but also contribute back
                                        to the ecosystem.
                                    </p>
                                    <ul className="space-y-3 text-purple-100">
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-purple-300 mt-1 flex-shrink-0" />
                                            Build India's largest community of passionate student developers
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-purple-300 mt-1 flex-shrink-0" />
                                            Partner with 500+ companies for campus placements and internships
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <FaChevronRight className="text-purple-300 mt-1 flex-shrink-0" />
                                            Launch content in 10+ Indian regional languages to reach every student
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* ===== CORE LEARNING RESOURCES ===== */}
                    <SectionWrapper title="Core Learning Resources" subtitle="Everything you need to master coding — all in one place">
                        <FeatureGrid features={coreLearningFeatures} />
                    </SectionWrapper>

                    {/* ===== CAREER DEVELOPMENT ===== */}
                    {/* <SectionWrapper title="Career Development" subtitle="From learning to earning — we guide you every step" bg="gray">
                        <FeatureGrid features={careerFeatures} />
                    </SectionWrapper> */}

                    {/* ===== EDUCATIONAL TOOLS ===== */}
                    <SectionWrapper title="Educational Tools" subtitle="Powerful free tools to accelerate your learning">
                        <FeatureGrid features={toolFeatures} />
                    </SectionWrapper>

                    {/* ===== COMMUNITY ===== */}
                    {/* <SectionWrapper title="Community & Growth" subtitle="Learn together, grow together with 50,000+ students" bg="gray">
                        <FeatureGrid features={communityFeatures} />
                    </SectionWrapper> */}

                    {/* ===== FREE RESOURCES ===== */}
                    {/* <SectionWrapper title="Free Learning Resources" subtitle="Quality education shouldn't be expensive">
                        <FeatureGrid features={freeResources} />
                    </SectionWrapper> */}

                    {/* ===== PLACEMENT PREPARATION ===== */}
                    {/* <SectionWrapper title="Placement Preparation" subtitle="Ace your campus placements with our comprehensive toolkit" bg="gray">
                        <FeatureGrid features={placementFeatures} />
                    </SectionWrapper> */}

                    {/* ===== TESTIMONIALS ===== */}
                    <section className="py-20 px-4 bg-white">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Testimonials</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
                                    What Our Students Say
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Real stories from students who transformed their careers with CodeSkipper
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {testimonials.map((t, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                                    >
                                        <FaQuoteLeft className="text-blue-300 text-3xl mb-4" />
                                        <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                                                {t.avatar}
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-800">{t.name}</div>
                                                <div className="text-sm text-gray-500">{t.role}</div>
                                                <div className="text-xs text-blue-600">{t.college}</div>
                                            </div>
                                        </div>
                                        <div className="flex mt-3 text-yellow-400">
                                            {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ===== FAQ SECTION ===== */}
                    <section className="py-20 px-4 bg-gray-50" id="faq">
                        <div className="max-w-4xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">FAQ</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
                                    Frequently Asked Questions
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Got questions? We've got answers. Here's what students commonly ask about CodeSkipper.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {faqData.map((item, index) => {
                                    const [isOpen, setIsOpen] = useState(true);
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setIsOpen(!isOpen)}
                                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="font-semibold text-gray-800 text-lg flex items-center gap-3">
                                                    <FaQuestionCircle className="text-blue-500 flex-shrink-0" />
                                                    {item.question}
                                                </span>
                                                <motion.span
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-blue-500 text-xl flex-shrink-0"
                                                >
                                                    ▼
                                                </motion.span>
                                            </button>
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="mt-10 text-center">
                                <Link href="/main/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Still have questions? Contact us
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ===== SOCIAL PROOF / COMMUNITY LINKS ===== */}
                    <section className="py-16 px-4 bg-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h3>
                                <p className="text-gray-600 mb-6">Connect with students on these platforms</p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {[
                                        { icon: <FaWhatsapp />, label: "WhatsApp", color: "bg-green-500",link:"https://www.whatsapp.com/channel/0029Vb7VU8wKwqSMA7l1yL0r" },
                                        // { icon: <FaTelegram />, label: "Telegram", color: "bg-blue-500" },
                                        // { icon: <FaDiscord />, label: "Discord", color: "bg-indigo-500" },
                                        // { icon: <FaLinkedin />, label: "LinkedIn", color: "bg-blue-700" },
                                        { icon: <FaYoutube />, label: "YouTube", color: "bg-red-600" }
                                    ].map((platform, index) => (
                                        <motion.a
                                            key={index}
                                            href="#"
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            className={`${platform.color} text-white px-6 py-3 rounded-full flex items-center gap-3 font-medium shadow-md hover:shadow-lg transition-all`}
                                        >
                                            {platform.icon}
                                            {platform.label}
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ===== FINAL CTA ===== */}
                    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <FaHeart className="text-5xl mx-auto mb-6 text-pink-400" />
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                    Ready to Start Your Coding Journey?
                                </h2>
                            
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/mcq">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                                        >
                                            Start MCQ Practice
                                        </motion.button>
                                    </Link>
                                    <Link href="/tools">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                                        >
                                            Explore Free Tools
                                        </motion.button>
                                    </Link>
                                </div>
                                <p className="text-sm mt-6 opacity-75">
                                    🚀 Free forever • No credit card required • Start learning today
                                </p>
                            </motion.div>
                        </div>
                    </section>

                </div>
            </SimpleLayout>
        </>
    );
}

// ===== REUSABLE COMPONENTS =====

const SectionWrapper = ({ title, subtitle, children, bg = "white" }) => {
    const bgClass = bg === "gray" ? "bg-gray-50" : "bg-white";
    return (
        <section className={`py-20 px-4 ${bgClass}`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
                </motion.div>
                {children}
            </div>
        </section>
    );
};

const FeatureGrid = ({ features }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.1
                    }
                }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.5 }
                        }
                    }}
                    whileHover={{
                        scale: 1.03,
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all"
                >
                    <div className="text-4xl text-blue-600 mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    {feature.subFeatures && (
                        <ul className="mt-4 space-y-2">
                            {feature.subFeatures.map((sub, subIndex) => (
                                <li key={subIndex} className="flex items-center text-sm text-gray-500">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                    {sub}
                                </li>
                            ))}
                        </ul>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
};

// ===== DATA ARRAYS =====

const coreLearningFeatures = [
    {
        icon: <FaComments />,
        title: "Interview Questions",
        description: "Comprehensive collection of real interview questions from top companies with detailed solutions.",
        subFeatures: ["Company-wise questions", "Role-specific prep", "Behavioral questions", "Technical deep dives"]
    },
    {
        icon: <FaLightbulb />,
        title: "MCQ Practice",
        description: "Thousands of multiple-choice questions with instant feedback and detailed explanations.",
        subFeatures: ["Topic-wise practice", "Mock tests", "Performance analytics", "Competitive exams"]
    },
    // {
    //     icon: <FaBook />,
    //     title: "Detailed Notes",
    //     description: "Well-structured notes covering all programming concepts from basics to advanced topics.",
    //     subFeatures: ["PDF downloads", "Revision notes", "Code snippets", "Visual explanations"]
    // },
    {
        icon: <FaRoad />,
        title: "Learning Roadmaps",
        description: "Step-by-step guided paths for different career tracks with clear milestones.",
        subFeatures: ["Frontend development", "Backend development", "Data Science", "Mobile development"]
    },
    // {
    //     icon: <FaLaptopCode />,
    //     title: "Project Ideas",
    //     description: "Curated list of mini and major projects with requirements, tech stacks, and implementation guides.",
    //     subFeatures: ["Beginner to advanced", "Real-world applications", "Portfolio ready", "Open source"]
    // },
    // {
    //     icon: <FaBriefcase />,
    //     title: "Job Roles Explained",
    //     description: "Detailed insights into different tech roles, responsibilities, skills, and career growth.",
    //     subFeatures: ["Salary benchmarks", "Skill requirements", "Career progression", "Industry demand"]
    // }
];

const careerFeatures = [
    // {
    //     icon: <FaMoneyBillWave />,
    //     title: "Salary Insights",
    //     description: "India-specific salary data for different tech roles based on experience and skills.",
    //     subFeatures: ["India data", "International comparisons", "Experience-wise", "Skill-based analysis"]
    // },
    {
        icon: <FaFileAlt />,
        title: "Resume Templates",
        description: "Professional resume templates and tips designed for tech roles and placements.",
        subFeatures: ["ATS friendly", "Fresher to experienced", "Role-specific", "Cover letter samples"]
    },
    {
        icon: <FaSearchDollar />,
        title: "Job Search Support",
        description: "Complete guidance on job search strategies, application process, and interviews.",
        subFeatures: ["Job portals", "Referral strategies", "Application tracking", "Follow-up templates"]
    },
    {
        icon: <FaUserFriends />,
        title: "HR Round Preparation",
        description: "Comprehensive prep for HR rounds including common questions and answering strategies.",
        subFeatures: ["Behavioral questions", "Salary negotiation", "Company research", "Cultural fit"]
    },
    {
        icon: <FaShieldAlt />,
        title: "Company-wise Prep",
        description: "Detailed guides for specific companies including interview patterns and question banks.",
        subFeatures: ["FAANG companies", "Startup interviews", "Service-based", "Product-based"]
    },
    {
        icon: <FaChartLine />,
        title: "Career Growth Guidance",
        description: "Long-term career planning and growth strategies for advancing in tech.",
        subFeatures: ["Skill development", "Certification guidance", "Networking", "Promotion prep"]
    }
];

const toolFeatures = [
    {
        icon: <FaLaptopCode />,
        title: "Built-in Code Editor",
        description: "Powerful online code editor with syntax highlighting and multiple language support.",
        subFeatures: ["50+ languages", "Real-time output", "Code sharing", "Collaborative"]
    },
    {
        icon: <FaTools />,
        title: "Unit Converter",
        description: "Comprehensive unit conversion tools for developers.",
        subFeatures: ["Programming units", "Time conversions", "Data storage", "Network speed"]
    },
    {
        icon: <FaClock />,
        title: "Typing Speed Test",
        description: "Advanced typing test with programming-specific content.",
        subFeatures: ["Code snippets", "Accuracy metrics", "Speed tracking", "Progress analytics"]
    },
    {
        icon: <FaBook />,
        title: "Programming Dictionary",
        description: "Comprehensive dictionary of programming terms with examples.",
        subFeatures: ["Technical terms", "Framework definitions", "Algorithm explanations", "Latest tech"]
    },
    {
        icon: <FaDatabase />,
        title: "JSON Formatter",
        description: "Smart JSON formatting and validation tool.",
        subFeatures: ["JSON validation", "Formatting options", "Minification", "Schema validation"]
    },
    {
        icon: <FaPalette />,
        title: "Developer Utilities",
        description: "Collection of essential developer tools.",
        subFeatures: ["Color utilities", "Regex tools", "API testers", "Data validators"]
    }
];

const communityFeatures = [
    {
        icon: <FaTrophy />,
        title: "Leaderboard System",
        description: "Global and category-wise leaderboards to track your progress.",
        subFeatures: ["Weekly rankings", "Category leaders", "Achievement badges", "Progress tracking"]
    },
    {
        icon: <FaLaptopCode />,
        title: "Project Showcase",
        description: "Showcase your projects, get feedback, and get featured.",
        subFeatures: ["Project gallery", "Peer reviews", "Featured projects", "Collaboration"]
    },
    {
        icon: <FaCertificate />,
        title: "Exams & Certification",
        description: "Regular skill assessments with verifiable certificates.",
        subFeatures: ["Skill assessments", "Verified certificates", "Performance reports", "Skill badges"]
    },
    {
        icon: <FaUserFriends />,
        title: "Mentorship Program",
        description: "Connect with experienced developers and industry experts.",
        subFeatures: ["One-on-one sessions", "Career guidance", "Code reviews", "Interview prep"]
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Community",
        description: "Active communities on WhatsApp, Telegram, and Discord.",
        subFeatures: ["Technical support", "Study groups", "Job alerts", "Event notifications"]
    },
    {
        icon: <FaGlobe />,
        title: "Campus Ambassador",
        description: "Become a campus leader and earn certificates and rewards.",
        subFeatures: ["Leadership opportunities", "Networking events", "Certificates", "Exclusive goodies"]
    }
];

const freeResources = [
    {
        icon: <FaDownload />,
        title: "PDF Notes Download",
        description: "High-quality PDF notes covering all concepts — free to download.",
        subFeatures: ["Subject-wise notes", "Revision notes", "Cheat sheets", "Quick references"]
    },
    {
        icon: <FaBook />,
        title: "Free Ebooks",
        description: "Curated collection of free programming ebooks from beginner to advanced.",
        subFeatures: ["Programming languages", "Framework guides", "Project tutorials", "Interview prep"]
    },
    {
        icon: <FaLightbulb />,
        title: "Cheat Sheets",
        description: "Comprehensive cheat sheets for quick reference of syntax and best practices.",
        subFeatures: ["Syntax reference", "Command cheats", "Best practices", "Common patterns"]
    },
    {
        icon: <FaFileAlt />,
        title: "Templates Library",
        description: "Ready-to-use code templates, project structures, and config files.",
        subFeatures: ["Project templates", "Code snippets", "Config files", "Starter kits"]
    }
];

const placementFeatures = [
    {
        icon: <FaBriefcase />,
        title: "Aptitude Preparation",
        description: "Complete aptitude training with practice questions and shortcuts.",
        subFeatures: ["Quantitative aptitude", "Logical reasoning", "Verbal ability", "Data interpretation"]
    },
    {
        icon: <FaComments />,
        title: "Technical Interviews",
        description: "Comprehensive prep for coding rounds and system design interviews.",
        subFeatures: ["Coding rounds", "System design", "Database questions", "OOP concepts"]
    },
    {
        icon: <FaUserFriends />,
        title: "HR Round Mastery",
        description: "Complete guidance for HR rounds and personality development.",
        subFeatures: ["Communication skills", "Body language", "Company research", "Cultural fit"]
    },
    {
        icon: <FaFileAlt />,
        title: "Resume Building",
        description: "Professional resume building with ATS optimization.",
        subFeatures: ["ATS optimization", "Industry templates", "Content writing", "Review services"]
    }
];