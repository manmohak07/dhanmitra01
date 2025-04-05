import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarEnhanced from './components/NavbarEnhanced';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import InvestmentRoadmap from './pages/InvestmentRoadmap';
import SavedRoadmaps from './pages/SavedRoadmaps';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import BankDetail from './pages/BankDetail';
import SearchResults from './pages/SearchResults';
import Profile from './pages/Profile';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TaxSavingPage from './pages/TaxSaving';
import FixedDepositPage from './pages/FixedDeposit';
import CompareFDRates from './pages/CompareFDRates';
import EPFLandingPage from './pages/epf';
import EPFForm13Page from './pages/epf/form-13';
import EPFPaymentOnlinePage from './pages/epf/payment-online';
import EPFNameChangePage from './pages/epf/name-change';
import EPFForm31Page from './pages/epf/form-31';
import EPFOLoginPortalPage from './pages/epf/login-portal';
import PFForm19Page from './pages/epf/form-19';
import EPFForm11Page from './pages/epf/form-11';
import TDSOnPFWithdrawalPage from './pages/epf/tds-withdrawal';
import EPFForm10CPage from './pages/epf/form-10c';
import EPFPassbookDownloadPage from './pages/epf/passbook-download';
import EPFClaimStatusPage from './pages/epf/claim-status';
import PFCalculationPage from './pages/epf/pf-calculation';
import EPFDocumentationPage from './pages/epf/documentation';
// NPS Pages
import NPSLandingPage from './pages/nps';
import NPSOverviewPage from './pages/nps/overview';
import NPSAccountTypesPage from './pages/nps/account-types';
import NPSTaxBenefitsPage from './pages/nps/tax-benefits';
import NPSRegistrationPage from './pages/nps/online-registration';
import NPSInvestmentOptionsPage from './pages/nps/investment-options';
import NPSWithdrawalRulesPage from './pages/nps/withdrawal-rules';
import NPSCalculatorPage from './pages/nps/calculator';
import NPSCorporateModelPage from './pages/nps/corporate-model';
import NPSPranCardPage from './pages/nps/pran-card';
import NPSExitOptionsPage from './pages/nps/exit-options';
import NPSPerformancePage from './pages/nps/performance';
import { UserProvider } from './contexts/UserContext';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './components/Toast';

function App() {
  console.log('App component rendering');
  
  return (
    <ErrorBoundary>
      <ToastProvider>
        <UserProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
              <NavbarEnhanced />
              <main className="container mx-auto px-4 py-8 flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/investment-roadmap" element={<InvestmentRoadmap />} />
                  <Route path="/saved-roadmaps" element={<SavedRoadmaps />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/bank/:bankId" element={<BankDetail />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/tax-saving" element={<TaxSavingPage />} />
                  <Route path="/fixed-deposit" element={<FixedDepositPage />} />
                  <Route path="/compare-fd-rates" element={<CompareFDRates />} />
                  {/* EPF Routes */}
                  <Route path="/epf" element={<EPFLandingPage />} />
                  <Route path="/epf/form-13" element={<EPFForm13Page />} />
                  <Route path="/epf/payment-online" element={<EPFPaymentOnlinePage />} />
                  <Route path="/epf/name-change" element={<EPFNameChangePage />} />
                  <Route path="/epf/form-31" element={<EPFForm31Page />} />
                  <Route path="/epf/login-portal" element={<EPFOLoginPortalPage />} />
                  <Route path="/epf/form-19" element={<PFForm19Page />} />
                  <Route path="/epf/form-11" element={<EPFForm11Page />} />
                  <Route path="/epf/tds-withdrawal" element={<TDSOnPFWithdrawalPage />} />
                  <Route path="/epf/form-10c" element={<EPFForm10CPage />} />
                  <Route path="/epf/passbook-download" element={<EPFPassbookDownloadPage />} />
                  <Route path="/epf/claim-status" element={<EPFClaimStatusPage />} />
                  <Route path="/epf/pf-calculation" element={<PFCalculationPage />} />
                  <Route path="/epf/documentation" element={<EPFDocumentationPage />} />
                  
                  {/* NPS Routes */}
                  <Route path="/nps" element={<NPSLandingPage />} />
                  <Route path="/nps/overview" element={<NPSOverviewPage />} />
                  <Route path="/nps/account-types" element={<NPSAccountTypesPage />} />
                  <Route path="/nps/tax-benefits" element={<NPSTaxBenefitsPage />} />
                  <Route path="/nps/online-registration" element={<NPSRegistrationPage />} />
                  <Route path="/nps/investment-options" element={<NPSInvestmentOptionsPage />} />
                  <Route path="/nps/withdrawal-rules" element={<NPSWithdrawalRulesPage />} />
                  <Route path="/nps/calculator" element={<NPSCalculatorPage />} />
                  <Route path="/nps/corporate-model" element={<NPSCorporateModelPage />} />
                  <Route path="/nps/pran-card" element={<NPSPranCardPage />} />
                  <Route path="/nps/exit-options" element={<NPSExitOptionsPage />} />
                  <Route path="/nps/performance" element={<NPSPerformancePage />} />
                </Routes>
              </main>
              <Footer />
              <ScrollToTop />
            </div>
          </Router>
        </UserProvider>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;