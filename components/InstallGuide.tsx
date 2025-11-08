import React from 'react';

const InstallGuide: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Easy Installation Guide</h2>
          <p className="mt-4 text-lg text-gray-400">
            Get Funzu on your Android device in 3 simple steps.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="flex items-center justify-center w-20 h-20 bg-dark-card rounded-full border-2 border-primary mb-4 text-primary text-3xl font-bold">1</div>
            <h3 className="text-xl font-semibold text-white mb-2">Download File</h3>
            <p className="text-gray-400">Tap the download button on our site to get the `funzu-app.apk` file on your device.</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-center w-20 h-20 bg-dark-card rounded-full border-2 border-primary mb-4 text-primary text-3xl font-bold">2</div>
            <h3 className="text-xl font-semibold text-white mb-2">Allow Unknown Sources</h3>
            <p className="text-gray-400">Go to your phone's Settings > Security and enable "Install from Unknown Sources".</p>
          </div>
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center w-20 h-20 bg-dark-card rounded-full border-2 border-primary mb-4 text-primary text-3xl font-bold">3</div>
            <h3 className="text-xl font-semibold text-white mb-2">Install & Play</h3>
            <p className="text-gray-400">Open your file manager, tap the downloaded APK file, and follow the prompts to install.</p>
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-500 bg-dark-card/50 p-4 rounded-lg max-w-3xl mx-auto">
          <p><strong>Security Note:</strong> You need to allow "Unknown Sources" because this app is not yet on the Google Play Store. We guarantee our app is safe and secure for your device.</p>
        </div>
      </div>
    </section>
  );
};

export default InstallGuide;
