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
              <div className="ps-merge" aria-hidden="true">
                <div className="ps-merge-stage">
                  <div className="ps-merge-center">
                    <img src="/cheslylogo.png" alt="" className="ps-merge-logo" />
                  </div>

                  <div className="ps-app ps-app--slack">
                    <div className="ps-app-inner">
                      <img src="/slack-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="ps-app ps-app--gmail">
                    <div className="ps-app-inner">
                      <img src="/gmail-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="ps-app ps-app--whatsapp">
                    <div className="ps-app-inner">
                      <img src="/whatsapp-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="ps-app ps-app--discord">
                    <div className="ps-app-inner">
                      <img src="/discord-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="ps-app ps-app--teams">
                    <div className="ps-app-inner">
                      <img src="/teams-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                  <div className="ps-app ps-app--telegram">
                    <div className="ps-app-inner">
                      <img src="/telegram-logo.png" alt="" loading="lazy" />
                    </div>
                  </div>
                </div>

                <div className="ps-merge-caption">
                  <span className="ps-merge-caption-left">Scattered apps</span>
                  <span className="ps-merge-caption-dot" aria-hidden="true"></span>
                  <span className="ps-merge-caption-right">Unified in Chesly</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
