import { Link } from 'react-router-dom';
import { LegalLayout } from '../components/LegalLayout';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updatedAt="December 12, 2025">
      <p>
        This Privacy Policy explains how Chesly collects, uses, and shares information when you use our Service. If you
        do not agree with this policy, please do not use the Service.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Information you provide:</strong> such as contact details when you join early access or contact
          support.
        </li>
        <li>
          <strong>Information from connected services:</strong> if you connect third-party providers, we may process
          data needed to provide the Service.
        </li>
        <li>
          <strong>Usage and device data:</strong> such as approximate location (from IP), browser type, and interactions
          with the Service.
        </li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>Provide, maintain, and improve the Service.</li>
        <li>Respond to requests and provide support.</li>
        <li>Monitor, prevent, and address security issues and abuse.</li>
        <li>Communicate updates, including changes to policies.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>Service providers who help us operate the Service (for example, hosting and support tooling).</li>
        <li>Third-party providers you choose to connect, as needed to provide functionality.</li>
        <li>Law enforcement or regulators when required by law.</li>
      </ul>
      <p>We do not sell your personal information.</p>

      <h2>4. Data Retention</h2>
      <p>
        We retain information for as long as necessary to provide the Service and for legitimate business purposes, such
        as complying with legal obligations and resolving disputes.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We may use cookies and similar technologies to help the Service work and to understand usage. For more details,
        see our <Link to="/cookies">Cookie Policy</Link>.
      </p>

      <h2>6. Security</h2>
      <p>
        We use reasonable measures designed to protect information. However, no system can be guaranteed to be 100%
        secure.
      </p>

      <h2>7. Your Choices</h2>
      <ul>
        <li>You can contact us to request access, correction, or deletion of your information.</li>
        <li>You can opt out of non-essential communications by following instructions in those messages.</li>
      </ul>

      <h2>8. Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact <a href="mailto:support@chesly.app">support@chesly.app</a>.
        For EU/UK users, also see our <Link to="/gdpr">GDPR notice</Link>.
      </p>
    </LegalLayout>
  );
}

