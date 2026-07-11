import { useState, useMemo } from "react";
import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Hexagon,
  Blocks,
  FileCode,
  Cloud,
  Computer,
  MemoryStick,
  Code2,
  Network,
  Palette,
  Database,
  ShieldCheck,
  FileText,
  HardDrive,
  Coffee,
  Braces,
  Bot,
  Image,
  Server,
  Monitor,
  Terminal,
  Atom,
  Workflow,
} from "lucide-react";
const SITE_URL = "https://codeskipper.in";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

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
    {
      id: 3,
      name: "Blockchain",
      category: ["Emerging Technologies"],
      link: "/mcq/blockchain",
      icon: Blocks,
      gradient: "from-yellow-500 to-orange-600",
      description:
        "Blockchain technology, cryptocurrency, and smart contracts.",
    },
    {
      id: 4,
      name: "C Language",
      category: ["Programming"],
      link: "/mcq/c-language",
      icon: FileCode,
      gradient: "from-blue-500 to-cyan-600",
      description:
        "C programming basics, functions, pointers, and arrays.",
    },
    {
      id: 5,
      name: "Cloud Computing",
      category: ["Cloud"],
      link: "/mcq/cloud-mcq",
      icon: Cloud,
      gradient: "from-sky-500 to-blue-700",
      description:
        "Cloud services, virtualization, AWS, Azure, and Google Cloud.",
    },
    {
      id: 6,
      name: "Computer Fundamental",
      category: ["Computer Basics"],
      link: "/mcq/computer-fundamental",
      icon: Computer,
      gradient: "from-teal-500 to-emerald-600",
      description:
        "Basic computer concepts, hardware, software, and generations.",
    },
    {
      id: 7,
      name: "Computer Memory",
      category: ["Computer Basics"],
      link: "/mcq/computer-memory",
      icon: MemoryStick,
      gradient: "from-green-500 to-lime-600",
      description:
        "RAM, ROM, cache memory, storage devices, and memory hierarchy.",
    },
    {
      id: 8,
      name: "C++",
      category: ["Programming"],
      link: "/mcq/cpp-language",
      icon: Code2,
      gradient: "from-indigo-500 to-blue-700",
      description:
        "Object-oriented programming, classes, inheritance, and STL.",
    },
    {
      id: 9,
      name: "Computer Networking",
      category: ["Networking"],
      link: "/mcq/networking-mcq",
      icon: Network,
      gradient: "from-cyan-500 to-sky-700",
      description:
        "OSI model, TCP/IP, routing, switching, and network security.",
    },
    {
      id: 10,
      name: "CSS",
      category: ["Web Development"],
      link: "/mcq/css-mcq",
      icon: Palette,
      gradient: "from-blue-400 to-indigo-600",
      description:
        "CSS selectors, flexbox, grid, animations, and responsive design.",
    },
    {
      id: 11,
      name: "Data Structure",
      category: ["Programming"],
      link: "/mcq/data-structure-mcq",
      icon: Workflow,
      gradient: "from-orange-500 to-red-600",
      description:
        "Arrays, linked lists, stacks, queues, trees, and graphs.",
    },
    {
      id: 12,
      name: "DBMS",
      category: ["Database"],
      link: "/mcq/dbms-mcq",
      icon: Database,
      gradient: "from-violet-500 to-purple-700",
      description:
        "Database concepts, normalization, SQL, and transactions.",
    },
    {
      id: 13,
      name: "Ethical Hacking",
      category: ["Cyber Security"],
      link: "/mcq/ethical-hacking-mcq",
      icon: ShieldCheck,
      gradient: "from-red-600 to-pink-700",
      description:
        "Penetration testing, vulnerabilities, and cybersecurity basics.",
    },
    {
      id: 14,
      name: "HTML",
      category: ["Web Development"],
      link: "/mcq/html-mcq",
      icon: FileText,
      gradient: "from-orange-500 to-red-500",
      description:
        "HTML elements, forms, semantic tags, and page structure.",
    },
    {
      id: 15,
      name: "IO Device",
      category: ["Computer Basics"],
      link: "/mcq/io-device",
      icon: HardDrive,
      gradient: "from-gray-500 to-slate-700",
      description:
        "Input, output, storage devices, and peripheral hardware.",
    },
    {
      id: 16,
      name: "Java",
      category: ["Programming"],
      link: "/mcq/java-mcq",
      icon: Coffee,
      gradient: "from-amber-500 to-orange-700",
      description:
        "Java syntax, OOP, collections, exception handling, and JVM.",
    },
    {
      id: 17,
      name: "JavaScript",
      category: ["Web Development"],
      link: "/mcq/javascript-mcq",
      icon: Braces,
      gradient: "from-yellow-400 to-yellow-600",
      description:
        "JavaScript fundamentals, ES6, DOM, events, and promises.",
    },
    {
      id: 18,
      name: "Machine Learning",
      category: ["Emerging Technologies"],
      link: "/mcq/machine-learning-mcq",
      icon: Bot,
      gradient: "from-fuchsia-500 to-purple-700",
      description:
        "Supervised, unsupervised learning, regression, and classification.",
    },
    {
      id: 19,
      name: "Multimedia",
      category: ["Computer Basics"],
      link: "/mcq/multimedia-mcq",
      icon: Image,
      gradient: "from-pink-500 to-rose-600",
      description:
        "Graphics, audio, video, animation, and multimedia applications.",
    },
    {
      id: 20,
      name: "Node JS",
      category: ["Backend Development"],
      link: "/mcq/node-mcq",
      icon: Server,
      gradient: "from-green-600 to-emerald-700",
      description:
        "Node.js modules, Express, APIs, and asynchronous programming.",
    },
    {
      id: 21,
      name: "Operating System",
      category: ["Computer Basics"],
      link: "/mcq/operating-system",
      icon: Monitor,
      gradient: "from-slate-500 to-gray-700",
      description:
        "Processes, threads, scheduling, memory management, and file systems.",
    },
    {
      id: 22,
      name: "Python",
      category: ["Programming"],
      link: "/mcq/python-mcq",
      icon: Terminal,
      gradient: "from-blue-500 to-yellow-500",
      description:
        "Python syntax, OOP, modules, functions, and data structures.",
    },
    {
      id: 23,
      name: "React JS",
      category: ["Web Development"],
      link: "/mcq/react-mcq",
      icon: Atom,
      gradient: "from-cyan-400 to-blue-600",
      description:
        "React components, hooks, state management, and routing.",
    },
    {
      id: 24,
      name: "System Design",
      category: ["Software Engineering"],
      link: "/mcq/system-design-mcq",
      icon: Workflow,
      gradient: "from-indigo-600 to-violet-700",
      description:
        "Scalability, load balancing, caching, databases, and architecture.",
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

  const pageTitle = "Computer Science MCQs with Answers | Code Skipper";
  const pageDescription =
    "Practice 1000+ computer science MCQs for competition exam — programming, web development, databases, networking, AI, and more. Free, updated, and exam-ready.";


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
                Free Computer Science MCQs with Answers for Exams, Interviews & Placement Preparation
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