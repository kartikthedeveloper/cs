import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- I/O Basics (6) -----
  {
    id: 1,
    topic: "I/O Basics",
    question: "What is an input device?",
    options: [
      { label: "A", text: "A device that sends data to a computer" },
      { label: "B", text: "A device that receives data from a computer" },
      { label: "C", text: "A device that stores data" },
      { label: "D", text: "A device that processes data" },
    ],
    answer: "A. A device that sends data to a computer",
  },
  {
    id: 2,
    topic: "I/O Basics",
    question: "What is an output device?",
    options: [
      { label: "A", text: "A device that displays or presents data from a computer" },
      { label: "B", text: "A device that sends data to a computer" },
      { label: "C", text: "A device that stores data" },
      { label: "D", text: "A device that processes data" },
    ],
    answer: "A. A device that displays or presents data from a computer",
  },
  {
    id: 3,
    topic: "I/O Basics",
    question: "What is the difference between input and output devices?",
    options: [
      { label: "A", text: "Input sends data to computer, output receives data from computer" },
      { label: "B", text: "Output sends data to computer, input receives data from computer" },
      { label: "C", text: "Both send data to computer" },
      { label: "D", text: "Both receive data from computer" },
    ],
    answer: "A. Input sends data to computer, output receives data from computer",
  },
  {
    id: 4,
    topic: "I/O Basics",
    question: "What are examples of input devices?",
    options: [
      { label: "A", text: "Keyboard, Mouse, Scanner" },
      { label: "B", text: "Monitor, Printer, Speakers" },
      { label: "C", text: "Hard Drive, USB Drive, SSD" },
      { label: "D", text: "CPU, RAM, Motherboard" },
    ],
    answer: "A. Keyboard, Mouse, Scanner",
  },
  {
    id: 5,
    topic: "I/O Basics",
    question: "What are examples of output devices?",
    options: [
      { label: "A", text: "Monitor, Printer, Speakers" },
      { label: "B", text: "Keyboard, Mouse, Scanner" },
      { label: "C", text: "Hard Drive, USB Drive, SSD" },
      { label: "D", text: "CPU, RAM, Motherboard" },
    ],
    answer: "A. Monitor, Printer, Speakers",
  },
  {
    id: 6,
    topic: "I/O Basics",
    question: "What is a storage device?",
    options: [
      { label: "A", text: "A device that stores data for later use" },
      { label: "B", text: "A device that displays data" },
      { label: "C", text: "A device that inputs data" },
      { label: "D", text: "A device that processes data" },
    ],
    answer: "A. A device that stores data for later use",
  },

  // ----- Input Devices (6) -----
  {
    id: 7,
    topic: "Input Devices",
    question: "What type of keyboard layout is most common in English-speaking countries?",
    options: [
      { label: "A", text: "QWERTY" },
      { label: "B", text: "DVORAK" },
      { label: "C", text: "AZERTY" },
      { label: "D", text: "QWERTZ" },
    ],
    answer: "A. QWERTY",
  },
  {
    id: 8,
    topic: "Input Devices",
    question: "What is the purpose of a mouse?",
    options: [
      { label: "A", text: "To move the cursor and select items" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To move the cursor and select items",
  },
  {
    id: 9,
    topic: "Input Devices",
    question: "What is the difference between an optical and laser mouse?",
    options: [
      { label: "A", text: "Optical uses LED, laser uses laser for tracking" },
      { label: "B", text: "Laser uses LED, optical uses laser" },
      { label: "C", text: "Both use LED" },
      { label: "D", text: "Both use laser" },
    ],
    answer: "A. Optical uses LED, laser uses laser for tracking",
  },
  {
    id: 10,
    topic: "Input Devices",
    question: "What is a scanner used for?",
    options: [
      { label: "A", text: "To convert physical documents into digital format" },
      { label: "B", text: "To print documents" },
      { label: "C", text: "To display documents" },
      { label: "D", text: "To store documents" },
    ],
    answer: "A. To convert physical documents into digital format",
  },
  {
    id: 11,
    topic: "Input Devices",
    question: "What is the purpose of a touchpad?",
    options: [
      { label: "A", text: "To control cursor on laptops" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To control cursor on laptops",
  },
  {
    id: 12,
    topic: "Input Devices",
    question: "What is a joystick used for?",
    options: [
      { label: "A", text: "For gaming and controlling movements" },
      { label: "B", text: "For typing text" },
      { label: "C", text: "For scanning documents" },
      { label: "D", text: "For printing documents" },
    ],
    answer: "A. For gaming and controlling movements",
  },

  // ----- Output Devices (6) -----
  {
    id: 13,
    topic: "Output Devices",
    question: "What is a monitor?",
    options: [
      { label: "A", text: "An output device that displays visual information" },
      { label: "B", text: "An input device that captures visual information" },
      { label: "C", text: "A storage device" },
      { label: "D", text: "A processing device" },
    ],
    answer: "A. An output device that displays visual information",
  },
  {
    id: 14,
    topic: "Output Devices",
    question: "What is the difference between LCD and LED displays?",
    options: [
      { label: "A", text: "LED uses light-emitting diodes, LCD uses liquid crystals" },
      { label: "B", text: "LCD uses LEDs, LED uses liquid crystals" },
      { label: "C", text: "Both use liquid crystals" },
      { label: "D", text: "Both use LEDs" },
    ],
    answer: "A. LED uses light-emitting diodes, LCD uses liquid crystals",
  },
  {
    id: 15,
    topic: "Output Devices",
    question: "What is the purpose of a printer?",
    options: [
      { label: "A", text: "To produce hard copies of documents" },
      { label: "B", text: "To scan documents" },
      { label: "C", text: "To display documents" },
      { label: "D", text: "To store documents" },
    ],
    answer: "A. To produce hard copies of documents",
  },
  {
    id: 16,
    topic: "Output Devices",
    question: "What is the difference between inkjet and laser printers?",
    options: [
      { label: "A", text: "Inkjet uses ink, laser uses toner" },
      { label: "B", text: "Laser uses ink, inkjet uses toner" },
      { label: "C", text: "Both use ink" },
      { label: "D", text: "Both use toner" },
    ],
    answer: "A. Inkjet uses ink, laser uses toner",
  },
  {
    id: 17,
    topic: "Output Devices",
    question: "What are speakers used for in a computer system?",
    options: [
      { label: "A", text: "To output audio" },
      { label: "B", text: "To input audio" },
      { label: "C", text: "To store audio" },
      { label: "D", text: "To process audio" },
    ],
    answer: "A. To output audio",
  },
  {
    id: 18,
    topic: "Output Devices",
    question: "What is a projector?",
    options: [
      { label: "A", text: "An output device that displays images on a large surface" },
      { label: "B", text: "An input device that captures images" },
      { label: "C", text: "A storage device" },
      { label: "D", text: "A processing device" },
    ],
    answer: "A. An output device that displays images on a large surface",
  },

  // ----- Storage Devices (6) -----
  {
    id: 19,
    topic: "Storage Devices",
    question: "What is a hard disk drive (HDD)?",
    options: [
      { label: "A", text: "A storage device using magnetic platters" },
      { label: "B", text: "A storage device using flash memory" },
      { label: "C", text: "A storage device using optical media" },
      { label: "D", text: "A storage device using tapes" },
    ],
    answer: "A. A storage device using magnetic platters",
  },
  {
    id: 20,
    topic: "Storage Devices",
    question: "What is the difference between HDD and SSD?",
    options: [
      { label: "A", text: "HDD has moving parts, SSD has no moving parts" },
      { label: "B", text: "SSD has moving parts, HDD has no moving parts" },
      { label: "C", text: "Both have moving parts" },
      { label: "D", text: "Both have no moving parts" },
    ],
    answer: "A. HDD has moving parts, SSD has no moving parts",
  },
  {
    id: 21,
    topic: "Storage Devices",
    question: "What is a USB flash drive?",
    options: [
      { label: "A", text: "A portable storage device using flash memory" },
      { label: "B", text: "A hard disk drive" },
      { label: "C", text: "An optical disc" },
      { label: "D", text: "A magnetic tape" },
    ],
    answer: "A. A portable storage device using flash memory",
  },
  {
    id: 22,
    topic: "Storage Devices",
    question: "What is the purpose of a memory card?",
    options: [
      { label: "A", text: "To store data in portable devices" },
      { label: "B", text: "To process data" },
      { label: "C", text: "To display data" },
      { label: "D", text: "To input data" },
    ],
    answer: "A. To store data in portable devices",
  },
  {
    id: 23,
    topic: "Storage Devices",
    question: "What is an optical disc drive used for?",
    options: [
      { label: "A", text: "To read and write CDs, DVDs, and Blu-ray discs" },
      { label: "B", text: "To read and write hard disks" },
      { label: "C", text: "To read and write flash drives" },
      { label: "D", text: "To read and write tapes" },
    ],
    answer: "A. To read and write CDs, DVDs, and Blu-ray discs",
  },
  {
    id: 24,
    topic: "Storage Devices",
    question: "What is the purpose of cloud storage?",
    options: [
      { label: "A", text: "To store data on remote servers" },
      { label: "B", text: "To store data on local devices" },
      { label: "C", text: "To process data" },
      { label: "D", text: "To display data" },
    ],
    answer: "A. To store data on remote servers",
  },

  // ----- Display Technologies (6) -----
  {
    id: 25,
    topic: "Display Technologies",
    question: "What is resolution in display technology?",
    options: [
      { label: "A", text: "The number of pixels on the screen" },
      { label: "B", text: "The size of the screen" },
      { label: "C", text: "The color depth of the screen" },
      { label: "D", text: "The refresh rate of the screen" },
    ],
    answer: "A. The number of pixels on the screen",
  },
  {
    id: 26,
    topic: "Display Technologies",
    question: "What is the difference between 1080p and 4K resolution?",
    options: [
      { label: "A", text: "4K has 4 times the pixels of 1080p" },
      { label: "B", text: "1080p has 4 times the pixels of 4K" },
      { label: "C", text: "Both have the same pixels" },
      { label: "D", text: "4K has half the pixels of 1080p" },
    ],
    answer: "A. 4K has 4 times the pixels of 1080p",
  },
  {
    id: 27,
    topic: "Display Technologies",
    question: "What is refresh rate in displays?",
    options: [
      { label: "A", text: "The number of times per second the screen updates" },
      { label: "B", text: "The number of pixels on the screen" },
      { label: "C", text: "The size of the screen" },
      { label: "D", text: "The color depth of the screen" },
    ],
    answer: "A. The number of times per second the screen updates",
  },
  {
    id: 28,
    topic: "Display Technologies",
    question: "What is the difference between OLED and LCD displays?",
    options: [
      { label: "A", text: "OLED emits its own light, LCD uses backlight" },
      { label: "B", text: "LCD emits its own light, OLED uses backlight" },
      { label: "C", text: "Both emit their own light" },
      { label: "D", text: "Both use backlight" },
    ],
    answer: "A. OLED emits its own light, LCD uses backlight",
  },
  {
    id: 29,
    topic: "Display Technologies",
    question: "What is the aspect ratio of a display?",
    options: [
      { label: "A", text: "The ratio of width to height" },
      { label: "B", text: "The number of pixels" },
      { label: "C", text: "The size of the screen" },
      { label: "D", text: "The color depth" },
    ],
    answer: "A. The ratio of width to height",
  },
  {
    id: 30,
    topic: "Display Technologies",
    question: "What is HDR in display technology?",
    options: [
      { label: "A", text: "High Dynamic Range for better contrast and colors" },
      { label: "B", text: "High Display Resolution" },
      { label: "C", text: "High Definition Refresh" },
      { label: "D", text: "Hardware Display Rendering" },
    ],
    answer: "A. High Dynamic Range for better contrast and colors",
  },

  // ----- Printing Technologies (6) -----
  {
    id: 31,
    topic: "Printing Technologies",
    question: "What is DPI in printing?",
    options: [
      { label: "A", text: "Dots Per Inch - measure of print resolution" },
      { label: "B", text: "Display Per Inch" },
      { label: "C", text: "Data Per Input" },
      { label: "D", text: "Digital Print Interface" },
    ],
    answer: "A. Dots Per Inch - measure of print resolution",
  },
  {
    id: 32,
    topic: "Printing Technologies",
    question: "What is the difference between 3D printing and traditional printing?",
    options: [
      { label: "A", text: "3D printing creates three-dimensional objects, traditional creates 2D images" },
      { label: "B", text: "Traditional creates 3D objects, 3D printing creates 2D images" },
      { label: "C", text: "Both create 3D objects" },
      { label: "D", text: "Both create 2D images" },
    ],
    answer: "A. 3D printing creates three-dimensional objects, traditional creates 2D images",
  },
  {
    id: 33,
    topic: "Printing Technologies",
    question: "What is a thermal printer?",
    options: [
      { label: "A", text: "A printer that uses heat to print on special paper" },
      { label: "B", text: "A printer that uses ink" },
      { label: "C", text: "A printer that uses toner" },
      { label: "D", text: "A printer that uses ribbons" },
    ],
    answer: "A. A printer that uses heat to print on special paper",
  },
  {
    id: 34,
    topic: "Printing Technologies",
    question: "What is the purpose of a plotter?",
    options: [
      { label: "A", text: "To print large-format vector graphics and designs" },
      { label: "B", text: "To print standard documents" },
      { label: "C", text: "To print photos" },
      { label: "D", text: "To print 3D objects" },
    ],
    answer: "A. To print large-format vector graphics and designs",
  },
  {
    id: 35,
    topic: "Printing Technologies",
    question: "What is the difference between inkjet and laser printing?",
    options: [
      { label: "A", text: "Inkjet uses liquid ink, laser uses toner powder" },
      { label: "B", text: "Laser uses liquid ink, inkjet uses toner powder" },
      { label: "C", text: "Both use liquid ink" },
      { label: "D", text: "Both use toner powder" },
    ],
    answer: "A. Inkjet uses liquid ink, laser uses toner powder",
  },
  {
    id: 36,
    topic: "Printing Technologies",
    question: "What is duplex printing?",
    options: [
      { label: "A", text: "Printing on both sides of the paper" },
      { label: "B", text: "Printing in double resolution" },
      { label: "C", text: "Printing in duplicate" },
      { label: "D", text: "Printing with two colors" },
    ],
    answer: "A. Printing on both sides of the paper",
  },

  // ----- Audio I/O (6) -----
  {
    id: 37,
    topic: "Audio I/O",
    question: "What is a microphone used for?",
    options: [
      { label: "A", text: "To capture audio input" },
      { label: "B", text: "To output audio" },
      { label: "C", text: "To store audio" },
      { label: "D", text: "To process audio" },
    ],
    answer: "A. To capture audio input",
  },
  {
    id: 38,
    topic: "Audio I/O",
    question: "What is the difference between a dynamic and condenser microphone?",
    options: [
      { label: "A", text: "Dynamic is more durable, condenser is more sensitive" },
      { label: "B", text: "Condenser is more durable, dynamic is more sensitive" },
      { label: "C", text: "Both are equally sensitive" },
      { label: "D", text: "Both are equally durable" },
    ],
    answer: "A. Dynamic is more durable, condenser is more sensitive",
  },
  {
    id: 39,
    topic: "Audio I/O",
    question: "What are headphones used for?",
    options: [
      { label: "A", text: "To output audio privately" },
      { label: "B", text: "To input audio" },
      { label: "C", text: "To store audio" },
      { label: "D", text: "To process audio" },
    ],
    answer: "A. To output audio privately",
  },
  {
    id: 40,
    topic: "Audio I/O",
    question: "What is the difference between mono and stereo audio?",
    options: [
      { label: "A", text: "Mono uses one channel, stereo uses two channels" },
      { label: "B", text: "Stereo uses one channel, mono uses two channels" },
      { label: "C", text: "Both use one channel" },
      { label: "D", text: "Both use two channels" },
    ],
    answer: "A. Mono uses one channel, stereo uses two channels",
  },
  {
    id: 41,
    topic: "Audio I/O",
    question: "What is a sound card?",
    options: [
      { label: "A", text: "A hardware component that processes audio" },
      { label: "B", text: "A storage device for audio" },
      { label: "C", text: "An input device for audio" },
      { label: "D", text: "An output device for audio" },
    ],
    answer: "A. A hardware component that processes audio",
  },
  {
    id: 42,
    topic: "Audio I/O",
    question: "What is the purpose of an audio interface?",
    options: [
      { label: "A", text: "To connect audio devices to a computer" },
      { label: "B", text: "To store audio files" },
      { label: "C", text: "To process audio files" },
      { label: "D", text: "To display audio waveforms" },
    ],
    answer: "A. To connect audio devices to a computer",
  },

  // ----- Networking I/O (6) -----
  {
    id: 43,
    topic: "Networking I/O",
    question: "What is a network interface card (NIC)?",
    options: [
      { label: "A", text: "A device that connects a computer to a network" },
      { label: "B", text: "A device that stores network data" },
      { label: "C", text: "A device that displays network data" },
      { label: "D", text: "A device that processes network data" },
    ],
    answer: "A. A device that connects a computer to a network",
  },
  {
    id: 44,
    topic: "Networking I/O",
    question: "What is the difference between Wi-Fi and Ethernet?",
    options: [
      { label: "A", text: "Wi-Fi is wireless, Ethernet is wired" },
      { label: "B", text: "Ethernet is wireless, Wi-Fi is wired" },
      { label: "C", text: "Both are wireless" },
      { label: "D", text: "Both are wired" },
    ],
    answer: "A. Wi-Fi is wireless, Ethernet is wired",
  },
  {
    id: 45,
    topic: "Networking I/O",
    question: "What is a modem?",
    options: [
      { label: "A", text: "A device that modulates and demodulates signals for internet connection" },
      { label: "B", text: "A device that stores data" },
      { label: "C", text: "A device that displays data" },
      { label: "D", text: "A device that processes data" },
    ],
    answer: "A. A device that modulates and demodulates signals for internet connection",
  },
  {
    id: 46,
    topic: "Networking I/O",
    question: "What is a router?",
    options: [
      { label: "A", text: "A device that routes data between networks" },
      { label: "B", text: "A device that stores data" },
      { label: "C", text: "A device that displays data" },
      { label: "D", text: "A device that processes data" },
    ],
    answer: "A. A device that routes data between networks",
  },
  {
    id: 47,
    topic: "Networking I/O",
    question: "What is the purpose of a switch in networking?",
    options: [
      { label: "A", text: "To connect devices within a network" },
      { label: "B", text: "To connect different networks" },
      { label: "C", text: "To store network data" },
      { label: "D", text: "To display network data" },
    ],
    answer: "A. To connect devices within a network",
  },
  {
    id: 48,
    topic: "Networking I/O",
    question: "What is the difference between a hub and a switch?",
    options: [
      { label: "A", text: "Hub broadcasts to all ports, switch sends to specific ports" },
      { label: "B", text: "Switch broadcasts to all ports, hub sends to specific ports" },
      { label: "C", text: "Both broadcast to all ports" },
      { label: "D", text: "Both send to specific ports" },
    ],
    answer: "A. Hub broadcasts to all ports, switch sends to specific ports",
  },

  // ----- Ports & Interfaces (6) -----
  {
    id: 49,
    topic: "Ports & Interfaces",
    question: "What is a USB port used for?",
    options: [
      { label: "A", text: "To connect various peripherals to a computer" },
      { label: "B", text: "To display video" },
      { label: "C", text: "To connect to networks" },
      { label: "D", text: "To power devices" },
    ],
    answer: "A. To connect various peripherals to a computer",
  },
  {
    id: 50,
    topic: "Ports & Interfaces",
    question: "What is the difference between USB 2.0 and USB 3.0?",
    options: [
      { label: "A", text: "USB 3.0 is faster than USB 2.0" },
      { label: "B", text: "USB 2.0 is faster than USB 3.0" },
      { label: "C", text: "Both have the same speed" },
      { label: "D", text: "USB 3.0 has different connector shape" },
    ],
    answer: "A. USB 3.0 is faster than USB 2.0",
  },
  {
    id: 51,
    topic: "Ports & Interfaces",
    question: "What is the purpose of an HDMI port?",
    options: [
      { label: "A", text: "To transmit audio and video signals" },
      { label: "B", text: "To connect USB devices" },
      { label: "C", text: "To connect to networks" },
      { label: "D", text: "To power devices" },
    ],
    answer: "A. To transmit audio and video signals",
  },
  {
    id: 52,
    topic: "Ports & Interfaces",
    question: "What is the difference between VGA and HDMI?",
    options: [
      { label: "A", text: "VGA transmits analog video, HDMI transmits digital audio/video" },
      { label: "B", text: "HDMI transmits analog video, VGA transmits digital audio/video" },
      { label: "C", text: "Both transmit analog video" },
      { label: "D", text: "Both transmit digital audio/video" },
    ],
    answer: "A. VGA transmits analog video, HDMI transmits digital audio/video",
  },
  {
    id: 53,
    topic: "Ports & Interfaces",
    question: "What is an Ethernet port used for?",
    options: [
      { label: "A", text: "To connect to a wired network" },
      { label: "B", text: "To connect USB devices" },
      { label: "C", text: "To transmit audio" },
      { label: "D", text: "To display video" },
    ],
    answer: "A. To connect to a wired network",
  },
  {
    id: 54,
    topic: "Ports & Interfaces",
    question: "What is the purpose of a Thunderbolt port?",
    options: [
      { label: "A", text: "A high-speed interface for data, video, and power" },
      { label: "B", text: "A standard USB port" },
      { label: "C", text: "A network port" },
      { label: "D", text: "An audio port" },
    ],
    answer: "A. A high-speed interface for data, video, and power",
  },

  // ----- Touch & Gesture (6) -----
  {
    id: 55,
    topic: "Touch & Gesture",
    question: "What is a touchscreen?",
    options: [
      { label: "A", text: "A display that responds to touch input" },
      { label: "B", text: "A display that only shows images" },
      { label: "C", text: "A display that outputs audio" },
      { label: "D", text: "A display that stores data" },
    ],
    answer: "A. A display that responds to touch input",
  },
  {
    id: 56,
    topic: "Touch & Gesture",
    question: "What is the difference between capacitive and resistive touchscreens?",
    options: [
      { label: "A", text: "Capacitive uses electrical properties, resistive uses pressure" },
      { label: "B", text: "Resistive uses electrical properties, capacitive uses pressure" },
      { label: "C", text: "Both use pressure" },
      { label: "D", text: "Both use electrical properties" },
    ],
    answer: "A. Capacitive uses electrical properties, resistive uses pressure",
  },
  {
    id: 57,
    topic: "Touch & Gesture",
    question: "What is multi-touch technology?",
    options: [
      { label: "A", text: "Touchscreen that recognizes multiple touch points simultaneously" },
      { label: "B", text: "Touchscreen that recognizes one touch point" },
      { label: "C", text: "Touchscreen that uses multiple displays" },
      { label: "D", text: "Touchscreen that uses multiple sensors" },
    ],
    answer: "A. Touchscreen that recognizes multiple touch points simultaneously",
  },
  {
    id: 58,
    topic: "Touch & Gesture",
    question: "What is gesture recognition?",
    options: [
      { label: "A", text: "Technology that interprets human gestures" },
      { label: "B", text: "Technology that interprets text" },
      { label: "C", text: "Technology that interprets audio" },
      { label: "D", text: "Technology that interprets images" },
    ],
    answer: "A. Technology that interprets human gestures",
  },
  {
    id: 59,
    topic: "Touch & Gesture",
    question: "What is the purpose of a stylus?",
    options: [
      { label: "A", text: "To interact with touchscreens precisely" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To interact with touchscreens precisely",
  },
  {
    id: 60,
    topic: "Touch & Gesture",
    question: "What is haptic feedback?",
    options: [
      { label: "A", text: "Tactile feedback through touch sensation" },
      { label: "B", text: "Visual feedback" },
      { label: "C", text: "Audio feedback" },
      { label: "D", text: "Text feedback" },
    ],
    answer: "A. Tactile feedback through touch sensation",
  },

  // ----- Biometrics & Security (6) -----
  {
    id: 61,
    topic: "Biometrics & Security",
    question: "What is biometric authentication?",
    options: [
      { label: "A", text: "Using biological characteristics for identification" },
      { label: "B", text: "Using passwords for authentication" },
      { label: "C", text: "Using tokens for authentication" },
      { label: "D", text: "Using PINs for authentication" },
    ],
    answer: "A. Using biological characteristics for identification",
  },
  {
    id: 62,
    topic: "Biometrics & Security",
    question: "What is a fingerprint scanner used for?",
    options: [
      { label: "A", text: "To authenticate users using fingerprints" },
      { label: "B", text: "To scan documents" },
      { label: "C", text: "To print documents" },
      { label: "D", text: "To display images" },
    ],
    answer: "A. To authenticate users using fingerprints",
  },
  {
    id: 63,
    topic: "Biometrics & Security",
    question: "What is the difference between face recognition and facial authentication?",
    options: [
      { label: "A", text: "Face recognition identifies, facial authentication verifies" },
      { label: "B", text: "Facial authentication identifies, face recognition verifies" },
      { label: "C", text: "Both identify" },
      { label: "D", text: "Both verify" },
    ],
    answer: "A. Face recognition identifies, facial authentication verifies",
  },
  {
    id: 64,
    topic: "Biometrics & Security",
    question: "What is iris scanning?",
    options: [
      { label: "A", text: "Biometric authentication using patterns in the iris" },
      { label: "B", text: "Scanning the retina" },
      { label: "C", text: "Facial recognition" },
      { label: "D", text: "Fingerprint scanning" },
    ],
    answer: "A. Biometric authentication using patterns in the iris",
  },
  {
    id: 65,
    topic: "Biometrics & Security",
    question: "What is the purpose of voice recognition?",
    options: [
      { label: "A", text: "To identify or authenticate users by voice" },
      { label: "B", text: "To recognize speech patterns" },
      { label: "C", text: "To translate languages" },
      { label: "D", text: "To transcribe audio" },
    ],
    answer: "A. To identify or authenticate users by voice",
  },
  {
    id: 66,
    topic: "Biometrics & Security",
    question: "What is a smart card reader used for?",
    options: [
      { label: "A", text: "To read data from smart cards" },
      { label: "B", text: "To store data" },
      { label: "C", text: "To display data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To read data from smart cards",
  },

  // ----- I/O Processing (6) -----
  {
    id: 67,
    topic: "I/O Processing",
    question: "What is the purpose of an I/O controller?",
    options: [
      { label: "A", text: "To manage communication between CPU and I/O devices" },
      { label: "B", text: "To store I/O data" },
      { label: "C", text: "To display I/O data" },
      { label: "D", text: "To process I/O data" },
    ],
    answer: "A. To manage communication between CPU and I/O devices",
  },
  {
    id: 68,
    topic: "I/O Processing",
    question: "What is the difference between programmed I/O and interrupt-driven I/O?",
    options: [
      { label: "A", text: "Programmed I/O uses CPU polling, interrupt-driven uses CPU interruption" },
      { label: "B", text: "Interrupt-driven uses CPU polling, programmed I/O uses CPU interruption" },
      { label: "C", text: "Both use CPU polling" },
      { label: "D", text: "Both use CPU interruption" },
    ],
    answer: "A. Programmed I/O uses CPU polling, interrupt-driven uses CPU interruption",
  },
  {
    id: 69,
    topic: "I/O Processing",
    question: "What is DMA (Direct Memory Access)?",
    options: [
      { label: "A", text: "Allowing I/O devices to access memory without CPU" },
      { label: "B", text: "Allowing CPU to access I/O devices" },
      { label: "C", text: "Allowing I/O devices to access each other" },
      { label: "D", text: "Allowing memory to access CPU" },
    ],
    answer: "A. Allowing I/O devices to access memory without CPU",
  },
  {
    id: 70,
    topic: "I/O Processing",
    question: "What is the difference between synchronous and asynchronous I/O?",
    options: [
      { label: "A", text: "Synchronous blocks until complete, asynchronous doesn't block" },
      { label: "B", text: "Asynchronous blocks until complete, synchronous doesn't block" },
      { label: "C", text: "Both block until complete" },
      { label: "D", text: "Neither blocks until complete" },
    ],
    answer: "A. Synchronous blocks until complete, asynchronous doesn't block",
  },
  {
    id: 71,
    topic: "I/O Processing",
    question: "What is the purpose of buffering in I/O?",
    options: [
      { label: "A", text: "To temporarily store data during I/O operations" },
      { label: "B", text: "To permanently store data" },
      { label: "C", text: "To delete data" },
      { label: "D", text: "To compress data" },
    ],
    answer: "A. To temporarily store data during I/O operations",
  },
  {
    id: 72,
    topic: "I/O Processing",
    question: "What is the purpose of caching in I/O?",
    options: [
      { label: "A", text: "To store frequently accessed data for faster access" },
      { label: "B", text: "To delete data" },
      { label: "C", text: "To compress data" },
      { label: "D", text: "To encrypt data" },
    ],
    answer: "A. To store frequently accessed data for faster access",
  },

  // ----- Virtual I/O (6) -----
  {
    id: 73,
    topic: "Virtual I/O",
    question: "What is virtual I/O?",
    options: [
      { label: "A", text: "Simulated I/O devices in virtual environments" },
      { label: "B", text: "Physical I/O devices" },
      { label: "C", text: "Cloud-based I/O" },
      { label: "D", text: "Network-based I/O" },
    ],
    answer: "A. Simulated I/O devices in virtual environments",
  },
  {
    id: 74,
    topic: "Virtual I/O",
    question: "What is the purpose of I/O virtualization?",
    options: [
      { label: "A", text: "To share physical I/O resources among multiple virtual machines" },
      { label: "B", text: "To create physical I/O devices" },
      { label: "C", text: "To delete I/O devices" },
      { label: "D", text: "To isolate I/O devices" },
    ],
    answer: "A. To share physical I/O resources among multiple virtual machines",
  },
  {
    id: 75,
    topic: "Virtual I/O",
    question: "What is a virtual network interface card (vNIC)?",
    options: [
      { label: "A", text: "A virtualized network interface for virtual machines" },
      { label: "B", text: "A physical network card" },
      { label: "C", text: "A wireless network adapter" },
      { label: "D", text: "A USB network adapter" },
    ],
    answer: "A. A virtualized network interface for virtual machines",
  },
  {
    id: 76,
    topic: "Virtual I/O",
    question: "What is the purpose of a virtual USB controller?",
    options: [
      { label: "A", text: "To connect USB devices to virtual machines" },
      { label: "B", text: "To connect physical USB devices" },
      { label: "C", text: "To store USB data" },
      { label: "D", text: "To process USB data" },
    ],
    answer: "A. To connect USB devices to virtual machines",
  },
  {
    id: 77,
    topic: "Virtual I/O",
    question: "What is the difference between virtual and physical I/O?",
    options: [
      { label: "A", text: "Virtual I/O is simulated, physical I/O is hardware-based" },
      { label: "B", text: "Physical I/O is simulated, virtual I/O is hardware-based" },
      { label: "C", text: "Both are simulated" },
      { label: "D", text: "Both are hardware-based" },
    ],
    answer: "A. Virtual I/O is simulated, physical I/O is hardware-based",
  },
  {
    id: 78,
    topic: "Virtual I/O",
    question: "What is the purpose of PCI passthrough?",
    options: [
      { label: "A", text: "To give a VM direct access to a physical PCI device" },
      { label: "B", text: "To create virtual PCI devices" },
      { label: "C", text: "To delete PCI devices" },
      { label: "D", text: "To isolate PCI devices" },
    ],
    answer: "A. To give a VM direct access to a physical PCI device",
  },

  // ----- Accessibility I/O (6) -----
  {
    id: 79,
    topic: "Accessibility I/O",
    question: "What is the purpose of a screen reader?",
    options: [
      { label: "A", text: "To read screen content aloud for visually impaired users" },
      { label: "B", text: "To display screen content" },
      { label: "C", text: "To store screen content" },
      { label: "D", text: "To process screen content" },
    ],
    answer: "A. To read screen content aloud for visually impaired users",
  },
  {
    id: 80,
    topic: "Accessibility I/O",
    question: "What is a Braille display used for?",
    options: [
      { label: "A", text: "To display text in Braille for visually impaired users" },
      { label: "B", text: "To display images" },
      { label: "C", text: "To play audio" },
      { label: "D", text: "To store data" },
    ],
    answer: "A. To display text in Braille for visually impaired users",
  },
  {
    id: 81,
    topic: "Accessibility I/O",
    question: "What is the purpose of voice control?",
    options: [
      { label: "A", text: "To control devices using voice commands" },
      { label: "B", text: "To output audio" },
      { label: "C", text: "To store voice data" },
      { label: "D", text: "To process voice data" },
    ],
    answer: "A. To control devices using voice commands",
  },
  {
    id: 82,
    topic: "Accessibility I/O",
    question: "What is an eye-tracking device used for?",
    options: [
      { label: "A", text: "To control devices using eye movements" },
      { label: "B", text: "To display images" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To control devices using eye movements",
  },
  {
    id: 83,
    topic: "Accessibility I/O",
    question: "What is the purpose of an assistive touch device?",
    options: [
      { label: "A", text: "To help users with mobility impairments interact with devices" },
      { label: "B", text: "To display content" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To help users with mobility impairments interact with devices",
  },
  {
    id: 84,
    topic: "Accessibility I/O",
    question: "What is the difference between voice recognition and voice control?",
    options: [
      { label: "A", text: "Voice recognition converts speech to text, voice control executes commands" },
      { label: "B", text: "Voice control converts speech to text, voice recognition executes commands" },
      { label: "C", text: "Both convert speech to text" },
      { label: "D", text: "Both execute commands" },
    ],
    answer: "A. Voice recognition converts speech to text, voice control executes commands",
  },

  // ----- Emerging I/O Technologies (6) -----
  {
    id: 85,
    topic: "Emerging I/O",
    question: "What is a smart display?",
    options: [
      { label: "A", text: "A display with built-in intelligence and interactivity" },
      { label: "B", text: "A regular display" },
      { label: "C", text: "A display without any features" },
      { label: "D", text: "A display with only basic features" },
    ],
    answer: "A. A display with built-in intelligence and interactivity",
  },
  {
    id: 86,
    topic: "Emerging I/O",
    question: "What is the purpose of AR/VR headsets?",
    options: [
      { label: "A", text: "To provide immersive augmented and virtual reality experiences" },
      { label: "B", text: "To display regular content" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To provide immersive augmented and virtual reality experiences",
  },
  {
    id: 87,
    topic: "Emerging I/O",
    question: "What is a smart speaker?",
    options: [
      { label: "A", text: "A speaker with voice assistant capabilities" },
      { label: "B", text: "A regular speaker" },
      { label: "C", text: "A speaker without any features" },
      { label: "D", text: "A speaker with only basic features" },
    ],
    answer: "A. A speaker with voice assistant capabilities",
  },
  {
    id: 88,
    topic: "Emerging I/O",
    question: "What is the purpose of brain-computer interfaces (BCI)?",
    options: [
      { label: "A", text: "To allow direct communication between brain and computer" },
      { label: "B", text: "To display brain signals" },
      { label: "C", text: "To store brain signals" },
      { label: "D", text: "To process brain signals" },
    ],
    answer: "A. To allow direct communication between brain and computer",
  },
  {
    id: 89,
    topic: "Emerging I/O",
    question: "What is a wearable device in I/O?",
    options: [
      { label: "A", text: "A device worn on the body for I/O functions" },
      { label: "B", text: "A device placed on a desk" },
      { label: "C", text: "A device stored in a pocket" },
      { label: "D", text: "A device connected to a TV" },
    ],
    answer: "A. A device worn on the body for I/O functions",
  },
  {
    id: 90,
    topic: "Emerging I/O",
    question: "What is the purpose of gesture control devices?",
    options: [
      { label: "A", text: "To control devices using hand gestures" },
      { label: "B", text: "To control devices using voice" },
      { label: "C", text: "To control devices using touch" },
      { label: "D", text: "To control devices using eye movements" },
    ],
    answer: "A. To control devices using hand gestures",
  },

  // ----- Additional Questions to reach 120+ (30 more) -----
  {
    id: 91,
    topic: "Input Devices",
    question: "What is a light pen used for?",
    options: [
      { label: "A", text: "To select objects on a screen" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To select objects on a screen",
  },
  {
    id: 92,
    topic: "Output Devices",
    question: "What is a data projector used for?",
    options: [
      { label: "A", text: "To display computer output on a large screen" },
      { label: "B", text: "To capture images" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To display computer output on a large screen",
  },
  {
    id: 93,
    topic: "Storage Devices",
    question: "What is the difference between magnetic and optical storage?",
    options: [
      { label: "A", text: "Magnetic uses magnetism, optical uses lasers" },
      { label: "B", text: "Optical uses magnetism, magnetic uses lasers" },
      { label: "C", text: "Both use magnetism" },
      { label: "D", text: "Both use lasers" },
    ],
    answer: "A. Magnetic uses magnetism, optical uses lasers",
  },
  {
    id: 94,
    topic: "Display Technologies",
    question: "What is the purpose of a display adapter?",
    options: [
      { label: "A", text: "To connect the computer to a display" },
      { label: "B", text: "To store display data" },
      { label: "C", text: "To process display data" },
      { label: "D", text: "To power the display" },
    ],
    answer: "A. To connect the computer to a display",
  },
  {
    id: 95,
    topic: "Printing Technologies",
    question: "What is the purpose of a print server?",
    options: [
      { label: "A", text: "To manage and control printing resources" },
      { label: "B", text: "To print documents directly" },
      { label: "C", text: "To store print data" },
      { label: "D", text: "To display print data" },
    ],
    answer: "A. To manage and control printing resources",
  },
  {
    id: 96,
    topic: "Audio I/O",
    question: "What is a digital-to-analog converter (DAC)?",
    options: [
      { label: "A", text: "A device that converts digital audio to analog" },
      { label: "B", text: "A device that converts analog audio to digital" },
      { label: "C", text: "A device that stores audio" },
      { label: "D", text: "A device that processes audio" },
    ],
    answer: "A. A device that converts digital audio to analog",
  },
  {
    id: 97,
    topic: "Networking I/O",
    question: "What is the purpose of a wireless adapter?",
    options: [
      { label: "A", text: "To connect to wireless networks" },
      { label: "B", text: "To connect to wired networks" },
      { label: "C", text: "To store network data" },
      { label: "D", text: "To process network data" },
    ],
    answer: "A. To connect to wireless networks",
  },
  {
    id: 98,
    topic: "Ports & Interfaces",
    question: "What is the purpose of a DisplayPort?",
    options: [
      { label: "A", text: "To connect displays with high-quality video and audio" },
      { label: "B", text: "To connect USB devices" },
      { label: "C", text: "To connect to networks" },
      { label: "D", text: "To power devices" },
    ],
    answer: "A. To connect displays with high-quality video and audio",
  },
  {
    id: 99,
    topic: "Touch & Gesture",
    question: "What is a touch pen used for?",
    options: [
      { label: "A", text: "To interact with touchscreens" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To interact with touchscreens",
  },
  {
    id: 100,
    topic: "Biometrics & Security",
    question: "What is the purpose of a retina scanner?",
    options: [
      { label: "A", text: "To authenticate users using retinal patterns" },
      { label: "B", text: "To scan documents" },
      { label: "C", text: "To print documents" },
      { label: "D", text: "To display images" },
    ],
    answer: "A. To authenticate users using retinal patterns",
  },
  {
    id: 101,
    topic: "I/O Processing",
    question: "What is the purpose of an I/O port?",
    options: [
      { label: "A", text: "To connect I/O devices to the computer" },
      { label: "B", text: "To store I/O data" },
      { label: "C", text: "To process I/O data" },
      { label: "D", text: "To display I/O data" },
    ],
    answer: "A. To connect I/O devices to the computer",
  },
  {
    id: 102,
    topic: "Virtual I/O",
    question: "What is the purpose of a virtual keyboard?",
    options: [
      { label: "A", text: "To provide on-screen keyboard input" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To provide on-screen keyboard input",
  },
  {
    id: 103,
    topic: "Accessibility I/O",
    question: "What is the purpose of a sip-and-puff system?",
    options: [
      { label: "A", text: "To control devices using breath signals" },
      { label: "B", text: "To display images" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To control devices using breath signals",
  },
  {
    id: 104,
    topic: "Emerging I/O",
    question: "What is the purpose of a smartwatch as an I/O device?",
    options: [
      { label: "A", text: "To provide notifications and interact with devices" },
      { label: "B", text: "To only display time" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To provide notifications and interact with devices",
  },
  {
    id: 105,
    topic: "Input Devices",
    question: "What is a barcode reader used for?",
    options: [
      { label: "A", text: "To read barcode information" },
      { label: "B", text: "To type text" },
      { label: "C", text: "To scan documents" },
      { label: "D", text: "To print documents" },
    ],
    answer: "A. To read barcode information",
  },
  {
    id: 106,
    topic: "Output Devices",
    question: "What is a digital signage display?",
    options: [
      { label: "A", text: "A display for public information and advertising" },
      { label: "B", text: "A personal monitor" },
      { label: "C", text: "A television" },
      { label: "D", text: "A projector" },
    ],
    answer: "A. A display for public information and advertising",
  },
  {
    id: 107,
    topic: "Storage Devices",
    question: "What is a NAS device?",
    options: [
      { label: "A", text: "Network-Attached Storage for sharing data over a network" },
      { label: "B", text: "A local hard drive" },
      { label: "C", text: "A USB flash drive" },
      { label: "D", text: "A memory card" },
    ],
    answer: "A. Network-Attached Storage for sharing data over a network",
  },
  {
    id: 108,
    topic: "Display Technologies",
    question: "What is the purpose of a curved display?",
    options: [
      { label: "A", text: "To provide immersive viewing experience" },
      { label: "B", text: "To display flat images" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To provide immersive viewing experience",
  },
  {
    id: 109,
    topic: "Printing Technologies",
    question: "What is the purpose of a wide-format printer?",
    options: [
      { label: "A", text: "To print large documents and posters" },
      { label: "B", text: "To print standard documents" },
      { label: "C", text: "To print photos" },
      { label: "D", text: "To print 3D objects" },
    ],
    answer: "A. To print large documents and posters",
  },
  {
    id: 110,
    topic: "Audio I/O",
    question: "What is the purpose of a preamplifier?",
    options: [
      { label: "A", text: "To amplify weak audio signals" },
      { label: "B", text: "To reduce audio signals" },
      { label: "C", text: "To store audio signals" },
      { label: "D", text: "To process audio signals" },
    ],
    answer: "A. To amplify weak audio signals",
  },
  {
    id: 111,
    topic: "Networking I/O",
    question: "What is a network bridge used for?",
    options: [
      { label: "A", text: "To connect and bridge network segments" },
      { label: "B", text: "To connect to the internet" },
      { label: "C", text: "To store network data" },
      { label: "D", text: "To process network data" },
    ],
    answer: "A. To connect and bridge network segments",
  },
  {
    id: 112,
    topic: "Ports & Interfaces",
    question: "What is the purpose of a parallel port?",
    options: [
      { label: "A", text: "To connect parallel devices like printers" },
      { label: "B", text: "To connect USB devices" },
      { label: "C", text: "To connect to networks" },
      { label: "D", text: "To power devices" },
    ],
    answer: "A. To connect parallel devices like printers",
  },
  {
    id: 113,
    topic: "Touch & Gesture",
    question: "What is the purpose of a force-touch trackpad?",
    options: [
      { label: "A", text: "To detect pressure levels for different inputs" },
      { label: "B", text: "To detect simple clicks" },
      { label: "C", text: "To detect movement" },
      { label: "D", text: "To detect gestures" },
    ],
    answer: "A. To detect pressure levels for different inputs",
  },
  {
    id: 114,
    topic: "Biometrics & Security",
    question: "What is the purpose of behavioral biometrics?",
    options: [
      { label: "A", text: "To authenticate based on behavior patterns" },
      { label: "B", text: "To authenticate based on physical characteristics" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To authenticate based on behavior patterns",
  },
  {
    id: 115,
    topic: "I/O Processing",
    question: "What is the purpose of a serial port?",
    options: [
      { label: "A", text: "To transmit data one bit at a time" },
      { label: "B", text: "To transmit data in parallel" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To transmit data one bit at a time",
  },
  {
    id: 116,
    topic: "Virtual I/O",
    question: "What is the purpose of a virtual monitor?",
    options: [
      { label: "A", text: "To display virtual machine output" },
      { label: "B", text: "To display physical output" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To display virtual machine output",
  },
  {
    id: 117,
    topic: "Accessibility I/O",
    question: "What is the purpose of a switch interface?",
    options: [
      { label: "A", text: "To help users with disabilities access devices" },
      { label: "B", text: "To switch between devices" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To help users with disabilities access devices",
  },
  {
    id: 118,
    topic: "Emerging I/O",
    question: "What is the purpose of a biometric wearable?",
    options: [
      { label: "A", text: "To monitor biometric data and provide I/O" },
      { label: "B", text: "To only display time" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To process data" },
    ],
    answer: "A. To monitor biometric data and provide I/O",
  },
  {
    id: 119,
    topic: "I/O Basics",
    question: "What is the difference between an I/O device and a peripheral?",
    options: [
      { label: "A", text: "I/O devices are a subset of peripherals" },
      { label: "B", text: "Peripherals are a subset of I/O devices" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is related" },
    ],
    answer: "A. I/O devices are a subset of peripherals",
  },
  {
    id: 120,
    topic: "Display Technologies",
    question: "What is the future of display technology?",
    options: [
      { label: "A", text: "MicroLED, foldable displays, and holographic displays" },
      { label: "B", text: "Only LCD technology" },
      { label: "C", text: "Only CRT technology" },
      { label: "D", text: "No advancement expected" },
    ],
    answer: "A. MicroLED, foldable displays, and holographic displays",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What are input and output devices?",
    answer:
      "Input devices send data to a computer (keyboard, mouse, scanner), while output devices receive data from a computer (monitor, printer, speakers). Together, they allow users to interact with computer systems.",
  },
  {
    question: "What is the difference between input and output devices?",
    answer:
      "Input devices allow users to send data to the computer, while output devices present data from the computer to the user. Input devices include keyboards and mice, while output devices include monitors and printers.",
  },
  {
    question: "What are storage devices?",
    answer:
      "Storage devices are used to store data permanently or temporarily. Examples include hard drives (HDD), solid-state drives (SSD), USB flash drives, memory cards, and cloud storage.",
  },
  {
    question: "What are the latest trends in I/O devices?",
    answer:
      "Current trends include wireless connectivity, touch and gesture controls, biometric authentication, VR/AR headsets, smart wearables, AI-powered I/O devices, and voice-controlled interfaces.",
  },
  {
    question: "What is the difference between USB 2.0 and USB 3.0?",
    answer:
      "USB 3.0 is significantly faster (up to 5 Gbps) than USB 2.0 (up to 480 Mbps), supports more power delivery, and has a different connector design with additional pins for higher data transfer rates.",
  },
  {
    question: "How do I choose the right I/O devices?",
    answer:
      "Consider your specific needs: for productivity, choose a comfortable keyboard and mouse; for creative work, consider a graphics tablet and high-resolution monitor; for gaming, look for high-refresh-rate displays and responsive peripherals.",
  },
];

// ========================== COMPONENT ==========================
export default function IOMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/input-output-devices",
        "url": "https://CodeSkipper.in/mcq/input-output-devices",
        "name": "Input & Output Devices Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Input and Output Devices, covering I/O basics, storage, display technologies, printing, and more.",
        "about": { "@type": "Thing", "name": "Input & Output Devices MCQ" },
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
              "name": "Input & Output Devices",
              "item": "https://CodeSkipper.in/mcq/input-output-devices",
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
        "@id": "https://CodeSkipper.in/mcq/input-output-devices#course",
        "name": "Input & Output Devices MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Input and Output Devices exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Input & Output Devices" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/input-output-devices#faq",
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
        <title>Input & Output Devices MCQs 2026 | 120+ Questions | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Input and Output Devices multiple-choice questions with answers. Covers I/O basics, storage devices, display technologies, printing, and more. Updated for 2026 exams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Input Devices, Output Devices, I/O, Storage Devices, Display, Printer, Scanner, MCQs, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/io-device" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/io-device" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/io-device" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/io-device" />
        <meta property="og:title" content="Input & Output Devices MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Input and Output Devices multiple-choice questions covering I/O basics, storage, display technologies, printing, and more."
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
        <meta name="twitter:title" content="Input & Output Devices MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Input and Output Devices multiple-choice questions covering I/O basics, storage, display technologies, printing, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🖥️ 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Input & Output Devices <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 max-w-2xl mb-6">
              Master Input and Output Devices with 120+ curated MCQs covering I/O basics,
              storage devices, display technologies, printing, and more. Perfect for computer
              fundamentals exams and technical interviews.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">16 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Tech Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore I/O Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-green-600 bg-green-50 text-green-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50/50"
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
                <strong className="text-green-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-green-600 hover:text-green-800 font-medium"
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
            Input & Output Devices MCQs
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
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm font-bold">
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
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-green-600 hover:text-green-800 bg-green-50 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">
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
                className="mt-3 text-green-600 hover:text-green-800 font-medium"
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

      </main>
    </CourseLayout>
  );
}