import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChatProvider } from './contexts/ChatContext';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <ChatProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ChatProvider>
    </Router>
  );
}

export default App;
