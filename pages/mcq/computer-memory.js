import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Memory Basics (6) -----
  {
    id: 1,
    topic: "Memory Basics",
    question: "What is computer memory?",
    options: [
      { label: "A", text: "A device that stores data and instructions for processing" },
      { label: "B", text: "A device that displays output" },
      { label: "C", text: "A device that processes data" },
      { label: "D", text: "A device that connects to the internet" },
    ],
    answer: "A. A device that stores data and instructions for processing",
  },
  {
    id: 2,
    topic: "Memory Basics",
    question: "Which of the following is the fastest type of memory?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "Cache Memory" },
      { label: "C", text: "Hard Disk" },
      { label: "D", text: "ROM" },
    ],
    answer: "B. Cache Memory",
  },
  {
    id: 3,
    topic: "Memory Basics",
    question: "What is the primary function of memory in a computer?",
    options: [
      { label: "A", text: "To store data and programs temporarily or permanently" },
      { label: "B", text: "To perform arithmetic calculations" },
      { label: "C", text: "To display information" },
      { label: "D", text: "To connect to networks" },
    ],
    answer: "A. To store data and programs temporarily or permanently",
  },
  {
    id: 4,
    topic: "Memory Basics",
    question: "Which type of memory is directly accessible by the CPU?",
    options: [
      { label: "A", text: "Secondary Memory" },
      { label: "B", text: "Primary Memory" },
      { label: "C", text: "Tertiary Memory" },
      { label: "D", text: "Offline Memory" },
    ],
    answer: "B. Primary Memory",
  },
  {
    id: 5,
    topic: "Memory Basics",
    question: "The smallest unit of data in computer memory is:",
    options: [
      { label: "A", text: "Byte" },
      { label: "B", text: "Bit" },
      { label: "C", text: "Nibble" },
      { label: "D", text: "Word" },
    ],
    answer: "B. Bit",
  },
  {
    id: 6,
    topic: "Memory Basics",
    question: "A group of 8 bits is called:",
    options: [
      { label: "A", text: "Word" },
      { label: "B", text: "Byte" },
      { label: "C", text: "Nibble" },
      { label: "D", text: "Kilobyte" },
    ],
    answer: "B. Byte",
  },

  // ----- RAM (6) -----
  {
    id: 7,
    topic: "RAM",
    question: "What does RAM stand for?",
    options: [
      { label: "A", text: "Random Access Memory" },
      { label: "B", text: "Read Access Memory" },
      { label: "C", text: "Run Access Memory" },
      { label: "D", text: "Real Access Memory" },
    ],
    answer: "A. Random Access Memory",
  },
  {
    id: 8,
    topic: "RAM",
    question: "Which of the following is a characteristic of RAM?",
    options: [
      { label: "A", text: "Volatile memory" },
      { label: "B", text: "Non-volatile memory" },
      { label: "C", text: "Read-only memory" },
      { label: "D", text: "Permanent storage" },
    ],
    answer: "A. Volatile memory",
  },
  {
    id: 9,
    topic: "RAM",
    question: "What is the full form of DRAM?",
    options: [
      { label: "A", text: "Dynamic Random Access Memory" },
      { label: "B", text: "Digital Random Access Memory" },
      { label: "C", text: "Direct Random Access Memory" },
      { label: "D", text: "Dual Random Access Memory" },
    ],
    answer: "A. Dynamic Random Access Memory",
  },
  {
    id: 10,
    topic: "RAM",
    question: "What is the full form of SRAM?",
    options: [
      { label: "A", text: "Static Random Access Memory" },
      { label: "B", text: "System Random Access Memory" },
      { label: "C", text: "Super Random Access Memory" },
      { label: "D", text: "Serial Random Access Memory" },
    ],
    answer: "A. Static Random Access Memory",
  },
  {
    id: 11,
    topic: "RAM",
    question: "Which type of RAM needs to be refreshed periodically?",
    options: [
      { label: "A", text: "SRAM" },
      { label: "B", text: "DRAM" },
      { label: "C", text: "MRAM" },
      { label: "D", text: "FRAM" },
    ],
    answer: "B. DRAM",
  },
  {
    id: 12,
    topic: "RAM",
    question: "Which RAM is faster and more expensive?",
    options: [
      { label: "A", text: "DRAM" },
      { label: "B", text: "SRAM" },
      { label: "C", text: "SDRAM" },
      { label: "D", text: "RDRAM" },
    ],
    answer: "B. SRAM",
  },

  // ----- ROM (6) -----
  {
    id: 13,
    topic: "ROM",
    question: "What does ROM stand for?",
    options: [
      { label: "A", text: "Read Only Memory" },
      { label: "B", text: "Random Only Memory" },
      { label: "C", text: "Run Only Memory" },
      { label: "D", text: "Real Only Memory" },
    ],
    answer: "A. Read Only Memory",
  },
  {
    id: 14,
    topic: "ROM",
    question: "Which of the following is a characteristic of ROM?",
    options: [
      { label: "A", text: "Volatile" },
      { label: "B", text: "Non-volatile" },
      { label: "C", text: "Read-write memory" },
      { label: "D", text: "Temporary storage" },
    ],
    answer: "B. Non-volatile",
  },
  {
    id: 15,
    topic: "ROM",
    question: "What is the full form of PROM?",
    options: [
      { label: "A", text: "Programmable Read Only Memory" },
      { label: "B", text: "Primary Read Only Memory" },
      { label: "C", text: "Pre-programmed Read Only Memory" },
      { label: "D", text: "Partial Read Only Memory" },
    ],
    answer: "A. Programmable Read Only Memory",
  },
  {
    id: 16,
    topic: "ROM",
    question: "What is the full form of EPROM?",
    options: [
      { label: "A", text: "Erasable Programmable Read Only Memory" },
      { label: "B", text: "Electronic Programmable Read Only Memory" },
      { label: "C", text: "External Programmable Read Only Memory" },
      { label: "D", text: "Extended Programmable Read Only Memory" },
    ],
    answer: "A. Erasable Programmable Read Only Memory",
  },
  {
    id: 17,
    topic: "ROM",
    question: "What is the full form of EEPROM?",
    options: [
      { label: "A", text: "Electrically Erasable Programmable Read Only Memory" },
      { label: "B", text: "Electronic Erasable Programmable Read Only Memory" },
      { label: "C", text: "External Erasable Programmable Read Only Memory" },
      { label: "D", text: "Extended Erasable Programmable Read Only Memory" },
    ],
    answer: "A. Electrically Erasable Programmable Read Only Memory",
  },
  {
    id: 18,
    topic: "ROM",
    question: "Which type of ROM can be erased using ultraviolet light?",
    options: [
      { label: "A", text: "PROM" },
      { label: "B", text: "EPROM" },
      { label: "C", text: "EEPROM" },
      { label: "D", text: "Mask ROM" },
    ],
    answer: "B. EPROM",
  },

  // ----- Cache Memory (6) -----
  {
    id: 19,
    topic: "Cache Memory",
    question: "What is cache memory?",
    options: [
      { label: "A", text: "High-speed memory between CPU and main memory" },
      { label: "B", text: "Secondary storage device" },
      { label: "C", text: "Virtual memory" },
      { label: "D", text: "Flash memory" },
    ],
    answer: "A. High-speed memory between CPU and main memory",
  },
  {
    id: 20,
    topic: "Cache Memory",
    question: "Cache memory is based on which principle?",
    options: [
      { label: "A", text: "Locality of reference" },
      { label: "B", text: "FIFO" },
      { label: "C", text: "LRU" },
      { label: "D", text: "Round Robin" },
    ],
    answer: "A. Locality of reference",
  },
  {
    id: 21,
    topic: "Cache Memory",
    question: "Which level of cache is the smallest and fastest?",
    options: [
      { label: "A", text: "L1 Cache" },
      { label: "B", text: "L2 Cache" },
      { label: "C", text: "L3 Cache" },
      { label: "D", text: "L4 Cache" },
    ],
    answer: "A. L1 Cache",
  },
  {
    id: 22,
    topic: "Cache Memory",
    question: "What is the purpose of cache memory?",
    options: [
      { label: "A", text: "To reduce the average time to access data" },
      { label: "B", text: "To increase storage capacity" },
      { label: "C", text: "To provide backup storage" },
      { label: "D", text: "To improve graphics performance" },
    ],
    answer: "A. To reduce the average time to access data",
  },
  {
    id: 23,
    topic: "Cache Memory",
    question: "Which cache mapping technique uses a hash function?",
    options: [
      { label: "A", text: "Direct mapping" },
      { label: "B", text: "Associative mapping" },
      { label: "C", text: "Set-associative mapping" },
      { label: "D", text: "All of the above" },
    ],
    answer: "C. Set-associative mapping",
  },
  {
    id: 24,
    topic: "Cache Memory",
    question: "What is a cache hit?",
    options: [
      { label: "A", text: "Data is found in the cache" },
      { label: "B", text: "Data is not found in the cache" },
      { label: "C", text: "Cache is full" },
      { label: "D", text: "Cache is empty" },
    ],
    answer: "A. Data is found in the cache",
  },

  // ----- Secondary Storage (6) -----
  {
    id: 25,
    topic: "Secondary Storage",
    question: "Which of the following is a secondary storage device?",
    options: [
      { label: "A", text: "Hard Disk Drive" },
      { label: "B", text: "RAM" },
      { label: "C", text: "Cache Memory" },
      { label: "D", text: "Register" },
    ],
    answer: "A. Hard Disk Drive",
  },
  {
    id: 26,
    topic: "Secondary Storage",
    question: "What is the full form of SSD?",
    options: [
      { label: "A", text: "Solid State Drive" },
      { label: "B", text: "System Storage Drive" },
      { label: "C", text: "Super Speed Drive" },
      { label: "D", text: "Serial Storage Drive" },
    ],
    answer: "A. Solid State Drive",
  },
  {
    id: 27,
    topic: "Secondary Storage",
    question: "Which storage device uses magnetic platters to store data?",
    options: [
      { label: "A", text: "SSD" },
      { label: "B", text: "HDD" },
      { label: "C", text: "USB Drive" },
      { label: "D", text: "Memory Card" },
    ],
    answer: "B. HDD",
  },
  {
    id: 28,
    topic: "Secondary Storage",
    question: "What is the storage capacity of a standard DVD?",
    options: [
      { label: "A", text: "4.7 GB" },
      { label: "B", text: "700 MB" },
      { label: "C", text: "25 GB" },
      { label: "D", text: "50 GB" },
    ],
    answer: "A. 4.7 GB",
  },
  {
    id: 29,
    topic: "Secondary Storage",
    question: "Which of the following is a portable storage device?",
    options: [
      { label: "A", text: "USB Flash Drive" },
      { label: "B", text: "Internal HDD" },
      { label: "C", text: "RAM" },
      { label: "D", text: "Cache Memory" },
    ],
    answer: "A. USB Flash Drive",
  },
  {
    id: 30,
    topic: "Secondary Storage",
    question: "What is the primary advantage of SSD over HDD?",
    options: [
      { label: "A", text: "Faster read/write speeds" },
      { label: "B", text: "Larger capacity" },
      { label: "C", text: "Lower cost" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. Faster read/write speeds",
  },

  // ----- Virtual Memory (6) -----
  {
    id: 31,
    topic: "Virtual Memory",
    question: "What is virtual memory?",
    options: [
      { label: "A", text: "Memory that uses hard disk as extended RAM" },
      { label: "B", text: "Physical RAM" },
      { label: "C", text: "Cache memory" },
      { label: "D", text: "ROM" },
    ],
    answer: "A. Memory that uses hard disk as extended RAM",
  },
  {
    id: 32,
    topic: "Virtual Memory",
    question: "What is the purpose of virtual memory?",
    options: [
      { label: "A", text: "To allow programs to use more memory than physical RAM" },
      { label: "B", text: "To increase processing speed" },
      { label: "C", text: "To store permanent data" },
      { label: "D", text: "To improve graphics" },
    ],
    answer: "A. To allow programs to use more memory than physical RAM",
  },
  {
    id: 33,
    topic: "Virtual Memory",
    question: "What is a page fault?",
    options: [
      { label: "A", text: "When a requested page is not in memory" },
      { label: "B", text: "When the system crashes" },
      { label: "C", text: "When the disk is full" },
      { label: "D", text: "When memory is corrupted" },
    ],
    answer: "A. When a requested page is not in memory",
  },
  {
    id: 34,
    topic: "Virtual Memory",
    question: "Which algorithm is used for page replacement?",
    options: [
      { label: "A", text: "LRU (Least Recently Used)" },
      { label: "B", text: "FIFO (First In First Out)" },
      { label: "C", text: "Optimal" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 35,
    topic: "Virtual Memory",
    question: "What is thrashing in virtual memory?",
    options: [
      { label: "A", text: "Excessive page swapping causing performance degradation" },
      { label: "B", text: "Memory being upgraded" },
      { label: "C", text: "Disk being formatted" },
      { label: "D", text: "Cache being cleared" },
    ],
    answer: "A. Excessive page swapping causing performance degradation",
  },
  {
    id: 36,
    topic: "Virtual Memory",
    question: "What is the page size in virtual memory typically?",
    options: [
      { label: "A", text: "4 KB" },
      { label: "B", text: "1 KB" },
      { label: "C", text: "16 KB" },
      { label: "D", text: "64 KB" },
    ],
    answer: "A. 4 KB",
  },

  // ----- Memory Hierarchy (6) -----
  {
    id: 37,
    topic: "Memory Hierarchy",
    question: "Which of the following correctly represents the memory hierarchy from fastest to slowest?",
    options: [
      { label: "A", text: "Registers → Cache → RAM → SSD → HDD" },
      { label: "B", text: "Cache → Registers → RAM → HDD → SSD" },
      { label: "C", text: "RAM → Cache → Registers → HDD → SSD" },
      { label: "D", text: "HDD → SSD → RAM → Cache → Registers" },
    ],
    answer: "A. Registers → Cache → RAM → SSD → HDD",
  },
  {
    id: 38,
    topic: "Memory Hierarchy",
    question: "What is the purpose of memory hierarchy?",
    options: [
      { label: "A", text: "To optimize cost, speed, and capacity" },
      { label: "B", text: "To reduce power consumption" },
      { label: "C", text: "To increase storage capacity" },
      { label: "D", text: "To simplify hardware design" },
    ],
    answer: "A. To optimize cost, speed, and capacity",
  },
  {
    id: 39,
    topic: "Memory Hierarchy",
    question: "Which memory in the hierarchy has the largest capacity?",
    options: [
      { label: "A", text: "Registers" },
      { label: "B", text: "Cache" },
      { label: "C", text: "RAM" },
      { label: "D", text: "Secondary Storage" },
    ],
    answer: "D. Secondary Storage",
  },
  {
    id: 40,
    topic: "Memory Hierarchy",
    question: "Which memory in the hierarchy is the most expensive per byte?",
    options: [
      { label: "A", text: "Registers" },
      { label: "B", text: "RAM" },
      { label: "C", text: "Hard Disk" },
      { label: "D", text: "SSD" },
    ],
    answer: "A. Registers",
  },
  {
    id: 41,
    topic: "Memory Hierarchy",
    question: "What is the access time order from fastest to slowest?",
    options: [
      { label: "A", text: "Registers < Cache < RAM < Disk" },
      { label: "B", text: "Disk < RAM < Cache < Registers" },
      { label: "C", text: "RAM < Cache < Registers < Disk" },
      { label: "D", text: "Cache < Registers < RAM < Disk" },
    ],
    answer: "A. Registers < Cache < RAM < Disk",
  },
  {
    id: 42,
    topic: "Memory Hierarchy",
    question: "Which level of memory hierarchy is closest to the CPU?",
    options: [
      { label: "A", text: "Registers" },
      { label: "B", text: "Cache" },
      { label: "C", text: "RAM" },
      { label: "D", text: "SSD" },
    ],
    answer: "A. Registers",
  },

  // ----- Memory Management (6) -----
  {
    id: 43,
    topic: "Memory Management",
    question: "What is memory management in operating systems?",
    options: [
      { label: "A", text: "The process of managing computer memory" },
      { label: "B", text: "The process of managing files" },
      { label: "C", text: "The process of managing processes" },
      { label: "D", text: "The process of managing devices" },
    ],
    answer: "A. The process of managing computer memory",
  },
  {
    id: 44,
    topic: "Memory Management",
    question: "What is fragmentation in memory management?",
    options: [
      { label: "A", text: "When memory becomes unusable due to small free blocks" },
      { label: "B", text: "When memory is completely full" },
      { label: "C", text: "When memory is upgraded" },
      { label: "D", text: "When memory is corrupted" },
    ],
    answer: "A. When memory becomes unusable due to small free blocks",
  },
  {
    id: 45,
    topic: "Memory Management",
    question: "What is external fragmentation?",
    options: [
      { label: "A", text: "Free memory scattered in small blocks" },
      { label: "B", text: "Memory allocated to a process is wasted" },
      { label: "C", text: "Memory is not allocated" },
      { label: "D", text: "Memory is corrupted" },
    ],
    answer: "A. Free memory scattered in small blocks",
  },
  {
    id: 46,
    topic: "Memory Management",
    question: "What is internal fragmentation?",
    options: [
      { label: "A", text: "Wasted memory within an allocated block" },
      { label: "B", text: "Free memory scattered in small blocks" },
      { label: "C", text: "Memory allocation failure" },
      { label: "D", text: "Memory corruption" },
    ],
    answer: "A. Wasted memory within an allocated block",
  },
  {
    id: 47,
    topic: "Memory Management",
    question: "Which technique is used to reduce fragmentation?",
    options: [
      { label: "A", text: "Paging" },
      { label: "B", text: "Segmentation" },
      { label: "C", text: "Both Paging and Segmentation" },
      { label: "D", text: "None of the above" },
    ],
    answer: "C. Both Paging and Segmentation",
  },
  {
    id: 48,
    topic: "Memory Management",
    question: "What is a memory leak?",
    options: [
      { label: "A", text: "When a program fails to release memory it no longer needs" },
      { label: "B", text: "When memory is physically damaged" },
      { label: "C", text: "When memory is upgraded" },
      { label: "D", text: "When memory is corrupted" },
    ],
    answer: "A. When a program fails to release memory it no longer needs",
  },

  // ----- Memory Units (6) -----
  {
    id: 49,
    topic: "Memory Units",
    question: "1 Kilobyte (KB) is equal to:",
    options: [
      { label: "A", text: "1024 bytes" },
      { label: "B", text: "1000 bytes" },
      { label: "C", text: "512 bytes" },
      { label: "D", text: "2048 bytes" },
    ],
    answer: "A. 1024 bytes",
  },
  {
    id: 50,
    topic: "Memory Units",
    question: "1 Megabyte (MB) is equal to:",
    options: [
      { label: "A", text: "1024 KB" },
      { label: "B", text: "1000 KB" },
      { label: "C", text: "1024 bytes" },
      { label: "D", text: "1,000,000 bytes" },
    ],
    answer: "A. 1024 KB",
  },
  {
    id: 51,
    topic: "Memory Units",
    question: "1 Gigabyte (GB) is equal to:",
    options: [
      { label: "A", text: "1024 MB" },
      { label: "B", text: "1000 MB" },
      { label: "C", text: "1024 KB" },
      { label: "D", text: "1,000,000 KB" },
    ],
    answer: "A. 1024 MB",
  },
  {
    id: 52,
    topic: "Memory Units",
    question: "1 Terabyte (TB) is equal to:",
    options: [
      { label: "A", text: "1024 GB" },
      { label: "B", text: "1000 GB" },
      { label: "C", text: "1024 MB" },
      { label: "D", text: "1,000,000 MB" },
    ],
    answer: "A. 1024 GB",
  },
  {
    id: 53,
    topic: "Memory Units",
    question: "What is a word in computer memory?",
    options: [
      { label: "A", text: "A group of bytes processed together" },
      { label: "B", text: "A single byte" },
      { label: "C", text: "A single bit" },
      { label: "D", text: "A nibble" },
    ],
    answer: "A. A group of bytes processed together",
  },
  {
    id: 54,
    topic: "Memory Units",
    question: "A nibble consists of how many bits?",
    options: [
      { label: "A", text: "4 bits" },
      { label: "B", text: "8 bits" },
      { label: "C", text: "2 bits" },
      { label: "D", text: "16 bits" },
    ],
    answer: "A. 4 bits",
  },

  // ----- Memory Access Methods (6) -----
  {
    id: 55,
    topic: "Memory Access Methods",
    question: "What is sequential access memory?",
    options: [
      { label: "A", text: "Data is accessed in a linear sequence" },
      { label: "B", text: "Data is accessed randomly" },
      { label: "C", text: "Data is accessed in parallel" },
      { label: "D", text: "Data is accessed in reverse order" },
    ],
    answer: "A. Data is accessed in a linear sequence",
  },
  {
    id: 56,
    topic: "Memory Access Methods",
    question: "What is random access memory?",
    options: [
      { label: "A", text: "Any location can be accessed directly" },
      { label: "B", text: "Data is accessed in sequence" },
      { label: "C", text: "Data is accessed only once" },
      { label: "D", text: "Data is accessed in blocks" },
    ],
    answer: "A. Any location can be accessed directly",
  },
  {
    id: 57,
    topic: "Memory Access Methods",
    question: "Which of the following is an example of sequential access?",
    options: [
      { label: "A", text: "Tape Drive" },
      { label: "B", text: "RAM" },
      { label: "C", text: "SSD" },
      { label: "D", text: "Cache" },
    ],
    answer: "A. Tape Drive",
  },
  {
    id: 58,
    topic: "Memory Access Methods",
    question: "Which of the following is an example of random access?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "Tape Drive" },
      { label: "C", text: "CD-ROM" },
      { label: "D", text: "DVD" },
    ],
    answer: "A. RAM",
  },
  {
    id: 59,
    topic: "Memory Access Methods",
    question: "What is direct access memory?",
    options: [
      { label: "A", text: "Data can be accessed directly using an address" },
      { label: "B", text: "Data is accessed in sequence" },
      { label: "C", text: "Data is accessed in blocks" },
      { label: "D", text: "Data is accessed in parallel" },
    ],
    answer: "A. Data can be accessed directly using an address",
  },
  {
    id: 60,
    topic: "Memory Access Methods",
    question: "What is associative access memory?",
    options: [
      { label: "A", text: "Data is accessed by content rather than address" },
      { label: "B", text: "Data is accessed by address" },
      { label: "C", text: "Data is accessed in sequence" },
      { label: "D", text: "Data is accessed in blocks" },
    ],
    answer: "A. Data is accessed by content rather than address",
  },

  // ----- Flash Memory (6) -----
  {
    id: 61,
    topic: "Flash Memory",
    question: "What is flash memory?",
    options: [
      { label: "A", text: "A non-volatile memory that can be electrically erased and reprogrammed" },
      { label: "B", text: "A volatile memory" },
      { label: "C", text: "A read-only memory" },
      { label: "D", text: "A magnetic memory" },
    ],
    answer: "A. A non-volatile memory that can be electrically erased and reprogrammed",
  },
  {
    id: 62,
    topic: "Flash Memory",
    question: "Which of the following uses flash memory?",
    options: [
      { label: "A", text: "USB Drives" },
      { label: "B", text: "SSDs" },
      { label: "C", text: "Memory Cards" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 63,
    topic: "Flash Memory",
    question: "What is the difference between NAND and NOR flash memory?",
    options: [
      { label: "A", text: "NAND has higher density and lower cost; NOR has faster read speed" },
      { label: "B", text: "NOR has higher density; NAND has faster read speed" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "NAND is volatile; NOR is non-volatile" },
    ],
    answer: "A. NAND has higher density and lower cost; NOR has faster read speed",
  },
  {
    id: 64,
    topic: "Flash Memory",
    question: "What is the typical lifespan of flash memory in terms of write cycles?",
    options: [
      { label: "A", text: "10,000 to 100,000 write cycles" },
      { label: "B", text: "1,000 to 10,000 write cycles" },
      { label: "C", text: "100,000 to 1,000,000 write cycles" },
      { label: "D", text: "Unlimited write cycles" },
    ],
    answer: "A. 10,000 to 100,000 write cycles",
  },
  {
    id: 65,
    topic: "Flash Memory",
    question: "What is wear leveling in flash memory?",
    options: [
      { label: "A", text: "A technique to distribute writes evenly across memory cells" },
      { label: "B", text: "A technique to increase memory capacity" },
      { label: "C", text: "A technique to speed up read operations" },
      { label: "D", text: "A technique to reduce power consumption" },
    ],
    answer: "A. A technique to distribute writes evenly across memory cells",
  },
  {
    id: 66,
    topic: "Flash Memory",
    question: "Which type of flash memory is commonly used in SSDs?",
    options: [
      { label: "A", text: "NAND Flash" },
      { label: "B", text: "NOR Flash" },
      { label: "C", text: "Both NAND and NOR" },
      { label: "D", text: "Neither" },
    ],
    answer: "A. NAND Flash",
  },

  // ----- Optical Storage (6) -----
  {
    id: 67,
    topic: "Optical Storage",
    question: "What is optical storage?",
    options: [
      { label: "A", text: "Storage that uses laser light to read and write data" },
      { label: "B", text: "Storage that uses magnetic fields" },
      { label: "C", text: "Storage that uses electrical charges" },
      { label: "D", text: "Storage that uses mechanical parts" },
    ],
    answer: "A. Storage that uses laser light to read and write data",
  },
  {
    id: 68,
    topic: "Optical Storage",
    question: "Which of the following is an optical storage medium?",
    options: [
      { label: "A", text: "CD-ROM" },
      { label: "B", text: "DVD" },
      { label: "C", text: "Blu-ray" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 69,
    topic: "Optical Storage",
    question: "What is the storage capacity of a standard Blu-ray disc?",
    options: [
      { label: "A", text: "25 GB (single-layer)" },
      { label: "B", text: "4.7 GB" },
      { label: "C", text: "700 MB" },
      { label: "D", text: "50 GB (single-layer)" },
    ],
    answer: "A. 25 GB (single-layer)",
  },
  {
    id: 70,
    topic: "Optical Storage",
    question: "What is the difference between CD-R and CD-RW?",
    options: [
      { label: "A", text: "CD-R can be written once; CD-RW can be rewritten multiple times" },
      { label: "B", text: "CD-R has more capacity than CD-RW" },
      { label: "C", text: "CD-RW is read-only; CD-R is writable" },
      { label: "D", text: "CD-R is faster than CD-RW" },
    ],
    answer: "A. CD-R can be written once; CD-RW can be rewritten multiple times",
  },
  {
    id: 71,
    topic: "Optical Storage",
    question: "What type of laser is used in Blu-ray players?",
    options: [
      { label: "A", text: "Blue-violet laser" },
      { label: "B", text: "Red laser" },
      { label: "C", text: "Infrared laser" },
      { label: "D", text: "Green laser" },
    ],
    answer: "A. Blue-violet laser",
  },
  {
    id: 72,
    topic: "Optical Storage",
    question: "What is the data transfer rate of a typical DVD drive?",
    options: [
      { label: "A", text: "1x = 1.32 MB/s" },
      { label: "B", text: "1x = 150 KB/s" },
      { label: "C", text: "1x = 4.5 MB/s" },
      { label: "D", text: "1x = 10 MB/s" },
    ],
    answer: "A. 1x = 1.32 MB/s",
  },

  // ----- Magnetic Storage (6) -----
  {
    id: 73,
    topic: "Magnetic Storage",
    question: "What is magnetic storage?",
    options: [
      { label: "A", text: "Storage that uses magnetic fields to store data" },
      { label: "B", text: "Storage that uses laser light" },
      { label: "C", text: "Storage that uses electrical charges" },
      { label: "D", text: "Storage that uses mechanical parts" },
    ],
    answer: "A. Storage that uses magnetic fields to store data",
  },
  {
    id: 74,
    topic: "Magnetic Storage",
    question: "Which of the following is a magnetic storage device?",
    options: [
      { label: "A", text: "Hard Disk Drive" },
      { label: "B", text: "SSD" },
      { label: "C", text: "USB Drive" },
      { label: "D", text: "CD-ROM" },
    ],
    answer: "A. Hard Disk Drive",
  },
  {
    id: 75,
    topic: "Magnetic Storage",
    question: "What is a magnetic tape used for?",
    options: [
      { label: "A", text: "Backup and archival storage" },
      { label: "B", text: "Primary storage" },
      { label: "C", text: "Cache memory" },
      { label: "D", text: "RAM" },
    ],
    answer: "A. Backup and archival storage",
  },
  {
    id: 76,
    topic: "Magnetic Storage",
    question: "What is the advantage of magnetic tape over other storage media?",
    options: [
      { label: "A", text: "Low cost per GB for large-scale storage" },
      { label: "B", text: "Fast random access" },
      { label: "C", text: "Small physical size" },
      { label: "D", text: "High power efficiency" },
    ],
    answer: "A. Low cost per GB for large-scale storage",
  },
  {
    id: 77,
    topic: "Magnetic Storage",
    question: "What is a floppy disk?",
    options: [
      { label: "A", text: "A magnetic storage medium that was commonly used in the past" },
      { label: "B", text: "A type of optical storage" },
      { label: "C", text: "A type of flash memory" },
      { label: "D", text: "A type of RAM" },
    ],
    answer: "A. A magnetic storage medium that was commonly used in the past",
  },
  {
    id: 78,
    topic: "Magnetic Storage",
    question: "What is the storage capacity of a standard 3.5-inch floppy disk?",
    options: [
      { label: "A", text: "1.44 MB" },
      { label: "B", text: "720 KB" },
      { label: "C", text: "2.88 MB" },
      { label: "D", text: "100 MB" },
    ],
    answer: "A. 1.44 MB",
  },

  // ----- Memory Speed & Performance (6) -----
  {
    id: 79,
    topic: "Memory Speed & Performance",
    question: "What is memory access time?",
    options: [
      { label: "A", text: "The time taken to read or write data" },
      { label: "B", text: "The time taken to boot the system" },
      { label: "C", text: "The time taken to transfer data over network" },
      { label: "D", text: "The time taken to display output" },
    ],
    answer: "A. The time taken to read or write data",
  },
  {
    id: 80,
    topic: "Memory Speed & Performance",
    question: "What is memory bandwidth?",
    options: [
      { label: "A", text: "The amount of data that can be transferred per second" },
      { label: "B", text: "The size of memory" },
      { label: "C", text: "The speed of the CPU" },
      { label: "D", text: "The speed of the network" },
    ],
    answer: "A. The amount of data that can be transferred per second",
  },
  {
    id: 81,
    topic: "Memory Speed & Performance",
    question: "What is latency in memory?",
    options: [
      { label: "A", text: "The delay between a request and response" },
      { label: "B", text: "The size of memory" },
      { label: "C", text: "The speed of memory" },
      { label: "D", text: "The cost of memory" },
    ],
    answer: "A. The delay between a request and response",
  },
  {
    id: 82,
    topic: "Memory Speed & Performance",
    question: "Which memory has the lowest latency?",
    options: [
      { label: "A", text: "Registers" },
      { label: "B", text: "Cache" },
      { label: "C", text: "RAM" },
      { label: "D", text: "Hard Disk" },
    ],
    answer: "A. Registers",
  },
  {
    id: 83,
    topic: "Memory Speed & Performance",
    question: "What is the CAS latency (CL) in DRAM?",
    options: [
      { label: "A", text: "The delay between the CAS signal and data output" },
      { label: "B", text: "The size of the memory" },
      { label: "C", text: "The speed of the memory" },
      { label: "D", text: "The type of memory" },
    ],
    answer: "A. The delay between the CAS signal and data output",
  },
  {
    id: 84,
    topic: "Memory Speed & Performance",
    question: "What is the typical latency of a hard disk drive?",
    options: [
      { label: "A", text: "Several milliseconds" },
      { label: "B", text: "Several nanoseconds" },
      { label: "C", text: "Several microseconds" },
      { label: "D", text: "Several seconds" },
    ],
    answer: "A. Several milliseconds",
  },

  // ----- Memory Technologies (6) -----
  {
    id: 85,
    topic: "Memory Technologies",
    question: "What is MRAM?",
    options: [
      { label: "A", text: "Magnetoresistive Random Access Memory" },
      { label: "B", text: "Magnetic Random Access Memory" },
      { label: "C", text: "Memory Random Access Memory" },
      { label: "D", text: "Micro Random Access Memory" },
    ],
    answer: "A. Magnetoresistive Random Access Memory",
  },
  {
    id: 86,
    topic: "Memory Technologies",
    question: "What is FRAM?",
    options: [
      { label: "A", text: "Ferroelectric Random Access Memory" },
      { label: "B", text: "Fast Random Access Memory" },
      { label: "C", text: "Flash Random Access Memory" },
      { label: "D", text: "Field Random Access Memory" },
    ],
    answer: "A. Ferroelectric Random Access Memory",
  },
  {
    id: 87,
    topic: "Memory Technologies",
    question: "What is PCM (Phase Change Memory)?",
    options: [
      { label: "A", text: "A non-volatile memory that uses phase change material" },
      { label: "B", text: "A type of volatile memory" },
      { label: "C", text: "A type of optical storage" },
      { label: "D", text: "A type of magnetic storage" },
    ],
    answer: "A. A non-volatile memory that uses phase change material",
  },
  {
    id: 88,
    topic: "Memory Technologies",
    question: "What is ReRAM?",
    options: [
      { label: "A", text: "Resistive Random Access Memory" },
      { label: "B", text: "Read Random Access Memory" },
      { label: "C", text: "Rapid Random Access Memory" },
      { label: "D", text: "Regenerative Random Access Memory" },
    ],
    answer: "A. Resistive Random Access Memory",
  },
  {
    id: 89,
    topic: "Memory Technologies",
    question: "Which memory technology is considered a potential replacement for DRAM?",
    options: [
      { label: "A", text: "PCM" },
      { label: "B", text: "MRAM" },
      { label: "C", text: "ReRAM" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 90,
    topic: "Memory Technologies",
    question: "What is the advantage of emerging memory technologies like MRAM?",
    options: [
      { label: "A", text: "Non-volatility and high speed" },
      { label: "B", text: "Lower cost than DRAM" },
      { label: "C", text: "Higher capacity than HDD" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. Non-volatility and high speed",
  },

  // ----- Memory Errors & Correction (6) -----
  {
    id: 91,
    topic: "Memory Errors & Correction",
    question: "What is ECC memory?",
    options: [
      { label: "A", text: "Error Correcting Code memory" },
      { label: "B", text: "Extended Cache Controller memory" },
      { label: "C", text: "Enhanced Capacity Cache memory" },
      { label: "D", text: "External Cache Control memory" },
    ],
    answer: "A. Error Correcting Code memory",
  },
  {
    id: 92,
    topic: "Memory Errors & Correction",
    question: "What is the purpose of ECC memory?",
    options: [
      { label: "A", text: "To detect and correct memory errors" },
      { label: "B", text: "To increase memory speed" },
      { label: "C", text: "To increase memory capacity" },
      { label: "D", text: "To reduce power consumption" },
    ],
    answer: "A. To detect and correct memory errors",
  },
  {
    id: 93,
    topic: "Memory Errors & Correction",
    question: "What is a parity bit?",
    options: [
      { label: "A", text: "An extra bit used for error detection" },
      { label: "B", text: "A bit used for data storage" },
      { label: "C", text: "A bit used for addressing" },
      { label: "D", text: "A bit used for speed" },
    ],
    answer: "A. An extra bit used for error detection",
  },
  {
    id: 94,
    topic: "Memory Errors & Correction",
    question: "What is the difference between parity and ECC?",
    options: [
      { label: "A", text: "Parity detects errors; ECC detects and corrects errors" },
      { label: "B", text: "Parity corrects errors; ECC only detects errors" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "ECC is older than parity" },
    ],
    answer: "A. Parity detects errors; ECC detects and corrects errors",
  },
  {
    id: 95,
    topic: "Memory Errors & Correction",
    question: "What causes memory errors?",
    options: [
      { label: "A", text: "Alpha particles, cosmic rays, and hardware defects" },
      { label: "B", text: "Software bugs" },
      { label: "C", text: "Network failures" },
      { label: "D", text: "Power outages" },
    ],
    answer: "A. Alpha particles, cosmic rays, and hardware defects",
  },
  {
    id: 96,
    topic: "Memory Errors & Correction",
    question: "What is a soft error in memory?",
    options: [
      { label: "A", text: "A transient error that can be corrected by rewriting data" },
      { label: "B", text: "A permanent hardware failure" },
      { label: "C", text: "A software bug" },
      { label: "D", text: "A network error" },
    ],
    answer: "A. A transient error that can be corrected by rewriting data",
  },

  // ----- Memory Management in OS (6) -----
  {
    id: 97,
    topic: "Memory Management in OS",
    question: "What is paging in operating systems?",
    options: [
      { label: "A", text: "A memory management technique that divides memory into fixed-size pages" },
      { label: "B", text: "A technique for file management" },
      { label: "C", text: "A technique for process scheduling" },
      { label: "D", text: "A technique for device management" },
    ],
    answer: "A. A memory management technique that divides memory into fixed-size pages",
  },
  {
    id: 98,
    topic: "Memory Management in OS",
    question: "What is segmentation in operating systems?",
    options: [
      { label: "A", text: "A memory management technique that divides memory into logical segments" },
      { label: "B", text: "A technique for file management" },
      { label: "C", text: "A technique for process scheduling" },
      { label: "D", text: "A technique for device management" },
    ],
    answer: "A. A memory management technique that divides memory into logical segments",
  },
  {
    id: 99,
    topic: "Memory Management in OS",
    question: "What is the Translation Lookaside Buffer (TLB)?",
    options: [
      { label: "A", text: "A cache for page table entries" },
      { label: "B", text: "A type of RAM" },
      { label: "C", text: "A type of ROM" },
      { label: "D", text: "A type of disk storage" },
    ],
    answer: "A. A cache for page table entries",
  },
  {
    id: 100,
    topic: "Memory Management in OS",
    question: "What is a page table?",
    options: [
      { label: "A", text: "A data structure that maps virtual addresses to physical addresses" },
      { label: "B", text: "A table of files" },
      { label: "C", text: "A table of processes" },
      { label: "D", text: "A table of devices" },
    ],
    answer: "A. A data structure that maps virtual addresses to physical addresses",
  },
  {
    id: 101,
    topic: "Memory Management in OS",
    question: "What is demand paging?",
    options: [
      { label: "A", text: "Pages are loaded into memory only when needed" },
      { label: "B", text: "All pages are loaded at startup" },
      { label: "C", text: "Pages are loaded in sequence" },
      { label: "D", text: "Pages are loaded randomly" },
    ],
    answer: "A. Pages are loaded into memory only when needed",
  },
  {
    id: 102,
    topic: "Memory Management in OS",
    question: "What is the working set of a process?",
    options: [
      { label: "A", text: "The set of pages actively used by the process" },
      { label: "B", text: "All pages allocated to the process" },
      { label: "C", text: "The set of files used by the process" },
      { label: "D", text: "The set of devices used by the process" },
    ],
    answer: "A. The set of pages actively used by the process",
  },

  // ----- More MCQs to reach 120+ (18 more) -----
  {
    id: 103,
    topic: "Memory Basics",
    question: "Which memory is used to store the BIOS?",
    options: [
      { label: "A", text: "RAM" },
      { label: "B", text: "ROM" },
      { label: "C", text: "Cache" },
      { label: "D", text: "Register" },
    ],
    answer: "B. ROM",
  },
  {
    id: 104,
    topic: "Memory Basics",
    question: "What is the difference between primary and secondary memory?",
    options: [
      { label: "A", text: "Primary memory is volatile; secondary memory is non-volatile" },
      { label: "B", text: "Primary memory is non-volatile; secondary memory is volatile" },
      { label: "C", text: "Both are volatile" },
      { label: "D", text: "Both are non-volatile" },
    ],
    answer: "A. Primary memory is volatile; secondary memory is non-volatile",
  },
  {
    id: 105,
    topic: "RAM",
    question: "What is the typical voltage used by DDR4 RAM?",
    options: [
      { label: "A", text: "1.2V" },
      { label: "B", text: "1.5V" },
      { label: "C", text: "1.8V" },
      { label: "D", text: "2.5V" },
    ],
    answer: "A. 1.2V",
  },
  {
    id: 106,
    topic: "RAM",
    question: "What is the maximum capacity of DDR4 RAM per module?",
    options: [
      { label: "A", text: "64 GB" },
      { label: "B", text: "32 GB" },
      { label: "C", text: "16 GB" },
      { label: "D", text: "128 GB" },
    ],
    answer: "A. 64 GB",
  },
  {
    id: 107,
    topic: "ROM",
    question: "What is mask ROM?",
    options: [
      { label: "A", text: "ROM that is programmed during manufacturing" },
      { label: "B", text: "ROM that can be programmed by the user" },
      { label: "C", text: "ROM that can be erased" },
      { label: "D", text: "ROM that is volatile" },
    ],
    answer: "A. ROM that is programmed during manufacturing",
  },
  {
    id: 108,
    topic: "Cache Memory",
    question: "What is the cache coherency problem?",
    options: [
      { label: "A", text: "Inconsistency between cache and main memory" },
      { label: "B", text: "Cache being too small" },
      { label: "C", text: "Cache being too large" },
      { label: "D", text: "Cache being too slow" },
    ],
    answer: "A. Inconsistency between cache and main memory",
  },
  {
    id: 109,
    topic: "Secondary Storage",
    question: "What is the average seek time of a typical HDD?",
    options: [
      { label: "A", text: "8-12 ms" },
      { label: "B", text: "1-2 ms" },
      { label: "C", text: "100-200 ms" },
      { label: "D", text: "1-2 seconds" },
    ],
    answer: "A. 8-12 ms",
  },
  {
    id: 110,
    topic: "Virtual Memory",
    question: "What is the purpose of the MMU (Memory Management Unit)?",
    options: [
      { label: "A", text: "To translate virtual addresses to physical addresses" },
      { label: "B", text: "To manage files" },
      { label: "C", text: "To manage processes" },
      { label: "D", text: "To manage devices" },
    ],
    answer: "A. To translate virtual addresses to physical addresses",
  },
  {
    id: 111,
    topic: "Memory Hierarchy",
    question: "What is the principle of locality?",
    options: [
      { label: "A", text: "Programs tend to access data and instructions in a localized area" },
      { label: "B", text: "Programs are executed sequentially" },
      { label: "C", text: "Programs are executed in parallel" },
      { label: "D", text: "Programs use all memory equally" },
    ],
    answer: "A. Programs tend to access data and instructions in a localized area",
  },
  {
    id: 112,
    topic: "Memory Management",
    question: "What is the buddy system in memory management?",
    options: [
      { label: "A", text: "A memory allocation technique that splits memory into power-of-two blocks" },
      { label: "B", text: "A technique for file management" },
      { label: "C", text: "A technique for process scheduling" },
      { label: "D", text: "A technique for device management" },
    ],
    answer: "A. A memory allocation technique that splits memory into power-of-two blocks",
  },
  {
    id: 113,
    topic: "Memory Units",
    question: "What is the size of a typical memory word in modern computers?",
    options: [
      { label: "A", text: "32 bits or 64 bits" },
      { label: "B", text: "8 bits" },
      { label: "C", text: "16 bits" },
      { label: "D", text: "128 bits" },
    ],
    answer: "A. 32 bits or 64 bits",
  },
  {
    id: 114,
    topic: "Memory Access Methods",
    question: "What is the access time of cache memory typically?",
    options: [
      { label: "A", text: "1-10 nanoseconds" },
      { label: "B", text: "50-100 nanoseconds" },
      { label: "C", text: "1-10 microseconds" },
      { label: "D", text: "1-10 milliseconds" },
    ],
    answer: "A. 1-10 nanoseconds",
  },
  {
    id: 115,
    topic: "Flash Memory",
    question: "What is the typical endurance of an enterprise SSD?",
    options: [
      { label: "A", text: "10,000+ write cycles" },
      { label: "B", text: "1,000 write cycles" },
      { label: "C", text: "100 write cycles" },
      { label: "D", text: "Unlimited" },
    ],
    answer: "A. 10,000+ write cycles",
  },
  {
    id: 116,
    topic: "Optical Storage",
    question: "What is the data transfer rate of a 16x DVD drive?",
    options: [
      { label: "A", text: "21.12 MB/s" },
      { label: "B", text: "16 MB/s" },
      { label: "C", text: "32 MB/s" },
      { label: "D", text: "64 MB/s" },
    ],
    answer: "A. 21.12 MB/s",
  },
  {
    id: 117,
    topic: "Magnetic Storage",
    question: "What is the typical RPM of a desktop HDD?",
    options: [
      { label: "A", text: "7200 RPM" },
      { label: "B", text: "5400 RPM" },
      { label: "C", text: "10,000 RPM" },
      { label: "D", text: "15,000 RPM" },
    ],
    answer: "A. 7200 RPM",
  },
  {
    id: 118,
    topic: "Memory Speed & Performance",
    question: "What is the speed of DDR4-3200 RAM?",
    options: [
      { label: "A", text: "3200 MT/s (megatransfers per second)" },
      { label: "B", text: "3200 MHz" },
      { label: "C", text: "3200 MB/s" },
      { label: "D", text: "3200 GB/s" },
    ],
    answer: "A. 3200 MT/s (megatransfers per second)",
  },
  {
    id: 119,
    topic: "Memory Technologies",
    question: "What is the advantage of 3D NAND flash memory?",
    options: [
      { label: "A", text: "Higher density and lower cost per bit" },
      { label: "B", text: "Faster speed than planar NAND" },
      { label: "C", text: "Lower power consumption" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. Higher density and lower cost per bit",
  },
  {
    id: 120,
    topic: "Memory Errors & Correction",
    question: "What is a chipkill ECC?",
    options: [
      { label: "A", text: "A type of ECC that can recover from multiple bit errors" },
      { label: "B", text: "A type of memory that kills chips" },
      { label: "C", text: "A type of memory that is not ECC" },
      { label: "D", text: "A type of memory that is volatile" },
    ],
    answer: "A. A type of ECC that can recover from multiple bit errors",
  },
  {
    id: 121,
    topic: "Memory Management in OS",
    question: "What is the difference between a page and a frame?",
    options: [
      { label: "A", text: "A page is a logical block of virtual memory; a frame is a physical block of memory" },
      { label: "B", text: "A frame is a logical block; a page is a physical block" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "A page is larger than a frame" },
    ],
    answer: "A. A page is a logical block of virtual memory; a frame is a physical block of memory",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is computer memory and why is it important?",
    answer:
      "Computer memory is a hardware component that stores data and instructions for processing. It is essential because it allows the computer to store, retrieve, and process information quickly. Memory is used to hold the operating system, applications, and user data during operation.",
  },
  {
    question: "What is the difference between RAM and ROM?",
    answer:
      "RAM (Random Access Memory) is volatile memory used for temporary storage of data and programs currently in use. It loses its content when power is turned off. ROM (Read Only Memory) is non-volatile memory used to store firmware and system instructions that are not lost when the computer is turned off.",
  },
  {
    question: "What is cache memory and how does it work?",
    answer:
      "Cache memory is a small, high-speed memory located between the CPU and main memory. It stores frequently accessed data and instructions to reduce the average time to access memory. The cache works on the principle of locality of reference, where programs tend to access data and instructions in a localized area.",
  },
  {
    question: "What is virtual memory?",
    answer:
      "Virtual memory is a memory management technique that uses a portion of the hard disk as extended RAM. It allows programs to use more memory than physically available by swapping data between RAM and disk. This enables running larger applications and multiple programs simultaneously.",
  },
  {
    question: "What is the difference between SRAM and DRAM?",
    answer:
      "SRAM (Static RAM) is faster, more expensive, and does not need to be refreshed. It uses flip-flops to store each bit. DRAM (Dynamic RAM) is slower, cheaper, and needs to be refreshed periodically. It uses capacitors to store each bit and is the most common type of memory used as main memory.",
  },
  {
    question: "What is the memory hierarchy?",
    answer:
      "The memory hierarchy is a structure that organizes different types of memory based on speed, cost, and capacity. From fastest to slowest: Registers, Cache, RAM, SSD, HDD. Each level has different characteristics, and the hierarchy is designed to optimize performance while balancing cost.",
  },
  {
    question: "What is ECC memory and why is it used?",
    answer:
      "ECC (Error Correcting Code) memory is a type of memory that can detect and correct data corruption. It is used in servers and mission-critical systems where data integrity is crucial. ECC memory adds extra bits to each data word to detect and correct errors that may occur due to hardware defects or cosmic radiation.",
  },
  {
    question: "What is the difference between NAND and NOR flash memory?",
    answer:
      "NAND flash memory has higher density, lower cost, and is used in SSDs, USB drives, and memory cards. NOR flash memory has faster read speeds and is used in embedded systems for firmware storage. NAND is organized in blocks and pages, while NOR allows byte-level access.",
  },
];

// ========================== COMPONENT ==========================
export default function ComputerMemoryMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/computer-memory",
        "url": "https://CodeSkipper.in/mcq/computer-memory",
        "name": "Computer Memory Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Computer Memory, covering RAM, ROM, Cache, Virtual Memory, Memory Management, and more.",
        "about": { "@type": "Thing", "name": "Computer Memory MCQ" },
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
              "name": "Computer Memory",
              "item": "https://CodeSkipper.in/mcq/computer-memory",
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
        "@id": "https://CodeSkipper.in/mcq/computer-memory#course",
        "name": "Computer Memory MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Computer Memory exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Computer Memory" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/computer-memory#faq",
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
        <title>Computer Memory MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Computer Memory multiple-choice questions with answers. Covers RAM, ROM, Cache, Virtual Memory, Memory Management, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Computer Memory, MCQs, RAM, ROM, Cache Memory, Virtual Memory, Memory Management, Memory Hierarchy, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/computer-memory" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-memory" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-memory" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/computer-memory" />
        <meta property="og:title" content="Computer Memory MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Computer Memory multiple-choice questions covering RAM, ROM, Cache, Virtual Memory, Memory Management, and more."
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
        <meta name="twitter:title" content="Computer Memory MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Computer Memory multiple-choice questions covering RAM, ROM, Cache, Virtual Memory, Memory Management, and more."
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
              🧠 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Computer Memory <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Computer Memory concepts with 120+ curated MCQs covering RAM, ROM, Cache,
              Virtual Memory, Memory Management, and more. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">14 Topics</span>
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
            Explore Computer Memory Topics
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
            Computer Memory MCQs
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

        {/* ===== RELATED RESOURCES ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔗</span>
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Computer Memory Tutorial", href: "/tutorials/computer-memory", icon: "📖" },
              { title: "Memory Interview Questions", href: "/interview/memory", icon: "💼" },
              { title: "Computer Memory Notes", href: "/notes/computer-memory", icon: "📝" },
              { title: "Computer Fundamentals MCQs", href: "/mcq/computer-fundamental", icon: "📋" },
              { title: "Operating System MCQs", href: "/mcq/operating-system", icon: "⚡" },
              { title: "Hardware MCQs", href: "/mcq/hardware", icon: "🖥️" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Master Computer Memory?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/computer-memory"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/computer-memory"
              className="px-8 py-3 bg-blue-500/30 text-white font-medium rounded-xl hover:bg-blue-500/50 transition-colors border border-white/20"
            >
              View Roadmap
            </Link>
          </div>
        </section>
      </main>
    </CourseLayout>
  );
}