import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  const error = event.reason;
  
  const isAbortError = error && (
    error.name === 'AbortError' ||
    error.message?.includes('aborted') ||
    error.message?.includes('AbortError') ||
    error.code === 'ABORT_ERR'
  );
  
  if (isAbortError) {
    event.preventDefault();
    return;
  }
});

createRoot(document.getElementById('root')).render(
  <App />
)
