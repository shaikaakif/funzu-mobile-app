import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Funzu. All rights reserved.</p>
        <p className="mt-2 text-sm">Turn Learning into an Adventure!</p>
      </div>
    </footer>
  );
};

export default Footer;
