import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- OS Basics (6) -----
  {
    id: 1,
    topic: "OS Basics",
    question: "What is an Operating System?",
    options: [
      { label: "A", text: "Software that manages computer hardware and software resources" },
      { label: "B", text: "A programming language" },
      { label: "C", text: "A type of application software" },
      { label: "D", text: "A hardware component" },
    ],
    answer: "A. Software that manages computer hardware and software resources",
  },
  {
    id: 2,
    topic: "OS Basics",
    question: "Which of the following is NOT an operating system?",
    options: [
      { label: "A", text: "Windows" },
      { label: "B", text: "Linux" },
      { label: "C", text: "macOS" },
      { label: "D", text: "Microsoft Office" },
    ],
    answer: "D. Microsoft Office",
  },
  {
    id: 3,
    topic: "OS Basics",
    question: "What is the kernel of an operating system?",
    options: [
      { label: "A", text: "The core component that manages system resources" },
      { label: "B", text: "A user interface" },
      { label: "C", text: "A file system" },
      { label: "D", text: "A device driver" },
    ],
    answer: "A. The core component that manages system resources",
  },
  {
    id: 4,
    topic: "OS Basics",
    question: "What is the difference between a monolithic and microkernel architecture?",
    options: [
      { label: "A", text: "Monolithic has all services in kernel, microkernel has minimal kernel" },
      { label: "B", text: "Microkernel has all services in kernel, monolithic has minimal kernel" },
      { label: "C", text: "Both have all services in kernel" },
      { label: "D", text: "Both have minimal kernel" },
    ],
    answer: "A. Monolithic has all services in kernel, microkernel has minimal kernel",
  },
  {
    id: 5,
    topic: "OS Basics",
    question: "What is the purpose of system calls in an OS?",
    options: [
      { label: "A", text: "To allow user programs to request services from the kernel" },
      { label: "B", text: "To manage memory allocation" },
      { label: "C", text: "To handle file operations" },
      { label: "D", text: "To manage processes" },
    ],
    answer: "A. To allow user programs to request services from the kernel",
  },
  {
    id: 6,
    topic: "OS Basics",
    question: "What is the bootstrap program in an OS?",
    options: [
      { label: "A", text: "The program that initializes the OS at system startup" },
      { label: "B", text: "A program that manages files" },
      { label: "C", text: "A program that manages memory" },
      { label: "D", text: "A program that handles errors" },
    ],
    answer: "A. The program that initializes the OS at system startup",
  },

  // ----- Process Management (6) -----
  {
    id: 7,
    topic: "Process Management",
    question: "What is a process in an operating system?",
    options: [
      { label: "A", text: "A program in execution" },
      { label: "B", text: "A program stored on disk" },
      { label: "C", text: "A file" },
      { label: "D", text: "A device driver" },
    ],
    answer: "A. A program in execution",
  },
  {
    id: 8,
    topic: "Process Management",
    question: "What is the difference between a process and a thread?",
    options: [
      { label: "A", text: "Processes are independent, threads share resources" },
      { label: "B", text: "Threads are independent, processes share resources" },
      { label: "C", text: "Both are independent" },
      { label: "D", text: "Both share resources" },
    ],
    answer: "A. Processes are independent, threads share resources",
  },
  {
    id: 9,
    topic: "Process Management",
    question: "What are the states of a process?",
    options: [
      { label: "A", text: "New, Running, Waiting, Ready, Terminated" },
      { label: "B", text: "Start, Run, Stop, Pause" },
      { label: "C", text: "Active, Inactive, Suspended" },
      { label: "D", text: "Open, Closed, Pending" },
    ],
    answer: "A. New, Running, Waiting, Ready, Terminated",
  },
  {
    id: 10,
    topic: "Process Management",
    question: "What is a context switch?",
    options: [
      { label: "A", text: "Switching the CPU from one process to another" },
      { label: "B", text: "Switching between threads" },
      { label: "C", text: "Switching between programs" },
      { label: "D", text: "Switching between operating systems" },
    ],
    answer: "A. Switching the CPU from one process to another",
  },
  {
    id: 11,
    topic: "Process Management",
    question: "What is a process control block (PCB)?",
    options: [
      { label: "A", text: "A data structure containing process information" },
      { label: "B", text: "A hardware component" },
      { label: "C", text: "A type of memory" },
      { label: "D", text: "A file system" },
    ],
    answer: "A. A data structure containing process information",
  },
  {
    id: 12,
    topic: "Process Management",
    question: "What is the purpose of scheduling in an OS?",
    options: [
      { label: "A", text: "To allocate CPU time to processes" },
      { label: "B", text: "To allocate memory to processes" },
      { label: "C", text: "To allocate I/O to processes" },
      { label: "D", text: "To allocate files to processes" },
    ],
    answer: "A. To allocate CPU time to processes",
  },

  // ----- CPU Scheduling (6) -----
  {
    id: 13,
    topic: "CPU Scheduling",
    question: "What is the FCFS scheduling algorithm?",
    options: [
      { label: "A", text: "First Come First Served" },
      { label: "B", text: "First Come First Scheduled" },
      { label: "C", text: "Fast CPU First Served" },
      { label: "D", text: "First CPU First Served" },
    ],
    answer: "A. First Come First Served",
  },
  {
    id: 14,
    topic: "CPU Scheduling",
    question: "What is the SJF scheduling algorithm?",
    options: [
      { label: "A", text: "Shortest Job First" },
      { label: "B", text: "Shortest Job Fast" },
      { label: "C", text: "Simple Job First" },
      { label: "D", text: "Standard Job First" },
    ],
    answer: "A. Shortest Job First",
  },
  {
    id: 15,
    topic: "CPU Scheduling",
    question: "What is the Round Robin scheduling algorithm?",
    options: [
      { label: "A", text: "Each process gets a fixed time quantum" },
      { label: "B", text: "Processes run until completion" },
      { label: "C", text: "Shortest process runs first" },
      { label: "D", text: "Priority-based scheduling" },
    ],
    answer: "A. Each process gets a fixed time quantum",
  },
  {
    id: 16,
    topic: "CPU Scheduling",
    question: "What is the difference between preemptive and non-preemptive scheduling?",
    options: [
      { label: "A", text: "Preemptive allows process interruption, non-preemptive doesn't" },
      { label: "B", text: "Non-preemptive allows process interruption, preemptive doesn't" },
      { label: "C", text: "Both allow interruption" },
      { label: "D", text: "Neither allows interruption" },
    ],
    answer: "A. Preemptive allows process interruption, non-preemptive doesn't",
  },
  {
    id: 17,
    topic: "CPU Scheduling",
    question: "What is the priority scheduling algorithm?",
    options: [
      { label: "A", text: "Processes with higher priority run first" },
      { label: "B", text: "Processes with lower priority run first" },
      { label: "C", text: "All processes run equally" },
      { label: "D", text: "Random process selection" },
    ],
    answer: "A. Processes with higher priority run first",
  },
  {
    id: 18,
    topic: "CPU Scheduling",
    question: "What is the purpose of multilevel queue scheduling?",
    options: [
      { label: "A", text: "To have multiple queues for different process types" },
      { label: "B", text: "To have a single queue for all processes" },
      { label: "C", text: "To prioritize all processes equally" },
      { label: "D", text: "To randomize process selection" },
    ],
    answer: "A. To have multiple queues for different process types",
  },

  // ----- Synchronization (6) -----
  {
    id: 19,
    topic: "Synchronization",
    question: "What is a critical section?",
    options: [
      { label: "A", text: "A segment of code that accesses shared resources" },
      { label: "B", text: "A segment of code that doesn't access shared resources" },
      { label: "C", text: "A segment of code that runs only once" },
      { label: "D", text: "A segment of code that runs forever" },
    ],
    answer: "A. A segment of code that accesses shared resources",
  },
  {
    id: 20,
    topic: "Synchronization",
    question: "What is a semaphore?",
    options: [
      { label: "A", text: "A synchronization tool for process coordination" },
      { label: "B", text: "A type of memory" },
      { label: "C", text: "A type of file" },
      { label: "D", text: "A type of process" },
    ],
    answer: "A. A synchronization tool for process coordination",
  },
  {
    id: 21,
    topic: "Synchronization",
    question: "What is the difference between mutex and semaphore?",
    options: [
      { label: "A", text: "Mutex is a binary semaphore, semaphore can be counting" },
      { label: "B", text: "Semaphore is a binary mutex, mutex can be counting" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is used for synchronization" },
    ],
    answer: "A. Mutex is a binary semaphore, semaphore can be counting",
  },
  {
    id: 22,
    topic: "Synchronization",
    question: "What is a deadlock?",
    options: [
      { label: "A", text: "Two or more processes waiting for each other to release resources" },
      { label: "B", text: "A process waiting for its own resource" },
      { label: "C", text: "A process terminating normally" },
      { label: "D", text: "A process running indefinitely" },
    ],
    answer: "A. Two or more processes waiting for each other to release resources",
  },
  {
    id: 23,
    topic: "Synchronization",
    question: "What are the conditions for deadlock?",
    options: [
      { label: "A", text: "Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait" },
      { label: "B", text: "Parallel Processing, Shared Memory, Priority Inversion" },
      { label: "C", text: "Resource Allocation, Process Scheduling, Memory Management" },
      { label: "D", text: "CPU Management, I/O Management, File Management" },
    ],
    answer: "A. Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait",
  },
  {
    id: 24,
    topic: "Synchronization",
    question: "What is the Banker's algorithm used for?",
    options: [
      { label: "A", text: "To prevent deadlock" },
      { label: "B", text: "To detect deadlock" },
      { label: "C", text: "To recover from deadlock" },
      { label: "D", text: "To ignore deadlock" },
    ],
    answer: "A. To prevent deadlock",
  },

  // ----- Memory Management (6) -----
  {
    id: 25,
    topic: "Memory Management",
    question: "What is the purpose of memory management in an OS?",
    options: [
      { label: "A", text: "To manage allocation and deallocation of memory" },
      { label: "B", text: "To manage CPU scheduling" },
      { label: "C", text: "To manage I/O operations" },
      { label: "D", text: "To manage file systems" },
    ],
    answer: "A. To manage allocation and deallocation of memory",
  },
  {
    id: 26,
    topic: "Memory Management",
    question: "What is the difference between physical and logical address space?",
    options: [
      { label: "A", text: "Physical is hardware address, logical is program address" },
      { label: "B", text: "Logical is hardware address, physical is program address" },
      { label: "C", text: "Both are hardware addresses" },
      { label: "D", text: "Both are program addresses" },
    ],
    answer: "A. Physical is hardware address, logical is program address",
  },
  {
    id: 27,
    topic: "Memory Management",
    question: "What is paging in memory management?",
    options: [
      { label: "A", text: "Dividing physical memory into fixed-size blocks called frames" },
      { label: "B", text: "Dividing memory into variable-size blocks" },
      { label: "C", text: "Moving processes between memory and disk" },
      { label: "D", text: "Allocating contiguous memory to processes" },
    ],
    answer: "A. Dividing physical memory into fixed-size blocks called frames",
  },
  {
    id: 28,
    topic: "Memory Management",
    question: "What is the difference between segmentation and paging?",
    options: [
      { label: "A", text: "Segmentation divides by logical units, paging divides by fixed size" },
      { label: "B", text: "Paging divides by logical units, segmentation divides by fixed size" },
      { label: "C", text: "Both divide by logical units" },
      { label: "D", text: "Both divide by fixed size" },
    ],
    answer: "A. Segmentation divides by logical units, paging divides by fixed size",
  },
  {
    id: 29,
    topic: "Memory Management",
    question: "What is virtual memory?",
    options: [
      { label: "A", text: "Memory that appears to be larger than physical memory" },
      { label: "B", text: "Memory that is always physically available" },
      { label: "C", text: "Memory that cannot be accessed" },
      { label: "D", text: "Memory that is only used for the OS" },
    ],
    answer: "A. Memory that appears to be larger than physical memory",
  },
  {
    id: 30,
    topic: "Memory Management",
    question: "What is page fault in virtual memory?",
    options: [
      { label: "A", text: "Accessing a page that is not in memory" },
      { label: "B", text: "Accessing a page that is in memory" },
      { label: "C", text: "A page that is corrupted" },
      { label: "D", text: "A page that is protected" },
    ],
    answer: "A. Accessing a page that is not in memory",
  },

  // ----- Page Replacement (6) -----
  {
    id: 31,
    topic: "Page Replacement",
    question: "What is the FIFO page replacement algorithm?",
    options: [
      { label: "A", text: "Replaces the oldest page in memory" },
      { label: "B", text: "Replaces the least recently used page" },
      { label: "C", text: "Replaces the most recently used page" },
      { label: "D", text: "Replaces a random page" },
    ],
    answer: "A. Replaces the oldest page in memory",
  },
  {
    id: 32,
    topic: "Page Replacement",
    question: "What is the LRU page replacement algorithm?",
    options: [
      { label: "A", text: "Replaces the least recently used page" },
      { label: "B", text: "Replaces the most recently used page" },
      { label: "C", text: "Replaces the oldest page" },
      { label: "D", text: "Replaces the newest page" },
    ],
    answer: "A. Replaces the least recently used page",
  },
  {
    id: 33,
    topic: "Page Replacement",
    question: "What is the Optimal page replacement algorithm?",
    options: [
      { label: "A", text: "Replaces the page that will not be used for the longest time" },
      { label: "B", text: "Replaces the least recently used page" },
      { label: "C", text: "Replaces the oldest page" },
      { label: "D", text: "Replaces a random page" },
    ],
    answer: "A. Replaces the page that will not be used for the longest time",
  },
  {
    id: 34,
    topic: "Page Replacement",
    question: "What is the clock page replacement algorithm?",
    options: [
      { label: "A", text: "A circular buffer approach to page replacement" },
      { label: "B", text: "A stack-based approach to page replacement" },
      { label: "C", text: "A queue-based approach to page replacement" },
      { label: "D", text: "A tree-based approach to page replacement" },
    ],
    answer: "A. A circular buffer approach to page replacement",
  },
  {
    id: 35,
    topic: "Page Replacement",
    question: "What is the purpose of the reference bit in page replacement?",
    options: [
      { label: "A", text: "To track if a page has been accessed" },
      { label: "B", text: "To track if a page has been modified" },
      { label: "C", text: "To track the page location" },
      { label: "D", text: "To track the page size" },
    ],
    answer: "A. To track if a page has been accessed",
  },
  {
    id: 36,
    topic: "Page Replacement",
    question: "What is thrashing in virtual memory?",
    options: [
      { label: "A", text: "Excessive page fault activity reducing performance" },
      { label: "B", text: "Page faults being handled efficiently" },
      { label: "C", text: "Memory being used optimally" },
      { label: "D", text: "Pages being replaced optimally" },
    ],
    answer: "A. Excessive page fault activity reducing performance",
  },

  // ----- File Systems (6) -----
  {
    id: 37,
    topic: "File Systems",
    question: "What is a file system?",
    options: [
      { label: "A", text: "A method of organizing and storing files on storage devices" },
      { label: "B", text: "A type of memory" },
      { label: "C", text: "A type of process" },
      { label: "D", text: "A type of scheduling" },
    ],
    answer: "A. A method of organizing and storing files on storage devices",
  },
  {
    id: 38,
    topic: "File Systems",
    question: "What is the difference between a file and a directory?",
    options: [
      { label: "A", text: "A file stores data, a directory stores files and directories" },
      { label: "B", text: "A directory stores data, a file stores other files" },
      { label: "C", text: "Both store data" },
      { label: "D", text: "Both store directories" },
    ],
    answer: "A. A file stores data, a directory stores files and directories",
  },
  {
    id: 39,
    topic: "File Systems",
    question: "What is the purpose of file allocation tables?",
    options: [
      { label: "A", text: "To track where files are stored on disk" },
      { label: "B", text: "To track which files are open" },
      { label: "C", text: "To track file permissions" },
      { label: "D", text: "To track file sizes" },
    ],
    answer: "A. To track where files are stored on disk",
  },
  {
    id: 40,
    topic: "File Systems",
    question: "What are the common file allocation methods?",
    options: [
      { label: "A", text: "Contiguous, Linked, Indexed" },
      { label: "B", text: "Sequential, Random, Direct" },
      { label: "C", text: "FAT, NTFS, ext4" },
      { label: "D", text: "Primary, Secondary, Tertiary" },
    ],
    answer: "A. Contiguous, Linked, Indexed",
  },
  {
    id: 41,
    topic: "File Systems",
    question: "What is the purpose of file permissions?",
    options: [
      { label: "A", text: "To control access to files" },
      { label: "B", text: "To control file size" },
      { label: "C", text: "To control file location" },
      { label: "D", text: "To control file type" },
    ],
    answer: "A. To control access to files",
  },
  {
    id: 42,
    topic: "File Systems",
    question: "What is the difference between FAT, NTFS, and ext4?",
    options: [
      { label: "A", text: "Different file systems with different features and capabilities" },
      { label: "B", text: "Same file system with different names" },
      { label: "C", text: "Different operating systems" },
      { label: "D", text: "Different types of memory" },
    ],
    answer: "A. Different file systems with different features and capabilities",
  },

  // ----- I/O Management (6) -----
  {
    id: 43,
    topic: "I/O Management",
    question: "What is the purpose of I/O management in an OS?",
    options: [
      { label: "A", text: "To manage input and output devices" },
      { label: "B", text: "To manage memory" },
      { label: "C", text: "To manage processes" },
      { label: "D", text: "To manage files" },
    ],
    answer: "A. To manage input and output devices",
  },
  {
    id: 44,
    topic: "I/O Management",
    question: "What is a device driver?",
    options: [
      { label: "A", text: "Software that controls a specific I/O device" },
      { label: "B", text: "A hardware component" },
      { label: "C", text: "A type of file" },
      { label: "D", text: "A type of memory" },
    ],
    answer: "A. Software that controls a specific I/O device",
  },
  {
    id: 45,
    topic: "I/O Management",
    question: "What is the difference between polling and interrupts?",
    options: [
      { label: "A", text: "Polling checks device status, interrupts are triggered by device" },
      { label: "B", text: "Interrupts check device status, polling is triggered by device" },
      { label: "C", text: "Both check device status" },
      { label: "D", text: "Both are triggered by device" },
    ],
    answer: "A. Polling checks device status, interrupts are triggered by device",
  },
  {
    id: 46,
    topic: "I/O Management",
    question: "What is DMA (Direct Memory Access)?",
    options: [
      { label: "A", text: "Allowing I/O devices to access memory without CPU intervention" },
      { label: "B", text: "Direct CPU access to memory" },
      { label: "C", text: "Memory access through the CPU" },
      { label: "D", text: "Memory access through the OS" },
    ],
    answer: "A. Allowing I/O devices to access memory without CPU intervention",
  },
  {
    id: 47,
    topic: "I/O Management",
    question: "What is the purpose of buffering in I/O?",
    options: [
      { label: "A", text: "To temporarily store data during I/O operations" },
      { label: "B", text: "To permanently store data" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To compress data" },
    ],
    answer: "A. To temporarily store data during I/O operations",
  },
  {
    id: 48,
    topic: "I/O Management",
    question: "What is the purpose of spooling in I/O?",
    options: [
      { label: "A", text: "To queue jobs for output devices" },
      { label: "B", text: "To delete jobs" },
      { label: "C", text: "To prioritize jobs" },
      { label: "D", text: "To cancel jobs" },
    ],
    answer: "A. To queue jobs for output devices",
  },

  // ----- Storage Management (6) -----
  {
    id: 49,
    topic: "Storage Management",
    question: "What is the difference between a hard disk and SSD?",
    options: [
      { label: "A", text: "HDD uses mechanical parts, SSD uses flash memory" },
      { label: "B", text: "SSD uses mechanical parts, HDD uses flash memory" },
      { label: "C", text: "Both use mechanical parts" },
      { label: "D", text: "Both use flash memory" },
    ],
    answer: "A. HDD uses mechanical parts, SSD uses flash memory",
  },
  {
    id: 50,
    topic: "Storage Management",
    question: "What is disk scheduling?",
    options: [
      { label: "A", text: "The process of ordering disk requests to optimize performance" },
      { label: "B", text: "The process of formatting disks" },
      { label: "C", text: "The process of partitioning disks" },
      { label: "D", text: "The process of defragmenting disks" },
    ],
    answer: "A. The process of ordering disk requests to optimize performance",
  },
  {
    id: 51,
    topic: "Storage Management",
    question: "What is the FCFS disk scheduling algorithm?",
    options: [
      { label: "A", text: "First Come First Served" },
      { label: "B", text: "First Cylinder First Served" },
      { label: "C", text: "Fast Cylinder First Served" },
      { label: "D", text: "File Cylinder First Served" },
    ],
    answer: "A. First Come First Served",
  },
  {
    id: 52,
    topic: "Storage Management",
    question: "What is the SCAN disk scheduling algorithm?",
    options: [
      { label: "A", text: "Moves disk arm in one direction, then reverses" },
      { label: "B", text: "Moves disk arm in a circular pattern" },
      { label: "C", text: "Moves disk arm to nearest request" },
      { label: "D", text: "Moves disk arm to farthest request" },
    ],
    answer: "A. Moves disk arm in one direction, then reverses",
  },
  {
    id: 53,
    topic: "Storage Management",
    question: "What is the purpose of disk formatting?",
    options: [
      { label: "A", text: "To prepare the disk for storing data" },
      { label: "B", text: "To delete all data" },
      { label: "C", text: "To optimize disk performance" },
      { label: "D", text: "To check for errors" },
    ],
    answer: "A. To prepare the disk for storing data",
  },
  {
    id: 54,
    topic: "Storage Management",
    question: "What is RAID?",
    options: [
      { label: "A", text: "Redundant Array of Independent Disks" },
      { label: "B", text: "Random Access Independent Disks" },
      { label: "C", text: "Redundant Access Independent Disks" },
      { label: "D", text: "Random Array of Independent Disks" },
    ],
    answer: "A. Redundant Array of Independent Disks",
  },

  // ----- Security (6) -----
  {
    id: 55,
    topic: "Security",
    question: "What is the purpose of OS security?",
    options: [
      { label: "A", text: "To protect system resources and data from unauthorized access" },
      { label: "B", text: "To improve system performance" },
      { label: "C", text: "To manage memory" },
      { label: "D", text: "To manage processes" },
    ],
    answer: "A. To protect system resources and data from unauthorized access",
  },
  {
    id: 56,
    topic: "Security",
    question: "What is the difference between a virus and a worm?",
    options: [
      { label: "A", text: "Virus needs host program, worm is self-replicating" },
      { label: "B", text: "Worm needs host program, virus is self-replicating" },
      { label: "C", text: "Both need host programs" },
      { label: "D", text: "Both are self-replicating" },
    ],
    answer: "A. Virus needs host program, worm is self-replicating",
  },
  {
    id: 57,
    topic: "Security",
    question: "What is the purpose of user authentication?",
    options: [
      { label: "A", text: "To verify the identity of a user" },
      { label: "B", text: "To provide user interface" },
      { label: "C", text: "To manage user files" },
      { label: "D", text: "To schedule user tasks" },
    ],
    answer: "A. To verify the identity of a user",
  },
  {
    id: 58,
    topic: "Security",
    question: "What is the difference between authorization and authentication?",
    options: [
      { label: "A", text: "Authentication verifies identity, authorization grants permissions" },
      { label: "B", text: "Authorization verifies identity, authentication grants permissions" },
      { label: "C", text: "Both verify identity" },
      { label: "D", text: "Both grant permissions" },
    ],
    answer: "A. Authentication verifies identity, authorization grants permissions",
  },
  {
    id: 59,
    topic: "Security",
    question: "What is a firewall in an OS?",
    options: [
      { label: "A", text: "A system that monitors and controls network traffic" },
      { label: "B", text: "A system that manages memory" },
      { label: "C", text: "A system that manages processes" },
      { label: "D", text: "A system that manages files" },
    ],
    answer: "A. A system that monitors and controls network traffic",
  },
  {
    id: 60,
    topic: "Security",
    question: "What is the principle of least privilege in OS security?",
    options: [
      { label: "A", text: "Users should have only the minimum privileges needed" },
      { label: "B", text: "Users should have all privileges" },
      { label: "C", text: "Users should have no privileges" },
      { label: "D", text: "Users should have random privileges" },
    ],
    answer: "A. Users should have only the minimum privileges needed",
  },

  // ----- Distributed OS (6) -----
  {
    id: 61,
    topic: "Distributed OS",
    question: "What is a distributed operating system?",
    options: [
      { label: "A", text: "An OS that runs on multiple interconnected computers" },
      { label: "B", text: "An OS that runs on a single computer" },
      { label: "C", text: "An OS that runs on mobile devices" },
      { label: "D", text: "An OS that runs on embedded systems" },
    ],
    answer: "A. An OS that runs on multiple interconnected computers",
  },
  {
    id: 62,
    topic: "Distributed OS",
    question: "What is the difference between a distributed and a network OS?",
    options: [
      { label: "A", text: "Distributed OS presents a single system image, network OS doesn't" },
      { label: "B", text: "Network OS presents a single system image, distributed OS doesn't" },
      { label: "C", text: "Both present a single system image" },
      { label: "D", text: "Neither presents a single system image" },
    ],
    answer: "A. Distributed OS presents a single system image, network OS doesn't",
  },
  {
    id: 63,
    topic: "Distributed OS",
    question: "What is the purpose of process migration in distributed systems?",
    options: [
      { label: "A", text: "To move processes between systems for load balancing" },
      { label: "B", text: "To terminate processes" },
      { label: "C", text: "To create new processes" },
      { label: "D", text: "To schedule processes" },
    ],
    answer: "A. To move processes between systems for load balancing",
  },
  {
    id: 64,
    topic: "Distributed OS",
    question: "What is a distributed file system?",
    options: [
      { label: "A", text: "A file system that spans multiple computers" },
      { label: "B", text: "A file system on a single computer" },
      { label: "C", text: "A file system on a mobile device" },
      { label: "D", text: "A file system on a cloud server" },
    ],
    answer: "A. A file system that spans multiple computers",
  },
  {
    id: 65,
    topic: "Distributed OS",
    question: "What is the purpose of remote procedure calls (RPC) in distributed systems?",
    options: [
      { label: "A", text: "To allow programs to execute procedures on remote systems" },
      { label: "B", text: "To allow programs to execute locally" },
      { label: "C", text: "To manage memory remotely" },
      { label: "D", text: "To manage files remotely" },
    ],
    answer: "A. To allow programs to execute procedures on remote systems",
  },
  {
    id: 66,
    topic: "Distributed OS",
    question: "What is the difference between RPC and RMI?",
    options: [
      { label: "A", text: "RPC is for procedural languages, RMI is for object-oriented languages" },
      { label: "B", text: "RMI is for procedural languages, RPC is for object-oriented languages" },
      { label: "C", text: "Both are for procedural languages" },
      { label: "D", text: "Both are for object-oriented languages" },
    ],
    answer: "A. RPC is for procedural languages, RMI is for object-oriented languages",
  },

  // ----- Real-time OS (6) -----
  {
    id: 67,
    topic: "Real-time OS",
    question: "What is a real-time operating system?",
    options: [
      { label: "A", text: "An OS designed for applications with strict timing requirements" },
      { label: "B", text: "An OS that runs in real time" },
      { label: "C", text: "An OS that runs slowly" },
      { label: "D", text: "An OS that runs on mobile devices" },
    ],
    answer: "A. An OS designed for applications with strict timing requirements",
  },
  {
    id: 68,
    topic: "Real-time OS",
    question: "What is the difference between hard and soft real-time systems?",
    options: [
      { label: "A", text: "Hard RTOS must meet deadlines, soft RTOS can miss deadlines occasionally" },
      { label: "B", text: "Soft RTOS must meet deadlines, hard RTOS can miss deadlines occasionally" },
      { label: "C", text: "Both must meet deadlines" },
      { label: "D", text: "Both can miss deadlines" },
    ],
    answer: "A. Hard RTOS must meet deadlines, soft RTOS can miss deadlines occasionally",
  },
  {
    id: 69,
    topic: "Real-time OS",
    question: "What is the purpose of task scheduling in RTOS?",
    options: [
      { label: "A", text: "To ensure timely execution of tasks" },
      { label: "B", text: "To execute tasks randomly" },
      { label: "C", text: "To execute tasks slowly" },
      { label: "D", text: "To execute tasks sequentially" },
    ],
    answer: "A. To ensure timely execution of tasks",
  },
  {
    id: 70,
    topic: "Real-time OS",
    question: "What is the difference between preemptive and non-preemptive scheduling in RTOS?",
    options: [
      { label: "A", text: "Preemptive allows higher priority tasks to interrupt, non-preemptive doesn't" },
      { label: "B", text: "Non-preemptive allows higher priority tasks to interrupt, preemptive doesn't" },
      { label: "C", text: "Both allow interruptions" },
      { label: "D", text: "Neither allows interruptions" },
    ],
    answer: "A. Preemptive allows higher priority tasks to interrupt, non-preemptive doesn't",
  },
  {
    id: 71,
    topic: "Real-time OS",
    question: "What is priority inversion in RTOS?",
    options: [
      { label: "A", text: "A lower priority task holding a resource needed by a higher priority task" },
      { label: "B", text: "A higher priority task holding a resource needed by a lower priority task" },
      { label: "C", text: "Tasks having equal priority" },
      { label: "D", text: "Tasks having random priority" },
    ],
    answer: "A. A lower priority task holding a resource needed by a higher priority task",
  },
  {
    id: 72,
    topic: "Real-time OS",
    question: "What is the purpose of priority inheritance in RTOS?",
    options: [
      { label: "A", text: "To temporarily increase priority of a task holding a resource" },
      { label: "B", text: "To temporarily decrease priority of a task holding a resource" },
      { label: "C", text: "To permanently increase priority" },
      { label: "D", text: "To permanently decrease priority" },
    ],
    answer: "A. To temporarily increase priority of a task holding a resource",
  },

  // ----- Linux OS (6) -----
  {
    id: 73,
    topic: "Linux OS",
    question: "Who created the Linux kernel?",
    options: [
      { label: "A", text: "Linus Torvalds" },
      { label: "B", text: "Richard Stallman" },
      { label: "C", text: "Bill Gates" },
      { label: "D", text: "Steve Jobs" },
    ],
    answer: "A. Linus Torvalds",
  },
  {
    id: 74,
    topic: "Linux OS",
    question: "What is the GNU Project?",
    options: [
      { label: "A", text: "A project to create a free Unix-like operating system" },
      { label: "B", text: "A project to create Windows" },
      { label: "C", text: "A project to create macOS" },
      { label: "D", text: "A project to create Android" },
    ],
    answer: "A. A project to create a free Unix-like operating system",
  },
  {
    id: 75,
    topic: "Linux OS",
    question: "What is the shell in Linux?",
    options: [
      { label: "A", text: "A command-line interface to interact with the OS" },
      { label: "B", text: "A graphical user interface" },
      { label: "C", text: "A file system" },
      { label: "D", text: "A type of memory" },
    ],
    answer: "A. A command-line interface to interact with the OS",
  },
  {
    id: 76,
    topic: "Linux OS",
    question: "What is the difference between Linux and Unix?",
    options: [
      { label: "A", text: "Linux is a free version of Unix" },
      { label: "B", text: "Unix is a free version of Linux" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is related" },
    ],
    answer: "A. Linux is a free version of Unix",
  },
  {
    id: 77,
    topic: "Linux OS",
    question: "What is the purpose of the /etc directory in Linux?",
    options: [
      { label: "A", text: "To store system configuration files" },
      { label: "B", text: "To store user files" },
      { label: "C", text: "To store device files" },
      { label: "D", text: "To store temporary files" },
    ],
    answer: "A. To store system configuration files",
  },
  {
    id: 78,
    topic: "Linux OS",
    question: "What is the purpose of the /dev directory in Linux?",
    options: [
      { label: "A", text: "To store device files" },
      { label: "B", text: "To store system configuration files" },
      { label: "C", text: "To store user files" },
      { label: "D", text: "To store temporary files" },
    ],
    answer: "A. To store device files",
  },

  // ----- Windows OS (6) -----
  {
    id: 79,
    topic: "Windows OS",
    question: "What is the Windows NT architecture?",
    options: [
      { label: "A", text: "A microkernel-based architecture" },
      { label: "B", text: "A monolithic architecture" },
      { label: "C", text: "A hybrid architecture" },
      { label: "D", text: "A layered architecture" },
    ],
    answer: "C. A hybrid architecture",
  },
  {
    id: 80,
    topic: "Windows OS",
    question: "What is the Registry in Windows?",
    options: [
      { label: "A", text: "A database for system configuration" },
      { label: "B", text: "A file system" },
      { label: "C", text: "A memory management system" },
      { label: "D", text: "A process management system" },
    ],
    answer: "A. A database for system configuration",
  },
  {
    id: 81,
    topic: "Windows OS",
    question: "What is the purpose of the Windows Kernel?",
    options: [
      { label: "A", text: "To manage system resources" },
      { label: "B", text: "To provide user interface" },
      { label: "C", text: "To manage files" },
      { label: "D", text: "To manage networks" },
    ],
    answer: "A. To manage system resources",
  },
  {
    id: 82,
    topic: "Windows OS",
    question: "What is the difference between Windows 10 and Windows 11?",
    options: [
      { label: "A", text: "Windows 11 has updated UI, better performance, and new features" },
      { label: "B", text: "Windows 10 has updated UI, Windows 11 has better performance" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Windows 11 is discontinued" },
    ],
    answer: "A. Windows 11 has updated UI, better performance, and new features",
  },
  {
    id: 83,
    topic: "Windows OS",
    question: "What is the purpose of the Windows Update service?",
    options: [
      { label: "A", text: "To provide security patches and feature updates" },
      { label: "B", text: "To uninstall applications" },
      { label: "C", text: "To manage files" },
      { label: "D", text: "To manage devices" },
    ],
    answer: "A. To provide security patches and feature updates",
  },
  {
    id: 84,
    topic: "Windows OS",
    question: "What is the difference between Windows Subsystem for Linux (WSL) and running Linux on a VM?",
    options: [
      { label: "A", text: "WSL uses less resources and provides better integration with Windows" },
      { label: "B", text: "VM uses less resources than WSL" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "WSL cannot run Linux applications" },
    ],
    answer: "A. WSL uses less resources and provides better integration with Windows",
  },

  // ----- Android OS (6) -----
  {
    id: 85,
    topic: "Android OS",
    question: "Who developed the Android operating system?",
    options: [
      { label: "A", text: "Google" },
      { label: "B", text: "Apple" },
      { label: "C", text: "Microsoft" },
      { label: "D", text: "Linux Foundation" },
    ],
    answer: "A. Google",
  },
  {
    id: 86,
    topic: "Android OS",
    question: "What is the Android kernel based on?",
    options: [
      { label: "A", text: "Linux kernel" },
      { label: "B", text: "Windows kernel" },
      { label: "C", text: "macOS kernel" },
      { label: "D", text: "Unix kernel" },
    ],
    answer: "A. Linux kernel",
  },
  {
    id: 87,
    topic: "Android OS",
    question: "What is the purpose of the Android runtime (ART)?",
    options: [
      { label: "A", text: "To execute Android applications" },
      { label: "B", text: "To manage files" },
      { label: "C", text: "To manage devices" },
      { label: "D", text: "To manage networks" },
    ],
    answer: "A. To execute Android applications",
  },
  {
    id: 88,
    topic: "Android OS",
    question: "What is the difference between Android and iOS?",
    options: [
      { label: "A", text: "Android is open source, iOS is proprietary" },
      { label: "B", text: "iOS is open source, Android is proprietary" },
      { label: "C", text: "Both are open source" },
      { label: "D", text: "Both are proprietary" },
    ],
    answer: "A. Android is open source, iOS is proprietary",
  },
  {
    id: 89,
    topic: "Android OS",
    question: "What is an APK file in Android?",
    options: [
      { label: "A", text: "Android Package file for app installation" },
      { label: "B", text: "Android Kernel file" },
      { label: "C", text: "Android Configuration file" },
      { label: "D", text: "Android Resource file" },
    ],
    answer: "A. Android Package file for app installation",
  },
  {
    id: 90,
    topic: "Android OS",
    question: "What is the purpose of Android permissions?",
    options: [
      { label: "A", text: "To control app access to system resources" },
      { label: "B", text: "To control app installation" },
      { label: "C", text: "To control app deletion" },
      { label: "D", text: "To control app updates" },
    ],
    answer: "A. To control app access to system resources",
  },

  // ----- Virtualization (6) -----
  {
    id: 91,
    topic: "Virtualization",
    question: "What is virtualization in computing?",
    options: [
      { label: "A", text: "Creating virtual versions of computing resources" },
      { label: "B", text: "Creating physical versions of computing resources" },
      { label: "C", text: "Deleting computing resources" },
      { label: "D", text: "Modifying computing resources" },
    ],
    answer: "A. Creating virtual versions of computing resources",
  },
  {
    id: 92,
    topic: "Virtualization",
    question: "What is the difference between Type 1 and Type 2 hypervisors?",
    options: [
      { label: "A", text: "Type 1 runs on bare metal, Type 2 runs on host OS" },
      { label: "B", text: "Type 2 runs on bare metal, Type 1 runs on host OS" },
      { label: "C", text: "Both run on bare metal" },
      { label: "D", text: "Both run on host OS" },
    ],
    answer: "A. Type 1 runs on bare metal, Type 2 runs on host OS",
  },
  {
    id: 93,
    topic: "Virtualization",
    question: "What is the purpose of containerization (Docker)?",
    options: [
      { label: "A", text: "To package applications with their dependencies" },
      { label: "B", text: "To create virtual machines" },
      { label: "C", text: "To manage networks" },
      { label: "D", text: "To manage storage" },
    ],
    answer: "A. To package applications with their dependencies",
  },
  {
    id: 94,
    topic: "Virtualization",
    question: "What is the difference between virtual machines and containers?",
    options: [
      { label: "A", text: "VMs include an entire OS, containers share the host OS" },
      { label: "B", text: "Containers include an entire OS, VMs share the host OS" },
      { label: "C", text: "Both include an entire OS" },
      { label: "D", text: "Both share the host OS" },
    ],
    answer: "A. VMs include an entire OS, containers share the host OS",
  },
  {
    id: 95,
    topic: "Virtualization",
    question: "What is the purpose of the hypervisor?",
    options: [
      { label: "A", text: "To manage virtual machines" },
      { label: "B", text: "To manage physical machines" },
      { label: "C", text: "To manage networks" },
      { label: "D", text: "To manage storage" },
    ],
    answer: "A. To manage virtual machines",
  },
  {
    id: 96,
    topic: "Virtualization",
    question: "What is the purpose of cloud computing?",
    options: [
      { label: "A", text: "To provide on-demand computing resources over the internet" },
      { label: "B", text: "To provide local computing resources" },
      { label: "C", text: "To delete computing resources" },
      { label: "D", text: "To slow down computing resources" },
    ],
    answer: "A. To provide on-demand computing resources over the internet",
  },

  // ----- Additional Questions to reach 120+ (24 more) -----
  {
    id: 97,
    topic: "OS Basics",
    question: "What is the difference between 32-bit and 64-bit operating systems?",
    options: [
      { label: "A", text: "64-bit can address more memory and has better performance" },
      { label: "B", text: "32-bit can address more memory than 64-bit" },
      { label: "C", text: "Both can address the same memory" },
      { label: "D", text: "64-bit is slower than 32-bit" },
    ],
    answer: "A. 64-bit can address more memory and has better performance",
  },
  {
    id: 98,
    topic: "Process Management",
    question: "What is a daemon process?",
    options: [
      { label: "A", text: "A background process that provides system services" },
      { label: "B", text: "A user interface process" },
      { label: "C", text: "A file management process" },
      { label: "D", text: "A memory management process" },
    ],
    answer: "A. A background process that provides system services",
  },
  {
    id: 99,
    topic: "CPU Scheduling",
    question: "What is the purpose of multi-level feedback queue scheduling?",
    options: [
      { label: "A", text: "To allow processes to move between queues based on behavior" },
      { label: "B", text: "To keep all processes in one queue" },
      { label: "C", text: "To randomize process selection" },
      { label: "D", text: "To prioritize all processes equally" },
    ],
    answer: "A. To allow processes to move between queues based on behavior",
  },
  {
    id: 100,
    topic: "Synchronization",
    question: "What is a monitor in process synchronization?",
    options: [
      { label: "A", text: "A high-level synchronization construct" },
      { label: "B", text: "A low-level synchronization construct" },
      { label: "C", text: "A type of memory" },
      { label: "D", text: "A type of process" },
    ],
    answer: "A. A high-level synchronization construct",
  },
  {
    id: 101,
    topic: "Memory Management",
    question: "What is the purpose of the memory management unit (MMU)?",
    options: [
      { label: "A", text: "To translate virtual to physical addresses" },
      { label: "B", text: "To manage CPU scheduling" },
      { label: "C", text: "To manage I/O operations" },
      { label: "D", text: "To manage file systems" },
    ],
    answer: "A. To translate virtual to physical addresses",
  },
  {
    id: 102,
    topic: "Page Replacement",
    question: "What is the purpose of the modified bit in page tables?",
    options: [
      { label: "A", text: "To track if a page has been modified" },
      { label: "B", text: "To track if a page has been accessed" },
      { label: "C", text: "To track the page location" },
      { label: "D", text: "To track the page size" },
    ],
    answer: "A. To track if a page has been modified",
  },
  {
    id: 103,
    topic: "File Systems",
    question: "What is the purpose of file system journaling?",
    options: [
      { label: "A", text: "To maintain a log of file system changes for recovery" },
      { label: "B", text: "To speed up file access" },
      { label: "C", text: "To compress files" },
      { label: "D", text: "To encrypt files" },
    ],
    answer: "A. To maintain a log of file system changes for recovery",
  },
  {
    id: 104,
    topic: "I/O Management",
    question: "What is the difference between synchronous and asynchronous I/O?",
    options: [
      { label: "A", text: "Synchronous I/O blocks until complete, asynchronous I/O doesn't" },
      { label: "B", text: "Asynchronous I/O blocks until complete, synchronous I/O doesn't" },
      { label: "C", text: "Both block until complete" },
      { label: "D", text: "Neither blocks until complete" },
    ],
    answer: "A. Synchronous I/O blocks until complete, asynchronous I/O doesn't",
  },
  {
    id: 105,
    topic: "Storage Management",
    question: "What is the purpose of disk defragmentation?",
    options: [
      { label: "A", text: "To reorganize files for better performance" },
      { label: "B", text: "To delete files" },
      { label: "C", text: "To compress files" },
      { label: "D", text: "To encrypt files" },
    ],
    answer: "A. To reorganize files for better performance",
  },
  {
    id: 106,
    topic: "Security",
    question: "What is a Trojan horse in OS security?",
    options: [
      { label: "A", text: "Malicious software disguised as legitimate software" },
      { label: "B", text: "A virus that replicates itself" },
      { label: "C", text: "A self-replicating worm" },
      { label: "D", text: "A harmless program" },
    ],
    answer: "A. Malicious software disguised as legitimate software",
  },
  {
    id: 107,
    topic: "Distributed OS",
    question: "What is the purpose of distributed consensus algorithms?",
    options: [
      { label: "A", text: "To ensure agreement among distributed systems" },
      { label: "B", text: "To increase performance" },
      { label: "C", text: "To decrease latency" },
      { label: "D", text: "To improve security" },
    ],
    answer: "A. To ensure agreement among distributed systems",
  },
  {
    id: 108,
    topic: "Real-time OS",
    question: "What is the purpose of the rate-monotonic scheduling algorithm?",
    options: [
      { label: "A", text: "To schedule periodic tasks based on their periods" },
      { label: "B", text: "To schedule tasks randomly" },
      { label: "C", text: "To schedule tasks based on priority" },
      { label: "D", text: "To schedule tasks based on size" },
    ],
    answer: "A. To schedule periodic tasks based on their periods",
  },
  {
    id: 109,
    topic: "Linux OS",
    question: "What is the purpose of the 'ls' command in Linux?",
    options: [
      { label: "A", text: "To list directory contents" },
      { label: "B", text: "To list processes" },
      { label: "C", text: "To list files" },
      { label: "D", text: "To list directories" },
    ],
    answer: "A. To list directory contents",
  },
  {
    id: 110,
    topic: "Windows OS",
    question: "What is the purpose of the Task Manager in Windows?",
    options: [
      { label: "A", text: "To manage processes and system performance" },
      { label: "B", text: "To manage files" },
      { label: "C", text: "To manage networks" },
      { label: "D", text: "To manage devices" },
    ],
    answer: "A. To manage processes and system performance",
  },
  {
    id: 111,
    topic: "Android OS",
    question: "What is the purpose of the Android application lifecycle?",
    options: [
      { label: "A", text: "To manage app states during execution" },
      { label: "B", text: "To manage app installation" },
      { label: "C", text: "To manage app deletion" },
      { label: "D", text: "To manage app updates" },
    ],
    answer: "A. To manage app states during execution",
  },
  {
    id: 112,
    topic: "Virtualization",
    question: "What is the difference between virtualization and emulation?",
    options: [
      { label: "A", text: "Virtualization is faster, emulation simulates hardware" },
      { label: "B", text: "Emulation is faster, virtualization simulates hardware" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is used in modern computing" },
    ],
    answer: "A. Virtualization is faster, emulation simulates hardware",
  },
  {
    id: 113,
    topic: "OS Basics",
    question: "What is the purpose of the boot loader?",
    options: [
      { label: "A", text: "To load the operating system into memory" },
      { label: "B", text: "To manage files" },
      { label: "C", text: "To manage processes" },
      { label: "D", text: "To manage memory" },
    ],
    answer: "A. To load the operating system into memory",
  },
  {
    id: 114,
    topic: "Process Management",
    question: "What is the purpose of the 'fork' system call in Unix/Linux?",
    options: [
      { label: "A", text: "To create a new process" },
      { label: "B", text: "To create a new file" },
      { label: "C", text: "To create a new directory" },
      { label: "D", text: "To create a new thread" },
    ],
    answer: "A. To create a new process",
  },
  {
    id: 115,
    topic: "Memory Management",
    question: "What is the purpose of the TLB (Translation Lookaside Buffer)?",
    options: [
      { label: "A", text: "To cache page table entries" },
      { label: "B", text: "To manage file system" },
      { label: "C", text: "To manage I/O" },
      { label: "D", text: "To manage processes" },
    ],
    answer: "A. To cache page table entries",
  },
  {
    id: 116,
    topic: "Security",
    question: "What is the purpose of encryption in OS security?",
    options: [
      { label: "A", text: "To protect data from unauthorized access" },
      { label: "B", text: "To protect data from corruption" },
      { label: "C", text: "To protect data from deletion" },
      { label: "D", text: "To protect data from compression" },
    ],
    answer: "A. To protect data from unauthorized access",
  },
  {
    id: 117,
    topic: "Distributed OS",
    question: "What is the CAP theorem in distributed systems?",
    options: [
      { label: "A", text: "Consistency, Availability, Partition tolerance" },
      { label: "B", text: "Consistency, Availability, Performance" },
      { label: "C", text: "Consistency, Availability, Security" },
      { label: "D", text: "Consistency, Availability, Scalability" },
    ],
    answer: "A. Consistency, Availability, Partition tolerance",
  },
  {
    id: 118,
    topic: "Linux OS",
    question: "What is the purpose of the 'chmod' command in Linux?",
    options: [
      { label: "A", text: "To change file permissions" },
      { label: "B", text: "To change file owner" },
      { label: "C", text: "To change file content" },
      { label: "D", text: "To change file location" },
    ],
    answer: "A. To change file permissions",
  },
  {
    id: 119,
    topic: "Windows OS",
    question: "What is the purpose of the Control Panel in Windows?",
    options: [
      { label: "A", text: "To manage system settings" },
      { label: "B", text: "To manage files" },
      { label: "C", text: "To manage networks" },
      { label: "D", text: "To manage devices" },
    ],
    answer: "A. To manage system settings",
  },
  {
    id: 120,
    topic: "Virtualization",
    question: "What is the difference between IaaS, PaaS, and SaaS?",
    options: [
      { label: "A", text: "IaaS provides infrastructure, PaaS provides platform, SaaS provides software" },
      { label: "B", text: "PaaS provides infrastructure, IaaS provides platform, SaaS provides software" },
      { label: "C", text: "SaaS provides infrastructure, IaaS provides platform, PaaS provides software" },
      { label: "D", text: "All provide the same service" },
    ],
    answer: "A. IaaS provides infrastructure, PaaS provides platform, SaaS provides software",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is an Operating System?",
    answer:
      "An Operating System (OS) is system software that manages computer hardware and software resources and provides common services for computer programs. It acts as an intermediary between the user and the computer hardware.",
  },
  {
    question: "What are the main functions of an OS?",
    answer:
      "The main functions include process management, memory management, file system management, I/O management, security, and providing a user interface. It also handles resource allocation and scheduling.",
  },
  {
    question: "What is the difference between a process and a thread?",
    answer:
      "A process is a program in execution with its own memory space. A thread is a lightweight unit of execution within a process that shares the process's memory space. Threads are more efficient for communication than processes.",
  },
  {
    question: "What is virtual memory?",
    answer:
      "Virtual memory is a memory management technique that provides an illusion of a larger memory space than physical memory. It uses disk space as an extension of RAM and allows programs to run that require more memory than physically available.",
  },
  {
    question: "What is the difference between Linux and Windows?",
    answer:
      "Linux is open-source and free, while Windows is proprietary and requires a license. Linux is highly customizable and popular for servers, while Windows is more user-friendly and widely used on desktop computers.",
  },
  {
    question: "What are the latest trends in OS development?",
    answer:
      "Current trends include lightweight containers (Docker), microkernel architectures, cloud-native operating systems, AI-powered system management, improved security features, and enhanced support for IoT and edge devices.",
  },
];

// ========================== COMPONENT ==========================
export default function OperatingSystemMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/operating-system",
        "url": "https://CodeSkipper.in/mcq/operating-system",
        "name": "Operating System Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Operating Systems, covering process management, memory management, file systems, scheduling, and more.",
        "about": { "@type": "Thing", "name": "Operating System MCQ" },
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
              "name": "Operating System",
              "item": "https://CodeSkipper.in/mcq/operating-system",
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
        "@id": "https://CodeSkipper.in/mcq/operating-system#course",
        "name": "Operating System MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Operating System exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Operating System" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/operating-system#faq",
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
        <title>Operating System MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Operating System multiple-choice questions with answers. Covers process management, memory management, file systems, scheduling, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Operating System, MCQs, OS, Process Management, Memory Management, File System, Scheduling, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/operating-system" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/operating-system" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/operating-system" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/operating-system" />
        <meta property="og:title" content="Operating System MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Operating System multiple-choice questions covering process management, memory management, file systems, scheduling, and more."
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
        <meta name="twitter:title" content="Operating System MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Operating System multiple-choice questions covering process management, memory management, file systems, scheduling, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              💻 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Operating System <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Operating Systems with 120+ curated MCQs covering process management,
              memory management, file systems, scheduling, and more. Perfect for GATE, interviews,
              and university exams.
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
                <span className="text-sm font-medium">Exam Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore OS Topics
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
            Operating System MCQs
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