"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  // Structured Data for Organization (SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CodeSkipper",
    "url": "https://codeskipper.in",
    "logo": "https://codeskipper.in/Images/logo.png",
    "description": "Learn computer programming technologies from basic to advanced with real-world examples and references — completely free.",
    "sameAs": [
      "https://www.instagram.com/thecodeskipper",
      "https://www.youtube.com/@thecodeskipper",
      "https://whatsapp.com/channel/0029Vb7VU8wKwqSMA7l1yL0r"
    ]
  };

  return (
    <footer className="bg-[#ecf0f3] text-gray-700 pt-16 pb-4" role="contentinfo">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-200/50">

          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                CodeSkipper
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed text-[15px] max-w-xs">
              Learn computer programming technologies from basic to advanced
              with real-world examples and references — completely free.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Quick Links</h2>
            <ul className="grid grid-cols-2 gap-3 text-[15px]">
              {[
                { name: "About Us", link: "/main/about" },
                { name: "Advertise", link: "/main/advertise" },
                { name: "Career", link: "/main/career" },
                { name: "Contact", link: "/main/contact" },
                { name: "Support Us", link: "/main/donate" },
                { name: "Privacy Policy", link: "/main/privacy-policy" },
                { name: "Terms & Conditions", link: "/main/terms-and-condition" },
                { name: "Sitemap", link: "https://codeskipper.in/sitemap-0.xml" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter & Social */}
          <div>
            <h2 className="text-xl font-semibold mb-6 text-gray-700">Stay Connected</h2>
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/thecodeskipper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#ecf0f3]
                  shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                  hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
                  transition"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-pink-500" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@thecodeskipper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#ecf0f3]
                  shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                  hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
                  transition"
              >
                <svg fill="currentColor" className="w-5 h-5 text-red-600" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6z" />
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://whatsapp.com/channel/0029Vb8U5M55Ejy1Ktn2sY1Y"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Channel"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#ecf0f3]
                  shadow-[6px_6px_12px_#c5c9cc,-6px_-6px_12px_#ffffff]
                  hover:shadow-[inset_6px_6px_12px_#c5c9cc,inset_-6px_-6px_12px_#ffffff]
                  transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 text-green-600" fill="currentColor">
                  <path d="M16.04 2.003c-7.72 0-13.99 6.27-13.99 13.99 0 2.47.65 4.89 1.88 7.02L2 30l7.18-1.88a13.9 13.9 0 006.86 1.75h.01c7.72 0 13.99-6.27 13.99-13.99S23.76 2.003 16.04 2.003zm0 25.42c-2.13 0-4.22-.57-6.05-1.64l-.43-.25-4.26 1.11 1.14-4.15-.28-.43a11.42 11.42 0 01-1.75-6.09c0-6.32 5.14-11.46 11.46-11.46 3.06 0 5.94 1.19 8.1 3.35a11.39 11.39 0 013.36 8.11c0 6.32-5.14 11.45-11.45 11.45zm6.28-8.54c-.34-.17-2.01-.99-2.32-1.1-.31-.11-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.32-.2.23-.39.26-.73.09-.34-.17-1.43-.53-2.72-1.7-1-.89-1.67-1.99-1.86-2.33-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.58.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.05-2.55-.27-.65-.55-.56-.77-.57l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85 0 1.67 1.23 3.29 1.4 3.52.17.23 2.42 3.7 5.86 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.01-.82 2.29-1.61.28-.79.28-1.46.2-1.61-.09-.14-.31-.23-.65-.4z" />
                </svg>
              </a>

           
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">CodeSkipper</span>.
            All Rights Reserved.
          </span>
          <span className="flex items-center gap-2 mt-2 sm:mt-0">
            <span>Made with ❤️ in India</span>
          
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;