import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (130+ Unique) ==========================

const questionsData = [
  // ----- Arrays (6) -----
  {
    id: 1,
    topic: "Arrays",
    question: "What is the index of the first element in an array?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "-1" },
      { label: "D", text: "Depends on language" },
    ],
    answer: "A. 0",
  },
  {
    id: 2,
    topic: "Arrays",
    question: "Which of the following operations is efficient on an array?",
    options: [
      { label: "A", text: "Access by index" },
      { label: "B", text: "Insertion at the beginning" },
      { label: "C", text: "Deletion from the middle" },
      { label: "D", text: "Searching unsorted" },
    ],
    answer: "A. Access by index",
  },
  {
    id: 3,
    topic: "Arrays",
    question: "What is a multidimensional array?",
    options: [
      { label: "A", text: "An array of arrays" },
      { label: "B", text: "A one-dimensional array" },
      { label: "C", text: "A dynamic array" },
      { label: "D", text: "A sorted array" },
    ],
    answer: "A. An array of arrays",
  },
  {
    id: 4,
    topic: "Arrays",
    question: "What is the time complexity of searching an element in an unsorted array?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "C. O(n)",
  },
  {
    id: 5,
    topic: "Arrays",
    question: "What is the time complexity of inserting an element at the end of a dynamic array?",
    options: [
      { label: "A", text: "O(1) amortized" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1) amortized",
  },
  {
    id: 6,
    topic: "Arrays",
    question: "Which of the following is true about a circular array?",
    options: [
      { label: "A", text: "It uses a fixed-size buffer" },
      { label: "B", text: "It can be implemented using modulo" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "It is a linked list" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Linked Lists (6) -----
  {
    id: 7,
    topic: "Linked Lists",
    question: "What is a linked list?",
    options: [
      { label: "A", text: "A linear data structure where elements are stored at contiguous memory locations" },
      { label: "B", text: "A linear data structure where elements are stored at non-contiguous memory locations" },
      { label: "C", text: "A data structure that uses hashing" },
      { label: "D", text: "A data structure that uses trees" },
    ],
    answer: "B. A linear data structure where elements are stored at non-contiguous memory locations",
  },
  {
    id: 8,
    topic: "Linked Lists",
    question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 9,
    topic: "Linked Lists",
    question: "What is the time complexity of searching for an element in a singly linked list?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "C. O(n)",
  },
  {
    id: 10,
    topic: "Linked Lists",
    question: "What is a doubly linked list?",
    options: [
      { label: "A", text: "Each node has two pointers: next and prev" },
      { label: "B", text: "Each node has only one pointer" },
      { label: "C", text: "It is a circular list" },
      { label: "D", text: "It is a sorted list" },
    ],
    answer: "A. Each node has two pointers: next and prev",
  },
  {
    id: 11,
    topic: "Linked Lists",
    question: "What is the advantage of a doubly linked list over a singly linked list?",
    options: [
      { label: "A", text: "Can traverse in both directions" },
      { label: "B", text: "Uses less memory" },
      { label: "C", text: "Faster insertion" },
      { label: "D", text: "Easier to implement" },
    ],
    answer: "A. Can traverse in both directions",
  },
  {
    id: 12,
    topic: "Linked Lists",
    question: "What is a circular linked list?",
    options: [
      { label: "A", text: "The last node points to the first node" },
      { label: "B", text: "The list has no end" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "It uses circular array" },
    ],
    answer: "C. Both A and B",
  },

  // ----- Stacks (6) -----
  {
    id: 13,
    topic: "Stacks",
    question: "What is a stack?",
    options: [
      { label: "A", text: "A data structure that follows LIFO (Last In First Out)" },
      { label: "B", text: "A data structure that follows FIFO (First In First Out)" },
      { label: "C", text: "A data structure that stores elements in sorted order" },
      { label: "D", text: "A data structure that uses hashing" },
    ],
    answer: "A. A data structure that follows LIFO (Last In First Out)",
  },
  {
    id: 14,
    topic: "Stacks",
    question: "Which operation is used to add an element to a stack?",
    options: [
      { label: "A", text: "push" },
      { label: "B", text: "pop" },
      { label: "C", text: "peek" },
      { label: "D", text: "enqueue" },
    ],
    answer: "A. push",
  },
  {
    id: 15,
    topic: "Stacks",
    question: "Which operation is used to remove an element from a stack?",
    options: [
      { label: "A", text: "pop" },
      { label: "B", text: "push" },
      { label: "C", text: "top" },
      { label: "D", text: "dequeue" },
    ],
    answer: "A. pop",
  },
  {
    id: 16,
    topic: "Stacks",
    question: "What is the time complexity of push and pop operations in a stack implemented using an array?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 17,
    topic: "Stacks",
    question: "Which of the following is a common application of stacks?",
    options: [
      { label: "A", text: "Expression evaluation" },
      { label: "B", text: "Function call management" },
      { label: "C", text: "Undo operations" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 18,
    topic: "Stacks",
    question: "What is the meaning of stack overflow?",
    options: [
      { label: "A", text: "Trying to push onto a full stack" },
      { label: "B", text: "Trying to pop from an empty stack" },
      { label: "C", text: "Stack memory is corrupted" },
      { label: "D", text: "Stack pointer is lost" },
    ],
    answer: "A. Trying to push onto a full stack",
  },

  // ----- Queues (6) -----
  {
    id: 19,
    topic: "Queues",
    question: "What is a queue?",
    options: [
      { label: "A", text: "A data structure that follows FIFO (First In First Out)" },
      { label: "B", text: "A data structure that follows LIFO" },
      { label: "C", text: "A data structure that sorts elements" },
      { label: "D", text: "A data structure for priority" },
    ],
    answer: "A. A data structure that follows FIFO (First In First Out)",
  },
  {
    id: 20,
    topic: "Queues",
    question: "Which operation is used to add an element to a queue?",
    options: [
      { label: "A", text: "enqueue" },
      { label: "B", text: "dequeue" },
      { label: "C", text: "push" },
      { label: "D", text: "pop" },
    ],
    answer: "A. enqueue",
  },
  {
    id: 21,
    topic: "Queues",
    question: "Which operation is used to remove an element from a queue?",
    options: [
      { label: "A", text: "dequeue" },
      { label: "B", text: "enqueue" },
      { label: "C", text: "front" },
      { label: "D", text: "rear" },
    ],
    answer: "A. dequeue",
  },
  {
    id: 22,
    topic: "Queues",
    question: "What is a circular queue?",
    options: [
      { label: "A", text: "A queue where the last position wraps around to the first" },
      { label: "B", text: "A queue implemented using a circular linked list" },
      { label: "C", text: "A queue with no end" },
      { label: "D", text: "A queue that uses priority" },
    ],
    answer: "A. A queue where the last position wraps around to the first",
  },
  {
    id: 23,
    topic: "Queues",
    question: "What is a priority queue?",
    options: [
      { label: "A", text: "Each element has a priority; higher priority elements are dequeued first" },
      { label: "B", text: "Elements are enqueued in priority order" },
      { label: "C", text: "It is implemented using a heap" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 24,
    topic: "Queues",
    question: "What is the time complexity of enqueue and dequeue in a simple queue implemented with an array?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },

  // ----- Trees (6) -----
  {
    id: 25,
    topic: "Trees",
    question: "What is a tree data structure?",
    options: [
      { label: "A", text: "A hierarchical data structure with a root and child nodes" },
      { label: "B", text: "A linear data structure" },
      { label: "C", text: "A cyclic data structure" },
      { label: "D", text: "A data structure with no ordering" },
    ],
    answer: "A. A hierarchical data structure with a root and child nodes",
  },
  {
    id: 26,
    topic: "Trees",
    question: "What is a binary tree?",
    options: [
      { label: "A", text: "Each node has at most two children" },
      { label: "B", text: "Each node has exactly two children" },
      { label: "C", text: "Each node has any number of children" },
      { label: "D", text: "It is a tree with only one node" },
    ],
    answer: "A. Each node has at most two children",
  },
  {
    id: 27,
    topic: "Trees",
    question: "What is a binary search tree (BST)?",
    options: [
      { label: "A", text: "Left child < parent < right child" },
      { label: "B", text: "Left child > parent > right child" },
      { label: "C", text: "All nodes are equal" },
      { label: "D", text: "No ordering is maintained" },
    ],
    answer: "A. Left child < parent < right child",
  },
  {
    id: 28,
    topic: "Trees",
    question: "What is the time complexity of searching in a balanced BST?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(log n)",
  },
  {
    id: 29,
    topic: "Trees",
    question: "What is a tree traversal?",
    options: [
      { label: "A", text: "Visiting each node in the tree in a specific order" },
      { label: "B", text: "Adding nodes to the tree" },
      { label: "C", text: "Removing nodes from the tree" },
      { label: "D", text: "Finding the height of the tree" },
    ],
    answer: "A. Visiting each node in the tree in a specific order",
  },
  {
    id: 30,
    topic: "Trees",
    question: "What is the difference between a full binary tree and a complete binary tree?",
    options: [
      { label: "A", text: "Full: every node has 0 or 2 children; Complete: all levels filled except possibly last" },
      { label: "B", text: "Full: all levels filled; Complete: every node has 2 children" },
      { label: "C", text: "They are the same" },
      { label: "D", text: "Full is a subset of complete" },
    ],
    answer: "A. Full: every node has 0 or 2 children; Complete: all levels filled except possibly last",
  },

  // ----- Heaps (6) -----
  {
    id: 31,
    topic: "Heaps",
    question: "What is a heap data structure?",
    options: [
      { label: "A", text: "A specialized tree-based structure that satisfies the heap property" },
      { label: "B", text: "A queue with priorities" },
      { label: "C", text: "A binary tree with no ordering" },
      { label: "D", text: "A linked list" },
    ],
    answer: "A. A specialized tree-based structure that satisfies the heap property",
  },
  {
    id: 32,
    topic: "Heaps",
    question: "What is a min-heap?",
    options: [
      { label: "A", text: "Parent is less than or equal to children" },
      { label: "B", text: "Parent is greater than or equal to children" },
      { label: "C", text: "Children are less than parent" },
      { label: "D", text: "No ordering property" },
    ],
    answer: "A. Parent is less than or equal to children",
  },
  {
    id: 33,
    topic: "Heaps",
    question: "What is a max-heap?",
    options: [
      { label: "A", text: "Parent is greater than or equal to children" },
      { label: "B", text: "Parent is less than or equal to children" },
      { label: "C", text: "Children are greater than parent" },
      { label: "D", text: "No ordering" },
    ],
    answer: "A. Parent is greater than or equal to children",
  },
  {
    id: 34,
    topic: "Heaps",
    question: "What is the time complexity to find the maximum element in a max-heap?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1) (it is the root)",
  },
  {
    id: 35,
    topic: "Heaps",
    question: "What is the time complexity to insert an element into a heap?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(log n)",
  },
  {
    id: 36,
    topic: "Heaps",
    question: "Which data structure is commonly used to implement a priority queue?",
    options: [
      { label: "A", text: "Heap" },
      { label: "B", text: "Array" },
      { label: "C", text: "Linked List" },
      { label: "D", text: "Stack" },
    ],
    answer: "A. Heap",
  },

  // ----- Graphs (6) -----
  {
    id: 37,
    topic: "Graphs",
    question: "What is a graph?",
    options: [
      { label: "A", text: "A data structure consisting of vertices and edges" },
      { label: "B", text: "A tree with no cycles" },
      { label: "C", text: "A linear data structure" },
      { label: "D", text: "A hashing structure" },
    ],
    answer: "A. A data structure consisting of vertices and edges",
  },
  {
    id: 38,
    topic: "Graphs",
    question: "What is a directed graph?",
    options: [
      { label: "A", text: "Edges have a direction" },
      { label: "B", text: "Edges have no direction" },
      { label: "C", text: "All vertices are connected" },
      { label: "D", text: "It is a tree" },
    ],
    answer: "A. Edges have a direction",
  },
  {
    id: 39,
    topic: "Graphs",
    question: "What is the degree of a vertex in an undirected graph?",
    options: [
      { label: "A", text: "The number of edges incident to it" },
      { label: "B", text: "The number of vertices connected to it" },
      { label: "C", text: "The number of outgoing edges" },
      { label: "D", text: "The number of incoming edges" },
    ],
    answer: "A. The number of edges incident to it",
  },
  {
    id: 40,
    topic: "Graphs",
    question: "What is the time complexity of Breadth-First Search (BFS) on a graph with V vertices and E edges?",
    options: [
      { label: "A", text: "O(V + E)" },
      { label: "B", text: "O(V^2)" },
      { label: "C", text: "O(E^2)" },
      { label: "D", text: "O(V * E)" },
    ],
    answer: "A. O(V + E)",
  },
  {
    id: 41,
    topic: "Graphs",
    question: "What is the time complexity of Depth-First Search (DFS) on a graph with V vertices and E edges?",
    options: [
      { label: "A", text: "O(V + E)" },
      { label: "B", text: "O(V^2)" },
      { label: "C", text: "O(E^2)" },
      { label: "D", text: "O(V * E)" },
    ],
    answer: "A. O(V + E)",
  },
  {
    id: 42,
    topic: "Graphs",
    question: "Which algorithm is used to find the shortest path in an unweighted graph?",
    options: [
      { label: "A", text: "BFS" },
      { label: "B", text: "DFS" },
      { label: "C", text: "Dijkstra" },
      { label: "D", text: "Bellman-Ford" },
    ],
    answer: "A. BFS",
  },

  // ----- Hashing (6) -----
  {
    id: 43,
    topic: "Hashing",
    question: "What is hashing?",
    options: [
      { label: "A", text: "A technique to map data to a fixed-size value" },
      { label: "B", text: "A technique to sort data" },
      { label: "C", text: "A technique to link nodes" },
      { label: "D", text: "A technique to traverse trees" },
    ],
    answer: "A. A technique to map data to a fixed-size value",
  },
  {
    id: 44,
    topic: "Hashing",
    question: "What is a hash table?",
    options: [
      { label: "A", text: "A data structure that uses a hash function to map keys to buckets" },
      { label: "B", text: "A sorted array" },
      { label: "C", text: "A linked list" },
      { label: "D", text: "A tree" },
    ],
    answer: "A. A data structure that uses a hash function to map keys to buckets",
  },
  {
    id: 45,
    topic: "Hashing",
    question: "What is a collision in hashing?",
    options: [
      { label: "A", text: "Two different keys map to the same index" },
      { label: "B", text: "Two same keys map to different indices" },
      { label: "C", text: "The hash table is full" },
      { label: "D", text: "The hash function is not defined" },
    ],
    answer: "A. Two different keys map to the same index",
  },
  {
    id: 46,
    topic: "Hashing",
    question: "What is the load factor of a hash table?",
    options: [
      { label: "A", text: "Number of elements / table size" },
      { label: "B", text: "Table size / number of elements" },
      { label: "C", text: "Number of collisions" },
      { label: "D", text: "Hash function output" },
    ],
    answer: "A. Number of elements / table size",
  },
  {
    id: 47,
    topic: "Hashing",
    question: "Which collision resolution technique uses linked lists?",
    options: [
      { label: "A", text: "Chaining" },
      { label: "B", text: "Open addressing" },
      { label: "C", text: "Double hashing" },
      { label: "D", text: "Linear probing" },
    ],
    answer: "A. Chaining",
  },
  {
    id: 48,
    topic: "Hashing",
    question: "What is the average time complexity for search, insert, and delete in a well-designed hash table?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },

  // ----- Sorting Algorithms (6) -----
  {
    id: 49,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Bubble Sort in the worst case?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "C. O(n^2)",
  },
  {
    id: 50,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Merge Sort in all cases?",
    options: [
      { label: "A", text: "O(n log n)" },
      { label: "B", text: "O(n^2)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "A. O(n log n)",
  },
  {
    id: 51,
    topic: "Sorting Algorithms",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: [
      { label: "A", text: "Quick Sort" },
      { label: "B", text: "Bubble Sort" },
      { label: "C", text: "Selection Sort" },
      { label: "D", text: "Insertion Sort" },
    ],
    answer: "A. Quick Sort (O(n log n) average)",
  },
  {
    id: 52,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Quick Sort in the worst case?",
    options: [
      { label: "A", text: "O(n log n)" },
      { label: "B", text: "O(n^2)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "B. O(n^2)",
  },
  {
    id: 53,
    topic: "Sorting Algorithms",
    question: "Which sorting algorithm is stable?",
    options: [
      { label: "A", text: "Merge Sort" },
      { label: "B", text: "Quick Sort" },
      { label: "C", text: "Heap Sort" },
      { label: "D", text: "Selection Sort" },
    ],
    answer: "A. Merge Sort",
  },
  {
    id: 54,
    topic: "Sorting Algorithms",
    question: "Which sorting algorithm is in-place?",
    options: [
      { label: "A", text: "Quick Sort" },
      { label: "B", text: "Merge Sort" },
      { label: "C", text: "Radix Sort" },
      { label: "D", text: "Counting Sort" },
    ],
    answer: "A. Quick Sort (can be in-place)",
  },

  // ----- Searching Algorithms (6) -----
  {
    id: 55,
    topic: "Searching Algorithms",
    question: "What is the time complexity of linear search?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "C. O(n)",
  },
  {
    id: 56,
    topic: "Searching Algorithms",
    question: "What is the time complexity of binary search?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(log n)",
  },
  {
    id: 57,
    topic: "Searching Algorithms",
    question: "What is the prerequisite for binary search?",
    options: [
      { label: "A", text: "The array must be sorted" },
      { label: "B", text: "The array must be unsorted" },
      { label: "C", text: "The array must contain unique elements" },
      { label: "D", text: "The array must be circular" },
    ],
    answer: "A. The array must be sorted",
  },
  {
    id: 58,
    topic: "Searching Algorithms",
    question: "What is the time complexity of interpolation search?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log log n) average" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(log log n) average",
  },
  {
    id: 59,
    topic: "Searching Algorithms",
    question: "What is the worst-case time complexity of interpolation search?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 60,
    topic: "Searching Algorithms",
    question: "Which search algorithm works on the principle of divide and conquer?",
    options: [
      { label: "A", text: "Binary Search" },
      { label: "B", text: "Linear Search" },
      { label: "C", text: "Jump Search" },
      { label: "D", text: "Exponential Search" },
    ],
    answer: "A. Binary Search",
  },

  // ----- More MCQs to reach 130+ (additional questions) -----
  {
    id: 61,
    topic: "Arrays",
    question: "What is the result of rotating an array by one position?",
    options: [
      { label: "A", text: "The first element moves to the last" },
      { label: "B", text: "The last element moves to the first" },
      { label: "C", text: "All elements shift right" },
      { label: "D", text: "All elements shift left" },
    ],
    answer: "A. The first element moves to the last (left rotation)",
  },
  {
    id: 62,
    topic: "Linked Lists",
    question: "What is the advantage of a circular linked list over a singly linked list?",
    options: [
      { label: "A", text: "Traversal can start from any node" },
      { label: "B", text: "Uses less memory" },
      { label: "C", text: "Faster insertion" },
      { label: "D", text: "Easier to implement" },
    ],
    answer: "A. Traversal can start from any node",
  },
  {
    id: 63,
    topic: "Stacks",
    question: "What is the output of the following operations: push(5), push(10), pop(), push(15), pop(), pop()?",
    options: [
      { label: "A", text: "10, 15, 5" },
      { label: "B", text: "15, 10, 5" },
      { label: "C", text: "5, 10, 15" },
      { label: "D", text: "Error" },
    ],
    answer: "A. 10, 15, 5 (pop returns 10, then 15, then 5)",
  },
  {
    id: 64,
    topic: "Queues",
    question: "What is the output of the following queue operations: enqueue(1), enqueue(2), dequeue(), enqueue(3), dequeue(), dequeue()?",
    options: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "2, 3, 1" },
      { label: "C", text: "1, 3, 2" },
      { label: "D", text: "3, 2, 1" },
    ],
    answer: "A. 1, 2, 3 (dequeue returns 1, then 2, then 3)",
  },
  {
    id: 65,
    topic: "Trees",
    question: "What is the height of a tree with a single node?",
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "Undefined" },
    ],
    answer: "A. 0 (depending on definition, sometimes 1)",
  },
  {
    id: 66,
    topic: "Heaps",
    question: "What is the time complexity to build a heap from an array of n elements?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "A. O(n) (heapify)",
  },
  {
    id: 67,
    topic: "Graphs",
    question: "What is a spanning tree?",
    options: [
      { label: "A", text: "A subgraph that includes all vertices and is a tree" },
      { label: "B", text: "A subgraph with minimum edges" },
      { label: "C", text: "A complete graph" },
      { label: "D", text: "A graph with no cycles" },
    ],
    answer: "A. A subgraph that includes all vertices and is a tree",
  },
  {
    id: 68,
    topic: "Hashing",
    question: "What is double hashing?",
    options: [
      { label: "A", text: "Using two hash functions to resolve collisions" },
      { label: "B", text: "Using two hash tables" },
      { label: "C", text: "Hashing twice" },
      { label: "D", text: "Hash function with two parameters" },
    ],
    answer: "A. Using two hash functions to resolve collisions",
  },
  {
    id: 69,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Counting Sort?",
    options: [
      { label: "A", text: "O(n + k)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(k log n)" },
    ],
    answer: "A. O(n + k) where k is the range",
  },
  {
    id: 70,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Jump Search?",
    options: [
      { label: "A", text: "O(√n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(√n)",
  },
  {
    id: 71,
    topic: "Arrays",
    question: "What is the difference between an array and a linked list?",
    options: [
      { label: "A", text: "Array is static; linked list is dynamic" },
      { label: "B", text: "Array uses contiguous memory; linked list uses non-contiguous" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "They are the same" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 72,
    topic: "Linked Lists",
    question: "What is the time complexity to delete a node given only a pointer to it in a singly linked list?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(n) because you need to find the previous node",
  },
  {
    id: 73,
    topic: "Stacks",
    question: "What is the meaning of stack underflow?",
    options: [
      { label: "A", text: "Trying to pop from an empty stack" },
      { label: "B", text: "Trying to push onto a full stack" },
      { label: "C", text: "Stack memory is corrupted" },
      { label: "D", text: "Stack pointer is lost" },
    ],
    answer: "A. Trying to pop from an empty stack",
  },
  {
    id: 74,
    topic: "Queues",
    question: "What is a deque?",
    options: [
      { label: "A", text: "A double-ended queue" },
      { label: "B", text: "A queue with priority" },
      { label: "C", text: "A circular queue" },
      { label: "D", text: "A stack" },
    ],
    answer: "A. A double-ended queue",
  },
  {
    id: 75,
    topic: "Trees",
    question: "What is an AVL tree?",
    options: [
      { label: "A", text: "A self-balancing BST" },
      { label: "B", text: "A tree with all nodes at same depth" },
      { label: "C", text: "A tree with no rotation" },
      { label: "D", text: "A tree with left and right subtrees of equal height" },
    ],
    answer: "A. A self-balancing BST",
  },
  {
    id: 76,
    topic: "Heaps",
    question: "What is the time complexity to delete the root from a heap?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(1)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n)",
  },
  {
    id: 77,
    topic: "Graphs",
    question: "What is a weighted graph?",
    options: [
      { label: "A", text: "Edges have weights or costs" },
      { label: "B", text: "Vertices have weights" },
      { label: "C", text: "Graph has cycles" },
      { label: "D", text: "Graph is directed" },
    ],
    answer: "A. Edges have weights or costs",
  },
  {
    id: 78,
    topic: "Hashing",
    question: "What is the difference between separate chaining and open addressing?",
    options: [
      { label: "A", text: "Chaining uses linked lists; open addressing probes" },
      { label: "B", text: "Open addressing uses linked lists; chaining probes" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Chaining is for arrays; open addressing for trees" },
    ],
    answer: "A. Chaining uses linked lists; open addressing probes",
  },
  {
    id: 79,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Heap Sort?",
    options: [
      { label: "A", text: "O(n log n)" },
      { label: "B", text: "O(n^2)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "A. O(n log n) in all cases",
  },
  {
    id: 80,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Ternary Search?",
    options: [
      { label: "A", text: "O(log n) base 3" },
      { label: "B", text: "O(log n) base 2" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n) base 3",
  },
  {
    id: 81,
    topic: "Arrays",
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(n) because shifting elements",
  },
  {
    id: 82,
    topic: "Linked Lists",
    question: "What is the time complexity of inserting a node at the end of a singly linked list with a tail pointer?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 83,
    topic: "Stacks",
    question: "Which data structure is used for recursion?",
    options: [
      { label: "A", text: "Stack" },
      { label: "B", text: "Queue" },
      { label: "C", text: "Heap" },
      { label: "D", text: "Array" },
    ],
    answer: "A. Stack",
  },
  {
    id: 84,
    topic: "Queues",
    question: "What is the time complexity of checking if a queue is empty?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 85,
    topic: "Trees",
    question: "What is a trie?",
    options: [
      { label: "A", text: "A tree used for efficient retrieval of keys" },
      { label: "B", text: "A binary tree" },
      { label: "C", text: "A heap" },
      { label: "D", text: "A graph" },
    ],
    answer: "A. A tree used for efficient retrieval of keys",
  },
  {
    id: 86,
    topic: "Heaps",
    question: "What is the time complexity to find the minimum element in a min-heap?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1) (at root)",
  },
  {
    id: 87,
    topic: "Graphs",
    question: "What is Dijkstra's algorithm used for?",
    options: [
      { label: "A", text: "Shortest path in weighted graphs" },
      { label: "B", text: "Shortest path in unweighted graphs" },
      { label: "C", text: "Minimum spanning tree" },
      { label: "D", text: "Topological sorting" },
    ],
    answer: "A. Shortest path in weighted graphs",
  },
  {
    id: 88,
    topic: "Hashing",
    question: "What is a perfect hash function?",
    options: [
      { label: "A", text: "Injective mapping with no collisions" },
      { label: "B", text: "A hash function with many collisions" },
      { label: "C", text: "A hash function with no load factor" },
      { label: "D", text: "A hash function that maps all keys to same value" },
    ],
    answer: "A. Injective mapping with no collisions",
  },
  {
    id: 89,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Insertion Sort in the worst case?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "C. O(n^2)",
  },
  {
    id: 90,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Exponential Search?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(1)" },
    ],
    answer: "A. O(log n) (for binary search part)",
  },
  {
    id: 91,
    topic: "Arrays",
    question: "What is the difference between a static array and a dynamic array?",
    options: [
      { label: "A", text: "Static array has fixed size; dynamic array can grow" },
      { label: "B", text: "Static array uses heap; dynamic uses stack" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Static array is faster" },
    ],
    answer: "A. Static array has fixed size; dynamic array can grow",
  },
  {
    id: 92,
    topic: "Linked Lists",
    question: "What is the time complexity to find the length of a singly linked list?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(n)",
  },
  {
    id: 93,
    topic: "Stacks",
    question: "Which of the following is true about a stack implemented using a linked list?",
    options: [
      { label: "A", text: "Push and pop are O(1)" },
      { label: "B", text: "Push and pop are O(n)" },
      { label: "C", text: "Memory is contiguous" },
      { label: "D", text: "It can't be implemented" },
    ],
    answer: "A. Push and pop are O(1)",
  },
  {
    id: 94,
    topic: "Queues",
    question: "What is the difference between a simple queue and a circular queue?",
    options: [
      { label: "A", text: "Circular queue reuses space; simple queue doesn't" },
      { label: "B", text: "Simple queue is faster" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Circular queue uses linked list" },
    ],
    answer: "A. Circular queue reuses space; simple queue doesn't",
  },
  {
    id: 95,
    topic: "Trees",
    question: "What is the time complexity to search for a value in a BST in the worst case?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n) (if unbalanced)",
  },
  {
    id: 96,
    topic: "Heaps",
    question: "What is the time complexity to find the maximum element in a max-heap?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 97,
    topic: "Graphs",
    question: "What is a cycle in a graph?",
    options: [
      { label: "A", text: "A path that starts and ends at the same vertex" },
      { label: "B", text: "A path with no repeated vertices" },
      { label: "C", text: "A path with no edges" },
      { label: "D", text: "A path with all vertices distinct" },
    ],
    answer: "A. A path that starts and ends at the same vertex",
  },
  {
    id: 98,
    topic: "Hashing",
    question: "What is a hash collision?",
    options: [
      { label: "A", text: "Two different keys hash to same value" },
      { label: "B", text: "Two same keys hash to different values" },
      { label: "C", text: "Hash table is full" },
      { label: "D", text: "Hash function is broken" },
    ],
    answer: "A. Two different keys hash to same value",
  },
  {
    id: 99,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Radix Sort?",
    options: [
      { label: "A", text: "O(nk)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(k)" },
    ],
    answer: "A. O(nk) where k is number of digits",
  },
  {
    id: 100,
    topic: "Searching Algorithms",
    question: "What is the worst-case time complexity of Fibonacci Search?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(n^2)" },
      { label: "D", text: "O(1)" },
    ],
    answer: "A. O(log n)",
  },
  {
    id: 101,
    topic: "Arrays",
    question: "What is a sparse array?",
    options: [
      { label: "A", text: "An array with mostly zero or default values" },
      { label: "B", text: "An array with all elements filled" },
      { label: "C", text: "An array of objects" },
      { label: "D", text: "A two-dimensional array" },
    ],
    answer: "A. An array with mostly zero or default values",
  },
  {
    id: 102,
    topic: "Linked Lists",
    question: "What is a skip list?",
    options: [
      { label: "A", text: "A linked list with multiple levels for fast search" },
      { label: "B", text: "A list with no nodes" },
      { label: "C", text: "A circular linked list" },
      { label: "D", text: "A doubly linked list" },
    ],
    answer: "A. A linked list with multiple levels for fast search",
  },
  {
    id: 103,
    topic: "Stacks",
    question: "What is the time complexity of evaluating a postfix expression using a stack?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(n^2)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(1)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 104,
    topic: "Queues",
    question: "What is the time complexity of enqueue and dequeue in a linked list-based queue?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1) with head and tail pointers",
  },
  {
    id: 105,
    topic: "Trees",
    question: "What is a B-tree?",
    options: [
      { label: "A", text: "A balanced tree with multiple children per node" },
      { label: "B", text: "A binary tree" },
      { label: "C", text: "A heap" },
      { label: "D", text: "A graph" },
    ],
    answer: "A. A balanced tree with multiple children per node",
  },
  {
    id: 106,
    topic: "Heaps",
    question: "What is the time complexity to increase the priority of an element in a heap?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(1)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n) (up-heapify)",
  },
  {
    id: 107,
    topic: "Graphs",
    question: "What is the time complexity of Prim's algorithm for minimum spanning tree?",
    options: [
      { label: "A", text: "O(E log V)" },
      { label: "B", text: "O(V^2)" },
      { label: "C", text: "O(E + V log V)" },
      { label: "D", text: "Both A and C depending on implementation" },
    ],
    answer: "D. Both A and C depending on implementation",
  },
  {
    id: 108,
    topic: "Hashing",
    question: "What is the worst-case time complexity of search in a hash table using chaining?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "B. O(n) (if all keys collide)",
  },
  {
    id: 109,
    topic: "Sorting Algorithms",
    question: "Which sorting algorithm is based on the divide and conquer paradigm?",
    options: [
      { label: "A", text: "Merge Sort" },
      { label: "B", text: "Bubble Sort" },
      { label: "C", text: "Selection Sort" },
      { label: "D", text: "Insertion Sort" },
    ],
    answer: "A. Merge Sort",
  },
  {
    id: 110,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Linear Search in the average case?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(n/2)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 111,
    topic: "Arrays",
    question: "What is a jagged array?",
    options: [
      { label: "A", text: "An array of arrays where each inner array can have different length" },
      { label: "B", text: "A 2D array with equal rows and columns" },
      { label: "C", text: "A sorted array" },
      { label: "D", text: "A dynamic array" },
    ],
    answer: "A. An array of arrays where each inner array can have different length",
  },
  {
    id: 112,
    topic: "Linked Lists",
    question: "What is the time complexity to reverse a singly linked list?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(1)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 113,
    topic: "Stacks",
    question: "What is the output of the following: push(2), push(3), pop(), push(5), pop(), pop()?",
    options: [
      { label: "A", text: "3, 5, 2" },
      { label: "B", text: "2, 5, 3" },
      { label: "C", text: "5, 3, 2" },
      { label: "D", text: "2, 3, 5" },
    ],
    answer: "A. 3, 5, 2",
  },
  {
    id: 114,
    topic: "Queues",
    question: "What is the time complexity of checking the front element of a queue?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 115,
    topic: "Trees",
    question: "What is the time complexity to insert an element into a balanced BST?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n)",
  },
  {
    id: 116,
    topic: "Heaps",
    question: "What is the time complexity to delete an arbitrary element from a heap?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n) after finding its position, but finding requires O(n) unless you have a handle",
  },
  {
    id: 117,
    topic: "Graphs",
    question: "What is the time complexity of DFS using an adjacency list?",
    options: [
      { label: "A", text: "O(V + E)" },
      { label: "B", text: "O(V^2)" },
      { label: "C", text: "O(E^2)" },
      { label: "D", text: "O(V * E)" },
    ],
    answer: "A. O(V + E)",
  },
  {
    id: 118,
    topic: "Hashing",
    question: "What is the time complexity of insertion in a hash table with open addressing?",
    options: [
      { label: "A", text: "O(1) average" },
      { label: "B", text: "O(n) worst case" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "Both A and B" },
    ],
    answer: "D. Both A and B",
  },
  {
    id: 119,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Quick Sort in the average case?",
    options: [
      { label: "A", text: "O(n log n)" },
      { label: "B", text: "O(n^2)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "A. O(n log n)",
  },
  {
    id: 120,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Binary Search in the worst case?",
    options: [
      { label: "A", text: "O(log n)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(log n)",
  },
  {
    id: 121,
    topic: "Arrays",
    question: "What is the time complexity of finding the maximum element in an unsorted array?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 122,
    topic: "Linked Lists",
    question: "What is the time complexity to insert a node after a given node in a singly linked list?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(n)" },
      { label: "C", text: "O(log n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
  {
    id: 123,
    topic: "Stacks",
    question: "What is the use of a stack in compilers?",
    options: [
      { label: "A", text: "Syntax analysis and expression evaluation" },
      { label: "B", text: "Code generation" },
      { label: "C", text: "Memory allocation" },
      { label: "D", text: "All of the above" },
    ],
    answer: "A. Syntax analysis and expression evaluation",
  },
  {
    id: 124,
    topic: "Queues",
    question: "What is a priority queue implemented using?",
    options: [
      { label: "A", text: "Heap" },
      { label: "B", text: "Array" },
      { label: "C", text: "Linked List" },
      { label: "D", text: "Stack" },
    ],
    answer: "A. Heap",
  },
  {
    id: 125,
    topic: "Trees",
    question: "What is the time complexity to find the height of a binary tree?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n) (visit all nodes)",
  },
  {
    id: 126,
    topic: "Heaps",
    question: "What is the space complexity of a heap?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n)",
  },
  {
    id: 127,
    topic: "Graphs",
    question: "What is a bipartite graph?",
    options: [
      { label: "A", text: "Vertices can be divided into two sets with no edges within a set" },
      { label: "B", text: "A graph with edges only in one direction" },
      { label: "C", text: "A complete graph" },
      { label: "D", text: "A graph with cycles" },
    ],
    answer: "A. Vertices can be divided into two sets with no edges within a set",
  },
  {
    id: 128,
    topic: "Hashing",
    question: "What is the purpose of a hash function?",
    options: [
      { label: "A", text: "To map keys to indices in a hash table" },
      { label: "B", text: "To sort data" },
      { label: "C", text: "To link nodes" },
      { label: "D", text: "To balance trees" },
    ],
    answer: "A. To map keys to indices in a hash table",
  },
  {
    id: 129,
    topic: "Sorting Algorithms",
    question: "What is the time complexity of Shell Sort in the worst case?",
    options: [
      { label: "A", text: "O(n^2)" },
      { label: "B", text: "O(n log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(log n)" },
    ],
    answer: "A. O(n^2)",
  },
  {
    id: 130,
    topic: "Searching Algorithms",
    question: "What is the time complexity of Sentinel Linear Search?",
    options: [
      { label: "A", text: "O(n)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(1)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(n) (but faster in practice)",
  },
  {
    id: 131,
    topic: "Arrays",
    question: "What is the time complexity of accessing an element in an array by index?",
    options: [
      { label: "A", text: "O(1)" },
      { label: "B", text: "O(log n)" },
      { label: "C", text: "O(n)" },
      { label: "D", text: "O(n^2)" },
    ],
    answer: "A. O(1)",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a way of organizing and storing data in a computer so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, graphs, and hash tables.",
  },
  {
    question: "What is the difference between an array and a linked list?",
    answer:
      "Arrays store elements in contiguous memory locations, allowing O(1) random access but insertion/deletion is O(n). Linked lists store elements in non-contiguous memory with pointers, allowing O(1) insertion/deletion at known positions but O(n) access time.",
  },
  {
    question: "What is the Stack data structure and its applications?",
    answer:
      "Stack follows LIFO (Last In First Out) principle. Applications include function call management, expression evaluation, undo/redo operations, parsing, and backtracking (e.g., recursion).",
  },
  {
    question: "What is the Queue data structure and its applications?",
    answer:
      "Queue follows FIFO (First In First Out) principle. Applications include scheduling (CPU, disk), breadth-first search, print spooling, and handling asynchronous data (e.g., producer-consumer).",
  },
  {
    question: "What is a Binary Search Tree (BST) and its advantages?",
    answer:
      "A BST is a binary tree where left child < parent < right child. It supports search, insert, delete in O(log n) average time if balanced. It provides ordered data and efficient searching.",
  },
  {
    question: "What is the difference between a heap and a BST?",
    answer:
      "A heap is a complete binary tree used for priority queues; it satisfies heap property (max-heap or min-heap). BST maintains sorted order and supports search, insert, delete. Heap supports efficient max/min extraction and insertion.",
  },
  {
    question: "What is hashing and why is it used?",
    answer:
      "Hashing is a technique to map data (keys) to fixed-size values (hash codes) using a hash function. Hash tables provide O(1) average time for search, insert, and delete. Used in dictionaries, caches, and databases.",
  },
  {
    question: "What are the common sorting algorithms and their complexities?",
    answer:
      "Common algorithms: Bubble Sort (O(n^2)), Insertion Sort (O(n^2)), Selection Sort (O(n^2)), Merge Sort (O(n log n)), Quick Sort (O(n log n) average, O(n^2) worst), Heap Sort (O(n log n)). Choice depends on data size and stability requirements.",
  },
];

// ========================== COMPONENT ==========================
export default function DataStructuresMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/data-structures",
        "url": "https://CodeSkipper.in/mcq/data-structures",
        "name": "Data Structures MCQs | Code Skipper",
        "description":
          "Practice 130+ Data Structures multiple-choice questions covering arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, and searching.",
        "about": { "@type": "Thing", "name": "Data Structures MCQ" },
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
              "name": "Data Structures MCQs",
              "item": "https://CodeSkipper.in/mcq/data-structures",
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
        "@id": "https://CodeSkipper.in/mcq/data-structures#course",
        "name": "Data Structures MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Data Structures exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Data Structures" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/data-structures#faq",
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
        <title>Data Structures MCQs 2026 | 130+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 130+ Data Structures multiple-choice questions with answers. Covers arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, and searching. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Data Structures, MCQs, Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, Sorting, Searching, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/data-structures" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/data-structures" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/data-structures" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/data-structures" />
        <meta property="og:title" content="Data Structures MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 130+ Data Structures multiple-choice questions covering arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, and searching."
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
        <meta name="twitter:title" content="Data Structures MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 130+ Data Structures multiple-choice questions covering arrays, linked lists, stacks, queues, trees, graphs, hashing, sorting, and searching."
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
              📊 130+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Data Structures <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Data Structures with 130+ curated MCQs covering arrays, linked lists, stacks,
              queues, trees, graphs, hashing, sorting, and searching. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">10 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">130+ Questions</span>
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
            Explore Data Structures Topics
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
            Data Structures MCQs
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