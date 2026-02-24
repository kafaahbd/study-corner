import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const [showMessage, setShowMessage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <i className="fas fa-times text-xl"></i>
        </button>
        <h2 className="text-2xl font-bold mb-6">{lang === 'bn' ? 'লগইন' : 'Login'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'ইমেইল' : 'Email'}</label>
            <input type="email" required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'পাসওয়ার্ড' : 'Password'}</label>
            <input type="password" required className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-white" />
          </div>
          <button type="submit" className="w-full bg-green-600 dark:bg-blue-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            {lang === 'bn' ? 'লগইন করুন' : 'Login'}
          </button>
        </form>
        {showMessage && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-md text-center">
            <p className="text-green-700 dark:text-green-400">
              <i className="fas fa-info-circle mr-2"></i>
              {lang === 'bn' ? 'এই ফিচার খুব শীঘ্রই আসছে ইনশাআল্লাহ!' : 'This feature will be available soon InshaAllah!'}
            </p>
          </div>
        )}
        <p className="text-xs text-gray-500 text-center mt-4">ডেমো মোড</p>
      </div>
    </div>
  );
};
export default LoginModal;