import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Study from './pages/Study';
import SSCCorner from './pages/SSCCorner';
import HSCCorner from './pages/HSCCorner';
import AdmissionCorner from './pages/AdmissionCorner';
import ExamCenter from './pages/ExamCenter';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Study />} />
          <Route path="/ssc" element={<SSCCorner />} />
          <Route path="/hsc" element={<HSCCorner />} />
          <Route path="/admission" element={<AdmissionCorner />} />
          <Route path="/exam" element={<ExamCenter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;