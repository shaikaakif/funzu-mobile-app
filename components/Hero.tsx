import React from 'react';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in-up">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tighter mb-4">
              Learning Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Leveled Up.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 mb-8">
              Funzu is a gamified learning app that turns studying into an exciting adventure. Earn rewards, level up, and enjoy interactive lessons that make learning fun, engaging, and addictive — just like your favorite game!
            </p>
            {/* 
              IMPORTANT: How to provide the APK file.
              1. Create a folder named `public` in the root of your project if it doesn't exist.
              2. Place your APK file inside the `public` folder.
              3. Rename your APK file to `funzu-app.apk`.
              The `href` attribute below points to `/funzu-app.apk`, which will correctly serve the file from the `public` directory.
            */}
            <a
              href="/funzu-app.apk"
              download
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold text-lg py-4 px-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <DownloadIcon />
              Download the APK
            </a>
          </div>
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             <div className="relative w-80 h-[550px] bg-dark-card p-4 rounded-[40px] shadow-2xl ring-2 ring-white/10">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-lg"></div>
                <img 
                    src="https://picsum.photos/seed/funzu-app/320/568" 
                    alt="Funzu App Screenshot" 
                    className="w-full h-full object-cover rounded-[28px]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
