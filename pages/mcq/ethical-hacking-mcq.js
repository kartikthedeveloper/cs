import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (130+ Unique) ==========================

const questionsData = [
  // ----- Ethical Hacking Basics (6) -----
  {
    id: 1,
    topic: "Ethical Hacking Basics",
    question: "What is ethical hacking?",
    options: [
      { label: "A", text: "Hacking with permission to find vulnerabilities" },
      { label: "B", text: "Hacking for financial gain" },
      { label: "C", text: "Hacking for personal revenge" },
      { label: "D", text: "Hacking without permission" },
    ],
    answer: "A. Hacking with permission to find vulnerabilities",
  },
  {
    id: 2,
    topic: "Ethical Hacking Basics",
    question: "What is a white hat hacker?",
    options: [
      { label: "A", text: "An ethical hacker who works with permission" },
      { label: "B", text: "A hacker who breaks the law" },
      { label: "C", text: "A hacker who steals data" },
      { label: "D", text: "A hacker who attacks governments" },
    ],
    answer: "A. An ethical hacker who works with permission",
  },
  {
    id: 3,
    topic: "Ethical Hacking Basics",
    question: "What is a black hat hacker?",
    options: [
      { label: "A", text: "A hacker who breaks into systems illegally" },
      { label: "B", text: "An ethical hacker" },
      { label: "C", text: "A hacker who helps organizations" },
      { label: "D", text: "A penetration tester" },
    ],
    answer: "A. A hacker who breaks into systems illegally",
  },
  {
    id: 4,
    topic: "Ethical Hacking Basics",
    question: "What is a grey hat hacker?",
    options: [
      { label: "A", text: "A hacker who may break laws but not for malicious purposes" },
      { label: "B", text: "A hacker who is always ethical" },
      { label: "C", text: "A hacker who works for the government" },
      { label: "D", text: "A hacker who only attacks criminals" },
    ],
    answer: "A. A hacker who may break laws but not for malicious purposes",
  },
  {
    id: 5,
    topic: "Ethical Hacking Basics",
    question: "Which certification is common for ethical hackers?",
    options: [
      { label: "A", text: "CEH (Certified Ethical Hacker)" },
      { label: "B", text: "CCNA" },
      { label: "C", text: "MCSE" },
      { label: "D", text: "OCP" },
    ],
    answer: "A. CEH (Certified Ethical Hacker)",
  },
  {
    id: 6,
    topic: "Ethical Hacking Basics",
    question: "What is the difference between vulnerability assessment and penetration testing?",
    options: [
      { label: "A", text: "VA identifies weaknesses; PT exploits them" },
      { label: "B", text: "PT identifies weaknesses; VA exploits them" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "VA is automated; PT is manual" },
    ],
    answer: "A. VA identifies weaknesses; PT exploits them",
  },

  // ----- Footprinting & Reconnaissance (6) -----
  {
    id: 7,
    topic: "Footprinting & Reconnaissance",
    question: "What is footprinting in ethical hacking?",
    options: [
      { label: "A", text: "Gathering information about a target system" },
      { label: "B", text: "Scanning for open ports" },
      { label: "C", text: "Exploiting vulnerabilities" },
      { label: "D", text: "Gaining access to a system" },
    ],
    answer: "A. Gathering information about a target system",
  },
  {
    id: 8,
    topic: "Footprinting & Reconnaissance",
    question: "Which tool is used for DNS enumeration?",
    options: [
      { label: "A", text: "nslookup" },
      { label: "B", text: "Nmap" },
      { label: "C", text: "Metasploit" },
      { label: "D", text: "Wireshark" },
    ],
    answer: "A. nslookup",
  },
  {
    id: 9,
    topic: "Footprinting & Reconnaissance",
    question: "Which of the following is a passive reconnaissance technique?",
    options: [
      { label: "A", text: "Searching public records" },
      { label: "B", text: "Port scanning" },
      { label: "C", text: "Network sniffing" },
      { label: "D", text: "Social engineering" },
    ],
    answer: "A. Searching public records",
  },
  {
    id: 10,
    topic: "Footprinting & Reconnaissance",
    question: "What is WHOIS used for?",
    options: [
      { label: "A", text: "To query domain registration information" },
      { label: "B", text: "To scan ports" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To encrypt data" },
    ],
    answer: "A. To query domain registration information",
  },
  {
    id: 11,
    topic: "Footprinting & Reconnaissance",
    question: "Which command is used to trace the route to a target?",
    options: [
      { label: "A", text: "tracert" },
      { label: "B", text: "nslookup" },
      { label: "C", text: "ping" },
      { label: "D", text: "netstat" },
    ],
    answer: "A. tracert",
  },
  {
    id: 12,
    topic: "Footprinting & Reconnaissance",
    question: "What is the purpose of Google dorking?",
    options: [
      { label: "A", text: "To find sensitive information using advanced search operators" },
      { label: "B", text: "To hack Google" },
      { label: "C", text: "To scan for open ports" },
      { label: "D", text: "To perform DDoS attacks" },
    ],
    answer: "A. To find sensitive information using advanced search operators",
  },

  // ----- Scanning & Enumeration (6) -----
  {
    id: 13,
    topic: "Scanning & Enumeration",
    question: "Which tool is widely used for network scanning?",
    options: [
      { label: "A", text: "Nmap" },
      { label: "B", text: "Metasploit" },
      { label: "C", text: "Burp Suite" },
      { label: "D", text: "John the Ripper" },
    ],
    answer: "A. Nmap",
  },
  {
    id: 14,
    topic: "Scanning & Enumeration",
    question: "What is a SYN scan?",
    options: [
      { label: "A", text: "A TCP half-open scan" },
      { label: "B", text: "A UDP scan" },
      { label: "C", text: "A full TCP connect scan" },
      { label: "D", text: "An Xmas scan" },
    ],
    answer: "A. A TCP half-open scan",
  },
  {
    id: 15,
    topic: "Scanning & Enumeration",
    question: "What is the purpose of a port scan?",
    options: [
      { label: "A", text: "To discover open ports on a target" },
      { label: "B", text: "To exploit vulnerabilities" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To perform social engineering" },
    ],
    answer: "A. To discover open ports on a target",
  },
  {
    id: 16,
    topic: "Scanning & Enumeration",
    question: "Which Nmap option performs a version detection scan?",
    options: [
      { label: "A", text: "-sV" },
      { label: "B", text: "-sS" },
      { label: "C", text: "-sU" },
      { label: "D", text: "-sA" },
    ],
    answer: "A. -sV",
  },
  {
    id: 17,
    topic: "Scanning & Enumeration",
    question: "What is banner grabbing?",
    options: [
      { label: "A", text: "Retrieving service information from open ports" },
      { label: "B", text: "Grabbing a banner from a website" },
      { label: "C", text: "Stealing user credentials" },
      { label: "D", text: "Performing a DoS attack" },
    ],
    answer: "A. Retrieving service information from open ports",
  },
  {
    id: 18,
    topic: "Scanning & Enumeration",
    question: "Which tool is used for SNMP enumeration?",
    options: [
      { label: "A", text: "snmpwalk" },
      { label: "B", text: "nmap" },
      { label: "C", text: "netcat" },
      { label: "D", text: "nslookup" },
    ],
    answer: "A. snmpwalk",
  },

  // ----- System Hacking (6) -----
  {
    id: 19,
    topic: "System Hacking",
    question: "What is password cracking?",
    options: [
      { label: "A", text: "Obtaining passwords through various techniques" },
      { label: "B", text: "Encrypting passwords" },
      { label: "C", text: "Changing passwords" },
      { label: "D", text: "Deleting passwords" },
    ],
    answer: "A. Obtaining passwords through various techniques",
  },
  {
    id: 20,
    topic: "System Hacking",
    question: "Which attack uses a dictionary of common words?",
    options: [
      { label: "A", text: "Dictionary attack" },
      { label: "B", text: "Brute force attack" },
      { label: "C", text: "Rainbow table attack" },
      { label: "D", text: "Phishing" },
    ],
    answer: "A. Dictionary attack",
  },
  {
    id: 21,
    topic: "System Hacking",
    question: "What is a rainbow table?",
    options: [
      { label: "A", text: "A precomputed table for reversing cryptographic hash functions" },
      { label: "B", text: "A table of passwords" },
      { label: "C", text: "A firewall rule set" },
      { label: "D", text: "A routing table" },
    ],
    answer: "A. A precomputed table for reversing cryptographic hash functions",
  },
  {
    id: 22,
    topic: "System Hacking",
    question: "What is privilege escalation?",
    options: [
      { label: "A", text: "Gaining higher-level permissions on a system" },
      { label: "B", text: "Lowering user permissions" },
      { label: "C", text: "Encrypting files" },
      { label: "D", text: "Deleting system files" },
    ],
    answer: "A. Gaining higher-level permissions on a system",
  },
  {
    id: 23,
    topic: "System Hacking",
    question: "Which command is used to add a user in Linux?",
    options: [
      { label: "A", text: "useradd" },
      { label: "B", text: "adduser" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "usermod" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 24,
    topic: "System Hacking",
    question: "What is a rootkit?",
    options: [
      { label: "A", text: "Malware that hides its presence and provides backdoor access" },
      { label: "B", text: "A type of antivirus" },
      { label: "C", text: "A firewall" },
      { label: "D", text: "A vulnerability scanner" },
    ],
    answer: "A. Malware that hides its presence and provides backdoor access",
  },

  // ----- Malware & Viruses (6) -----
  {
    id: 25,
    topic: "Malware & Viruses",
    question: "What is a virus?",
    options: [
      { label: "A", text: "Malware that replicates by attaching to files" },
      { label: "B", text: "Malware that self-propagates over networks" },
      { label: "C", text: "Malware that disguises as legitimate software" },
      { label: "D", text: "Malware that encrypts files" },
    ],
    answer: "A. Malware that replicates by attaching to files",
  },
  {
    id: 26,
    topic: "Malware & Viruses",
    question: "What is a worm?",
    options: [
      { label: "A", text: "Malware that self-propagates without user interaction" },
      { label: "B", text: "Malware that attaches to files" },
      { label: "C", text: "Malware that encrypts files" },
      { label: "D", text: "Malware that steals passwords" },
    ],
    answer: "A. Malware that self-propagates without user interaction",
  },
  {
    id: 27,
    topic: "Malware & Viruses",
    question: "What is a Trojan horse?",
    options: [
      { label: "A", text: "Malware disguised as legitimate software" },
      { label: "B", text: "Malware that replicates like a virus" },
      { label: "C", text: "Malware that spreads via email" },
      { label: "D", text: "Malware that encrypts files" },
    ],
    answer: "A. Malware disguised as legitimate software",
  },
  {
    id: 28,
    topic: "Malware & Viruses",
    question: "What is ransomware?",
    options: [
      { label: "A", text: "Malware that encrypts files and demands payment" },
      { label: "B", text: "Malware that steals credentials" },
      { label: "C", text: "Malware that spreads via USB drives" },
      { label: "D", text: "Malware that logs keystrokes" },
    ],
    answer: "A. Malware that encrypts files and demands payment",
  },
  {
    id: 29,
    topic: "Malware & Viruses",
    question: "What is a keylogger?",
    options: [
      { label: "A", text: "Malware that records keystrokes" },
      { label: "B", text: "Malware that encrypts files" },
      { label: "C", text: "Malware that steals passwords" },
      { label: "D", text: "Malware that spreads via email" },
    ],
    answer: "A. Malware that records keystrokes",
  },
  {
    id: 30,
    topic: "Malware & Viruses",
    question: "What is the difference between a virus and a worm?",
    options: [
      { label: "A", text: "Virus needs a host file; worm is standalone" },
      { label: "B", text: "Worm needs a host file; virus is standalone" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Virus spreads over networks; worm does not" },
    ],
    answer: "A. Virus needs a host file; worm is standalone",
  },

  // ----- Network Attacks (6) -----
  {
    id: 31,
    topic: "Network Attacks",
    question: "What is a Denial of Service (DoS) attack?",
    options: [
      { label: "A", text: "Flooding a system to make it unavailable" },
      { label: "B", text: "Gaining unauthorized access" },
      { label: "C", text: "Stealing sensitive data" },
      { label: "D", text: "Modifying data" },
    ],
    answer: "A. Flooding a system to make it unavailable",
  },
  {
    id: 32,
    topic: "Network Attacks",
    question: "What is a DDoS attack?",
    options: [
      { label: "A", text: "Distributed Denial of Service using multiple machines" },
      { label: "B", text: "Direct Denial of Service" },
      { label: "C", text: "Dynamic Denial of Service" },
      { label: "D", text: "Data Denial of Service" },
    ],
    answer: "A. Distributed Denial of Service using multiple machines",
  },
  {
    id: 33,
    topic: "Network Attacks",
    question: "What is a man-in-the-middle (MITM) attack?",
    options: [
      { label: "A", text: "Intercepting and possibly altering communication between two parties" },
      { label: "B", text: "Impersonating a server" },
      { label: "C", text: "Flooding a network" },
      { label: "D", text: "Cracking passwords" },
    ],
    answer: "A. Intercepting and possibly altering communication between two parties",
  },
  {
    id: 34,
    topic: "Network Attacks",
    question: "What is ARP spoofing?",
    options: [
      { label: "A", text: "Sending fake ARP messages to associate an attacker's MAC address with a target's IP" },
      { label: "B", text: "Spoofing an IP address" },
      { label: "C", text: "Spoofing a DNS" },
      { label: "D", text: "Spoofing a MAC address" },
    ],
    answer: "A. Sending fake ARP messages to associate an attacker's MAC address with a target's IP",
  },
  {
    id: 35,
    topic: "Network Attacks",
    question: "What is a session hijacking attack?",
    options: [
      { label: "A", text: "Stealing a valid session token to gain unauthorized access" },
      { label: "B", text: "Overloading a session" },
      { label: "C", text: "Encrypting session data" },
      { label: "D", text: "Logging out a user" },
    ],
    answer: "A. Stealing a valid session token to gain unauthorized access",
  },
  {
    id: 36,
    topic: "Network Attacks",
    question: "What is sniffing?",
    options: [
      { label: "A", text: "Capturing and analyzing network traffic" },
      { label: "B", text: "Sending fake packets" },
      { label: "C", text: "Decrypting encrypted traffic" },
      { label: "D", text: "Flooding a network" },
    ],
    answer: "A. Capturing and analyzing network traffic",
  },

  // ----- Web Application Security (6) -----
  {
    id: 37,
    topic: "Web Application Security",
    question: "What is the OWASP Top 10?",
    options: [
      { label: "A", text: "A list of top web application security risks" },
      { label: "B", text: "A list of secure coding practices" },
      { label: "C", text: "A list of firewall rules" },
      { label: "D", text: "A list of encryption algorithms" },
    ],
    answer: "A. A list of top web application security risks",
  },
  {
    id: 38,
    topic: "Web Application Security",
    question: "What is SQL Injection?",
    options: [
      { label: "A", text: "Injecting SQL queries through input fields to manipulate the database" },
      { label: "B", text: "Injecting JavaScript into web pages" },
      { label: "C", text: "Injecting commands into the OS" },
      { label: "D", text: "Injecting HTML tags" },
    ],
    answer: "A. Injecting SQL queries through input fields to manipulate the database",
  },
  {
    id: 39,
    topic: "Web Application Security",
    question: "What is Cross-Site Scripting (XSS)?",
    options: [
      { label: "A", text: "Injecting malicious scripts into web pages" },
      { label: "B", text: "Injecting SQL queries" },
      { label: "C", text: "Injecting commands into the OS" },
      { label: "D", text: "Faking HTTP requests" },
    ],
    answer: "A. Injecting malicious scripts into web pages",
  },
  {
    id: 40,
    topic: "Web Application Security",
    question: "What is Cross-Site Request Forgery (CSRF)?",
    options: [
      { label: "A", text: "Forcing a user to execute unwanted actions on a web application" },
      { label: "B", text: "Injecting scripts into web pages" },
      { label: "C", text: "Stealing cookies" },
      { label: "D", text: "SQL injection" },
    ],
    answer: "A. Forcing a user to execute unwanted actions on a web application",
  },
  {
    id: 41,
    topic: "Web Application Security",
    question: "Which tool is used for intercepting and modifying HTTP/S traffic?",
    options: [
      { label: "A", text: "Burp Suite" },
      { label: "B", text: "Nmap" },
      { label: "C", text: "Metasploit" },
      { label: "D", text: "Wireshark" },
    ],
    answer: "A. Burp Suite",
  },
  {
    id: 42,
    topic: "Web Application Security",
    question: "What is the purpose of input validation?",
    options: [
      { label: "A", text: "To prevent injection attacks by sanitizing user input" },
      { label: "B", text: "To speed up the application" },
      { label: "C", text: "To improve UI" },
      { label: "D", text: "To handle errors" },
    ],
    answer: "A. To prevent injection attacks by sanitizing user input",
  },

  // ----- Cryptography (6) -----
  {
    id: 43,
    topic: "Cryptography",
    question: "What is the difference between encryption and hashing?",
    options: [
      { label: "A", text: "Encryption is reversible; hashing is irreversible" },
      { label: "B", text: "Hashing is reversible; encryption is irreversible" },
      { label: "C", text: "Both are reversible" },
      { label: "D", text: "Both are irreversible" },
    ],
    answer: "A. Encryption is reversible; hashing is irreversible",
  },
  {
    id: 44,
    topic: "Cryptography",
    question: "What is symmetric encryption?",
    options: [
      { label: "A", text: "Uses the same key for encryption and decryption" },
      { label: "B", text: "Uses different keys for encryption and decryption" },
      { label: "C", text: "Uses no key" },
      { label: "D", text: "Uses a public and private key" },
    ],
    answer: "A. Uses the same key for encryption and decryption",
  },
  {
    id: 45,
    topic: "Cryptography",
    question: "What is asymmetric encryption?",
    options: [
      { label: "A", text: "Uses a pair of keys (public and private)" },
      { label: "B", text: "Uses the same key" },
      { label: "C", text: "Uses no key" },
      { label: "D", text: "Uses a shared secret" },
    ],
    answer: "A. Uses a pair of keys (public and private)",
  },
  {
    id: 46,
    topic: "Cryptography",
    question: "What is a hash function?",
    options: [
      { label: "A", text: "A function that maps data of arbitrary size to a fixed-size value" },
      { label: "B", text: "A function that encrypts data" },
      { label: "C", text: "A function that decrypts data" },
      { label: "D", text: "A function that compresses data" },
    ],
    answer: "A. A function that maps data of arbitrary size to a fixed-size value",
  },
  {
    id: 47,
    topic: "Cryptography",
    question: "What is the purpose of digital signatures?",
    options: [
      { label: "A", text: "To verify authenticity and integrity of a message" },
      { label: "B", text: "To encrypt messages" },
      { label: "C", text: "To compress messages" },
      { label: "D", text: "To hide messages" },
    ],
    answer: "A. To verify authenticity and integrity of a message",
  },
  {
    id: 48,
    topic: "Cryptography",
    question: "What is SSL/TLS used for?",
    options: [
      { label: "A", text: "Secure communication over the internet" },
      { label: "B", text: "File transfer" },
      { label: "C", text: "Email encryption" },
      { label: "D", text: "Database encryption" },
    ],
    answer: "A. Secure communication over the internet",
  },

  // ----- Social Engineering (6) -----
  {
    id: 49,
    topic: "Social Engineering",
    question: "What is social engineering?",
    options: [
      { label: "A", text: "Manipulating people into revealing confidential information" },
      { label: "B", text: "Hacking computer systems" },
      { label: "C", text: "Writing malware" },
      { label: "D", text: "Performing penetration testing" },
    ],
    answer: "A. Manipulating people into revealing confidential information",
  },
  {
    id: 50,
    topic: "Social Engineering",
    question: "What is phishing?",
    options: [
      { label: "A", text: "A fraudulent attempt to obtain sensitive information via email" },
      { label: "B", text: "A type of malware" },
      { label: "C", text: "A network attack" },
      { label: "D", text: "A physical security breach" },
    ],
    answer: "A. A fraudulent attempt to obtain sensitive information via email",
  },
  {
    id: 51,
    topic: "Social Engineering",
    question: "What is pretexting?",
    options: [
      { label: "A", text: "Creating a fabricated scenario to obtain information" },
      { label: "B", text: "Sending fake emails" },
      { label: "C", text: "Making phone calls pretending to be someone else" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 52,
    topic: "Social Engineering",
    question: "What is baiting?",
    options: [
      { label: "A", text: "Leaving infected USB drives to lure victims" },
      { label: "B", text: "Sending emails with malware" },
      { label: "C", text: "Creating fake websites" },
      { label: "D", text: "Calling victims" },
    ],
    answer: "A. Leaving infected USB drives to lure victims",
  },
  {
    id: 53,
    topic: "Social Engineering",
    question: "What is tailgating?",
    options: [
      { label: "A", text: "Following an authorized person into a restricted area" },
      { label: "B", text: "Sending fake emails" },
      { label: "C", text: "Calling to trick users" },
      { label: "D", text: "Hacking a network" },
    ],
    answer: "A. Following an authorized person into a restricted area",
  },
  {
    id: 54,
    topic: "Social Engineering",
    question: "What is a vishing attack?",
    options: [
      { label: "A", text: "Voice phishing via phone calls" },
      { label: "B", text: "Email phishing" },
      { label: "C", text: "SMS phishing" },
      { label: "D", text: "Malware phishing" },
    ],
    answer: "A. Voice phishing via phone calls",
  },

  // ----- Wireless Security (6) -----
  {
    id: 55,
    topic: "Wireless Security",
    question: "What is WEP?",
    options: [
      { label: "A", text: "Wired Equivalent Privacy - an older wireless encryption protocol" },
      { label: "B", text: "Wi-Fi Protected Access" },
      { label: "C", text: "A type of firewall" },
      { label: "D", text: "A routing protocol" },
    ],
    answer: "A. Wired Equivalent Privacy - an older wireless encryption protocol",
  },
  {
    id: 56,
    topic: "Wireless Security",
    question: "What is WPA?",
    options: [
      { label: "A", text: "Wi-Fi Protected Access" },
      { label: "B", text: "Wired Equivalent Privacy" },
      { label: "C", text: "Wireless Personal Area Network" },
      { label: "D", text: "Wide Area Network" },
    ],
    answer: "A. Wi-Fi Protected Access",
  },
  {
    id: 57,
    topic: "Wireless Security",
    question: "What is WPA2?",
    options: [
      { label: "A", text: "An improved version of WPA using AES encryption" },
      { label: "B", text: "An older version of WEP" },
      { label: "C", text: "A wired security protocol" },
      { label: "D", text: "A type of malware" },
    ],
    answer: "A. An improved version of WPA using AES encryption",
  },
  {
    id: 58,
    topic: "Wireless Security",
    question: "What is a rogue access point?",
    options: [
      { label: "A", text: "An unauthorized wireless access point" },
      { label: "B", text: "A secure access point" },
      { label: "C", text: "A public Wi-Fi hotspot" },
      { label: "D", text: "A VPN" },
    ],
    answer: "A. An unauthorized wireless access point",
  },
  {
    id: 59,
    topic: "Wireless Security",
    question: "What is a deauthentication attack?",
    options: [
      { label: "A", text: "Sending deauth frames to disconnect clients from a WLAN" },
      { label: "B", text: "Encrypting wireless traffic" },
      { label: "C", text: "Scanning for open ports" },
      { label: "D", text: "Performing a DOS attack" },
    ],
    answer: "A. Sending deauth frames to disconnect clients from a WLAN",
  },
  {
    id: 60,
    topic: "Wireless Security",
    question: "Which tool is used to crack WEP/WPA passwords?",
    options: [
      { label: "A", text: "Aircrack-ng" },
      { label: "B", text: "Nmap" },
      { label: "C", text: "Metasploit" },
      { label: "D", text: "John the Ripper" },
    ],
    answer: "A. Aircrack-ng",
  },

  // ----- Security Tools (6) -----
  {
    id: 61,
    topic: "Security Tools",
    question: "What is Metasploit?",
    options: [
      { label: "A", text: "A penetration testing framework" },
      { label: "B", text: "A network scanner" },
      { label: "C", text: "A password cracker" },
      { label: "D", text: "A vulnerability scanner" },
    ],
    answer: "A. A penetration testing framework",
  },
  {
    id: 62,
    topic: "Security Tools",
    question: "What is Wireshark?",
    options: [
      { label: "A", text: "A network protocol analyzer" },
      { label: "B", text: "A port scanner" },
      { label: "C", text: "A password cracker" },
      { label: "D", text: "A web application scanner" },
    ],
    answer: "A. A network protocol analyzer",
  },
  {
    id: 63,
    topic: "Security Tools",
    question: "What is John the Ripper?",
    options: [
      { label: "A", text: "A password cracking tool" },
      { label: "B", text: "A network scanner" },
      { label: "C", text: "A vulnerability scanner" },
      { label: "D", text: "A firewall" },
    ],
    answer: "A. A password cracking tool",
  },
  {
    id: 64,
    topic: "Security Tools",
    question: "What is Nessus?",
    options: [
      { label: "A", text: "A vulnerability scanner" },
      { label: "B", text: "A penetration testing framework" },
      { label: "C", text: "A network sniffer" },
      { label: "D", text: "A password cracker" },
    ],
    answer: "A. A vulnerability scanner",
  },
  {
    id: 65,
    topic: "Security Tools",
    question: "What is Burp Suite used for?",
    options: [
      { label: "A", text: "Web application security testing" },
      { label: "B", text: "Network scanning" },
      { label: "C", text: "Password cracking" },
      { label: "D", text: "Wireless cracking" },
    ],
    answer: "A. Web application security testing",
  },
  {
    id: 66,
    topic: "Security Tools",
    question: "What is Snort?",
    options: [
      { label: "A", text: "An intrusion detection/prevention system" },
      { label: "B", text: "A network scanner" },
      { label: "C", text: "A password cracker" },
      { label: "D", text: "A firewall" },
    ],
    answer: "A. An intrusion detection/prevention system",
  },

  // ----- Incident Response & Forensics (6) -----
  {
    id: 67,
    topic: "Incident Response & Forensics",
    question: "What is the first step in incident response?",
    options: [
      { label: "A", text: "Preparation" },
      { label: "B", text: "Detection and analysis" },
      { label: "C", text: "Containment" },
      { label: "D", text: "Eradication" },
    ],
    answer: "A. Preparation",
  },
  {
    id: 68,
    topic: "Incident Response & Forensics",
    question: "What is the goal of digital forensics?",
    options: [
      { label: "A", text: "To preserve, analyze, and present digital evidence" },
      { label: "B", text: "To hack systems" },
      { label: "C", text: "To install malware" },
      { label: "D", text: "To crack passwords" },
    ],
    answer: "A. To preserve, analyze, and present digital evidence",
  },
  {
    id: 69,
    topic: "Incident Response & Forensics",
    question: "What is a write blocker?",
    options: [
      { label: "A", text: "A device that prevents writing to a storage device during forensic analysis" },
      { label: "B", text: "A software that encrypts data" },
      { label: "C", text: "A firewall rule" },
      { label: "D", text: "A type of malware" },
    ],
    answer: "A. A device that prevents writing to a storage device during forensic analysis",
  },
  {
    id: 70,
    topic: "Incident Response & Forensics",
    question: "What is a chain of custody?",
    options: [
      { label: "A", text: "The chronological documentation of evidence handling" },
      { label: "B", text: "A chain of command" },
      { label: "C", text: "A type of lock" },
      { label: "D", text: "A network topology" },
    ],
    answer: "A. The chronological documentation of evidence handling",
  },
  {
    id: 71,
    topic: "Incident Response & Forensics",
    question: "What is the difference between an incident and a breach?",
    options: [
      { label: "A", text: "A breach is a specific type of incident involving data exposure" },
      { label: "B", text: "They are the same" },
      { label: "C", text: "Breach is an attempted attack; incident is successful" },
      { label: "D", text: "Incident is always malicious" },
    ],
    answer: "A. A breach is a specific type of incident involving data exposure",
  },
  {
    id: 72,
    topic: "Incident Response & Forensics",
    question: "Which tool is commonly used for memory forensics?",
    options: [
      { label: "A", text: "Volatility" },
      { label: "B", text: "Wireshark" },
      { label: "C", text: "Nmap" },
      { label: "D", text: "Metasploit" },
    ],
    answer: "A. Volatility",
  },

  // ----- Additional MCQs to reach 130+ -----
  {
    id: 73,
    topic: "Ethical Hacking Basics",
    question: "What is the CIA triad?",
    options: [
      { label: "A", text: "Confidentiality, Integrity, Availability" },
      { label: "B", text: "Confidentiality, Identity, Access" },
      { label: "C", text: "Control, Integrity, Access" },
      { label: "D", text: "Confidentiality, Integrity, Authentication" },
    ],
    answer: "A. Confidentiality, Integrity, Availability",
  },
  {
    id: 74,
    topic: "Footprinting & Reconnaissance",
    question: "Which command is used for DNS zone transfer?",
    options: [
      { label: "A", text: "dig axfr" },
      { label: "B", text: "nslookup -type=any" },
      { label: "C", text: "host -l" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },
  {
    id: 75,
    topic: "Scanning & Enumeration",
    question: "What is a null scan?",
    options: [
      { label: "A", text: "A TCP scan with no flags set" },
      { label: "B", text: "A UDP scan" },
      { label: "C", text: "A SYN scan" },
      { label: "D", text: "A FIN scan" },
    ],
    answer: "A. A TCP scan with no flags set",
  },
  {
    id: 76,
    topic: "System Hacking",
    question: "What is the SAM file in Windows?",
    options: [
      { label: "A", text: "The Security Account Manager file storing password hashes" },
      { label: "B", text: "A system log file" },
      { label: "C", text: "A configuration file" },
      { label: "D", text: "A network file" },
    ],
    answer: "A. The Security Account Manager file storing password hashes",
  },
  {
    id: 77,
    topic: "Malware & Viruses",
    question: "What is a polymorphic virus?",
    options: [
      { label: "A", text: "A virus that changes its code to evade detection" },
      { label: "B", text: "A virus that encrypts files" },
      { label: "C", text: "A virus that steals passwords" },
      { label: "D", text: "A virus that self-propagates" },
    ],
    answer: "A. A virus that changes its code to evade detection",
  },
  {
    id: 78,
    topic: "Network Attacks",
    question: "What is a Smurf attack?",
    options: [
      { label: "A", text: "A DDoS attack using ICMP echo requests with spoofed source" },
      { label: "B", text: "A SYN flood attack" },
      { label: "C", text: "A UDP flood attack" },
      { label: "D", text: "A DNS amplification attack" },
    ],
    answer: "A. A DDoS attack using ICMP echo requests with spoofed source",
  },
  {
    id: 79,
    topic: "Web Application Security",
    question: "What is command injection?",
    options: [
      { label: "A", text: "Injecting operating system commands through input fields" },
      { label: "B", text: "Injecting SQL commands" },
      { label: "C", text: "Injecting JavaScript" },
      { label: "D", text: "Injecting HTML" },
    ],
    answer: "A. Injecting operating system commands through input fields",
  },
  {
    id: 80,
    topic: "Cryptography",
    question: "What is a certificate authority (CA)?",
    options: [
      { label: "A", text: "An entity that issues digital certificates" },
      { label: "B", text: "A hashing algorithm" },
      { label: "C", text: "A symmetric encryption algorithm" },
      { label: "D", text: "A type of firewall" },
    ],
    answer: "A. An entity that issues digital certificates",
  },
  {
    id: 81,
    topic: "Social Engineering",
    question: "What is spear phishing?",
    options: [
      { label: "A", text: "A targeted phishing attack on a specific individual" },
      { label: "B", text: "A mass phishing email" },
      { label: "C", text: "A phishing attack via SMS" },
      { label: "D", text: "A phishing attack via phone" },
    ],
    answer: "A. A targeted phishing attack on a specific individual",
  },
  {
    id: 82,
    topic: "Wireless Security",
    question: "What is EVIL Twin attack?",
    options: [
      { label: "A", text: "Setting up a rogue access point with the same SSID as a legitimate one" },
      { label: "B", text: "Cracking WEP keys" },
      { label: "C", text: "Deauthenticating clients" },
      { label: "D", text: "Sniffing wireless traffic" },
    ],
    answer: "A. Setting up a rogue access point with the same SSID as a legitimate one",
  },
  {
    id: 83,
    topic: "Security Tools",
    question: "What is the purpose of a fuzzer?",
    options: [
      { label: "A", text: "To send malformed input to find vulnerabilities" },
      { label: "B", text: "To scan ports" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To sniff traffic" },
    ],
    answer: "A. To send malformed input to find vulnerabilities",
  },
  {
    id: 84,
    topic: "Incident Response & Forensics",
    question: "What is a forensic image?",
    options: [
      { label: "A", text: "An exact bit-by-bit copy of a storage device" },
      { label: "B", text: "A compressed backup" },
      { label: "C", text: "A screenshot" },
      { label: "D", text: "A log file" },
    ],
    answer: "A. An exact bit-by-bit copy of a storage device",
  },
  {
    id: 85,
    topic: "Ethical Hacking Basics",
    question: "What is a security audit?",
    options: [
      { label: "A", text: "A systematic evaluation of security controls" },
      { label: "B", text: "A penetration test" },
      { label: "C", text: "A vulnerability scan" },
      { label: "D", text: "A social engineering test" },
    ],
    answer: "A. A systematic evaluation of security controls",
  },
  {
    id: 86,
    topic: "Footprinting & Reconnaissance",
    question: "What is the purpose of using social media for footprinting?",
    options: [
      { label: "A", text: "To gather personal information about targets" },
      { label: "B", text: "To hack social media accounts" },
      { label: "C", text: "To spread malware" },
      { label: "D", text: "To perform phishing" },
    ],
    answer: "A. To gather personal information about targets",
  },
  {
    id: 87,
    topic: "Scanning & Enumeration",
    question: "What is an ICMP echo request?",
    options: [
      { label: "A", text: "A ping packet" },
      { label: "B", text: "A SYN packet" },
      { label: "C", text: "A FIN packet" },
      { label: "D", text: "A UDP packet" },
    ],
    answer: "A. A ping packet",
  },
  {
    id: 88,
    topic: "System Hacking",
    question: "What is the difference between local and remote privilege escalation?",
    options: [
      { label: "A", text: "Local is from within the system; remote is from outside" },
      { label: "B", text: "Remote is from within; local is from outside" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Local requires physical access" },
    ],
    answer: "A. Local is from within the system; remote is from outside",
  },
  {
    id: 89,
    topic: "Malware & Viruses",
    question: "What is a boot sector virus?",
    options: [
      { label: "A", text: "A virus that infects the master boot record" },
      { label: "B", text: "A virus that infects files" },
      { label: "C", text: "A virus that infects email" },
      { label: "D", text: "A virus that infects networks" },
    ],
    answer: "A. A virus that infects the master boot record",
  },
  {
    id: 90,
    topic: "Network Attacks",
    question: "What is a DNS spoofing attack?",
    options: [
      { label: "A", text: "Forcing a DNS server to return a false IP address" },
      { label: "B", text: "Flooding a DNS server" },
      { label: "C", text: "Hacking a DNS server" },
      { label: "D", text: "Encrypting DNS queries" },
    ],
    answer: "A. Forcing a DNS server to return a false IP address",
  },
  {
    id: 91,
    topic: "Web Application Security",
    question: "What is a directory traversal attack?",
    options: [
      { label: "A", text: "Accessing files outside the web root directory" },
      { label: "B", text: "Injecting SQL commands" },
      { label: "C", text: "Injecting JavaScript" },
      { label: "D", text: "Injecting commands" },
    ],
    answer: "A. Accessing files outside the web root directory",
  },
  {
    id: 92,
    topic: "Cryptography",
    question: "What is a salt in password hashing?",
    options: [
      { label: "A", text: "Random data added to passwords before hashing" },
      { label: "B", text: "A type of encryption" },
      { label: "C", text: "A hash function" },
      { label: "D", text: "A type of key" },
    ],
    answer: "A. Random data added to passwords before hashing",
  },
  {
    id: 93,
    topic: "Social Engineering",
    question: "What is a watering hole attack?",
    options: [
      { label: "A", text: "Compromising a website frequented by the target" },
      { label: "B", text: "Phishing emails" },
      { label: "C", text: "USB baiting" },
      { label: "D", text: "Tailgating" },
    ],
    answer: "A. Compromising a website frequented by the target",
  },
  {
    id: 94,
    topic: "Wireless Security",
    question: "What is a WPS attack?",
    options: [
      { label: "A", text: "Exploiting Wi-Fi Protected Setup to recover the PIN" },
      { label: "B", text: "Cracking WEP" },
      { label: "C", text: "Deauth attack" },
      { label: "D", text: "Evil twin" },
    ],
    answer: "A. Exploiting Wi-Fi Protected Setup to recover the PIN",
  },
  {
    id: 95,
    topic: "Security Tools",
    question: "What is the use of a honeypot?",
    options: [
      { label: "A", text: "To lure attackers and study their behavior" },
      { label: "B", text: "To block attacks" },
      { label: "C", text: "To scan for vulnerabilities" },
      { label: "D", text: "To encrypt traffic" },
    ],
    answer: "A. To lure attackers and study their behavior",
  },
  {
    id: 96,
    topic: "Incident Response & Forensics",
    question: "What is the purpose of a hash value in forensics?",
    options: [
      { label: "A", text: "To verify the integrity of evidence" },
      { label: "B", text: "To encrypt evidence" },
      { label: "C", text: "To compress evidence" },
      { label: "D", text: "To hide evidence" },
    ],
    answer: "A. To verify the integrity of evidence",
  },
  {
    id: 97,
    topic: "Ethical Hacking Basics",
    question: "What is a zero-day vulnerability?",
    options: [
      { label: "A", text: "A vulnerability unknown to the vendor" },
      { label: "B", text: "A vulnerability that has been patched" },
      { label: "C", text: "A vulnerability that is not exploitable" },
      { label: "D", text: "A vulnerability found in old software" },
    ],
    answer: "A. A vulnerability unknown to the vendor",
  },
  {
    id: 98,
    topic: "Footprinting & Reconnaissance",
    question: "What is the use of Shodan?",
    options: [
      { label: "A", text: "To search for internet-connected devices and services" },
      { label: "B", text: "To scan for vulnerabilities" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To perform DDoS" },
    ],
    answer: "A. To search for internet-connected devices and services",
  },
  {
    id: 99,
    topic: "Scanning & Enumeration",
    question: "What is an ACK scan?",
    options: [
      { label: "A", text: "A TCP scan with the ACK flag set to determine firewall rules" },
      { label: "B", text: "A SYN scan" },
      { label: "C", text: "A UDP scan" },
      { label: "D", text: "A FIN scan" },
    ],
    answer: "A. A TCP scan with the ACK flag set to determine firewall rules",
  },
  {
    id: 100,
    topic: "System Hacking",
    question: "What is the /etc/passwd file in Linux?",
    options: [
      { label: "A", text: "A file storing user account information" },
      { label: "B", text: "A file storing passwords" },
      { label: "C", text: "A configuration file" },
      { label: "D", text: "A log file" },
    ],
    answer: "A. A file storing user account information",
  },
  {
    id: 101,
    topic: "Malware & Viruses",
    question: "What is a logic bomb?",
    options: [
      { label: "A", text: "Malware that triggers when specific conditions are met" },
      { label: "B", text: "Malware that replicates itself" },
      { label: "C", text: "Malware that encrypts files" },
      { label: "D", text: "Malware that steals credentials" },
    ],
    answer: "A. Malware that triggers when specific conditions are met",
  },
  {
    id: 102,
    topic: "Network Attacks",
    question: "What is a ping flood?",
    options: [
      { label: "A", text: "A DoS attack using ICMP echo requests" },
      { label: "B", text: "A DDoS attack using SYN packets" },
      { label: "C", text: "A UDP flood" },
      { label: "D", text: "A DNS amplification" },
    ],
    answer: "A. A DoS attack using ICMP echo requests",
  },
  {
    id: 103,
    topic: "Web Application Security",
    question: "What is a security misconfiguration?",
    options: [
      { label: "A", text: "Improperly configured security settings leading to vulnerabilities" },
      { label: "B", text: "A firewall rule" },
      { label: "C", text: "An encryption key" },
      { label: "D", text: "A strong password" },
    ],
    answer: "A. Improperly configured security settings leading to vulnerabilities",
  },
  {
    id: 104,
    topic: "Cryptography",
    question: "What is the purpose of a nonce?",
    options: [
      { label: "A", text: "A number used once in cryptographic communication" },
      { label: "B", text: "A type of key" },
      { label: "C", text: "A hash function" },
      { label: "D", text: "A certificate" },
    ],
    answer: "A. A number used once in cryptographic communication",
  },
  {
    id: 105,
    topic: "Social Engineering",
    question: "What is the difference between phishing and spear phishing?",
    options: [
      { label: "A", text: "Spear phishing is targeted at specific individuals" },
      { label: "B", text: "Phishing is targeted; spear is broad" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Spear phishing uses malware" },
    ],
    answer: "A. Spear phishing is targeted at specific individuals",
  },
  {
    id: 106,
    topic: "Wireless Security",
    question: "What is the purpose of a Wi-Fi jammer?",
    options: [
      { label: "A", text: "To interfere with wireless signals" },
      { label: "B", text: "To crack passwords" },
      { label: "C", text: "To sniff traffic" },
      { label: "D", text: "To secure a network" },
    ],
    answer: "A. To interfere with wireless signals",
  },
  {
    id: 107,
    topic: "Security Tools",
    question: "What is the use of OpenVAS?",
    options: [
      { label: "A", text: "An open-source vulnerability scanner" },
      { label: "B", text: "A penetration testing framework" },
      { label: "C", text: "A network sniffer" },
      { label: "D", text: "A password cracker" },
    ],
    answer: "A. An open-source vulnerability scanner",
  },
  {
    id: 108,
    topic: "Incident Response & Forensics",
    question: "What is the difference between containment and eradication?",
    options: [
      { label: "A", text: "Containment stops the incident from spreading; eradication removes the cause" },
      { label: "B", text: "Eradication stops the spread; containment removes the cause" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Containment is only for network incidents" },
    ],
    answer: "A. Containment stops the incident from spreading; eradication removes the cause",
  },
  {
    id: 109,
    topic: "Ethical Hacking Basics",
    question: "What is a vulnerability?",
    options: [
      { label: "A", text: "A weakness that can be exploited" },
      { label: "B", text: "A threat actor" },
      { label: "C", text: "A security control" },
      { label: "D", text: "A patch" },
    ],
    answer: "A. A weakness that can be exploited",
  },
  {
    id: 110,
    topic: "Footprinting & Reconnaissance",
    question: "What is the purpose of netcraft?",
    options: [
      { label: "A", text: "To gather information about websites and servers" },
      { label: "B", text: "To scan ports" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To perform DDoS" },
    ],
    answer: "A. To gather information about websites and servers",
  },
  {
    id: 111,
    topic: "Scanning & Enumeration",
    question: "What is the difference between a vulnerability scan and a penetration test?",
    options: [
      { label: "A", text: "Vulnerability scan identifies potential weaknesses; penetration test exploits them" },
      { label: "B", text: "Penetration test identifies weaknesses; scan exploits them" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Scan is manual; test is automated" },
    ],
    answer: "A. Vulnerability scan identifies potential weaknesses; penetration test exploits them",
  },
  {
    id: 112,
    topic: "System Hacking",
    question: "What is a backdoor?",
    options: [
      { label: "A", text: "A hidden method of accessing a system" },
      { label: "B", text: "A type of firewall" },
      { label: "C", text: "A vulnerability scanner" },
      { label: "D", text: "A password" },
    ],
    answer: "A. A hidden method of accessing a system",
  },
  {
    id: 113,
    topic: "Malware & Viruses",
    question: "What is a spyware?",
    options: [
      { label: "A", text: "Malware that secretly gathers user information" },
      { label: "B", text: "Malware that encrypts files" },
      { label: "C", text: "Malware that self-propagates" },
      { label: "D", text: "Malware that corrupts files" },
    ],
    answer: "A. Malware that secretly gathers user information",
  },
  {
    id: 114,
    topic: "Network Attacks",
    question: "What is a replay attack?",
    options: [
      { label: "A", text: "Replaying captured network traffic to gain unauthorized access" },
      { label: "B", text: "Flooding a network" },
      { label: "C", text: "Cracking passwords" },
      { label: "D", text: "Sniffing traffic" },
    ],
    answer: "A. Replaying captured network traffic to gain unauthorized access",
  },
  {
    id: 115,
    topic: "Web Application Security",
    question: "What is the purpose of a Web Application Firewall (WAF)?",
    options: [
      { label: "A", text: "To filter and monitor HTTP traffic for attacks" },
      { label: "B", text: "To scan for vulnerabilities" },
      { label: "C", text: "To encrypt data" },
      { label: "D", text: "To manage certificates" },
    ],
    answer: "A. To filter and monitor HTTP traffic for attacks",
  },
  {
    id: 116,
    topic: "Cryptography",
    question: "What is the difference between public key and private key?",
    options: [
      { label: "A", text: "Public key is shared; private key is kept secret" },
      { label: "B", text: "Private key is shared; public key is secret" },
      { label: "C", text: "Both are shared" },
      { label: "D", text: "Both are secret" },
    ],
    answer: "A. Public key is shared; private key is kept secret",
  },
  {
    id: 117,
    topic: "Social Engineering",
    question: "What is an impersonation attack?",
    options: [
      { label: "A", text: "Pretending to be someone else to gain information" },
      { label: "B", text: "Sending fake emails" },
      { label: "C", text: "Leaving infected USB drives" },
      { label: "D", text: "Following someone into a building" },
    ],
    answer: "A. Pretending to be someone else to gain information",
  },
  {
    id: 118,
    topic: "Wireless Security",
    question: "What is the difference between WPA2-PSK and WPA2-Enterprise?",
    options: [
      { label: "A", text: "PSK uses a pre-shared key; Enterprise uses a RADIUS server" },
      { label: "B", text: "Enterprise uses a pre-shared key; PSK uses RADIUS" },
      { label: "C", text: "Both use the same" },
      { label: "D", text: "PSK is more secure" },
    ],
    answer: "A. PSK uses a pre-shared key; Enterprise uses a RADIUS server",
  },
  {
    id: 119,
    topic: "Security Tools",
    question: "What is the use of Hydra?",
    options: [
      { label: "A", text: "A password cracking tool for network services" },
      { label: "B", text: "A vulnerability scanner" },
      { label: "C", text: "A network sniffer" },
      { label: "D", text: "A web application scanner" },
    ],
    answer: "A. A password cracking tool for network services",
  },
  {
    id: 120,
    topic: "Incident Response & Forensics",
    question: "What is the importance of timestamps in forensics?",
    options: [
      { label: "A", text: "To establish a timeline of events" },
      { label: "B", text: "To encrypt evidence" },
      { label: "C", text: "To compress evidence" },
      { label: "D", text: "To hide evidence" },
    ],
    answer: "A. To establish a timeline of events",
  },
  {
    id: 121,
    topic: "Ethical Hacking Basics",
    question: "What is the difference between a vulnerability and an exploit?",
    options: [
      { label: "A", text: "A vulnerability is a weakness; an exploit is a technique to use it" },
      { label: "B", text: "An exploit is a weakness; a vulnerability is a technique" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Vulnerabilities are always patched" },
    ],
    answer: "A. A vulnerability is a weakness; an exploit is a technique to use it",
  },
  {
    id: 122,
    topic: "Footprinting & Reconnaissance",
    question: "What is a zone transfer?",
    options: [
      { label: "A", text: "Copying DNS records from a DNS server" },
      { label: "B", text: "Transferring files" },
      { label: "C", text: "Transferring network packets" },
      { label: "D", text: "Transferring email" },
    ],
    answer: "A. Copying DNS records from a DNS server",
  },
  {
    id: 123,
    topic: "Scanning & Enumeration",
    question: "What is the purpose of using nmap's -O option?",
    options: [
      { label: "A", text: "To detect the operating system" },
      { label: "B", text: "To scan for open ports" },
      { label: "C", text: "To perform a version scan" },
      { label: "D", text: "To perform a script scan" },
    ],
    answer: "A. To detect the operating system",
  },
  {
    id: 124,
    topic: "System Hacking",
    question: "What is the difference between a local and remote exploit?",
    options: [
      { label: "A", text: "Local exploit requires prior access; remote exploit works over the network" },
      { label: "B", text: "Remote exploit requires prior access; local works over the network" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Local exploits are more severe" },
    ],
    answer: "A. Local exploit requires prior access; remote exploit works over the network",
  },
  {
    id: 125,
    topic: "Malware & Viruses",
    question: "What is a dropper?",
    options: [
      { label: "A", text: "Malware used to install other malware" },
      { label: "B", text: "Malware that encrypts files" },
      { label: "C", text: "Malware that steals credentials" },
      { label: "D", text: "Malware that self-propagates" },
    ],
    answer: "A. Malware used to install other malware",
  },
  {
    id: 126,
    topic: "Network Attacks",
    question: "What is a teardrop attack?",
    options: [
      { label: "A", text: "An attack using overlapping IP fragments to crash a system" },
      { label: "B", text: "A SYN flood" },
      { label: "C", text: "A UDP flood" },
      { label: "D", text: "A DNS amplification" },
    ],
    answer: "A. An attack using overlapping IP fragments to crash a system",
  },
  {
    id: 127,
    topic: "Web Application Security",
    question: "What is the purpose of security headers like Content-Security-Policy?",
    options: [
      { label: "A", text: "To prevent XSS and other injection attacks" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To compress data" },
      { label: "D", text: "To authenticate users" },
    ],
    answer: "A. To prevent XSS and other injection attacks",
  },
  {
    id: 128,
    topic: "Cryptography",
    question: "What is the purpose of a digital certificate?",
    options: [
      { label: "A", text: "To bind a public key with an identity" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To hash data" },
      { label: "D", text: "To compress data" },
    ],
    answer: "A. To bind a public key with an identity",
  },
  {
    id: 129,
    topic: "Social Engineering",
    question: "What is the difference between phishing and smishing?",
    options: [
      { label: "A", text: "Phishing uses email; smishing uses SMS" },
      { label: "B", text: "Smishing uses email; phishing uses SMS" },
      { label: "C", text: "Both use email" },
      { label: "D", text: "Both use phone calls" },
    ],
    answer: "A. Phishing uses email; smishing uses SMS",
  },
  {
    id: 130,
    topic: "Wireless Security",
    question: "What is the purpose of a wireless intrusion prevention system (WIPS)?",
    options: [
      { label: "A", text: "To detect and prevent unauthorized wireless access" },
      { label: "B", text: "To crack wireless passwords" },
      { label: "C", text: "To sniff wireless traffic" },
      { label: "D", text: "To amplify wireless signals" },
    ],
    answer: "A. To detect and prevent unauthorized wireless access",
  },
  {
    id: 131,
    topic: "Security Tools",
    question: "What is the purpose of sqlmap?",
    options: [
      { label: "A", text: "To automate SQL injection detection and exploitation" },
      { label: "B", text: "To scan for open ports" },
      { label: "C", text: "To crack passwords" },
      { label: "D", text: "To sniff traffic" },
    ],
    answer: "A. To automate SQL injection detection and exploitation",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is ethical hacking and why is it important?",
    answer:
      "Ethical hacking involves legally breaking into systems to identify vulnerabilities before malicious hackers do. It is important because it helps organizations strengthen their security posture, protect sensitive data, and comply with regulatory requirements.",
  },
  {
    question: "What are the phases of ethical hacking?",
    answer:
      "The typical phases are: Reconnaissance (footprinting), Scanning & Enumeration, Gaining Access (exploitation), Maintaining Access, and Covering Tracks. Some methodologies also include a reporting phase.",
  },
  {
    question: "What is the difference between ethical hacking and penetration testing?",
    answer:
      "Ethical hacking is a broader term that encompasses all security testing activities, while penetration testing is a specific form of ethical hacking focused on exploiting vulnerabilities to assess risk.",
  },
  {
    question: "What are the common tools used by ethical hackers?",
    answer:
      "Common tools include Nmap (network scanning), Metasploit (exploitation), Burp Suite (web testing), Wireshark (sniffing), John the Ripper (password cracking), Aircrack-ng (wireless), and Nessus (vulnerability scanning).",
  },
  {
    question: "What is the OWASP Top 10?",
    answer:
      "The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications, including injection, XSS, broken authentication, etc.",
  },
  {
    question: "What is the difference between a vulnerability, threat, and risk?",
    answer:
      "A vulnerability is a weakness. A threat is a potential harm (actor). Risk is the likelihood and impact of a threat exploiting a vulnerability. Risk = Threat x Vulnerability x Impact.",
  },
  {
    question: "What is a zero-day vulnerability?",
    answer:
      "A zero-day vulnerability is a software flaw that is unknown to the vendor and has no patch. Attackers can exploit it before it is fixed, making it highly dangerous.",
  },
  {
    question: "What is social engineering and how can it be prevented?",
    answer:
      "Social engineering is manipulating people into revealing confidential information. Prevention includes security awareness training, strict policies (e.g., verification procedures), and multi-factor authentication.",
  },
];

// ========================== COMPONENT ==========================
export default function EthicalHackingMcq() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  // Extract unique topics
  const topics = Array.from(new Set(questionsData.map((q) => q.topic)));

  const filteredQuestions = selectedTopic
    ? questionsData.filter((q) => q.topic === selectedTopic)
    : questionsData;

  const getTopicCount = (topic) => {
    return questionsData.filter((q) => q.topic === topic).length;
  };

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://CodeSkipper.in/mcq/ethical-hacking",
        "url": "https://CodeSkipper.in/mcq/ethical-hacking",
        "name": "Ethical Hacking MCQs | Code Skipper",
        "description":
          "Practice 130+ Ethical Hacking multiple-choice questions covering footprinting, scanning, system hacking, malware, network attacks, web security, cryptography, social engineering, wireless security, tools, and forensics.",
        "about": { "@type": "Thing", "name": "Ethical Hacking MCQ" },
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": questionsData.map((q, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": { "@type": "Question", "name": q.question, "text": q.question },
          })),
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://CodeSkipper.in" },
            { "@type": "ListItem", "position": 2, "name": "MCQ", "item": "https://CodeSkipper.in/mcq" },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Ethical Hacking MCQs",
              "item": "https://CodeSkipper.in/mcq/ethical-hacking",
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://CodeSkipper.in/#website",
        "url": "https://CodeSkipper.in",
        "name": "Code Skipper",
        "description": "Learn programming, AI, and data science with tutorials, MCQs, and resources.",
        "publisher": {
          "@type": "Organization",
          "@id": "https://CodeSkipper.in/#organization",
          "name": "Code Skipper",
          "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png" },
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://CodeSkipper.in/search?q={search_term_string}" },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://CodeSkipper.in/#organization",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "logo": { "@type": "ImageObject", "url": "https://CodeSkipper.in/Images/logo.png", "width": "150", "height": "150" },
        "description": "Code Skipper provides programming tutorials, MCQs, and learning resources.",
        "email": "contact@CodeSkipper.in",
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://CodeSkipper.in/#educational",
        "name": "Code Skipper",
        "url": "https://CodeSkipper.in",
        "description": "Educational platform for programming and AI learning.",
      },
      {
        "@type": "Course",
        "@id": "https://CodeSkipper.in/mcq/ethical-hacking#course",
        "name": "Ethical Hacking MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Ethical Hacking exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Ethical Hacking" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/ethical-hacking#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <CourseLayout>
      <Head>
        <title>Ethical Hacking MCQs 2026 | 130+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 130+ Ethical Hacking multiple-choice questions with answers. Covers footprinting, scanning, system hacking, malware, network attacks, web security, cryptography, social engineering, wireless security, tools, and forensics. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Ethical Hacking, MCQs, CEH, Penetration Testing, Network Security, Web Security, Cryptography, Social Engineering, Malware, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/ethical-hacking" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/ethical-hacking" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/ethical-hacking" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/ethical-hacking" />
        <meta property="og:title" content="Ethical Hacking MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 130+ Ethical Hacking multiple-choice questions covering footprinting, scanning, system hacking, malware, network attacks, web security, cryptography, social engineering, wireless security, tools, and forensics."
        />
        <meta property="og:image" content="https://CodeSkipper.in/Images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="150" />
        <meta property="og:image:height" content="150" />
        <meta property="og:site_name" content="Code Skipper" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CodeSkipper" />
        <meta name="twitter:title" content="Ethical Hacking MCQs 2026 | 130+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 130+ Ethical Hacking multiple-choice questions covering footprinting, scanning, system hacking, malware, network attacks, web security, cryptography, social engineering, wireless security, tools, and forensics."
        />
        <meta name="twitter:image" content="https://CodeSkipper.in/Images/logo.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="relative xl:container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* ===== HERO ===== */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🛡️ 130+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Ethical Hacking <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Ethical Hacking with 130+ curated MCQs covering footprinting, scanning,
              system hacking, malware, network attacks, web security, cryptography, social engineering,
              wireless security, tools, and forensics. Perfect for CEH, exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">13 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">130+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Exam Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-purple-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore Ethical Hacking Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-blue-600 bg-blue-50 text-blue-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
                aria-label={`Filter by ${topic}`}
              >
                <span className="block truncate">{topic}</span>
                <span className="text-xs text-gray-400 font-normal">{getTopicCount(topic)} questions</span>
              </button>
            ))}
          </div>
          {selectedTopic && (
            <div className="mt-3 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Showing <strong>{filteredQuestions.length}</strong> questions for{" "}
                <strong className="text-blue-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear Filter ✕
              </button>
            </div>
          )}
        </section>

        {/* ===== MCQ LIST ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">📝</span>
            Ethical Hacking MCQs
            <span className="ml-2 text-sm font-normal text-gray-500">({filteredQuestions.length} questions)</span>
          </h2>
          <div className="space-y-6">
            {filteredQuestions.map((q, index) => (
              <article
                key={q.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                  <ul className="space-y-2 ml-11">
                    {q.options.map((option) => (
                      <li key={option.label} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold flex items-center justify-center">
                          {option.label}
                        </span>
                        <p className="text-gray-700 text-sm md:text-base">{option.text}</p>
                      </li>
                    ))}
                  </ul>
                  <details className="mt-4 ml-11 group">
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="group-open:hidden">Show Answer</span>
                      <span className="hidden group-open:inline">Hide Answer</span>
                    </summary>
                    <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm md:text-base">
                      <span className="font-semibold">✓</span> {q.answer}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <p className="text-gray-500 text-lg">No questions found for this topic.</p>
              <button
                onClick={() => setSelectedTopic(null)}
                className="mt-3 text-blue-600 hover:text-blue-800 font-medium"
              >
                View all questions
              </button>
            </div>
          )}
        </section>

        {/* ===== FAQ ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">❓</span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-base font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ===== RELATED RESOURCES ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">🔗</span>
            Related Resources
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Ethical Hacking Tutorial", href: "/tutorials/ethical-hacking", icon: "📖" },
              { title: "CEH Interview Questions", href: "/interview/ceh", icon: "💼" },
              { title: "Ethical Hacking Notes", href: "/notes/ethical-hacking", icon: "📝" },
              { title: "Network Security MCQs", href: "/mcq/network-security", icon: "🔒" },
              { title: "Cryptography MCQs", href: "/mcq/cryptography", icon: "🔑" },
              { title: "Web Security Guide", href: "/guides/web-security", icon: "🌐" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Master Ethical Hacking?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/ethical-hacking"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/ethical-hacking"
              className="px-8 py-3 bg-blue-500/30 text-white font-medium rounded-xl hover:bg-blue-500/50 transition-colors border border-white/20"
            >
              View Roadmap
            </Link>
          </div>
        </section>
      </main>
    </CourseLayout>
  );
}