import { useDeviceDetect, getDownloadInfo } from '../hooks/useDeviceDetect';
import './SmartDownload.css';

// Platform icons as components - using uploaded logo images with theme-adaptive styling
const AppleIcon = () => (
  <img
    src="/applelogo.png"
    alt="Apple"
    width="20"
    height="20"
    className="platform-logo"
    style={{ objectFit: 'contain' }}
  />
);

const WindowsIcon = () => (
  <img
    src="/windowslogo.png"
    alt="Windows"
    width="20"
    height="20"
    className="platform-logo"
    style={{ objectFit: 'contain' }}
  />
);

const LinuxIcon = () => (
  <img
    src="/linuxlogo.png"
    alt="Linux"
    width="20"
    height="20"
    className="platform-logo"
    style={{ objectFit: 'contain' }}
  />
);

const AndroidIcon = () => (
  <img
    src="/androidlogo.png"
    alt="Android"
    width="20"
    height="20"
    className="platform-logo"
    style={{ objectFit: 'contain' }}
  />
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const getIcon = (iconType) => {
  switch (iconType) {
    case 'apple': return <AppleIcon />;
    case 'windows': return <WindowsIcon />;
    case 'linux': return <LinuxIcon />;
    case 'android': return <AndroidIcon />;
    default: return <DownloadIcon />;
  }
};

export function SmartDownloadButton({ className = '', showAllPlatforms = false }) {
  const { os } = useDeviceDetect();
  const downloadInfo = getDownloadInfo(os);

  if (showAllPlatforms) {
    return (
      <div className={`smart-download-all ${className}`}>
        <PlatformBadge platform="ios" />
        <PlatformBadge platform="android" />
        <PlatformBadge platform="macos" />
        <PlatformBadge platform="windows" />
        <PlatformBadge platform="linux" />
      </div>
    );
  }

  return (
    <a href={downloadInfo.url} className={`btn btn-primary btn-lg smart-download-btn ${className}`}>
      {getIcon(downloadInfo.icon)}
      {downloadInfo.label}
    </a>
  );
}

export function PlatformBadge({ platform, active = false }) {
  const info = getDownloadInfo(platform);

  return (
    <a
      href={info.url}
      className={`platform-badge ${active ? 'active' : ''}`}
      aria-label={info.label}
    >
      {getIcon(info.icon)}
      <span>{info.shortLabel}</span>
    </a>
  );
}

export function AppStoreBadges({ className = '' }) {
  const { os, isMobile } = useDeviceDetect();

  // Show mobile badges for mobile devices, desktop badges for desktop
  if (isMobile) {
    return (
      <div className={`app-store-badges ${className}`}>
        <a href="#" className={`store-badge ${os === 'ios' ? 'highlighted' : ''}`} aria-label="Download on the App Store">
          <div className="store-badge-content">
            <AppleIcon />
            <div className="store-badge-text">
              <span className="store-badge-small">Download on the</span>
              <span className="store-badge-large">App Store</span>
            </div>
          </div>
        </a>
        <a href="#" className={`store-badge ${os === 'android' ? 'highlighted' : ''}`} aria-label="Get it on Google Play">
          <div className="store-badge-content">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
              <path fill="#34A853" d="M16.247 15.055l-2.455-2.455L3.609 22.186l.075.039 12.563-7.17z"/>
              <path fill="#FBBC04" d="M20.827 10.627l-3.193-1.822-3.842 3.195 3.842 3.195 3.193-1.822c.726-.414.726-1.332 0-1.746z"/>
              <path fill="#EA4335" d="M3.684 1.853l10.108 10.747 2.455-2.455L3.684 1.853z"/>
            </svg>
            <div className="store-badge-text">
              <span className="store-badge-small">GET IT ON</span>
              <span className="store-badge-large">Google Play</span>
            </div>
          </div>
        </a>
      </div>
    );
  }

  // Desktop badges
  return (
    <div className={`app-store-badges desktop-badges ${className}`}>
      <a href="#" className={`store-badge ${os === 'macos' ? 'highlighted' : ''}`} aria-label="Download for Mac">
        <div className="store-badge-content">
          <AppleIcon />
          <div className="store-badge-text">
            <span className="store-badge-small">Download for</span>
            <span className="store-badge-large">macOS</span>
          </div>
        </div>
      </a>
      <a href="#" className={`store-badge ${os === 'windows' ? 'highlighted' : ''}`} aria-label="Download for Windows">
        <div className="store-badge-content">
          <WindowsIcon />
          <div className="store-badge-text">
            <span className="store-badge-small">Download for</span>
            <span className="store-badge-large">Windows</span>
          </div>
        </div>
      </a>
      <a href="#" className={`store-badge ${os === 'linux' ? 'highlighted' : ''}`} aria-label="Download for Linux">
        <div className="store-badge-content">
          <LinuxIcon />
          <div className="store-badge-text">
            <span className="store-badge-small">Download for</span>
            <span className="store-badge-large">Linux</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export function MobileStoreBadges({ className = '' }) {
  return (
    <div className={`mobile-store-badges ${className}`}>
      <a href="#" className="store-badge" aria-label="Download on the App Store">
        <div className="store-badge-content">
          <AppleIcon />
          <div className="store-badge-text">
            <span className="store-badge-small">Download on the</span>
            <span className="store-badge-large">App Store</span>
          </div>
        </div>
      </a>
      <a href="#" className="store-badge" aria-label="Get it on Google Play">
        <div className="store-badge-content">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z"/>
            <path fill="#34A853" d="M16.247 15.055l-2.455-2.455L3.609 22.186l.075.039 12.563-7.17z"/>
            <path fill="#FBBC04" d="M20.827 10.627l-3.193-1.822-3.842 3.195 3.842 3.195 3.193-1.822c.726-.414.726-1.332 0-1.746z"/>
            <path fill="#EA4335" d="M3.684 1.853l10.108 10.747 2.455-2.455L3.684 1.853z"/>
          </svg>
          <div className="store-badge-text">
            <span className="store-badge-small">GET IT ON</span>
            <span className="store-badge-large">Google Play</span>
          </div>
        </div>
      </a>
    </div>
  );
}
