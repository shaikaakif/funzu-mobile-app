import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InstallGuide from './components/InstallGuide';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <InstallGuide />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
