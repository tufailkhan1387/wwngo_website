import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/layout/Layout';
import './styles/global.css';
import './styles/layout.css';
import './styles/pages.css';

export default function SiteRoot() {
  return (
    <LanguageProvider>
      <Layout />
    </LanguageProvider>
  );
}
