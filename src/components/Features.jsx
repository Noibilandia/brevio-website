import { ScrollReveal } from '../hooks/useScrollReveal';
import './Features.css';

export function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 15h0M2 9.5h20"/>
        </svg>
      ),
      title: 'Unified Inbox',
      description: 'Every message from every app, organized in one clean interface.',
      color: '#7c3aed',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"/>
          <path d="M12 12v8M8 18h8"/>
        </svg>
      ),
      title: 'AI Summarization',
      description: 'Long threads? Get the gist in seconds with AI-powered summaries.',
      color: '#22d3ee',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
        </svg>
      ),
      title: 'Smart Filters',
      description: 'Custom rules decide what gets compacted and what stays priority.',
      color: '#8b5cf6',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
      ),
      title: 'Smart Notifications',
      description: 'AI learns what\'s urgent vs. what can wait. No more notification fatigue.',
      color: '#f59e0b',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      ),
      title: 'Reply From Anywhere',
      description: 'Respond to Slack, Email, or WhatsApp—all without switching apps.',
      color: '#10b981',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      ),
      title: 'Instant Search',
      description: 'Find any message across all your apps with lightning-fast search.',
      color: '#ec4899',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Team Workspaces',
      description: 'Shared inboxes for teams. Everyone sees what matters, nobody misses a beat.',
      color: '#6366f1',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Desktop & Mobile',
      description: 'Native apps for Mac, Windows, iOS, and Android. Your inbox everywhere.',
      color: '#ef4444',
    },
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Features</span>
          <h2 className="section-title">
            Everything you need to
            <br />
            <span className="text-gradient">tame your inbox</span>
          </h2>
          <p className="section-description">
            Powerful features designed to save you time and keep you focused.
            No more app-switching. No more missed messages.
          </p>
        </ScrollReveal>

        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              className="feature-card card"
              delay={200 + index * 120}
            >
              <div
                className="feature-icon"
                style={{ '--feature-color': feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
