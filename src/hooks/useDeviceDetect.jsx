import { useState } from 'react';

const DEFAULT_DEVICE = {
  os: 'unknown',
  isMobile: false,
  isDesktop: true,
};

function detectDevice() {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return DEFAULT_DEVICE;
  }

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const platform = navigator.platform || '';

  let os = 'unknown';
  let isMobile = false;

  // Check for mobile devices first
  if (/android/i.test(userAgent)) {
    os = 'android';
    isMobile = true;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    os = 'ios';
    isMobile = true;
  } else if (/windows phone/i.test(userAgent)) {
    os = 'windows';
    isMobile = true;
  }
  // Check for desktop OS
  else if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(platform) || /Mac OS X/.test(userAgent)) {
    os = 'macos';
  } else if (/Win32|Win64|Windows|WinCE/.test(platform) || /Windows/.test(userAgent)) {
    os = 'windows';
  } else if (/Linux/.test(platform) || /Linux/.test(userAgent)) {
    os = 'linux';
  }

  return {
    os,
    isMobile,
    isDesktop: !isMobile,
  };
}

export function useDeviceDetect() {
  const [device] = useState(detectDevice);

  return device;
}

// Helper to get download info based on device
export function getDownloadInfo(os) {
  const downloads = {
    ios: {
      label: 'Download on App Store',
      shortLabel: 'App Store',
      icon: 'apple',
      url: '#', // Replace with actual App Store URL
    },
    android: {
      label: 'Get it on Google Play',
      shortLabel: 'Google Play',
      icon: 'android',
      url: '#', // Replace with actual Play Store URL
    },
    macos: {
      label: 'Download for Mac',
      shortLabel: 'Mac',
      icon: 'apple',
      url: '#', // Replace with actual Mac download URL
    },
    windows: {
      label: 'Download for Windows',
      shortLabel: 'Windows',
      icon: 'windows',
      url: '#', // Replace with actual Windows download URL
    },
    linux: {
      label: 'Download for Linux',
      shortLabel: 'Linux',
      icon: 'linux',
      url: '#', // Replace with actual Linux download URL
    },
    unknown: {
      label: 'Download Free',
      shortLabel: 'Download',
      icon: 'download',
      url: '#pricing',
    },
  };

  return downloads[os] || downloads.unknown;
}
