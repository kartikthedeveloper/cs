import { useState } from "react";
import Layout from "@/components/layouts/InterviewLayout";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FaTerminal,
    FaUserSecret,
    FaShieldAlt,
    FaNetworkWired,
    FaCode,
    FaLock,
    FaBug,
    FaKey,
    FaDatabase,
    FaWifi,
    FaArrowRight,
    FaLightbulb,
    FaCheckCircle,
    FaGraduationCap,
    FaSkull,
    FaHackerrank,
} from "react-icons/fa";

const EthicalHackingInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Ethical Hacking Interview Questions ────────────────────────────────
    const questions = [
        {
            q: "What is ethical hacking and how does it differ from malicious hacking?",
            a: "Ethical hacking, also known as penetration testing or white-hat hacking, is the practice of legally breaking into computers and networks to test an organization's defenses. Ethical hackers have permission from the system owner and follow a code of conduct. Malicious hackers (black-hat) operate without permission for personal gain, harm, or theft. Ethical hacking aims to identify vulnerabilities before attackers can exploit them.",
        },
        {
            q: "Explain the five phases of ethical hacking.",
            a: "The five phases are: 1) Reconnaissance (information gathering) – passive or active; 2) Scanning – discovering open ports, services, and vulnerabilities; 3) Gaining Access – exploiting vulnerabilities to enter the system; 4) Maintaining Access – creating backdoors for persistent access; 5) Covering Tracks – clearing logs and hiding evidence. These phases guide a penetration test.",
        },
        {
            q: "What is the difference between vulnerability assessment and penetration testing?",
            a: "Vulnerability assessment is a systematic review to identify security weaknesses using automated tools, producing a list of potential vulnerabilities. Penetration testing is a simulated attack that exploits those vulnerabilities to determine the real-world impact and validate if they can be breached. VA is more about identification; PT is about exploitation and validation.",
        },
        {
            q: "What is footprinting and what are its types?",
            a: "Footprinting is the process of gathering information about a target system to identify potential vulnerabilities. It is the first phase of ethical hacking. Types: Passive footprinting (collecting information without direct interaction, e.g., public records, DNS) and Active footprinting (direct interaction with the target, e.g., scanning, pinging).",
        },
        {
            q: "What is the OSI model and why is it relevant to network security?",
            a: "The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven layers. It helps in understanding network protocols, troubleshooting, and security at each layer. For ethical hacking, knowing which layer a vulnerability belongs to helps in selecting appropriate tools and attack vectors.",
        },
        {
            q: "What is a vulnerability and how are they classified?",
            a: "A vulnerability is a flaw or weakness in a system that could be exploited. They are classified as: 1) Critical (immediate risk), 2) High (likely to be exploited), 3) Medium (potential but less likely), 4) Low (low impact). Common classifications include CWE (Common Weakness Enumeration) and CVSS scores.",
        },
        {
            q: "Explain the concept of a zero-day vulnerability.",
            a: "A zero-day vulnerability is a previously unknown security flaw that the vendor has not patched. It is called 'zero-day' because the vendor has zero days to address it before it can be exploited. Zero-day exploits are highly valuable and are often used in targeted attacks. Ethical hackers may discover zero-days and responsibly disclose them.",
        },
        {
            q: "What is reconnaissance and what are some common reconnaissance techniques?",
            a: "Reconnaissance is the information-gathering phase. Techniques include: DNS enumeration (nslookup, dig), whois queries, search engine dorking (Google hacking), social media profiling, network scanning (Nmap), and social engineering. Both passive (public sources) and active (direct probing) techniques are used.",
        },
        {
            q: "What tools are commonly used for network scanning?",
            a: "Common tools: Nmap (network mapping, port scanning), Netcat (networking utility), Wireshark (packet analyzer), Masscan (fast port scanner), and Zenmap (GUI for Nmap). They help discover hosts, services, and open ports.",
        },
        {
            q: "What is Nmap and what can it do?",
            a: "Nmap (Network Mapper) is an open-source tool for network discovery and security auditing. It can: scan open ports, detect operating systems, identify running services, detect firewall/IDS evasion techniques, perform version detection, and script-based vulnerability detection (NSE).",
        },
        {
            q: "Explain the difference between TCP and UDP scanning.",
            a: "TCP scanning establishes a full three-way handshake (SYN, SYN-ACK, ACK) or sends SYN packets (stealth). It is reliable for connection-oriented services. UDP scanning sends UDP packets to closed ports; responses are fewer and less reliable. UDP scanning is slower and often yields less information because many UDP services don't respond.",
        },
        {
            q: "What is the 'three-way handshake' in TCP and why is it important?",
            a: "The TCP three-way handshake establishes a connection between client and server: SYN, SYN-ACK, ACK. It ensures both sides are ready to communicate and synchronizes sequence numbers. Understanding this is critical for network-level attacks like SYN flooding and for firewall/IDS evasion.",
        },
        {
            q: "What is a firewall and what are its types?",
            a: "A firewall is a network security device that monitors and filters incoming/outgoing traffic based on defined rules. Types: Packet-filtering (stateless), Stateful (tracks connections), Application-level (proxy), and Next-Generation (NGFW) which adds IDS/IPS, application awareness, and deep packet inspection.",
        },
        {
            q: "Explain the difference between IDS and IPS.",
            a: "IDS (Intrusion Detection System) monitors traffic and alerts on suspicious activity but does not block. IPS (Intrusion Prevention System) actively blocks or mitigates threats in real time. Both use signatures or anomaly detection. IPS is placed inline with the traffic; IDS is out-of-band.",
        },
        {
            q: "What is a DMZ and why is it used?",
            a: "A DMZ (Demilitarized Zone) is a separate network that exposes external-facing services (web servers, email) to the internet while isolating the internal network. It adds a layer of security: if an attacker compromises a DMZ server, they still cannot access the internal network without additional exploitation.",
        },
        {
            q: "Explain SQL injection and how it can be prevented.",
            a: "SQL injection is an attack where malicious SQL code is inserted into input fields to manipulate database queries. Prevention: use parameterized queries (prepared statements), input validation, stored procedures, least privilege database accounts, and web application firewalls (WAF).",
        },
        {
            q: "What is Cross-Site Scripting (XSS) and what are its types?",
            a: "XSS is a vulnerability that allows attackers to inject client-side scripts into web pages viewed by others. Types: Reflected (input is reflected from server), Stored (persistent, stored in DB), DOM-based (executed via DOM manipulation). Prevention: output encoding, context-aware escaping, Content Security Policy (CSP).",
        },
        {
            q: "What is CSRF (Cross-Site Request Forgery) and how is it mitigated?",
            a: "CSRF tricks a user's browser into making an unwanted request to a site where the user is authenticated. It leverages session cookies. Mitigation: CSRF tokens (synchronizer tokens), SameSite cookie attribute (Strict/Lax), and requiring re-authentication for sensitive operations.",
        },
        {
            q: "What is the difference between authentication and authorization?",
            a: "Authentication verifies who a user is (login credentials). Authorization determines what a user can do (permissions, roles). Authentication precedes authorization. In ethical hacking, testing both is crucial for identifying privilege escalation and weak authentication mechanisms.",
        },
        {
            q: "What is session hijacking and how is it prevented?",
            a: "Session hijacking is stealing a user's session ID to impersonate them. It can be done via packet sniffing, XSS, or brute-forcing. Prevention: use HTTPS, secure cookies (HttpOnly, Secure flags), regenerate session IDs after login, and implement short session timeouts.",
        },
        {
            q: "Explain the concept of privilege escalation.",
            a: "Privilege escalation is when an attacker gains higher-level permissions than initially intended. There are two types: Vertical (gaining administrator/root access) and Horizontal (accessing another user's resources). It can be achieved via kernel exploits, misconfigured permissions, or software vulnerabilities.",
        },
        {
            q: "What is a buffer overflow and how can it be exploited?",
            a: "A buffer overflow occurs when data exceeds the buffer size and overwrites adjacent memory. An attacker can inject code into the overflowed space to execute arbitrary commands. Prevention: use bounds-checking functions, ASLR (Address Space Layout Randomization), DEP (Data Execution Prevention), and compile-time checks.",
        },
        {
            q: "What is the Metasploit Framework and what is it used for?",
            a: "Metasploit is an open-source penetration testing tool that provides a wide range of exploits, payloads, encoders, and post-exploitation modules. It enables ethical hackers to simulate attacks, test vulnerabilities, and assess security. It also includes auxiliary modules for scanning, fuzzing, and reconnaissance.",
        },
        {
            q: "What is a payload in the context of exploitation?",
            a: "A payload is code that executes after a successful exploit. It can be a reverse shell, bind shell, Meterpreter session (advanced interactive shell), or a system command. Payloads provide the attacker with control over the compromised system.",
        },
        {
            q: "Explain the difference between a shell and a reverse shell.",
            a: "A shell is a command-line interface. A bind shell opens a port on the target for the attacker to connect. A reverse shell makes the target connect back to the attacker's machine, which often bypasses firewalls (outbound traffic is less restricted). Reverse shells are more common in real-world attacks.",
        },
        {
            q: "What is the difference between active and passive reconnaissance?",
            a: "Active reconnaissance involves direct interaction with the target (e.g., scanning, pinging), which may be logged and detected. Passive reconnaissance uses publicly available information without touching the target (e.g., Google search, social media, WHOIS). Active is faster but riskier; passive is stealthier.",
        },
        {
            q: "What is a packet sniffer and what can it be used for?",
            a: "A packet sniffer (e.g., Wireshark, tcpdump) captures network packets traveling over the network. It can be used to analyze network traffic, troubleshoot, or sniff sensitive information (like passwords, if unencrypted). Ethical hackers use it to identify insecure protocols and data leaks.",
        },
        {
            q: "Explain the concept of man-in-the-middle (MITM) attacks.",
            a: "A MITM attack occurs when an attacker intercepts and possibly alters communication between two parties without their knowledge. It can be done via ARP spoofing, DNS spoofing, or rogue access points. Prevention: use encryption (TLS), strong authentication, and ARP spoofing detection.",
        },
        {
            q: "What is ARP spoofing and how can it be prevented?",
            a: "ARP spoofing (ARP poisoning) involves sending fake ARP replies to associate the attacker's MAC address with a legitimate IP, allowing traffic interception. Prevention: use static ARP entries, ARP monitoring tools, port security on switches, and encryption (HTTPS).",
        },
        {
            q: "What is a port scan and what information can it reveal?",
            a: "A port scan sends requests to target ports to determine which are open, closed, or filtered. It reveals open services (e.g., HTTP on port 80, SSH on 22), which may be vulnerable. Ethical hackers use port scans to identify attack surfaces. Common tools: Nmap, Masscan.",
        },
        {
            q: "What is a vulnerability scanner and how does it work?",
            a: "A vulnerability scanner (e.g., Nessus, OpenVAS) automatically scans systems for known vulnerabilities by checking version numbers, patch levels, and configuration issues. It uses a database of signatures and then generates a report. It does not exploit vulnerabilities—it identifies potential weaknesses.",
        },
        {
            q: "Explain the difference between a white-box, black-box, and gray-box test.",
            a: "White-box: full knowledge of internal architecture and code. Black-box: no prior knowledge, simulating an external attacker. Gray-box: partial knowledge, often with internal access. These testing methodologies determine the depth and scope of the penetration test.",
        },
        {
            q: "What is a security audit and how does it differ from a penetration test?",
            a: "A security audit is a systematic evaluation of an organization's security policies, controls, and procedures against a standard (e.g., ISO 27001). It is often compliance-driven. A penetration test is a hands-on simulated attack to find vulnerabilities. Audits are broader; PT is technical and exploitative.",
        },
        {
            q: "What is the OWASP Top 10 and why is it important for ethical hackers?",
            a: "The OWASP Top 10 is a list of the most critical web application security risks, such as Injection, Broken Access Control, XSS, etc. Ethical hackers use it as a baseline for testing web applications, ensuring they cover the most common and dangerous vulnerabilities.",
        },
        {
            q: "What is social engineering and why is it a significant threat?",
            a: "Social engineering is manipulating people into divulging confidential information or performing actions. It bypasses technical controls by targeting human psychology. It's a major threat because even the best technical security can be undermined by a user's error. Examples: phishing, pretexting, baiting.",
        },
        {
            q: "What is phishing and how can it be detected?",
            a: "Phishing is a type of social engineering where attackers send fraudulent emails or messages that appear to come from legitimate sources to steal personal info. Detection: check sender address, hover over links to see URL, look for urgent language, grammatical errors, and verify with the source through a trusted channel.",
        },
        {
            q: "What is a honeypot and what is its purpose?",
            a: "A honeypot is a decoy system that looks like a legitimate target but is actually isolated and monitored. Its purpose is to: attract attackers, study their behavior, detect intrusion attempts, and distract them from real assets. It can be low-interaction (emulated) or high-interaction (real OS).",
        },
        {
            q: "What is the difference between symmetric and asymmetric encryption?",
            a: "Symmetric uses one shared key for encryption/decryption (e.g., AES); fast but key distribution is hard. Asymmetric uses a key pair (public/private) for encryption/decryption or signing (e.g., RSA); solves key exchange but slower. Ethical hackers must understand both to evaluate crypto implementations.",
        },
        {
            q: "What is a digital certificate and what role does it play in security?",
            a: "A digital certificate is an electronic document that binds a public key to an entity's identity. It is issued by a Certificate Authority (CA) and is used to establish trust in SSL/TLS, email encryption, and code signing. It enables secure communication by verifying the server's identity.",
        },
        {
            q: "What is a DoS (Denial of Service) attack and how does it work?",
            a: "DoS attacks overwhelm a service with excessive traffic, making it unavailable to legitimate users. It can exploit vulnerabilities like buffer overflows or simply flood the network. DDoS is a distributed version using multiple compromised systems. Prevention: rate limiting, load balancing, and cloud-based scrubbing services.",
        },
        {
            q: "What is the difference between hashing and encryption?",
            a: "Hashing is a one-way function (e.g., SHA-256) that creates a fixed-size digest from input, primarily used for integrity and password storage. Encryption is reversible with a key (e.g., AES), providing confidentiality. Hashes cannot be reversed; encryption can.",
        },
        {
            q: "What is a rainbow table and how is it used?",
            a: "A rainbow table is a precomputed table for reversing cryptographic hash functions. It stores pairs of plaintext passwords and their hashes, allowing fast lookup to crack hashed passwords. Prevention: use salting (adding random data to passwords before hashing) to make rainbow tables ineffective.",
        },
        {
            q: "What is steganography and how can it be used in hacking?",
            a: "Steganography is hiding data within other seemingly harmless data (e.g., hiding text in images, audio). Attackers can use it to exfiltrate data without detection or to embed malicious code. Ethical hackers should be aware of steganographic techniques to detect data leakage.",
        },
        {
            q: "Explain the concept of a Trojan horse and how it differs from a virus.",
            a: "A Trojan horse is malicious software disguised as legitimate software. It does not self-replicate (unlike viruses/worms). It relies on user interaction to install. Viruses replicate and attach themselves to files. Trojans often create backdoors or perform spy activities.",
        },
        {
            q: "What is a rootkit and how does it evade detection?",
            a: "A rootkit is a set of tools used by an attacker to hide their presence on a compromised system. It modifies kernel-level processes, system calls, and file lists to conceal processes, files, and network connections. Detection requires specialized tools and offline analysis.",
        },
        {
            q: "What is the difference between black box and white box testing in security?",
            a: "Black box testing: tester has no knowledge of the internal system architecture; simulates an external attacker. White box testing: tester has full knowledge of source code, design, and infrastructure; simulates a knowledgeable insider. Gray box is a mix.",
        },
        {
            q: "What is a security incident response plan and why is it important?",
            a: "An incident response plan is a documented strategy for handling security breaches. It outlines roles, procedures, communication, and containment. Importance: minimizes damage, ensures timely response, preserves evidence, and facilitates recovery. It's critical for compliance and business continuity.",
        },
        {
            q: "Explain the concept of 'least privilege' in the context of ethical hacking.",
            a: "Least privilege means granting users or processes only the minimum permissions needed to perform their tasks. For ethical hackers, this principle is critical when assessing systems: misconfigurations that violate least privilege can lead to privilege escalation vulnerabilities. Enforcement reduces attack surface.",
        },
        {
            q: "What is the role of a CISO (Chief Information Security Officer) in an organization?",
            a: "The CISO is the executive responsible for an organization's information and data security strategy. They manage security policies, risk management, compliance, incident response, and the security team. They align security with business goals and report to senior management.",
        },
        {
            q: "What are some emerging trends in ethical hacking and cybersecurity?",
            a: "Emerging trends: AI/ML for threat detection and automated penetration testing; ransomware-as-a-service; cloud-native security; zero trust architecture; supply chain attacks; deepfake-based social engineering; IoT/OT security challenges; quantum computing threats to cryptography; and increased regulatory focus. Ethical hackers must stay updated with these trends.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "10+", text: "Attack Vectors" },
        { number: "Tools", text: "Nmap, Metasploit, etc." },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Ethical Hacking Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Ethical Hacking interview with 50+ expert questions covering penetration testing, vulnerabilities, tools, network security, and more."
                />
                <meta
                    name="keywords"
                    content="Ethical hacking interview questions, penetration testing, vulnerability assessment, Nmap, Metasploit, cybersecurity, CEH, OSCP"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#00FF00" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/ethical-hacking" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Ethical Hacking Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Ethical Hacking interview prep with 50+ questions covering all key areas: pen testing, web app security, wireless, and more."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/ethical-hacking" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Ethical Hacking Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Ethical Hacking interviews with 50+ questions covering core concepts and practical tools."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/ethical-hacking" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/ethical-hacking" />

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
                                    name: "Ethical Hacking",
                                    item: "https://codeskipper.in/interview/ethical-hacking",
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
                            name: "Ethical Hacking Interview Questions",
                            description: "50+ curated ethical hacking interview questions with detailed answers.",
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
                            name: "Ethical Hacking Interview Questions Collection",
                            description: "A comprehensive collection of ethical hacking interview questions for security professionals.",
                            url: "https://codeskipper.in/interview/ethical-hacking",
                            about: {
                                "@type": "Thing",
                                name: "Ethical Hacking Interview Preparation",
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
                            description: "Ethical hacking and cybersecurity interview preparation.",
                            url: "https://codeskipper.in",
                            teaches: "Ethical Hacking, Penetration Testing, Network Security, Web Application Security",
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
                            name: "Ethical Hacking Interview Preparation",
                            description: "Complete preparation for ethical hacking interviews covering pen testing, tools, and vulnerabilities.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Advanced",
                            teaches:
                                "Reconnaissance, Scanning, Exploitation, Web App Security, Wireless, Social Engineering",
                            url: "https://codeskipper.in/interview/ethical-hacking",
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
            <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-green-500 to-black p-5 rounded-full shadow-2xl hover:scale-105 transition-transform border-2 border-green-400">
                                <FaTerminal className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                            Ethical Hacking <span className="text-green-400">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Ethical Hacking interview —
                            from reconnaissance and scanning to exploitation, web app security, and tools.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-900/50 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500">
                                <FaSkull /> Offensive Focus
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
                                className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-6 text-center border border-gray-700 hover:shadow-2xl transition-shadow"
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
                            <FaHackerrank className="text-green-600 text-2xl" />
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Ethical Hacking Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaNetworkWired className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Master Networking</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be solid on TCP/IP, OSI model, subnetting, and common protocols. Networking is the foundation of ethical hacking.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaBug className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know Web App Vulnerabilities</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand OWASP Top 10, SQLi, XSS, CSRF, and how to test for them. Web apps are a primary target.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaKey className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Practical Tools</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be hands-on with Nmap, Metasploit, Burp Suite, Wireshark, and Kali Linux tools. Expect scenario-based questions.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaShieldAlt className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Legal &amp; Ethics</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand the legal boundaries and professional ethics. Emphasize responsible disclosure and reporting.
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
                        <div className="bg-gradient-to-r from-green-600 to-green-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Hack Your Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all cybersecurity domains.
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
                            © {new Date().getFullYear()} Code Skipper · Ethical Hacking Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EthicalHackingInterview;