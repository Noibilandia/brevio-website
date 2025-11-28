import { useDeviceDetect, getDownloadInfo } from '../hooks/useDeviceDetect';
import './SmartDownload.css';

// Platform icons as components
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm7 .25l10 .15V21l-10-1.91V13.25z"/>
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202-.23-.09-.365-.334-.381-.645v-.105c0-.267.063-.465.17-.659.033-.065.067-.13.104-.193.075-.126.163-.239.263-.335.1-.097.208-.176.323-.234a.87.87 0 01.41-.1zm-1.034.156a.97.97 0 00-.232.03.862.862 0 00-.373.193.881.881 0 00-.22.27c-.067.131-.107.263-.12.399v.041c.005.333.14.465.3.599.166.066.443.133.6.2v-.2a1.18 1.18 0 01.06-.4c.05-.133.127-.266.22-.332.076-.067.167-.133.262-.133h.017c.058 0 .116.017.17.05.053-.133.103-.266.133-.4v-.105c0-.065-.003-.13-.01-.193-.016-.066-.04-.133-.068-.199-.044-.132-.123-.265-.24-.333a.573.573 0 00-.123-.066c-.062-.027-.127-.04-.194-.04l-.02-.001h-.162zm2.86 2.8c.163.034.324.08.483.14.432.14.867.367 1.234.7.464.4.8.864 1.033 1.443l-.002-.01-.002-.01c.023-.034.04-.066.06-.1.31-.467.615-.867.9-1.167-.21-.234-.465-.434-.755-.6-.337-.2-.677-.333-1-.433-.322-.1-.63-.166-.908-.2a3.566 3.566 0 00-.623-.033l-.047.003c-.207.012-.407.038-.373.27zm-3.685.867c.01 0 .016 0 .022.003.163 0 .324.065.465.2.14.132.24.332.3.532.043.132.063.265.063.465v.268c-.004.067-.006.134-.006.201v.073c-.047.333-.14.533-.266.733-.16.133-.342.265-.542.332-.2.065-.398.132-.595.132-.065 0-.13-.008-.194-.02-.254-.032-.465-.1-.632-.2a.964.964 0 01-.333-.333c-.067-.132-.117-.265-.117-.465v-.2c-.003-.067-.003-.134-.003-.2v-.2c-.007-.334.073-.534.167-.734.116-.133.253-.266.433-.4.124-.087.253-.137.397-.17a.975.975 0 01.215-.017h.126zm-.123.47h-.022l-.074.003c-.084.012-.167.046-.243.1a.936.936 0 00-.3.267c-.066.132-.117.266-.117.4v.4c0 .067 0 .134.003.2v.067c0 .067.033.134.067.2a.6.6 0 00.2.2c.1.067.2.1.333.133.065.01.13.015.195.015.133 0 .265-.033.398-.1.132-.067.232-.166.298-.332a.69.69 0 00.1-.266v-.4-.067-.133c0-.2-.033-.333-.1-.466a.696.696 0 00-.232-.333c-.1-.1-.2-.133-.332-.167a.59.59 0 00-.174-.02zm1.267 2.066v.002-.002z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.523 15.341c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906zm-11.046 0c-.5 0-.906.406-.906.906s.406.906.906.906.906-.406.906-.906-.406-.906-.906-.906zm11.408-6.121l1.986-3.44a.413.413 0 00-.715-.412l-2.011 3.484a12.178 12.178 0 00-5.145-1.092 12.178 12.178 0 00-5.145 1.092L4.844 5.368a.413.413 0 10-.715.412l1.986 3.44C2.698 11.24.598 14.958.598 19.209h22.804c0-4.251-2.1-7.969-5.517-9.989z"/>
  </svg>
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
  const { os, isMobile } = useDeviceDetect();
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
