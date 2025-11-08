import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Funzu
        </h1>
        <a
          href="/funzu-app.apk"
          download
          className="hidden sm:inline-block bg-secondary hover:bg-secondary-hover text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Header;
