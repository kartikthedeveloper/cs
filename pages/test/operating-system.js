import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 OPERATING SYSTEMS QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "Which of the following is NOT a function of an operating system?",
        options: [
            "Memory management",
            "Process management",
            "File management",
            "Database management",
        ],
        correct: 3,
    },
    // 2
    {
        id: 2,
        question: "What is the kernel of an operating system?",
        options: [
            "The user interface",
            "The core component that manages system resources",
            "A file system",
            "A scheduling algorithm",
        ],
        correct: 1,
    },
    // 3
    {
        id: 3,
        question: "Which scheduling algorithm is non-preemptive?",
        options: ["Round Robin", "Shortest Job First (SJF)", "Priority Scheduling", "First Come First Serve (FCFS)"],
        correct: 3,
    },
    // 4
    {
        id: 4,
        question: "What is a process?",
        options: [
            "A program in execution",
            "A file stored on disk",
            "A thread",
            "A system call",
        ],
        correct: 0,
    },
    // 5
    {
        id: 5,
        question: "Which of the following is a state of a process?",
        options: ["Ready", "Running", "Waiting", "All of the above"],
        correct: 3,
    },
    // 6
    {
        id: 6,
        question: "What is a deadlock?",
        options: [
            "A situation where two or more processes are unable to proceed because each is waiting for a resource held by the other",
            "A situation where a process terminates abnormally",
            "A scheduling algorithm",
            "A memory management technique",
        ],
        correct: 0,
    },
    // 7
    {
        id: 7,
        question: "Which of the following is NOT a necessary condition for deadlock?",
        options: [
            "Mutual exclusion",
            "Hold and wait",
            "No preemption",
            "Circular wait",
            "All are necessary conditions",
        ],
        correct: 4,
    },
    // 8
    {
        id: 8,
        question: "What is the purpose of virtual memory?",
        options: [
            "To allow the execution of processes that are not entirely in memory",
            "To increase the speed of the CPU",
            "To manage input/output devices",
            "To allocate memory to processes",
        ],
        correct: 0,
    },
    // 9
    {
        id: 9,
        question: "Which page replacement algorithm is optimal?",
        options: ["FIFO", "LRU", "Optimal (MIN)", "Clock"],
        correct: 2,
    },
    // 10
    {
        id: 10,
        question: "What is a system call?",
        options: [
            "A request by a program for a service from the operating system",
            "A hardware interrupt",
            "A type of scheduling algorithm",
            "A file system operation",
        ],
        correct: 0,
    },
    // 11
    {
        id: 11,
        question: "Which of the following is a type of operating system?",
        options: [
            "Batch OS",
            "Time-sharing OS",
            "Real-time OS",
            "All of the above",
        ],
        correct: 3,
    },
    // 12
    {
        id: 12,
        question: "What is the role of a scheduler?",
        options: [
            "To select which process runs next",
            "To allocate memory",
            "To handle file I/O",
            "To manage network connections",
        ],
        correct: 0,
    },
    // 13
    {
        id: 13,
        question: "Which of the following is a preemptive scheduling algorithm?",
        options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "Priority (non-preemptive)"],
        correct: 2,
    },
    // 14
    {
        id: 14,
        question: "What is a thread?",
        options: [
            "A lightweight process",
            "A heavy-weight process",
            "A file descriptor",
            "A system call",
        ],
        correct: 0,
    },
    // 15
    {
        id: 15,
        question: "Which of the following is true about multithreading?",
        options: [
            "It improves CPU utilization",
            "It reduces context switching overhead",
            "Both A and B",
            "Neither A nor B",
        ],
        correct: 2,
    },
    // 16
    {
        id: 16,
        question: "What is the purpose of inter-process communication (IPC)?",
        options: [
            "To allow processes to exchange data",
            "To synchronize processes",
            "Both A and B",
            "To schedule processes",
        ],
        correct: 2,
    },
    // 17
    {
        id: 17,
        question: "Which of the following is a synchronization mechanism?",
        options: ["Semaphore", "Mutex", "Monitor", "All of the above"],
        correct: 3,
    },
    // 18
    {
        id: 18,
        question: "What is the difference between a semaphore and a mutex?",
        options: [
            "A semaphore can be used for counting; a mutex is binary",
            "A mutex can be used for counting; a semaphore is binary",
            "They are the same",
            "Semaphore is hardware; mutex is software",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "What is a critical section?",
        options: [
            "A segment of code that accesses shared resources",
            "A segment of code that is not executed",
            "A memory region for kernel",
            "A scheduling queue",
        ],
        correct: 0,
    },
    // 20
    {
        id: 20,
        question: "Which of the following is a file allocation method?",
        options: [
            "Contiguous allocation",
            "Linked allocation",
            "Indexed allocation",
            "All of the above",
        ],
        correct: 3,
    },
    // 21
    {
        id: 21,
        question: "What is a file system?",
        options: [
            "A method for storing and organizing files",
            "A type of operating system",
            "A scheduling algorithm",
            "A memory management technique",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which of the following is a type of file system?",
        options: ["FAT", "NTFS", "ext4", "All of the above"],
        correct: 3,
    },
    // 23
    {
        id: 23,
        question: "What is the role of a device driver?",
        options: [
            "To manage hardware devices",
            "To schedule processes",
            "To manage memory",
            "To handle file systems",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "Which of the following is an example of a real-time operating system?",
        options: ["Windows", "Linux", "VxWorks", "macOS"],
        correct: 2,
    },
    // 25
    {
        id: 25,
        question: "What is the purpose of a bootloader?",
        options: [
            "To load the operating system into memory",
            "To compile the kernel",
            "To manage user accounts",
            "To perform system updates",
        ],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "Which of the following is a protection mechanism in OS?",
        options: [
            "User mode vs. kernel mode",
            "File permissions",
            "Memory protection",
            "All of the above",
        ],
        correct: 3,
    },
    // 27
    {
        id: 27,
        question: "What is a process control block (PCB)?",
        options: [
            "A data structure that contains information about a process",
            "A file system structure",
            "A memory block",
            "A scheduling queue",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "Which of the following is a scheduling criterion?",
        options: ["CPU utilization", "Throughput", "Turnaround time", "All of the above"],
        correct: 3,
    },
    // 29
    {
        id: 29,
        question: "What is the difference between preemptive and non-preemptive scheduling?",
        options: [
            "Preemptive can interrupt a running process; non-preemptive cannot",
            "Non-preemptive can interrupt a running process; preemptive cannot",
            "They are the same",
            "Preemptive is only for real-time systems",
        ],
        correct: 0,
    },
    // 30
    {
        id: 30,
        question: "What is thrashing?",
        options: [
            "High page fault activity causing poor performance",
            "A scheduling algorithm",
            "A file system error",
            "A hardware failure",
        ],
        correct: 0,
    },
    // 31
    {
        id: 31,
        question: "Which of the following is a method for handling deadlocks?",
        options: [
            "Deadlock prevention",
            "Deadlock avoidance",
            "Deadlock detection and recovery",
            "All of the above",
        ],
        correct: 3,
    },
    // 32
    {
        id: 32,
        question: "What is the banker's algorithm used for?",
        options: [
            "Deadlock avoidance",
            "Deadlock prevention",
            "Deadlock detection",
            "Memory allocation",
        ],
        correct: 0,
    },
    // 33
    {
        id: 33,
        question: "Which of the following is a type of memory management technique?",
        options: ["Paging", "Segmentation", "Both A and B", "Neither"],
        correct: 2,
    },
    // 34
    {
        id: 34,
        question: "What is a page fault?",
        options: [
            "An interrupt that occurs when a program accesses a page that is not in memory",
            "A hardware error",
            "A scheduling error",
            "A file system error",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "Which of the following is a disk scheduling algorithm?",
        options: ["FCFS", "SSTF", "SCAN", "All of the above"],
        correct: 3,
    },
    // 36
    {
        id: 36,
        question: "What is the purpose of a file descriptor?",
        options: [
            "An identifier for an open file",
            "A file name",
            "A directory entry",
            "A file system type",
        ],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "Which of the following is a characteristic of a distributed operating system?",
        options: [
            "Multiple independent systems appear as a single system",
            "Centralized control",
            "Single point of failure",
            "All of the above",
        ],
        correct: 0,
    },
    // 38
    {
        id: 38,
        question: "What is a system call interface?",
        options: [
            "The boundary between user programs and the kernel",
            "A file system",
            "A scheduling algorithm",
            "A memory management unit",
        ],
        correct: 0,
    },
    // 39
    {
        id: 39,
        question: "Which of the following is a real-time scheduling algorithm?",
        options: ["Rate Monotonic", "Earliest Deadline First", "Both A and B", "Round Robin"],
        correct: 2,
    },
    // 40
    {
        id: 40,
        question: "What is the role of a file system in an OS?",
        options: [
            "To organize and store data on storage devices",
            "To manage memory",
            "To schedule processes",
            "To handle network communication",
        ],
        correct: 0,
    },
    // 41
    {
        id: 41,
        question: "Which of the following is a type of operating system structure?",
        options: [
            "Monolithic kernel",
            "Microkernel",
            "Hybrid kernel",
            "All of the above",
        ],
        correct: 3,
    },
    // 42
    {
        id: 42,
        question: "What is the purpose of a system boot?",
        options: [
            "To start the operating system",
            "To shut down the system",
            "To manage processes",
            "To allocate memory",
        ],
        correct: 0,
    },
    // 43
    {
        id: 43,
        question: "Which of the following is a security mechanism in OS?",
        options: [
            "Authentication",
            "Authorization",
            "Encryption",
            "All of the above",
        ],
        correct: 3,
    },
    // 44
    {
        id: 44,
        question: "What is a zombie process?",
        options: [
            "A process that has terminated but still has an entry in the process table",
            "A process that is running",
            "A process that is waiting for I/O",
            "A process that is in the ready queue",
        ],
        correct: 0,
    },
    // 45
    {
        id: 45,
        question: "What is the role of the dispatcher in scheduling?",
        options: [
            "To give control of the CPU to the selected process",
            "To select the next process to run",
            "To manage memory",
            "To handle interrupts",
        ],
        correct: 0,
    },
    // 46
    {
        id: 46,
        question: "Which of the following is a type of I/O buffering?",
        options: [
            "Single buffer",
            "Double buffer",
            "Circular buffer",
            "All of the above",
        ],
        correct: 3,
    },
    // 47
    {
        id: 47,
        question: "What is the purpose of a system call library?",
        options: [
            "To provide an interface for system calls to user programs",
            "To manage files",
            "To schedule processes",
            "To manage memory",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "Which of the following is a type of interrupt?",
        options: ["Hardware interrupt", "Software interrupt", "Exception", "All of the above"],
        correct: 3,
    },
    // 49
    {
        id: 49,
        question: "What is the role of the process scheduler?",
        options: [
            "To manage the execution of processes",
            "To manage memory",
            "To manage files",
            "To manage network connections",
        ],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question: "Which of the following is an example of a mobile operating system?",
        options: ["Android", "iOS", "HarmonyOS", "All of the above"],
        correct: 3,
    },
];

// ---------- COMPONENT ----------
export default function OSQuiz() {
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
                    Operating Systems Quiz – 50 MCQs Test Your OS Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your Operating Systems knowledge with 50 high-quality MCQs covering processes, scheduling, memory management, file systems, deadlocks, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="Operating Systems quiz, OS MCQ, process management, scheduling, memory management, file systems, deadlock, virtualization, kernel"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="OS Quiz" />
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
                <meta property="og:title" content="Operating Systems Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your OS skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/os" />
                <meta
                    property="og:image"
                    content="https://yourdomain.com/og-image-os.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Operating Systems Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original OS MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Operating Systems Quiz",
                            "description": "50 multiple-choice questions covering processes, scheduling, memory management, file systems, deadlocks, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Operating Systems",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "OS Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://yourdomain.com/os" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🖥️ Operating Systems Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • Processes • Scheduling • Memory • File Systems • Deadlocks • Virtualization
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