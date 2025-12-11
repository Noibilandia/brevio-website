import { ScrollReveal } from '../hooks/useScrollReveal';
import { useDeviceDetect, getDownloadInfo } from '../hooks/useDeviceDetect';
import { useSound } from '../hooks/useSound';
import { AppStoreBadges } from './SmartDownload';
import './Hero.css';
import './SmartDownload.css';

export function Hero({ onWatchDemo }) {
  const { os, isMobile } = useDeviceDetect();
  const downloadInfo = getDownloadInfo(os);
  const { playClickSound } = useSound();
  const apps = [
    { name: 'Slack', color: '#4A154B', icon: 'S' },
    { name: 'Gmail', color: '#EA4335', icon: 'G' },
    { name: 'WhatsApp', color: '#25D366', icon: 'W' },
    { name: 'Discord', color: '#5865F2', icon: 'D' },
    { name: 'Teams', color: '#6264A7', icon: 'T' },
  ];

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
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
            <a href={downloadInfo.url} className="btn btn-primary btn-lg" onClick={playClickSound}>
              {downloadInfo.icon === 'apple' && (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              )}
              {downloadInfo.icon === 'windows' && (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm7 .25l10 .15V21l-10-1.91V13.25z"/>
                </svg>
              )}
              {downloadInfo.icon === 'linux' && (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.336.027.678.127.982.3.39-.96.947-1.79 1.67-2.49.723-.7 1.577-1.26 2.51-1.64.932-.38 1.912-.58 2.917-.58s1.985.2 2.917.58c.933.38 1.787.94 2.51 1.64.723.7 1.28 1.53 1.67 2.49.304-.173.646-.273.982-.3.123-.805-.009-1.657-.287-2.489-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z"/>
                </svg>
              )}
              {downloadInfo.icon === 'android' && (
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.523 15.341c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906zm-11.046 0c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906zm11.408-6.121l1.986-3.44a.413.413 0 00-.715-.412l-2.011 3.484a12.178 12.178 0 00-5.145-1.092 12.178 12.178 0 00-5.145 1.092L4.844 5.368a.413.413 0 10-.715.412l1.986 3.44C2.698 11.24.598 14.958.598 19.209h22.804c0-4.251-2.1-7.969-5.517-9.989z"/>
                </svg>
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
            <button onClick={() => { playClickSound(); onWatchDemo(); }} className="btn btn-secondary btn-lg">
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
                    '--app-color': app.color,
                    '--delay': `${i * 0.5}s`,
                    '--position': i,
                  }}
                >
                  <span>{app.icon}</span>
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
                        <div className="msg-avatar slack">S</div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Alex from Design</span>
                            <span className="msg-time">2m</span>
                          </div>
                          <p className="msg-preview">New mockups ready for review! 🎨</p>
                        </div>
                      </div>

                      <div className="message-row unread">
                        <div className="msg-avatar gmail">G</div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Sarah Chen</span>
                            <span className="msg-time">15m</span>
                          </div>
                          <p className="msg-preview">Re: Q4 Planning - Updated timeline</p>
                        </div>
                      </div>

                      <div className="message-row">
                        <div className="msg-avatar whatsapp">W</div>
                        <div className="msg-content">
                          <div className="msg-header">
                            <span className="msg-sender">Team Lunch</span>
                            <span className="msg-time">1h</span>
                          </div>
                          <p className="msg-preview">Anyone want Thai food today?</p>
                        </div>
                      </div>

                      <div className="message-row">
                        <div className="msg-avatar discord">D</div>
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

            {/* Notification popups */}
            <div className="hero-notification notification-1">
              <div className="notif-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div className="notif-content">
                <span className="notif-title">AI Summary Ready</span>
                <span className="notif-text">5 messages summarized</span>
              </div>
            </div>

            <div className="hero-notification notification-2">
              <div className="notif-icon time-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div className="notif-content">
                <span className="notif-title">Time Saved</span>
                <span className="notif-text">2.5 hrs today</span>
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
                style={{ '--app-color': app.color, '--index': index }}
              >
                <span className="logo-icon">{app.icon}</span>
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
