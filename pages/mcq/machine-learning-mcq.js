import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- ML Basics (6) -----
  {
    id: 1,
    topic: "ML Basics",
    question: "What is Machine Learning?",
    options: [
      { label: "A", text: "A subset of AI that enables systems to learn from data" },
      { label: "B", text: "A programming language for AI" },
      { label: "C", text: "A database management system" },
      { label: "D", text: "A type of hardware" },
    ],
    answer: "A. A subset of AI that enables systems to learn from data",
  },
  {
    id: 2,
    topic: "ML Basics",
    question: "Who coined the term 'Machine Learning'?",
    options: [
      { label: "A", text: "Arthur Samuel" },
      { label: "B", text: "Alan Turing" },
      { label: "C", text: "Geoffrey Hinton" },
      { label: "D", text: "Andrew Ng" },
    ],
    answer: "A. Arthur Samuel",
  },
  {
    id: 3,
    topic: "ML Basics",
    question: "What are the three main types of machine learning?",
    options: [
      { label: "A", text: "Supervised, Unsupervised, Reinforcement" },
      { label: "B", text: "Linear, Logistic, Neural" },
      { label: "C", text: "Classification, Regression, Clustering" },
      { label: "D", text: "Training, Testing, Validation" },
    ],
    answer: "A. Supervised, Unsupervised, Reinforcement",
  },
  {
    id: 4,
    topic: "ML Basics",
    question: "What is the difference between AI and ML?",
    options: [
      { label: "A", text: "AI is the broader concept, ML is a subset of AI" },
      { label: "B", text: "ML is the broader concept, AI is a subset" },
      { label: "C", text: "They are the same thing" },
      { label: "D", text: "AI is older than ML" },
    ],
    answer: "A. AI is the broader concept, ML is a subset of AI",
  },
  {
    id: 5,
    topic: "ML Basics",
    question: "What is the role of a loss function in ML?",
    options: [
      { label: "A", text: "To measure how well the model performs" },
      { label: "B", text: "To optimize the model's parameters" },
      { label: "C", text: "To split the data" },
      { label: "D", text: "To visualize data" },
    ],
    answer: "A. To measure how well the model performs",
  },
  {
    id: 6,
    topic: "ML Basics",
    question: "What is overfitting in machine learning?",
    options: [
      { label: "A", text: "Model performs well on training data but poorly on new data" },
      { label: "B", text: "Model performs poorly on both training and new data" },
      { label: "C", text: "Model performs equally well on all data" },
      { label: "D", text: "Model fails to learn from training data" },
    ],
    answer: "A. Model performs well on training data but poorly on new data",
  },

  // ----- Supervised Learning (6) -----
  {
    id: 7,
    topic: "Supervised Learning",
    question: "What is supervised learning?",
    options: [
      { label: "A", text: "Learning from labeled data" },
      { label: "B", text: "Learning from unlabeled data" },
      { label: "C", text: "Learning through trial and error" },
      { label: "D", text: "Learning without any data" },
    ],
    answer: "A. Learning from labeled data",
  },
  {
    id: 8,
    topic: "Supervised Learning",
    question: "Which of the following is a classification algorithm?",
    options: [
      { label: "A", text: "Logistic Regression" },
      { label: "B", text: "Linear Regression" },
      { label: "C", text: "K-Means" },
      { label: "D", text: "PCA" },
    ],
    answer: "A. Logistic Regression",
  },
  {
    id: 9,
    topic: "Supervised Learning",
    question: "What is the difference between classification and regression?",
    options: [
      { label: "A", text: "Classification predicts discrete labels, regression predicts continuous values" },
      { label: "B", text: "Regression predicts discrete labels, classification predicts continuous values" },
      { label: "C", text: "Both predict continuous values" },
      { label: "D", text: "Both predict discrete labels" },
    ],
    answer: "A. Classification predicts discrete labels, regression predicts continuous values",
  },
  {
    id: 10,
    topic: "Supervised Learning",
    question: "What is the k-Nearest Neighbors (KNN) algorithm?",
    options: [
      { label: "A", text: "A non-parametric algorithm that classifies based on nearest neighbors" },
      { label: "B", text: "A parametric algorithm that uses probability" },
      { label: "C", text: "A reinforcement learning algorithm" },
      { label: "D", text: "A deep learning algorithm" },
    ],
    answer: "A. A non-parametric algorithm that classifies based on nearest neighbors",
  },
  {
    id: 11,
    topic: "Supervised Learning",
    question: "What is the purpose of the train-test split?",
    options: [
      { label: "A", text: "To evaluate model performance on unseen data" },
      { label: "B", text: "To increase training data" },
      { label: "C", text: "To reduce overfitting" },
      { label: "D", text: "To normalize data" },
    ],
    answer: "A. To evaluate model performance on unseen data",
  },
  {
    id: 12,
    topic: "Supervised Learning",
    question: "What is a confusion matrix?",
    options: [
      { label: "A", text: "A table used to evaluate classification model performance" },
      { label: "B", text: "A matrix for regression analysis" },
      { label: "C", text: "A visualization tool for clustering" },
      { label: "D", text: "A neural network architecture" },
    ],
    answer: "A. A table used to evaluate classification model performance",
  },

  // ----- Unsupervised Learning (6) -----
  {
    id: 13,
    topic: "Unsupervised Learning",
    question: "What is unsupervised learning?",
    options: [
      { label: "A", text: "Learning from unlabeled data" },
      { label: "B", text: "Learning from labeled data" },
      { label: "C", text: "Learning through trial and error" },
      { label: "D", text: "Learning with human feedback" },
    ],
    answer: "A. Learning from unlabeled data",
  },
  {
    id: 14,
    topic: "Unsupervised Learning",
    question: "Which of the following is a clustering algorithm?",
    options: [
      { label: "A", text: "K-Means" },
      { label: "B", text: "Linear Regression" },
      { label: "C", text: "Support Vector Machine" },
      { label: "D", text: "Random Forest" },
    ],
    answer: "A. K-Means",
  },
  {
    id: 15,
    topic: "Unsupervised Learning",
    question: "What is dimensionality reduction?",
    options: [
      { label: "A", text: "Reducing the number of features/variables" },
      { label: "B", text: "Reducing the number of data points" },
      { label: "C", text: "Reducing the number of classes" },
      { label: "D", text: "Reducing the model complexity" },
    ],
    answer: "A. Reducing the number of features/variables",
  },
  {
    id: 16,
    topic: "Unsupervised Learning",
    question: "What is the purpose of PCA (Principal Component Analysis)?",
    options: [
      { label: "A", text: "To reduce dimensionality and identify important features" },
      { label: "B", text: "To classify data" },
      { label: "C", text: "To cluster data" },
      { label: "D", text: "To predict continuous values" },
    ],
    answer: "A. To reduce dimensionality and identify important features",
  },
  {
    id: 17,
    topic: "Unsupervised Learning",
    question: "What is the difference between K-Means and Hierarchical clustering?",
    options: [
      { label: "A", text: "K-Means requires number of clusters, Hierarchical creates a hierarchy" },
      { label: "B", text: "Hierarchical requires number of clusters, K-Means creates a hierarchy" },
      { label: "C", text: "Both create hierarchies" },
      { label: "D", text: "Both require number of clusters" },
    ],
    answer: "A. K-Means requires number of clusters, Hierarchical creates a hierarchy",
  },
  {
    id: 18,
    topic: "Unsupervised Learning",
    question: "What is anomaly detection?",
    options: [
      { label: "A", text: "Identifying rare or unusual data points" },
      { label: "B", text: "Identifying common data points" },
      { label: "C", text: "Predicting future data points" },
      { label: "D", text: "Creating new data points" },
    ],
    answer: "A. Identifying rare or unusual data points",
  },

  // ----- Regression (6) -----
  {
    id: 19,
    topic: "Regression",
    question: "What is linear regression?",
    options: [
      { label: "A", text: "A method to model the relationship between variables using a linear equation" },
      { label: "B", text: "A classification algorithm" },
      { label: "C", text: "A clustering algorithm" },
      { label: "D", text: "A deep learning model" },
    ],
    answer: "A. A method to model the relationship between variables using a linear equation",
  },
  {
    id: 20,
    topic: "Regression",
    question: "What is the cost function in linear regression?",
    options: [
      { label: "A", text: "Mean Squared Error (MSE)" },
      { label: "B", text: "Cross-entropy loss" },
      { label: "C", text: "Hinge loss" },
      { label: "D", text: "Log loss" },
    ],
    answer: "A. Mean Squared Error (MSE)",
  },
  {
    id: 21,
    topic: "Regression",
    question: "What is the purpose of gradient descent?",
    options: [
      { label: "A", text: "To minimize the cost function by updating parameters" },
      { label: "B", text: "To maximize the cost function" },
      { label: "C", text: "To split the data" },
      { label: "D", text: "To visualize the data" },
    ],
    answer: "A. To minimize the cost function by updating parameters",
  },
  {
    id: 22,
    topic: "Regression",
    question: "What is the difference between simple and multiple linear regression?",
    options: [
      { label: "A", text: "Simple uses one independent variable, multiple uses several" },
      { label: "B", text: "Multiple uses one independent variable, simple uses several" },
      { label: "C", text: "Both use one variable" },
      { label: "D", text: "Both use multiple variables" },
    ],
    answer: "A. Simple uses one independent variable, multiple uses several",
  },
  {
    id: 23,
    topic: "Regression",
    question: "What is R-squared (R²) in regression?",
    options: [
      { label: "A", text: "A measure of how well the model explains the variance" },
      { label: "B", text: "The error rate of the model" },
      { label: "C", text: "The number of features" },
      { label: "D", text: "The learning rate" },
    ],
    answer: "A. A measure of how well the model explains the variance",
  },
  {
    id: 24,
    topic: "Regression",
    question: "What is regularization in regression?",
    options: [
      { label: "A", text: "Techniques to prevent overfitting by adding a penalty term" },
      { label: "B", text: "Techniques to increase overfitting" },
      { label: "C", text: "Techniques to reduce data size" },
      { label: "D", text: "Techniques to increase data size" },
    ],
    answer: "A. Techniques to prevent overfitting by adding a penalty term",
  },

  // ----- Classification (6) -----
  {
    id: 25,
    topic: "Classification",
    question: "What is logistic regression?",
    options: [
      { label: "A", text: "A classification algorithm that uses a sigmoid function" },
      { label: "B", text: "A regression algorithm for continuous values" },
      { label: "C", text: "A clustering algorithm" },
      { label: "D", text: "A neural network" },
    ],
    answer: "A. A classification algorithm that uses a sigmoid function",
  },
  {
    id: 26,
    topic: "Classification",
    question: "What is the purpose of the sigmoid function in logistic regression?",
    options: [
      { label: "A", text: "To map output to probabilities between 0 and 1" },
      { label: "B", text: "To map output to continuous values" },
      { label: "C", text: "To cluster data" },
      { label: "D", text: "To reduce dimensions" },
    ],
    answer: "A. To map output to probabilities between 0 and 1",
  },
  {
    id: 27,
    topic: "Classification",
    question: "What is the difference between logistic and linear regression?",
    options: [
      { label: "A", text: "Logistic is for classification, linear is for regression" },
      { label: "B", text: "Linear is for classification, logistic is for regression" },
      { label: "C", text: "Both are for classification" },
      { label: "D", text: "Both are for regression" },
    ],
    answer: "A. Logistic is for classification, linear is for regression",
  },
  {
    id: 28,
    topic: "Classification",
    question: "What is the support vector machine (SVM)?",
    options: [
      { label: "A", text: "A classification algorithm that finds the optimal hyperplane" },
      { label: "B", text: "A clustering algorithm" },
      { label: "C", text: "A regression algorithm" },
      { label: "D", text: "A neural network" },
    ],
    answer: "A. A classification algorithm that finds the optimal hyperplane",
  },
  {
    id: 29,
    topic: "Classification",
    question: "What is the kernel trick in SVM?",
    options: [
      { label: "A", text: "A method to transform data to higher dimensions without explicit computation" },
      { label: "B", text: "A method to reduce dimensions" },
      { label: "C", text: "A method to cluster data" },
      { label: "D", text: "A method to normalize data" },
    ],
    answer: "A. A method to transform data to higher dimensions without explicit computation",
  },
  {
    id: 30,
    topic: "Classification",
    question: "What is the difference between bagging and boosting?",
    options: [
      { label: "A", text: "Bagging trains models in parallel, boosting trains sequentially" },
      { label: "B", text: "Boosting trains models in parallel, bagging trains sequentially" },
      { label: "C", text: "Both train in parallel" },
      { label: "D", text: "Both train sequentially" },
    ],
    answer: "A. Bagging trains models in parallel, boosting trains sequentially",
  },

  // ----- Decision Trees (6) -----
  {
    id: 31,
    topic: "Decision Trees",
    question: "What is a decision tree?",
    options: [
      { label: "A", text: "A tree-like model that makes decisions based on feature values" },
      { label: "B", text: "A neural network architecture" },
      { label: "C", text: "A clustering algorithm" },
      { label: "D", text: "A regression algorithm" },
    ],
    answer: "A. A tree-like model that makes decisions based on feature values",
  },
  {
    id: 32,
    topic: "Decision Trees",
    question: "What is entropy in decision trees?",
    options: [
      { label: "A", text: "A measure of randomness or impurity" },
      { label: "B", text: "A measure of accuracy" },
      { label: "C", text: "A measure of precision" },
      { label: "D", text: "A measure of recall" },
    ],
    answer: "A. A measure of randomness or impurity",
  },
  {
    id: 33,
    topic: "Decision Trees",
    question: "What is information gain?",
    options: [
      { label: "A", text: "The reduction in entropy after splitting on a feature" },
      { label: "B", text: "The increase in accuracy" },
      { label: "C", text: "The reduction in training time" },
      { label: "D", text: "The increase in data size" },
    ],
    answer: "A. The reduction in entropy after splitting on a feature",
  },
  {
    id: 34,
    topic: "Decision Trees",
    question: "What is the Gini impurity?",
    options: [
      { label: "A", text: "A measure of how often a randomly chosen element would be incorrectly classified" },
      { label: "B", text: "A measure of model accuracy" },
      { label: "C", text: "A measure of model precision" },
      { label: "D", text: "A measure of model recall" },
    ],
    answer: "A. A measure of how often a randomly chosen element would be incorrectly classified",
  },
  {
    id: 35,
    topic: "Decision Trees",
    question: "What is the difference between a decision tree and random forest?",
    options: [
      { label: "A", text: "Random forest is an ensemble of multiple decision trees" },
      { label: "B", text: "Decision tree is an ensemble of random forests" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Decision tree is more accurate" },
    ],
    answer: "A. Random forest is an ensemble of multiple decision trees",
  },
  {
    id: 36,
    topic: "Decision Trees",
    question: "What is pruning in decision trees?",
    options: [
      { label: "A", text: "Removing branches to reduce overfitting" },
      { label: "B", text: "Adding branches to increase complexity" },
      { label: "C", text: "Increasing tree depth" },
      { label: "D", text: "Decreasing tree depth" },
    ],
    answer: "A. Removing branches to reduce overfitting",
  },

  // ----- Ensemble Methods (6) -----
  {
    id: 37,
    topic: "Ensemble Methods",
    question: "What is the purpose of ensemble methods?",
    options: [
      { label: "A", text: "To combine multiple models for better performance" },
      { label: "B", text: "To use a single model" },
      { label: "C", text: "To reduce data size" },
      { label: "D", text: "To increase data size" },
    ],
    answer: "A. To combine multiple models for better performance",
  },
  {
    id: 38,
    topic: "Ensemble Methods",
    question: "What is the Random Forest algorithm?",
    options: [
      { label: "A", text: "An ensemble of decision trees using bagging" },
      { label: "B", text: "A single decision tree" },
      { label: "C", text: "A neural network" },
      { label: "D", text: "A clustering algorithm" },
    ],
    answer: "A. An ensemble of decision trees using bagging",
  },
  {
    id: 39,
    topic: "Ensemble Methods",
    question: "What is the difference between bagging and boosting?",
    options: [
      { label: "A", text: "Bagging reduces variance, boosting reduces bias" },
      { label: "B", text: "Boosting reduces variance, bagging reduces bias" },
      { label: "C", text: "Both reduce variance" },
      { label: "D", text: "Both reduce bias" },
    ],
    answer: "A. Bagging reduces variance, boosting reduces bias",
  },
  {
    id: 40,
    topic: "Ensemble Methods",
    question: "What is XGBoost?",
    options: [
      { label: "A", text: "An optimized gradient boosting algorithm" },
      { label: "B", text: "A random forest implementation" },
      { label: "C", text: "A neural network library" },
      { label: "D", text: "A clustering algorithm" },
    ],
    answer: "A. An optimized gradient boosting algorithm",
  },
  {
    id: 41,
    topic: "Ensemble Methods",
    question: "What is AdaBoost?",
    options: [
      { label: "A", text: "Adaptive Boosting that gives more weight to misclassified samples" },
      { label: "B", text: "A random forest algorithm" },
      { label: "C", text: "A neural network" },
      { label: "D", text: "A clustering algorithm" },
    ],
    answer: "A. Adaptive Boosting that gives more weight to misclassified samples",
  },
  {
    id: 42,
    topic: "Ensemble Methods",
    question: "What is stacking in ensemble learning?",
    options: [
      { label: "A", text: "Combining multiple models using a meta-model" },
      { label: "B", text: "Training models in sequence" },
      { label: "C", text: "Training models in parallel" },
      { label: "D", text: "Using a single model" },
    ],
    answer: "A. Combining multiple models using a meta-model",
  },

  // ----- Model Evaluation (6) -----
  {
    id: 43,
    topic: "Model Evaluation",
    question: "What is accuracy in classification?",
    options: [
      { label: "A", text: "The ratio of correct predictions to total predictions" },
      { label: "B", text: "The ratio of false positives to true positives" },
      { label: "C", text: "The ratio of true positives to false positives" },
      { label: "D", text: "The ratio of false negatives to true negatives" },
    ],
    answer: "A. The ratio of correct predictions to total predictions",
  },
  {
    id: 44,
    topic: "Model Evaluation",
    question: "What is precision in classification?",
    options: [
      { label: "A", text: "The ratio of true positives to all positive predictions" },
      { label: "B", text: "The ratio of true positives to all actual positives" },
      { label: "C", text: "The ratio of correct predictions to all predictions" },
      { label: "D", text: "The ratio of false positives to true positives" },
    ],
    answer: "A. The ratio of true positives to all positive predictions",
  },
  {
    id: 45,
    topic: "Model Evaluation",
    question: "What is recall (sensitivity) in classification?",
    options: [
      { label: "A", text: "The ratio of true positives to all actual positives" },
      { label: "B", text: "The ratio of true positives to all positive predictions" },
      { label: "C", text: "The ratio of correct predictions to all predictions" },
      { label: "D", text: "The ratio of false positives to true positives" },
    ],
    answer: "A. The ratio of true positives to all actual positives",
  },
  {
    id: 46,
    topic: "Model Evaluation",
    question: "What is the F1 score?",
    options: [
      { label: "A", text: "The harmonic mean of precision and recall" },
      { label: "B", text: "The arithmetic mean of precision and recall" },
      { label: "C", text: "The geometric mean of precision and recall" },
      { label: "D", text: "The sum of precision and recall" },
    ],
    answer: "A. The harmonic mean of precision and recall",
  },
  {
    id: 47,
    topic: "Model Evaluation",
    question: "What is the ROC curve?",
    options: [
      { label: "A", text: "A curve that plots true positive rate vs false positive rate" },
      { label: "B", text: "A curve that plots precision vs recall" },
      { label: "C", text: "A curve that plots accuracy vs error rate" },
      { label: "D", text: "A curve that plots loss vs epochs" },
    ],
    answer: "A. A curve that plots true positive rate vs false positive rate",
  },
  {
    id: 48,
    topic: "Model Evaluation",
    question: "What is cross-validation?",
    options: [
      { label: "A", text: "A technique to evaluate model performance by splitting data into folds" },
      { label: "B", text: "A technique to increase data size" },
      { label: "C", text: "A technique to reduce features" },
      { label: "D", text: "A technique to optimize hyperparameters" },
    ],
    answer: "A. A technique to evaluate model performance by splitting data into folds",
  },

  // ----- Neural Networks (6) -----
  {
    id: 49,
    topic: "Neural Networks",
    question: "What is a neural network?",
    options: [
      { label: "A", text: "A computational model inspired by the human brain" },
      { label: "B", text: "A linear regression model" },
      { label: "C", text: "A decision tree" },
      { label: "D", text: "A clustering algorithm" },
    ],
    answer: "A. A computational model inspired by the human brain",
  },
  {
    id: 50,
    topic: "Neural Networks",
    question: "What is a perceptron?",
    options: [
      { label: "A", text: "The simplest type of neural network with one layer" },
      { label: "B", text: "A deep neural network" },
      { label: "C", text: "A convolutional neural network" },
      { label: "D", text: "A recurrent neural network" },
    ],
    answer: "A. The simplest type of neural network with one layer",
  },
  {
    id: 51,
    topic: "Neural Networks",
    question: "What is the role of activation functions in neural networks?",
    options: [
      { label: "A", text: "To introduce non-linearity" },
      { label: "B", text: "To introduce linearity" },
      { label: "C", text: "To reduce dimensions" },
      { label: "D", text: "To cluster data" },
    ],
    answer: "A. To introduce non-linearity",
  },
  {
    id: 52,
    topic: "Neural Networks",
    question: "What is backpropagation?",
    options: [
      { label: "A", text: "An algorithm to update weights by propagating error backwards" },
      { label: "B", text: "An algorithm to propagate input forward" },
      { label: "C", text: "An algorithm to reduce dimensions" },
      { label: "D", text: "An algorithm to cluster data" },
    ],
    answer: "A. An algorithm to update weights by propagating error backwards",
  },
  {
    id: 53,
    topic: "Neural Networks",
    question: "What is the difference between a shallow and deep neural network?",
    options: [
      { label: "A", text: "Shallow has few layers, deep has many layers" },
      { label: "B", text: "Deep has few layers, shallow has many layers" },
      { label: "C", text: "Both have the same number of layers" },
      { label: "D", text: "Shallow is more accurate" },
    ],
    answer: "A. Shallow has few layers, deep has many layers",
  },
  {
    id: 54,
    topic: "Neural Networks",
    question: "What is the purpose of the learning rate in training neural networks?",
    options: [
      { label: "A", text: "To control the step size in gradient descent" },
      { label: "B", text: "To control the number of epochs" },
      { label: "C", text: "To control the batch size" },
      { label: "D", text: "To control the number of layers" },
    ],
    answer: "A. To control the step size in gradient descent",
  },

  // ----- Deep Learning (6) -----
  {
    id: 55,
    topic: "Deep Learning",
    question: "What is deep learning?",
    options: [
      { label: "A", text: "A subset of ML using deep neural networks" },
      { label: "B", text: "A subset of AI without neural networks" },
      { label: "C", text: "A type of clustering" },
      { label: "D", text: "A type of regression" },
    ],
    answer: "A. A subset of ML using deep neural networks",
  },
  {
    id: 56,
    topic: "Deep Learning",
    question: "What is a convolutional neural network (CNN)?",
    options: [
      { label: "A", text: "A neural network designed for image and spatial data" },
      { label: "B", text: "A neural network for sequential data" },
      { label: "C", text: "A neural network for text data" },
      { label: "D", text: "A neural network for tabular data" },
    ],
    answer: "A. A neural network designed for image and spatial data",
  },
  {
    id: 57,
    topic: "Deep Learning",
    question: "What is a recurrent neural network (RNN)?",
    options: [
      { label: "A", text: "A neural network designed for sequential data" },
      { label: "B", text: "A neural network for image data" },
      { label: "C", text: "A neural network for tabular data" },
      { label: "D", text: "A neural network with no connections" },
    ],
    answer: "A. A neural network designed for sequential data",
  },
  {
    id: 58,
    topic: "Deep Learning",
    question: "What is the vanishing gradient problem?",
    options: [
      { label: "A", text: "Gradients become too small for effective learning in deep networks" },
      { label: "B", text: "Gradients become too large" },
      { label: "C", text: "Gradients become zero" },
      { label: "D", text: "Gradients become infinite" },
    ],
    answer: "A. Gradients become too small for effective learning in deep networks",
  },
  {
    id: 59,
    topic: "Deep Learning",
    question: "What is the purpose of dropout in neural networks?",
    options: [
      { label: "A", text: "To prevent overfitting by randomly dropping neurons" },
      { label: "B", text: "To increase model complexity" },
      { label: "C", text: "To reduce training time" },
      { label: "D", text: "To increase accuracy" },
    ],
    answer: "A. To prevent overfitting by randomly dropping neurons",
  },
  {
    id: 60,
    topic: "Deep Learning",
    question: "What is transfer learning?",
    options: [
      { label: "A", text: "Using knowledge from one task to improve performance on another" },
      { label: "B", text: "Learning from scratch" },
      { label: "C", text: "Learning without data" },
      { label: "D", text: "Learning with no labels" },
    ],
    answer: "A. Using knowledge from one task to improve performance on another",
  },

  // ----- Statistics & Probability (6) -----
  {
    id: 61,
    topic: "Statistics & Probability",
    question: "What is the difference between mean and median?",
    options: [
      { label: "A", text: "Mean is sensitive to outliers, median is robust" },
      { label: "B", text: "Median is sensitive to outliers, mean is robust" },
      { label: "C", text: "Both are sensitive to outliers" },
      { label: "D", text: "Both are robust to outliers" },
    ],
    answer: "A. Mean is sensitive to outliers, median is robust",
  },
  {
    id: 62,
    topic: "Statistics & Probability",
    question: "What is standard deviation?",
    options: [
      { label: "A", text: "A measure of the spread of data around the mean" },
      { label: "B", text: "A measure of central tendency" },
      { label: "C", text: "A measure of correlation" },
      { label: "D", text: "A measure of probability" },
    ],
    answer: "A. A measure of the spread of data around the mean",
  },
  {
    id: 63,
    topic: "Statistics & Probability",
    question: "What is the difference between correlation and causation?",
    options: [
      { label: "A", text: "Correlation doesn't imply causation" },
      { label: "B", text: "Correlation implies causation" },
      { label: "C", text: "They are the same" },
      { label: "D", text: "Causation doesn't imply correlation" },
    ],
    answer: "A. Correlation doesn't imply causation",
  },
  {
    id: 64,
    topic: "Statistics & Probability",
    question: "What is a p-value in statistics?",
    options: [
      { label: "A", text: "The probability of observing results as extreme as the observed, assuming null hypothesis is true" },
      { label: "B", text: "The probability that the null hypothesis is true" },
      { label: "C", text: "The probability of a Type I error" },
      { label: "D", text: "The probability of a Type II error" },
    ],
    answer: "A. The probability of observing results as extreme as the observed, assuming null hypothesis is true",
  },
  {
    id: 65,
    topic: "Statistics & Probability",
    question: "What is a normal distribution?",
    options: [
      { label: "A", text: "A symmetric bell-shaped distribution" },
      { label: "B", text: "A skewed distribution" },
      { label: "C", text: "A uniform distribution" },
      { label: "D", text: "A bimodal distribution" },
    ],
    answer: "A. A symmetric bell-shaped distribution",
  },
  {
    id: 66,
    topic: "Statistics & Probability",
    question: "What is Bayes theorem used for in ML?",
    options: [
      { label: "A", text: "To calculate conditional probabilities for classification" },
      { label: "B", text: "To calculate means and variances" },
      { label: "C", text: "To calculate correlations" },
      { label: "D", text: "To calculate standard deviations" },
    ],
    answer: "A. To calculate conditional probabilities for classification",
  },

  // ----- Feature Engineering (6) -----
  {
    id: 67,
    topic: "Feature Engineering",
    question: "What is feature scaling?",
    options: [
      { label: "A", text: "Normalizing features to a common range" },
      { label: "B", text: "Adding new features" },
      { label: "C", text: "Removing features" },
      { label: "D", text: "Creating features" },
    ],
    answer: "A. Normalizing features to a common range",
  },
  {
    id: 68,
    topic: "Feature Engineering",
    question: "What is the difference between normalization and standardization?",
    options: [
      { label: "A", text: "Normalization scales to [0,1], standardization has mean 0, std 1" },
      { label: "B", text: "Standardization scales to [0,1], normalization has mean 0, std 1" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is used" },
    ],
    answer: "A. Normalization scales to [0,1], standardization has mean 0, std 1",
  },
  {
    id: 69,
    topic: "Feature Engineering",
    question: "What is one-hot encoding?",
    options: [
      { label: "A", text: "Converting categorical variables to binary vectors" },
      { label: "B", text: "Converting continuous variables to categorical" },
      { label: "C", text: "Converting text to numbers" },
      { label: "D", text: "Converting numbers to text" },
    ],
    answer: "A. Converting categorical variables to binary vectors",
  },
  {
    id: 70,
    topic: "Feature Engineering",
    question: "What is feature selection?",
    options: [
      { label: "A", text: "Choosing the most relevant features for the model" },
      { label: "B", text: "Creating new features" },
      { label: "C", text: "Scaling features" },
      { label: "D", text: "Encoding features" },
    ],
    answer: "A. Choosing the most relevant features for the model",
  },
  {
    id: 71,
    topic: "Feature Engineering",
    question: "What is the purpose of feature engineering?",
    options: [
      { label: "A", text: "To improve model performance by creating better features" },
      { label: "B", text: "To reduce data size" },
      { label: "C", text: "To increase data size" },
      { label: "D", text: "To remove all features" },
    ],
    answer: "A. To improve model performance by creating better features",
  },
  {
    id: 72,
    topic: "Feature Engineering",
    question: "What is the curse of dimensionality?",
    options: [
      { label: "A", text: "The problem of high-dimensional data leading to sparsity and overfitting" },
      { label: "B", text: "The problem of too little data" },
      { label: "C", text: "The problem of too many samples" },
      { label: "D", text: "The problem of missing values" },
    ],
    answer: "A. The problem of high-dimensional data leading to sparsity and overfitting",
  },

  // ----- Natural Language Processing (6) -----
  {
    id: 73,
    topic: "NLP",
    question: "What is Natural Language Processing (NLP)?",
    options: [
      { label: "A", text: "The interaction between computers and human language" },
      { label: "B", text: "Processing numerical data" },
      { label: "C", text: "Processing images" },
      { label: "D", text: "Processing audio" },
    ],
    answer: "A. The interaction between computers and human language",
  },
  {
    id: 74,
    topic: "NLP",
    question: "What is tokenization in NLP?",
    options: [
      { label: "A", text: "Splitting text into smaller units like words or sentences" },
      { label: "B", text: "Converting text to numbers" },
      { label: "C", text: "Removing stop words" },
      { label: "D", text: "Lemmatizing words" },
    ],
    answer: "A. Splitting text into smaller units like words or sentences",
  },
  {
    id: 75,
    topic: "NLP",
    question: "What is the difference between stemming and lemmatization?",
    options: [
      { label: "A", text: "Stemming is rule-based, lemmatization uses vocabulary and morphology" },
      { label: "B", text: "Lemmatization is rule-based, stemming uses vocabulary" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is used" },
    ],
    answer: "A. Stemming is rule-based, lemmatization uses vocabulary and morphology",
  },
  {
    id: 76,
    topic: "NLP",
    question: "What is a word embedding?",
    options: [
      { label: "A", text: "A dense vector representation of words" },
      { label: "B", text: "A one-hot encoding of words" },
      { label: "C", text: "A bag-of-words representation" },
      { label: "D", text: "A TF-IDF representation" },
    ],
    answer: "A. A dense vector representation of words",
  },
  {
    id: 77,
    topic: "NLP",
    question: "What is the purpose of stop word removal in NLP?",
    options: [
      { label: "A", text: "To remove common words that don't add significant meaning" },
      { label: "B", text: "To remove all words" },
      { label: "C", text: "To keep only stop words" },
      { label: "D", text: "To remove all content words" },
    ],
    answer: "A. To remove common words that don't add significant meaning",
  },
  {
    id: 78,
    topic: "NLP",
    question: "What is the Transformer architecture?",
    options: [
      { label: "A", text: "A neural network architecture using attention mechanisms" },
      { label: "B", text: "A traditional RNN architecture" },
      { label: "C", text: "A CNN architecture" },
      { label: "D", text: "A decision tree architecture" },
    ],
    answer: "A. A neural network architecture using attention mechanisms",
  },

  // ----- Computer Vision (6) -----
  {
    id: 79,
    topic: "Computer Vision",
    question: "What is computer vision?",
    options: [
      { label: "A", text: "The field of AI that deals with visual data" },
      { label: "B", text: "The field of AI that deals with text" },
      { label: "C", text: "The field of AI that deals with audio" },
      { label: "D", text: "The field of AI that deals with tabular data" },
    ],
    answer: "A. The field of AI that deals with visual data",
  },
  {
    id: 80,
    topic: "Computer Vision",
    question: "What is image classification?",
    options: [
      { label: "A", text: "Assigning a class label to an image" },
      { label: "B", text: "Detecting objects in an image" },
      { label: "C", text: "Segmenting an image" },
      { label: "D", text: "Generating an image" },
    ],
    answer: "A. Assigning a class label to an image",
  },
  {
    id: 81,
    topic: "Computer Vision",
    question: "What is object detection?",
    options: [
      { label: "A", text: "Identifying and locating objects in an image" },
      { label: "B", text: "Classifying the entire image" },
      { label: "C", text: "Segmenting the image" },
      { label: "D", text: "Generating the image" },
    ],
    answer: "A. Identifying and locating objects in an image",
  },
  {
    id: 82,
    topic: "Computer Vision",
    question: "What is image segmentation?",
    options: [
      { label: "A", text: "Dividing an image into segments based on pixel groups" },
      { label: "B", text: "Classifying the entire image" },
      { label: "C", text: "Detecting objects in the image" },
      { label: "D", text: "Generating the image" },
    ],
    answer: "A. Dividing an image into segments based on pixel groups",
  },
  {
    id: 83,
    topic: "Computer Vision",
    question: "What is the purpose of max pooling in CNNs?",
    options: [
      { label: "A", text: "To reduce spatial dimensions while preserving important features" },
      { label: "B", text: "To increase spatial dimensions" },
      { label: "C", text: "To add non-linearity" },
      { label: "D", text: "To normalize features" },
    ],
    answer: "A. To reduce spatial dimensions while preserving important features",
  },
  {
    id: 84,
    topic: "Computer Vision",
    question: "What is the difference between object detection and object segmentation?",
    options: [
      { label: "A", text: "Detection gives bounding boxes, segmentation gives pixel-level masks" },
      { label: "B", text: "Segmentation gives bounding boxes, detection gives pixel-level masks" },
      { label: "C", text: "Both give bounding boxes" },
      { label: "D", text: "Both give pixel-level masks" },
    ],
    answer: "A. Detection gives bounding boxes, segmentation gives pixel-level masks",
  },

  // ----- Reinforcement Learning (6) -----
  {
    id: 85,
    topic: "Reinforcement Learning",
    question: "What is reinforcement learning?",
    options: [
      { label: "A", text: "Learning through interaction with an environment to maximize rewards" },
      { label: "B", text: "Learning from labeled data" },
      { label: "C", text: "Learning from unlabeled data" },
      { label: "D", text: "Learning without any data" },
    ],
    answer: "A. Learning through interaction with an environment to maximize rewards",
  },
  {
    id: 86,
    topic: "Reinforcement Learning",
    question: "What is an agent in reinforcement learning?",
    options: [
      { label: "A", text: "The learner that interacts with the environment" },
      { label: "B", text: "The environment itself" },
      { label: "C", text: "The reward function" },
      { label: "D", text: "The policy" },
    ],
    answer: "A. The learner that interacts with the environment",
  },
  {
    id: 87,
    topic: "Reinforcement Learning",
    question: "What is a policy in reinforcement learning?",
    options: [
      { label: "A", text: "A strategy that the agent follows to decide actions" },
      { label: "B", text: "The reward function" },
      { label: "C", text: "The environment" },
      { label: "D", text: "The state space" },
    ],
    answer: "A. A strategy that the agent follows to decide actions",
  },
  {
    id: 88,
    topic: "Reinforcement Learning",
    question: "What is the exploration-exploitation tradeoff?",
    options: [
      { label: "A", text: "Balancing between trying new actions and using known good actions" },
      { label: "B", text: "Balancing between training and testing" },
      { label: "C", text: "Balancing between supervised and unsupervised learning" },
      { label: "D", text: "Balancing between classification and regression" },
    ],
    answer: "A. Balancing between trying new actions and using known good actions",
  },
  {
    id: 89,
    topic: "Reinforcement Learning",
    question: "What is Q-learning?",
    options: [
      { label: "A", text: "A value-based reinforcement learning algorithm" },
      { label: "B", text: "A policy-based reinforcement learning algorithm" },
      { label: "C", text: "A supervised learning algorithm" },
      { label: "D", text: "An unsupervised learning algorithm" },
    ],
    answer: "A. A value-based reinforcement learning algorithm",
  },
  {
    id: 90,
    topic: "Reinforcement Learning",
    question: "What is the reward signal in reinforcement learning?",
    options: [
      { label: "A", text: "Feedback from the environment indicating the quality of an action" },
      { label: "B", text: "The prediction error" },
      { label: "C", text: "The classification accuracy" },
      { label: "D", text: "The clustering quality" },
    ],
    answer: "A. Feedback from the environment indicating the quality of an action",
  },

  // ----- MLOps & Deployment (6) -----
  {
    id: 91,
    topic: "MLOps",
    question: "What is MLOps?",
    options: [
      { label: "A", text: "The practice of managing ML model lifecycle in production" },
      { label: "B", text: "The practice of training ML models" },
      { label: "C", text: "The practice of data engineering" },
      { label: "D", text: "The practice of model evaluation" },
    ],
    answer: "A. The practice of managing ML model lifecycle in production",
  },
  {
    id: 92,
    topic: "MLOps",
    question: "What is model versioning?",
    options: [
      { label: "A", text: "Tracking different versions of ML models" },
      { label: "B", text: "Tracking data versions" },
      { label: "C", text: "Tracking code versions" },
      { label: "D", text: "Tracking hardware versions" },
    ],
    answer: "A. Tracking different versions of ML models",
  },
  {
    id: 93,
    topic: "MLOps",
    question: "What is model drift?",
    options: [
      { label: "A", text: "The degradation of model performance over time" },
      { label: "B", text: "The improvement of model performance over time" },
      { label: "C", text: "The change in model architecture" },
      { label: "D", text: "The change in model parameters" },
    ],
    answer: "A. The degradation of model performance over time",
  },
  {
    id: 94,
    topic: "MLOps",
    question: "What is the purpose of A/B testing in ML?",
    options: [
      { label: "A", text: "To compare two models and choose the better one" },
      { label: "B", text: "To test model accuracy" },
      { label: "C", text: "To test model precision" },
      { label: "D", text: "To test model recall" },
    ],
    answer: "A. To compare two models and choose the better one",
  },
  {
    id: 95,
    topic: "MLOps",
    question: "What is model monitoring in production?",
    options: [
      { label: "A", text: "Continuously tracking model performance and health" },
      { label: "B", text: "Training the model" },
      { label: "C", text: "Deploying the model" },
      { label: "D", text: "Testing the model" },
    ],
    answer: "A. Continuously tracking model performance and health",
  },
  {
    id: 96,
    topic: "MLOps",
    question: "What is the difference between model training and inference?",
    options: [
      { label: "A", text: "Training learns patterns, inference applies learned patterns to new data" },
      { label: "B", text: "Inference learns patterns, training applies learned patterns" },
      { label: "C", text: "Both learn patterns" },
      { label: "D", text: "Both apply learned patterns" },
    ],
    answer: "A. Training learns patterns, inference applies learned patterns to new data",
  },

  // ----- Clustering (6) -----
  {
    id: 97,
    topic: "Clustering",
    question: "What is clustering?",
    options: [
      { label: "A", text: "Grouping similar data points together" },
      { label: "B", text: "Classifying data points into predefined categories" },
      { label: "C", text: "Predicting continuous values" },
      { label: "D", text: "Reducing data dimensions" },
    ],
    answer: "A. Grouping similar data points together",
  },
  {
    id: 98,
    topic: "Clustering",
    question: "What is the Elbow method in K-Means clustering?",
    options: [
      { label: "A", text: "A method to find the optimal number of clusters" },
      { label: "B", text: "A method to initialize centroids" },
      { label: "C", text: "A method to evaluate cluster quality" },
      { label: "D", text: "A method to visualize clusters" },
    ],
    answer: "A. A method to find the optimal number of clusters",
  },
  {
    id: 99,
    topic: "Clustering",
    question: "What is the Silhouette score?",
    options: [
      { label: "A", text: "A measure of how similar a point is to its own cluster compared to others" },
      { label: "B", text: "A measure of cluster size" },
      { label: "C", text: "A measure of cluster density" },
      { label: "D", text: "A measure of cluster distance" },
    ],
    answer: "A. A measure of how similar a point is to its own cluster compared to others",
  },
  {
    id: 100,
    topic: "Clustering",
    question: "What is the difference between K-Means and DBSCAN?",
    options: [
      { label: "A", text: "K-Means is centroid-based, DBSCAN is density-based" },
      { label: "B", text: "DBSCAN is centroid-based, K-Means is density-based" },
      { label: "C", text: "Both are centroid-based" },
      { label: "D", text: "Both are density-based" },
    ],
    answer: "A. K-Means is centroid-based, DBSCAN is density-based",
  },
  {
    id: 101,
    topic: "Clustering",
    question: "What is hierarchical clustering?",
    options: [
      { label: "A", text: "Creating a hierarchy of clusters in a tree-like structure" },
      { label: "B", text: "Creating clusters of equal size" },
      { label: "C", text: "Creating clusters based on density" },
      { label: "D", text: "Creating clusters based on centroids" },
    ],
    answer: "A. Creating a hierarchy of clusters in a tree-like structure",
  },
  {
    id: 102,
    topic: "Clustering",
    question: "What is the purpose of the dendrogram in hierarchical clustering?",
    options: [
      { label: "A", text: "To visualize the hierarchy of clusters" },
      { label: "B", text: "To measure cluster quality" },
      { label: "C", text: "To initialize centroids" },
      { label: "D", text: "To assign cluster labels" },
    ],
    answer: "A. To visualize the hierarchy of clusters",
  },

  // ----- Additional Questions to reach 120+ (18 more) -----
  {
    id: 103,
    topic: "ML Basics",
    question: "What is the difference between training and testing data?",
    options: [
      { label: "A", text: "Training data is used to learn, testing data is used to evaluate" },
      { label: "B", text: "Testing data is used to learn, training data is used to evaluate" },
      { label: "C", text: "Both are used for learning" },
      { label: "D", text: "Both are used for evaluation" },
    ],
    answer: "A. Training data is used to learn, testing data is used to evaluate",
  },
  {
    id: 104,
    topic: "Supervised Learning",
    question: "What is a support vector?",
    options: [
      { label: "A", text: "The data points closest to the decision boundary in SVM" },
      { label: "B", text: "The data points farthest from the decision boundary" },
      { label: "C", text: "The centroids of clusters" },
      { label: "D", text: "The means of distributions" },
    ],
    answer: "A. The data points closest to the decision boundary in SVM",
  },
  {
    id: 105,
    topic: "Regression",
    question: "What is the purpose of the intercept in linear regression?",
    options: [
      { label: "A", text: "To allow the model to fit data that doesn't pass through the origin" },
      { label: "B", text: "To increase model complexity" },
      { label: "C", text: "To reduce overfitting" },
      { label: "D", text: "To increase accuracy" },
    ],
    answer: "A. To allow the model to fit data that doesn't pass through the origin",
  },
  {
    id: 106,
    topic: "Classification",
    question: "What is the difference between binary and multi-class classification?",
    options: [
      { label: "A", text: "Binary has two classes, multi-class has more than two" },
      { label: "B", text: "Multi-class has two classes, binary has more than two" },
      { label: "C", text: "Both have two classes" },
      { label: "D", text: "Both have more than two classes" },
    ],
    answer: "A. Binary has two classes, multi-class has more than two",
  },
  {
    id: 107,
    topic: "Decision Trees",
    question: "What is the difference between ID3 and C4.5 algorithms?",
    options: [
      { label: "A", text: "ID3 uses information gain, C4.5 uses gain ratio" },
      { label: "B", text: "C4.5 uses information gain, ID3 uses gain ratio" },
      { label: "C", text: "Both use information gain" },
      { label: "D", text: "Both use gain ratio" },
    ],
    answer: "A. ID3 uses information gain, C4.5 uses gain ratio",
  },
  {
    id: 108,
    topic: "Ensemble Methods",
    question: "What is the purpose of the 'weak learner' in boosting?",
    options: [
      { label: "A", text: "To perform slightly better than random guessing" },
      { label: "B", text: "To perform perfectly" },
      { label: "C", text: "To perform poorly" },
      { label: "D", text: "To perform randomly" },
    ],
    answer: "A. To perform slightly better than random guessing",
  },
  {
    id: 109,
    topic: "Model Evaluation",
    question: "What is the difference between accuracy and balanced accuracy?",
    options: [
      { label: "A", text: "Balanced accuracy handles class imbalance better" },
      { label: "B", text: "Accuracy handles class imbalance better" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither handles class imbalance" },
    ],
    answer: "A. Balanced accuracy handles class imbalance better",
  },
  {
    id: 110,
    topic: "Neural Networks",
    question: "What is the purpose of batch normalization?",
    options: [
      { label: "A", text: "To normalize inputs of each layer to improve training" },
      { label: "B", text: "To reduce model complexity" },
      { label: "C", text: "To increase model complexity" },
      { label: "D", text: "To reduce training time" },
    ],
    answer: "A. To normalize inputs of each layer to improve training",
  },
  {
    id: 111,
    topic: "Deep Learning",
    question: "What is the difference between a CNN and an RNN?",
    options: [
      { label: "A", text: "CNN is for spatial data, RNN is for sequential data" },
      { label: "B", text: "RNN is for spatial data, CNN is for sequential data" },
      { label: "C", text: "Both are for spatial data" },
      { label: "D", text: "Both are for sequential data" },
    ],
    answer: "A. CNN is for spatial data, RNN is for sequential data",
  },
  {
    id: 112,
    topic: "Statistics & Probability",
    question: "What is the difference between covariance and correlation?",
    options: [
      { label: "A", text: "Correlation is a normalized version of covariance" },
      { label: "B", text: "Covariance is a normalized version of correlation" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is normalized" },
    ],
    answer: "A. Correlation is a normalized version of covariance",
  },
  {
    id: 113,
    topic: "Feature Engineering",
    question: "What is the purpose of polynomial features?",
    options: [
      { label: "A", text: "To create non-linear features from linear ones" },
      { label: "B", text: "To reduce features" },
      { label: "C", text: "To encode categorical features" },
      { label: "D", text: "To scale features" },
    ],
    answer: "A. To create non-linear features from linear ones",
  },
  {
    id: 114,
    topic: "NLP",
    question: "What is the purpose of TF-IDF?",
    options: [
      { label: "A", text: "To weight words based on importance in a document" },
      { label: "B", text: "To convert text to word embeddings" },
      { label: "C", text: "To remove stop words" },
      { label: "D", text: "To perform tokenization" },
    ],
    answer: "A. To weight words based on importance in a document",
  },
  {
    id: 115,
    topic: "Computer Vision",
    question: "What is the purpose of data augmentation in computer vision?",
    options: [
      { label: "A", text: "To increase the diversity of training data" },
      { label: "B", text: "To reduce the size of training data" },
      { label: "C", text: "To remove noise from images" },
      { label: "D", text: "To compress images" },
    ],
    answer: "A. To increase the diversity of training data",
  },
  {
    id: 116,
    topic: "Reinforcement Learning",
    question: "What is the difference between on-policy and off-policy learning?",
    options: [
      { label: "A", text: "On-policy uses current policy, off-policy can use different policies" },
      { label: "B", text: "Off-policy uses current policy, on-policy can use different policies" },
      { label: "C", text: "Both use current policy" },
      { label: "D", text: "Both use different policies" },
    ],
    answer: "A. On-policy uses current policy, off-policy can use different policies",
  },
  {
    id: 117,
    topic: "MLOps",
    question: "What is the purpose of CI/CD in MLOps?",
    options: [
      { label: "A", text: "To automate model training and deployment" },
      { label: "B", text: "To manually train models" },
      { label: "C", text: "To manually deploy models" },
      { label: "D", text: "To evaluate models" },
    ],
    answer: "A. To automate model training and deployment",
  },
  {
    id: 118,
    topic: "Clustering",
    question: "What is the difference between soft and hard clustering?",
    options: [
      { label: "A", text: "Hard assigns each point to one cluster, soft assigns probabilities" },
      { label: "B", text: "Soft assigns each point to one cluster, hard assigns probabilities" },
      { label: "C", text: "Both assign to one cluster" },
      { label: "D", text: "Both assign probabilities" },
    ],
    answer: "A. Hard assigns each point to one cluster, soft assigns probabilities",
  },
  {
    id: 119,
    topic: "ML Basics",
    question: "What is the difference between model parameters and hyperparameters?",
    options: [
      { label: "A", text: "Parameters are learned, hyperparameters are set before training" },
      { label: "B", text: "Hyperparameters are learned, parameters are set before training" },
      { label: "C", text: "Both are learned" },
      { label: "D", text: "Both are set before training" },
    ],
    answer: "A. Parameters are learned, hyperparameters are set before training",
  },
  {
    id: 120,
    topic: "Supervised Learning",
    question: "What is the purpose of the bias term in machine learning models?",
    options: [
      { label: "A", text: "To allow the model to fit data that doesn't pass through the origin" },
      { label: "B", text: "To increase model complexity" },
      { label: "C", text: "To reduce overfitting" },
      { label: "D", text: "To increase accuracy" },
    ],
    answer: "A. To allow the model to fit data that doesn't pass through the origin",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is Machine Learning?",
    answer:
      "Machine Learning is a subset of Artificial Intelligence that enables systems to learn and improve from experience without being explicitly programmed. It involves algorithms that can identify patterns and make predictions from data.",
  },
  {
    question: "What are the main types of machine learning?",
    answer:
      "The three main types are: Supervised Learning (learning from labeled data), Unsupervised Learning (finding patterns in unlabeled data), and Reinforcement Learning (learning through trial and error with rewards).",
  },
  {
    question: "What is the difference between AI and ML?",
    answer:
      "AI is the broader concept of machines being able to carry out tasks in a way that we would consider 'smart'. ML is a subset of AI that uses data and algorithms to mimic how humans learn, gradually improving its accuracy.",
  },
  {
    question: "How can I start learning machine learning?",
    answer:
      "Start with basic statistics and Python programming, then learn core ML algorithms (linear regression, decision trees, SVM), practice with libraries like scikit-learn, and finally explore deep learning. Kaggle is a great platform for practice.",
  },
  {
    question: "What are the prerequisites for ML?",
    answer:
      "Key prerequisites include: Python programming, basic statistics and probability, linear algebra, and calculus. Knowledge of data structures and algorithms is also helpful.",
  },
  {
    question: "Is machine learning still relevant in 2026?",
    answer:
      "Yes, ML is more relevant than ever with applications in healthcare, finance, autonomous vehicles, natural language processing, and recommendation systems. The field continues to grow with new advancements in deep learning and LLMs.",
  },
];

// ========================== COMPONENT ==========================
export default function MachineLearningMcq() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Extract unique topics
  const topics = Array.from(new Set(questionsData.map((q) => q.topic)));

  const filteredQuestions = selectedTopic
    ? questionsData.filter((q) => q.topic === selectedTopic)
    : questionsData;

  const getTopicCount = (topic) => {
    return questionsData.filter((q) => q.topic === topic).length;
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://CodeSkipper.in/mcq/machine-learning",
        "url": "https://CodeSkipper.in/mcq/machine-learning",
        "name": "Machine Learning Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Machine Learning, covering ML basics, algorithms, deep learning, NLP, computer vision, and more.",
        "about": { "@type": "Thing", "name": "Machine Learning MCQ" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": questionsData.map((q, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": { "@type": "Question", "name": q.question, "text": q.question },
          })),
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://CodeSkipper.in" },
            { "@type": "ListItem", "position": 2, "name": "MCQ", "item": "https://CodeSkipper.in/mcq" },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Machine Learning",
              "item": "https://CodeSkipper.in/mcq/machine-learning",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://CodeSkipper.in/#website",
        "url": "https://CodeSkipper.in",
        "name": "Code Skipper",
        "description": "Learn programming, AI, and data science with tutorials, MCQs, and resources.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://CodeSkipper.in/#organization",
          "name": "Code Skipper",
          "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png" },
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://CodeSkipper.in/search?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://CodeSkipper.in/#organization",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png", "width": "150", "height": "150" },
        "description": "Code Skipper provides programming tutorials, MCQs, and learning resources.",
        "email": "contact@CodeSkipper.in",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://CodeSkipper.in/#educational",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "description": "Educational platform for programming and AI learning.",
      },
      {
        "@type": "Course",
        "@id": "https://CodeSkipper.in/mcq/machine-learning#course",
        "name": "Machine Learning MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Machine Learning exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Machine Learning" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/machine-learning#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <CourseLayout>
      <Head>
        <title>Machine Learning MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Machine Learning multiple-choice questions with answers. Covers ML algorithms, deep learning, NLP, computer vision, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Machine Learning, MCQs, ML, Deep Learning, AI, NLP, Computer Vision, Data Science, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/machine-learning-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/machine-learning-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/machine-learning-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/machine-learning-mcq" />
        <meta property="og:title" content="Machine Learning MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Machine Learning multiple-choice questions covering ML algorithms, deep learning, NLP, computer vision, and more."
        />
        <meta property="og:image" content="https://CodeSkipper.in/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:site_name" content="Code Skipper" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CodeSkipper" />
        <meta name="twitter:title" content="Machine Learning MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Machine Learning multiple-choice questions covering ML algorithms, deep learning, NLP, computer vision, and more."
        />
        <meta name="twitter:image" content="https://CodeSkipper.in/Images/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative xl:container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ===== HERO ===== */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🤖 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Machine Learning <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-purple-50/90 max-w-2xl mb-6">
              Master Machine Learning with 120+ curated MCQs covering algorithms, deep learning,
              NLP, computer vision, and more. Perfect for data science interviews and exam preparation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">15 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Data Science Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-indigo-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore ML Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-purple-600 bg-purple-50 text-purple-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-purple-300 hover:bg-purple-50/50"
                }`}
                aria-label={`Filter by ${topic}`}
              >
                <span className="block truncate">{topic}</span>
                <span className="text-xs text-gray-400 font-normal">{getTopicCount(topic)} questions</span>
              </button>
            ))}
          </div>
          {selectedTopic && (
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing <strong>{filteredQuestions.length}</strong> questions for{" "}
                <strong className="text-purple-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-purple-600 hover:text-purple-800 font-medium"
              >
                Clear Filter ✕
              </button>
            </div>
          )}
        </section>

        {/* ===== MCQ LIST ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            Machine Learning MCQs
            <span className="ml-2 text-sm font-normal text-gray-500">({filteredQuestions.length} questions)</span>
          </h2>
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <article
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {q.options.map((option) => (
                      <li key={option.label} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center">
                          {option.label}
                        </span>
                        <p className="text-gray-700 text-sm md:text-base">{option.text}</p>
                      </li>
                    ))}
                  </ul>
                  <details className="mt-4 ml-11 group">
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-purple-600 hover:text-purple-800 bg-purple-50 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                      <span className="group-open:hidden">Show Answer</span>
                      <span className="hidden group-open:inline">Hide Answer</span>
                    </summary>
                    <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm md:text-base">
                      <span className="font-semibold">✓</span> {q.answer}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions found for this topic.</p>
              <button
                onClick={() => setSelectedTopic(null)}
                className="mt-3 text-purple-600 hover:text-purple-800 font-medium"
              >
                View all questions
              </button>
            </div>
          )}
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>
    </CourseLayout>
  );
}