import { useState } from "react";
import Head from "next/head";
import SimpleLayout from "@/components/SimpleLayout";

// ---------- 50 MACHINE LEARNING QUESTIONS ----------
const questions = [
    // 1
    {
        id: 1,
        question: "What is Machine Learning?",
        options: [
            "A subset of AI that enables systems to learn and improve from experience without explicit programming",
            "A programming language for data analysis",
            "A type of database management",
            "A hardware component for neural networks",
        ],
        correct: 0,
    },
    // 2
    {
        id: 2,
        question: "Which of the following is a type of machine learning?",
        options: [
            "Supervised learning",
            "Unsupervised learning",
            "Reinforcement learning",
            "All of the above",
        ],
        correct: 3,
    },
    // 3
    {
        id: 3,
        question: "In supervised learning, the training data includes:",
        options: [
            "Input features and corresponding output labels",
            "Only input features",
            "Only output labels",
            "No labels",
        ],
        correct: 0,
    },
    // 4
    {
        id: 4,
        question: "In unsupervised learning, the training data includes:",
        options: [
            "Input features without labels",
            "Input features with labels",
            "Only output labels",
            "No data",
        ],
        correct: 0,
    },
    // 5
    {
        id: 5,
        question: "Which of the following is a regression algorithm?",
        options: [
            "Linear Regression",
            "Logistic Regression",
            "Both A and B",
            "K-Means",
        ],
        correct: 2,
    },
    // 6
    {
        id: 6,
        question: "Which of the following is a classification algorithm?",
        options: [
            "Decision Tree",
            "Support Vector Machine",
            "Logistic Regression",
            "All of the above",
        ],
        correct: 3,
    },
    // 7
    {
        id: 7,
        question: "What does the term 'overfitting' mean?",
        options: [
            "The model performs well on training data but poorly on unseen data",
            "The model performs poorly on both training and test data",
            "The model generalizes well",
            "The model has too few parameters",
        ],
        correct: 0,
    },
    // 8
    {
        id: 8,
        question: "What does the term 'underfitting' mean?",
        options: [
            "The model is too simple to capture the underlying patterns",
            "The model is too complex and captures noise",
            "The model performs well on test data",
            "The model has high variance",
        ],
        correct: 0,
    },
    // 9
    {
        id: 9,
        question: "Bias-variance trade-off refers to:",
        options: [
            "The balance between model simplicity and complexity",
            "The trade-off between training and test error",
            "The trade-off between precision and recall",
            "The balance between accuracy and speed",
        ],
        correct: 0,
    },
    // 10
    {
        id: 10,
        question: "Which of the following techniques helps prevent overfitting?",
        options: [
            "Regularization",
            "Cross-validation",
            "Early stopping",
            "All of the above",
        ],
        correct: 3,
    },
    // 11
    {
        id: 11,
        question: "What is L1 regularization?",
        options: [
            "A penalty term that adds the absolute value of the weights to the loss function",
            "A penalty term that adds the squared value of the weights",
            "A technique to drop out neurons",
            "A data augmentation method",
        ],
        correct: 0,
    },
    // 12
    {
        id: 12,
        question: "What is L2 regularization?",
        options: [
            "A penalty term that adds the squared value of the weights to the loss function",
            "A penalty term that adds the absolute value of the weights",
            "A technique for feature selection",
            "A method for early stopping",
        ],
        correct: 0,
    },
    // 13
    {
        id: 13,
        question: "What is cross-validation?",
        options: [
            "A technique to evaluate model performance by partitioning data into multiple training/validation sets",
            "A method to increase training data size",
            "A type of neural network",
            "A regularization technique",
        ],
        correct: 0,
    },
    // 14
    {
        id: 14,
        question: "In k-fold cross-validation, the model is trained and validated:",
        options: [
            "k times, each time using a different fold as the validation set",
            "once",
            "twice",
            "k^2 times",
        ],
        correct: 0,
    },
    // 15
    {
        id: 15,
        question: "Which of the following is a clustering algorithm?",
        options: ["K-Means", "DBSCAN", "Hierarchical", "All of the above"],
        correct: 3,
    },
    // 16
    {
        id: 16,
        question: "What is the elbow method used for?",
        options: [
            "To determine the optimal number of clusters in K-Means",
            "To select the best learning rate",
            "To choose the number of hidden layers",
            "To evaluate classification performance",
        ],
        correct: 0,
    },
    // 17
    {
        id: 17,
        question: "What is a decision tree?",
        options: [
            "A flowchart-like structure where each node represents a test on an attribute, and branches represent outcomes",
            "A clustering algorithm",
            "A dimensionality reduction technique",
            "A type of neural network",
        ],
        correct: 0,
    },
    // 18
    {
        id: 18,
        question: "In decision trees, the impurity measure is used to:",
        options: [
            "Select the best attribute for splitting",
            "Prune the tree",
            "Calculate the depth of the tree",
            "Initialize the tree",
        ],
        correct: 0,
    },
    // 19
    {
        id: 19,
        question: "Which impurity measure is commonly used in decision trees?",
        options: ["Gini impurity", "Entropy", "Information gain", "All of the above"],
        correct: 3,
    },
    // 20
    {
        id: 20,
        question: "What is a random forest?",
        options: [
            "An ensemble of decision trees using bagging",
            "A single decision tree",
            "A clustering method",
            "A neural network architecture",
        ],
        correct: 0,
    },
    // 21
    {
        id: 21,
        question: "What is boosting?",
        options: [
            "An ensemble technique that combines weak learners sequentially to create a strong learner",
            "A method to increase data size",
            "A regularization technique",
            "A type of clustering",
        ],
        correct: 0,
    },
    // 22
    {
        id: 22,
        question: "Which of the following is a boosting algorithm?",
        options: ["AdaBoost", "Gradient Boosting", "XGBoost", "All of the above"],
        correct: 3,
    },
    // 23
    {
        id: 23,
        question: "What is a Support Vector Machine (SVM)?",
        options: [
            "A supervised algorithm that finds the hyperplane that maximizes the margin between classes",
            "An unsupervised clustering algorithm",
            "A dimensionality reduction method",
            "A reinforcement learning algorithm",
        ],
        correct: 0,
    },
    // 24
    {
        id: 24,
        question: "In SVM, what is the kernel trick?",
        options: [
            "A method to implicitly map data to a higher-dimensional space for linear separation",
            "A technique to reduce the number of support vectors",
            "A method to handle missing data",
            "A way to speed up training",
        ],
        correct: 0,
    },
    // 25
    {
        id: 25,
        question: "Which kernel is commonly used in SVM for non-linear classification?",
        options: ["Linear", "Polynomial", "RBF", "All of the above"],
        correct: 3,
    },
    // 26
    {
        id: 26,
        question: "What is logistic regression used for?",
        options: [
            "Binary classification",
            "Multiclass classification",
            "Regression",
            "Clustering",
        ],
        correct: 0,
    },
    // 27
    {
        id: 27,
        question: "In logistic regression, the output is transformed using:",
        options: [
            "The sigmoid function",
            "The ReLU function",
            "The tanh function",
            "The softmax function",
        ],
        correct: 0,
    },
    // 28
    {
        id: 28,
        question: "What is the loss function typically used for logistic regression?",
        options: [
            "Cross-entropy log loss",
            "Mean squared error",
            "Hinge loss",
            "Exponential loss",
        ],
        correct: 0,
    },
    // 29
    {
        id: 29,
        question: "What is the difference between linear regression and logistic regression?",
        options: [
            "Linear regression is for continuous output; logistic regression is for categorical output",
            "Linear regression uses a linear activation; logistic uses sigmoid",
            "Both A and B",
            "They are the same",
        ],
        correct: 2,
    },
    // 30
    {
        id: 30,
        question: "Which of the following is a metric for evaluating regression models?",
        options: ["Mean Squared Error", "R-squared", "Mean Absolute Error", "All of the above"],
        correct: 3,
    },
    // 31
    {
        id: 31,
        question: "Which of the following is a metric for evaluating classification models?",
        options: ["Accuracy", "Precision", "Recall", "All of the above"],
        correct: 3,
    },
    // 32
    {
        id: 32,
        question: "What is the F1-score?",
        options: [
            "The harmonic mean of precision and recall",
            "The arithmetic mean of precision and recall",
            "The product of precision and recall",
            "The difference between precision and recall",
        ],
        correct: 0,
    },
    // 33
    {
        id: 33,
        question: "What is the confusion matrix?",
        options: [
            "A table used to describe the performance of a classification model",
            "A matrix used for clustering",
            "A visualization of neural network weights",
            "A feature extraction method",
        ],
        correct: 0,
    },
    // 34
    {
        id: 34,
        question: "In a confusion matrix, what are true positives (TP)?",
        options: [
            "Correctly predicted positive instances",
            "Incorrectly predicted positive instances",
            "Correctly predicted negative instances",
            "Incorrectly predicted negative instances",
        ],
        correct: 0,
    },
    // 35
    {
        id: 35,
        question: "In a confusion matrix, what are false positives (FP)?",
        options: [
            "Incorrectly predicted positive instances",
            "Correctly predicted positive instances",
            "Correctly predicted negative instances",
            "Incorrectly predicted negative instances",
        ],
        correct: 0,
    },
    // 36
    {
        id: 36,
        question: "What is the ROC curve?",
        options: [
            "A plot of true positive rate vs false positive rate at various classification thresholds",
            "A plot of precision vs recall",
            "A plot of accuracy vs model complexity",
            "A plot of loss vs epochs",
        ],
        correct: 0,
    },
    // 37
    {
        id: 37,
        question: "What does AUC stand for?",
        options: [
            "Area Under the Curve (of ROC)",
            "Accuracy Under Curve",
            "Average Unweighted Classification",
            "Automated Unified Clustering",
        ],
        correct: 0,
    },
    // 38
    {
        id: 38,
        question: "What is feature scaling?",
        options: [
            "Transforming features to a similar scale to improve convergence",
            "Removing irrelevant features",
            "Creating new features from existing ones",
            "Encoding categorical variables",
        ],
        correct: 0,
    },
    // 39
    {
        id: 39,
        question: "Which method is used for feature scaling?",
        options: ["Standardization", "Normalization", "Both A and B", "Neither"],
        correct: 2,
    },
    // 40
    {
        id: 40,
        question: "What is principal component analysis (PCA)?",
        options: [
            "A dimensionality reduction technique that transforms data to a lower-dimensional space",
            "A classification algorithm",
            "A clustering method",
            "A reinforcement learning method",
        ],
        correct: 0,
    },
    // 41
    {
        id: 41,
        question: "What is t-SNE?",
        options: [
            "A technique for visualizing high-dimensional data in 2D or 3D",
            "A clustering algorithm",
            "A regression technique",
            "A neural network layer",
        ],
        correct: 0,
    },
    // 42
    {
        id: 42,
        question: "What is a hyperparameter?",
        options: [
            "A parameter set before training, such as learning rate or number of trees",
            "A parameter learned during training",
            "The output of the model",
            "A type of activation function",
        ],
        correct: 0,
    },
    // 43
    {
        id: 43,
        question: "What is a parameter in machine learning?",
        options: [
            "A variable learned from the training data, such as weights in a linear model",
            "A setting chosen before training",
            "A function that evaluates the model",
            "A feature of the data",
        ],
        correct: 0,
    },
    // 44
    {
        id: 44,
        question: "Which of the following is a gradient descent variant?",
        options: ["Batch gradient descent", "Stochastic gradient descent", "Mini-batch gradient descent", "All of the above"],
        correct: 3,
    },
    // 45
    {
        id: 45,
        question: "What is the learning rate in gradient descent?",
        options: [
            "The step size used to update weights during optimization",
            "The number of iterations",
            "The batch size",
            "The regularization strength",
        ],
        correct: 0,
    },
    // 46
    {
        id: 46,
        question: "What is early stopping?",
        options: [
            "A technique to stop training when the validation performance starts to degrade to prevent overfitting",
            "A method to speed up convergence",
            "A type of regularization that adds noise to weights",
            "A way to reduce the number of features",
        ],
        correct: 0,
    },
    // 47
    {
        id: 47,
        question: "What is ensemble learning?",
        options: [
            "Combining multiple models to improve performance",
            "Training a single model",
            "Using a single algorithm",
            "A type of unsupervised learning",
        ],
        correct: 0,
    },
    // 48
    {
        id: 48,
        question: "Which of the following is an ensemble method?",
        options: ["Bagging", "Boosting", "Stacking", "All of the above"],
        correct: 3,
    },
    // 49
    {
        id: 49,
        question: "What is the difference between bagging and boosting?",
        options: [
            "Bagging trains models in parallel; boosting trains sequentially",
            "Bagging reduces variance; boosting reduces bias",
            "Both A and B",
            "They are the same",
        ],
        correct: 2,
    },
    // 50
    {
        id: 50,
        question: "What is the future of machine learning?",
        options: [
            "Explainable AI",
            "Automated machine learning (AutoML)",
            "Federated learning",
            "All of the above",
        ],
        correct: 3,
    },
];

// ---------- COMPONENT ----------
export default function MLQuiz() {
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
                    Machine Learning Quiz – 50 MCQs Test Your ML Knowledge
                </title>
                <meta
                    name="description"
                    content="Test your Machine Learning knowledge with 50 high-quality MCQs covering supervised, unsupervised, regression, classification, clustering, evaluation, regularization, ensemble methods, and more. Score instantly!"
                />
                <meta
                    name="keywords"
                    content="Machine Learning quiz, ML MCQ, supervised learning, unsupervised learning, regression, classification, clustering, SVM, decision tree, random forest, neural networks, evaluation metrics"
                />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="ML Quiz" />
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
                <meta property="og:title" content="Machine Learning Quiz – 50 MCQs" />
                <meta
                    property="og:description"
                    content="Test your ML skills with 50 original MCQs. Get instant results and see your score!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://codeskipper.in/test/ml" />
                <meta
                    property="og:image"
                    content="https://codeskipper.in/og-image-ml.jpg"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Machine Learning Quiz – 50 MCQs" />
                <meta
                    name="twitter:description"
                    content="50 original ML MCQs – test your knowledge now!"
                />

                {/* Schema.org JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Quiz",
                            "name": "Machine Learning Quiz",
                            "description": "50 multiple-choice questions covering supervised, unsupervised, regression, classification, clustering, evaluation, regularization, ensemble methods, and more.",
                            "educationalLevel": "Intermediate to Advanced",
                            "about": {
                                "@type": "Thing",
                                "name": "Machine Learning",
                            },
                            "creator": {
                                "@type": "Organization",
                                "name": "ML Quiz",
                            },
                            "numberOfQuestions": 50,
                        }),
                    }}
                />

                {/* Canonical */}
                <link rel="canonical" href="https://codeskipper.in/test/ml" />
            </Head>

            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                                🧠 Machine Learning Quiz
                            </h1>
                            <p className="mt-2 text-slate-600 text-sm md:text-base">
                                50 original MCQs • Supervised • Unsupervised • Regression • Classification • Clustering • Evaluation
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