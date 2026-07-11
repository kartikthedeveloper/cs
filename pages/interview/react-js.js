import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaReact,
    FaCode,
    FaCogs,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaRocket,
    FaServer,
    FaMobileAlt,
} from "react-icons/fa";

const ReactInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 React JS Interview Questions ──────────────────────────────────────────
    const questions = [
        {
            q: "What is React and what are its key features?",
            a: "React is a declarative, component-based JavaScript library for building user interfaces, developed by Meta. Key features: Virtual DOM for efficient updates, JSX for HTML-like syntax, component-based architecture, unidirectional data flow, hooks for state and lifecycle, and a rich ecosystem. It's used for building single-page applications (SPAs) and mobile apps (React Native).",
        },
        {
            q: "Explain the difference between a component and a pure component.",
            a: "A component re-renders whenever its parent renders or its state/props change. A PureComponent performs a shallow comparison of props and state; if they haven't changed, it skips re-rendering for performance. It's a base class alternative to React.Component. For functional components, use React.memo for similar optimization.",
        },
        {
            q: "What is the difference between state and props in React?",
            a: "Props (short for properties) are read-only data passed from a parent component to a child component. They are immutable. State is mutable data managed within a component, initially set using useState or this.state. Changing state triggers re-renders. Props are passed down; state is internal.",
        },
        {
            q: "Explain the Virtual DOM and how React uses it.",
            a: "The Virtual DOM is a lightweight, in-memory representation of the Real DOM. React creates a virtual tree, compares it with the previous one (diffing), and calculates the minimal changes needed (reconciliation). It then updates only the changed nodes in the Real DOM, minimizing expensive DOM manipulations and improving performance.",
        },
        {
            q: "What are React hooks and why were they introduced?",
            a: "Hooks are functions that let you use state and lifecycle features in functional components, introduced in React 16.8. They replace class components for stateful logic, enabling better code reuse, cleaner components, and simpler testing. Key hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef.",
        },
        {
            q: "Explain the useState hook and how to use it.",
            a: "useState is a hook that lets you add state to functional components. It returns an array with the current state value and a function to update it. Syntax: const [count, setCount] = useState(initialState). Updates trigger a re-render. The updater function can accept a new value or a function based on previous state.",
        },
        {
            q: "Explain the useEffect hook and its common use cases.",
            a: "useEffect handles side effects in functional components. It takes a function and an optional dependency array. It runs after every render by default, or only when dependencies change. Common uses: data fetching, subscriptions, timers, DOM manipulation, and cleaning up with a return function.",
        },
        {
            q: "What is the difference between useEffect and useLayoutEffect?",
            a: "useEffect runs asynchronously after the browser paints, not blocking rendering. useLayoutEffect runs synchronously after DOM mutations but before painting, blocking rendering. UseLayoutEffect is for operations that need to measure the DOM or avoid visual flicker; prefer useEffect for most cases.",
        },
        {
            q: "What is the purpose of the dependency array in useEffect?",
            a: "The dependency array tells React when to re-run the effect. If empty ([]), it runs once after mount. If includes values, it runs when any value changes. If omitted, it runs after every render. Proper dependencies prevent stale closures and infinite loops.",
        },
        {
            q: "Explain the useContext hook and when to use it.",
            a: "useContext consumes a context object created by React.createContext. It allows components to subscribe to context changes without prop drilling. Syntax: const value = useContext(MyContext). Use it for global state like theme, user authentication, or language preferences.",
        },
        {
            q: "What is the useReducer hook and when should you use it?",
            a: "useReducer is an alternative to useState for complex state logic. It accepts a reducer function (state, action) => newState and an initial state. It returns the current state and a dispatch function. Use it when state transitions are complex, involve multiple sub-values, or next state depends on previous state.",
        },
        {
            q: "What is the difference between useCallback and useMemo?",
            a: "useCallback returns a memoized function reference, preventing unnecessary re-creation of functions on each render. useMemo returns a memoized value, recalculating only when dependencies change. Use useCallback for functions passed to child components; useMemo for expensive computations.",
        },
        {
            q: "Explain the useRef hook and its common use cases.",
            a: "useRef returns a mutable ref object whose .current property persists across renders without causing re-renders. Use cases: accessing DOM elements directly (refs), storing mutable values (e.g., interval IDs), preserving previous values, and avoiding re-renders for non-UI data.",
        },
        {
            q: "What is the concept of lifting state up in React?",
            a: "Lifting state up involves moving shared state to the closest common ancestor of components that need it. The parent component manages the state and passes it down via props along with callbacks to update it. This ensures a single source of truth and avoids duplication.",
        },
        {
            q: "Explain the difference between controlled and uncontrolled components.",
            a: "A controlled component's value is controlled by React state, typically using onChange handlers to update state. An uncontrolled component manages its own state internally using the DOM (e.g., using refs). Controlled components are preferred for consistency and validation.",
        },
        {
            q: "What is React Router and how does it work?",
            a: "React Router is a library for declarative routing in React applications. It provides components like BrowserRouter, Routes, Route, Link, and useNavigate. It enables navigation between views without page refresh, using the HTML5 History API or hash-based routing.",
        },
        {
            q: "What is the difference between Link and NavLink in React Router?",
            a: "Link provides navigation without refreshing the page. NavLink is a special version that adds styling attributes (activeClassName) when the current route matches its path. NavLink is useful for navigation menus.",
        },
        {
            q: "Explain how to handle forms in React.",
            a: "Forms in React can be controlled (using state to manage input values) or uncontrolled (using refs). Controlled forms provide better control and validation. Handle form submission with onSubmit, and manage state changes via onChange. For validation, use libraries like Formik or React Hook Form.",
        },
        {
            q: "What is the React Context API and how is it different from props?",
            a: "The Context API allows sharing data across the component tree without prop drilling. It creates a context object with a Provider (supplies value) and Consumer (uses value) or useContext hook. Unlike props, which are passed explicitly, context is implicit and can be accessed by deeply nested components.",
        },
        {
            q: "Explain the difference between React Context and Redux.",
            a: "Context is built-in and suitable for simple global state (theme, language). Redux is a state management library with a predictable state container, middleware, dev tools, and time-travel debugging. Redux is better for complex state, frequent updates, and larger apps. Context can cause unnecessary re-renders; Redux optimizes updates.",
        },
        {
            q: "What are higher-order components (HOCs) and why are they used?",
            a: "A Higher-Order Component is a function that takes a component and returns a new component with enhanced functionality. They are used for code reuse, cross-cutting concerns (like authentication, logging, data fetching). Hooks have largely replaced HOCs, but they are still used in legacy code.",
        },
        {
            q: "Explain the concept of render props in React.",
            a: "Render props is a technique where a component accepts a function as a prop to render content, allowing dynamic rendering. Example: <DataFetcher render={(data) => <Display data={data} />} />. It's an alternative to HOCs for sharing code.",
        },
        {
            q: "What is the difference between a functional component and a class component?",
            a: "Functional components are simpler, use hooks for state and effects, and are preferred in modern React. Class components use this.state, this.setState, lifecycle methods (componentDidMount, etc.), and are still supported but legacy. Functional components have better performance and less boilerplate.",
        },
        {
            q: "Explain the React lifecycle methods (class components).",
            a: "Lifecycle phases: Mounting (constructor, render, componentDidMount), Updating (shouldComponentUpdate, render, componentDidUpdate), Unmounting (componentWillUnmount). Error boundaries: componentDidCatch. Hooks replace these with useEffect, useState, and useLayoutEffect.",
        },
        {
            q: "What is the `key` prop and why is it important in lists?",
            a: "The `key` prop helps React identify which items have changed, added, or removed. It should be a stable, unique identifier for each element in the list. It improves performance by enabling efficient reconciliation. Using indexes as keys is discouraged if the list can reorder.",
        },
        {
            q: "Explain the concept of reconciliation in React.",
            a: "Reconciliation is the process of updating the DOM to match the virtual DOM. React diffing algorithm compares the current virtual DOM with the previous one, determines the minimal set of changes, and applies them efficiently. Keys help with this process.",
        },
        {
            q: "What is the purpose of React's `memo` (React.memo)?",
            a: "React.memo is a higher-order component that memoizes a functional component. It prevents re-rendering if the props have not changed (shallow comparison). It's a performance optimization for components that receive the same props frequently.",
        },
        {
            q: "Explain the `useCallback` and `useMemo` hooks with an example.",
            a: "useCallback returns a memoized function: const handleClick = useCallback(() => { doSomething() }, [deps]). useMemo returns a memoized value: const computed = useMemo(() => expensiveCalc(a,b), [a,b]). Both are used to optimize performance by avoiding unnecessary recalculations/recreations.",
        },
        {
            q: "What is the useImperativeHandle hook and when is it used?",
            a: "useImperativeHandle customizes the instance value exposed when a component uses ref. It's often used with forwardRef to expose imperative methods (like focus) to parent components. Example: useImperativeHandle(ref, () => ({ focus() { input.current.focus(); } })).",
        },
        {
            q: "Explain the concept of error boundaries in React.",
            a: "Error boundaries are React components that catch JavaScript errors in their child component tree, log them, and display a fallback UI. They are implemented as class components with componentDidCatch and getDerivedStateFromError. They do not catch errors in event handlers, asynchronous code, or server-side rendering.",
        },
        {
            q: "What are fragments and why are they used?",
            a: "Fragments (<>...</> or <React.Fragment>) allow grouping a list of children without adding extra nodes to the DOM. They are used to return multiple elements from a component without creating unnecessary wrapper divs, improving performance and avoiding layout issues.",
        },
        {
            q: "Explain the concept of portals in React.",
            a: "Portals allow rendering children into a DOM node outside the parent component's hierarchy, typically for modals, tooltips, or overlays. They are created using ReactDOM.createPortal(child, container). They preserve event bubbling and context.",
        },
        {
            q: "What are refs in React and how do you use them?",
            a: "Refs provide a way to access DOM nodes or React elements directly. They are created with useRef or createRef. Use cases: focusing inputs, measuring DOM size, integrating third-party libraries. Avoid overusing refs for state management.",
        },
        {
            q: "Explain the concept of code splitting in React.",
            a: "Code splitting is a technique to split your JavaScript bundle into smaller chunks that can be loaded on demand, reducing initial load time. In React, use React.lazy (dynamic import) with Suspense to load components lazily. This improves performance.",
        },
        {
            q: "What is the Suspense component and how is it used?",
            a: "Suspense is a React component that displays a fallback UI while waiting for asynchronous data or lazy-loaded components to be ready. Used with React.lazy for code splitting or with data fetching frameworks like Relay or Next.js. Example: <Suspense fallback={<Spinner />}><LazyComponent /></Suspense>.",
        },
        {
            q: "What are the best practices for performance optimization in React?",
            a: "Use React.memo, useCallback, and useMemo to prevent unnecessary re-renders. Implement virtualized lists for large datasets. Avoid anonymous functions in render. Lazy load components. Use production builds. Optimize images and assets. Monitor with React DevTools.",
        },
        {
            q: "Explain the difference between shallow rendering and deep rendering in tests.",
            a: "Shallow rendering (from Enzyme or React Testing Library) renders a component without its children, isolating it for unit testing. Deep rendering (mount) renders the full component tree, useful for integration tests. React Testing Library prefers rendering the full component.",
        },
        {
            q: "What are the common testing libraries for React?",
            a: "Common libraries: React Testing Library (recommended, encourages testing user behavior), Jest (test runner), Enzyme (older, less preferred), Cypress (E2E testing), and React Test Renderer (snapshot testing).",
        },
        {
            q: "What is the difference between React Native and React?",
            a: "React is for building web applications using HTML and CSS. React Native is for building native mobile apps using native components (iOS/Android). Both share the same React concepts, but React Native uses native APIs instead of the DOM.",
        },
        {
            q: "Explain the concept of server-side rendering (SSR) in React.",
            a: "Server-side rendering renders React components on the server and sends the full HTML to the client, improving SEO and initial load performance. It requires frameworks like Next.js or Gatsby. Hydration then attaches event listeners client-side.",
        },
        {
            q: "What is Next.js and how does it relate to React?",
            a: "Next.js is a React framework that provides server-side rendering, static site generation, API routes, file-based routing, and more. It simplifies building production-ready React applications with built-in optimizations and SEO support.",
        },
        {
            q: "Explain the concept of higher-order components (HOCs) vs hooks.",
            a: "HOCs are functions that wrap components to add functionality, while hooks are functions that let you use state and effects. Hooks are simpler, composable, and more flexible. HOCs can cause naming collisions and wrapper hell; hooks avoid these issues.",
        },
        {
            q: "What is the difference between `useEffect` and `useLayoutEffect` in terms of execution?",
            a: "useEffect runs after the browser paint, asynchronously. useLayoutEffect runs synchronously before the browser paints, after DOM mutations. useLayoutEffect can block visual updates, so it's used for operations that need to measure the DOM before painting.",
        },
        {
            q: "Explain the `useDebugValue` hook.",
            a: "useDebugValue is used to display a label for custom hooks in React DevTools. It helps with debugging by providing more context. Example: useDebugValue(value ? 'LoggedIn' : 'LoggedOut').",
        },
        {
            q: "What is the `useTransition` hook in React 18?",
            a: "useTransition is a hook that lets you mark state updates as non-urgent, allowing React to interrupt rendering for more urgent updates. It returns a pending boolean and a startTransition function. Used for improving perceived performance during expensive UI updates.",
        },
        {
            q: "What is the `useDeferredValue` hook in React 18?",
            a: "useDeferredValue returns a deferred version of a value that may lag behind, allowing React to prioritize more urgent updates. It's useful for deferring expensive re-renders while keeping the UI responsive.",
        },
        {
            q: "Explain the concept of React Query (TanStack Query) and its benefits.",
            a: "React Query is a library for managing server state in React. It simplifies data fetching, caching, background updates, and pagination. Benefits: automatic caching, deduplication, retries, and offline support. It reduces boilerplate and improves performance.",
        },
        {
            q: "What are the common anti-patterns in React?",
            a: "Common anti-patterns: using indexes as keys, mutating state directly, passing unnecessary props, not using keys in lists, overusing refs, large components, and not handling loading/error states. Follow best practices to avoid these.",
        },
        {
            q: "Explain the concept of server components in React (React Server Components).",
            a: "React Server Components (RSC) allow rendering components on the server, sending only the UI description to the client. They reduce bundle size, improve performance, and enable direct data access. They are used in frameworks like Next.js 13+.",
        },
        {
            q: "What is the future of React?",
            a: "The future of React includes increased adoption of Server Components and concurrent features, better performance (React Compiler), improved developer experience, and deeper integration with frameworks (Next.js). React continues to evolve with a focus on simplicity and performance.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "React", text: "18+" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ React JS Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your React interview with 50+ expert questions covering components, hooks, state management, performance, patterns, and testing."
                />
                <meta
                    name="keywords"
                    content="React interview questions, React JS, hooks, state management, Redux, Next.js, React testing, components"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#61DAFB" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/react-js" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ React JS Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete React interview prep with 50+ questions covering all key areas: components, hooks, performance, patterns, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/react-js" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ React JS Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for React interviews with 50+ questions covering hooks, state, lifecycle, and performance."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/react-js" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/react-js" />

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
                            description: "Interview preparation platform for React developers.",
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
                                    name: "React JS",
                                    item: "https://codeskipper.in/interview/react-js",
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
                            name: "React Interview Questions",
                            description: "50+ curated React interview questions with detailed answers.",
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
                            name: "React Interview Questions Collection",
                            description: "A comprehensive collection of React interview questions for frontend developers.",
                            url: "https://codeskipper.in/interview/react-js",
                            about: {
                                "@type": "Thing",
                                name: "React Interview Preparation",
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
                            description: "React interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "React, JavaScript, Frontend Development",
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
                            name: "React Interview Preparation",
                            description: "Complete preparation for React interviews covering all key concepts and patterns.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "Components, Hooks, State Management, Performance, Testing, Next.js",
                            url: "https://codeskipper.in/interview/react-js",
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
            <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaReact className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            React JS Interview <span className="text-cyan-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your React interview —
                            from components and hooks to state management, performance, and modern patterns.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCogs /> Hooks &amp; Patterns
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
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold flex-shrink-0 mt-0.5">
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
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for React Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Hooks</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be fluent with useState, useEffect, useContext, useReducer, useCallback, and useMemo. They are the core of modern React.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaCogs className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">State Management</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand Context, Redux, and when to use each. Be ready for real-world scenarios involving complex state.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaServer className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Next.js &amp; SSR</h3>
                                    <p className="text-gray-600 text-sm">
                                        Basic knowledge of Next.js and server-side rendering is a huge plus. Understand how they improve SEO and performance.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaMobileAlt className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Testing &amp; Performance</h3>
                                    <p className="text-gray-600 text-sm">
                                        Know React Testing Library and performance optimization techniques. Demonstrates production readiness.
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
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Ace Your React Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all frontend and full-stack technologies.
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
                            © {new Date().getFullYear()} Code Skipper · React JS Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ReactInterview;