import { Navigate, Route, Routes } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import { useAuth } from './context/AuthContext';
import DashboardPage from './pages/DashboardPage';
import DeliveriesPage, {
  CancelledDeliveriesPage,
  DisputesPage,
} from './pages/DeliveriesPage';
import DeliveryDetailPage from './pages/DeliveryDetailPage';
import EscrowsPage from './pages/EscrowsPage';
import LoginPage from './pages/LoginPage';
import NfcAuditPage from './pages/NfcAuditPage';
import TripsPage from './pages/TripsPage';
import UserDetailPage from './pages/UserDetailPage';
import UsersPage from './pages/UsersPage';
import SiteRoot from './site/SiteRoot';
import { About } from './site/pages/About';
import { Contact } from './site/pages/Contact';
import { Customers } from './site/pages/Customers';
import { Download } from './site/pages/Download';
import { FAQ } from './site/pages/FAQ';
import { Features } from './site/pages/Features';
import { Home } from './site/pages/Home';
import { HowItWorks } from './site/pages/HowItWorks';
import { Receivers } from './site/pages/Receivers';
import { Safety } from './site/pages/Safety';
import { Travelers } from './site/pages/Travelers';
import { Cookies } from './site/pages/legal/Cookies';
import { Privacy } from './site/pages/legal/Privacy';
import { Prohibited } from './site/pages/legal/Prohibited';
import { Refund } from './site/pages/legal/Refund';
import { SafetyRules } from './site/pages/legal/SafetyRules';
import { Terms } from './site/pages/legal/Terms';

function ProtectedRoute({ children }) {
  const { authenticated } = useAuth();
  if (!authenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Routes>
      {/* Public marketing website */}
      <Route element={<SiteRoot />}>
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

      {/* Admin portal */}
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="users/:id" element={<UserDetailPage />} />
        <Route path="trips" element={<TripsPage />} />
        <Route path="deliveries" element={<DeliveriesPage />} />
        <Route path="deliveries/:id" element={<DeliveryDetailPage />} />
        <Route path="escrows" element={<EscrowsPage />} />
        <Route path="nfc-audit" element={<NfcAuditPage />} />
        <Route path="disputes" element={<DisputesPage />} />
        <Route path="cancelled" element={<CancelledDeliveriesPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
