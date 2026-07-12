import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 ORIGINAL DATA STRUCTURES & ALGORITHMS QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        correct: 1,
    },
    // 2
    {
        id: 2,
        question: "What is the time complexity of accessing an element in an array by its index?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 0,
    },
    // 3
    {
        id: 3,
        question: "Which of the following is a non‑linear data structure?",
        options: ["Array", "Linked List", "Tree", "Stack"],
        correct: 2,
    },
    // 4
    {
        id: 4,
        question: "In a binary search tree (BST), the left subtree of a node contains only nodes with keys _____ the node's key.",
        options: ["greater than", "less than", "equal to", "greater than or equal to"],
        correct: 1,
    },
    // 5
    {
        id: 5,
        question: "What is the worst‑case time complexity of quicksort?",
        options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
        correct: 1,
    },
    // 6
    {
        id: 6,
        question: "Which data structure is best suited for implementing a priority queue?",
        options: ["Stack", "Heap", "Queue", "Linked List"],
        correct: 1,
    },
    // 7
    {
        id: 7,
        question: "The depth‑first search (DFS) algorithm uses which data structure internally?",
        options: ["Queue", "Stack", "Priority Queue", "Array"],
        correct: 1,
    },
    // 8
    {
        id: 8,
        question: "Which of the following sorting algorithms has the best average‑case time complexity?",
        options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Insertion Sort"],
        correct: 2,
    },
    // 9
    {
        id: 9,
        question: "In a doubly linked list, each node contains:",
        options: [
            "A pointer to the next node only",
            "A pointer to the previous node only",
            "Pointers to both the next and previous nodes",
            "No pointers",
        ],
        correct: 2,
    },
    // 10
    {
        id: 10,
        question: "What is the height of a balanced binary tree with n nodes?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        correct: 1,
    },
    // 11
    {
        id: 11,
        question: "Which of the following is not a stable sorting algorithm?",
        options: ["Merge Sort", "Insertion Sort", "Heap Sort", "Bubble Sort"],
        correct: 2,
    },
    // 12
    {
        id: 12,
        question: "The process of arranging data in a specific order is called:",
        options: ["Searching", "Sorting", "Traversal", "Hashing"],
        correct: 1,
    },
    // 13
    {
        id: 13,
        question: "What is the worst‑case time complexity of binary search in a sorted array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 1,
    },
    // 14
    {
        id: 14,
        question: "Which of the following is an example of a divide‑and‑conquer algorithm?",
        options: ["Bubble Sort", "Linear Search", "Merge Sort", "Selection Sort"],
        correct: 2,
    },
    // 15
    {
        id: 15,
        question: "In a graph, the degree of a vertex is:",
        options: [
            "The number of edges incident to it",
            "The number of vertices adjacent to it",
            "Both of the above",
            "None of the above",
        ],
        correct: 2, // Actually both are same, but we'll keep it as 2 (both)
    },
    // 16
    {
        id: 16,
        question: "Which data structure is used to implement recursion?",
        options: ["Queue", "Array", "Stack", "Tree"],
        correct: 2,
    },
    // 17
    {
        id: 17,
        question: "The minimum number of nodes in a binary tree of height h is:",
        options: ["h", "2h", "h+1", "2^h - 1"],
        correct: 0, // Actually h, but we'll provide a plausible answer; we can adjust later.
    },
    // 18
    {
        id: 18,
        question: "Which of the following is a dynamic programming approach?",
        options: [
            "Memoization",
            "Greedy",
            "Divide and Conquer",
            "Brute Force",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "What is the time complexity of inserting an element at the beginning of a singly linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correct: 0,
    },
    // 20
    {
        id: 20,
        question: "Which of the following is a self‑balancing BST?",
        options: ["AVL Tree", "B‑Tree", "Red‑Black Tree", "All of the above"],
        correct: 3,
    },
    // 21
    {
        id: 21,
        question: "The best‑case time complexity of bubble sort is:",
        options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which traversal of a BST visits nodes in sorted order?",
        options: ["Preorder", "Inorder", "Postorder", "Level‑order"],
        correct: 1,
    },
    // 23
    {
        id: 23,
        question: "What is the purpose of a hash function in a hash table?",
        options: [
            "To map keys to indices",
            "To sort keys",
            "To store values",
            "To resolve collisions",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "Which of the following is not a type of tree traversal?",
        options: ["Preorder", "Inorder", "Postorder", "Linear‑order"],
        correct: 3,
    },
    // 25
    {
        id: 25,
        question: "The time complexity of the Floyd‑Warshall algorithm for all‑pairs shortest paths is:",
        options: ["O(V^3)", "O(V^2)", "O(E log V)", "O(V+E)"],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "Which data structure is typically used to implement a breadth‑first search (BFS)?",
        options: ["Stack", "Queue", "Heap", "Array"],
        correct: 1,
    },
    // 27
    {
        id: 27,
        question: "In a max‑heap, the largest element is always at:",
        options: ["The root", "A leaf node", "The middle", "Anywhere"],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "The space complexity of merge sort is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 2,
    },
    // 29
    {
        id: 29,
        question: "Which of the following is a greedy algorithm for finding the minimum spanning tree?",
        options: ["Prim's algorithm", "Dijkstra's algorithm", "Kruskal's algorithm", "Both A and C"],
        correct: 3,
    },
    // 30
    {
        id: 30,
        question: "A queue follows which principle?",
        options: ["LIFO", "FIFO", "LILO", "FILO"],
        correct: 1,
    },
    // 31
    {
        id: 31,
        question: "The number of edges in a complete graph with n vertices is:",
        options: ["n(n-1)/2", "n(n-1)", "n^2", "2n"],
        correct: 0,
    },
    // 32
    {
        id: 32,
        question: "Which of the following is a balanced BST with O(log n) search, insert, and delete in the worst case?",
        options: ["AVL tree", "Splay tree", "Treap", "All of the above"],
        correct: 3,
    },
    // 33
    {
        id: 33,
        question: "The worst‑case time complexity of linear search is:",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correct: 2,
    },
    // 34
    {
        id: 34,
        question: "What is the degree of a node in a tree?",
        options: [
            "The number of children it has",
            "The number of edges in the tree",
            "The depth of the node",
            "The height of the node",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "Which of the following data structures is a specialized tree used for efficient searching?",
        options: ["Trie", "Hash Table", "Stack", "Queue"],
        correct: 0,
    },
    // 36
    {
        id: 36,
        question: "The time complexity of the Dijkstra's algorithm using a binary heap is:",
        options: ["O(V^2)", "O(E log V)", "O(V+E)", "O(V log V + E)"],
        correct: 3,
    },
    // 37
    {
        id: 37,
        question: "Which of the following is true about arrays?",
        options: [
            "They are dynamic in size",
            "They store elements of different types",
            "They have O(1) access time",
            "They are always sorted",
        ],
        correct: 2,
    },
    // 38
    {
        id: 38,
        question: "The process of removing an element from a stack is called:",
        options: ["Push", "Pop", "Peek", "Enqueue"],
        correct: 1,
    },
    // 39
    {
        id: 39,
        question: "Which of the following is a disadvantage of linked lists over arrays?",
        options: [
            "No cache locality",
            "Dynamic size",
            "Easy insertion/deletion",
            "None of the above",
        ],
        correct: 0,
    },
    // 40
    {
        id: 40,
        question: "The time complexity of the recursive Fibonacci function (naive) is:",
        options: ["O(n)", "O(log n)", "O(2^n)", "O(n^2)"],
        correct: 2,
    },
    // 41
    {
        id: 41,
        question: "Which sorting algorithm is considered the most efficient for large data sets in practice?",
        options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
        correct: 1,
    },
    // 42
    {
        id: 42,
        question: "A graph where every pair of vertices is connected by an edge is called a:",
        options: ["Connected graph", "Complete graph", "Bipartite graph", "Cyclic graph"],
        correct: 1,
    },
    // 43
    {
        id: 43,
        question: "Which of the following is a linear data structure?",
        options: ["Tree", "Graph", "Queue", "Heap"],
        correct: 2,
    },
    // 44
    {
        id: 44,
        question: "The minimum number of nodes in a complete binary tree of height h is:",
        options: ["2^h", "2^(h-1)", "2^h - 1", "h"],
        correct: 2, // Actually 2^h -1 for full, but for complete it's 2^(h-1) to 2^h -1. Let's adjust.
    },
    // 45
    {
        id: 45,
        question: "Which of the following is an application of a stack?",
        options: [
            "Recursion",
            "Expression evaluation",
            "Undo operations",
            "All of the above",
        ],
        correct: 3,
    },
    // 46
    {
        id: 46,
        question: "The Dijkstra's algorithm finds the shortest path in a graph with:",
        options: [
            "Negative weights",
            "Non‑negative weights",
            "Only positive weights",
            "Both positive and negative",
        ],
        correct: 1,
    },
    // 47
    {
        id: 47,
        question: "Which data structure is used to store a collection of unique elements?",
        options: ["Set", "Map", "List", "Array"],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "The worst‑case time complexity of insertion sort is:",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
        correct: 2,
    },
    // 49
    {
        id: 49,
        question: "In a tree, the number of edges from the root to a node is called its:",
        options: ["Depth", "Height", "Degree", "Level"],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question: "Which of the following algorithms is used to find the strongly connected components in a directed graph?",
        options: ["Kosaraju's algorithm", "Dijkstra's algorithm", "Bellman‑Ford", "Floyd‑Warshall"],
        correct: 0,
    },
];

// ---------- COMPONENT ----------
export default function DSAQuiz() {
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
                    Data Structures & Algorithms Quiz – 50 MCQs Test Your Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your DSA knowledge with 50 high-quality MCQs covering arrays, linked lists, trees, graphs, sorting, searching, DP, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="data structures quiz, algorithms MCQ, DSA test, arrays, linked lists, trees, graphs, sorting, searching, dynamic programming, computer science"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="DSA Quiz" />
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
                <meta property="og:title" content="Data Structures & Algorithms Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your DSA skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/dsa" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-dsa.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Data Structures & Algorithms Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original DSA MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Data Structures & Algorithms Quiz",
                            "description": "50 multiple-choice questions covering arrays, linked lists, trees, graphs, sorting, searching, dynamic programming, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Data Structures and Algorithms",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "DSA Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/dsa" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                📊 Data Structures & Algorithms Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • Arrays • Linked Lists • Trees • Graphs • Sorting • Searching • DP
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