import React, { useState } from "react";
import { motion } from "framer-motion";
import SimpleLayout from "@/components/SimpleLayout";
import Head from "next/head";

const ColorPickerGradientGenerator = () => {
    const [color1, setColor1] = useState("#3498db");
    const [color2, setColor2] = useState("#e91e63");
    const [angle, setAngle] = useState(90);

    // Utility to convert HEX → RGB
    const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    };

    const rgbToHex = (r, g, b) => {
        return (
            "#" +
            [r, g, b]
                .map((x) => {
                    const hex = x.toString(16);
                    return hex.length === 1 ? "0" + hex : hex;
                })
                .join("")
        );
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert(`Copied: ${text}`);
    };

    return (
        <>
            <Head>
                <title>
                    Free Color Picker & CSS Gradient Generator Online | Code Skipper
                </title>

                <meta
                    name="description"
                    content="Free online Color Picker and CSS Gradient Generator. Generate HEX, RGB, RGBA colors, create beautiful gradients, copy CSS instantly and use them in HTML, CSS, React, Tailwind CSS and web design projects."
                />

                <meta
                    name="keywords"
                    content="color picker, css gradient generator, gradient maker, hex color picker, rgb color converter, rgba color, css tools, web developer tools, online gradient generator, free color picker, tailwind color picker, react color picker"
                />

                <meta name="robots" content="index, follow, max-image-preview:large" />

                <link
                    rel="canonical"
                    href="https://codeskipper.in/tools/education/color-picker"
                />

                <meta property="og:type" content="website" />

                <meta
                    property="og:title"
                    content="Free Color Picker & CSS Gradient Generator"
                />

                <meta
                    property="og:description"
                    content="Generate beautiful CSS gradients and pick colors instantly."
                />

                <meta
                    property="og:url"
                    content="https://codeskipper.in/tools/education/color-picker"
                />

                <meta property="og:site_name" content="Code Skipper" />

                <meta property="og:image" content="https://codeskipper.in/logo.png" />

                <meta name="twitter:card" content="summary_large_image" />

                <meta
                    name="twitter:title"
                    content="Free Color Picker & Gradient Generator"
                />

                <meta
                    name="twitter:description"
                    content="Generate CSS gradients, HEX, RGB, RGBA colors online."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({

                            "@context": "https://schema.org",

                            "@type": "SoftwareApplication",

                            "name": "Color Picker & Gradient Generator",

                            "applicationCategory": "DeveloperApplication",

                            "operatingSystem": "Any",

                            "url": "https://codeskipper.in/tools/education/color-picker",

                            "description": "Free online Color Picker and CSS Gradient Generator.",

                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            }

                        })
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({

                            "@context": "https://schema.org",

                            "@type": "BreadcrumbList",

                            "itemListElement": [

                                {

                                    "@type": "ListItem",

                                    "position": 1,

                                    "name": "Home",

                                    "item": "https://codeskipper.in"

                                },

                                {

                                    "@type": "ListItem",

                                    "position": 2,

                                    "name": "Developer Tools",

                                    "item": "https://codeskipper.in/tools"

                                },

                                {

                                    "@type": "ListItem",

                                    "position": 3,

                                    "name": "Color Picker"

                                }

                            ]

                        })
                    }}
                />
            </Head>
            <SimpleLayout>
                <div className="min-h-screen bg-gradient-to-r from-gray-50 via-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
                    <section className="max-w-6xl mx-auto mt-20 px-4">

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                            Free Online Color Picker & CSS Gradient Generator
                        </h2>

                        {/* Paragraph */}
                        <p className="text-lg md:text-xl text-gray-600 leading-9 mb-6">
                            Choosing the perfect color combination is one of the most important parts of
                            web design, mobile app development, UI/UX design, branding, and graphic
                            design. Our free Color Picker and CSS Gradient Generator allows you to
                            generate beautiful gradients instantly, convert HEX to RGB, copy CSS code,
                            and create stunning color combinations without installing any software.
                        </p>

                        {/* Second Heading */}
                        <h3 className="text-3xl font-bold text-blue-700 mb-5">
                            ✨ Features
                        </h3>

                        {/* List */}
                        <ul className="grid md:grid-cols-2 gap-4 mb-10">

                            <li className="flex items-center bg-blue-50 border border-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                Unlimited Color Picker
                            </li>

                            <li className="flex items-center bg-pink-50 border border-pink-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                HEX to RGB Converter
                            </li>

                            <li className="flex items-center bg-purple-50 border border-purple-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                RGBA Color Support
                            </li>

                            <li className="flex items-center bg-yellow-50 border border-yellow-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                CSS Gradient Generator
                            </li>

                            <li className="flex items-center bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                Live Gradient Preview
                            </li>

                            <li className="flex items-center bg-indigo-50 border border-indigo-100 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                <span className="text-green-500 text-xl mr-3">✔</span>
                                One Click Copy CSS
                            </li>

                        </ul>

                        {/* Heading */}


                        {/* Ordered List */}
                        <h3 className="text-3xl font-bold text-pink-700 mb-5">
                            📌 How to Use
                        </h3>

                        <ol className="space-y-4">

                            <li className="flex items-start bg-white rounded-xl border p-4 shadow-sm">
                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                                    1
                                </span>

                                <p className="text-gray-700 leading-7">
                                    Select your primary color using the color picker.
                                </p>
                            </li>

                            <li className="flex items-start bg-white rounded-xl border p-4 shadow-sm">
                                <span className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                                    2
                                </span>

                                <p className="text-gray-700 leading-7">
                                    Choose your secondary color.
                                </p>
                            </li>

                            <li className="flex items-start bg-white rounded-xl border p-4 shadow-sm">
                                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                                    3
                                </span>

                                <p className="text-gray-700 leading-7">
                                    Adjust the gradient angle according to your design needs.
                                </p>
                            </li>

                            <li className="flex items-start bg-white rounded-xl border p-4 shadow-sm">
                                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">
                                    4
                                </span>

                                <p className="text-gray-700 leading-7">
                                    Copy the generated CSS and use it in your HTML, CSS, React, Tailwind
                                    CSS, or Next.js project.
                                </p>
                            </li>

                        </ol>

                    </section>

                    {/* Color Inputs */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl border border-gray-200"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Color 1 */}
                            <div className="flex flex-col items-center space-y-3">
                                <label className="font-semibold text-gray-800 text-lg">
                                    Primary Color
                                </label>
                                <input
                                    type="color"
                                    value={color1}
                                    onChange={(e) => setColor1(e.target.value)}
                                    className="w-32 h-32 border-4 border-gray-300 rounded-full shadow-inner cursor-pointer"
                                />
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>
                                        <span className="font-bold">HEX:</span> {color1}{" "}
                                        <button
                                            onClick={() => handleCopy(color1)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGB:</span> rgb({hexToRgb(color1)}){" "}
                                        <button
                                            onClick={() => handleCopy(`rgb(${hexToRgb(color1)})`)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGBA:</span> rgba({hexToRgb(color1)}, 1)
                                    </p>
                                </div>
                            </div>

                            {/* Color 2 */}
                            <div className="flex flex-col items-center space-y-3">
                                <label className="font-semibold text-gray-800 text-lg">
                                    Secondary Color
                                </label>
                                <input
                                    type="color"
                                    value={color2}
                                    onChange={(e) => setColor2(e.target.value)}
                                    className="w-32 h-32 border-4 border-gray-300 rounded-full shadow-inner cursor-pointer"
                                />
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>
                                        <span className="font-bold">HEX:</span> {color2}{" "}
                                        <button
                                            onClick={() => handleCopy(color2)}
                                            className="ml-2 text-blue-600 underline"
                                        >
                                            Copy
                                        </button>
                                    </p>
                                    <p>
                                        <span className="font-bold">RGB:</span> rgb({hexToRgb(color2)})
                                    </p>
                                    <p>
                                        <span className="font-bold">RGBA:</span> rgba({hexToRgb(color2)}, 1)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Gradient Controls */}
                        <div className="mt-10 text-center">
                            <label className="font-semibold text-gray-800 text-lg">
                                Gradient Angle: {angle}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="360"
                                value={angle}
                                onChange={(e) => setAngle(e.target.value)}
                                className="w-full mt-2 accent-blue-600"
                            />
                        </div>

                        {/* Gradient Preview */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mt-8 p-6 rounded-2xl border-2 border-gray-200 shadow-lg text-center"
                            style={{
                                background: `linear-gradient(${angle}deg, ${color1}, ${color2})`,
                            }}
                        >
                            <p className="text-white font-semibold text-lg drop-shadow-lg">
                                Gradient Preview
                            </p>
                        </motion.div>

                        {/* Gradient Code */}
                        <div className="mt-6 text-sm bg-gray-900 text-green-400 p-4 rounded-lg font-mono overflow-x-auto">
                            <p>
                                background: linear-gradient({angle}deg, {color1}, {color2});
                            </p>
                            <button
                                onClick={() =>
                                    handleCopy(`linear-gradient(${angle}deg, ${color1}, ${color2})`)
                                }
                                className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                                Copy Gradient CSS
                            </button>
                        </div>
                    </motion.div>

                    <h3 className="text-3xl mt-[60px] font-bold text-purple-700 mb-5">
                        🚀 Who Can Use This Tool?
                    </h3>

                    <p className="text-lg text-gray-600 leading-9 mb-8">
                        This online Color Picker tool is designed for Frontend Developers, React
                        Developers, Next.js Developers, Tailwind CSS users, UI/UX Designers,
                        Graphic Designers, Students, and anyone looking to build visually appealing
                        websites or applications.
                    </p>
                </div>
            </SimpleLayout>
        </>
    );
};

export default ColorPickerGradientGenerator;
