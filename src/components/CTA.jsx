import { ScrollReveal } from '../hooks/useScrollReveal';
import { useDeviceDetect, getDownloadInfo } from '../hooks/useDeviceDetect';
import { AppStoreBadges } from './SmartDownload';
import './CTA.css';
import './SmartDownload.css';

export function CTA() {
  const { os } = useDeviceDetect();
  const downloadInfo = getDownloadInfo(os);

  return (
    <section className="section cta">
      <div className="cta-bg">
        <div className="cta-gradient"></div>
        <div className="cta-grid-pattern"></div>
        <div className="cta-glow cta-glow-1"></div>
        <div className="cta-glow cta-glow-2"></div>
      </div>

      <div className="container">
        <ScrollReveal className="cta-content">
          <span className="section-badge">Get Started Today</span>
          <h2 className="cta-title">
            Ready to reclaim
            <br />
            <span className="text-gradient">your time?</span>
          </h2>
          <p className="cta-description">
            Download Brevio free and unify all your messages today.
            Upgrade to Pro anytime for AI-powered features.
          </p>
          <div className="cta-actions">
            <a href={downloadInfo.url} className="btn btn-primary btn-lg">
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
            <a href="#pricing" className="btn btn-secondary btn-lg">
              View Pro Features
            </a>
          </div>
          <p className="cta-note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Free forever • No credit card • Upgrade anytime
          </p>

          <AppStoreBadges className="cta-store-badges" />
        </ScrollReveal>
      </div>
    </section>
  );
}
