import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaBrain,
    FaRobot,
    FaCode,
    FaDatabase,
    FaChartLine,
    FaMicrochip,
    FaShieldAlt,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
} from "react-icons/fa";

const AiInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 AI Interview Questions ────────────────────────────────────────────────
    const questions = [
        {
            q: "What is Artificial Intelligence (AI) and how does it differ from traditional programming?",
            a: "Artificial Intelligence is the simulation of human intelligence processes by machines, especially computer systems. It encompasses learning (acquiring information and rules for using it), reasoning (using rules to reach approximate or definite conclusions), and self-correction. Unlike traditional programming where explicit instructions are coded for every scenario, AI systems learn patterns from data and make decisions with minimal human intervention. Traditional programming is rule-based; AI is data-driven and adaptive.",
        },
        {
            q: "Explain the difference between AI, Machine Learning (ML), and Deep Learning (DL).",
            a: "AI is the broadest concept—machines capable of carrying out tasks in a way that we would consider 'smart'. ML is a subset of AI that uses statistical techniques to enable machines to improve at tasks with experience. DL is a subset of ML that uses neural networks with many layers (deep neural networks) to model high-level abstractions. In essence: AI > ML > DL. Every DL system is ML, but not all ML is DL; every ML system is AI, but not all AI is ML.",
        },
        {
            q: "What are the main types of AI based on capabilities?",
            a: "AI is categorized into three types based on capabilities: 1) Narrow AI (Weak AI) - designed for a specific task (e.g., facial recognition, chatbots). 2) General AI (Strong AI) - hypothetical AI that can perform any intellectual task that a human can. 3) Super AI - AI that surpasses human intelligence across all domains. Currently, we only have Narrow AI. General and Super AI are theoretical and remain a future goal.",
        },
        {
            q: "What is supervised learning and give an example.",
            a: "Supervised learning is a type of ML where the model is trained on labeled data—meaning each training example is paired with an output label. The algorithm learns a mapping from inputs to outputs. Example: Email spam detection—the model is trained on a dataset of emails labeled as 'spam' or 'not spam' and learns to classify new emails. Other examples: image classification, regression (predicting house prices), and sentiment analysis.",
        },
        {
            q: "Explain unsupervised learning and its applications.",
            a: "Unsupervised learning deals with unlabeled data. The algorithm tries to find hidden patterns or structures in the data without any predefined labels. Common tasks include clustering (grouping similar data points), dimensionality reduction, and anomaly detection. Applications: customer segmentation (grouping customers by purchasing behavior), recommendation systems (finding patterns in user preferences), and data compression (PCA).",
        },
        {
            q: "What is reinforcement learning and how does it work?",
            a: "Reinforcement Learning (RL) is a type of ML where an agent learns to make decisions by interacting with an environment. The agent receives rewards or penalties based on its actions and aims to maximize cumulative reward over time. It follows a trial-and-error approach. Key components: agent, environment, state, action, reward. Applications: game playing (AlphaGo), robotics, autonomous driving, and resource management.",
        },
        {
            q: "What is the difference between classification and regression?",
            a: "Both are supervised learning tasks. Classification predicts discrete class labels (categorical outputs)—e.g., spam/not spam, cat/dog. Regression predicts continuous numeric values—e.g., house price, temperature. Classification uses algorithms like logistic regression, SVM, decision trees; regression uses linear regression, random forest regression, neural networks. The choice depends on the nature of the target variable.",
        },
        {
            q: "Explain the bias-variance tradeoff in machine learning.",
            a: "Bias refers to errors due to overly simplistic assumptions (underfitting). Variance refers to errors due to excessive sensitivity to fluctuations in the training data (overfitting). The tradeoff: increasing model complexity reduces bias but increases variance, and vice versa. The goal is to find the sweet spot that minimizes total error (bias² + variance + irreducible error). Regularization, cross-validation, and ensemble methods help manage this tradeoff.",
        },
        {
            q: "What is overfitting and how can you prevent it?",
            a: "Overfitting occurs when a model learns noise and details in the training data to the extent that it performs poorly on new, unseen data—it fails to generalize. Prevention techniques: 1) Use more training data. 2) Simplify the model (reduce number of features/layers). 3) Regularization (L1, L2). 4) Cross-validation. 5) Early stopping (in neural networks). 6) Dropout (for deep learning). 7) Feature selection. 8) Ensemble methods (bagging, boosting).",
        },
        {
            q: "What is the difference between L1 and L2 regularization?",
            a: "L1 regularization (Lasso) adds the sum of absolute values of coefficients as a penalty term. It can drive some coefficients to zero, effectively performing feature selection. L2 regularization (Ridge) adds the sum of squared coefficients; it penalizes large coefficients but doesn't zero them out, making it suitable when all features are relevant. L1 is more robust to outliers, while L2 is computationally efficient and works well with correlated features.",
        },
        {
            q: "What is a confusion matrix and what metrics can be derived from it?",
            a: "A confusion matrix is a table used to evaluate the performance of a classification model. It shows counts of true positives (TP), true negatives (TN), false positives (FP), and false negatives (FN). From it, we can derive: Accuracy = (TP+TN)/(TP+TN+FP+FN), Precision = TP/(TP+FP), Recall = TP/(TP+FN), F1-score = 2*(Precision*Recall)/(Precision+Recall). These metrics give a comprehensive view of model performance, especially for imbalanced datasets.",
        },
        {
            q: "Explain the concept of entropy and information gain in decision trees.",
            a: "Entropy is a measure of impurity or randomness in a dataset—it quantifies the uncertainty. For a binary classification, entropy is highest when classes are evenly split (50-50) and zero when all instances belong to one class. Information Gain is the reduction in entropy after splitting the data on a feature. The feature with the highest information gain is chosen for the split. This is the core of ID3 and C4.5 decision tree algorithms.",
        },
        {
            q: "What is a support vector machine (SVM) and how does it work?",
            a: "SVM is a supervised learning algorithm used for classification and regression. It finds the hyperplane that best separates data points of different classes in a high-dimensional space. The goal is to maximize the margin—the distance between the hyperplane and the nearest data points (support vectors). SVM can handle non-linear classification using kernel functions (e.g., polynomial, RBF) that map data to higher dimensions where a linear separation becomes possible.",
        },
        {
            q: "What are ensemble methods and why are they used?",
            a: "Ensemble methods combine multiple base models to produce one optimal predictive model, aiming to improve accuracy and robustness. They reduce variance (bagging), bias (boosting), or both (stacking). Common ensembles: Random Forest (bagging of decision trees), Gradient Boosting (sequential boosting), AdaBoost, XGBoost, and LightGBM. Ensembles often outperform single models and are widely used in competitions like Kaggle.",
        },
        {
            q: "Explain the difference between bagging and boosting.",
            a: "Bagging (Bootstrap Aggregating) builds multiple models independently on bootstrapped subsets of the training data and averages their predictions (or votes). It reduces variance and helps prevent overfitting. Boosting builds models sequentially, each trying to correct the errors of the previous ones; it reduces bias and can lead to overfitting. Bagging is parallel, boosting is sequential. Examples: Random Forest (bagging), AdaBoost, Gradient Boosting (boosting).",
        },
        {
            q: "What is a neural network and what are its basic components?",
            a: "A neural network is a computational model inspired by the human brain, composed of interconnected nodes (neurons) organized in layers: input layer, hidden layers, and output layer. Each connection has a weight, each neuron has a bias. The network learns by adjusting weights and biases based on the error of its predictions via backpropagation. Activation functions (ReLU, sigmoid, tanh) introduce non-linearity, enabling the network to learn complex patterns.",
        },
        {
            q: "What is backpropagation and how does it work?",
            a: "Backpropagation is the algorithm used to train neural networks by computing the gradient of the loss function with respect to each weight. It works by propagating the error (difference between predicted and actual output) backward from the output layer to the input layer, updating weights using gradient descent. It leverages the chain rule of calculus to efficiently compute gradients for all weights. This iterative process minimizes the loss and helps the network learn.",
        },
        {
            q: "Explain the role of activation functions in neural networks.",
            a: "Activation functions introduce non-linearity into the network, enabling it to learn complex mappings. Without them, the network would be a linear regression model regardless of depth. Common activation functions: ReLU (f(x)=max(0,x)) - fast and avoids vanishing gradient; Sigmoid (1/(1+e^-x)) - outputs between 0 and 1, good for binary classification; Tanh (hyperbolic tangent) - outputs between -1 and 1; Softmax - outputs probability distribution for multi-class classification.",
        },
        {
            q: "What is the vanishing gradient problem and how can it be mitigated?",
            a: "The vanishing gradient problem occurs in deep neural networks when gradients become extremely small as they are backpropagated through many layers, effectively stopping the network from learning. This is common with sigmoid and tanh activations. Mitigation: 1) Use ReLU or variants (Leaky ReLU, ELU) that don't saturate. 2) Use batch normalization. 3) Use residual connections (ResNet). 4) Use careful weight initialization (Xavier/He). 5) Use gradient clipping.",
        },
        {
            q: "What is a Convolutional Neural Network (CNN) and where is it used?",
            a: "CNN is a type of deep neural network designed for processing structured grid data like images. It uses convolutional layers that apply filters to extract spatial features (edges, textures), pooling layers to reduce dimensionality, and fully connected layers for classification. CNNs are the backbone of computer vision tasks: image classification, object detection, segmentation, and also used in video analysis, medical imaging, and even NLP (character-level).",
        },
        {
            q: "Explain the concept of pooling in CNNs.",
            a: "Pooling is a down-sampling operation that reduces the spatial dimensions of feature maps, decreasing computation and controlling overfitting. Common types: Max pooling (takes maximum value in a window) and Average pooling (takes average). Pooling provides translation invariance, making the model robust to small shifts in the input. It's typically applied after each convolutional layer to progressively reduce the size of the representation.",
        },
        {
            q: "What is transfer learning and why is it beneficial?",
            a: "Transfer learning is a technique where a model trained on a large dataset (source task) is reused as the starting point for a different but related task (target task). It's beneficial because: 1) It reduces the need for large amounts of labeled data. 2) It speeds up training. 3) It leverages knowledge from previous learning, often achieving better performance than training from scratch. Examples: using ImageNet pre-trained CNNs for medical image classification.",
        },
        {
            q: "What is a Recurrent Neural Network (RNN) and what are its applications?",
            a: "RNN is a type of neural network designed for sequential data, where the output from previous steps is fed as input to the current step (they have loops). This makes them suitable for time series, speech, text, and any data where order matters. Applications: language modeling, machine translation, speech recognition, and time series forecasting. However, standard RNNs suffer from vanishing gradients; variants like LSTM and GRU address this.",
        },
        {
            q: "Explain the architecture of LSTM (Long Short-Term Memory) networks.",
            a: "LSTM is a special kind of RNN capable of learning long-term dependencies. It introduces a cell state (memory) and three gates: forget gate (decides what to discard from the cell state), input gate (decides what new information to store), and output gate (decides what to output). These gates control the flow of information, allowing the network to preserve relevant information for long periods and forget irrelevant details. LSTMs are widely used in sequence modeling tasks.",
        },
        {
            q: "What is the attention mechanism and why is it important?",
            a: "The attention mechanism allows a model to focus on the most relevant parts of the input when producing an output. Instead of compressing the entire input into a fixed vector (like in encoder-decoder), attention computes a weighted sum of input elements, where weights reflect importance. It's crucial for tasks like machine translation, where it aligns source and target words. Attention is the core of Transformers and has revolutionized NLP.",
        },
        {
            q: "Explain the Transformer architecture and its key components.",
            a: "The Transformer is a neural network architecture that relies solely on attention mechanisms, dispensing with recurrence and convolutions. Its key components: 1) Self-attention (allowing each position to attend to all positions). 2) Multi-head attention (multiple attention heads in parallel). 3) Positional encoding (to capture order). 4) Feed-forward networks. 5) Layer normalization and residual connections. Transformers are the foundation of BERT, GPT, and modern LLMs.",
        },
        {
            q: "What is the difference between BERT and GPT?",
            a: "BERT (Bidirectional Encoder Representations from Transformers) is an encoder-only model trained using masked language modeling (predict masked tokens) and next sentence prediction. It's bidirectional, meaning it looks at context both left and right. GPT (Generative Pre-trained Transformer) is a decoder-only model trained for autoregressive language modeling (predict next token). GPT is unidirectional (left-to-right). BERT excels at understanding tasks (classification, QA), GPT excels at generation (text completion, dialogue).",
        },
        {
            q: "What is Natural Language Processing (NLP) and what are its main tasks?",
            a: "NLP is a subfield of AI that focuses on interaction between computers and human language. Main tasks include: tokenization, part-of-speech tagging, named entity recognition, syntactic parsing, sentiment analysis, machine translation, question answering, summarization, and text generation. NLP uses both rule-based and machine learning approaches, with deep learning (transformers) being state-of-the-art.",
        },
        {
            q: "Explain word embeddings and give examples.",
            a: "Word embeddings are dense vector representations of words in a continuous vector space, where semantically similar words have similar vectors. They capture syntactic and semantic relationships. Examples: Word2Vec (CBOW and Skip-gram), GloVe, FastText. Embeddings are learned from large text corpora and are used as input features for downstream NLP tasks. They enable models to understand word relationships (e.g., king - man + woman ≈ queen).",
        },
        {
            q: "What is the difference between stemming and lemmatization?",
            a: "Both are text normalization techniques. Stemming reduces words to their root form by removing affixes (e.g., 'running' → 'run'), often using heuristic rules. It's fast but can produce non-words (e.g., 'university' → 'univers'). Lemmatization reduces words to their dictionary base form (lemma) using vocabulary and morphological analysis (e.g., 'better' → 'good'). Lemmatization is more accurate but slower. Choose based on the need for speed vs. accuracy.",
        },
        {
            q: "What is a transformer-based language model and how does it work?",
            a: "A transformer-based language model uses the Transformer architecture to predict the probability of a sequence of tokens. It's trained on large text corpora using self-supervised objectives (e.g., next token prediction, masked LM). The model learns rich contextual representations. Fine-tuning on specific tasks makes it highly effective. Examples include GPT, BERT, T5, and their variants. These models form the backbone of modern NLP.",
        },
        {
            q: "What is reinforcement learning from human feedback (RLHF) and where is it used?",
            a: "RLHF is a technique where a model is trained using reinforcement learning, with feedback signals coming from human evaluations. It's used to align AI models with human preferences, especially for large language models. The process: 1) Train a reward model from human rankings. 2) Use RL (e.g., PPO) to fine-tune the language model to maximize reward. RLHF is used in ChatGPT and other chatbots to produce more helpful, safe, and desirable responses.",
        },
        {
            q: "What are some common evaluation metrics for machine learning models?",
            a: "For classification: accuracy, precision, recall, F1-score, AUC-ROC, confusion matrix. For regression: mean squared error (MSE), mean absolute error (MAE), R-squared. For clustering: silhouette score, Davies-Bouldin index. For ranking: mean average precision (MAP), NDCG. For generative models: BLEU, ROUGE, perplexity (for language models). The choice depends on the problem and business objective.",
        },
        {
            q: "Explain the concept of cross-validation and why it's used.",
            a: "Cross-validation is a resampling technique used to assess the performance of a model on unseen data. It partitions the dataset into folds, trains on k-1 folds, and validates on the remaining fold, repeating k times. Common: k-fold cross-validation (usually 5 or 10). It provides a more robust estimate of model performance than a single train-test split, reduces overfitting, and helps in hyperparameter tuning.",
        },
        {
            q: "What is hyperparameter tuning and what are some common methods?",
            a: "Hyperparameters are configuration settings for models that are not learned from data (e.g., learning rate, number of hidden units, regularization strength). Tuning is the process of finding the optimal values. Methods: 1) Grid Search - exhaustive search over a predefined grid. 2) Random Search - random sampling of hyperparameter combinations. 3) Bayesian Optimization - probabilistic model to guide search. 4) Automated ML (AutoML). Hyperparameter tuning is critical for model performance.",
        },
        {
            q: "What is the difference between batch gradient descent, stochastic gradient descent, and mini-batch gradient descent?",
            a: "Batch GD: Uses the entire training set to compute the gradient in each step—accurate but slow and memory-intensive. Stochastic GD: Uses a single random sample to update weights—fast but noisy and unstable. Mini-batch GD: Uses a small batch of samples (e.g., 32, 64) to compute the gradient—balances speed and stability; it's the most common in practice. Mini-batch GD allows vectorization and converges faster with proper learning rate scheduling.",
        },
        {
            q: "Explain the concept of learning rate and its impact on training.",
            a: "The learning rate is a hyperparameter that controls how much to adjust weights in response to the estimated error during training. A high learning rate can cause the model to overshoot minima and fail to converge. A low learning rate results in slow convergence and potential local minima traps. Adaptive methods like Adam, RMSprop adjust learning rates dynamically. Learning rate schedules (step decay, cosine annealing) help improve convergence.",
        },
        {
            q: "What is the role of dropout in neural networks?",
            a: "Dropout is a regularization technique that prevents overfitting by randomly dropping a fraction of neurons during training, forcing the network to learn redundant representations. At each training iteration, a subset of neurons is 'dropped out' (i.e., set to zero) with probability p (e.g., 0.5). During testing, all neurons are used, but their outputs are scaled by the dropout probability. Dropout acts as an ensemble of many subnetworks.",
        },
        {
            q: "What is batch normalization and why is it used?",
            a: "Batch normalization is a technique that normalizes the inputs of each layer (per mini-batch) to have zero mean and unit variance. It helps stabilize training, accelerates convergence, allows higher learning rates, and reduces sensitivity to initialization. It also has a slight regularization effect. Batch normalization is widely used in deep networks and is crucial for training very deep architectures like ResNet.",
        },
        {
            q: "Explain the concept of gradient descent with momentum.",
            a: "Gradient descent with momentum accelerates convergence by adding a fraction of the previous update vector to the current update. This helps smooth out oscillations and speeds up progress along shallow dimensions. The momentum term (β) typically set to 0.9. It's especially helpful in areas with a high curvature and can help escape shallow local minima. Nesterov accelerated gradient (NAG) is an improvement that looks ahead.",
        },
        {
            q: "What are some popular deep learning frameworks?",
            a: "Popular frameworks include: TensorFlow (Google) - supports eager execution and Keras API; PyTorch (Facebook) - dynamic computation graph, popular in research; JAX - accelerated numerical computing; Keras - high-level API (now part of TensorFlow); MXNet - scalable; Caffe - used for vision. PyTorch and TensorFlow are the most widely used. Each has strengths: PyTorch for research flexibility, TensorFlow for production and deployment.",
        },
        {
            q: "What is the difference between generative and discriminative models?",
            a: "Discriminative models learn the boundary between classes, modeling P(y|x)—the probability of label given input. They focus on prediction. Examples: logistic regression, SVM, neural networks. Generative models model the joint probability P(x,y) and can generate new data. They learn the distribution of data itself. Examples: Naive Bayes, Gaussian Mixture Models, Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs). Generative models can be used for data synthesis and unsupervised learning.",
        },
        {
            q: "Explain Generative Adversarial Networks (GANs) and their applications.",
            a: "GANs consist of two neural networks: a Generator that creates fake data, and a Discriminator that tries to distinguish real from fake. They are trained adversarially—generator tries to fool discriminator, discriminator gets better at detecting fakes. Applications: image generation (deepfakes), style transfer, super-resolution, data augmentation, video generation, and even drug discovery. Training GANs is challenging due to mode collapse and instability.",
        },
        {
            q: "What is a Variational Autoencoder (VAE)?",
            a: "VAE is a generative model that learns a latent representation of data by encoding inputs into a probability distribution (mean and variance) and decoding samples from that distribution. It's trained to maximize the evidence lower bound (ELBO). VAEs produce smooth, continuous latent spaces, enabling interpolation and manipulation of generated data. They are used for image generation, anomaly detection, and semi-supervised learning.",
        },
        {
            q: "Explain the concept of reinforcement learning in depth.",
            a: "Reinforcement Learning is about learning optimal decision-making through interaction with an environment. The agent takes actions, receives rewards, and aims to maximize cumulative reward (return). It's formalized as a Markov Decision Process (MDP). Key algorithms: Q-learning (value-based), Policy Gradients (policy-based), and Actor-Critic (both). Deep RL uses neural networks for function approximation (DQN, PPO, SAC). Applications: game AI, robotics, autonomous vehicles, and resource optimization.",
        },
        {
            q: "What is the difference between model-free and model-based reinforcement learning?",
            a: "Model-free RL learns the optimal policy or value function directly from interactions without building a model of the environment. It's sample-inefficient but simpler. Examples: Q-learning, DQN, PPO. Model-based RL learns a model of the environment dynamics (transition and reward) and uses it to plan or simulate. It's more sample-efficient but model errors can cause suboptimal policies. Hybrid approaches are also used.",
        },
        {
            q: "What is the Monte Carlo method in RL?",
            a: "Monte Carlo (MC) methods learn value functions from complete episodes (experiences) by averaging returns. They require episodic tasks and wait until the end of an episode to update. MC provides unbiased estimates but has high variance and requires many episodes. They are simple to implement and work well for episodic environments. Contrast with Temporal Difference (TD) methods which update online, bootstrapping from current estimates.",
        },
        {
            q: "Explain the concept of policy gradient methods.",
            a: "Policy gradient methods directly optimize the policy (a parameterized function) by following the gradient of expected reward. They are suitable for continuous action spaces and stochastic policies. The policy is typically updated using the REINFORCE algorithm or actor-critic methods. Advantages: they can learn stochastic policies and are effective in high-dimensional action spaces. They often converge to a local optimum. PPO and TRPO are advanced variants.",
        },
        {
            q: "What are some ethical concerns in AI?",
            a: "Key ethical concerns include: 1) Bias and fairness - AI systems can perpetuate societal biases. 2) Privacy - data collection and surveillance. 3) Accountability - who is responsible for AI decisions? 4) Transparency and explainability - 'black box' models. 5) Job displacement and economic impact. 6) Autonomous weapons and misuse. Addressing these requires interdisciplinary collaboration, regulations, and developing ethical guidelines (e.g., AI principles from IEEE, EU).",
        },
        {
            q: "What is Explainable AI (XAI) and why is it important?",
            a: "Explainable AI aims to make the decisions of AI systems understandable to humans. It's crucial for trust, compliance, and debugging. Techniques include: LIME (local explanations), SHAP (Shapley values), feature importance, saliency maps, and attention visualization. XAI is particularly important in high-stakes domains like healthcare, finance, and criminal justice, where understanding why a model made a prediction is critical.",
        },
        {
            q: "What does the future of AI look like?",
            a: "The future of AI includes: 1) More powerful and efficient models (sparse, multimodal). 2) AI for science (drug discovery, climate modeling). 3) Integration with robotics and IoT. 4) Advancements in AGI (though still speculative). 5) Increased focus on ethics, privacy, and regulation. 6) Human-AI collaboration becoming seamless. 7) AI democratization with low-code/no-code platforms. 8) Quantum AI. The field continues to evolve at a rapid pace.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Topics Covered" },
        { number: "AI/ML", text: "Core Focus" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Artificial Intelligence Interview Q&A 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your AI interview with 50+ expert questions covering ML, deep learning, NLP, reinforcement learning, ethics, and more. Updated for 2026."
                />
                <meta
                    name="keywords"
                    content="AI interview questions, artificial intelligence, machine learning, deep learning, NLP, reinforcement learning, CNN, RNN, transformers, LLM, ethics, interview preparation"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#6C63FF" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/artificial-intelligence" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Artificial Intelligence Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete AI interview prep with 50+ curated questions covering ML, deep learning, NLP, reinforcement learning, ethics, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/artificial-intelligence" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ AI Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for AI interviews with 50+ questions covering ML, deep learning, NLP, reinforcement learning, and ethics."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/artificial-intelligence" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/artificial-intelligence" />

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
                            description: "Interview preparation platform for AI and web development.",
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
                                    name: "Artificial Intelligence",
                                    item: "https://codeskipper.in/interview/artificial-intelligence",
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
                            name: "AI Interview Questions",
                            description: "50+ curated AI interview questions with detailed answers.",
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
                            name: "AI Interview Questions Collection",
                            description: "A comprehensive collection of AI interview questions for data scientists and ML engineers.",
                            url: "https://codeskipper.in/interview/artificial-intelligence",
                            about: {
                                "@type": "Thing",
                                name: "AI Interview Preparation",
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
                            description: "AI and web development interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches:
                                "Artificial Intelligence, Machine Learning, Deep Learning, NLP, Reinforcement Learning",
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
                            name: "AI Interview Preparation",
                            description: "Complete preparation for AI interviews covering ML, DL, NLP, RL, and ethics.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Advanced",
                            teaches:
                                "Supervised Learning, Unsupervised Learning, Neural Networks, CNNs, RNNs, Transformers, Reinforcement Learning, Ethics",
                            url: "https://codeskipper.in/interview/artificial-intelligence",
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
                            AI Interview <span className="text-purple-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Artificial Intelligence interview —
                            from ML fundamentals to cutting-edge deep learning, NLP, and ethics.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaRobot /> AI/ML Focus
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
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for AI Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaChartLine className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Fundamentals</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be solid on supervised/unsupervised learning, bias-variance, evaluation metrics,
                                        and core algorithms.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaMicrochip className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Deep Learning</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand CNNs, RNNs, transformers, attention, and the latest architectures like
                                        GPT and BERT.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaDatabase className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Hands-On Experience</h3>
                                    <p className="text-gray-600 text-sm">
                                        Practice with real datasets, build projects, and be ready to discuss your code and
                                        model choices.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaShieldAlt className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Ethics &amp; Explainability</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be prepared to discuss bias, fairness, interpretability, and the societal impact of
                                        AI.
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
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Crack Your AI Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your journey with our interview prep resources for data science, ML engineering,
                                and more.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · AI Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default AiInterview;