import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-card p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const GamepadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h4m-2-2v4"/><path d="M15.5 10a2.5 2.5 0 0 1 2.5 2.5c0 .83-.5 1.5-1.25 2.12L15 16h-2l-1.25-1.38c-.75-.62-1.25-1.3-1.25-2.12A2.5 2.5 0 0 1 13 10a2.5 2.5 0 0 1 2.5 0Z"/><path d="M4 6.66V12a6 6 0 0 0 5.4 5.92L10 18v-2.08A6 6 0 0 0 4 12V6.66a2 2 0 0 1 1-1.73l4-2.3a2 2 0 0 1 2 0l4 2.3a2 2 0 0 1 1 1.73V12a6 6 0 0 0-6 6h2a6 6 0 0 0 6-6V6.66a2 2 0 0 1 1-1.73l-1.1-0.63"/><path d="m19 5-1.1.63"/></svg>
);
const TrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
);
const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
);
const LightbulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
);

const Features: React.FC = () => {
  const featureList = [
    {
      icon: <GamepadIcon />,
      title: "Gamified Learning",
      description: "Turn boring study sessions into epic quests. Our game-like interface makes every lesson an adventure."
    },
    {
      icon: <TrophyIcon />,
      title: "Earn Rewards & Level Up",
      description: "Stay motivated by earning points, unlocking badges, and leveling up your profile as you master new skills."
    },
    {
      icon: <BookIcon />,
      title: "Interactive Lessons",
      description: "Dive into dynamic lessons with quizzes, puzzles, and challenges that adapt to your learning style."
    },
    {
      icon: <LightbulbIcon />,
      title: "Fun & Engaging",
      description: "We make learning addictive in a good way! Enjoy a process so fun, you'll forget you're even studying."
    }
  ];

  return (
    <section className="py-20 bg-dark-bg/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why You'll Love Funzu</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Discover a revolutionary way to learn that's as entertaining as it is effective.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
