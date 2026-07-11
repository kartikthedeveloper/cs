import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaBrain,
    FaRobot,
    FaChartLine,
    FaDatabase,
    FaMicrochip,
    FaProjectDiagram,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaCogs,
    FaCode,
} from "react-icons/fa";

const MachineLearningInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Machine Learning Interview Questions ────────────────────────────────
    const questions = [
        {
            q: "What is Machine Learning and how does it differ from traditional programming?",
            a: "Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. In traditional programming, humans write rules and logic to process data and produce outputs. In ML, algorithms learn patterns from data and generate rules themselves. ML systems improve with more data, whereas traditional systems require manual updates to rules.",
        },
        {
            q: "Explain the difference between supervised, unsupervised, and reinforcement learning.",
            a: "Supervised learning uses labeled data to train models that map inputs to outputs (e.g., classification, regression). Unsupervised learning finds patterns in unlabeled data (e.g., clustering, dimensionality reduction). Reinforcement learning involves an agent learning optimal actions through trial and error, receiving rewards or penalties (e.g., game playing, robotics).",
        },
        {
            q: "What is the difference between classification and regression?",
            a: "Classification predicts discrete class labels (e.g., spam/not spam, cat/dog) while regression predicts continuous numeric values (e.g., house prices, temperature). Classification uses algorithms like logistic regression, SVM, and decision trees. Regression uses linear regression, random forest regression, and neural networks.",
        },
        {
            q: "Explain the bias-variance tradeoff in machine learning.",
            a: "Bias is error from overly simplistic assumptions (underfitting). Variance is error from excessive sensitivity to training data fluctuations (overfitting). Increasing model complexity reduces bias but increases variance. The goal is to find the optimal tradeoff that minimizes total error (bias² + variance + irreducible error). Regularization, cross-validation, and ensemble methods help manage this.",
        },
        {
            q: "What is overfitting and how can it be prevented?",
            a: "Overfitting occurs when a model learns noise and details in training data, performing poorly on unseen data. Prevention techniques: more training data, simplifying the model, regularization (L1/L2), cross-validation, early stopping, dropout, feature selection, and ensemble methods (bagging, boosting).",
        },
        {
            q: "Explain the difference between L1 and L2 regularization.",
            a: "L1 regularization (Lasso) adds the sum of absolute coefficients as a penalty, driving some coefficients to zero (feature selection). L2 regularization (Ridge) adds the sum of squared coefficients, penalizing large coefficients without zeroing them. L1 is robust to outliers and performs feature selection; L2 is computationally efficient and handles correlated features well.",
        },
        {
            q: "What is gradient descent and how does it work?",
            a: "Gradient descent is an optimization algorithm used to minimize the loss function by iteratively adjusting parameters in the direction of the negative gradient. Types: Batch GD (uses entire dataset), Stochastic GD (uses one sample), Mini-batch GD (uses a batch of samples). Learning rate controls step size. Momentum and adaptive methods (Adam, RMSprop) improve convergence.",
        },
        {
            q: "Explain the concept of learning rate and its impact.",
            a: "The learning rate controls how much to adjust weights during training. A high learning rate can cause overshooting and divergence. A low learning rate results in slow convergence and potential local minima. Adaptive methods (Adam, RMSprop) adjust learning rates dynamically. Schedules (step decay, cosine annealing) help improve convergence.",
        },
        {
            q: "What is cross-validation and why is it used?",
            a: "Cross-validation is a resampling technique for assessing model performance on unseen data. It partitions data into folds, trains on k-1 folds, and validates on the remaining fold, repeating k times (k-fold CV). It provides a robust estimate of performance, reduces overfitting, and helps in hyperparameter tuning.",
        },
        {
            q: "Explain the confusion matrix and derived metrics.",
            a: "A confusion matrix shows counts of True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN). Metrics: Accuracy = (TP+TN)/(TP+TN+FP+FN), Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1-score = 2*(Precision*Recall)/(Precision+Recall). These are essential for evaluating classification models.",
        },
        {
            q: "What is the ROC curve and AUC?",
            a: "ROC (Receiver Operating Characteristic) curve plots True Positive Rate vs. False Positive Rate at various thresholds. AUC (Area Under the Curve) measures the ability of a model to distinguish between classes. AUC = 0.5 means random guessing, AUC = 1.0 means perfect separation. Higher AUC indicates better model performance.",
        },
        {
            q: "Explain the difference between parametric and non-parametric models.",
            a: "Parametric models assume a fixed number of parameters and a specific functional form (e.g., linear regression, logistic regression). They are fast to train but less flexible. Non-parametric models do not assume a fixed form; the number of parameters grows with data (e.g., k-NN, decision trees, SVMs). They are more flexible but require more data.",
        },
        {
            q: "What is the curse of dimensionality?",
            a: "The curse of dimensionality refers to the exponential increase in volume and sparsity of data as dimensions increase. This makes distance-based algorithms (e.g., k-NN) ineffective, increases computational cost, and requires exponentially more data. Dimensionality reduction techniques (PCA, t-SNE) help mitigate this.",
        },
        {
            q: "Explain Principal Component Analysis (PCA).",
            a: "PCA is a dimensionality reduction technique that transforms data into a new coordinate system with uncorrelated principal components. It finds directions (components) that maximize variance. PCA reduces dimensionality, removes noise, and speeds up algorithms. It's used for visualization, feature extraction, and preprocessing.",
        },
        {
            q: "What is the difference between feature selection and feature extraction?",
            a: "Feature selection chooses a subset of original features (e.g., forward selection, backward elimination, LASSO). Feature extraction creates new features from the original ones (e.g., PCA, autoencoders). Selection preserves interpretability; extraction can capture complex interactions but sacrifices interpretability.",
        },
        {
            q: "Explain the concept of ensemble learning.",
            a: "Ensemble learning combines multiple base models to produce one optimal predictive model, improving accuracy and robustness. Types: Bagging (parallel, reduces variance, e.g., Random Forest), Boosting (sequential, reduces bias, e.g., AdaBoost, XGBoost), Stacking (meta-model combines predictions). Ensembles often outperform single models.",
        },
        {
            q: "What is the difference between bagging and boosting?",
            a: "Bagging builds models independently on bootstrapped samples and averages predictions (parallel, variance reduction). Boosting builds models sequentially, each correcting errors of previous ones (sequential, bias reduction). Bagging reduces overfitting; boosting can overfit. Examples: Random Forest (bagging), AdaBoost/XGBoost (boosting).",
        },
        {
            q: "Explain Random Forest and how it works.",
            a: "Random Forest is an ensemble of decision trees built using bagging and random feature selection. Each tree is trained on a bootstrap sample and uses a random subset of features for each split. Predictions are made by majority voting (classification) or averaging (regression). It handles high dimensions, is robust to overfitting, and provides feature importance.",
        },
        {
            q: "What is a decision tree and how does it work?",
            a: "A decision tree is a flowchart-like structure for classification/regression. It splits data using features based on criteria like Gini impurity, entropy, or variance reduction. Each internal node represents a test on a feature; each leaf represents a decision. It's interpretable but prone to overfitting, mitigated by pruning and ensemble methods.",
        },
        {
            q: "Explain the Gini impurity and entropy in decision trees.",
            a: "Gini impurity measures the probability of misclassifying a randomly chosen element, ranging from 0 (pure) to 0.5 (equal split for binary). Entropy measures uncertainty, ranging from 0 (pure) to 1 (equal split). Both are used as split criteria; Gini is computationally faster, entropy can produce more balanced trees.",
        },
        {
            q: "What is a Support Vector Machine (SVM) and how does it work?",
            a: "SVM finds the hyperplane that best separates data points of different classes with maximum margin. Support vectors are the closest points to the hyperplane. Kernel functions (polynomial, RBF) map data to higher dimensions for non-linear separation. SVM is effective for high-dimensional data and small datasets.",
        },
        {
            q: "Explain the kernel trick in SVM.",
            a: "The kernel trick allows SVM to operate in a higher-dimensional feature space without explicitly computing the transformation. It uses kernel functions (linear, polynomial, RBF, sigmoid) that compute dot products in the transformed space efficiently. This enables non-linear classification with linear algorithms.",
        },
        {
            q: "What is logistic regression and when is it used?",
            a: "Logistic regression is a classification algorithm that models the probability of a binary outcome using a sigmoid function. It outputs probabilities between 0 and 1. It's used for binary and multi-class classification (one-vs-rest). It's simple, interpretable, and provides probability estimates.",
        },
        {
            q: "Explain the difference between linear regression and logistic regression.",
            a: "Linear regression predicts continuous values and uses a linear function. Logistic regression predicts probabilities of discrete classes and uses a sigmoid function. Linear regression minimizes MSE; logistic regression maximizes log-likelihood. Linear regression is for regression; logistic regression is for classification.",
        },
        {
            q: "What is the k-Nearest Neighbors (k-NN) algorithm?",
            a: "k-NN is a non-parametric, lazy learning algorithm that classifies/predicts based on the majority class or average of the k-nearest neighbors (using distance metrics like Euclidean, Manhattan). It's simple and effective but computationally expensive for large datasets and sensitive to irrelevant features.",
        },
        {
            q: "Explain the concept of clustering and common algorithms.",
            a: "Clustering groups similar data points without labels. Common algorithms: K-means (partitions into k clusters based on centroids), Hierarchical (agglomerative/divisive), DBSCAN (density-based, handles arbitrary shapes), Gaussian Mixture Models (probabilistic). Evaluation: silhouette score, Davies-Bouldin index.",
        },
        {
            q: "What is the K-means algorithm and how does it work?",
            a: "K-means partitions n observations into k clusters, each with a centroid. Steps: 1) Initialize k centroids, 2) Assign each point to nearest centroid, 3) Update centroids as mean of points in each cluster, 4) Repeat until convergence. The Elbow method determines the optimal k. It's sensitive to initialization and outliers.",
        },
        {
            q: "Explain the concept of the elbow method in K-means.",
            a: "The elbow method helps determine the optimal number of clusters (k) by plotting the within-cluster sum of squares (WCSS) against k. The 'elbow' point where the rate of decrease sharply changes indicates the optimal k. Beyond this point, adding clusters provides diminishing returns.",
        },
        {
            q: "What is DBSCAN and how does it differ from K-means?",
            a: "DBSCAN (Density-Based Spatial Clustering) finds clusters based on density. It groups points with many nearby neighbors. It handles arbitrary shapes, is robust to outliers, and doesn't require specifying the number of clusters. K-means assumes spherical clusters and requires k. DBSCAN uses eps (neighborhood radius) and minPts (minimum points).",
        },
        {
            q: "Explain the concept of dimensionality reduction and its importance.",
            a: "Dimensionality reduction reduces the number of features while preserving essential information. It addresses the curse of dimensionality, reduces computational cost, removes noise, and improves visualization. Techniques: PCA, t-SNE, UMAP, autoencoders. It's crucial for preprocessing high-dimensional data.",
        },
        {
            q: "What is t-SNE and when is it used?",
            a: "t-SNE (t-Distributed Stochastic Neighbor Embedding) is a non-linear dimensionality reduction technique for visualizing high-dimensional data in 2D or 3D. It preserves local structure and is effective for exploring clusters in datasets. It is computationally expensive and stochastic, so results vary.",
        },
        {
            q: "Explain the concept of neural networks.",
            a: "Neural networks are computational models inspired by the human brain. They consist of layers of interconnected neurons (nodes) with weights and biases. Each neuron applies an activation function (ReLU, sigmoid, tanh). Networks learn by adjusting weights via backpropagation and gradient descent. Deep learning uses networks with many hidden layers.",
        },
        {
            q: "What is backpropagation and how does it work?",
            a: "Backpropagation is the algorithm used to train neural networks by computing gradients of the loss function with respect to each weight. It propagates error backward from the output layer to the input layer, updating weights using gradient descent. It leverages the chain rule to efficiently compute gradients.",
        },
        {
            q: "Explain activation functions and their types.",
            a: "Activation functions introduce non-linearity, enabling complex mappings. Types: Sigmoid (0-1, good for binary), Tanh (-1 to 1), ReLU (max(0,x), fast and avoids vanishing gradient), Leaky ReLU (allows small negative values), Softmax (probability distribution for multi-class). ReLU is most common for hidden layers.",
        },
        {
            q: "What is the vanishing gradient problem and how can it be mitigated?",
            a: "The vanishing gradient problem occurs when gradients become extremely small during backpropagation in deep networks, preventing learning. Mitigation: use ReLU activations, batch normalization, residual connections (ResNet), careful weight initialization (Xavier/He), and gradient clipping.",
        },
        {
            q: "Explain the concept of Convolutional Neural Networks (CNNs).",
            a: "CNNs are specialized neural networks for processing grid-like data (images). They use convolutional layers (filters to extract features), pooling layers (downsampling), and fully connected layers for classification. They are the foundation of computer vision tasks: image classification, object detection, segmentation.",
        },
        {
            q: "What is pooling in CNNs and what are the types?",
            a: "Pooling reduces spatial dimensions, decreasing computation and overfitting. Types: Max pooling (takes maximum in a window) and Average pooling (takes average). Pooling provides translation invariance and is applied after convolutional layers.",
        },
        {
            q: "Explain the concept of Recurrent Neural Networks (RNNs).",
            a: "RNNs are networks with loops for processing sequential data (time series, text). They maintain a hidden state that captures information from previous steps. Applications: language modeling, machine translation, speech recognition. Standard RNNs suffer from vanishing gradients; LSTMs and GRUs address this.",
        },
        {
            q: "What is LSTM and how does it work?",
            a: "LSTM (Long Short-Term Memory) is a special RNN capable of learning long-term dependencies. It has a cell state (memory) and three gates: forget (discard irrelevant info), input (add new info), output (compute output). This structure allows preserving information over long sequences.",
        },
        {
            q: "Explain the attention mechanism and its importance.",
            a: "Attention allows models to focus on relevant parts of the input when producing output. It computes a weighted sum of input elements, where weights reflect importance. Attention is the foundation of Transformers and has revolutionized NLP (BERT, GPT) and computer vision.",
        },
        {
            q: "What is the Transformer architecture and its key components?",
            a: "The Transformer uses self-attention and multi-head attention, dispensing with recurrence and convolutions. Key components: self-attention, positional encoding, multi-head attention, feed-forward networks, layer normalization, and residual connections. It's the backbone of modern LLMs (GPT, BERT).",
        },
        {
            q: "Explain the concept of transfer learning.",
            a: "Transfer learning reuses a pre-trained model on a new task. It leverages knowledge from a large source dataset, reducing the need for labeled data and training time. It's used in computer vision (ImageNet pre-trained CNNs) and NLP (BERT, GPT fine-tuning).",
        },
        {
            q: "What is fine-tuning in the context of transfer learning?",
            a: "Fine-tuning is the process of taking a pre-trained model and retraining some or all of its layers on a new, usually smaller, dataset. It adapts the model to the new task while preserving general features learned from the source task. It's a key technique in transfer learning.",
        },
        {
            q: "Explain the concept of reinforcement learning.",
            a: "Reinforcement Learning is about learning optimal decision-making through interaction with an environment. The agent takes actions, receives rewards, and aims to maximize cumulative reward. It's formulated as a Markov Decision Process (MDP). Algorithms: Q-learning, Policy Gradients, Actor-Critic. Applications: game AI, robotics, autonomous driving.",
        },
        {
            q: "What is the difference between model-free and model-based RL?",
            a: "Model-free RL learns the optimal policy or value function directly from interactions without a model of the environment. It's simple but sample-inefficient (Q-learning, DQN, PPO). Model-based RL learns a model of the environment dynamics and uses it to plan. It's more sample-efficient but model errors can degrade performance.",
        },
        {
            q: "Explain the concept of Autoencoders.",
            a: "Autoencoders are neural networks for unsupervised learning that learn to reconstruct their input. They have an encoder (compresses data) and a decoder (reconstructs). They are used for dimensionality reduction, anomaly detection, and generative modeling (Variational Autoencoders).",
        },
        {
            q: "What is Generative Adversarial Networks (GANs)?",
            a: "GANs consist of two networks: a Generator (creates fake data) and a Discriminator (distinguishes real from fake). They are trained adversarially, with the Generator improving to fool the Discriminator. Applications: image generation, style transfer, super-resolution, and data augmentation.",
        },
        {
            q: "Explain the concept of the confusion matrix.",
            a: "A confusion matrix is a table for evaluating classification models. It shows true positives, true negatives, false positives, and false negatives. From it, we derive accuracy, precision, recall, F1-score, and specificity. It provides a comprehensive view of model performance, especially for imbalanced datasets.",
        },
        {
            q: "What is the difference between precision and recall?",
            a: "Precision is the proportion of true positives among all positive predictions: TP/(TP+FP). Recall (sensitivity) is the proportion of true positives among all actual positives: TP/(TP+FN). Precision focuses on the quality of positive predictions; recall focuses on the ability to find all positives. They are a tradeoff.",
        },
        {
            q: "Explain the F1-score and when to use it.",
            a: "F1-score is the harmonic mean of precision and recall: 2*(Precision*Recall)/(Precision+Recall). It balances both metrics and is used when there is an uneven class distribution or when both false positives and false negatives are costly. It's better than accuracy for imbalanced datasets.",
        },
        {
            q: "What are some future trends in Machine Learning?",
            a: "Future trends include: Large Language Models (LLMs) and multimodal AI, foundation models, more efficient training (sparse models, quantization), synthetic data generation, AutoML and MLOps, responsible AI and ethics, edge AI, reinforcement learning from human feedback (RLHF), and integration with quantum computing.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "ML", text: "Algorithms &amp; More" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Machine Learning Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Machine Learning interview with 50+ expert questions covering algorithms, evaluation metrics, deep learning, and more."
                />
                <meta
                    name="keywords"
                    content="Machine Learning interview questions, ML, supervised learning, unsupervised learning, neural networks, deep learning, scikit-learn, TensorFlow"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#6C63FF" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/machine-learning" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Machine Learning Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Machine Learning interview prep with 50+ questions covering algorithms, evaluation, deep learning, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/machine-learning" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Machine Learning Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Machine Learning interviews with 50+ questions covering core concepts and algorithms."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/machine-learning" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/machine-learning" />

                {/* ─── JSON-LD: WebSite ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Code Skipper",
                            url: "https://codeskipper.in",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://codeskipper.in/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />

                {/* ─── JSON-LD: Organization ────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Code Skipper",
                            url: "https://codeskipper.in",
                            logo: "https://codeskipper.in/Images/logo.png",
                            description: "Interview preparation platform for data scientists and ML engineers.",
                            sameAs: ["https://twitter.com/codeskipper", "https://github.com/codeskipper"],
                        }),
                    }}
                />

                {/* ─── JSON-LD: Breadcrumb ──────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                { "@type": "ListItem", position: 1, name: "Home", item: "https://codeskipper.in" },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Interview Questions",
                                    item: "https://codeskipper.in/interview",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 3,
                                    name: "Machine Learning",
                                    item: "https://codeskipper.in/interview/machine-learning",
                                },
                            ],
                        }),
                    }}
                />

                {/* ─── JSON-LD: ItemList ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            name: "Machine Learning Interview Questions",
                            description: "50+ curated Machine Learning interview questions with detailed answers.",
                            numberOfItems: questions.length,
                            itemListElement: questions.map((item, idx) => ({
                                "@type": "ListItem",
                                position: idx + 1,
                                item: {
                                    "@type": "Question",
                                    name: item.q,
                                    text: item.q,
                                    answerCount: 1,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: item.a,
                                    },
                                },
                            })),
                        }),
                    }}
                />

                {/* ─── JSON-LD: FAQPage ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: questions.map((item) => ({
                                "@type": "Question",
                                name: item.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: item.a,
                                },
                            })),
                        }),
                    }}
                />

                {/* ─── JSON-LD: CollectionPage ──────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "Machine Learning Interview Questions Collection",
                            description: "A comprehensive collection of Machine Learning interview questions for data scientists.",
                            url: "https://codeskipper.in/interview/machine-learning",
                            about: {
                                "@type": "Thing",
                                name: "Machine Learning Interview Preparation",
                            },
                            mainEntity: {
                                "@type": "ItemList",
                                itemListElement: questions.map((item, idx) => ({
                                    "@type": "ListItem",
                                    position: idx + 1,
                                    item: {
                                        "@type": "Question",
                                        name: item.q,
                                    },
                                })),
                            },
                        }),
                    }}
                />

                {/* ─── JSON-LD: EducationalOrganization ─────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            name: "Code Skipper",
                            description: "Machine Learning interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Machine Learning, Deep Learning, Data Science, AI",
                            educationalLevel: "Intermediate to Advanced",
                        }),
                    }}
                />

                {/* ─── JSON-LD: Course ───────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Course",
                            name: "Machine Learning Interview Preparation",
                            description: "Complete preparation for Machine Learning interviews covering algorithms and applications.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "Supervised Learning, Unsupervised Learning, Neural Networks, Evaluation Metrics, Ensemble Methods",
                            url: "https://codeskipper.in/interview/machine-learning",
                        }),
                    }}
                />

                {/* ─── JSON-LD: SearchAction ────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SearchAction",
                            target: "https://codeskipper.in/search?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        }),
                    }}
                />
            </Head>

            {/* ─── Main Content ──────────────────────────────────────────────────────── */}
            <section className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaBrain className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Machine Learning <span className="text-purple-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Machine Learning interview —
                            from algorithms and evaluation to deep learning and model deployment.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaProjectDiagram /> ML Algorithms
                            </span>
                        </div>
                    </motion.div>

                    {/* ─── Stats ────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* ─── Questions ────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4 mb-12"
                    >
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-purple-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-purple-500 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-purple-600`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openQuestion === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="border-t border-gray-100"
                                        >
                                            <div className="p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white">
                                                <div className="flex items-start gap-3">
                                                    <FaLightbulb className="text-purple-400 text-xl flex-shrink-0 mt-1" />
                                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ─── Pro Tips ──────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FaRobot className="text-purple-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Machine Learning Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaChartLine className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master the Fundamentals</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be solid on supervised/unsupervised learning, bias-variance, evaluation metrics, and core algorithms.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaDatabase className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Data Preprocessing</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand scaling, encoding, feature selection, and handling missing values. Real-world data is messy.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaMicrochip className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Deep Learning Basics</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand neural networks, backpropagation, CNNs, RNNs, and Transformers. Be aware of recent advancements.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Practical Implementation</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with scikit-learn, TensorFlow, or PyTorch. Be ready to write code and discuss projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── CTA ────────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-center py-8"
                    >
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Ace Your ML Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all data science and AI topics.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-purple-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Machine Learning Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MachineLearningInterview;