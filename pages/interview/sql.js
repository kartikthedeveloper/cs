import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaDatabase,
    FaCode,
    FaCogs,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaRocket,
    FaServer,
    FaTable,
} from "react-icons/fa";

const SqlInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 SQL Interview Questions ──────────────────────────────────────────────
    const questions = [
        {
            q: "What is SQL and what are its main components?",
            a: "SQL (Structured Query Language) is a standard programming language for managing relational databases. Its main components include: DDL (Data Definition Language - CREATE, ALTER, DROP), DML (Data Manipulation Language - SELECT, INSERT, UPDATE, DELETE), DCL (Data Control Language - GRANT, REVOKE), and TCL (Transaction Control Language - COMMIT, ROLLBACK, SAVEPOINT). SQL is used for querying, updating, and managing data in RDBMS.",
        },
        {
            q: "Explain the difference between SQL and NoSQL databases.",
            a: "SQL databases are relational, table-based, use structured schemas, and support ACID transactions. They are ideal for structured data and complex queries. NoSQL databases are non-relational, schema-flexible, and store data in various formats (document, key-value, graph). They prioritize scalability, performance, and flexibility over strict consistency. Choose SQL for transactional applications, NoSQL for big data and flexible schemas.",
        },
        {
            q: "What is the difference between 'DELETE' and 'TRUNCATE' commands?",
            a: "DELETE removes rows based on a condition; it can be rolled back, triggers are fired, and it's slower for large tables. TRUNCATE removes all rows from a table, resets identity columns, cannot be rolled back (in most databases), and is faster because it deallocates data pages. TRUNCATE is DDL; DELETE is DML.",
        },
        {
            q: "Explain the difference between 'DROP' and 'TRUNCATE'.",
            a: "DROP removes the entire table structure and data from the database; it cannot be rolled back. TRUNCATE removes all rows but keeps the table structure; it's faster and cannot be rolled back in most databases. DROP is irreversible; TRUNCATE preserves the table definition.",
        },
        {
            q: "What are the different types of SQL joins?",
            a: "INNER JOIN: returns rows with matching values in both tables. LEFT JOIN (LEFT OUTER): returns all rows from the left table, with matching rows from the right. RIGHT JOIN: all rows from the right, with matches from the left. FULL JOIN: all rows from both tables. CROSS JOIN: Cartesian product of both tables. SELF JOIN: joining a table to itself.",
        },
        {
            q: "Explain the difference between 'INNER JOIN' and 'LEFT JOIN'.",
            a: "INNER JOIN returns only rows where there is a match in both tables. LEFT JOIN returns all rows from the left table and matching rows from the right; non-matching rows from the right return NULL. Use LEFT JOIN when you want all left table records regardless of a match.",
        },
        {
            q: "What is a subquery and what are its types?",
            a: "A subquery is a query nested inside another query. Types: correlated (references outer query, executed per row) and non-correlated (independent, executed once). Subqueries can be used in SELECT, FROM, WHERE, HAVING, and EXISTS clauses. They are powerful for complex data retrieval.",
        },
        {
            q: "What is the difference between 'WHERE' and 'HAVING' clauses?",
            a: "WHERE filters rows before grouping (used with GROUP BY). HAVING filters groups after GROUP BY. WHERE cannot use aggregate functions; HAVING can. Example: SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000.",
        },
        {
            q: "Explain the difference between 'UNION' and 'UNION ALL'.",
            a: "UNION combines result sets from two or more SELECT statements and removes duplicate rows. UNION ALL combines result sets without removing duplicates, making it faster. Use UNION ALL when duplicates are acceptable for better performance.",
        },
        {
            q: "What is the purpose of the 'GROUP BY' clause?",
            a: "GROUP BY groups rows that have the same values in specified columns, allowing aggregate functions (SUM, COUNT, AVG, MAX, MIN) to be applied per group. It's essential for generating summary reports. Example: SELECT department, COUNT(*) FROM employees GROUP BY department.",
        },
        {
            q: "What are aggregate functions in SQL?",
            a: "Aggregate functions perform calculations on a set of values and return a single value. Common ones: COUNT (number of rows), SUM (total), AVG (average), MAX (maximum), MIN (minimum). They are used with GROUP BY or with the OVER clause for window functions.",
        },
        {
            q: "Explain the concept of normalization in SQL.",
            a: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Normal forms: 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (3NF plus no overlap). Higher normal forms exist but are rarely used in practice.",
        },
        {
            q: "What is denormalization and why is it used?",
            a: "Denormalization is the process of adding redundancy to a normalized database to improve read performance. It reduces the number of joins needed for queries. It's used in data warehouses, reporting databases, and read-heavy applications. Trade-off: increased storage and update anomalies.",
        },
        {
            q: "Explain the difference between 'PRIMARY KEY' and 'UNIQUE KEY'.",
            a: "A PRIMARY KEY uniquely identifies each row in a table; it cannot contain NULL values and there can be only one per table. A UNIQUE KEY enforces uniqueness but allows one NULL value; there can be multiple UNIQUE keys per table. Both create indexes.",
        },
        {
            q: "What is a foreign key and why is it important?",
            a: "A foreign key is a column or set of columns that references the PRIMARY KEY of another table. It enforces referential integrity, ensuring that relationships between tables are valid. It prevents orphan records and maintains data consistency.",
        },
        {
            q: "Explain the concept of indexing and its types.",
            a: "Indexes are data structures that improve query performance by allowing faster data retrieval. Types: Clustered (data physically sorted, one per table), Non-clustered (separate structure with pointers, multiple per table), Unique (enforces uniqueness), Composite (multiple columns). Proper indexing is critical for performance.",
        },
        {
            q: "What is the difference between clustered and non-clustered indexes?",
            a: "A clustered index determines the physical order of data in a table; there can be only one. A non-clustered index stores a separate structure with pointers to the data; you can have many. Clustered is faster for range queries; non-clustered is faster for specific lookups.",
        },
        {
            q: "What is the purpose of the 'EXPLAIN' or 'EXPLAIN PLAN' command?",
            a: "The EXPLAIN command shows the execution plan of a query, including how tables are accessed, which indexes are used, and the cost of operations. It is used for query optimization and performance tuning. It helps identify bottlenecks and optimize SQL queries.",
        },
        {
            q: "Explain the concept of a transaction and ACID properties.",
            a: "A transaction is a logical unit of work that groups multiple operations as a single unit. ACID properties: Atomicity (all or nothing), Consistency (valid state before/after), Isolation (concurrent transactions don't interfere), Durability (changes persist after commit). Transactions ensure data integrity.",
        },
        {
            q: "What are isolation levels in SQL transactions?",
            a: "Isolation levels define how transaction changes are visible to other transactions. Levels: READ UNCOMMITTED (dirty reads allowed), READ COMMITTED (only committed data), REPEATABLE READ (consistent reads, prevents non-repeatable reads), SERIALIZABLE (highest isolation, prevents phantom reads). Higher isolation reduces concurrency.",
        },
        {
            q: "Explain the difference between 'COMMIT' and 'ROLLBACK'.",
            a: "COMMIT permanently saves all changes made in the current transaction to the database. ROLLBACK undoes all changes made in the current transaction, reverting to the previous state. Both are used with transactions to control data integrity.",
        },
        {
            q: "What is a view in SQL and why is it used?",
            a: "A view is a virtual table based on the result of a SELECT query. It does not store data physically; it provides a customized presentation of data. Uses: security (restrict access to specific columns), simplify complex queries, and provide data abstraction. Views can be materialized (stored) for performance.",
        },
        {
            q: "What is the difference between a view and a materialized view?",
            a: "A view is virtual and executes the query each time it's accessed. A materialized view stores the result of the query physically, providing faster access but requiring refresh for updates. Materialized views are used for performance in reporting and data warehousing.",
        },
        {
            q: "Explain the concept of stored procedures and their advantages.",
            a: "Stored procedures are pre-compiled SQL code stored in the database. Advantages: performance (pre-compiled), security (controlled access), reduced network traffic (server-side execution), and code reuse. They can accept parameters and return result sets.",
        },
        {
            q: "What is the difference between stored procedures and functions?",
            a: "Functions must return a value and cannot modify database state; procedures can modify data and do not require a return value. Functions can be used in SELECT statements; procedures cannot. Functions are deterministic or non-deterministic; procedures always run as defined.",
        },
        {
            q: "What are triggers in SQL and when are they used?",
            a: "Triggers are stored procedures that automatically execute in response to events (INSERT, UPDATE, DELETE) on a table. Uses: auditing, enforcing business rules, logging, and maintaining denormalized data. Use with caution as they can impact performance and be hard to debug.",
        },
        {
            q: "Explain the difference between 'CASCADE' and 'RESTRICT' in foreign keys.",
            a: "CASCADE: when a referenced row is deleted/updated, the dependent rows are also deleted/updated. RESTRICT (or NO ACTION): prevents deletion/update of the referenced row if dependent rows exist. CASCADE maintains referential integrity automatically; RESTRICT prevents accidental data loss.",
        },
        {
            q: "What is a 'deadlock' and how can it be prevented?",
            a: "A deadlock occurs when two or more transactions wait indefinitely for each other to release locks. Prevention: use consistent locking order, limit transaction size, use lower isolation levels, use SELECT FOR UPDATE with caution, and implement deadlock detection and retry logic.",
        },
        {
            q: "Explain the concept of query optimization.",
            a: "Query optimization is the process of writing efficient SQL queries and ensuring proper indexing and database design. Techniques: use EXPLAIN to analyze execution plans, avoid SELECT *, use appropriate indexes, limit result sets with WHERE, avoid functions on indexed columns, and optimize joins.",
        },
        {
            q: "What is the difference between 'IN' and 'EXISTS' operators?",
            a: "IN checks if a value exists in a subquery result; it can be used with a list of values. EXISTS checks if the subquery returns any rows; it's a boolean operator. EXISTS is generally faster for large datasets because it stops at the first match; IN can be inefficient with large subqueries.",
        },
        {
            q: "Explain the concept of 'window functions' in SQL.",
            a: "Window functions perform calculations across a set of rows related to the current row without collapsing them into a single output row. They use the OVER clause. Examples: ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM OVER, AVG OVER. They are used for running totals, moving averages, and ranking.",
        },
        {
            q: "What is the 'ROW_NUMBER()' function and how is it used?",
            a: "ROW_NUMBER() assigns a unique sequential number to each row in a partition, starting from 1. Example: ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rank. It's used for pagination, deduplication, and ranking within groups.",
        },
        {
            q: "Explain the difference between 'RANK' and 'DENSE_RANK'.",
            a: "RANK assigns the same rank to equal values, leaving gaps (1,2,2,4). DENSE_RANK assigns the same rank to equal values without gaps (1,2,2,3). Use RANK for competition rankings; use DENSE_RANK when you need contiguous ranks.",
        },
        {
            q: "What are common table expressions (CTEs) and why are they useful?",
            a: "CTEs are temporary result sets defined using the WITH clause, available for a single query. They improve readability and allow recursive queries. Example: WITH cte AS (SELECT ...) SELECT * FROM cte. Recursive CTEs are powerful for hierarchical data (org charts, bill of materials).",
        },
        {
            q: "Explain recursive CTE and its use cases.",
            a: "A recursive CTE refers to itself in the FROM clause. It consists of an anchor (base case) and a recursive part (self-reference). Use cases: organizational charts, category trees, bill of materials, and path finding in graphs. Example: WITH RECURSIVE cte (id, parent_id) AS (anchor UNION recursive).",
        },
        {
            q: "What is the difference between 'CHAR' and 'VARCHAR' data types?",
            a: "CHAR is fixed-length; it stores exactly the specified length, padding with spaces. VARCHAR is variable-length; it stores only the characters used, saving space. CHAR is faster for fixed-length data; VARCHAR is more space-efficient. Use CHAR for codes and fixed IDs; VARCHAR for variable text.",
        },
        {
            q: "What are the differences between 'DATETIME' and 'TIMESTAMP' in SQL?",
            a: "DATETIME stores date and time without timezone, has a larger range (1000-9999), and takes 8 bytes. TIMESTAMP stores date and time with timezone awareness (UTC), has a smaller range (1970-2038), takes 4 bytes, and automatically updates on row changes. Use TIMESTAMP for timezone-sensitive data.",
        },
        {
            q: "Explain the concept of 'partitioning' in SQL databases.",
            a: "Partitioning divides a large table into smaller, more manageable pieces (partitions) based on a partition key (e.g., date range). Benefits: improved query performance (partition pruning), easier data management (drop partitions), and faster maintenance (index rebuild). Types: range, list, hash, and composite partitioning.",
        },
        {
            q: "What is the difference between 'sharding' and 'partitioning'?",
            a: "Sharding distributes data across multiple servers (horizontal scaling) for scalability. Partitioning divides data within a single database server (vertical scaling) for manageability and performance. Both use similar concepts but at different infrastructure levels.",
        },
        {
            q: "Explain the CAP theorem in the context of distributed databases.",
            a: "CAP theorem states that a distributed system can only provide two of three guarantees: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition tolerance (system continues to operate despite network partitions). SQL databases prioritize consistency; NoSQL often prioritize availability.",
        },
        {
            q: "What is the purpose of the 'COALESCE' function?",
            a: "COALESCE returns the first non-NULL value from a list of expressions. Example: COALESCE(col1, col2, 'default'). It is useful for providing fallback values when dealing with NULLs. Equivalent to NVL in Oracle or ISNULL in SQL Server.",
        },
        {
            q: "Explain the concept of 'NULL' in SQL and how to handle it.",
            a: "NULL represents missing or unknown data. It is not a value; comparisons with NULL using = or != return UNKNOWN. Handle NULLs using IS NULL, IS NOT NULL, COALESCE, and NULLIF. Aggregate functions ignore NULLs except COUNT(*). Proper NULL handling is crucial for data integrity.",
        },
        {
            q: "What is the difference between 'CAST' and 'CONVERT'?",
            a: "Both are used for data type conversion. CAST is ANSI standard and has a simpler syntax: CAST(value AS type). CONVERT is database-specific (SQL Server) and supports additional style parameters for formatting: CONVERT(type, value, style). Use CAST for portability, CONVERT for specific formatting needs.",
        },
        {
            q: "Explain the concept of 'optimistic locking' vs 'pessimistic locking'.",
            a: "Optimistic locking assumes conflicts are rare; it uses versioning (e.g., timestamp) to detect changes at update time. Pessimistic locking assumes conflicts are common; it locks the row for the transaction's duration. Optimistic is better for read-heavy apps; pessimistic for write-heavy.",
        },
        {
            q: "What is a 'database migration' and why is it important?",
            a: "Database migration is the process of moving data and schema from one database to another or between versions. It includes schema changes, data transformations, and ensuring compatibility. Tools: Flyway, Liquibase, Alembic. It's essential for version control and continuous deployment.",
        },
        {
            q: "Explain the concept of 'ACID' compliance in SQL databases.",
            a: "ACID compliance ensures reliable transaction processing. Atomicity: transactions are all-or-nothing. Consistency: transactions maintain database invariants. Isolation: concurrent transactions don't interfere. Durability: committed changes persist. ACID is a key feature of relational databases.",
        },
        {
            q: "What are the common performance tuning techniques for SQL?",
            a: "Techniques: create appropriate indexes, use covering indexes, avoid SELECT *, use WHERE filters, optimize joins (use INNER JOIN over correlated subqueries), use EXISTS over IN for large datasets, analyze query plans, partition large tables, and use query hints cautiously.",
        },
        {
            q: "Explain the concept of 'temporary tables' and their use cases.",
            a: "Temporary tables are session-scoped tables that store intermediate results. They are created with CREATE TEMP TABLE or #table. Use cases: complex multi-step queries, performance optimization (break down complex queries), and data transformation. They are automatically dropped at session end.",
        },
        {
            q: "What is the future of SQL and relational databases?",
            a: "SQL continues to evolve with features like JSON support, window functions, CTEs, and better performance. Cloud databases (AWS RDS, Azure SQL) are growing. SQL remains the dominant language for data management. Trends: integration with AI/ML, serverless, automated optimization, and hybrid SQL/NoSQL architectures.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "SQL", text: "Queries &amp; More" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ SQL Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your SQL interview with 50+ expert questions covering queries, joins, normalization, indexing, stored procedures, performance, and more."
                />
                <meta
                    name="keywords"
                    content="SQL interview questions, SQL queries, joins, normalization, indexing, stored procedures, database, MySQL, PostgreSQL"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#F2911B" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/sql" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ SQL Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete SQL interview prep with 50+ questions covering queries, joins, normalization, and performance optimization."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/sql" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ SQL Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for SQL interviews with 50+ questions covering queries, joins, and database optimization."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/sql" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/sql" />

                {/* ─── JSON-LD: WebSite ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Code Skipper",
                            url: "https://codeskipper.in",
                            potentialAction: {
                                "@type": "SearchAction",
                                target: "https://codeskipper.in/search?q={search_term_string}",
                                "query-input": "required name=search_term_string",
                            },
                        }),
                    }}
                />

                {/* ─── JSON-LD: Organization ────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Code Skipper",
                            url: "https://codeskipper.in",
                            logo: "https://codeskipper.in/Images/logo.png",
                            description: "Interview preparation platform for data professionals.",
                            sameAs: ["https://twitter.com/codeskipper", "https://github.com/codeskipper"],
                        }),
                    }}
                />

                {/* ─── JSON-LD: Breadcrumb ──────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            itemListElement: [
                                { "@type": "ListItem", position: 1, name: "Home", item: "https://codeskipper.in" },
                                {
                                    "@type": "ListItem",
                                    position: 2,
                                    name: "Interview Questions",
                                    item: "https://codeskipper.in/interview",
                                },
                                {
                                    "@type": "ListItem",
                                    position: 3,
                                    name: "SQL",
                                    item: "https://codeskipper.in/interview/sql",
                                },
                            ],
                        }),
                    }}
                />

                {/* ─── JSON-LD: ItemList ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            name: "SQL Interview Questions",
                            description: "50+ curated SQL interview questions with detailed answers.",
                            numberOfItems: questions.length,
                            itemListElement: questions.map((item, idx) => ({
                                "@type": "ListItem",
                                position: idx + 1,
                                item: {
                                    "@type": "Question",
                                    name: item.q,
                                    text: item.q,
                                    answerCount: 1,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: item.a,
                                    },
                                },
                            })),
                        }),
                    }}
                />

                {/* ─── JSON-LD: FAQPage ────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: questions.map((item) => ({
                                "@type": "Question",
                                name: item.q,
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: item.a,
                                },
                            })),
                        }),
                    }}
                />

                {/* ─── JSON-LD: CollectionPage ──────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            name: "SQL Interview Questions Collection",
                            description: "A comprehensive collection of SQL interview questions for data professionals.",
                            url: "https://codeskipper.in/interview/sql",
                            about: {
                                "@type": "Thing",
                                name: "SQL Interview Preparation",
                            },
                            mainEntity: {
                                "@type": "ItemList",
                                itemListElement: questions.map((item, idx) => ({
                                    "@type": "ListItem",
                                    position: idx + 1,
                                    item: {
                                        "@type": "Question",
                                        name: item.q,
                                    },
                                })),
                            },
                        }),
                    }}
                />

                {/* ─── JSON-LD: EducationalOrganization ─────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EducationalOrganization",
                            name: "Code Skipper",
                            description: "SQL interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "SQL, Database Management, Query Optimization",
                            educationalLevel: "Beginner to Advanced",
                        }),
                    }}
                />

                {/* ─── JSON-LD: Course ───────────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Course",
                            name: "SQL Interview Preparation",
                            description: "Complete preparation for SQL interviews covering queries, joins, and optimization.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "SQL Queries, Joins, Subqueries, Normalization, Indexing, Stored Procedures",
                            url: "https://codeskipper.in/interview/sql",
                        }),
                    }}
                />

                {/* ─── JSON-LD: SearchAction ────────────────────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SearchAction",
                            target: "https://codeskipper.in/search?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        }),
                    }}
                />
            </Head>

            {/* ─── Main Content ──────────────────────────────────────────────────────── */}
            <section className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaDatabase className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            SQL Interview <span className="text-orange-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your SQL interview —
                            from basic queries and joins to normalization, indexing, stored procedures, and performance tuning.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaTable /> Database Expertise
                            </span>
                        </div>
                    </motion.div>

                    {/* ─── Stats ────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border border-gray-100 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-3xl font-bold text-orange-600 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* ─── Questions ────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4 mb-12"
                    >
                        {questions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-orange-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-orange-500 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-orange-600`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openQuestion === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35, ease: "easeInOut" }}
                                            className="border-t border-gray-100"
                                        >
                                            <div className="p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white">
                                                <div className="flex items-start gap-3">
                                                    <FaLightbulb className="text-orange-400 text-xl flex-shrink-0 mt-1" />
                                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                                        {item.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ─── Pro Tips ──────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FaRocket className="text-orange-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for SQL Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Query Writing</h3>
                                    <p className="text-gray-600 text-sm">
                                        Practice writing complex queries with joins, subqueries, and window functions. Understand execution order.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaCogs className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Database Design</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand normalization, ER diagrams, and index strategies. Be ready to design schemas for given scenarios.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaServer className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Performance Tuning</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with EXPLAIN plans, indexing strategies, and query optimization. This differentiates senior candidates.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaCloud className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Modern SQL</h3>
                                    <p className="text-gray-600 text-sm">
                                        Know CTEs, window functions, and JSON support. Show you're up-to-date with modern SQL features.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── CTA ────────────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="text-center py-8"
                    >
                        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Ace Your SQL Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all data and technology domains.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-orange-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · SQL Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SqlInterview;