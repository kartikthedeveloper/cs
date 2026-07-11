import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaShieldAlt,
    FaLock,
    FaUserSecret,
    FaNetworkWired,
    FaServer,
    FaBug,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaSkull,
    FaKey,
    FaCloud,
} from "react-icons/fa";

const CybersecurityInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Cybersecurity Interview Questions ──────────────────────────────────
    const questions = [
        {
            q: "What is the CIA triad in cybersecurity?",
            a: "The CIA triad is a foundational model for information security, consisting of three pillars: Confidentiality (ensuring data is accessible only to authorized users), Integrity (ensuring data is accurate and unaltered), and Availability (ensuring data and systems are accessible when needed). These three principles guide security policies, controls, and incident response.",
        },
        {
            q: "What is the difference between authentication and authorization?",
            a: "Authentication is the process of verifying the identity of a user or system (e.g., logging in with a username and password). Authorization determines what resources or actions an authenticated user is permitted to access (e.g., permissions, roles). Authentication proves who you are; authorization decides what you can do.",
        },
        {
            q: "Explain symmetric vs. asymmetric encryption.",
            a: "Symmetric encryption uses a single shared key for both encryption and decryption (e.g., AES, DES). It's fast and efficient but requires secure key distribution. Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption (e.g., RSA, ECC). It solves key distribution but is slower. Asymmetric is often used for key exchange and digital signatures.",
        },
        {
            q: "What is a digital signature and how does it work?",
            a: "A digital signature is a cryptographic technique used to verify the authenticity and integrity of a digital message or document. It works by: 1) Hashing the message to create a digest; 2) Encrypting the digest with the sender's private key; 3) The recipient decrypts with the sender's public key and compares hashes. This ensures non-repudiation and tamper-proofing.",
        },
        {
            q: "What is the difference between hashing and encryption?",
            a: "Hashing is a one-way function that maps data of any size to a fixed-size hash value (e.g., SHA-256). It is not reversible; it's used for integrity verification and password storage. Encryption is a two-way function that transforms plaintext to ciphertext using a key; it is reversible with the correct key. Encryption provides confidentiality; hashing provides integrity.",
        },
        {
            q: "What is a firewall and what are its types?",
            a: "A firewall is a network security device that monitors and filters incoming and outgoing traffic based on predetermined security rules. Types include: Packet-filtering firewalls (inspect packets at the network layer), Stateful inspection firewalls (track connection states), Application-layer firewalls (proxy-based, inspect application data), and Next-generation firewalls (combine features like intrusion prevention).",
        },
        {
            q: "What is an intrusion detection system (IDS) and intrusion prevention system (IPS)?",
            a: "IDS monitors network traffic for suspicious activity and alerts administrators. It is passive (does not block traffic). IPS is similar but actively blocks or prevents detected threats (inline). Both use signature-based detection (known patterns) or anomaly-based detection (behavioral baselines). IPS is more proactive and is often deployed inline with the traffic flow.",
        },
        {
            q: "Explain the concept of Defense in Depth.",
            a: "Defense in Depth is a security strategy that employs multiple layers of security controls throughout an IT system. If one layer fails, others continue to protect. Layers include physical security, network security (firewalls, IDS/IPS), host security (antivirus, patch management), application security, data encryption, and user awareness. This approach reduces the risk of a single point of failure.",
        },
        {
            q: "What is the OWASP Top 10?",
            a: "The OWASP Top 10 is a standard awareness document for developers and web application security. It lists the ten most critical web application security risks, including: Broken Access Control, Cryptographic Failures, Injection (SQL, XSS), Insecure Design, Security Misconfiguration, Vulnerable and Outdated Components, Identification and Authentication Failures, Software and Data Integrity Failures, Security Logging and Monitoring Failures, and Server-Side Request Forgery.",
        },
        {
            q: "What is SQL injection and how can it be prevented?",
            a: "SQL injection is an attack where malicious SQL code is inserted into input fields or URL parameters to manipulate database queries. Prevention: Use parameterized queries (prepared statements) with bound parameters, apply input validation and sanitization, use stored procedures, employ least privilege database accounts, and utilize web application firewalls (WAF).",
        },
        {
            q: "What is Cross-Site Scripting (XSS) and its types?",
            a: "XSS is a vulnerability where attackers inject malicious scripts into web pages viewed by other users. Types: Reflected XSS (script is reflected off a web server via input like URL parameters), Stored XSS (script is stored on the server, e.g., in a database), and DOM-based XSS (script executes via client-side DOM manipulation). Prevention: output encoding, input validation, Content Security Policy (CSP).",
        },
        {
            q: "What is CSRF (Cross-Site Request Forgery) and how is it mitigated?",
            a: "CSRF tricks a user's browser into making an unwanted request to a trusted site where the user is authenticated. It exploits session cookies. Mitigation: Use CSRF tokens (synchronizer tokens) embedded in forms and validated on the server, SameSite cookies (Strict/Lax), and require re-authentication for sensitive actions.",
        },
        {
            q: "Explain the concept of Zero Trust Architecture.",
            a: "Zero Trust is a security model based on the principle 'never trust, always verify'. It assumes that threats exist both inside and outside the network. Key tenets: continuous verification of identity and authorization, least-privilege access, micro-segmentation, and assume breach. It requires strong authentication, continuous monitoring, and dynamic policy enforcement for all resources.",
        },
        {
            q: "What is the difference between IDS and IPS?",
            a: "IDS (Intrusion Detection System) monitors network traffic and alerts on suspicious activity but does not take action. IPS (Intrusion Prevention System) actively blocks or mitigates threats in real time. IPS is often deployed inline, while IDS is out-of-band. Both use signatures and anomalies to detect attacks.",
        },
        {
            q: "What are common types of malware?",
            a: "Common malware types include: Viruses (self-replicating, attach to files), Worms (self-replicating, spread via networks), Trojans (disguised as legitimate software), Ransomware (encrypts files, demands payment), Spyware (steals information), Adware (displays unwanted ads), Rootkits (hide malicious activity), and Keyloggers (record keystrokes).",
        },
        {
            q: "What is a DDoS attack and how can it be mitigated?",
            a: "DDoS (Distributed Denial of Service) aims to overwhelm a service with traffic from multiple sources, making it unavailable. Mitigation: Use traffic scrubbing services, rate limiting, load balancing, web application firewalls, and cloud-based DDoS protection. Also, implement network redundancy and scale infrastructure to absorb attacks.",
        },
        {
            q: "What is PKI (Public Key Infrastructure)?",
            a: "PKI is a framework of policies, technologies, and procedures for creating, managing, distributing, and revoking digital certificates. It enables secure communication using asymmetric cryptography. Components: Certificate Authority (CA), Registration Authority (RA), certificate repository, and certificate management system. PKI is used for SSL/TLS, email encryption, and code signing.",
        },
        {
            q: "What is SSL/TLS and how does it work?",
            a: "SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic protocols that provide secure communication over a network. They use a handshake to establish a session, negotiate cipher suites, authenticate the server (and optionally client) via certificates, and exchange session keys. TLS is used for HTTPS, email, and VPNs.",
        },
        {
            q: "What is a VPN and why is it used?",
            a: "A VPN (Virtual Private Network) extends a private network across a public network, allowing users to send and receive data as if connected directly. It provides confidentiality and integrity through encryption, and often includes authentication. It's used for remote access, site-to-site connectivity, and to bypass geo-restrictions.",
        },
        {
            q: "Explain the difference between hashing and encryption with examples.",
            a: "Hashing is a one-way function (e.g., SHA-256) that produces a fixed-size output from any input. It's used for password storage (store hash, not plaintext) and file integrity checks. Encryption is two-way (e.g., AES) and is used to protect data confidentiality—both encryption and decryption require keys. Hashing is not reversible; encryption is.",
        },
        {
            q: "What is a man-in-the-middle attack and how can it be prevented?",
            a: "A MITM attack occurs when a malicious actor intercepts and potentially alters communication between two parties without their knowledge. Prevention: Use end-to-end encryption (TLS/SSL), strong authentication (certificates), implement HSTS (HTTP Strict Transport Security), and avoid public Wi-Fi for sensitive transactions.",
        },
        {
            q: "What is the principle of least privilege?",
            a: "The principle of least privilege dictates that a user, system, or process should be granted only the minimum permissions necessary to perform its function. This limits the potential damage from accidental errors, malicious insiders, or compromised accounts. It is applied in access control, system administration, and application design.",
        },
        {
            q: "Explain the concept of 'security through obscurity' and why it's discouraged.",
            a: "Security through obscurity relies on keeping the design or implementation secret to achieve security. It's discouraged because it's not a robust strategy; if the secrecy is discovered, the security fails. Defense should rely on well-understood, tested cryptographic algorithms and secure configurations that remain secure even if the attacker knows the details.",
        },
        {
            q: "What is a security incident response plan?",
            a: "An incident response plan is a documented, systematic approach to handling security breaches. It typically follows phases: Preparation, Identification (detection), Containment (limit impact), Eradication (remove root cause), Recovery (restore systems), and Lessons Learned (post-mortem). It ensures a coordinated and effective response to minimize damage.",
        },
        {
            q: "What is the difference between vulnerability, threat, and risk?",
            a: "A vulnerability is a weakness in a system (e.g., unpatched software). A threat is a potential actor or event that could exploit a vulnerability (e.g., hacker). Risk is the likelihood that a threat will exploit a vulnerability, combined with the potential impact. Risk = Threat × Vulnerability × Impact. Risk management involves identifying and mitigating risks.",
        },
        {
            q: "What is a honeypot in cybersecurity?",
            a: "A honeypot is a decoy system or resource designed to lure attackers. It appears as a legitimate target but is isolated and monitored. It serves to detect, deflect, or study attack behaviors without compromising production systems. Honeypots can be low-interaction (emulate services) or high-interaction (real systems with monitoring).",
        },
        {
            q: "Explain the concept of 'zero-day' vulnerability.",
            a: "A zero-day vulnerability is a previously unknown security flaw that has not been patched. Attackers can exploit it before the vendor becomes aware or develops a fix. The term 'zero-day' refers to the fact that the vendor has zero days to address it. Zero-day exploits are highly valuable and often used in targeted attacks.",
        },
        {
            q: "What is the difference between symmetric and asymmetric encryption in terms of key management?",
            a: "Symmetric encryption uses a single shared secret key for both encryption and decryption, so key distribution is a challenge—must be securely shared. Asymmetric uses a public/private key pair; the public key can be freely distributed, while the private key is kept secret. This simplifies key management for large networks but is computationally heavier.",
        },
        {
            q: "What are common authentication factors?",
            a: "Authentication factors are categories of credentials: Something you know (password, PIN), Something you have (smart card, token, mobile phone), Something you are (biometrics: fingerprint, iris scan), Somewhere you are (location-based), and Something you do (behavioral patterns). Multi-factor authentication (MFA) combines two or more factors for stronger security.",
        },
        {
            q: "What is the purpose of an access control list (ACL)?",
            a: "An ACL is a list of permissions attached to a resource that specifies which users or systems are granted access and what operations they can perform. It's used in file systems, network routers, firewalls, and databases. ACLs enforce the principle of least privilege by defining fine-grained access rules.",
        },
        {
            q: "Explain the difference between a vulnerability assessment and a penetration test.",
            a: "A vulnerability assessment is a systematic review of systems to identify and classify vulnerabilities, typically using automated tools. It generates a report but does not exploit the vulnerabilities. A penetration test (pen test) is a simulated attack that actively exploits vulnerabilities to assess the real-world impact and determine if a malicious actor could breach defenses.",
        },
        {
            q: "What is the NIST Cybersecurity Framework?",
            a: "The NIST Cybersecurity Framework is a voluntary set of standards, guidelines, and best practices to manage cybersecurity risk. It consists of five core functions: Identify, Protect, Detect, Respond, and Recover. It helps organizations align security activities with business requirements and improve risk management.",
        },
        {
            q: "What is GDPR and what are its key requirements?",
            a: "GDPR (General Data Protection Regulation) is a European Union regulation on data protection and privacy. Key requirements: obtain explicit consent for data processing, data minimization, ensure data subject rights (access, rectification, erasure), mandatory breach notification within 72 hours, and appoint a Data Protection Officer (DPO) for certain organizations. Fines can be up to €20 million or 4% of global revenue.",
        },
        {
            q: "What is the difference between a vulnerability and an exploit?",
            a: "A vulnerability is a weakness in a system that could be exploited (e.g., a buffer overflow). An exploit is a piece of code or technique that takes advantage of a vulnerability to cause unintended behavior. An exploit materializes a vulnerability into a real attack.",
        },
        {
            q: "What is a certificate authority (CA)?",
            a: "A CA is a trusted entity that issues digital certificates. It validates the identity of certificate applicants and binds a public key to the identity. The CA is part of the Public Key Infrastructure (PKI) and is trusted by browsers and operating systems. It also manages certificate revocation via CRLs or OCSP.",
        },
        {
            q: "Explain the concept of 'least common mechanism'.",
            a: "Least common mechanism means that processes should not share resources (such as memory, files, or privileges) unless necessary. Minimizing shared resources reduces the attack surface and prevents information leakage across processes. It is a design principle for secure systems.",
        },
        {
            q: "What is a replay attack and how is it prevented?",
            a: "A replay attack involves intercepting and retransmitting a valid communication to trick the receiver. Prevention: Use timestamps or nonces (number used once) in protocols, implement session tokens with expiration, and use cryptographic mechanisms like digital signatures and sequence numbers.",
        },
        {
            q: "What is the role of a Security Operations Center (SOC)?",
            a: "A SOC is a centralized team responsible for monitoring, detecting, analyzing, and responding to cybersecurity incidents. It uses SIEM (Security Information and Event Management) tools to collect and correlate security data from across the organization. SOC analysts handle alerts, threat hunting, and incident response.",
        },
        {
            q: "What is the difference between white-box, black-box, and gray-box testing?",
            a: "These are testing methodologies for security assessments. White-box testing: full knowledge of internal code and architecture. Black-box testing: no knowledge of internals; simulates an external attacker. Gray-box testing: partial knowledge, often combined with limited internal access. They are used in penetration testing and code reviews.",
        },
        {
            q: "Explain the concept of 'security misconfiguration'.",
            a: "Security misconfiguration refers to insecure default settings, incomplete or ad-hoc configurations, open cloud storage, misconfigured HTTP headers, or unnecessary services enabled. It is a common vulnerability (part of OWASP Top 10). Prevention: Hardening guides, regular audits, automated configuration management.",
        },
        {
            q: "What is the difference between a virus and a worm?",
            a: "A virus is a piece of code that attaches itself to a host file or program and requires user action to spread (e.g., opening an infected attachment). A worm is a standalone program that replicates and spreads independently over networks without user intervention. Both are malware, but worms are more self-contained.",
        },
        {
            q: "What is a 'social engineering' attack?",
            a: "Social engineering is a manipulation technique that exploits human psychology to trick individuals into divulging confidential information or performing actions (e.g., clicking malicious links). Common types: phishing (emails), vishing (voice calls), smishing (SMS), and pretexting. Training and awareness are key defenses.",
        },
        {
            q: "Explain the concept of 'least privilege' in the context of operating systems.",
            a: "Least privilege in OS means that users and processes should run with the minimum permissions necessary. For example, users should not have administrative privileges for daily tasks; applications should run with restricted user accounts. This limits the impact of malware or compromised accounts.",
        },
        {
            q: "What is the difference between a risk assessment and a risk analysis?",
            a: "Risk assessment is the overall process of identifying, analyzing, and evaluating risk. Risk analysis is a subset that involves estimating the likelihood and impact of identified risks. Risk assessment includes risk analysis and then risk evaluation (comparing against risk criteria). Both are part of risk management.",
        },
        {
            q: "What is a 'hash collision' and why is it a concern?",
            a: "A hash collision occurs when two different inputs produce the same hash output. This is a concern because it could allow attackers to substitute data without changing the hash, undermining integrity. Modern cryptographic hashes (e.g., SHA-256) are designed to be collision-resistant, but older algorithms like MD5 and SHA-1 have known collisions.",
        },
        {
            q: "What is a 'cloud security' shared responsibility model?",
            a: "In cloud computing, security is a shared responsibility between the cloud provider and the customer. The provider secures the infrastructure (physical, network, hypervisor), while the customer secures their data, applications, access controls, and configurations. The specific division depends on the service model (IaaS, PaaS, SaaS).",
        },
        {
            q: "What is a 'security audit'?",
            a: "A security audit is a systematic evaluation of an organization's security policies, controls, and procedures against a set of standards or regulations. It involves reviewing system logs, configurations, access controls, and compliance with frameworks like ISO 27001. Audits identify weaknesses and ensure continuous improvement.",
        },
        {
            q: "Explain the concept of 'air-gapped' network.",
            a: "An air-gapped network is a physical or logical isolation where a computer or network is not connected to the internet or any other network. This is used for highly sensitive systems (e.g., military, critical infrastructure) to prevent remote attacks. Data transfer is done via physical media (USB, CD).",
        },
        {
            q: "What is a 'brute-force attack' and how can it be prevented?",
            a: "A brute-force attack tries all possible combinations of credentials or keys until the correct one is found. Prevention: Use strong, complex passwords; implement account lockout after failed attempts; use multi-factor authentication; and employ rate limiting or CAPTCHA.",
        },
        {
            q: "What is the role of encryption in data protection?",
            a: "Encryption ensures data confidentiality by transforming readable data into unreadable ciphertext using a key. It protects data at rest (stored on disks), data in transit (network communication), and data in use (memory). Even if an attacker gains access to storage, they cannot read the data without the decryption key.",
        },
        {
            q: "What is a 'supply chain attack'?",
            a: "A supply chain attack targets an organization by compromising third-party vendors, service providers, or software dependencies. Attackers inject malicious code into legitimate updates or products. Prevention: vet vendors, code signing, software composition analysis, and continuous monitoring of dependencies.",
        },
        {
            q: "What are the emerging trends in cybersecurity?",
            a: "Emerging trends include: AI/ML in security (threat detection and response), Zero Trust adoption, cloud-native security (CSPM, CWPP), increased focus on IoT/OT security, Quantum-resistant cryptography, automated security orchestration (SOAR), and growing importance of privacy-preserving technologies (homomorphic encryption, differential privacy). Also, the rise of ransomware-as-a-service and state-sponsored attacks continues.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Core Domains" },
        { number: "CIA", text: "Fundamental Triad" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Cybersecurity Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Cybersecurity interview with 50+ expert questions covering network security, cryptography, application security, IAM, compliance, and emerging threats."
                />
                <meta
                    name="keywords"
                    content="Cybersecurity interview questions, information security, network security, cryptography, OWASP, penetration testing, compliance, risk management, security engineer interview"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0A2540" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/cyber-security" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Cybersecurity Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Cybersecurity interview prep with 50+ questions covering all key domains: network security, cryptography, application security, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/cyber-security" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Cybersecurity Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Cybersecurity interviews with 50+ questions covering core concepts and modern threats."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/cyber-security" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/cyber-security" />

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
                            description: "Interview preparation platform for cybersecurity professionals.",
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
                                    name: "Cybersecurity",
                                    item: "https://codeskipper.in/interview/cyber-security",
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
                            name: "Cybersecurity Interview Questions",
                            description: "50+ curated cybersecurity interview questions with detailed answers.",
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
                            name: "Cybersecurity Interview Questions Collection",
                            description: "A comprehensive collection of cybersecurity interview questions for security professionals.",
                            url: "https://codeskipper.in/interview/cyber-security",
                            about: {
                                "@type": "Thing",
                                name: "Cybersecurity Interview Preparation",
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
                            description: "Cybersecurity interview preparation and education.",
                            url: "https://codeskipper.in",
                            teaches: "Cybersecurity, Network Security, Cryptography, Risk Management",
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
                            name: "Cybersecurity Interview Preparation",
                            description: "Complete preparation for cybersecurity interviews covering all major domains.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Intermediate",
                            teaches:
                                "CIA Triad, Encryption, Network Security, OWASP, IAM, Incident Response, Compliance",
                            url: "https://codeskipper.in/interview/cyber-security",
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
            <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-5 rounded-full shadow-2xl hover:scale-105 transition-transform">
                                <FaShieldAlt className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                            Cybersecurity <span className="text-green-400">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Cybersecurity interview —
                            from CIA triad and cryptography to application security, incident response, and zero trust.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-900/50 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500">
                                <FaSkull /> Real-World Threats
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
                                className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border border-gray-700 hover:shadow-2xl transition-shadow"
                            >
                                <div className="text-3xl font-bold text-green-400 mb-1">{stat.number}</div>
                                <div className="text-sm text-gray-300 font-medium">{stat.text}</div>
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
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-green-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-green-600 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-green-700`}
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
                                                    <FaLightbulb className="text-green-500 text-xl flex-shrink-0 mt-1" />
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
                            <FaUserSecret className="text-green-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Cybersecurity Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaNetworkWired className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know the Fundamentals</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be crystal clear on CIA triad, encryption types, network protocols, and common attack vectors.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaBug className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Think Like an Attacker</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand offensive techniques (SQLi, XSS, DDoS) and how to defend against them. Show practical mindset.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaKey className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Cryptography</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be able to explain hashing, encryption, digital signatures, and common algorithms (AES, RSA, SHA).
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaCloud className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Stay Current</h3>
                                    <p className="text-gray-600 text-sm">
                                        Know about zero trust, cloud security, AI/ML in security, and recent major breaches and responses.
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
                        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Secure Your Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all technology domains.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/interview">
                                    <button className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto">
                                        Browse All Topics <FaArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Footer note ──────────────────────────────────────────────── */}
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-700 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Cybersecurity Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CybersecurityInterview;