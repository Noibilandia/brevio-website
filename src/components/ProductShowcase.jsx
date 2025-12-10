import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './ProductShowcase.css';

export function ProductShowcase() {
  const [activeView, setActiveView] = useState(0);

  const views = [
    {
      title: 'Unified Inbox',
      description: 'All your messages in one beautiful, organized view',
    },
    {
      title: 'AI Summaries',
      description: 'Get the key points from any conversation instantly',
    },
    {
      title: 'Smart Filters',
      description: 'Customize exactly what you want to see and when',
    },
  ];

  return (
    <section className="section product-showcase">
      <div className="showcase-bg">
        <div className="showcase-gradient"></div>
        <div className="showcase-orb showcase-orb-1"></div>
        <div className="showcase-orb showcase-orb-2"></div>
      </div>

      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Product</span>
          <h2 className="section-title">
            Beautiful design meets
            <br />
            <span className="text-gradient">intelligent messaging</span>
          </h2>
          <p className="section-description">
            Every pixel crafted for clarity. Every feature designed
            to save you time. See Chesly in action.
          </p>
        </ScrollReveal>

        <ScrollReveal className="showcase-tabs">
          {views.map((view, index) => (
            <button
              key={view.title}
              className={`showcase-tab ${activeView === index ? 'active' : ''}`}
              onClick={() => setActiveView(index)}
            >
              {view.title}
            </button>
          ))}
        </ScrollReveal>

        <ScrollReveal className="showcase-display" delay={200}>
          <div className="showcase-phones">
            {/* Main phone */}
            <div className="showcase-phone main-phone">
              <div className="phone-device">
                <div className="device-notch"></div>
                <div className="device-screen">
                  {activeView === 0 && (
                    <div className="screen-inbox">
                      <div className="screen-header">
                        <span className="screen-title">Inbox</span>
                        <span className="screen-badge">12 new</span>
                      </div>
                      <div className="screen-messages">
                        <div className="screen-msg unread">
                          <div className="screen-avatar slack">S</div>
                          <div className="screen-msg-content">
                            <span className="screen-sender">Slack • Design Team</span>
                            <span className="screen-preview">New mockups ready for review!</span>
                          </div>
                        </div>
                        <div className="screen-msg unread">
                          <div className="screen-avatar gmail">G</div>
                          <div className="screen-msg-content">
                            <span className="screen-sender">Gmail • Sarah Chen</span>
                            <span className="screen-preview">Re: Q4 Planning document</span>
                          </div>
                        </div>
                        <div className="screen-msg">
                          <div className="screen-avatar whatsapp">W</div>
                          <div className="screen-msg-content">
                            <span className="screen-sender">WhatsApp • Team Lunch</span>
                            <span className="screen-preview">Anyone free for lunch today?</span>
                          </div>
                        </div>
                        <div className="screen-msg">
                          <div className="screen-avatar discord">D</div>
                          <div className="screen-msg-content">
                            <span className="screen-sender">Discord • #dev-general</span>
                            <span className="screen-preview">Build completed ✓</span>
                          </div>
                        </div>
                        <div className="screen-msg">
                          <div className="screen-avatar teams">T</div>
                          <div className="screen-msg-content">
                            <span className="screen-sender">Teams • Project Alpha</span>
                            <span className="screen-preview">Meeting notes attached</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeView === 1 && (
                    <div className="screen-summary">
                      <div className="screen-header">
                        <span className="screen-title">AI Summary</span>
                      </div>
                      <div className="summary-card">
                        <div className="summary-source">
                          <div className="screen-avatar slack">S</div>
                          <div>
                            <span className="summary-channel">#product-launch</span>
                            <span className="summary-count">47 messages</span>
                          </div>
                        </div>
                        <div className="summary-points">
                          <div className="summary-point">
                            <span className="point-emoji">📅</span>
                            <span>Launch moved to March 15th</span>
                          </div>
                          <div className="summary-point">
                            <span className="point-emoji">⚠️</span>
                            <span>Legal sign-off needed by Friday</span>
                          </div>
                          <div className="summary-point">
                            <span className="point-emoji">✅</span>
                            <span>Marketing assets approved</span>
                          </div>
                          <div className="summary-point highlight">
                            <span className="point-emoji">👤</span>
                            <span>You were mentioned 3 times</span>
                          </div>
                        </div>
                        <div className="summary-actions">
                          <button className="action-btn">Mark Read</button>
                          <button className="action-btn primary">Reply</button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeView === 2 && (
                    <div className="screen-filters">
                      <div className="screen-header">
                        <span className="screen-title">Smart Filters</span>
                      </div>
                      <div className="filters-list">
                        <div className="filter-card active">
                          <div className="filter-color" style={{ background: '#ef4444' }}></div>
                          <div className="filter-info">
                            <span className="filter-name">Urgent</span>
                            <span className="filter-rule">Keywords: urgent, ASAP</span>
                          </div>
                          <span className="filter-count">3</span>
                        </div>
                        <div className="filter-card">
                          <div className="filter-color" style={{ background: '#7c3aed' }}></div>
                          <div className="filter-info">
                            <span className="filter-name">From Boss</span>
                            <span className="filter-rule">Sender: CEO, CTO</span>
                          </div>
                          <span className="filter-count">5</span>
                        </div>
                        <div className="filter-card">
                          <div className="filter-color" style={{ background: '#22d3ee' }}></div>
                          <div className="filter-info">
                            <span className="filter-name">Mentions Me</span>
                            <span className="filter-rule">Contains: @you</span>
                          </div>
                          <span className="filter-count">8</span>
                        </div>
                        <div className="filter-card">
                          <div className="filter-color" style={{ background: '#10b981' }}></div>
                          <div className="filter-info">
                            <span className="filter-name">Customers</span>
                            <span className="filter-rule">Label: customer</span>
                          </div>
                          <span className="filter-count">12</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="screen-nav">
                    <div className={`nav-item ${activeView === 0 ? 'active' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M7 15h0M2 9.5h20"/>
                      </svg>
                    </div>
                    <div className={`nav-item ${activeView === 1 ? 'active' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                        <path d="M12 12v8M8 18h8"/>
                      </svg>
                    </div>
                    <div className={`nav-item ${activeView === 2 ? 'active' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature highlight cards */}
            <div className="feature-cards">
              <div className="feature-card card-1">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <span>50+ App Integrations</span>
              </div>
              <div className="feature-card card-2">
                <div className="feature-icon ai">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                    <path d="M12 12v8M8 18h8"/>
                  </svg>
                </div>
                <span>AI-Powered Summaries</span>
              </div>
              <div className="feature-card card-3">
                <div className="feature-icon time">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span>Save 5+ Hours Weekly</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="showcase-caption" delay={300}>
          <p>{views[activeView].description}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
