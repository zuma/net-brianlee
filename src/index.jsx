/** @jsx jsx */
import { Hono } from 'hono';
import { jsx } from 'hono/jsx';
import { html } from 'hono/html';

const app = new Hono();

// Main Layout Component with Google Fonts and Custom Modern Styles
const Layout = ({ title, children }) => (
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title || 'Brian Lee — Software Engineer & Web Architect'}</title>
      <meta name="description" content="Official portfolio and digital workspace of Brian Lee — Software Engineer specializing in edge computing, distributed systems, and modern web applications." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap" rel="stylesheet" />
      {html`
        <style>
          :root {
            --bg-dark: #090d16;
            --bg-card: rgba(15, 23, 42, 0.65);
            --bg-card-hover: rgba(30, 41, 59, 0.75);
            --border-color: rgba(255, 255, 255, 0.08);
            --border-hover: rgba(59, 130, 246, 0.4);
            --accent-blue: #3b82f6;
            --accent-purple: #8b5cf6;
            --accent-cyan: #06b6d4;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background-color: var(--bg-dark);
            color: var(--text-main);
            min-height: 100vh;
            line-height: 1.6;
            overflow-x: hidden;
            background-image: 
              radial-gradient(circle at 15% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 40%),
              radial-gradient(circle at 85% 60%, rgba(139, 92, 246, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 90%, rgba(6, 182, 212, 0.08) 0%, transparent 50%);
            background-attachment: fixed;
          }

          .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          /* Header Styling */
          header {
            padding: 1.75rem 0;
            border-bottom: 1px solid var(--border-color);
            backdrop-filter: blur(12px);
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(9, 13, 22, 0.85);
          }

          .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: var(--text-main);
          }

          .avatar-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 800;
            font-size: 1.1rem;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35);
          }

          .brand-text {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
            font-size: 1.25rem;
            letter-spacing: -0.02em;
          }

          .nav-links {
            display: flex;
            gap: 1.5rem;
            list-style: none;
          }

          .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .nav-links a:hover {
            color: var(--accent-blue);
          }

          /* Hero Section */
          .hero {
            padding: 5rem 0 3.5rem 0;
            text-align: center;
          }

          .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.4rem 1rem;
            border-radius: 9999px;
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.25);
            color: #60a5fa;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
          }

          .badge-pulse {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #10b981;
            box-shadow: 0 0 8px #10b981;
          }

          .hero-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 3.75rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1.25rem;
            letter-spacing: -0.04em;
            background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 680px;
            margin: 0 auto 2.5rem auto;
            font-weight: 400;
          }

          .cta-group {
            display: flex;
            gap: 1rem;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .btn {
            padding: 0.85rem 1.75rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.95rem;
            text-decoration: none;
            transition: all 0.25s ease;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .btn-primary {
            background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
            color: #ffffff;
            border: none;
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.5);
          }

          .btn-secondary {
            background: var(--bg-card);
            color: var(--text-main);
            border: 1px solid var(--border-color);
          }

          .btn-secondary:hover {
            background: var(--bg-card-hover);
            border-color: var(--border-hover);
            transform: translateY(-2px);
          }

          /* Tech Terminal Section */
          .terminal-card {
            background: rgba(15, 23, 42, 0.8);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            margin: 3.5rem 0;
            overflow: hidden;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(16px);
          }

          .terminal-header {
            background: rgba(30, 41, 59, 0.5);
            padding: 0.75rem 1.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid var(--border-color);
          }

          .terminal-dots {
            display: flex;
            gap: 6px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
          .dot-red { background-color: #ef4444; }
          .dot-yellow { background-color: #f59e0b; }
          .dot-green { background-color: #10b981; }

          .terminal-title {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.8rem;
            color: var(--text-muted);
          }

          .terminal-body {
            padding: 1.5rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.9rem;
            color: #e2e8f0;
            line-height: 1.7;
          }

          .code-keyword { color: #f472b6; }
          .code-function { color: #60a5fa; }
          .code-string { color: #34d399; }
          .code-comment { color: #64748b; font-style: italic; }

          /* Expertise Grid */
          .section-heading {
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .section-sub {
            color: var(--text-muted);
            font-size: 1rem;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 4rem;
          }

          .card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 14px;
            padding: 1.75rem;
            transition: all 0.25s ease;
          }

          .card:hover {
            background: var(--bg-card-hover);
            border-color: var(--border-hover);
            transform: translateY(-4px);
          }

          .card-icon {
            width: 44px;
            height: 44px;
            border-radius: 10px;
            background: rgba(59, 130, 246, 0.1);
            color: var(--accent-blue);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
          }

          .card-title {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .card-text {
            color: var(--text-muted);
            font-size: 0.9rem;
            line-height: 1.5;
          }

          /* Footer */
          footer {
            border-top: 1px solid var(--border-color);
            padding: 3rem 0;
            margin-top: 2rem;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
          }

          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .social-links {
            display: flex;
            gap: 1.25rem;
          }

          .social-links a {
            color: var(--text-muted);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease;
          }

          .social-links a:hover {
            color: var(--accent-blue);
          }

          @media (max-width: 640px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 1.05rem; }
            .grid { grid-template-columns: 1fr; }
          }
        </style>
      `}
    </head>
    <body>
      {children}
    </body>
  </html>
);

// Main Page Component
app.get('/', (c) => {
  return c.html(
    <Layout title="Brian Lee — Digital Portfolio & Systems Engineering">
      <header>
        <div class="container nav-wrapper">
          <a href="/" class="brand">
            <div class="avatar-icon">BL</div>
            <span class="brand-text">brianlee.net</span>
          </a>
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#architecture">Architecture</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <main class="container">
        {/* Hero Section */}
        <section class="hero" id="about">
          <div class="badge">
            <span class="badge-pulse"></span>
            Cloudflare Edge Worker • Active Node
          </div>
          <h1 class="hero-title">Brian Lee</h1>
          <p class="hero-subtitle">
            Software Engineer & Web Architect building ultra-fast edge services, distributed systems, and sleek reactive digital experiences.
          </p>
          <div class="cta-group">
            <a href="mailto:brian@brianlee.net" class="btn btn-primary">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Get in Touch
            </a>
            <a href="#architecture" class="btn btn-secondary">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              View System Spec
            </a>
          </div>
        </section>

        {/* Live Terminal Spec Widget */}
        <section class="terminal-card" id="architecture">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <span class="terminal-title">brianlee.net ~ edge-runtime.js</span>
          </div>
          <div class="terminal-body">
            <p><span class="code-comment">// Domain Configuration & Edge Execution State</span></p>
            <p><span class="code-keyword">const</span> <span class="code-function">siteConfig</span> = &#123;</p>
            <p>&nbsp;&nbsp;domain: <span class="code-string">"brianlee.net"</span>,</p>
            <p>&nbsp;&nbsp;managedBy: <span class="code-string">"standalone"</span>,</p>
            <p>&nbsp;&nbsp;runtime: <span class="code-string">"Cloudflare Workers / Hono v4"</span>,</p>
            <p>&nbsp;&nbsp;region: <span class="code-string">"Global Edge Network (270+ Locations)"</span>,</p>
            <p>&nbsp;&nbsp;latency: <span class="code-string">"&lt; 15ms TTL"</span></p>
            <p>&#125;;</p>
            <br />
            <p><span class="code-keyword">export default</span> &#123;</p>
            <p>&nbsp;&nbsp;<span class="code-function">fetch</span>(request, env, ctx) &#123;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-keyword">return</span> app.<span class="code-function">handle</span>(request);</p>
            <p>&nbsp;&nbsp;&#125;</p>
            <p>&#125;;</p>
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise">
          <div class="section-heading">
            <h2 class="section-title">Core Engineering Focus</h2>
            <p class="section-sub">Designing resilient systems and high-throughput web applications</p>
          </div>

          <div class="grid">
            <div class="card">
              <div class="card-icon">⚡</div>
              <h3 class="card-title">Edge Computing</h3>
              <p class="card-text">
                Deploying serverless logic directly on edge networks for instant global responsiveness and sub-millisecond execution times.
              </p>
            </div>

            <div class="card">
              <div class="card-icon">🏗️</div>
              <h3 class="card-title">Distributed Systems</h3>
              <p class="card-text">
                Architecting fault-tolerant microservices, event-driven architectures, and high-availability web services.
              </p>
            </div>

            <div class="card">
              <div class="card-icon">🎨</div>
              <h3 class="card-title">Modern Web Engineering</h3>
              <p class="card-text">
                Crafting clean, accessible, and ultra-smooth user interfaces with reactive web primitives and modern design tokens.
              </p>
            </div>

            <div class="card">
              <div class="card-icon">🔒</div>
              <h3 class="card-title">Security & DevOps</h3>
              <p class="card-text">
                Automating CI/CD pipelines, strict identity security, and automated worker deployments via GitHub Actions.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div class="container footer-content">
          <div class="social-links">
            <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:brian@brianlee.net">Email</a>
          </div>
          <p>© 2026 Brian Lee (brianlee.net). All rights reserved. Deployed on Cloudflare Workers.</p>
        </div>
      </footer>
    </Layout>
  );
});

export default app;
