import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { useLocale } from './i18n'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'

function AppShell() {
  const { t } = useLocale()

  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        {t('skipToContent')}
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default function App() {
  return <AppShell />
}
