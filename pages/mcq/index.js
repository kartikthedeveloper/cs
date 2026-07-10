import { useState, useMemo } from "react";
import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Hexagon,
  Search
} from "lucide-react";
const SITE_URL = "https://codeskipper.in";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // NOTE: Add your remaining subjects here — keeping structure identical to
  // your original array so nothing else in the app breaks.
  const mcqsubjects = [
    {
      id: 1,
      name: "Artificial Intelligence",
      category: ["Emerging Technologies"],
      link: "/mcq/artificial-intelligence",
      icon: BrainCircuit,
      gradient: "from-purple-500 to-indigo-500",
      description:
        "AI concepts, machine learning basics, and neural networks.",
    },
    {
      id: 2,
      name: "Angular Js",
      category: ["Web Development"],
      link: "/mcq/angularjs-mcq",
      icon: Hexagon,
      gradient: "from-red-500 to-red-700",
      description:
        "Angular components, directives, services, and routing.",
    },
  ];


  const categories = useMemo(
    () => [...new Set(mcqsubjects.flatMap((subject) => subject.category))],
    [mcqsubjects]
  );

  const filteredSubjects = useMemo(() => {
    let result = mcqsubjects;

    if (selectedCategory) {
      result = result.filter((s) =>
        Array.isArray(s.category)
          ? s.category.includes(selectedCategory)
          : s.category === selectedCategory
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => s.name.toLowerCase().includes(q));
    }

    return result;
  }, [mcqsubjects, selectedCategory, searchQuery]);

  const pageTitle = "5000+ Computer Science MCQs with Answers | Code Skipper";
  const pageDescription =
    "Practice 5000+ computer science MCQs with detailed answers — programming, web development, databases, networking, AI, and more. Free, updated, and exam-ready.";


  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: mcqsubjects.map((subject, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        url: `${SITE_URL}${subject.link}`,
        name: `${subject.name} MCQs`,
        description: subject.description,
      },
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can MCQs help in computer science exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MCQs test conceptual understanding, reveal knowledge gaps quickly, and build the recall speed needed for timed competitive exams and certification tests.",
        },
      },
      {
        "@type": "Question",
        name: "What are the most important topics for computer science MCQs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Core topics include data structures, algorithms, programming languages, database systems, computer networks, operating systems, and computer architecture, along with emerging areas like AI and blockchain.",
        },
      },
      {
        "@type": "Question",
        name: "Are Code Skipper's MCQs free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all MCQ sets on Code Skipper are free to access, with answers and explanations included for every question.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "MCQs",
        item: `${SITE_URL}/mcq`,
      },
    ],
  };

  return (
    <CourseLayout>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="computer science MCQs, programming MCQs, technical quizzes, coding questions, data structure MCQs, web development questions, computer science quizzes"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Code Skipper" />
        <link rel="canonical" href={`${SITE_URL}/mcq`} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/mcq`} />
        <meta property="og:site_name" content="Code Skipper" />
        <meta property="og:image" content={`${SITE_URL}/Images/og/mcq-og.png`} />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/Images/og/mcq-og.png`} />

        {/* Structured Data — feeds Google rich results AND AI/LLM answer engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <main id="content-wrapper">
        <div className="sm:mx-auto sm:mb-2">
          <section className="mt-4">
            {/* Hero / H1 — one H1 per page, keyword-first, human-readable */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-700">
                5000+ Computer Science MCQs with Answers
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Practice{" "}
                <span className="font-semibold">
                  programming, web development, databases, networking, and
                  emerging technology
                </span>{" "}
                multiple choice questions with clear, detailed answers —
                built for exam and interview prep.
              </p>

              {/* Trust / E-E-A-T signals: concrete numbers help both users
                  and AI answer engines quote your page confidently */}
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600">
                <span>
                  <strong className="text-blue-700">
                    {mcqsubjects.length}+
                  </strong>{" "}
                  Subjects
                </span>
                <span>
                  <strong className="text-blue-700">100%</strong> Free
                </span>
              </div>
            </motion.div>

            {/* Search bar — improves on-page engagement (a ranking signal)
                and gives crawlers a clean, crawlable subject list nearby */}
            <div className="max-w-xl mx-auto mt-8 px-4">
              <label htmlFor="mcq-search" className="sr-only">
                Search MCQ subjects
              </label>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                  aria-hidden="true"
                />
                <input
                  id="mcq-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search subjects e.g. Angular, AI, DBMS..."
                  className="w-full text-black pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition"
                />
              </div>
            </div>

            {/* Popular Categories — internal links, crawlable, keyword-rich anchor text */}
            <div className="mt-12 max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Popular MCQ Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {mcqsubjects.slice(0, 8).map((subject) => (
                  <Link
                    href={subject.link}
                    key={subject.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-medium text-blue-600 hover:text-blue-800">
                      {subject.name} MCQs
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            {/* Category Filter Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 mt-10 px-4"
              role="group"
              aria-label="Filter MCQs by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`border px-4 py-2 rounded-xl shadow-md transition duration-300 ${selectedCategory === category
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white"
                    }`}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setSelectedCategory(null)}
                className="bg-white border border-gray-500 text-gray-700 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-xl shadow-md transition duration-300"
                aria-label="Clear filters"
              >
                Clear Filter
              </button>
            </motion.div>

            <motion.div
              layout
              className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-4"
            >
              {filteredSubjects.length > 0 ? (
                filteredSubjects.map((subject) => {
                  const Icon = subject.icon;

                  return (
                    <motion.div
                      key={subject.id}
                      layout
                      whileHover={{
                        scale: 1.04,
                        y: -6,
                      }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300"
                    >
                      <Link
                        href={subject.link}
                        aria-label={`${subject.name} MCQs`}
                      >
                        <div className="flex flex-col h-full">
                          <div
                            className={`bg-gradient-to-br ${subject.gradient} h-40 flex items-center justify-center relative`}
                          >
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

                            <div className="relative bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30 shadow-lg">
                              <Icon
                                size={72}
                                className="text-white transition-transform duration-300 group-hover:scale-110"
                                strokeWidth={2}
                              />
                            </div>
                          </div>

                          <div className="flex flex-col flex-grow p-5 text-center">
                            <h3 className="text-xl font-bold text-gray-800">
                              {subject.name} MCQs
                            </h3>

                            {subject.description && (
                              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                {subject.description}
                              </p>
                            )}

                            <div className="mt-4">
                              <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1">
                                Practice MCQs
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              ) : (
                <p className="col-span-full text-center text-gray-500 py-10">
                  No subjects match "{searchQuery}". Try another keyword.
                </p>
              )}
            </motion.div>

            {/* FAQ Section — matches the FAQPage schema above word-for-word.
                Keep the visible text and JSON-LD text identical so Google
                and AI answer engines can safely surface this content. */}
            <div className="mt-16 max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg text-gray-900">
                    How can MCQs help in computer science exam preparation?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    MCQs test conceptual understanding, reveal knowledge gaps
                    quickly, and build the recall speed needed for timed
                    competitive exams and certification tests.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg text-gray-900">
                    What are the most important topics for computer science
                    MCQs?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Core topics include data structures, algorithms,
                    programming languages, database systems, computer
                    networks, operating systems, and computer architecture,
                    along with emerging areas like AI and blockchain.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold text-lg text-gray-900">
                    Are Code Skipper's MCQs free to use?
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Yes, all MCQ sets on Code Skipper are free to access, with
                    answers and explanations included for every question.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </CourseLayout>
  );
};

export default Home;