import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Networking Basics (6) -----
  {
    id: 1,
    topic: "Networking Basics",
    question: "What is a computer network?",
    options: [
      { label: "A", text: "A group of interconnected computers and devices" },
      { label: "B", text: "A single computer with multiple users" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A peripheral device" },
    ],
    answer: "A. A group of interconnected computers and devices",
  },
  {
    id: 2,
    topic: "Networking Basics",
    question: "What is the full form of LAN?",
    options: [
      { label: "A", text: "Local Area Network" },
      { label: "B", text: "Large Area Network" },
      { label: "C", text: "Long Area Network" },
      { label: "D", text: "Limited Area Network" },
    ],
    answer: "A. Local Area Network",
  },
  {
    id: 3,
    topic: "Networking Basics",
    question: "What is the full form of WAN?",
    options: [
      { label: "A", text: "Wide Area Network" },
      { label: "B", text: "Wireless Area Network" },
      { label: "C", text: "Wired Area Network" },
      { label: "D", text: "World Area Network" },
    ],
    answer: "A. Wide Area Network",
  },
  {
    id: 4,
    topic: "Networking Basics",
    question: "What is a protocol?",
    options: [
      { label: "A", text: "A set of rules for communication between devices" },
      { label: "B", text: "A hardware component" },
      { label: "C", text: "A type of software" },
      { label: "D", text: "A storage device" },
    ],
    answer: "A. A set of rules for communication between devices",
  },
  {
    id: 5,
    topic: "Networking Basics",
    question: "What is the purpose of a network topology?",
    options: [
      { label: "A", text: "Defines the physical or logical arrangement of devices" },
      { label: "B", text: "Defines the speed of the network" },
      { label: "C", text: "Defines the security of the network" },
      { label: "D", text: "Defines the type of cables used" },
    ],
    answer: "A. Defines the physical or logical arrangement of devices",
  },
  {
    id: 6,
    topic: "Networking Basics",
    question: "Which of the following is a type of network topology?",
    options: [
      { label: "A", text: "Star" },
      { label: "B", text: "Ring" },
      { label: "C", text: "Bus" },
      { label: "D", text: "All of the above" },
    ],
    answer: "D. All of the above",
  },

  // ----- OSI Model (6) -----
  {
    id: 7,
    topic: "OSI Model",
    question: "What is the full form of OSI?",
    options: [
      { label: "A", text: "Open Systems Interconnection" },
      { label: "B", text: "Open Source Interconnection" },
      { label: "C", text: "Operating System Interface" },
      { label: "D", text: "Open Standard Interface" },
    ],
    answer: "A. Open Systems Interconnection",
  },
  {
    id: 8,
    topic: "OSI Model",
    question: "How many layers are in the OSI model?",
    options: [
      { label: "A", text: "5" },
      { label: "B", text: "6" },
      { label: "C", text: "7" },
      { label: "D", text: "8" },
    ],
    answer: "C. 7",
  },
  {
    id: 9,
    topic: "OSI Model",
    question: "Which layer of the OSI model is responsible for routing?",
    options: [
      { label: "A", text: "Network Layer" },
      { label: "B", text: "Transport Layer" },
      { label: "C", text: "Data Link Layer" },
      { label: "D", text: "Physical Layer" },
    ],
    answer: "A. Network Layer",
  },
  {
    id: 10,
    topic: "OSI Model",
    question: "Which layer is responsible for error-free data delivery?",
    options: [
      { label: "A", text: "Transport Layer" },
      { label: "B", text: "Network Layer" },
      { label: "C", text: "Data Link Layer" },
      { label: "D", text: "Session Layer" },
    ],
    answer: "A. Transport Layer",
  },
  {
    id: 11,
    topic: "OSI Model",
    question: "Which layer deals with physical characteristics of the medium?",
    options: [
      { label: "A", text: "Physical Layer" },
      { label: "B", text: "Data Link Layer" },
      { label: "C", text: "Network Layer" },
      { label: "D", text: "Presentation Layer" },
    ],
    answer: "A. Physical Layer",
  },
  {
    id: 12,
    topic: "OSI Model",
    question: "Which layer is responsible for data encryption and compression?",
    options: [
      { label: "A", text: "Presentation Layer" },
      { label: "B", text: "Application Layer" },
      { label: "C", text: "Session Layer" },
      { label: "D", text: "Transport Layer" },
    ],
    answer: "A. Presentation Layer",
  },

  // ----- TCP/IP Model (6) -----
  {
    id: 13,
    topic: "TCP/IP Model",
    question: "How many layers are in the TCP/IP model?",
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "7" },
    ],
    answer: "A. 4",
  },
  {
    id: 14,
    topic: "TCP/IP Model",
    question: "Which layer in TCP/IP corresponds to the OSI Network layer?",
    options: [
      { label: "A", text: "Internet Layer" },
      { label: "B", text: "Transport Layer" },
      { label: "C", text: "Application Layer" },
      { label: "D", text: "Network Access Layer" },
    ],
    answer: "A. Internet Layer",
  },
  {
    id: 15,
    topic: "TCP/IP Model",
    question: "What protocol is used at the Transport layer of TCP/IP?",
    options: [
      { label: "A", text: "TCP" },
      { label: "B", text: "UDP" },
      { label: "C", text: "Both TCP and UDP" },
      { label: "D", text: "IP" },
    ],
    answer: "C. Both TCP and UDP",
  },
  {
    id: 16,
    topic: "TCP/IP Model",
    question: "Which layer of TCP/IP is responsible for process-to-process communication?",
    options: [
      { label: "A", text: "Application Layer" },
      { label: "B", text: "Transport Layer" },
      { label: "C", text: "Internet Layer" },
      { label: "D", text: "Network Access Layer" },
    ],
    answer: "B. Transport Layer",
  },
  {
    id: 17,
    topic: "TCP/IP Model",
    question: "Which protocol is used for IP addressing?",
    options: [
      { label: "A", text: "IP" },
      { label: "B", text: "TCP" },
      { label: "C", text: "UDP" },
      { label: "D", text: "HTTP" },
    ],
    answer: "A. IP",
  },
  {
    id: 18,
    topic: "TCP/IP Model",
    question: "What is the primary function of the Application layer in TCP/IP?",
    options: [
      { label: "A", text: "Provide user interfaces and services" },
      { label: "B", text: "Provide reliable data transfer" },
      { label: "C", text: "Provide logical addressing" },
      { label: "D", text: "Provide physical transmission" },
    ],
    answer: "A. Provide user interfaces and services",
  },

  // ----- IP Addressing (6) -----
  {
    id: 19,
    topic: "IP Addressing",
    question: "What is the size of an IPv4 address?",
    options: [
      { label: "A", text: "32 bits" },
      { label: "B", text: "64 bits" },
      { label: "C", text: "128 bits" },
      { label: "D", text: "16 bits" },
    ],
    answer: "A. 32 bits",
  },
  {
    id: 20,
    topic: "IP Addressing",
    question: "What is the size of an IPv6 address?",
    options: [
      { label: "A", text: "32 bits" },
      { label: "B", text: "64 bits" },
      { label: "C", text: "128 bits" },
      { label: "D", text: "256 bits" },
    ],
    answer: "C. 128 bits",
  },
  {
    id: 21,
    topic: "IP Addressing",
    question: "How many classes are there in IPv4 addressing?",
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "6" },
    ],
    answer: "C. 5 (A, B, C, D, E)",
  },
  {
    id: 22,
    topic: "IP Addressing",
    question: "Which IP address is a private IP address?",
    options: [
      { label: "A", text: "192.168.1.1" },
      { label: "B", text: "8.8.8.8" },
      { label: "C", text: "1.1.1.1" },
      { label: "D", text: "172.16.0.0" },
    ],
    answer: "A. 192.168.1.1",
  },
  {
    id: 23,
    topic: "IP Addressing",
    question: "What is the default subnet mask for Class B IP address?",
    options: [
      { label: "A", text: "255.0.0.0" },
      { label: "B", text: "255.255.0.0" },
      { label: "C", text: "255.255.255.0" },
      { label: "D", text: "255.255.255.255" },
    ],
    answer: "B. 255.255.0.0",
  },
  {
    id: 24,
    topic: "IP Addressing",
    question: "What is the loopback IP address?",
    options: [
      { label: "A", text: "127.0.0.1" },
      { label: "B", text: "0.0.0.0" },
      { label: "C", text: "255.255.255.255" },
      { label: "D", text: "192.168.0.1" },
    ],
    answer: "A. 127.0.0.1",
  },

  // ----- Subnetting (6) -----
  {
    id: 25,
    topic: "Subnetting",
    question: "What is subnetting?",
    options: [
      { label: "A", text: "Dividing a large network into smaller subnetworks" },
      { label: "B", text: "Combining multiple networks into one" },
      { label: "C", text: "Assigning IP addresses to devices" },
      { label: "D", text: "Securing the network" },
    ],
    answer: "A. Dividing a large network into smaller subnetworks",
  },
  {
    id: 26,
    topic: "Subnetting",
    question: "What is CIDR?",
    options: [
      { label: "A", text: "Classless Inter-Domain Routing" },
      { label: "B", text: "Classful Inter-Domain Routing" },
      { label: "C", text: "Classless Internet Data Routing" },
      { label: "D", text: "Classful Internet Data Routing" },
    ],
    answer: "A. Classless Inter-Domain Routing",
  },
  {
    id: 27,
    topic: "Subnetting",
    question: "What is a subnet mask?",
    options: [
      { label: "A", text: "A 32-bit number that separates network and host parts" },
      { label: "B", text: "A 32-bit number that encrypts data" },
      { label: "C", text: "A 32-bit number that identifies a device" },
      { label: "D", text: "A 32-bit number that routes packets" },
    ],
    answer: "A. A 32-bit number that separates network and host parts",
  },
  {
    id: 28,
    topic: "Subnetting",
    question: "What is the subnet mask for /24 prefix?",
    options: [
      { label: "A", text: "255.255.255.0" },
      { label: "B", text: "255.255.0.0" },
      { label: "C", text: "255.0.0.0" },
      { label: "D", text: "255.255.255.255" },
    ],
    answer: "A. 255.255.255.0",
  },
  {
    id: 29,
    topic: "Subnetting",
    question: "How many hosts can a /24 subnet support?",
    options: [
      { label: "A", text: "254" },
      { label: "B", text: "256" },
      { label: "C", text: "252" },
      { label: "D", text: "128" },
    ],
    answer: "A. 254",
  },
  {
    id: 30,
    topic: "Subnetting",
    question: "What is the purpose of a subnet mask?",
    options: [
      { label: "A", text: "To define the network and host portions of an IP address" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To route packets" },
      { label: "D", text: "To provide error detection" },
    ],
    answer: "A. To define the network and host portions of an IP address",
  },

  // ----- Routing (6) -----
  {
    id: 31,
    topic: "Routing",
    question: "What is a router?",
    options: [
      { label: "A", text: "A device that forwards data packets between networks" },
      { label: "B", text: "A device that connects devices in a LAN" },
      { label: "C", text: "A device that amplifies signals" },
      { label: "D", text: "A device that stores network data" },
    ],
    answer: "A. A device that forwards data packets between networks",
  },
  {
    id: 32,
    topic: "Routing",
    question: "What is a routing table?",
    options: [
      { label: "A", text: "A table that stores network path information" },
      { label: "B", text: "A table that stores MAC addresses" },
      { label: "C", text: "A table that stores IP addresses" },
      { label: "D", text: "A table that stores device names" },
    ],
    answer: "A. A table that stores network path information",
  },
  {
    id: 33,
    topic: "Routing",
    question: "What is static routing?",
    options: [
      { label: "A", text: "Routes manually configured by the administrator" },
      { label: "B", text: "Routes learned automatically using protocols" },
      { label: "C", text: "Routes used for backup" },
      { label: "D", text: "Routes that never change" },
    ],
    answer: "A. Routes manually configured by the administrator",
  },
  {
    id: 34,
    topic: "Routing",
    question: "What is dynamic routing?",
    options: [
      { label: "A", text: "Routes learned automatically through routing protocols" },
      { label: "B", text: "Routes manually configured" },
      { label: "C", text: "Routes used for multicast" },
      { label: "D", text: "Routes that are fixed" },
    ],
    answer: "A. Routes learned automatically through routing protocols",
  },
  {
    id: 35,
    topic: "Routing",
    question: "Which routing protocol uses hop count as metric?",
    options: [
      { label: "A", text: "RIP" },
      { label: "B", text: "OSPF" },
      { label: "C", text: "BGP" },
      { label: "D", text: "EIGRP" },
    ],
    answer: "A. RIP",
  },
  {
    id: 36,
    topic: "Routing",
    question: "What is the administrative distance of a static route?",
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "0" },
      { label: "C", text: "90" },
      { label: "D", text: "110" },
    ],
    answer: "A. 1",
  },

  // ----- Transport Layer Protocols (6) -----
  {
    id: 37,
    topic: "Transport Layer Protocols",
    question: "Which protocol provides reliable, connection-oriented communication?",
    options: [
      { label: "A", text: "TCP" },
      { label: "B", text: "UDP" },
      { label: "C", text: "IP" },
      { label: "D", text: "ICMP" },
    ],
    answer: "A. TCP",
  },
  {
    id: 38,
    topic: "Transport Layer Protocols",
    question: "Which protocol is connectionless and unreliable?",
    options: [
      { label: "A", text: "UDP" },
      { label: "B", text: "TCP" },
      { label: "C", text: "HTTP" },
      { label: "D", text: "FTP" },
    ],
    answer: "A. UDP",
  },
  {
    id: 39,
    topic: "Transport Layer Protocols",
    question: "What is the port number for HTTP?",
    options: [
      { label: "A", text: "80" },
      { label: "B", text: "443" },
      { label: "C", text: "21" },
      { label: "D", text: "25" },
    ],
    answer: "A. 80",
  },
  {
    id: 40,
    topic: "Transport Layer Protocols",
    question: "What is the port number for HTTPS?",
    options: [
      { label: "A", text: "443" },
      { label: "B", text: "80" },
      { label: "C", text: "8080" },
      { label: "D", text: "8443" },
    ],
    answer: "A. 443",
  },
  {
    id: 41,
    topic: "Transport Layer Protocols",
    question: "What is the purpose of the TCP three-way handshake?",
    options: [
      { label: "A", text: "To establish a connection" },
      { label: "B", text: "To terminate a connection" },
      { label: "C", text: "To send data" },
      { label: "D", text: "To receive data" },
    ],
    answer: "A. To establish a connection",
  },
  {
    id: 42,
    topic: "Transport Layer Protocols",
    question: "Which flag is used to terminate a TCP connection?",
    options: [
      { label: "A", text: "FIN" },
      { label: "B", text: "SYN" },
      { label: "C", text: "ACK" },
      { label: "D", text: "RST" },
    ],
    answer: "A. FIN",
  },

  // ----- Network Devices (6) -----
  {
    id: 43,
    topic: "Network Devices",
    question: "Which device operates at the Data Link layer of OSI?",
    options: [
      { label: "A", text: "Switch" },
      { label: "B", text: "Router" },
      { label: "C", text: "Hub" },
      { label: "D", text: "Repeater" },
    ],
    answer: "A. Switch",
  },
  {
    id: 44,
    topic: "Network Devices",
    question: "Which device operates at the Physical layer?",
    options: [
      { label: "A", text: "Hub" },
      { label: "B", text: "Switch" },
      { label: "C", text: "Router" },
      { label: "D", text: "Gateway" },
    ],
    answer: "A. Hub",
  },
  {
    id: 45,
    topic: "Network Devices",
    question: "Which device is used to connect different network segments?",
    options: [
      { label: "A", text: "Bridge" },
      { label: "B", text: "Switch" },
      { label: "C", text: "Router" },
      { label: "D", text: "Gateway" },
    ],
    answer: "A. Bridge",
  },
  {
    id: 46,
    topic: "Network Devices",
    question: "What is a gateway?",
    options: [
      { label: "A", text: "A device that connects two different networks" },
      { label: "B", text: "A device that connects devices in a LAN" },
      { label: "C", text: "A device that amplifies signals" },
      { label: "D", text: "A device that stores data" },
    ],
    answer: "A. A device that connects two different networks",
  },
  {
    id: 47,
    topic: "Network Devices",
    question: "What is a firewall?",
    options: [
      { label: "A", text: "A security device that filters network traffic" },
      { label: "B", text: "A device that routes data" },
      { label: "C", text: "A device that connects to the internet" },
      { label: "D", text: "A device that provides Wi-Fi" },
    ],
    answer: "A. A security device that filters network traffic",
  },
  {
    id: 48,
    topic: "Network Devices",
    question: "What is a modem?",
    options: [
      { label: "A", text: "A device that modulates and demodulates signals" },
      { label: "B", text: "A device that routes packets" },
      { label: "C", text: "A device that switches frames" },
      { label: "D", text: "A device that connects multiple devices" },
    ],
    answer: "A. A device that modulates and demodulates signals",
  },

  // ----- Application Layer Protocols (6) -----
  {
    id: 49,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for web browsing?",
    options: [
      { label: "A", text: "HTTP" },
      { label: "B", text: "FTP" },
      { label: "C", text: "SMTP" },
      { label: "D", text: "DNS" },
    ],
    answer: "A. HTTP",
  },
  {
    id: 50,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for email delivery?",
    options: [
      { label: "A", text: "SMTP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "FTP" },
      { label: "D", text: "SNMP" },
    ],
    answer: "A. SMTP",
  },
  {
    id: 51,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for file transfer?",
    options: [
      { label: "A", text: "FTP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "SMTP" },
      { label: "D", text: "DNS" },
    ],
    answer: "A. FTP",
  },
  {
    id: 52,
    topic: "Application Layer Protocols",
    question: "What is the role of DNS?",
    options: [
      { label: "A", text: "To translate domain names to IP addresses" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To route packets" },
      { label: "D", text: "To provide error detection" },
    ],
    answer: "A. To translate domain names to IP addresses",
  },
  {
    id: 53,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for remote login?",
    options: [
      { label: "A", text: "SSH" },
      { label: "B", text: "Telnet" },
      { label: "C", text: "FTP" },
      { label: "D", text: "SMTP" },
    ],
    answer: "A. SSH",
  },
  {
    id: 54,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for network management?",
    options: [
      { label: "A", text: "SNMP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "FTP" },
      { label: "D", text: "DNS" },
    ],
    answer: "A. SNMP",
  },

  // ----- Wireless Networking (6) -----
  {
    id: 55,
    topic: "Wireless Networking",
    question: "What does Wi-Fi stand for?",
    options: [
      { label: "A", text: "Wireless Fidelity" },
      { label: "B", text: "Wireless Fiber" },
      { label: "C", text: "Wireless Frequency" },
      { label: "D", text: "Wireless Filter" },
    ],
    answer: "A. Wireless Fidelity",
  },
  {
    id: 56,
    topic: "Wireless Networking",
    question: "Which IEEE standard defines Wi-Fi?",
    options: [
      { label: "A", text: "802.11" },
      { label: "B", text: "802.3" },
      { label: "C", text: "802.15" },
      { label: "D", text: "802.16" },
    ],
    answer: "A. 802.11",
  },
  {
    id: 57,
    topic: "Wireless Networking",
    question: "What is the range of the 2.4 GHz band?",
    options: [
      { label: "A", text: "Longer range, lower speed" },
      { label: "B", text: "Shorter range, higher speed" },
      { label: "C", text: "Same range as 5 GHz" },
      { label: "D", text: "No difference" },
    ],
    answer: "A. Longer range, lower speed",
  },
  {
    id: 58,
    topic: "Wireless Networking",
    question: "What is the maximum speed of 802.11ac?",
    options: [
      { label: "A", text: "1.3 Gbps" },
      { label: "B", text: "600 Mbps" },
      { label: "C", text: "11 Mbps" },
      { label: "D", text: "54 Mbps" },
    ],
    answer: "A. 1.3 Gbps (theoretically)",
  },
  {
    id: 59,
    topic: "Wireless Networking",
    question: "What is SSID?",
    options: [
      { label: "A", text: "Service Set Identifier (network name)" },
      { label: "B", text: "Security Set Identifier" },
      { label: "C", text: "Signal Set Identifier" },
      { label: "D", text: "System Set Identifier" },
    ],
    answer: "A. Service Set Identifier (network name)",
  },
  {
    id: 60,
    topic: "Wireless Networking",
    question: "What is WPA used for?",
    options: [
      { label: "A", text: "Wireless security encryption" },
      { label: "B", text: "Wireless routing" },
      { label: "C", text: "Wireless signal amplification" },
      { label: "D", text: "Wireless device discovery" },
    ],
    answer: "A. Wireless security encryption",
  },

  // ----- Network Security (6) -----
  {
    id: 61,
    topic: "Network Security",
    question: "What is a firewall used for?",
    options: [
      { label: "A", text: "To block unauthorized access" },
      { label: "B", text: "To route packets" },
      { label: "C", text: "To assign IP addresses" },
      { label: "D", text: "To amplify signals" },
    ],
    answer: "A. To block unauthorized access",
  },
  {
    id: 62,
    topic: "Network Security",
    question: "What is a VPN?",
    options: [
      { label: "A", text: "Virtual Private Network" },
      { label: "B", text: "Virtual Public Network" },
      { label: "C", text: "Very Private Network" },
      { label: "D", text: "Virtual Protocol Network" },
    ],
    answer: "A. Virtual Private Network",
  },
  {
    id: 63,
    topic: "Network Security",
    question: "What is encryption?",
    options: [
      { label: "A", text: "Converting data into a coded form" },
      { label: "B", text: "Compressing data" },
      { label: "C", text: "Routing data" },
      { label: "D", text: "Amplifying data" },
    ],
    answer: "A. Converting data into a coded form",
  },
  {
    id: 64,
    topic: "Network Security",
    question: "What is a DDoS attack?",
    options: [
      { label: "A", text: "Distributed Denial of Service attack" },
      { label: "B", text: "Direct Denial of Service attack" },
      { label: "C", text: "Dynamic Denial of Service attack" },
      { label: "D", text: "Data Denial of Service attack" },
    ],
    answer: "A. Distributed Denial of Service attack",
  },
  {
    id: 65,
    topic: "Network Security",
    question: "Which protocol is used for secure web browsing?",
    options: [
      { label: "A", text: "HTTPS" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "FTP" },
      { label: "D", text: "SMTP" },
    ],
    answer: "A. HTTPS",
  },
  {
    id: 66,
    topic: "Network Security",
    question: "What is the purpose of SSL/TLS?",
    options: [
      { label: "A", text: "Encrypt data for secure transmission" },
      { label: "B", text: "Compress data" },
      { label: "C", text: "Route data" },
      { label: "D", text: "Amplify signals" },
    ],
    answer: "A. Encrypt data for secure transmission",
  },

  // ----- Network Troubleshooting (6) -----
  {
    id: 67,
    topic: "Network Troubleshooting",
    question: "Which command is used to test connectivity to a remote host?",
    options: [
      { label: "A", text: "ping" },
      { label: "B", text: "tracert" },
      { label: "C", text: "nslookup" },
      { label: "D", text: "ipconfig" },
    ],
    answer: "A. ping",
  },
  {
    id: 68,
    topic: "Network Troubleshooting",
    question: "Which command is used to trace the route to a destination?",
    options: [
      { label: "A", text: "tracert" },
      { label: "B", text: "ping" },
      { label: "C", text: "nslookup" },
      { label: "D", text: "netstat" },
    ],
    answer: "A. tracert",
  },
  {
    id: 69,
    topic: "Network Troubleshooting",
    question: "Which command is used to display network configuration?",
    options: [
      { label: "A", text: "ipconfig" },
      { label: "B", text: "ping" },
      { label: "C", text: "tracert" },
      { label: "D", text: "nslookup" },
    ],
    answer: "A. ipconfig",
  },
  {
    id: 70,
    topic: "Network Troubleshooting",
    question: "Which command is used to query DNS?",
    options: [
      { label: "A", text: "nslookup" },
      { label: "B", text: "ping" },
      { label: "C", text: "tracert" },
      { label: "D", text: "netstat" },
    ],
    answer: "A. nslookup",
  },
  {
    id: 71,
    topic: "Network Troubleshooting",
    question: "What is the purpose of the 'arp' command?",
    options: [
      { label: "A", text: "Display and modify the ARP cache" },
      { label: "B", text: "Test network connectivity" },
      { label: "C", text: "Trace route" },
      { label: "D", text: "Display IP configuration" },
    ],
    answer: "A. Display and modify the ARP cache",
  },
  {
    id: 72,
    topic: "Network Troubleshooting",
    question: "What is the use of 'netstat' command?",
    options: [
      { label: "A", text: "Display network connections and listening ports" },
      { label: "B", text: "Test connectivity" },
      { label: "C", text: "Trace route" },
      { label: "D", text: "Query DNS" },
    ],
    answer: "A. Display network connections and listening ports",
  },

  // ----- Network Types (6) -----
  {
    id: 73,
    topic: "Network Types",
    question: "What is a PAN?",
    options: [
      { label: "A", text: "Personal Area Network" },
      { label: "B", text: "Public Area Network" },
      { label: "C", text: "Private Area Network" },
      { label: "D", text: "Protected Area Network" },
    ],
    answer: "A. Personal Area Network",
  },
  {
    id: 74,
    topic: "Network Types",
    question: "What is a MAN?",
    options: [
      { label: "A", text: "Metropolitan Area Network" },
      { label: "B", text: "Medium Area Network" },
      { label: "C", text: "Main Area Network" },
      { label: "D", text: "Managed Area Network" },
    ],
    answer: "A. Metropolitan Area Network",
  },
  {
    id: 75,
    topic: "Network Types",
    question: "What is a VLAN?",
    options: [
      { label: "A", text: "Virtual Local Area Network" },
      { label: "B", text: "Very Large Area Network" },
      { label: "C", text: "Virtual Wide Area Network" },
      { label: "D", text: "Volatile Local Area Network" },
    ],
    answer: "A. Virtual Local Area Network",
  },
  {
    id: 76,
    topic: "Network Types",
    question: "What is the typical range of a LAN?",
    options: [
      { label: "A", text: "Within a building or campus" },
      { label: "B", text: "Across a city" },
      { label: "C", text: "Across a country" },
      { label: "D", text: "Globally" },
    ],
    answer: "A. Within a building or campus",
  },
  {
    id: 77,
    topic: "Network Types",
    question: "What is the typical range of a WAN?",
    options: [
      { label: "A", text: "Across a country or continent" },
      { label: "B", text: "Within a building" },
      { label: "C", text: "Within a city" },
      { label: "D", text: "Within a room" },
    ],
    answer: "A. Across a country or continent",
  },
  {
    id: 78,
    topic: "Network Types",
    question: "What is a storage area network (SAN)?",
    options: [
      { label: "A", text: "A network dedicated to storage devices" },
      { label: "B", text: "A network for personal devices" },
      { label: "C", text: "A network for voice communication" },
      { label: "D", text: "A network for video streaming" },
    ],
    answer: "A. A network dedicated to storage devices",
  },

  // ----- Network Services (6) -----
  {
    id: 79,
    topic: "Network Services",
    question: "What does DHCP stand for?",
    options: [
      { label: "A", text: "Dynamic Host Configuration Protocol" },
      { label: "B", text: "Domain Host Control Protocol" },
      { label: "C", text: "Data Host Configuration Protocol" },
      { label: "D", text: "Dynamic Hypertext Control Protocol" },
    ],
    answer: "A. Dynamic Host Configuration Protocol",
  },
  {
    id: 80,
    topic: "Network Services",
    question: "What is the purpose of DHCP?",
    options: [
      { label: "A", text: "Automatically assign IP addresses to devices" },
      { label: "B", text: "Translate domain names to IP" },
      { label: "C", text: "Route packets" },
      { label: "D", text: "Secure network" },
    ],
    answer: "A. Automatically assign IP addresses to devices",
  },
  {
    id: 81,
    topic: "Network Services",
    question: "What does DNS stand for?",
    options: [
      { label: "A", text: "Domain Name System" },
      { label: "B", text: "Data Name System" },
      { label: "C", text: "Dynamic Name System" },
      { label: "D", text: "Digital Name System" },
    ],
    answer: "A. Domain Name System",
  },
  {
    id: 82,
    topic: "Network Services",
    question: "What is the purpose of ARP?",
    options: [
      { label: "A", text: "Resolve IP addresses to MAC addresses" },
      { label: "B", text: "Resolve domain names to IP" },
      { label: "C", text: "Assign IP addresses" },
      { label: "D", text: "Route packets" },
    ],
    answer: "A. Resolve IP addresses to MAC addresses",
  },
  {
    id: 83,
    topic: "Network Services",
    question: "What is the function of NAT?",
    options: [
      { label: "A", text: "Translate private IPs to public IPs" },
      { label: "B", text: "Translate domain names to IPs" },
      { label: "C", text: "Assign IP addresses" },
      { label: "D", text: "Secure network" },
    ],
    answer: "A. Translate private IPs to public IPs",
  },
  {
    id: 84,
    topic: "Network Services",
    question: "What does SMTP stand for?",
    options: [
      { label: "A", text: "Simple Mail Transfer Protocol" },
      { label: "B", text: "Simple Message Transfer Protocol" },
      { label: "C", text: "Standard Mail Transfer Protocol" },
      { label: "D", text: "Secure Mail Transfer Protocol" },
    ],
    answer: "A. Simple Mail Transfer Protocol",
  },

  // ----- More MCQs to reach 120+ (36 more) -----
  {
    id: 85,
    topic: "Networking Basics",
    question: "What is a peer-to-peer network?",
    options: [
      { label: "A", text: "All computers are equal and share resources" },
      { label: "B", text: "A network with a central server" },
      { label: "C", text: "A network with a dedicated router" },
      { label: "D", text: "A network with no security" },
    ],
    answer: "A. All computers are equal and share resources",
  },
  {
    id: 86,
    topic: "OSI Model",
    question: "Which layer of OSI is responsible for establishing, managing, and terminating sessions?",
    options: [
      { label: "A", text: "Session Layer" },
      { label: "B", text: "Presentation Layer" },
      { label: "C", text: "Transport Layer" },
      { label: "D", text: "Application Layer" },
    ],
    answer: "A. Session Layer",
  },
  {
    id: 87,
    topic: "TCP/IP Model",
    question: "Which layer in TCP/IP corresponds to the OSI Data Link and Physical layers?",
    options: [
      { label: "A", text: "Network Access Layer" },
      { label: "B", text: "Internet Layer" },
      { label: "C", text: "Transport Layer" },
      { label: "D", text: "Application Layer" },
    ],
    answer: "A. Network Access Layer",
  },
  {
    id: 88,
    topic: "IP Addressing",
    question: "What is the binary equivalent of 255 in an IPv4 address?",
    options: [
      { label: "A", text: "11111111" },
      { label: "B", text: "00000000" },
      { label: "C", text: "11110000" },
      { label: "D", text: "00001111" },
    ],
    answer: "A. 11111111",
  },
  {
    id: 89,
    topic: "Subnetting",
    question: "What is the network address for IP 192.168.1.25/24?",
    options: [
      { label: "A", text: "192.168.1.0" },
      { label: "B", text: "192.168.1.24" },
      { label: "C", text: "192.168.1.16" },
      { label: "D", text: "192.168.0.0" },
    ],
    answer: "A. 192.168.1.0",
  },
  {
    id: 90,
    topic: "Routing",
    question: "What is the default gateway?",
    options: [
      { label: "A", text: "The router that connects the network to the internet" },
      { label: "B", text: "The IP address of a device" },
      { label: "C", text: "The subnet mask" },
      { label: "D", text: "The DNS server" },
    ],
    answer: "A. The router that connects the network to the internet",
  },
  {
    id: 91,
    topic: "Transport Layer Protocols",
    question: "Which of the following uses TCP?",
    options: [
      { label: "A", text: "FTP" },
      { label: "B", text: "DNS" },
      { label: "C", text: "SNMP" },
      { label: "D", text: "DHCP" },
    ],
    answer: "A. FTP",
  },
  {
    id: 92,
    topic: "Network Devices",
    question: "What is a repeater?",
    options: [
      { label: "A", text: "A device that regenerates signals" },
      { label: "B", text: "A device that filters traffic" },
      { label: "C", text: "A device that routes packets" },
      { label: "D", text: "A device that assigns IP addresses" },
    ],
    answer: "A. A device that regenerates signals",
  },
  {
    id: 93,
    topic: "Application Layer Protocols",
    question: "What is the default port for SSH?",
    options: [
      { label: "A", text: "22" },
      { label: "B", text: "23" },
      { label: "C", text: "21" },
      { label: "D", text: "25" },
    ],
    answer: "A. 22",
  },
  {
    id: 94,
    topic: "Wireless Networking",
    question: "What is the security protocol for Wi-Fi networks?",
    options: [
      { label: "A", text: "WPA2" },
      { label: "B", text: "WEP" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "SSL" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 95,
    topic: "Network Security",
    question: "What is a phishing attack?",
    options: [
      { label: "A", text: "A cyber attack using fake emails to steal information" },
      { label: "B", text: "A physical attack on network cables" },
      { label: "C", text: "An attack that floods the network" },
      { label: "D", text: "An attack that modifies data" },
    ],
    answer: "A. A cyber attack using fake emails to steal information",
  },
  {
    id: 96,
    topic: "Network Troubleshooting",
    question: "What is the purpose of the 'traceroute' command?",
    options: [
      { label: "A", text: "Show the path packets take to reach a destination" },
      { label: "B", text: "Test network connectivity" },
      { label: "C", text: "Display routing table" },
      { label: "D", text: "Show ARP cache" },
    ],
    answer: "A. Show the path packets take to reach a destination",
  },
  {
    id: 97,
    topic: "Network Types",
    question: "What is a SAN?",
    options: [
      { label: "A", text: "Storage Area Network" },
      { label: "B", text: "System Area Network" },
      { label: "C", text: "Secure Area Network" },
      { label: "D", text: "Server Area Network" },
    ],
    answer: "A. Storage Area Network",
  },
  {
    id: 98,
    topic: "Network Services",
    question: "What does PDU stand for?",
    options: [
      { label: "A", text: "Protocol Data Unit" },
      { label: "B", text: "Packet Data Unit" },
      { label: "C", text: "Physical Data Unit" },
      { label: "D", text: "Process Data Unit" },
    ],
    answer: "A. Protocol Data Unit",
  },
  {
    id: 99,
    topic: "Networking Basics",
    question: "What is the difference between a hub and a switch?",
    options: [
      { label: "A", text: "Hub broadcasts to all ports; switch sends to specific port" },
      { label: "B", text: "Switch broadcasts; hub sends specific" },
      { label: "C", text: "Both work the same" },
      { label: "D", text: "Hub is faster" },
    ],
    answer: "A. Hub broadcasts to all ports; switch sends to specific port",
  },
  {
    id: 100,
    topic: "OSI Model",
    question: "Which layer is responsible for flow control?",
    options: [
      { label: "A", text: "Transport Layer" },
      { label: "B", text: "Network Layer" },
      { label: "C", text: "Data Link Layer" },
      { label: "D", text: "Physical Layer" },
    ],
    answer: "A. Transport Layer",
  },
  {
    id: 101,
    topic: "TCP/IP Model",
    question: "Which protocol is used for error reporting?",
    options: [
      { label: "A", text: "ICMP" },
      { label: "B", text: "TCP" },
      { label: "C", text: "UDP" },
      { label: "D", text: "IP" },
    ],
    answer: "A. ICMP",
  },
  {
    id: 102,
    topic: "IP Addressing",
    question: "What is the broadcast address for 192.168.1.0/24?",
    options: [
      { label: "A", text: "192.168.1.255" },
      { label: "B", text: "192.168.1.0" },
      { label: "C", text: "192.168.1.1" },
      { label: "D", text: "192.168.0.255" },
    ],
    answer: "A. 192.168.1.255",
  },
  {
    id: 103,
    topic: "Subnetting",
    question: "What is the maximum number of subnets with /27 prefix?",
    options: [
      { label: "A", text: "8" },
      { label: "B", text: "16" },
      { label: "C", text: "32" },
      { label: "D", text: "64" },
    ],
    answer: "A. 8 (for Class C)",
  },
  {
    id: 104,
    topic: "Routing",
    question: "What is the purpose of BGP?",
    options: [
      { label: "A", text: "Exterior gateway routing between autonomous systems" },
      { label: "B", text: "Interior routing within an autonomous system" },
      { label: "C", text: "Routing for small networks" },
      { label: "D", text: "Routing for wireless networks" },
    ],
    answer: "A. Exterior gateway routing between autonomous systems",
  },
  {
    id: 105,
    topic: "Transport Layer Protocols",
    question: "What is the header size of TCP?",
    options: [
      { label: "A", text: "20 bytes (minimum)" },
      { label: "B", text: "24 bytes" },
      { label: "C", text: "8 bytes" },
      { label: "D", text: "16 bytes" },
    ],
    answer: "A. 20 bytes (minimum)",
  },
  {
    id: 106,
    topic: "Network Devices",
    question: "What is a multilayer switch?",
    options: [
      { label: "A", text: "A switch that operates at multiple OSI layers" },
      { label: "B", text: "A switch with multiple ports" },
      { label: "C", text: "A switch that can route at layer 3" },
      { label: "D", text: "Both A and C" },
    ],
    answer: "D. Both A and C",
  },
  {
    id: 107,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for retrieving emails from a server?",
    options: [
      { label: "A", text: "POP3" },
      { label: "B", text: "IMAP" },
      { label: "C", text: "Both A and B" },
      { label: "D", text: "SMTP" },
    ],
    answer: "C. Both A and B",
  },
  {
    id: 108,
    topic: "Wireless Networking",
    question: "What is the frequency range of Bluetooth?",
    options: [
      { label: "A", text: "2.4 GHz" },
      { label: "B", text: "5 GHz" },
      { label: "C", text: "900 MHz" },
      { label: "D", text: "1.8 GHz" },
    ],
    answer: "A. 2.4 GHz",
  },
  {
    id: 109,
    topic: "Network Security",
    question: "What is a man-in-the-middle attack?",
    options: [
      { label: "A", text: "An attacker intercepts communication between two parties" },
      { label: "B", text: "An attacker floods the network" },
      { label: "C", text: "An attacker steals passwords" },
      { label: "D", text: "An attacker modifies data" },
    ],
    answer: "A. An attacker intercepts communication between two parties",
  },
  {
    id: 110,
    topic: "Network Troubleshooting",
    question: "What is the use of the 'telnet' command?",
    options: [
      { label: "A", text: "Remote connection to a device" },
      { label: "B", text: "Test network connectivity" },
      { label: "C", text: "Trace route" },
      { label: "D", text: "Display IP configuration" },
    ],
    answer: "A. Remote connection to a device",
  },
  {
    id: 111,
    topic: "Network Types",
    question: "What is a campus network?",
    options: [
      { label: "A", text: "A network connecting buildings in a campus" },
      { label: "B", text: "A network connecting devices in a room" },
      { label: "C", text: "A network across a city" },
      { label: "D", text: "A network across a country" },
    ],
    answer: "A. A network connecting buildings in a campus",
  },
  {
    id: 112,
    topic: "Network Services",
    question: "What does NTP stand for?",
    options: [
      { label: "A", text: "Network Time Protocol" },
      { label: "B", text: "Network Transfer Protocol" },
      { label: "C", text: "Network Transport Protocol" },
      { label: "D", text: "Network Translation Protocol" },
    ],
    answer: "A. Network Time Protocol",
  },
  {
    id: 113,
    topic: "Networking Basics",
    question: "What is the difference between a public and private IP address?",
    options: [
      { label: "A", text: "Public IPs are routable on the internet; private IPs are not" },
      { label: "B", text: "Private IPs are routable; public IPs are not" },
      { label: "C", text: "Both are routable" },
      { label: "D", text: "Neither is routable" },
    ],
    answer: "A. Public IPs are routable on the internet; private IPs are not",
  },
  {
    id: 114,
    topic: "OSI Model",
    question: "Which layer is responsible for MAC addressing?",
    options: [
      { label: "A", text: "Data Link Layer" },
      { label: "B", text: "Network Layer" },
      { label: "C", text: "Transport Layer" },
      { label: "D", text: "Physical Layer" },
    ],
    answer: "A. Data Link Layer",
  },
  {
    id: 115,
    topic: "TCP/IP Model",
    question: "Which protocol is used for network address translation?",
    options: [
      { label: "A", text: "NAT" },
      { label: "B", text: "ARP" },
      { label: "C", text: "DNS" },
      { label: "D", text: "DHCP" },
    ],
    answer: "A. NAT",
  },
  {
    id: 116,
    topic: "IP Addressing",
    question: "What is the class of IP address 10.0.0.1?",
    options: [
      { label: "A", text: "Class A" },
      { label: "B", text: "Class B" },
      { label: "C", text: "Class C" },
      { label: "D", text: "Class D" },
    ],
    answer: "A. Class A",
  },
  {
    id: 117,
    topic: "Subnetting",
    question: "How many subnets and hosts per subnet does a /26 subnet provide for a Class C network?",
    options: [
      { label: "A", text: "4 subnets, 62 hosts each" },
      { label: "B", text: "4 subnets, 64 hosts each" },
      { label: "C", text: "2 subnets, 126 hosts each" },
      { label: "D", text: "8 subnets, 30 hosts each" },
    ],
    answer: "A. 4 subnets, 62 hosts each",
  },
  {
    id: 118,
    topic: "Routing",
    question: "What is a routing metric?",
    options: [
      { label: "A", text: "A value used to determine the best path" },
      { label: "B", text: "A type of route" },
      { label: "C", text: "A routing protocol" },
      { label: "D", text: "A network device" },
    ],
    answer: "A. A value used to determine the best path",
  },
  {
    id: 119,
    topic: "Transport Layer Protocols",
    question: "What is the window size in TCP?",
    options: [
      { label: "A", text: "The amount of data that can be sent before acknowledgment" },
      { label: "B", text: "The size of the TCP header" },
      { label: "C", text: "The number of connections" },
      { label: "D", text: "The size of the payload" },
    ],
    answer: "A. The amount of data that can be sent before acknowledgment",
  },
  {
    id: 120,
    topic: "Network Devices",
    question: "What is an access point?",
    options: [
      { label: "A", text: "A device that allows wireless devices to connect to a wired network" },
      { label: "B", text: "A device that routes data" },
      { label: "C", text: "A device that amplifies signals" },
      { label: "D", text: "A device that stores data" },
    ],
    answer: "A. A device that allows wireless devices to connect to a wired network",
  },
  {
    id: 121,
    topic: "Application Layer Protocols",
    question: "Which protocol is used for streaming media?",
    options: [
      { label: "A", text: "RTP" },
      { label: "B", text: "HTTP" },
      { label: "C", text: "FTP" },
      { label: "D", text: "SMTP" },
    ],
    answer: "A. RTP (Real-time Transport Protocol)",
  },
  {
    id: 122,
    topic: "Network Security",
    question: "What is the purpose of a digital certificate?",
    options: [
      { label: "A", text: "To verify the identity of a party" },
      { label: "B", text: "To encrypt data" },
      { label: "C", text: "To compress data" },
      { label: "D", text: "To route data" },
    ],
    answer: "A. To verify the identity of a party",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is the OSI model and why is it important?",
    answer:
      "The OSI (Open Systems Interconnection) model is a reference model that standardizes the functions of a communication system into seven layers. It helps in understanding, designing, and troubleshooting networks by providing a clear framework for how data is transmitted from one application to another across the network.",
  },
  {
    question: "What is the difference between IPv4 and IPv6?",
    answer:
      "IPv4 uses 32-bit addresses, providing about 4.3 billion addresses. IPv6 uses 128-bit addresses, providing a virtually unlimited number of addresses. IPv6 also includes built-in security features and improved header format for better efficiency.",
  },
  {
    question: "What is the difference between TCP and UDP?",
    answer:
      "TCP is a connection-oriented protocol that provides reliable, ordered, and error-checked delivery. UDP is a connectionless protocol that offers faster but unreliable delivery. TCP is used for applications like web browsing and file transfer, while UDP is used for streaming and real-time applications.",
  },
  {
    question: "What is the purpose of a subnet mask?",
    answer:
      "A subnet mask is used to divide an IP address into network and host portions. It helps in identifying which part of the IP address refers to the network and which part refers to the host, enabling efficient routing and subnetting.",
  },
  {
    question: "What is the role of a router in a network?",
    answer:
      "A router is a networking device that forwards data packets between different networks. It uses routing tables and protocols to determine the best path for packet delivery. Routers connect LANs to WANs and enable communication between different networks.",
  },
  {
    question: "What is DNS and how does it work?",
    answer:
      "DNS (Domain Name System) translates human-readable domain names (like www.example.com) into machine-readable IP addresses. It works through a hierarchical distributed database where DNS servers query each other to resolve a domain name to an IP address.",
  },
  {
    question: "What is a firewall and what are its types?",
    answer:
      "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Types include packet-filtering firewalls, stateful inspection firewalls, and application-layer firewalls (proxy firewalls).",
  },
  {
    question: "What is the difference between a hub, a switch, and a router?",
    answer:
      "A hub is a simple device that broadcasts data to all connected devices. A switch is more intelligent and forwards data only to the intended device using MAC addresses. A router connects different networks and routes data between them using IP addresses.",
  },
];

// ========================== COMPONENT ==========================
export default function NetworkingMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/computer-networking",
        "url": "https://CodeSkipper.in/mcq/computer-networking",
        "name": "Computer Networking MCQs | Code Skipper",
        "description":
          "Practice 120+ Computer Networking multiple-choice questions covering OSI model, TCP/IP, IP addressing, routing, network security, and more.",
        "about": { "@type": "Thing", "name": "Computer Networking MCQ" },
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
              "name": "Computer Networking",
              "item": "https://CodeSkipper.in/mcq/computer-networking",
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
        "@id": "https://CodeSkipper.in/mcq/computer-networking#course",
        "name": "Computer Networking MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Computer Networking exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Computer Networking" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/computer-networking#faq",
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
        <title>Computer Networking MCQs 2026 | 120+ Questions & Answers | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Computer Networking multiple-choice questions with answers. Covers OSI, TCP/IP, IP addressing, routing, network security, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Computer Networking, MCQs, OSI Model, TCP/IP, IP Addressing, Routing, Network Security, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/computer-networking" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-networking" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/computer-networking" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/computer-networking" />
        <meta property="og:title" content="Computer Networking MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Computer Networking multiple-choice questions covering OSI, TCP/IP, IP addressing, routing, network security, and more."
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
        <meta name="twitter:title" content="Computer Networking MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Computer Networking multiple-choice questions covering OSI, TCP/IP, IP addressing, routing, network security, and more."
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
              🌐 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Computer Networking <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-6">
              Master Computer Networking with 120+ curated MCQs covering OSI, TCP/IP, IP addressing,
              routing, network security, and more. Perfect for exams, interviews, and placements.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">14 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
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
            Explore Networking Topics
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
            Networking MCQs
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
              { title: "Computer Networking Tutorial", href: "/tutorials/networking", icon: "📖" },
              { title: "Networking Interview Questions", href: "/interview/networking", icon: "💼" },
              { title: "Networking Notes", href: "/notes/networking", icon: "📝" },
              { title: "OSI Model Guide", href: "/guides/osi-model", icon: "📋" },
              { title: "IP Addressing Guide", href: "/guides/ip-addressing", icon: "⚡" },
              { title: "Network Security MCQs", href: "/mcq/network-security", icon: "🔒" },
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
            Ready to Master Computer Networking?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Explore our full collection of tutorials, notes, and interview guides to
            accelerate your learning journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tutorials/networking"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/roadmap/networking"
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