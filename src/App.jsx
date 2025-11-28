import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { VideoModal } from './components/VideoModal';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => setIsVideoModalOpen(true);
  const closeVideoModal = () => setIsVideoModalOpen(false);

  return (
    <ErrorBoundary>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main-content">
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
      </main>
      <Footer />
      <ScrollToTop />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
    </ErrorBoundary>
  );
}

export default App;
