import { ScrollReveal } from '../hooks/useScrollReveal';
import { useDeviceDetect, getDownloadInfo } from '../hooks/useDeviceDetect';
import { AppStoreBadges } from './SmartDownload';
import './Hero.css';
import './SmartDownload.css';

export function Hero({ onWatchDemo }) {
  const { os, isMobile } = useDeviceDetect();
  const downloadInfo = getDownloadInfo(os);
  const apps = [
    { name: 'Slack', logo: '/slack-logo.png', color: '#4A154B' },
    { name: 'Gmail', logo: '/gmail-logo.png', color: '#EA4335' },
    { name: 'WhatsApp', logo: '/whatsapp-logo.png', color: '#25D366' },
    { name: 'Discord', logo: '/discord-logo.png', color: '#5865F2' },
    { name: 'Teams', logo: '/teams-logo.png', color: '#6264A7' },
  ];

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>

      <div className="container hero-container">
        <ScrollReveal className="hero-content" delay={150}>
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span>AI-Powered Unified Inbox</span>
          </div>

          <h1 className="hero-title">
            All your messages.
            <br />
            <span className="text-gradient">Half the time.</span>
          </h1>

          <p className="hero-description">
            Connect Slack, Email, WhatsApp, Discord & more into one inbox.
            Upgrade to Pro for AI summaries that save hours every week.
          </p>

          <div className="hero-actions">
            <a href={downloadInfo.url} className="btn btn-primary btn-lg">
              {downloadInfo.icon === 'apple' && (
                <img src="/applelogo.png" alt="Apple" width="20" height="20" className="platform-logo" style={{ objectFit: 'contain' }} />
              )}
              {downloadInfo.icon === 'windows' && (
                <img src="/windowslogo.png" alt="Windows" width="20" height="20" className="platform-logo" style={{ objectFit: 'contain' }} />
              )}
              {downloadInfo.icon === 'linux' && (
                <img src="/linuxlogo.png" alt="Linux" width="20" height="20" className="platform-logo" style={{ objectFit: 'contain' }} />
              )}
              {downloadInfo.icon === 'android' && (
                <img src="/androidlogo.png" alt="Android" width="20" height="20" className="platform-logo" style={{ objectFit: 'contain' }} />
              )}
              {downloadInfo.icon === 'download' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              )}
              {downloadInfo.label}
            </a>
            <button onClick={onWatchDemo} className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              See How It Works
            </button>
          </div>

          <p className="hero-free-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Free forever • No credit card required • AI features with Pro
          </p>

          <AppStoreBadges />

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">5+ hrs</span>
              <span className="stat-label">Saved per week</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">App integrations</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">25K+</span>
              <span className="stat-label">Happy users</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-visual" delay={500}>
          <div className="hero-phone-container">
            {/* Floating app icons */}
            <div className="floating-apps">
              {apps.map((app, i) => (
                <div
                  key={app.name}
                  className="floating-app"
                  style={{
                    '--delay': `${i * 0.5}s`,
                    '--position': i,
                  }}
                >
                  <img src={app.logo} alt={app.name} className="app-logo-img" />
                </div>
              ))}
            </div>

            {/* Main phone */}
            <div className="hero-phone">
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-status-bar">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <span className="status-signal"></span>
                      <span className="status-wifi"></span>
                      <span className="status-battery"></span>
                    </div>
                  </div>

                  <div className="phone-app">
                    <div className="app-header">
                      <div className="app-logo">
                        <svg viewBox="0 0 32 32" fill="none">
                          <rect width="32" height="32" rx="8" fill="url(#phone-gradient)"/>
                          <path d="M8 16h16M8 11h12M8 21h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          <defs>
                            <linearGradient id="phone-gradient" x1="0" y1="0" x2="32" y2="32">
                              <stop stopColor="#7c3aed"/>
                              <stop offset="1" stopColor="#22d3ee"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <span className="app-title">Inbox</span>
                      <div className="app-actions">
                        <span className="unread-badge">12</span>
                      </div>
                    </div>

                    <div className="app-messages">
                      <div className="message-row unread">
                        <div className="msg-avatar">
                          <img src="/slack-logo.png" alt="Slack" className="app-logo-img" />
                        </div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Alex from Design</span>
                            <span className="msg-time">2m</span>
                          </div>
                          <p className="msg-preview">New mockups ready for review! 🎨</p>
                        </div>
                      </div>

                      <div className="message-row unread">
                        <div className="msg-avatar">
                          <img src="/gmail-logo.png" alt="Gmail" className="app-logo-img" />
                        </div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Sarah Chen</span>
                            <span className="msg-time">15m</span>
                          </div>
                          <p className="msg-preview">Re: Q4 Planning - Updated timeline</p>
                        </div>
                      </div>

                      <div className="message-row">
                        <div className="msg-avatar">
                          <img src="/whatsapp-logo.png" alt="WhatsApp" className="app-logo-img" />
                        </div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Team Lunch</span>
                            <span className="msg-time">1h</span>
                          </div>
                          <p className="msg-preview">Anyone want Thai food today?</p>
                        </div>
                      </div>

                      <div className="message-row">
                        <div className="msg-avatar">
                          <img src="/discord-logo.png" alt="Discord" className="app-logo-img" />
                        </div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">#dev-general</span>
                            <span className="msg-time">2h</span>
                          </div>
                          <p className="msg-preview">Build completed successfully ✓</p>
                        </div>
                      </div>
                    </div>

                    <div className="app-nav">
                      <div className="nav-tab active">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="M7 15h0M2 9.5h20"/>
                        </svg>
                        <span>Inbox</span>
                      </div>
                      <div className="nav-tab">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
                          <path d="M12 12v8M8 18h8"/>
                        </svg>
                        <span>AI</span>
                      </div>
                      <div className="nav-tab">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                        </svg>
                        <span>Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="hero-trusted" delay={900}>
          <p className="trusted-label">Works with all your favorite apps</p>
          <div className="trusted-logos">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className="trusted-logo"
                style={{ '--index': index }}
              >
                <div className="logo-icon">
                  <img src={app.logo} alt={app.name} className="app-logo-img" />
                </div>
                <span className="logo-name">{app.name}</span>
              </div>
            ))}
            <div className="trusted-logo more" style={{ '--index': apps.length }}>
              <span className="logo-icon">+</span>
              <span className="logo-name">50 more</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
