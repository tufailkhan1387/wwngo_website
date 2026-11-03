import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LanguageProvider } from './context/LanguageContext';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Customers } from './pages/Customers';
import { Download } from './pages/Download';
import { FAQ } from './pages/FAQ';
import { Features } from './pages/Features';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Receivers } from './pages/Receivers';
import { Safety } from './pages/Safety';
import { Travelers } from './pages/Travelers';
import { Cookies } from './pages/legal/Cookies';
import { Privacy } from './pages/legal/Privacy';
import { Prohibited } from './pages/legal/Prohibited';
import { Refund } from './pages/legal/Refund';
import { SafetyRules } from './pages/legal/SafetyRules';
import { Terms } from './pages/legal/Terms';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="customers" element={<Customers />} />
            <Route path="travelers" element={<Travelers />} />
            <Route path="receivers" element={<Receivers />} />
            <Route path="features" element={<Features />} />
            <Route path="safety" element={<Safety />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="download" element={<Download />} />
            <Route path="legal/privacy" element={<Privacy />} />
            <Route path="legal/terms" element={<Terms />} />
            <Route path="legal/cookies" element={<Cookies />} />
            <Route path="legal/safety-rules" element={<SafetyRules />} />
            <Route path="legal/prohibited" element={<Prohibited />} />
            <Route path="legal/refund" element={<Refund />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
