import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { TreatmentsPage } from './pages/TreatmentsPage';
import { CasesPage } from './pages/CasesPage';
import { AboutPage } from './pages/AboutPage';
import { AgendaPage } from './pages/AgendaPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FCFBFE] text-[#292735] font-sans selection:bg-[#D9C9F4] selection:text-[#4C2E78]">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tratamientos" element={<TreatmentsPage />} />
            <Route path="/casos" element={<CasesPage />} />
            <Route path="/sobre-la-doctora" element={<AboutPage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}
