import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaJava,
    FaCode,
    FaCogs,
    FaDatabase,
    FaServer,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaMicrochip,
    FaTasks,
} from "react-icons/fa";

const JavaInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Java Interview Questions ──────────────────────────────────────────────
    const questions = [
        {
            q: "What is Java and why is it platform-independent?",
            a: "Java is a high-level, object-oriented programming language developed by Sun Microsystems (now Oracle). It is platform-independent because Java source code is compiled into bytecode, which runs on the Java Virtual Machine (JVM). The JVM acts as an abstraction layer between the bytecode and the underlying hardware/OS, allowing the same bytecode to run on any system that has a JVM. This principle is known as 'Write Once, Run Anywhere' (WORA).",
        },
        {
            q: "Explain the JVM, JRE, and JDK and their differences.",
            a: "JVM (Java Virtual Machine) is the runtime engine that executes Java bytecode. JRE (Java Runtime Environment) includes the JVM plus standard libraries and other components needed to run Java applications. JDK (Java Development Kit) includes the JRE plus development tools (compiler, debugger, etc.). In short: JDK contains JRE, JRE contains JVM. Developers need JDK; end-users need JRE.",
        },
        {
            q: "What are the main principles of Object-Oriented Programming (OOP) in Java?",
            a: "OOP principles are: 1) Encapsulation – bundling data and methods within objects, hiding internal state. 2) Inheritance – creating new classes based on existing ones to reuse code. 3) Polymorphism – ability of objects to take many forms (method overloading and overriding). 4) Abstraction – hiding implementation details and exposing only essential features (abstract classes, interfaces).",
        },
        {
            q: "What is the difference between a class and an object?",
            a: "A class is a blueprint or template that defines the properties (attributes) and behaviors (methods) common to all objects of a certain kind. An object is an instance of a class—a concrete entity created from the class using the 'new' keyword. A class defines the structure; an object occupies memory and has state.",
        },
        {
            q: "Explain constructors in Java. What are the types?",
            a: "A constructor is a special method used to initialize objects when they are created. It has the same name as the class and no return type. Types: 1) Default constructor (no arguments) – provided by the compiler if not explicitly defined. 2) Parameterized constructor – accepts arguments to initialize instance variables. 3) Copy constructor – constructs a new object by copying another object.",
        },
        {
            q: "What is method overloading and method overriding?",
            a: "Method overloading (compile-time polymorphism) occurs when multiple methods in the same class have the same name but different parameters (number, type, or order). Method overriding (runtime polymorphism) occurs when a subclass provides a specific implementation of a method that is already defined in its superclass, using the same name and parameters. Overriding requires inheritance.",
        },
        {
            q: "What is the 'super' keyword and how is it used?",
            a: "The 'super' keyword is used in a subclass to refer to the immediate parent class. It can be used to: call parent class constructors (super()), access parent class methods, and access parent class fields. It's essential for avoiding name conflicts and for invoking overridden methods.",
        },
        {
            q: "What is the 'final' keyword in Java and how is it used?",
            a: "The 'final' keyword can be applied to: variables (makes them constants, cannot be reassigned), methods (prevents overriding), and classes (prevents inheritance). It's used to enforce immutability, improve security, and optimize performance.",
        },
        {
            q: "Explain the difference between abstract classes and interfaces.",
            a: "Abstract classes can have both abstract and concrete methods, can have instance variables, and can define constructors. A class can extend only one abstract class. Interfaces can have only abstract methods (prior to Java 8), but from Java 8 they can have default and static methods; fields are implicitly public, static, final. A class can implement multiple interfaces. Abstract classes are for partial implementation; interfaces define a contract.",
        },
        {
            q: "What is the difference between checked and unchecked exceptions?",
            a: "Checked exceptions are checked at compile-time; the programmer must handle them (try-catch or declare with throws). They represent recoverable conditions (e.g., IOException, SQLException). Unchecked exceptions (RuntimeException and its subclasses) are not checked at compile-time; they represent programming errors (e.g., NullPointerException, ArrayIndexOutOfBoundsException).",
        },
        {
            q: "What is the purpose of the 'finally' block?",
            a: "The 'finally' block is optional and follows try-catch. It always executes regardless of whether an exception is thrown or caught, unless the JVM exits abruptly. It's used to release resources like file streams, database connections, or to perform cleanup actions.",
        },
        {
            q: "Explain the difference between 'throw' and 'throws'.",
            a: "'throw' is used to explicitly throw an exception from a method or block. It is followed by an instance of Throwable. 'throws' is used in a method signature to declare that the method may throw one or more exceptions, delegating handling to the caller.",
        },
        {
            q: "What is the Java memory model and how does garbage collection work?",
            a: "The Java memory model divides memory into: Heap (objects), Stack (method frames, local variables), Method Area (class metadata, static variables), Program Counter (current instruction), and Native Method Stacks. Garbage collection automatically reclaims memory occupied by objects that are no longer reachable. The JVM uses algorithms like Mark-and-Sweep, generational collection (young, old, permanent/metaspace), and different garbage collectors (G1, CMS, ZGC).",
        },
        {
            q: "What is the difference between '=='' and 'equals()' in Java?",
            a: "'==' is a reference comparison: it checks if two references point to the same memory location. 'equals()' is a method defined in Object that can be overridden to compare the contents or state of two objects (e.g., String uses it for value comparison). For primitive types, '==' compares values. For objects, unless overridden, 'equals()' behaves like '=='. Always override equals() when defining logical equality.",
        },
        {
            q: "Explain the 'String' class and its immutability.",
            a: "Strings in Java are immutable—once created, their value cannot be changed. Any operation that seems to modify a String creates a new String object. This improves security, caching (String pool), and thread-safety. For mutable strings, use StringBuilder (non-synchronized) or StringBuffer (thread-safe).",
        },
        {
            q: "What is the String pool and how does it work?",
            a: "The String pool (intern pool) is a special memory area in the heap where Java stores String literals. When a String literal is created (e.g., 'Hello'), the JVM checks the pool; if the literal already exists, the reference is reused. This saves memory. Strings created with 'new String()' are not pooled automatically but can be interned using 'intern()'.",
        },
        {
            q: "What are the different access modifiers in Java?",
            a: "Access modifiers control visibility: 'private' (same class only), 'default' (package-private, same package), 'protected' (same package + subclasses), 'public' (anywhere). They are essential for encapsulation and API design.",
        },
        {
            q: "What is the 'static' keyword and how is it used?",
            a: "The 'static' keyword belongs to the class rather than instances. It can be applied to variables (class variables), methods (can be called without instance), blocks (static initialization), and nested classes. Static members are shared among all instances of the class.",
        },
        {
            q: "Explain the concept of singleton pattern and how to implement it in Java.",
            a: "Singleton ensures a class has only one instance and provides a global point of access. Implementations: 1) Eager initialization (instance created at class loading), 2) Lazy initialization with double-checked locking, 3) Bill Pugh Singleton (using static inner class), 4) Enum Singleton (most robust). The pattern is used for logging, configuration, connection pools.",
        },
        {
            q: "What is the difference between ArrayList and LinkedList?",
            a: "ArrayList is backed by a dynamic array; it provides O(1) random access but O(n) for insertion/deletion in the middle. LinkedList is a doubly-linked list; it provides O(1) insertion/deletion at ends but O(n) for random access. ArrayList is better for frequent read operations; LinkedList for frequent additions/removals.",
        },
        {
            q: "Explain the differences between HashMap, Hashtable, and ConcurrentHashMap.",
            a: "HashMap is not synchronized (not thread-safe), permits null keys/values. Hashtable is synchronized (thread-safe), does not permit null. ConcurrentHashMap is thread-safe and allows high concurrency by segmenting locks; it's preferred in concurrent environments. For non-concurrent use, use HashMap.",
        },
        {
            q: "What is the purpose of the 'transient' keyword?",
            a: "The 'transient' keyword marks a field as not serializable. When an object is serialized, transient fields are skipped, preventing sensitive data from being persisted and improving performance for non-essential fields.",
        },
        {
            q: "Explain the 'volatile' keyword in Java.",
            a: "The 'volatile' keyword ensures that a variable's value is always read from main memory, not from thread-local caches. It provides visibility guarantees across threads. It is used for flags, status variables, and in lock-free programming, but does not guarantee atomicity.",
        },
        {
            q: "What is the difference between synchronized methods and synchronized blocks?",
            a: "Synchronized methods lock the entire method on the current instance (or class for static). Synchronized blocks lock a specific object, allowing finer-grained control and better performance. Blocks are more flexible and can reduce contention.",
        },
        {
            q: "Explain the Producer-Consumer problem and how to solve it in Java.",
            a: "The Producer-Consumer problem involves two threads: one producing data, the other consuming it, with a shared buffer. It requires synchronization to avoid race conditions. Solutions: 1) Using wait()/notify() on a shared object, 2) Using BlockingQueue implementations (ArrayBlockingQueue, LinkedBlockingQueue) which handle synchronization automatically, 3) Using Semaphores.",
        },
        {
            q: "What are the differences between Runnable and Callable?",
            a: "Runnable has a run() method that returns void and cannot throw checked exceptions. Callable has a call() method that returns a generic value and can throw exceptions. Callable is used with ExecutorService for tasks that need to return results.",
        },
        {
            q: "What is the Executor framework in Java?",
            a: "The Executor framework (java.util.concurrent) provides a higher-level API for thread management. It decouples task submission from execution. Key interfaces: Executor, ExecutorService, ScheduledExecutorService. Common implementations: ThreadPoolExecutor, ScheduledThreadPoolExecutor. It simplifies managing thread pools and reduces overhead of creating threads manually.",
        },
        {
            q: "What is the difference between 'sleep()' and 'wait()'?",
            a: "sleep() is a method of Thread that pauses execution for a specified time; it does not release the lock. wait() is a method of Object that releases the lock and waits until notified; it must be called from a synchronized context. sleep() is for timing, wait() is for inter-thread communication.",
        },
        {
            q: "Explain the 'try-with-resources' statement.",
            a: "try-with-resources automatically closes resources that implement AutoCloseable (e.g., FileInputStream, Connection, Scanner). It is declared with try (ResourceType res = new ResourceType()) { ... }. Resources are closed in reverse order, ensuring proper cleanup even if exceptions occur. It was introduced in Java 7.",
        },
        {
            q: "What are Java 8 features?",
            a: "Key Java 8 features: Lambda expressions, Stream API, Functional interfaces, Default and static methods in interfaces, Optional class, new Date/Time API (java.time), Nashorn JavaScript engine, and CompletableFuture for asynchronous programming.",
        },
        {
            q: "Explain lambda expressions and functional interfaces.",
            a: "Lambda expressions provide a concise way to represent anonymous functions. They are used to implement functional interfaces (interfaces with a single abstract method). Example: (x, y) -> x + y. Common functional interfaces: Predicate, Consumer, Supplier, Function. They enable functional programming and simplify code.",
        },
        {
            q: "What is the Stream API and how is it used?",
            a: "The Stream API provides a declarative way to process sequences of data (collections, arrays). It supports operations like filter, map, reduce, collect, sorted, etc. Streams can be sequential or parallel. They allow functional-style operations on data and are lazy (intermediate operations are not executed until a terminal operation is invoked).",
        },
        {
            q: "What is the Optional class and why is it useful?",
            a: "Optional is a container object that may or may not contain a non-null value. It helps avoid NullPointerException by forcing explicit handling of absent values. Methods: ofNullable, orElse, orElseGet, orElseThrow, map, flatMap. It promotes cleaner code and encourages proper null handling.",
        },
        {
            q: "Explain the new Date/Time API in Java 8.",
            a: "The java.time package (inspired by Joda-Time) provides immutable classes for date and time: LocalDate, LocalTime, LocalDateTime, ZonedDateTime, Instant, Duration, Period. It is thread-safe, provides fluent methods for manipulation, and supports time zones and formatting via DateTimeFormatter.",
        },
        {
            q: "What is the difference between Collection and Collections in Java?",
            a: "Collection is the root interface of the collection framework (List, Set, Queue). Collections is a utility class that provides static methods for operations on collections (sort, reverse, shuffle, binarySearch, etc.).",
        },
        {
            q: "Explain the differences between HashSet and TreeSet.",
            a: "HashSet is backed by a hash table, offers O(1) average time for add, remove, contains, and does not guarantee order. TreeSet is backed by a TreeMap (red-black tree), maintains sorted order, and has O(log n) time for operations. HashSet is for fast lookups; TreeSet for sorted order.",
        },
        {
            q: "What is the difference between Iterator and ListIterator?",
            a: "Iterator can traverse forward only (hasNext, next, remove). ListIterator extends Iterator and allows bidirectional traversal (hasPrevious, previous, nextIndex, previousIndex), and supports adding and setting elements. ListIterator is only available for List collections.",
        },
        {
            q: "What is the garbage collector and what are the different types?",
            a: "Garbage collection (GC) automatically deallocates unreferenced objects. Types: Serial GC (single-threaded), Parallel GC (multi-threaded, throughput-oriented), CMS (Concurrent Mark-Sweep, low-pause), G1 (Garbage-First, predictable pause times), ZGC (low-latency, scalable), Shenandoah. Each has trade-offs between throughput, pause time, and memory footprint.",
        },
        {
            q: "Explain the 'ClassLoader' in Java.",
            a: "ClassLoaders are responsible for dynamically loading Java classes into the JVM during runtime. There are three built-in: Bootstrap (loads rt.jar), Extension (loads extensions), System/Application (loads classpath). ClassLoaders follow the delegation model—they ask their parent to load the class before trying themselves.",
        },
        {
            q: "What is the purpose of the 'native' keyword?",
            a: "The 'native' keyword indicates that a method is implemented in platform-specific code (e.g., C/C++) using the Java Native Interface (JNI). It is used for performance-critical operations or to access system-level resources not available in Java.",
        },
        {
            q: "What are annotations in Java and how are they used?",
            a: "Annotations are metadata that provide information about code (e.g., @Override, @Deprecated, @SuppressWarnings). They can be processed at compile-time or runtime. Custom annotations can be defined using @interface and can have retention policies (SOURCE, CLASS, RUNTIME).",
        },
        {
            q: "Explain the difference between heap and stack memory.",
            a: "Heap memory is used for dynamic allocation of objects; it is shared across threads and managed by the garbage collector. Stack memory is used for method execution; each thread has its own stack, storing local primitives, references, and method frames. Stack memory is faster but limited; heap is larger but slower.",
        },
        {
            q: "What is the 'this' keyword and when is it used?",
            a: "The 'this' keyword is a reference to the current object. It is used to differentiate instance variables from local variables, to call another constructor of the same class (this()), and to pass the current object as a parameter. It cannot be used in static contexts.",
        },
        {
            q: "What is the 'instanceof' operator used for?",
            a: "The 'instanceof' operator checks whether an object is an instance of a specific class or implements a specific interface. It returns a boolean. It is commonly used before casting to avoid ClassCastException.",
        },
        {
            q: "Explain the concept of reflection in Java.",
            a: "Reflection is the ability to inspect and manipulate classes, methods, fields, and constructors at runtime. The java.lang.reflect package provides classes like Class, Method, Field, Constructor. It is used for frameworks, dependency injection, serialization, and testing. It can break encapsulation and has performance overhead.",
        },
        {
            q: "What is the difference between shallow copy and deep copy?",
            a: "Shallow copy copies the object's reference fields (primitives are copied directly) but not the objects they refer to. The clone() method (default) does a shallow copy. Deep copy duplicates the entire object graph, including referenced objects, by recursively copying them. It can be achieved by implementing Cloneable and overriding clone() or by serialization.",
        },
        {
            q: "Explain the concept of 'immutability' in Java with an example.",
            a: "An immutable object cannot be modified after creation. Examples: String, wrapper classes (Integer, Double), LocalDate, LocalTime. Benefits: thread-safety, easy caching, security. To make a class immutable: declare class final, fields private final, don't provide setters, ensure no methods modify fields, make defensive copies.",
        },
        {
            q: "What is the difference between Comparator and Comparable?",
            a: "Comparable is implemented by the class itself (natural ordering) and defines compareTo(). It provides a single sorting order. Comparator is an external interface used to define custom ordering; it can be passed to sorting methods. Comparator is useful for multiple sorting strategies and for sorting classes not implementing Comparable.",
        },
        {
            q: "What is the 'serialVersionUID' and why is it important?",
            a: "serialVersionUID is a unique identifier for a serializable class. It is used during deserialization to verify that the sender and receiver have compatible classes. If not defined, the JVM generates one based on class details, which can change and cause InvalidClassException. It's best practice to define it explicitly.",
        },
        {
            q: "Explain the concept of 'dependency injection' in Java.",
            a: "Dependency Injection (DI) is a design pattern where objects receive their dependencies from an external source rather than creating them internally. It promotes loose coupling and testability. Implementations: constructor injection, setter injection, method injection. Frameworks like Spring and CDI provide DI containers.",
        },
        {
            q: "What are the benefits and use cases of Java's CompletableFuture?",
            a: "CompletableFuture is a class in java.util.concurrent that supports asynchronous programming. It allows chaining of tasks, combining multiple futures, handling exceptions, and providing callbacks. Benefits: non-blocking, easily composable, better resource utilization. Use cases: web services, database calls, parallel computations, event-driven systems.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "Java 21", text: "Latest LTS" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Java Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Java interview with 50+ expert questions covering core Java, OOP, collections, multithreading, Java 8+, JVM, and more."
                />
                <meta
                    name="keywords"
                    content="Java interview questions, core Java, OOP, collections, multithreading, exceptions, Java 8, Spring, JVM"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#007396" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/java" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Java Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Java interview prep with 50+ questions covering core concepts, advanced features, and best practices."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/java" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Java Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Java interviews with 50+ questions covering core and advanced topics."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/java" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/java" />

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
                            description: "Interview preparation platform for Java developers.",
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
                                    name: "Java",
                                    item: "https://codeskipper.in/interview/java",
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
                            name: "Java Interview Questions",
                            description: "50+ curated Java interview questions with detailed answers.",
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
                            name: "Java Interview Questions Collection",
                            description: "A comprehensive collection of Java interview questions for developers.",
                            url: "https://codeskipper.in/interview/java",
                            about: {
                                "@type": "Thing",
                                name: "Java Interview Preparation",
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
                            description: "Java interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Java, OOP, Collections, Multithreading, Java 8+",
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
                            name: "Java Interview Preparation",
                            description: "Complete preparation for Java interviews covering core and advanced topics.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "Core Java, OOP, Collections, Multithreading, Exception Handling, Java 8+ Features, JVM",
                            url: "https://codeskipper.in/interview/java",
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
            <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaJava className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Java Interview <span className="text-blue-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Java interview —
                            from core fundamentals to advanced features, JVM internals, and modern Java.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaMicrochip /> JVM &amp; Core
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
                                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
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
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-blue-500 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-blue-600`}
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
                                                    <FaLightbulb className="text-blue-400 text-xl flex-shrink-0 mt-1" />
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
                            <FaTasks className="text-blue-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Java Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Core Concepts</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be rock-solid on OOP, collections, exceptions, and I/O. These are foundational and frequently asked.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaCogs className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Concurrency</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand threading, synchronization, Executor framework, and concurrent collections. Be prepared for scenario-based questions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaJava className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Java 8+ Features</h3>
                                    <p className="text-gray-600 text-sm">
                                        Lambda, Streams, Optional, new Date/Time API are a must. Show you're up-to-date with modern Java.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaServer className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">JVM &amp; Performance</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with memory model, garbage collection, and performance tuning. This differentiates senior candidates.
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
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Ace Your Java Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all programming languages and tech stacks.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Java Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default JavaInterview;