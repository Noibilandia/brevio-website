import { ScrollReveal } from '../hooks/useScrollReveal';
import './ValueProposition.css';

export function ValueProposition() {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 15h0M2 9.5h20"/>
        </svg>
      ),
      title: 'One Unified Inbox',
      description: 'All your messages from Slack, Email, WhatsApp, Discord, Teams—in one beautiful interface.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
          <path d="M12 12v8"/>
          <path d="M8 18h8"/>
        </svg>
      ),
      title: 'AI Summaries',
      description: 'Get instant AI-powered summaries of long threads. Know what matters in seconds.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: 'Save 5+ Hours/Week',
      description: 'Stop context-switching between apps. Reclaim your time for deep work that matters.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Private & Secure',
      description: 'Your messages stay yours. End-to-end encryption, SOC2 compliant, GDPR ready.',
    },
  ];

  return (
    <section className="section value-proposition">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Why Chesly</span>
          <h2 className="section-title">
            Stop drowning in
            <br />
            <span className="text-gradient">notification chaos</span>
          </h2>
          <p className="section-description">
            The average person checks 10+ apps for messages daily.
            Chesly brings everything together so you can focus on what matters.
          </p>
        </ScrollReveal>

        <div className="values-grid grid grid-4">
          {values.map((value, index) => (
            <ScrollReveal
              key={value.title}
              className="value-card card"
              delay={200 + index * 100}
            >
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
