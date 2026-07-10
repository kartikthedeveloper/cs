import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Computer Basics (6) -----
  {
    id: 1,
    topic: "Computer Basics",
    question: "The basic operations performed by a computer are:",
    options: [
      { label: "A", text: "Arithmetic operation" },
      { label: "B", text: "Logical operation" },
      { label: "C", text: "Storage and retrieval" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 2,
    topic: "Computer Basics",
    question: "The two major types of computer chips are:",
    options: [
      { label: "A", text: "External memory chips" },
      { label: "B", text: "Primary memory chips" },
      { label: "C", text: "Microprocessor chips" },
      { label: "D", text: "Both B and C" },
    ],
    answer: "D. Both B and C",
  },
  {
    id: 3,
    topic: "Computer Basics",
    question: "The brain of any computer system is:",
    options: [
      { label: "A", text: "ALU" },
      { label: "B", text: "Memory" },
      { label: "C", text: "CPU" },
      { label: "D", text: "All of the above" },
    ],
    answer: "C. CPU",
  },
  {
    id: 4,
    topic: "Computer Basics",
    question: "Microprocessors as switching devices are for which generation computers?",
    options: [
      { label: "A", text: "First Generation" },
      { label: "B", text: "Second Generation" },
      { label: "C", text: "Third Generation" },
      { label: "D", text: "Fourth Generation" },
    ],
    answer: "D. Fourth Generation",
  },
  {
    id: 5,
    topic: "Computer Basics",
    question: "Storage capacity of magnetic disk depends on:",
    options: [
      { label: "A", text: "Tracks per inch surface" },
      { label: "B", text: "Bits per inch of tracks" },
      { label: "C", text: "Disk pack in disk surface" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 6,
    topic: "Computer Basics",
    question: "The two types of main memory are:",
    options: [
      { label: "A", text: "Primary and secondary" },
      { label: "B", text: "Random and sequential" },
      { label: "C", text: "RAM and ROM" },
      { label: "D", text: "All of the above" },
    ],
    answer: "C. RAM and ROM",
  },

  // ----- Computer Generations (6) -----
  {
    id: 7,
    topic: "Computer Generations",
    question: "Integrated circuits are related to which generation of computers?",
    options: [
      { label: "A", text: "First generation" },
      { label: "B", text: "Second generation" },
      { label: "C", text: "Third generation" },
      { label: "D", text: "Fourth generation" },
    ],
    answer: "C. Third generation",
  },
  {
    id: 8,
    topic: "Computer Generations",
    question: "What was the main component of first generation computers?",
    options: [
      { label: "A", text: "Transistors" },
      { label: "B", text: "Vacuum tubes and valves" },
      { label: "C", text: "Integrated circuits" },
      { label: "D", text: "Microprocessors" },
    ],
    answer: "B. Vacuum tubes and valves",
  },
  {
    id: 9,
    topic: "Computer Generations",
    question: "Which generation of computers used transistors?",
    options: [
      { label: "A", text: "First Generation" },
      { label: "B", text: "Second Generation" },
      { label: "C", text: "Third Generation" },
      { label: "D", text: "Fourth Generation" },
    ],
    answer: "B. Second Generation",
  },
  {
    id: 10,
    topic: "Computer Generations",
    question: "The use of microprocessors started in which generation?",
    options: [
      { label: "A", text: "Second Generation" },
      { label: "B", text: "Third Generation" },
      { label: "C", text: "Fourth Generation" },
      { label: "D", text: "Fifth Generation" },
    ],
    answer: "C. Fourth Generation",
  },
  {
    id: 11,
    topic: "Computer Generations",
    question: "Which generation computers used artificial intelligence concepts?",
    options: [
      { label: "A", text: "Third Generation" },
      { label: "B", text: "Fourth Generation" },
      { label: "C", text: "Fifth Generation" },
      { label: "D", text: "First Generation" },
    ],
    answer: "C. Fifth Generation",
  },
  {
    id: 12,
    topic: "Computer Generations",
    question: "The ENIAC computer belongs to which generation?",
    options: [
      { label: "A", text: "First Generation" },
      { label: "B", text: "Second Generation" },
      { label: "C", text: "Third Generation" },
      { label: "D", text: "Fourth Generation" },
    ],
    answer: "A. First Generation",
  },

  // ----- Memory & Storage (6) -----
  {
    id: 13,
    topic: "Memory & Storage",
    question: "CD-ROM is:",
    options: [
      { label: "A", text: "Semiconductor memory" },
      { label: "B", text: "Memory register" },
      { label: "C", text: "Magnetic memory" },
      { label: "D", text: "None of the above" },
    ],
    answer: "D. None of the above (CD-ROM is optical storage)",
  },
  {
    id: 14,
    topic: "Memory & Storage",
    question: "What is the smallest unit of memory?",
    options: [
      { label: "A", text: "Kilobyte" },
      { label: "B", text: "Byte" },
      { label: "C", text: "Bit" },
      { label: "D", text: "Nibble" },
    ],
    answer: "C. Bit",
  },
  {
    id: 15,
    topic: "Memory & Storage",
    question: "What is the full form of RAM?",
    options: [
      { label: "A", text: "Random Access Memory" },
      { label: "B", text: "Read Access Memory" },
      { label: "C", text: "Random Accurate Memory" },
      { label: "D", text: "Read Accurate Memory" },
    ],
    answer: "A. Random Access Memory",
  },
  {
    id: 16,
    topic: "Memory & Storage",
    question: "What is the full form of ROM?",
    options: [
      { label: "A", text: "Read Only Memory" },
      { label: "B", text: "Random Only Memory" },
      { label: "C", text: "Read Once Memory" },
      { label: "D", text: "Random Operation Memory" },
    ],
    answer: "A. Read Only Memory",
  },
  {
    id: 17,
    topic: "Memory & Storage",
    question: "What is cache memory?",
    options: [
      { label: "A", text: "High-speed memory between CPU and main memory" },
      { label: "B", text: "Secondary storage" },
      { label: "C", text: "Virtual memory" },
      { label: "D", text: "Flash memory" },
    ],
    answer: "A. High-speed memory between CPU and main memory",
  },
  {
    id: 18,
    topic: "Memory & Storage",
    question: "Which of the following is volatile memory?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "ROM" },
      { label: "C", text: "Hard Disk" },
      { label: "D", text: "CD-ROM" },
    ],
    answer: "A. RAM",
  },

  // ----- CPU & ALU (6) -----
  {
    id: 19,
    topic: "CPU & ALU",
    question: "The ALU of a computer responds to commands coming from:",
    options: [
      { label: "A", text: "Primary memory" },
      { label: "B", text: "Control section" },
      { label: "C", text: "External memory" },
      { label: "D", text: "Cache memory" },
    ],
    answer: "B. Control section",
  },
  {
    id: 20,
    topic: "CPU & ALU",
    question: "What does ALU stand for?",
    options: [
      { label: "A", text: "Arithmetic Logic Unit" },
      { label: "B", text: "Arithmetic Logical Unit" },
      { label: "C", text: "Assembly Logic Unit" },
      { label: "D", text: "Arithmetic Local Unit" },
    ],
    answer: "A. Arithmetic Logic Unit",
  },
  {
    id: 21,
    topic: "CPU & ALU",
    question: "Which component of the CPU controls the execution of instructions?",
    options: [
      { label: "A", text: "ALU" },
      { label: "B", text: "Control Unit" },
      { label: "C", text: "Registers" },
      { label: "D", text: "Cache" },
    ],
    answer: "B. Control Unit",
  },
  {
    id: 22,
    topic: "CPU & ALU",
    question: "What is the function of the ALU?",
    options: [
      { label: "A", text: "It performs arithmetic and logical operations" },
      { label: "B", text: "It controls the flow of data" },
      { label: "C", text: "It stores data temporarily" },
      { label: "D", text: "It manages memory" },
    ],
    answer: "A. It performs arithmetic and logical operations",
  },
  {
    id: 23,
    topic: "CPU & ALU",
    question: "Which register holds the address of the next instruction?",
    options: [
      { label: "A", text: "Program Counter" },
      { label: "B", text: "Instruction Register" },
      { label: "C", text: "Accumulator" },
      { label: "D", text: "Stack Pointer" },
    ],
    answer: "A. Program Counter",
  },
  {
    id: 24,
    topic: "CPU & ALU",
    question: "What is the role of the instruction register (IR)?",
    options: [
      { label: "A", text: "Holds the current instruction being executed" },
      { label: "B", text: "Holds the address of the next instruction" },
      { label: "C", text: "Holds the result of arithmetic operations" },
      { label: "D", text: "Holds the stack pointer" },
    ],
    answer: "A. Holds the current instruction being executed",
  },

  // ----- Input/Output Devices (6) -----
  {
    id: 25,
    topic: "Input/Output Devices",
    question: "To produce high-quality graphics in color, which would you use?",
    options: [
      { label: "A", text: "RGB Monitor" },
      { label: "B", text: "Plotter" },
      { label: "C", text: "InkJet Printer" },
      { label: "D", text: "Laser Printer" },
    ],
    answer: "B. Plotter",
  },
  {
    id: 26,
    topic: "Input/Output Devices",
    question: "Which of the following is an input device?",
    options: [
      { label: "A", text: "Monitor" },
      { label: "B", text: "Printer" },
      { label: "C", text: "Keyboard" },
      { label: "D", text: "Speaker" },
    ],
    answer: "C. Keyboard",
  },
  {
    id: 27,
    topic: "Input/Output Devices",
    question: "Which device is used to read OCR (Optical Character Recognition) characters?",
    options: [
      { label: "A", text: "Scanner" },
      { label: "B", text: "MICR" },
      { label: "C", text: "Barcode reader" },
      { label: "D", text: "Optical scanner" },
    ],
    answer: "A. Scanner",
  },
  {
    id: 28,
    topic: "Input/Output Devices",
    question: "What type of printer uses a toner cartridge?",
    options: [
      { label: "A", text: "Inkjet Printer" },
      { label: "B", text: "Laser Printer" },
      { label: "C", text: "Dot Matrix Printer" },
      { label: "D", text: "Thermal Printer" },
    ],
    answer: "B. Laser Printer",
  },
  {
    id: 29,
    topic: "Input/Output Devices",
    question: "Which display technology is commonly used in modern monitors?",
    options: [
      { label: "A", text: "CRT" },
      { label: "B", text: "LCD/LED" },
      { label: "C", text: "Plasma" },
      { label: "D", text: "OLED" },
    ],
    answer: "B. LCD/LED",
  },
  {
    id: 30,
    topic: "Input/Output Devices",
    question: "What is the function of a scanner?",
    options: [
      { label: "A", text: "To convert a physical document into digital image" },
      { label: "B", text: "To print documents" },
      { label: "C", text: "To display images" },
      { label: "D", text: "To store data" },
    ],
    answer: "A. To convert a physical document into digital image",
  },

  // ----- Number Systems (6) -----
  {
    id: 31,
    topic: "Number Systems",
    question: "What is the base of the binary number system?",
    options: [
      { label: "A", text: "2" },
      { label: "B", text: "8" },
      { label: "C", text: "10" },
      { label: "D", text: "16" },
    ],
    answer: "A. 2",
  },
  {
    id: 32,
    topic: "Number Systems",
    question: "What is the base of the octal number system?",
    options: [
      { label: "A", text: "2" },
      { label: "B", text: "8" },
      { label: "C", text: "10" },
      { label: "D", text: "16" },
    ],
    answer: "B. 8",
  },
  {
    id: 33,
    topic: "Number Systems",
    question: "What is the base of the hexadecimal number system?",
    options: [
      { label: "A", text: "2" },
      { label: "B", text: "8" },
      { label: "C", text: "10" },
      { label: "D", text: "16" },
    ],
    answer: "D. 16",
  },
  {
    id: 34,
    topic: "Number Systems",
    question: "What is the binary equivalent of decimal 10?",
    options: [
      { label: "A", text: "1010" },
      { label: "B", text: "1100" },
      { label: "C", text: "1000" },
      { label: "D", text: "1110" },
    ],
    answer: "A. 1010",
  },
  {
    id: 35,
    topic: "Number Systems",
    question: "What is the decimal equivalent of binary 1111?",
    options: [
      { label: "A", text: "15" },
      { label: "B", text: "16" },
      { label: "C", text: "14" },
      { label: "D", text: "13" },
    ],
    answer: "A. 15",
  },
  {
    id: 36,
    topic: "Number Systems",
    question: "What is the octal equivalent of binary 101101?",
    options: [
      { label: "A", text: "55" },
      { label: "B", text: "45" },
      { label: "C", text: "53" },
      { label: "D", text: "51" },
    ],
    answer: "A. 55",
  },

  // ----- Operating Systems (6) -----
  {
    id: 37,
    topic: "Operating Systems",
    question: "Which is the first program loaded into memory when a computer starts?",
    options: [
      { label: "A", text: "BIOS" },
      { label: "B", text: "Operating System" },
      { label: "C", text: "Boot Loader" },
      { label: "D", text: "Device Driver" },
    ],
    answer: "A. BIOS",
  },
  {
    id: 38,
    topic: "Operating Systems",
    question: "What is the main function of an operating system?",
    options: [
      { label: "A", text: "To manage hardware and software resources" },
      { label: "B", text: "To perform calculations" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To manage hardware and software resources",
  },
  {
    id: 39,
    topic: "Operating Systems",
    question: "Which of the following is a type of operating system?",
    options: [
      { label: "A", text: "Windows" },
      { label: "B", text: "Linux" },
      { label: "C", text: "macOS" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 40,
    topic: "Operating Systems",
    question: "What is a process in an operating system?",
    options: [
      { label: "A", text: "A program in execution" },
      { label: "B", text: "A file stored on disk" },
      { label: "C", text: "A device driver" },
      { label: "D", text: "A memory location" },
    ],
    answer: "A. A program in execution",
  },
  {
    id: 41,
    topic: "Operating Systems",
    question: "What is the kernel of an operating system?",
    options: [
      { label: "A", text: "The core part that manages system resources" },
      { label: "B", text: "The user interface" },
      { label: "C", text: "The file system" },
      { label: "D", text: "The compiler" },
    ],
    answer: "A. The core part that manages system resources",
  },
  {
    id: 42,
    topic: "Operating Systems",
    question: "What is virtual memory?",
    options: [
      { label: "A", text: "Memory that uses a hard disk as extended RAM" },
      { label: "B", text: "Cache memory" },
      { label: "C", text: "ROM memory" },
      { label: "D", text: "Flash memory" },
    ],
    answer: "A. Memory that uses a hard disk as extended RAM",
  },

  // ----- Software Types (6) -----
  {
    id: 43,
    topic: "Software Types",
    question: "What is system software?",
    options: [
      { label: "A", text: "Software that runs the computer hardware" },
      { label: "B", text: "Software that performs specific tasks for users" },
      { label: "C", text: "Software used for games" },
      { label: "D", text: "Software used for office work" },
    ],
    answer: "A. Software that runs the computer hardware",
  },
  {
    id: 44,
    topic: "Software Types",
    question: "What is application software?",
    options: [
      { label: "A", text: "Software that performs specific tasks for users" },
      { label: "B", text: "Software that manages the computer" },
      { label: "C", text: "Software that is written in machine language" },
      { label: "D", text: "Software that is not needed" },
    ],
    answer: "A. Software that performs specific tasks for users",
  },
  {
    id: 45,
    topic: "Software Types",
    question: "Which of the following is an example of system software?",
    options: [
      { label: "A", text: "Microsoft Word" },
      { label: "B", text: "Windows 10" },
      { label: "C", text: "Google Chrome" },
      { label: "D", text: "Adobe Photoshop" },
    ],
    answer: "B. Windows 10",
  },
  {
    id: 46,
    topic: "Software Types",
    question: "What is a compiler?",
    options: [
      { label: "A", text: "A program that translates high-level code to machine code" },
      { label: "B", text: "A program that interprets code line by line" },
      { label: "C", text: "A program that organizes files" },
      { label: "D", text: "A program that manages memory" },
    ],
    answer: "A. A program that translates high-level code to machine code",
  },
  {
    id: 47,
    topic: "Software Types",
    question: "What is an interpreter?",
    options: [
      { label: "A", text: "A program that translates and executes high-level code line by line" },
      { label: "B", text: "A program that compiles all code at once" },
      { label: "C", text: "A program that manages files" },
      { label: "D", text: "A program that updates software" },
    ],
    answer: "A. A program that translates and executes high-level code line by line",
  },
  {
    id: 48,
    topic: "Software Types",
    question: "What is open-source software?",
    options: [
      { label: "A", text: "Software with source code freely available" },
      { label: "B", text: "Software that is free of cost" },
      { label: "C", text: "Software that is licensed" },
      { label: "D", text: "Software that is used only by developers" },
    ],
    answer: "A. Software with source code freely available",
  },

  // ----- Computer Networks (6) -----
  {
    id: 49,
    topic: "Computer Networks",
    question: "What is a computer network?",
    options: [
      { label: "A", text: "A group of interconnected computers" },
      { label: "B", text: "A single computer with multiple users" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A peripheral device" },
    ],
    answer: "A. A group of interconnected computers",
  },
  {
    id: 50,
    topic: "Computer Networks",
    question: "What is the full form of LAN?",
    options: [
      { label: "A", text: "Local Area Network" },
      { label: "B", text: "Large Area Network" },
      { label: "C", text: "Long Area Network" },
      { label: "D", text: "Limited Area Network" },
    ],
    answer: "A. Local Area Network",
  },
  {
    id: 51,
    topic: "Computer Networks",
    question: "What is the full form of WAN?",
    options: [
      { label: "A", text: "Wide Area Network" },
      { label: "B", text: "Wireless Area Network" },
      { label: "C", text: "Wired Area Network" },
      { label: "D", text: "World Area Network" },
    ],
    answer: "A. Wide Area Network",
  },
  {
    id: 52,
    topic: "Computer Networks",
    question: "What is a protocol?",
    options: [
      { label: "A", text: "A set of rules for communication between devices" },
      { label: "B", text: "A hardware component" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A storage device" },
    ],
    answer: "A. A set of rules for communication between devices",
  },
  {
    id: 53,
    topic: "Computer Networks",
    question: "What does IP stand for?",
    options: [
      { label: "A", text: "Internet Protocol" },
      { label: "B", text: "Internal Protocol" },
      { label: "C", text: "Integrated Protocol" },
      { label: "D", text: "Information Protocol" },
    ],
    answer: "A. Internet Protocol",
  },
  {
    id: 54,
    topic: "Computer Networks",
    question: "What is the function of a router?",
    options: [
      { label: "A", text: "To forward data packets between networks" },
      { label: "B", text: "To connect computers in a LAN" },
      { label: "C", text: "To store network data" },
      { label: "D", text: "To display network traffic" },
    ],
    answer: "A. To forward data packets between networks",
  },

  // ----- Internet & WWW (6) -----
  {
    id: 55,
    topic: "Internet & WWW",
    question: "What is the Internet?",
    options: [
      { label: "A", text: "A global network of interconnected computers" },
      { label: "B", text: "A single computer" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A search engine" },
    ],
    answer: "A. A global network of interconnected computers",
  },
  {
    id: 56,
    topic: "Internet & WWW",
    question: "What does WWW stand for?",
    options: [
      { label: "A", text: "World Wide Web" },
      { label: "B", text: "World Wide Work" },
      { label: "C", text: "Web World Wide" },
      { label: "D", text: "World Web Wide" },
    ],
    answer: "A. World Wide Web",
  },
  {
    id: 57,
    topic: "Internet & WWW",
    question: "What is a web browser?",
    options: [
      { label: "A", text: "Software used to access the internet" },
      { label: "B", text: "A search engine" },
      { label: "C", text: "A type of server" },
      { label: "D", text: "A network cable" },
    ],
    answer: "A. Software used to access the internet",
  },
  {
    id: 58,
    topic: "Internet & WWW",
    question: "What is a URL?",
    options: [
      { label: "A", text: "Uniform Resource Locator" },
      { label: "B", text: "Universal Resource Locator" },
      { label: "C", text: "Uniform Resource Link" },
      { label: "D", text: "Universal Resource Link" },
    ],
    answer: "A. Uniform Resource Locator",
  },
  {
    id: 59,
    topic: "Internet & WWW",
    question: "What is HTML?",
    options: [
      { label: "A", text: "HyperText Markup Language" },
      { label: "B", text: "HyperText Machine Language" },
      { label: "C", text: "High-Level Text Markup Language" },
      { label: "D", text: "Hyper Transfer Markup Language" },
    ],
    answer: "A. HyperText Markup Language",
  },
  {
    id: 60,
    topic: "Internet & WWW",
    question: "What is a search engine?",
    options: [
      { label: "A", text: "A tool to search for information on the internet" },
      { label: "B", text: "A web browser" },
      { label: "C", text: "A type of network" },
      { label: "D", text: "A server" },
    ],
    answer: "A. A tool to search for information on the internet",
  },

  // ----- Computer Viruses & Security (6) -----
  {
    id: 61,
    topic: "Security & Viruses",
    question: "What is a computer virus?",
    options: [
      { label: "A", text: "A program that replicates itself and causes harm" },
      { label: "B", text: "A hardware failure" },
      { label: "C", text: "A type of application" },
      { label: "D", text: "A network error" },
    ],
    answer: "A. A program that replicates itself and causes harm",
  },
  {
    id: 62,
    topic: "Security & Viruses",
    question: "What is an antivirus program?",
    options: [
      { label: "A", text: "Software that detects and removes viruses" },
      { label: "B", text: "A program that creates viruses" },
      { label: "C", text: "A hardware device" },
      { label: "D", text: "A firewall" },
    ],
    answer: "A. Software that detects and removes viruses",
  },
  {
    id: 63,
    topic: "Security & Viruses",
    question: "What is a firewall?",
    options: [
      { label: "A", text: "A security system that controls network traffic" },
      { label: "B", text: "A physical wall" },
      { label: "C", text: "A type of virus" },
      { label: "D", text: "An antivirus program" },
    ],
    answer: "A. A security system that controls network traffic",
  },
  {
    id: 64,
    topic: "Security & Viruses",
    question: "What is phishing?",
    options: [
      { label: "A", text: "A cyber attack that uses fake emails to steal information" },
      { label: "B", text: "A type of virus" },
      { label: "C", text: "A hardware failure" },
      { label: "D", text: "A network protocol" },
    ],
    answer: "A. A cyber attack that uses fake emails to steal information",
  },
  {
    id: 65,
    topic: "Security & Viruses",
    question: "What is malware?",
    options: [
      { label: "A", text: "Malicious software designed to damage or compromise a system" },
      { label: "B", text: "A type of hardware" },
      { label: "C", text: "A network device" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. Malicious software designed to damage or compromise a system",
  },
  {
    id: 66,
    topic: "Security & Viruses",
    question: "What is a strong password?",
    options: [
      { label: "A", text: "A long password with uppercase, lowercase, numbers, and symbols" },
      { label: "B", text: "A short password" },
      { label: "C", text: "A password using only numbers" },
      { label: "D", text: "A password using only letters" },
    ],
    answer: "A. A long password with uppercase, lowercase, numbers, and symbols",
  },

  // ----- Data Representation (6) -----
  {
    id: 67,
    topic: "Data Representation",
    question: "What is a bit?",
    options: [
      { label: "A", text: "The smallest unit of data" },
      { label: "B", text: "A byte" },
      { label: "C", text: "A kilobyte" },
      { label: "D", text: "A megabyte" },
    ],
    answer: "A. The smallest unit of data",
  },
  {
    id: 68,
    topic: "Data Representation",
    question: "How many bytes are in a kilobyte?",
    options: [
      { label: "A", text: "1024" },
      { label: "B", text: "1000" },
      { label: "C", text: "512" },
      { label: "D", text: "2048" },
    ],
    answer: "A. 1024",
  },
  {
    id: 69,
    topic: "Data Representation",
    question: "What is a nibble?",
    options: [
      { label: "A", text: "4 bits" },
      { label: "B", text: "8 bits" },
      { label: "C", text: "16 bits" },
      { label: "D", text: "32 bits" },
    ],
    answer: "A. 4 bits",
  },
  {
    id: 70,
    topic: "Data Representation",
    question: "What is ASCII?",
    options: [
      { label: "A", text: "A character encoding standard" },
      { label: "B", text: "A type of printer" },
      { label: "C", text: "A network protocol" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. A character encoding standard",
  },
  {
    id: 71,
    topic: "Data Representation",
    question: "What is Unicode?",
    options: [
      { label: "A", text: "A universal character encoding standard" },
      { label: "B", text: "A type of database" },
      { label: "C", text: "A programming language" },
      { label: "D", text: "A network protocol" },
    ],
    answer: "A. A universal character encoding standard",
  },
  {
    id: 72,
    topic: "Data Representation",
    question: "What is the binary representation of decimal 5?",
    options: [
      { label: "A", text: "101" },
      { label: "B", text: "100" },
      { label: "C", text: "110" },
      { label: "D", text: "111" },
    ],
    answer: "A. 101",
  },

  // ----- Computer Hardware (6) -----
  {
    id: 73,
    topic: "Computer Hardware",
    question: "What is a motherboard?",
    options: [
      { label: "A", text: "The main circuit board of a computer" },
      { label: "B", text: "A storage device" },
      { label: "C", text: "An input device" },
      { label: "D", text: "A display unit" },
    ],
    answer: "A. The main circuit board of a computer",
  },
  {
    id: 74,
    topic: "Computer Hardware",
    question: "What is a power supply unit (PSU)?",
    options: [
      { label: "A", text: "Converts AC to DC power for the computer" },
      { label: "B", text: "Stores data" },
      { label: "C", text: "Processes data" },
      { label: "D", text: "Displays output" },
    ],
    answer: "A. Converts AC to DC power for the computer",
  },
  {
    id: 75,
    topic: "Computer Hardware",
    question: "What is a graphics card?",
    options: [
      { label: "A", text: "A component that renders images and video" },
      { label: "B", text: "A storage device" },
      { label: "C", text: "A network adapter" },
      { label: "D", text: "A sound card" },
    ],
    answer: "A. A component that renders images and video",
  },
  {
    id: 76,
    topic: "Computer Hardware",
    question: "What is a hard disk drive (HDD)?",
    options: [
      { label: "A", text: "A magnetic storage device" },
      { label: "B", text: "A solid-state drive" },
      { label: "C", text: "A RAM module" },
      { label: "D", text: "A processor" },
    ],
    answer: "A. A magnetic storage device",
  },
  {
    id: 77,
    topic: "Computer Hardware",
    question: "What is SSD (Solid State Drive)?",
    options: [
      { label: "A", text: "A fast storage device using flash memory" },
      { label: "B", text: "A magnetic storage device" },
      { label: "C", text: "A type of RAM" },
      { label: "D", text: "A processor" },
    ],
    answer: "A. A fast storage device using flash memory",
  },
  {
    id: 78,
    topic: "Computer Hardware",
    question: "What is the function of a network interface card (NIC)?",
    options: [
      { label: "A", text: "To connect a computer to a network" },
      { label: "B", text: "To display graphics" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To connect a computer to a network",
  },

  // ----- Computer Characteristics (6) -----
  {
    id: 79,
    topic: "Computer Characteristics",
    question: "Computers are free from fatigue and boredom. What is this characteristic called?",
    options: [
      { label: "A", text: "Accuracy" },
      { label: "B", text: "Reliability" },
      { label: "C", text: "Diligence" },
      { label: "D", text: "Versatility" },
    ],
    answer: "C. Diligence",
  },
  {
    id: 80,
    topic: "Computer Characteristics",
    question: "The ability of a computer to perform a wide variety of tasks is called:",
    options: [
      { label: "A", text: "Accuracy" },
      { label: "B", text: "Reliability" },
      { label: "C", text: "Diligence" },
      { label: "D", text: "Versatility" },
    ],
    answer: "D. Versatility",
  },
  {
    id: 81,
    topic: "Computer Characteristics",
    question: "What is the characteristic that allows computers to produce error-free results?",
    options: [
      { label: "A", text: "Accuracy" },
      { label: "B", text: "Speed" },
      { label: "C", text: "Storage" },
      { label: "D", text: "Versatility" },
    ],
    answer: "A. Accuracy",
  },
  {
    id: 82,
    topic: "Computer Characteristics",
    question: "The speed of a computer is measured in:",
    options: [
      { label: "A", text: "MIPS (Millions of Instructions Per Second)" },
      { label: "B", text: "MBps (Megabytes per second)" },
      { label: "C", text: "GHz (Gigahertz)" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 83,
    topic: "Computer Characteristics",
    question: "The ability to store large amounts of data and retrieve it quickly is a characteristic called:",
    options: [
      { label: "A", text: "Storage capacity" },
      { label: "B", text: "Speed" },
      { label: "C", text: "Versatility" },
      { label: "D", text: "Reliability" },
    ],
    answer: "A. Storage capacity",
  },
  {
    id: 84,
    topic: "Computer Characteristics",
    question: "A computer's ability to work continuously without errors is known as:",
    options: [
      { label: "A", text: "Reliability" },
      { label: "B", text: "Accuracy" },
      { label: "C", text: "Diligence" },
      { label: "D", text: "Versatility" },
    ],
    answer: "A. Reliability",
  },

  // ----- More MCQs to reach 120 (36 more) -----
  {
    id: 85,
    topic: "Computer Basics",
    question: "A hybrid computer:",
    options: [
      { label: "A", text: "Resembles a digital computer" },
      { label: "B", text: "Resembles an analogue computer" },
      { label: "C", text: "Resembles both digital and analogue computers" },
      { label: "D", text: "None of the above" },
    ],
    answer: "C. Resembles both digital and analogue computers",
  },
  {
    id: 86,
    topic: "Computer Basics",
    question: "Which type of computer uses the 8-bit code called EBCDIC?",
    options: [
      { label: "A", text: "Mini computer" },
      { label: "B", text: "Micro computer" },
      { label: "C", text: "Mainframe computer" },
      { label: "D", text: "Super computer" },
    ],
    answer: "C. Mainframe computer",
  },
  {
    id: 87,
    topic: "Memory & Storage",
    question: "A storage area used to store data to compensate for the difference in speed at which different units can handle data is:",
    options: [
      { label: "A", text: "Memory" },
      { label: "B", text: "Buffer" },
      { label: "C", text: "Accumulator" },
      { label: "D", text: "Address" },
    ],
    answer: "B. Buffer",
  },
  {
    id: 88,
    topic: "Memory & Storage",
    question: "Which of the following is a non-volatile memory?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "ROM" },
      { label: "C", text: "Cache" },
      { label: "D", text: "Register" },
    ],
    answer: "B. ROM",
  },
  {
    id: 89,
    topic: "CPU & ALU",
    question: "What is the function of the accumulator?",
    options: [
      { label: "A", text: "Stores intermediate results" },
      { label: "B", text: "Holds the address of next instruction" },
      { label: "C", text: "Manages data flow" },
      { label: "D", text: "Performs logical operations" },
    ],
    answer: "A. Stores intermediate results",
  },
  {
    id: 90,
    topic: "CPU & ALU",
    question: "What is the machine cycle?",
    options: [
      { label: "A", text: "Fetch-Decode-Execute cycle" },
      { label: "B", text: "Read-Write cycle" },
      { label: "C", text: "Input-Output cycle" },
      { label: "D", text: "Start-Stop cycle" },
    ],
    answer: "A. Fetch-Decode-Execute cycle",
  },
  {
    id: 91,
    topic: "Input/Output Devices",
    question: "Which device is used to print large engineering drawings?",
    options: [
      { label: "A", text: "Laser printer" },
      { label: "B", text: "Inkjet printer" },
      { label: "C", text: "Plotter" },
      { label: "D", text: "Dot matrix printer" },
    ],
    answer: "C. Plotter",
  },
  {
    id: 92,
    topic: "Input/Output Devices",
    question: "What is the most common input device for gaming?",
    options: [
      { label: "A", text: "Mouse" },
      { label: "B", text: "Keyboard" },
      { label: "C", text: "Joystick" },
      { label: "D", text: "Scanner" },
    ],
    answer: "C. Joystick",
  },
  {
    id: 93,
    topic: "Number Systems",
    question: "What is the binary equivalent of octal 17?",
    options: [
      { label: "A", text: "1111" },
      { label: "B", text: "1110" },
      { label: "C", text: "1101" },
      { label: "D", text: "1011" },
    ],
    answer: "A. 1111",
  },
  {
    id: 94,
    topic: "Number Systems",
    question: "What is the decimal equivalent of hexadecimal 2F?",
    options: [
      { label: "A", text: "47" },
      { label: "B", text: "48" },
      { label: "C", text: "49" },
      { label: "D", text: "50" },
    ],
    answer: "A. 47",
  },
  {
    id: 95,
    topic: "Operating Systems",
    question: "What is a real-time operating system (RTOS)?",
    options: [
      { label: "A", text: "An OS that responds to events within a guaranteed time frame" },
      { label: "B", text: "An OS that is used for batch processing" },
      { label: "C", text: "An OS that is used for mobile devices" },
      { label: "D", text: "An OS that is used for gaming" },
    ],
    answer: "A. An OS that responds to events within a guaranteed time frame",
  },
  {
    id: 96,
    topic: "Operating Systems",
    question: "What is a file system?",
    options: [
      { label: "A", text: "A method of organizing and storing files on a storage device" },
      { label: "B", text: "A type of database" },
      { label: "C", text: "A network protocol" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. A method of organizing and storing files on a storage device",
  },
  {
    id: 97,
    topic: "Software Types",
    question: "What is proprietary software?",
    options: [
      { label: "A", text: "Software that is owned by a company and has restrictive licensing" },
      { label: "B", text: "Free software" },
      { label: "C", text: "Open-source software" },
      { label: "D", text: "Public domain software" },
    ],
    answer: "A. Software that is owned by a company and has restrictive licensing",
  },
  {
    id: 98,
    topic: "Software Types",
    question: "Which of the following is a utility program?",
    options: [
      { label: "A", text: "Disk defragmenter" },
      { label: "B", text: "Word processor" },
      { label: "C", text: "Spreadsheet" },
      { label: "D", text: "Database" },
    ],
    answer: "A. Disk defragmenter",
  },
  {
    id: 99,
    topic: "Computer Networks",
    question: "What is a MAC address?",
    options: [
      { label: "A", text: "A unique hardware identifier for network interfaces" },
      { label: "B", text: "An IP address" },
      { label: "C", text: "A software address" },
      { label: "D", text: "A domain name" },
    ],
    answer: "A. A unique hardware identifier for network interfaces",
  },
  {
    id: 100,
    topic: "Computer Networks",
    question: "What is the OSI model?",
    options: [
      { label: "A", text: "A reference model for network communication" },
      { label: "B", text: "A type of network device" },
      { label: "C", text: "A protocol" },
      { label: "D", text: "A programming model" },
    ],
    answer: "A. A reference model for network communication",
  },
  {
    id: 101,
    topic: "Internet & WWW",
    question: "What is a domain name?",
    options: [
      { label: "A", text: "A human-readable name that identifies a website" },
      { label: "B", text: "An IP address" },
      { label: "C", text: "A server name" },
      { label: "D", text: "A file name" },
    ],
    answer: "A. A human-readable name that identifies a website",
  },
  {
    id: 102,
    topic: "Internet & WWW",
    question: "What is the function of DNS?",
    options: [
      { label: "A", text: "To translate domain names to IP addresses" },
      { label: "B", text: "To assign IP addresses" },
      { label: "C", text: "To manage network traffic" },
      { label: "D", text: "To encrypt data" },
    ],
    answer: "A. To translate domain names to IP addresses",
  },
  {
    id: 103,
    topic: "Security & Viruses",
    question: "What is ransomware?",
    options: [
      { label: "A", text: "Malware that encrypts files and demands payment" },
      { label: "B", text: "A type of virus" },
      { label: "C", text: "A hardware failure" },
      { label: "D", text: "A network attack" },
    ],
    answer: "A. Malware that encrypts files and demands payment",
  },
  {
    id: 104,
    topic: "Security & Viruses",
    question: "What is two-factor authentication (2FA)?",
    options: [
      { label: "A", text: "Using two different methods to verify identity" },
      { label: "B", text: "Using two passwords" },
      { label: "C", text: "Using two devices" },
      { label: "D", text: "Using two networks" },
    ],
    answer: "A. Using two different methods to verify identity",
  },
  {
    id: 105,
    topic: "Data Representation",
    question: "What is the binary representation of decimal 13?",
    options: [
      { label: "A", text: "1101" },
      { label: "B", text: "1110" },
      { label: "C", text: "1010" },
      { label: "D", text: "1000" },
    ],
    answer: "A. 1101",
  },
  {
    id: 106,
    topic: "Data Representation",
    question: "What is one's complement?",
    options: [
      { label: "A", text: "Inverting all bits of a binary number" },
      { label: "B", text: "Adding 1 to a binary number" },
      { label: "C", text: "Subtracting 1 from a binary number" },
      { label: "D", text: "Multiplying by 2" },
    ],
    answer: "A. Inverting all bits of a binary number",
  },
  {
    id: 107,
    topic: "Computer Hardware",
    question: "What is a system bus?",
    options: [
      { label: "A", text: "A pathway that transfers data between components" },
      { label: "B", text: "A power cable" },
      { label: "C", text: "A storage device" },
      { label: "D", text: "A display cable" },
    ],
    answer: "A. A pathway that transfers data between components",
  },
  {
    id: 108,
    topic: "Computer Hardware",
    question: "What is a heat sink?",
    options: [
      { label: "A", text: "A component that dissipates heat from the CPU" },
      { label: "B", text: "A cooling fan" },
      { label: "C", text: "A power supply" },
      { label: "D", text: "A memory module" },
    ],
    answer: "A. A component that dissipates heat from the CPU",
  },
  {
    id: 109,
    topic: "Computer Characteristics",
    question: "Which characteristic of computers allows them to perform millions of calculations per second?",
    options: [
      { label: "A", text: "Speed" },
      { label: "B", text: "Accuracy" },
      { label: "C", text: "Diligence" },
      { label: "D", text: "Versatility" },
    ],
    answer: "A. Speed",
  },
  {
    id: 110,
    topic: "Computer Characteristics",
    question: "A computer's ability to do any task is called:",
    options: [
      { label: "A", text: "Versatility" },
      { label: "B", text: "Reliability" },
      { label: "C", text: "Accuracy" },
      { label: "D", text: "Diligence" },
    ],
    answer: "A. Versatility",
  },
  {
    id: 111,
    topic: "Computer Basics",
    question: "Which device is used to input data into a computer?",
    options: [
      { label: "A", text: "Keyboard" },
      { label: "B", text: "Monitor" },
      { label: "C", text: "Printer" },
      { label: "D", text: "Speaker" },
    ],
    answer: "A. Keyboard",
  },
  {
    id: 112,
    topic: "Computer Basics",
    question: "Which component is known as the 'heart' of the computer?",
    options: [
      { label: "A", text: "CPU" },
      { label: "B", text: "Hard Disk" },
      { label: "C", text: "RAM" },
      { label: "D", text: "Power Supply" },
    ],
    answer: "A. CPU",
  },
  {
    id: 113,
    topic: "Memory & Storage",
    question: "What is the primary storage of a computer?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "Hard Disk" },
      { label: "C", text: "CD-ROM" },
      { label: "D", text: "DVD" },
    ],
    answer: "A. RAM",
  },
  {
    id: 114,
    topic: "Memory & Storage",
    question: "Which memory is used to store firmware?",
    options: [
      { label: "A", text: "ROM" },
      { label: "B", text: "RAM" },
      { label: "C", text: "Cache" },
      { label: "D", text: "Register" },
    ],
    answer: "A. ROM",
  },
  {
    id: 115,
    topic: "CPU & ALU",
    question: "What is the main function of the control unit?",
    options: [
      { label: "A", text: "To direct the operation of the processor" },
      { label: "B", text: "To perform arithmetic operations" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To interface with peripherals" },
    ],
    answer: "A. To direct the operation of the processor",
  },
  {
    id: 116,
    topic: "CPU & ALU",
    question: "What is a register?",
    options: [
      { label: "A", text: "A small, high-speed storage location within the CPU" },
      { label: "B", text: "A type of RAM" },
      { label: "C", text: "A storage device" },
      { label: "D", text: "A bus" },
    ],
    answer: "A. A small, high-speed storage location within the CPU",
  },
  {
    id: 117,
    topic: "Input/Output Devices",
    question: "Which output device produces output in hard copy form?",
    options: [
      { label: "A", text: "Printer" },
      { label: "B", text: "Monitor" },
      { label: "C", text: "Speaker" },
      { label: "D", text: "Projector" },
    ],
    answer: "A. Printer",
  },
  {
    id: 118,
    topic: "Input/Output Devices",
    question: "Which device is used to capture an image and convert it to digital form?",
    options: [
      { label: "A", text: "Scanner" },
      { label: "B", text: "Webcam" },
      { label: "C", text: "Digital camera" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 119,
    topic: "Number Systems",
    question: "What is the hexadecimal equivalent of binary 10101010?",
    options: [
      { label: "A", text: "AA" },
      { label: "B", text: "AB" },
      { label: "C", text: "A9" },
      { label: "D", text: "BA" },
    ],
    answer: "A. AA",
  },
  {
    id: 120,
    topic: "Number Systems",
    question: "What is the decimal equivalent of octal 77?",
    options: [
      { label: "A", text: "63" },
      { label: "B", text: "64" },
      { label: "C", text: "65" },
      { label: "D", text: "66" },
    ],
    answer: "A. 63",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What are computer fundamentals?",
    answer:
      "Computer fundamentals cover the basic concepts of computers, including hardware, software, operating systems, input/output devices, memory, and data representation. It forms the foundation for understanding how computers work.",
  },
  {
    question: "Why should I practice Computer Fundamentals MCQs?",
    answer:
      "Practicing Computer Fundamentals MCQs helps you prepare for competitive exams, technical interviews, and placement tests. It reinforces your understanding of core concepts and improves your problem-solving speed.",
  },
  {
    question: "What are the key topics in Computer Fundamentals?",
    answer:
      "Key topics include Computer Basics, Generations, CPU, ALU, Memory, Storage, Number Systems, Operating Systems, Software Types, Networks, Internet, Security, and Data Representation.",
  },
  {
    question: "How can I prepare for computer fundamentals exams?",
    answer:
      "Start with the basics, study the evolution of computers, understand hardware components, practice number system conversions, and regularly test yourself with MCQs. Hands-on practice with computers also helps.",
  },
  {
    question: "What is the importance of number systems in computers?",
    answer:
      "Number systems (binary, octal, hexadecimal) are fundamental because computers use binary (0 and 1) for all operations. Understanding them is essential for programming, networking, and data representation.",
  },
  {
    question: "What is the difference between RAM and ROM?",
    answer:
      "RAM is volatile memory used for temporary storage of data and programs currently in use. ROM is non-volatile memory used to store firmware and system instructions that are not lost when the computer is turned off.",
  },
];

// ========================== COMPONENT ==========================
export default function ComputerFundamentalMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/computer-fundamental",
        "url": "https://CodeSkipper.in/mcq/computer-fundamental",
        "name": "Computer Fundamentals Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Computer Fundamentals, covering basics, hardware, software, memory, number systems, and more.",
        "about": { "@type": "Thing", "name": "Computer Fundamentals MCQ" },
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
              "name": "Computer Fundamentals",
              "item": "https://CodeSkipper.in/mcq/computer-fundamental",
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
        "@id": "https://CodeSkipper.in/mcq/computer-fundamental#course",
        "name": "Computer Fundamentals MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Computer Fundamentals exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Computer Fundamentals" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/computer-fundamental#faq",
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
        <title>Computer Fundamentals MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Computer Fundamentals multiple-choice questions with answers. Covers basics, hardware, software, memory, number systems, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Computer Fundamentals, MCQs, Computer Basics, Hardware, Software, Memory, Number Systems, CPU, ALU, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/computer-fundamental" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-fundamental" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-fundamental" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/computer-fundamental" />
        <meta property="og:title" content="Computer Fundamentals MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Computer Fundamentals multiple-choice questions covering basics, hardware, software, memory, number systems, and more."
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
        <meta name="twitter:title" content="Computer Fundamentals MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Computer Fundamentals multiple-choice questions covering basics, hardware, software, memory, number systems, and more."
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
              Computer Fundamentals <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Computer Fundamentals with 120+ curated MCQs covering basics, hardware,
              software, memory, number systems, and more. Perfect for exams, interviews, and placements.
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
            Explore Computer Fundamentals Topics
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
            Computer Fundamentals MCQs
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