import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import 'katex/dist/katex.min.css';

const basename = '/study-corner'; // আপনার রিপোজিটরি নাম

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <HelmetProvider>
        <ThemeProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);