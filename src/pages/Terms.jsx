import { Link } from 'react-router-dom';
import { LegalLayout } from '../components/LegalLayout';

export function Terms() {
  return (
    <LegalLayout title="Terms of Service" updatedAt="December 12, 2025">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of Chesly&apos;s website, products, and
        services (collectively, the &quot;Service&quot;). By accessing or using the Service, you agree to these Terms.
      </p>

      <h2>1. Using Chesly</h2>
      <p>
        You must use the Service in compliance with applicable laws and these Terms. You are responsible for your use of
        the Service and any content you submit or transmit through it.
      </p>

      <h2>2. Accounts</h2>
      <p>
        If you create an account, you are responsible for maintaining the confidentiality of your account credentials and
        for all activity that occurs under your account.
      </p>

      <h2>3. Connected Accounts and Third-Party Services</h2>
      <p>
        Chesly may allow you to connect third-party services (for example, email or messaging providers). Your use of any
        third-party service is governed by that provider&apos;s terms, and Chesly is not responsible for third-party
        services.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for unlawful, harmful, or fraudulent activities.</li>
        <li>Attempt to gain unauthorized access to the Service or related systems.</li>
        <li>Interfere with or disrupt the Service, including by introducing malware.</li>
        <li>Reverse engineer or attempt to extract source code except where permitted by law.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        The Service and its content, features, and functionality are owned by Chesly and its licensors and are protected
        by intellectual property laws.
      </p>

      <h2>6. Beta / Early Access</h2>
      <p>
        Some features may be offered as beta or early access. These features may change, be discontinued, or contain
        bugs, and are provided &quot;as is&quot;.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        To the fullest extent permitted by law, the Service is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Chesly will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill.
      </p>

      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will take reasonable steps to notify
        you. Continued use of the Service after changes become effective means you accept the updated Terms.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms? Contact us at <a href="mailto:support@chesly.app">support@chesly.app</a>. For
        privacy-related questions, see our <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </LegalLayout>
  );
}

