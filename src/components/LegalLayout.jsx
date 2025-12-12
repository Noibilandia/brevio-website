import { Link } from 'react-router-dom';
import './LegalLayout.css';

export function LegalLayout({ title, updatedAt, children }) {
  return (
    <section className="legal-page">
      <div className="legal-bg" aria-hidden="true">
        <div className="legal-gradient"></div>
        <div className="legal-grid"></div>
        <div className="legal-glow legal-glow-1"></div>
        <div className="legal-glow legal-glow-2"></div>
      </div>

      <div className="container">
        <header className="legal-header">
          <Link to="/" className="legal-back btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to home
          </Link>

          <h1 className="legal-title">
            <span className="text-gradient">{title}</span>
          </h1>
          {updatedAt ? <p className="legal-updated">Last updated: {updatedAt}</p> : null}
        </header>

        <div className="legal-card">
          <div className="legal-content">{children}</div>
        </div>
      </div>
    </section>
  );
}

