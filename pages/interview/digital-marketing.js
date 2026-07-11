import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaBullhorn,
    FaChartLine,
    FaSearch,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGoogle,
    FaEnvelope,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaMobileAlt,
    FaClock,
    FaDollarSign,
} from "react-icons/fa";

const DigitalMarketingInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Digital Marketing Interview Questions ──────────────────────────────
    const questions = [
        {
            q: "What is digital marketing and how does it differ from traditional marketing?",
            a: "Digital marketing is the promotion of products or services using digital channels such as search engines, social media, email, and websites. Unlike traditional marketing (TV, radio, print), digital marketing allows for real-time interaction, precise targeting, measurable results, and cost-effectiveness. It also enables two-way communication and personalization at scale.",
        },
        {
            q: "Explain the key pillars of digital marketing.",
            a: "The key pillars of digital marketing are: 1) Search Engine Optimization (SEO) – organic visibility, 2) Search Engine Marketing (SEM) – paid search (PPC), 3) Social Media Marketing – engaging audiences on platforms, 4) Content Marketing – creating valuable content, 5) Email Marketing – nurturing leads, 6) Analytics – measuring performance, and 7) Conversion Rate Optimization (CRO) – turning visitors into customers.",
        },
        {
            q: "What is SEO and why is it important?",
            a: "SEO (Search Engine Optimization) is the practice of optimizing websites to improve their visibility in organic search engine results. It is crucial because most online experiences begin with a search engine, and higher rankings drive more traffic, credibility, and conversions. SEO involves on-page, off-page, and technical strategies to align with search engine algorithms.",
        },
        {
            q: "Explain the difference between on-page and off-page SEO.",
            a: "On-page SEO refers to optimizing elements within the website itself: content, meta tags, headings, URL structure, internal linking, and image alt texts. Off-page SEO involves activities outside the website: backlink building, social media engagement, guest blogging, and brand mentions. Both are essential for a holistic SEO strategy.",
        },
        {
            q: "What is a keyword and how do you choose the right ones?",
            a: "A keyword is a term or phrase that users type into search engines. Choosing the right ones involves: 1) Understanding user intent (informational, navigational, transactional), 2) Using keyword research tools (Google Keyword Planner, SEMrush, Ahrefs), 3) Analyzing search volume and competition, 4) Considering long-tail keywords (more specific, less competitive), and 5) Aligning with business goals.",
        },
        {
            q: "What is the difference between organic and paid search results?",
            a: "Organic search results are unpaid listings that appear based on relevance to the query, determined by search engine algorithms. Paid search results are ads that appear at the top or bottom of SERPs, paid for on a PPC (pay-per-click) basis. Organic results build trust over time; paid results offer immediate visibility but require budget.",
        },
        {
            q: "Explain PPC (Pay-Per-Click) advertising and how it works.",
            a: "PPC is an advertising model where advertisers pay a fee each time their ad is clicked. It's a way of buying visits to your site rather than earning them organically. Platforms like Google Ads and Bing Ads run auctions where advertisers bid on keywords. The ad rank is determined by bid amount and quality score (relevance, landing page experience, CTR).",
        },
        {
            q: "What is Quality Score in Google Ads and why does it matter?",
            a: "Quality Score is a metric used by Google that rates the quality and relevance of your keywords, ads, and landing pages. It affects ad rank and cost-per-click (CPC). Factors include expected click-through rate (CTR), ad relevance, and landing page experience. A higher Quality Score leads to better ad positions and lower costs.",
        },
        {
            q: "What is a landing page and what makes it effective?",
            a: "A landing page is a standalone web page designed for a specific marketing campaign, with a clear call-to-action (CTA). Effective landing pages have: a compelling headline, persuasive copy, relevant visuals, a single CTA, minimal navigation, trust signals (testimonials, badges), and are optimized for speed and mobile devices.",
        },
        {
            q: "Explain the concept of A/B testing in digital marketing.",
            a: "A/B testing (split testing) compares two versions of a web page, email, or ad to determine which performs better. It involves showing variant A to one group and variant B to another, then analyzing conversion metrics. It's used to optimize headlines, CTAs, images, layouts, and copy for higher conversion rates.",
        },
        {
            q: "What are the main social media platforms and their primary audiences?",
            a: "Facebook: broad demographic, older audiences. Instagram: visually oriented, younger (18-34). Twitter: news, real-time, professionals. LinkedIn: B2B, professionals, job seekers. TikTok: Gen Z, short-form video. YouTube: long-form video, all ages. Pinterest: mainly women, inspiration-driven. Each platform requires tailored content strategies.",
        },
        {
            q: "What is a social media content calendar and why is it used?",
            a: "A social media content calendar is a schedule that outlines what, when, and where to post on various social platforms. It ensures consistency, aligns with marketing campaigns, allows for strategic planning, and saves time. It typically includes post copy, visuals, hashtags, and posting times.",
        },
        {
            q: "Explain the difference between reach and impressions.",
            a: "Reach is the number of unique users who have seen your content. Impressions are the total number of times your content was displayed, regardless of whether it was clicked. Impressions count multiple views from the same user; reach counts individual users. High impressions with low reach indicate high frequency.",
        },
        {
            q: "What is engagement rate and how is it calculated?",
            a: "Engagement rate measures the level of interaction with content, expressed as a percentage. Calculation: (total engagements / total reach or impressions) × 100. Engagements include likes, comments, shares, clicks, and saves. A high engagement rate indicates content resonance and is a key metric for social media success.",
        },
        {
            q: "What is content marketing and why is it important?",
            a: "Content marketing is a strategic approach focused on creating and distributing valuable, relevant, consistent content to attract and retain a clearly defined audience. It builds trust, educates prospects, positions authority, and drives profitable customer action. It's essential for SEO, lead generation, and brand building.",
        },
        {
            q: "What types of content are commonly used in content marketing?",
            a: "Common content types: blog posts, articles, whitepapers, e-books, infographics, videos, podcasts, webinars, case studies, newsletters, and social media posts. The choice depends on audience preferences, funnel stage, and resources. A mix of formats caters to different learning styles and consumption habits.",
        },
        {
            q: "What is a buyer persona and why is it useful?",
            a: "A buyer persona is a semi-fictional representation of your ideal customer based on market research and real data. It includes demographics, psychographics, motivations, pain points, and buying behavior. It guides content creation, channel selection, messaging, and personalization, ensuring marketing resonates with the target audience.",
        },
        {
            q: "Explain the sales funnel (Awareness, Interest, Decision, Action).",
            a: "The sales funnel (AIDA) represents the customer journey: Awareness (prospect becomes aware of the brand), Interest (engages with content), Decision (considers purchasing), Action (converts). Digital marketing tactics map to each stage: top-of-funnel (blog, social), middle-of-funnel (email, webinars), bottom-of-funnel (reviews, demos, offers).",
        },
        {
            q: "What is conversion rate optimization (CRO) and how is it done?",
            a: "CRO is the practice of increasing the percentage of website visitors who take a desired action (e.g., purchase, sign-up). It involves: analyzing user behavior (heatmaps, session recordings), identifying friction points, creating hypotheses, A/B testing, and implementing improvements. It's data-driven and iterative.",
        },
        {
            q: "What is Google Analytics and what can it track?",
            a: "Google Analytics is a web analytics tool that tracks and reports website traffic and user behavior. It can measure: number of visitors, sessions, pageviews, bounce rate, average session duration, conversion goals, traffic sources, user flow, demographics, and more. It's essential for data-driven marketing decisions.",
        },
        {
            q: "Explain bounce rate and why it matters.",
            a: "Bounce rate is the percentage of single-page sessions (where users leave without interacting). A high bounce rate can indicate poor user experience, irrelevant content, or slow loading. However, it's not always negative (e.g., blog articles may have high bounce rate but high engagement). It matters as a UX signal and can affect SEO.",
        },
        {
            q: "What is the difference between a macro conversion and a micro conversion?",
            a: "A macro conversion is the primary goal (e.g., purchase, sign-up). A micro conversion is a smaller step toward that goal (e.g., email sign-up, PDF download, video view). Tracking micro conversions helps understand user intent and optimize the funnel.",
        },
        {
            q: "What is remarketing and how does it work?",
            a: "Remarketing (or retargeting) is a strategy that shows ads to users who have previously visited your website but did not convert. It uses cookies to track visitors and displays relevant ads across the web or social platforms. It keeps your brand top-of-mind and often has higher conversion rates.",
        },
        {
            q: "What is programmatic advertising?",
            a: "Programmatic advertising is the automated buying and selling of digital ad space using algorithms and real-time bidding (RTB). It uses data to target specific audiences and optimize campaigns in real-time. It streamlines ad buying, improves targeting, and increases efficiency over manual processes.",
        },
        {
            q: "Explain the importance of mobile optimization in digital marketing.",
            a: "With over half of web traffic from mobile, mobile optimization is critical. It includes responsive design, fast loading times, thumb-friendly navigation, and click-to-call buttons. Poor mobile experience increases bounce rate and hurts conversions. Google also uses mobile-first indexing, making it a ranking factor.",
        },
        {
            q: "What is local SEO and how is it implemented?",
            a: "Local SEO optimizes a business's online presence to attract more customers from relevant local searches. Implementation: claim and optimize Google My Business listing, gather positive reviews, add local keywords, build local citations (NAP – name, address, phone), and create locally relevant content.",
        },
        {
            q: "What is a backlink and why is it important for SEO?",
            a: "A backlink is a link from one website to another. They are like 'votes of confidence' and are a key ranking factor in SEO. Quality backlinks from authoritative and relevant sites improve domain authority, referral traffic, and search rankings. Building backlinks requires content quality, outreach, and relationship building.",
        },
        {
            q: "Explain the concept of 'domain authority' and 'page authority'.",
            a: "Domain Authority (DA) is a third-party metric (Moz) predicting how well a website ranks on search engines. Page Authority (PA) is a similar metric for a specific page. They consider factors like number of backlinks, quality of linking domains, and content. They are not Google metrics but useful benchmarks.",
        },
        {
            q: "What is a meta description and how does it influence CTR?",
            a: "A meta description is a brief summary of a webpage's content, displayed in search results below the title. It influences click-through rate (CTR) by providing users with a preview. A compelling, keyword-rich, and action-oriented meta description can entice users to click, even if the page ranks lower.",
        },
        {
            q: "What is the role of a content management system (CMS) in digital marketing?",
            a: "A CMS (e.g., WordPress) allows marketers to create, manage, and publish digital content without technical skills. It supports SEO plugins, analytics integration, mobile responsiveness, and user-friendly editing. It streamlines content marketing, facilitates updates, and enhances collaboration.",
        },
        {
            q: "Explain the difference between organic, paid, and earned media.",
            a: "Organic media: content that gains exposure naturally (SEO, social posts). Paid media: advertising to amplify reach (PPC, sponsored posts). Earned media: publicity gained through word-of-mouth, shares, press coverage, and customer advocacy. A balanced media mix is key for comprehensive digital marketing.",
        },
        {
            q: "What is influencer marketing and how is it effective?",
            a: "Influencer marketing leverages individuals with engaged followings to promote products or services. It is effective because influencers have built trust with their audience, and recommendations feel authentic. It can increase brand awareness, drive engagement, and generate sales, especially among younger demographics.",
        },
        {
            q: "What is email marketing and what are best practices?",
            a: "Email marketing is sending commercial messages to a list of subscribers. Best practices: build a permission-based list, segment your audience, personalize content, craft compelling subject lines, use responsive design, include clear CTAs, test and optimize, and comply with GDPR/CAN-SPAM.",
        },
        {
            q: "What is a drip campaign and when would you use it?",
            a: "A drip campaign is a series of automated emails sent at predefined intervals based on user behavior or time. It's used for lead nurturing, onboarding, re-engagement, and upselling. It educates and guides subscribers gradually, moving them down the funnel.",
        },
        {
            q: "Explain the concept of customer lifetime value (CLV).",
            a: "CLV is the total revenue a business can expect from a single customer over the entire relationship. It helps determine how much to invest in acquiring and retaining customers. Marketing strategies can focus on increasing CLV through upselling, cross-selling, and loyalty programs.",
        },
        {
            q: "What are vanity metrics and why are they dangerous?",
            a: "Vanity metrics are data points that look impressive but don't reflect business value (e.g., likes, followers, page views). They can mislead and distract from true performance. Instead, focus on actionable metrics like conversion rate, cost per acquisition, and revenue. Use vanity metrics for context, not as primary KPIs.",
        },
        {
            q: "What is marketing attribution and what models exist?",
            a: "Marketing attribution assigns credit to different channels or touchpoints in the customer journey. Models include: Last-click (full credit to last touch), First-click (full credit to first touch), Linear (equal credit), Time-decay (more credit to recent), and Data-driven (algorithmic). Choosing the right model depends on business goals.",
        },
        {
            q: "What is the difference between inbound and outbound marketing?",
            a: "Inbound marketing attracts customers through valuable content and experiences (SEO, blogs, social). Outbound marketing pushes messages to a broad audience (TV, radio, cold calls, display ads). Inbound is permission-based, cost-effective, and builds trust; outbound is interruptive but can be effective for awareness.",
        },
        {
            q: "What is a marketing automation platform and what are its benefits?",
            a: "A marketing automation platform (e.g., HubSpot, Marketo) automates repetitive tasks: email sequences, social posting, lead scoring, and analytics. Benefits: increased efficiency, personalization at scale, lead nurturing, and better alignment with sales. It enables tracking of customer interactions across channels.",
        },
        {
            q: "How do you measure the ROI of digital marketing campaigns?",
            a: "ROI is calculated as (Revenue - Cost) / Cost * 100. For digital marketing, it involves tracking conversions and attributing them to specific channels. Use UTM parameters, analytics, and CRM data. Measure against goals: cost per acquisition, customer lifetime value, and overall profit.",
        },
        {
            q: "What is a marketing funnel and how does it apply to digital?",
            a: "The marketing funnel visualizes the customer journey from awareness to purchase. Digital tactics mapped: Top (TOFU) – SEO, content, social; Middle (MOFU) – email, webinars, retargeting; Bottom (BOFU) – reviews, demos, offers. The funnel helps tailor messaging to user intent at each stage.",
        },
        {
            q: "Explain the role of storytelling in digital marketing.",
            a: "Storytelling creates an emotional connection with the audience. It humanizes the brand, makes content memorable, and differentiates from competitors. Effective stories have a relatable hero, a conflict, and a resolution. It's used in video, blog posts, social media, and email campaigns to engage and persuade.",
        },
        {
            q: "What is a competitive analysis in digital marketing?",
            a: "Competitive analysis involves evaluating competitors' strategies, strengths, and weaknesses. It includes analyzing their SEO keywords, content, social media presence, ad campaigns, and customer reviews. It helps identify opportunities, benchmark performance, and refine your own strategy.",
        },
        {
            q: "What are some key trends in digital marketing for the coming year?",
            a: "Key trends include: AI-driven personalization (ChatGPT, generative AI), short-form video (TikTok, Reels), voice search optimization, interactive content (quizzes, polls), privacy-first marketing (less cookie dependency), first-party data strategies, and sustainable/ethical marketing. Also, social commerce and influencer marketing continue to grow.",
        },
        {
            q: "What is UTM tracking and why is it used?",
            a: "UTM parameters are tags added to URLs to track campaign performance in analytics. They include source, medium, campaign, term, and content. They enable precise attribution of traffic and conversions to specific campaigns, helping marketers measure effectiveness and optimize spend.",
        },
        {
            q: "Explain the concept of retargeting versus remarketing.",
            a: "In digital marketing, 'retargeting' usually refers to display ads shown to users who visited your site. 'Remarketing' often refers to email marketing to existing contacts or past customers. However, Google and others use them interchangeably. Both aim to re-engage users who have shown interest.",
        },
        {
            q: "What is a content audit and why is it performed?",
            a: "A content audit is a systematic review of all content on a website. It evaluates quality, relevance, performance, and SEO. It's performed to identify outdated content, gaps, duplication, and opportunities for improvement. It helps align content with business goals and user needs.",
        },
        {
            q: "What is the role of chatbots in digital marketing?",
            a: "Chatbots are AI-powered tools that simulate conversation with users on websites or messaging apps. They provide instant customer service, qualify leads, answer FAQs, and guide users to relevant content. They improve user experience, increase engagement, and reduce response time.",
        },
        {
            q: "How can you optimize a website for voice search?",
            a: "Voice search optimization involves: using natural language keywords (long-tail, conversational), optimizing for 'near me' queries, providing direct answers to questions, creating FAQ schema, improving mobile speed, and focusing on local SEO. Since voice searches are often question-based, content should be concise and structured.",
        },
        {
            q: "What are some common mistakes in digital marketing?",
            a: "Common mistakes: not having a clear strategy, ignoring data/analytics, targeting the wrong audience, inconsistent branding, poor landing page optimization, neglecting mobile, not testing, over-relying on one channel, and failing to adapt to algorithm changes. Also, not defining KPIs leads to wasted effort.",
        },
        {
            q: "What does the future of digital marketing look like?",
            a: "The future is more AI-driven (personalized experiences), privacy-centric (cookieless, first-party data), omnichannel (seamless cross-device), and interactive (AR/VR). Video will dominate, and community building will be key. Marketers will need to balance personalization with privacy, and automation with human touch.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Domains" },
        { number: "ROI", text: "Key Focus" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Digital Marketing Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Digital Marketing interview with 50+ expert questions covering SEO, PPC, social media, content marketing, analytics, and emerging trends."
                />
                <meta
                    name="keywords"
                    content="Digital marketing interview questions, SEO, PPC, social media marketing, content marketing, analytics, email marketing, digital marketing manager interview"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#FF5722" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/digital-marketing" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Digital Marketing Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Digital Marketing interview prep with 50+ questions covering all key domains: SEO, PPC, social media, content, analytics, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/digital-marketing" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Digital Marketing Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Digital Marketing interviews with 50+ questions covering core concepts and modern strategies."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/digital-marketing" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/digital-marketing" />

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
                            description: "Interview preparation platform for digital marketing professionals.",
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
                                    name: "Digital Marketing",
                                    item: "https://codeskipper.in/interview/digital-marketing",
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
                            name: "Digital Marketing Interview Questions",
                            description: "50+ curated digital marketing interview questions with detailed answers.",
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
                            name: "Digital Marketing Interview Questions Collection",
                            description: "A comprehensive collection of digital marketing interview questions for marketers.",
                            url: "https://codeskipper.in/interview/digital-marketing",
                            about: {
                                "@type": "Thing",
                                name: "Digital Marketing Interview Preparation",
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
                            description: "Digital marketing interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Digital Marketing, SEO, PPC, Social Media, Content Marketing, Analytics",
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
                            name: "Digital Marketing Interview Preparation",
                            description: "Complete preparation for digital marketing interviews covering all major domains.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "SEO, SEM, Social Media, Content Marketing, Email Marketing, Analytics, CRO",
                            url: "https://codeskipper.in/interview/digital-marketing",
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
            <section className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-8">
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
                                <FaBullhorn className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Digital Marketing <span className="text-orange-500">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Digital Marketing interview —
                            from SEO and PPC to content strategy, analytics, and emerging trends.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <FaDollarSign /> ROI Focus
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
                            <FaChartLine className="text-orange-500 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Digital Marketing Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaSearch className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master SEO &amp; Analytics</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be ready to discuss keyword research, on-page optimization, and Google Analytics metrics in detail.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaFacebook className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Social Platforms</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand audience demographics, content formats, and paid advertising options across major platforms.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaEnvelope className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Email &amp; Automation</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with email marketing best practices, segmentation, and marketing automation tools.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaClock className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Stay Trendy</h3>
                                    <p className="text-gray-600 text-sm">
                                        Keep up with AI in marketing, short-form video, and privacy changes (cookieless future).
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
                                Ready to Launch Your Marketing Career?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all technology and business domains.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-200 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Digital Marketing Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default DigitalMarketingInterview;