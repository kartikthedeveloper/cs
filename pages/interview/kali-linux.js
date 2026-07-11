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
    FaLinux,
} from "react-icons/fa";

const KaliLinuxInterview = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    // ─── 50 Kali Linux Interview Questions ──────────────────────────────────────
    const questions = [
        {
            q: "What is Kali Linux and what is it used for?",
            a: "Kali Linux is a Debian-based Linux distribution designed for digital forensics and penetration testing. It is maintained by Offensive Security. It comes pre-installed with hundreds of tools for security auditing, including network scanners, vulnerability exploit frameworks, wireless testing tools, and password crackers. It is the standard OS for ethical hackers and security professionals.",
        },
        {
            q: "What is the difference between Kali Linux and other Linux distributions?",
            a: "Kali Linux is specialized for security testing, with a focus on penetration testing and forensics. Unlike general-purpose distributions like Ubuntu or Fedora, Kali comes with a curated set of security tools, a customized kernel for wireless injection, and a streamlined workflow for security assessments. It is also designed to be run as a live system or in a virtual environment.",
        },
        {
            q: "What are the default credentials for Kali Linux?",
            a: "The default credentials for Kali Linux are username: 'kali' and password: 'kali' (for versions after 2020.2). Earlier versions used 'root'/'toor'. It is highly recommended to change the default password after installation to maintain security.",
        },
        {
            q: "What is the Kali Linux root user policy?",
            a: "Kali Linux discourages using the root user for daily activities. By default, it uses a non-root user 'kali' with sudo privileges. Tools that require root access can be run with 'sudo'. This follows the principle of least privilege and reduces the risk of accidental system damage.",
        },
        {
            q: "What is the purpose of the 'airmon-ng' tool in Kali Linux?",
            a: "'airmon-ng' is a script used to enable monitor mode on wireless interfaces. Monitor mode allows a Wi-Fi card to capture all wireless traffic, not just traffic destined for the machine. It is the first step in wireless penetration testing, enabling tools like airodump-ng, aireplay-ng, and aircrack-ng.",
        },
        {
            q: "Explain the usage of 'airodump-ng' and 'aireplay-ng'.",
            a: "airodump-ng is used to capture raw 802.11 frames from a wireless network. It displays information about access points and clients, including MAC addresses, signal strength, and encryption types. aireplay-ng is used to inject packets into a wireless network, such as for deauthentication attacks, ARP replay, or packet injection to crack WEP/WPA passwords.",
        },
        {
            q: "What is the difference between WEP, WPA, and WPA2 encryption?",
            a: "WEP (Wired Equivalent Privacy) is the oldest and weakest encryption, easily cracked with tools like aircrack-ng. WPA (Wi-Fi Protected Access) improved security with TKIP, but is also vulnerable. WPA2 uses AES encryption and is currently the standard for secure Wi-Fi networks, though it can be attacked via brute force on weak passwords or via WPS vulnerabilities.",
        },
        {
            q: "What is the purpose of the 'nmap' tool in Kali Linux?",
            a: "Nmap (Network Mapper) is a powerful network scanning tool used for discovering hosts and services on a computer network. It can identify open ports, running services, OS fingerprinting, and version detection. It is used for network inventory, security auditing, and penetration testing.",
        },
        {
            q: "Explain the difference between a TCP SYN scan and a TCP connect scan in Nmap.",
            a: "SYN scan (half-open) sends a SYN packet and if a SYN-ACK is received, it responds with a RST, without completing the handshake. It is stealthier and faster but requires root privileges. Connect scan completes the full three-way handshake, is slower, and can be logged by applications.",
        },
        {
            q: "What is the Metasploit Framework and how is it integrated with Kali?",
            a: "Metasploit is a penetration testing framework that provides a collection of exploits, payloads, auxiliary modules, and post-exploitation tools. It is pre-installed in Kali Linux. It allows security professionals to develop and execute exploit code against a target, manage sessions, and perform extensive testing.",
        },
        {
            q: "What is a payload in Metasploit and what are common types?",
            a: "A payload is the code that runs after an exploit is successful, providing the attacker with a backdoor or shell. Common payloads: meterpreter (powerful interactive shell), reverse shell (target connects back to attacker), bind shell (listener opened on target), and command payloads (execute a single command).",
        },
        {
            q: "Explain the concept of privilege escalation in Kali Linux context.",
            a: "Privilege escalation involves gaining higher-level permissions after initial compromise. In Kali Linux, tools like 'linux-exploit-suggester' help identify kernel exploits or misconfigurations. Attackers look for sudo misconfigurations, SUID binaries, cron jobs, or vulnerable kernel modules to escalate from user to root.",
        },
        {
            q: "What is John the Ripper and how is it used?",
            a: "John the Ripper is a password cracking tool that supports various hash types (Unix, Windows, etc.). It uses dictionary attacks, brute-force, and rainbow tables. In Kali, it can be used to crack password hashes obtained from /etc/passwd or from captured network traffic (like NTLM hashes).",
        },
        {
            q: "What is Hashcat and how does it differ from John the Ripper?",
            a: "Hashcat is a password recovery tool that is GPU-accelerated, making it much faster than John the Ripper for cracking hashes. It supports a wide range of hash algorithms and attack modes (dictionary, brute-force, mask). It is also used for password auditing.",
        },
        {
            q: "What is the purpose of the 'hydra' tool?",
            a: "Hydra is a fast network logon cracker that supports numerous protocols (SSH, FTP, HTTP, SMB, etc.). It performs brute-force and dictionary attacks to guess usernames and passwords. It is commonly used during penetration testing to test the strength of login credentials.",
        },
        {
            q: "Explain the 'burpsuite' tool and its usage.",
            a: "Burp Suite is an integrated platform for web application security testing. It acts as a proxy to intercept and modify HTTP/HTTPS requests. It includes features like spider, scanner, intruder (for automated attacks), repeater (manual testing), and decoder. It is used for finding vulnerabilities like SQL injection, XSS, and more.",
        },
        {
            q: "What is the difference between a vulnerability scanner and a penetration test?",
            a: "A vulnerability scanner (like Nessus, OpenVAS) automatically identifies known vulnerabilities in systems. A penetration test (using tools like Metasploit) exploits those vulnerabilities to determine real-world impact. Both are used in Kali Linux, but they serve different purposes.",
        },
        {
            q: "What is the 'sqlmap' tool and what does it do?",
            a: "sqlmap is an open-source penetration testing tool that automates the detection and exploitation of SQL injection flaws. It can retrieve database information, dump tables, execute commands on the server (if certain conditions), and more. It is included in Kali Linux.",
        },
        {
            q: "Explain the use of 'wireshark' in Kali Linux.",
            a: "Wireshark is a network protocol analyzer that captures and displays packets in real-time. It allows detailed inspection of network traffic, helping identify suspicious patterns, vulnerable protocols, or sensitive data transmissions. It is used in network forensics and during penetration testing.",
        },
        {
            q: "What is the purpose of the 'tcpdump' command?",
            a: "tcpdump is a command-line packet analyzer that captures network packets. It is more lightweight than Wireshark and is useful for quick captures and scripting. It uses filters (like host, port, protocol) to capture specific traffic and can save output to files for later analysis.",
        },
        {
            q: "Explain the concept of a 'reverse shell' and how to obtain one.",
            a: "A reverse shell is a connection where the target machine initiates an outbound connection to the attacker's machine, bypassing firewalls that block inbound connections. To obtain one, an attacker sets up a listener (using netcat, Meterpreter, or other tools) and executes a payload on the target that connects back.",
        },
        {
            q: "What is 'netcat' and how is it used in Kali?",
            a: "Netcat (nc) is a networking utility that reads and writes data across network connections using TCP or UDP. It is often called the 'Swiss Army knife' of networking. In Kali, it is used for port scanning, creating backdoors, file transfers, and as a listener for reverse shells.",
        },
        {
            q: "What is the 'socat' tool and how does it differ from netcat?",
            a: "Socat is a more powerful version of netcat, supporting more advanced features like SSL encryption, IPv6, file access, and chaining of connections. It can be used for secure data transfer, creating tunnels, and complex networking tasks.",
        },
        {
            q: "Explain the difference between active and passive reconnaissance.",
            a: "Active reconnaissance involves direct interaction with the target (scanning, pinging) and may be detected. Passive reconnaissance uses publicly available information (WHOIS, DNS, social media) without touching the target. Kali provides tools for both: active (nmap, masscan) and passive (theHarvester, recon-ng).",
        },
        {
            q: "What is the purpose of the 'theHarvester' tool?",
            a: "theHarvester is a tool used for passive reconnaissance that gathers email addresses, subdomains, and other public information from search engines (Google, Bing) and other public sources. It is useful for building a profile of an organization.",
        },
        {
            q: "Explain the use of 'recon-ng' in Kali.",
            a: "recon-ng is a full-featured reconnaissance framework written in Python. It has a modular architecture with modules for interacting with various APIs (Shodan, Google, LinkedIn) to gather information about targets. It is used for passive intelligence gathering.",
        },
        {
            q: "What is the 'enum4linux' tool and what does it do?",
            a: "enum4linux is a tool for enumerating information from Windows and Samba systems. It uses the SMB protocol to extract user lists, shares, group memberships, password policies, and more. It is often used to map out a target network.",
        },
        {
            q: "Explain the usage of 'smbclient' and 'smbmap'.",
            a: "smbclient is a command-line client for SMB/CIFS shares, allowing file transfers and browsing. smbmap is a tool that enumerates SMB shares and their permissions. Both are useful for testing file sharing services during pentests.",
        },
        {
            q: "What is the 'nikto' tool?",
            a: "Nikto is a web server scanner that tests for known vulnerabilities, misconfigurations, and default files. It checks for outdated server software, CGI scripts, and other potential weaknesses. It is a quick way to scan web servers.",
        },
        {
            q: "Explain the 'dirb' and 'gobuster' tools.",
            a: "Dirb and Gobuster are directory/file brute-forcing tools. They use wordlists to discover hidden directories and files on web servers. Gobuster is faster and supports multiple modes, including DNS and VHost fuzzing. They are used to find administrative interfaces and sensitive files.",
        },
        {
            q: "What is the purpose of the 'xsser' tool?",
            a: "xsser (Cross Site Scripting Exploiter) is a tool that automates the detection and exploitation of XSS vulnerabilities. It can test for reflected, stored, and DOM-based XSS, and can bypass filters using encoding techniques.",
        },
        {
            q: "Explain the concept of a 'buffer overflow' attack and tools used in Kali.",
            a: "A buffer overflow occurs when data overflows a buffer and corrupts adjacent memory. In Kali, tools like 'pwntools', 'gdb', and 'radare2' are used for exploit development. 'checksec' helps identify security mitigations. Attackers can use buffer overflows to execute arbitrary code.",
        },
        {
            q: "What is the 'checksec' tool used for?",
            a: "checksec checks the security hardening of a binary, including protections like ASLR, PIE, NX, RELRO, and stack canaries. It is used by penetration testers to assess the exploitability of a program.",
        },
        {
            q: "What is the 'exploit-db' database and how is it accessed in Kali?",
            a: "Exploit-DB is a repository of exploits for vulnerabilities. Kali Linux includes a local copy of the database accessible via the 'searchsploit' tool. Users can search for exploits by keyword and use them for testing.",
        },
        {
            q: "Explain the use of 'searchsploit' in Kali.",
            a: "searchsploit is a command-line tool that queries the Exploit-DB database. It allows users to find exploits, shellcodes, and papers quickly. It is essential for finding ready-to-use exploits for known vulnerabilities.",
        },
        {
            q: "What is the 'beEF' tool and what is it used for?",
            a: "beEF (Browser Exploitation Framework) is a tool that focuses on the web browser. It allows attackers to hook one or more browsers and launch attacks against them, such as social engineering, port scanning, and exploiting browser vulnerabilities. It is used to assess client-side security.",
        },
        {
            q: "Explain the purpose of the 'social-engineer toolkit' (SET).",
            a: "SET is a tool for social engineering attacks. It includes attack vectors like phishing emails, fake websites, SMS spoofing, and USB-based attacks. It is used to test human factors in security.",
        },
        {
            q: "What is the 'macchanger' tool used for?",
            a: "macchanger is used to change the MAC address of a network interface. It can be useful for evading MAC filtering or tracking. It is often used in wireless penetration testing to disguise the attacker's hardware.",
        },
        {
            q: "Explain the 'ettercap' and its usage.",
            a: "Ettercap is a tool for man-in-the-middle (MITM) attacks on local networks. It can perform ARP spoofing, sniffing, DNS spoofing, and packet injection. It is used to intercept and manipulate traffic.",
        },
        {
            q: "What is the 'mitmproxy' tool?",
            a: "mitmproxy is a man-in-the-middle proxy for HTTP and HTTPS traffic. It allows interception, modification, and replay of HTTP/HTTPS requests. It is useful for testing web applications, especially with SSL decryption.",
        },
        {
            q: "Explain the purpose of 'armitage' in Kali.",
            a: "Armitage is a graphical front-end for the Metasploit Framework. It provides a visual interface for launching exploits, managing sessions, and visualizing targets. It simplifies the use of Metasploit for beginners.",
        },
        {
            q: "What is the difference between 'msfconsole' and 'msfvenom'?",
            a: "msfconsole is the interactive command-line interface for Metasploit, used for running exploits and managing sessions. msfvenom is a standalone tool for generating payloads (shellcode) in various formats (e.g., exe, PHP, Python).",
        },
        {
            q: "What is the 'airbase-ng' tool?",
            a: "airbase-ng is a tool for creating a fake access point (evil twin). It can be used to trick clients into connecting, enabling MITM attacks or capturing credentials (like WPA handshakes). It is part of the aircrack-ng suite.",
        },
        {
            q: "Explain the 'crunch' tool and its use.",
            a: "crunch is a wordlist generator that creates custom dictionaries based on a given charset and length range. It is used with password cracking tools like Hydra or Hashcat to generate possible passwords.",
        },
        {
            q: "What is the 'cewl' tool?",
            a: "cewl (Custom Word List generator) is a tool that spiders websites and extracts unique words to build a custom dictionary. It is useful for targeted dictionary attacks, as it uses the organization's own language.",
        },
        {
            q: "Explain the 'steghide' tool.",
            a: "steghide is a tool used for embedding and extracting data from image and audio files (steganography). It can hide files inside JPEG, BMP, WAV, and AU files, and can be used to exfiltrate data covertly.",
        },
        {
            q: "What is the 'binwalk' tool?",
            a: "binwalk is a tool for analyzing and extracting embedded files and data from firmware images, binary files, and other files. It identifies signatures and can extract files, useful in firmware analysis and forensics.",
        },
        {
            q: "Explain the usage of 'foremost' and 'scalpel'.",
            a: "Both are file carving tools used in digital forensics to recover deleted files from disk images. They scan raw data for file signatures and extract files based on those signatures.",
        },
        {
            q: "What is the 'autopsy' tool?",
            a: "Autopsy is a digital forensics platform with a graphical interface. It is built on The Sleuth Kit and provides capabilities for analyzing disk images, recovering files, and investigating file systems.",
        },
        {
            q: "What is the purpose of 'volatility' in Kali?",
            a: "Volatility is a memory forensics framework for analyzing RAM dumps. It can extract process lists, network connections, command history, and other volatile data from memory captures.",
        },
        {
            q: "Explain the concept of 'persistence' in Kali Linux and how to achieve it.",
            a: "Persistence in Kali Linux, especially when running from a live USB, allows saving changes across reboots. This is achieved by creating a persistent partition. Tools like 'mkusb' can create a persistent USB. This is useful for saving tools and configurations.",
        },
    ];

    // ─── Stats ──────────────────────────────────────────────────────────────────────
    const stats = [
        { number: "50", text: "Expert Questions" },
        { number: "20+", text: "Tools Covered" },
        { number: "Kali", text: "Penetration Testing" },
        { number: "2026", text: "Updated Edition" },
    ];

    return (
        <Layout>
            <Head>
                {/* ─── Primary Meta ────────────────────────────────────────────── */}
                <title>50+ Kali Linux Interview Questions & Answers 2026 | Code Skipper</title>
                <meta
                    name="description"
                    content="Master your Kali Linux interview with 50+ expert questions covering tools, commands, penetration testing, forensics, and more."
                />
                <meta
                    name="keywords"
                    content="Kali Linux interview questions, penetration testing, ethical hacking, Kali tools, Nmap, Metasploit, Wireshark, aircrack"
                />
                <meta name="author" content="Kartik Sharma" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#000000" />
                <meta name="language" content="en" />
                <meta name="revisit-after" content="7 days" />
                <link rel="canonical" href="https://codeskipper.in/interview/kali-linux" />
                <link rel="icon" href="/Images/favicon.ico" />
                <link rel="apple-touch-icon" href="/Images/logo.png" />

                {/* ─── Open Graph ────────────────────────────────────────────────── */}
                <meta
                    property="og:title"
                    content="50+ Kali Linux Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    property="og:description"
                    content="Complete Kali Linux interview prep with 50+ questions covering tools, commands, and security testing."
                />
                <meta property="og:image" content="https://codeskipper.in/Images/logo.png" />
                <meta property="og:url" content="https://codeskipper.in/interview/kali-linux" />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Code Skipper" />
                <meta property="og:locale" content="en_IN" />

                {/* ─── Twitter ────────────────────────────────────────────────────── */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="50+ Kali Linux Interview Questions & Answers 2026 | Code Skipper"
                />
                <meta
                    name="twitter:description"
                    content="Prepare for Kali Linux interviews with 50+ questions covering tools and security testing."
                />
                <meta name="twitter:image" content="https://codeskipper.in/Images/logo.png" />
                <meta name="twitter:creator" content="@codeskipper" />

                {/* ─── hreflang ────────────────────────────────────────────────────── */}
                <link rel="alternate" hrefLang="en" href="https://codeskipper.in/interview/kali-linux" />
                <link rel="alternate" hrefLang="x-default" href="https://codeskipper.in/interview/kali-linux" />

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
                                    name: "Kali Linux",
                                    item: "https://codeskipper.in/interview/kali-linux",
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
                            name: "Kali Linux Interview Questions",
                            description: "50+ curated Kali Linux interview questions with detailed answers.",
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
                            name: "Kali Linux Interview Questions Collection",
                            description: "A comprehensive collection of Kali Linux interview questions for security professionals.",
                            url: "https://codeskipper.in/interview/kali-linux",
                            about: {
                                "@type": "Thing",
                                name: "Kali Linux Interview Preparation",
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
                            description: "Kali Linux and cybersecurity interview preparation.",
                            url: "https://codeskipper.in",
                            teaches: "Kali Linux, Penetration Testing, Network Security, Forensics",
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
                            name: "Kali Linux Interview Preparation",
                            description: "Complete preparation for Kali Linux interviews covering tools and methodologies.",
                            provider: {
                                "@type": "Organization",
                                name: "Code Skipper",
                                sameAs: "https://codeskipper.in",
                            },
                            educationalLevel: "Advanced",
                            teaches:
                                "Wireless Testing, Exploitation, Web App Security, Forensics, System Administration",
                            url: "https://codeskipper.in/interview/kali-linux",
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
            <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* ─── Hero ───────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center py-12"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="bg-gradient-to-r from-blue-500 to-black p-5 rounded-full shadow-2xl hover:scale-105 transition-transform border-2 border-blue-400">
                                <FaLinux className="text-7xl text-white" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                            Kali Linux <span className="text-blue-400">Q&A</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            50+ expert-curated questions to master your Kali Linux interview —
                            from tools and commands to penetration testing, forensics, and methodology.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            <span className="inline-flex items-center gap-2 bg-green-900/50 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500">
                                <FaCheckCircle /> 50 Questions
                            </span>
                            <span className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500">
                                <FaGraduationCap /> All Levels
                            </span>
                            <span className="inline-flex items-center gap-2 bg-red-900/50 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500">
                                <FaTerminal /> Hands-on Tools
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
                                <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
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
                                    className="w-full text-left p-5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-colors duration-300 group"
                                >
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold flex-shrink-0 mt-0.5">
                                                {index + 1}
                                            </span>
                                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-relaxed pr-2">
                                                {item.q}
                                            </h3>
                                        </div>
                                        <svg
                                            className={`w-6 h-6 text-blue-600 flex-shrink-0 transform transition-transform duration-300 ${
                                                openQuestion === index ? "rotate-180" : ""
                                            } group-hover:text-blue-700`}
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
                                                    <FaLightbulb className="text-blue-500 text-xl flex-shrink-0 mt-1" />
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
                            <h2 className="text-2xl font-bold text-gray-900">Pro Tips for Kali Linux Interviews</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-transparent">
                                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                    <FaNetworkWired className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Know the Tools</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be able to explain the purpose and usage of key tools: Nmap, Metasploit, Wireshark, aircrack-ng, John the Ripper, etc.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-green-50 to-transparent">
                                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                                    <FaBug className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Understand Methodology</h3>
                                    <p className="text-gray-600 text-sm">
                                        Understand the phases of penetration testing: reconnaissance, scanning, exploitation, and reporting.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-transparent">
                                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                    <FaKey className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Command-Line Proficiency</h3>
                                    <p className="text-gray-600 text-sm">
                                        Be comfortable with Linux commands, piping, and scripting. Kali is all about the terminal.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-red-50 to-transparent">
                                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                    <FaShieldAlt className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Legal &amp; Ethics</h3>
                                    <p className="text-gray-600 text-sm">
                                        Always emphasize that penetration testing requires authorization. Know the legal boundaries.
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
                        <div className="bg-gradient-to-r from-blue-600 to-black rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ready to Hack Your Kali Interview?
                            </h2>
                            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
                                Continue your preparation with our comprehensive collection of
                                interview questions covering all cybersecurity domains.
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
                    <div className="text-center text-xs text-gray-400 mt-8 border-t border-gray-700 pt-6">
                        <p>
                            © {new Date().getFullYear()} Code Skipper · Kali Linux Interview Questions ·
                            Last updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default KaliLinuxInterview;