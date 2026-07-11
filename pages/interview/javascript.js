import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaJs,
    FaCode,
    FaReact,
    FaNodeJs,
    FaServer,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaLaptopCode,
    FaTasks,
} from "react-icons/fa";

const JavaScriptInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 JavaScript Interview Questions ──────────────────────────────────────
    const questions = [
        {
            q: "What is JavaScript and what are its key features?",
            a: "JavaScript is a high-level, interpreted scripting language that conforms to the ECMAScript specification. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. Key features: dynamic typing, first-class functions, prototype-based inheritance, event-driven architecture, and asynchronous programming with promises and async/await.",
        },
        {
            q: "Explain the difference between 'var', 'let', and 'const'.",
            a: "'var' is function-scoped and can be redeclared; it is hoisted and initialized with undefined. 'let' is block-scoped, cannot be redeclared in the same scope, and is hoisted but not initialized (temporal dead zone). 'const' is block-scoped, cannot be reassigned, and must be initialized at declaration. Use 'const' by default, 'let' when reassignment is needed, and avoid 'var' in modern code.",
        },
        {
            q: "What is hoisting in JavaScript?",
            a: "Hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during compilation. Variables declared with 'var' are hoisted and initialized with 'undefined'. Function declarations are hoisted completely. 'let' and 'const' are hoisted but not initialized, leading to a temporal dead zone if accessed before declaration.",
        },
        {
            q: "Explain the difference between '==' and '===' operators.",
            a: "'==' is the abstract equality operator; it performs type coercion if the types are different. '===' is the strict equality operator; it checks both value and type without coercion. For example, 1 == '1' is true, but 1 === '1' is false. Always use '===' to avoid unexpected behavior and improve code predictability.",
        },
        {
            q: "What is a closure and why is it useful?",
            a: "A closure is a function that remembers its lexical scope even when the function is executed outside that scope. It is created when a function is defined inside another function and has access to the outer function's variables. Use cases: data privacy (module pattern), function factories, and maintaining state in callbacks. Closures are fundamental to functional programming in JavaScript.",
        },
        {
            q: "Explain the concept of 'this' in JavaScript.",
            a: "'this' refers to the execution context of a function. Its value depends on how the function is called: in a method call, 'this' refers to the object; in a regular function call, 'this' refers to the global object (strict mode: undefined); in an event handler, it refers to the element; in arrow functions, 'this' is lexically bound to the enclosing scope. 'this' can be explicitly set using call, apply, or bind.",
        },
        {
            q: "What are arrow functions and how are they different from regular functions?",
            a: "Arrow functions are a concise syntax for writing functions using =>. They do not have their own 'this', 'arguments', 'super', or 'new.target'; they inherit from the enclosing lexical scope. They cannot be used as constructors and are not hoisted. They are ideal for callbacks and functions that need to preserve the surrounding 'this'.",
        },
        {
            q: "Explain the event loop and how JavaScript handles asynchronous operations.",
            a: "JavaScript is single-threaded but uses an event loop to manage asynchronous operations. The event loop continuously checks the call stack and the task queue. When the call stack is empty, it picks the first task from the queue and pushes it to the stack. This allows non-blocking I/O. Microtasks (promises) have higher priority than macrotasks (setTimeout, setInterval).",
        },
        {
            q: "What are promises and how do they work?",
            a: "Promises are objects representing the eventual completion (or failure) of an asynchronous operation. They have three states: pending, fulfilled (resolved), and rejected. Promises are chainable using .then() for success, .catch() for errors, and .finally() for cleanup. They avoid callback hell and enable better error handling.",
        },
        {
            q: "Explain async/await and how it relates to promises.",
            a: "async/await is syntactic sugar built on top of promises. Declaring a function with 'async' makes it return a promise. The 'await' keyword pauses execution until the promise settles, making asynchronous code look synchronous. It improves readability and error handling with try/catch. Under the hood, it still uses promises.",
        },
        {
            q: "What is the DOM and how do you interact with it?",
            a: "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page as a tree of nodes. JavaScript interacts with the DOM using methods like document.getElementById, document.querySelector, element.addEventListener, element.textContent, etc. The DOM API allows manipulation of structure, style, and content dynamically.",
        },
        {
            q: "What is event delegation and why is it used?",
            a: "Event delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements, relying on event bubbling. It reduces memory usage, improves performance, and works for dynamically added elements. It's implemented by checking the event.target to identify which child triggered the event.",
        },
        {
            q: "Explain the difference between 'innerHTML' and 'textContent'.",
            a: "innerHTML returns or sets the HTML content inside an element, parsing HTML tags. textContent returns or sets the plain text content, ignoring any HTML tags. Use textContent for performance and security (avoids XSS), and innerHTML only when you need to insert HTML markup safely (with sanitization).",
        },
        {
            q: "What is the difference between 'null' and 'undefined'?",
            a: "'undefined' is a variable that has been declared but not assigned a value, or a property that does not exist. It is a primitive value. 'null' is an assignment value that represents no value or empty object reference; it is also a primitive. 'undefined' is the default for uninitialized variables; 'null' must be explicitly assigned.",
        },
        {
            q: "What are the different data types in JavaScript?",
            a: "JavaScript has two categories: Primitive types: String, Number, Boolean, Undefined, Null, Symbol (ES6), BigInt. Reference types: Object, Array, Function, Date, RegExp, etc. Primitive types are immutable and stored on the stack; reference types are mutable and stored on the heap.",
        },
        {
            q: "Explain the concept of prototypal inheritance.",
            a: "Every JavaScript object has an internal [[Prototype]] property that points to another object. When accessing a property, the engine first checks the object itself, then its prototype, and so on up the chain. This is prototypal inheritance. Functions have a 'prototype' property that is used when creating objects with 'new'. ES6 introduced 'class' syntax which is syntactic sugar over prototypes.",
        },
        {
            q: "What is the difference between a 'class' and a 'function constructor'?",
            a: "Class syntax (ES6) is a cleaner way to create constructor functions and handle inheritance. It supports 'constructor', 'super', and 'extends' keywords, and is easier to read. However, classes are syntactic sugar over prototypes; they are not a new object-oriented model. Function constructors are the pre-ES6 way and still work.",
        },
        {
            q: "Explain the 'spread' and 'rest' operators.",
            a: "Spread (...) expands an iterable (array, string) into individual elements. Used in array literals, function calls, and object literals. Rest (...) collects remaining arguments into an array. Used in function parameters and destructuring. Both use the same syntax but differ in context.",
        },
        {
            q: "What is destructuring in JavaScript?",
            a: "Destructuring is a concise way to extract values from arrays or properties from objects into distinct variables. Array destructuring: [a, b] = [1, 2]. Object destructuring: {name, age} = person. It supports default values, rest elements, and nested destructuring.",
        },
        {
            q: "Explain the difference between 'map()', 'filter()', and 'reduce()'.",
            a: "map() transforms each element of an array and returns a new array of the same length. filter() returns a new array containing elements that pass a test (predicate). reduce() accumulates array elements into a single value by applying a function cumulatively. They are higher-order functions used in functional programming.",
        },
        {
            q: "What is a 'callback' and what is 'callback hell'?",
            a: "A callback is a function passed as an argument to another function, to be executed later. Callback hell (pyramid of doom) occurs when multiple nested callbacks make code hard to read and maintain. Solutions: use promises, async/await, or modularize the code.",
        },
        {
            q: "Explain 'currying' and 'partial application'.",
            a: "Currying is transforming a function that takes multiple arguments into a sequence of functions that each take a single argument (e.g., f(a,b,c) -> f(a)(b)(c)). Partial application is fixing a few arguments to produce a new function that takes the remaining arguments. Both are techniques in functional programming to create reusable functions.",
        },
        {
            q: "What is the 'new' operator and what does it do?",
            a: "The 'new' operator creates an instance of a user-defined object type or built-in constructor. It does: 1) creates a new empty object, 2) sets the prototype to the constructor's prototype, 3) binds 'this' to the new object, 4) executes the constructor, and 5) returns the object unless the constructor returns a non-primitive.",
        },
        {
            q: "Explain the difference between 'call', 'apply', and 'bind'.",
            a: "All three are used to set the 'this' value in a function. call() invokes the function with a given 'this' and arguments passed individually. apply() is similar but takes arguments as an array. bind() returns a new function with a bound 'this' value, which can be called later. They are used for borrowing methods and partial application.",
        },
        {
            q: "What is the 'typeof' operator and what are its quirks?",
            a: "typeof returns a string indicating the type of the operand. Quirks: typeof null returns 'object' (historical bug), typeof function returns 'function', and typeof array returns 'object'. To check for array, use Array.isArray(). typeof is useful for detecting primitive types but limited for objects.",
        },
        {
            q: "Explain the concept of 'memoization' in JavaScript.",
            a: "Memoization is an optimization technique that caches the results of expensive function calls. It stores the results of computations and returns the cached result when the same inputs occur again. Implemented using closures and objects to store cache. It improves performance for functions with repeated inputs.",
        },
        {
            q: "What is the 'Symbol' data type and when is it used?",
            a: "Symbol is a primitive data type introduced in ES6. Each symbol is unique and immutable. They are used as object property keys to avoid name collisions. They are useful for creating private properties or well-known symbols (e.g., Symbol.iterator) that enable built-in behaviors.",
        },
        {
            q: "Explain 'template literals' and their features.",
            a: "Template literals are string literals using backticks (`). They support multi-line strings, string interpolation with ${expression}, and tagged templates (function processing). They are more readable and powerful than string concatenation.",
        },
        {
            q: "What is the 'Set' and 'Map' data structures in JavaScript?",
            a: "Set is a collection of unique values (no duplicates). Map is a collection of key-value pairs where keys can be any type (not just strings). Both provide efficient operations like add, delete, and has. They are iterable and used for storing collections with better performance than plain objects in certain scenarios.",
        },
        {
            q: "Explain the 'WeakSet' and 'WeakMap' and their differences from Set/Map.",
            a: "WeakSet and WeakMap hold 'weak' references to objects, allowing them to be garbage-collected if no other references exist. They are not iterable and have limited methods. They are used for storing private data or metadata without preventing garbage collection.",
        },
        {
            q: "What is the 'Proxy' object and how is it used?",
            a: "A Proxy wraps an object and intercepts operations (get, set, delete, etc.) via traps. It is used for validation, logging, access control, and virtualization. It provides metaprogramming capabilities. Example: new Proxy(target, handler) where handler defines traps.",
        },
        {
            q: "Explain the difference between 'Object.freeze()' and 'Object.seal()'.",
            a: "Object.freeze() prevents adding/removing properties and makes existing properties read-only (non-writable, non-configurable). Object.seal() prevents adding/removing properties but allows modifications to existing properties (configurable: false, but writable remains true).",
        },
        {
            q: "What is the 'Debouncing' and 'Throttling' in JavaScript?",
            a: "Debouncing ensures a function is called only after a certain period of inactivity (e.g., after typing stops). Throttling limits the rate of function calls (e.g., once per second during scrolling). Both are used for performance optimization in event handlers like resize, scroll, and input.",
        },
        {
            q: "Explain the concept of 'pollution of global namespace' and how to avoid it.",
            a: "Polluting the global namespace means adding variables/functions to the global object, leading to name collisions. Avoid by: using IIFE (Immediately Invoked Function Expression), modules (ES6 modules), and avoiding var declarations globally. Use block-scoped 'let'/'const' and encapsulate code.",
        },
        {
            q: "What are 'ES6 modules' and how do they work?",
            a: "ES6 modules allow splitting code into separate files, each with its own scope. Use 'export' to expose variables/functions and 'import' to use them. Modules are loaded asynchronously and support default exports. They help in maintaining large codebases and enable tree-shaking.",
        },
        {
            q: "Explain the 'async' attribute vs 'defer' attribute in script tags.",
            a: "Both are used with external scripts. 'async' downloads the script without blocking HTML parsing and executes it as soon as it's ready, potentially out of order. 'defer' downloads the script without blocking parsing and executes after HTML parsing is complete, in order. 'defer' is preferred for scripts that need DOM access.",
        },
        {
            q: "What is the 'fetch' API and how does it differ from XMLHttpRequest?",
            a: "fetch() is a modern API for making HTTP requests. It returns promises, supports streaming, and has a simpler syntax. XMLHttpRequest is older, uses callbacks, and is more complex. fetch() requires handling of responses and errors explicitly. It is the recommended way for network requests.",
        },
        {
            q: "Explain the concept of 'CORS' (Cross-Origin Resource Sharing).",
            a: "CORS is a security mechanism that restricts web applications from making requests to a different domain than the one that served the web page. It uses HTTP headers (like Access-Control-Allow-Origin) to allow cross-origin requests. It prevents malicious sites from accessing sensitive data.",
        },
        {
            q: "What is the 'localStorage' and 'sessionStorage'?",
            a: "localStorage and sessionStorage are web storage APIs. localStorage persists data across browser sessions, while sessionStorage persists data only for the current tab/session. Both store data as key-value pairs and are synchronous. They have a storage limit of ~5MB and are used for client-side data persistence.",
        },
        {
            q: "Explain the 'Observer' pattern and how it's implemented in JavaScript.",
            a: "The Observer pattern defines a one-to-many dependency between objects, so when one object changes state, all its dependents are notified. In JavaScript, it's implemented using event listeners, or with custom subject-observer classes. This is used in frameworks (e.g., React's state) and in event-driven programming.",
        },
        {
            q: "What is 'webpack' and why is it used?",
            a: "Webpack is a module bundler that processes JavaScript and other assets (CSS, images) and bundles them into optimized files. It supports code splitting, tree shaking, hot module replacement, and allows using modern JavaScript features with loaders and plugins. It's essential for build pipelines.",
        },
        {
            q: "Explain the concept of 'JSX' and how it relates to JavaScript.",
            a: "JSX is a syntax extension for JavaScript, used with React, that allows writing HTML-like markup inside JavaScript. It is not valid JavaScript; it is transformed by tools like Babel into React.createElement calls. JSX makes UI code more readable and maintainable.",
        },
        {
            q: "What is the 'React' framework and its core principles?",
            a: "React is a declarative, component-based library for building UIs. It uses a virtual DOM to optimize updates, follows one-way data flow (props/state), and encourages reusable components. React uses JSX and is often paired with state management libraries (Redux, Zustand).",
        },
        {
            q: "Explain the concept of 'hooks' in React.",
            a: "Hooks are functions that allow using state and other React features in functional components. Examples: useState, useEffect, useContext, useReducer. They replace class components and provide a more direct API for state and side effects.",
        },
        {
            q: "What is the 'event loop' in Node.js and how is it different from the browser?",
            a: "Node.js event loop is similar but operates on a server environment. It includes phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks. Node.js uses libuv for cross-platform async I/O. The browser event loop handles DOM events, requests, etc. Both are based on the same principle but with different APIs.",
        },
        {
            q: "Explain the 'require' vs 'import' in Node.js.",
            a: "require() is the CommonJS module system used in Node.js. It is synchronous and dynamic. import is the ES6 module syntax, which is asynchronous and static. In Node.js, import is supported with the 'type: module' or .mjs extension. import allows better static analysis and tree-shaking.",
        },
        {
            q: "What are 'streams' in Node.js and what are the types?",
            a: "Streams are objects that allow reading/writing data continuously (chunk by chunk) without loading everything into memory. Types: Readable (reading), Writable (writing), Duplex (both read and write), Transform (modify data as it passes). Streams are efficient for handling large files, network requests, and real-time data.",
        },
        {
            q: "Explain the 'event emitters' in Node.js.",
            a: "EventEmitters are objects that can emit events and register listeners. They are the foundation of Node.js's event-driven architecture. The 'events' module provides the EventEmitter class. Used in many core modules (fs, http, net) and custom modules.",
        },
        {
            q: "What is 'TypeScript' and how does it relate to JavaScript?",
            a: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types, interfaces, enums, and advanced type inference. It improves code quality, refactoring, and IDE support. It's widely used in large enterprise applications.",
        },
        {
            q: "What are some common design patterns used in JavaScript?",
            a: "Common patterns: Module pattern (encapsulation), Singleton, Observer, Factory, Constructor, Prototype, Decorator, and Model-View-Controller (MVC). Modern frameworks like React and Angular incorporate many of these patterns.",
        },
        {
            q: "What is the future of JavaScript and what are the upcoming features?",
            a: "JavaScript continues to evolve. Upcoming features (ES2024 and beyond) include: Decorators (phase 3), Temporal API (modern Date replacement), pipeline operator, record/tuple (immutable collections), and improved pattern matching. JavaScript will likely focus on better performance, simpler syntax, and more robust tooling.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "ES6+", text: "Modern Features" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ JavaScript Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your JavaScript interview with 50+ expert questions covering core concepts, ES6+, DOM, async/await, closures, prototypes, and more."
                />
                <meta
                    name="keywords"
                    content="JavaScript interview questions, JS, ES6, DOM, async, closures, promises, React, Node.js, frontend"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#F7DF1E" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/javascript" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ JavaScript Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete JavaScript interview prep with 50+ questions covering core, advanced, and modern features."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/javascript" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ JavaScript Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for JavaScript interviews with 50+ questions covering core and advanced topics."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/javascript" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/javascript" />

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
                            description: "Interview preparation platform for JavaScript developers.",
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
                                    name: "JavaScript",
                                    item: "https://codeskipper.in/interview/javascript",
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
                            name: "JavaScript Interview Questions",
                            description: "50+ curated JavaScript interview questions with detailed answers.",
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
                            name: "JavaScript Interview Questions Collection",
                            description: "A comprehensive collection of JavaScript interview questions for developers.",
                            url: "https://codeskipper.in/interview/javascript",
                            about: {
                                "@type": "Thing",
                                name: "JavaScript Interview Preparation",
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
                            description: "JavaScript interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "JavaScript, ES6, DOM, Async, React, Node.js",
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
                            name: "JavaScript Interview Preparation",
                            description: "Complete preparation for JavaScript interviews covering core and modern topics.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "Core JS, ES6+, DOM, Async/Await, Closures, Prototypes, React, Node.js",
                            url: "https://codeskipper.in/interview/javascript",
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
            <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaJs className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            JavaScript Interview <span className="text-yellow-500">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your JavaScript interview —
                            from closures and prototypes to async/await, ES6+, and modern frameworks.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaReact /> React &amp; Node
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
                                <div className="text-3xl font-bold text-yellow-600 mb-1">{stat.number}</div>
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
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-yellow-500 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-yellow-600`}
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
                                                    <FaLightbulb className="text-yellow-400 text-xl flex-shrink-0 mt-1" />
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
                            <FaTasks className="text-yellow-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for JavaScript Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Core Concepts</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be solid on closures, prototypes, 'this', and the event loop. These are the most frequently tested topics.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaNodeJs className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Async Patterns</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand promises, async/await, and callbacks. Be ready to handle real-world async scenarios.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaReact className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Framework Knowledge</h3>
                                    <p className="text-gray-600 text-sm">
                                        Basic knowledge of React or Angular is a plus. Know component lifecycle, state, and hooks.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaLaptopCode className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Practice Coding</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be prepared to solve problems on the whiteboard. Practice array methods, object manipulation, and algorithms.
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
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Script Your Interview Success?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all programming languages and tech stacks.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-yellow-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · JavaScript Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default JavaScriptInterview;