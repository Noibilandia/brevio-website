import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { ProblemSolution } from '../components/ProblemSolution';
import { Features } from '../components/Features';
import { ProductShowcase } from '../components/ProductShowcase';
import { HowItWorks } from '../components/HowItWorks';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Comparison } from '../components/Comparison';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { VideoModal } from '../components/VideoModal';

export function Home() {
  const location = useLocation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (!target) return;

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [location.hash]);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <>
      <Hero onWatchDemo={openVideoModal} />
      <ValueProposition />
      <ProblemSolution />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTA />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
    </>
  );
}

