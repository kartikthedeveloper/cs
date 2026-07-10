import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Cloud Basics (6) -----
  {
    id: 1,
    topic: "Cloud Basics",
    question: "What is the primary benefit of cloud computing?",
    options: [
      { label: "A", text: "Cost savings" },
      { label: "B", text: "Increased security" },
      { label: "C", text: "Limited scalability" },
      { label: "D", text: "Decreased accessibility" },
    ],
    answer: "A. Cost savings",
  },
  {
    id: 2,
    topic: "Cloud Basics",
    question: "Which service model allows users to rent virtualized computing resources over the internet?",
    options: [
      { label: "A", text: "Infrastructure as a Service (IaaS)" },
      { label: "B", text: "Platform as a Service (PaaS)" },
      { label: "C", text: "Software as a Service (SaaS)" },
      { label: "D", text: "On-premises hosting" },
    ],
    answer: "A. Infrastructure as a Service (IaaS)",
  },
  {
    id: 3,
    topic: "Cloud Basics",
    question: "What does SaaS stand for in cloud computing?",
    options: [
      { label: "A", text: "Software as a Service" },
      { label: "B", text: "System as a Service" },
      { label: "C", text: "Storage as a Service" },
      { label: "D", text: "Security as a Service" },
    ],
    answer: "A. Software as a Service",
  },
  {
    id: 4,
    topic: "Cloud Basics",
    question: "Which cloud deployment model provides dedicated infrastructure to a single organization?",
    options: [
      { label: "A", text: "Public cloud" },
      { label: "B", text: "Private cloud" },
      { label: "C", text: "Hybrid cloud" },
      { label: "D", text: "Community cloud" },
    ],
    answer: "B. Private cloud",
  },
  {
    id: 5,
    topic: "Cloud Basics",
    question: "What is a characteristic of cloud elasticity?",
    options: [
      { label: "A", text: "Fixed resources" },
      { label: "B", text: "On-demand scaling" },
      { label: "C", text: "Limited availability" },
      { label: "D", text: "Static performance" },
    ],
    answer: "B. On-demand scaling",
  },
  {
    id: 6,
    topic: "Cloud Basics",
    question: "Which cloud characteristic refers to the ability to scale resources automatically based on demand?",
    options: [
      { label: "A", text: "Resource pooling" },
      { label: "B", text: "Rapid elasticity" },
      { label: "C", text: "Measured service" },
      { label: "D", text: "On-demand provisioning" },
    ],
    answer: "B. Rapid elasticity",
  },

  // ----- Service Models (6) -----
  {
    id: 7,
    topic: "Service Models",
    question: "Which cloud service model provides virtualized hardware, networking, and storage?",
    options: [
      { label: "A", text: "IaaS" },
      { label: "B", text: "PaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "FaaS" },
    ],
    answer: "A. IaaS",
  },
  {
    id: 8,
    topic: "Service Models",
    question: "Which service model is suitable for developers building and deploying applications without managing the underlying infrastructure?",
    options: [
      { label: "A", text: "IaaS" },
      { label: "B", text: "PaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "DaaS" },
    ],
    answer: "B. PaaS",
  },
  {
    id: 9,
    topic: "Service Models",
    question: "Which cloud service model provides ready-to-use applications accessible over the internet?",
    options: [
      { label: "A", text: "IaaS" },
      { label: "B", text: "PaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "CaaS" },
    ],
    answer: "C. SaaS",
  },
  {
    id: 10,
    topic: "Service Models",
    question: "What is the main difference between IaaS and PaaS?",
    options: [
      { label: "A", text: "IaaS provides infrastructure; PaaS provides platform for development" },
      { label: "B", text: "IaaS is for storage; PaaS is for networking" },
      { label: "C", text: "IaaS is cheaper than PaaS" },
      { label: "D", text: "PaaS includes operating system; IaaS does not" },
    ],
    answer: "A. IaaS provides infrastructure; PaaS provides platform for development",
  },
  {
    id: 11,
    topic: "Service Models",
    question: "Which service model is often used for email services like Gmail?",
    options: [
      { label: "A", text: "IaaS" },
      { label: "B", text: "PaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "BaaS" },
    ],
    answer: "C. SaaS",
  },
  {
    id: 12,
    topic: "Service Models",
    question: "What is Function as a Service (FaaS)?",
    options: [
      { label: "A", text: "A serverless computing model" },
      { label: "B", text: "A type of IaaS" },
      { label: "C", text: "A type of SaaS" },
      { label: "D", text: "A data storage service" },
    ],
    answer: "A. A serverless computing model",
  },

  // ----- Deployment Models (6) -----
  {
    id: 13,
    topic: "Deployment Models",
    question: "Which cloud deployment model is open to the general public?",
    options: [
      { label: "A", text: "Public cloud" },
      { label: "B", text: "Private cloud" },
      { label: "C", text: "Hybrid cloud" },
      { label: "D", text: "Community cloud" },
    ],
    answer: "A. Public cloud",
  },
  {
    id: 14,
    topic: "Deployment Models",
    question: "Which cloud model combines public and private clouds?",
    options: [
      { label: "A", text: "Public cloud" },
      { label: "B", text: "Private cloud" },
      { label: "C", text: "Hybrid cloud" },
      { label: "D", text: "Community cloud" },
    ],
    answer: "C. Hybrid cloud",
  },
  {
    id: 15,
    topic: "Deployment Models",
    question: "Which cloud deployment model shares infrastructure among multiple organizations with similar requirements?",
    options: [
      { label: "A", text: "Public cloud" },
      { label: "B", text: "Private cloud" },
      { label: "C", text: "Hybrid cloud" },
      { label: "D", text: "Community cloud" },
    ],
    answer: "D. Community cloud",
  },
  {
    id: 16,
    topic: "Deployment Models",
    question: "What is the main advantage of a private cloud over a public cloud?",
    options: [
      { label: "A", text: "Higher security and control" },
      { label: "B", text: "Lower cost" },
      { label: "C", text: "Better scalability" },
      { label: "D", text: "More redundancy" },
    ],
    answer: "A. Higher security and control",
  },
  {
    id: 17,
    topic: "Deployment Models",
    question: "Which deployment model is best for organizations with strict compliance requirements?",
    options: [
      { label: "A", text: "Public cloud" },
      { label: "B", text: "Private cloud" },
      { label: "C", text: "Hybrid cloud" },
      { label: "D", text: "Community cloud" },
    ],
    answer: "B. Private cloud",
  },
  {
    id: 18,
    topic: "Deployment Models",
    question: "What is the term for using multiple cloud providers to avoid vendor lock-in?",
    options: [
      { label: "A", text: "Multi-cloud" },
      { label: "B", text: "Hybrid cloud" },
      { label: "C", text: "Inter-cloud" },
      { label: "D", text: "Cross-cloud" },
    ],
    answer: "A. Multi-cloud",
  },

  // ----- Virtualization (6) -----
  {
    id: 19,
    topic: "Virtualization",
    question: "What is virtualization in cloud computing?",
    options: [
      { label: "A", text: "Creating a virtual version of hardware, OS, or storage" },
      { label: "B", text: "Merging physical servers" },
      { label: "C", text: "Increasing physical hardware" },
      { label: "D", text: "Reducing network bandwidth" },
    ],
    answer: "A. Creating a virtual version of hardware, OS, or storage",
  },
  {
    id: 20,
    topic: "Virtualization",
    question: "What is a hypervisor?",
    options: [
      { label: "A", text: "Software that creates and manages virtual machines" },
      { label: "B", text: "A physical server" },
      { label: "C", text: "A network device" },
      { label: "D", text: "A storage device" },
    ],
    answer: "A. Software that creates and manages virtual machines",
  },
  {
    id: 21,
    topic: "Virtualization",
    question: "Which type of virtualization allows a single server to host multiple operating systems?",
    options: [
      { label: "A", text: "Server virtualization" },
      { label: "B", text: "Network virtualization" },
      { label: "C", text: "Storage virtualization" },
      { label: "D", text: "Desktop virtualization" },
    ],
    answer: "A. Server virtualization",
  },
  {
    id: 22,
    topic: "Virtualization",
    question: "What is the difference between Type 1 and Type 2 hypervisors?",
    options: [
      { label: "A", text: "Type 1 runs directly on hardware; Type 2 runs on an OS" },
      { label: "B", text: "Type 1 is slower; Type 2 is faster" },
      { label: "C", text: "Type 1 is for desktops; Type 2 for servers" },
      { label: "D", text: "There is no difference" },
    ],
    answer: "A. Type 1 runs directly on hardware; Type 2 runs on an OS",
  },
  {
    id: 23,
    topic: "Virtualization",
    question: "Which of the following is a Type 1 hypervisor?",
    options: [
      { label: "A", text: "VMware ESXi" },
      { label: "B", text: "Oracle VirtualBox" },
      { label: "C", text: "Microsoft Virtual PC" },
      { label: "D", text: "Parallels Desktop" },
    ],
    answer: "A. VMware ESXi",
  },
  {
    id: 24,
    topic: "Virtualization",
    question: "What is the purpose of virtual storage?",
    options: [
      { label: "A", text: "To abstract physical storage into logical storage pools" },
      { label: "B", text: "To increase storage capacity" },
      { label: "C", text: "To reduce storage cost" },
      { label: "D", text: "To improve data security" },
    ],
    answer: "A. To abstract physical storage into logical storage pools",
  },

  // ----- Cloud Security (6) -----
  {
    id: 25,
    topic: "Cloud Security",
    question: "What is the shared responsibility model in cloud security?",
    options: [
      { label: "A", text: "Security responsibilities are divided between cloud provider and customer" },
      { label: "B", text: "Cloud provider is solely responsible for security" },
      { label: "C", text: "Customer is solely responsible for security" },
      { label: "D", text: "Security is not a concern in the cloud" },
    ],
    answer: "A. Security responsibilities are divided between cloud provider and customer",
  },
  {
    id: 26,
    topic: "Cloud Security",
    question: "Which of the following is a security best practice for cloud environments?",
    options: [
      { label: "A", text: "Using strong passwords and multi-factor authentication" },
      { label: "B", text: "Encrypting data at rest and in transit" },
      { label: "C", text: "Implementing regular security audits" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 27,
    topic: "Cloud Security",
    question: "What is a DDoS attack in the context of cloud computing?",
    options: [
      { label: "A", text: "Distributed Denial of Service attack" },
      { label: "B", text: "Data deletion attack" },
      { label: "C", text: "Data corruption attack" },
      { label: "D", text: "Unauthorized access attack" },
    ],
    answer: "A. Distributed Denial of Service attack",
  },
  {
    id: 28,
    topic: "Cloud Security",
    question: "What is the purpose of identity and access management (IAM) in the cloud?",
    options: [
      { label: "A", text: "To manage user identities and control access to resources" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To monitor network traffic" },
      { label: "D", text: "To backup data" },
    ],
    answer: "A. To manage user identities and control access to resources",
  },
  {
    id: 29,
    topic: "Cloud Security",
    question: "Which of the following is an example of a cloud security threat?",
    options: [
      { label: "A", text: "Data breach" },
      { label: "B", text: "Insecure APIs" },
      { label: "C", text: "Account hijacking" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 30,
    topic: "Cloud Security",
    question: "What is encryption at rest?",
    options: [
      { label: "A", text: "Encrypting data stored on disks or databases" },
      { label: "B", text: "Encrypting data while it is being transmitted" },
      { label: "C", text: "Encrypting data in memory" },
      { label: "D", text: "Encrypting user passwords" },
    ],
    answer: "A. Encrypting data stored on disks or databases",
  },

  // ----- AWS (6) -----
  {
    id: 31,
    topic: "AWS",
    question: "Which AWS service is used for compute capacity?",
    options: [
      { label: "A", text: "EC2" },
      { label: "B", text: "S3" },
      { label: "C", text: "RDS" },
      { label: "D", text: "Lambda" },
    ],
    answer: "A. EC2",
  },
  {
    id: 32,
    topic: "AWS",
    question: "What is AWS S3 used for?",
    options: [
      { label: "A", text: "Object storage" },
      { label: "B", text: "Compute" },
      { label: "C", text: "Database" },
      { label: "D", text: "Networking" },
    ],
    answer: "A. Object storage",
  },
  {
    id: 33,
    topic: "AWS",
    question: "Which AWS service is a serverless compute service?",
    options: [
      { label: "A", text: "Lambda" },
      { label: "B", text: "EC2" },
      { label: "C", text: "RDS" },
      { label: "D", text: "VPC" },
    ],
    answer: "A. Lambda",
  },
  {
    id: 34,
    topic: "AWS",
    question: "What does RDS stand for in AWS?",
    options: [
      { label: "A", text: "Relational Database Service" },
      { label: "B", text: "Remote Data Storage" },
      { label: "C", text: "Redundant Database System" },
      { label: "D", text: "Real-time Data Service" },
    ],
    answer: "A. Relational Database Service",
  },
  {
    id: 35,
    topic: "AWS",
    question: "Which AWS service is used for content delivery?",
    options: [
      { label: "A", text: "CloudFront" },
      { label: "B", text: "S3" },
      { label: "C", text: "Route 53" },
      { label: "D", text: "Elastic Load Balancer" },
    ],
    answer: "A. CloudFront",
  },
  {
    id: 36,
    topic: "AWS",
    question: "What is AWS VPC?",
    options: [
      { label: "A", text: "Virtual Private Cloud" },
      { label: "B", text: "Virtual Public Cloud" },
      { label: "C", text: "Virtual Private Compute" },
      { label: "D", text: "Virtual Private Cluster" },
    ],
    answer: "A. Virtual Private Cloud",
  },

  // ----- Azure (6) -----
  {
    id: 37,
    topic: "Azure",
    question: "Which Microsoft Azure service is equivalent to AWS EC2?",
    options: [
      { label: "A", text: "Azure Virtual Machines" },
      { label: "B", text: "Azure App Service" },
      { label: "C", text: "Azure Functions" },
      { label: "D", text: "Azure Kubernetes Service" },
    ],
    answer: "A. Azure Virtual Machines",
  },
  {
    id: 38,
    topic: "Azure",
    question: "What is Azure Blob Storage?",
    options: [
      { label: "A", text: "Object storage service" },
      { label: "B", text: "Relational database" },
      { label: "C", text: "Compute service" },
      { label: "D", text: "Networking service" },
    ],
    answer: "A. Object storage service",
  },
  {
    id: 39,
    topic: "Azure",
    question: "Which Azure service is used for serverless computing?",
    options: [
      { label: "A", text: "Azure Functions" },
      { label: "B", text: "Azure Virtual Machines" },
      { label: "C", text: "Azure SQL Database" },
      { label: "D", text: "Azure CDN" },
    ],
    answer: "A. Azure Functions",
  },
  {
    id: 40,
    topic: "Azure",
    question: "What is Azure Active Directory?",
    options: [
      { label: "A", text: "Identity and access management service" },
      { label: "B", text: "Storage service" },
      { label: "C", text: "Compute service" },
      { label: "D", text: "Database service" },
    ],
    answer: "A. Identity and access management service",
  },
  {
    id: 41,
    topic: "Azure",
    question: "Which Azure service is used for container orchestration?",
    options: [
      { label: "A", text: "Azure Kubernetes Service (AKS)" },
      { label: "B", text: "Azure Container Instances" },
      { label: "C", text: "Azure App Service" },
      { label: "D", text: "Azure Functions" },
    ],
    answer: "A. Azure Kubernetes Service (AKS)",
  },
  {
    id: 42,
    topic: "Azure",
    question: "What is Azure DevOps used for?",
    options: [
      { label: "A", text: "Software development lifecycle and CI/CD" },
      { label: "B", text: "Data storage" },
      { label: "C", text: "Virtual machine management" },
      { label: "D", text: "Network configuration" },
    ],
    answer: "A. Software development lifecycle and CI/CD",
  },

  // ----- GCP (6) -----
  {
    id: 43,
    topic: "GCP",
    question: "What is Google Cloud Platform's compute service called?",
    options: [
      { label: "A", text: "Compute Engine" },
      { label: "B", text: "App Engine" },
      { label: "C", text: "Cloud Functions" },
      { label: "D", text: "Kubernetes Engine" },
    ],
    answer: "A. Compute Engine",
  },
  {
    id: 44,
    topic: "GCP",
    question: "Which GCP service is equivalent to AWS S3?",
    options: [
      { label: "A", text: "Cloud Storage" },
      { label: "B", text: "Cloud Datastore" },
      { label: "C", text: "BigQuery" },
      { label: "D", text: "Cloud SQL" },
    ],
    answer: "A. Cloud Storage",
  },
  {
    id: 45,
    topic: "GCP",
    question: "What is Google Cloud Functions?",
    options: [
      { label: "A", text: "Serverless compute service" },
      { label: "B", text: "Container orchestration" },
      { label: "C", text: "Database service" },
      { label: "D", text: "Networking service" },
    ],
    answer: "A. Serverless compute service",
  },
  {
    id: 46,
    topic: "GCP",
    question: "Which GCP service is used for big data analytics?",
    options: [
      { label: "A", text: "BigQuery" },
      { label: "B", text: "Cloud Storage" },
      { label: "C", text: "Compute Engine" },
      { label: "D", text: "Cloud SQL" },
    ],
    answer: "A. BigQuery",
  },
  {
    id: 47,
    topic: "GCP",
    question: "What is Google Kubernetes Engine (GKE)?",
    options: [
      { label: "A", text: "Managed Kubernetes service" },
      { label: "B", text: "Serverless compute" },
      { label: "C", text: "Database service" },
      { label: "D", text: "Storage service" },
    ],
    answer: "A. Managed Kubernetes service",
  },
  {
    id: 48,
    topic: "GCP",
    question: "Which GCP service is used for machine learning?",
    options: [
      { label: "A", text: "AI Platform" },
      { label: "B", text: "Cloud Functions" },
      { label: "C", text: "Cloud Storage" },
      { label: "D", text: "Compute Engine" },
    ],
    answer: "A. AI Platform",
  },

  // ----- Containers & Orchestration (6) -----
  {
    id: 49,
    topic: "Containers & Orchestration",
    question: "What is a container?",
    options: [
      { label: "A", text: "A lightweight, standalone, executable package that includes everything needed to run software" },
      { label: "B", text: "A virtual machine" },
      { label: "C", text: "A storage unit" },
      { label: "D", text: "A network device" },
    ],
    answer: "A. A lightweight, standalone, executable package that includes everything needed to run software",
  },
  {
    id: 50,
    topic: "Containers & Orchestration",
    question: "Which technology is most commonly associated with containers?",
    options: [
      { label: "A", text: "Docker" },
      { label: "B", text: "VMware" },
      { label: "C", text: "Hyper-V" },
      { label: "D", text: "KVM" },
    ],
    answer: "A. Docker",
  },
  {
    id: 51,
    topic: "Containers & Orchestration",
    question: "What is container orchestration?",
    options: [
      { label: "A", text: "Automated management of container lifecycles" },
      { label: "B", text: "Creating containers" },
      { label: "C", text: "Deleting containers" },
      { label: "D", text: "Monitoring containers" },
    ],
    answer: "A. Automated management of container lifecycles",
  },
  {
    id: 52,
    topic: "Containers & Orchestration",
    question: "Which is a popular container orchestration tool?",
    options: [
      { label: "A", text: "Kubernetes" },
      { label: "B", text: "Docker Swarm" },
      { label: "C", text: "Apache Mesos" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 53,
    topic: "Containers & Orchestration",
    question: "What is a Kubernetes pod?",
    options: [
      { label: "A", text: "The smallest deployable unit in Kubernetes" },
      { label: "B", text: "A cluster of nodes" },
      { label: "C", text: "A storage volume" },
      { label: "D", text: "A network policy" },
    ],
    answer: "A. The smallest deployable unit in Kubernetes",
  },
  {
    id: 54,
    topic: "Containers & Orchestration",
    question: "What is the role of a container registry?",
    options: [
      { label: "A", text: "To store and distribute container images" },
      { label: "B", text: "To run containers" },
      { label: "C", text: "To orchestrate containers" },
      { label: "D", text: "To monitor containers" },
    ],
    answer: "A. To store and distribute container images",
  },

  // ----- Serverless Computing (6) -----
  {
    id: 55,
    topic: "Serverless",
    question: "What is serverless computing?",
    options: [
      { label: "A", text: "A model where the cloud provider manages infrastructure and users only run code" },
      { label: "B", text: "Computing without servers" },
      { label: "C", text: "Computing on a single server" },
      { label: "D", text: "Using physical servers" },
    ],
    answer: "A. A model where the cloud provider manages infrastructure and users only run code",
  },
  {
    id: 56,
    topic: "Serverless",
    question: "Which of the following is a serverless computing service?",
    options: [
      { label: "A", text: "AWS Lambda" },
      { label: "B", text: "Azure Functions" },
      { label: "C", text: "Google Cloud Functions" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 57,
    topic: "Serverless",
    question: "What is the main benefit of serverless computing?",
    options: [
      { label: "A", text: "No server management, pay-per-use" },
      { label: "B", text: "Better performance" },
      { label: "C", text: "More control" },
      { label: "D", text: "Lower cost for all workloads" },
    ],
    answer: "A. No server management, pay-per-use",
  },
  {
    id: 58,
    topic: "Serverless",
    question: "What is the typical execution duration limit for AWS Lambda?",
    options: [
      { label: "A", text: "15 minutes" },
      { label: "B", text: "5 minutes" },
      { label: "C", text: "1 hour" },
      { label: "D", text: "No limit" },
    ],
    answer: "A. 15 minutes",
  },
  {
    id: 59,
    topic: "Serverless",
    question: "What is a cold start in serverless?",
    options: [
      { label: "A", text: "The initial delay when a function is invoked for the first time" },
      { label: "B", text: "Shutting down a function" },
      { label: "C", text: "Scaling down resources" },
      { label: "D", text: "A function error" },
    ],
    answer: "A. The initial delay when a function is invoked for the first time",
  },
  {
    id: 60,
    topic: "Serverless",
    question: "Which service provides a serverless database in AWS?",
    options: [
      { label: "A", text: "DynamoDB" },
      { label: "B", text: "RDS" },
      { label: "C", text: "Redshift" },
      { label: "D", text: "Aurora" },
    ],
    answer: "A. DynamoDB",
  },

  // ----- Cloud Storage (6) -----
  {
    id: 61,
    topic: "Cloud Storage",
    question: "What is object storage?",
    options: [
      { label: "A", text: "Storage of data as objects with metadata" },
      { label: "B", text: "Storage in a file system" },
      { label: "C", text: "Block-level storage" },
      { label: "D", text: "Database storage" },
    ],
    answer: "A. Storage of data as objects with metadata",
  },
  {
    id: 62,
    topic: "Cloud Storage",
    question: "Which of the following is an object storage service?",
    options: [
      { label: "A", text: "AWS S3" },
      { label: "B", text: "Azure Blob Storage" },
      { label: "C", text: "Google Cloud Storage" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 63,
    topic: "Cloud Storage",
    question: "What is a storage class in AWS S3?",
    options: [
      { label: "A", text: "A tier of storage with different performance and cost" },
      { label: "B", text: "A bucket type" },
      { label: "C", text: "A file type" },
      { label: "D", text: "An encryption method" },
    ],
    answer: "A. A tier of storage with different performance and cost",
  },
  {
    id: 64,
    topic: "Cloud Storage",
    question: "What is the purpose of lifecycle policies in cloud storage?",
    options: [
      { label: "A", text: "To automate data movement to lower-cost tiers or deletion" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To back up data" },
      { label: "D", text: "To monitor access" },
    ],
    answer: "A. To automate data movement to lower-cost tiers or deletion",
  },
  {
    id: 65,
    topic: "Cloud Storage",
    question: "What is a bucket in AWS S3?",
    options: [
      { label: "A", text: "A container for objects" },
      { label: "B", text: "A type of compute" },
      { label: "C", text: "A database" },
      { label: "D", text: "A network" },
    ],
    answer: "A. A container for objects",
  },
  {
    id: 66,
    topic: "Cloud Storage",
    question: "What is the difference between block storage and object storage?",
    options: [
      { label: "A", text: "Block storage is raw storage; object storage includes metadata" },
      { label: "B", text: "Block storage is slower" },
      { label: "C", text: "Object storage is cheaper" },
      { label: "D", text: "They are the same" },
    ],
    answer: "A. Block storage is raw storage; object storage includes metadata",
  },

  // ----- Cloud Networking (6) -----
  {
    id: 67,
    topic: "Cloud Networking",
    question: "What is a Virtual Private Cloud (VPC)?",
    options: [
      { label: "A", text: "A private network segment in the cloud" },
      { label: "B", text: "A public network" },
      { label: "C", text: "A VPN" },
      { label: "D", text: "A DNS service" },
    ],
    answer: "A. A private network segment in the cloud",
  },
  {
    id: 68,
    topic: "Cloud Networking",
    question: "What is a load balancer in cloud computing?",
    options: [
      { label: "A", text: "Distributes incoming traffic across multiple targets" },
      { label: "B", text: "Balances storage load" },
      { label: "C", text: "Balances compute power" },
      { label: "D", text: "Balances network bandwidth" },
    ],
    answer: "A. Distributes incoming traffic across multiple targets",
  },
  {
    id: 69,
    topic: "Cloud Networking",
    question: "Which AWS service is a load balancer?",
    options: [
      { label: "A", text: "Elastic Load Balancer (ELB)" },
      { label: "B", text: "CloudFront" },
      { label: "C", text: "Route 53" },
      { label: "D", text: "VPC" },
    ],
    answer: "A. Elastic Load Balancer (ELB)",
  },
  {
    id: 70,
    topic: "Cloud Networking",
    question: "What is a Content Delivery Network (CDN)?",
    options: [
      { label: "A", text: "A network of servers that deliver content to users based on their geographic location" },
      { label: "B", text: "A private network" },
      { label: "C", text: "A VPN" },
      { label: "D", text: "A firewall" },
    ],
    answer: "A. A network of servers that deliver content to users based on their geographic location",
  },
  {
    id: 71,
    topic: "Cloud Networking",
    question: "What is the purpose of a firewall in cloud networking?",
    options: [
      { label: "A", text: "To monitor and control incoming and outgoing network traffic" },
      { label: "B", text: "To increase network speed" },
      { label: "C", text: "To encrypt data" },
      { label: "D", text: "To store data" },
    ],
    answer: "A. To monitor and control incoming and outgoing network traffic",
  },
  {
    id: 72,
    topic: "Cloud Networking",
    question: "What is a VPN in cloud computing?",
    options: [
      { label: "A", text: "A secure connection over the internet to a private network" },
      { label: "B", text: "A virtual network" },
      { label: "C", text: "A type of load balancer" },
      { label: "D", text: "A storage service" },
    ],
    answer: "A. A secure connection over the internet to a private network",
  },

  // ----- Cloud Management & DevOps (6) -----
  {
    id: 73,
    topic: "Cloud Management & DevOps",
    question: "What is Infrastructure as Code (IaC)?",
    options: [
      { label: "A", text: "Managing infrastructure using code and automation" },
      { label: "B", text: "Writing code for applications" },
      { label: "C", text: "Using a GUI to manage infrastructure" },
      { label: "D", text: "Manual configuration" },
    ],
    answer: "A. Managing infrastructure using code and automation",
  },
  {
    id: 74,
    topic: "Cloud Management & DevOps",
    question: "Which tool is commonly used for Infrastructure as Code?",
    options: [
      { label: "A", text: "Terraform" },
      { label: "B", text: "Ansible" },
      { label: "C", text: "CloudFormation" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 75,
    topic: "Cloud Management & DevOps",
    question: "What is CI/CD?",
    options: [
      { label: "A", text: "Continuous Integration and Continuous Deployment" },
      { label: "B", text: "Continuous Integration and Continuous Delivery" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None of the above" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 76,
    topic: "Cloud Management & DevOps",
    question: "Which tool is commonly used for monitoring in cloud environments?",
    options: [
      { label: "A", text: "Prometheus" },
      { label: "B", text: "Grafana" },
      { label: "C", text: "CloudWatch" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 77,
    topic: "Cloud Management & DevOps",
    question: "What is a key principle of DevOps?",
    options: [
      { label: "A", text: "Collaboration between development and operations teams" },
      { label: "B", text: "Automation" },
      { label: "C", text: "Continuous improvement" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 78,
    topic: "Cloud Management & DevOps",
    question: "What is the purpose of cloud cost management?",
    options: [
      { label: "A", text: "To monitor and optimize cloud spending" },
      { label: "B", text: "To increase cloud usage" },
      { label: "C", text: "To ignore costs" },
      { label: "D", text: "To reduce performance" },
    ],
    answer: "A. To monitor and optimize cloud spending",
  },

  // ----- Cloud Migration (6) -----
  {
    id: 79,
    topic: "Cloud Migration",
    question: "What is cloud migration?",
    options: [
      { label: "A", text: "Moving applications and data from on-premises to the cloud" },
      { label: "B", text: "Moving data between cloud providers" },
      { label: "C", text: "Moving data within the same cloud" },
      { label: "D", text: "Moving data to a physical server" },
    ],
    answer: "A. Moving applications and data from on-premises to the cloud",
  },
  {
    id: 80,
    topic: "Cloud Migration",
    question: "What is the 'lift and shift' migration strategy?",
    options: [
      { label: "A", text: "Moving applications to the cloud without significant changes" },
      { label: "B", text: "Rewriting applications for the cloud" },
      { label: "C", text: "Moving data to the cloud" },
      { label: "D", text: "Deleting applications" },
    ],
    answer: "A. Moving applications to the cloud without significant changes",
  },
  {
    id: 81,
    topic: "Cloud Migration",
    question: "What is the 'replatforming' migration strategy?",
    options: [
      { label: "A", text: "Making minor changes to applications to use cloud services" },
      { label: "B", text: "Completely rewriting applications" },
      { label: "C", text: "Moving without changes" },
      { label: "D", text: "Deleting applications" },
    ],
    answer: "A. Making minor changes to applications to use cloud services",
  },
  {
    id: 82,
    topic: "Cloud Migration",
    question: "What is the 'refactoring' migration strategy?",
    options: [
      { label: "A", text: "Rewriting applications to be cloud-native" },
      { label: "B", text: "Minor changes" },
      { label: "C", text: "No changes" },
      { label: "D", text: "Deleting data" },
    ],
    answer: "A. Rewriting applications to be cloud-native",
  },
  {
    id: 83,
    topic: "Cloud Migration",
    question: "What is a major challenge in cloud migration?",
    options: [
      { label: "A", text: "Data security and compliance" },
      { label: "B", text: "Application compatibility" },
      { label: "C", text: "Cost management" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 84,
    topic: "Cloud Migration",
    question: "What is the benefit of using a hybrid approach during migration?",
    options: [
      { label: "A", text: "Gradual transition and reduced risk" },
      { label: "B", text: "Immediate full migration" },
      { label: "C", text: "Lower cost" },
      { label: "D", text: "No benefits" },
    ],
    answer: "A. Gradual transition and reduced risk",
  },

  // ----- Cloud Economics (6) -----
  {
    id: 85,
    topic: "Cloud Economics",
    question: "What is the pay-as-you-go model in cloud computing?",
    options: [
      { label: "A", text: "Paying only for resources consumed" },
      { label: "B", text: "Paying a fixed monthly fee" },
      { label: "C", text: "Paying upfront for a year" },
      { label: "D", text: "No cost" },
    ],
    answer: "A. Paying only for resources consumed",
  },
  {
    id: 86,
    topic: "Cloud Economics",
    question: "What is the total cost of ownership (TCO) in cloud?",
    options: [
      { label: "A", text: "The total cost of running infrastructure including hardware, software, and maintenance" },
      { label: "B", text: "The cost of cloud services only" },
      { label: "C", text: "The cost of migration" },
      { label: "D", text: "The cost of training" },
    ],
    answer: "A. The total cost of running infrastructure including hardware, software, and maintenance",
  },
  {
    id: 87,
    topic: "Cloud Economics",
    question: "What is a Reserved Instance in cloud pricing?",
    options: [
      { label: "A", text: "Pre-purchasing capacity for a discount" },
      { label: "B", text: "On-demand instance" },
      { label: "C", text: "Spot instance" },
      { label: "D", text: "Free tier" },
    ],
    answer: "A. Pre-purchasing capacity for a discount",
  },
  {
    id: 88,
    topic: "Cloud Economics",
    question: "What is a Spot Instance?",
    options: [
      { label: "A", text: "A low-cost, unused compute capacity that can be interrupted" },
      { label: "B", text: "A dedicated instance" },
      { label: "C", text: "A reserved instance" },
      { label: "D", text: "A free instance" },
    ],
    answer: "A. A low-cost, unused compute capacity that can be interrupted",
  },
  {
    id: 89,
    topic: "Cloud Economics",
    question: "Which of the following can help reduce cloud costs?",
    options: [
      { label: "A", text: "Right-sizing resources" },
      { label: "B", text: "Using spot instances" },
      { label: "C", text: "Reserved capacity" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 90,
    topic: "Cloud Economics",
    question: "What is the benefit of the AWS Free Tier?",
    options: [
      { label: "A", text: "Free usage within certain limits to explore services" },
      { label: "B", text: "Unlimited free usage" },
      { label: "C", text: "Free for one year" },
      { label: "D", text: "Free for all users" },
    ],
    answer: "A. Free usage within certain limits to explore services",
  },

  // ----- Cloud Case Studies (6) -----
  {
    id: 91,
    topic: "Cloud Case Studies",
    question: "Which company is a leader in cloud computing?",
    options: [
      { label: "A", text: "Amazon Web Services" },
      { label: "B", text: "Microsoft Azure" },
      { label: "C", text: "Google Cloud Platform" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 92,
    topic: "Cloud Case Studies",
    question: "What is the market share of AWS compared to other providers? (Approximate)",
    options: [
      { label: "A", text: "About 30-40%" },
      { label: "B", text: "About 10%" },
      { label: "C", text: "About 50%" },
      { label: "D", text: "About 70%" },
    ],
    answer: "A. About 30-40%",
  },
  {
    id: 93,
    topic: "Cloud Case Studies",
    question: "Which cloud provider offers a free tier with 12 months of certain services?",
    options: [
      { label: "A", text: "AWS" },
      { label: "B", text: "Azure" },
      { label: "C", text: "GCP" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 94,
    topic: "Cloud Case Studies",
    question: "Which industry is a major adopter of cloud computing?",
    options: [
      { label: "A", text: "Healthcare" },
      { label: "B", text: "Finance" },
      { label: "C", text: "Retail" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 95,
    topic: "Cloud Case Studies",
    question: "What is the primary reason companies move to cloud?",
    options: [
      { label: "A", text: "Cost savings and flexibility" },
      { label: "B", text: "Security concerns" },
      { label: "C", text: "Compliance requirements" },
      { label: "D", text: "Marketing" },
    ],
    answer: "A. Cost savings and flexibility",
  },
  {
    id: 96,
    topic: "Cloud Case Studies",
    question: "Which company is known for its hybrid cloud approach?",
    options: [
      { label: "A", text: "Azure" },
      { label: "B", text: "AWS" },
      { label: "C", text: "Google Cloud" },
      { label: "D", text: "IBM Cloud" },
    ],
    answer: "D. IBM Cloud",
  },

  // ----- Cloud Certifications (6) -----
  {
    id: 97,
    topic: "Cloud Certifications",
    question: "Which certification is for AWS cloud practitioners?",
    options: [
      { label: "A", text: "AWS Certified Cloud Practitioner" },
      { label: "B", text: "AWS Certified Solutions Architect" },
      { label: "C", text: "AWS Certified Developer" },
      { label: "D", text: "AWS Certified SysOps Administrator" },
    ],
    answer: "A. AWS Certified Cloud Practitioner",
  },
  {
    id: 98,
    topic: "Cloud Certifications",
    question: "Which certification is for Azure fundamentals?",
    options: [
      { label: "A", text: "Microsoft Certified: Azure Fundamentals" },
      { label: "B", text: "Microsoft Certified: Azure Administrator" },
      { label: "C", text: "Microsoft Certified: Azure Developer" },
      { label: "D", text: "Microsoft Certified: Azure Solutions Architect" },
    ],
    answer: "A. Microsoft Certified: Azure Fundamentals",
  },
  {
    id: 99,
    topic: "Cloud Certifications",
    question: "Which certification is for Google Cloud fundamentals?",
    options: [
      { label: "A", text: "Google Cloud Certified: Cloud Digital Leader" },
      { label: "B", text: "Google Cloud Certified: Professional Cloud Architect" },
      { label: "C", text: "Google Cloud Certified: Associate Cloud Engineer" },
      { label: "D", text: "Google Cloud Certified: Cloud Developer" },
    ],
    answer: "A. Google Cloud Certified: Cloud Digital Leader",
  },
  {
    id: 100,
    topic: "Cloud Certifications",
    question: "What is the benefit of cloud certifications?",
    options: [
      { label: "A", text: "Career advancement" },
      { label: "B", text: "Demonstrating expertise" },
      { label: "C", text: "Higher salary" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 101,
    topic: "Cloud Certifications",
    question: "Which certification is recommended for cloud architects?",
    options: [
      { label: "A", text: "AWS Certified Solutions Architect – Associate" },
      { label: "B", text: "Azure Solutions Architect Expert" },
      { label: "C", text: "Google Professional Cloud Architect" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 102,
    topic: "Cloud Certifications",
    question: "What is a prerequisite for most associate-level cloud certifications?",
    options: [
      { label: "A", text: "Experience with the cloud platform" },
      { label: "B", text: "No prerequisites" },
      { label: "C", text: "A degree in computer science" },
      { label: "D", text: "Previous certification" },
    ],
    answer: "A. Experience with the cloud platform",
  },

  // ----- Emerging Cloud Technologies (6) -----
  {
    id: 103,
    topic: "Emerging Technologies",
    question: "What is edge computing?",
    options: [
      { label: "A", text: "Processing data near the source of data generation" },
      { label: "B", text: "Processing data in a central cloud" },
      { label: "C", text: "Processing data on mobile devices" },
      { label: "D", text: "Processing data on servers" },
    ],
    answer: "A. Processing data near the source of data generation",
  },
  {
    id: 104,
    topic: "Emerging Technologies",
    question: "What is quantum computing in the cloud?",
    options: [
      { label: "A", text: "Cloud-based access to quantum computers" },
      { label: "B", text: "Classical computing" },
      { label: "C", text: "High-performance computing" },
      { label: "D", text: "Data storage" },
    ],
    answer: "A. Cloud-based access to quantum computers",
  },
  {
    id: 105,
    topic: "Emerging Technologies",
    question: "Which cloud provider offers quantum computing services?",
    options: [
      { label: "A", text: "AWS (Braket)" },
      { label: "B", text: "Azure (Quantum)" },
      { label: "C", text: "Google (Quantum AI)" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 106,
    topic: "Emerging Technologies",
    question: "What is a cloud-native application?",
    options: [
      { label: "A", text: "An application designed specifically for cloud environments" },
      { label: "B", text: "An application migrated to the cloud" },
      { label: "C", text: "An application that uses on-premises resources" },
      { label: "D", text: "An application without containers" },
    ],
    answer: "A. An application designed specifically for cloud environments",
  },
  {
    id: 107,
    topic: "Emerging Technologies",
    question: "What is a service mesh?",
    options: [
      { label: "A", text: "A dedicated infrastructure layer for service-to-service communication" },
      { label: "B", text: "A type of load balancer" },
      { label: "C", text: "A storage service" },
      { label: "D", text: "A networking service" },
    ],
    answer: "A. A dedicated infrastructure layer for service-to-service communication",
  },
  {
    id: 108,
    topic: "Emerging Technologies",
    question: "What is the role of AI in cloud computing?",
    options: [
      { label: "A", text: "To provide AI services like machine learning and natural language processing" },
      { label: "B", text: "To manage physical servers" },
      { label: "C", text: "To replace human workers" },
      { label: "D", text: "To reduce cloud costs" },
    ],
    answer: "A. To provide AI services like machine learning and natural language processing",
  },

  // ----- More MCQs (12 more to reach 120) -----
  {
    id: 109,
    topic: "Cloud Basics",
    question: "What is resource pooling in cloud computing?",
    options: [
      { label: "A", text: "Combining physical and virtual resources to serve multiple consumers" },
      { label: "B", text: "Allocating dedicated resources to each user" },
      { label: "C", text: "Using only physical resources" },
      { label: "D", text: "Limiting access to resources" },
    ],
    answer: "A. Combining physical and virtual resources to serve multiple consumers",
  },
  {
    id: 110,
    topic: "Cloud Basics",
    question: "What is the main characteristic of public cloud?",
    options: [
      { label: "A", text: "Open to the public over the internet" },
      { label: "B", text: "Only accessible to a single organization" },
      { label: "C", text: "Shared among a limited group" },
      { label: "D", text: "Accessible only via VPN" },
    ],
    answer: "A. Open to the public over the internet",
  },
  {
    id: 111,
    topic: "Service Models",
    question: "Which service model provides a platform for developers to build applications?",
    options: [
      { label: "A", text: "PaaS" },
      { label: "B", text: "IaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "DaaS" },
    ],
    answer: "A. PaaS",
  },
  {
    id: 112,
    topic: "Service Models",
    question: "Which service model is most similar to traditional on-premises hosting?",
    options: [
      { label: "A", text: "IaaS" },
      { label: "B", text: "PaaS" },
      { label: "C", text: "SaaS" },
      { label: "D", text: "None" },
    ],
    answer: "A. IaaS",
  },
  {
    id: 113,
    topic: "Cloud Security",
    question: "What is the shared responsibility model in IaaS?",
    options: [
      { label: "A", text: "Provider manages infrastructure; customer manages OS, applications, and data" },
      { label: "B", text: "Provider manages everything" },
      { label: "C", text: "Customer manages everything" },
      { label: "D", text: "Security is not shared" },
    ],
    answer: "A. Provider manages infrastructure; customer manages OS, applications, and data",
  },
  {
    id: 114,
    topic: "Cloud Security",
    question: "What is a common method to secure cloud data?",
    options: [
      { label: "A", text: "Encryption" },
      { label: "B", text: "Access control" },
      { label: "C", text: "Monitoring" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 115,
    topic: "AWS",
    question: "Which AWS service is used for relational databases?",
    options: [
      { label: "A", text: "RDS" },
      { label: "B", text: "DynamoDB" },
      { label: "C", text: "Redshift" },
      { label: "D", text: "ElastiCache" },
    ],
    answer: "A. RDS",
  },
  {
    id: 116,
    topic: "Azure",
    question: "Which Azure service is used for noSQL databases?",
    options: [
      { label: "A", text: "Azure Cosmos DB" },
      { label: "B", text: "Azure SQL Database" },
      { label: "C", text: "Azure MySQL" },
      { label: "D", text: "Azure PostgreSQL" },
    ],
    answer: "A. Azure Cosmos DB",
  },
  {
    id: 117,
    topic: "GCP",
    question: "Which GCP service is used for NoSQL databases?",
    options: [
      { label: "A", text: "Cloud Firestore" },
      { label: "B", text: "Cloud SQL" },
      { label: "C", text: "BigQuery" },
      { label: "D", text: "Cloud Spanner" },
    ],
    answer: "A. Cloud Firestore",
  },
  {
    id: 118,
    topic: "Containers & Orchestration",
    question: "What is the difference between a container and a virtual machine?",
    options: [
      { label: "A", text: "Containers share the host OS, VMs have their own OS" },
      { label: "B", text: "VMs are lighter than containers" },
      { label: "C", text: "Containers are more secure" },
      { label: "D", text: "There is no difference" },
    ],
    answer: "A. Containers share the host OS, VMs have their own OS",
  },
  {
    id: 119,
    topic: "Serverless",
    question: "What is a function-as-a-service (FaaS)?",
    options: [
      { label: "A", text: "A serverless computing model where code is executed in response to events" },
      { label: "B", text: "A type of IaaS" },
      { label: "C", text: "A type of SaaS" },
      { label: "D", text: "A storage service" },
    ],
    answer: "A. A serverless computing model where code is executed in response to events",
  },
  {
    id: 120,
    topic: "Cloud Management & DevOps",
    question: "What is the purpose of CloudWatch in AWS?",
    options: [
      { label: "A", text: "Monitoring and observability of AWS resources" },
      { label: "B", text: "Storage service" },
      { label: "C", text: "Compute service" },
      { label: "D", text: "Networking service" },
    ],
    answer: "A. Monitoring and observability of AWS resources",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is Cloud Computing?",
    answer:
      "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the internet ('the cloud') to offer faster innovation, flexible resources, and economies of scale.",
  },
  {
    question: "Why should I practice Cloud Computing MCQs?",
    answer:
      "Practicing Cloud MCQs helps prepare for cloud certification exams, technical interviews, and placement tests. It reinforces understanding of cloud concepts, service models, deployment models, security, and major providers.",
  },
  {
    question: "What are the key topics in Cloud Computing?",
    answer:
      "Key topics include Cloud Basics, Service Models (IaaS, PaaS, SaaS), Deployment Models, Virtualization, Cloud Security, Major Providers (AWS, Azure, GCP), Containers, Serverless, Storage, Networking, DevOps, Migration, Economics, and Emerging Technologies.",
  },
  {
    question: "How can I prepare for cloud computing interviews?",
    answer:
      "Start with fundamentals, practice MCQs, gain hands-on experience with a cloud provider, understand architectural best practices, and review common interview questions and case studies.",
  },
  {
    question: "Which cloud certification should I start with?",
    answer:
      "Begin with a foundational certification like AWS Certified Cloud Practitioner, Microsoft Azure Fundamentals, or Google Cloud Digital Leader. Then progress to associate or professional-level certifications.",
  },
  {
    question: "What is the future of cloud computing?",
    answer:
      "Cloud computing continues to evolve with trends like serverless, edge computing, AI/ML integration, multi-cloud strategies, and improved security. It will remain a cornerstone of digital transformation.",
  },
];

// ========================== COMPONENT ==========================
export default function CloudMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/cloud-mcq",
        "url": "https://CodeSkipper.in/mcq/cloud-mcq",
        "name": "Cloud Computing Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Cloud Computing, covering basics, service models, providers, security, and more.",
        "about": { "@type": "Thing", "name": "Cloud Computing MCQ" },
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
              "name": "Cloud Computing",
              "item": "https://CodeSkipper.in/mcq/cloud-mcq",
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
        "@id": "https://CodeSkipper.in/mcq/cloud-mcq#course",
        "name": "Cloud Computing MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Cloud Computing exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Cloud Computing" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/cloud-mcq#faq",
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
        <title>Cloud Computing MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Cloud Computing multiple-choice questions with answers. Covers IaaS, PaaS, SaaS, AWS, Azure, GCP, security, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Cloud Computing, MCQs, Cloud MCQ, IaaS, PaaS, SaaS, AWS, Azure, GCP, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/cloud-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/cloud-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/cloud-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/cloud-mcq" />
        <meta property="og:title" content="Cloud Computing MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Cloud Computing multiple-choice questions covering IaaS, PaaS, SaaS, AWS, Azure, GCP, security, and more."
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
        <meta name="twitter:title" content="Cloud Computing MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Cloud Computing multiple-choice questions covering IaaS, PaaS, SaaS, AWS, Azure, GCP, security, and more."
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
              Cloud Computing <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Cloud Computing with 120+ curated MCQs covering IaaS, PaaS, SaaS, AWS,
              Azure, GCP, security, and more. Perfect for exams, interviews, and certification prep.
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

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore Cloud Computing Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
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
                <strong className="text-blue-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
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
            Cloud Computing MCQs
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
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions found for this topic.</p>
              <button
                onClick={() => setSelectedTopic(null)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
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