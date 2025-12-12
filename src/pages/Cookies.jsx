import { LegalLayout } from '../components/LegalLayout';

export function Cookies() {
  return (
    <LegalLayout title="Cookie Policy" updatedAt="December 12, 2025">
      <p>
        This Cookie Policy explains what cookies are and how Chesly uses them on our Service.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device. They help websites remember information about your visit,
        such as preferences and settings.
      </p>

      <h2>2. How We Use Cookies</h2>
      <ul>
        <li>
          <strong>Essential:</strong> cookies required for the Service to function.
        </li>
        <li>
          <strong>Preferences:</strong> cookies that remember your settings (when available).
        </li>
        <li>
          <strong>Analytics:</strong> cookies that help us understand how the Service is used (if enabled).
        </li>
      </ul>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control cookies through your browser settings. If you disable cookies, some features may not work
        properly.
      </p>

      <h2>4. Updates</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in technology or law.</p>
    </LegalLayout>
  );
}

