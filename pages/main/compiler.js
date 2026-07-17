import React from "react";
import styled from "styled-components";
import SimpleLayout from "@/components/SimpleLayout";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";


const CompilerLandingPage = () => {
  return (
    <SimpleLayout>
      <Head>
        <title>Online Code Compiler — HTML, CSS, JavaScript & Python IDE</title>
        <meta
          name="description"
          content="Write and run code instantly in your browser. Free online compiler for HTML, CSS, JavaScript, and Python. No downloads, no setup — start coding now."
        />
        <meta
          name="keywords"
          content="online compiler, code editor, HTML editor, JavaScript IDE, Python online, free coding platform, web-based IDE, coding playground"
        />
        <meta property="og:title" content="Free Online Code Compiler — HTML, CSS, JS & Python" />
        <meta
          property="og:description"
          content="Test and debug your code online with live preview. Supports frontend and backend languages. Zero installation required."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/compiler" />
        <meta property="og:image" content="https://yourdomain.com/og-compiler.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Online Code Compiler" />
        <meta
          name="twitter:description"
          content="Instant code execution for HTML, CSS, JavaScript, and Python. Perfect for learning, prototyping, and debugging."
        />

        {/* JSON-LD Structured Data: WebApplication + FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CodeSkipper Online Compiler",
              description:
                "A free in-browser code editor and compiler for HTML, CSS, JavaScript, and Python.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "All",
              browserRequirements: "Modern browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "127",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What languages does this online compiler support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It supports HTML, CSS, JavaScript, and Python. You can also run mixed frontend projects with live preview.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need to install anything to use it?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, everything runs in your browser. Just open the page and start coding immediately.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the compiler free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it's completely free with no limits on usage.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I save and share my code?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can save projects locally and generate shareable links to your code.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <StyledWrapper>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Code, Test, Debug — <br />
              <span className="gradient-text">All in Your Browser</span>
            </h1>
            <p className="hero-description">
              A powerful, free online compiler for HTML, CSS, JavaScript, and Python.
              Write code, see live results, and accelerate your development workflow —
              without installing anything.
            </p>
            <div className="hero-actions">
              <Link href="/compiler/index.html" className="btn-primary">
                Start Coding Now →
              </Link>

            </div>
            <div className="hero-stats">

              <div className="stat-item">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">User Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free Forever</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            {/* Decorative illustration or mockup */}
            <div className="code-preview">
              <div className="code-line"><span className="code-tag">&lt;div</span> <span className="code-attr">className</span>=<span className="code-string">"card"</span><span className="code-tag">&gt;</span></div>
              <div className="code-line indent"><span className="code-tag">&lt;h1&gt;</span>Hello World<span className="code-tag">&lt;/h1&gt;</span></div>
              <div className="code-line indent"><span className="code-tag">&lt;p&gt;</span>This is live preview<span className="code-tag">&lt;/p&gt;</span></div>
              <div className="code-line"><span className="code-tag">&lt;/div&gt;</span></div>
            </div>
          </div>
        </section>



        {/* FEATURES / COMPILER CARDS */}
        <section id="features" className="features">
          <h2 className="section-title">Choose Your Compiler</h2>
          <p className="section-subtitle">
            Each environment is tailored for rapid prototyping and learning.
          </p>
          <div className="cards-grid">
            <Link href="/compiler/index.html" className="card-link">
              <div className="feature-card html-card">
                <div className="card-icon">🌐</div>
                <h3>HTML &amp; CSS Editor</h3>
                <p>
                  Build responsive web pages with live preview. See changes
                  instantly as you type. Perfect for frontend prototyping.
                </p>
                <ul className="feature-list">
                  <li>✅ Live preview</li>
                  <li>✅ Auto-completion</li>
                  <li>✅ CSS preprocessors</li>
                </ul>
                <span className="card-cta">Launch Editor →</span>
              </div>
            </Link>

            <Link href="/main/javascript" className="card-link">
              <div className="feature-card js-card">
                <div className="card-icon">📜</div>
                <h3>JavaScript Playground</h3>
                <p>
                  Experiment with ES6+ features, debug with console output, and
                  test algorithms in a sandboxed environment.
                </p>
                <ul className="feature-list">
                  <li>✅ Console logging</li>
                  <li>✅ Module support</li>
                  <li>✅ Performance timing</li>
                </ul>
                <span className="card-cta">Launch Playground →</span>
              </div>
            </Link>

            <Link href="/main/python" className="card-link">
              <div className="feature-card python-card">
                <div className="card-icon">🐍</div>
                <h3>Python Online IDE</h3>
                <p>
                  Write and run Python code in your browser. Ideal for learning,
                  data science snippets, and automation scripts.
                </p>
                <ul className="feature-list">
                  <li>✅ Real-time output</li>
                  <li>✅ Standard library</li>
                  <li>✅ Error traceback</li>
                </ul>
                <span className="card-cta">Launch IDE →</span>
              </div>
            </Link>
          </div>
        </section>


        {/* BENEFITS / WHY CHOOSE US */}
        <section className="benefits">
          <h2 className="section-title">Why Developers Love This Compiler</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h4>Instant Execution</h4>
              <p>Run your code with a single click. No waiting, no compiling delays.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🔒</div>
              <h4>Secure &amp; Private</h4>
              <p>All processing happens in your browser. Your code never leaves your device.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h4>Works Anywhere</h4>
              <p>Compatible with desktop, tablet, and mobile — code on the go.</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💡</div>
              <h4>Learning Friendly</h4>
              <p>Great for beginners with syntax highlighting and error messages.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-it-works">
          <h2 className="section-title">How to Start Coding in 3 Steps</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Choose a Language</h4>
              <p>Pick HTML/CSS, JavaScript, or Python from the cards above.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Write Your Code</h4>
              <p>Use the editor with autocomplete and error detection.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Run &amp; Debug</h4>
              <p>Hit run and see the output instantly. Tweak and repeat.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>What languages does this online compiler support?</h4>
              <p>It supports HTML, CSS, JavaScript, and Python. You can also run mixed frontend projects with live preview.</p>
            </div>
            <div className="faq-item">
              <h4>Do I need to install anything to use it?</h4>
              <p>No, everything runs in your browser. Just open the page and start coding immediately.</p>
            </div>
            <div className="faq-item">
              <h4>Is the compiler free to use?</h4>
              <p>Yes, it's completely free with no limits on usage.</p>
            </div>
            <div className="faq-item">
              <h4>Can I save and share my code?</h4>
              <p>Yes, you can save projects locally and generate shareable links to your code.</p>
            </div>
          </div>
        </section>

        {/* TRUST / FINAL CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center py-12"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 md:p-14 text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of developers who aced their interviews with our curated question bank and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/roadmap">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition shadow-lg">
                 Computer Science Roadmap
                </button>
              </Link>
              <Link href="/mcq">
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-700 transform hover:scale-105 transition">
                  MCQ's
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

      </StyledWrapper>
    </SimpleLayout>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;

  /* Hero */
  .hero {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .hero-content {
    flex: 1 1 500px;
  }

  .hero-title {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: #1e1e2f;
  }

  .gradient-text {
    background: linear-gradient(135deg, #2eadff, #7e61ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-description {
    font-size: 1.2rem;
    color: #4a4a6a;
    max-width: 540px;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .btn-primary {
    display: inline-block;
    padding: 0.8rem 2rem;
    background: linear-gradient(135deg, #2eadff, #7e61ff);
    color: #fff;
    font-weight: 600;
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(46, 173, 255, 0.35);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(46, 173, 255, 0.45);
  }

  .btn-outline {
    display: inline-block;
    padding: 0.8rem 2rem;
    border: 2px solid #2eadff;
    color: #2eadff;
    font-weight: 600;
    border-radius: 50px;
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }

  .btn-outline:hover {
    background: #2eadff;
    color: #fff;
  }

  .btn-primary.large {
    font-size: 1.2rem;
    padding: 1rem 2.8rem;
  }

  .hero-stats {
    display: flex;
    gap: 2.5rem;
    margin-top: 1.5rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    font-size: 1.8rem;
    font-weight: 700;
    color: #1e1e2f;
  }

  .stat-label {
    font-size: 0.9rem;
    color: #656d76;
  }

  .hero-visual {
    flex: 1 1 300px;
    display: flex;
    justify-content: center;
  }

  .code-preview {
    background: #1e1e2f;
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.95rem;
    color: #e6edf3;
    width: 100%;
    max-width: 400px;
  }

  .code-line {
    padding: 0.2rem 0;
  }
  .code-line.indent {
    padding-left: 1.5rem;
  }
  .code-tag {
    color: #ff7b72;
  }
  .code-attr {
    color: #d2a8ff;
  }
  .code-string {
    color: #a5d6ff;
  }

  /* Ad container */
  .ad-container {
    margin: 2.5rem 0;
    text-align: center;
  }
  .ad-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #8b949e;
    margin-bottom: 0.5rem;
  }
  .ad-unit {
    background: #f6f8fa;
    border-radius: 8px;
    min-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8b949e;
    font-size: 0.9rem;
    border: 1px dashed #d0d7de;
  }

  /* Features */
  .features {
    margin: 3rem 0;
  }

  .section-title {
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    color: #1e1e2f;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    text-align: center;
    color: #656d76;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .feature-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.25s, box-shadow 0.25s;
    border: 1px solid #e8eaed;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .feature-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }

  .feature-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #1e1e2f;
  }

  .feature-card p {
    color: #4a4a6a;
    line-height: 1.5;
    flex: 1;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 0.5rem;
    font-size: 0.95rem;
    color: #2d3b4f;
  }

  .feature-list li {
    padding: 0.2rem 0;
  }

  .card-cta {
    display: inline-block;
    margin-top: 1.2rem;
    font-weight: 600;
    color: #2eadff;
    align-self: flex-start;
    transition: transform 0.2s;
  }

  .feature-card:hover .card-cta {
    transform: translateX(4px);
  }

  /* Benefits */
  .benefits {
    margin: 3rem 0;
  }
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .benefit-item {
    text-align: center;
    padding: 1.5rem;
    background: #f9fafb;
    border-radius: 16px;
    transition: background 0.2s;
  }
  .benefit-item:hover {
    background: #f0f2f5;
  }
  .benefit-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  .benefit-item h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1e1e2f;
    margin-bottom: 0.4rem;
  }
  .benefit-item p {
    color: #656d76;
    font-size: 0.95rem;
  }

  /* How it works */
  .how-it-works {
    margin: 3rem 0;
    background: #f6f8fa;
    padding: 2.5rem 2rem;
    border-radius: 24px;
  }
  .steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  .step {
    flex: 1 1 180px;
    text-align: center;
  }
  .step-number {
    display: inline-block;
    width: 44px;
    height: 44px;
    line-height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #2eadff, #7e61ff);
    color: #fff;
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
  .step h4 {
    font-weight: 600;
    color: #1e1e2f;
    margin-bottom: 0.3rem;
  }
  .step p {
    color: #656d76;
    font-size: 0.95rem;
  }

  /* FAQ */
  .faq {
    margin: 3rem 0;
  }
  .faq-list {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  .faq-item {
    background: #ffffff;
    border-radius: 12px;
    padding: 1.2rem 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    border: 1px solid #e8eaed;
  }
  .faq-item h4 {
    font-weight: 600;
    color: #1e1e2f;
    margin-bottom: 0.4rem;
    font-size: 1.05rem;
  }
  .faq-item p {
    color: #4a4a6a;
    margin: 0;
  }

  /* Final CTA */
  .final-cta {
    text-align: center;
    padding: 3rem 1rem;
    margin-top: 2rem;
    background: linear-gradient(135deg, #f6f8fa, #eef1f5);
    border-radius: 24px;
  }
  .final-cta h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1e1e2f;
  }
  .final-cta p {
    color: #656d76;
    font-size: 1.1rem;
    margin: 0.8rem 0 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.2rem;
    }
    .hero-stats {
      gap: 1.5rem;
    }
    .section-title {
      font-size: 1.8rem;
    }
    .cards-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
    .code-preview {
      font-size: 0.8rem;
      padding: 1rem;
    }
    .hero-actions {
      flex-direction: column;
      align-items: flex-start;
    }
    .btn-primary,
    .btn-outline {
      width: 100%;
      text-align: center;
    }
    .benefits-grid {
      grid-template-columns: 1fr 1fr;
    }
    .steps {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    .benefits-grid {
      grid-template-columns: 1fr;
    }
    .hero-stats {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;

export default CompilerLandingPage;