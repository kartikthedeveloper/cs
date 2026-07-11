import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaCss3Alt,
    FaCode,
    FaLaptop,
    FaMobile,
    FaPaintBrush,
    FaRocket,
    FaCheckCircle,
    FaGraduationCap,
    FaShieldAlt,
    FaArrowRight,
    FaLightbulb,
    FaPalette,
} from "react-icons/fa";

const CssInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 CSS Interview Questions ──────────────────────────────────────────────
    const questions = [
        {
            q: "What is CSS and what does it stand for?",
            a: "CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS controls the layout, colors, fonts, spacing, and overall visual appearance of web pages. It enables separation of content (HTML) from presentation (CSS), making it easier to maintain and update the look of a website.",
        },
        {
            q: "What are the three ways to apply CSS to an HTML document?",
            a: "1) Inline CSS: using the style attribute directly on an HTML element (<p style='color:red;'>). 2) Internal CSS: using a <style> tag within the <head> section of the HTML document. 3) External CSS: linking to an external .css file using the <link> tag. External is preferred for reusability and maintainability.",
        },
        {
            q: "Explain the concept of the CSS cascade and specificity.",
            a: "The cascade is the algorithm that determines which styles are applied to an element when multiple declarations conflict. It considers importance (user-agent, user, author), specificity (inline > ID > class > element), and source order (later rules override earlier ones). Specificity is calculated as a four-part value: (inline, ID, class, element). The higher the specificity, the more weight it has.",
        },
        {
            q: "What is the difference between class and ID selectors in CSS?",
            a: "IDs (#id) are unique identifiers for a single element and have higher specificity than classes. Classes (.class) can be applied to multiple elements and are more reusable. IDs should be used for unique page elements (like header, footer) while classes are used for styling groups of elements. Also, IDs can be used as JavaScript hooks, but classes are preferred for styling.",
        },
        {
            q: "What are CSS pseudo-classes and give some examples.",
            a: "Pseudo-classes are keywords added to selectors that specify a special state of the selected element(s). They are written with a colon (e.g., :hover). Examples: :hover (mouse over), :focus (element focused), :active (clicked), :visited (visited links), :nth-child(), :first-child, :last-child, :not(), :checked (for inputs).",
        },
        {
            q: "Explain the CSS box model and its components.",
            a: "The CSS box model describes the rectangular boxes generated for elements. It consists of: content (actual text/images), padding (space between content and border), border (surrounds padding), and margin (space outside border). Total width = width + padding-left + padding-right + border-left + border-right. Box-sizing property (content-box vs border-box) changes how width/height is calculated.",
        },
        {
            q: "What is the difference between 'display: none' and 'visibility: hidden'?",
            a: "display: none removes the element from the document flow entirely—it takes up no space and is not rendered. visibility: hidden hides the element visually but it still occupies its original space in the layout, affecting the positioning of other elements. Both hide the element, but display: none is often used for toggling visibility without affecting layout.",
        },
        {
            q: "Explain the position property and its possible values.",
            a: "The position property defines how an element is positioned in the document. Values: static (default, normal flow), relative (positioned relative to its normal position), absolute (removed from normal flow, positioned relative to nearest positioned ancestor), fixed (positioned relative to viewport, stays during scroll), sticky (hybrid of relative and fixed, sticks when scrolling past a threshold).",
        },
        {
            q: "What is the difference between block, inline, and inline-block elements?",
            a: "block elements take the full width available and start on a new line (e.g., <div>, <p>). inline elements only take as much width as necessary and do not start new lines (e.g., <span>, <a>). inline-block elements are like inline but they can have width/height, margins, and padding applied, and they behave like a block inside an inline context.",
        },
        {
            q: "What is the CSS float property and how does it work?",
            a: "float allows an element to be placed to the left or right of its container, allowing text and inline elements to wrap around it. It was originally used for text wrapping around images but later used for layout. However, floats can cause parent collapse; clearing (clear: both) or using overflow: hidden on parent are common fixes. Modern layout uses flexbox/grid instead.",
        },
        {
            q: "Explain flexbox and its main properties.",
            a: "Flexbox (Flexible Box Layout) is a one-dimensional layout model for arranging items in rows or columns. Key properties on container: display:flex, flex-direction, flex-wrap, justify-content (main-axis alignment), align-items (cross-axis alignment), align-content. On items: flex-grow, flex-shrink, flex-basis, align-self. It simplifies centering, distributing space, and responsive design.",
        },
        {
            q: "What is CSS Grid Layout and how does it differ from flexbox?",
            a: "CSS Grid is a two-dimensional layout system, designed for creating complex grid-based layouts with rows and columns. It allows placing items into explicit grid cells. Flexbox is one-dimensional (row or column) and is ideal for arranging items in a line. Grid excels at overall page layout, while flexbox is better for UI components and item alignment. They can be used together.",
        },
        {
            q: "Explain the box-sizing property and its values.",
            a: "box-sizing defines how the width and height of an element are calculated. content-box (default): width/height apply only to the content, padding and border are added on top. border-box: width/height include content, padding, and border, making it easier to size elements consistently. Many developers set * { box-sizing: border-box; } to simplify layout calculations.",
        },
        {
            q: "What are CSS media queries and how are they used?",
            a: "Media queries are a feature of CSS that enable styles to be applied based on device characteristics like screen width, height, orientation, resolution. They are essential for responsive design. Syntax: @media (max-width: 768px) { ... } which applies styles when the viewport width is 768px or less. They allow different layouts for desktop, tablet, and mobile.",
        },
        {
            q: "Explain the concept of CSS preprocessors and list a few popular ones.",
            a: "CSS preprocessors extend CSS with programming features like variables, nesting, mixins, inheritance, and functions. They compile to standard CSS. Popular ones: Sass (SCSS), Less, Stylus. They improve maintainability, reduce repetition, and enable modular CSS architecture.",
        },
        {
            q: "What is the difference between Sass and SCSS?",
            a: "Sass (Syntactically Awesome Style Sheets) has two syntaxes: Sass (indented syntax, no braces) and SCSS (Sassy CSS, uses braces and semicolons like regular CSS). SCSS is more popular because it's a superset of CSS, so any valid CSS is also valid SCSS. Sass is older and uses indentation. Both compile to CSS.",
        },
        {
            q: "What are CSS custom properties (variables) and how do you use them?",
            a: "CSS custom properties, often called CSS variables, are entities defined by authors to store specific values for reuse. They are declared with -- prefix (e.g., --primary-color: #333;). They are accessed using var() function (e.g., color: var(--primary-color);). They are scoped to the element they are declared on and inherit down the DOM. They allow dynamic theming and easier maintenance.",
        },
        {
            q: "Explain CSS transitions and animations.",
            a: "Transitions allow smooth changes of property values over a specified duration (e.g., transition: background 0.3s ease;). They are triggered by state changes like hover. Animations are more complex; they use @keyframes to define a sequence of styles, and are applied using animation property. Animations can loop, have delays, and can be controlled with JavaScript.",
        },
        {
            q: "What is the difference between 'em' and 'rem' units?",
            a: "Both are relative units. 'em' is relative to the font-size of the parent element (or the current element if used for font-size itself). 'rem' is relative to the font-size of the root element (<html>), which is usually 16px by default. 'rem' provides more predictable sizing because it's not affected by nesting. Use 'rem' for global sizing and 'em' for component-relative sizing.",
        },
        {
            q: "What are CSS pseudo-elements and give examples.",
            a: "Pseudo-elements allow styling of specific parts of an element. They are written with double colons (::). Examples: ::before (inserts content before the element), ::after (inserts content after), ::first-line (first line of text), ::first-letter (first letter), ::selection (user selection). They are often used for decorative effects and icons.",
        },
        {
            q: "Explain the z-index property and stacking context.",
            a: "z-index determines the stack order of positioned elements (relative, absolute, fixed, sticky) along the z-axis (front-to-back). Higher z-index values appear in front. It only works on positioned elements. The stacking context is a group of elements with the same parent that stack together. Creating a stacking context (e.g., with position: relative and z-index) isolates the stacking order.",
        },
        {
            q: "What is the difference between 'relative', 'absolute', and 'fixed' positioning?",
            a: "relative: positioned relative to its normal position; leaves space in the flow. absolute: removed from normal flow, positioned relative to nearest positioned ancestor (or <body> if none). fixed: removed from normal flow, positioned relative to the viewport, stays during scroll. sticky: hybrid—behaves like relative until it reaches a threshold, then becomes fixed.",
        },
        {
            q: "How do you center a div both horizontally and vertically?",
            a: "Multiple ways: 1) Flexbox: display:flex; justify-content:center; align-items:center; on parent. 2) Grid: display:grid; place-items:center; 3) Absolute + transform: position:absolute; top:50%; left:50%; transform:translate(-50%,-50%). 4) Table-cell: display:table-cell; vertical-align:middle; text-align:center; (older). Flexbox and Grid are the modern, preferred methods.",
        },
        {
            q: "Explain the 'clearfix' and why it's used.",
            a: "The clearfix is a technique to force a container to clear floats and contain its floated children. Without it, the container may collapse to zero height. Common clearfix: .clearfix::after { content: ''; display: table; clear: both; }. With modern CSS, using overflow: hidden or display: flow-root on the container can also achieve this. Flexbox and Grid have made floats less common.",
        },
        {
            q: "What are CSS counters and how do they work?",
            a: "CSS counters are variables maintained by CSS that can be incremented and used for automatic numbering of elements like lists, headings, or sections. They use counter-reset to initialize, counter-increment to increase, and content with counter() to display. Example: ol { counter-reset: section; } li { counter-increment: section; } li::before { content: 'Section ' counter(section) ': '; }",
        },
        {
            q: "What is the difference between 'link' and '@import' for including CSS?",
            a: "<link> is an HTML tag used to include external stylesheets. It loads in parallel and is the preferred method. @import is a CSS rule used to import another stylesheet from within a CSS file (e.g., @import url('styles.css');). It can cause render blocking if used in <style> and may slow page loading. <link> is generally faster and more efficient.",
        },
        {
            q: "Explain the concept of CSS specificity and how to calculate it.",
            a: "Specificity is a weight assigned to selectors to determine which styles take precedence. It's calculated as a four-part comma-separated value: (inline style, ID count, class/pseudo-class/attribute count, element/pseudo-element count). Example: 'ul#nav li.active' has (0,1,1,2). Inline styles win, then IDs, then classes, then elements. The highest specificity wins.",
        },
        {
            q: "What are CSS combinators and list them.",
            a: "Combinators are used to define relationships between selectors. They include: descendant selector (space) - selects children at any depth; child selector (>) - selects direct children; adjacent sibling selector (+) - selects the immediately following sibling; general sibling selector (~) - selects all following siblings. They are powerful for targeting specific elements in the DOM hierarchy.",
        },
        {
            q: "Explain 'object-fit' and 'object-position' properties.",
            a: "These properties control how replaced elements (like <img> or <video>) are resized within their content box. object-fit: fill (default, stretches), contain (fits entirely, maintains aspect ratio), cover (fills box, may crop), none (no scaling), scale-down (takes smaller of none/contain). object-position aligns the content within the box (e.g., top, center).",
        },
        {
            q: "What is the difference between 'transition' and 'animation'?",
            a: "Transitions are simpler—they allow smooth changes from one property value to another over a duration when triggered (e.g., hover). They require a state change. Animations are more powerful—they use @keyframes to define multiple keyframes and can run automatically, loop, and have more control (delay, iteration, direction). Transitions are for simple effects; animations for complex sequences.",
        },
        {
            q: "Explain the 'will-change' property and when to use it.",
            a: "will-change is a performance hint that tells the browser which properties of an element are likely to change, allowing the browser to optimize ahead of time (e.g., creating layers). Example: will-change: transform, opacity. Use it sparingly and only for elements that animate frequently to avoid memory overhead. Overusing can degrade performance.",
        },
        {
            q: "What are CSS filters and give examples.",
            a: "CSS filters are graphical effects applied to elements. They include: blur(), brightness(), contrast(), drop-shadow(), grayscale(), hue-rotate(), invert(), opacity(), saturate(), sepia(). They are used with the filter property, e.g., filter: blur(5px) grayscale(0.5). They are useful for image editing, hover effects, and enhancing UI.",
        },
        {
            q: "What is the 'aspect-ratio' property in CSS?",
            a: "The aspect-ratio property sets a preferred aspect ratio for a box, which is used in calculating auto sizes. It is useful for maintaining consistent proportions, e.g., for images or videos. Example: aspect-ratio: 16/9;. It works with width/height set to auto, making it a modern alternative to the padding-top hack.",
        },
        {
            q: "Explain the 'container queries' feature in CSS.",
            a: "Container queries are a new feature that allow styling of elements based on the size of their container, rather than the viewport. This enables more modular and responsive components. Syntax: @container (min-width: 400px) { ... }. They are supported in modern browsers and are a game-changer for component-based design.",
        },
        {
            q: "What is the difference between 'unset', 'initial', and 'revert'?",
            a: "These are CSS global values. initial sets a property to its default value as defined by the CSS specification. revert reverts a property to the value it would have had if the current style rule didn't exist (i.e., browser default or inherited). unset acts as inherit if the property is inheritable, else initial. They are useful for resetting styles.",
        },
        {
            q: "How do you create a responsive grid layout using CSS Grid?",
            a: "Use repeat() and minmax() for flexible columns: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); This creates as many columns as fit, with each at least 250px and growing equally. Combine with grid-gap for spacing. This creates a responsive grid without media queries.",
        },
        {
            q: "Explain CSS 'cascade layers' and their purpose.",
            a: "Cascade layers (@layer) allow authors to control the order of styles within the cascade. They help manage conflicts between different sources (like third-party libraries and custom styles). Layers are ordered; styles in later layers override earlier ones. Example: @layer base, components; @layer components { ... }. This provides more control over specificity wars.",
        },
        {
            q: "What are 'CSS subgrid' and its benefits?",
            a: "Subgrid is a feature of CSS Grid that allows a grid item to inherit the grid tracks of its parent grid. It enables alignment of nested items to the parent grid, simplifying complex layouts. Example: display: grid; grid-template-columns: subgrid;. It's useful for card layouts, form alignment, and consistent grids.",
        },
        {
            q: "Explain the 'accent-color' property in CSS.",
            a: "accent-color is used to style form controls like checkboxes, radio buttons, range sliders, and progress bars. It sets the accent color for these elements, providing a quick way to theme UI controls without re-styling them from scratch. Example: accent-color: #6C63FF;.",
        },
        {
            q: "What is the 'clip-path' property and how is it used?",
            a: "clip-path creates a clipping region that masks an element—only the parts inside the region are visible. It can use basic shapes (circle, ellipse, polygon) or SVG paths. Useful for creating non-rectangular shapes, image cropping, and creative design effects. Example: clip-path: polygon(50% 0%, 0% 100%, 100% 100%);.",
        },
        {
            q: "Explain the 'scroll-behavior' property.",
            a: "scroll-behavior: smooth enables smooth scrolling when navigating to anchors within a page. It makes the browser scroll smoothly instead of jumping instantly. It can be applied to the html element for global smooth scrolling, or to scrollable containers. Example: html { scroll-behavior: smooth; }.",
        },
        {
            q: "What are CSS math functions like calc(), clamp(), min(), max()?",
            a: "calc() allows arithmetic expressions (e.g., width: calc(100% - 20px);). min() and max() choose the smallest/largest among values (e.g., width: min(800px, 100%);). clamp() restricts a value between a minimum and maximum (e.g., font-size: clamp(1rem, 2vw, 3rem);). They are useful for creating responsive and fluid designs.",
        },
        {
            q: "What is the 'contain' property and its values?",
            a: "contain property improves performance by isolating elements from the rest of the DOM, limiting layout and paint operations. Values: none, layout, style, paint, size, and combinations (e.g., contain: layout paint;). It tells the browser that the element and its children are independent, reducing reflows.",
        },
        {
            q: "Explain the difference between 'visibility: collapse' and 'visibility: hidden'.",
            a: "visibility: collapse is specifically for table rows and columns. It removes the row/column but does not affect the table's overall width/height as it does with hidden (which still occupies space). For non-table elements, collapse behaves the same as hidden. It's a specialized value for table layouts.",
        },
        {
            q: "What are 'CSS custom properties (variables) and how are they different from preprocessor variables?",
            a: "CSS custom properties are native to the browser and are dynamic—they can be changed at runtime via JavaScript and are cascading (inherit). Preprocessor variables (Sass, Less) are compile-time and static; they are replaced with values during compilation. CSS variables are more flexible for theming and dynamic updates.",
        },
        {
            q: "Explain the 'isolation' property in CSS.",
            a: "The isolation property creates a new stacking context, which is useful to prevent an element from interfering with the blending of its children with the background. It's used with mix-blend-mode to isolate blending effects. Example: isolation: isolate;.",
        },
        {
            q: "What are the different values of 'display' property and their use cases?",
            a: "Common values: block (block-level), inline (inline-level), inline-block (inline but can have block properties), flex (flex container), grid (grid container), table (like <table>), none (removes element). Also: list-item, run-in, and newer values like flow-root (creates block formatting context). Each is used for specific layout requirements.",
        },
        {
            q: "Explain the concept of 'block formatting context' (BFC).",
            a: "A BFC is a region where block boxes are laid out. It affects floating, clearing, and margins. Elements with overflow: hidden, display: flow-root, display: flex, display: grid, etc., create a BFC. It prevents margin collapse, contains floats, and isolates layout. Understanding BFC is key to solving many layout issues.",
        },
        {
            q: "What is the 'user-select' property and its values?",
            a: "user-select controls whether text can be selected. Values: auto, none (prevents selection), text (allows), all (select all when clicked). It's useful for preventing accidental text selection on UI elements (like buttons, drag handles). Example: user-select: none;.",
        },
        {
            q: "Explain the 'pointer-events' property and its use cases.",
            a: "pointer-events specifies under what circumstances an element can be the target of mouse/touch events. Values: auto (default), none (element doesn't respond to events, passes through), visiblePainted, etc. Common use: making a clickable overlay that lets clicks pass to underlying elements, or disabling interactions.",
        },
        {
            q: "What are the future trends in CSS?",
            a: "Future CSS trends include: container queries (already landing), cascade layers, subgrid, scoped styles, more advanced selectors, custom properties for theming, color functions (like color-mix), enhanced viewport units (svh, lvh, dvh), and better accessibility features. CSS is becoming more powerful and developer-friendly, reducing reliance on JavaScript for styling.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "CSS3", text: "Modern Standards" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ CSS Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your CSS interview with 50+ expert questions covering selectors, box model, flexbox, grid, animations, preprocessors, and modern CSS techniques."
                />
                <meta
                    name="keywords"
                    content="CSS interview questions, CSS3, frontend interview, web developer interview, CSS flexbox, CSS grid, animations, responsive design, preprocessors, Sass, CSS variables"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#264DE4" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/css" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ CSS Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete CSS interview prep with 50+ questions covering selectors, layout, animations, preprocessors, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/css" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ CSS Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for CSS interviews with 50+ questions covering fundamentals to modern layout and animation techniques."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/css" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/css" />

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
                                    name: "CSS",
                                    item: "https://codeskipper.in/interview/css",
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
                            name: "CSS Interview Questions",
                            description: "50+ curated CSS interview questions with detailed answers.",
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
                            name: "CSS Interview Questions Collection",
                            description: "A comprehensive collection of CSS interview questions for frontend developers.",
                            url: "https://codeskipper.in/interview/css",
                            about: {
                                "@type": "Thing",
                                name: "CSS Interview Preparation",
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
                            teaches: "CSS, HTML, JavaScript, React, Web Development",
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
                            name: "CSS Interview Preparation",
                            description: "Complete preparation for CSS interviews covering core concepts and modern techniques.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "Selectors, Box Model, Flexbox, Grid, Animations, Preprocessors, Responsive Design",
                            url: "https://codeskipper.in/interview/css",
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
            <section className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 py-8">
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
                                <FaCss3Alt className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            CSS Interview <span className="text-blue-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your CSS interview —
                            from selectors and box model to flexbox, grid, animations, and modern CSS.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaPaintBrush /> Modern CSS
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
                            <FaPalette className="text-blue-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for CSS Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaCode className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Layout Models</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be fluent in Flexbox and Grid—they are the most asked topics. Understand when to use each.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaLaptop className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Responsive &amp; Modern</h3>
                                    <p className="text-gray-600 text-sm">
                                        Know media queries, container queries, and relative units. Show you can build adaptive interfaces.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaRocket className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Performance Matters</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand repaint/reflow, will-change, containment, and efficient selectors.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaShieldAlt className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Stay Current</h3>
                                    <p className="text-gray-600 text-sm">
                                        Know about container queries, cascade layers, subgrid, and new CSS features.
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
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Style Your Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all web technologies.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · CSS Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CssInterview;