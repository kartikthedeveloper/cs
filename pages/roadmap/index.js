import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaCode,
    FaDatabase,
    FaMobileAlt,
    FaCloud,
    FaRobot,
    FaShieldAlt,
    FaServer,
    FaLaptopCode,
    FaChartLine,
} from "react-icons/fa";
import SimpleLayout from "@/components/SimpleLayout";

const Home = () => {
    // ✅ Remove TypeScript type annotation – this is a .js file
    const [selectedCategory, setSelectedCategory] = useState(null);

    const mcqsubjects = [
        // Web Development
        {
            id: 1,
            name: "Frontend",
            category: ["Web Development"],
            link: "/roadmap/frontend",
            icon: <FaCode size={50} />,
            gradient: "from-green-400 to-blue-500",
            description: "Master HTML, CSS, JavaScript, and modern frontend frameworks.",
        },
        {
            id: 2,
            name: "Backend",
            category: ["Web Development"],
            link: "/roadmap/backend",
            icon: <FaServer size={50} />,
            gradient: "from-green-400 to-blue-500",
            description: "Learn server-side logic, APIs, databases, and authentication.",
        },
        {
            id: 3,
            name: "Full Stack",
            category: ["Web Development"],
            link: "/roadmap/fullstack",
            icon: <FaLaptopCode size={50} />,
            gradient: "from-green-400 to-blue-500",
            description: "Combine frontend and backend skills to build complete applications.",
        },
        {
            id: 4,
            name: "React",
            category: ["Web Development"],
            link: "/roadmap/react",
            icon: <FaCode size={50} />,
            gradient: "from-green-400 to-blue-500",
            description: "Build dynamic user interfaces with React.js and its ecosystem.",
        },
        {
            id: 5,
            name: "Digital Marketing",
            category: ["Digital Marketing"],
            link: "/roadmap/digital-marketing",
            icon: <FaChartLine size={50} />,
            gradient: "from-blue-500 to-cyan-500",
            description: "Learn SEO, content marketing, social media, and analytics.",
        },
        {
            id: 6,
            name: "Cyber Security",
            category: ["Cyber Security"],
            link: "/roadmap/cyber-security",
            icon: <FaShieldAlt size={50} />,
            gradient: "from-red-600 to-orange-600",
            description: "Understand network security, ethical hacking, and threat mitigation.",
        },
    ];

    const categories = [...new Set(mcqsubjects.flatMap((subject) => subject.category))];

    const filteredSubjects = selectedCategory
        ? mcqsubjects.filter((s) =>
            Array.isArray(s.category)
                ? s.category.includes(selectedCategory)
                : s.category === selectedCategory
        )
        : mcqsubjects;

    // ——— JSON-LD Structured Data ———
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                name: "Code Skipper",
                url: "https://codeskipper.com",
                description:
                    "Comprehensive roadmaps and MCQ collections for computer science and web development.",
                sameAs: ["https://twitter.com/codeskipper", "https://github.com/codeskipper"],
            },
            {
                "@type": "WebSite",
                url: "https://codeskipper.com",
                name: "Code Skipper",
                description:
                    "Master computer science with our curated roadmaps and MCQ practice tests.",
                potentialAction: {
                    "@type": "SearchAction",
                    target: "https://codeskipper.com/search?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
            {
                "@type": "CollectionPage",
                url: "https://codeskipper.com/roadmap",
                name: "Roadmap | Code Skipper",
                description:
                    "Explore our roadmap-style MCQ collection covering Programming, Web Development, Database, and Emerging Technologies to master Computer Science.",
                about: {
                    "@type": "Thing",
                    name: "Computer Science Roadmaps and MCQs",
                },
                hasPart: mcqsubjects.map((subject) => ({
                    "@type": "Course",
                    name: `${subject.name} Roadmap`,
                    description: subject.description || `Master ${subject.name} with our comprehensive MCQ collection.`,
                    url: `https://codeskipper.com${subject.link}`,
                    teaches: subject.category,
                    provider: {
                        "@type": "Organization",
                        name: "Code Skipper",
                    },
                })),
                mainEntity: {
                    "@type": "ItemList",
                    itemListElement: mcqsubjects.map((subject, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                            "@type": "Course",
                            name: `${subject.name} Roadmap`,
                            url: `https://codeskipper.com${subject.link}`,
                        },
                    })),
                },
            },
        ],
    };

    return (
        <SimpleLayout>
            <Head>
                {/* ——— Primary Meta ——— */}
                <title>Roadmap to Tech Career | Code Skipper – Master Computer Science</title>
                <meta
                    name="description"
                    content="Explore our comprehensive roadmap collection covering Frontend, Backend, Full Stack, React, Digital Marketing, and Cyber Security. Test your knowledge and advance your CS career."
                />
                <meta
                    name="keywords"
                    content="roadmap, computer science, MCQ, web development, frontend, backend, full stack, React, digital marketing, cyber security, programming, coding, interview prep"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://codeskipper.com/roadmap" />

                {/* ——— Open Graph ——— */}
                <meta property="og:title" content="Roadmap | Code Skipper – Master Computer Science with MCQs" />
                <meta
                    property="og:description"
                    content="Explore our comprehensive roadmap-style MCQ collection covering Frontend, Backend, Full Stack, React, Digital Marketing, and Cyber Security."
                />
                <meta property="og:url" content="https://codeskipper.com/roadmap" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta
                    property="og:image"
                    content="https://codeskipper.com/images/roadmap-og-image.jpg"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* ——— Twitter Card ——— */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Roadmap | Code Skipper – Master Computer Science with MCQs" />
                <meta
                    name="twitter:description"
                    content="Explore our comprehensive roadmap-style MCQ collection covering Frontend, Backend, Full Stack, React, Digital Marketing, and Cyber Security."
                />
                <meta name="twitter:image" content="https://codeskipper.com/images/roadmap-og-image.jpg" />
                <meta name="twitter:site" content="@codeskipper" />

                {/* ——— Technical ——— */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#1D4ED8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />

                {/* ——— Google AdSense ——— */}
                <meta name="google-adsense-account" content="ca-pub-xxxxxxxxxxxxxxxx" />

                {/* ——— Google Search Console (verification) ——— */}
                <meta
                    name="google-site-verification"
                    content="your-verification-code-here"
                />

                {/* ——— JSON-LD ——— */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            <section className="pt-10 pb-20 bg-white">
                {/* ——— Hero ——— */}
                <div className="text-center max-w-4xl mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-blue-700"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Roadmap
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Explore our <strong className="text-blue-700">Roadmap</strong> covering{" "}
                        <span className="font-semibold">
                            Programming, Web Development, Database, and Emerging Technologies
                        </span>{" "}
                        to help you master Computer Science, ace interviews, and stay ahead in your career.
                    </motion.p>
                    <motion.p
                        className="mt-3 text-gray-600 text-base"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                    >
                        Each roadmap is packed with curated multiple-choice questions, detailed explanations,
                        and real-world scenarios — perfect for self-study, interview prep, or classroom use.
                    </motion.p>
                </div>

                {/* ——— Filter Buttons ——— */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 mt-10 px-4"
                    role="group"
                    aria-label="Filter roadmaps by category"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`${selectedCategory === category
                                    ? "bg-blue-700 text-white shadow-lg"
                                    : "bg-white border text-blue-700 hover:bg-blue-50"
                                } border-blue-600 px-5 py-2.5 rounded-xl shadow-md transition duration-300 text-sm font-medium`}
                            aria-pressed={selectedCategory === category}
                        >
                            {category}
                        </button>
                    ))}
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="bg-white border border-gray-400 text-gray-700 hover:bg-gray-100 hover:border-gray-500 px-5 py-2.5 rounded-xl shadow-md transition duration-300 text-sm font-medium"
                        aria-label="Clear all filters"
                    >
                        Clear Filter
                    </button>
                </motion.div>

                {/* ——— Results Count ——— */}
                <div className="max-w-7xl mx-auto px-4 mt-6">
                    <p className="text-sm text-gray-500 text-center" aria-live="polite">
                        Showing <span className="font-semibold text-blue-700">{filteredSubjects.length}</span>{" "}
                        {filteredSubjects.length === 1 ? "roadmap" : "roadmaps"}
                        {selectedCategory && ` in “${selectedCategory}”`}
                    </p>
                </div>

                {/* ——— Subject Grid ——— */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 max-w-7xl mx-auto px-4"
                >
                    {filteredSubjects.map((subject) => (
                        <motion.div
                            key={subject.id}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="transition-all duration-300 transform shadow-md hover:shadow-2xl rounded-2xl overflow-hidden bg-white border border-gray-100"
                            layoutId={`subject-${subject.id}`}
                        >
                            <Link href={subject.link} aria-label={`${subject.name} roadmap and MCQs`}>
                                <div className="flex flex-col items-center justify-center p-6 h-full">
                                    <div
                                        className={`bg-gradient-to-br ${subject.gradient} w-32 h-32 flex items-center justify-center rounded-full text-white shadow-lg`}
                                    >
                                        {subject.icon}
                                    </div>
                                    <div className="text-center mt-5">
                                        <h2 className="text-xl font-semibold text-blue-700">
                                            {subject.name}
                                        </h2>
                                        <p className="text-sm text-gray-500 mt-1 max-w-[200px] mx-auto">
                                            {subject.description || `Master ${subject.name} with our MCQ collection.`}
                                        </p>
                                        <span className="inline-block mt-3 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            Explore →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ——— No Results ——— */}
                {filteredSubjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-500 text-lg">
                            No roadmaps found for <span className="font-semibold">{selectedCategory}</span>.
                        </p>
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
                        >
                            View All Roadmaps
                        </button>
                    </div>
                )}

                {/* ——— Bottom Content (AdSense-friendly, human-written) ——— */}
                <div className="max-w-4xl mx-auto mt-20 px-4 text-left border-t border-gray-200 pt-12">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">
                        Why Use Code Skipper Roadmaps?
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold text-blue-600">🎯 Curated for Success</h3>
                            <p className="text-sm leading-relaxed">
                                Every roadmap is hand-crafted by industry experts to cover the most
                                relevant topics, frameworks, and tools you&apos;ll encounter in real-world
                                projects and technical interviews.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-600">📚 MCQ-Based Learning</h3>
                            <p className="text-sm leading-relaxed">
                                Our multiple-choice questions are designed to test both your theoretical
                                knowledge and practical problem-solving skills — with detailed explanations
                                for every answer.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-600">🚀 Career-Focused</h3>
                            <p className="text-sm leading-relaxed">
                                Whether you&apos;re a beginner or a seasoned developer, our roadmaps help
                                you identify skill gaps, track progress, and prepare for certifications
                                or job roles in tech.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-600">🌐 Always Updated</h3>
                            <p className="text-sm leading-relaxed">
                                The tech world evolves fast — and so do we. Our content is regularly
                                reviewed and updated to reflect the latest trends, libraries, and best
                                practices.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <p className="text-gray-700 text-sm text-center">
                            <strong className="text-blue-700">Ready to level up?</strong> Pick a roadmap
                            above and start your journey toward mastering computer science — one MCQ at a time.
                        </p>
                    </div>
                </div>
            </section>
        </SimpleLayout>
    );
};

export default Home;