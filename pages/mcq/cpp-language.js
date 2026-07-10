import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- C++ Basics (6) -----
  {
    id: 1,
    topic: "C++ Basics",
    question: "Who developed the C++ programming language?",
    options: [
      { label: "A", text: "Dennis Ritchie" },
      { label: "B", text: "Bjarne Stroustrup" },
      { label: "C", text: "James Gosling" },
      { label: "D", text: "Guido van Rossum" },
    ],
    answer: "B. Bjarne Stroustrup",
  },
  {
    id: 2,
    topic: "C++ Basics",
    question: "Which of the following is a valid C++ comment style?",
    options: [
      { label: "A", text: "// comment" },
      { label: "B", text: "/* comment */" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "# comment" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 3,
    topic: "C++ Basics",
    question: "Which header file is required for input/output operations in C++?",
    options: [
      { label: "A", text: "#include <stdio.h>" },
      { label: "B", text: "#include <iostream>" },
      { label: "C", text: "#include <stdlib.h>" },
      { label: "D", text: "#include <cstdio>" },
    ],
    answer: "B. #include <iostream>",
  },
  {
    id: 4,
    topic: "C++ Basics",
    question: "What is the extension of a C++ source file?",
    options: [
      { label: "A", text: ".c" },
      { label: "B", text: ".cpp" },
      { label: "C", text: ".java" },
      { label: "D", text: ".py" },
    ],
    answer: "B. .cpp",
  },
  {
    id: 5,
    topic: "C++ Basics",
    question: "Which namespace is used for standard input/output in C++?",
    options: [
      { label: "A", text: "std" },
      { label: "B", text: "iostream" },
      { label: "C", text: "c++" },
      { label: "D", text: "standard" },
    ],
    answer: "A. std",
  },
  {
    id: 6,
    topic: "C++ Basics",
    question: "What is the correct syntax to output 'Hello World' in C++?",
    options: [
      { label: "A", text: "cout << 'Hello World';" },
      { label: "B", text: "cout << 'Hello World';" },
      { label: "C", text: "print('Hello World');" },
      { label: "D", text: "System.out.println('Hello World');" },
    ],
    answer: "A. cout << 'Hello World';",
  },

  // ----- Data Types (6) -----
  {
    id: 7,
    topic: "Data Types",
    question: "Which of the following is not a fundamental data type in C++?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "float" },
      { label: "C", text: "string" },
      { label: "D", text: "char" },
    ],
    answer: "C. string (string is a class, not fundamental)",
  },
  {
    id: 8,
    topic: "Data Types",
    question: "What is the size of 'int' in C++ (on most 32-bit systems)?",
    options: [
      { label: "A", text: "1 byte" },
      { label: "B", text: "2 bytes" },
      { label: "C", text: "4 bytes" },
      { label: "D", text: "8 bytes" },
    ],
    answer: "C. 4 bytes",
  },
  {
    id: 9,
    topic: "Data Types",
    question: "Which data type is used to store a single character?",
    options: [
      { label: "A", text: "char" },
      { label: "B", text: "string" },
      { label: "C", text: "int" },
      { label: "D", text: "bool" },
    ],
    answer: "A. char",
  },
  {
    id: 10,
    topic: "Data Types",
    question: "What is the size of 'bool' in C++?",
    options: [
      { label: "A", text: "1 byte" },
      { label: "B", text: "2 bytes" },
      { label: "C", text: "4 bytes" },
      { label: "D", text: "8 bytes" },
    ],
    answer: "A. 1 byte",
  },
  {
    id: 11,
    topic: "Data Types",
    question: "Which of the following is a user-defined data type in C++?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "float" },
      { label: "C", text: "struct" },
      { label: "D", text: "char" },
    ],
    answer: "C. struct",
  },
  {
    id: 12,
    topic: "Data Types",
    question: "What is the range of 'signed char' typically?",
    options: [
      { label: "A", text: "-128 to 127" },
      { label: "B", text: "0 to 255" },
      { label: "C", text: "-32768 to 32767" },
      { label: "D", text: "0 to 65535" },
    ],
    answer: "A. -128 to 127",
  },

  // ----- Operators (6) -----
  {
    id: 13,
    topic: "Operators",
    question: "Which operator is used to allocate memory dynamically in C++?",
    options: [
      { label: "A", text: "malloc" },
      { label: "B", text: "new" },
      { label: "C", text: "alloc" },
      { label: "D", text: "create" },
    ],
    answer: "B. new",
  },
  {
    id: 14,
    topic: "Operators",
    question: "Which operator is used to deallocate memory in C++?",
    options: [
      { label: "A", text: "free" },
      { label: "B", text: "delete" },
      { label: "C", text: "dealloc" },
      { label: "D", text: "remove" },
    ],
    answer: "B. delete",
  },
  {
    id: 15,
    topic: "Operators",
    question: "What is the result of (5 / 2) in C++?",
    options: [
      { label: "A", text: "2.5" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "2.0" },
    ],
    answer: "B. 2 (integer division)",
  },
  {
    id: 16,
    topic: "Operators",
    question: "Which operator is used for logical AND in C++?",
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
    question: "What is the purpose of the scope resolution operator (::)?",
    options: [
      { label: "A", text: "Access global variables" },
      { label: "B", text: "Access namespace members" },
      { label: "C", text: "Define functions outside class" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 18,
    topic: "Operators",
    question: "Which operator is used to access a member of a pointer to an object?",
    options: [
      { label: "A", text: "." },
      { label: "B", text: "->" },
      { label: "C", text: "::" },
      { label: "D", text: "*" },
    ],
    answer: "B. ->",
  },

  // ----- Control Structures (6) -----
  {
    id: 19,
    topic: "Control Structures",
    question: "Which statement is used to exit a loop prematurely in C++?",
    options: [
      { label: "A", text: "break" },
      { label: "B", text: "continue" },
      { label: "C", text: "exit" },
      { label: "D", text: "return" },
    ],
    answer: "A. break",
  },
  {
    id: 20,
    topic: "Control Structures",
    question: "Which loop guarantees that the body executes at least once?",
    options: [
      { label: "A", text: "for" },
      { label: "B", text: "while" },
      { label: "C", text: "do-while" },
      { label: "D", text: "None" },
    ],
    answer: "C. do-while",
  },
  {
    id: 21,
    topic: "Control Structures",
    question: "What is the correct syntax for an if-else statement in C++?",
    options: [
      { label: "A", text: "if (condition) { } else { }" },
      { label: "B", text: "if condition { } else { }" },
      { label: "C", text: "if (condition) { } elif { }" },
      { label: "D", text: "if (condition) then { } else { }" },
    ],
    answer: "A. if (condition) { } else { }",
  },
  {
    id: 22,
    topic: "Control Structures",
    question: "Which statement is used to skip the current iteration of a loop?",
    options: [
      { label: "A", text: "break" },
      { label: "B", text: "continue" },
      { label: "C", text: "goto" },
      { label: "D", text: "return" },
    ],
    answer: "B. continue",
  },
  {
    id: 23,
    topic: "Control Structures",
    question: "What is the output of the following? int x = 5; if (x > 3) cout << 'Yes'; else cout << 'No';",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "YesNo" },
      { label: "D", text: "Error" },
    ],
    answer: "A. Yes",
  },
  {
    id: 24,
    topic: "Control Structures",
    question: "Which of the following is a valid switch expression in C++?",
    options: [
      { label: "A", text: "int" },
      { label: "B", text: "char" },
      { label: "C", text: "enum" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- Functions (6) -----
  {
    id: 25,
    topic: "Functions",
    question: "What is the default return type of a function in C++?",
    options: [
      { label: "A", text: "void" },
      { label: "B", text: "int" },
      { label: "C", text: "float" },
      { label: "D", text: "None (must specify)" },
    ],
    answer: "D. None (must specify)",
  },
  {
    id: 26,
    topic: "Functions",
    question: "Which of the following is used to pass arguments by reference in C++?",
    options: [
      { label: "A", text: "int &a" },
      { label: "B", text: "int *a" },
      { label: "C", text: "int a" },
      { label: "D", text: "const int a" },
    ],
    answer: "A. int &a",
  },
  {
    id: 27,
    topic: "Functions",
    question: "What is function overloading in C++?",
    options: [
      { label: "A", text: "Multiple functions with the same name but different parameters" },
      { label: "B", text: "Multiple functions with same name and same parameters" },
      { label: "C", text: "Function that calls itself" },
      { label: "D", text: "Function that returns multiple values" },
    ],
    answer: "A. Multiple functions with the same name but different parameters",
  },
  {
    id: 28,
    topic: "Functions",
    question: "What is the default value of a parameter in a function if not specified?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "NULL" },
      { label: "C", text: "Depends on type (undefined)" },
      { label: "D", text: "No default; it's an error" },
    ],
    answer: "C. Depends on type (undefined)",
  },
  {
    id: 29,
    topic: "Functions",
    question: "Which keyword is used to define a function as inline?",
    options: [
      { label: "A", text: "inline" },
      { label: "B", text: "static" },
      { label: "C", text: "virtual" },
      { label: "D", text: "extern" },
    ],
    answer: "A. inline",
  },
  {
    id: 30,
    topic: "Functions",
    question: "What is a friend function in C++?",
    options: [
      { label: "A", text: "A non-member function that can access private members of a class" },
      { label: "B", text: "A member function of a class" },
      { label: "C", text: "A function that is declared in a namespace" },
      { label: "D", text: "A function that cannot be overloaded" },
    ],
    answer: "A. A non-member function that can access private members of a class",
  },

  // ----- Arrays & Strings (6) -----
  {
    id: 31,
    topic: "Arrays & Strings",
    question: "What is the index of the first element in a C++ array?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "-1" },
      { label: "D", text: "Depends on declaration" },
    ],
    answer: "A. 0",
  },
  {
    id: 32,
    topic: "Arrays & Strings",
    question: "Which function is used to get the length of a C-style string?",
    options: [
      { label: "A", text: "strlen()" },
      { label: "B", text: "length()" },
      { label: "C", text: "size()" },
      { label: "D", text: "strlength()" },
    ],
    answer: "A. strlen()",
  },
  {
    id: 33,
    topic: "Arrays & Strings",
    question: "How to declare an array of 10 integers in C++?",
    options: [
      { label: "A", text: "int arr[10];" },
      { label: "B", text: "array int[10];" },
      { label: "C", text: "int[10] arr;" },
      { label: "D", text: "arr int[10];" },
    ],
    answer: "A. int arr[10];",
  },
  {
    id: 34,
    topic: "Arrays & Strings",
    question: "Which class in C++ is used for strings?",
    options: [
      { label: "A", text: "string" },
      { label: "B", text: "String" },
      { label: "C", text: "std::string" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 35,
    topic: "Arrays & Strings",
    question: "What is the output of the following code? char s[] = 'Hello'; cout << sizeof(s);",
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "4" },
      { label: "D", text: "Error" },
    ],
    answer: "B. 6 (includes null terminator)",
  },
  {
    id: 36,
    topic: "Arrays & Strings",
    question: "Which function concatenates two strings in C++ (C-style)?",
    options: [
      { label: "A", text: "strcat" },
      { label: "B", text: "strcpy" },
      { label: "C", text: "strcmp" },
      { label: "D", text: "strlen" },
    ],
    answer: "A. strcat",
  },

  // ----- Pointers (6) -----
  {
    id: 37,
    topic: "Pointers",
    question: "What is a pointer in C++?",
    options: [
      { label: "A", text: "A variable that stores the address of another variable" },
      { label: "B", text: "A variable that stores a value" },
      { label: "C", text: "A reference to a function" },
      { label: "D", text: "A type of array" },
    ],
    answer: "A. A variable that stores the address of another variable",
  },
  {
    id: 38,
    topic: "Pointers",
    question: "Which operator is used to get the address of a variable?",
    options: [
      { label: "A", text: "&" },
      { label: "B", text: "*" },
      { label: "C", text: "->" },
      { label: "D", text: "::" },
    ],
    answer: "A. &",
  },
  {
    id: 39,
    topic: "Pointers",
    question: "Which operator is used to dereference a pointer?",
    options: [
      { label: "A", text: "&" },
      { label: "B", text: "*" },
      { label: "C", text: "->" },
      { label: "D", text: "." },
    ],
    answer: "B. *",
  },
  {
    id: 40,
    topic: "Pointers",
    question: "What is a null pointer?",
    options: [
      { label: "A", text: "Pointer that points to address 0" },
      { label: "B", text: "Pointer that points to garbage value" },
      { label: "C", text: "Pointer that points to a valid memory location" },
      { label: "D", text: "Pointer that is not initialized" },
    ],
    answer: "A. Pointer that points to address 0",
  },
  {
    id: 41,
    topic: "Pointers",
    question: "What is a pointer to a pointer?",
    options: [
      { label: "A", text: "Pointer that stores the address of another pointer" },
      { label: "B", text: "Pointer that stores a value" },
      { label: "C", text: "Pointer that is declared as void" },
      { label: "D", text: "Pointer that cannot be dereferenced" },
    ],
    answer: "A. Pointer that stores the address of another pointer",
  },
  {
    id: 42,
    topic: "Pointers",
    question: "What is the size of a pointer on a 64-bit system?",
    options: [
      { label: "A", text: "4 bytes" },
      { label: "B", text: "8 bytes" },
      { label: "C", text: "2 bytes" },
      { label: "D", text: "16 bytes" },
    ],
    answer: "B. 8 bytes",
  },

  // ----- OOP Basics (Classes & Objects) (6) -----
  {
    id: 43,
    topic: "OOP Basics",
    question: "What is a class in C++?",
    options: [
      { label: "A", text: "A user-defined data type that encapsulates data and functions" },
      { label: "B", text: "A built-in data type" },
      { label: "C", text: "A function that operates on data" },
      { label: "D", text: "A namespace" },
    ],
    answer: "A. A user-defined data type that encapsulates data and functions",
  },
  {
    id: 44,
    topic: "OOP Basics",
    question: "What is an object in C++?",
    options: [
      { label: "A", text: "An instance of a class" },
      { label: "B", text: "A function of a class" },
      { label: "C", text: "A data member of a class" },
      { label: "D", text: "A type of pointer" },
    ],
    answer: "A. An instance of a class",
  },
  {
    id: 45,
    topic: "OOP Basics",
    question: "Which access specifier allows members to be accessible only within the class?",
    options: [
      { label: "A", text: "public" },
      { label: "B", text: "protected" },
      { label: "C", text: "private" },
      { label: "D", text: "internal" },
    ],
    answer: "C. private",
  },
  {
    id: 46,
    topic: "OOP Basics",
    question: "What is a constructor in C++?",
    options: [
      { label: "A", text: "A special member function that initializes objects" },
      { label: "B", text: "A function that destroys objects" },
      { label: "C", text: "A function that copies objects" },
      { label: "D", text: "A function that assigns objects" },
    ],
    answer: "A. A special member function that initializes objects",
  },
  {
    id: 47,
    topic: "OOP Basics",
    question: "What is a destructor in C++?",
    options: [
      { label: "A", text: "A special member function that cleans up before object destruction" },
      { label: "B", text: "A function that creates objects" },
      { label: "C", text: "A function that copies objects" },
      { label: "D", text: "A function that overloads operators" },
    ],
    answer: "A. A special member function that cleans up before object destruction",
  },
  {
    id: 48,
    topic: "OOP Basics",
    question: "What is the 'this' pointer in C++?",
    options: [
      { label: "A", text: "Pointer to the current object" },
      { label: "B", text: "Pointer to the base class" },
      { label: "C", text: "Pointer to the derived class" },
      { label: "D", text: "Pointer to the class itself" },
    ],
    answer: "A. Pointer to the current object",
  },

  // ----- Inheritance (6) -----
  {
    id: 49,
    topic: "Inheritance",
    question: "What is inheritance in C++?",
    options: [
      { label: "A", text: "Deriving a new class from an existing class" },
      { label: "B", text: "Creating multiple objects of a class" },
      { label: "C", text: "Combining multiple classes" },
      { label: "D", text: "Overloading functions" },
    ],
    answer: "A. Deriving a new class from an existing class",
  },
  {
    id: 50,
    topic: "Inheritance",
    question: "Which type of inheritance leads to the diamond problem?",
    options: [
      { label: "A", text: "Single inheritance" },
      { label: "B", text: "Multiple inheritance" },
      { label: "C", text: "Multilevel inheritance" },
      { label: "D", text: "Hierarchical inheritance" },
    ],
    answer: "B. Multiple inheritance",
  },
  {
    id: 51,
    topic: "Inheritance",
    question: "What is virtual inheritance used for?",
    options: [
      { label: "A", text: "To solve the diamond problem" },
      { label: "B", text: "To override functions" },
      { label: "C", text: "To define abstract classes" },
      { label: "D", text: "To create templates" },
    ],
    answer: "A. To solve the diamond problem",
  },
  {
    id: 52,
    topic: "Inheritance",
    question: "Which specifier allows base class members to be accessible in derived classes but not outside?",
    options: [
      { label: "A", text: "public" },
      { label: "B", text: "protected" },
      { label: "C", text: "private" },
      { label: "D", text: "default" },
    ],
    answer: "B. protected",
  },
  {
    id: 53,
    topic: "Inheritance",
    question: "What is the order of constructor execution in inheritance?",
    options: [
      { label: "A", text: "Base class constructor first, then derived class" },
      { label: "B", text: "Derived class constructor first, then base class" },
      { label: "C", text: "Both execute simultaneously" },
      { label: "D", text: "Depends on the compiler" },
    ],
    answer: "A. Base class constructor first, then derived class",
  },
  {
    id: 54,
    topic: "Inheritance",
    question: "What is the order of destructor execution in inheritance?",
    options: [
      { label: "A", text: "Derived class destructor first, then base class" },
      { label: "B", text: "Base class destructor first, then derived class" },
      { label: "C", text: "Both execute simultaneously" },
      { label: "D", text: "Depends on the compiler" },
    ],
    answer: "A. Derived class destructor first, then base class",
  },

  // ----- Polymorphism (6) -----
  {
    id: 55,
    topic: "Polymorphism",
    question: "What is polymorphism in C++?",
    options: [
      { label: "A", text: "Ability to take many forms" },
      { label: "B", text: "Ability to inherit from multiple classes" },
      { label: "C", text: "Ability to overload operators" },
      { label: "D", text: "Ability to create templates" },
    ],
    answer: "A. Ability to take many forms",
  },
  {
    id: 56,
    topic: "Polymorphism",
    question: "Which keyword is used to enable function overriding in C++?",
    options: [
      { label: "A", text: "virtual" },
      { label: "B", text: "override" },
      { label: "C", text: "final" },
      { label: "D", text: "abstract" },
    ],
    answer: "A. virtual",
  },
  {
    id: 57,
    topic: "Polymorphism",
    question: "What is a pure virtual function?",
    options: [
      { label: "A", text: "A virtual function with no implementation in base class" },
      { label: "B", text: "A virtual function that is overridden" },
      { label: "C", text: "A function that cannot be overridden" },
      { label: "D", text: "A function that is declared as static" },
    ],
    answer: "A. A virtual function with no implementation in base class",
  },
  {
    id: 58,
    topic: "Polymorphism",
    question: "What is a abstract class?",
    options: [
      { label: "A", text: "A class that has at least one pure virtual function" },
      { label: "B", text: "A class that cannot be inherited" },
      { label: "C", text: "A class that has no data members" },
      { label: "D", text: "A class that is declared as final" },
    ],
    answer: "A. A class that has at least one pure virtual function",
  },
  {
    id: 59,
    topic: "Polymorphism",
    question: "What is run-time polymorphism?",
    options: [
      { label: "A", text: "Achieved via virtual functions and inheritance" },
      { label: "B", text: "Achieved via function overloading" },
      { label: "C", text: "Achieved via templates" },
      { label: "D", text: "Achieved via operator overloading" },
    ],
    answer: "A. Achieved via virtual functions and inheritance",
  },
  {
    id: 60,
    topic: "Polymorphism",
    question: "What is compile-time polymorphism?",
    options: [
      { label: "A", text: "Achieved via function overloading and templates" },
      { label: "B", text: "Achieved via virtual functions" },
      { label: "C", text: "Achieved via inheritance" },
      { label: "D", text: "Achieved via abstract classes" },
    ],
    answer: "A. Achieved via function overloading and templates",
  },

  // ----- Templates (6) -----
  {
    id: 61,
    topic: "Templates",
    question: "What is a template in C++?",
    options: [
      { label: "A", text: "A blueprint for creating generic classes and functions" },
      { label: "B", text: "A class that cannot be instantiated" },
      { label: "C", text: "A function that cannot be overridden" },
      { label: "D", text: "A type of inheritance" },
    ],
    answer: "A. A blueprint for creating generic classes and functions",
  },
  {
    id: 62,
    topic: "Templates",
    question: "Which keyword is used to define a template in C++?",
    options: [
      { label: "A", text: "template" },
      { label: "B", text: "typename" },
      { label: "C", text: "class" },
      { label: "D", text: "Both A and B or C" },
    ],
    answer: "D. Both A and B or C",
  },
  {
    id: 63,
    topic: "Templates",
    question: "What is the difference between typename and class in template parameters?",
    options: [
      { label: "A", text: "No difference; they are interchangeable" },
      { label: "B", text: "typename is used for types, class for classes" },
      { label: "C", text: "class is used for types, typename for classes" },
      { label: "D", text: "typename is used for templates, class for classes" },
    ],
    answer: "A. No difference; they are interchangeable",
  },
  {
    id: 64,
    topic: "Templates",
    question: "What is template specialization?",
    options: [
      { label: "A", text: "Defining a specific implementation for a particular type" },
      { label: "B", text: "Defining a template with multiple parameters" },
      { label: "C", text: "Defining a template without parameters" },
      { label: "D", text: "Defining a template as virtual" },
    ],
    answer: "A. Defining a specific implementation for a particular type",
  },
  {
    id: 65,
    topic: "Templates",
    question: "What is a function template?",
    options: [
      { label: "A", text: "A template that defines a generic function" },
      { label: "B", text: "A template that defines a generic class" },
      { label: "C", text: "A template that defines a variable" },
      { label: "D", text: "A template that defines a namespace" },
    ],
    answer: "A. A template that defines a generic function",
  },
  {
    id: 66,
    topic: "Templates",
    question: "What is a class template?",
    options: [
      { label: "A", text: "A template that defines a generic class" },
      { label: "B", text: "A template that defines a generic function" },
      { label: "C", text: "A template that defines a variable" },
      { label: "D", text: "A template that defines a namespace" },
    ],
    answer: "A. A template that defines a generic class",
  },

  // ----- STL (6) -----
  {
    id: 67,
    topic: "STL",
    question: "What does STL stand for?",
    options: [
      { label: "A", text: "Standard Template Library" },
      { label: "B", text: "Standard Type Library" },
      { label: "C", text: "System Template Library" },
      { label: "D", text: "Standard Tool Library" },
    ],
    answer: "A. Standard Template Library",
  },
  {
    id: 68,
    topic: "STL",
    question: "Which container provides fast random access and is dynamic in size?",
    options: [
      { label: "A", text: "vector" },
      { label: "B", text: "list" },
      { label: "C", text: "deque" },
      { label: "D", text: "set" },
    ],
    answer: "A. vector",
  },
  {
    id: 69,
    topic: "STL",
    question: "Which container is implemented as a doubly linked list?",
    options: [
      { label: "A", text: "vector" },
      { label: "B", text: "list" },
      { label: "C", text: "deque" },
      { label: "D", text: "stack" },
    ],
    answer: "B. list",
  },
  {
    id: 70,
    topic: "STL",
    question: "Which algorithm is used to sort elements in a range?",
    options: [
      { label: "A", text: "std::sort" },
      { label: "B", text: "std::find" },
      { label: "C", text: "std::reverse" },
      { label: "D", text: "std::copy" },
    ],
    answer: "A. std::sort",
  },
  {
    id: 71,
    topic: "STL",
    question: "What is an iterator in STL?",
    options: [
      { label: "A", text: "An object that points to an element in a container" },
      { label: "B", text: "A container type" },
      { label: "C", text: "An algorithm" },
      { label: "D", text: "A function object" },
    ],
    answer: "A. An object that points to an element in a container",
  },
  {
    id: 72,
    topic: "STL",
    question: "Which container stores unique keys in sorted order?",
    options: [
      { label: "A", text: "set" },
      { label: "B", text: "map" },
      { label: "C", text: "unordered_set" },
      { label: "D", text: "multiset" },
    ],
    answer: "A. set",
  },

  // ----- Exception Handling (6) -----
  {
    id: 73,
    topic: "Exception Handling",
    question: "Which keyword is used to throw an exception in C++?",
    options: [
      { label: "A", text: "throw" },
      { label: "B", text: "catch" },
      { label: "C", text: "try" },
      { label: "D", text: "exception" },
    ],
    answer: "A. throw",
  },
  {
    id: 74,
    topic: "Exception Handling",
    question: "Which block is used to handle exceptions in C++?",
    options: [
      { label: "A", text: "catch" },
      { label: "B", text: "try" },
      { label: "C", text: "throw" },
      { label: "D", text: "finally" },
    ],
    answer: "A. catch",
  },
  {
    id: 75,
    topic: "Exception Handling",
    question: "What is the purpose of the 'try' block?",
    options: [
      { label: "A", text: "To enclose code that might throw an exception" },
      { label: "B", text: "To handle exceptions" },
      { label: "C", text: "To throw exceptions" },
      { label: "D", text: "To define custom exceptions" },
    ],
    answer: "A. To enclose code that might throw an exception",
  },
  {
    id: 76,
    topic: "Exception Handling",
    question: "Can you catch an exception using 'catch (...)'?",
    options: [
      { label: "A", text: "Yes, catches any exception" },
      { label: "B", text: "No, not allowed" },
      { label: "C", text: "Only if no other catch is used" },
      { label: "D", text: "Only for standard exceptions" },
    ],
    answer: "A. Yes, catches any exception",
  },
  {
    id: 77,
    topic: "Exception Handling",
    question: "What is a standard exception class in C++?",
    options: [
      { label: "A", text: "std::exception" },
      { label: "B", text: "std::error" },
      { label: "C", text: "std::runtime_error" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 78,
    topic: "Exception Handling",
    question: "What happens if an exception is thrown but not caught?",
    options: [
      { label: "A", text: "Program terminates with an error" },
      { label: "B", text: "Program continues execution" },
      { label: "C", text: "Exception is ignored" },
      { label: "D", text: "Compiler gives an error" },
    ],
    answer: "A. Program terminates with an error",
  },

  // ----- File I/O (6) -----
  {
    id: 79,
    topic: "File I/O",
    question: "Which header file is used for file input/output in C++?",
    options: [
      { label: "A", text: "#include <fstream>" },
      { label: "B", text: "#include <iostream>" },
      { label: "C", text: "#include <file>" },
      { label: "D", text: "#include <stdio.h>" },
    ],
    answer: "A. #include <fstream>",
  },
  {
    id: 80,
    topic: "File I/O",
    question: "Which class is used for writing to a file in C++?",
    options: [
      { label: "A", text: "ifstream" },
      { label: "B", text: "ofstream" },
      { label: "C", text: "fstream" },
      { label: "D", text: "filebuf" },
    ],
    answer: "B. ofstream",
  },
  {
    id: 81,
    topic: "File I/O",
    question: "Which class is used for reading from a file in C++?",
    options: [
      { label: "A", text: "ifstream" },
      { label: "B", text: "ofstream" },
      { label: "C", text: "fstream" },
      { label: "D", text: "filebuf" },
    ],
    answer: "A. ifstream",
  },
  {
    id: 82,
    topic: "File I/O",
    question: "Which mode is used to append to a file?",
    options: [
      { label: "A", text: "ios::app" },
      { label: "B", text: "ios::out" },
      { label: "C", text: "ios::in" },
      { label: "D", text: "ios::binary" },
    ],
    answer: "A. ios::app",
  },
  {
    id: 83,
    topic: "File I/O",
    question: "How do you check if a file was opened successfully in C++?",
    options: [
      { label: "A", text: "file.is_open()" },
      { label: "B", text: "file.open()" },
      { label: "C", text: "file.good()" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 84,
    topic: "File I/O",
    question: "Which function is used to close a file in C++?",
    options: [
      { label: "A", text: "file.close()" },
      { label: "B", text: "file.end()" },
      { label: "C", text: "file.exit()" },
      { label: "D", text: "file.stop()" },
    ],
    answer: "A. file.close()",
  },

  // ----- More MCQs to reach 120+ (36 more) -----
  {
    id: 85,
    topic: "C++ Basics",
    question: "What is the main function in C++?",
    options: [
      { label: "A", text: "main()" },
      { label: "B", text: "Main()" },
      { label: "C", text: "int main()" },
      { label: "D", text: "void main()" },
    ],
    answer: "C. int main() (standard)",
  },
  {
    id: 86,
    topic: "Data Types",
    question: "What is the size of 'long double' in C++ (on most systems)?",
    options: [
      { label: "A", text: "8 bytes" },
      { label: "B", text: "10 bytes" },
      { label: "C", text: "16 bytes" },
      { label: "D", text: "4 bytes" },
    ],
    answer: "C. 16 bytes (or 10/12 depending on compiler)",
  },
  {
    id: 87,
    topic: "Operators",
    question: "What is the result of (5 % 2) in C++?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "0" },
      { label: "D", text: "2.5" },
    ],
    answer: "A. 1",
  },
  {
    id: 88,
    topic: "Control Structures",
    question: "Which loop is best when the number of iterations is known?",
    options: [
      { label: "A", text: "for" },
      { label: "B", text: "while" },
      { label: "C", text: "do-while" },
      { label: "D", text: "All are equally suitable" },
    ],
    answer: "A. for",
  },
  {
    id: 89,
    topic: "Functions",
    question: "What is a recursive function?",
    options: [
      { label: "A", text: "A function that calls itself" },
      { label: "B", text: "A function that is overloaded" },
      { label: "C", text: "A function that is virtual" },
      { label: "D", text: "A function that is inline" },
    ],
    answer: "A. A function that calls itself",
  },
  {
    id: 90,
    topic: "Arrays & Strings",
    question: "What is the output? int arr[] = {1,2,3}; cout << arr[2];",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "0" },
    ],
    answer: "C. 3",
  },
  {
    id: 91,
    topic: "Pointers",
    question: "What is the type of a pointer to a function?",
    options: [
      { label: "A", text: "int (*func)()" },
      { label: "B", text: "int *func()" },
      { label: "C", text: "int func*()" },
      { label: "D", text: "function pointer" },
    ],
    answer: "A. int (*func)()",
  },
  {
    id: 92,
    topic: "OOP Basics",
    question: "Which of the following is not a OOP concept in C++?",
    options: [
      { label: "A", text: "Encapsulation" },
      { label: "B", text: "Inheritance" },
      { label: "C", text: "Polymorphism" },
      { label: "D", text: "Procedural abstraction" },
    ],
    answer: "D. Procedural abstraction",
  },
  {
    id: 93,
    topic: "Inheritance",
    question: "Which type of inheritance is used to create a relationship like 'is-a'?",
    options: [
      { label: "A", text: "Composition" },
      { label: "B", text: "Aggregation" },
      { label: "C", text: "Inheritance" },
      { label: "D", text: "Association" },
    ],
    answer: "C. Inheritance",
  },
  {
    id: 94,
    topic: "Polymorphism",
    question: "What is the use of the 'final' specifier in C++?",
    options: [
      { label: "A", text: "Prevents a class from being inherited or function overridden" },
      { label: "B", text: "Marks a function as virtual" },
      { label: "C", text: "Marks a function as abstract" },
      { label: "D", text: "Marks a function as inline" },
    ],
    answer: "A. Prevents a class from being inherited or function overridden",
  },
  {
    id: 95,
    topic: "Templates",
    question: "What is the syntax for a template parameter with a default type?",
    options: [
      { label: "A", text: "template <typename T = int>" },
      { label: "B", text: "template <class T = int>" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "template <T = int>" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 96,
    topic: "STL",
    question: "Which container is a stack implemented as?",
    options: [
      { label: "A", text: "std::stack" },
      { label: "B", text: "std::queue" },
      { label: "C", text: "std::deque" },
      { label: "D", text: "std::list" },
    ],
    answer: "A. std::stack",
  },
  {
    id: 97,
    topic: "Exception Handling",
    question: "Can you throw an exception of any type?",
    options: [
      { label: "A", text: "Yes, any type can be thrown" },
      { label: "B", text: "No, only derived from std::exception" },
      { label: "C", text: "Only built-in types" },
      { label: "D", text: "Only user-defined types" },
    ],
    answer: "A. Yes, any type can be thrown",
  },
  {
    id: 98,
    topic: "File I/O",
    question: "What is the default open mode for fstream?",
    options: [
      { label: "A", text: "ios::in | ios::out" },
      { label: "B", text: "ios::in" },
      { label: "C", text: "ios::out" },
      { label: "D", text: "ios::app" },
    ],
    answer: "A. ios::in | ios::out",
  },
  {
    id: 99,
    topic: "C++ Basics",
    question: "What is the use of the 'using' directive?",
    options: [
      { label: "A", text: "To bring a namespace into scope" },
      { label: "B", text: "To define a new type" },
      { label: "C", text: "To create a pointer" },
      { label: "D", text: "To allocate memory" },
    ],
    answer: "A. To bring a namespace into scope",
  },
  {
    id: 100,
    topic: "Data Types",
    question: "What is the size of 'wchar_t' in C++?",
    options: [
      { label: "A", text: "2 bytes" },
      { label: "B", text: "4 bytes" },
      { label: "C", text: "1 byte" },
      { label: "D", text: "Depends on compiler" },
    ],
    answer: "D. Depends on compiler",
  },
  {
    id: 101,
    topic: "Operators",
    question: "Which operator cannot be overloaded in C++?",
    options: [
      { label: "A", text: ":: (scope resolution)" },
      { label: "B", text: "+" },
      { label: "C", text: "->" },
      { label: "D", text: "[]" },
    ],
    answer: "A. :: (scope resolution)",
  },
  {
    id: 102,
    topic: "Control Structures",
    question: "What is the output? int i = 0; while (i < 3) { cout << i; i++; }",
    options: [
      { label: "A", text: "012" },
      { label: "B", text: "123" },
      { label: "C", text: "0123" },
      { label: "D", text: "0 1 2" },
    ],
    answer: "A. 012",
  },
  {
    id: 103,
    topic: "Functions",
    question: "What is a static function in C++?",
    options: [
      { label: "A", text: "A function that belongs to a class but can be called without an object" },
      { label: "B", text: "A function that cannot be changed" },
      { label: "C", text: "A function that is not accessible outside" },
      { label: "D", text: "A function that returns void" },
    ],
    answer: "A. A function that belongs to a class but can be called without an object",
  },
  {
    id: 104,
    topic: "Arrays & Strings",
    question: "What is the difference between C-style string and std::string?",
    options: [
      { label: "A", text: "std::string is a class with methods; C-style is character array" },
      { label: "B", text: "C-style is faster" },
      { label: "C", text: "std::string uses null terminator" },
      { label: "D", text: "No difference" },
    ],
    answer: "A. std::string is a class with methods; C-style is character array",
  },
  {
    id: 105,
    topic: "Pointers",
    question: "What is a smart pointer in C++?",
    options: [
      { label: "A", text: "A pointer that automatically manages memory" },
      { label: "B", text: "A pointer that is faster" },
      { label: "C", text: "A pointer that is global" },
      { label: "D", text: "A pointer that cannot be dereferenced" },
    ],
    answer: "A. A pointer that automatically manages memory",
  },
  {
    id: 106,
    topic: "OOP Basics",
    question: "Which of the following is a type of constructor?",
    options: [
      { label: "A", text: "Default constructor" },
      { label: "B", text: "Parameterized constructor" },
      { label: "C", text: "Copy constructor" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 107,
    topic: "Inheritance",
    question: "What is the difference between public, protected, and private inheritance?",
    options: [
      { label: "A", text: "They change the access levels of base class members in derived class" },
      { label: "B", text: "They change the speed of inheritance" },
      { label: "C", text: "They change the number of base classes" },
      { label: "D", text: "They are all the same" },
    ],
    answer: "A. They change the access levels of base class members in derived class",
  },
  {
    id: 108,
    topic: "Polymorphism",
    question: "What is the use of the 'override' keyword (C++11)?",
    options: [
      { label: "A", text: "To explicitly mark a function as overriding a virtual function" },
      { label: "B", text: "To define a new function" },
      { label: "C", text: "To prevent overriding" },
      { label: "D", text: "To make a function pure virtual" },
    ],
    answer: "A. To explicitly mark a function as overriding a virtual function",
  },
  {
    id: 109,
    topic: "Templates",
    question: "Can a template have non-type parameters?",
    options: [
      { label: "A", text: "Yes, e.g., template <int N>" },
      { label: "B", text: "No, only types" },
      { label: "C", text: "Only for classes, not functions" },
      { label: "D", text: "Only for functions, not classes" },
    ],
    answer: "A. Yes, e.g., template <int N>",
  },
  {
    id: 110,
    topic: "STL",
    question: "Which STL algorithm is used to find an element in a range?",
    options: [
      { label: "A", text: "std::find" },
      { label: "B", text: "std::search" },
      { label: "C", text: "std::binary_search" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 111,
    topic: "Exception Handling",
    question: "What is the purpose of the 'noexcept' specifier?",
    options: [
      { label: "A", text: "Indicates that a function does not throw exceptions" },
      { label: "B", text: "Indicates that a function always throws" },
      { label: "C", text: "Indicates that a function can throw any exception" },
      { label: "D", text: "Indicates that a function is virtual" },
    ],
    answer: "A. Indicates that a function does not throw exceptions",
  },
  {
    id: 112,
    topic: "File I/O",
    question: "How to read a line from a file in C++?",
    options: [
      { label: "A", text: "getline(file, line)" },
      { label: "B", text: "file >> line" },
      { label: "C", text: "file.readline(line)" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "A. getline(file, line)",
  },
  {
    id: 113,
    topic: "C++ Basics",
    question: "What is the difference between #include <header> and #include 'header'?",
    options: [
      { label: "A", text: "<> searches system paths, '' searches local directories first" },
      { label: "B", text: "'' searches system paths, <> searches local" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "<> is for C, '' for C++" },
    ],
    answer: "A. <> searches system paths, '' searches local directories first",
  },
  {
    id: 114,
    topic: "Data Types",
    question: "What is the size of 'long long' in C++?",
    options: [
      { label: "A", text: "8 bytes" },
      { label: "B", text: "4 bytes" },
      { label: "C", text: "16 bytes" },
      { label: "D", text: "2 bytes" },
    ],
    answer: "A. 8 bytes",
  },
  {
    id: 115,
    topic: "Operators",
    question: "Which operator is used to create a new object on the heap?",
    options: [
      { label: "A", text: "new" },
      { label: "B", text: "malloc" },
      { label: "C", text: "alloc" },
      { label: "D", text: "create" },
    ],
    answer: "A. new",
  },
  {
    id: 116,
    topic: "Control Structures",
    question: "What is the output? int x = 10; if (x = 5) cout << 'Yes'; else cout << 'No';",
    options: [
      { label: "A", text: "Yes" },
      { label: "B", text: "No" },
      { label: "C", text: "Error" },
      { label: "D", text: "Undefined" },
    ],
    answer: "A. Yes (since x=5 returns 5, which is true)",
  },
  {
    id: 117,
    topic: "Functions",
    question: "What is a lambda expression in C++?",
    options: [
      { label: "A", text: "An anonymous function" },
      { label: "B", text: "A named function" },
      { label: "C", text: "A function template" },
      { label: "D", text: "A virtual function" },
    ],
    answer: "A. An anonymous function",
  },
  {
    id: 118,
    topic: "Arrays & Strings",
    question: "What is the output? char str[] = 'Hello'; cout << strlen(str);",
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "4" },
      { label: "D", text: "Error" },
    ],
    answer: "A. 5",
  },
  {
    id: 119,
    topic: "Pointers",
    question: "What is a function pointer?",
    options: [
      { label: "A", text: "A pointer that stores the address of a function" },
      { label: "B", text: "A pointer that points to a variable" },
      { label: "C", text: "A pointer that points to a class" },
      { label: "D", text: "A pointer that cannot be dereferenced" },
    ],
    answer: "A. A pointer that stores the address of a function",
  },
  {
    id: 120,
    topic: "OOP Basics",
    question: "What is the order of initialization of static members?",
    options: [
      { label: "A", text: "In the order they are defined" },
      { label: "B", text: "In reverse order" },
      { label: "C", text: "Random order" },
      { label: "D", text: "Depends on compiler" },
    ],
    answer: "A. In the order they are defined",
  },
  {
    id: 121,
    topic: "Inheritance",
    question: "What is a virtual base class?",
    options: [
      { label: "A", text: "A base class that is inherited virtually to avoid duplication" },
      { label: "B", text: "A base class with virtual functions" },
      { label: "C", text: "A base class that is abstract" },
      { label: "D", text: "A base class that cannot be inherited" },
    ],
    answer: "A. A base class that is inherited virtually to avoid duplication",
  },
  {
    id: 122,
    topic: "STL",
    question: "Which container uses a binary tree for storage?",
    options: [
      { label: "A", text: "set" },
      { label: "B", text: "vector" },
      { label: "C", text: "list" },
      { label: "D", text: "deque" },
    ],
    answer: "A. set",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What are the key features of C++?",
    answer:
      "C++ is a general-purpose programming language that supports object-oriented programming, generic programming, and low-level memory manipulation. Key features include classes, inheritance, polymorphism, templates, exception handling, and the Standard Template Library (STL).",
  },
  {
    question: "What is the difference between C and C++?",
    answer:
      "C++ is an extension of C that adds object-oriented features like classes, inheritance, polymorphism, encapsulation, and abstraction. C++ also supports function overloading, references, and the Standard Template Library (STL), while C is a procedural language.",
  },
  {
    question: "What is the Standard Template Library (STL)?",
    answer:
      "STL is a collection of template classes and functions that provide common data structures (e.g., vector, list, map, set) and algorithms (e.g., sort, find, binary_search). It is a powerful library that simplifies programming by providing reusable components.",
  },
  {
    question: "What is polymorphism in C++?",
    answer:
      "Polymorphism means 'many forms'. In C++, it allows objects of different classes to be treated as objects of a common base class. It is achieved through virtual functions and function overloading. There are two types: compile-time (overloading) and runtime (virtual functions).",
  },
  {
    question: "What is the difference between pass by value and pass by reference?",
    answer:
      "Pass by value creates a copy of the argument, so changes inside the function do not affect the original. Pass by reference (using &) passes a reference to the original variable, allowing modifications to affect the original. Pass by reference is more efficient for large objects.",
  },
  {
    question: "What is the role of the 'virtual' keyword?",
    answer:
      "The 'virtual' keyword is used to declare a function as virtual, enabling runtime polymorphism. When a virtual function is overridden in a derived class, the correct function is called based on the actual object type, not the pointer type. It is essential for dynamic binding.",
  },
  {
    question: "What are smart pointers in C++?",
    answer:
      "Smart pointers are template classes that manage dynamically allocated memory automatically. They include unique_ptr, shared_ptr, and weak_ptr. They help prevent memory leaks by automatically deallocating memory when the pointer goes out of scope.",
  },
  {
    question: "What is the difference between a class and a struct in C++?",
    answer:
      "In C++, the only difference between a class and a struct is the default access specifier. Members of a class are private by default, while members of a struct are public by default. Both can have member functions, constructors, and inheritance.",
  },
];

// ========================== COMPONENT ==========================
export default function CppMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/c-plus-plus",
        "url": "https://CodeSkipper.in/mcq/c-plus-plus",
        "name": "C++ Programming MCQs | Code Skipper",
        "description":
          "Practice 120+ C++ multiple-choice questions covering basics, OOP, templates, STL, and more. Perfect for exams and interviews.",
        "about": { "@type": "Thing", "name": "C++ Programming MCQ" },
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
              "name": "C++ MCQs",
              "item": "https://CodeSkipper.in/mcq/c-plus-plus",
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
        "@id": "https://CodeSkipper.in/mcq/c-plus-plus#course",
        "name": "C++ Programming MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for C++ exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "C++ Programming" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/c-plus-plus#faq",
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
        <title>C++ Programming MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ C++ multiple-choice questions with answers. Covers basics, OOP, templates, STL, exception handling, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="C++, MCQs, C++ Programming, OOP, STL, Templates, Exception Handling, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/c-plus-plus" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/c-plus-plus" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/c-plus-plus" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/c-plus-plus" />
        <meta property="og:title" content="C++ Programming MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ C++ multiple-choice questions covering basics, OOP, templates, STL, and more."
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
        <meta name="twitter:title" content="C++ Programming MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ C++ multiple-choice questions covering basics, OOP, templates, STL, and more."
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
              💻 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              C++ Programming <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master C++ with 120+ curated MCQs covering basics, OOP, templates, STL,
              exception handling, and more. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">12 Topics</span>
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
            Explore C++ Topics
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
            C++ MCQs
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
              { title: "C++ Programming Tutorial", href: "/tutorials/c-plus-plus", icon: "📖" },
              { title: "C++ Interview Questions", href: "/interview/c-plus-plus", icon: "💼" },
              { title: "C++ Notes & Cheat Sheet", href: "/notes/c-plus-plus", icon: "📝" },
              { title: "Data Structures MCQs", href: "/mcq/data-structures", icon: "📋" },
              { title: "Algorithms MCQs", href: "/mcq/algorithms", icon: "⚡" },
              { title: "OOP Concepts MCQs", href: "/mcq/oop", icon: "🔄" },
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
            Ready to Master C++ Programming?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/c-plus-plus"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/c-plus-plus"
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