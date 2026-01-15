
import React from 'react';
import HeroSection from './components/HeroSection';
import BiblicalParallelSection from './components/BiblicalParallelSection';
import TestimonySection from './components/TestimonySection';
import MissionSection from './components/MissionSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ContributionSection from './components/ContributionSection';
import VideoStorySection from './components/VideoStorySection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-slate-700 min-h-screen">
      <main>
        <HeroSection />
        <BiblicalParallelSection />
        <TestimonySection />
        <VideoStorySection />
        <MissionSection />
        <CtaSection />
        <ContributionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
