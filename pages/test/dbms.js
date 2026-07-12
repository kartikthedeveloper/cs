import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 DBMS QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "Which of the following is NOT a type of database management system?",
        options: ["Hierarchical DBMS", "Network DBMS", "Relational DBMS", "Linear DBMS"],
        correct: 3,
    },
    // 2
    {
        id: 2,
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Simple Query Language",
            "Standard Query Language",
            "System Query Language",
        ],
        correct: 0,
    },
    // 3
    {
        id: 3,
        question: "Which of the following is a DDL (Data Definition Language) command?",
        options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
        correct: 2,
    },
    // 4
    {
        id: 4,
        question: "What is the primary purpose of normalization in a database?",
        options: [
            "To increase redundancy",
            "To reduce data redundancy and improve integrity",
            "To make queries faster",
            "To increase storage space",
        ],
        correct: 1,
    },
    // 5
    {
        id: 5,
        question: "Which normal form requires that every non-key attribute is fully functionally dependent on the entire primary key?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correct: 1,
    },
    // 6
    {
        id: 6,
        question: "Which of the following is a DML (Data Manipulation Language) command?",
        options: ["DROP", "DELETE", "ALTER", "CREATE"],
        correct: 1,
    },
    // 7
    {
        id: 7,
        question: "What is a foreign key?",
        options: [
            "A key that uniquely identifies a record",
            "A key that references the primary key of another table",
            "A key that can have NULL values",
            "A key that is always unique",
        ],
        correct: 1,
    },
    // 8
    {
        id: 8,
        question: "Which ACID property ensures that a transaction is treated as a single, indivisible unit?",
        options: ["Atomicity", "Consistency", "Isolation", "Durability"],
        correct: 0,
    },
    // 9
    {
        id: 9,
        question: "What is the maximum number of NULL values allowed in a primary key column?",
        options: ["0", "1", "Unlimited", "Depends on the DBMS"],
        correct: 0,
    },
    // 10
    {
        id: 10,
        question: "Which join returns all records from the left table and matching records from the right table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correct: 1,
    },
    // 11
    {
        id: 11,
        question: "What is the default sorting order in SQL ORDER BY clause?",
        options: ["Descending", "Ascending", "Random", "No default order"],
        correct: 1,
    },
    // 12
    {
        id: 12,
        question: "Which of the following is a valid SQL aggregate function?",
        options: ["SUM()", "AVG()", "COUNT()", "All of the above"],
        correct: 3,
    },
    // 13
    {
        id: 13,
        question: "What does the term 'schema' refer to in a database?",
        options: [
            "The actual data stored in the database",
            "The structure or design of the database",
            "The indexing mechanism",
            "The query optimization plan",
        ],
        correct: 1,
    },
    // 14
    {
        id: 14,
        question: "Which of the following is a valid relationship type in an ER diagram?",
        options: ["One-to-One", "One-to-Many", "Many-to-Many", "All of the above"],
        correct: 3,
    },
    // 15
    {
        id: 15,
        question: "What is the purpose of the GROUP BY clause in SQL?",
        options: [
            "To sort data",
            "To filter data",
            "To group rows that have the same values",
            "To join tables",
        ],
        correct: 2,
    },
    // 16
    {
        id: 16,
        question: "Which isolation level provides the highest level of data consistency?",
        options: [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable",
        ],
        correct: 3,
    },
    // 17
    {
        id: 17,
        question: "What is a superkey in a relational database?",
        options: [
            "A set of attributes that uniquely identifies a tuple",
            "A key that is always minimal",
            "A key that can have NULL values",
            "A key used for indexing only",
        ],
        correct: 0,
    },
    // 18
    {
        id: 18,
        question: "Which of the following is a DCL (Data Control Language) command?",
        options: ["GRANT", "REVOKE", "Both GRANT and REVOKE", "COMMIT"],
        correct: 2,
    },
    // 19
    {
        id: 19,
        question: "What is the difference between DELETE and TRUNCATE?",
        options: [
            "DELETE removes all rows; TRUNCATE removes specific rows",
            "TRUNCATE removes all rows faster; DELETE can have a WHERE clause",
            "DELETE is a DDL command; TRUNCATE is a DML command",
            "There is no difference",
        ],
        correct: 1,
    },
    // 20
    {
        id: 20,
        question: "Which of the following is a composite attribute?",
        options: [
            "An attribute that can be divided into smaller sub-parts",
            "An attribute that has multiple values",
            "An attribute that is unique",
            "An attribute that is derived from other attributes",
        ],
        correct: 0,
    },
    // 21
    {
        id: 21,
        question: "What is a view in SQL?",
        options: [
            "A virtual table based on the result of a SELECT query",
            "A physical table that stores data",
            "A stored procedure",
            "A backup of a table",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which normal form eliminates transitive dependencies?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        correct: 2,
    },
    // 23
    {
        id: 23,
        question: "What does the term 'referential integrity' mean?",
        options: [
            "All primary keys must be unique",
            "Every foreign key value must match a primary key value in the referenced table",
            "All columns must have a default value",
            "Data must be encrypted",
        ],
        correct: 1,
    },
    // 24
    {
        id: 24,
        question: "Which SQL keyword is used to retrieve unique values?",
        options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
        correct: 1,
    },
    // 25
    {
        id: 25,
        question: "What is a stored procedure?",
        options: [
            "A set of SQL statements stored on the server",
            "A temporary table",
            "A database index",
            "A query execution plan",
        ],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "Which of the following is a characteristic of a relational database?",
        options: [
            "Data is stored in tables",
            "Data is stored in hierarchical structures",
            "Data is stored in XML format",
            "Data is stored in key-value pairs",
        ],
        correct: 0,
    },
    // 27
    {
        id: 27,
        question: "What is the purpose of an index in a database?",
        options: [
            "To speed up data retrieval",
            "To enforce foreign key constraints",
            "To store BLOBs",
            "To create views",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "Which of the following is a valid SQL data type?",
        options: ["VARCHAR", "NUMBER", "DATE", "All of the above"],
        correct: 3,
    },
    // 29
    {
        id: 29,
        question: "What is a transaction in database terms?",
        options: [
            "A single SQL statement",
            "A sequence of operations performed as a single logical unit",
            "A database backup",
            "A table creation process",
        ],
        correct: 1,
    },
    // 30
    {
        id: 30,
        question: "Which command is used to undo a transaction?",
        options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "ABORT"],
        correct: 1,
    },
    // 31
    {
        id: 31,
        question: "What is the degree of a relationship in an ER diagram?",
        options: [
            "The number of entities involved",
            "The number of attributes",
            "The number of keys",
            "The cardinality ratio",
        ],
        correct: 0,
    },
    // 32
    {
        id: 32,
        question: "Which of the following is a type of index?",
        options: ["B-Tree", "Hash", "Bitmap", "All of the above"],
        correct: 3,
    },
    // 33
    {
        id: 33,
        question: "What is the purpose of the HAVING clause in SQL?",
        options: [
            "To filter rows before grouping",
            "To filter groups after GROUP BY",
            "To sort the result set",
            "To join tables",
        ],
        correct: 1,
    },
    // 34
    {
        id: 34,
        question: "Which of the following is a multi-valued attribute?",
        options: [
            "An attribute that can have only one value",
            "An attribute that can have multiple values",
            "An attribute that is a primary key",
            "An attribute that is derived",
        ],
        correct: 1,
    },
    // 35
    {
        id: 35,
        question: "What is the main advantage of using a DBMS?",
        options: [
            "Data redundancy",
            "Data inconsistency",
            "Data independence and integrity",
            "Slow access to data",
        ],
        correct: 2,
    },
    // 36
    {
        id: 36,
        question: "Which SQL clause is used to filter rows before grouping?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "What is a candidate key?",
        options: [
            "A key that is a subset of the primary key",
            "A minimal superkey that can uniquely identify a tuple",
            "A key that can have duplicate values",
            "A key used for foreign key constraints",
        ],
        correct: 1,
    },
    // 38
    {
        id: 38,
        question: "Which of the following is a DTL (Data Transaction Language) command?",
        options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "All of the above"],
        correct: 3,
    },
    // 39
    {
        id: 39,
        question: "What is the purpose of the JOIN operation in SQL?",
        options: [
            "To combine rows from two or more tables",
            "To delete rows",
            "To create indexes",
            "To update data",
        ],
        correct: 0,
    },
    // 40
    {
        id: 40,
        question: "Which of the following is a property of a deadlock?",
        options: [
            "Mutual exclusion",
            "Hold and wait",
            "No preemption",
            "All of the above",
        ],
        correct: 3,
    },
    // 41
    {
        id: 41,
        question: "What is the role of a database administrator (DBA)?",
        options: [
            "To write application code",
            "To design web pages",
            "To manage and maintain the database system",
            "To design user interfaces",
        ],
        correct: 2,
    },
    // 42
    {
        id: 42,
        question: "Which of the following is a valid SQL constraint?",
        options: ["NOT NULL", "UNIQUE", "CHECK", "All of the above"],
        correct: 3,
    },
    // 43
    {
        id: 43,
        question: "What is the difference between a primary key and a unique key?",
        options: [
            "A primary key can be NULL; a unique key cannot",
            "A unique key can be NULL; a primary key cannot",
            "Both can be NULL",
            "There is no difference",
        ],
        correct: 1,
    },
    // 44
    {
        id: 44,
        question: "Which of the following is a type of SQL join?",
        options: ["EQUI JOIN", "NATURAL JOIN", "SELF JOIN", "All of the above"],
        correct: 3,
    },
    // 45
    {
        id: 45,
        question: "What is the purpose of the ALTER TABLE command?",
        options: [
            "To delete a table",
            "To modify the structure of an existing table",
            "To insert data into a table",
            "To query data from a table",
        ],
        correct: 1,
    },
    // 46
    {
        id: 46,
        question: "Which of the following is a type of database normalization?",
        options: ["1NF", "2NF", "3NF", "All of the above"],
        correct: 3,
    },
    // 47
    {
        id: 47,
        question: "What is the purpose of the UNION operator in SQL?",
        options: [
            "To combine the results of two or more SELECT queries",
            "To intersect two tables",
            "To subtract one result set from another",
            "To join tables",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "Which of the following is a type of database language?",
        options: ["DDL", "DML", "DCL", "All of the above"],
        correct: 3,
    },
    // 49
    {
        id: 49,
        question: "What is the purpose of the WHERE clause in SQL?",
        options: [
            "To specify the table to query",
            "To filter records that meet a condition",
            "To group records",
            "To sort records",
        ],
        correct: 1,
    },
    // 50
    {
        id: 50,
        question: "Which of the following is a characteristic of a NoSQL database?",
        options: [
            "Schema-less",
            "Horizontal scaling",
            "Distributed architecture",
            "All of the above",
        ],
        correct: 3,
    },
];

// ---------- COMPONENT ----------
export default function DBMSQuiz() {
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
                    Database Management Systems Quiz MCQs - Code Skipper
                </title>
                <meta
                    name="description"
                    content="Test your DBMS knowledge with 50 high-quality MCQs covering SQL, normalization, transactions, indexing, ER diagrams, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="DBMS quiz, database management systems, SQL MCQ, normalization, transactions, indexing, ER diagram, relational database, NoSQL"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="DBMS Quiz" />
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
                <meta property="og:title" content="DBMS Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your database knowledge with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/dbms" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-dbms.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="DBMS Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original DBMS MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Database Management Systems Quiz",
                            "description": "50 multiple-choice questions covering SQL, normalization, transactions, indexing, ER diagrams, relational database design, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Database Management Systems",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "DBMS Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/dbms" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🗄️ Database Management Systems Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • SQL • Normalization • Transactions • Indexing • ER Diagrams • NoSQL
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