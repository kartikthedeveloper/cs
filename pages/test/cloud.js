import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 CLOUD COMPUTING QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "Which of the following is a key characteristic of cloud computing?",
        options: [
            "On-demand self-service",
            "Broad network access",
            "Resource pooling",
            "All of the above",
        ],
        correct: 3,
    },
    // 2
    {
        id: 2,
        question: "Which cloud service model provides virtualized computing resources over the internet?",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        correct: 2,
    },
    // 3
    {
        id: 3,
        question: "Which cloud service model allows users to develop, run, and manage applications without the complexity of infrastructure?",
        options: ["SaaS", "PaaS", "IaaS", "CaaS"],
        correct: 1,
    },
    // 4
    {
        id: 4,
        question: "Which cloud service model delivers software applications over the internet on a subscription basis?",
        options: ["SaaS", "PaaS", "IaaS", "FaaS"],
        correct: 0,
    },
    // 5
    {
        id: 5,
        question: "What is a public cloud?",
        options: [
            "Cloud infrastructure owned and operated by a third-party provider and made available to the general public",
            "Cloud infrastructure used exclusively by a single organization",
            "A hybrid model combining on-premise and cloud",
            "A cloud managed by the government",
        ],
        correct: 0,
    },
    // 6
    {
        id: 6,
        question: "What is a private cloud?",
        options: [
            "Cloud infrastructure used exclusively by a single organization, either on-premises or hosted",
            "A cloud open to the public",
            "A cloud that combines public and private elements",
            "A cloud offered by a community of organizations",
        ],
        correct: 0,
    },
    // 7
    {
        id: 7,
        question: "What is a hybrid cloud?",
        options: [
            "A combination of public and private clouds, allowing data and applications to be shared between them",
            "A cloud that only uses public infrastructure",
            "A cloud that only uses private infrastructure",
            "A cloud that is not connected to the internet",
        ],
        correct: 0,
    },
    // 8
    {
        id: 8,
        question: "Which of the following is NOT a major cloud provider?",
        options: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "Linux Cloud"],
        correct: 3,
    },
    // 9
    {
        id: 9,
        question: "What is AWS Lambda?",
        options: [
            "A serverless compute service that runs code in response to events",
            "A virtual machine service",
            "A container orchestration service",
            "A database service",
        ],
        correct: 0,
    },
    // 10
    {
        id: 10,
        question: "What is virtualization in cloud computing?",
        options: [
            "Creating a virtual version of a resource (server, storage, network) to run multiple instances on a single physical machine",
            "Physical isolation of servers",
            "A type of cloud service model",
            "A security mechanism",
        ],
        correct: 0,
    },
    // 11
    {
        id: 11,
        question: "Which technology is commonly used for virtualization?",
        options: ["Hypervisor", "Container", "VMware", "All of the above"],
        correct: 3,
    },
    // 12
    {
        id: 12,
        question: "What is a container?",
        options: [
            "A lightweight, portable unit that packages code and dependencies for consistent execution across environments",
            "A virtual machine",
            "A type of database",
            "A storage service",
        ],
        correct: 0,
    },
    // 13
    {
        id: 13,
        question: "Which container orchestration platform is most popular?",
        options: ["Docker Swarm", "Kubernetes", "Apache Mesos", "AWS ECS"],
        correct: 1,
    },
    // 14
    {
        id: 14,
        question: "What is serverless computing?",
        options: [
            "A cloud execution model where the cloud provider manages the infrastructure and automatically scales resources",
            "A type of database",
            "A virtual machine with no operating system",
            "A network service",
        ],
        correct: 0,
    },
    // 15
    {
        id: 15,
        question: "Which of the following is an example of a serverless platform?",
        options: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "All of the above"],
        correct: 3,
    },
    // 16
    {
        id: 16,
        question: "What is the pay-as-you-go pricing model?",
        options: [
            "Paying only for the resources you use, often on a per-hour or per-second basis",
            "A fixed monthly fee",
            "A one-time payment",
            "A free service",
        ],
        correct: 0,
    },
    // 17
    {
        id: 17,
        question: "Which of the following is a benefit of cloud computing?",
        options: [
            "Cost efficiency",
            "Scalability",
            "High availability",
            "All of the above",
        ],
        correct: 3,
    },
    // 18
    {
        id: 18,
        question: "What is elasticity in cloud computing?",
        options: [
            "The ability to automatically scale resources up or down based on demand",
            "The ability to run multiple operating systems",
            "The ability to secure data",
            "The ability to deploy applications quickly",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "What is a Virtual Private Cloud (VPC)?",
        options: [
            "A logically isolated section of a public cloud providing private networking",
            "A physical data center",
            "A type of hybrid cloud",
            "A serverless function",
        ],
        correct: 0,
    },
    // 20
    {
        id: 20,
        question: "Which protocol is commonly used for cloud storage access?",
        options: ["HTTP/HTTPS", "FTP", "SMB", "NFS"],
        correct: 0,
    },
    // 21
    {
        id: 21,
        question: "What is object storage?",
        options: [
            "A data storage architecture that manages data as objects, each with metadata and a unique identifier",
            "A block storage system",
            "A file storage system",
            "A relational database",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which AWS service is used for object storage?",
        options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon RDS"],
        correct: 0,
    },
    // 23
    {
        id: 23,
        question: "What is block storage?",
        options: [
            "Storage that is divided into fixed-sized blocks, often used for databases and virtual machines",
            "Storage of objects with metadata",
            "A file-based storage system",
            "A caching mechanism",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "Which AWS service is used for block storage?",
        options: ["Amazon EBS", "Amazon S3", "Amazon Glacier", "Amazon EFS"],
        correct: 0,
    },
    // 25
    {
        id: 25,
        question: "What is a Content Delivery Network (CDN)?",
        options: [
            "A network of distributed servers that deliver content to users based on their geographic location",
            "A type of load balancer",
            "A database replication service",
            "A security service",
        ],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "Which of the following is a CDN service?",
        options: ["Amazon CloudFront", "Google Cloud CDN", "Azure CDN", "All of the above"],
        correct: 3,
    },
    // 27
    {
        id: 27,
        question: "What is load balancing in cloud computing?",
        options: [
            "Distributing incoming traffic across multiple servers to ensure high availability and reliability",
            "A security measure",
            "A type of virtualization",
            "A backup technique",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "Which cloud service is used for relational databases?",
        options: ["RDS (Relational Database Service)", "DynamoDB", "MongoDB Atlas", "All of the above"],
        correct: 0,
    },
    // 29
    {
        id: 29,
        question: "Which cloud service is used for NoSQL databases?",
        options: ["DynamoDB", "Cloud Firestore", "Cosmos DB", "All of the above"],
        correct: 3,
    },
    // 30
    {
        id: 30,
        question: "What is a Disaster Recovery (DR) strategy in the cloud?",
        options: [
            "A set of policies and tools to recover data and systems after a catastrophic event",
            "A security protocol",
            "A migration technique",
            "A cost optimization method",
        ],
        correct: 0,
    },
    // 31
    {
        id: 31,
        question: "What is the difference between scalability and elasticity?",
        options: [
            "Scalability is the ability to handle increased load; elasticity is the ability to automatically scale up and down",
            "They are the same",
            "Elasticity is manual scaling; scalability is automatic",
            "Scalability is only vertical scaling",
        ],
        correct: 0,
    },
    // 32
    {
        id: 32,
        question: "What is cloud migration?",
        options: [
            "The process of moving applications, data, and workloads from on-premises to the cloud",
            "A type of cloud provider",
            "A security service",
            "A backup method",
        ],
        correct: 0,
    },
    // 33
    {
        id: 33,
        question: "Which of the following is a cloud security best practice?",
        options: [
            "Identity and Access Management (IAM)",
            "Encryption",
            "Regular audits",
            "All of the above",
        ],
        correct: 3,
    },
    // 34
    {
        id: 34,
        question: "What is the shared responsibility model in cloud security?",
        options: [
            "Security responsibilities are divided between the cloud provider and the customer",
            "Only the cloud provider is responsible for security",
            "Only the customer is responsible for security",
            "Security is not a concern in the cloud",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "What is a cloud service provider (CSP)?",
        options: [
            "A company that offers cloud computing services",
            "A customer of cloud services",
            "A type of cloud deployment model",
            "A software application",
        ],
        correct: 0,
    },
    // 36
    {
        id: 36,
        question: "What is multi-cloud strategy?",
        options: [
            "Using multiple cloud providers to avoid vendor lock-in and increase redundancy",
            "Using only one cloud provider",
            "A hybrid deployment",
            "A private cloud only",
        ],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "What is the purpose of a cloud service level agreement (SLA)?",
        options: [
            "To define the performance and availability commitments between a cloud provider and customer",
            "To define pricing",
            "To list all available services",
            "To outline legal terms only",
        ],
        correct: 0,
    },
    // 38
    {
        id: 38,
        question: "Which of the following is a cloud cost optimization technique?",
        options: [
            "Rightsizing instances",
            "Using spot instances",
            "Scheduling resources to turn off when not needed",
            "All of the above",
        ],
        correct: 3,
    },
    // 39
    {
        id: 39,
        question: "What is a cloud-native application?",
        options: [
            "An application designed and built to run in the cloud, leveraging microservices, containers, and orchestration",
            "An application running on legacy on-premises systems",
            "A virtual machine image",
            "A database service",
        ],
        correct: 0,
    },
    // 40
    {
        id: 40,
        question: "What is microservices architecture?",
        options: [
            "An approach to building applications as a collection of small, independent services",
            "A monolithic application design",
            "A type of database",
            "A networking protocol",
        ],
        correct: 0,
    },
    // 41
    {
        id: 41,
        question: "Which of the following is an orchestration tool?",
        options: ["Kubernetes", "Docker Compose", "AWS CloudFormation", "All of the above"],
        correct: 3,
    },
    // 42
    {
        id: 42,
        question: "What is Infrastructure as Code (IaC)?",
        options: [
            "Managing and provisioning infrastructure through machine-readable definition files rather than manual processes",
            "Coding applications in the cloud",
            "A type of programming language",
            "A security policy",
        ],
        correct: 0,
    },
    // 43
    {
        id: 43,
        question: "Which tool is commonly used for Infrastructure as Code?",
        options: ["Terraform", "AWS CloudFormation", "Ansible", "All of the above"],
        correct: 3,
    },
    // 44
    {
        id: 44,
        question: "What is a cloud region?",
        options: [
            "A geographical area where a cloud provider has data centers",
            "A network zone",
            "A type of virtual machine",
            "A security group",
        ],
        correct: 0,
    },
    // 45
    {
        id: 45,
        question: "What is a cloud availability zone?",
        options: [
            "One or more data centers within a region, isolated from failures in other zones",
            "A geographic region",
            "A virtual network",
            "A storage bucket",
        ],
        correct: 0,
    },
    // 46
    {
        id: 46,
        question: "Which cloud service provides managed Kubernetes clusters?",
        options: ["EKS (AWS)", "AKS (Azure)", "GKE (GCP)", "All of the above"],
        correct: 3,
    },
    // 47
    {
        id: 47,
        question: "What is a container registry?",
        options: [
            "A service to store and manage container images",
            "A type of container",
            "A virtual machine",
            "A database",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "What is the difference between a container and a virtual machine?",
        options: [
            "Containers share the host OS kernel and are lightweight; VMs run a full OS and are heavier",
            "They are the same",
            "VMs are more portable than containers",
            "Containers require a hypervisor",
        ],
        correct: 0,
    },
    // 49
    {
        id: 49,
        question: "What is a function-as-a-service (FaaS) in cloud computing?",
        options: [
            "A serverless execution model where functions are triggered by events",
            "A type of container orchestration",
            "A database service",
            "A storage service",
        ],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question: "Which of the following is an emerging trend in cloud computing?",
        options: [
            "Edge computing",
            "AI/ML integration",
            "Quantum computing as a service",
            "All of the above",
        ],
        correct: 3,
    },
];

// ---------- COMPONENT ----------
export default function CloudComputingQuiz() {
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
                    Cloud Computing Quiz – 50 MCQs Test Your Cloud Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your Cloud Computing knowledge with 50 high-quality MCQs covering IaaS, PaaS, SaaS, deployment models, AWS, Azure, GCP, virtualization, containers, serverless, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="Cloud Computing quiz, cloud MCQ, IaaS, PaaS, SaaS, AWS, Azure, GCP, virtualization, containers, Kubernetes, serverless, cloud security, deployment models"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Cloud Quiz" />
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
                <meta property="og:title" content="Cloud Computing Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your cloud computing skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/cloud" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-cloud.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Cloud Computing Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original cloud computing MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Cloud Computing Quiz",
                            "description": "50 multiple-choice questions covering IaaS, PaaS, SaaS, deployment models, AWS, Azure, GCP, virtualization, containers, serverless, security, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Cloud Computing",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "Cloud Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/cloud" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                ☁️ Cloud Computing Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • IaaS • PaaS • SaaS • Providers • Virtualization • Containers • Serverless • Security
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