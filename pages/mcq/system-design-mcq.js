import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- System Analysis Basics (6) -----
  {
    id: 1,
    topic: "System Analysis Basics",
    question: "What is system analysis?",
    options: [
      { label: "A", text: "The process of studying a system to identify its components and requirements" },
      { label: "B", text: "The process of coding a system" },
      { label: "C", text: "The process of testing a system" },
      { label: "D", text: "The process of deploying a system" },
    ],
    answer: "A. The process of studying a system to identify its components and requirements",
  },
  {
    id: 2,
    topic: "System Analysis Basics",
    question: "What is the difference between system analysis and system design?",
    options: [
      { label: "A", text: "Analysis studies requirements, design creates solutions" },
      { label: "B", text: "Design studies requirements, analysis creates solutions" },
      { label: "C", text: "Both study requirements" },
      { label: "D", text: "Both create solutions" },
    ],
    answer: "A. Analysis studies requirements, design creates solutions",
  },
  {
    id: 3,
    topic: "System Analysis Basics",
    question: "What is a system?",
    options: [
      { label: "A", text: "A collection of interrelated components working together" },
      { label: "B", text: "A single component" },
      { label: "C", text: "A programming language" },
      { label: "D", text: "A type of hardware" },
    ],
    answer: "A. A collection of interrelated components working together",
  },
  {
    id: 4,
    topic: "System Analysis Basics",
    question: "What is the difference between a closed and open system?",
    options: [
      { label: "A", text: "Closed has no interaction with environment, open interacts" },
      { label: "B", text: "Open has no interaction with environment, closed interacts" },
      { label: "C", text: "Both interact with environment" },
      { label: "D", text: "Neither interacts with environment" },
    ],
    answer: "A. Closed has no interaction with environment, open interacts",
  },
  {
    id: 5,
    topic: "System Analysis Basics",
    question: "What is the purpose of feasibility analysis?",
    options: [
      { label: "A", text: "To determine if a project is viable and worth pursuing" },
      { label: "B", text: "To write code for the system" },
      { label: "C", text: "To test the system" },
      { label: "D", text: "To deploy the system" },
    ],
    answer: "A. To determine if a project is viable and worth pursuing",
  },
  {
    id: 6,
    topic: "System Analysis Basics",
    question: "What are the types of feasibility in system analysis?",
    options: [
      { label: "A", text: "Technical, Economic, Operational, Schedule" },
      { label: "B", text: "Technical, Financial, Social, Legal" },
      { label: "C", text: "Technical, Economic, Social, Time" },
      { label: "D", text: "Technical, Financial, Operational, Legal" },
    ],
    answer: "A. Technical, Economic, Operational, Schedule",
  },

  // ----- SDLC (6) -----
  {
    id: 7,
    topic: "SDLC",
    question: "What does SDLC stand for?",
    options: [
      { label: "A", text: "Software Development Life Cycle" },
      { label: "B", text: "System Design Life Cycle" },
      { label: "C", text: "Software Design Life Cycle" },
      { label: "D", text: "System Development Life Cycle" },
    ],
    answer: "D. System Development Life Cycle",
  },
  {
    id: 8,
    topic: "SDLC",
    question: "What are the phases of the SDLC?",
    options: [
      { label: "A", text: "Planning, Analysis, Design, Implementation, Testing, Maintenance" },
      { label: "B", text: "Design, Code, Test, Deploy" },
      { label: "C", text: "Plan, Execute, Monitor, Close" },
      { label: "D", text: "Analyze, Design, Build, Test" },
    ],
    answer: "A. Planning, Analysis, Design, Implementation, Testing, Maintenance",
  },
  {
    id: 9,
    topic: "SDLC",
    question: "What is the Waterfall model in SDLC?",
    options: [
      { label: "A", text: "A linear sequential model where each phase must be completed before moving to the next" },
      { label: "B", text: "An iterative model with cycles" },
      { label: "C", text: "A model with concurrent phases" },
      { label: "D", text: "A model with random phases" },
    ],
    answer: "A. A linear sequential model where each phase must be completed before moving to the next",
  },
  {
    id: 10,
    topic: "SDLC",
    question: "What is the Agile methodology?",
    options: [
      { label: "A", text: "An iterative approach with flexible requirements" },
      { label: "B", text: "A rigid sequential approach" },
      { label: "C", text: "A model without planning" },
      { label: "D", text: "A model with no testing" },
    ],
    answer: "A. An iterative approach with flexible requirements",
  },
  {
    id: 11,
    topic: "SDLC",
    question: "What is the difference between Agile and Waterfall?",
    options: [
      { label: "A", text: "Agile is iterative, Waterfall is sequential" },
      { label: "B", text: "Waterfall is iterative, Agile is sequential" },
      { label: "C", text: "Both are sequential" },
      { label: "D", text: "Both are iterative" },
    ],
    answer: "A. Agile is iterative, Waterfall is sequential",
  },
  {
    id: 12,
    topic: "SDLC",
    question: "What is the purpose of the maintenance phase in SDLC?",
    options: [
      { label: "A", text: "To update and fix the system after deployment" },
      { label: "B", text: "To design the system" },
      { label: "C", text: "To test the system" },
      { label: "D", text: "To plan the system" },
    ],
    answer: "A. To update and fix the system after deployment",
  },

  // ----- Requirements Engineering (6) -----
  {
    id: 13,
    topic: "Requirements Engineering",
    question: "What is requirements engineering?",
    options: [
      { label: "A", text: "The process of discovering, analyzing, documenting, and managing requirements" },
      { label: "B", text: "The process of coding the system" },
      { label: "C", text: "The process of testing the system" },
      { label: "D", text: "The process of deploying the system" },
    ],
    answer: "A. The process of discovering, analyzing, documenting, and managing requirements",
  },
  {
    id: 14,
    topic: "Requirements Engineering",
    question: "What is the difference between functional and non-functional requirements?",
    options: [
      { label: "A", text: "Functional describes what the system should do, non-functional describes how it should do it" },
      { label: "B", text: "Non-functional describes what the system should do, functional describes how it should do it" },
      { label: "C", text: "Both describe what the system should do" },
      { label: "D", text: "Both describe how the system should do it" },
    ],
    answer: "A. Functional describes what the system should do, non-functional describes how it should do it",
  },
  {
    id: 15,
    topic: "Requirements Engineering",
    question: "What are the characteristics of good requirements?",
    options: [
      { label: "A", text: "Clear, Complete, Consistent, Testable, Feasible" },
      { label: "B", text: "Vague, Incomplete, Inconsistent" },
      { label: "C", text: "Complex, Long, Detailed" },
      { label: "D", text: "Simple, Short, Basic" },
    ],
    answer: "A. Clear, Complete, Consistent, Testable, Feasible",
  },
  {
    id: 16,
    topic: "Requirements Engineering",
    question: "What is a use case in requirements engineering?",
    options: [
      { label: "A", text: "A description of how users interact with the system" },
      { label: "B", text: "A code module" },
      { label: "C", text: "A test case" },
      { label: "D", text: "A deployment plan" },
    ],
    answer: "A. A description of how users interact with the system",
  },
  {
    id: 17,
    topic: "Requirements Engineering",
    question: "What is the purpose of requirements validation?",
    options: [
      { label: "A", text: "To ensure requirements are correct and complete" },
      { label: "B", text: "To write code for the requirements" },
      { label: "C", text: "To test the requirements" },
      { label: "D", text: "To deploy the requirements" },
    ],
    answer: "A. To ensure requirements are correct and complete",
  },
  {
    id: 18,
    topic: "Requirements Engineering",
    question: "What is the difference between user requirements and system requirements?",
    options: [
      { label: "A", text: "User requirements are from user perspective, system requirements are from developer perspective" },
      { label: "B", text: "System requirements are from user perspective, user requirements are from developer perspective" },
      { label: "C", text: "Both are from user perspective" },
      { label: "D", text: "Both are from developer perspective" },
    ],
    answer: "A. User requirements are from user perspective, system requirements are from developer perspective",
  },

  // ----- System Design (6) -----
  {
    id: 19,
    topic: "System Design",
    question: "What is system design?",
    options: [
      { label: "A", text: "The process of creating a blueprint for a system" },
      { label: "B", text: "The process of coding the system" },
      { label: "C", text: "The process of testing the system" },
      { label: "D", text: "The process of deploying the system" },
    ],
    answer: "A. The process of creating a blueprint for a system",
  },
  {
    id: 20,
    topic: "System Design",
    question: "What is the difference between high-level and detailed design?",
    options: [
      { label: "A", text: "High-level shows overall architecture, detailed shows implementation specifics" },
      { label: "B", text: "Detailed shows overall architecture, high-level shows implementation specifics" },
      { label: "C", text: "Both show overall architecture" },
      { label: "D", text: "Both show implementation specifics" },
    ],
    answer: "A. High-level shows overall architecture, detailed shows implementation specifics",
  },
  {
    id: 21,
    topic: "System Design",
    question: "What is modular design?",
    options: [
      { label: "A", text: "Dividing a system into smaller, manageable modules" },
      { label: "B", text: "Creating a single large module" },
      { label: "C", text: "Designing without modules" },
      { label: "D", text: "Designing with random modules" },
    ],
    answer: "A. Dividing a system into smaller, manageable modules",
  },
  {
    id: 22,
    topic: "System Design",
    question: "What is the purpose of design patterns?",
    options: [
      { label: "A", text: "To provide reusable solutions to common design problems" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test code" },
      { label: "D", text: "To deploy code" },
    ],
    answer: "A. To provide reusable solutions to common design problems",
  },
  {
    id: 23,
    topic: "System Design",
    question: "What is the difference between coupling and cohesion?",
    options: [
      { label: "A", text: "Coupling is about module inter-dependency, cohesion is about intra-module focus" },
      { label: "B", text: "Cohesion is about module inter-dependency, coupling is about intra-module focus" },
      { label: "C", text: "Both are about inter-dependency" },
      { label: "D", text: "Both are about intra-module focus" },
    ],
    answer: "A. Coupling is about module inter-dependency, cohesion is about intra-module focus",
  },
  {
    id: 24,
    topic: "System Design",
    question: "What is the principle of 'high cohesion, low coupling'?",
    options: [
      { label: "A", text: "Modules should be focused and have minimal dependencies" },
      { label: "B", text: "Modules should be complex and have many dependencies" },
      { label: "C", text: "Modules should be unrelated" },
      { label: "D", text: "Modules should be identical" },
    ],
    answer: "A. Modules should be focused and have minimal dependencies",
  },

  // ----- UML (6) -----
  {
    id: 25,
    topic: "UML",
    question: "What does UML stand for?",
    options: [
      { label: "A", text: "Unified Modeling Language" },
      { label: "B", text: "Universal Modeling Language" },
      { label: "C", text: "Unified Modeling Logic" },
      { label: "D", text: "Universal Modeling Logic" },
    ],
    answer: "A. Unified Modeling Language",
  },
  {
    id: 26,
    topic: "UML",
    question: "What is the purpose of UML?",
    options: [
      { label: "A", text: "To visualize and document system designs" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test code" },
      { label: "D", text: "To deploy code" },
    ],
    answer: "A. To visualize and document system designs",
  },
  {
    id: 27,
    topic: "UML",
    question: "What is a class diagram in UML?",
    options: [
      { label: "A", text: "A diagram showing classes and their relationships" },
      { label: "B", text: "A diagram showing system processes" },
      { label: "C", text: "A diagram showing user interactions" },
      { label: "D", text: "A diagram showing system components" },
    ],
    answer: "A. A diagram showing classes and their relationships",
  },
  {
    id: 28,
    topic: "UML",
    question: "What is a use case diagram in UML?",
    options: [
      { label: "A", text: "A diagram showing interactions between users and the system" },
      { label: "B", text: "A diagram showing class relationships" },
      { label: "C", text: "A diagram showing system architecture" },
      { label: "D", text: "A diagram showing deployment" },
    ],
    answer: "A. A diagram showing interactions between users and the system",
  },
  {
    id: 29,
    topic: "UML",
    question: "What is the difference between aggregation and composition in UML?",
    options: [
      { label: "A", text: "Aggregation is a weak relationship, composition is strong" },
      { label: "B", text: "Composition is a weak relationship, aggregation is strong" },
      { label: "C", text: "Both are weak relationships" },
      { label: "D", text: "Both are strong relationships" },
    ],
    answer: "A. Aggregation is a weak relationship, composition is strong",
  },
  {
    id: 30,
    topic: "UML",
    question: "What is a sequence diagram in UML?",
    options: [
      { label: "A", text: "A diagram showing the sequence of interactions between objects" },
      { label: "B", text: "A diagram showing class relationships" },
      { label: "C", text: "A diagram showing system architecture" },
      { label: "D", text: "A diagram showing deployment" },
    ],
    answer: "A. A diagram showing the sequence of interactions between objects",
  },

  // ----- Architecture Design (6) -----
  {
    id: 31,
    topic: "Architecture Design",
    question: "What is system architecture?",
    options: [
      { label: "A", text: "The overall structure of a system" },
      { label: "B", text: "The code of a system" },
      { label: "C", text: "The testing of a system" },
      { label: "D", text: "The deployment of a system" },
    ],
    answer: "A. The overall structure of a system",
  },
  {
    id: 32,
    topic: "Architecture Design",
    question: "What is the client-server architecture?",
    options: [
      { label: "A", text: "A system where clients request services from servers" },
      { label: "B", text: "A system with no servers" },
      { label: "C", text: "A system with only servers" },
      { label: "D", text: "A system with only clients" },
    ],
    answer: "A. A system where clients request services from servers",
  },
  {
    id: 33,
    topic: "Architecture Design",
    question: "What is the difference between 2-tier and 3-tier architecture?",
    options: [
      { label: "A", text: "2-tier has client and server, 3-tier adds business logic layer" },
      { label: "B", text: "3-tier has client and server, 2-tier adds business logic layer" },
      { label: "C", text: "Both have two tiers" },
      { label: "D", text: "Both have three tiers" },
    ],
    answer: "A. 2-tier has client and server, 3-tier adds business logic layer",
  },
  {
    id: 34,
    topic: "Architecture Design",
    question: "What is a microservices architecture?",
    options: [
      { label: "A", text: "An architecture with small, independently deployable services" },
      { label: "B", text: "A large monolithic architecture" },
      { label: "C", text: "An architecture with no services" },
      { label: "D", text: "An architecture with one service" },
    ],
    answer: "A. An architecture with small, independently deployable services",
  },
  {
    id: 35,
    topic: "Architecture Design",
    question: "What is the difference between monolithic and microservices architecture?",
    options: [
      { label: "A", text: "Monolithic is one large application, microservices are small independent services" },
      { label: "B", text: "Microservices is one large application, monolithic are small independent services" },
      { label: "C", text: "Both are monolithic" },
      { label: "D", text: "Both are microservices" },
    ],
    answer: "A. Monolithic is one large application, microservices are small independent services",
  },
  {
    id: 36,
    topic: "Architecture Design",
    question: "What is the purpose of the Service-Oriented Architecture (SOA)?",
    options: [
      { label: "A", text: "To design systems as collections of services" },
      { label: "B", text: "To design systems as single applications" },
      { label: "C", text: "To design systems without services" },
      { label: "D", text: "To design systems with only hardware" },
    ],
    answer: "A. To design systems as collections of services",
  },

  // ----- Database Design (6) -----
  {
    id: 37,
    topic: "Database Design",
    question: "What is database design?",
    options: [
      { label: "A", text: "The process of creating a database structure" },
      { label: "B", text: "The process of writing queries" },
      { label: "C", text: "The process of testing databases" },
      { label: "D", text: "The process of deploying databases" },
    ],
    answer: "A. The process of creating a database structure",
  },
  {
    id: 38,
    topic: "Database Design",
    question: "What is the difference between logical and physical database design?",
    options: [
      { label: "A", text: "Logical is independent of DBMS, physical is implementation-specific" },
      { label: "B", text: "Physical is independent of DBMS, logical is implementation-specific" },
      { label: "C", text: "Both are independent of DBMS" },
      { label: "D", text: "Both are implementation-specific" },
    ],
    answer: "A. Logical is independent of DBMS, physical is implementation-specific",
  },
  {
    id: 39,
    topic: "Database Design",
    question: "What is normalization?",
    options: [
      { label: "A", text: "Organizing data to reduce redundancy and improve integrity" },
      { label: "B", text: "Adding redundant data" },
      { label: "C", text: "Deleting data" },
      { label: "D", text: "Creating complex data structures" },
    ],
    answer: "A. Organizing data to reduce redundancy and improve integrity",
  },
  {
    id: 40,
    topic: "Database Design",
    question: "What are the normal forms in database normalization?",
    options: [
      { label: "A", text: "1NF, 2NF, 3NF, BCNF, 4NF, 5NF" },
      { label: "B", text: "1NF, 2NF, 3NF" },
      { label: "C", text: "1NF, 2NF, 3NF, 4NF" },
      { label: "D", text: "1NF, 2NF, 3NF, BCNF" },
    ],
    answer: "A. 1NF, 2NF, 3NF, BCNF, 4NF, 5NF",
  },
  {
    id: 41,
    topic: "Database Design",
    question: "What is an Entity-Relationship (ER) diagram?",
    options: [
      { label: "A", text: "A diagram showing entities and their relationships" },
      { label: "B", text: "A diagram showing user interactions" },
      { label: "C", text: "A diagram showing system architecture" },
      { label: "D", text: "A diagram showing deployment" },
    ],
    answer: "A. A diagram showing entities and their relationships",
  },
  {
    id: 42,
    topic: "Database Design",
    question: "What is the purpose of a primary key in a database?",
    options: [
      { label: "A", text: "To uniquely identify each record in a table" },
      { label: "B", text: "To identify foreign keys" },
      { label: "C", text: "To delete records" },
      { label: "D", text: "To update records" },
    ],
    answer: "A. To uniquely identify each record in a table",
  },

  // ----- UI/UX Design (6) -----
  {
    id: 43,
    topic: "UI/UX Design",
    question: "What is the difference between UI and UX?",
    options: [
      { label: "A", text: "UI is about interface appearance, UX is about user experience" },
      { label: "B", text: "UX is about interface appearance, UI is about user experience" },
      { label: "C", text: "Both are about appearance" },
      { label: "D", text: "Both are about experience" },
    ],
    answer: "A. UI is about interface appearance, UX is about user experience",
  },
  {
    id: 44,
    topic: "UI/UX Design",
    question: "What is the purpose of user interface design?",
    options: [
      { label: "A", text: "To create an intuitive and user-friendly interface" },
      { label: "B", text: "To make interfaces complex" },
      { label: "C", text: "To reduce usability" },
      { label: "D", text: "To ignore user needs" },
    ],
    answer: "A. To create an intuitive and user-friendly interface",
  },
  {
    id: 45,
    topic: "UI/UX Design",
    question: "What are the principles of good UI design?",
    options: [
      { label: "A", text: "Simplicity, Consistency, Feedback, Accessibility" },
      { label: "B", text: "Complexity, Inconsistency, No Feedback" },
      { label: "C", text: "Randomness, Chaos, Confusion" },
      { label: "D", text: "Difficulty, Unclear Navigation" },
    ],
    answer: "A. Simplicity, Consistency, Feedback, Accessibility",
  },
  {
    id: 46,
    topic: "UI/UX Design",
    question: "What is the purpose of wireframing?",
    options: [
      { label: "A", text: "To create a low-fidelity layout of the interface" },
      { label: "B", text: "To create a high-fidelity prototype" },
      { label: "C", text: "To write code for the interface" },
      { label: "D", text: "To test the interface" },
    ],
    answer: "A. To create a low-fidelity layout of the interface",
  },
  {
    id: 47,
    topic: "UI/UX Design",
    question: "What is the purpose of user research in UX design?",
    options: [
      { label: "A", text: "To understand user needs and behaviors" },
      { label: "B", text: "To ignore user needs" },
      { label: "C", text: "To make assumptions about users" },
      { label: "D", text: "To avoid user testing" },
    ],
    answer: "A. To understand user needs and behaviors",
  },
  {
    id: 48,
    topic: "UI/UX Design",
    question: "What is the difference between usability testing and user acceptance testing?",
    options: [
      { label: "A", text: "Usability tests design, UAT tests if system meets business needs" },
      { label: "B", text: "UAT tests design, usability tests business needs" },
      { label: "C", text: "Both test design" },
      { label: "D", text: "Both test business needs" },
    ],
    answer: "A. Usability tests design, UAT tests if system meets business needs",
  },

  // ----- Testing & Quality (6) -----
  {
    id: 49,
    topic: "Testing & Quality",
    question: "What is software testing?",
    options: [
      { label: "A", text: "The process of evaluating a system to find defects" },
      { label: "B", text: "The process of writing code" },
      { label: "C", text: "The process of designing the system" },
      { label: "D", text: "The process of deploying the system" },
    ],
    answer: "A. The process of evaluating a system to find defects",
  },
  {
    id: 50,
    topic: "Testing & Quality",
    question: "What is the difference between verification and validation?",
    options: [
      { label: "A", text: "Verification checks if we built the system right, validation checks if we built the right system" },
      { label: "B", text: "Validation checks if we built the system right, verification checks if we built the right system" },
      { label: "C", text: "Both check if we built the system right" },
      { label: "D", text: "Both check if we built the right system" },
    ],
    answer: "A. Verification checks if we built the system right, validation checks if we built the right system",
  },
  {
    id: 51,
    topic: "Testing & Quality",
    question: "What are the levels of software testing?",
    options: [
      { label: "A", text: "Unit Testing, Integration Testing, System Testing, Acceptance Testing" },
      { label: "B", text: "Unit Testing, System Testing" },
      { label: "C", text: "Integration Testing, System Testing" },
      { label: "D", text: "Unit Testing, Integration Testing" },
    ],
    answer: "A. Unit Testing, Integration Testing, System Testing, Acceptance Testing",
  },
  {
    id: 52,
    topic: "Testing & Quality",
    question: "What is the difference between black-box and white-box testing?",
    options: [
      { label: "A", text: "Black-box tests without knowing internal structure, white-box tests with knowledge of internal structure" },
      { label: "B", text: "White-box tests without knowing internal structure, black-box tests with knowledge of internal structure" },
      { label: "C", text: "Both test without knowing internal structure" },
      { label: "D", text: "Both test with knowledge of internal structure" },
    ],
    answer: "A. Black-box tests without knowing internal structure, white-box tests with knowledge of internal structure",
  },
  {
    id: 53,
    topic: "Testing & Quality",
    question: "What is the purpose of regression testing?",
    options: [
      { label: "A", text: "To ensure changes haven't broken existing functionality" },
      { label: "B", text: "To test new features" },
      { label: "C", text: "To test performance" },
      { label: "D", text: "To test security" },
    ],
    answer: "A. To ensure changes haven't broken existing functionality",
  },
  {
    id: 54,
    topic: "Testing & Quality",
    question: "What is quality assurance in system development?",
    options: [
      { label: "A", text: "Processes to ensure the system meets quality standards" },
      { label: "B", text: "Testing the system once" },
      { label: "C", text: "Ignoring quality issues" },
      { label: "D", text: "Deploying without testing" },
    ],
    answer: "A. Processes to ensure the system meets quality standards",
  },

  // ----- Project Management (6) -----
  {
    id: 55,
    topic: "Project Management",
    question: "What is project management in system development?",
    options: [
      { label: "A", text: "The process of planning, organizing, and managing resources" },
      { label: "B", text: "The process of writing code" },
      { label: "C", text: "The process of testing the system" },
      { label: "D", text: "The process of deploying the system" },
    ],
    answer: "A. The process of planning, organizing, and managing resources",
  },
  {
    id: 56,
    topic: "Project Management",
    question: "What is a project charter?",
    options: [
      { label: "A", text: "A document that formally authorizes a project" },
      { label: "B", text: "A document that contains code" },
      { label: "C", text: "A document that contains test cases" },
      { label: "D", text: "A document that contains deployment plans" },
    ],
    answer: "A. A document that formally authorizes a project",
  },
  {
    id: 57,
    topic: "Project Management",
    question: "What is the difference between a project manager and a system analyst?",
    options: [
      { label: "A", text: "PM manages the project, SA studies requirements and designs solutions" },
      { label: "B", text: "SA manages the project, PM studies requirements" },
      { label: "C", text: "Both manage the project" },
      { label: "D", text: "Both study requirements" },
    ],
    answer: "A. PM manages the project, SA studies requirements and designs solutions",
  },
  {
    id: 58,
    topic: "Project Management",
    question: "What is the purpose of risk management in projects?",
    options: [
      { label: "A", text: "To identify and mitigate potential problems" },
      { label: "B", text: "To ignore risks" },
      { label: "C", text: "To create risks" },
      { label: "D", text: "To avoid planning" },
    ],
    answer: "A. To identify and mitigate potential problems",
  },
  {
    id: 59,
    topic: "Project Management",
    question: "What is a Gantt chart used for in project management?",
    options: [
      { label: "A", text: "To visualize project schedule and progress" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test systems" },
      { label: "D", text: "To deploy systems" },
    ],
    answer: "A. To visualize project schedule and progress",
  },
  {
    id: 60,
    topic: "Project Management",
    question: "What is the purpose of change management in systems?",
    options: [
      { label: "A", text: "To manage changes to the system in a controlled manner" },
      { label: "B", text: "To prevent all changes" },
      { label: "C", text: "To make random changes" },
      { label: "D", text: "To ignore change requests" },
    ],
    answer: "A. To manage changes to the system in a controlled manner",
  },

  // ----- System Implementation (6) -----
  {
    id: 61,
    topic: "System Implementation",
    question: "What is system implementation?",
    options: [
      { label: "A", text: "The process of deploying and installing the system" },
      { label: "B", text: "The process of designing the system" },
      { label: "C", text: "The process of testing the system" },
      { label: "D", text: "The process of planning the system" },
    ],
    answer: "A. The process of deploying and installing the system",
  },
  {
    id: 62,
    topic: "System Implementation",
    question: "What is the difference between direct and phased implementation?",
    options: [
      { label: "A", text: "Direct replaces old system immediately, phased replaces gradually" },
      { label: "B", text: "Phased replaces old system immediately, direct replaces gradually" },
      { label: "C", text: "Both replace immediately" },
      { label: "D", text: "Both replace gradually" },
    ],
    answer: "A. Direct replaces old system immediately, phased replaces gradually",
  },
  {
    id: 63,
    topic: "System Implementation",
    question: "What is the purpose of user training in system implementation?",
    options: [
      { label: "A", text: "To ensure users can effectively use the system" },
      { label: "B", text: "To make users avoid the system" },
      { label: "C", text: "To confuse users" },
      { label: "D", text: "To ignore user needs" },
    ],
    answer: "A. To ensure users can effectively use the system",
  },
  {
    id: 64,
    topic: "System Implementation",
    question: "What is the purpose of system documentation?",
    options: [
      { label: "A", text: "To provide information about the system for users and developers" },
      { label: "B", text: "To hide system information" },
      { label: "C", text: "To confuse users" },
      { label: "D", text: "To avoid maintenance" },
    ],
    answer: "A. To provide information about the system for users and developers",
  },
  {
    id: 65,
    topic: "System Implementation",
    question: "What is the difference between user documentation and technical documentation?",
    options: [
      { label: "A", text: "User docs are for end-users, technical docs are for developers" },
      { label: "B", text: "Technical docs are for end-users, user docs are for developers" },
      { label: "C", text: "Both are for end-users" },
      { label: "D", text: "Both are for developers" },
    ],
    answer: "A. User docs are for end-users, technical docs are for developers",
  },
  {
    id: 66,
    topic: "System Implementation",
    question: "What is the purpose of system conversion?",
    options: [
      { label: "A", text: "To migrate data and processes from old system to new system" },
      { label: "B", text: "To delete old system data" },
      { label: "C", text: "To create data" },
      { label: "D", text: "To ignore old system" },
    ],
    answer: "A. To migrate data and processes from old system to new system",
  },

  // ----- System Maintenance (6) -----
  {
    id: 67,
    topic: "System Maintenance",
    question: "What is system maintenance?",
    options: [
      { label: "A", text: "The process of updating and fixing the system after deployment" },
      { label: "B", text: "The process of designing the system" },
      { label: "C", text: "The process of testing the system" },
      { label: "D", text: "The process of planning the system" },
    ],
    answer: "A. The process of updating and fixing the system after deployment",
  },
  {
    id: 68,
    topic: "System Maintenance",
    question: "What are the types of system maintenance?",
    options: [
      { label: "A", text: "Corrective, Adaptive, Perfective, Preventive" },
      { label: "B", text: "Corrective, Adaptive, Perfective" },
      { label: "C", text: "Corrective, Adaptive" },
      { label: "D", text: "Corrective, Preventive" },
    ],
    answer: "A. Corrective, Adaptive, Perfective, Preventive",
  },
  {
    id: 69,
    topic: "System Maintenance",
    question: "What is corrective maintenance?",
    options: [
      { label: "A", text: "Fixing bugs and errors" },
      { label: "B", text: "Adding new features" },
      { label: "C", text: "Adapting to new environments" },
      { label: "D", text: "Preventing future issues" },
    ],
    answer: "A. Fixing bugs and errors",
  },
  {
    id: 70,
    topic: "System Maintenance",
    question: "What is adaptive maintenance?",
    options: [
      { label: "A", text: "Adapting the system to new environments" },
      { label: "B", text: "Fixing bugs" },
      { label: "C", text: "Adding new features" },
      { label: "D", text: "Preventing issues" },
    ],
    answer: "A. Adapting the system to new environments",
  },
  {
    id: 71,
    topic: "System Maintenance",
    question: "What is the difference between perfective and preventive maintenance?",
    options: [
      { label: "A", text: "Perfective improves performance, preventive prevents future issues" },
      { label: "B", text: "Preventive improves performance, perfective prevents future issues" },
      { label: "C", text: "Both improve performance" },
      { label: "D", text: "Both prevent future issues" },
    ],
    answer: "A. Perfective improves performance, preventive prevents future issues",
  },
  {
    id: 72,
    topic: "System Maintenance",
    question: "What is the purpose of system migration?",
    options: [
      { label: "A", text: "To move the system to new hardware or platform" },
      { label: "B", text: "To delete the system" },
      { label: "C", text: "To create a new system" },
      { label: "D", text: "To ignore the system" },
    ],
    answer: "A. To move the system to new hardware or platform",
  },

  // ----- Emerging Technologies (6) -----
  {
    id: 73,
    topic: "Emerging Technologies",
    question: "What is cloud computing in system design?",
    options: [
      { label: "A", text: "Using remote servers for computing and storage" },
      { label: "B", text: "Using local servers" },
      { label: "C", text: "Using personal computers" },
      { label: "D", text: "Using mobile devices" },
    ],
    answer: "A. Using remote servers for computing and storage",
  },
  {
    id: 74,
    topic: "Emerging Technologies",
    question: "What is the difference between IaaS, PaaS, and SaaS?",
    options: [
      { label: "A", text: "IaaS provides infrastructure, PaaS provides platform, SaaS provides software" },
      { label: "B", text: "PaaS provides infrastructure, IaaS provides platform, SaaS provides software" },
      { label: "C", text: "SaaS provides infrastructure, IaaS provides platform, PaaS provides software" },
      { label: "D", text: "All provide the same service" },
    ],
    answer: "A. IaaS provides infrastructure, PaaS provides platform, SaaS provides software",
  },
  {
    id: 75,
    topic: "Emerging Technologies",
    question: "What is the Internet of Things (IoT)?",
    options: [
      { label: "A", text: "Network of interconnected devices with sensors and software" },
      { label: "B", text: "A single device" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A type of hardware" },
    ],
    answer: "A. Network of interconnected devices with sensors and software",
  },
  {
    id: 76,
    topic: "Emerging Technologies",
    question: "What is the purpose of AI in system design?",
    options: [
      { label: "A", text: "To create intelligent and adaptive systems" },
      { label: "B", text: "To make systems less intelligent" },
      { label: "C", text: "To remove automation" },
      { label: "D", text: "To make systems static" },
    ],
    answer: "A. To create intelligent and adaptive systems",
  },
  {
    id: 77,
    topic: "Emerging Technologies",
    question: "What is blockchain in system design?",
    options: [
      { label: "A", text: "A distributed ledger technology" },
      { label: "B", text: "A centralized database" },
      { label: "C", text: "A type of cloud service" },
      { label: "D", text: "A type of hardware" },
    ],
    answer: "A. A distributed ledger technology",
  },
  {
    id: 78,
    topic: "Emerging Technologies",
    question: "What is the purpose of DevOps in system development?",
    options: [
      { label: "A", text: "To integrate development and operations for faster delivery" },
      { label: "B", text: "To separate development and operations" },
      { label: "C", text: "To ignore deployment" },
      { label: "D", text: "To slow down delivery" },
    ],
    answer: "A. To integrate development and operations for faster delivery",
  },

  // ----- Data Modeling (6) -----
  {
    id: 79,
    topic: "Data Modeling",
    question: "What is data modeling?",
    options: [
      { label: "A", text: "The process of creating a conceptual representation of data" },
      { label: "B", text: "The process of writing code" },
      { label: "C", text: "The process of testing data" },
      { label: "D", text: "The process of deploying data" },
    ],
    answer: "A. The process of creating a conceptual representation of data",
  },
  {
    id: 80,
    topic: "Data Modeling",
    question: "What is the difference between a conceptual, logical, and physical data model?",
    options: [
      { label: "A", text: "Conceptual is high-level, logical is detailed, physical is implementation-specific" },
      { label: "B", text: "Physical is high-level, logical is detailed, conceptual is implementation-specific" },
      { label: "C", text: "Logical is high-level, conceptual is detailed" },
      { label: "D", text: "All are the same" },
    ],
    answer: "A. Conceptual is high-level, logical is detailed, physical is implementation-specific",
  },
  {
    id: 81,
    topic: "Data Modeling",
    question: "What is the purpose of an entity-relationship diagram (ERD)?",
    options: [
      { label: "A", text: "To visualize the relationships between data entities" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test systems" },
      { label: "D", text: "To deploy systems" },
    ],
    answer: "A. To visualize the relationships between data entities",
  },
  {
    id: 82,
    topic: "Data Modeling",
    question: "What is the difference between a weak entity and a strong entity?",
    options: [
      { label: "A", text: "Weak entity depends on another entity, strong entity can exist independently" },
      { label: "B", text: "Strong entity depends on another entity, weak entity can exist independently" },
      { label: "C", text: "Both are independent" },
      { label: "D", text: "Both are dependent" },
    ],
    answer: "A. Weak entity depends on another entity, strong entity can exist independently",
  },
  {
    id: 83,
    topic: "Data Modeling",
    question: "What is the purpose of a data dictionary?",
    options: [
      { label: "A", text: "To store metadata about the database" },
      { label: "B", text: "To store actual data" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To update data" },
    ],
    answer: "A. To store metadata about the database",
  },
  {
    id: 84,
    topic: "Data Modeling",
    question: "What is the difference between a data model and a data diagram?",
    options: [
      { label: "A", text: "Data model is the structure, data diagram is the visual representation" },
      { label: "B", text: "Data diagram is the structure, data model is the visual representation" },
      { label: "C", text: "Both are structures" },
      { label: "D", text: "Both are visual representations" },
    ],
    answer: "A. Data model is the structure, data diagram is the visual representation",
  },

  // ----- System Security Design (6) -----
  {
    id: 85,
    topic: "System Security",
    question: "What is system security design?",
    options: [
      { label: "A", text: "The process of designing security measures into the system" },
      { label: "B", text: "The process of ignoring security" },
      { label: "C", text: "The process of adding security after deployment" },
      { label: "D", text: "The process of removing security" },
    ],
    answer: "A. The process of designing security measures into the system",
  },
  {
    id: 86,
    topic: "System Security",
    question: "What is the difference between authentication and authorization?",
    options: [
      { label: "A", text: "Authentication verifies identity, authorization grants permissions" },
      { label: "B", text: "Authorization verifies identity, authentication grants permissions" },
      { label: "C", text: "Both verify identity" },
      { label: "D", text: "Both grant permissions" },
    ],
    answer: "A. Authentication verifies identity, authorization grants permissions",
  },
  {
    id: 87,
    topic: "System Security",
    question: "What is the principle of least privilege in system security?",
    options: [
      { label: "A", text: "Users should have minimal necessary permissions" },
      { label: "B", text: "Users should have all permissions" },
      { label: "C", text: "Users should have no permissions" },
      { label: "D", text: "Users should have random permissions" },
    ],
    answer: "A. Users should have minimal necessary permissions",
  },
  {
    id: 88,
    topic: "System Security",
    question: "What is the purpose of encryption in system design?",
    options: [
      { label: "A", text: "To protect data from unauthorized access" },
      { label: "B", text: "To make data readable" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To corrupt data" },
    ],
    answer: "A. To protect data from unauthorized access",
  },
  {
    id: 89,
    topic: "System Security",
    question: "What is the difference between a security policy and a security mechanism?",
    options: [
      { label: "A", text: "Policy defines rules, mechanism implements them" },
      { label: "B", text: "Mechanism defines rules, policy implements them" },
      { label: "C", text: "Both define rules" },
      { label: "D", text: "Both implement rules" },
    ],
    answer: "A. Policy defines rules, mechanism implements them",
  },
  {
    id: 90,
    topic: "System Security",
    question: "What is the purpose of a firewall in system security?",
    options: [
      { label: "A", text: "To monitor and control network traffic" },
      { label: "B", text: "To allow all traffic" },
      { label: "C", text: "To block all traffic" },
      { label: "D", text: "To delete traffic" },
    ],
    answer: "A. To monitor and control network traffic",
  },

  // ----- System Integration (6) -----
  {
    id: 91,
    topic: "System Integration",
    question: "What is system integration?",
    options: [
      { label: "A", text: "The process of connecting different systems to work together" },
      { label: "B", text: "The process of creating isolated systems" },
      { label: "C", text: "The process of deleting systems" },
      { label: "D", text: "The process of testing systems" },
    ],
    answer: "A. The process of connecting different systems to work together",
  },
  {
    id: 92,
    topic: "System Integration",
    question: "What is the difference between horizontal and vertical integration?",
    options: [
      { label: "A", text: "Horizontal integrates across systems, vertical integrates within a system" },
      { label: "B", text: "Vertical integrates across systems, horizontal integrates within a system" },
      { label: "C", text: "Both integrate across systems" },
      { label: "D", text: "Both integrate within a system" },
    ],
    answer: "A. Horizontal integrates across systems, vertical integrates within a system",
  },
  {
    id: 93,
    topic: "System Integration",
    question: "What is the purpose of an API in system integration?",
    options: [
      { label: "A", text: "To allow communication between different systems" },
      { label: "B", text: "To prevent communication between systems" },
      { label: "C", text: "To delete systems" },
      { label: "D", text: "To create isolated systems" },
    ],
    answer: "A. To allow communication between different systems",
  },
  {
    id: 94,
    topic: "System Integration",
    question: "What is the difference between synchronous and asynchronous integration?",
    options: [
      { label: "A", text: "Synchronous waits for response, asynchronous doesn't" },
      { label: "B", text: "Asynchronous waits for response, synchronous doesn't" },
      { label: "C", text: "Both wait for response" },
      { label: "D", text: "Neither waits for response" },
    ],
    answer: "A. Synchronous waits for response, asynchronous doesn't",
  },
  {
    id: 95,
    topic: "System Integration",
    question: "What is the purpose of middleware in system integration?",
    options: [
      { label: "A", text: "To facilitate communication between systems" },
      { label: "B", text: "To block communication between systems" },
      { label: "C", text: "To delete communication" },
      { label: "D", text: "To create isolated systems" },
    ],
    answer: "A. To facilitate communication between systems",
  },
  {
    id: 96,
    topic: "System Integration",
    question: "What is the difference between SOA and microservices?",
    options: [
      { label: "A", text: "SOA is service-oriented, microservices are independent services" },
      { label: "B", text: "Microservices are service-oriented, SOA are independent services" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is service-oriented" },
    ],
    answer: "A. SOA is service-oriented, microservices are independent services",
  },

  // ----- Additional Questions to reach 120+ (24 more) -----
  {
    id: 97,
    topic: "System Analysis Basics",
    question: "What is the role of a systems analyst?",
    options: [
      { label: "A", text: "To study and analyze system requirements and design solutions" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test systems" },
      { label: "D", text: "To deploy systems" },
    ],
    answer: "A. To study and analyze system requirements and design solutions",
  },
  {
    id: 98,
    topic: "SDLC",
    question: "What is the V-Model in SDLC?",
    options: [
      { label: "A", text: "A model where development and testing phases are paired" },
      { label: "B", text: "A model with no testing" },
      { label: "C", text: "A model with random phases" },
      { label: "D", text: "A model with only development" },
    ],
    answer: "A. A model where development and testing phases are paired",
  },
  {
    id: 99,
    topic: "Requirements Engineering",
    question: "What is the purpose of prototyping in requirements engineering?",
    options: [
      { label: "A", text: "To gather feedback and refine requirements" },
      { label: "B", text: "To deploy the system" },
      { label: "C", text: "To test the system" },
      { label: "D", text: "To write code" },
    ],
    answer: "A. To gather feedback and refine requirements",
  },
  {
    id: 100,
    topic: "System Design",
    question: "What is the purpose of design reviews?",
    options: [
      { label: "A", text: "To evaluate and improve the design" },
      { label: "B", text: "To ignore design issues" },
      { label: "C", text: "To complicate the design" },
      { label: "D", text: "To hide design problems" },
    ],
    answer: "A. To evaluate and improve the design",
  },
  {
    id: 101,
    topic: "UML",
    question: "What is a statechart diagram in UML?",
    options: [
      { label: "A", text: "A diagram showing the states of an object" },
      { label: "B", text: "A diagram showing class relationships" },
      { label: "C", text: "A diagram showing system architecture" },
      { label: "D", text: "A diagram showing deployment" },
    ],
    answer: "A. A diagram showing the states of an object",
  },
  {
    id: 102,
    topic: "Architecture Design",
    question: "What is the purpose of architectural patterns?",
    options: [
      { label: "A", text: "To provide reusable architectural solutions" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To test systems" },
      { label: "D", text: "To deploy systems" },
    ],
    answer: "A. To provide reusable architectural solutions",
  },
  {
    id: 103,
    topic: "Database Design",
    question: "What is a foreign key in a database?",
    options: [
      { label: "A", text: "A key that references a primary key in another table" },
      { label: "B", text: "A key that uniquely identifies a record" },
      { label: "C", text: "A key that is used for indexing" },
      { label: "D", text: "A key that is used for sorting" },
    ],
    answer: "A. A key that references a primary key in another table",
  },
  {
    id: 104,
    topic: "UI/UX Design",
    question: "What is the purpose of A/B testing in UI/UX?",
    options: [
      { label: "A", text: "To compare two versions and choose the better one" },
      { label: "B", text: "To ignore user preferences" },
      { label: "C", text: "To make random changes" },
      { label: "D", text: "To remove features" },
    ],
    answer: "A. To compare two versions and choose the better one",
  },
  {
    id: 105,
    topic: "Testing & Quality",
    question: "What is the difference between functional and non-functional testing?",
    options: [
      { label: "A", text: "Functional tests features, non-functional tests performance and security" },
      { label: "B", text: "Non-functional tests features, functional tests performance" },
      { label: "C", text: "Both test features" },
      { label: "D", text: "Both test performance" },
    ],
    answer: "A. Functional tests features, non-functional tests performance and security",
  },
  {
    id: 106,
    topic: "Project Management",
    question: "What is the purpose of a project timeline?",
    options: [
      { label: "A", text: "To schedule and track project tasks" },
      { label: "B", text: "To ignore deadlines" },
      { label: "C", text: "To delay tasks" },
      { label: "D", text: "To cancel tasks" },
    ],
    answer: "A. To schedule and track project tasks",
  },
  {
    id: 107,
    topic: "System Implementation",
    question: "What is the purpose of a pilot implementation?",
    options: [
      { label: "A", text: "To test the system in a limited environment" },
      { label: "B", text: "To deploy to all users immediately" },
      { label: "C", text: "To ignore testing" },
      { label: "D", text: "To cancel deployment" },
    ],
    answer: "A. To test the system in a limited environment",
  },
  {
    id: 108,
    topic: "System Maintenance",
    question: "What is the purpose of system backup?",
    options: [
      { label: "A", text: "To protect data from loss" },
      { label: "B", text: "To delete data" },
      { label: "C", text: "To corrupt data" },
      { label: "D", text: "To ignore data" },
    ],
    answer: "A. To protect data from loss",
  },
  {
    id: 109,
    topic: "Emerging Technologies",
    question: "What is the purpose of edge computing?",
    options: [
      { label: "A", text: "To process data near the source" },
      { label: "B", text: "To process data in the cloud" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To ignore data" },
    ],
    answer: "A. To process data near the source",
  },
  {
    id: 110,
    topic: "Data Modeling",
    question: "What is the purpose of data normalization?",
    options: [
      { label: "A", text: "To reduce data redundancy and improve integrity" },
      { label: "B", text: "To increase data redundancy" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To corrupt data" },
    ],
    answer: "A. To reduce data redundancy and improve integrity",
  },
  {
    id: 111,
    topic: "System Security",
    question: "What is the purpose of penetration testing?",
    options: [
      { label: "A", text: "To identify security vulnerabilities" },
      { label: "B", text: "To delete security" },
      { label: "C", text: "To ignore security" },
      { label: "D", text: "To remove security" },
    ],
    answer: "A. To identify security vulnerabilities",
  },
  {
    id: 112,
    topic: "System Integration",
    question: "What is the purpose of data integration?",
    options: [
      { label: "A", text: "To combine data from different sources" },
      { label: "B", text: "To separate data" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To corrupt data" },
    ],
    answer: "A. To combine data from different sources",
  },
  {
    id: 113,
    topic: "System Analysis Basics",
    question: "What is the purpose of a feasibility study?",
    options: [
      { label: "A", text: "To determine if the project should proceed" },
      { label: "B", text: "To ignore project viability" },
      { label: "C", text: "To cancel the project" },
      { label: "D", text: "To delay the project" },
    ],
    answer: "A. To determine if the project should proceed",
  },
  {
    id: 114,
    topic: "SDLC",
    question: "What is the purpose of the testing phase in SDLC?",
    options: [
      { label: "A", text: "To identify and fix defects" },
      { label: "B", text: "To write code" },
      { label: "C", text: "To design the system" },
      { label: "D", text: "To plan the system" },
    ],
    answer: "A. To identify and fix defects",
  },
  {
    id: 115,
    topic: "Requirements Engineering",
    question: "What is the purpose of requirements prioritization?",
    options: [
      { label: "A", text: "To determine which requirements are most important" },
      { label: "B", text: "To ignore requirements" },
      { label: "C", text: "To make all requirements equal" },
      { label: "D", text: "To delete requirements" },
    ],
    answer: "A. To determine which requirements are most important",
  },
  {
    id: 116,
    topic: "System Design",
    question: "What is the purpose of design validation?",
    options: [
      { label: "A", text: "To ensure the design meets requirements" },
      { label: "B", text: "To ignore design issues" },
      { label: "C", text: "To complicate design" },
      { label: "D", text: "To hide design problems" },
    ],
    answer: "A. To ensure the design meets requirements",
  },
  {
    id: 117,
    topic: "UML",
    question: "What is a deployment diagram in UML?",
    options: [
      { label: "A", text: "A diagram showing the physical deployment of system components" },
      { label: "B", text: "A diagram showing class relationships" },
      { label: "C", text: "A diagram showing user interactions" },
      { label: "D", text: "A diagram showing system processes" },
    ],
    answer: "A. A diagram showing the physical deployment of system components",
  },
  {
    id: 118,
    topic: "Architecture Design",
    question: "What is the purpose of architectural evaluation?",
    options: [
      { label: "A", text: "To assess if the architecture meets requirements" },
      { label: "B", text: "To ignore architecture" },
      { label: "C", text: "To complicate architecture" },
      { label: "D", text: "To hide architecture issues" },
    ],
    answer: "A. To assess if the architecture meets requirements",
  },
  {
    id: 119,
    topic: "Database Design",
    question: "What is the purpose of database indexing?",
    options: [
      { label: "A", text: "To speed up data retrieval" },
      { label: "B", text: "To slow down data retrieval" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To corrupt data" },
    ],
    answer: "A. To speed up data retrieval",
  },
  {
    id: 120,
    topic: "UI/UX Design",
    question: "What is the purpose of responsive design?",
    options: [
      { label: "A", text: "To adapt the interface to different screen sizes" },
      { label: "B", text: "To ignore screen sizes" },
      { label: "C", text: "To use only one size" },
      { label: "D", text: "To complicate layouts" },
    ],
    answer: "A. To adapt the interface to different screen sizes",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is system analysis and design?",
    answer:
      "System analysis is the process of studying a system to identify its components and requirements. System design is the process of creating a blueprint for the system. Together, they form the foundation of system development.",
  },
  {
    question: "What is the SDLC?",
    answer:
      "The System Development Life Cycle (SDLC) is a structured process for developing information systems. It includes phases like planning, analysis, design, implementation, testing, and maintenance.",
  },
  {
    question: "What is the difference between Agile and Waterfall?",
    answer:
      "Waterfall is a linear sequential model where each phase must be completed before moving to the next. Agile is an iterative approach with flexible requirements and continuous feedback.",
  },
  {
    question: "What is UML and why is it used?",
    answer:
      "Unified Modeling Language (UML) is a standard visual language for modeling systems. It's used to visualize, specify, construct, and document the artifacts of a software system.",
  },
  {
    question: "What are the key skills for a system analyst?",
    answer:
      "Key skills include requirements gathering, problem-solving, communication, technical knowledge of systems, understanding of business processes, project management, and knowledge of design methodologies.",
  },
  {
    question: "What are current trends in system design?",
    answer:
      "Current trends include cloud-native design, microservices architecture, AI/ML integration, IoT systems, blockchain technology, DevOps practices, and emphasis on security and scalability.",
  },
];

// ========================== COMPONENT ==========================
export default function SystemDesignAnalysisMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/system-design-analysis",
        "url": "https://CodeSkipper.in/mcq/system-design-analysis",
        "name": "System Design & Analysis Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on System Design and Analysis, covering SDLC, UML, architecture, requirements, and more.",
        "about": { "@type": "Thing", "name": "System Design & Analysis MCQ" },
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
              "name": "System Design & Analysis",
              "item": "https://CodeSkipper.in/mcq/system-design-analysis",
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
        "@id": "https://CodeSkipper.in/mcq/system-design-analysis#course",
        "name": "System Design & Analysis MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for System Design and Analysis exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "System Design & Analysis" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/system-design-analysis#faq",
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
        <title>System Design & Analysis MCQs 2026 | 120+ Questions | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ System Design and Analysis multiple-choice questions with answers. Covers SDLC, UML, architecture, requirements engineering, and more. Updated for 2026 exams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="System Design, System Analysis, SDLC, UML, Software Engineering, MCQs, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/system-design-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/system-design-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/system-design-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/system-design-mcq" />
        <meta property="og:title" content="System Design & Analysis MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ System Design and Analysis multiple-choice questions covering SDLC, UML, architecture, requirements, and more."
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
        <meta name="twitter:title" content="System Design & Analysis MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ System Design and Analysis multiple-choice questions covering SDLC, UML, architecture, requirements, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🏗️ 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              System Design & Analysis <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-50/90 max-w-2xl mb-6">
              Master System Design and Analysis with 120+ curated MCQs covering SDLC, UML,
              architecture, requirements engineering, and more. Perfect for software engineering
              interviews and university exams.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">16 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Interview Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-pink-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore System Design Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-indigo-600 bg-indigo-50 text-indigo-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
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
                <strong className="text-indigo-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
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
            System Design & Analysis MCQs
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
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold">
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
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
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
                className="mt-3 text-indigo-600 hover:text-indigo-800 font-medium"
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