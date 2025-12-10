import { ScrollReveal } from '../hooks/useScrollReveal';
import './ProblemSolution.css';

export function ProblemSolution() {
  const problems = [
    'Constantly switching between 10+ apps',
    'Missing important messages in the noise',
    'Hours wasted searching for conversations',
    'Notification overload and burnout',
  ];

  const solutions = [
    'One unified inbox for everything',
    'AI highlights what actually matters',
    'Instant search across all your apps',
    'Smart notifications that respect your focus',
  ];

  return (
    <section className="section problem-solution">
      <div className="container">
        <div className="ps-grid">
          <ScrollReveal className="ps-content">
            <span className="section-badge">The Challenge</span>
            <h2 className="section-title text-left">
              Scattered messages are
              <br />
              <span className="text-gradient">killing your productivity</span>
            </h2>
            <p className="section-description text-left">
              The average person checks messages across 10+ apps daily.
              That's hours lost to context-switching and notification chaos.
            </p>

            <div className="ps-comparison">
              <div className="ps-column ps-problem">
                <h4 className="ps-column-title">
                  <span className="ps-icon ps-icon-problem">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </span>
                  Without Chesly
                </h4>
                <ul className="ps-list">
                  {problems.map((item, i) => (
                    <li key={i} className="ps-item ps-item-problem">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="ps-column ps-solution">
                <h4 className="ps-column-title">
                  <span className="ps-icon ps-icon-solution">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  With Chesly
                </h4>
                <ul className="ps-list">
                  {solutions.map((item, i) => (
                    <li key={i} className="ps-item ps-item-solution">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="ps-visual" delay={200}>
            <div className="ps-visual-container">
              <div className="ps-visual-before">
                <div className="chaos-grid">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="chaos-item" style={{ animationDelay: `${i * 0.2}s` }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="visual-label">Before</span>
              </div>
              <div className="ps-visual-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
              <div className="ps-visual-after">
                <div className="order-grid">
                  <div className="order-main">
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="8" fill="url(#brevio-ps-gradient)"/>
                      <path d="M8 16h16M8 11h12M8 21h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="brevio-ps-gradient" x1="0" y1="0" x2="32" y2="32">
                          <stop stopColor="#7c3aed"/>
                          <stop offset="1" stopColor="#22d3ee"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="order-side">
                    <div className="order-item"></div>
                    <div className="order-item"></div>
                    <div className="order-item"></div>
                  </div>
                </div>
                <span className="visual-label">After</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
