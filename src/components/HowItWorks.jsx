import { ScrollReveal } from '../hooks/useScrollReveal';
import './HowItWorks.css';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect your apps',
      description: 'Link Slack, Gmail, WhatsApp, Discord, Teams, and more in just a few clicks. We support 50+ integrations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Set your preferences',
      description: 'Tell Brevio what\'s important. Set rules for AI summaries, notification priorities, and smart filters.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Let AI do the work',
      description: 'Brevio\'s AI reads and summarizes your messages, highlighting what needs your attention right now.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
          <path d="M12 12v8M8 18h8"/>
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Reclaim your time',
      description: 'Reply to any message from one place. Spend less time managing notifications, more time on deep work.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="demo" className="section how-it-works">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">
            Get started in
            <br />
            <span className="text-gradient">under 2 minutes</span>
          </h2>
          <p className="section-description">
            No complex setup. No learning curve.
            Connect your apps and let Brevio handle the rest.
          </p>
        </ScrollReveal>

        <div className="steps-container">
          <div className="steps-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                className="step-card"
                delay={index * 150}
              >
                <div className="step-number-container">
                  <span className="step-number">{step.number}</span>
                  <div className="step-dot"></div>
                </div>
                <div className="step-content">
                  <div className="step-icon">{step.icon}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="how-cta" delay={600}>
          <a href="#pricing" className="btn btn-primary btn-lg">
            Start Your Free Trial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
