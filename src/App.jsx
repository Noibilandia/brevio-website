import { ErrorBoundary } from './components/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Cookies } from './pages/Cookies';
import { Security } from './pages/Security';
import { GDPR } from './pages/GDPR';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="security" element={<Security />} />
          <Route path="gdpr" element={<GDPR />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
