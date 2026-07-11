import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaChartBar,
    FaDatabase,
    FaCogs,
    FaCloud,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaRocket,
    FaTable,
    FaFilter,
    FaLayerGroup,
} from "react-icons/fa";

const PowerBiInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Power BI Interview Questions ──────────────────────────────────────
    const questions = [
        {
            q: "What is Power BI and what are its main components?",
            a: "Power BI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities with a simple interface. Its main components are: Power BI Desktop (development tool), Power BI Service (cloud-based SaaS), Power BI Mobile (mobile apps), and Power BI Gateway (for on-premises data connectivity). It integrates with various data sources and enables data storytelling.",
        },
        {
            q: "Explain the difference between Power BI Desktop and Power BI Service.",
            a: "Power BI Desktop is a free Windows application for building reports and data models locally. It includes data transformation (Power Query), data modeling, and visualization tools. Power BI Service is a cloud-based platform for publishing, sharing, collaborating, and consuming reports and dashboards. It provides features like scheduled refresh, row-level security, and workspaces for team collaboration.",
        },
        {
            q: "What is a dataset in Power BI?",
            a: "A dataset is a collection of data that is imported or connected to from various sources. It includes tables, relationships, measures, calculated columns, and hierarchies. In Power BI Service, a dataset is the underlying data model that powers reports and dashboards. Datasets can be refreshed to keep data up-to-date.",
        },
        {
            q: "Explain the concept of a data model in Power BI.",
            a: "A data model is the structure that defines how tables are related, the calculations, and the hierarchies. It is built in Power BI Desktop using relationships, calculated columns, measures (DAX), and calculated tables. A good data model is star-schema based, with dimension tables and fact tables, enabling efficient querying and accurate reporting.",
        },
        {
            q: "What is DAX and what are its main categories of functions?",
            a: "DAX (Data Analysis Expressions) is a formula language used in Power BI for creating calculated columns, measures, and calculated tables. Its main categories include: Date and Time functions, Aggregation functions, Filter functions, Time Intelligence functions, Mathematical and Statistical functions, and Logical functions.",
        },
        {
            q: "What is the difference between a calculated column and a measure in DAX?",
            a: "A calculated column is computed row-by-row at the time of data refresh and is stored in the model; it uses row context. A measure is calculated on the fly based on the filter context applied by the visuals; it is not stored and is used for aggregations. Measures are more flexible and memory-efficient for dynamic calculations.",
        },
        {
            q: "Explain the concept of context in DAX (row context vs filter context).",
            a: "Row context refers to the current row during the evaluation of a calculated column or in an iteration function like SUMX. Filter context is the set of filters applied by report visuals, slicers, and filters, which determines the subset of data used in calculations. DAX uses both contexts; measures rely on filter context, while calculated columns use row context.",
        },
        {
            q: "What is the CALCULATE function in DAX and how is it used?",
            a: "CALCULATE is one of the most powerful DAX functions. It evaluates an expression in a modified filter context. It takes an expression and one or more filter arguments. Example: CALCULATE(SUM(Sales[Amount]), Sales[Country] = 'USA') returns total sales for the USA. It is used for dynamic filtering and time intelligence.",
        },
        {
            q: "Explain the use of the ALL function in DAX.",
            a: "ALL removes filters from a table or column, returning all rows. It is often used in CALCULATE to compute percentages or ratios relative to total. For example: CALCULATE(SUM(Sales[Amount]), ALL(Product)) gives total sales across all products, ignoring any product filters.",
        },
        {
            q: "What is the difference between SUM and SUMX in DAX?",
            a: "SUM aggregates a single column and is used in row context without iteration. SUMX is an iterator that evaluates an expression for each row of a table and then sums the results. Example: SUMX(Sales, Sales[Quantity] * Sales[Price]) calculates revenue per row and sums it.",
        },
        {
            q: "Explain the concept of time intelligence in Power BI.",
            a: "Time intelligence refers to DAX functions that perform calculations over time periods, such as year-to-date, month-over-month, or moving averages. Functions include TOTALYTD, SAMEPERIODLASTYEAR, DATEADD, and DATESBETWEEN. They require a date table marked as a date table for accurate time-based calculations.",
        },
        {
            q: "How do you create a date table in Power BI and why is it important?",
            a: "A date table is a separate table containing a continuous range of dates and related columns (year, month, quarter). It can be created using DAX (CALENDAR or CALENDARAUTO) or in Power Query. It is essential for time intelligence functions, enabling consistent and accurate date-based calculations across multiple tables.",
        },
        {
            q: "What is the difference between Power Query and Power Pivot?",
            a: "Power Query (Get & Transform) is the data extraction and transformation tool that cleans, merges, and shapes data before loading. Power Pivot is the in-memory data modeling engine that manages relationships, calculated columns, measures, and DAX. In Power BI Desktop, both are integrated; Power Query is for data preparation, Power Pivot for data modeling.",
        },
        {
            q: "Explain the M language in Power Query.",
            a: "M is the functional language used in Power Query for data transformation. It is case-sensitive and uses a step-by-step approach. Each step is defined using 'let' and 'in' statements. M is used for cleaning, merging, grouping, and pivoting data. It is not a programming language for DAX; it's for ETL processes.",
        },
        {
            q: "What are the different data connectivity modes in Power BI?",
            a: "Two main modes: Import (imports data into Power BI's in-memory engine, enabling fast performance and DAX) and DirectQuery (queries data live from the source, useful for large datasets and real-time data). A third option is Live Connection (for Analysis Services or Power BI datasets).",
        },
        {
            q: "What are the advantages and disadvantages of DirectQuery vs Import?",
            a: "Import: fast performance, full DAX capabilities, scheduled refresh, but data size limitations. DirectQuery: real-time data, no size limit, but slower queries and limited DAX functions. Choose based on data size, refresh requirements, and performance needs.",
        },
        {
            q: "Explain the concept of a star schema in data modeling for Power BI.",
            a: "A star schema consists of a central fact table (with quantitative measures) and surrounding dimension tables (with descriptive attributes). Dimensions are joined to the fact table via foreign keys. This structure optimizes query performance, simplifies DAX, and enhances user navigation.",
        },
        {
            q: "What is row-level security (RLS) in Power BI and how is it implemented?",
            a: "RLS restricts data access for specific users based on roles. It is defined in Power BI Desktop using DAX expressions that filter tables. Roles are created, and DAX filters are applied. When published to Power BI Service, roles are mapped to Azure AD users or groups. It ensures users only see data they are authorized to view.",
        },
        {
            q: "How do you schedule data refresh in Power BI Service?",
            a: "In Power BI Service, go to the dataset settings, expand 'Scheduled refresh', and set the frequency and time. A gateway is required for on-premises data sources. Ensure that credentials are stored and that the data source supports refresh.",
        },
        {
            q: "What is the role of the Power BI Gateway?",
            a: "The Power BI Gateway is a bridge between Power BI Service and on-premises data sources (like SQL Server, Oracle). It allows scheduled refresh of datasets that connect to on-premises data. Two types: Personal Gateway (single user) and On-premises Data Gateway (enterprise, multi-user).",
        },
        {
            q: "What is a Power BI workspace and what are its types?",
            a: "A workspace is a container for dashboards, reports, datasets, and dataflows. Types: My workspace (personal) and App workspaces (collaborative, used to build and share content). App workspaces are recommended for team collaboration and publishing apps.",
        },
        {
            q: "Explain the difference between a dashboard and a report in Power BI.",
            a: "A report is a multi-page, interactive document based on a single dataset, containing visuals, slicers, and filters. A dashboard is a single-page canvas that shows visualizations pinned from reports or created from datasets. Dashboards provide a high-level overview and can include tiles from multiple reports.",
        },
        {
            q: "What are tiles in Power BI dashboards?",
            a: "Tiles are individual visualizations or elements pinned to a dashboard from a report, dataset, or using custom content. They can be charts, cards, images, or web content. Tiles can be resized and arranged on the dashboard canvas.",
        },
        {
            q: "How do you share a report in Power BI Service?",
            a: "Share by publishing the report to a workspace and creating an app, or directly share a report from My workspace or an app workspace by selecting 'Share' and entering user email addresses. Permissions (view, edit, reshare) can be set.",
        },
        {
            q: "What is a calculated table in Power BI and how is it created?",
            a: "A calculated table is a table created using a DAX expression, typically based on the data model. Example: 'NewTable = CALCULATETABLE(Product, Product[Category] = 'Electronics').' It is created in the modeling tab and is often used for creating custom dimension tables.",
        },
        {
            q: "Explain the use of the LOOKUPVALUE function in DAX.",
            a: "LOOKUPVALUE is a DAX function that retrieves a value from a specified column in a table, based on a set of search conditions. It is similar to VLOOKUP in Excel. Example: LOOKUPVALUE(Product[ProductName], Product[ProductID], Sales[ProductID]). It is used to create calculated columns.",
        },
        {
            q: "What is the difference between a hierarchy and a relationship in Power BI?",
            a: "A relationship defines how two tables are connected (e.g., through a common key) and enables cross-table filtering. A hierarchy is a drill-down path within a single table or across tables (e.g., Year → Quarter → Month), allowing users to navigate data at different levels.",
        },
        {
            q: "What is a quick measure in Power BI and when would you use it?",
            a: "Quick measures are pre-built DAX calculations that can be generated without writing DAX code. They provide common calculations like year-over-year change, running totals, and percentage of total. They are useful for quick analysis but may not cover all custom scenarios.",
        },
        {
            q: "Explain the concept of 'drillthrough' in Power BI reports.",
            a: "Drillthrough is a feature that allows users to click on a data point and navigate to a separate page that shows detailed data for that selection. It is used to provide detailed analysis without cluttering the main report. Drillthrough filters are passed to the target page.",
        },
        {
            q: "What is the 'Bookmark' feature in Power BI?",
            a: "Bookmarks capture the current state of a report page, including filters, slicers, and visual states. They allow users to create a narrative or switch between different views. Bookmarks can be used with buttons to create interactive stories.",
        },
        {
            q: "How can you implement row-level security (RLS) using a dynamic approach?",
            a: "Dynamic RLS uses the USERPRINCIPALNAME() function to filter data based on the logged-in user's email. For example, create a role with a filter: 'Sales[SalesPerson] = USERPRINCIPALNAME()'. This ensures users see only their own data without managing static mappings.",
        },
        {
            q: "What is the 'Q&A' feature in Power BI?",
            a: "Q&A is a natural language query feature that allows users to ask questions about their data using everyday language. It returns visualizations based on the question. It is available in dashboards and reports and relies on a well-defined data model.",
        },
        {
            q: "Explain the difference between 'Impersonate' and 'Single Sign-On' in Power BI.",
            a: "Impersonate allows a user to run queries under a specific identity (fixed account) for data sources. Single Sign-On (SSO) uses the user's own credentials (via Kerberos, OAuth) to access the data source, enabling per-user security and row-level filtering.",
        },
        {
            q: "What is a 'dataflow' in Power BI?",
            a: "Dataflows are a cloud-based data transformation and preparation tool in Power BI Service. They use Power Query and allow reusable ETL logic across multiple reports and datasets. Dataflows can be shared and refreshed independently of datasets.",
        },
        {
            q: "How do you handle incremental refresh in Power BI?",
            a: "Incremental refresh loads only new or changed data, reducing refresh time and resource usage. It requires a date/range column. Configure in Power BI Desktop by setting rangeStart and rangeEnd parameters, and enabling incremental refresh in the dataset settings in the service.",
        },
        {
            q: "What are the best practices for optimizing Power BI performance?",
            a: "Use star schema, reduce cardinality of columns, avoid calculated columns when possible, use proper data types, limit visuals on a page, use aggregations, optimize DAX (avoid iterators when possible), and use DirectQuery sparingly. Also, use performance analyzer to identify bottlenecks.",
        },
        {
            q: "Explain the concept of 'aggregations' in Power BI.",
            a: "Aggregations are pre-calculated summary tables that can be used to improve performance on large datasets. They store summarized data (e.g., at day or month level) and Power BI intelligently decides whether to use the aggregation or detail data based on the query.",
        },
        {
            q: "How do you set up a 'Composite Model' in Power BI?",
            a: "A composite model allows mixing DirectQuery and Import data sources in a single dataset. It enables connecting to multiple data sources and using features from both modes. Configure by enabling 'DirectQuery for Power BI datasets and Analysis Services' and setting storage modes per table.",
        },
        {
            q: "What are 'Quick Insights' in Power BI?",
            a: "Quick Insights is a feature that automatically analyzes datasets and generates visualizations to find patterns, outliers, and trends. It uses machine learning algorithms. Users can explore these insights and add them to reports.",
        },
        {
            q: "What is the difference between 'SUM' and 'SUMX' in DAX?",
            a: "SUM is a simple aggregation over a column; it operates in row context (often used in measures) without iteration. SUMX is an iterator that evaluates an expression for each row and then sums the results. SUMX is more flexible for row-level calculations.",
        },
        {
            q: "Explain the 'USERELATIONSHIP' function in DAX.",
            a: "USERELATIONSHIP allows using an inactive relationship in a calculation. It enables calculations that need to use a specific relationship between tables (e.g., for different date dimensions). It is used within CALCULATE to activate the relationship.",
        },
        {
            q: "What is the purpose of the 'EARLIER' function in DAX?",
            a: "EARLIER is used in calculated columns and row context to refer to an outer row context when evaluating an expression. It is often used in scenarios like ranking or comparing values within the same table.",
        },
        {
            q: "How do you create a 'parameter' in Power BI?",
            a: "Parameters are used to allow user input that can control calculations or filtering. They can be created as What-If parameters (numeric slicers) or using the 'New Parameter' option in Power Query. They can be used in DAX to dynamically adjust values.",
        },
        {
            q: "Explain the 'RANKX' function and its typical usage.",
            a: "RANKX is a DAX function that ranks items within a context. It takes a table, an expression to rank, and optional parameters. Example: RANKX(ALL(Product), [Total Sales]) ranks all products by sales. It's useful for competitive analysis.",
        },
        {
            q: "What are custom visuals in Power BI and how do you use them?",
            a: "Custom visuals are third-party or custom-developed visuals that extend Power BI's visualization capabilities. They can be imported from AppSource or created using the Power BI Visual SDK. They provide specialized chart types not available in the default visuals.",
        },
        {
            q: "How do you export data from Power BI?",
            a: "Data can be exported from visuals by selecting the 'Export data' option, or from the underlying dataset using 'Analyze in Excel' or via APIs. Reports can also be published to PDF or PowerPoint.",
        },
        {
            q: "What is the role of the 'Power BI API'?",
            a: "The Power BI REST API provides programmatic access to Power BI resources (datasets, reports, dashboards). It enables embedding, automation, and integration with custom applications. It supports operations like creating reports, refreshing datasets, and managing workspaces.",
        },
        {
            q: "Explain how to embed Power BI reports into a web application.",
            a: "Embedding can be done using the Power BI Embedded service or the 'Publish to web' option. For secure embedding, use Power BI Embedded (Azure) with service principal authentication, or use the 'Embed for your customers' pattern with master user or service principal.",
        },
        {
            q: "What are the limitations of Power BI when handling large datasets?",
            a: "Limitations include: dataset size limit for import (varies by license, up to 10 GB for Premium), performance degradation with complex DAX, number of visuals per report page, and DirectQuery limitations (limited DAX functions, slower response). Aggregations and incremental refresh mitigate these.",
        },
        {
            q: "What is the future direction of Power BI?",
            a: "Power BI continues to evolve with focus on AI integration (Copilot, automated insights), enhanced data connectivity (Fabric integration), improved performance (Speed optimizer), and more advanced analytics (Python/R integration). The trend is towards end-to-end data platform (Microsoft Fabric).",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Topics" },
        { number: "DAX", text: "Advanced Analytics" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Power BI Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Power BI interview with 50+ expert questions covering DAX, data modeling, Power Query, visualizations, service, and more."
                />
                <meta
                    name="keywords"
                    content="Power BI interview questions, DAX, data modeling, Power Query, Power BI Service, visualization, business intelligence"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#F2C811" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/power-bi" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Power BI Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Power BI interview prep with 50+ questions covering DAX, data modeling, Power Query, and service features."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/power-bi" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Power BI Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Power BI interviews with 50+ questions covering DAX, modeling, and service."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/power-bi" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/power-bi" />

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
                            description: "Interview preparation platform for BI professionals.",
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
                                    name: "Power BI",
                                    item: "https://codeskipper.in/interview/power-bi",
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
                            name: "Power BI Interview Questions",
                            description: "50+ curated Power BI interview questions with detailed answers.",
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
                            name: "Power BI Interview Questions Collection",
                            description: "A comprehensive collection of Power BI interview questions for BI developers.",
                            url: "https://codeskipper.in/interview/power-bi",
                            about: {
                                "@type": "Thing",
                                name: "Power BI Interview Preparation",
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
                            description: "Power BI interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Power BI, DAX, Data Modeling, Power Query",
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
                            name: "Power BI Interview Preparation",
                            description: "Complete preparation for Power BI interviews covering all key areas.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "DAX, Data Modeling, Power Query, Visualization, Power BI Service",
                            url: "https://codeskipper.in/interview/power-bi",
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
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaChartBar className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Power BI <span className="text-yellow-600">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Power BI interview —
                            from DAX and data modeling to Power Query, visualizations, and service features.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCogs /> BI &amp; Analytics
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
                            <FaRocket className="text-yellow-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Power BI Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaDatabase className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Data Modeling</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand star schema, relationships, and DAX context. Be able to design efficient models.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaCogs className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Power Query is Essential</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with M language and data transformation steps. Show how you clean and shape data.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaTable className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know DAX Inside Out</h3>
                                    <p className="text-gray-600 text-sm">
                                        Practice CALCULATE, time intelligence, iterators, and filter functions. These are frequently tested.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaCloud className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Service and Collaboration</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand workspaces, sharing, RLS, and refresh. Real-world scenarios often involve service features.
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
                        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Visualize Your Interview Success?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all data and analytics topics.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-yellow-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Power BI Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PowerBiInterview;