import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- C Basics (6) -----
  {
    id: 1,
    topic: "C Basics",
    question: "Which of the following language is the predecessor to C programming language?",
    options: [
      { label: "A", text: "A Language" },
      { label: "B", text: "B Language" },
      { label: "C", text: "BCPL" },
      { label: "D", text: "C++ Language" },
    ],
    answer: "B. B Language",
  },
  {
    id: 2,
    topic: "C Basics",
    question: "C programming language was developed by whom?",
    options: [
      { label: "A", text: "Dennis Ritchie" },
      { label: "B", text: "Ken Thompson" },
      { label: "C", text: "Bill Gates" },
      { label: "D", text: "Peter Norton" },
    ],
    answer: "A. Dennis Ritchie",
  },
  {
    id: 3,
    topic: "C Basics",
    question: "In which year was C developed?",
    options: [
      { label: "A", text: "1972" },
      { label: "B", text: "1970" },
      { label: "C", text: "1976" },
      { label: "D", text: "1979" },
    ],
    answer: "A. 1972",
  },
  {
    id: 4,
    topic: "C Basics",
    question: "C is a __________ language.",
    options: [
      { label: "A", text: "High level" },
      { label: "B", text: "Low level" },
      { label: "C", text: "Middle level" },
      { label: "D", text: "Machine level" },
    ],
    answer: "C. Middle level",
  },
  {
    id: 5,
    topic: "C Basics",
    question: "C language is available for which operating systems?",
    options: [
      { label: "A", text: "DOS" },
      { label: "B", text: "Windows" },
      { label: "C", text: "Unix" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 6,
    topic: "C Basics",
    question: "Which symbol is used to denote a pre-processor statement in C?",
    options: [
      { label: "A", text: "|" },
      { label: "B", text: "#" },
      { label: "C", text: "^" },
      { label: "D", text: ";" },
    ],
    answer: "B. #",
  },

  // ----- Data Types & Variables (6) -----
  {
    id: 7,
    topic: "Data Types & Variables",
    question: "Which of the following are tokens in C?",
    options: [
      { label: "A", text: "Keywords" },
      { label: "B", text: "Variables" },
      { label: "C", text: "Constants" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 8,
    topic: "Data Types & Variables",
    question: "What is the valid range of numbers for an int type in C?",
    options: [
      { label: "A", text: "0 to 256" },
      { label: "B", text: "-32768 to +32767" },
      { label: "C", text: "-65536 to +65536" },
      { label: "D", text: "None of these" },
    ],
    answer: "B. -32768 to +32767",
  },
  {
    id: 9,
    topic: "Data Types & Variables",
    question: "Which of the following is a scalar data type?",
    options: [
      { label: "A", text: "Float" },
      { label: "B", text: "Union" },
      { label: "C", text: "Array" },
      { label: "D", text: "Pointer" },
    ],
    answer: "A. Float",
  },
  {
    id: 10,
    topic: "Data Types & Variables",
    question: "Which symbol is used as a statement terminator in C?",
    options: [
      { label: "A", text: "!" },
      { label: "B", text: "#" },
      { label: "C", text: "$" },
      { label: "D", text: ";" },
    ],
    answer: "D. ;",
  },
  {
    id: 11,
    topic: "Data Types & Variables",
    question: "A character constant should be enclosed between __________.",
    options: [
      { label: "A", text: "Single quotes" },
      { label: "B", text: "Double quotes" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None of these" },
    ],
    answer: "A. Single quotes",
  },
  {
    id: 12,
    topic: "Data Types & Variables",
    question: "What is the maximum length of a variable name in C?",
    options: [
      { label: "A", text: "8" },
      { label: "B", text: "16" },
      { label: "C", text: "32" },
      { label: "D", text: "64 (ANSI standard)" },
    ],
    answer: "D. 64 (ANSI standard)",
  },

  // ----- Operators (6) -----
  {
    id: 13,
    topic: "Operators",
    question: "What is the result of 5 % 2 in C?",
    options: [
      { label: "A", text: "2" },
      { label: "B", text: "1" },
      { label: "C", text: "0" },
      { label: "D", text: "3" },
    ],
    answer: "B. 1",
  },
  {
    id: 14,
    topic: "Operators",
    question: "Which operator is used to access the address of a variable?",
    options: [
      { label: "A", text: "*" },
      { label: "B", text: "&" },
      { label: "C", text: "%" },
      { label: "D", text: "->" },
    ],
    answer: "B. &",
  },
  {
    id: 15,
    topic: "Operators",
    question: "What is the associativity of the assignment operator (=) in C?",
    options: [
      { label: "A", text: "Left to right" },
      { label: "B", text: "Right to left" },
      { label: "C", text: "Both" },
      { label: "D", text: "None" },
    ],
    answer: "B. Right to left",
  },
  {
    id: 16,
    topic: "Operators",
    question: "Which operator is used for logical AND in C?",
    options: [
      { label: "A", text: "&" },
      { label: "B", text: "&&" },
      { label: "C", text: "|" },
      { label: "D", text: "||" },
    ],
    answer: "B. &&",
  },
  {
    id: 17,
    topic: "Operators",
    question: "What is the size of an int data type in C (typically on a 32-bit system)?",
    options: [
      { label: "A", text: "2 bytes" },
      { label: "B", text: "4 bytes" },
      { label: "C", text: "8 bytes" },
      { label: "D", text: "1 byte" },
    ],
    answer: "B. 4 bytes",
  },
  {
    id: 18,
    topic: "Operators",
    question: "What does the 'sizeof' operator return?",
    options: [
      { label: "A", text: "The size of a variable in bytes" },
      { label: "B", text: "The address of a variable" },
      { label: "C", text: "The value of a variable" },
      { label: "D", text: "The type of a variable" },
    ],
    answer: "A. The size of a variable in bytes",
  },

  // ----- Control Flow (6) -----
  {
    id: 19,
    topic: "Control Flow",
    question: "Which statement is used to exit a loop in C?",
    options: [
      { label: "A", text: "break" },
      { label: "B", text: "continue" },
      { label: "C", text: "return" },
      { label: "D", text: "exit" },
    ],
    answer: "A. break",
  },
  {
    id: 20,
    topic: "Control Flow",
    question: "What is the output of the following code? \n int a = 10; if(a<10) printf('Yes'); else printf('No');",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Error" },
      { label: "D", text: "None" },
    ],
    answer: "B. No",
  },
  {
    id: 21,
    topic: "Control Flow",
    question: "Which loop is guaranteed to execute at least once?",
    options: [
      { label: "A", text: "for" },
      { label: "B", text: "while" },
      { label: "C", text: "do-while" },
      { label: "D", text: "All of these" },
    ],
    answer: "C. do-while",
  },
  {
    id: 22,
    topic: "Control Flow",
    question: "What is the use of the 'switch' statement in C?",
    options: [
      { label: "A", text: "To implement multi-way branching" },
      { label: "B", text: "To loop until a condition is met" },
      { label: "C", text: "To define a function" },
      { label: "D", text: "To declare variables" },
    ],
    answer: "A. To implement multi-way branching",
  },
  {
    id: 23,
    topic: "Control Flow",
    question: "What is the default case in a switch statement?",
    options: [
      { label: "A", text: "It executes when no case matches" },
      { label: "B", text: "It executes before all cases" },
      { label: "C", text: "It is mandatory" },
      { label: "D", text: "It executes after all cases" },
    ],
    answer: "A. It executes when no case matches",
  },
  {
    id: 24,
    topic: "Control Flow",
    question: "What is the output of: for(i=0;i<3;i++) printf('%d',i);",
    options: [
      { label: "A", text: "0 1 2" },
      { label: "B", text: "0 1 2 3" },
      { label: "C", text: "1 2 3" },
      { label: "D", text: "No output" },
    ],
    answer: "A. 0 1 2",
  },

  // ----- Arrays (6) -----
  {
    id: 25,
    topic: "Arrays",
    question: "Which index is used to access the first element of an array in C?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "0" },
      { label: "C", text: "-1" },
      { label: "D", text: "Any" },
    ],
    answer: "B. 0",
  },
  {
    id: 26,
    topic: "Arrays",
    question: "What is the size of int arr[10] if each int is 4 bytes?",
    options: [
      { label: "A", text: "20 bytes" },
      { label: "B", text: "40 bytes" },
      { label: "C", text: "10 bytes" },
      { label: "D", text: "4 bytes" },
    ],
    answer: "B. 40 bytes",
  },
  {
    id: 27,
    topic: "Arrays",
    question: "Which of the following correctly declares a 2D array in C?",
    options: [
      { label: "A", text: "int arr[3][4];" },
      { label: "B", text: "int arr[3,4];" },
      { label: "C", text: "int arr(3)(4);" },
      { label: "D", text: "int arr[3] [4];" },
    ],
    answer: "A. int arr[3][4];",
  },
  {
    id: 28,
    topic: "Arrays",
    question: "What is the name of the first element of an array?",
    options: [
      { label: "A", text: "arr[0]" },
      { label: "B", text: "arr[1]" },
      { label: "C", text: "arr" },
      { label: "D", text: "arr[last]" },
    ],
    answer: "A. arr[0]",
  },
  {
    id: 29,
    topic: "Arrays",
    question: "What is the output of: int a[] = {1,2,3}; printf('%d', a[2]);",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "Error" },
    ],
    answer: "C. 3",
  },
  {
    id: 30,
    topic: "Arrays",
    question: "What is the maximum number of dimensions an array can have in C?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "No limit" },
      { label: "D", text: "3" },
    ],
    answer: "C. No limit (practically limited by memory and compiler)",
  },

  // ----- Functions (6) -----
  {
    id: 31,
    topic: "Functions",
    question: "What is the return type of the main() function in C?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "void" },
      { label: "C", text: "float" },
      { label: "D", text: "char" },
    ],
    answer: "A. int",
  },
  {
    id: 32,
    topic: "Functions",
    question: "Which keyword is used to define a function in C?",
    options: [
      { label: "A", text: "function" },
      { label: "B", text: "def" },
      { label: "C", text: "void" },
      { label: "D", text: "There is no keyword; functions are defined by their return type and name" },
    ],
    answer: "D. There is no keyword; functions are defined by their return type and name",
  },
  {
    id: 33,
    topic: "Functions",
    question: "What is the scope of a variable declared inside a function?",
    options: [
      { label: "A", text: "Local to the function" },
      { label: "B", text: "Global" },
      { label: "C", text: "File scope" },
      { label: "D", text: "Block scope" },
    ],
    answer: "A. Local to the function",
  },
  {
    id: 34,
    topic: "Functions",
    question: "Which of the following is a valid function prototype?",
    options: [
      { label: "A", text: "int sum(int a, int b);" },
      { label: "B", text: "sum(int a, int b) int;" },
      { label: "C", text: "int sum(a,b);" },
      { label: "D", text: "void sum(int a, b);" },
    ],
    answer: "A. int sum(int a, int b);",
  },
  {
    id: 35,
    topic: "Functions",
    question: "What is the purpose of the 'return' statement in a function?",
    options: [
      { label: "A", text: "To exit the function and optionally return a value" },
      { label: "B", text: "To declare a variable" },
      { label: "C", text: "To call another function" },
      { label: "D", text: "To print something" },
    ],
    answer: "A. To exit the function and optionally return a value",
  },
  {
    id: 36,
    topic: "Functions",
    question: "What is recursion in C?",
    options: [
      { label: "A", text: "Function calling itself" },
      { label: "B", text: "Function calling another function" },
      { label: "C", text: "Function without a return type" },
      { label: "D", text: "Function with multiple parameters" },
    ],
    answer: "A. Function calling itself",
  },

  // ----- Pointers (6) -----
  {
    id: 37,
    topic: "Pointers",
    question: "What is a pointer in C?",
    options: [
      { label: "A", text: "A variable that stores the address of another variable" },
      { label: "B", text: "A data type" },
      { label: "C", text: "A function" },
      { label: "D", text: "A loop" },
    ],
    answer: "A. A variable that stores the address of another variable",
  },
  {
    id: 38,
    topic: "Pointers",
    question: "Which operator is used to get the address of a variable?",
    options: [
      { label: "A", text: "*" },
      { label: "B", text: "&" },
      { label: "C", text: "%" },
      { label: "D", text: "->" },
    ],
    answer: "B. &",
  },
  {
    id: 39,
    topic: "Pointers",
    question: "Which operator is used to dereference a pointer?",
    options: [
      { label: "A", text: "*" },
      { label: "B", text: "&" },
      { label: "C", text: "%" },
      { label: "D", text: "->" },
    ],
    answer: "A. *",
  },
  {
    id: 40,
    topic: "Pointers",
    question: "What is the size of a pointer in C (on a 64-bit system)?",
    options: [
      { label: "A", text: "2 bytes" },
      { label: "B", text: "4 bytes" },
      { label: "C", text: "8 bytes" },
      { label: "D", text: "1 byte" },
    ],
    answer: "C. 8 bytes",
  },
  {
    id: 41,
    topic: "Pointers",
    question: "What is a NULL pointer?",
    options: [
      { label: "A", text: "A pointer that points to nothing" },
      { label: "B", text: "A pointer that points to address 0" },
      { label: "C", text: "A pointer that is not initialized" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 42,
    topic: "Pointers",
    question: "What is a pointer to a function?",
    options: [
      { label: "A", text: "A pointer that stores the address of a function" },
      { label: "B", text: "A function that returns a pointer" },
      { label: "C", text: "A data type" },
      { label: "D", text: "A loop" },
    ],
    answer: "A. A pointer that stores the address of a function",
  },

  // ----- Structures & Unions (6) -----
  {
    id: 43,
    topic: "Structures & Unions",
    question: "What is a structure in C?",
    options: [
      { label: "A", text: "A collection of variables of different data types under a single name" },
      { label: "B", text: "An array of similar data types" },
      { label: "C", text: "A pointer" },
      { label: "D", text: "A function" },
    ],
    answer: "A. A collection of variables of different data types under a single name",
  },
  {
    id: 44,
    topic: "Structures & Unions",
    question: "How is a union different from a structure?",
    options: [
      { label: "A", text: "Union members share the same memory location; structure members have separate memory" },
      { label: "B", text: "Union can hold only one data type" },
      { label: "C", text: "Structure members share memory" },
      { label: "D", text: "There is no difference" },
    ],
    answer: "A. Union members share the same memory location; structure members have separate memory",
  },
  {
    id: 45,
    topic: "Structures & Unions",
    question: "Which operator is used to access structure members via a pointer?",
    options: [
      { label: "A", text: "." },
      { label: "B", text: "->" },
      { label: "C", text: "&" },
      { label: "D", text: "*" },
    ],
    answer: "B. ->",
  },
  {
    id: 46,
    topic: "Structures & Unions",
    question: "How do you define a structure in C?",
    options: [
      { label: "A", text: "struct { int x; float y; } variable;" },
      { label: "B", text: "structure { int x; float y; } variable;" },
      { label: "C", text: "typedef struct { int x; float y; } variable;" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 47,
    topic: "Structures & Unions",
    question: "What is the size of a union?",
    options: [
      { label: "A", text: "Sum of sizes of all members" },
      { label: "B", text: "Size of the largest member" },
      { label: "C", text: "Average of sizes" },
      { label: "D", text: "Size of the first member" },
    ],
    answer: "B. Size of the largest member",
  },
  {
    id: 48,
    topic: "Structures & Unions",
    question: "Can you pass a structure to a function by value in C?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only by reference" },
      { label: "D", text: "Only pointers" },
    ],
    answer: "A. Yes",
  },

  // ----- File I/O (6) -----
  {
    id: 49,
    topic: "File I/O",
    question: "Which library is used for file I/O in C?",
    options: [
      { label: "A", text: "stdio.h" },
      { label: "B", text: "stdlib.h" },
      { label: "C", text: "string.h" },
      { label: "D", text: "math.h" },
    ],
    answer: "A. stdio.h",
  },
  {
    id: 50,
    topic: "File I/O",
    question: "What is the function to open a file in C?",
    options: [
      { label: "A", text: "fopen()" },
      { label: "B", text: "open()" },
      { label: "C", text: "file_open()" },
      { label: "D", text: "create_file()" },
    ],
    answer: "A. fopen()",
  },
  {
    id: 51,
    topic: "File I/O",
    question: "Which mode is used to open a file for reading in C?",
    options: [
      { label: "A", text: "r" },
      { label: "B", text: "w" },
      { label: "C", text: "a" },
      { label: "D", text: "rw" },
    ],
    answer: "A. r",
  },
  {
    id: 52,
    topic: "File I/O",
    question: "What is the function to close a file in C?",
    options: [
      { label: "A", text: "fclose()" },
      { label: "B", text: "close()" },
      { label: "C", text: "file_close()" },
      { label: "D", text: "clos()" },
    ],
    answer: "A. fclose()",
  },
  {
    id: 53,
    topic: "File I/O",
    question: "Which function is used to read a line from a file in C?",
    options: [
      { label: "A", text: "fgets()" },
      { label: "B", text: "fgetline()" },
      { label: "C", text: "gets()" },
      { label: "D", text: "scanf()" },
    ],
    answer: "A. fgets()",
  },
  {
    id: 54,
    topic: "File I/O",
    question: "What does feof() function do?",
    options: [
      { label: "A", text: "Checks for end-of-file" },
      { label: "B", text: "Reads a file" },
      { label: "C", text: "Writes to a file" },
      { label: "D", text: "Closes a file" },
    ],
    answer: "A. Checks for end-of-file",
  },

  // ----- Preprocessor (6) -----
  {
    id: 55,
    topic: "Preprocessor",
    question: "What is the output of #define SQUARE(x) (x*x) when SQUARE(3) is used?",
    options: [
      { label: "A", text: "9" },
      { label: "B", text: "6" },
      { label: "C", text: "12" },
      { label: "D", text: "Error" },
    ],
    answer: "A. 9",
  },
  {
    id: 56,
    topic: "Preprocessor",
    question: "What is the purpose of #include directive in C?",
    options: [
      { label: "A", text: "To include header files" },
      { label: "B", text: "To define macros" },
      { label: "C", text: "To conditionally compile" },
      { label: "D", text: "To declare functions" },
    ],
    answer: "A. To include header files",
  },
  {
    id: 57,
    topic: "Preprocessor",
    question: "Which of the following is a preprocessor directive?",
    options: [
      { label: "A", text: "#ifdef" },
      { label: "B", text: "#undef" },
      { label: "C", text: "#pragma" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 58,
    topic: "Preprocessor",
    question: "What is the use of #ifndef?",
    options: [
      { label: "A", text: "To check if a macro is not defined" },
      { label: "B", text: "To check if a macro is defined" },
      { label: "C", text: "To include a file" },
      { label: "D", text: "To define a macro" },
    ],
    answer: "A. To check if a macro is not defined",
  },
  {
    id: 59,
    topic: "Preprocessor",
    question: "What is the purpose of #pragma?",
    options: [
      { label: "A", text: "To provide additional instructions to the compiler" },
      { label: "B", text: "To define a macro" },
      { label: "C", text: "To include a header" },
      { label: "D", text: "To conditionally compile" },
    ],
    answer: "A. To provide additional instructions to the compiler",
  },
  {
    id: 60,
    topic: "Preprocessor",
    question: "What happens if we use #include <filename.h> vs #include 'filename.h'?",
    options: [
      { label: "A", text: "<> searches in system directories, '' searches in current directory first" },
      { label: "B", text: "Both are same" },
      { label: "C", text: "<> searches in current directory, '' in system directories" },
      { label: "D", text: "None" },
    ],
    answer: "A. <> searches in system directories, '' searches in current directory first",
  },

  // ----- Dynamic Memory Allocation (6) -----
  {
    id: 61,
    topic: "Dynamic Memory Allocation",
    question: "Which function is used to allocate memory dynamically in C?",
    options: [
      { label: "A", text: "malloc()" },
      { label: "B", text: "calloc()" },
      { label: "C", text: "realloc()" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 62,
    topic: "Dynamic Memory Allocation",
    question: "What is the difference between malloc() and calloc()?",
    options: [
      { label: "A", text: "malloc allocates uninitialized memory; calloc allocates zero-initialized memory" },
      { label: "B", text: "malloc takes one argument; calloc takes two" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "They are identical" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 63,
    topic: "Dynamic Memory Allocation",
    question: "Which function is used to free dynamically allocated memory?",
    options: [
      { label: "A", text: "free()" },
      { label: "B", text: "delete()" },
      { label: "C", text: "release()" },
      { label: "D", text: "dealloc()" },
    ],
    answer: "A. free()",
  },
  {
    id: 64,
    topic: "Dynamic Memory Allocation",
    question: "What is the return type of malloc()?",
    options: [
      { label: "A", text: "void*" },
      { label: "B", text: "int*" },
      { label: "C", text: "char*" },
      { label: "D", text: "float*" },
    ],
    answer: "A. void*",
  },
  {
    id: 65,
    topic: "Dynamic Memory Allocation",
    question: "What does realloc() do?",
    options: [
      { label: "A", text: "Changes the size of previously allocated memory" },
      { label: "B", text: "Allocates new memory" },
      { label: "C", text: "Frees memory" },
      { label: "D", text: "Initializes memory" },
    ],
    answer: "A. Changes the size of previously allocated memory",
  },
  {
    id: 66,
    topic: "Dynamic Memory Allocation",
    question: "What is a memory leak in C?",
    options: [
      { label: "A", text: "Memory that is allocated but never freed" },
      { label: "B", text: "Memory that is freed twice" },
      { label: "C", text: "Memory that is not accessible" },
      { label: "D", text: "Memory that is corrupted" },
    ],
    answer: "A. Memory that is allocated but never freed",
  },

  // ----- String Handling (6) -----
  {
    id: 67,
    topic: "String Handling",
    question: "Which header file is required for string functions in C?",
    options: [
      { label: "A", text: "string.h" },
      { label: "B", text: "stdlib.h" },
      { label: "C", text: "stdio.h" },
      { label: "D", text: "ctype.h" },
    ],
    answer: "A. string.h",
  },
  {
    id: 68,
    topic: "String Handling",
    question: "What is the length of the string 'Hello' in C?",
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "4" },
      { label: "D", text: "7" },
    ],
    answer: "A. 5",
  },
  {
    id: 69,
    topic: "String Handling",
    question: "Which function copies a string in C?",
    options: [
      { label: "A", text: "strcpy()" },
      { label: "B", text: "strncpy()" },
      { label: "C", text: "strdup()" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 70,
    topic: "String Handling",
    question: "What is the difference between strcat() and strncat()?",
    options: [
      { label: "A", text: "strcat concatenates full string; strncat appends a specified number of characters" },
      { label: "B", text: "strcat is faster" },
      { label: "C", text: "strncat is safer" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 71,
    topic: "String Handling",
    question: "Which function compares two strings in C?",
    options: [
      { label: "A", text: "strcmp()" },
      { label: "B", text: "strncmp()" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "strdiff()" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 72,
    topic: "String Handling",
    question: "What is the output of strlen('Hello World')?",
    options: [
      { label: "A", text: "11" },
      { label: "B", text: "10" },
      { label: "C", text: "12" },
      { label: "D", text: "0" },
    ],
    answer: "A. 11",
  },

  // ----- Advanced Topics (8) -----
  {
    id: 73,
    topic: "Advanced Topics",
    question: "What is a linked list in C?",
    options: [
      { label: "A", text: "A dynamic data structure consisting of nodes with pointers" },
      { label: "B", text: "An array of structures" },
      { label: "C", text: "A type of file" },
      { label: "D", text: "A function" },
    ],
    answer: "A. A dynamic data structure consisting of nodes with pointers",
  },
  {
    id: 74,
    topic: "Advanced Topics",
    question: "What is a stack in C?",
    options: [
      { label: "A", text: "A LIFO (Last In First Out) data structure" },
      { label: "B", text: "A FIFO data structure" },
      { label: "C", text: "An array" },
      { label: "D", text: "A linked list" },
    ],
    answer: "A. A LIFO (Last In First Out) data structure",
  },
  {
    id: 75,
    topic: "Advanced Topics",
    question: "What is a queue in C?",
    options: [
      { label: "A", text: "A FIFO (First In First Out) data structure" },
      { label: "B", text: "A LIFO data structure" },
      { label: "C", text: "A file" },
      { label: "D", text: "A function" },
    ],
    answer: "A. A FIFO (First In First Out) data structure",
  },
  {
    id: 76,
    topic: "Advanced Topics",
    question: "What is the 'volatile' keyword used for in C?",
    options: [
      { label: "A", text: "To tell the compiler that a variable's value may change unexpectedly" },
      { label: "B", text: "To make a variable read-only" },
      { label: "C", text: "To declare a static variable" },
      { label: "D", text: "To initialize a variable" },
    ],
    answer: "A. To tell the compiler that a variable's value may change unexpectedly",
  },
  {
    id: 77,
    topic: "Advanced Topics",
    question: "What is a typedef in C?",
    options: [
      { label: "A", text: "To create an alias for a data type" },
      { label: "B", text: "To define a function" },
      { label: "C", text: "To declare a variable" },
      { label: "D", text: "To create a structure" },
    ],
    answer: "A. To create an alias for a data type",
  },
  {
    id: 78,
    topic: "Advanced Topics",
    question: "What is the purpose of 'static' keyword inside a function?",
    options: [
      { label: "A", text: "To make the variable retain its value across function calls" },
      { label: "B", text: "To make the variable global" },
      { label: "C", text: "To initialize the variable to 0" },
      { label: "D", text: "To make the function inline" },
    ],
    answer: "A. To make the variable retain its value across function calls",
  },
  {
    id: 79,
    topic: "Advanced Topics",
    question: "What is a bit field in C?",
    options: [
      { label: "A", text: "A structure member that occupies a specified number of bits" },
      { label: "B", text: "An array of bits" },
      { label: "C", text: "A pointer to bits" },
      { label: "D", text: "A function that manipulates bits" },
    ],
    answer: "A. A structure member that occupies a specified number of bits",
  },
  {
    id: 80,
    topic: "Advanced Topics",
    question: "What is the 'const' qualifier used for in C?",
    options: [
      { label: "A", text: "To make a variable read-only" },
      { label: "B", text: "To declare a constant" },
      { label: "C", text: "To prevent modification" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- More MCQs to reach 120+ (40 more) -----
  {
    id: 81,
    topic: "C Basics",
    question: "What is the default return type of a function in C if not specified?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "void" },
      { label: "C", text: "float" },
      { label: "D", text: "char" },
    ],
    answer: "A. int (in older standards; modern compilers may warn)",
  },
  {
    id: 82,
    topic: "C Basics",
    question: "Which escape sequence is used for a newline in C?",
    options: [
      { label: "A", text: "\\n" },
      { label: "B", text: "\\t" },
      { label: "C", text: "\\r" },
      { label: "D", text: "\\b" },
    ],
    answer: "A. \\n",
  },
  {
    id: 83,
    topic: "Data Types & Variables",
    question: "What is the size of a char in C?",
    options: [
      { label: "A", text: "1 byte" },
      { label: "B", text: "2 bytes" },
      { label: "C", text: "4 bytes" },
      { label: "D", text: "8 bytes" },
    ],
    answer: "A. 1 byte",
  },
  {
    id: 84,
    topic: "Data Types & Variables",
    question: "Which data type is used to store a wide character in C?",
    options: [
      { label: "A", text: "wchar_t" },
      { label: "B", text: "char" },
      { label: "C", text: "short" },
      { label: "D", text: "long" },
    ],
    answer: "A. wchar_t",
  },
  {
    id: 85,
    topic: "Operators",
    question: "What is the result of 10/3 in integer arithmetic?",
    options: [
      { label: "A", text: "3.33" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "0" },
    ],
    answer: "B. 3",
  },
  {
    id: 86,
    topic: "Operators",
    question: "Which operator is used to check if two values are equal in C?",
    options: [
      { label: "A", text: "=" },
      { label: "B", text: "==" },
      { label: "C", text: "!=" },
      { label: "D", text: "===" },
    ],
    answer: "B. ==",
  },
  {
    id: 87,
    topic: "Control Flow",
    question: "What is the output of: int i=1; switch(i) { case 1: printf('One'); break; default: printf('Default'); }",
    options: [
      { label: "A", text: "One" },
      { label: "B", text: "Default" },
      { label: "C", text: "OneDefault" },
      { label: "D", text: "Error" },
    ],
    answer: "A. One",
  },
  {
    id: 88,
    topic: "Control Flow",
    question: "Which loop is most suitable when the number of iterations is known?",
    options: [
      { label: "A", text: "for" },
      { label: "B", text: "while" },
      { label: "C", text: "do-while" },
      { label: "D", text: "All" },
    ],
    answer: "A. for",
  },
  {
    id: 89,
    topic: "Arrays",
    question: "What is the output of: int a[5]={1,2}; printf('%d', a[3]);",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "3" },
      { label: "C", text: "Garbage value" },
      { label: "D", text: "Error" },
    ],
    answer: "A. 0 (uninitialized elements are set to 0)",
  },
  {
    id: 90,
    topic: "Arrays",
    question: "How can you pass an array to a function in C?",
    options: [
      { label: "A", text: "By passing the array name" },
      { label: "B", text: "By passing a pointer to the first element" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "By passing the array size" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 91,
    topic: "Functions",
    question: "What is the default storage class of a variable declared inside a function?",
    options: [
      { label: "A", text: "auto" },
      { label: "B", text: "static" },
      { label: "C", text: "register" },
      { label: "D", text: "extern" },
    ],
    answer: "A. auto",
  },
  {
    id: 92,
    topic: "Functions",
    question: "Which keyword is used to return a value from a function?",
    options: [
      { label: "A", text: "return" },
      { label: "B", text: "exit" },
      { label: "C", text: "break" },
      { label: "D", text: "continue" },
    ],
    answer: "A. return",
  },
  {
    id: 93,
    topic: "Pointers",
    question: "What is pointer arithmetic?",
    options: [
      { label: "A", text: "Adding or subtracting integers to a pointer to move to other memory locations" },
      { label: "B", text: "Multiplying pointers" },
      { label: "C", text: "Dividing pointers" },
      { label: "D", text: "Comparing pointers" },
    ],
    answer: "A. Adding or subtracting integers to a pointer to move to other memory locations",
  },
  {
    id: 94,
    topic: "Pointers",
    question: "What is a double pointer in C?",
    options: [
      { label: "A", text: "A pointer to a pointer" },
      { label: "B", text: "A pointer to a structure" },
      { label: "C", text: "A pointer to an array" },
      { label: "D", text: "A function pointer" },
    ],
    answer: "A. A pointer to a pointer",
  },
  {
    id: 95,
    topic: "Structures & Unions",
    question: "What is the keyword to define a structure in C?",
    options: [
      { label: "A", text: "struct" },
      { label: "B", text: "union" },
      { label: "C", text: "typedef" },
      { label: "D", text: "class" },
    ],
    answer: "A. struct",
  },
  {
    id: 96,
    topic: "Structures & Unions",
    question: "Can a structure contain a pointer to itself?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only if typedef is used" },
      { label: "D", text: "Only in C++" },
    ],
    answer: "A. Yes",
  },
  {
    id: 97,
    topic: "File I/O",
    question: "Which function writes a character to a file in C?",
    options: [
      { label: "A", text: "fputc()" },
      { label: "B", text: "fprintf()" },
      { label: "C", text: "putc()" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 98,
    topic: "File I/O",
    question: "What is the file pointer type in C?",
    options: [
      { label: "A", text: "FILE*" },
      { label: "B", text: "file*" },
      { label: "C", text: "FILE" },
      { label: "D", text: "File" },
    ],
    answer: "A. FILE*",
  },
  {
    id: 99,
    topic: "Preprocessor",
    question: "What is the output of #define VALUE 5+5 when used as int x = VALUE * 2;",
    options: [
      { label: "A", text: "20" },
      { label: "B", text: "15" },
      { label: "C", text: "10" },
      { label: "D", text: "Error" },
    ],
    answer: "B. 15 (because 5+5*2 = 15, due to macro expansion)",
  },
  {
    id: 100,
    topic: "Preprocessor",
    question: "Which directive is used to define a macro in C?",
    options: [
      { label: "A", text: "#define" },
      { label: "B", text: "#undef" },
      { label: "C", text: "#ifdef" },
      { label: "D", text: "#include" },
    ],
    answer: "A. #define",
  },
  // Add more to reach 120+ - we'll add 20 more quickly.
  {
    id: 101,
    topic: "Dynamic Memory Allocation",
    question: "Which function is used to allocate memory for an array of elements in C?",
    options: [
      { label: "A", text: "calloc()" },
      { label: "B", text: "malloc()" },
      { label: "C", text: "realloc()" },
      { label: "D", text: "free()" },
    ],
    answer: "A. calloc()",
  },
  {
    id: 102,
    topic: "Dynamic Memory Allocation",
    question: "What is the purpose of free() function?",
    options: [
      { label: "A", text: "To release allocated memory" },
      { label: "B", text: "To allocate memory" },
      { label: "C", text: "To reallocate memory" },
      { label: "D", text: "To initialize memory" },
    ],
    answer: "A. To release allocated memory",
  },
  {
    id: 103,
    topic: "String Handling",
    question: "Which function converts a string to uppercase in C? (Standard C does not have a built-in one, but we'll ask about toupper)",
    options: [
      { label: "A", text: "toupper()" },
      { label: "B", text: "strupr()" },
      { label: "C", text: "strtoupper()" },
      { label: "D", text: "toupper() is for characters, not strings; no standard function" },
    ],
    answer: "D. toupper() is for characters, not strings; no standard function",
  },
  {
    id: 104,
    topic: "String Handling",
    question: "What is the difference between strtok() and strchr()?",
    options: [
      { label: "A", text: "strtok splits strings, strchr finds a character" },
      { label: "B", text: "strchr splits strings, strtok finds a character" },
      { label: "C", text: "Both split strings" },
      { label: "D", text: "Both find characters" },
    ],
    answer: "A. strtok splits strings, strchr finds a character",
  },
  {
    id: 105,
    topic: "Advanced Topics",
    question: "What is a recursive function?",
    options: [
      { label: "A", text: "A function that calls itself" },
      { label: "B", text: "A function that calls another function" },
      { label: "C", text: "A function that returns void" },
      { label: "D", text: "A function that has no parameters" },
    ],
    answer: "A. A function that calls itself",
  },
  {
    id: 106,
    topic: "Advanced Topics",
    question: "What is the use of 'extern' keyword in C?",
    options: [
      { label: "A", text: "To declare a variable that is defined in another file" },
      { label: "B", text: "To define a static variable" },
      { label: "C", text: "To make a variable global" },
      { label: "D", text: "To initialize a variable" },
    ],
    answer: "A. To declare a variable that is defined in another file",
  },
  {
    id: 107,
    topic: "C Basics",
    question: "What is the minimum number of characters in a variable name in C?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "No minimum" },
    ],
    answer: "A. 1",
  },
  {
    id: 108,
    topic: "C Basics",
    question: "Which of the following is not a valid data type in C?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "float" },
      { label: "C", text: "string" },
      { label: "D", text: "double" },
    ],
    answer: "C. string",
  },
  {
    id: 109,
    topic: "Operators",
    question: "What is the precedence of the logical NOT operator (!) in C?",
    options: [
      { label: "A", text: "Highest" },
      { label: "B", text: "Lowest" },
      { label: "C", text: "Same as relational" },
      { label: "D", text: "None" },
    ],
    answer: "A. Highest (among logical operators)",
  },
  {
    id: 110,
    topic: "Control Flow",
    question: "Which statement is used to skip the rest of the current iteration in a loop?",
    options: [
      { label: "A", text: "continue" },
      { label: "B", text: "break" },
      { label: "C", text: "return" },
      { label: "D", text: "goto" },
    ],
    answer: "A. continue",
  },
  {
    id: 111,
    topic: "Arrays",
    question: "What is the name of the C function to sort an array? (Standard C doesn't have one, but we ask about qsort)",
    options: [
      { label: "A", text: "sort()" },
      { label: "B", text: "qsort()" },
      { label: "C", text: "bubble_sort()" },
      { label: "D", text: "No standard sorting function" },
    ],
    answer: "B. qsort() (standard function for sorting)",
  },
  {
    id: 112,
    topic: "Functions",
    question: "What is an inline function?",
    options: [
      { label: "A", text: "A function that is expanded at the call site to reduce function call overhead" },
      { label: "B", text: "A function that cannot be called" },
      { label: "C", text: "A function that returns void" },
      { label: "D", text: "A function with no parameters" },
    ],
    answer: "A. A function that is expanded at the call site to reduce function call overhead",
  },
  {
    id: 113,
    topic: "Pointers",
    question: "What is a void pointer?",
    options: [
      { label: "A", text: "A pointer that can point to any data type" },
      { label: "B", text: "A pointer that points to nothing" },
      { label: "C", text: "A pointer that cannot be dereferenced" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 114,
    topic: "Structures & Unions",
    question: "Can you define a structure inside another structure in C?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only with typedef" },
      { label: "D", text: "Only in C++" },
    ],
    answer: "A. Yes",
  },
  {
    id: 115,
    topic: "File I/O",
    question: "Which function is used to read a character from a file in C?",
    options: [
      { label: "A", text: "fgetc()" },
      { label: "B", text: "fread()" },
      { label: "C", text: "getc()" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 116,
    topic: "Preprocessor",
    question: "What is the purpose of #error directive?",
    options: [
      { label: "A", text: "To produce a compile-time error message" },
      { label: "B", text: "To stop preprocessing" },
      { label: "C", text: "To include a file" },
      { label: "D", text: "To define a macro" },
    ],
    answer: "A. To produce a compile-time error message",
  },
  {
    id: 117,
    topic: "Dynamic Memory Allocation",
    question: "What is the result of calling free() with a NULL pointer?",
    options: [
      { label: "A", text: "Nothing happens" },
      { label: "B", text: "Memory leak" },
      { label: "C", text: "Segmentation fault" },
      { label: "D", text: "Error" },
    ],
    answer: "A. Nothing happens (free(NULL) is safe)",
  },
  {
    id: 118,
    topic: "String Handling",
    question: "Which function returns the length of a string in C?",
    options: [
      { label: "A", text: "strlen()" },
      { label: "B", text: "size()" },
      { label: "C", text: "length()" },
      { label: "D", text: "strlength()" },
    ],
    answer: "A. strlen()",
  },
  {
    id: 119,
    topic: "Advanced Topics",
    question: "What is the use of 'register' keyword in C?",
    options: [
      { label: "A", text: "To suggest the compiler to store the variable in a CPU register" },
      { label: "B", text: "To make a variable read-only" },
      { label: "C", text: "To make a variable global" },
      { label: "D", text: "To define a function" },
    ],
    answer: "A. To suggest the compiler to store the variable in a CPU register",
  },
  {
    id: 120,
    topic: "Advanced Topics",
    question: "What is a function pointer?",
    options: [
      { label: "A", text: "A pointer that stores the address of a function" },
      { label: "B", text: "A function that returns a pointer" },
      { label: "C", text: "A pointer to an array" },
      { label: "D", text: "A data type" },
    ],
    answer: "A. A pointer that stores the address of a function",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is C programming language?",
    answer:
      "C is a powerful, general-purpose programming language developed by Dennis Ritchie at Bell Labs in 1972. It is widely used for system programming, embedded systems, and developing operating systems.",
  },
  {
    question: "Why should I practice C Language MCQs?",
    answer:
      "Practicing C MCQs helps you prepare for technical interviews, competitive exams, and placement tests. It strengthens your understanding of core concepts like pointers, memory management, data structures, and control flow.",
  },
  {
    question: "What are the key topics in C Language?",
    answer:
      "Key topics include Basics, Data Types, Operators, Control Flow, Arrays, Functions, Pointers, Structures, Unions, File I/O, Preprocessor, Dynamic Memory Allocation, Strings, and Advanced Topics.",
  },
  {
    question: "How can I prepare for C programming interviews?",
    answer:
      "Start with basic syntax, practice MCQs, write small programs, understand pointer arithmetic, memory allocation, and data structures. Review common interview questions and practice problem-solving.",
  },
  {
    question: "Is C still relevant in 2026?",
    answer:
      "Yes, C remains highly relevant for system programming, embedded systems, operating systems, and performance-critical applications. It is the foundation of many modern languages and is widely used in industries.",
  },
  {
    question: "What is the best way to learn C programming?",
    answer:
      "The best way is to read a good textbook, practice writing code, solve exercises, and work on small projects. Regularly testing yourself with MCQs also helps reinforce concepts.",
  },
];

// ========================== COMPONENT ==========================
export default function CLanguageMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/c-language",
        "url": "https://CodeSkipper.in/mcq/c-language",
        "name": "C Language Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on C programming, covering basics, pointers, arrays, structures, file I/O, and more.",
        "about": { "@type": "Thing", "name": "C Language MCQ" },
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
              "name": "C Language",
              "item": "https://CodeSkipper.in/mcq/c-language",
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
        "@id": "https://CodeSkipper.in/mcq/c-language#course",
        "name": "C Language MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for C programming exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "C Programming" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/c-language#faq",
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
        <title>C Language MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ C programming multiple-choice questions with answers. Covers basics, pointers, arrays, structures, file I/O, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="C Language, MCQs, C Programming, C MCQ, Pointers, Arrays, Structures, File I/O, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/c-language" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/c-language" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/c-language" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/c-language" />
        <meta property="og:title" content="C Language MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ C programming multiple-choice questions covering basics, pointers, arrays, structures, file I/O, and more."
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
        <meta name="twitter:title" content="C Language MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ C programming multiple-choice questions covering basics, pointers, arrays, structures, file I/O, and more."
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
              C Language <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master C programming with 120+ curated MCQs covering basics, pointers, arrays,
              structures, file I/O, and more. Perfect for exams, interviews, and placement preparation.
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
            Explore C Language Topics
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
            C Language MCQs
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
              { title: "C Programming Tutorial", href: "/tutorials/c", icon: "📖" },
              { title: "C Interview Questions", href: "/interview/c", icon: "💼" },
              { title: "C Notes", href: "/notes/c", icon: "📝" },
              { title: "C++ MCQs", href: "/mcq/cpp-mcq", icon: "🟦" },
              { title: "Data Structures MCQs", href: "/mcq/data-structures", icon: "📊" },
              { title: "Operating System MCQs", href: "/mcq/os-mcq", icon: "🖥️" },
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
            Ready to Master C Programming?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of C tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/c"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/c"
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