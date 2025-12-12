import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Pricing.css';

export function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Free',
      description: 'Your unified inbox, forever free',
      price: 0,
      priceLabel: 'Free forever',
      features: [
        { text: 'Connect unlimited apps', included: true },
        { text: 'Unified inbox', included: true },
        { text: 'Basic search', included: true },
        { text: 'Mobile & desktop apps', included: true },
        { text: '30-day message history', included: true },
        { text: 'AI features', included: false },
        { text: 'Smart notifications', included: false },
      ],
      cta: 'Download Free',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'Unlock the power of AI',
      price: annual ? 9 : 12,
      priceLabel: null,
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Unlimited AI insights', included: true, highlight: true },
        { text: 'Smart AI notifications', included: true, highlight: true },
        { text: 'AI-powered search', included: true, highlight: true },
        { text: 'Custom filter rules', included: true },
        { text: 'Unlimited message history', included: true },
        { text: 'Priority support', included: true },
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Team',
      description: 'For teams that collaborate',
      price: annual ? 19 : 24,
      priceLabel: 'per user',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Unlimited team members', included: true },
        { text: 'Shared team inboxes', included: true },
        { text: 'Admin controls & roles', included: true },
        { text: 'SSO & SAML', included: true },
        { text: 'Analytics dashboard', included: true },
        { text: 'Dedicated support', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Pricing</span>
          <h2 className="section-title">
            Free to use.
            <br />
            <span className="text-gradient">Pay for AI magic.</span>
          </h2>
          <p className="section-description">
            The unified inbox is free forever. Upgrade to Pro
            to unlock AI insights, smart notifications, and AI-powered search.
          </p>
        </ScrollReveal>

        <ScrollReveal className="pricing-toggle">
          <span className={!annual ? 'active' : ''}>Monthly</span>
          <button
            className={`toggle-switch ${annual ? 'active' : ''}`}
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
          >
            <span className="toggle-slider"></span>
          </button>
          <span className={annual ? 'active' : ''}>
            Annual
            <span className="save-badge">Save 25%</span>
          </span>
        </ScrollReveal>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <ScrollReveal
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              delay={150 + index * 120}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-price">
                {plan.price === 0 ? (
                  <span className="price-free">Free</span>
                ) : (
                  <>
                    <span className="price-currency">$</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/mo</span>
                  </>
                )}
              </div>
              {plan.priceLabel && plan.price > 0 && (
                <span className="price-label">{plan.priceLabel}</span>
              )}
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`${!feature.included ? 'not-included' : ''} ${feature.highlight ? 'highlight' : ''}`}
                  >
                    {feature.included ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="x-icon">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    )}
                    {feature.text}
                    {feature.highlight && <span className="ai-badge">AI</span>}
                  </li>
                ))}
              </ul>
              <button
                className={`btn btn-lg ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="pricing-guarantees" delay={400}>
          <div className="guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Free forever plan</span>
          </div>
          <div className="guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>No credit card for free</span>
          </div>
          <div className="guarantee">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <span>Cancel anytime</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
