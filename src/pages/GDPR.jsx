import { LegalLayout } from '../components/LegalLayout';

export function GDPR() {
  return (
    <LegalLayout title="GDPR Notice" updatedAt="December 12, 2025">
      <p>
        This notice provides additional information for individuals in the European Economic Area (EEA), United Kingdom,
        and Switzerland under the General Data Protection Regulation (GDPR) and related laws.
      </p>

      <h2>1. Your Rights</h2>
      <p>Depending on your location and circumstances, you may have the right to:</p>
      <ul>
        <li>Access your personal data.</li>
        <li>Correct inaccurate or incomplete data.</li>
        <li>Request deletion of your data.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Request portability of your data.</li>
        <li>Withdraw consent where processing is based on consent.</li>
      </ul>

      <h2>2. Lawful Bases</h2>
      <p>
        We process personal data when necessary to provide the Service, comply with legal obligations, or for our
        legitimate interests (such as improving and securing the Service). In some cases, we may rely on your consent.
      </p>

      <h2>3. Contact</h2>
      <p>
        To exercise your rights, contact <a href="mailto:support@chesly.app">support@chesly.app</a>. You may also have the right to lodge a
        complaint with your local data protection authority.
      </p>
    </LegalLayout>
  );
}

