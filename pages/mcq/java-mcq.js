import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Java Basics (6) -----
  {
    id: 1,
    topic: "Java Basics",
    question: "Who developed the Java programming language?",
    options: [
      { label: "A", text: "James Gosling" },
      { label: "B", text: "Dennis Ritchie" },
      { label: "C", text: "Bjarne Stroustrup" },
      { label: "D", text: "Guido van Rossum" },
    ],
    answer: "A. James Gosling",
  },
  {
    id: 2,
    topic: "Java Basics",
    question: "In which year was Java first released?",
    options: [
      { label: "A", text: "1991" },
      { label: "B", text: "1995" },
      { label: "C", text: "1997" },
      { label: "D", text: "2000" },
    ],
    answer: "B. 1995",
  },
  {
    id: 3,
    topic: "Java Basics",
    question: "What is the original name of Java?",
    options: [
      { label: "A", text: "Oak" },
      { label: "B", text: "Green" },
      { label: "C", text: "Java" },
      { label: "D", text: "Coffee" },
    ],
    answer: "A. Oak",
  },
  {
    id: 4,
    topic: "Java Basics",
    question: "Which company originally developed Java?",
    options: [
      { label: "A", text: "Microsoft" },
      { label: "B", text: "IBM" },
      { label: "C", text: "Sun Microsystems" },
      { label: "D", text: "Oracle" },
    ],
    answer: "C. Sun Microsystems",
  },
  {
    id: 5,
    topic: "Java Basics",
    question: "What is the latest LTS version of Java as of 2026?",
    options: [
      { label: "A", text: "Java 17" },
      { label: "B", text: "Java 21" },
      { label: "C", text: "Java 22" },
      { label: "D", text: "Java 23" },
    ],
    answer: "B. Java 21",
  },
  {
    id: 6,
    topic: "Java Basics",
    question: "What is the extension of Java bytecode files?",
    options: [
      { label: "A", text: ".java" },
      { label: "B", text: ".class" },
      { label: "C", text: ".jar" },
      { label: "D", text: ".jvm" },
    ],
    answer: "B. .class",
  },

  // ----- Data Types & Variables (6) -----
  {
    id: 7,
    topic: "Data Types & Variables",
    question: "Which of the following is not a primitive data type in Java?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "float" },
      { label: "C", text: "String" },
      { label: "D", text: "boolean" },
    ],
    answer: "C. String",
  },
  {
    id: 8,
    topic: "Data Types & Variables",
    question: "What is the size of an int in Java?",
    options: [
      { label: "A", text: "8 bits" },
      { label: "B", text: "16 bits" },
      { label: "C", text: "32 bits" },
      { label: "D", text: "64 bits" },
    ],
    answer: "C. 32 bits",
  },
  {
    id: 9,
    topic: "Data Types & Variables",
    question: "Which data type is used for single characters in Java?",
    options: [
      { label: "A", text: "char" },
      { label: "B", text: "String" },
      { label: "C", text: "Character" },
      { label: "D", text: "byte" },
    ],
    answer: "A. char",
  },
  {
    id: 10,
    topic: "Data Types & Variables",
    question: "What is the default value of a boolean in Java?",
    options: [
      { label: "A", text: "true" },
      { label: "B", text: "false" },
      { label: "C", text: "null" },
      { label: "D", text: "0" },
    ],
    answer: "B. false",
  },
  {
    id: 11,
    topic: "Data Types & Variables",
    question: "Which keyword is used to define a constant in Java?",
    options: [
      { label: "A", text: "const" },
      { label: "B", text: "final" },
      { label: "C", text: "static" },
      { label: "D", text: "constant" },
    ],
    answer: "B. final",
  },
  {
    id: 12,
    topic: "Data Types & Variables",
    question: "What is the range of the short data type in Java?",
    options: [
      { label: "A", text: "-128 to 127" },
      { label: "B", text: "-32768 to 32767" },
      { label: "C", text: "-2147483648 to 2147483647" },
      { label: "D", text: "0 to 65535" },
    ],
    answer: "B. -32768 to 32767",
  },

  // ----- Operators (6) -----
  {
    id: 13,
    topic: "Operators",
    question: "What is the result of 5 % 2 in Java?",
    options: [
      { label: "A", text: "2" },
      { label: "B", text: "1" },
      { label: "C", text: "0" },
      { label: "D", text: "2.5" },
    ],
    answer: "B. 1",
  },
  {
    id: 14,
    topic: "Operators",
    question: "Which operator is used for logical AND in Java?",
    options: [
      { label: "A", text: "&" },
      { label: "B", text: "&&" },
      { label: "C", text: "|" },
      { label: "D", text: "||" },
    ],
    answer: "B. &&",
  },
  {
    id: 15,
    topic: "Operators",
    question: "What is the output of: System.out.println(10 / 3);",
    options: [
      { label: "A", text: "3.33" },
      { label: "B", text: "3" },
      { label: "C", text: "3.0" },
      { label: "D", text: "4" },
    ],
    answer: "B. 3",
  },
  {
    id: 16,
    topic: "Operators",
    question: "Which operator is used for type comparison in Java?",
    options: [
      { label: "A", text: "instanceof" },
      { label: "B", text: "typeof" },
      { label: "C", text: "getClass" },
      { label: "D", text: "is" },
    ],
    answer: "A. instanceof",
  },
  {
    id: 17,
    topic: "Operators",
    question: "What is the associativity of the assignment operator (=) in Java?",
    options: [
      { label: "A", text: "Left to right" },
      { label: "B", text: "Right to left" },
      { label: "C", text: "Both" },
      { label: "D", text: "None" },
    ],
    answer: "B. Right to left",
  },
  {
    id: 18,
    topic: "Operators",
    question: "What does the 'instanceof' operator check?",
    options: [
      { label: "A", text: "Whether an object is an instance of a specific class" },
      { label: "B", text: "The size of an object" },
      { label: "C", text: "The memory address of an object" },
      { label: "D", text: "The class name of an object" },
    ],
    answer: "A. Whether an object is an instance of a specific class",
  },

  // ----- Control Flow (6) -----
  {
    id: 19,
    topic: "Control Flow",
    question: "Which statement is used to exit a loop prematurely in Java?",
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
    question: "What is the output of: int x = 10; if(x > 10) System.out.println('Yes'); else System.out.println('No');",
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
    question: "Which loop is guaranteed to execute at least once in Java?",
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
    question: "What is the use of the 'switch' statement in Java?",
    options: [
      { label: "A", text: "To implement multi-way branching" },
      { label: "B", text: "To loop until a condition is met" },
      { label: "C", text: "To define a method" },
      { label: "D", text: "To declare variables" },
    ],
    answer: "A. To implement multi-way branching",
  },
  {
    id: 23,
    topic: "Control Flow",
    question: "Can the 'switch' statement in Java use String values?",
    options: [
      { label: "A", text: "Yes, from Java 7 onwards" },
      { label: "B", text: "No" },
      { label: "C", text: "Only in Java 8" },
      { label: "D", text: "Only with numbers" },
    ],
    answer: "A. Yes, from Java 7 onwards",
  },
  {
    id: 24,
    topic: "Control Flow",
    question: "What is the output of: for(int i=0;i<3;i++) System.out.print(i);",
    options: [
      { label: "A", text: "012" },
      { label: "B", text: "0123" },
      { label: "C", text: "123" },
      { label: "D", text: "No output" },
    ],
    answer: "A. 012",
  },

  // ----- OOP Concepts (8) -----
  {
    id: 25,
    topic: "OOP Concepts",
    question: "What is encapsulation in Java?",
    options: [
      { label: "A", text: "Wrapping data and methods into a single unit" },
      { label: "B", text: "Creating multiple methods with the same name" },
      { label: "C", text: "Inheriting properties from parent class" },
      { label: "D", text: "Hiding implementation details" },
    ],
    answer: "A. Wrapping data and methods into a single unit",
  },
  {
    id: 26,
    topic: "OOP Concepts",
    question: "Which keyword is used to inherit a class in Java?",
    options: [
      { label: "A", text: "extends" },
      { label: "B", text: "implements" },
      { label: "C", text: "inherits" },
      { label: "D", text: "super" },
    ],
    answer: "A. extends",
  },
  {
    id: 27,
    topic: "OOP Concepts",
    question: "What is polymorphism in Java?",
    options: [
      { label: "A", text: "Ability to take many forms" },
      { label: "B", text: "Creating multiple objects" },
      { label: "C", text: "Defining multiple constructors" },
      { label: "D", text: "Using interfaces" },
    ],
    answer: "A. Ability to take many forms",
  },
  {
    id: 28,
    topic: "OOP Concepts",
    question: "Which keyword is used to access parent class members in Java?",
    options: [
      { label: "A", text: "super" },
      { label: "B", text: "this" },
      { label: "C", text: "parent" },
      { label: "D", text: "base" },
    ],
    answer: "A. super",
  },
  {
    id: 29,
    topic: "OOP Concepts",
    question: "What is method overloading in Java?",
    options: [
      { label: "A", text: "Multiple methods with same name but different parameters" },
      { label: "B", text: "Multiple methods with same name and same parameters" },
      { label: "C", text: "Methods in different classes" },
      { label: "D", text: "Methods with different return types" },
    ],
    answer: "A. Multiple methods with same name but different parameters",
  },
  {
    id: 30,
    topic: "OOP Concepts",
    question: "What is method overriding in Java?",
    options: [
      { label: "A", text: "Redefining a method in child class" },
      { label: "B", text: "Defining multiple methods" },
      { label: "C", text: "Calling a method from parent" },
      { label: "D", text: "Using abstract methods" },
    ],
    answer: "A. Redefining a method in child class",
  },
  {
    id: 31,
    topic: "OOP Concepts",
    question: "What is an abstract class in Java?",
    options: [
      { label: "A", text: "A class that cannot be instantiated" },
      { label: "B", text: "A class with only static methods" },
      { label: "C", text: "A class with private constructors" },
      { label: "D", text: "A class without any methods" },
    ],
    answer: "A. A class that cannot be instantiated",
  },
  {
    id: 32,
    topic: "OOP Concepts",
    question: "What is an interface in Java?",
    options: [
      { label: "A", text: "A blueprint for classes that defines abstract methods" },
      { label: "B", text: "A concrete class" },
      { label: "C", text: "A method signature" },
      { label: "D", text: "A package" },
    ],
    answer: "A. A blueprint for classes that defines abstract methods",
  },

  // ----- Arrays (6) -----
  {
    id: 33,
    topic: "Arrays",
    question: "Which index is used to access the first element of an array in Java?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "0" },
      { label: "C", text: "-1" },
      { label: "D", text: "Any" },
    ],
    answer: "B. 0",
  },
  {
    id: 34,
    topic: "Arrays",
    question: "What is the correct syntax to declare an array in Java?",
    options: [
      { label: "A", text: "int[] arr;" },
      { label: "B", text: "int arr[];" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "array int arr;" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 35,
    topic: "Arrays",
    question: "What is the output of: int[] arr = {1,2,3}; System.out.println(arr[2]);",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "Error" },
    ],
    answer: "C. 3",
  },
  {
    id: 36,
    topic: "Arrays",
    question: "How do you get the length of an array in Java?",
    options: [
      { label: "A", text: "arr.length" },
      { label: "B", text: "arr.size()" },
      { label: "C", text: "arr.length()" },
      { label: "D", text: "len(arr)" },
    ],
    answer: "A. arr.length",
  },
  {
    id: 37,
    topic: "Arrays",
    question: "Which of the following correctly declares a 2D array in Java?",
    options: [
      { label: "A", text: "int[][] arr = new int[3][4];" },
      { label: "B", text: "int arr[][] = new int[3][4];" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "int arr[3][4];" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 38,
    topic: "Arrays",
    question: "What happens when you try to access arr[5] in int[] arr = new int[5];",
    options: [
      { label: "A", text: "Returns null" },
      { label: "B", text: "Throws ArrayIndexOutOfBoundsException" },
      { label: "C", text: "Returns 0" },
      { label: "D", text: "Compilation error" },
    ],
    answer: "B. Throws ArrayIndexOutOfBoundsException",
  },

  // ----- Strings (6) -----
  {
    id: 39,
    topic: "Strings",
    question: "Are strings mutable in Java?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only if using StringBuilder" },
      { label: "D", text: "Only in Java 8" },
    ],
    answer: "C. Only if using StringBuilder",
  },
  {
    id: 40,
    topic: "Strings",
    question: "Which class is used to create mutable strings in Java?",
    options: [
      { label: "A", text: "String" },
      { label: "B", text: "StringBuilder" },
      { label: "C", text: "StringBuffer" },
      { label: "D", text: "Both B and C" },
    ],
    answer: "D. Both B and C",
  },
  {
    id: 41,
    topic: "Strings",
    question: "What is the output of: 'Hello'.concat('World');",
    options: [
      { label: "A", text: "HelloWorld" },
      { label: "B", text: "Hello World" },
      { label: "C", text: "Hello" },
      { label: "D", text: "World" },
    ],
    answer: "A. HelloWorld",
  },
  {
    id: 42,
    topic: "Strings",
    question: "How do you get the length of a String in Java?",
    options: [
      { label: "A", text: "str.length" },
      { label: "B", text: "str.length()" },
      { label: "C", text: "str.size()" },
      { label: "D", text: "len(str)" },
    ],
    answer: "B. str.length()",
  },
  {
    id: 43,
    topic: "Strings",
    question: "What is the difference between String and StringBuilder?",
    options: [
      { label: "A", text: "String is immutable, StringBuilder is mutable" },
      { label: "B", text: "String is mutable, StringBuilder is immutable" },
      { label: "C", text: "Both are immutable" },
      { label: "D", text: "Both are mutable" },
    ],
    answer: "A. String is immutable, StringBuilder is mutable",
  },
  {
    id: 44,
    topic: "Strings",
    question: "Which method is used to compare strings ignoring case in Java?",
    options: [
      { label: "A", text: "equalsIgnoreCase()" },
      { label: "B", text: "compareToIgnoreCase()" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "equals()" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Collections (6) -----
  {
    id: 45,
    topic: "Collections",
    question: "Which interface is the root of the Java Collection Framework?",
    options: [
      { label: "A", text: "List" },
      { label: "B", text: "Set" },
      { label: "C", text: "Collection" },
      { label: "D", text: "Map" },
    ],
    answer: "C. Collection",
  },
  {
    id: 46,
    topic: "Collections",
    question: "Which collection allows duplicate elements?",
    options: [
      { label: "A", text: "Set" },
      { label: "B", text: "List" },
      { label: "C", text: "Map" },
      { label: "D", text: "Queue" },
    ],
    answer: "B. List",
  },
  {
    id: 47,
    topic: "Collections",
    question: "What is the difference between ArrayList and LinkedList?",
    options: [
      { label: "A", text: "ArrayList is faster for random access, LinkedList for insertion/deletion" },
      { label: "B", text: "LinkedList is faster for random access" },
      { label: "C", text: "ArrayList is faster for insertion/deletion" },
      { label: "D", text: "No difference" },
    ],
    answer: "A. ArrayList is faster for random access, LinkedList for insertion/deletion",
  },
  {
    id: 48,
    topic: "Collections",
    question: "Which collection does not allow null values?",
    options: [
      { label: "A", text: "ArrayList" },
      { label: "B", text: "HashSet" },
      { label: "C", text: "TreeSet" },
      { label: "D", text: "LinkedList" },
    ],
    answer: "C. TreeSet",
  },
  {
    id: 49,
    topic: "Collections",
    question: "What is the difference between HashMap and TreeMap?",
    options: [
      { label: "A", text: "HashMap is unsorted, TreeMap is sorted" },
      { label: "B", text: "TreeMap is unsorted, HashMap is sorted" },
      { label: "C", text: "Both are sorted" },
      { label: "D", text: "Both are unsorted" },
    ],
    answer: "A. HashMap is unsorted, TreeMap is sorted",
  },
  {
    id: 50,
    topic: "Collections",
    question: "Which interface represents a key-value pair collection?",
    options: [
      { label: "A", text: "List" },
      { label: "B", text: "Set" },
      { label: "C", text: "Map" },
      { label: "D", text: "Queue" },
    ],
    answer: "C. Map",
  },

  // ----- Exception Handling (6) -----
  {
    id: 51,
    topic: "Exception Handling",
    question: "Which keyword is used to handle exceptions in Java?",
    options: [
      { label: "A", text: "try" },
      { label: "B", text: "catch" },
      { label: "C", text: "finally" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 52,
    topic: "Exception Handling",
    question: "What is the parent class of all exceptions in Java?",
    options: [
      { label: "A", text: "Exception" },
      { label: "B", text: "Throwable" },
      { label: "C", text: "Error" },
      { label: "D", text: "RuntimeException" },
    ],
    answer: "B. Throwable",
  },
  {
    id: 53,
    topic: "Exception Handling",
    question: "What is the difference between checked and unchecked exceptions?",
    options: [
      { label: "A", text: "Checked exceptions are checked at compile time, unchecked at runtime" },
      { label: "B", text: "Unchecked exceptions are checked at compile time" },
      { label: "C", text: "Both are checked at compile time" },
      { label: "D", text: "Both are checked at runtime" },
    ],
    answer: "A. Checked exceptions are checked at compile time, unchecked at runtime",
  },
  {
    id: 54,
    topic: "Exception Handling",
    question: "Which keyword is used to throw an exception explicitly?",
    options: [
      { label: "A", text: "throw" },
      { label: "B", text: "throws" },
      { label: "C", text: "try" },
      { label: "D", text: "catch" },
    ],
    answer: "A. throw",
  },
  {
    id: 55,
    topic: "Exception Handling",
    question: "What is the purpose of the 'finally' block?",
    options: [
      { label: "A", text: "To execute code regardless of exception" },
      { label: "B", text: "To catch exceptions" },
      { label: "C", text: "To throw exceptions" },
      { label: "D", text: "To handle exceptions" },
    ],
    answer: "A. To execute code regardless of exception",
  },
  {
    id: 56,
    topic: "Exception Handling",
    question: "Which of the following is a checked exception?",
    options: [
      { label: "A", text: "NullPointerException" },
      { label: "B", text: "ArrayIndexOutOfBoundsException" },
      { label: "C", text: "IOException" },
      { label: "D", text: "ArithmeticException" },
    ],
    answer: "C. IOException",
  },

  // ----- Multithreading (6) -----
  {
    id: 57,
    topic: "Multithreading",
    question: "Which keyword is used for synchronization in Java?",
    options: [
      { label: "A", text: "synchronized" },
      { label: "B", text: "volatile" },
      { label: "C", text: "atomic" },
      { label: "D", text: "lock" },
    ],
    answer: "A. synchronized",
  },
  {
    id: 58,
    topic: "Multithreading",
    question: "How can you create a thread in Java?",
    options: [
      { label: "A", text: "Extend Thread class" },
      { label: "B", text: "Implement Runnable interface" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "Use ThreadFactory" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 59,
    topic: "Multithreading",
    question: "What is the difference between sleep() and wait() in Java?",
    options: [
      { label: "A", text: "sleep() is for Thread, wait() is for Object" },
      { label: "B", text: "sleep() releases lock, wait() doesn't" },
      { label: "C", text: "Both release lock" },
      { label: "D", text: "Both are for Thread" },
    ],
    answer: "A. sleep() is for Thread, wait() is for Object",
  },
  {
    id: 60,
    topic: "Multithreading",
    question: "Which method is used to start a thread in Java?",
    options: [
      { label: "A", text: "run()" },
      { label: "B", text: "start()" },
      { label: "C", text: "execute()" },
      { label: "D", text: "begin()" },
    ],
    answer: "B. start()",
  },
  {
    id: 61,
    topic: "Multithreading",
    question: "What is the 'volatile' keyword used for in Java?",
    options: [
      { label: "A", text: "To ensure visibility of changes to variables across threads" },
      { label: "B", text: "To make a variable read-only" },
      { label: "C", text: "To declare a static variable" },
      { label: "D", text: "To initialize a variable" },
    ],
    answer: "A. To ensure visibility of changes to variables across threads",
  },
  {
    id: 62,
    topic: "Multithreading",
    question: "What is a deadlock in Java?",
    options: [
      { label: "A", text: "Two or more threads are waiting forever for each other to release resources" },
      { label: "B", text: "A thread is waiting for its own lock" },
      { label: "C", text: "Threads are executing simultaneously" },
      { label: "D", text: "Threads are paused" },
    ],
    answer: "A. Two or more threads are waiting forever for each other to release resources",
  },

  // ----- File I/O (6) -----
  {
    id: 63,
    topic: "File I/O",
    question: "Which package contains file I/O classes in Java?",
    options: [
      { label: "A", text: "java.io" },
      { label: "B", text: "java.nio" },
      { label: "C", text: "java.file" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 64,
    topic: "File I/O",
    question: "Which class is used to read text files in Java?",
    options: [
      { label: "A", text: "FileReader" },
      { label: "B", text: "BufferedReader" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "FileInputStream" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 65,
    topic: "File I/O",
    question: "Which class is used to write text files in Java?",
    options: [
      { label: "A", text: "FileWriter" },
      { label: "B", text: "BufferedWriter" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "FileOutputStream" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 66,
    topic: "File I/O",
    question: "What is the difference between FileReader and FileInputStream?",
    options: [
      { label: "A", text: "FileReader reads character data, FileInputStream reads byte data" },
      { label: "B", text: "FileReader reads byte data, FileInputStream reads character data" },
      { label: "C", text: "Both read character data" },
      { label: "D", text: "Both read byte data" },
    ],
    answer: "A. FileReader reads character data, FileInputStream reads byte data",
  },
  {
    id: 67,
    topic: "File I/O",
    question: "Which method is used to read a line from a file in Java?",
    options: [
      { label: "A", text: "readLine()" },
      { label: "B", text: "read()" },
      { label: "C", text: "getLine()" },
      { label: "D", text: "nextLine()" },
    ],
    answer: "A. readLine()",
  },
  {
    id: 68,
    topic: "File I/O",
    question: "What is the purpose of the 'try-with-resources' statement?",
    options: [
      { label: "A", text: "To automatically close resources" },
      { label: "B", text: "To handle exceptions" },
      { label: "C", text: "To define resources" },
      { label: "D", text: "To open files" },
    ],
    answer: "A. To automatically close resources",
  },

  // ----- Streams & Lambda (6) -----
  {
    id: 69,
    topic: "Streams & Lambda",
    question: "Which Java version introduced Lambda expressions?",
    options: [
      { label: "A", text: "Java 7" },
      { label: "B", text: "Java 8" },
      { label: "C", text: "Java 9" },
      { label: "D", text: "Java 11" },
    ],
    answer: "B. Java 8",
  },
  {
    id: 70,
    topic: "Streams & Lambda",
    question: "What is the syntax of a lambda expression?",
    options: [
      { label: "A", text: "(parameters) -> expression" },
      { label: "B", text: "(parameters) => expression" },
      { label: "C", text: "parameters -> expression" },
      { label: "D", text: "function(parameters) -> expression" },
    ],
    answer: "A. (parameters) -> expression",
  },
  {
    id: 71,
    topic: "Streams & Lambda",
    question: "What is a functional interface in Java?",
    options: [
      { label: "A", text: "An interface with a single abstract method" },
      { label: "B", text: "An interface with multiple abstract methods" },
      { label: "C", text: "An interface with no methods" },
      { label: "D", text: "An interface with default methods" },
    ],
    answer: "A. An interface with a single abstract method",
  },
  {
    id: 72,
    topic: "Streams & Lambda",
    question: "What is the purpose of the Stream API in Java?",
    options: [
      { label: "A", text: "To perform functional operations on collections" },
      { label: "B", text: "To create new collections" },
      { label: "C", text: "To iterate over arrays" },
      { label: "D", text: "To write to files" },
    ],
    answer: "A. To perform functional operations on collections",
  },
  {
    id: 73,
    topic: "Streams & Lambda",
    question: "What is the difference between map() and flatMap() in streams?",
    options: [
      { label: "A", text: "map() returns a stream, flatMap() flattens nested streams" },
      { label: "B", text: "flatMap() returns a stream, map() flattens nested streams" },
      { label: "C", text: "Both flatten nested streams" },
      { label: "D", text: "Both return streams" },
    ],
    answer: "A. map() returns a stream, flatMap() flattens nested streams",
  },
  {
    id: 74,
    topic: "Streams & Lambda",
    question: "Which annotation is used to mark a functional interface?",
    options: [
      { label: "A", text: "@FunctionalInterface" },
      { label: "B", text: "@Functional" },
      { label: "C", text: "@Interface" },
      { label: "D", text: "@Lambda" },
    ],
    answer: "A. @FunctionalInterface",
  },

  // ----- JDBC (6) -----
  {
    id: 75,
    topic: "JDBC",
    question: "What does JDBC stand for?",
    options: [
      { label: "A", text: "Java Database Connectivity" },
      { label: "B", text: "Java Database Connection" },
      { label: "C", text: "Java Data Base Connection" },
      { label: "D", text: "Java Database Controller" },
    ],
    answer: "A. Java Database Connectivity",
  },
  {
    id: 76,
    topic: "JDBC",
    question: "Which class is used to load a JDBC driver?",
    options: [
      { label: "A", text: "Class.forName()" },
      { label: "B", text: "DriverManager.getDriver()" },
      { label: "C", text: "Driver.load()" },
      { label: "D", text: "JDBC.load()" },
    ],
    answer: "A. Class.forName()",
  },
  {
    id: 77,
    topic: "JDBC",
    question: "Which interface is used to execute SQL queries in JDBC?",
    options: [
      { label: "A", text: "Statement" },
      { label: "B", text: "PreparedStatement" },
      { label: "C", text: "CallableStatement" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 78,
    topic: "JDBC",
    question: "What is the difference between Statement and PreparedStatement?",
    options: [
      { label: "A", text: "PreparedStatement prevents SQL injection" },
      { label: "B", text: "Statement prevents SQL injection" },
      { label: "C", text: "Both prevent SQL injection" },
      { label: "D", text: "Neither prevents SQL injection" },
    ],
    answer: "A. PreparedStatement prevents SQL injection",
  },
  {
    id: 79,
    topic: "JDBC",
    question: "Which method is used to execute a SELECT query in JDBC?",
    options: [
      { label: "A", text: "executeQuery()" },
      { label: "B", text: "executeUpdate()" },
      { label: "C", text: "execute()" },
      { label: "D", text: "runQuery()" },
    ],
    answer: "A. executeQuery()",
  },
  {
    id: 80,
    topic: "JDBC",
    question: "What is the purpose of the ResultSet interface?",
    options: [
      { label: "A", text: "To store and navigate query results" },
      { label: "B", text: "To execute queries" },
      { label: "C", text: "To connect to databases" },
      { label: "D", text: "To close connections" },
    ],
    answer: "A. To store and navigate query results",
  },

  // ----- Generics (6) -----
  {
    id: 81,
    topic: "Generics",
    question: "What is the purpose of generics in Java?",
    options: [
      { label: "A", text: "To provide compile-time type safety" },
      { label: "B", text: "To improve performance" },
      { label: "C", text: "To reduce code" },
      { label: "D", text: "To create objects" },
    ],
    answer: "A. To provide compile-time type safety",
  },
  {
    id: 82,
    topic: "Generics",
    question: "What is the syntax for a generic class?",
    options: [
      { label: "A", text: "class MyClass<T>" },
      { label: "B", text: "class MyClass[T]" },
      { label: "C", text: "class MyClass(T)" },
      { label: "D", text: "generic class MyClass<T>" },
    ],
    answer: "A. class MyClass<T>",
  },
  {
    id: 83,
    topic: "Generics",
    question: "What is a bounded type parameter in generics?",
    options: [
      { label: "A", text: "A type parameter that extends a specific class" },
      { label: "B", text: "A type parameter with no bounds" },
      { label: "C", text: "A type parameter for primitive types" },
      { label: "D", text: "A type parameter for arrays" },
    ],
    answer: "A. A type parameter that extends a specific class",
  },
  {
    id: 84,
    topic: "Generics",
    question: "What is the wildcard in generics?",
    options: [
      { label: "A", text: "An unknown type represented by ?" },
      { label: "B", text: "A specific type" },
      { label: "C", text: "A primitive type" },
      { label: "D", text: "A void type" },
    ],
    answer: "A. An unknown type represented by ?",
  },
  {
    id: 85,
    topic: "Generics",
    question: "Can you create a generic array in Java?",
    options: [
      { label: "A", text: "No, due to type erasure" },
      { label: "B", text: "Yes, using T[]" },
      { label: "C", text: "Yes, using generic arrays" },
      { label: "D", text: "Only with ArrayList" },
    ],
    answer: "A. No, due to type erasure",
  },
  {
    id: 86,
    topic: "Generics",
    question: "What is type erasure in Java?",
    options: [
      { label: "A", text: "Removing generic type information at compile time" },
      { label: "B", text: "Removing class information" },
      { label: "C", text: "Removing method information" },
      { label: "D", text: "Removing variable information" },
    ],
    answer: "A. Removing generic type information at compile time",
  },

  // ----- Annotations (6) -----
  {
    id: 87,
    topic: "Annotations",
    question: "What is the purpose of annotations in Java?",
    options: [
      { label: "A", text: "To provide metadata about the code" },
      { label: "B", text: "To execute code" },
      { label: "C", text: "To create objects" },
      { label: "D", text: "To declare variables" },
    ],
    answer: "A. To provide metadata about the code",
  },
  {
    id: 88,
    topic: "Annotations",
    question: "Which annotation is used to override a method?",
    options: [
      { label: "A", text: "@Override" },
      { label: "B", text: "@OverrideMethod" },
      { label: "C", text: "@Overrides" },
      { label: "D", text: "@Super" },
    ],
    answer: "A. @Override",
  },
  {
    id: 89,
    topic: "Annotations",
    question: "Which annotation is used to indicate that a method is deprecated?",
    options: [
      { label: "A", text: "@Deprecated" },
      { label: "B", text: "@DeprecatedMethod" },
      { label: "C", text: "@Obsolete" },
      { label: "D", text: "@Old" },
    ],
    answer: "A. @Deprecated",
  },
  {
    id: 90,
    topic: "Annotations",
    question: "What is a marker annotation in Java?",
    options: [
      { label: "A", text: "An annotation with no elements" },
      { label: "B", text: "An annotation with one element" },
      { label: "C", text: "An annotation with multiple elements" },
      { label: "D", text: "An annotation that is not used" },
    ],
    answer: "A. An annotation with no elements",
  },
  {
    id: 91,
    topic: "Annotations",
    question: "What is the '@FunctionalInterface' annotation used for?",
    options: [
      { label: "A", text: "To mark an interface with a single abstract method" },
      { label: "B", text: "To mark a class as functional" },
      { label: "C", text: "To mark a method as functional" },
      { label: "D", text: "To create lambda expressions" },
    ],
    answer: "A. To mark an interface with a single abstract method",
  },
  {
    id: 92,
    topic: "Annotations",
    question: "What is a meta-annotation in Java?",
    options: [
      { label: "A", text: "An annotation applied to other annotations" },
      { label: "B", text: "An annotation applied to classes" },
      { label: "C", text: "An annotation applied to methods" },
      { label: "D", text: "An annotation applied to fields" },
    ],
    answer: "A. An annotation applied to other annotations",
  },

  // ----- JVM & Memory Management (6) -----
  {
    id: 93,
    topic: "JVM & Memory Management",
    question: "What does JVM stand for?",
    options: [
      { label: "A", text: "Java Virtual Machine" },
      { label: "B", text: "Java Variable Manager" },
      { label: "C", text: "Java Version Manager" },
      { label: "D", text: "Java Visual Machine" },
    ],
    answer: "A. Java Virtual Machine",
  },
  {
    id: 94,
    topic: "JVM & Memory Management",
    question: "What is garbage collection in Java?",
    options: [
      { label: "A", text: "Automatic memory management" },
      { label: "B", text: "Manual memory management" },
      { label: "C", text: "Memory allocation" },
      { label: "D", text: "Memory deallocation" },
    ],
    answer: "A. Automatic memory management",
  },
  {
    id: 95,
    topic: "JVM & Memory Management",
    question: "Which method is called by garbage collector before reclaiming an object?",
    options: [
      { label: "A", text: "finalize()" },
      { label: "B", text: "dispose()" },
      { label: "C", text: "destroy()" },
      { label: "D", text: "clean()" },
    ],
    answer: "A. finalize()",
  },
  {
    id: 96,
    topic: "JVM & Memory Management",
    question: "What is the heap in Java?",
    options: [
      { label: "A", text: "Memory area for objects" },
      { label: "B", text: "Memory area for stack frames" },
      { label: "C", text: "Memory area for method area" },
      { label: "D", text: "Memory area for native methods" },
    ],
    answer: "A. Memory area for objects",
  },
  {
    id: 97,
    topic: "JVM & Memory Management",
    question: "What is the stack in Java?",
    options: [
      { label: "A", text: "Memory area for method frames and local variables" },
      { label: "B", text: "Memory area for objects" },
      { label: "C", text: "Memory area for classes" },
      { label: "D", text: "Memory area for threads" },
    ],
    answer: "A. Memory area for method frames and local variables",
  },
  {
    id: 98,
    topic: "JVM & Memory Management",
    question: "What is the purpose of the 'new' keyword in Java?",
    options: [
      { label: "A", text: "To create objects" },
      { label: "B", text: "To create arrays" },
      { label: "C", text: "To allocate memory" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },

  // ----- Advanced Topics (6) -----
  {
    id: 99,
    topic: "Advanced Topics",
    question: "What is reflection in Java?",
    options: [
      { label: "A", text: "Inspecting and modifying classes at runtime" },
      { label: "B", text: "Creating objects at runtime" },
      { label: "C", text: "Executing methods at runtime" },
      { label: "D", text: "All of these" },
    ],
    answer: "D. All of these",
  },
  {
    id: 100,
    topic: "Advanced Topics",
    question: "What is a module in Java?",
    options: [
      { label: "A", text: "A group of related packages" },
      { label: "B", text: "A single class" },
      { label: "C", text: "A method" },
      { label: "D", text: "An interface" },
    ],
    answer: "A. A group of related packages",
  },
  {
    id: 101,
    topic: "Advanced Topics",
    question: "Which Java version introduced the module system?",
    options: [
      { label: "A", text: "Java 8" },
      { label: "B", text: "Java 9" },
      { label: "C", text: "Java 10" },
      { label: "D", text: "Java 11" },
    ],
    answer: "B. Java 9",
  },
  {
    id: 102,
    topic: "Advanced Topics",
    question: "What is the purpose of the 'var' keyword in Java?",
    options: [
      { label: "A", text: "Local variable type inference" },
      { label: "B", text: "Variable declaration" },
      { label: "C", text: "Constant declaration" },
      { label: "D", text: "Method declaration" },
    ],
    answer: "A. Local variable type inference",
  },
  {
    id: 103,
    topic: "Advanced Topics",
    question: "What is a sealed class in Java?",
    options: [
      { label: "A", text: "A class with restricted subclasses" },
      { label: "B", text: "A class that cannot be instantiated" },
      { label: "C", text: "A class with private methods" },
      { label: "D", text: "A class with no methods" },
    ],
    answer: "A. A class with restricted subclasses",
  },
  {
    id: 104,
    topic: "Advanced Topics",
    question: "What is a record in Java?",
    options: [
      { label: "A", text: "A transparent data carrier class" },
      { label: "B", text: "A database record" },
      { label: "C", text: "A file record" },
      { label: "D", text: "A method record" },
    ],
    answer: "A. A transparent data carrier class",
  },

  // ----- More Questions to reach 120+ (16 more) -----
  {
    id: 105,
    topic: "Java Basics",
    question: "What is the difference between JDK and JRE?",
    options: [
      { label: "A", text: "JDK includes development tools, JRE only runs programs" },
      { label: "B", text: "JRE includes development tools, JDK only runs programs" },
      { label: "C", text: "Both include development tools" },
      { label: "D", text: "Both only run programs" },
    ],
    answer: "A. JDK includes development tools, JRE only runs programs",
  },
  {
    id: 106,
    topic: "Data Types & Variables",
    question: "What is the wrapper class for int?",
    options: [
      { label: "A", text: "Integer" },
      { label: "B", text: "Int" },
      { label: "C", text: "int" },
      { label: "D", text: "IntWrapper" },
    ],
    answer: "A. Integer",
  },
  {
    id: 107,
    topic: "Operators",
    question: "What is the output of: System.out.println(10 % 3);",
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "1" },
      { label: "C", text: "0" },
      { label: "D", text: "2" },
    ],
    answer: "B. 1",
  },
  {
    id: 108,
    topic: "Control Flow",
    question: "Which statement is used to skip the current iteration and continue to the next?",
    options: [
      { label: "A", text: "continue" },
      { label: "B", text: "break" },
      { label: "C", text: "return" },
      { label: "D", text: "goto" },
    ],
    answer: "A. continue",
  },
  {
    id: 109,
    topic: "OOP Concepts",
    question: "What is the difference between final, finally, and finalize?",
    options: [
      { label: "A", text: "final is for constants, finally is for exception handling, finalize is for garbage collection" },
      { label: "B", text: "All are the same" },
      { label: "C", text: "final is for methods, finally is for variables" },
      { label: "D", text: "finalize is for inheritance" },
    ],
    answer: "A. final is for constants, finally is for exception handling, finalize is for garbage collection",
  },
  {
    id: 110,
    topic: "Arrays",
    question: "What is the default value for elements in an int array?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "null" },
      { label: "C", text: "undefined" },
      { label: "D", text: "garbage value" },
    ],
    answer: "A. 0",
  },
  {
    id: 111,
    topic: "Strings",
    question: "Which method is used to convert a string to uppercase?",
    options: [
      { label: "A", text: "toUpperCase()" },
      { label: "B", text: "toUpper()" },
      { label: "C", text: "upperCase()" },
      { label: "D", text: "toUppercase()" },
    ],
    answer: "A. toUpperCase()",
  },
  {
    id: 112,
    topic: "Collections",
    question: "What is the difference between HashSet and LinkedHashSet?",
    options: [
      { label: "A", text: "LinkedHashSet maintains insertion order, HashSet doesn't" },
      { label: "B", text: "HashSet maintains insertion order, LinkedHashSet doesn't" },
      { label: "C", text: "Both maintain insertion order" },
      { label: "D", text: "Neither maintains insertion order" },
    ],
    answer: "A. LinkedHashSet maintains insertion order, HashSet doesn't",
  },
  {
    id: 113,
    topic: "Exception Handling",
    question: "Can we have multiple catch blocks for a single try block?",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Only in Java 8" },
      { label: "D", text: "Only in Java 11" },
    ],
    answer: "A. Yes",
  },
  {
    id: 114,
    topic: "Multithreading",
    question: "What is the difference between synchronized method and synchronized block?",
    options: [
      { label: "A", text: "Synchronized method locks the entire method, synchronized block locks only specified code" },
      { label: "B", text: "Synchronized block locks the entire method" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither provides synchronization" },
    ],
    answer: "A. Synchronized method locks the entire method, synchronized block locks only specified code",
  },
  {
    id: 115,
    topic: "File I/O",
    question: "What is the purpose of the 'serializable' interface?",
    options: [
      { label: "A", text: "To allow object serialization" },
      { label: "B", text: "To allow object cloning" },
      { label: "C", text: "To allow object comparison" },
      { label: "D", text: "To allow object creation" },
    ],
    answer: "A. To allow object serialization",
  },
  {
    id: 116,
    topic: "Streams & Lambda",
    question: "What is a terminal operation in streams?",
    options: [
      { label: "A", text: "An operation that produces a result" },
      { label: "B", text: "An operation that transforms data" },
      { label: "C", text: "An operation that filters data" },
      { label: "D", text: "An operation that sorts data" },
    ],
    answer: "A. An operation that produces a result",
  },
  {
    id: 117,
    topic: "JDBC",
    question: "Which method is used to create a statement in JDBC?",
    options: [
      { label: "A", text: "createStatement()" },
      { label: "B", text: "getStatement()" },
      { label: "C", text: "prepareStatement()" },
      { label: "D", text: "getPreparedStatement()" },
    ],
    answer: "A. createStatement()",
  },
  {
    id: 118,
    topic: "Generics",
    question: "What is the purpose of the 'extends' keyword in generics?",
    options: [
      { label: "A", text: "To set upper bound for type parameter" },
      { label: "B", text: "To set lower bound for type parameter" },
      { label: "C", text: "To define an interface" },
      { label: "D", text: "To create a class" },
    ],
    answer: "A. To set upper bound for type parameter",
  },
  {
    id: 119,
    topic: "Annotations",
    question: "What is the '@SuppressWarnings' annotation used for?",
    options: [
      { label: "A", text: "To suppress compiler warnings" },
      { label: "B", text: "To suppress runtime errors" },
      { label: "C", text: "To suppress exceptions" },
      { label: "D", text: "To suppress methods" },
    ],
    answer: "A. To suppress compiler warnings",
  },
  {
    id: 120,
    topic: "JVM & Memory Management",
    question: "What is the difference between heap and stack memory?",
    options: [
      { label: "A", text: "Heap stores objects, stack stores method frames and local variables" },
      { label: "B", text: "Stack stores objects, heap stores method frames" },
      { label: "C", text: "Both store objects" },
      { label: "D", text: "Neither stores objects" },
    ],
    answer: "A. Heap stores objects, stack stores method frames and local variables",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is Java programming language?",
    answer:
      "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle) in 1995. It is known for its 'Write Once, Run Anywhere' capability, making it platform-independent through the Java Virtual Machine (JVM).",
  },
  {
    question: "Why should I practice Java MCQs?",
    answer:
      "Practicing Java MCQs helps you prepare for technical interviews, competitive exams, and certification tests. It strengthens your understanding of core concepts like OOP, collections, multithreading, and exception handling.",
  },
  {
    question: "What are the key topics in Java?",
    answer:
      "Key topics include Java Basics, OOP Concepts, Data Types, Control Flow, Arrays, Strings, Collections, Exception Handling, Multithreading, File I/O, Streams & Lambda, JDBC, Generics, and JVM.",
  },
  {
    question: "How can I prepare for Java interviews?",
    answer:
      "Start with core concepts, practice coding problems, understand collections framework, multithreading, and design patterns. Review common interview questions and practice with MCQs to test your knowledge.",
  },
  {
    question: "Is Java still relevant in 2026?",
    answer:
      "Yes, Java remains highly relevant for enterprise applications, Android development, web services, and big data technologies. It continues to evolve with new features in recent versions.",
  },
  {
    question: "What is the best way to learn Java?",
    answer:
      "The best way is to read official documentation, practice writing code, work on projects, and regularly test yourself with MCQs. Understanding OOP concepts and practicing real-world problems is essential.",
  },
];

// ========================== COMPONENT ==========================
export default function JavaMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/java",
        "url": "https://CodeSkipper.in/mcq/java",
        "name": "Java Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Java programming, covering basics, OOP, collections, multithreading, and more.",
        "about": { "@type": "Thing", "name": "Java MCQ" },
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
              "name": "Java",
              "item": "https://CodeSkipper.in/mcq/java",
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
        "@id": "https://CodeSkipper.in/mcq/java#course",
        "name": "Java MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Java programming exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Java Programming" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/java#faq",
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
        <title>Java MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Java programming multiple-choice questions with answers. Covers basics, OOP, collections, multithreading, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Java, MCQs, Java Programming, Java MCQ, OOP, Collections, Multithreading, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/java-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/java-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/java-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/java-mcq" />
        <meta property="og:title" content="Java MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Java programming multiple-choice questions covering basics, OOP, collections, multithreading, and more."
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
        <meta name="twitter:title" content="Java MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Java programming multiple-choice questions covering basics, OOP, collections, multithreading, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              ☕ 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Java <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-50/90 max-w-2xl mb-6">
              Master Java programming with 120+ curated MCQs covering OOP, collections,
              multithreading, streams, and more. Perfect for exams, interviews, and placement preparation.
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
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-pink-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore Java Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-orange-600 bg-orange-50 text-orange-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50/50"
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
                <strong className="text-orange-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-orange-600 hover:text-orange-800 font-medium"
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
            Java MCQs
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
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
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
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-orange-600 hover:text-orange-800 bg-orange-50 px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors">
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
                className="mt-3 text-orange-600 hover:text-orange-800 font-medium"
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