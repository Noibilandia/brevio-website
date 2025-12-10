import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './FAQ.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Which messaging apps does Chesly support?',
      answer: 'Chesly integrates with 50+ apps including Slack, Gmail, WhatsApp, Discord, Microsoft Teams, Telegram, iMessage, Facebook Messenger, LinkedIn messages, and many more. We\'re constantly adding new integrations based on user requests.',
    },
    {
      question: 'How does the AI summarization work?',
      answer: 'Our AI reads through long message threads and extracts the key points, action items, and important decisions. You can customize what the AI focuses on—urgent requests, mentions of you, deadlines, or specific topics you care about.',
    },
    {
      question: 'Is my message data secure and private?',
      answer: 'Security is our top priority. We use end-to-end encryption, are SOC2 Type II certified, and GDPR compliant. Your messages are processed securely and never used to train AI models. We don\'t store message content longer than necessary for the service.',
    },
    {
      question: 'Can I reply to messages directly from Chesly?',
      answer: 'Yes! You can reply to Slack messages, emails, WhatsApp, and more—all without leaving Chesly. Your replies are sent through the original platform, so the conversation continues naturally.',
    },
    {
      question: 'How does the free trial work?',
      answer: 'Start with a 14-day free trial of our Pro plan—no credit card required. You\'ll have access to unlimited AI summaries, all integrations, and smart notification features. Downgrade to Free or upgrade to Team anytime.',
    },
    {
      question: 'Will Chesly work with my company\'s existing tools?',
      answer: 'Chesly is designed to work alongside your existing setup. It connects to your apps via official APIs and doesn\'t require any changes to how your team currently uses Slack, email, or other tools.',
    },
    {
      question: 'Can I customize which notifications I receive?',
      answer: 'Absolutely. You can set rules based on sender, app, keywords, time of day, and more. Want AI summaries for Slack but instant notifications for email from your boss? You can configure that.',
    },
    {
      question: 'Does Chesly have mobile apps?',
      answer: 'Yes! We have native apps for iOS and Android that sync seamlessly with the desktop version. Your unified inbox and AI summaries are available wherever you are.',
    },
    {
      question: 'How is Chesly different from email clients with unified inbox?',
      answer: 'Traditional unified inboxes just aggregate messages. Chesly goes further with AI summarization, smart notification batching, cross-app search, and the ability to reply to any platform from one place. Plus, we support way more than just email.',
    },
    {
      question: 'Can I use Chesly with my team?',
      answer: 'Yes! Our Team plan includes shared inboxes, so your whole team can collaborate on customer messages, support requests, or any shared communication. Admin controls let you manage access and permissions.',
    },
  ];

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">
            Frequently asked
            <br />
            <span className="text-gradient">questions</span>
          </h2>
          <p className="section-description">
            Got questions? We've got answers. If you don't find what you're
            looking for, our support team is always happy to help.
          </p>
        </ScrollReveal>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                delay={index * 50}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="faq-contact" delay={500}>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Still have questions?</h3>
              <p>Can't find the answer you're looking for? Our friendly team is here to help.</p>
              <a href="mailto:support@brevio.app" className="btn btn-secondary">
                Contact Support
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
