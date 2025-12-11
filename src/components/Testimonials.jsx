import { useState, useEffect, useCallback } from 'react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const getItemsPerView = (width) => {
  if (width <= 768) return 1;
  if (width <= 1024) return 2;
  return 3;
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(() => (
    typeof window !== 'undefined' ? getItemsPerView(window.innerWidth) : 3
  ));

  const testimonials = [
    {
      quote: "Chesly completely changed how I handle messages. I went from checking 8 apps constantly to one calm inbox. I've saved at least 2 hours every single day.",
      author: 'Sarah Chen',
      role: 'Product Manager',
      company: 'Stripe',
      avatar: 'SC',
      rating: 5,
    },
    {
      quote: "The AI summaries are incredible. Long Slack threads that used to take 10 minutes to catch up on? Now I get the key points in 10 seconds.",
      author: 'Michael Rodriguez',
      role: 'Engineering Lead',
      company: 'Notion',
      avatar: 'MR',
      rating: 5,
    },
    {
      quote: "As a founder, I was drowning in messages from investors, customers, and my team. Chesly's smart filtering means I never miss what's urgent.",
      author: 'Emily Watson',
      role: 'CEO',
      company: 'TechStart',
      avatar: 'EW',
      rating: 5,
    },
    {
      quote: "Finally, I can actually do deep work. Chesly batches my notifications intelligently so I'm not interrupted every 5 minutes. Game changer.",
      author: 'David Kim',
      role: 'Senior Developer',
      company: 'Vercel',
      avatar: 'DK',
      rating: 5,
    },
    {
      quote: "Our whole team switched to Chesly. The shared inbox feature means we never have duplicate responses. Customer support has never been smoother.",
      author: 'Lisa Thompson',
      role: 'Head of Support',
      company: 'Linear',
      avatar: 'LT',
      rating: 5,
    },
    {
      quote: "I was skeptical about another productivity tool. But Chesly is different—it actually reduces the tools I need. My inbox is finally under control.",
      author: 'James Park',
      role: 'Freelance Designer',
      company: 'Independent',
      avatar: 'JP',
      rating: 5,
    },
  ];

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  useEffect(() => {
    const handleResize = () => {
      const next = getItemsPerView(window.innerWidth);
      setItemsPerView((prev) => (prev === next ? prev : next));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, maxIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="section testimonials">
      <div className="testimonials-bg">
        <div className="testimonials-gradient"></div>
      </div>

      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            People are reclaiming
            <br />
            <span className="text-gradient">hours every week</span>
          </h2>
          <p className="section-description">
            Join thousands who've escaped notification chaos
            and found focus with Chesly.
          </p>
        </ScrollReveal>

        <ScrollReveal className="testimonials-carousel-wrapper" delay={200}>
          <div
            className="testimonials-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={goToPrev}
              aria-label="Previous testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="testimonials-track-container">
              <div
                className="testimonials-track"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.author} className="testimonial-card">
                    <div className="testimonial-rating" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="testimonial-quote">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="testimonial-author">
                      <div className="author-avatar" aria-hidden="true">
                        {testimonial.avatar}
                      </div>
                      <div className="author-info">
                        <span className="author-name">{testimonial.author}</span>
                        <span className="author-role">
                          {testimonial.role}, {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="carousel-btn carousel-btn-next"
              onClick={goToNext}
              aria-label="Next testimonials"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="carousel-indicators" role="tablist" aria-label="Testimonial pages">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                className={`carousel-indicator ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial page ${i + 1}`}
                aria-selected={i === currentIndex}
                role="tab"
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="testimonials-stats" delay={400}>
          <div className="testimonial-stat">
            <span className="stat-number">4.9</span>
            <div className="stat-stars" aria-label="4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="stat-text">Average rating</span>
          </div>
          <div className="testimonial-stat">
            <span className="stat-number">5+ hrs</span>
            <span className="stat-text">Saved per week</span>
          </div>
          <div className="testimonial-stat">
            <span className="stat-number">25K+</span>
            <span className="stat-text">Happy users</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
