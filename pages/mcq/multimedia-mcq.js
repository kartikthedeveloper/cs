import CourseLayout from "@/components/layouts/CourseLayout";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

// ========================== MCQs DATA (120+ Unique) ==========================

const questionsData = [
  // ----- Multimedia Basics (6) -----
  {
    id: 1,
    topic: "Multimedia Basics",
    question: "What is multimedia?",
    options: [
      { label: "A", text: "Integration of multiple forms of media" },
      { label: "B", text: "Single form of media" },
      { label: "C", text: "Only text and images" },
      { label: "D", text: "Only audio and video" },
    ],
    answer: "A. Integration of multiple forms of media",
  },
  {
    id: 2,
    topic: "Multimedia Basics",
    question: "What are the five main elements of multimedia?",
    options: [
      { label: "A", text: "Text, Graphics, Audio, Video, Animation" },
      { label: "B", text: "Text, Images, Sound, Movies, Games" },
      { label: "C", text: "Words, Pictures, Music, Film, Motion" },
      { label: "D", text: "Data, Visuals, Audio, Clips, Movement" },
    ],
    answer: "A. Text, Graphics, Audio, Video, Animation",
  },
  {
    id: 3,
    topic: "Multimedia Basics",
    question: "What is the difference between linear and non-linear multimedia?",
    options: [
      { label: "A", text: "Linear has no interactivity, non-linear allows user interaction" },
      { label: "B", text: "Non-linear has no interactivity, linear allows user interaction" },
      { label: "C", text: "Both are interactive" },
      { label: "D", text: "Both are non-interactive" },
    ],
    answer: "A. Linear has no interactivity, non-linear allows user interaction",
  },
  {
    id: 4,
    topic: "Multimedia Basics",
    question: "Which of the following is an example of non-linear multimedia?",
    options: [
      { label: "A", text: "A movie" },
      { label: "B", text: "A video game" },
      { label: "C", text: "A television show" },
      { label: "D", text: "A recorded lecture" },
    ],
    answer: "B. A video game",
  },
  {
    id: 5,
    topic: "Multimedia Basics",
    question: "What is hypermedia?",
    options: [
      { label: "A", text: "Multimedia with hyperlinks for navigation" },
      { label: "B", text: "Media without links" },
      { label: "C", text: "Only text-based media" },
      { label: "D", text: "Only image-based media" },
    ],
    answer: "A. Multimedia with hyperlinks for navigation",
  },
  {
    id: 6,
    topic: "Multimedia Basics",
    question: "What is the role of authoring tools in multimedia?",
    options: [
      { label: "A", text: "To create and organize multimedia content" },
      { label: "B", text: "To play multimedia content" },
      { label: "C", text: "To compress multimedia content" },
      { label: "D", text: "To convert multimedia formats" },
    ],
    answer: "A. To create and organize multimedia content",
  },

  // ----- Text & Typography (6) -----
  {
    id: 7,
    topic: "Text & Typography",
    question: "What is the difference between a serif and sans-serif font?",
    options: [
      { label: "A", text: "Serif has decorative strokes, sans-serif does not" },
      { label: "B", text: "Sans-serif has decorative strokes, serif does not" },
      { label: "C", text: "Both have decorative strokes" },
      { label: "D", text: "Neither has decorative strokes" },
    ],
    answer: "A. Serif has decorative strokes, sans-serif does not",
  },
  {
    id: 8,
    topic: "Text & Typography",
    question: "What is kerning in typography?",
    options: [
      { label: "A", text: "Adjusting space between individual letters" },
      { label: "B", text: "Adjusting space between lines" },
      { label: "C", text: "Adjusting space between paragraphs" },
      { label: "D", text: "Adjusting font size" },
    ],
    answer: "A. Adjusting space between individual letters",
  },
  {
    id: 9,
    topic: "Text & Typography",
    question: "What is leading in typography?",
    options: [
      { label: "A", text: "Space between lines of text" },
      { label: "B", text: "Space between letters" },
      { label: "C", text: "Space between words" },
      { label: "D", text: "Space between paragraphs" },
    ],
    answer: "A. Space between lines of text",
  },
  {
    id: 10,
    topic: "Text & Typography",
    question: "What is the difference between a typeface and a font?",
    options: [
      { label: "A", text: "Typeface is the design, font is the specific implementation" },
      { label: "B", text: "Font is the design, typeface is the implementation" },
      { label: "C", text: "Both mean the same thing" },
      { label: "D", text: "Neither is used in modern typography" },
    ],
    answer: "A. Typeface is the design, font is the specific implementation",
  },
  {
    id: 11,
    topic: "Text & Typography",
    question: "What is anti-aliasing in text rendering?",
    options: [
      { label: "A", text: "Smoothing jagged edges of characters" },
      { label: "B", text: "Adding jagged edges to characters" },
      { label: "C", text: "Removing colors from text" },
      { label: "D", text: "Making text bold" },
    ],
    answer: "A. Smoothing jagged edges of characters",
  },
  {
    id: 12,
    topic: "Text & Typography",
    question: "What is the purpose of text compression in multimedia?",
    options: [
      { label: "A", text: "To reduce file size" },
      { label: "B", text: "To improve readability" },
      { label: "C", text: "To add effects to text" },
      { label: "D", text: "To change font styles" },
    ],
    answer: "A. To reduce file size",
  },

  // ----- Graphics & Images (6) -----
  {
    id: 13,
    topic: "Graphics & Images",
    question: "What is the difference between raster and vector graphics?",
    options: [
      { label: "A", text: "Raster uses pixels, vector uses mathematical equations" },
      { label: "B", text: "Vector uses pixels, raster uses mathematical equations" },
      { label: "C", text: "Both use pixels" },
      { label: "D", text: "Both use mathematical equations" },
    ],
    answer: "A. Raster uses pixels, vector uses mathematical equations",
  },
  {
    id: 14,
    topic: "Graphics & Images",
    question: "What is resolution in digital images?",
    options: [
      { label: "A", text: "The number of pixels in an image" },
      { label: "B", text: "The size of an image file" },
      { label: "C", text: "The color depth of an image" },
      { label: "D", text: "The compression ratio of an image" },
    ],
    answer: "A. The number of pixels in an image",
  },
  {
    id: 15,
    topic: "Graphics & Images",
    question: "What is the purpose of image compression?",
    options: [
      { label: "A", text: "To reduce file size" },
      { label: "B", text: "To increase image quality" },
      { label: "C", text: "To add special effects" },
      { label: "D", text: "To change image colors" },
    ],
    answer: "A. To reduce file size",
  },
  {
    id: 16,
    topic: "Graphics & Images",
    question: "What is the difference between lossy and lossless compression?",
    options: [
      { label: "A", text: "Lossy loses some data, lossless preserves all data" },
      { label: "B", text: "Lossless loses some data, lossy preserves all data" },
      { label: "C", text: "Both lose data" },
      { label: "D", text: "Both preserve all data" },
    ],
    answer: "A. Lossy loses some data, lossless preserves all data",
  },
  {
    id: 17,
    topic: "Graphics & Images",
    question: "Which file format supports transparency?",
    options: [
      { label: "A", text: "JPEG" },
      { label: "B", text: "PNG" },
      { label: "C", text: "BMP" },
      { label: "D", text: "TIFF" },
    ],
    answer: "B. PNG",
  },
  {
    id: 18,
    topic: "Graphics & Images",
    question: "What is color depth?",
    options: [
      { label: "A", text: "The number of bits used to represent color in an image" },
      { label: "B", text: "The size of the image file" },
      { label: "C", text: "The resolution of the image" },
      { label: "D", text: "The brightness of the image" },
    ],
    answer: "A. The number of bits used to represent color in an image",
  },

  // ----- Color Theory (6) -----
  {
    id: 19,
    topic: "Color Theory",
    question: "What are the primary colors in the RGB color model?",
    options: [
      { label: "A", text: "Red, Green, Blue" },
      { label: "B", text: "Red, Yellow, Blue" },
      { label: "C", text: "Cyan, Magenta, Yellow" },
      { label: "D", text: "Red, Green, Yellow" },
    ],
    answer: "A. Red, Green, Blue",
  },
  {
    id: 20,
    topic: "Color Theory",
    question: "What are the primary colors in the CMYK color model?",
    options: [
      { label: "A", text: "Cyan, Magenta, Yellow, Black" },
      { label: "B", text: "Red, Green, Blue" },
      { label: "C", text: "Red, Yellow, Blue" },
      { label: "D", text: "Cyan, Red, Yellow, Green" },
    ],
    answer: "A. Cyan, Magenta, Yellow, Black",
  },
  {
    id: 21,
    topic: "Color Theory",
    question: "What is the difference between RGB and CMYK?",
    options: [
      { label: "A", text: "RGB is for digital displays, CMYK is for printing" },
      { label: "B", text: "CMYK is for digital displays, RGB is for printing" },
      { label: "C", text: "Both are for digital displays" },
      { label: "D", text: "Both are for printing" },
    ],
    answer: "A. RGB is for digital displays, CMYK is for printing",
  },
  {
    id: 22,
    topic: "Color Theory",
    question: "What is hue in color theory?",
    options: [
      { label: "A", text: "The actual color" },
      { label: "B", text: "The brightness of the color" },
      { label: "C", text: "The purity of the color" },
      { label: "D", text: "The darkness of the color" },
    ],
    answer: "A. The actual color",
  },
  {
    id: 23,
    topic: "Color Theory",
    question: "What is saturation in color theory?",
    options: [
      { label: "A", text: "The intensity or purity of the color" },
      { label: "B", text: "The actual color" },
      { label: "C", text: "The brightness of the color" },
      { label: "D", text: "The temperature of the color" },
    ],
    answer: "A. The intensity or purity of the color",
  },
  {
    id: 24,
    topic: "Color Theory",
    question: "What is the purpose of the HSB color model?",
    options: [
      { label: "A", text: "To describe colors using Hue, Saturation, and Brightness" },
      { label: "B", text: "To describe colors using Red, Green, Blue" },
      { label: "C", text: "To describe colors using Cyan, Magenta, Yellow" },
      { label: "D", text: "To describe colors using values and intensities" },
    ],
    answer: "A. To describe colors using Hue, Saturation, and Brightness",
  },

  // ----- Audio (6) -----
  {
    id: 25,
    topic: "Audio",
    question: "What is the difference between analog and digital audio?",
    options: [
      { label: "A", text: "Analog is continuous, digital is discrete" },
      { label: "B", text: "Digital is continuous, analog is discrete" },
      { label: "C", text: "Both are continuous" },
      { label: "D", text: "Both are discrete" },
    ],
    answer: "A. Analog is continuous, digital is discrete",
  },
  {
    id: 26,
    topic: "Audio",
    question: "What is sampling rate in digital audio?",
    options: [
      { label: "A", text: "The number of samples per second" },
      { label: "B", text: "The bit depth of the audio" },
      { label: "C", text: "The volume of the audio" },
      { label: "D", text: "The duration of the audio" },
    ],
    answer: "A. The number of samples per second",
  },
  {
    id: 27,
    topic: "Audio",
    question: "What is bit depth in digital audio?",
    options: [
      { label: "A", text: "The number of bits per sample" },
      { label: "B", text: "The number of samples per second" },
      { label: "C", text: "The compression ratio" },
      { label: "D", text: "The file size" },
    ],
    answer: "A. The number of bits per sample",
  },
  {
    id: 28,
    topic: "Audio",
    question: "What is the Nyquist theorem in audio sampling?",
    options: [
      { label: "A", text: "Sampling rate must be at least twice the highest frequency" },
      { label: "B", text: "Sampling rate must be half the highest frequency" },
      { label: "C", text: "Sampling rate must equal the highest frequency" },
      { label: "D", text: "Sampling rate has no relation to frequency" },
    ],
    answer: "A. Sampling rate must be at least twice the highest frequency",
  },
  {
    id: 29,
    topic: "Audio",
    question: "What is the purpose of audio compression?",
    options: [
      { label: "A", text: "To reduce file size" },
      { label: "B", text: "To improve audio quality" },
      { label: "C", text: "To add effects" },
      { label: "D", text: "To convert formats" },
    ],
    answer: "A. To reduce file size",
  },
  {
    id: 30,
    topic: "Audio",
    question: "Which audio format is known for lossless compression?",
    options: [
      { label: "A", text: "MP3" },
      { label: "B", text: "FLAC" },
      { label: "C", text: "AAC" },
      { label: "D", text: "WMA" },
    ],
    answer: "B. FLAC",
  },

  // ----- Video (6) -----
  {
    id: 31,
    topic: "Video",
    question: "What is a video codec?",
    options: [
      { label: "A", text: "A device or software that compresses and decompresses video" },
      { label: "B", text: "A video player" },
      { label: "C", text: "A video editor" },
      { label: "D", text: "A video format" },
    ],
    answer: "A. A device or software that compresses and decompresses video",
  },
  {
    id: 32,
    topic: "Video",
    question: "What is frame rate in video?",
    options: [
      { label: "A", text: "The number of frames per second" },
      { label: "B", text: "The resolution of the video" },
      { label: "C", text: "The bit rate of the video" },
      { label: "D", text: "The duration of the video" },
    ],
    answer: "A. The number of frames per second",
  },
  {
    id: 33,
    topic: "Video",
    question: "What is the difference between interlaced and progressive video?",
    options: [
      { label: "A", text: "Interlaced scans alternating lines, progressive scans all lines" },
      { label: "B", text: "Progressive scans alternating lines, interlaced scans all lines" },
      { label: "C", text: "Both scan alternating lines" },
      { label: "D", text: "Both scan all lines" },
    ],
    answer: "A. Interlaced scans alternating lines, progressive scans all lines",
  },
  {
    id: 34,
    topic: "Video",
    question: "What is the purpose of video compression?",
    options: [
      { label: "A", text: "To reduce file size and bandwidth requirements" },
      { label: "B", text: "To increase video quality" },
      { label: "C", text: "To add special effects" },
      { label: "D", text: "To change video resolution" },
    ],
    answer: "A. To reduce file size and bandwidth requirements",
  },
  {
    id: 35,
    topic: "Video",
    question: "Which video format is commonly used for streaming?",
    options: [
      { label: "A", text: "MP4" },
      { label: "B", text: "AVI" },
      { label: "C", text: "MOV" },
      { label: "D", text: "MKV" },
    ],
    answer: "A. MP4",
  },
  {
    id: 36,
    topic: "Video",
    question: "What is the difference between H.264 and H.265?",
    options: [
      { label: "A", text: "H.265 provides better compression than H.264" },
      { label: "B", text: "H.264 provides better compression than H.265" },
      { label: "C", text: "Both provide the same compression" },
      { label: "D", text: "Neither is used for video compression" },
    ],
    answer: "A. H.265 provides better compression than H.264",
  },

  // ----- Animation (6) -----
  {
    id: 37,
    topic: "Animation",
    question: "What is the difference between 2D and 3D animation?",
    options: [
      { label: "A", text: "2D is flat, 3D has depth" },
      { label: "B", text: "3D is flat, 2D has depth" },
      { label: "C", text: "Both are flat" },
      { label: "D", text: "Both have depth" },
    ],
    answer: "A. 2D is flat, 3D has depth",
  },
  {
    id: 38,
    topic: "Animation",
    question: "What is the frame rate for smooth animation?",
    options: [
      { label: "A", text: "24 frames per second" },
      { label: "B", text: "12 frames per second" },
      { label: "C", text: "30 frames per second" },
      { label: "D", text: "60 frames per second" },
    ],
    answer: "A. 24 frames per second (film standard) or 60 fps (digital)",
  },
  {
    id: 39,
    topic: "Animation",
    question: "What is tweening in animation?",
    options: [
      { label: "A", text: "Creating intermediate frames between keyframes" },
      { label: "B", text: "Creating keyframes" },
      { label: "C", text: "Removing frames" },
      { label: "D", text: "Reversing frames" },
    ],
    answer: "A. Creating intermediate frames between keyframes",
  },
  {
    id: 40,
    topic: "Animation",
    question: "What is the difference between stop motion and computer animation?",
    options: [
      { label: "A", text: "Stop motion uses physical objects, computer animation uses digital models" },
      { label: "B", text: "Computer animation uses physical objects, stop motion uses digital models" },
      { label: "C", text: "Both use physical objects" },
      { label: "D", text: "Both use digital models" },
    ],
    answer: "A. Stop motion uses physical objects, computer animation uses digital models",
  },
  {
    id: 41,
    topic: "Animation",
    question: "What is keyframe animation?",
    options: [
      { label: "A", text: "Animation where important frames are defined and intermediate frames are generated" },
      { label: "B", text: "Animation where every frame is drawn manually" },
      { label: "C", text: "Animation without any frames" },
      { label: "D", text: "Animation with only one frame" },
    ],
    answer: "A. Animation where important frames are defined and intermediate frames are generated",
  },
  {
    id: 42,
    topic: "Animation",
    question: "What is the purpose of a storyboard in animation?",
    options: [
      { label: "A", text: "To plan and visualize the animation sequence" },
      { label: "B", text: "To render the final animation" },
      { label: "C", text: "To add sound effects" },
      { label: "D", text: "To compress the animation" },
    ],
    answer: "A. To plan and visualize the animation sequence",
  },

  // ----- Multimedia File Formats (6) -----
  {
    id: 43,
    topic: "File Formats",
    question: "What is the difference between MP3 and WAV?",
    options: [
      { label: "A", text: "MP3 is compressed, WAV is uncompressed" },
      { label: "B", text: "WAV is compressed, MP3 is uncompressed" },
      { label: "C", text: "Both are compressed" },
      { label: "D", text: "Both are uncompressed" },
    ],
    answer: "A. MP3 is compressed, WAV is uncompressed",
  },
  {
    id: 44,
    topic: "File Formats",
    question: "Which format is commonly used for animated images?",
    options: [
      { label: "A", text: "GIF" },
      { label: "B", text: "JPEG" },
      { label: "C", text: "PNG" },
      { label: "D", text: "BMP" },
    ],
    answer: "A. GIF",
  },
  {
    id: 45,
    topic: "File Formats",
    question: "What is the purpose of SVG files?",
    options: [
      { label: "A", text: "To store vector graphics" },
      { label: "B", text: "To store raster graphics" },
      { label: "C", text: "To store audio" },
      { label: "D", text: "To store video" },
    ],
    answer: "A. To store vector graphics",
  },
  {
    id: 46,
    topic: "File Formats",
    question: "What is the difference between AVI and MP4?",
    options: [
      { label: "A", text: "AVI is older, MP4 is newer with better compression" },
      { label: "B", text: "MP4 is older, AVI is newer" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "AVI is for audio only" },
    ],
    answer: "A. AVI is older, MP4 is newer with better compression",
  },
  {
    id: 47,
    topic: "File Formats",
    question: "What is the purpose of RAW image format?",
    options: [
      { label: "A", text: "To store uncompressed, unprocessed image data" },
      { label: "B", text: "To store compressed images" },
      { label: "C", text: "To store vector graphics" },
      { label: "D", text: "To store animations" },
    ],
    answer: "A. To store uncompressed, unprocessed image data",
  },
  {
    id: 48,
    topic: "File Formats",
    question: "What is the difference between PDF and PostScript?",
    options: [
      { label: "A", text: "PDF is for final documents, PostScript is for printing" },
      { label: "B", text: "PostScript is for final documents, PDF is for printing" },
      { label: "C", text: "Both are for printing only" },
      { label: "D", text: "Both are for document viewing only" },
    ],
    answer: "A. PDF is for final documents, PostScript is for printing",
  },

  // ----- Compression Techniques (6) -----
  {
    id: 49,
    topic: "Compression",
    question: "What is the purpose of multimedia compression?",
    options: [
      { label: "A", text: "To reduce storage and transmission requirements" },
      { label: "B", text: "To improve quality" },
      { label: "C", text: "To add features" },
      { label: "D", text: "To convert formats" },
    ],
    answer: "A. To reduce storage and transmission requirements",
  },
  {
    id: 50,
    topic: "Compression",
    question: "What is the difference between lossy and lossless compression?",
    options: [
      { label: "A", text: "Lossy loses some data, lossless preserves all data" },
      { label: "B", text: "Lossless loses some data, lossy preserves all data" },
      { label: "C", text: "Both lose data" },
      { label: "D", text: "Both preserve all data" },
    ],
    answer: "A. Lossy loses some data, lossless preserves all data",
  },
  {
    id: 51,
    topic: "Compression",
    question: "What is entropy coding in compression?",
    options: [
      { label: "A", text: "Encoding based on probability of symbols" },
      { label: "B", text: "Encoding based on pixel values" },
      { label: "C", text: "Encoding based on audio frequency" },
      { label: "D", text: "Encoding based on video frames" },
    ],
    answer: "A. Encoding based on probability of symbols",
  },
  {
    id: 52,
    topic: "Compression",
    question: "What is the difference between intra-frame and inter-frame compression?",
    options: [
      { label: "A", text: "Intra compresses within a frame, inter compresses between frames" },
      { label: "B", text: "Inter compresses within a frame, intra compresses between frames" },
      { label: "C", text: "Both compress within frames" },
      { label: "D", text: "Both compress between frames" },
    ],
    answer: "A. Intra compresses within a frame, inter compresses between frames",
  },
  {
    id: 53,
    topic: "Compression",
    question: "What is the purpose of quantization in compression?",
    options: [
      { label: "A", text: "To reduce precision of values to achieve compression" },
      { label: "B", text: "To increase precision of values" },
      { label: "C", text: "To add noise to the data" },
      { label: "D", text: "To remove data entirely" },
    ],
    answer: "A. To reduce precision of values to achieve compression",
  },
  {
    id: 54,
    topic: "Compression",
    question: "What is the difference between JPEG and JPEG 2000?",
    options: [
      { label: "A", text: "JPEG 2000 provides better compression and supports lossless" },
      { label: "B", text: "JPEG provides better compression than JPEG 2000" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "JPEG 2000 only supports lossy compression" },
    ],
    answer: "A. JPEG 2000 provides better compression and supports lossless",
  },

  // ----- Multimedia Applications (6) -----
  {
    id: 55,
    topic: "Applications",
    question: "What is the purpose of multimedia in education?",
    options: [
      { label: "A", text: "To enhance learning through multiple forms of media" },
      { label: "B", text: "To replace teachers" },
      { label: "C", text: "To make learning harder" },
      { label: "D", text: "To reduce classroom time" },
    ],
    answer: "A. To enhance learning through multiple forms of media",
  },
  {
    id: 56,
    topic: "Applications",
    question: "What is the role of multimedia in entertainment?",
    options: [
      { label: "A", text: "To provide engaging experiences through various media" },
      { label: "B", text: "To only provide text-based content" },
      { label: "C", text: "To replace all other forms of entertainment" },
      { label: "D", text: "To reduce user engagement" },
    ],
    answer: "A. To provide engaging experiences through various media",
  },
  {
    id: 57,
    topic: "Applications",
    question: "What is the purpose of multimedia in advertising?",
    options: [
      { label: "A", text: "To communicate messages effectively through multiple media" },
      { label: "B", text: "To only use text" },
      { label: "C", text: "To reduce effectiveness" },
      { label: "D", text: "To increase costs" },
    ],
    answer: "A. To communicate messages effectively through multiple media",
  },
  {
    id: 58,
    topic: "Applications",
    question: "What is the role of multimedia in healthcare?",
    options: [
      { label: "A", text: "To assist in diagnosis, education, and treatment" },
      { label: "B", text: "To replace doctors" },
      { label: "C", text: "To make healthcare more expensive" },
      { label: "D", text: "To reduce patient care" },
    ],
    answer: "A. To assist in diagnosis, education, and treatment",
  },
  {
    id: 59,
    topic: "Applications",
    question: "What is the purpose of multimedia in business?",
    options: [
      { label: "A", text: "To enhance communication and presentations" },
      { label: "B", text: "To replace all business activities" },
      { label: "C", text: "To make business less efficient" },
      { label: "D", text: "To increase costs" },
    ],
    answer: "A. To enhance communication and presentations",
  },
  {
    id: 60,
    topic: "Applications",
    question: "What is the role of multimedia in e-commerce?",
    options: [
      { label: "A", text: "To showcase products and enhance user experience" },
      { label: "B", text: "To only use text descriptions" },
      { label: "C", text: "To reduce sales" },
      { label: "D", text: "To increase costs" },
    ],
    answer: "A. To showcase products and enhance user experience",
  },

  // ----- Web Multimedia (6) -----
  {
    id: 61,
    topic: "Web Multimedia",
    question: "What is the purpose of HTML5 video?",
    options: [
      { label: "A", text: "To embed video without plugins" },
      { label: "B", text: "To only play audio" },
      { label: "C", text: "To replace all web content" },
      { label: "D", text: "To only show images" },
    ],
    answer: "A. To embed video without plugins",
  },
  {
    id: 62,
    topic: "Web Multimedia",
    question: "What is the purpose of the <canvas> element?",
    options: [
      { label: "A", text: "To draw graphics with JavaScript" },
      { label: "B", text: "To play video" },
      { label: "C", text: "To play audio" },
      { label: "D", text: "To display text" },
    ],
    answer: "A. To draw graphics with JavaScript",
  },
  {
    id: 63,
    topic: "Web Multimedia",
    question: "What is the purpose of the <svg> element?",
    options: [
      { label: "A", text: "To display vector graphics" },
      { label: "B", text: "To display raster graphics" },
      { label: "C", text: "To play video" },
      { label: "D", text: "To play audio" },
    ],
    answer: "A. To display vector graphics",
  },
  {
    id: 64,
    topic: "Web Multimedia",
    question: "What is responsive design in web multimedia?",
    options: [
      { label: "A", text: "Design that adapts to different screen sizes" },
      { label: "B", text: "Design that only works on one screen size" },
      { label: "C", text: "Design that ignores screen sizes" },
      { label: "D", text: "Design that only works on mobile" },
    ],
    answer: "A. Design that adapts to different screen sizes",
  },
  {
    id: 65,
    topic: "Web Multimedia",
    question: "What is the purpose of lazy loading in web multimedia?",
    options: [
      { label: "A", text: "To load content only when needed to improve performance" },
      { label: "B", text: "To load all content immediately" },
      { label: "C", text: "To never load content" },
      { label: "D", text: "To load content randomly" },
    ],
    answer: "A. To load content only when needed to improve performance",
  },
  {
    id: 66,
    topic: "Web Multimedia",
    question: "What is the difference between CSS animations and JavaScript animations?",
    options: [
      { label: "A", text: "CSS animations are hardware accelerated, JavaScript gives more control" },
      { label: "B", text: "JavaScript animations are hardware accelerated, CSS gives more control" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is hardware accelerated" },
    ],
    answer: "A. CSS animations are hardware accelerated, JavaScript gives more control",
  },

  // ----- Multimedia Hardware (6) -----
  {
    id: 67,
    topic: "Hardware",
    question: "What is the purpose of a graphics card?",
    options: [
      { label: "A", text: "To render and display graphics" },
      { label: "B", text: "To process audio" },
      { label: "C", text: "To store data" },
      { label: "D", text: "To connect to the internet" },
    ],
    answer: "A. To render and display graphics",
  },
  {
    id: 68,
    topic: "Hardware",
    question: "What is the purpose of a sound card?",
    options: [
      { label: "A", text: "To process and output audio" },
      { label: "B", text: "To render graphics" },
      { label: "C", text: "To store files" },
      { label: "D", text: "To connect to networks" },
    ],
    answer: "A. To process and output audio",
  },
  {
    id: 69,
    topic: "Hardware",
    question: "What is the difference between a monitor and a display?",
    options: [
      { label: "A", text: "Monitor is the entire unit, display is the screen" },
      { label: "B", text: "Display is the entire unit, monitor is the screen" },
      { label: "C", text: "Both mean the same thing" },
      { label: "D", text: "Neither is used in modern technology" },
    ],
    answer: "A. Monitor is the entire unit, display is the screen",
  },
  {
    id: 70,
    topic: "Hardware",
    question: "What is the purpose of a projector?",
    options: [
      { label: "A", text: "To display images on a large surface" },
      { label: "B", text: "To print images" },
      { label: "C", text: "To scan images" },
      { label: "D", text: "To store images" },
    ],
    answer: "A. To display images on a large surface",
  },
  {
    id: 71,
    topic: "Hardware",
    question: "What is the purpose of a microphone?",
    options: [
      { label: "A", text: "To capture audio" },
      { label: "B", text: "To play audio" },
      { label: "C", text: "To capture video" },
      { label: "D", text: "To display images" },
    ],
    answer: "A. To capture audio",
  },
  {
    id: 72,
    topic: "Hardware",
    question: "What is the purpose of a camera in multimedia?",
    options: [
      { label: "A", text: "To capture still images and video" },
      { label: "B", text: "To only capture audio" },
      { label: "C", text: "To only display images" },
      { label: "D", text: "To store files" },
    ],
    answer: "A. To capture still images and video",
  },

  // ----- Multimedia Authoring (6) -----
  {
    id: 73,
    topic: "Authoring",
    question: "What is multimedia authoring?",
    options: [
      { label: "A", text: "The process of creating multimedia content" },
      { label: "B", text: "The process of playing multimedia content" },
      { label: "C", text: "The process of compressing multimedia content" },
      { label: "D", text: "The process of converting multimedia formats" },
    ],
    answer: "A. The process of creating multimedia content",
  },
  {
    id: 74,
    topic: "Authoring",
    question: "What is the difference between authoring tools and programming?",
    options: [
      { label: "A", text: "Authoring tools provide visual interface, programming requires coding" },
      { label: "B", text: "Programming provides visual interface, authoring requires coding" },
      { label: "C", text: "Both require coding" },
      { label: "D", text: "Both provide visual interface" },
    ],
    answer: "A. Authoring tools provide visual interface, programming requires coding",
  },
  {
    id: 75,
    topic: "Authoring",
    question: "What is the purpose of Adobe Flash (now obsolete)?",
    options: [
      { label: "A", text: "To create animated web content" },
      { label: "B", text: "To edit audio" },
      { label: "C", text: "To edit video" },
      { label: "D", text: "To compress images" },
    ],
    answer: "A. To create animated web content",
  },
  {
    id: 76,
    topic: "Authoring",
    question: "What is the purpose of PowerPoint in multimedia?",
    options: [
      { label: "A", text: "To create presentations with multimedia elements" },
      { label: "B", text: "To edit video" },
      { label: "C", text: "To edit audio" },
      { label: "D", text: "To compress images" },
    ],
    answer: "A. To create presentations with multimedia elements",
  },
  {
    id: 77,
    topic: "Authoring",
    question: "What is the purpose of Adobe Premiere?",
    options: [
      { label: "A", text: "To edit video" },
      { label: "B", text: "To edit audio" },
      { label: "C", text: "To create animations" },
      { label: "D", text: "To create presentations" },
    ],
    answer: "A. To edit video",
  },
  {
    id: 78,
    topic: "Authoring",
    question: "What is the purpose of Adobe Photoshop?",
    options: [
      { label: "A", text: "To edit and manipulate images" },
      { label: "B", text: "To edit video" },
      { label: "C", text: "To edit audio" },
      { label: "D", text: "To create animations" },
    ],
    answer: "A. To edit and manipulate images",
  },

  // ----- Digital Audio Processing (6) -----
  {
    id: 79,
    topic: "Audio Processing",
    question: "What is the purpose of equalization in audio?",
    options: [
      { label: "A", text: "To adjust frequency balance" },
      { label: "B", text: "To adjust volume" },
      { label: "C", text: "To add effects" },
      { label: "D", text: "To remove noise" },
    ],
    answer: "A. To adjust frequency balance",
  },
  {
    id: 80,
    topic: "Audio Processing",
    question: "What is the difference between reverb and delay?",
    options: [
      { label: "A", text: "Reverb simulates spaces, delay repeats the sound" },
      { label: "B", text: "Delay simulates spaces, reverb repeats the sound" },
      { label: "C", text: "Both simulate spaces" },
      { label: "D", text: "Both repeat sound" },
    ],
    answer: "A. Reverb simulates spaces, delay repeats the sound",
  },
  {
    id: 81,
    topic: "Audio Processing",
    question: "What is the purpose of noise reduction?",
    options: [
      { label: "A", text: "To remove unwanted sounds" },
      { label: "B", text: "To add unwanted sounds" },
      { label: "C", text: "To increase volume" },
      { label: "D", text: "To decrease volume" },
    ],
    answer: "A. To remove unwanted sounds",
  },
  {
    id: 82,
    topic: "Audio Processing",
    question: "What is the purpose of MIDI?",
    options: [
      { label: "A", text: "To transmit musical instrument data" },
      { label: "B", text: "To transmit audio files" },
      { label: "C", text: "To transmit video files" },
      { label: "D", text: "To transmit images" },
    ],
    answer: "A. To transmit musical instrument data",
  },
  {
    id: 83,
    topic: "Audio Processing",
    question: "What is the difference between MP3 and AAC?",
    options: [
      { label: "A", text: "AAC provides better quality at same bit rate" },
      { label: "B", text: "MP3 provides better quality at same bit rate" },
      { label: "C", text: "Both provide the same quality" },
      { label: "D", text: "Neither provides good quality" },
    ],
    answer: "A. AAC provides better quality at same bit rate",
  },
  {
    id: 84,
    topic: "Audio Processing",
    question: "What is the purpose of audio normalization?",
    options: [
      { label: "A", text: "To adjust audio to a consistent level" },
      { label: "B", text: "To add effects" },
      { label: "C", text: "To remove frequencies" },
      { label: "D", text: "To add frequencies" },
    ],
    answer: "A. To adjust audio to a consistent level",
  },

  // ----- Digital Video Processing (6) -----
  {
    id: 85,
    topic: "Video Processing",
    question: "What is the purpose of color grading in video?",
    options: [
      { label: "A", text: "To adjust colors for mood and aesthetics" },
      { label: "B", text: "To increase resolution" },
      { label: "C", text: "To reduce file size" },
      { label: "D", text: "To add text" },
    ],
    answer: "A. To adjust colors for mood and aesthetics",
  },
  {
    id: 86,
    topic: "Video Processing",
    question: "What is the difference between 24fps and 60fps?",
    options: [
      { label: "A", text: "24fps is film standard, 60fps is smoother" },
      { label: "B", text: "60fps is film standard, 24fps is smoother" },
      { label: "C", text: "Both have the same smoothness" },
      { label: "D", text: "Neither is used in modern video" },
    ],
    answer: "A. 24fps is film standard, 60fps is smoother",
  },
  {
    id: 87,
    topic: "Video Processing",
    question: "What is the purpose of chroma keying?",
    options: [
      { label: "A", text: "To replace a background color with another image" },
      { label: "B", text: "To change video resolution" },
      { label: "C", text: "To compress video" },
      { label: "D", text: "To add text" },
    ],
    answer: "A. To replace a background color with another image",
  },
  {
    id: 88,
    topic: "Video Processing",
    question: "What is the difference between HD and 4K?",
    options: [
      { label: "A", text: "4K has higher resolution than HD" },
      { label: "B", text: "HD has higher resolution than 4K" },
      { label: "C", text: "Both have the same resolution" },
      { label: "D", text: "Neither is used in modern video" },
    ],
    answer: "A. 4K has higher resolution than HD",
  },
  {
    id: 89,
    topic: "Video Processing",
    question: "What is the purpose of video stabilization?",
    options: [
      { label: "A", text: "To reduce camera shake in video" },
      { label: "B", text: "To increase camera shake" },
      { label: "C", text: "To change video speed" },
      { label: "D", text: "To change video colors" },
    ],
    answer: "A. To reduce camera shake in video",
  },
  {
    id: 90,
    topic: "Video Processing",
    question: "What is the difference between 8-bit and 10-bit video?",
    options: [
      { label: "A", text: "10-bit provides more color depth and smoother gradients" },
      { label: "B", text: "8-bit provides more color depth" },
      { label: "C", text: "Both provide the same color depth" },
      { label: "D", text: "Neither provides good color depth" },
    ],
    answer: "A. 10-bit provides more color depth and smoother gradients",
  },

  // ----- Multimedia Networking (6) -----
  {
    id: 91,
    topic: "Networking",
    question: "What is the purpose of streaming media?",
    options: [
      { label: "A", text: "To play media in real-time without downloading" },
      { label: "B", text: "To download media completely" },
      { label: "C", text: "To store media locally" },
      { label: "D", text: "To convert media formats" },
    ],
    answer: "A. To play media in real-time without downloading",
  },
  {
    id: 92,
    topic: "Networking",
    question: "What is the difference between streaming and downloading?",
    options: [
      { label: "A", text: "Streaming plays in real-time, downloading saves a copy" },
      { label: "B", text: "Downloading plays in real-time, streaming saves a copy" },
      { label: "C", text: "Both play in real-time" },
      { label: "D", text: "Both save copies" },
    ],
    answer: "A. Streaming plays in real-time, downloading saves a copy",
  },
  {
    id: 93,
    topic: "Networking",
    question: "What is the purpose of buffering in streaming?",
    options: [
      { label: "A", text: "To load data ahead to prevent interruptions" },
      { label: "B", text: "To load data at the same rate" },
      { label: "C", text: "To slow down playback" },
      { label: "D", text: "To speed up playback" },
    ],
    answer: "A. To load data ahead to prevent interruptions",
  },
  {
    id: 94,
    topic: "Networking",
    question: "What is the difference between bandwidth and latency?",
    options: [
      { label: "A", text: "Bandwidth is data capacity, latency is delay" },
      { label: "B", text: "Latency is data capacity, bandwidth is delay" },
      { label: "C", text: "Both measure capacity" },
      { label: "D", text: "Both measure delay" },
    ],
    answer: "A. Bandwidth is data capacity, latency is delay",
  },
  {
    id: 95,
    topic: "Networking",
    question: "What is the purpose of adaptive bitrate streaming?",
    options: [
      { label: "A", text: "To adjust video quality based on network conditions" },
      { label: "B", text: "To always use the highest quality" },
      { label: "C", text: "To always use the lowest quality" },
      { label: "D", text: "To use only audio" },
    ],
    answer: "A. To adjust video quality based on network conditions",
  },
  {
    id: 96,
    topic: "Networking",
    question: "What is the difference between HTTP and RTMP streaming?",
    options: [
      { label: "A", text: "RTMP is for low-latency streaming, HTTP is more universal" },
      { label: "B", text: "HTTP is for low-latency streaming, RTMP is more universal" },
      { label: "C", text: "Both are the same" },
      { label: "D", text: "Neither is used for streaming" },
    ],
    answer: "A. RTMP is for low-latency streaming, HTTP is more universal",
  },

  // ----- 3D Graphics & Modeling (6) -----
  {
    id: 97,
    topic: "3D Graphics",
    question: "What is 3D modeling?",
    options: [
      { label: "A", text: "Creating three-dimensional representations of objects" },
      { label: "B", text: "Creating two-dimensional images" },
      { label: "C", text: "Creating audio files" },
      { label: "D", text: "Creating video files" },
    ],
    answer: "A. Creating three-dimensional representations of objects",
  },
  {
    id: 98,
    topic: "3D Graphics",
    question: "What is the difference between wireframe and solid modeling?",
    options: [
      { label: "A", text: "Wireframe shows edges, solid shows filled surfaces" },
      { label: "B", text: "Solid shows edges, wireframe shows filled surfaces" },
      { label: "C", text: "Both show edges" },
      { label: "D", text: "Both show filled surfaces" },
    ],
    answer: "A. Wireframe shows edges, solid shows filled surfaces",
  },
  {
    id: 99,
    topic: "3D Graphics",
    question: "What is the purpose of texture mapping?",
    options: [
      { label: "A", text: "To apply images to 3D surfaces" },
      { label: "B", text: "To remove images from 3D surfaces" },
      { label: "C", text: "To change the shape of objects" },
      { label: "D", text: "To change the color of objects" },
    ],
    answer: "A. To apply images to 3D surfaces",
  },
  {
    id: 100,
    topic: "3D Graphics",
    question: "What is the purpose of lighting in 3D graphics?",
    options: [
      { label: "A", text: "To illuminate 3D scenes for realism" },
      { label: "B", text: "To darken 3D scenes" },
      { label: "C", text: "To change object colors" },
      { label: "D", text: "To remove objects" },
    ],
    answer: "A. To illuminate 3D scenes for realism",
  },
  {
    id: 101,
    topic: "3D Graphics",
    question: "What is the difference between ray tracing and rasterization?",
    options: [
      { label: "A", text: "Ray tracing simulates light paths, rasterization projects 3D to 2D" },
      { label: "B", text: "Rasterization simulates light paths, ray tracing projects 3D to 2D" },
      { label: "C", text: "Both simulate light paths" },
      { label: "D", text: "Both project 3D to 2D" },
    ],
    answer: "A. Ray tracing simulates light paths, rasterization projects 3D to 2D",
  },
  {
    id: 102,
    topic: "3D Graphics",
    question: "What is the purpose of a 3D renderer?",
    options: [
      { label: "A", text: "To generate 2D images from 3D scenes" },
      { label: "B", text: "To generate 3D models" },
      { label: "C", text: "To generate audio" },
      { label: "D", text: "To generate video" },
    ],
    answer: "A. To generate 2D images from 3D scenes",
  },

  // ----- Additional Questions to reach 120+ (18 more) -----
  {
    id: 103,
    topic: "Multimedia Basics",
    question: "What is the difference between interactive and non-interactive multimedia?",
    options: [
      { label: "A", text: "Interactive allows user control, non-interactive doesn't" },
      { label: "B", text: "Non-interactive allows user control, interactive doesn't" },
      { label: "C", text: "Both allow user control" },
      { label: "D", text: "Neither allows user control" },
    ],
    answer: "A. Interactive allows user control, non-interactive doesn't",
  },
  {
    id: 104,
    topic: "Text & Typography",
    question: "What is the difference between tracking and kerning?",
    options: [
      { label: "A", text: "Tracking adjusts space across text, kerning adjusts between letters" },
      { label: "B", text: "Kerning adjusts space across text, tracking adjusts between letters" },
      { label: "C", text: "Both adjust space between letters" },
      { label: "D", text: "Both adjust space across text" },
    ],
    answer: "A. Tracking adjusts space across text, kerning adjusts between letters",
  },
  {
    id: 105,
    topic: "Graphics & Images",
    question: "What is the purpose of DPI in images?",
    options: [
      { label: "A", text: "To measure image resolution for printing" },
      { label: "B", text: "To measure file size" },
      { label: "C", text: "To measure color depth" },
      { label: "D", text: "To measure compression" },
    ],
    answer: "A. To measure image resolution for printing",
  },
  {
    id: 106,
    topic: "Color Theory",
    question: "What is the difference between warm and cool colors?",
    options: [
      { label: "A", text: "Warm colors are red/orange, cool colors are blue/green" },
      { label: "B", text: "Cool colors are red/orange, warm colors are blue/green" },
      { label: "C", text: "Both are warm" },
      { label: "D", text: "Both are cool" },
    ],
    answer: "A. Warm colors are red/orange, cool colors are blue/green",
  },
  {
    id: 107,
    topic: "Audio",
    question: "What is the purpose of equalization in audio production?",
    options: [
      { label: "A", text: "To balance frequencies in audio" },
      { label: "B", text: "To increase volume" },
      { label: "C", text: "To decrease volume" },
      { label: "D", text: "To add effects" },
    ],
    answer: "A. To balance frequencies in audio",
  },
  {
    id: 108,
    topic: "Video",
    question: "What is the difference between 1080p and 4K?",
    options: [
      { label: "A", text: "4K has 4 times the pixels of 1080p" },
      { label: "B", text: "1080p has 4 times the pixels of 4K" },
      { label: "C", text: "Both have the same pixels" },
      { label: "D", text: "Neither has pixels" },
    ],
    answer: "A. 4K has 4 times the pixels of 1080p",
  },
  {
    id: 109,
    topic: "Animation",
    question: "What is the difference between traditional and digital animation?",
    options: [
      { label: "A", text: "Traditional uses physical media, digital uses computer" },
      { label: "B", text: "Digital uses physical media, traditional uses computer" },
      { label: "C", text: "Both use physical media" },
      { label: "D", text: "Both use computers" },
    ],
    answer: "A. Traditional uses physical media, digital uses computer",
  },
  {
    id: 110,
    topic: "File Formats",
    question: "What is the difference between GIF and PNG?",
    options: [
      { label: "A", text: "GIF supports animation, PNG supports better compression" },
      { label: "B", text: "PNG supports animation, GIF supports better compression" },
      { label: "C", text: "Both support animation" },
      { label: "D", text: "Neither supports animation" },
    ],
    answer: "A. GIF supports animation, PNG supports better compression",
  },
  {
    id: 111,
    topic: "Compression",
    question: "What is the purpose of Huffman coding in compression?",
    options: [
      { label: "A", text: "To assign variable-length codes based on probability" },
      { label: "B", text: "To assign fixed-length codes" },
      { label: "C", text: "To assign random codes" },
      { label: "D", text: "To assign no codes" },
    ],
    answer: "A. To assign variable-length codes based on probability",
  },
  {
    id: 112,
    topic: "Applications",
    question: "What is the role of multimedia in virtual reality?",
    options: [
      { label: "A", text: "To create immersive experiences" },
      { label: "B", text: "To create text-based experiences" },
      { label: "C", text: "To create audio-only experiences" },
      { label: "D", text: "To create static experiences" },
    ],
    answer: "A. To create immersive experiences",
  },
  {
    id: 113,
    topic: "Web Multimedia",
    question: "What is the purpose of WebGL?",
    options: [
      { label: "A", text: "To render 3D graphics in web browsers" },
      { label: "B", text: "To play audio in web browsers" },
      { label: "C", text: "To display text in web browsers" },
      { label: "D", text: "To store data in web browsers" },
    ],
    answer: "A. To render 3D graphics in web browsers",
  },
  {
    id: 114,
    topic: "Hardware",
    question: "What is the purpose of a VR headset?",
    options: [
      { label: "A", text: "To display immersive virtual reality environments" },
      { label: "B", text: "To display text" },
      { label: "C", text: "To play audio" },
      { label: "D", text: "To store files" },
    ],
    answer: "A. To display immersive virtual reality environments",
  },
  {
    id: 115,
    topic: "Authoring",
    question: "What is the purpose of Adobe After Effects?",
    options: [
      { label: "A", text: "To create visual effects and motion graphics" },
      { label: "B", text: "To edit audio" },
      { label: "C", text: "To edit images" },
      { label: "D", text: "To create presentations" },
    ],
    answer: "A. To create visual effects and motion graphics",
  },
  {
    id: 116,
    topic: "Audio Processing",
    question: "What is the purpose of compression in audio production?",
    options: [
      { label: "A", text: "To reduce dynamic range" },
      { label: "B", text: "To increase dynamic range" },
      { label: "C", text: "To remove frequencies" },
      { label: "D", text: "To add frequencies" },
    ],
    answer: "A. To reduce dynamic range",
  },
  {
    id: 117,
    topic: "Video Processing",
    question: "What is the purpose of green screen (chroma key)?",
    options: [
      { label: "A", text: "To replace a solid color with a different background" },
      { label: "B", text: "To enhance colors" },
      { label: "C", text: "To reduce file size" },
      { label: "D", text: "To add text" },
    ],
    answer: "A. To replace a solid color with a different background",
  },
  {
    id: 118,
    topic: "Networking",
    question: "What is the difference between RTP and RTMP?",
    options: [
      { label: "A", text: "RTP is for real-time data, RTMP is for streaming" },
      { label: "B", text: "RTMP is for real-time data, RTP is for streaming" },
      { label: "C", text: "Both are for real-time data" },
      { label: "D", text: "Both are for streaming" },
    ],
    answer: "A. RTP is for real-time data, RTMP is for streaming",
  },
  {
    id: 119,
    topic: "3D Graphics",
    question: "What is the purpose of a shader in 3D graphics?",
    options: [
      { label: "A", text: "To control how 3D objects are rendered" },
      { label: "B", text: "To create 3D models" },
      { label: "C", text: "To animate 3D objects" },
      { label: "D", text: "To texture 3D objects" },
    ],
    answer: "A. To control how 3D objects are rendered",
  },
  {
    id: 120,
    topic: "Multimedia Basics",
    question: "What is the future of multimedia technology?",
    options: [
      { label: "A", text: "AI integration, VR/AR, interactive experiences" },
      { label: "B", text: "No changes expected" },
      { label: "C", text: "Only text-based media" },
      { label: "D", text: "Only audio-based media" },
    ],
    answer: "A. AI integration, VR/AR, interactive experiences",
  },
];

// ========================== FAQ DATA ==========================
const faqData = [
  {
    question: "What is multimedia?",
    answer:
      "Multimedia is the integration of multiple forms of media including text, graphics, audio, video, and animation. It combines different content types to create interactive and engaging experiences for users.",
  },
  {
    question: "What are the main elements of multimedia?",
    answer:
      "The five main elements of multimedia are: Text, Graphics (Images), Audio, Video, and Animation. Each element plays a unique role in creating rich media experiences.",
  },
  {
    question: "What is the difference between linear and non-linear multimedia?",
    answer:
      "Linear multimedia follows a predetermined sequence with no user interaction (like a movie). Non-linear multimedia allows users to interact and control the content (like a video game or interactive website).",
  },
  {
    question: "What is the difference between raster and vector graphics?",
    answer:
      "Raster graphics are made of pixels and lose quality when scaled up. Vector graphics use mathematical equations and can be scaled infinitely without quality loss.",
  },
  {
    question: "What is the purpose of compression in multimedia?",
    answer:
      "Compression reduces file size for storage and transmission. Lossy compression sacrifices some quality for smaller size, while lossless compression preserves all data.",
  },
  {
    question: "How is AI impacting multimedia?",
    answer:
      "AI is revolutionizing multimedia through automated content creation, image and video enhancement, realistic animation generation, personalized recommendations, and intelligent editing tools.",
  },
];

// ========================== COMPONENT ==========================
export default function MultimediaMcq() {
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
        "@id": "https://CodeSkipper.in/mcq/multimedia",
        "url": "https://CodeSkipper.in/mcq/multimedia",
        "name": "Multimedia Multiple Choice Questions | Code Skipper",
        "description":
          "Explore a comprehensive collection of 120+ multiple-choice questions on Multimedia, covering graphics, audio, video, animation, compression, and more.",
        "about": { "@type": "Thing", "name": "Multimedia MCQ" },
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
              "name": "Multimedia",
              "item": "https://CodeSkipper.in/mcq/multimedia",
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
        "@id": "https://CodeSkipper.in/mcq/multimedia#course",
        "name": "Multimedia MCQ Preparation",
        "description": "Comprehensive multiple-choice questions for Multimedia exam and interview preparation.",
        "provider": { "@type": "Organization", "name": "Code Skipper", "url": "https://CodeSkipper.in" },
        "educationalLevel": "Beginner to Advanced",
        "teaches": { "@type": "Thing", "name": "Multimedia" },
      },
      {
        "@type": "FAQPage",
        "@id": "https://CodeSkipper.in/mcq/multimedia#faq",
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
        <title>Multimedia MCQs 2026 | Computer Science | Code Skipper</title>
        <meta
          name="description"
          content="Practice 120+ Multimedia multiple-choice questions with answers. Covers graphics, audio, video, animation, compression, and more. Updated for 2026 exams and interviews."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Multimedia, MCQs, Graphics, Audio, Video, Animation, Compression, Code Skipper"
        />
        <link rel="canonical" href="https://CodeSkipper.in/mcq/multimedia-mcq" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/multimedia-mcq" hrefLang="en" />
        <link rel="alternate" href="https://CodeSkipper.in/mcq/multimedia-mcq" hrefLang="x-default" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://CodeSkipper.in/mcq/multimedia-mcq" />
        <meta property="og:title" content="Multimedia MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          property="og:description"
          content="Practice 120+ Multimedia multiple-choice questions covering graphics, audio, video, animation, compression, and more."
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
        <meta name="twitter:title" content="Multimedia MCQs 2026 | 120+ Questions | Code Skipper" />
        <meta
          name="twitter:description"
          content="Practice 120+ Multimedia multiple-choice questions covering graphics, audio, video, animation, compression, and more."
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
        <section className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-600 via-rose-600 to-red-700 p-8 md:p-12 mb-10 text-white">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 text-sm font-medium mb-4">
              🎬 120+ Questions • Updated 2026
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              Multimedia <br className="hidden sm:block" />
              <span className="text-yellow-300">Multiple Choice Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-pink-50/90 max-w-2xl mb-6">
              Master Multimedia with 120+ curated MCQs covering graphics, audio, video, animation,
              compression, and more. Perfect for exams, interviews, and creative professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <span className="text-sm font-medium">18 Topics</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span className="text-sm font-medium">120+ Questions</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span className="text-sm font-medium">Creative Ready</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-48 h-48 rounded-full bg-red-400/10 blur-3xl" aria-hidden="true" />
        </section>

        {/* ===== TOPIC CARDS ===== */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-3xl">📚</span>
            Explore Multimedia Topics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                className={`text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  selectedTopic === topic
                    ? "border-pink-600 bg-pink-50 text-pink-700 shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-pink-300 hover:bg-pink-50/50"
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
                <strong className="text-pink-600">{selectedTopic}</strong>
              </span>
              <button
                onClick={() => setSelectedTopic(null)}
                className="text-sm text-pink-600 hover:text-pink-800 font-medium"
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
            Multimedia MCQs
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
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-700 text-sm font-bold">
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
                    <summary className="inline-flex cursor-pointer text-sm font-medium text-pink-600 hover:text-pink-800 bg-pink-50 px-4 py-2 rounded-lg hover:bg-pink-100 transition-colors">
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
                className="mt-3 text-pink-600 hover:text-pink-800 font-medium"
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