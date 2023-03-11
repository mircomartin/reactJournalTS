import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context';
import { JournalApp } from './JournalApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <JournalApp />    
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
