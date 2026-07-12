import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 ARTIFICIAL INTELLIGENCE QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "What is Artificial Intelligence (AI)?",
        options: [
            "A branch of computer science focused on creating machines that can perform tasks that typically require human intelligence",
            "A programming language",
            "A type of hardware",
            "A database management system",
        ],
        correct: 0,
    },
    // 2
    {
        id: 2,
        question: "Who is credited with coining the term 'Artificial Intelligence' in 1956?",
        options: [
            "Alan Turing",
            "John McCarthy",
            "Marvin Minsky",
            "Herbert Simon",
        ],
        correct: 1,
    },
    // 3
    {
        id: 3,
        question: "What is the Turing Test?",
        options: [
            "A test to evaluate a machine's ability to exhibit intelligent behavior equivalent to a human",
            "A test for measuring CPU performance",
            "A programming challenge",
            "A security protocol",
        ],
        correct: 0,
    },
    // 4
    {
        id: 4,
        question: "Which of the following is a subfield of AI?",
        options: [
            "Machine Learning",
            "Natural Language Processing",
            "Computer Vision",
            "All of the above",
        ],
        correct: 3,
    },
    // 5
    {
        id: 5,
        question: "What is Machine Learning (ML)?",
        options: [
            "A subset of AI that enables systems to learn from data without explicit programming",
            "A programming paradigm",
            "A database technique",
            "A networking protocol",
        ],
        correct: 0,
    },
    // 6
    {
        id: 6,
        question: "Which of the following are the main types of machine learning?",
        options: [
            "Supervised, Unsupervised, Reinforcement",
            "Static, Dynamic, Hybrid",
            "Online, Offline, Batch",
            "Symbolic, Connectionist, Evolutionary",
        ],
        correct: 0,
    },
    // 7
    {
        id: 7,
        question: "In supervised learning, the model is trained on:",
        options: [
            "Labeled data",
            "Unlabeled data",
            "Reward signals",
            "No data",
        ],
        correct: 0,
    },
    // 8
    {
        id: 8,
        question: "In unsupervised learning, the model is trained on:",
        options: [
            "Labeled data",
            "Unlabeled data",
            "Reward signals",
            "Both labeled and unlabeled data",
        ],
        correct: 1,
    },
    // 9
    {
        id: 9,
        question: "Reinforcement learning involves:",
        options: [
            "An agent learning by interacting with an environment and receiving rewards or penalties",
            "Learning from labeled examples",
            "Finding hidden patterns in data",
            "Clustering data",
        ],
        correct: 0,
    },
    // 10
    {
        id: 10,
        question: "What is a neural network?",
        options: [
            "A computational model inspired by the human brain, composed of layers of interconnected nodes",
            "A type of database",
            "A programming language",
            "A hardware device",
        ],
        correct: 0,
    },
    // 11
    {
        id: 11,
        question: "What is the role of an activation function in a neural network?",
        options: [
            "To introduce non-linearity into the network",
            "To normalize the input data",
            "To reduce the number of parameters",
            "To initialize weights",
        ],
        correct: 0,
    },
    // 12
    {
        id: 12,
        question: "Which of the following is a common activation function?",
        options: ["Sigmoid", "ReLU", "Tanh", "All of the above"],
        correct: 3,
    },
    // 13
    {
        id: 13,
        question: "What is backpropagation?",
        options: [
            "An algorithm to compute the gradient of the loss function with respect to the network weights",
            "A method to initialize weights",
            "A technique to reduce overfitting",
            "A data augmentation technique",
        ],
        correct: 0,
    },
    // 14
    {
        id: 14,
        question: "What is a loss function in machine learning?",
        options: [
            "A function that measures how well the model's predictions match the actual targets",
            "A function that regularizes the model",
            "A function that generates data",
            "A function that optimizes the learning rate",
        ],
        correct: 0,
    },
    // 15
    {
        id: 15,
        question: "What is gradient descent?",
        options: [
            "An optimization algorithm used to minimize the loss function by updating weights iteratively",
            "A type of activation function",
            "A data preprocessing technique",
            "A model evaluation metric",
        ],
        correct: 0,
    },
    // 16
    {
        id: 16,
        question: "What is overfitting in machine learning?",
        options: [
            "When a model learns the training data too well, including noise, and performs poorly on new data",
            "When a model performs well on both training and test data",
            "When a model is too simple to capture the underlying patterns",
            "When a model has too few parameters",
        ],
        correct: 0,
    },
    // 17
    {
        id: 17,
        question: "Which technique helps prevent overfitting?",
        options: [
            "Regularization",
            "Increasing model complexity",
            "Removing training data",
            "Using a larger learning rate",
        ],
        correct: 0,
    },
    // 18
    {
        id: 18,
        question: "What is cross-validation?",
        options: [
            "A technique to assess model performance by partitioning data into training and validation sets multiple times",
            "A method to augment data",
            "A feature selection technique",
            "A type of neural network architecture",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "What is a decision tree?",
        options: [
            "A flowchart-like structure where each internal node represents a test on an attribute, each branch represents an outcome, and each leaf represents a class label",
            "A type of neural network",
            "A clustering algorithm",
            "A dimensionality reduction technique",
        ],
        correct: 0,
    },
    // 20
    {
        id: 20,
        question: "In decision trees, what does entropy measure?",
        options: [
            "The impurity or randomness of a set of examples",
            "The accuracy of the tree",
            "The depth of the tree",
            "The number of leaves",
        ],
        correct: 0,
    },
    // 21
    {
        id: 21,
        question: "What is a random forest?",
        options: [
            "An ensemble learning method that builds multiple decision trees and combines their outputs",
            "A single decision tree",
            "A clustering algorithm",
            "A type of neural network",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "What is a Support Vector Machine (SVM)?",
        options: [
            "A supervised learning algorithm that finds the optimal hyperplane to separate classes",
            "An unsupervised clustering algorithm",
            "A reinforcement learning algorithm",
            "A dimensionality reduction method",
        ],
        correct: 0,
    },
    // 23
    {
        id: 23,
        question: "In SVM, what is a kernel?",
        options: [
            "A function that transforms data into a higher-dimensional space to make it linearly separable",
            "The margin between classes",
            "The support vectors",
            "The learning rate",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "What is K-means clustering?",
        options: [
            "An unsupervised learning algorithm that partitions data into K clusters based on similarity",
            "A supervised classification algorithm",
            "A reinforcement learning algorithm",
            "A neural network architecture",
        ],
        correct: 0,
    },
    // 25
    {
        id: 25,
        question: "What is Principal Component Analysis (PCA)?",
        options: [
            "A dimensionality reduction technique that transforms data to a lower-dimensional space while preserving variance",
            "A classification algorithm",
            "A clustering method",
            "A regression technique",
        ],
        correct: 0,
    },
    // 26
    {
        id: 26,
        question: "What is a perceptron?",
        options: [
            "The simplest type of neural network, consisting of a single layer of weights",
            "A deep neural network",
            "A convolutional neural network",
            "A recurrent neural network",
        ],
        correct: 0,
    },
    // 27
    {
        id: 27,
        question: "What is a Multi-Layer Perceptron (MLP)?",
        options: [
            "A neural network with one or more hidden layers",
            "A network with only an input and output layer",
            "A type of convolutional network",
            "A type of recurrent network",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "What is a Convolutional Neural Network (CNN) primarily used for?",
        options: [
            "Image and spatial data processing",
            "Sequential data processing",
            "Language modeling",
            "Reinforcement learning",
        ],
        correct: 0,
    },
    // 29
    {
        id: 29,
        question: "What is a Recurrent Neural Network (RNN) primarily used for?",
        options: [
            "Sequential data and time-series processing",
            "Image classification",
            "Dimensionality reduction",
            "Clustering",
        ],
        correct: 0,
    },
    // 30
    {
        id: 30,
        question: "What is LSTM (Long Short-Term Memory)?",
        options: [
            "A type of RNN designed to capture long-term dependencies",
            "A type of CNN",
            "A clustering algorithm",
            "A dimensionality reduction technique",
        ],
        correct: 0,
    },
    // 31
    {
        id: 31,
        question: "What is transfer learning?",
        options: [
            "Using a pre-trained model on a related task and fine-tuning it on a new task",
            "Transferring data from one format to another",
            "Moving models between different hardware",
            "A type of reinforcement learning",
        ],
        correct: 0,
    },
    // 32
    {
        id: 32,
        question: "What is Natural Language Processing (NLP)?",
        options: [
            "A field of AI focused on enabling machines to understand, interpret, and generate human language",
            "A type of computer vision",
            "A database system",
            "A programming language",
        ],
        correct: 0,
    },
    // 33
    {
        id: 33,
        question: "What is tokenization in NLP?",
        options: [
            "The process of splitting text into smaller units called tokens (words, subwords, or characters)",
            "The process of converting tokens to vectors",
            "The process of identifying named entities",
            "The process of parsing grammar",
        ],
        correct: 0,
    },
    // 34
    {
        id: 34,
        question: "What is stemming?",
        options: [
            "Reducing words to their base or root form by removing affixes",
            "Converting words to lowercase",
            "Mapping words to their synonyms",
            "Replacing words with numerical IDs",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "What is lemmatization?",
        options: [
            "Reducing words to their dictionary form (lemma) using vocabulary and morphological analysis",
            "Removing stop words",
            "Performing part-of-speech tagging",
            "Tokenizing sentences",
        ],
        correct: 0,
    },
    // 36
    {
        id: 36,
        question: "What is a language model?",
        options: [
            "A probability distribution over sequences of words, used to predict the next word or generate text",
            "A grammar checker",
            "A translation system",
            "A speech recognition engine",
        ],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "What is BERT?",
        options: [
            "A pre-trained transformer-based model for NLP tasks, developed by Google",
            "A type of CNN",
            "A clustering algorithm",
            "A reinforcement learning agent",
        ],
        correct: 0,
    },
    // 38
    {
        id: 38,
        question: "What is GPT (Generative Pre-trained Transformer)?",
        options: [
            "A transformer-based language model developed by OpenAI that generates human-like text",
            "A computer vision model",
            "An unsupervised clustering algorithm",
            "A type of decision tree",
        ],
        correct: 0,
    },
    // 39
    {
        id: 39,
        question: "What is Computer Vision?",
        options: [
            "A field of AI that enables machines to interpret and understand visual information from the world",
            "A branch of NLP",
            "A type of database",
            "A programming paradigm",
        ],
        correct: 0,
    },
    // 40
    {
        id: 40,
        question: "What is image classification?",
        options: [
            "The task of assigning a label to an image from a predefined set of categories",
            "The task of detecting objects and their locations in an image",
            "The task of segmenting an image into regions",
            "The task of generating new images",
        ],
        correct: 0,
    },
    // 41
    {
        id: 41,
        question: "What is object detection?",
        options: [
            "Identifying and localizing objects within an image by drawing bounding boxes around them",
            "Classifying the entire image",
            "Segmenting the image into pixels",
            "Generating an image description",
        ],
        correct: 0,
    },
    // 42
    {
        id: 42,
        question: "What is a convolutional layer in a CNN?",
        options: [
            "A layer that applies convolution operations to extract features from the input image",
            "A layer that performs pooling",
            "A layer that applies a non-linear activation",
            "A layer that flattens the input",
        ],
        correct: 0,
    },
    // 43
    {
        id: 43,
        question: "What is pooling in CNNs?",
        options: [
            "A down-sampling operation to reduce spatial dimensions and extract dominant features",
            "A type of convolution",
            "A normalization technique",
            "An activation function",
        ],
        correct: 0,
    },
    // 44
    {
        id: 44,
        question: "In reinforcement learning, what is the role of the environment?",
        options: [
            "It provides feedback to the agent in the form of states and rewards",
            "It trains the neural network",
            "It stores the memory",
            "It defines the loss function",
        ],
        correct: 0,
    },
    // 45
    {
        id: 45,
        question: "What is a Markov Decision Process (MDP)?",
        options: [
            "A mathematical framework for modeling decision-making in stochastic environments with the Markov property",
            "A type of neural network",
            "A clustering algorithm",
            "A dimensionality reduction method",
        ],
        correct: 0,
    },
    // 46
    {
        id: 46,
        question: "What is the exploration-exploitation trade-off in reinforcement learning?",
        options: [
            "The dilemma between trying new actions to discover their effects (exploration) and using known actions that yield high rewards (exploitation)",
            "The balance between model complexity and performance",
            "The trade-off between bias and variance",
            "The conflict between training speed and accuracy",
        ],
        correct: 0,
    },
    // 47
    {
        id: 47,
        question: "What is Q-learning?",
        options: [
            "A model-free reinforcement learning algorithm that learns the optimal action-value function",
            "A supervised learning algorithm",
            "An unsupervised clustering method",
            "A type of neural network",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "What is a genetic algorithm?",
        options: [
            "An optimization algorithm inspired by natural selection, using crossover, mutation, and selection",
            "A type of neural network",
            "A clustering algorithm",
            "A reinforcement learning algorithm",
        ],
        correct: 0,
    },
    // 49
    {
        id: 49,
        question: "What is fuzzy logic?",
        options: [
            "A form of many-valued logic that deals with reasoning that is approximate rather than fixed and exact",
            "A binary logic system",
            "A deterministic rule-based system",
            "A type of machine learning",
        ],
        correct: 0,
    },
    // 50
    {
        id: 50,
        question: "Which of the following is a major challenge for the future of AI?",
        options: [
            "Ethical considerations and bias",
            "Lack of computing power",
            "Limited data availability",
            "All of the above",
        ],
        correct: 0,
    },
];

// ---------- COMPONENT ----------
export default function AIQuiz() {
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
                    Artificial Intelligence Quiz – 50 MCQs Test Your AI Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your AI knowledge with high-quality MCQs covering machine learning, neural networks, NLP, computer vision, reinforcement learning, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="Artificial Intelligence quiz, AI MCQ, machine learning, neural networks, NLP, computer vision, reinforcement learning, deep learning, GPT, BERT, CNN, RNN"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="AI Quiz" />
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
                <meta property="og:title" content="Artificial Intelligence Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your AI skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/ai" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-ai.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Artificial Intelligence Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original AI MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Artificial Intelligence Quiz",
                            "description": "50 multiple-choice questions covering machine learning, deep learning, NLP, computer vision, reinforcement learning, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Artificial Intelligence",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "AI Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/ai" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🤖 Artificial Intelligence Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • ML • Neural Networks • NLP • Computer Vision • RL • Deep Learning
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