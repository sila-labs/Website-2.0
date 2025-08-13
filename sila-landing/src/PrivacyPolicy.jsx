// src/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">
          Effective date: August 2025 • Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="space-y-6">
          <p>
            At Sila Labs (“we,” “us,” or “our”), we respect your privacy. This policy explains what information
            we collect, how we use it, and your choices. This website is primarily informational and minimal by design.
          </p>

          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-medium">Information you provide:</span> If you contact us by email, we
              receive your email address and any information you include in the message.
            </li>
            <li>
              <span className="font-medium">No account or form data:</span> We do not operate user accounts or
              collect form submissions on this site at this time.
            </li>
            <li>
              <span className="font-medium">Analytics and cookies:</span> We do not use analytics or tracking
              cookies by default. If we add analytics in the future, this policy will be updated before use.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">How We Use Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To respond to inquiries and provide requested information.</li>
            <li>To maintain and improve the website’s reliability and security.</li>
          </ul>

          <h2 className="text-2xl font-semibold">Sharing of Information</h2>
          <p>
            We do not sell your personal information. We may share information only as required by law, to
            protect our rights, or with service providers who assist us in operating the site (bound by confidentiality
            and limited-use obligations).
          </p>

          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p>
            We retain email communications for as long as necessary to address your inquiry and for reasonable
            business or legal purposes, after which we delete or anonymize them.
          </p>

          <h2 className="text-2xl font-semibold">Security</h2>
          <p>
            We use reasonable administrative and technical safeguards. However, no method of transmission or
            storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              You may contact us to request deletion of prior email correspondence you have sent to us.
            </li>
            <li>
              If we add analytics/cookies later, you will be able to opt out or manage preferences; this
              policy will reflect those controls.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold">Third-Party Links</h2>
          <p>
            Our site may link to third‑party websites or tools (for example, external demos). We are not
            responsible for the privacy practices of those sites. Review their policies for details.
          </p>

          <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect personal
            information from children.
          </p>

          <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The “Effective date” above indicates when the latest
            version took effect.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            Questions about this policy? Email us at{" "}
            <a
              href="mailto:operations.sila.labs@gmail.com"
              className="text-green-600 hover:underline"
            >
              operations.sila.labs@gmail.com
            </a>.
          </p>

          <div className="pt-8">
            <Link to="/" className="text-sm text-gray-600 hover:text-green-700 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
