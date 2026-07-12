import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 CYBERSECURITY QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "What is the primary goal of cybersecurity?",
        options: [
            "To protect data and systems from unauthorized access, damage, or theft",
            "To increase system performance",
            "To provide user interfaces",
            "To manage databases",
        ],
        correct: 0,
    },
    // 2
    {
        id: 2,
        question: "Which of the following is a type of malware that encrypts files and demands payment for decryption?",
        options: ["Virus", "Worm", "Ransomware", "Trojan"],
        correct: 2,
    },
    // 3
    {
        id: 3,
        question: "What does the CIA triad stand for in cybersecurity?",
        options: [
            "Confidentiality, Integrity, Availability",
            "Confidentiality, Integrity, Authentication",
            "Confidentiality, Identity, Access",
            "Control, Integrity, Availability",
        ],
        correct: 0,
    },
    // 4
    {
        id: 4,
        question: "Which of the following is a common method for implementing confidentiality?",
        options: ["Encryption", "Hashing", "Digital Signatures", "Access Control Lists"],
        correct: 0,
    },
    // 5
    {
        id: 5,
        question: "What is a firewall?",
        options: [
            "A network security device that monitors and filters incoming and outgoing traffic based on rules",
            "An antivirus program",
            "A type of encryption",
            "A physical barrier",
        ],
        correct: 0,
    },
    // 6
    {
        id: 6,
        question: "Which of the following is a symmetric encryption algorithm?",
        options: ["AES", "RSA", "ECC", "DSA"],
        correct: 0,
    },
    // 7
    {
        id: 7,
        question: "Which of the following is an asymmetric encryption algorithm?",
        options: ["RSA", "AES", "DES", "3DES"],
        correct: 0,
    },
    // 8
    {
        id: 8,
        question: "What is a digital signature used for?",
        options: [
            "To verify the authenticity and integrity of a message",
            "To encrypt a message",
            "To compress data",
            "To establish a secure channel",
        ],
        correct: 0,
    },
    // 9
    {
        id: 9,
        question: "What is a Denial of Service (DoS) attack?",
        options: [
            "An attack that floods a system with traffic to make it unavailable to legitimate users",
            "An attack that steals user credentials",
            "An attack that installs malware",
            "An attack that exploits software vulnerabilities",
        ],
        correct: 0,
    },
    // 10
    {
        id: 10,
        question: "What is a DDoS attack?",
        options: [
            "Distributed Denial of Service – an attack launched from multiple compromised systems",
            "A type of encryption",
            "A firewall rule",
            "An intrusion detection system",
        ],
        correct: 0,
    },
    // 11
    {
        id: 11,
        question: "What is the principle of least privilege?",
        options: [
            "Users and processes should have only the minimum access necessary to perform their functions",
            "All users should have full access",
            "Administrators should have more privileges",
            "Access is based on seniority",
        ],
        correct: 0,
    },
    // 12
    {
        id: 12,
        question: "What is a phishing attack?",
        options: [
            "An attempt to trick individuals into revealing sensitive information by pretending to be a trustworthy entity",
            "A type of malware",
            "A network scan",
            "A physical security breach",
        ],
        correct: 0,
    },
    // 13
    {
        id: 13,
        question: "Which of the following is a secure password practice?",
        options: [
            "Using a long, complex, and unique password for each account",
            "Using the same password for all accounts",
            "Writing passwords on a sticky note",
            "Using dictionary words",
        ],
        correct: 0,
    },
    // 14
    {
        id: 14,
        question: "What is a man-in-the-middle (MITM) attack?",
        options: [
            "An attacker intercepts and possibly alters communication between two parties without their knowledge",
            "An attacker uses a stolen credential",
            "An attacker installs malware on a target system",
            "An attacker performs a DDoS",
        ],
        correct: 0,
    },
    // 15
    {
        id: 15,
        question: "What is a VPN (Virtual Private Network) used for?",
        options: [
            "To create a secure, encrypted connection over an untrusted network like the internet",
            "To provide antivirus protection",
            "To manage system updates",
            "To store passwords",
        ],
        correct: 0,
    },
    // 16
    {
        id: 16,
        question: "What is an intrusion detection system (IDS)?",
        options: [
            "A system that monitors network traffic for suspicious activity and alerts administrators",
            "A system that blocks all traffic",
            "An encryption tool",
            "A password manager",
        ],
        correct: 0,
    },
    // 17
    {
        id: 17,
        question: "What is an intrusion prevention system (IPS)?",
        options: [
            "A system that actively blocks or prevents detected threats",
            "A system that only logs traffic",
            "A type of firewall",
            "A type of malware",
        ],
        correct: 0,
    },
    // 18
    {
        id: 18,
        question: "What is the purpose of hashing?",
        options: [
            "To produce a fixed-length output from any input, used for data integrity verification",
            "To encrypt data",
            "To compress data",
            "To authenticate users",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "Which of the following is a common hashing algorithm?",
        options: ["SHA-256", "AES", "RSA", "ECC"],
        correct: 0,
    },
    // 20
    {
        id: 20,
        question: "What is a zero-day vulnerability?",
        options: [
            "A software vulnerability that is unknown to the vendor and has no patch available",
            "A vulnerability that has been patched",
            "A vulnerability that only affects old software",
            "A vulnerability that is not serious",
        ],
        correct: 0,
    },
    // 21
    {
        id: 21,
        question: "What is the purpose of security awareness training for employees?",
        options: [
            "To educate employees about security risks and best practices to reduce human error",
            "To teach employees programming",
            "To install security software",
            "To enforce password changes",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which of the following is a social engineering attack?",
        options: ["Phishing", "Man-in-the-middle", "SQL injection", "Buffer overflow"],
        correct: 0,
    },
    // 23
    {
        id: 23,
        question: "What is SQL injection?",
        options: [
            "A code injection technique that exploits vulnerabilities in an application's SQL query handling",
            "A network scanning technique",
            "An encryption method",
            "A type of firewall",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "Which of the following is a secure coding practice?",
        options: [
            "Input validation",
            "Using outdated libraries",
            "Hardcoding credentials",
            "Disabling security features",
        ],
        correct: 0,
    },
    // 25
    {
        id: 25,
        question: "What is a certificate authority (CA)?",
        options: [
            "A trusted entity that issues digital certificates for secure communications",
            "An antivirus provider",
            "A firewall vendor",
            "A password manager",
        ],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "What is SSL/TLS used for?",
        options: [
            "To provide secure communications over the internet by encrypting data between a client and server",
            "To store passwords",
            "To manage user accounts",
            "To scan for malware",
        ],
        correct: 0,
    },
    // 27
    {
        id: 27,
        question: "What is a brute force attack?",
        options: [
            "An attack that tries all possible combinations of passwords or keys to gain access",
            "An attack that uses malware",
            "A denial-of-service attack",
            "A phishing attempt",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "Which of the following is a strong authentication factor?",
        options: [
            "Biometric",
            "Password only",
            "Single-factor",
            "Knowledge-based",
        ],
        correct: 0,
    },
    // 29
    {
        id: 29,
        question: "What is multi-factor authentication (MFA)?",
        options: [
            "Using two or more independent authentication factors to verify identity",
            "Using a single password",
            "Using a PIN only",
            "Using only biometrics",
        ],
        correct: 0,
    },
    // 30
    {
        id: 30,
        question: "What is a rootkit?",
        options: [
            "A type of malware that provides privileged access to a system while hiding its presence",
            "A type of firewall",
            "An antivirus program",
            "A network scanner",
        ],
        correct: 0,
    },
    // 31
    {
        id: 31,
        question: "What is the purpose of a Security Information and Event Management (SIEM) system?",
        options: [
            "To collect, analyze, and correlate security events from multiple sources for threat detection and response",
            "To encrypt data",
            "To manage user passwords",
            "To provide antivirus protection",
        ],
        correct: 0,
    },
    // 32
    {
        id: 32,
        question: "Which of the following is a type of malware that self-replicates and spreads without user intervention?",
        options: ["Worm", "Virus", "Trojan", "Ransomware"],
        correct: 0,
    },
    // 33
    {
        id: 33,
        question: "What is a Trojan horse?",
        options: [
            "Malware that disguises itself as legitimate software but performs malicious actions",
            "A type of virus that infects files",
            "A worm",
            "A ransomware variant",
        ],
        correct: 0,
    },
    // 34
    {
        id: 34,
        question: "What is the difference between a vulnerability and an exploit?",
        options: [
            "A vulnerability is a weakness; an exploit is the code or technique that takes advantage of that weakness",
            "They are the same",
            "An exploit is a weakness; vulnerability is the attack",
            "They are unrelated",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "What is a patch?",
        options: [
            "A piece of code that fixes a vulnerability or bug in a software application",
            "A type of malware",
            "A network device",
            "A security policy",
        ],
        correct: 0,
    },
    // 36
    {
        id: 36,
        question: "What is the principle of defense-in-depth?",
        options: [
            "Using multiple layers of security to protect systems and data",
            "Using a single strong security measure",
            "Removing all security controls",
            "Focusing only on network security",
        ],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "What is a honey pot in cybersecurity?",
        options: [
            "A decoy system designed to lure attackers and study their methods",
            "A type of encryption",
            "A firewall rule",
            "A backup server",
        ],
        correct: 0,
    },
    // 38
    {
        id: 38,
        question: "Which of the following is a type of access control model?",
        options: ["RBAC", "DAC", "MAC", "All of the above"],
        correct: 3,
    },
    // 39
    {
        id: 39,
        question: "What does RBAC stand for?",
        options: [
            "Role-Based Access Control",
            "Rule-Based Access Control",
            "Risk-Based Access Control",
            "Resource-Based Access Control",
        ],
        correct: 0,
    },
    // 40
    {
        id: 40,
        question: "What is the purpose of a security audit?",
        options: [
            "To assess and evaluate the security posture of an organization",
            "To install security software",
            "To train employees",
            "To write security policies",
        ],
        correct: 0,
    },
    // 41
    {
        id: 41,
        question: "Which of the following is an example of a physical security measure?",
        options: [
            "Biometric locks",
            "Firewalls",
            "Antivirus",
            "Encryption",
        ],
        correct: 0,
    },
    // 42
    {
        id: 42,
        question: "What is the role of incident response?",
        options: [
            "To prepare, detect, contain, and recover from security incidents",
            "To prevent all attacks",
            "To install new software",
            "To update passwords",
        ],
        correct: 0,
    },
    // 43
    {
        id: 43,
        question: "What is a VPN gateway?",
        options: [
            "A device that establishes secure VPN connections between networks",
            "A type of firewall",
            "An encryption algorithm",
            "A malware detection tool",
        ],
        correct: 0,
    },
    // 44
    {
        id: 44,
        question: "Which of the following is a wireless security protocol?",
        options: ["WPA3", "SSL", "IPsec", "HTTPS"],
        correct: 0,
    },
    // 45
    {
        id: 45,
        question: "What is an access control list (ACL)?",
        options: [
            "A list of permissions attached to a resource specifying which users or systems can access it",
            "A list of all employees",
            "A type of encryption key",
            "A network topology",
        ],
        correct: 0,
    },
    // 46
    {
        id: 46,
        question: "What is a keylogger?",
        options: [
            "Malware that records keystrokes to capture sensitive information",
            "A type of firewall",
            "A hardware security device",
            "A password manager",
        ],
        correct: 0,
    },
    // 47
    {
        id: 47,
        question: "What is the purpose of a non-disclosure agreement (NDA) in cybersecurity?",
        options: [
            "To legally bind individuals or organizations to protect confidential information",
            "To encrypt data",
            "To provide antivirus protection",
            "To establish a secure network",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "Which of the following is a risk management process?",
        options: [
            "Risk identification, assessment, mitigation, and monitoring",
            "Only installing antivirus",
            "Ignoring risks",
            "Buying insurance",
        ],
        correct: 0,
    },
    // 49
    {
        id: 49,
        question: "What is the difference between a vulnerability and a threat?",
        options: [
            "A vulnerability is a weakness; a threat is a potential cause of harm exploiting that weakness",
            "They are synonyms",
            "A threat is a weakness; a vulnerability is a cause of harm",
            "They are unrelated",
        ],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question: "Which of the following is an emerging cybersecurity trend?",
        options: [
            "Zero Trust Architecture",
            "AI in cybersecurity",
            "Quantum-safe cryptography",
            "All of the above",
        ],
        correct: 3,
    },
];

// ---------- COMPONENT ----------
export default function CybersecurityQuiz() {
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

    const getOptionLabel = (index) => String.fromCharCode(65 + index);

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>
                    Cyber Security Quiz – Test Your Security Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your Cyber Security knowledge with 50 high-quality MCQs covering threats, cryptography, network security, malware, policies, and more. Score instantly"
                />
                <meta
                    name="keywords"
                    content="Cybersecurity quiz, security MCQ, network security, cryptography, malware, phishing, ransomware, firewall, encryption, access control, SIEM, zero trust"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Cybersecurity Quiz" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="UTF-8" />

                {/* Geo / Regional */}
                <meta name="geo.region" content="US, GB, IN, CA, AU, DE, FR, JP, BR, ZA" />
                <meta name="geo.placename" content="Global" />
                <meta name="geo.position" content="0;0" />
                <meta name="ICBM" content="0, 0" />
                <meta name="distribution" content="global" />
                <meta name="language" content="en" />

                {/* Open Graph */}
                <meta property="og:title" content="Cyber Security Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your cyber Security skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/cybersecurity" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-cybersecurity.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cybersecurity Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original cybersecurity MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Cybersecurity Quiz",
                            "description": "50 multiple-choice questions covering threats, encryption, network security, malware, access control, incident response, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Cybersecurity",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "Cybersecurity Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/cybersecurity" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🔐 Cybersecurity Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • Threats • Encryption • Network Security • Malware • Access Control • Incident Response
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
                                <div className="w-full h-1.5 bg-slate-200">
                                    <div
                                        className="h-full bg-blue-600 transition-all duration-500 ease-out"
                                        style={{
                                            width: `${((currentIndex + 1) / totalQuestions) * 100}%`,
                                        }}
                                    />
                                </div>

                                <div className="p-6 md:p-8">
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
                                                    <span className="flex-1 text-slate-700">{option}</span>
                                                    {indicator && <span className="text-xl">{indicator}</span>}
                                                    {isAnswered && isCorrect && (
                                                        <span className="text-sm font-medium text-green-600">Correct</span>
                                                    )}
                                                    {isAnswered && isSelected && !isCorrect && (
                                                        <span className="text-sm font-medium text-red-600">Incorrect</span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-6">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentIndex === 0}
                                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                                currentIndex === 0
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
                                            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                                !isAnswered
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
                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
                                    <p className="text-slate-500 mb-6">You answered {totalQuestions} questions</p>

                                    <div className="max-w-sm mx-auto bg-slate-50 rounded-2xl p-6 mb-8">
                                        <div className="text-5xl font-bold text-blue-600">{score}</div>
                                        <div className="text-sm text-slate-500 mt-1">out of {totalQuestions} correct</div>
                                        <div className="mt-3 h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                                                style={{ width: `${(score / totalQuestions) * 100}%` }}
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
                                                <div className="text-sm text-green-700 font-medium">Correct</div>
                                                <div className="text-lg font-bold text-green-700">{score}</div>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                                            <span className="text-2xl">❌</span>
                                            <div>
                                                <div className="text-sm text-red-700 font-medium">Incorrect</div>
                                                <div className="text-lg font-bold text-red-700">{totalQuestions - score}</div>
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