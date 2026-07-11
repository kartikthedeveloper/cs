import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaCode,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaCogs,
    FaRocket,
} from "react-icons/fa";

const MernStackInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 MERN Stack Interview Questions ──────────────────────────────────────
    const questions = [
        {
            q: "What is the MERN stack and what are its components?",
            a: "The MERN stack is a full-stack JavaScript solution for building modern web applications. It consists of: MongoDB (NoSQL database for storing data), Express.js (back-end framework for building APIs and handling routes), React (front-end library for building user interfaces), and Node.js (JavaScript runtime for executing server-side code). Together they provide an end-to-end JavaScript development environment.",
        },
        {
            q: "Why is MongoDB used in the MERN stack?",
            a: "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents. It's a natural fit for the MERN stack because it works seamlessly with JavaScript (JSON) and Node.js. Its schema-less design allows rapid iteration, horizontal scaling, and efficient handling of complex, nested data structures typical of modern applications.",
        },
        {
            q: "Explain the difference between SQL and NoSQL databases.",
            a: "SQL databases are relational, use structured schemas, and support joins and ACID transactions. They are table-based and use structured query language. NoSQL databases (like MongoDB) are non-relational, schema-flexible, and store data in various formats (document, key-value, graph). They prioritize scalability, performance, and flexibility over strict consistency.",
        },
        {
            q: "What are collections and documents in MongoDB?",
            a: "A collection in MongoDB is a group of documents, similar to a table in SQL. A document is a set of key-value pairs, stored in BSON format (binary JSON). Documents within a collection can have different fields, providing schema flexibility. Each document is uniquely identified by the '_id' field, which is automatically generated if not provided.",
        },
        {
            q: "How do you connect to MongoDB from a Node.js application?",
            a: "Use the official MongoDB driver or Mongoose (an ODM library). Example: const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });. Mongoose provides schema-based modeling, validation, and middleware.",
        },
        {
            q: "Explain the role of Mongoose in the MERN stack.",
            a: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a schema-based solution to model data, enforce structure, validate inputs, and define relationships. It includes features like middleware (pre/post hooks), virtuals, and population (referencing other documents). It bridges the gap between MongoDB's flexible nature and structured application needs.",
        },
        {
            q: "What are Express.js middleware functions and how are they used?",
            a: "Middleware functions are functions that have access to the request (req) and response (res) objects and the next middleware in the application's request-response cycle. They can execute code, modify req/res, end the cycle, or call next(). Examples: logging, authentication, parsing request bodies (express.json(), express.urlencoded()).",
        },
        {
            q: "What is the purpose of `express.Router()`?",
            a: "express.Router() creates modular, mountable route handlers. It allows you to group related routes (e.g., /users, /products) in separate files and mount them with a base path using app.use(). This improves code organization and maintainability.",
        },
        {
            q: "Explain how to handle errors in Express.js.",
            a: "Error handling middleware has four parameters: (err, req, res, next). Define it after all routes. Example: app.use((err, req, res, next) => { res.status(500).json({ error: err.message }); });. Use try-catch blocks or async middleware (express-async-errors) to capture errors from async operations.",
        },
        {
            q: "What is CORS and how do you enable it in Express?",
            a: "CORS (Cross-Origin Resource Sharing) is a security mechanism that restricts cross-origin requests. In Express, use the 'cors' middleware: const cors = require('cors'); app.use(cors());. Configure options to allow specific origins, methods, or credentials.",
        },
        {
            q: "What is the difference between PUT, PATCH, and POST in REST APIs?",
            a: "POST creates a new resource. PUT updates an existing resource completely (replaces the entire entity). PATCH applies partial updates to a resource. PUT is idempotent; PATCH is not necessarily. In practice, PUT is often used for full replacement, PATCH for partial updates.",
        },
        {
            q: "Explain the concept of RESTful APIs.",
            a: "REST (Representational State Transfer) is an architectural style for designing networked applications. It uses stateless, client-server communication over HTTP. Resources are identified by URLs and manipulated using standard HTTP methods (GET, POST, PUT, DELETE). Responses are typically in JSON or XML. RESTful APIs are simple, scalable, and language-agnostic.",
        },
        {
            q: "What is JWT (JSON Web Token) and how is it used in MERN applications?",
            a: "JWT is a compact, URL-safe token format used for authentication and authorization. It consists of a header, payload, and signature. In a MERN app, the server generates a JWT upon login and sends it to the client. The client stores it (in localStorage or cookies) and sends it in the Authorization header for subsequent requests. The server verifies the token's signature to authenticate the user.",
        },
        {
            q: "How do you handle authentication in React with JWT?",
            a: "Store the JWT in localStorage or sessionStorage (or httpOnly cookies for enhanced security). Include it in the Authorization header of axios/fetch requests: `Authorization: Bearer <token>`. Protect routes using React Router (e.g., PrivateRoute component) that checks if the token exists and is valid. Manage authentication state with Context API or Redux.",
        },
        {
            q: "Explain the difference between cookies and localStorage.",
            a: "Cookies are small pieces of data sent with every HTTP request, limited to ~4KB, and can be set with expiration and security flags (HttpOnly, Secure). localStorage stores larger data (up to ~5MB) and persists across sessions; data is not sent with requests. For authentication, cookies with HttpOnly flag are more secure, while localStorage is commonly used for JWTs.",
        },
        {
            q: "What is the React Virtual DOM and how does it work?",
            a: "The Virtual DOM is a lightweight in-memory representation of the actual DOM. When state changes, React creates a new virtual DOM tree, compares it with the previous one (diffing), and efficiently updates only the changed nodes in the real DOM (reconciliation). This minimizes expensive DOM manipulations and improves performance.",
        },
        {
            q: "Explain the difference between state and props in React.",
            a: "Props (properties) are read-only data passed from parent to child components. State is mutable data managed within a component. State changes trigger re-renders. Props are passed down; state is internal. Both are used to manage data and drive UI updates.",
        },
        {
            q: "What are React hooks and why are they used?",
            a: "Hooks are functions that allow functional components to use state and lifecycle features that were previously only available in class components. They enable code reuse, better logic composition, and cleaner components. Key hooks: useState (state), useEffect (side effects), useContext (context), useReducer (complex state).",
        },
        {
            q: "Explain the useEffect hook and its dependencies.",
            a: "useEffect runs side effects in functional components. It takes a function and an optional dependency array. The effect runs after every render by default. If a dependency array is provided, the effect runs only when those dependencies change. An empty array [] runs once after mount. Return a cleanup function to cancel subscriptions.",
        },
        {
            q: "What is the Context API in React and when would you use it?",
            a: "The Context API provides a way to pass data through the component tree without prop drilling. It creates a context object (React.createContext) with a Provider (supplies value) and Consumer (uses value) or useContext hook. It's ideal for global state like theme, user authentication, or language preferences.",
        },
        {
            q: "Compare Redux and Context API for state management.",
            a: "Context API is simpler, built-in, and suitable for small to medium apps with limited state updates. Redux provides a predictable state container with middleware (thunk, saga), dev tools, and time-travel debugging. It's better for complex state logic, frequent updates, and larger applications. Context alone can cause unnecessary re-renders; Redux optimizes updates.",
        },
        {
            q: "Explain the React component lifecycle (class components).",
            a: "Lifecycle phases: Mounting (constructor, render, componentDidMount), Updating (render, componentDidUpdate), Unmounting (componentWillUnmount). Hooks replace these: useEffect handles side effects, useState for local state, and useLayoutEffect for synchronous updates.",
        },
        {
            q: "What is React Router and how does it work?",
            a: "React Router is a library for declarative routing in React applications. It provides components like BrowserRouter, Routes, Route, Link, and useNavigate (or useHistory). It enables navigation between different views without refreshing the page, using the HTML5 History API or hash-based routing.",
        },
        {
            q: "Explain the difference between client-side and server-side rendering.",
            a: "Client-side rendering (CSR) renders the application in the browser using JavaScript. The server sends a minimal HTML shell; JavaScript then fetches data and renders content. Server-side rendering (SSR) renders the full HTML on the server and sends it to the client, improving SEO and initial load performance. Next.js supports both.",
        },
        {
            q: "What is Node.js and how does its event loop work?",
            a: "Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications. It uses a non-blocking, event-driven architecture. The event loop handles asynchronous operations by offloading them to the system kernel (or libuv) and executing callbacks when the operations complete. It allows handling many concurrent connections on a single thread.",
        },
        {
            q: "Explain the difference between `require()` and `import` in Node.js.",
            a: "require() is the CommonJS module system, synchronous, and used in Node.js by default. import is the ES6 module syntax, asynchronous, and supported in Node.js with .mjs extension or 'type: module' in package.json. import enables static analysis and tree-shaking, and is the standard for modern JavaScript.",
        },
        {
            q: "What are streams in Node.js and their use cases?",
            a: "Streams are objects that allow reading/writing data continuously in chunks, without loading the entire data into memory. Types: Readable (reading), Writable (writing), Duplex (read/write), Transform (modify data). Use cases: processing large files, handling network requests, and real-time data (e.g., video streaming).",
        },
        {
            q: "Explain the `fs` module in Node.js with examples.",
            a: "The `fs` module provides file system operations. Synchronous: fs.readFileSync, fs.writeFileSync. Asynchronous (callback): fs.readFile, fs.writeFile. Promise-based: fs.promises.readFile, fs.promises.writeFile. Also includes methods for directories, stats, and permissions. Example: const data = fs.readFileSync('file.txt', 'utf8');.",
        },
        {
            q: "What is the `package.json` file and what does it contain?",
            a: "package.json is the manifest file for Node.js projects. It contains metadata: name, version, description, author, dependencies (production and dev), scripts (e.g., start, test), and configuration options. It defines the project's dependencies and commands for running, building, and testing the application.",
        },
        {
            q: "How do you handle environment variables in a Node.js application?",
            a: "Use the `dotenv` package to load environment variables from a .env file into process.env. Example: require('dotenv').config(); then access via process.env.PORT. Use different .env files for development, staging, and production. Keep sensitive variables (database credentials, JWT secrets) out of source control.",
        },
        {
            q: "Explain the concept of middleware in the context of Express and Node.js.",
            a: "Middleware are functions that execute during the request-response cycle. They can perform tasks like authentication, logging, parsing, and error handling. They have access to req, res, and next. They either end the cycle (send response) or call next() to pass control to the next middleware. They are the backbone of Express applications.",
        },
        {
            q: "What is the difference between `process.nextTick()` and `setImmediate()`?",
            a: "process.nextTick() schedules a callback to be executed on the next iteration of the event loop, before any I/O operations or timers. setImmediate() schedules a callback to be executed in the 'check' phase of the event loop, after I/O events. nextTick has higher priority and can lead to starvation if used excessively.",
        },
        {
            q: "Explain the concept of event emitters in Node.js.",
            a: "EventEmitter is a class from the 'events' module that allows objects to emit and listen to events. It is used in many core modules (e.g., HTTP, FS, Streams). Methods: on (add listener), emit (trigger event), once (one-time listener), removeListener. Custom event emitters can be created for decoupled communication.",
        },
        {
            q: "What are common security best practices for a MERN application?",
            a: "Use HTTPS, sanitize user input (helmet.js, express-validator), avoid SQL/NoSQL injection (use Mongoose schema validation), implement rate limiting (express-rate-limit), use JWT with expiration and secure HTTP-only cookies, store passwords hashed (bcrypt), protect against XSS (React's safe rendering), and CSRF (use anti-CSRF tokens or SameSite cookies).",
        },
        {
            q: "How do you deploy a MERN application to production?",
            a: "Build the React app (npm run build) and serve the static files via Express or a separate web server (Nginx). For the back-end, host on platforms like Heroku, AWS Elastic Beanstalk, or DigitalOcean. Use environment variables for production settings. Set up a process manager (PM2) to keep the Node.js server running. Use MongoDB Atlas for database. Implement CI/CD pipelines.",
        },
        {
            q: "Explain the purpose of `.env` files and how to use them.",
            a: ".env files store environment-specific configuration (keys, URLs, ports). They keep secrets out of source code. In Node.js, load them with dotenv (require('dotenv').config()). In React, use REACT_APP_ prefixed variables (create-react-app) and access via process.env. Use different .env files for different environments.",
        },
        {
            q: "What is the difference between MongoDB aggregation and querying?",
            a: "Querying (find, findOne) retrieves documents based on filters and projections. Aggregation (aggregate pipeline) processes data through multiple stages (match, group, sort, project, lookup) to perform complex transformations, calculations, and data analysis. Aggregation is more powerful for analytics and reporting.",
        },
        {
            q: "Explain the concept of indexing in MongoDB.",
            a: "Indexes are data structures that improve query performance by reducing the amount of data MongoDB must scan. They can be created on single fields, compound fields, or geospatial fields. Use createIndex() method. Indexes add overhead for write operations, so choose wisely. Use explain() to analyze query performance.",
        },
        {
            q: "What is the difference between embedded documents and referencing in MongoDB?",
            a: "Embedded documents are nested sub-documents within a parent document (denormalization). They are good for one-to-many where the many are always accessed with the parent (e.g., comments in a blog post). Referencing uses separate collections with foreign keys (normalization). It's useful for many-to-many or when sub-documents are accessed independently.",
        },
        {
            q: "Explain the `populate` method in Mongoose.",
            a: "populate is used to automatically replace a field containing an ObjectId with the actual document from another collection. It's Mongoose's way of handling relational queries. Example: User.find().populate('posts').exec();. It reduces the need for manual joins and works well with referencing.",
        },
        {
            q: "What is the purpose of the `useEffect` cleanup function?",
            a: "The cleanup function returned from useEffect runs before the component unmounts and before subsequent effects. It is used to cancel subscriptions, clear timers, remove event listeners, or abort fetch requests to prevent memory leaks and unintended updates.",
        },
        {
            q: "How do you optimize React performance in a MERN app?",
            a: "Use React.memo for component memoization, useCallback and useMemo for functions and values, avoid anonymous functions in render, implement virtualization for large lists (react-window), lazy load routes (React.lazy, Suspense), optimize images and assets, and use the production build. Monitor using React DevTools.",
        },
        {
            q: "What is the role of `useReducer` in React?",
            a: "useReducer is an alternative to useState for managing complex state logic. It accepts a reducer function (state, action) => newState and an initial state. It returns the current state and a dispatch function. It is useful when state transitions are complex, involve multiple sub-values, or next state depends on previous state.",
        },
      {
    q: "Explain the concept of \"lifting state up\" in React.",
    a: "Lifting state up means moving shared state to the nearest common ancestor of components that need it. The parent component manages the state and passes it down via props along with callbacks to update it. This ensures a single source of truth and avoids duplication.",
},
        {
            q: "What is the difference between a controlled and uncontrolled component?",
            a: "A controlled component's value is controlled by React state (e.g., <input value={value} onChange={...} />). An uncontrolled component manages its own internal state using the DOM (e.g., using refs). Controlled components are preferred because they provide better control and validation.",
        },
        {
            q: "What is `React.memo` and when should you use it?",
            a: "React.memo is a higher-order component that memoizes a functional component. It prevents re-rendering if the props have not changed (shallow comparison). Use it for components that receive the same props frequently and are expensive to render. Overuse can hurt performance, so use judiciously.",
        },
        {
            q: "Explain the `useRef` hook and its use cases.",
            a: "useRef returns a mutable ref object whose .current property persists across renders. It does not cause re-renders when updated. Use cases: accessing DOM elements directly, storing mutable values (e.g., interval IDs), and keeping previous values without triggering re-renders.",
        },
        {
            q: "What are the best practices for handling errors in a MERN application?",
            a: "Use try-catch with async/await, global error handling middleware in Express, and error boundaries in React to catch UI errors. Return meaningful error messages to the client. Log errors for debugging (winston, morgan). Validate inputs both client and server-side.",
        },
        {
            q: "What are the different ways to manage state in a React application?",
            a: "Local component state (useState), Context API for global state, Redux for complex state, Zustand or MobX as alternatives. Server state can be managed with React Query or SWR. Choose based on application size, complexity, and team preference.",
        },
        {
            q: "Explain the concept of hydration in the context of Next.js or SSR.",
            a: "Hydration is the process where the client-side React code attaches event listeners to the static HTML generated by SSR. It reconciles the server-rendered HTML with the client-side virtual DOM, making the page interactive. It's a key step for hybrid applications using Next.js.",
        },
        {
            q: "What are some common pitfalls when building a MERN application and how to avoid them?",
            a: "Common pitfalls: not handling CORS properly, storing sensitive data in localStorage, not validating data on the server, exposing API keys, not using environment variables, over-fetching data, and not implementing proper error handling. Avoid by following security best practices, using environment variables, validating inputs, and implementing proper error boundaries.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "4", text: "MongoDB, Express, React, Node" },
        { number: "Full Stack", text: "MERN Development" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ MERN Stack Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your MERN Stack interview with 50+ expert questions covering MongoDB, Express.js, React, Node.js, authentication, and full-stack development."
                />
                <meta
                    name="keywords"
                    content="MERN Stack interview questions, MongoDB, Express, React, Node.js, full-stack developer, JWT, REST API, React hooks"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#61DAFB" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/mern-stack" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ MERN Stack Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete MERN Stack interview prep with 50+ questions covering MongoDB, Express, React, Node, and full-stack architecture."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/mern-stack" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ MERN Stack Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for MERN Stack interviews with 50+ questions covering MongoDB, Express, React, and Node.js."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/mern-stack" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/mern-stack" />

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
                            description: "Interview preparation platform for full-stack developers.",
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
                                    name: "MERN Stack",
                                    item: "https://codeskipper.in/interview/mern-stack",
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
                            name: "MERN Stack Interview Questions",
                            description: "50+ curated MERN Stack interview questions with detailed answers.",
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
                            name: "MERN Stack Interview Questions Collection",
                            description: "A comprehensive collection of MERN Stack interview questions for full-stack developers.",
                            url: "https://codeskipper.in/interview/mern-stack",
                            about: {
                                "@type": "Thing",
                                name: "MERN Stack Interview Preparation",
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
                            description: "MERN Stack interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "MERN Stack, Full-Stack Web Development",
                            educationalLevel: "Intermediate to Advanced",
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
                            name: "MERN Stack Interview Preparation",
                            description: "Complete preparation for MERN Stack interviews covering all components.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "MongoDB, Express.js, React, Node.js, Authentication, REST APIs, Deployment",
                            url: "https://codeskipper.in/interview/mern-stack",
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
            <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaReact className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            MERN Stack <span className="text-cyan-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your MERN Stack interview —
                            from MongoDB and Express.js to React, Node.js, and full-stack architecture.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCogs /> Full Stack
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
                                <div className="text-3xl font-bold text-cyan-600 mb-1">{stat.number}</div>
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
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-600 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-cyan-500 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-cyan-600`}
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
                                                    <FaLightbulb className="text-cyan-400 text-xl flex-shrink-0 mt-1" />
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
                            <FaRocket className="text-cyan-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for MERN Stack Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaDatabase className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master MongoDB &amp; Mongoose</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand document modeling, aggregation, indexing, and Mongoose relationships (populate).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaServer className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Express &amp; REST APIs</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be ready to design RESTful endpoints, use middleware, and handle errors. Understand CORS and JWT.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaReact className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Deep React Knowledge</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be strong on hooks, context, state management, component lifecycle, and performance optimization.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaNodeJs className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Node.js &amp; Full Stack Integration</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand the event loop, file system, streams, environment variables, and deployment strategies.
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
                        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Stack Your Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all technology stacks.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-cyan-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · MERN Stack Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MernStackInterview;