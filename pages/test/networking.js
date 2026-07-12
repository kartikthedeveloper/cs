import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 ORIGINAL COMPUTER NETWORKING QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question:
            "Which layer of the OSI model is responsible for logical addressing and routing?",
        options: [
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
        ],
        correct: 2,
    },
    // 2
    {
        id: 2,
        question:
            "What is the primary function of the Transport Layer in the OSI model?",
        options: [
            "Bit transmission",
            "End-to-end communication and error recovery",
            "Routing packets",
            "Frame formatting",
        ],
        correct: 1,
    },
    // 3
    {
        id: 3,
        question:
            "Which protocol is used to assign IP addresses dynamically to devices on a network?",
        options: ["DNS", "DHCP", "ARP", "ICMP"],
        correct: 1,
    },
    // 4
    {
        id: 4,
        question: "What does the acronym 'MAC' stand for in networking?",
        options: [
            "Media Access Control",
            "Memory Address Controller",
            "Main Access Channel",
            "Modular Address Code",
        ],
        correct: 0,
    },
    // 5
    {
        id: 5,
        question:
            "In the TCP/IP model, which layer corresponds to the OSI Network Layer?",
        options: [
            "Application Layer",
            "Transport Layer",
            "Internet Layer",
            "Link Layer",
        ],
        correct: 2,
    },
    // 6
    {
        id: 6,
        question: "What is the maximum transmission speed of Gigabit Ethernet?",
        options: ["100 Mbps", "1 Gbps", "10 Gbps", "100 Gbps"],
        correct: 1,
    },
    // 7
    {
        id: 7,
        question:
            "Which routing protocol uses hop count as its primary metric and has a maximum of 15 hops?",
        options: ["OSPF", "BGP", "RIP", "EIGRP"],
        correct: 2,
    },
    // 8
    {
        id: 8,
        question:
            "What type of network topology connects all devices to a central hub or switch?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        correct: 2,
    },
    // 9
    {
        id: 9,
        question: "Which protocol is used to resolve an IP address to a MAC address?",
        options: ["DNS", "DHCP", "ARP", "RARP"],
        correct: 2,
    },
    // 10
    {
        id: 10,
        question: "What is the purpose of the 'ping' command in networking?",
        options: [
            "To trace the route to a destination",
            "To test reachability and measure round-trip time",
            "To resolve domain names",
            "To assign IP addresses",
        ],
        correct: 1,
    },
    // 11
    {
        id: 11,
        question:
            "Which of the following is a private IP address range as defined by RFC 1918?",
        options: [
            "192.168.0.0/16",
            "8.8.8.0/24",
            "172.32.0.0/12",
            "10.0.0.0/8",
        ],
        correct: 3,
    },
    // 12
    {
        id: 12,
        question:
            "What is the main difference between a switch and a hub in a network?",
        options: [
            "A switch operates at Layer 3 while a hub operates at Layer 1",
            "A switch forwards frames based on MAC addresses while a hub broadcasts all traffic",
            "A hub is more intelligent than a switch",
            "There is no difference",
        ],
        correct: 1,
    },
    // 13
    {
        id: 13,
        question:
            "Which of the following is NOT a valid IPv6 address format?",
        options: [
            "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
            "fe80::1",
            "192.168.1.1",
            "::1",
        ],
        correct: 2,
    },
    // 14
    {
        id: 14,
        question: "What does the 'Traceroute' command primarily help with?",
        options: [
            "Measuring bandwidth",
            "Identifying the path packets take to reach a destination",
            "Resolving DNS names",
            "Assigning IP addresses",
        ],
        correct: 1,
    },
    // 15
    {
        id: 15,
        question:
            "Which security protocol is specifically designed to protect Wi-Fi networks?",
        options: ["SSL/TLS", "IPsec", "WPA2", "SSH"],
        correct: 2,
    },
    // 16
    {
        id: 16,
        question:
            "In networking, what is the primary function of a firewall?",
        options: [
            "To route packets between networks",
            "To monitor and control incoming/outgoing network traffic based on rules",
            "To assign IP addresses",
            "To resolve domain names",
        ],
        correct: 1,
    },
    // 17
    {
        id: 17,
        question:
            "Which protocol is used for sending email over the internet?",
        options: ["HTTP", "FTP", "SMTP", "SNMP"],
        correct: 2,
    },
    // 18
    {
        id: 18,
        question:
            "What is the default subnet mask for a Class C IP address?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        correct: 2,
    },
    // 19
    {
        id: 19,
        question:
            "Which of the following is a connectionless protocol at the Transport Layer?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        correct: 1,
    },
    // 20
    {
        id: 20,
        question:
            "What is the purpose of the 'SYN' flag in the TCP three-way handshake?",
        options: [
            "To acknowledge receipt of data",
            "To initiate a connection request",
            "To terminate a connection",
            "To reset a connection",
        ],
        correct: 1,
    },
    // 21
    {
        id: 21,
        question:
            "Which of the following is a type of network attack where an attacker intercepts communication between two parties?",
        options: [
            "Denial of Service (DoS)",
            "Man-in-the-Middle (MITM)",
            "SQL Injection",
            "Phishing",
        ],
        correct: 1,
    },
    // 22
    {
        id: 22,
        question:
            "What is the primary purpose of VLANs (Virtual Local Area Networks)?",
        options: [
            "To increase network speed",
            "To logically segment a network for better management and security",
            "To connect multiple buildings",
            "To replace physical switches",
        ],
        correct: 1,
    },
    // 23
    {
        id: 23,
        question:
            "Which of the following protocols is used for secure remote shell access to a server?",
        options: ["Telnet", "SSH", "FTP", "HTTP"],
        correct: 1,
    },
    // 24
    {
        id: 24,
        question:
            "What is the maximum number of hosts possible in a /24 subnet?",
        options: ["254", "126", "62", "510"],
        correct: 0,
    },
    // 25
    {
        id: 25,
        question:
            "Which networking device operates at the Data Link Layer (Layer 2) of the OSI model?",
        options: ["Router", "Switch", "Hub", "Gateway"],
        correct: 1,
    },
    // 26
    {
        id: 26,
        question:
            "What is the function of DNS in a network?",
        options: [
            "To assign IP addresses",
            "To translate domain names to IP addresses",
            "To route packets",
            "To secure network traffic",
        ],
        correct: 1,
    },
    // 27
    {
        id: 27,
        question:
            "Which type of network cable uses light pulses to transmit data and offers the highest bandwidth?",
        options: ["Coaxial", "Twisted Pair", "Fiber Optic", "Cat5e"],
        correct: 2,
    },
    // 28
    {
        id: 28,
        question:
            "In the context of routing, what does the term 'metric' refer to?",
        options: [
            "The speed of a network connection",
            "A value used to determine the best path to a destination",
            "The number of devices on a network",
            "The bandwidth of a link",
        ],
        correct: 1,
    },
    // 29
    {
        id: 29,
        question:
            "Which of the following is a distance-vector routing protocol?",
        options: ["OSPF", "RIP", "IS-IS", "BGP"],
        correct: 1,
    },
    // 30
    {
        id: 30,
        question:
            "What is the primary purpose of the ICMP protocol?",
        options: [
            "To transfer files",
            "To send error messages and operational information",
            "To encrypt data",
            "To manage network devices",
        ],
        correct: 1,
    },
    // 31
    {
        id: 31,
        question:
            "Which of the following is an example of a classful IP address?",
        options: ["192.168.1.1", "10.0.0.1", "172.16.0.1", "8.8.8.8"],
        correct: 3,
    },
    // 32
    {
        id: 32,
        question:
            "What is the main advantage of using a mesh topology in a network?",
        options: [
            "Low cost",
            "High redundancy and fault tolerance",
            "Simple installation",
            "Minimum cabling required",
        ],
        correct: 1,
    },
    // 33
    {
        id: 33,
        question:
            "Which protocol is used for network management and monitoring?",
        options: ["SNMP", "SMTP", "FTP", "HTTP"],
        correct: 0,
    },
    // 34
    {
        id: 34,
        question:
            "What is the purpose of the 'Time-to-Live' (TTL) field in an IP packet?",
        options: [
            "To prioritize packets",
            "To prevent packets from looping indefinitely",
            "To encrypt the packet",
            "To compress the data",
        ],
        correct: 1,
    },
    // 35
    {
        id: 35,
        question:
            "Which of the following is a type of wireless networking standard?",
        options: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.5", "IEEE 802.15"],
        correct: 1,
    },
    // 36
    {
        id: 36,
        question:
            "What is the function of a default gateway in a network?",
        options: [
            "To assign IP addresses",
            "To forward traffic from a local network to external networks",
            "To secure the network",
            "To manage network devices",
        ],
        correct: 1,
    },
    // 37
    {
        id: 37,
        question:
            "Which of the following is a secure file transfer protocol?",
        options: ["FTP", "TFTP", "SFTP", "HTTP"],
        correct: 2,
    },
    // 38
    {
        id: 38,
        question:
            "In networking, what does the term 'broadcast' mean?",
        options: [
            "Sending data to a single specific device",
            "Sending data to all devices on a network segment",
            "Sending data to a group of devices",
            "Sending data encrypted",
        ],
        correct: 1,
    },
    // 39
    {
        id: 39,
        question:
            "Which protocol is commonly used for real-time video and audio streaming?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        correct: 1,
    },
    // 40
    {
        id: 40,
        question:
            "What is the primary purpose of subnetting in a network?",
        options: [
            "To increase network speed",
            "To divide a network into smaller, manageable segments",
            "To connect to the internet",
            "To encrypt network traffic",
        ],
        correct: 1,
    },
    // 41
    {
        id: 41,
        question:
            "Which of the following is a common method of authentication used in network security?",
        options: ["RSA", "AES", "3DES", "MD5"],
        correct: 0,
    },
    // 42
    {
        id: 42,
        question:
            "What is the function of the Presentation Layer in the OSI model?",
        options: [
            "To route packets",
            "To encrypt, compress, and format data for presentation",
            "To establish connections",
            "To transmit bits",
        ],
        correct: 1,
    },
    // 43
    {
        id: 43,
        question:
            "Which of the following is a link-state routing protocol?",
        options: ["RIP", "OSPF", "BGP", "EIGRP"],
        correct: 1,
    },
    // 44
    {
        id: 44,
        question:
            "What is the purpose of NAT (Network Address Translation) in a network?",
        options: [
            "To translate domain names",
            "To allow multiple devices to share a single public IP address",
            "To encrypt network traffic",
            "To route packets between VLANs",
        ],
        correct: 1,
    },
    // 45
    {
        id: 45,
        question:
            "Which of the following devices can be used to connect two different network segments?",
        options: ["Hub", "Switch", "Router", "Repeater"],
        correct: 2,
    },
    // 46
    {
        id: 46,
        question:
            "In TCP/IP, what is the function of the 'FIN' flag?",
        options: [
            "To initiate a connection",
            "To acknowledge data",
            "To request termination of a connection",
            "To reset a connection",
        ],
        correct: 2,
    },
    // 47
    {
        id: 47,
        question:
            "Which of the following is a type of network attack that overwhelms a system with traffic to make it unavailable?",
        options: ["Phishing", "Man-in-the-Middle", "Denial of Service (DoS)", "SQL Injection"],
        correct: 2,
    },
    // 48
    {
        id: 48,
        question:
            "What is the purpose of the 'Route' command in a network?",
        options: [
            "To display and modify the IP routing table",
            "To assign IP addresses",
            "To test network connectivity",
            "To resolve domain names",
        ],
        correct: 0,
    },
    // 49
    {
        id: 49,
        question:
            "Which of the following is a feature of TCP that UDP does not provide?",
        options: [
            "Connection-oriented communication",
            "Error detection",
            "Port numbers",
            "Checksum",
        ],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question:
            "What is the maximum data rate of the IEEE 802.11ac (Wi-Fi 5) standard?",
        options: ["54 Mbps", "1.3 Gbps", "3.5 Gbps", "9.6 Gbps"],
        correct: 2,
    },
];

// ---------- COMPONENT ----------
export default function NetworkingQuiz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(
        new Array(questions.length).fill(null)
    );
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const isLast = currentIndex === totalQuestions - 1;
    const isAnswered = selectedAnswers[currentIndex] !== null;

    const handleSelect = (optionIndex) => {
        if (isAnswered) return;

        const newSelected = [...selectedAnswers];
        newSelected[currentIndex] = optionIndex;
        setSelectedAnswers(newSelected);
    };

    const handleNext = () => {
        if (!isAnswered) return;
        if (isLast) {
            let correctCount = 0;
            for (let i = 0; i < totalQuestions; i++) {
                if (selectedAnswers[i] === questions[i].correct) {
                    correctCount++;
                }
            }
            setScore(correctCount);
            setShowResults(true);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleRetry = () => {
        setCurrentIndex(0);
        setSelectedAnswers(new Array(questions.length).fill(null));
        setShowResults(false);
        setScore(0);
    };

    const getOptionClass = (index) => {
        if (!isAnswered) {
            return "border-gray-300 hover:border-blue-400 hover:bg-blue-50";
        }
        if (index === currentQuestion.correct) {
            return "border-green-500 bg-green-50 ring-2 ring-green-500";
        }
        if (selectedAnswers[currentIndex] === index && index !== currentQuestion.correct) {
            return "border-red-500 bg-red-50 ring-2 ring-red-500";
        }
        return "border-gray-300 opacity-60";
    };

    const getOptionLabel = (index) => {
        return String.fromCharCode(65 + index); // A, B, C, D
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Computer Networking Quiz – Test Your Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your computer networking knowledge with 50 high-quality MCQs. Covers OSI, TCP/IP, routing, switching, security, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="computer networking quiz, networking MCQs, OSI model, TCP/IP, routing, switching, network security, CCNA, networking test"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Networking Quiz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />

                {/* Geo / Regional */}
                <meta
                    name="geo.region"
                    content="US, GB, IN, CA, AU, DE, FR, JP, BR, ZA"
                />
                <meta name="geo.placename" content="Global" />
                <meta name="geo.position" content="0;0" />
                <meta name="ICBM" content="0, 0" />
                <meta name="distribution" content="global" />
                <meta name="language" content="en" />

                {/* Google Search Console Verification */}
                <meta
                    name="google-site-verification"
                    content="your-verification-code-here"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Computer Networking Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your networking skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/networking" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-networking.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Computer Networking Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original networking MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Computer Networking Quiz",
                            "description": "50 multiple-choice questions covering OSI, TCP/IP, routing, switching, security, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Computer Networking",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "Networking Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/networking" />
            </Head>
            <SimpleLayout>

                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🌐 Computer Networking Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • OSI • TCP/IP • Routing • Security • &amp; more
                            </p>
                            {!showResults && (
                                <div className="mt-3 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm text-slate-700">
                                    <span className="font-semibold">Question {currentIndex + 1}</span>
                                    <span className="text-slate-400">/</span>
                                    <span>{totalQuestions}</span>
                                    <span className="w-px h-4 bg-slate-300 mx-2" />
                                    <span className="text-green-600">
                                        ✅ {selectedAnswers.filter((a) => a !== null).length} answered
                                    </span>
                                </div>
                            )}
                        </div>


                        {/* Quiz Card */}
                        {!showResults ? (
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
                                {/* Progress bar */}
                                <div className="w-full h-1.5 bg-slate-200">
                                    <div
                                        className="h-full bg-blue-600 transition-all duration-500 ease-out"
                                        style={{
                                            width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                                        }}
                                    />
                                </div>

                                <div className="p-6 md:p-8">
                                    {/* Question */}
                                    <div className="mb-6">
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                                                {currentIndex + 1}
                                            </span>
                                            <p className="text-lg md:text-xl font-medium text-slate-800 leading-relaxed">
                                                {currentQuestion.question}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Options */}
                                    <div className="space-y-3">
                                        {currentQuestion.options.map((option, idx) => {
                                            const baseClass =
                                                "block w-full text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer";
                                            const optionClass = getOptionClass(idx);
                                            const isSelected = selectedAnswers[currentIndex] === idx;
                                            const isCorrect = idx === currentQuestion.correct;
                                            let indicator = "";

                                            if (isAnswered) {
                                                if (isCorrect) {
                                                    indicator = "✅";
                                                } else if (isSelected && !isCorrect) {
                                                    indicator = "❌";
                                                }
                                            }

                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => handleSelect(idx)}
                                                    disabled={isAnswered}
                                                    className={`${baseClass} ${optionClass} flex items-center gap-3`}
                                                >
                                                    <span className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-current text-sm font-semibold flex items-center justify-center">
                                                        {getOptionLabel(idx)}
                                                    </span>
                                                    <span className="flex-1 text-slate-700">
                                                        {option}
                                                    </span>
                                                    {indicator && (
                                                        <span className="text-xl">{indicator}</span>
                                                    )}
                                                    {isAnswered && isCorrect && (
                                                        <span className="text-sm font-medium text-green-600">
                                                            Correct
                                                        </span>
                                                    )}
                                                    {isAnswered &&
                                                        isSelected &&
                                                        !isCorrect && (
                                                            <span className="text-sm font-medium text-red-600">
                                                                Incorrect
                                                            </span>
                                                        )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Navigation */}
                                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentIndex === 0}
                                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${currentIndex === 0
                                                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                                                }`}
                                        >
                                            ← Previous
                                        </button>

                                        <div className="text-sm text-slate-400">
                                            {currentIndex + 1} of {totalQuestions}
                                        </div>

                                        <button
                                            onClick={handleNext}
                                            disabled={!isAnswered}
                                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${!isAnswered
                                                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                                                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                                                }`}
                                        >
                                            {isLast ? "📊 See Results" : "Next →"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Results */
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="p-6 md:p-8 text-center">
                                    <div className="mb-6">
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-4xl">
                                            🏆
                                        </div>
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                                        Quiz Complete!
                                    </h2>
                                    <p className="text-slate-500 mb-6">
                                        You answered {totalQuestions} questions
                                    </p>

                                    <div className="max-w-sm mx-auto bg-slate-50 rounded-2xl p-6 mb-8">
                                        <div className="text-5xl font-bold text-blue-600">
                                            {score}
                                        </div>
                                        <div className="text-sm text-slate-500 mt-1">
                                            out of {totalQuestions} correct
                                        </div>
                                        <div className="mt-3 h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                                                style={{
                                                    width: `${(score / totalQuestions) * 100}%`,
                                                }}
                                            />
                                        </div>
                                        <div className="mt-2 text-sm font-medium text-slate-700">
                                            {((score / totalQuestions) * 100).toFixed(0)}%
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
                                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
                                            <span className="text-2xl">✅</span>
                                            <div>
                                                <div className="text-sm text-green-700 font-medium">
                                                    Correct
                                                </div>
                                                <div className="text-lg font-bold text-green-700">
                                                    {score}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                                            <span className="text-2xl">❌</span>
                                            <div>
                                                <div className="text-sm text-red-700 font-medium">
                                                    Incorrect
                                                </div>
                                                <div className="text-lg font-bold text-red-700">
                                                    {totalQuestions - score}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap justify-center gap-4">
                                        <button
                                            onClick={handleRetry}
                                            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                                        >
                                            🔄 Retry Quiz
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </SimpleLayout>

        </>
    );
}