import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Get or create root element
const container = document.getElementById('root');

// Create root and render app
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service Worker for PWA (optional)
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {
      // Service worker registration failed, app will still work
    });
  });
}
