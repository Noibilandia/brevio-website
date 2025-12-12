import { LegalLayout } from '../components/LegalLayout';

export function Security() {
  return (
    <LegalLayout title="Security" updatedAt="December 12, 2025">
      <p>
        We take security seriously and work to protect the Service and its users.
      </p>

      <h2>1. Security Practices</h2>
      <ul>
        <li>We use reasonable administrative, technical, and organizational safeguards.</li>
        <li>We work to prevent unauthorized access, misuse, and abuse.</li>
        <li>We monitor for suspicious activity and respond to incidents.</li>
      </ul>

      <h2>2. Reporting Vulnerabilities</h2>
      <p>
        If you believe you&apos;ve found a security vulnerability, please email <a href="mailto:support@chesly.app">support@chesly.app</a> with
        details and reproduction steps. Please do not publicly disclose security issues until we have had a reasonable
        opportunity to investigate.
      </p>
    </LegalLayout>
  );
}

