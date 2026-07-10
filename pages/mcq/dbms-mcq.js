import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (130+ Unique) ==========================

const questionsData = [
  // ----- DBMS Basics (6) -----
  {
    id: 1,
    topic: "DBMS Basics",
    question: "What is a Database Management System (DBMS)?",
    options: [
      { label: "A", text: "Software for creating and managing databases" },
      { label: "B", text: "Hardware for storing data" },
      { label: "C", text: "A type of database" },
      { label: "D", text: "A programming language" },
    ],
    answer: "A. Software for creating and managing databases",
  },
  {
    id: 2,
    topic: "DBMS Basics",
    question: "Which of the following is not a type of database model?",
    options: [
      { label: "A", text: "Hierarchical" },
      { label: "B", text: "Network" },
      { label: "C", text: "Relational" },
      { label: "D", text: "Linear" },
    ],
    answer: "D. Linear",
  },
  {
    id: 3,
    topic: "DBMS Basics",
    question: "What is the role of a Database Administrator (DBA)?",
    options: [
      { label: "A", text: "Manage and maintain database systems" },
      { label: "B", text: "Write application programs" },
      { label: "C", text: "Design user interfaces" },
      { label: "D", text: "Handle network security" },
    ],
    answer: "A. Manage and maintain database systems",
  },
  {
    id: 4,
    topic: "DBMS Basics",
    question: "Which of the following is a disadvantage of DBMS?",
    options: [
      { label: "A", text: "Data redundancy" },
      { label: "B", text: "Data inconsistency" },
      { label: "C", text: "High cost and complexity" },
      { label: "D", text: "Poor security" },
    ],
    answer: "C. High cost and complexity",
  },
  {
    id: 5,
    topic: "DBMS Basics",
    question: "What is data independence?",
    options: [
      { label: "A", text: "Ability to change schema without affecting applications" },
      { label: "B", text: "Ability to store data independently" },
      { label: "C", text: "Ability to access data without a network" },
      { label: "D", text: "Ability to use any database engine" },
    ],
    answer: "A. Ability to change schema without affecting applications",
  },
  {
    id: 6,
    topic: "DBMS Basics",
    question: "Which of the following is a popular DBMS?",
    options: [
      { label: "A", text: "MySQL" },
      { label: "B", text: "Oracle" },
      { label: "C", text: "PostgreSQL" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- Relational Model (6) -----
  {
    id: 7,
    topic: "Relational Model",
    question: "What is a relation in the relational model?",
    options: [
      { label: "A", text: "A table with rows and columns" },
      { label: "B", text: "A relationship between two tables" },
      { label: "C", text: "A type of database" },
      { label: "D", text: "A query language" },
    ],
    answer: "A. A table with rows and columns",
  },
  {
    id: 8,
    topic: "Relational Model",
    question: "What is a tuple in the relational model?",
    options: [
      { label: "A", text: "A row in a table" },
      { label: "B", text: "A column in a table" },
      { label: "C", text: "A key" },
      { label: "D", text: "A foreign key" },
    ],
    answer: "A. A row in a table",
  },
  {
    id: 9,
    topic: "Relational Model",
    question: "What is an attribute in a relational model?",
    options: [
      { label: "A", text: "A column in a table" },
      { label: "B", text: "A row in a table" },
      { label: "C", text: "A primary key" },
      { label: "D", text: "A foreign key" },
    ],
    answer: "A. A column in a table",
  },
  {
    id: 10,
    topic: "Relational Model",
    question: "What is a candidate key?",
    options: [
      { label: "A", text: "A minimal set of attributes that uniquely identifies a tuple" },
      { label: "B", text: "A set of foreign keys" },
      { label: "C", text: "A key that is not unique" },
      { label: "D", text: "A key that is used for indexing" },
    ],
    answer: "A. A minimal set of attributes that uniquely identifies a tuple",
  },
  {
    id: 11,
    topic: "Relational Model",
    question: "What is a foreign key?",
    options: [
      { label: "A", text: "A key that references a primary key in another table" },
      { label: "B", text: "A key that uniquely identifies a tuple" },
      { label: "C", text: "A key that is not used in any table" },
      { label: "D", text: "A key that is always numeric" },
    ],
    answer: "A. A key that references a primary key in another table",
  },
  {
    id: 12,
    topic: "Relational Model",
    question: "What is the degree of a relation?",
    options: [
      { label: "A", text: "The number of attributes" },
      { label: "B", text: "The number of tuples" },
      { label: "C", text: "The number of constraints" },
      { label: "D", text: "The number of foreign keys" },
    ],
    answer: "A. The number of attributes",
  },

  // ----- SQL (6) -----
  {
    id: 13,
    topic: "SQL",
    question: "What does SQL stand for?",
    options: [
      { label: "A", text: "Structured Query Language" },
      { label: "B", text: "Simple Query Language" },
      { label: "C", text: "System Query Language" },
      { label: "D", text: "Standard Query Language" },
    ],
    answer: "A. Structured Query Language",
  },
  {
    id: 14,
    topic: "SQL",
    question: "Which SQL command is used to retrieve data from a database?",
    options: [
      { label: "A", text: "SELECT" },
      { label: "B", text: "INSERT" },
      { label: "C", text: "UPDATE" },
      { label: "D", text: "DELETE" },
    ],
    answer: "A. SELECT",
  },
  {
    id: 15,
    topic: "SQL",
    question: "Which clause is used to filter records in SQL?",
    options: [
      { label: "A", text: "WHERE" },
      { label: "B", text: "HAVING" },
      { label: "C", text: "GROUP BY" },
      { label: "D", text: "ORDER BY" },
    ],
    answer: "A. WHERE",
  },
  {
    id: 16,
    topic: "SQL",
    question: "What is the difference between WHERE and HAVING?",
    options: [
      { label: "A", text: "WHERE filters rows; HAVING filters groups" },
      { label: "B", text: "WHERE filters groups; HAVING filters rows" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "HAVING is used for joins" },
    ],
    answer: "A. WHERE filters rows; HAVING filters groups",
  },
  {
    id: 17,
    topic: "SQL",
    question: "Which SQL function is used to count the number of rows?",
    options: [
      { label: "A", text: "COUNT()" },
      { label: "B", text: "SUM()" },
      { label: "C", text: "AVG()" },
      { label: "D", text: "MAX()" },
    ],
    answer: "A. COUNT()",
  },
  {
    id: 18,
    topic: "SQL",
    question: "Which join returns all rows from both tables?",
    options: [
      { label: "A", text: "INNER JOIN" },
      { label: "B", text: "LEFT JOIN" },
      { label: "C", text: "RIGHT JOIN" },
      { label: "D", text: "FULL OUTER JOIN" },
    ],
    answer: "D. FULL OUTER JOIN",
  },

  // ----- Normalization (6) -----
  {
    id: 19,
    topic: "Normalization",
    question: "What is the purpose of normalization?",
    options: [
      { label: "A", text: "To reduce data redundancy and improve data integrity" },
      { label: "B", text: "To increase data redundancy" },
      { label: "C", text: "To make queries faster" },
      { label: "D", text: "To secure the database" },
    ],
    answer: "A. To reduce data redundancy and improve data integrity",
  },
  {
    id: 20,
    topic: "Normalization",
    question: "What is 1NF (First Normal Form)?",
    options: [
      { label: "A", text: "No multi-valued attributes and all attributes are atomic" },
      { label: "B", text: "No partial dependencies" },
      { label: "C", text: "No transitive dependencies" },
      { label: "D", text: "All tables have a primary key" },
    ],
    answer: "A. No multi-valued attributes and all attributes are atomic",
  },
  {
    id: 21,
    topic: "Normalization",
    question: "What is 2NF?",
    options: [
      { label: "A", text: "1NF + no partial dependencies on composite keys" },
      { label: "B", text: "1NF + no transitive dependencies" },
      { label: "C", text: "1NF + all attributes depend on the whole key" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 22,
    topic: "Normalization",
    question: "What is 3NF?",
    options: [
      { label: "A", text: "2NF + no transitive dependencies" },
      { label: "B", text: "1NF + no partial dependencies" },
      { label: "C", text: "All tables are in 3NF automatically" },
      { label: "D", text: "No multi-valued dependencies" },
    ],
    answer: "A. 2NF + no transitive dependencies",
  },
  {
    id: 23,
    topic: "Normalization",
    question: "What is BCNF (Boyce-Codd Normal Form)?",
    options: [
      { label: "A", text: "A stricter version of 3NF where every determinant is a candidate key" },
      { label: "B", text: "Same as 3NF" },
      { label: "C", text: "Weaker than 3NF" },
      { label: "D", text: "Not related to normalization" },
    ],
    answer: "A. A stricter version of 3NF where every determinant is a candidate key",
  },
  {
    id: 24,
    topic: "Normalization",
    question: "What is denormalization?",
    options: [
      { label: "A", text: "Adding redundancy to improve query performance" },
      { label: "B", text: "Removing all redundancy" },
      { label: "C", text: "Splitting tables into smaller ones" },
      { label: "D", text: "Combining tables to reduce complexity" },
    ],
    answer: "A. Adding redundancy to improve query performance",
  },

  // ----- Transactions (6) -----
  {
    id: 25,
    topic: "Transactions",
    question: "What is a transaction in DBMS?",
    options: [
      { label: "A", text: "A logical unit of work that must be executed atomically" },
      { label: "B", text: "A single query" },
      { label: "C", text: "A database backup" },
      { label: "D", text: "A user session" },
    ],
    answer: "A. A logical unit of work that must be executed atomically",
  },
  {
    id: 26,
    topic: "Transactions",
    question: "What are the ACID properties?",
    options: [
      { label: "A", text: "Atomicity, Consistency, Isolation, Durability" },
      { label: "B", text: "Atomicity, Concurrency, Isolation, Durability" },
      { label: "C", text: "Atomicity, Consistency, Integrity, Durability" },
      { label: "D", text: "Atomicity, Consistency, Isolation, Data" },
    ],
    answer: "A. Atomicity, Consistency, Isolation, Durability",
  },
  {
    id: 27,
    topic: "Transactions",
    question: "What does Atomicity mean in ACID?",
    options: [
      { label: "A", text: "Transaction is executed completely or not at all" },
      { label: "B", text: "Transaction maintains database consistency" },
      { label: "C", text: "Transaction is isolated from others" },
      { label: "D", text: "Transaction changes persist after commit" },
    ],
    answer: "A. Transaction is executed completely or not at all",
  },
  {
    id: 28,
    topic: "Transactions",
    question: "Which isolation level prevents dirty reads?",
    options: [
      { label: "A", text: "READ COMMITTED" },
      { label: "B", text: "READ UNCOMMITTED" },
      { label: "C", text: "REPEATABLE READ" },
      { label: "D", text: "SERIALIZABLE" },
    ],
    answer: "A. READ COMMITTED",
  },
  {
    id: 29,
    topic: "Transactions",
    question: "What is a dirty read?",
    options: [
      { label: "A", text: "Reading uncommitted data from another transaction" },
      { label: "B", text: "Reading data that is corrupted" },
      { label: "C", text: "Reading data that does not exist" },
      { label: "D", text: "Reading data with no locks" },
    ],
    answer: "A. Reading uncommitted data from another transaction",
  },
  {
    id: 30,
    topic: "Transactions",
    question: "What is a savepoint in SQL?",
    options: [
      { label: "A", text: "A point within a transaction to which you can roll back" },
      { label: "B", text: "A point where the transaction commits" },
      { label: "C", text: "A backup of the database" },
      { label: "D", text: "A checkpoint for recovery" },
    ],
    answer: "A. A point within a transaction to which you can roll back",
  },

  // ----- Concurrency Control (6) -----
  {
    id: 31,
    topic: "Concurrency Control",
    question: "What is concurrency control?",
    options: [
      { label: "A", text: "Managing simultaneous operations without conflict" },
      { label: "B", text: "Controlling the order of transactions" },
      { label: "C", text: "Ensuring serializability" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 32,
    topic: "Concurrency Control",
    question: "What is a lock in DBMS?",
    options: [
      { label: "A", text: "A mechanism to prevent concurrent access conflicts" },
      { label: "B", text: "A type of transaction" },
      { label: "C", text: "A database backup" },
      { label: "D", text: "A SQL function" },
    ],
    answer: "A. A mechanism to prevent concurrent access conflicts",
  },
  {
    id: 33,
    topic: "Concurrency Control",
    question: "What is a shared lock (S-lock)?",
    options: [
      { label: "A", text: "Allows multiple transactions to read but not write" },
      { label: "B", text: "Allows exclusive write access" },
      { label: "C", text: "Allows both read and write" },
      { label: "D", text: "Prevents any access" },
    ],
    answer: "A. Allows multiple transactions to read but not write",
  },
  {
    id: 34,
    topic: "Concurrency Control",
    question: "What is an exclusive lock (X-lock)?",
    options: [
      { label: "A", text: "Allows only one transaction to read and write" },
      { label: "B", text: "Allows multiple transactions to read" },
      { label: "C", text: "Allows no access" },
      { label: "D", text: "Is used for indexing" },
    ],
    answer: "A. Allows only one transaction to read and write",
  },
  {
    id: 35,
    topic: "Concurrency Control",
    question: "What is a deadlock?",
    options: [
      { label: "A", text: "Two or more transactions waiting for each other indefinitely" },
      { label: "B", text: "A transaction that fails" },
      { label: "C", text: "A corrupted database" },
      { label: "D", text: "A lock that cannot be released" },
    ],
    answer: "A. Two or more transactions waiting for each other indefinitely",
  },
  {
    id: 36,
    topic: "Concurrency Control",
    question: "What is two-phase locking (2PL)?",
    options: [
      { label: "A", text: "Protocol that ensures serializability by two phases: growing and shrinking" },
      { label: "B", text: "Protocol that locks all data at once" },
      { label: "C", text: "Protocol that uses no locks" },
      { label: "D", text: "Protocol that only uses shared locks" },
    ],
    answer: "A. Protocol that ensures serializability by two phases: growing and shrinking",
  },

  // ----- Indexing (6) -----
  {
    id: 37,
    topic: "Indexing",
    question: "What is an index in a database?",
    options: [
      { label: "A", text: "A data structure that improves query performance" },
      { label: "B", text: "A key that uniquely identifies a row" },
      { label: "C", text: "A backup of data" },
      { label: "D", text: "A type of constraint" },
    ],
    answer: "A. A data structure that improves query performance",
  },
  {
    id: 38,
    topic: "Indexing",
    question: "What is the difference between clustered and non-clustered index?",
    options: [
      { label: "A", text: "Clustered index defines physical order of data; non-clustered does not" },
      { label: "B", text: "Non-clustered defines physical order; clustered does not" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Clustered index is for primary key only" },
    ],
    answer: "A. Clustered index defines physical order of data; non-clustered does not",
  },
  {
    id: 39,
    topic: "Indexing",
    question: "What is a B-tree index?",
    options: [
      { label: "A", text: "A balanced tree structure used for indexing" },
      { label: "B", text: "A binary tree" },
      { label: "C", text: "A hash index" },
      { label: "D", text: "A dense index" },
    ],
    answer: "A. A balanced tree structure used for indexing",
  },
  {
    id: 40,
    topic: "Indexing",
    question: "What is a hash index?",
    options: [
      { label: "A", text: "Uses a hash function to map keys to bucket positions" },
      { label: "B", text: "Uses a tree structure" },
      { label: "C", text: "Is always clustered" },
      { label: "D", text: "Is used for range queries" },
    ],
    answer: "A. Uses a hash function to map keys to bucket positions",
  },
  {
    id: 41,
    topic: "Indexing",
    question: "What is the disadvantage of indexes?",
    options: [
      { label: "A", text: "They take extra storage and slow down updates" },
      { label: "B", text: "They speed up all queries" },
      { label: "C", text: "They are always necessary" },
      { label: "D", text: "They cannot be dropped" },
    ],
    answer: "A. They take extra storage and slow down updates",
  },
  {
    id: 42,
    topic: "Indexing",
    question: "What is a bitmap index?",
    options: [
      { label: "A", text: "Uses bitmaps for low-cardinality columns" },
      { label: "B", text: "Uses a tree structure" },
      { label: "C", text: "Is used for high-cardinality columns" },
      { label: "D", text: "Is not used in modern DBMS" },
    ],
    answer: "A. Uses bitmaps for low-cardinality columns",
  },

  // ----- Storage & File Structures (6) -----
  {
    id: 43,
    topic: "Storage & File Structures",
    question: "What is a data file?",
    options: [
      { label: "A", text: "A file that stores database records" },
      { label: "B", text: "A file that stores indexes" },
      { label: "C", text: "A file that stores logs" },
      { label: "D", text: "A file that stores metadata" },
    ],
    answer: "A. A file that stores database records",
  },
  {
    id: 44,
    topic: "Storage & File Structures",
    question: "What is a heap file organization?",
    options: [
      { label: "A", text: "Records are stored in no particular order" },
      { label: "B", text: "Records are stored in sorted order" },
      { label: "C", text: "Records are stored in a tree structure" },
      { label: "D", text: "Records are stored in hashed order" },
    ],
    answer: "A. Records are stored in no particular order",
  },
  {
    id: 45,
    topic: "Storage & File Structures",
    question: "What is a sequential file organization?",
    options: [
      { label: "A", text: "Records are stored in sorted order based on a key" },
      { label: "B", text: "Records are stored randomly" },
      { label: "C", text: "Records are stored in a linked list" },
      { label: "D", text: "Records are stored in a tree" },
    ],
    answer: "A. Records are stored in sorted order based on a key",
  },
  {
    id: 46,
    topic: "Storage & File Structures",
    question: "What is a file pointer?",
    options: [
      { label: "A", text: "A reference to a record's location in a file" },
      { label: "B", text: "A type of index" },
      { label: "C", text: "A primary key" },
      { label: "D", text: "A foreign key" },
    ],
    answer: "A. A reference to a record's location in a file",
  },
  {
    id: 47,
    topic: "Storage & File Structures",
    question: "What is record blocking?",
    options: [
      { label: "A", text: "Grouping multiple records into a single block for I/O efficiency" },
      { label: "B", text: "Locking records for concurrency" },
      { label: "C", text: "Encrypting records" },
      { label: "D", text: "Compressing records" },
    ],
    answer: "A. Grouping multiple records into a single block for I/O efficiency",
  },
  {
    id: 48,
    topic: "Storage & File Structures",
    question: "What is data dictionary?",
    options: [
      { label: "A", text: "A repository of metadata about the database schema" },
      { label: "B", text: "A table of data" },
      { label: "C", text: "An index" },
      { label: "D", text: "A backup" },
    ],
    answer: "A. A repository of metadata about the database schema",
  },

  // ----- Query Processing & Optimization (6) -----
  {
    id: 49,
    topic: "Query Processing",
    question: "What is query processing?",
    options: [
      { label: "A", text: "The process of transforming a high-level query into a low-level execution plan" },
      { label: "B", text: "The process of inserting data" },
      { label: "C", text: "The process of deleting data" },
      { label: "D", text: "The process of indexing" },
    ],
    answer: "A. The process of transforming a high-level query into a low-level execution plan",
  },
  {
    id: 50,
    topic: "Query Processing",
    question: "What is query optimization?",
    options: [
      { label: "A", text: "Choosing the most efficient execution plan" },
      { label: "B", text: "Rewriting the query" },
      { label: "C", text: "Removing redundant queries" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 51,
    topic: "Query Processing",
    question: "What is a query execution plan?",
    options: [
      { label: "A", text: "The steps the DBMS takes to execute a query" },
      { label: "B", text: "The SQL code" },
      { label: "C", text: "The result of a query" },
      { label: "D", text: "The indexes used" },
    ],
    answer: "A. The steps the DBMS takes to execute a query",
  },
  {
    id: 52,
    topic: "Query Processing",
    question: "Which of the following is a typical join algorithm?",
    options: [
      { label: "A", text: "Nested loop join" },
      { label: "B", text: "Sort-merge join" },
      { label: "C", text: "Hash join" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 53,
    topic: "Query Processing",
    question: "What is a selectivity of a predicate?",
    options: [
      { label: "A", text: "The fraction of tuples that satisfy the predicate" },
      { label: "B", text: "The number of attributes in the predicate" },
      { label: "C", text: "The complexity of the predicate" },
      { label: "D", text: "The number of operations" },
    ],
    answer: "A. The fraction of tuples that satisfy the predicate",
  },
  {
    id: 54,
    topic: "Query Processing",
    question: "What is a cost-based optimizer?",
    options: [
      { label: "A", text: "Optimizer that estimates cost of execution plans and picks the cheapest" },
      { label: "B", text: "Optimizer that uses rules only" },
      { label: "C", text: "Optimizer that doesn't use statistics" },
      { label: "D", text: "Optimizer that always picks the same plan" },
    ],
    answer: "A. Optimizer that estimates cost of execution plans and picks the cheapest",
  },

  // ----- Database Design (6) -----
  {
    id: 55,
    topic: "Database Design",
    question: "What is the Entity-Relationship (ER) model?",
    options: [
      { label: "A", text: "A conceptual data model for database design" },
      { label: "B", text: "A physical data model" },
      { label: "C", text: "A query language" },
      { label: "D", text: "A type of index" },
    ],
    answer: "A. A conceptual data model for database design",
  },
  {
    id: 56,
    topic: "Database Design",
    question: "What is an entity in ER model?",
    options: [
      { label: "A", text: "A real-world object or concept" },
      { label: "B", text: "A relationship between objects" },
      { label: "C", text: "An attribute" },
      { label: "D", text: "A key" },
    ],
    answer: "A. A real-world object or concept",
  },
  {
    id: 57,
    topic: "Database Design",
    question: "What is a relationship in ER model?",
    options: [
      { label: "A", text: "An association among entities" },
      { label: "B", text: "An attribute of an entity" },
      { label: "C", text: "A primary key" },
      { label: "D", text: "A foreign key" },
    ],
    answer: "A. An association among entities",
  },
  {
    id: 58,
    topic: "Database Design",
    question: "What is an attribute in ER model?",
    options: [
      { label: "A", text: "A property or characteristic of an entity" },
      { label: "B", text: "A relationship" },
      { label: "C", text: "A key" },
      { label: "D", text: "A table" },
    ],
    answer: "A. A property or characteristic of an entity",
  },
  {
    id: 59,
    topic: "Database Design",
    question: "What is a weak entity?",
    options: [
      { label: "A", text: "An entity that cannot be uniquely identified without a strong entity" },
      { label: "B", text: "An entity with no attributes" },
      { label: "C", text: "An entity that is dependent on another" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 60,
    topic: "Database Design",
    question: "What is cardinality in ER model?",
    options: [
      { label: "A", text: "The number of entities that participate in a relationship" },
      { label: "B", text: "The number of attributes in an entity" },
      { label: "C", text: "The number of keys" },
      { label: "D", text: "The number of tables" },
    ],
    answer: "A. The number of entities that participate in a relationship",
  },

  // ----- More MCQs to reach 130+ (additional questions) -----
  {
    id: 61,
    topic: "DBMS Basics",
    question: "What is a schema in DBMS?",
    options: [
      { label: "A", text: "The overall structure of the database" },
      { label: "B", text: "A user of the database" },
      { label: "C", text: "A table in the database" },
      { label: "D", text: "A query" },
    ],
    answer: "A. The overall structure of the database",
  },
  {
    id: 62,
    topic: "Relational Model",
    question: "What is a superkey?",
    options: [
      { label: "A", text: "A set of attributes that uniquely identifies a tuple" },
      { label: "B", text: "A minimal candidate key" },
      { label: "C", text: "A foreign key" },
      { label: "D", text: "A composite key" },
    ],
    answer: "A. A set of attributes that uniquely identifies a tuple",
  },
  {
    id: 63,
    topic: "SQL",
    question: "Which SQL statement is used to create a table?",
    options: [
      { label: "A", text: "CREATE TABLE" },
      { label: "B", text: "ALTER TABLE" },
      { label: "C", text: "DROP TABLE" },
      { label: "D", text: "INSERT TABLE" },
    ],
    answer: "A. CREATE TABLE",
  },
  {
    id: 64,
    topic: "Normalization",
    question: "What is a functional dependency?",
    options: [
      { label: "A", text: "A constraint between two sets of attributes" },
      { label: "B", text: "A foreign key constraint" },
      { label: "C", text: "A primary key constraint" },
      { label: "D", text: "A unique constraint" },
    ],
    answer: "A. A constraint between two sets of attributes",
  },
  {
    id: 65,
    topic: "Transactions",
    question: "What does Isolation mean in ACID?",
    options: [
      { label: "A", text: "Transactions are executed as if they are the only one running" },
      { label: "B", text: "Transactions are atomic" },
      { label: "C", text: "Transactions are durable" },
      { label: "D", text: "Transactions are consistent" },
    ],
    answer: "A. Transactions are executed as if they are the only one running",
  },
  {
    id: 66,
    topic: "Concurrency Control",
    question: "What is a timestamp ordering protocol?",
    options: [
      { label: "A", text: "Asserts serializability by ordering transactions based on timestamps" },
      { label: "B", text: "Uses locks only" },
      { label: "C", text: "Uses two-phase locking" },
      { label: "D", text: "Uses deadlock detection" },
    ],
    answer: "A. Asserts serializability by ordering transactions based on timestamps",
  },
  {
    id: 67,
    topic: "Indexing",
    question: "What is a dense index?",
    options: [
      { label: "A", text: "An index that has an entry for every search key value" },
      { label: "B", text: "An index that has an entry for some search key values" },
      { label: "C", text: "An index that is clustered" },
      { label: "D", text: "An index that is not used" },
    ],
    answer: "A. An index that has an entry for every search key value",
  },
  {
    id: 68,
    topic: "Storage & File Structures",
    question: "What is a log file?",
    options: [
      { label: "A", text: "A file that records all changes to the database" },
      { label: "B", text: "A file that stores the actual data" },
      { label: "C", text: "A file that stores indexes" },
      { label: "D", text: "A file that stores metadata" },
    ],
    answer: "A. A file that records all changes to the database",
  },
  {
    id: 69,
    topic: "Query Processing",
    question: "What is a query plan?",
    options: [
      { label: "A", text: "A sequence of operations to execute a query" },
      { label: "B", text: "The result of a query" },
      { label: "C", text: "The query itself" },
      { label: "D", text: "The indexes used" },
    ],
    answer: "A. A sequence of operations to execute a query",
  },
  {
    id: 70,
    topic: "Database Design",
    question: "What is a specialization in ER model?",
    options: [
      { label: "A", text: "Subdividing an entity into sub-entities" },
      { label: "B", text: "Combining entities into a super-entity" },
      { label: "C", text: "Adding attributes to an entity" },
      { label: "D", text: "Removing attributes" },
    ],
    answer: "A. Subdividing an entity into sub-entities",
  },
  {
    id: 71,
    topic: "DBMS Basics",
    question: "Which of the following is a NoSQL database?",
    options: [
      { label: "A", text: "MongoDB" },
      { label: "B", text: "MySQL" },
      { label: "C", text: "Oracle" },
      { label: "D", text: "PostgreSQL" },
    ],
    answer: "A. MongoDB",
  },
  {
    id: 72,
    topic: "Relational Model",
    question: "What is the union operation in relational algebra?",
    options: [
      { label: "A", text: "Combines two relations with same schema" },
      { label: "B", text: "Selects rows from a relation" },
      { label: "C", text: "Projects columns from a relation" },
      { label: "D", text: "Joins two relations" },
    ],
    answer: "A. Combines two relations with same schema",
  },
  {
    id: 73,
    topic: "SQL",
    question: "Which SQL command is used to remove a table from the database?",
    options: [
      { label: "A", text: "DROP TABLE" },
      { label: "B", text: "DELETE TABLE" },
      { label: "C", text: "REMOVE TABLE" },
      { label: "D", text: "TRUNCATE TABLE" },
    ],
    answer: "A. DROP TABLE",
  },
  {
    id: 74,
    topic: "Normalization",
    question: "What is 4NF?",
    options: [
      { label: "A", text: "Eliminates multi-valued dependencies" },
      { label: "B", text: "Eliminates transitive dependencies" },
      { label: "C", text: "Eliminates partial dependencies" },
      { label: "D", text: "Eliminates all anomalies" },
    ],
    answer: "A. Eliminates multi-valued dependencies",
  },
  {
    id: 75,
    topic: "Transactions",
    question: "What is the two-phase commit protocol?",
    options: [
      { label: "A", text: "A protocol to ensure atomicity across distributed transactions" },
      { label: "B", text: "A locking protocol" },
      { label: "C", text: "A recovery protocol" },
      { label: "D", text: "A deadlock detection protocol" },
    ],
    answer: "A. A protocol to ensure atomicity across distributed transactions",
  },
  {
    id: 76,
    topic: "Concurrency Control",
    question: "What is a deadlock prevention technique?",
    options: [
      { label: "A", text: "Wait-die" },
      { label: "B", text: "Wound-wait" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "None" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 77,
    topic: "Indexing",
    question: "What is a covering index?",
    options: [
      { label: "A", text: "An index that includes all columns needed for a query" },
      { label: "B", text: "An index that covers the table" },
      { label: "C", text: "An index that is always used" },
      { label: "D", text: "An index on a single column" },
    ],
    answer: "A. An index that includes all columns needed for a query",
  },
  {
    id: 78,
    topic: "Storage & File Structures",
    question: "What is a RAID system?",
    options: [
      { label: "A", text: "Redundant Array of Independent Disks for performance/reliability" },
      { label: "B", text: "A type of database" },
      { label: "C", text: "A query language" },
      { label: "D", text: "A backup mechanism" },
    ],
    answer: "A. Redundant Array of Independent Disks for performance/reliability",
  },
  {
    id: 79,
    topic: "Query Processing",
    question: "What is the cost of an index scan?",
    options: [
      { label: "A", text: "Depends on the number of index entries read" },
      { label: "B", text: "Depends on the number of blocks in the table" },
      { label: "C", text: "Always cheaper than full scan" },
      { label: "D", text: "Never used" },
    ],
    answer: "A. Depends on the number of index entries read",
  },
  {
    id: 80,
    topic: "Database Design",
    question: "What is a generalization in ER model?",
    options: [
      { label: "A", text: "Combining entities into a super-entity" },
      { label: "B", text: "Subdividing an entity" },
      { label: "C", text: "Adding attributes" },
      { label: "D", text: "Removing relationships" },
    ],
    answer: "A. Combining entities into a super-entity",
  },
  {
    id: 81,
    topic: "DBMS Basics",
    question: "What is the role of the DBMS catalog (data dictionary)?",
    options: [
      { label: "A", text: "Stores metadata about the database objects" },
      { label: "B", text: "Stores actual data" },
      { label: "C", text: "Stores logs" },
      { label: "D", text: "Stores indexes" },
    ],
    answer: "A. Stores metadata about the database objects",
  },
  {
    id: 82,
    topic: "Relational Model",
    question: "What is the Cartesian product operation?",
    options: [
      { label: "A", text: "Combines every tuple from one relation with every tuple from another" },
      { label: "B", text: "Selects tuples that satisfy a condition" },
      { label: "C", text: "Projects specific columns" },
      { label: "D", text: "Joins based on equality" },
    ],
    answer: "A. Combines every tuple from one relation with every tuple from another",
  },
  {
    id: 83,
    topic: "SQL",
    question: "Which clause is used to group rows with the same values?",
    options: [
      { label: "A", text: "GROUP BY" },
      { label: "B", text: "ORDER BY" },
      { label: "C", text: "WHERE" },
      { label: "D", text: "HAVING" },
    ],
    answer: "A. GROUP BY",
  },
  {
    id: 84,
    topic: "Normalization",
    question: "What is a multi-valued dependency?",
    options: [
      { label: "A", text: "A dependency where one attribute determines a set of values" },
      { label: "B", text: "A dependency where one attribute determines one value" },
      { label: "C", text: "A functional dependency" },
      { label: "D", text: "A foreign key dependency" },
    ],
    answer: "A. A dependency where one attribute determines a set of values",
  },
  {
    id: 85,
    topic: "Transactions",
    question: "What is a phantom read?",
    options: [
      { label: "A", text: "A transaction sees new rows inserted by another transaction" },
      { label: "B", text: "A transaction reads uncommitted data" },
      { label: "C", text: "A transaction reads data that is later rolled back" },
      { label: "D", text: "A transaction reads data that is corrupted" },
    ],
    answer: "A. A transaction sees new rows inserted by another transaction",
  },
  {
    id: 86,
    topic: "Concurrency Control",
    question: "What is granularity of locks?",
    options: [
      { label: "A", text: "The size of the data item being locked" },
      { label: "B", text: "The number of locks held" },
      { label: "C", text: "The type of lock" },
      { label: "D", text: "The duration of lock" },
    ],
    answer: "A. The size of the data item being locked",
  },
  {
    id: 87,
    topic: "Indexing",
    question: "What is a secondary index?",
    options: [
      { label: "A", text: "An index on a non-primary key column" },
      { label: "B", text: "An index on the primary key" },
      { label: "C", text: "An index that is clustered" },
      { label: "D", text: "An index that is not used" },
    ],
    answer: "A. An index on a non-primary key column",
  },
  {
    id: 88,
    topic: "Storage & File Structures",
    question: "What is a recovery manager?",
    options: [
      { label: "A", text: "Component responsible for ensuring durability and recovery" },
      { label: "B", text: "Component for query optimization" },
      { label: "C", text: "Component for indexing" },
      { label: "D", text: "Component for concurrency" },
    ],
    answer: "A. Component responsible for ensuring durability and recovery",
  },
  {
    id: 89,
    topic: "Query Processing",
    question: "What is a full table scan?",
    options: [
      { label: "A", text: "Reading all rows of a table" },
      { label: "B", text: "Reading only some rows" },
      { label: "C", text: "Reading using an index" },
      { label: "D", text: "Reading from cache" },
    ],
    answer: "A. Reading all rows of a table",
  },
  {
    id: 90,
    topic: "Database Design",
    question: "What is an ISA relationship in ER model?",
    options: [
      { label: "A", text: "Represents inheritance (superclass-subclass)" },
      { label: "B", text: "Represents association" },
      { label: "C", text: "Represents aggregation" },
      { label: "D", text: "Represents composition" },
    ],
    answer: "A. Represents inheritance (superclass-subclass)",
  },
  {
    id: 91,
    topic: "DBMS Basics",
    question: "What is the difference between DBMS and RDBMS?",
    options: [
      { label: "A", text: "RDBMS is based on the relational model; DBMS may not be" },
      { label: "B", text: "DBMS is relational; RDBMS is not" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "RDBMS is older" },
    ],
    answer: "A. RDBMS is based on the relational model; DBMS may not be",
  },
  {
    id: 92,
    topic: "Relational Model",
    question: "What is the selection operation in relational algebra?",
    options: [
      { label: "A", text: "Selects rows that satisfy a condition" },
      { label: "B", text: "Selects columns" },
      { label: "C", text: "Renames attributes" },
      { label: "D", text: "Combines relations" },
    ],
    answer: "A. Selects rows that satisfy a condition",
  },
  {
    id: 93,
    topic: "SQL",
    question: "What is the difference between DELETE and TRUNCATE?",
    options: [
      { label: "A", text: "DELETE removes rows one by one; TRUNCATE removes all rows quickly" },
      { label: "B", text: "TRUNCATE removes rows one by one; DELETE removes all rows quickly" },
      { label: "C", text: "Both are same" },
      { label: "D", text: "DELETE is faster" },
    ],
    answer: "A. DELETE removes rows one by one; TRUNCATE removes all rows quickly",
  },
  {
    id: 94,
    topic: "Normalization",
    question: "What is 5NF?",
    options: [
      { label: "A", text: "Decomposes to eliminate join dependencies" },
      { label: "B", text: "Eliminates transitive dependencies" },
      { label: "C", text: "Eliminates partial dependencies" },
      { label: "D", text: "Eliminates multi-valued dependencies" },
    ],
    answer: "A. Decomposes to eliminate join dependencies",
  },
  {
    id: 95,
    topic: "Transactions",
    question: "What is a serial schedule?",
    options: [
      { label: "A", text: "Transactions execute one after another" },
      { label: "B", text: "Transactions execute concurrently" },
      { label: "C", text: "Transactions are interleaved" },
      { label: "D", text: "Transactions are rolled back" },
    ],
    answer: "A. Transactions execute one after another",
  },
  {
    id: 96,
    topic: "Concurrency Control",
    question: "What is a lock manager?",
    options: [
      { label: "A", text: "Subsystem that manages locks" },
      { label: "B", text: "Subsystem that manages transactions" },
      { label: "C", text: "Subsystem that manages logs" },
      { label: "D", text: "Subsystem that manages queries" },
    ],
    answer: "A. Subsystem that manages locks",
  },
  {
    id: 97,
    topic: "Indexing",
    question: "What is a full-text index?",
    options: [
      { label: "A", text: "An index for text search" },
      { label: "B", text: "An index on a numeric column" },
      { label: "C", text: "An index that is clustered" },
      { label: "D", text: "An index for date columns" },
    ],
    answer: "A. An index for text search",
  },
  {
    id: 98,
    topic: "Storage & File Structures",
    question: "What is an extent?",
    options: [
      { label: "A", text: "A contiguous block of storage allocated to a table" },
      { label: "B", text: "A type of index" },
      { label: "C", text: "A backup file" },
      { label: "D", text: "A log file" },
    ],
    answer: "A. A contiguous block of storage allocated to a table",
  },
  {
    id: 99,
    topic: "Query Processing",
    question: "What is a materialized view?",
    options: [
      { label: "A", text: "A view whose results are stored physically" },
      { label: "B", text: "A virtual view" },
      { label: "C", text: "A temporary table" },
      { label: "D", text: "A query" },
    ],
    answer: "A. A view whose results are stored physically",
  },
  {
    id: 100,
    topic: "Database Design",
    question: "What is an aggregation in ER model?",
    options: [
      { label: "A", text: "Treating a relationship as an entity" },
      { label: "B", text: "Combining entities" },
      { label: "C", text: "Adding attributes" },
      { label: "D", text: "Removing attributes" },
    ],
    answer: "A. Treating a relationship as an entity",
  },
  {
    id: 101,
    topic: "DBMS Basics",
    question: "What is a distributed database?",
    options: [
      { label: "A", text: "A database that is spread across multiple sites" },
      { label: "B", text: "A database with multiple tables" },
      { label: "C", text: "A database with multiple users" },
      { label: "D", text: "A database with replication" },
    ],
    answer: "A. A database that is spread across multiple sites",
  },
  {
    id: 102,
    topic: "Relational Model",
    question: "What is the rename operation in relational algebra?",
    options: [
      { label: "A", text: "Renames attributes or relations" },
      { label: "B", text: "Selects rows" },
      { label: "C", text: "Projects columns" },
      { label: "D", text: "Joins relations" },
    ],
    answer: "A. Renames attributes or relations",
  },
  {
    id: 103,
    topic: "SQL",
    question: "What is a view in SQL?",
    options: [
      { label: "A", text: "A virtual table based on a query" },
      { label: "B", text: "A physical table" },
      { label: "C", text: "An index" },
      { label: "D", text: "A stored procedure" },
    ],
    answer: "A. A virtual table based on a query",
  },
  {
    id: 104,
    topic: "Normalization",
    question: "What is the purpose of normalization?",
    options: [
      { label: "A", text: "To reduce redundancy and avoid update anomalies" },
      { label: "B", text: "To improve query performance" },
      { label: "C", text: "To make the database smaller" },
      { label: "D", text: "To enforce security" },
    ],
    answer: "A. To reduce redundancy and avoid update anomalies",
  },
  {
    id: 105,
    topic: "Transactions",
    question: "What is the read-write set of a transaction?",
    options: [
      { label: "A", text: "The data items read and written by the transaction" },
      { label: "B", text: "The attributes of the transaction" },
      { label: "C", text: "The operations of the transaction" },
      { label: "D", text: "The locks acquired" },
    ],
    answer: "A. The data items read and written by the transaction",
  },
  {
    id: 106,
    topic: "Concurrency Control",
    question: "What is optimistic concurrency control?",
    options: [
      { label: "A", text: "Transactions do not lock data; conflicts resolved at commit" },
      { label: "B", text: "Transactions lock data upfront" },
      { label: "C", text: "Transactions use two-phase locking" },
      { label: "D", text: "Transactions are serialized" },
    ],
    answer: "A. Transactions do not lock data; conflicts resolved at commit",
  },
  {
    id: 107,
    topic: "Indexing",
    question: "What is a sparse index?",
    options: [
      { label: "A", text: "Index with entries for only some search key values" },
      { label: "B", text: "Index with entries for all search key values" },
      { label: "C", text: "Index that is always clustered" },
      { label: "D", text: "Index that is never used" },
    ],
    answer: "A. Index with entries for only some search key values",
  },
  {
    id: 108,
    topic: "Storage & File Structures",
    question: "What is a checkpoint in database recovery?",
    options: [
      { label: "A", text: "A point where the DBMS writes all changes to disk" },
      { label: "B", text: "A point where transactions are committed" },
      { label: "C", text: "A point where locks are released" },
      { label: "D", text: "A point where indexes are rebuilt" },
    ],
    answer: "A. A point where the DBMS writes all changes to disk",
  },
  {
    id: 109,
    topic: "Query Processing",
    question: "What is a join operation?",
    options: [
      { label: "A", text: "Combining rows from two or more tables based on a common column" },
      { label: "B", text: "Selecting rows from a single table" },
      { label: "C", text: "Projecting columns" },
      { label: "D", text: "Sorting rows" },
    ],
    answer: "A. Combining rows from two or more tables based on a common column",
  },
  {
    id: 110,
    topic: "Database Design",
    question: "What is a composite attribute?",
    options: [
      { label: "A", text: "An attribute that can be divided into smaller sub-parts" },
      { label: "B", text: "An attribute with multiple values" },
      { label: "C", text: "A key" },
      { label: "D", text: "A foreign key" },
    ],
    answer: "A. An attribute that can be divided into smaller sub-parts",
  },
  {
    id: 111,
    topic: "DBMS Basics",
    question: "What is a database query?",
    options: [
      { label: "A", text: "A request for data from the database" },
      { label: "B", text: "A request to insert data" },
      { label: "C", text: "A request to delete data" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 112,
    topic: "Relational Model",
    question: "What is the projection operation in relational algebra?",
    options: [
      { label: "A", text: "Selects specific columns" },
      { label: "B", text: "Selects specific rows" },
      { label: "C", text: "Renames relations" },
      { label: "D", text: "Joins relations" },
    ],
    answer: "A. Selects specific columns",
  },
  {
    id: 113,
    topic: "SQL",
    question: "Which SQL keyword is used to sort results?",
    options: [
      { label: "A", text: "ORDER BY" },
      { label: "B", text: "GROUP BY" },
      { label: "C", text: "HAVING" },
      { label: "D", text: "WHERE" },
    ],
    answer: "A. ORDER BY",
  },
  {
    id: 114,
    topic: "Normalization",
    question: "What is an update anomaly?",
    options: [
      { label: "A", text: "Data inconsistency due to redundancy" },
      { label: "B", text: "Query returning wrong results" },
      { label: "C", text: "Transaction failure" },
      { label: "D", text: "Lost update" },
    ],
    answer: "A. Data inconsistency due to redundancy",
  },
  {
    id: 115,
    topic: "Transactions",
    question: "What is a nested transaction?",
    options: [
      { label: "A", text: "A transaction within another transaction" },
      { label: "B", text: "Two independent transactions" },
      { label: "C", text: "A long-running transaction" },
      { label: "D", text: "A distributed transaction" },
    ],
    answer: "A. A transaction within another transaction",
  },
  {
    id: 116,
    topic: "Concurrency Control",
    question: "What is the purpose of a lock table?",
    options: [
      { label: "A", text: "To track which transactions hold which locks" },
      { label: "B", text: "To store data" },
      { label: "C", text: "To store indexes" },
      { label: "D", text: "To store logs" },
    ],
    answer: "A. To track which transactions hold which locks",
  },
  {
    id: 117,
    topic: "Indexing",
    question: "What is a B+ tree index?",
    options: [
      { label: "A", text: "A B-tree variant where all keys are in leaves" },
      { label: "B", text: "A binary tree" },
      { label: "C", text: "A hash index" },
      { label: "D", text: "A full-text index" },
    ],
    answer: "A. A B-tree variant where all keys are in leaves",
  },
  {
    id: 118,
    topic: "Storage & File Structures",
    question: "What is a page in database storage?",
    options: [
      { label: "A", text: "A fixed-size block of disk storage" },
      { label: "B", text: "A page of a book" },
      { label: "C", text: "A web page" },
      { label: "D", text: "A record" },
    ],
    answer: "A. A fixed-size block of disk storage",
  },
  {
    id: 119,
    topic: "Query Processing",
    question: "What is a query rewrite?",
    options: [
      { label: "A", text: "Transforming the query into a semantically equivalent but more efficient form" },
      { label: "B", text: "Re-executing the query" },
      { label: "C", text: "Cancelling the query" },
      { label: "D", text: "Caching the result" },
    ],
    answer: "A. Transforming the query into a semantically equivalent but more efficient form",
  },
  {
    id: 120,
    topic: "Database Design",
    question: "What is a derived attribute?",
    options: [
      { label: "A", text: "An attribute that can be computed from other attributes" },
      { label: "B", text: "An attribute with multiple values" },
      { label: "C", text: "A key" },
      { label: "D", text: "A composite attribute" },
    ],
    answer: "A. An attribute that can be computed from other attributes",
  },
  {
    id: 121,
    topic: "DBMS Basics",
    question: "What is a data warehouse?",
    options: [
      { label: "A", text: "A large repository for historical data used for analysis" },
      { label: "B", text: "A real-time database" },
      { label: "C", text: "A transactional database" },
      { label: "D", text: "A backup" },
    ],
    answer: "A. A large repository for historical data used for analysis",
  },
  {
    id: 122,
    topic: "Relational Model",
    question: "What is a relational algebra expression?",
    options: [
      { label: "A", text: "A query expressed using relational algebra operations" },
      { label: "B", text: "A SQL query" },
      { label: "C", text: "A query plan" },
      { label: "D", text: "A stored procedure" },
    ],
    answer: "A. A query expressed using relational algebra operations",
  },
  {
    id: 123,
    topic: "SQL",
    question: "What is a stored procedure?",
    options: [
      { label: "A", text: "A set of SQL statements stored in the database" },
      { label: "B", text: "A view" },
      { label: "C", text: "An index" },
      { label: "D", text: "A trigger" },
    ],
    answer: "A. A set of SQL statements stored in the database",
  },
  {
    id: 124,
    topic: "Normalization",
    question: "What is a determinant in functional dependency?",
    options: [
      { label: "A", text: "The left side of the dependency" },
      { label: "B", text: "The right side of the dependency" },
      { label: "C", text: "The key" },
      { label: "D", text: "The foreign key" },
    ],
    answer: "A. The left side of the dependency",
  },
  {
    id: 125,
    topic: "Transactions",
    question: "What is a commit?",
    options: [
      { label: "A", text: "Making transaction changes permanent" },
      { label: "B", text: "Undoing transaction changes" },
      { label: "C", text: "Starting a transaction" },
      { label: "D", text: "Checking transaction consistency" },
    ],
    answer: "A. Making transaction changes permanent",
  },
  {
    id: 126,
    topic: "Concurrency Control",
    question: "What is a deadlock detection algorithm?",
    options: [
      { label: "A", text: "Algorithm that identifies deadlocks and resolves them" },
      { label: "B", text: "Algorithm that prevents deadlocks" },
      { label: "C", text: "Algorithm that ignores deadlocks" },
      { label: "D", text: "Algorithm that avoids locking" },
    ],
    answer: "A. Algorithm that identifies deadlocks and resolves them",
  },
  {
    id: 127,
    topic: "Indexing",
    question: "What is the purpose of indexing?",
    options: [
      { label: "A", text: "To speed up data retrieval" },
      { label: "B", text: "To enforce uniqueness" },
      { label: "C", text: "To organize data physically" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 128,
    topic: "Storage & File Structures",
    question: "What is a tablespace?",
    options: [
      { label: "A", text: "A logical storage unit containing tables and indexes" },
      { label: "B", text: "A physical file" },
      { label: "C", text: "A data dictionary" },
      { label: "D", text: "A log file" },
    ],
    answer: "A. A logical storage unit containing tables and indexes",
  },
  {
    id: 129,
    topic: "Query Processing",
    question: "What is a pipeline in query execution?",
    options: [
      { label: "A", text: "Passing intermediate results from one operation to another" },
      { label: "B", text: "Writing results to disk" },
      { label: "C", text: "Parallel execution" },
      { label: "D", text: "Caching results" },
    ],
    answer: "A. Passing intermediate results from one operation to another",
  },
  {
    id: 130,
    topic: "Database Design",
    question: "What is a multivalued attribute?",
    options: [
      { label: "A", text: "An attribute that can have multiple values" },
      { label: "B", text: "An attribute that has a single value" },
      { label: "C", text: "A composite attribute" },
      { label: "D", text: "A derived attribute" },
    ],
    answer: "A. An attribute that can have multiple values",
  },
  {
    id: 131,
    topic: "SQL",
    question: "What is the difference between INNER JOIN and OUTER JOIN?",
    options: [
      { label: "A", text: "INNER JOIN returns matching rows; OUTER JOIN returns all rows from one table" },
      { label: "B", text: "OUTER JOIN returns matching rows; INNER JOIN returns all rows" },
      { label: "C", text: "Both are same" },
      { label: "D", text: "OUTER JOIN is faster" },
    ],
    answer: "A. INNER JOIN returns matching rows; OUTER JOIN returns all rows from one table",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is DBMS and what are its advantages?",
    answer:
      "DBMS (Database Management System) is software for creating, managing, and administering databases. Advantages include data consistency, reduced redundancy, data security, data independence, and concurrent access control.",
  },
  {
    question: "What is the difference between DBMS and RDBMS?",
    answer:
      "RDBMS (Relational Database Management System) is based on the relational model and stores data in tables with rows and columns. It enforces relationships, keys, and constraints. DBMS is a broader term that includes non-relational systems like hierarchical or network databases.",
  },
  {
    question: "What is normalization and why is it important?",
    answer:
      "Normalization is the process of organizing data to reduce redundancy and improve integrity. It involves decomposing tables to eliminate anomalies (insert, update, delete). Normalization is important for maintaining a clean, efficient database design.",
  },
  {
    question: "What are ACID properties?",
    answer:
      "ACID stands for Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent execution independent), and Durability (persistent after commit). These properties ensure reliable transaction processing.",
  },
  {
    question: "What is the difference between SQL and NoSQL?",
    answer:
      "SQL databases are relational, use structured schemas, and support SQL queries. NoSQL databases are non-relational, use flexible schemas, and are suitable for unstructured data. NoSQL includes document stores (MongoDB), key-value stores, wide-column stores, and graph databases.",
  },
  {
    question: "What are the different types of joins in SQL?",
    answer:
      "INNER JOIN returns matching rows from both tables. LEFT JOIN returns all rows from left table and matching from right. RIGHT JOIN is vice versa. FULL OUTER JOIN returns all rows from both tables. CROSS JOIN returns the Cartesian product.",
  },
  {
    question: "What is an index and how does it improve performance?",
    answer:
      "An index is a data structure (like B-tree or hash) that allows faster retrieval of rows. It speeds up SELECT queries by reducing data scanning, but slows down INSERT/UPDATE/DELETE because indexes must be maintained.",
  },
  {
    question: "What is a deadlock and how can it be resolved?",
    answer:
      "A deadlock occurs when two or more transactions are waiting indefinitely for each other to release locks. It can be resolved by prevention (wait-die, wound-wait), detection (using a wait-for graph) and recovery (aborting one transaction).",
  },
];

// ========================== COMPONENT ==========================
export default function DbmsMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/dbms",
        "url": "https://CodeSkipper.in/mcq/dbms",
        "name": "DBMS MCQs | Code Skipper",
        "description":
          "Practice 130+ DBMS multiple-choice questions covering fundamentals, relational model, SQL, normalization, transactions, concurrency, indexing, and more.",
        "about": { "@type": "Thing", "name": "DBMS MCQ" },
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
              "name": "DBMS MCQs",
              "item": "https://CodeSkipper.in/mcq/dbms",
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
        "@id": "https://CodeSkipper.in/mcq/dbms#course",
        "name": "DBMS MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for DBMS exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Database Management System" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/dbms#faq",
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
        <title>Top DBMS MCQs 2026 | 130+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 130+ DBMS multiple-choice questions with answers. Covers fundamentals, relational model, SQL, normalization, transactions, concurrency, indexing, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="DBMS, MCQs, Database, SQL, Normalization, Transactions, Concurrency, Indexing, Relational Model, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/dbms-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/dbms-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/dbms-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/dbms-mcq" />
        <meta property="og:title" content="DBMS MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 130+ DBMS multiple-choice questions covering fundamentals, relational model, SQL, normalization, transactions, concurrency, indexing, and more."
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
        <meta name="twitter:title" content="DBMS MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 130+ DBMS multiple-choice questions covering fundamentals, relational model, SQL, normalization, transactions, concurrency, indexing, and more."
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
              🗄️ 130+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Database Management System <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master DBMS with 130+ curated MCQs covering fundamentals, relational model, SQL,
              normalization, transactions, concurrency, indexing, and more. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">12 Topics</span>
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
            Explore DBMS Topics
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
            DBMS MCQs
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
              { title: "DBMS Tutorial", href: "/tutorials/dbms", icon: "📖" },
              { title: "DBMS Interview Questions", href: "/interview/dbms", icon: "💼" },
              { title: "DBMS Notes", href: "/notes/dbms", icon: "📝" },
              { title: "SQL MCQs", href: "/mcq/sql", icon: "📋" },
              { title: "Normalization Guide", href: "/guides/normalization", icon: "⚡" },
              { title: "NoSQL MCQs", href: "/mcq/nosql", icon: "🗄️" },
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
            Ready to Master DBMS?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/dbms"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/dbms"
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