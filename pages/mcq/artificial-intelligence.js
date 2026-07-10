import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- AI Fundamentals (6) -----
  {
    id: 1,
    topic: "AI Fundamentals",
    question: "What is the primary goal of Artificial Intelligence?",
    options: [
      { label: "A", text: "To replace human workers in all industries" },
      { label: "B", text: "To create systems that can perform tasks that typically require human intelligence" },
      { label: "C", text: "To develop robots that look like humans" },
      { label: "D", text: "To make computers faster than humans" },
    ],
    answer: "B. To create systems that can perform tasks that typically require human intelligence",
  },
  {
    id: 2,
    topic: "AI Fundamentals",
    question: "Which year is considered the birth of AI as a field?",
    options: [
      { label: "A", text: "1945" },
      { label: "B", text: "1950" },
      { label: "C", text: "1956" },
      { label: "D", text: "1960" },
    ],
    answer: "C. 1956",
  },
  {
    id: 3,
    topic: "AI Fundamentals",
    question: "Who coined the term 'Artificial Intelligence'?",
    options: [
      { label: "A", text: "Alan Turing" },
      { label: "B", text: "John McCarthy" },
      { label: "C", text: "Marvin Minsky" },
      { label: "D", text: "Geoffrey Hinton" },
    ],
    answer: "B. John McCarthy",
  },
  {
    id: 4,
    topic: "AI Fundamentals",
    question: "Which type of AI is designed to perform a specific task?",
    options: [
      { label: "A", text: "General AI" },
      { label: "B", text: "Super AI" },
      { label: "C", text: "Narrow AI" },
      { label: "D", text: "Strong AI" },
    ],
    answer: "C. Narrow AI",
  },
  {
    id: 5,
    topic: "AI Fundamentals",
    question: "What is the Turing Test used for?",
    options: [
      { label: "A", text: "To measure the speed of a computer" },
      { label: "B", text: "To determine if a machine can exhibit intelligent behavior equivalent to a human" },
      { label: "C", text: "To test the memory capacity of AI systems" },
      { label: "D", text: "To evaluate the processing power of AI hardware" },
    ],
    answer: "B. To determine if a machine can exhibit intelligent behavior equivalent to a human",
  },
  {
    id: 6,
    topic: "AI Fundamentals",
    question: "Which of the following is NOT a branch of AI?",
    options: [
      { label: "A", text: "Machine Learning" },
      { label: "B", text: "Natural Language Processing" },
      { label: "C", text: "Database Management" },
      { label: "D", text: "Computer Vision" },
    ],
    answer: "C. Database Management",
  },

  // ----- Machine Learning (6) -----
  {
    id: 7,
    topic: "Machine Learning",
    question: "What is Machine Learning?",
    options: [
      { label: "A", text: "A type of AI that learns from data without being explicitly programmed" },
      { label: "B", text: "A programming language for AI" },
      { label: "C", text: "A hardware component of AI systems" },
      { label: "D", text: "A database management system" },
    ],
    answer: "A. A type of AI that learns from data without being explicitly programmed",
  },
  {
    id: 8,
    topic: "Machine Learning",
    question: "Which type of learning uses labeled data for training?",
    options: [
      { label: "A", text: "Unsupervised Learning" },
      { label: "B", text: "Supervised Learning" },
      { label: "C", text: "Reinforcement Learning" },
      { label: "D", text: "Deep Learning" },
    ],
    answer: "B. Supervised Learning",
  },
  {
    id: 9,
    topic: "Machine Learning",
    question: "What is overfitting in machine learning?",
    options: [
      { label: "A", text: "When a model performs well on training data but poorly on new data" },
      { label: "B", text: "When a model performs poorly on training data" },
      { label: "C", text: "When a model has too few parameters" },
      { label: "D", text: "When a model is trained for too little time" },
    ],
    answer: "A. When a model performs well on training data but poorly on new data",
  },
  {
    id: 10,
    topic: "Machine Learning",
    question: "Which algorithm is used for classification tasks?",
    options: [
      { label: "A", text: "Linear Regression" },
      { label: "B", text: "Logistic Regression" },
      { label: "C", text: "K-Means" },
      { label: "D", text: "PCA" },
    ],
    answer: "B. Logistic Regression",
  },
  {
    id: 11,
    topic: "Machine Learning",
    question: "What is feature engineering?",
    options: [
      { label: "A", text: "The process of selecting and transforming raw data into features for ML models" },
      { label: "B", text: "The process of training a neural network" },
      { label: "C", text: "The process of deploying a model" },
      { label: "D", text: "The process of evaluating model performance" },
    ],
    answer: "A. The process of selecting and transforming raw data into features for ML models",
  },
  {
    id: 12,
    topic: "Machine Learning",
    question: "Which evaluation metric is used for classification problems?",
    options: [
      { label: "A", text: "Mean Squared Error" },
      { label: "B", text: "Accuracy" },
      { label: "C", text: "R-squared" },
      { label: "D", text: "Mean Absolute Error" },
    ],
    answer: "B. Accuracy",
  },

  // ----- Deep Learning (6) -----
  {
    id: 13,
    topic: "Deep Learning",
    question: "What is a neural network?",
    options: [
      { label: "A", text: "A network of computers connected together" },
      { label: "B", text: "A computational model inspired by the human brain" },
      { label: "C", text: "A type of database" },
      { label: "D", text: "A programming framework" },
    ],
    answer: "B. A computational model inspired by the human brain",
  },
  {
    id: 14,
    topic: "Deep Learning",
    question: "What is the role of an activation function in a neural network?",
    options: [
      { label: "A", text: "To add non-linearity to the model" },
      { label: "B", text: "To reduce the size of the network" },
      { label: "C", text: "To initialize weights" },
      { label: "D", text: "To optimize the learning rate" },
    ],
    answer: "A. To add non-linearity to the model",
  },
  {
    id: 15,
    topic: "Deep Learning",
    question: "Which neural network architecture is commonly used for image recognition?",
    options: [
      { label: "A", text: "RNN" },
      { label: "B", text: "CNN" },
      { label: "C", text: "LSTM" },
      { label: "D", text: "Transformer" },
    ],
    answer: "B. CNN (Convolutional Neural Network)",
  },
  {
    id: 16,
    topic: "Deep Learning",
    question: "What is a hidden layer in a neural network?",
    options: [
      { label: "A", text: "The layer that receives input data" },
      { label: "B", text: "The layer that produces the final output" },
      { label: "C", text: "Any layer between the input and output layers" },
      { label: "D", text: "A layer that is not visible to the user" },
    ],
    answer: "C. Any layer between the input and output layers",
  },
  {
    id: 17,
    topic: "Deep Learning",
    question: "Which type of neural network is designed for sequential data?",
    options: [
      { label: "A", text: "CNN" },
      { label: "B", text: "RNN" },
      { label: "C", text: "DNN" },
      { label: "D", text: "MLP" },
    ],
    answer: "B. RNN (Recurrent Neural Network)",
  },
  {
    id: 18,
    topic: "Deep Learning",
    question: "What is the purpose of dropout in neural networks?",
    options: [
      { label: "A", text: "To increase training speed" },
      { label: "B", text: "To prevent overfitting" },
      { label: "C", text: "To improve accuracy" },
      { label: "D", text: "To reduce the number of parameters" },
    ],
    answer: "B. To prevent overfitting",
  },

  // ----- NLP (6) -----
  {
    id: 19,
    topic: "Natural Language Processing",
    question: "What is NLP?",
    options: [
      { label: "A", text: "A field that focuses on the interaction between computers and human language" },
      { label: "B", text: "A programming language" },
      { label: "C", text: "A type of database" },
      { label: "D", text: "A hardware component" },
    ],
    answer: "A. A field that focuses on the interaction between computers and human language",
  },
  {
    id: 20,
    topic: "Natural Language Processing",
    question: "What is tokenization in NLP?",
    options: [
      { label: "A", text: "The process of converting text into tokens or words" },
      { label: "B", text: "The process of converting words into vectors" },
      { label: "C", text: "The process of removing stop words" },
      { label: "D", text: "The process of stemming words" },
    ],
    answer: "A. The process of converting text into tokens or words",
  },
  {
    id: 21,
    topic: "Natural Language Processing",
    question: "What is the difference between stemming and lemmatization?",
    options: [
      { label: "A", text: "Stemming is faster but less accurate than lemmatization" },
      { label: "B", text: "Lemmatization is faster than stemming" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Stemming uses a dictionary while lemmatization uses rules" },
    ],
    answer: "A. Stemming is faster but less accurate than lemmatization",
  },
  {
    id: 22,
    topic: "Natural Language Processing",
    question: "What is Named Entity Recognition (NER)?",
    options: [
      { label: "A", text: "A technique to identify and classify named entities in text" },
      { label: "B", text: "A technique to translate text" },
      { label: "C", text: "A technique to summarize text" },
      { label: "D", text: "A technique to generate text" },
    ],
    answer: "A. A technique to identify and classify named entities in text",
  },
  {
    id: 23,
    topic: "Natural Language Processing",
    question: "Which technique is used to determine the sentiment of a text?",
    options: [
      { label: "A", text: "Sentiment Analysis" },
      { label: "B", text: "Text Classification" },
      { label: "C", text: "Topic Modeling" },
      { label: "D", text: "Text Summarization" },
    ],
    answer: "A. Sentiment Analysis",
  },
  {
    id: 24,
    topic: "Natural Language Processing",
    question: "What is a transformer model?",
    options: [
      { label: "A", text: "A neural network architecture that uses self-attention mechanisms" },
      { label: "B", text: "A type of CNN" },
      { label: "C", text: "A type of RNN" },
      { label: "D", text: "A database model" },
    ],
    answer: "A. A neural network architecture that uses self-attention mechanisms",
  },

  // ----- Computer Vision (6) -----
  {
    id: 25,
    topic: "Computer Vision",
    question: "What is Computer Vision?",
    options: [
      { label: "A", text: "A field that enables computers to interpret and understand visual information" },
      { label: "B", text: "A type of computer monitor" },
      { label: "C", text: "A programming language" },
      { label: "D", text: "A database system" },
    ],
    answer: "A. A field that enables computers to interpret and understand visual information",
  },
  {
    id: 26,
    topic: "Computer Vision",
    question: "What is image classification?",
    options: [
      { label: "A", text: "The process of identifying the category of an image" },
      { label: "B", text: "The process of detecting objects in an image" },
      { label: "C", text: "The process of generating images" },
      { label: "D", text: "The process of editing images" },
    ],
    answer: "A. The process of identifying the category of an image",
  },
  {
    id: 27,
    topic: "Computer Vision",
    question: "What is object detection?",
    options: [
      { label: "A", text: "Identifying and locating objects in an image" },
      { label: "B", text: "Classifying the entire image" },
      { label: "C", text: "Generating new images" },
      { label: "D", text: "Enhancing image quality" },
    ],
    answer: "A. Identifying and locating objects in an image",
  },
  {
    id: 28,
    topic: "Computer Vision",
    question: "What is OCR used for?",
    options: [
      { label: "A", text: "To recognize text in images and documents" },
      { label: "B", text: "To detect objects in images" },
      { label: "C", text: "To classify images" },
      { label: "D", text: "To generate images" },
    ],
    answer: "A. To recognize text in images and documents",
  },
  {
    id: 29,
    topic: "Computer Vision",
    question: "What is image segmentation?",
    options: [
      { label: "A", text: "Dividing an image into meaningful segments or regions" },
      { label: "B", text: "Reducing the size of an image" },
      { label: "C", text: "Enhancing the colors of an image" },
      { label: "D", text: "Converting an image to grayscale" },
    ],
    answer: "A. Dividing an image into meaningful segments or regions",
  },
  {
    id: 30,
    topic: "Computer Vision",
    question: "What is face recognition?",
    options: [
      { label: "A", text: "The process of identifying or verifying a person from an image" },
      { label: "B", text: "The process of detecting emotions from facial expressions" },
      { label: "C", text: "The process of generating faces" },
      { label: "D", text: "The process of editing faces" },
    ],
    answer: "A. The process of identifying or verifying a person from an image",
  },

  // ----- Generative AI (6) -----
  {
    id: 31,
    topic: "Generative AI",
    question: "What is Generative AI?",
    options: [
      { label: "A", text: "AI that generates new content such as text, images, or audio" },
      { label: "B", text: "AI that classifies data" },
      { label: "C", text: "AI that predicts outcomes" },
      { label: "D", text: "AI that analyzes data" },
    ],
    answer: "A. AI that generates new content such as text, images, or audio",
  },
  {
    id: 32,
    topic: "Generative AI",
    question: "What is a Large Language Model (LLM)?",
    options: [
      { label: "A", text: "A type of AI model trained on large amounts of text data" },
      { label: "B", text: "A type of computer hardware" },
      { label: "C", text: "A type of database" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. A type of AI model trained on large amounts of text data",
  },
  {
    id: 33,
    topic: "Generative AI",
    question: "What is text generation in AI?",
    options: [
      { label: "A", text: "The process of generating human-like text using AI" },
      { label: "B", text: "The process of translating text" },
      { label: "C", text: "The process of summarizing text" },
      { label: "D", text: "The process of classifying text" },
    ],
    answer: "A. The process of generating human-like text using AI",
  },
  {
    id: 34,
    topic: "Generative AI",
    question: "What is a GAN?",
    options: [
      { label: "A", text: "Generative Adversarial Network" },
      { label: "B", text: "Generalized Autonomous Network" },
      { label: "C", text: "Genetic Algorithm Network" },
      { label: "D", text: "Graph Attention Network" },
    ],
    answer: "A. Generative Adversarial Network",
  },
  {
    id: 35,
    topic: "Generative AI",
    question: "What is the main use of stable diffusion?",
    options: [
      { label: "A", text: "Image generation from text prompts" },
      { label: "B", text: "Text classification" },
      { label: "C", text: "Speech recognition" },
      { label: "D", text: "Data analysis" },
    ],
    answer: "A. Image generation from text prompts",
  },
  {
    id: 36,
    topic: "Generative AI",
    question: "Which of the following is a text generation model?",
    options: [
      { label: "A", text: "GPT" },
      { label: "B", text: "GAN" },
      { label: "C", text: "VAE" },
      { label: "D", text: "CNN" },
    ],
    answer: "A. GPT (Generative Pre-trained Transformer)",
  },

  // ----- Prompt Engineering (6) -----
  {
    id: 37,
    topic: "Prompt Engineering",
    question: "What is prompt engineering?",
    options: [
      { label: "A", text: "The process of designing and optimizing inputs to AI models" },
      { label: "B", text: "The process of training AI models" },
      { label: "C", text: "The process of deploying AI models" },
      { label: "D", text: "The process of evaluating AI models" },
    ],
    answer: "A. The process of designing and optimizing inputs to AI models",
  },
  {
    id: 38,
    topic: "Prompt Engineering",
    question: "What is zero-shot prompting?",
    options: [
      { label: "A", text: "Prompting without any examples" },
      { label: "B", text: "Prompting with one example" },
      { label: "C", text: "Prompting with multiple examples" },
      { label: "D", text: "Prompting with no context" },
    ],
    answer: "A. Prompting without any examples",
  },
  {
    id: 39,
    topic: "Prompt Engineering",
    question: "What is few-shot prompting?",
    options: [
      { label: "A", text: "Providing a few examples in the prompt" },
      { label: "B", text: "Providing no examples in the prompt" },
      { label: "C", text: "Providing one example in the prompt" },
      { label: "D", text: "Providing many examples in the prompt" },
    ],
    answer: "A. Providing a few examples in the prompt",
  },
  {
    id: 40,
    topic: "Prompt Engineering",
    question: "What is chain-of-thought prompting?",
    options: [
      { label: "A", text: "Encouraging the model to think step-by-step" },
      { label: "B", text: "Providing multiple examples" },
      { label: "C", text: "Using a single-word prompt" },
      { label: "D", text: "Using a long prompt" },
    ],
    answer: "A. Encouraging the model to think step-by-step",
  },
  {
    id: 41,
    topic: "Prompt Engineering",
    question: "Why is prompt engineering important?",
    options: [
      { label: "A", text: "It improves the quality and relevance of AI responses" },
      { label: "B", text: "It speeds up the training process" },
      { label: "C", text: "It reduces the cost of AI" },
      { label: "D", text: "It makes AI more secure" },
    ],
    answer: "A. It improves the quality and relevance of AI responses",
  },
  {
    id: 42,
    topic: "Prompt Engineering",
    question: "What is one-shot prompting?",
    options: [
      { label: "A", text: "Providing one example in the prompt" },
      { label: "B", text: "Providing no examples in the prompt" },
      { label: "C", text: "Providing many examples in the prompt" },
      { label: "D", text: "Providing a single word prompt" },
    ],
    answer: "A. Providing one example in the prompt",
  },

  // ----- AI Agents (6) -----
  {
    id: 43,
    topic: "AI Agents",
    question: "What is an AI agent?",
    options: [
      { label: "A", text: "A system that perceives its environment and takes actions" },
      { label: "B", text: "A type of robot" },
      { label: "C", text: "A programming language" },
      { label: "D", text: "A database system" },
    ],
    answer: "A. A system that perceives its environment and takes actions",
  },
  {
    id: 44,
    topic: "AI Agents",
    question: "What is a multi-agent system?",
    options: [
      { label: "A", text: "A system with multiple AI agents interacting with each other" },
      { label: "B", text: "A system with one AI agent" },
      { label: "C", text: "A system with no AI agents" },
      { label: "D", text: "A system with human agents only" },
    ],
    answer: "A. A system with multiple AI agents interacting with each other",
  },
  {
    id: 45,
    topic: "AI Agents",
    question: "What is the role of memory in AI agents?",
    options: [
      { label: "A", text: "To store past interactions and experiences" },
      { label: "B", text: "To store training data" },
      { label: "C", text: "To store model parameters" },
      { label: "D", text: "To store user passwords" },
    ],
    answer: "A. To store past interactions and experiences",
  },
  {
    id: 46,
    topic: "AI Agents",
    question: "What is planning in the context of AI agents?",
    options: [
      { label: "A", text: "The process of deciding the sequence of actions to achieve a goal" },
      { label: "B", text: "The process of training a model" },
      { label: "C", text: "The process of deploying a model" },
      { label: "D", text: "The process of evaluating a model" },
    ],
    answer: "A. The process of deciding the sequence of actions to achieve a goal",
  },
  {
    id: 47,
    topic: "AI Agents",
    question: "What is tool calling in AI agents?",
    options: [
      { label: "A", text: "The ability of an AI agent to use external tools or APIs" },
      { label: "B", text: "The ability to call functions within the code" },
      { label: "C", text: "The ability to generate code" },
      { label: "D", text: "The ability to debug code" },
    ],
    answer: "A. The ability of an AI agent to use external tools or APIs",
  },
  {
    id: 48,
    topic: "AI Agents",
    question: "What is an autonomous agent?",
    options: [
      { label: "A", text: "An AI agent that can operate without human intervention" },
      { label: "B", text: "An AI agent that requires human supervision" },
      { label: "C", text: "An AI agent that only works offline" },
      { label: "D", text: "An AI agent that is not connected to the internet" },
    ],
    answer: "A. An AI agent that can operate without human intervention",
  },

  // ----- Chatbots & Virtual Assistants (6) -----
  {
    id: 49,
    topic: "Chatbots & Virtual Assistants",
    question: "What is a chatbot?",
    options: [
      { label: "A", text: "A computer program that simulates conversation with human users" },
      { label: "B", text: "A type of robot" },
      { label: "C", text: "A programming language" },
      { label: "D", text: "A database system" },
    ],
    answer: "A. A computer program that simulates conversation with human users",
  },
  {
    id: 50,
    topic: "Chatbots & Virtual Assistants",
    question: "What is a rule-based chatbot?",
    options: [
      { label: "A", text: "A chatbot that follows predefined rules and scripts" },
      { label: "B", text: "A chatbot that uses machine learning" },
      { label: "C", text: "A chatbot that uses deep learning" },
      { label: "D", text: "A chatbot that uses reinforcement learning" },
    ],
    answer: "A. A chatbot that follows predefined rules and scripts",
  },
  {
    id: 51,
    topic: "Chatbots & Virtual Assistants",
    question: "What is conversational AI?",
    options: [
      { label: "A", text: "AI that enables natural conversations between humans and machines" },
      { label: "B", text: "AI that generates images" },
      { label: "C", text: "AI that classifies data" },
      { label: "D", text: "AI that predicts outcomes" },
    ],
    answer: "A. AI that enables natural conversations between humans and machines",
  },
  {
    id: 52,
    topic: "Chatbots & Virtual Assistants",
    question: "Which of the following is a virtual assistant?",
    options: [
      { label: "A", text: "Siri" },
      { label: "B", text: "ChatGPT" },
      { label: "C", text: "Google Translate" },
      { label: "D", text: "Grammarly" },
    ],
    answer: "A. Siri",
  },
  {
    id: 53,
    topic: "Chatbots & Virtual Assistants",
    question: "What is an AI chatbot?",
    options: [
      { label: "A", text: "A chatbot that uses AI techniques to understand and respond" },
      { label: "B", text: "A chatbot that uses only predefined rules" },
      { label: "C", text: "A chatbot that requires human intervention" },
      { label: "D", text: "A chatbot that only works offline" },
    ],
    answer: "A. A chatbot that uses AI techniques to understand and respond",
  },
  {
    id: 54,
    topic: "Chatbots & Virtual Assistants",
    question: "What is the primary use of virtual assistants?",
    options: [
      { label: "A", text: "To perform tasks and provide information through voice or text" },
      { label: "B", text: "To generate images" },
      { label: "C", text: "To classify data" },
      { label: "D", text: "To analyze data" },
    ],
    answer: "A. To perform tasks and provide information through voice or text",
  },

  // ----- Robotics & AI (6) -----
  {
    id: 55,
    topic: "Robotics & AI",
    question: "What is the intersection of robotics and AI called?",
    options: [
      { label: "A", text: "Intelligent Robotics" },
      { label: "B", text: "Mechanical Engineering" },
      { label: "C", text: "Electrical Engineering" },
      { label: "D", text: "Computer Science" },
    ],
    answer: "A. Intelligent Robotics",
  },
  {
    id: 56,
    topic: "Robotics & AI",
    question: "What is an intelligent robot?",
    options: [
      { label: "A", text: "A robot that uses AI to perceive and act in its environment" },
      { label: "B", text: "A robot that is humanoid in shape" },
      { label: "C", text: "A robot that is made of metal" },
      { label: "D", text: "A robot that is controlled by a human" },
    ],
    answer: "A. A robot that uses AI to perceive and act in its environment",
  },
  {
    id: 57,
    topic: "Robotics & AI",
    question: "What is robot navigation?",
    options: [
      { label: "A", text: "The process of guiding a robot from one location to another" },
      { label: "B", text: "The process of building a robot" },
      { label: "C", text: "The process of programming a robot" },
      { label: "D", text: "The process of repairing a robot" },
    ],
    answer: "A. The process of guiding a robot from one location to another",
  },
  {
    id: 58,
    topic: "Robotics & AI",
    question: "What is a humanoid robot?",
    options: [
      { label: "A", text: "A robot with a human-like appearance" },
      { label: "B", text: "A robot that is made of human parts" },
      { label: "C", text: "A robot that is controlled by a human" },
      { label: "D", text: "A robot that is used for medical purposes" },
    ],
    answer: "A. A robot with a human-like appearance",
  },
  {
    id: 59,
    topic: "Robotics & AI",
    question: "What are service robots?",
    options: [
      { label: "A", text: "Robots that assist humans in daily tasks" },
      { label: "B", text: "Robots used in manufacturing" },
      { label: "C", text: "Robots used in space exploration" },
      { label: "D", text: "Robots used in mining" },
    ],
    answer: "A. Robots that assist humans in daily tasks",
  },
  {
    id: 60,
    topic: "Robotics & AI",
    question: "What is SLAM in robotics?",
    options: [
      { label: "A", text: "Simultaneous Localization and Mapping" },
      { label: "B", text: "Simple Localization and Mapping" },
      { label: "C", text: "Simultaneous Learning and Mapping" },
      { label: "D", text: "Simple Learning and Mapping" },
    ],
    answer: "A. Simultaneous Localization and Mapping",
  },

  // ----- Recommendation Systems (6) -----
  {
    id: 61,
    topic: "Recommendation Systems",
    question: "What is a recommendation system?",
    options: [
      { label: "A", text: "A system that suggests items to users based on their preferences" },
      { label: "B", text: "A system that classifies items" },
      { label: "C", text: "A system that generates items" },
      { label: "D", text: "A system that analyzes items" },
    ],
    answer: "A. A system that suggests items to users based on their preferences",
  },
  {
    id: 62,
    topic: "Recommendation Systems",
    question: "What is collaborative filtering?",
    options: [
      { label: "A", text: "A technique that uses the preferences of similar users" },
      { label: "B", text: "A technique that uses item features" },
      { label: "C", text: "A technique that uses deep learning" },
      { label: "D", text: "A technique that uses reinforcement learning" },
    ],
    answer: "A. A technique that uses the preferences of similar users",
  },
  {
    id: 63,
    topic: "Recommendation Systems",
    question: "What is content-based filtering?",
    options: [
      { label: "A", text: "A technique that recommends items based on their features" },
      { label: "B", text: "A technique that uses user preferences" },
      { label: "C", text: "A technique that uses collaborative filtering" },
      { label: "D", text: "A technique that uses deep learning" },
    ],
    answer: "A. A technique that recommends items based on their features",
  },
  {
    id: 64,
    topic: "Recommendation Systems",
    question: "What is a hybrid recommendation system?",
    options: [
      { label: "A", text: "A system that combines multiple recommendation techniques" },
      { label: "B", text: "A system that uses only collaborative filtering" },
      { label: "C", text: "A system that uses only content-based filtering" },
      { label: "D", text: "A system that does not use any techniques" },
    ],
    answer: "A. A system that combines multiple recommendation techniques",
  },
  {
    id: 65,
    topic: "Recommendation Systems",
    question: "Where are recommendation systems commonly used?",
    options: [
      { label: "A", text: "E-commerce platforms" },
      { label: "B", text: "Weather forecasting" },
      { label: "C", text: "Traffic management" },
      { label: "D", text: "Power grid management" },
    ],
    answer: "A. E-commerce platforms",
  },
  {
    id: 66,
    topic: "Recommendation Systems",
    question: "What is the cold start problem?",
    options: [
      { label: "A", text: "The problem of making recommendations for new users or items" },
      { label: "B", text: "The problem of slow recommendation speed" },
      { label: "C", text: "The problem of inaccurate recommendations" },
      { label: "D", text: "The problem of high memory usage" },
    ],
    answer: "A. The problem of making recommendations for new users or items",
  },

  // ----- Expert Systems (6) -----
  {
    id: 67,
    topic: "Expert Systems",
    question: "What is an expert system?",
    options: [
      { label: "A", text: "A computer system that emulates the decision-making ability of a human expert" },
      { label: "B", text: "A system that classifies data" },
      { label: "C", text: "A system that generates data" },
      { label: "D", text: "A system that analyzes data" },
    ],
    answer: "A. A computer system that emulates the decision-making ability of a human expert",
  },
  {
    id: 68,
    topic: "Expert Systems",
    question: "What is a knowledge base in an expert system?",
    options: [
      { label: "A", text: "A repository of facts and rules" },
      { label: "B", text: "A database of user information" },
      { label: "C", text: "A collection of algorithms" },
      { label: "D", text: "A set of training data" },
    ],
    answer: "A. A repository of facts and rules",
  },
  {
    id: 69,
    topic: "Expert Systems",
    question: "What is an inference engine?",
    options: [
      { label: "A", text: "A component that applies logical rules to the knowledge base" },
      { label: "B", text: "A component that stores knowledge" },
      { label: "C", text: "A component that interacts with the user" },
      { label: "D", text: "A component that trains the system" },
    ],
    answer: "A. A component that applies logical rules to the knowledge base",
  },
  {
    id: 70,
    topic: "Expert Systems",
    question: "What is a rule-based system?",
    options: [
      { label: "A", text: "A system that uses if-then rules to make decisions" },
      { label: "B", text: "A system that uses machine learning" },
      { label: "C", text: "A system that uses deep learning" },
      { label: "D", text: "A system that uses reinforcement learning" },
    ],
    answer: "A. A system that uses if-then rules to make decisions",
  },
  {
    id: 71,
    topic: "Expert Systems",
    question: "What is a decision support system?",
    options: [
      { label: "A", text: "A system that helps in making business decisions" },
      { label: "B", text: "A system that automatically makes decisions" },
      { label: "C", text: "A system that collects data" },
      { label: "D", text: "A system that analyzes data" },
    ],
    answer: "A. A system that helps in making business decisions",
  },
  {
    id: 72,
    topic: "Expert Systems",
    question: "Which of the following is a limitation of expert systems?",
    options: [
      { label: "A", text: "They cannot learn from experience" },
      { label: "B", text: "They are too fast" },
      { label: "C", text: "They are too accurate" },
      { label: "D", text: "They are too cheap" },
    ],
    answer: "A. They cannot learn from experience",
  },

  // ----- AI in Healthcare (6) -----
  {
    id: 73,
    topic: "AI in Healthcare",
    question: "How is AI used in healthcare?",
    options: [
      { label: "A", text: "For disease prediction and diagnosis" },
      { label: "B", text: "For weather prediction" },
      { label: "C", text: "For traffic management" },
      { label: "D", text: "For agricultural planning" },
    ],
    answer: "A. For disease prediction and diagnosis",
  },
  {
    id: 74,
    topic: "AI in Healthcare",
    question: "What is AI-powered medical imaging used for?",
    options: [
      { label: "A", text: "To analyze medical images for diagnosis" },
      { label: "B", text: "To generate medical images" },
      { label: "C", text: "To classify medical images" },
      { label: "D", text: "To enhance medical images" },
    ],
    answer: "A. To analyze medical images for diagnosis",
  },
  {
    id: 75,
    topic: "AI in Healthcare",
    question: "How does AI help in drug discovery?",
    options: [
      { label: "A", text: "By predicting molecular interactions and properties" },
      { label: "B", text: "By manufacturing drugs" },
      { label: "C", text: "By packaging drugs" },
      { label: "D", text: "By selling drugs" },
    ],
    answer: "A. By predicting molecular interactions and properties",
  },
  {
    id: 76,
    topic: "AI in Healthcare",
    question: "What is personalized medicine?",
    options: [
      { label: "A", text: "Medical treatment tailored to individual patients" },
      { label: "B", text: "Medical treatment for a group of patients" },
      { label: "C", text: "Medical treatment for all patients" },
      { label: "D", text: "Medical treatment for animals" },
    ],
    answer: "A. Medical treatment tailored to individual patients",
  },
  {
    id: 77,
    topic: "AI in Healthcare",
    question: "What is AI diagnosis?",
    options: [
      { label: "A", text: "Using AI to diagnose medical conditions" },
      { label: "B", text: "Using AI to treat medical conditions" },
      { label: "C", text: "Using AI to prevent medical conditions" },
      { label: "D", text: "Using AI to research medical conditions" },
    ],
    answer: "A. Using AI to diagnose medical conditions",
  },
  {
    id: 78,
    topic: "AI in Healthcare",
    question: "Which of the following is an AI application in healthcare?",
    options: [
      { label: "A", text: "Remote patient monitoring" },
      { label: "B", text: "Stock market prediction" },
      { label: "C", text: "Weather forecasting" },
      { label: "D", text: "Traffic prediction" },
    ],
    answer: "A. Remote patient monitoring",
  },

  // ----- AI in Business (6) -----
  {
    id: 79,
    topic: "AI in Business",
    question: "How is AI used in banking?",
    options: [
      { label: "A", text: "For fraud detection and customer service" },
      { label: "B", text: "For cooking" },
      { label: "C", text: "For gardening" },
      { label: "D", text: "For painting" },
    ],
    answer: "A. For fraud detection and customer service",
  },
  {
    id: 80,
    topic: "AI in Business",
    question: "What is AI in finance used for?",
    options: [
      { label: "A", text: "Algorithmic trading and risk assessment" },
      { label: "B", text: "Cooking" },
      { label: "C", text: "Gardening" },
      { label: "D", text: "Painting" },
    ],
    answer: "A. Algorithmic trading and risk assessment",
  },
  {
    id: 81,
    topic: "AI in Business",
    question: "How does AI help in marketing?",
    options: [
      { label: "A", text: "By personalizing customer experiences" },
      { label: "B", text: "By creating physical products" },
      { label: "C", text: "By managing inventory" },
      { label: "D", text: "By shipping products" },
    ],
    answer: "A. By personalizing customer experiences",
  },
  {
    id: 82,
    topic: "AI in Business",
    question: "What is AI in HR?",
    options: [
      { label: "A", text: "Using AI for recruitment and employee management" },
      { label: "B", text: "Using AI for cooking" },
      { label: "C", text: "Using AI for gardening" },
      { label: "D", text: "Using AI for painting" },
    ],
    answer: "A. Using AI for recruitment and employee management",
  },
  {
    id: 83,
    topic: "AI in Business",
    question: "How does AI improve customer support?",
    options: [
      { label: "A", text: "Through AI-powered chatbots and automated responses" },
      { label: "B", text: "By replacing all human staff" },
      { label: "C", text: "By ignoring customer queries" },
      { label: "D", text: "By providing slow responses" },
    ],
    answer: "A. Through AI-powered chatbots and automated responses",
  },
  {
    id: 84,
    topic: "AI in Business",
    question: "What is predictive analytics in business?",
    options: [
      { label: "A", text: "Using data to predict future business outcomes" },
      { label: "B", text: "Analyzing past data" },
      { label: "C", text: "Collecting data" },
      { label: "D", text: "Storing data" },
    ],
    answer: "A. Using data to predict future business outcomes",
  },

  // ----- AI in Cyber Security (6) -----
  {
    id: 85,
    topic: "AI in Cyber Security",
    question: "How is AI used in cyber security?",
    options: [
      { label: "A", text: "For threat detection and prevention" },
      { label: "B", text: "For cooking" },
      { label: "C", text: "For gardening" },
      { label: "D", text: "For painting" },
    ],
    answer: "A. For threat detection and prevention",
  },
  {
    id: 86,
    topic: "AI in Cyber Security",
    question: "What is malware detection using AI?",
    options: [
      { label: "A", text: "Using AI to identify and classify malicious software" },
      { label: "B", text: "Using AI to create malware" },
      { label: "C", text: "Using AI to spread malware" },
      { label: "D", text: "Using AI to hide malware" },
    ],
    answer: "A. Using AI to identify and classify malicious software",
  },
  {
    id: 87,
    topic: "AI in Cyber Security",
    question: "What is intrusion detection?",
    options: [
      { label: "A", text: "Detecting unauthorized access to computer systems" },
      { label: "B", text: "Detecting authorized access" },
      { label: "C", text: "Detecting malware" },
      { label: "D", text: "Detecting viruses" },
    ],
    answer: "A. Detecting unauthorized access to computer systems",
  },
  {
    id: 88,
    topic: "AI in Cyber Security",
    question: "How does AI detect phishing?",
    options: [
      { label: "A", text: "By analyzing patterns and anomalies in communications" },
      { label: "B", text: "By reading all emails" },
      { label: "C", text: "By blocking all emails" },
      { label: "D", text: "By deleting all emails" },
    ],
    answer: "A. By analyzing patterns and anomalies in communications",
  },
  {
    id: 89,
    topic: "AI in Cyber Security",
    question: "What is fraud detection in AI?",
    options: [
      { label: "A", text: "Using AI to identify fraudulent transactions" },
      { label: "B", text: "Using AI to create fraud" },
      { label: "C", text: "Using AI to hide fraud" },
      { label: "D", text: "Using AI to promote fraud" },
    ],
    answer: "A. Using AI to identify fraudulent transactions",
  },
  {
    id: 90,
    topic: "AI in Cyber Security",
    question: "What is the role of AI in security monitoring?",
    options: [
      { label: "A", text: "To continuously analyze and respond to security threats" },
      { label: "B", text: "To generate security reports" },
      { label: "C", text: "To configure security settings" },
      { label: "D", text: "To install security software" },
    ],
    answer: "A. To continuously analyze and respond to security threats",
  },

  // ----- AI Ethics (6) -----
  {
    id: 91,
    topic: "AI Ethics",
    question: "What is AI bias?",
    options: [
      { label: "A", text: "Systematic errors in AI systems that lead to unfair outcomes" },
      { label: "B", text: "The speed of AI systems" },
      { label: "C", text: "The accuracy of AI systems" },
      { label: "D", text: "The cost of AI systems" },
    ],
    answer: "A. Systematic errors in AI systems that lead to unfair outcomes",
  },
  {
    id: 92,
    topic: "AI Ethics",
    question: "What is fairness in AI?",
    options: [
      { label: "A", text: "Ensuring AI systems do not discriminate against individuals or groups" },
      { label: "B", text: "Ensuring AI systems are fast" },
      { label: "C", text: "Ensuring AI systems are cheap" },
      { label: "D", text: "Ensuring AI systems are accurate" },
    ],
    answer: "A. Ensuring AI systems do not discriminate against individuals or groups",
  },
  {
    id: 93,
    topic: "AI Ethics",
    question: "What is explainable AI (XAI)?",
    options: [
      { label: "A", text: "AI that can explain its decisions and reasoning" },
      { label: "B", text: "AI that is fast" },
      { label: "C", text: "AI that is cheap" },
      { label: "D", text: "AI that is accurate" },
    ],
    answer: "A. AI that can explain its decisions and reasoning",
  },
  {
    id: 94,
    topic: "AI Ethics",
    question: "What is privacy in AI?",
    options: [
      { label: "A", text: "Protecting user data from unauthorized access and misuse" },
      { label: "B", text: "Making AI systems fast" },
      { label: "C", text: "Making AI systems cheap" },
      { label: "D", text: "Making AI systems accurate" },
    ],
    answer: "A. Protecting user data from unauthorized access and misuse",
  },
  {
    id: 95,
    topic: "AI Ethics",
    question: "What is responsible AI?",
    options: [
      { label: "A", text: "Developing AI with ethical considerations and accountability" },
      { label: "B", text: "Developing AI quickly" },
      { label: "C", text: "Developing AI cheaply" },
      { label: "D", text: "Developing AI for profit" },
    ],
    answer: "A. Developing AI with ethical considerations and accountability",
  },
  {
    id: 96,
    topic: "AI Ethics",
    question: "What is transparency in AI?",
    options: [
      { label: "A", text: "Making AI systems and their decision-making processes clear and understandable" },
      { label: "B", text: "Making AI systems fast" },
      { label: "C", text: "Making AI systems cheap" },
      { label: "D", text: "Making AI systems accurate" },
    ],
    answer: "A. Making AI systems and their decision-making processes clear and understandable",
  },

  // ----- Data Science for AI (6) -----
  {
    id: 97,
    topic: "Data Science for AI",
    question: "What is data collection in AI?",
    options: [
      { label: "A", text: "The process of gathering data for training AI models" },
      { label: "B", text: "The process of analyzing data" },
      { label: "C", text: "The process of storing data" },
      { label: "D", text: "The process of deleting data" },
    ],
    answer: "A. The process of gathering data for training AI models",
  },
  {
    id: 98,
    topic: "Data Science for AI",
    question: "What is data cleaning?",
    options: [
      { label: "A", text: "The process of removing errors and inconsistencies from data" },
      { label: "B", text: "The process of collecting data" },
      { label: "C", text: "The process of storing data" },
      { label: "D", text: "The process of analyzing data" },
    ],
    answer: "A. The process of removing errors and inconsistencies from data",
  },
  {
    id: 99,
    topic: "Data Science for AI",
    question: "What is data labeling?",
    options: [
      { label: "A", text: "The process of annotating data with labels for supervised learning" },
      { label: "B", text: "The process of collecting data" },
      { label: "C", text: "The process of storing data" },
      { label: "D", text: "The process of analyzing data" },
    ],
    answer: "A. The process of annotating data with labels for supervised learning",
  },
  {
    id: 100,
    topic: "Data Science for AI",
    question: "What is feature selection?",
    options: [
      { label: "A", text: "The process of selecting the most relevant features for a model" },
      { label: "B", text: "The process of creating new features" },
      { label: "C", text: "The process of removing features" },
      { label: "D", text: "The process of transforming features" },
    ],
    answer: "A. The process of selecting the most relevant features for a model",
  },
  {
    id: 101,
    topic: "Data Science for AI",
    question: "What is data visualization?",
    options: [
      { label: "A", text: "The graphical representation of data to uncover patterns and insights" },
      { label: "B", text: "The process of collecting data" },
      { label: "C", text: "The process of storing data" },
      { label: "D", text: "The process of deleting data" },
    ],
    answer: "A. The graphical representation of data to uncover patterns and insights",
  },
  {
    id: 102,
    topic: "Data Science for AI",
    question: "What is the purpose of data splitting?",
    options: [
      { label: "A", text: "To divide data into training, validation, and test sets" },
      { label: "B", text: "To divide data by categories" },
      { label: "C", text: "To divide data by size" },
      { label: "D", text: "To divide data by color" },
    ],
    answer: "A. To divide data into training, validation, and test sets",
  },

  // ----- AI Frameworks & Libraries (6) -----
  {
    id: 103,
    topic: "AI Frameworks & Libraries",
    question: "Which framework is developed by Google for deep learning?",
    options: [
      { label: "A", text: "TensorFlow" },
      { label: "B", text: "PyTorch" },
      { label: "C", text: "Scikit-learn" },
      { label: "D", text: "Keras" },
    ],
    answer: "A. TensorFlow",
  },
  {
    id: 104,
    topic: "AI Frameworks & Libraries",
    question: "Which framework is developed by Facebook (Meta) for deep learning?",
    options: [
      { label: "A", text: "TensorFlow" },
      { label: "B", text: "PyTorch" },
      { label: "C", text: "Scikit-learn" },
      { label: "D", text: "Keras" },
    ],
    answer: "B. PyTorch",
  },
  {
    id: 105,
    topic: "AI Frameworks & Libraries",
    question: "Which library is commonly used for machine learning in Python?",
    options: [
      { label: "A", text: "Scikit-learn" },
      { label: "B", text: "TensorFlow" },
      { label: "C", text: "PyTorch" },
      { label: "D", text: "Hugging Face" },
    ],
    answer: "A. Scikit-learn",
  },
  {
    id: 106,
    topic: "AI Frameworks & Libraries",
    question: "What is Hugging Face known for?",
    options: [
      { label: "A", text: "NLP models and datasets" },
      { label: "B", text: "Computer vision models" },
      { label: "C", text: "Reinforcement learning models" },
      { label: "D", text: "Robotics models" },
    ],
    answer: "A. NLP models and datasets",
  },
  {
    id: 107,
    topic: "AI Frameworks & Libraries",
    question: "What is LangChain used for?",
    options: [
      { label: "A", text: "Building applications with LLMs" },
      { label: "B", text: "Computer vision" },
      { label: "C", text: "Robotics" },
      { label: "D", text: "Reinforcement learning" },
    ],
    answer: "A. Building applications with LLMs",
  },
  {
    id: 108,
    topic: "AI Frameworks & Libraries",
    question: "What is Keras?",
    options: [
      { label: "A", text: "A high-level API for neural networks" },
      { label: "B", text: "A low-level API for neural networks" },
      { label: "C", text: "A database system" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. A high-level API for neural networks",
  },

  // ----- AI Deployment (6) -----
  {
    id: 109,
    topic: "AI Deployment",
    question: "What is model deployment?",
    options: [
      { label: "A", text: "The process of integrating a trained model into a production environment" },
      { label: "B", text: "The process of training a model" },
      { label: "C", text: "The process of evaluating a model" },
      { label: "D", text: "The process of collecting data" },
    ],
    answer: "A. The process of integrating a trained model into a production environment",
  },
  {
    id: 110,
    topic: "AI Deployment",
    question: "What is edge AI?",
    options: [
      { label: "A", text: "AI deployed on edge devices like smartphones and IoT devices" },
      { label: "B", text: "AI deployed on cloud servers" },
      { label: "C", text: "AI deployed on desktop computers" },
      { label: "D", text: "AI deployed on mainframe computers" },
    ],
    answer: "A. AI deployed on edge devices like smartphones and IoT devices",
  },
  {
    id: 111,
    topic: "AI Deployment",
    question: "What is cloud AI?",
    options: [
      { label: "A", text: "AI deployed on cloud computing platforms" },
      { label: "B", text: "AI deployed on edge devices" },
      { label: "C", text: "AI deployed on desktop computers" },
      { label: "D", text: "AI deployed on mainframe computers" },
    ],
    answer: "A. AI deployed on cloud computing platforms",
  },
  {
    id: 112,
    topic: "AI Deployment",
    question: "What is MLOps?",
    options: [
      { label: "A", text: "A set of practices for deploying and managing ML models" },
      { label: "B", text: "A type of ML algorithm" },
      { label: "C", text: "A type of ML framework" },
      { label: "D", text: "A type of ML model" },
    ],
    answer: "A. A set of practices for deploying and managing ML models",
  },
  {
    id: 113,
    topic: "AI Deployment",
    question: "What is model monitoring?",
    options: [
      { label: "A", text: "The process of tracking a model's performance in production" },
      { label: "B", text: "The process of training a model" },
      { label: "C", text: "The process of evaluating a model" },
      { label: "D", text: "The process of collecting data" },
    ],
    answer: "A. The process of tracking a model's performance in production",
  },
  {
    id: 114,
    topic: "AI Deployment",
    question: "What is the purpose of model versioning?",
    options: [
      { label: "A", text: "To track and manage different versions of a model" },
      { label: "B", text: "To train multiple models" },
      { label: "C", text: "To evaluate multiple models" },
      { label: "D", text: "To deploy multiple models" },
    ],
    answer: "A. To track and manage different versions of a model",
  },

  // ----- AI Trends & Future (6) -----
  {
    id: 115,
    topic: "AI Trends & Future",
    question: "What is AGI?",
    options: [
      { label: "A", text: "Artificial General Intelligence" },
      { label: "B", text: "Artificial Genetic Intelligence" },
      { label: "C", text: "Automated General Intelligence" },
      { label: "D", text: "Advanced General Intelligence" },
    ],
    answer: "A. Artificial General Intelligence",
  },
  {
    id: 116,
    topic: "AI Trends & Future",
    question: "What is the difference between AGI and narrow AI?",
    options: [
      { label: "A", text: "AGI can perform any intellectual task, narrow AI is task-specific" },
      { label: "B", text: "AGI is slower than narrow AI" },
      { label: "C", text: "AGI is cheaper than narrow AI" },
      { label: "D", text: "AGI is older than narrow AI" },
    ],
    answer: "A. AGI can perform any intellectual task, narrow AI is task-specific",
  },
  {
    id: 117,
    topic: "AI Trends & Future",
    question: "What is ASI?",
    options: [
      { label: "A", text: "Artificial Super Intelligence" },
      { label: "B", text: "Artificial Simple Intelligence" },
      { label: "C", text: "Automated Super Intelligence" },
      { label: "D", text: "Advanced Simple Intelligence" },
    ],
    answer: "A. Artificial Super Intelligence",
  },
  {
    id: 118,
    topic: "AI Trends & Future",
    question: "What is the future of AI in terms of regulation?",
    options: [
      { label: "A", text: "Increased regulation and ethical guidelines" },
      { label: "B", text: "No regulation at all" },
      { label: "C", text: "Regulation only for certain countries" },
      { label: "D", text: "Regulation only for certain industries" },
    ],
    answer: "A. Increased regulation and ethical guidelines",
  },
  {
    id: 119,
    topic: "AI Trends & Future",
    question: "Which of the following is an emerging AI technology?",
    options: [
      { label: "A", text: "Quantum AI" },
      { label: "B", text: "Cooking AI" },
      { label: "C", text: "Gardening AI" },
      { label: "D", text: "Painting AI" },
    ],
    answer: "A. Quantum AI",
  },
  {
    id: 120,
    topic: "AI Trends & Future",
    question: "What is the role of AI in sustainable development?",
    options: [
      { label: "A", text: "To help achieve sustainable development goals" },
      { label: "B", text: "To replace all human workers" },
      { label: "C", text: "To create new problems" },
      { label: "D", text: "To ignore environmental issues" },
    ],
    answer: "A. To help achieve sustainable development goals",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is Artificial Intelligence (AI)?",
    answer:
      "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. It includes learning, reasoning, and self-correction.",
  },
  {
    question: "Why should I practice Artificial Intelligence MCQs?",
    answer:
      "Practicing AI MCQs helps you prepare for competitive exams, semester tests, interviews, and placement drives. It reinforces core concepts, identifies weak areas, and boosts confidence.",
  },
  {
    question: "What are the key topics in Artificial Intelligence?",
    answer:
      "Key topics include Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, Prompt Engineering, AI Agents, Robotics, Recommendation Systems, Expert Systems, AI Ethics, and more.",
  },
  {
    question: "How can I prepare for AI exams and interviews?",
    answer:
      "Start with fundamentals, practice MCQs regularly, work on hands-on projects, follow the latest trends, and use structured learning guides and roadmaps.",
  },
  {
    question: "What is the difference between AI, ML, and DL?",
    answer:
      "AI is the broad field of making machines intelligent. ML is a subset of AI that enables systems to learn from data. DL is a subset of ML that uses neural networks with many layers.",
  },
  {
    question: "What are the latest trends in AI for 2026?",
    answer:
      "Latest trends include Generative AI (LLMs, text-to-image/video), prompt engineering, AI agents, multimodal AI, edge AI, responsible AI, AI regulations, quantum AI, and AI for sustainability.",
  },
];

// ========================== COMPONENT ==========================
const ArtificialIntelligence = () => {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://CodeSkipper.in/mcq/artificial-intelligence",
        "url": "https://CodeSkipper.in/mcq/artificial-intelligence",
        "name": "Artificial Intelligence Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Artificial Intelligence, covering key concepts and features. Test your knowledge with our curated list.",
        "about": { "@type": "Thing", "name": "Artificial Intelligence MCQ" },
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
              "name": "Artificial Intelligence",
              "item": "https://CodeSkipper.in/mcq/artificial-intelligence",
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
        "@id": "https://CodeSkipper.in/mcq/artificial-intelligence#course",
        "name": "Artificial Intelligence MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Artificial Intelligence exam preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Artificial Intelligence" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/artificial-intelligence#faq",
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
        <title>Artificial Intelligence MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Artificial Intelligence multiple-choice questions with answers. Covers Machine Learning, NLP, Computer Vision, Generative AI, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Artificial Intelligence, AI MCQs, Machine Learning, NLP, Computer Vision, Generative AI, Prompt Engineering, AI Agents, Deep Learning, Code Skipper, Python, Data Science, Programming, Tutorials, Quiz, Exercises, Exam Preparation, Interview Questions, 2026"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/artificial-intelligence" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/artificial-intelligence" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/artificial-intelligence" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/artificial-intelligence" />
        <meta property="og:title" content="Artificial Intelligence MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Artificial Intelligence multiple-choice questions covering ML, NLP, Computer Vision, Generative AI, and more. Perfect for exams and interviews."
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
        <meta name="twitter:title" content="Artificial Intelligence MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Artificial Intelligence multiple-choice questions covering ML, NLP, Computer Vision, Generative AI, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🎯 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Artificial Intelligence <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master AI concepts with 120+ curated MCQs covering Machine Learning, NLP,
              Computer Vision, Generative AI, and more. Perfect for exams, interviews,
              and placement preparation.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">20 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Exam Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== WHAT IS AI MCQ ===== */}
        <section className="mb-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🤖</span>
            What is Artificial Intelligence MCQ?
          </h2>
          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              <strong>Artificial Intelligence (AI) MCQs</strong> are multiple-choice questions
              designed to test your knowledge of AI concepts, algorithms, and applications.
              These questions cover everything from <strong>fundamental AI principles</strong>{" "}
              to advanced topics like <strong>Deep Learning</strong>,{" "}
              <strong>Natural Language Processing</strong>, <strong>Computer Vision</strong>,{" "}
              and <strong>Generative AI</strong>.
            </p>
            <p>
              AI MCQs are widely used in <strong>competitive exams</strong>,{" "}
              <strong>semester tests</strong>, <strong>interview assessments</strong>, and{" "}
              <strong>placement drives</strong> for tech companies. Practicing these questions
              helps you identify key concepts, understand exam patterns, and build confidence
              for real-world problem-solving.
            </p>
          </div>
        </section>

        {/* ===== WHY PRACTICE & BENEFITS ===== */}
        <section className="mb-10 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span> Why Practice AI MCQs?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Exam Preparation:</strong> Ace semester, competitive, and certification exams.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Interview Readiness:</strong> Crack technical interviews with confidence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Concept Reinforcement:</strong> Deepen your understanding of AI fundamentals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>Placement Success:</strong> Stand out in campus placements and job drives.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">📋</span> Benefits of Practicing
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Self-Assessment:</strong> Identify strengths and improvement areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Time Management:</strong> Learn to answer questions efficiently.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Knowledge Retention:</strong> Reinforce learning through active recall.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Confidence Boost:</strong> Enter exams with preparation and clarity.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ===== HOW TO PREPARE ===== */}
        <section className="mb-10 bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🗺️</span>
            How to Prepare for AI Exams
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">📖</div>
              <h3 className="font-bold text-gray-900">Step 1: Learn the Basics</h3>
              <p className="text-sm text-gray-600 mt-1">
                Start with fundamentals: AI history, types, applications, and core concepts.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">📝</div>
              <h3 className="font-bold text-gray-900">Step 2: Practice MCQs</h3>
              <p className="text-sm text-gray-600 mt-1">
                Solve questions topic by topic. Review answers and understand explanations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-bold text-gray-900">Step 3: Advanced Topics</h3>
              <p className="text-sm text-gray-600 mt-1">
                Dive into Deep Learning, NLP, Computer Vision, and Generative AI.
              </p>
            </div>
          </div>
        </section>

        {/* ===== LATEST SYLLABUS, INTERVIEW, PLACEMENT, COMPETITIVE EXAMS ===== */}
        <section className="mb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">📄</span>
            <h4 className="font-bold text-gray-900">Latest Syllabus</h4>
            <p className="text-sm text-gray-600">Covers all important AI topics as per 2026 curriculum.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">💼</span>
            <h4 className="font-bold text-gray-900">Interview Preparation</h4>
            <p className="text-sm text-gray-600">Common AI interview questions and answers.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">🏢</span>
            <h4 className="font-bold text-gray-900">Placement Prep</h4>
            <p className="text-sm text-gray-600">Practice questions frequently asked in campus drives.</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-3xl block mb-2">🏆</span>
            <h4 className="font-bold text-gray-900">Competitive Exams</h4>
            <p className="text-sm text-gray-600">MCQs tailored for GATE, UGC-NET, and other competitive tests.</p>
          </div>
        </section>

        {/* ===== MCQ LIST ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            Artificial Intelligence MCQs
            <span className="ml-2 text-sm font-normal text-gray-500">({questionsData.length} questions)</span>
          </h2>
          <div className="space-y-6">
            {questionsData.map((q, index) => (
              <article
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
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
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
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
};

export default ArtificialIntelligence;