import './NotFound.css';

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-code">404</div>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-description">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="not-found-actions">
          <a href="/" className="btn btn-primary btn-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Go Home
          </a>
          <a href="#pricing" className="btn btn-secondary btn-lg">
            View Pricing
          </a>
        </div>
      </div>

      <div className="not-found-decoration">
        <div className="not-found-orb orb-1"></div>
        <div className="not-found-orb orb-2"></div>
      </div>
    </div>
  );
}
