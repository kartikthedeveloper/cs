import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaHtml5,
    FaCode,
    FaLaptop,
    FaMobile,
    FaSearch,
    FaRocket,
    FaCheckCircle,
    FaGraduationCap,
    FaUsers,
    FaShieldAlt,
    FaGlobe,
    FaClock,
    FaArrowRight,
    FaBookOpen,
    FaLightbulb,
} from "react-icons/fa";

const HtmlInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 HTML Interview Questions (Continuous) ──────────────────────────────
    const questions = [
        {
            q: "What is HTML and what role does it play in web development?",
            a: "HTML (HyperText Markup Language) is the foundational markup language used to structure content on the web. It acts as the skeleton of every webpage, defining elements like headings, paragraphs, images, links, forms, and multimedia. While CSS handles visual styling and JavaScript adds interactivity, HTML provides the essential semantic structure that browsers interpret to render pages correctly. Without HTML, the web as we know it would not exist—it's the bedrock upon which all web experiences are built.",
        },
        {
            q: "What is the difference between HTML elements and HTML tags?",
            a: "HTML tags are the angle-bracketed markers that define the start and end of an element—for example, <p> and </p>. An HTML element, however, is the complete unit that includes the opening tag, the content inside, and the closing tag. For instance, <p>Hello World</p> is a paragraph element. The tag is just the markup syntax; the element is the actual rendered component on the page.",
        },
        {
            q: "What are HTML attributes and can you give some common examples?",
            a: "Attributes are special modifiers added to HTML opening tags that provide additional information about the element. They typically come in name-value pairs like key='value'. Common attributes include: id (unique identifier), class (CSS styling hook), src (image source URL), href (link destination), alt (alternative text for images), title (tooltip text), style (inline CSS), and data-* (custom data storage). Attributes help control behavior, appearance, and semantics of elements.",
        },
        {
            q: "What is the purpose of the DOCTYPE declaration in HTML?",
            a: "The DOCTYPE declaration (<!DOCTYPE html>) is an instruction to the browser about which version of HTML the page is written in. In modern web development, it triggers standards mode, ensuring consistent and predictable rendering across different browsers. Without it, browsers may fall back to quirks mode, which emulates old browser behaviors and can lead to layout inconsistencies. It's not an HTML tag but a preamble that must appear at the very top of every HTML document.",
        },
        {
            q: "Explain the difference between <div> and <span> elements.",
            a: "<div> and <span> are both container elements but serve fundamentally different purposes. <div> is a block-level element that creates a new line break and is used to group larger sections of content for layout and styling. <span> is an inline element that flows within text without breaking the line, ideal for styling or manipulating small portions of content—like changing the color of a single word within a paragraph. Use <div> for structural grouping and <span> for inline styling.",
        },
        {
            q: "What are semantic HTML elements and why do they matter?",
            a: "Semantic HTML elements clearly describe their meaning and purpose to both browsers and developers. Examples include <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer>. They matter because they: 1) Improve accessibility by helping screen readers understand page structure, 2) Boost SEO by giving search engines better context about content, 3) Make code more readable and maintainable, and 4) Provide native browser behaviors like keyboard navigation for interactive elements.",
        },
        {
            q: "How does a browser process an HTML document from start to finish?",
            a: "Browser processing follows the critical rendering path: 1) Parsing HTML to build the DOM (Document Object Model) tree, 2) Parsing CSS to build the CSSOM (CSS Object Model), 3) Combining DOM and CSSOM to form the Render Tree, 4) Calculating layout (position and size of each element), 5) Painting pixels to the screen, and 6) Compositing layers for final display. This pipeline determines page load performance, making it crucial to optimize each step.",
        },
        {
            q: "What is the difference between <ul> and <ol> elements?",
            a: "<ul> (unordered list) creates a bulleted list where item order is not significant—perfect for feature lists or navigation menus. <ol> (ordered list) creates a numbered list where sequence matters, like step-by-step instructions or rankings. Both use <li> for individual list items. The visual difference is stylistic, but the semantic difference is important for accessibility and SEO—choose based on whether order conveys meaning.",
        },
        {
            q: "How do you create a hyperlink in HTML and what are the different types?",
            a: "Hyperlinks are created using the <a> anchor tag with the href attribute: <a href='https://example.com'>Link Text</a>. Types include: external links (to other websites), internal links (to other pages on your site), anchor links (to specific sections within the same page using #id), email links (mailto:), telephone links (tel:), and download links (download attribute). Each serves a specific user intent and should be used appropriately.",
        },
        {
            q: "Why is the alt attribute important for images?",
            a: "The alt attribute provides alternative text for images when they cannot be displayed or accessed. Its importance is threefold: 1) Accessibility—screen readers read alt text to visually impaired users, 2) SEO—search engines use it to understand image content, 3) User experience—it appears when images fail to load, preventing broken visual experiences. It's also a legal requirement under web accessibility standards (WCAG).",
        },
        {
            q: "What's the difference between <b> and <strong> tags?",
            a: "Both render text in bold visually, but semantically they are distinct. <b> is purely presentational—it makes text bold without conveying importance. <strong> indicates that the text has strong importance, urgency, or seriousness, and screen readers often emphasize it with a change in tone or pitch. Similarly, <i> is stylistic italic, while <em> indicates emphasized content. Always prefer semantic tags for accessibility and meaning.",
        },
        {
            q: "What are void elements in HTML and can you name some?",
            a: "Void elements are HTML elements that cannot contain any content and do not require a closing tag. They are self-contained and self-closing. Common void elements include: <img>, <br>, <hr>, <input>, <meta>, <link>, <source>, <area>, <base>, <col>, <embed>, <keygen>, <param>, and <track>. In HTML5, the trailing slash is optional (<br> vs <br/>), though it's required in XHTML for validation.",
        },
        {
            q: "How do you create a table in HTML?",
            a: "HTML tables are built using a structured hierarchy: <table> as the container, <tr> for table rows, <th> for header cells, and <td> for data cells. Additional elements include <thead> for grouping header rows, <tbody> for main content, <tfoot> for footer rows, and <caption> for a descriptive title. Modern best practices discourage using tables for layout—reserve them strictly for tabular data to maintain semantic integrity.",
        },
        {
            q: "What is the purpose of the <form> element and how does it work?",
            a: "The <form> element creates an interactive region for collecting user input and submitting it to a server for processing. Key attributes include: action (the URL to send data to), method (GET or POST), enctype (encoding type, especially for file uploads), and target (where to display the response). Forms contain input elements like <input>, <textarea>, <select>, and <button>, and can be validated both client-side and server-side.",
        },
        {
            q: "What are the different types of <input> elements available in HTML?",
            a: "HTML offers a rich variety of input types: text (single-line text), password (masked input), email (email validation), number (numeric input with step controls), date (date picker), checkbox (multiple selection), radio (single selection), file (file upload), submit (form submission), button (custom click handler), hidden (invisible data), color (color picker), range (slider), url (URL validation), tel (telephone number), and search (search field with clear button). HTML5 introduced many of these, reducing the need for JavaScript validation.",
        },
        {
            q: "What does a proper HTML5 document structure look like?",
            a: "A modern HTML5 document uses semantic elements for clarity and accessibility: <!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Page Title</title></head><body><header><nav>...</nav></header><main><article><section>...</section></article><aside>...</aside></main><footer>...</footer></body></html>. This structure improves SEO, accessibility, and maintainability by clearly defining content roles.",
        },
        {
            q: "What are data-* attributes and how are they used?",
            a: "Data-* attributes allow developers to store custom data directly within HTML elements without affecting presentation. They're accessed via JavaScript using element.dataset.property or element.getAttribute('data-property'), and can be styled with CSS attribute selectors. For example: <div data-user-id='123' data-role='admin'>. They're perfect for passing data to JavaScript, enabling dynamic behavior without server round-trips.",
        },
        {
            q: "Compare localStorage, sessionStorage, and cookies.",
            a: "localStorage persists indefinitely (until cleared) with ~5-10MB storage, making it ideal for long-term client data. sessionStorage lasts only for the current browser session (~5-10MB), clearing when the tab closes. Cookies have a tiny 4KB limit, are sent with every HTTP request (affecting performance), and can have expiration dates. Use localStorage for persistent client data, sessionStorage for temporary session data, and cookies for server-side authentication and tracking.",
        },
        {
            q: "What is the viewport meta tag and why is it critical for responsive design?",
            a: "The viewport meta tag (<meta name='viewport' content='width=device-width, initial-scale=1.0'>) controls how web pages are displayed on mobile devices. Without it, mobile browsers render pages at desktop widths (typically 980px) and scale them down, making text tiny and unusable. This tag ensures the page width matches the device width and sets the initial zoom level—it's the foundation of responsive web design, enabling fluid layouts and touch-friendly interactions.",
        },
        {
            q: "How can HTML be optimized for better SEO?",
            a: "Key HTML SEO optimizations include: 1) Using semantic elements (<header>, <main>, <article>, etc.) for clear content hierarchy, 2) Crafting unique, descriptive <title> tags (50-60 chars), 3) Writing compelling <meta description> tags (150-160 chars), 4) Using heading tags (<h1> to <h6>) in hierarchical order, 5) Providing alt text for all images, 6) Creating clean, descriptive URL structures, 7) Implementing schema markup (JSON-LD), 8) Ensuring mobile-friendliness, 9) Using canonical tags to prevent duplicate content, and 10) Generating XML sitemaps.",
        },
        {
            q: "What is the difference between async and defer attributes in <script> tags?",
            a: "Both async and defer allow scripts to load without blocking HTML parsing, but they execute differently. async scripts execute immediately after download, potentially out of order—ideal for independent scripts like analytics. defer scripts execute in the order they appear, after HTML parsing completes but before DOMContentLoaded—perfect for scripts that depend on DOM structure. Use async for non-critical, independent scripts and defer for DOM-dependent scripts.",
        },
        {
            q: "What are Web Workers and when should you use them?",
            a: "Web Workers are JavaScript threads that run in the background, separate from the main UI thread. They prevent blocking and freezing during heavy computations. Workers cannot directly manipulate the DOM but communicate via postMessage. Use Web Workers for: image processing, large data calculations, cryptographic operations, syntax highlighting, or any CPU-intensive task that would otherwise degrade user experience.",
        },
        {
            q: "What is the difference between GET and POST methods in HTML forms?",
            a: "GET appends form data to the URL as query parameters, has size limitations (~2KB), is cached by browsers, and should be used for safe, idempotent operations like searches. POST sends data in the request body, has no practical size limit, is not cached, and should be used for operations that modify server state—like creating, updating, or deleting data. GET is bookmarkable and shareable; POST is not.",
        },
        {
            q: "How do you implement responsive images in HTML5?",
            a: "Responsive images are implemented using the <picture> element with multiple <source> elements for art direction (different crops for different screen sizes), and srcset/sizes attributes for resolution switching. Example: <picture><source media='(min-width: 800px)' srcset='large.jpg'><source media='(min-width: 400px)' srcset='medium.jpg'><img src='small.jpg' alt='description' srcset='small.jpg 400w, large.jpg 800w' sizes='(max-width:600px) 400px, 800px'></picture>. This ensures optimal image delivery for every device, improving performance and user experience.",
        },
        {
            q: "What are ARIA attributes and why are they important?",
            a: "ARIA (Accessible Rich Internet Applications) attributes bridge the gap when semantic HTML isn't sufficient, making dynamic and complex UI components accessible. Key attributes include: aria-label (element description), aria-hidden (hide from screen readers), aria-expanded (toggle state), aria-required (required form field), and role (define element purpose). They're essential for custom widgets, JavaScript-enhanced interfaces, and ensuring compliance with accessibility standards (WCAG).",
        },
        {
            q: "What is the <canvas> element and what is it used for?",
            a: "<canvas> is a drawing surface that enables dynamic, scriptable rendering of 2D and 3D graphics using JavaScript. It's resolution-dependent and ideal for: data visualization (charts, graphs), photo manipulation, game development, real-time video processing, and generative art. Use getContext('2d') for 2D graphics or getContext('webgl') for 3D. Unlike SVG (vector-based, DOM-managed), canvas is bitmap-based and requires manual rendering—offering better performance for complex animations.",
        },
        {
            q: "Compare <iframe> and <object> elements.",
            a: "<iframe> embeds another HTML document within the current page, commonly used for videos, maps, or external content. <object> is more versatile, embedding PDFs, Flash, images, or other resources. <iframe> is better for full HTML documents, while <object> supports a wider range of media types. Both pose security risks—use sandbox attributes for <iframe> and validate embedded content to prevent XSS attacks.",
        },
        {
            q: "How do you build accessible forms in HTML?",
            a: "Accessible forms require: 1) <label> with for attribute matching input id for clear associations, 2) Grouping related inputs with <fieldset> and <legend>, 3) Clear error messages with aria-describedby, 4) Proper tab order via tabindex, 5) required and aria-required for mandatory fields, 6) autocomplete for user convenience, 7) Appropriate input types for mobile keyboards, 8) Sufficient color contrast, and 9) Testing with screen readers. Accessibility isn't optional—it's a legal and ethical requirement.",
        },
        {
            q: "What is the purpose of the <template> element?",
            a: "<template> holds HTML fragments that are not rendered immediately but can be instantiated later via JavaScript. The content is inert—scripts don't run, images don't load, and it's invisible. It's perfect for: reusable component templates, client-side rendering, and dynamic content generation. Use template.content.cloneNode(true) to activate and insert the template. This pattern powers many modern UI frameworks and Web Components.",
        },
        {
            q: "Explain physical vs. logical tags in HTML.",
            a: "Physical tags define visual appearance regardless of context—like <b> for bold and <i> for italic. Logical tags convey meaning and let browsers decide presentation based on context—like <strong> for importance and <em> for emphasis. Modern best practices favor logical tags for better accessibility, SEO, and separation of concerns. CSS handles presentation while HTML handles semantics, ensuring content remains meaningful across all devices and user agents.",
        },
        {
            q: "What is the Shadow DOM and how is it used?",
            a: "Shadow DOM is a browser technology that enables encapsulation for HTML and CSS. It allows hidden DOM trees to be attached to elements in the regular DOM, providing style and markup isolation. This is fundamental to Web Components—building reusable, framework-agnostic components with encapsulated styles and behavior. Practical applications include: widget libraries, complex UI elements, and component-based architectures that don't leak styles to the global scope.",
        },
        {
            q: "What is the Accessibility Tree and how does HTML shape it?",
            a: "The Accessibility Tree is a modified version of the DOM that assistive technologies (screen readers) use to navigate and interpret content. HTML shapes it through: semantic elements (<nav>, <button>), ARIA attributes (aria-label, role), proper heading hierarchy, form labels, alt text for images, and keyboard navigation support. Well-structured HTML automatically creates a rich Accessibility Tree, while poor HTML requires extensive ARIA attributes to compensate.",
        },
        {
            q: "How do you implement lazy loading for images and iframes?",
            a: "Native lazy loading uses the loading attribute: <img src='image.jpg' loading='lazy' alt='description'>. For broader support, use the Intersection Observer API: const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; observer.unobserve(img); } }); }); document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img)). Lazy loading significantly improves initial page load performance by deferring off-screen resources.",
        },
        {
            q: "Explain the Critical Rendering Path and how to optimize it.",
            a: "The Critical Rendering Path is the sequence of steps browsers take to render content: 1) DOM construction, 2) CSSOM construction, 3) Render Tree formation, 4) Layout calculation, and 5) Paint. Optimization strategies include: minimizing render-blocking CSS/JS, leveraging browser caching, compressing resources, using efficient CSS selectors, minimizing DOM depth, implementing code splitting, and using CSS containment for complex layouts. Each optimization reduces time to first paint.",
        },
        {
            q: "What are HTML Web Components and how are they different from framework components?",
            a: "HTML Web Components are custom elements built using native Web Standards: Custom Elements, Shadow DOM, and HTML Templates. Unlike framework components (React, Vue, Angular), they're browser-native, framework-agnostic, and offer better performance and interoperability. They enable true encapsulation and reusability across different projects and frameworks, though they lack the rich ecosystem and developer tooling of popular frameworks.",
        },
        {
            q: "How do you implement real-time communication in HTML5?",
            a: "HTML5 provides several real-time communication APIs: WebSockets for full-duplex communication (ideal for chat, gaming, live feeds), Server-Sent Events (SSE) for one-way server-to-client updates (news feeds, notifications), and WebRTC for peer-to-peer audio/video communication and data channels. Choose based on requirements: WebSockets for interactive apps, SSE for live updates, and WebRTC for media streaming and P2P data sharing.",
        },
        {
            q: "What is the difference between repaint and reflow in browser rendering?",
            a: "Repaint occurs when visual changes happen that don't affect layout—like changing color or visibility. Reflow (or layout) happens when changes affect element geometry and position, forcing the browser to recalculate layout. Reflow is significantly more expensive and can trigger additional reflows in child and parent elements. Optimize by: batching DOM changes, using transform/opacity for animations (they don't trigger reflow), and avoiding forced synchronous layouts in JavaScript.",
        },
        {
            q: "What is the Microdata specification and how is it used?",
            a: "Microdata is an HTML5 specification for embedding structured metadata within content using itemscope, itemtype, and itemprop attributes. It helps search engines understand page content and enables rich snippets in search results. Example: <div itemscope itemtype='http://schema.org/Person'><span itemprop='name'>John Doe</span></div>. This structured data improves SEO and drives higher click-through rates by providing rich, context-rich search results.",
        },
        {
            q: "How do you implement offline functionality with HTML5?",
            a: "Use Service Workers for modern offline functionality—they act as a proxy between the app and network, enabling offline access, background sync, and push notifications. Implementation: 1) Register the service worker, 2) Install and cache assets, 3) Intercept fetch events, 4) Manage cache strategies (cache-first, network-first, stale-while-revalidate). The deprecated AppCache should be avoided. Service Workers are the foundation of Progressive Web Apps (PWAs).",
        },
        {
            q: "Compare SVG and Canvas for graphics rendering.",
            a: "SVG is vector-based, uses DOM, is resolution-independent, and better for interactive graphics with fewer elements. Canvas is bitmap-based, uses immediate mode rendering, is resolution-dependent, and better for complex animations, games, and image processing. SVG is accessible and SEO-friendly; Canvas requires manual accessibility implementation. Choose SVG for scalable UI elements (icons, logos) and Canvas for performance-intensive graphics (games, data visualization).",
        },
        {
            q: "What is Content Security Policy (CSP) and how do you implement it?",
            a: "CSP is a security layer that prevents XSS and data injection attacks by specifying which content sources are allowed. Implement via HTTP header or <meta> tag: <meta http-equiv='Content-Security-Policy' content=\"default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:\">. CSP policies define allowed sources for scripts, styles, images, fonts, and other resources, blocking unauthorized content and significantly improving security.",
        },
        {
            q: "What are the performance implications of deep DOM trees?",
            a: "Deep DOM trees negatively impact performance by: 1) Increasing memory usage, 2) Slowing down style recalculation, 3) Making DOM queries slower (querySelector, getElementById), 4) Increasing reflow/repaint costs during updates, and 5) Reducing JavaScript execution speed. Optimize by: keeping DOM depth minimal, using CSS containment, avoiding deeply nested flex/grid layouts, using virtual DOM for large lists, and implementing efficient update strategies.",
        },
        {
            q: "How do you implement internationalization (i18n) in HTML?",
            a: "Key i18n features include: 1) lang attribute on <html> for page language, 2) <bdi> and dir for bidirectional text, 3) <ruby> for phonetic annotations, 4) Language switching mechanisms, 5) Proper number, date, and currency formatting, 6) lang on specific elements for mixed-language content, 7) UTF-8 character encoding, and 8) RTL (right-to-left) layouts for languages like Arabic and Hebrew. Internationalization ensures your content is accessible to a global audience.",
        },
        {
            q: "What's the difference between dataset and getAttribute in HTML?",
            a: "dataset provides convenient access to data-* attributes as camelCase properties (element.dataset.userId), automatically converting kebab-case to camelCase. getAttribute accesses the exact attribute name (element.getAttribute('data-user-id')). dataset is cleaner and more intuitive for data-* attributes, while getAttribute is more versatile for all attributes and returns strings. dataset only works with data-* attributes; getAttribute works with any attribute.",
        },
        {
            q: "Why is the tabindex attribute important for accessibility?",
            a: "tabindex controls keyboard navigation order and focusability: tabindex='0' includes the element in natural tab order, tabindex='-1' makes it focusable programmatically but not via keyboard navigation, and positive values create custom tab order (which should be avoided). Proper tabindex is crucial for accessibility, ensuring all interactive elements are reachable via keyboard and logical navigation order is maintained for screen reader users.",
        },
        {
            q: "What are some key HTML5 APIs and how are they used?",
            a: "HTML5 introduced powerful APIs including: Geolocation API (user location), Drag and Drop API (interactive dragging), History API (SPA navigation), Web Storage API (localStorage/sessionStorage), Web Workers (background threads), WebSocket API (real-time communication), WebRTC (P2P media), Fullscreen API (immersive experiences), Battery Status API (device battery info), and Vibration API (haptic feedback). These APIs enable rich, native-like web applications.",
        },
        {
            q: "What is the difference between preload and prefetch in HTML?",
            a: "preload is a declarative fetch that tells the browser to download a resource immediately as it's critical for the current page—used with <link rel='preload' href='font.woff2' as='font'>. prefetch downloads resources for future navigation, like the next page. preload is for priority resources that must load now; prefetch is for non-urgent resources that will be needed later. Both improve performance but serve different use cases.",
        },
        {
            q: "How does CORS work in HTML and why is it important?",
            a: "CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources requested from a different origin. It works via HTTP headers: Access-Control-Allow-Origin specifies allowed origins, Access-Control-Allow-Methods lists allowed HTTP methods, and Access-Control-Allow-Headers enumerates allowed request headers. CORS is critical for web security, preventing malicious sites from accessing sensitive data while enabling legitimate cross-origin requests.",
        },
        {
            q: "What is HTML sanitization and why is it important?",
            a: "HTML sanitization is the process of cleaning user-generated HTML content to prevent XSS (Cross-Site Scripting) and other injection attacks. It involves stripping dangerous tags and attributes (like <script>, onerror, javascript:) while preserving safe content. This is crucial for applications that render user input—like comments, forums, or rich text editors. Use libraries like DOMPurify for reliable sanitization; never trust raw user input.",
        },
        {
            q: "What does the future of HTML look like and what's coming next?",
            a: "HTML continues to evolve with a focus on performance, accessibility, and developer experience. Emerging trends include: 1) Web Components gaining wider adoption, 2) Declarative Shadow DOM for server-rendered components, 3) The Popover API for native tooltips and menus, 4) HTML Modules for better code organization, 5) Improved form controls with new input types, 6) Better accessibility features baked into the spec, 7) Integration with AI/ML APIs, and 8) Continued emphasis on performance and security. HTML remains the foundation of the web, and its future is bright.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Interview Questions" },
        { number: "98%", text: "of websites use HTML" },
        { number: "HTML5", text: "Current Standard" },
        { number: "1993", text: "HTML First Introduced" },
    ];

    // ─── Render ──────────────────────────────────────────────────────────────────────
    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ HTML Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your HTML interview with 50+ expert questions covering basics to advanced topics. Semantic HTML, web storage, accessibility, performance & more. Updated for 2026."
                />
                <meta
                    name="keywords"
                    content="HTML interview questions, HTML5 interview, web developer interview, frontend interview, HTML coding questions, semantic HTML, web storage, accessibility, HTML performance, Web Components, Service Workers, HTML APIs, 2026"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#FF6B35" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/html" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ HTML Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete HTML interview preparation with 50+ curated questions. From basics to advanced: semantic elements, storage, accessibility, APIs, and performance."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/html" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ HTML Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Master HTML interviews with 50+ expert questions covering everything from fundamentals to modern web standards."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/html" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/html" />

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
                            description: "Interview preparation platform for web developers.",
                            sameAs: [
                                "https://twitter.com/codeskipper",
                                "https://github.com/codeskipper",
                            ],
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
                                    name: "HTML",
                                    item: "https://codeskipper.in/interview/html",
                                },
                            ],
                        }),
                    }}
                />

                {/* ─── JSON-LD: ItemList (for the questions) ────────────────────────── */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            name: "HTML Interview Questions",
                            description: "50+ curated HTML interview questions with detailed answers.",
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
                            name: "HTML Interview Questions Collection",
                            description: "A comprehensive collection of HTML interview questions for web developers.",
                            url: "https://codeskipper.in/interview/html",
                            about: {
                                "@type": "Thing",
                                name: "HTML Interview Preparation",
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
                            description: "Web development interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Web Development, HTML, CSS, JavaScript, React, Interview Preparation",
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
                            name: "HTML Interview Preparation",
                            description: "Complete preparation for HTML interviews covering basics to advanced topics.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate to Advanced",
                            teaches: "HTML5, Semantic HTML, Web Storage, Accessibility, Web Components, Performance",
                            url: "https://codeskipper.in/interview/html",
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
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaHtml5 className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            HTML Interview <span className="text-orange-500">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your HTML interview —
                            from fundamentals to modern web standards. Updated for 2026.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaShieldAlt /> Expert Answers
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
                                <div className="text-3xl font-bold text-orange-600 mb-1">
                                    {stat.number}
                                </div>
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
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 text-sm font-bold flex-shrink-0 mt-0.5">
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
                            <h2 className="text-2xl font-bold text-gray-900">Pro Interview Tips</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaSearch className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Your Semantics</h3>
                                    <p className="text-gray-600 text-sm">
                                        Interviewers value deep understanding of semantic elements and their impact on accessibility and SEO.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaClock className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Performance Matters</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be ready to discuss HTML optimization, the critical rendering path, and lazy loading techniques.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Write Clean Code</h3>
                                    <p className="text-gray-600 text-sm">
                                        Practice writing well-structured, accessible HTML during technical assessments.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-orange-50 to-transparent">
                                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                                    <FaGlobe className="text-orange-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Stay Current</h3>
                                    <p className="text-gray-600 text-sm">
                                        Keep up with HTML5 features, Web Components, and emerging web standards.
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
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Ace Your Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all web technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Technologies <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · HTML Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default HtmlInterview;