import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import LiveScores from './components/LiveScores';

function App() {
  return (
    <div className="min-h-screen bg-[#E2F1FB] font-inter">
      <Navbar />
      <Hero />
      <Sponsors />
      <LiveScores />
    </div>
  );
}

export default App;
