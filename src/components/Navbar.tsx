import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import LoginModal from './LoginModal';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href='https://kafaahbd.github.io/kafaahbd/' target='_blank' className="flex-shrink-0">
              <img src="https://raw.githubusercontent.com/kafaahbd/kafaah/refs/heads/main/pics/kafaah.png" alt="Kafa'ah" className="h-10 w-auto" />
            </a>
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={() => setShowLogin(true)}
                className="px-4 py-2 bg-green-600 dark:bg-blue-600 text-white rounded-lg hover:bg-green-700 dark:hover:bg-blue-700 transition"
              >
                {t('nav.login')}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};
export default Navbar;