const SlackLogo = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <g fill="none">
      <rect x="9" y="26" width="12" height="28" rx="6" fill="#36C5F0" />
      <rect x="17" y="34" width="12" height="20" rx="6" fill="#36C5F0" />
      <rect x="23" y="9" width="12" height="28" rx="6" fill="#2EB67D" />
      <rect x="31" y="17" width="12" height="20" rx="6" fill="#2EB67D" />
      <rect x="31" y="26" width="24" height="12" rx="6" fill="#ECB22E" />
      <rect x="31" y="34" width="16" height="12" rx="6" fill="#ECB22E" />
      <rect x="17" y="26" width="24" height="12" rx="6" fill="#E01E5A" />
      <rect x="9" y="26" width="16" height="12" rx="6" fill="#E01E5A" />
    </g>
  </svg>
);

const GmailLogo = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <g fill="none" strokeWidth="6" strokeLinejoin="round">
      <path d="M10 18v28a4 4 0 004 4h36a4 4 0 004-4V18" stroke="#EA4335" />
      <path d="M10 18l22 16L54 18" stroke="#EA4335" />
      <path d="M10 46V22l18 13v17" stroke="#34A853" />
      <path d="M54 46V22L36 35v17" stroke="#4285F4" />
    </g>
  </svg>
);

const WhatsAppLogo = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <circle cx="32" cy="32" r="26" fill="#25D366" />
    <path
      fill="#25D366"
      stroke="white"
      strokeWidth="5"
      strokeLinejoin="round"
      d="M18 46l2.5-8.5A15 15 0 1132 47c-2.4 0-4.7-.6-6.7-1.7L18 46z"
    />
    <path
      fill="white"
      d="M28.8 24.2c-.3-.6-.5-.6-1-.6h-1c-.3 0-.7.1-1 .6-.3.6-1.3 1.3-1.3 3.2s1.3 3.7 1.5 3.9c.2.3 2.5 4 6.1 5.4 3 1.2 3.6 1 4.2 1 .6 0 2.1-.8 2.4-1.7.3-.9.3-1.6.2-1.7-.1-.1-.3-.2-.6-.4-.3-.2-2.1-1.1-2.4-1.2-.3-.1-.6-.2-.8.2-.3.4-.9 1.2-1.1 1.4-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.7-1-1-1.7-2.3-1.9-2.7-.2-.4 0-.6.1-.8.2-.2.3-.4.4-.6.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-1-2.6-1.3-3.5z"
    />
  </svg>
);

const DiscordLogo = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <rect x="8" y="14" width="48" height="36" rx="10" fill="#5865F2" />
    <path
      d="M23 22c4-2 14-2 18 0l2 6-2 1c-.5-1.2-1-1.8-1.5-2.5-4 0-9 0-13 0-.5.7-1 1.3-1.5 2.5l-2-1 2-6z"
      fill="#4752C4"
    />
    <circle cx="26" cy="34" r="3" fill="white" />
    <circle cx="38" cy="34" r="3" fill="white" />
    <path
      d="M26 40c3 2 9 2 12 0"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const TeamsLogo = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <rect x="8" y="18" width="30" height="32" rx="6" fill="#6264A7" />
    <rect x="38" y="22" width="12" height="28" rx="4" fill="#8B8CC7" />
    <circle cx="48" cy="18" r="7" fill="#8B8CC7" />
    <circle cx="28" cy="16" r="8" fill="#A6A7DC" />
    <path
      d="M20 24h16v6h-5v16h-6V30h-5z"
      fill="white"
      stroke="white"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const LOGO_MAP = {
  Slack: SlackLogo,
  Gmail: GmailLogo,
  WhatsApp: WhatsAppLogo,
  Discord: DiscordLogo,
  Teams: TeamsLogo,
};

export function AppLogo({ name, className = '' }) {
  const Logo = LOGO_MAP[name];

  if (!Logo) {
    const letter = name?.[0] ?? '?';
    return (
      <div className={`app-logo-fallback ${className}`} aria-label={name}>
        {letter}
      </div>
    );
  }

  return <Logo className={className} role="img" aria-label={name} />;
}
