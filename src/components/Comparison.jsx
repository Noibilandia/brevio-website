import { ScrollReveal } from '../hooks/useScrollReveal';
import './Comparison.css';

export function Comparison() {
  const features = [
    { name: 'All messages in one place', brevio: true, others: false },
    { name: 'AI-powered summaries', brevio: true, others: false },
    { name: 'Smart notification batching', brevio: true, others: false },
    { name: 'Reply from unified inbox', brevio: true, others: false },
    { name: 'Cross-app search', brevio: true, others: 'Limited' },
    { name: 'Custom filter rules', brevio: true, others: 'Basic' },
    { name: 'Team shared inboxes', brevio: true, others: 'Enterprise only' },
    { name: 'Works with 50+ apps', brevio: true, others: 'Limited' },
    { name: 'End-to-end encryption', brevio: true, others: 'Varies' },
    { name: 'Mobile apps', brevio: true, others: true },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <span className="check-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
      );
    }
    if (value === false) {
      return (
        <span className="x-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </span>
      );
    }
    return <span className="partial-text">{value}</span>;
  };

  return (
    <section className="section comparison">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Comparison</span>
          <h2 className="section-title">
            Chesly vs
            <br />
            <span className="text-gradient">app switching</span>
          </h2>
          <p className="section-description">
            Stop juggling multiple apps. See why Chesly is the smarter way
            to manage all your messages.
          </p>
        </ScrollReveal>

        <ScrollReveal className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Feature</th>
                <th className="brevio-col">
                  <div className="col-header brevio-header">
                    <span className="col-logo">Chesly</span>
                    <span className="col-badge">Recommended</span>
                  </div>
                </th>
                <th className="others-col">
                  <div className="col-header">
                    <span className="col-logo">Using 10+ Apps</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.name} style={{ animationDelay: `${index * 50}ms` }}>
                  <td className="feature-name">{feature.name}</td>
                  <td className="brevio-value" data-label="Chesly">{renderValue(feature.brevio)}</td>
                  <td className="others-value" data-label="Using 10+ Apps">{renderValue(feature.others)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        <ScrollReveal className="comparison-cta" delay={500}>
          <p>Ready to simplify your message chaos?</p>
          <a href="#pricing" className="btn btn-primary btn-lg">
            Try Chesly Free
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
